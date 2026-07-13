Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/announcements/

Published Time: Thu, 09 Jul 2026 17:47:45 GMT

Markdown Content:
## 公告

**提醒：** 注册 Foundry Newsletter，将平台的新产品、功能和改进摘要直接发送到你的收件箱。有关如何订阅的更多信息，参见 [Foundry Newsletter and Product Feedback channels announcement](https://www.palantir.com/docs/foundry/announcements/2023-11/#foundry-newsletter-and-product-feedback-channels-available-for-sign-up-now-ga)。

在我们的 [Developer Community Forum ↗](https://community.palantir.com/c/announcements/6) 中分享你对这些公告的看法。

* * *

## 构建、配置和发布专业代码 agents

发布日期：2026-07-09

Foundry 现在让构建、配置和发布 [pro-code agents](https://www.palantir.com/docs/foundry/agents/overview/) 变得更容易。Agents 将大语言模型与你的 Foundry 数据和工具结合。它们可以读写 Ontology 数据、修复失败的构建或将遗留系统迁移到 Foundry。Agents 现在开箱即用就支持通过 Ontology SDK（OSDK）、Ontology MCP（OMCP）和 Palantir MCP 进行范围权限认证，你不再需要传递 client ID 和 secret 来调用工具。发布 agent 后，你可以从 Workshop 或 OSDK 调用它，无需额外配置。

![Image 1: An agent template repository with a landing page to guide you through building your agent.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-09-133715-agent-flows-agent-flows-2-pn.png)

_一个 agent 模板仓库，带有引导你构建 agent 的落地页。_

### 新功能

#### 开箱即用的范围权限

Agents 通过 OSDK、OMCP 和 Palantir MCP 自动进行 [scoped permissions](https://www.palantir.com/docs/foundry/agents/scoped-permissions/) 认证。你不再需要手动配置客户端凭证，也不需要提供 client ID、secret 或 Foundry token 来使用工具。

#### Claude Agent SDK、OpenAI Agents SDK 和 Google ADK 模板

从 Claude Agent SDK、OpenAI Agents SDK 或 Google Agent Development Kit（ADK）的 [agent template](https://www.palantir.com/docs/foundry/agents/agent-templates/) 创建你的 agent。每个模板都附带简化的 Ontology MCP、Palantir MCP 和 Ontology SDK 客户端配置，通用设置已移入库中。创建 agent 后，引导式演练会带你完成后续步骤。

#### Ontology 绑定和 agent API 名称

每个 agent 都 [published](https://www.palantir.com/docs/foundry/agents/publish-and-call/) 时带有 Ontology 绑定和 agent API 名称，使其 function 可以同时从 Workshop 和 Ontology SDK 调用，无需额外配置。

![Image 2: The agent configuration page where you can bind your agent to an Ontology and assign it an API name.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-09-133719-agent-flows-agent-flows-pn.png)

_Agent 配置页面，你可以将 agent 绑定到 Ontology 并分配 API 名称。_

#### 使用 Continue 构建 agent

将 Palantir MCP 与 Continue 配合使用，[directly from your editor](https://www.palantir.com/docs/foundry/agents/build-agent-continue/) 管理附加到 agent 的 SDK 和 MCP 范围。

![Image 3: The Continue extension in the agent template repository allowing you to build agents with natural-language prompts.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-09-133723-agent-flows-agent-flows-3-pn.png)

_Agent 模板仓库中的 Continue 扩展，允许你用自然语言提示构建 agents。_

### 告诉我们你的想法

我们欢迎你对平台中构建 agents 的反馈。通过 Palantir Support 渠道或我们的 [Developer Community ↗](https://community.palantir.com/) 分享你的想法。

* * *

## Automate 现已支持 Global Branching

发布日期：2026-07-09

Automate 现已支持 Global Branching。你可以在分支上修改自动化并端到端测试，然后再将更改合并到主分支。分支让你在不影响实时工作流或依赖它们的人员的情况下迭代自动化逻辑。Automate 支持全套分支功能：

*   **修改：** 在分支上添加、修改、移除和合并更改。
*   **环境隔离：** 自动化的更改和执行在分支上下文中运行。
*   **保护：** 限制对自动化主分支的编辑，要求用户通过分支进行所有修改。
*   **Rebasing：** 如果自动化在你最初分支后在主分支上发生了变更，你可以通过 rebase 解决差异以解除合并阻塞。
*   **审批：** 提出更改后，你可以配置审查者。自动化自动从项目继承审批策略。审查者在批准或拒绝之前在 Automate 应用中查看更改。

要开始，打开任何自动化并将其添加到分支。

![Image 4: An automation open on a global branch with the branch taskbar showing reviewer configuration and proposal checks.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-08-130802-automate-image-pn.png)

_在全局分支上打开的自动化，分支任务栏显示审查者配置和提案检查。_

![Image 5: Reviewing proposed automation changes in a side-by-side diff before approving or rejecting.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-08-130807-automate-image-pn.png)

_在并排差异中审查提议的自动化更改，然后批准或拒绝。_

要了解更多信息，参见 [Automate branching.](https://www.palantir.com/docs/foundry/automate/branching-automations/)

### 你的反馈很重要

我们想了解 Automate 分支功能如何改善你的工作流以及我们应该重点改进的方向。通过 Palantir Support 渠道和我们的 [Developer Community ↗](https://community.palantir.com/) 分享你的想法，使用 [automate tag ↗](https://community.palantir.com/tag/automate) 和 [global-branching tag ↗](https://community.palantir.com/tag/global-branching)。

* * *

## Claude Sonnet 5 现已在 AIP 中可用

发布日期：2026-07-07

Claude Sonnet 5 现已在 AIP 中面向符合条件的商业和美国政府注册环境提供。

### 模型概述

作为 Anthropic 迄今最具 agent 能力的 Sonnet 模型，Sonnet 5 缩小了与 Claude Opus 4.8 在推理、工具使用、编码和知识工作方面的差距，同时保持更低的价格点。它为生产级 AIP 用例提供了智能、速度和成本的良好平衡。更多信息请查阅：

*   [Anthropic's Claude Sonnet 5 model documentation ↗](https://platform.claude.com/docs/en/about-claude/models/whats-new-sonnet-5)
*   [Anthropic's Claude Sonnet 5 announcement ↗](https://www.anthropic.com/news/claude-sonnet-5)

### 可用性

Claude Sonnet 5 可用于通过以下方式启用 Anthropic 的商业注册环境：

*   Microsoft Azure（非地理限制注册环境）
*   Amazon Bedrock（非地理限制或美国地理限制注册环境）
*   Anthropic Direct（非地理限制或美国地理限制注册环境）
*   Google Vertex（非地理限制、美国地理限制或欧盟地理限制注册环境）

此外，Claude Sonnet 5 可用于通过 Google Vertex 在 IL2 或 IL4 注册环境上启用 Anthropic 的美国政府注册环境。

### 快速上手

要使用此模型：

*   [Confirm that your enrollment administrator has enabled the relevant model family.](https://www.palantir.com/docs/foundry/aip/enable-aip-features/#enable-llms)
*   查阅 [token costs and pricing.](https://www.palantir.com/docs/foundry/aip/aip-compute-usage/#tokens-in-aip)
*   查看 [list of models available in AIP.](https://www.palantir.com/docs/foundry/aip/supported-llms/) 完整列表

### 你的反馈很重要

我们希望听到你在 Palantir 平台中使用语言模型的体验，欢迎你的反馈。通过 Palantir Support 渠道或在我们的 [Developer Community ↗](https://community.palantir.com/) 上使用 [`language-model-service` tag ↗](https://community.palantir.com/tag/language-model-service) 分享你的想法。

* * *

## 推出 Model Evaluations：在 Modeling Objectives 之外比较和评估模型

发布日期：2026-07-07

[Model evaluations](https://www.palantir.com/docs/foundry/integrate-models/evaluations-overview/) 是一个新的 Python API，用于捕获模型版本对测试数据的表现并将结果直接在模型页面上可视化。评估是你自定义和记录的指标、图像、图表和表格的集合，让你可以跨版本和随时间比较模型性能。

之前，以结构化方式评估模型意味着要在 modeling objective 内工作。Model evaluations 消除了这一要求：你现在可以在任何构建模型的地方编写评估逻辑并将结果附加到任何模型版本，无需 modeling objective。

![Image 6: The Evaluation tab on a model page.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-08-135655-modeling-evaluations-base-view-pn.png)

_模型页面上的 Evaluation 标签。_`model_performance`_评估集显示每个模型版本记录的结果，按版本分组以便比较各次运行的性能。_

### 评估任何模型版本

每次评估都与单个模型版本绑定——即通过 `ModelInput` 加载到你转换中的版本。由于结果附加到该特定版本，你可以获得模型表现的特定时间点快照，并为模型重训练时的质量比较提供基础。

### 用评估集跟踪跨版本的性能

**评估集** 是共享相同方法的评估的逻辑分组。评估转换的每次运行都会向同一集合写入新的评估，这样你可以跟踪指标如何随模型变更而跨版本演进。要以多种方式分析模型——例如一个集合中的聚合误差和另一个集合中的分段误差——为每种方法定义单独的集合。

### 快速上手

要开始使用 model evaluations，只需 [upgrade your repository](https://www.palantir.com/docs/foundry/code-repositories/repository-upgrades/) 到最新版本，将 palantir_models 库升级到 >= 0.2384.0，然后 [explore the documentation to get started with model evaluations.](https://www.palantir.com/docs/foundry/integrate-models/evaluations-overview/)

### 下一步是什么？

在接下来的几个月中，我们将引入以下评估改进：

*   AI FDE 支持 AI 辅助模型开发循环
*   基于评估性能发送警报的 Monitors，用于自动漂移检测
*   比较评估的 UI/UX 增强

[探索文档以开始使用 model evaluations。](https://www.palantir.com/docs/foundry/integrate-models/evaluations-overview/)

### 告诉我们你的想法

通过 Palantir Support 或 [Developer Community ↗](https://community.palantir.com/) 使用 [modeling tag ↗](https://community.palantir.com/tag/modeling/17) 发送反馈。

* * *

## 将 AIP Analyst 对话保存为分析资源

发布日期：2026-07-02

AIP Analyst 对话现在可以保存为 Compass 中的分析资源，允许你返回先前的分析、与协作者共享，并在独立的 AIP Analyst 和 Workshop 组件中持续迭代。当你重新打开一个分析时，AIP Analyst 会重新运行 agent 的工具并根据 Ontology 的最新状态重新生成响应，因此结果始终反映当前状态并尊重每个查看者的权限。

![Image 7: Choose where to save the analysis and review what will be stored.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-06-30-155908-aip-analyst-screenshot-2026-06-23-at-2-33-12-pm-pn.png)

_选择保存分析的位置并审查将存储的内容。_

[在 AIP Analyst 分析资源文档中了解更多信息。](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/)

### 管理员控制

平台管理员可以通过注册环境级别的 AIP Analyst Control Panel 扩展禁用分析保存。禁用后，用户无法从 AIP Analyst 创建或打开分析资源。

![Image 8: Configure analysis settings in Control Panel.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-06-30-155911-aip-analyst-aip-analyst-control-panel-pn.png)

_在 Control Panel 中配置分析设置。_

[了解更多关于管理员配置。](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#admin-configuration)

### AIP Analyst 能力

AIP Analyst 帮助用户从自然语言问题转向基于 Foundry 的有据可查的分析。该 agent 可以搜索 Ontology、构建和转换对象集、运行聚合和 SQL 查询、分析上传的文件和媒体，并生成摘要、图表和地图。有了分析资源，这些工作流现在可以被重新访问、共享和扩展。

![Image 9: Example analysis in AIP Analyst.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-06-30-155914-aip-analyst-screenshot-2026-06-24-at-5-59-53-pm-pn.png)

_AIP Analyst 中的示例分析。_

[了解更多关于 AIP Analyst 能力。](https://www.palantir.com/docs/foundry/aip-analyst/capabilities/)

* * *

## AIP 容量管理的可配置用户速率限制

发布日期：2026-07-02

注册环境管理员现在可以查看和配置 LLM 使用的每用户速率限制，提供更精细的控制来管理注册环境容量的消耗方式。

### 背景

AIP 中的 LLM 容量在三个级别管理。

*   注册环境级别限制设定组织 token 和请求吞吐量的整体上限定。
*   项目速率限制控制每个项目可以使用多少注册环境容量。项目速率限制已经可以由管理员配置。
*   每用户速率限制控制单个用户可以消耗多少容量；使用可以来自交互式、用户归因的工作流，来自 AIP Assist、AIP Analyst 或 AI FDE 等应用，来自原生助手功能（如 Pipeline Builder 的 Explain 和 Generate），或来自 Continue 和 Claude Code 等 IDE 集成。

直到现在，每用户限制由 Palantir 设定为固定默认值，管理员无法调整。在引入可配置用户速率限制之前，没有自助服务方式来解决单个高级用户消耗特定模型不成比例容量或特定团队请求更多容量的问题。

### 新功能

管理员现在可以直接在 Resource Management 应用的 AIP usage & limits 页面的 **Manage rate limits** 标签中管理每用户速率限制。管理员现在可以：

*   **设置自定义默认值**，适用于所有模型上的每个用户，替换 Palantir 发布的默认值。
*   **添加每模型覆盖**，提高或降低特定模型的限制而不更改所有模型的限制。
*   **创建用户组覆盖**，针对特定 Foundry 用户组，每个组有自己的默认值和可选的每模型配置。这让你可以给一组重度构建者更多容量，或限制实验用户仅在部分模型子集上拥有高容量。

![Image 10: The interface for managing AIP usage limits.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-06-30-142701-language-model-service-screenshot-2026-06-30-at-12-00-44-am-pn.png)

_管理 AIP 使用量和限制的界面，显示默认用户速率限制和模型覆盖。_

Palantir 的内置默认值仍然是推荐且合理的选择，在没有配置自定义覆盖的地方会继续应用。我们建议从默认值开始，仅在需要时根据你的使用模式调整，并在发布新模型时重新审视任何自定义限制。

此功能现已在 Resource Management 应用中面向所有 AIP 注册环境提供。在 [LLM capacity management documentation](https://www.palantir.com/docs/foundry/aip/llm-capacity-management/) 中了解更多信息。

### 你的反馈很重要

我们希望听到你在 Palantir 平台中使用 AIP 容量管理的体验，欢迎你的反馈。通过 Palantir Support 渠道或在我们的 [Developer Community ↗](https://community.palantir.com/) 上使用 [control-panel tag ↗](https://community.palantir.com/tag/control-panel/18) 分享你的想法。
