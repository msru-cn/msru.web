# 客户定制化与信息清理指南 (Quickstart & Customization)

本指南专为需要将当前代码库（原为 **MSRU Platform 官方门户与边缘 CMS 节点**）改造为**您的企业或客户专属官网与分布式 CMS 节点**的开发者准备。跟着这 6 步，您可以极速清理掉默认的 MSRU 品牌信息，完成专属定制开发。

---

## 📋 定制化清理清单 (6 步完成换肤与初始化)

### 第 1 步：替换全局 SEO 元数据与品牌标识
1. 打开 **[`lib/metadata.ts`](file:///Users/mac_1/msru.web/lib/metadata.ts)**：
   - 将 `siteName = "MSRU Platform"` 替换为您客户的品牌名称（如 `"Acme Corp"`）。
   - 修改默认的 `description` 与 `metadataBase`（替换为客户的真实生产域名）。
2. 替换静态资源 **`public/`** 目录下的图标与 Logo：
   - `public/favicon.ico` 与 `public/apple-touch-icon.png`
   - `public/logo.svg`（或顶部导航使用的品牌图标资源）

---

### 第 2 步：配置导航菜单与页脚信息
1. 打开 **[`lib/content/nav-model.ts`](file:///Users/mac_1/msru.web/lib/content/nav-model.ts)** 和 **[`lib/content/navigation.ts`](file:///Users/mac_1/msru.web/lib/content/navigation.ts)**：
   - 修改 `headerNav`（顶部菜单列表）为客户的产品栏目或服务分类。
   - 修改 `footerNav`（底部栏目链接）。
2. 打开 **[`components/apple-footer.tsx`](file:///Users/mac_1/msru.web/components/apple-footer.tsx)**：
   - 修改底部的版权申明文字（例如将 `© 2026 MSRU Platform` 替换为 `© 2026 客户公司名称 保留所有权利`）。
   - 替换公安备案号、ICP 备案号等中国区合规信息（如有需）。

---

### 第 3 步：清理与配置默认营销页面 (JSON / SDUI)
当前项目在 **`content/marketing/pages/`** 下内置了多套默认页面：
- `home.json` —— 对应官网首页 `/`
- `pricing.json` —— 对应定价页 `/pricing`
- `products/mes.json` 等 —— 对应各子产品介绍页

**定制选择：**
- **方案 A（本地静态管理）**：直接编辑这些 `.json` 文件，使用内置的 `hero`, `statBand`, `bento`, `splitMedia` 等各类 Liquid Glass 组件替换文案与图片。
- **方案 B（Headless CMS 全动态驱动）**：您可以清空或删除不需要的默认 JSON 文件。后续完全通过中心的 `/api/cms` 同步接口（调用 `upsert_marketing`），实时把客户的页面推送到数据库中呈现。

---

### 第 4 步：清理与重置技术文档站 (`content/docs/`)
文档中心基于 **Fumadocs** 构建，文件存放在 **`content/docs/`** 下。
1. 清理默认的 MSRU 工业产品文档目录（如 `content/docs/mes/`, `content/docs/iot/` 等）。
2. 编辑 **`content/docs/meta.json`** 及子目录下的 `meta.json`，重写左侧边栏导航层级。
3. 您同样可以通过 API 的 `upsert_docs` 指令，从中心化 CMS 实时推送并动态编译客户的技术手册。

---

### 第 5 步：配置高强度安全密钥及环境变量 (`.env`)
在项目根目录复制一份环境配置并填入您的定制密钥：
```bash
cp .env.example .env
```
修改或在 Coolify 环境变量中配置：
```env
# 1. 边缘节点接收 Headless CMS 实时推送必须配置的密钥
CMS_API_KEY=your_secure_random_token_64_chars_hex_string

# 2. 如果开启 AI 智能客服问答助手 (可选)
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_BASE_URL=https://api.openai.com/v1
```

---

### 第 6 步：清理本地历史数据库 (`data/*.db`)
如果您此前在本地运行过项目且产生了测试数据，请在重新启动前删除旧数据库文件以获取全新的干净环境：
```bash
rm -rf data/*.db
```

---

## 🛠 验证与本地启动

完成上述清理和定制修改后，请运行以下验证指令确保项目通过全部严格类型检查和规范要求：

```bash
# 1. 格式化并检查静态规范
pnpm format && pnpm lint

# 2. 重新生成路由与 TS 类型声明并检查
pnpm check-types

# 3. 运行自动化单元测试
pnpm test

# 4. 启动本地服务查看全新页面效果 (http://localhost:3007)
pnpm dev
```

恭喜！您的专属定制门户与分布式边缘 Headless CMS 节点已准备就绪，可随时通过 Coolify 或 Docker 容器部署至生产环境。
