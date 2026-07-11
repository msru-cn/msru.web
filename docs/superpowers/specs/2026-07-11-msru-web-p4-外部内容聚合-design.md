# msru.web P4 · 外部 MDX 仓聚合（External Content Aggregation）设计

- 日期：2026-07-11
- 状态：待用户审阅
- 前置：P0-P3 已落地（远程拉取 + ISR + revalidate webhook 链路已实证零构建更新）
- 定位：把已打通的「自控内容仓」链路，扩展为可聚合**外部 GitHub 文档/图书仓**的知识聚合能力，作为 msru.web 前端架构的差异化特色。

## 1. 背景与目标

现状（P2 已实证）：msru.web 能从 `raw.githubusercontent.com/<repo>/<branch>/<slug>.mdx` 运行时拉取单个 MDX，经 `compileMDX` 编译，配合 ISR（`/c/[[...slug]]`，revalidate 60s）与 `/api/revalidate` webhook（`x-revalidate-secret` 头校验 → `revalidateTag`）实现秒/分钟级、零 build 的内容更新。自控内容仓 `msru-cn/msru-content` 已建，`/c/products/mes` 已跑通。

用户目标（经澄清）：不是自己写所有文档，而是**把开源世界大量现成的 MDX/MD 文档/图书仓聚合进来**——尤其前端技术文档，"大家你抄我我抄你"，组件高度趋同、可复用。fork 或引用外部仓，上游更新时本站同步更新；导航按上游目录结构解析；组件靠映射 Fumadocs 标准组件解决；不支持的优雅降级并**回收信号反哺组件库，使解析度随使用单调上升**。合规靠"不让 fork 的就不碰"。

一句话：让 msru.web 能把一个外部 GitHub 文档/图书仓（fork 到 msru-cn 的快照），按它自己的目录结构解析成导航、把它的 markdown 与标准组件渲染出来，不支持的东西永不崩溃地降级并留痕，全程沿用已打通的远程拉取 + ISR 零构建链路。

### 明确不做（YAGNI / 已否决）

- **不做整站镜像**（连上游的目录/导航/私有组件/构建配置全家桶搬过来）。太重、太脆、合规风险高。只做"按上游目录解析 + 标准组件渲染 + 降级"。
- **不 import 上游私有模块**。`compileMDX` 无法解析相对 import，任何 `import`/`export` 语句在编译前主动中和。
- **不追求秒级实时**。文档聚合是分钟级最终一致系统，依赖 ISR 窗口自愈，不与 GitHub raw CDN 抢那几秒。
- **不把派生产物写回 fork**。导航模型、meta 补丁等一律在 msru.web 侧计算，fork 保持上游纯镜像，保证 sync 永远是无冲突 fast-forward。
- **不做 live 直引为默认**。默认 fork 快照；live 仅对自己/完全信任的源开放。

## 2. 五根柱子（架构总览）

聚合能力由五个决策点支撑，均已与用户逐条确认：

1. **白名单**：聚合的唯一入口 + 合规闸。加源 = 人工拍板 fork + 登记一条。
2. **接入模式**：默认 fork 快照（控制权/回滚/合规责任在己），live 仅信任源。
3. **组件墙**：四级降级（规范映射 → 未知标签 Proxy 透传 children → 代码化 → 台账反哺），全程不崩、覆盖率随使用上升。
4. **导航解析**：三档适配器（上游清单 → frontmatter 排序 → 文件树）归一化到统一 NavModel，全程 msru.web 侧计算，不污染 fork。
5. **同步引擎**：fork 内 GitHub Actions 定时 fast-forward → git diff 出变动 slug → 精准打已有 revalidate webhook → ISR 自愈 → 出事 revert sync commit 回滚。

外部源路由统一挂 `/k/<sourceId>/<...slug>`（k = knowledge），与自控内容 `/c/` 分开，一眼区分。

## 3. 柱子一 —— 白名单（合规闸 + 单一真理源）

`content/aggregation-sources.ts` 是"聚合了哪些外部源"的唯一真理源，也是合规闸。不在表内的仓一律不碰。加源这个显式动作 = 人（你）判断可不可 fork、fork 后登记一条，人工拍板就发生在这一刻。

数据模型（每条源）：

```ts
export interface AggregationSource {
  id: string;            // 路由前缀，如 "nextjs"；决定 /k/<id>/...
  repo: string;          // fork 后的仓，如 "msru-cn/next-docs-fork"
  branch: string;        // 如 "main"
  contentDir: string;    // mdx 所在子目录，如 "docs"（相对仓根，拼进 raw url）
  mode: "snapshot" | "live";   // 默认 snapshot（指向 fork）；live 仅信任源
  upstream?: string;     // 原始上游 owner/repo（snapshot 记录来源、live 直连）
  license: string;       // SPDX 标识或自由文本，如 "MIT" / "CC-BY-4.0"
  attribution: {
    text: string;        // 署名文本，如 "Source: Next.js docs (Vercel), MIT"
    originBaseUrl: string; // 原文 base，用于每页页脚"查看原文"深链
  };
  navOverride?: NavNode[]; // 可选：导航硬猜时的人工覆盖（补在此，不写回 fork）
}
```

`raw` 拼接：`https://raw.githubusercontent.com/${repo}/${branch}/${contentDir}/${slug}.mdx`。渲染时页脚强制挂 `attribution`（license + 查看原文深链），这是再发布合规的显式履约。

## 4. 柱子二 —— 接入模式（fork 快照默认）

**snapshot（默认）**：外部仓先 fork 进 msru-cn，`repo` 指向自己的 fork。控制权、回滚能力、"我明确接纳了这个版本"的合规责任都在己。上游任何抖动（改结构/删文/被注入）都不会未经你同意就经 msru.web 域名对外发出。代价是需要一个同步动作（柱子五的定时 Actions 承担）。

**live（受限）**：`repo` 直指上游，人家 push 你跟着变，零维护。**仅对自己的仓或完全信任的源开放**。理由：msru.web 是对外商业站点，上游抖动会变成你域名下的事故与你的 license 责任，live 省下的那点"实时"远不抵让出的控制权与责任面。

## 5. 柱子三 —— 组件墙（四级降级 + 台账反哺）

核心升级（用户洞察）：不是"抛链接止损"，而是**永不崩溃地渲染出东西**，同时把"没解析出来的"变成可回收信号，定期回看补进组件库——从"止损线"升级为"棘轮"，覆盖率只涨不跌。

MDX 的两类崩溃点分开治：

**（a）顶部 import/export 语句** —— 这是编译问题而非渲染问题。`compileMDX` 会真去解析 `import Foo from '../foo'`，找不到文件整篇挂掉。编译**前**用 remark/正则预处理，主动剥离或替换 import/export 为 no-op。这是"强解原文"能成立的前提，不能靠"希望文档里没有 import"。

**（b）组件标签** —— 四级降级，按优先级：

1. **规范组件映射 + 语义别名替代**：给 `compileMDX` 注入组件映射表，把上游标准组件映射到 msru.web vendored 的 fumadocs-ui 组件。并建**语义别名表**：上游的 `<Note>`/`<Aside>`/`<Warning>` 本质都是 `<Callout>` 换名，收敛到本站规范组件——即"用我们的组件智能化替代"。文档组件就那十来个、生态互抄，这一层能吃下大多数。
2. **未知标签 Proxy 透传 children**：任何不认识的标签路由到一个兜底 Proxy 组件，**第一优先透传 children**——因为很多私有组件价值恰在它包住的正文（`<AppOnly>这里是真文档</AppOnly>`），直接代码化会把真内容藏起来。永不抛错。
3. **代码化展示**：仅当未知标签**无可渲染 children、或 children 渲染也失败**时，退到原样代码块展示其源码。这是最后一档，不是第一档。透传 > 代码化。
4. **台账反哺**：每次命中未知标签，记一笔到**未知组件台账** `{sourceId, slug, tagName, count}`。这是棘轮的刻度尺——跨多个源高频出现的标签优先建映射/语义替代。没有台账，"收集→反哺"只是口号、没有数据落点。

合规补记：把私有组件源码当代码块展示仍属"再发布人家的代码"，但不新增风险——照样被白名单 + 署名那道闸管着，fork 得进来的已过闸。

标题三级兜底（同理归一化）：`frontmatter.title` > 正文首个 `# H1` > 文件名人性化。

## 6. 柱子四 —— 导航解析（三档适配器 → NavModel）

**铁律：导航永远在 msru.web 侧运行时/同步时"算"出来，绝不写回 fork。** 若把生成的 meta.json 写回 fork，下次上游更新 sync 时会与你塞入的文件产生合并冲突，fork 越用越脏，废掉"零维护镜像"初衷。因此导航是我们侧的派生产物（内存 NavModel，可缓存，不落内容仓）。

三档适配器，按优先级降级，**三档吐出同一个 NavModel**（与组件墙同一"适配器归一化"思路——上游格式千奇百怪，归一化到我们一个规范模型）：

1. **上游显式清单**：一组适配器认识不同生态格式——Fumadocs `meta.json`、GitBook/mdBook `SUMMARY.md`、Docusaurus `sidebars`、`_sidebar.md` 等。认识哪个读哪个。
2. **frontmatter 排序键**（最常见、易漏）：大量文档顺序既不在中央清单也不靠文件名，而写在每篇头部——Docusaurus `sidebar_position`、Hugo `weight`、Jekyll `nav_order`。无中央清单时先看 frontmatter 排序意图。**缺这一档，纯字母序会把 `advanced.mdx` 排到 `intro.mdx` 前面。**
3. **兜底文件树**：字母序 + 过滤垃圾（README/CHANGELOG/LICENSE 等非正文自动踢除，除非被清单显式引用）。

NavModel（统一模型）：

```ts
export interface NavNode {
  title: string;
  slug?: string;        // 叶子有 slug（映射到 /k/<sourceId>/<slug>）
  children?: NavNode[]; // 分组有 children
  order?: number;       // 归一化后的排序值
}
```

**降级留痕反哺**：每次降到第三档（纯靠文件树猜），记台账"此源无可用导航清单"。时间一长即知哪些源导航是硬猜的、值得手动补 `navOverride`（补在白名单表，不写回 fork）。

## 7. 柱子五 —— 同步引擎

回答三问：谁拉、拉了怎么让站点知道、出事怎么办。

**（1）谁拉 —— GitHub 原生 fork sync，不自造。** fork 仓内放一个 scheduled GitHub Actions：`git fetch upstream && merge --ff-only`，把上游新提交快进进 fork。官方支持、无需自建同步服务器、无需本地常驻。频率用户定（日/周）。因"绝不写回 fork"，永远是无冲突纯快进。手动同步保留：GitHub "Sync fork" 按钮或 `gh` 命令。

**（2）怎么让站点零构建刷新 —— 复用已跑通链路，只升级粒度。** sync workflow 末步 POST 已实证的 `/api/revalidate`（带 `x-revalidate-secret`）。从单篇到整仓的升级点：现 webhook 按单 slug 失效（`mdx:products/mes`），整仓同步时不知上游动了哪几篇。**推荐精准方案**：sync 步骤 `git diff` 出实际变动文件列表，只对这些 slug 发失效（省缓存 + 顺带喂台账"这次动了哪些页"）。对应 `revalidate-auth.ts` / `/api/revalidate` 已在，只需扩展为"支持传一批 slug"。（粗暴备选：按 source 失效整前缀 `knowledge:<sourceId>`。）

**（3）出事怎么办 —— ISR 自愈 + 快照回滚。**
- **CDN 延迟自愈**：GitHub raw CDN 有数分钟旧缓存，整仓 N 篇时过早敲 webhook 会把旧内容缓存回去（P2 单篇已踩过）。不跟 CDN 抢秒——依赖 ISR stale-while-revalidate 窗口，下一轮自愈。分钟级最终一致符合产品定位。
- **快照回滚**：fork 每次 sync 是一个 commit。上游某次更新搞坏内容（结构乱/塞脏东西），`git revert` fork 那个 sync commit + 再敲 revalidate，站点立刻回上一个好版本。这是 live 直引给不了的安全网，也是选 fork 快照的核心回报。

## 8. 与既有架构的衔接

- **复用 P2**：`lib/content/remote-mdx.ts` 的拉取 + `unstable_cache` + `cacheTagFor` 直接复用，扩展 raw url 拼接支持 `contentDir`。
- **复用 P2 webhook**：`/api/revalidate` + `revalidate-auth.ts` 扩展为多 slug。
- **新增路由**：`app/(content)/k/[sourceId]/[[...slug]]/page.tsx`，与 `/c/` 平行，同样 ISR + dynamicParams。
- **组件墙依赖 P0 vendored fumadocs-ui**：映射目标就是 `components/ui/` 下已 vendored 的组件。
- **可选喂 P3 gen UI**：聚合来的知识后续可作为 gen UI 检索源（本期不做，留接口）。

## 9. 风险与边界

- **合规是硬闸非技术问题**：加源人工拍板 + 白名单 + 强制署名页脚。禁止 fork 的源不碰。这条不可自动化绕过。
- **组件墙覆盖率是渐进的**：初期未知标签会较多，靠台账反哺爬升。不追求首日全覆盖。
- **导航硬猜的源**：靠台账识别 + `navOverride` 人工补。
- **上游漂移**：snapshot + revert 兜底；live 源自担风险，仅限信任源。

## 10. 交付物（P4 阶段拆解，详见对应 plan）

- **P4-T1** 白名单数据模型 + 源解析（`aggregation-sources.ts` + raw url 拼接扩展）。
- **P4-T2** import/export 中和 + 组件映射表 + 语义别名表 + 未知标签 Proxy（透传→代码化）+ 未知组件台账。
- **P4-T3** 导航三档适配器 → NavModel 归一化 + 降级留痕。
- **P4-T4** `/k/[sourceId]/[[...slug]]` 路由（渲染 + 署名页脚 + 侧边导航）。
- **P4-T5** revalidate webhook 扩展多 slug。
- **P4-T6** fork sync GitHub Actions 模板（git diff → 精准失效）+ 端到端：fork 一个真实小型文档仓、登记、访问、改上游、sync、验证零构建更新。

## Self-Review

**Spec coverage：** 五根柱子逐一对应用户五个已确认决策点（白名单/fork快照/组件四级降级/导航三档/同步引擎），并纳入用户两个关键洞察（强解原文而非抛链接的棘轮反馈、用本站组件语义替代上游组件）。"不写回 fork"作为贯穿 4/6/7 的核心纪律显式钉死。

**依赖一致性：** 复用 P2 `remote-mdx.ts`/`unstable_cache`/`cacheTagFor`/`/api/revalidate`/`revalidate-auth.ts` 与 P0 vendored `components/ui/`，均为已存在产物；新增仅路由 `/k/` 与聚合专属模块，与 `/c/` 平行不冲突。

**边界清晰：** 明确不做整站镜像、不 import 私有模块、不追求秒级、不写回 fork、live 非默认——每条给出理由。合规定性为不可自动化绕过的人工硬闸。
