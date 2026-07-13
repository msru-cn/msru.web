Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip/aip-features/

Markdown Content:
## AIP 功能

Palantir 平台中的各类应用均配备了 AIP 驱动的功能，详见本页介绍。这些功能由你选择的[平台支持的 LLM](https://www.palantir.com/docs/foundry/aip/supported-llms/#supported-llms) 驱动。

## AIP 应用与构建能力

AIP 让开发者和构建者能够在 Palantir 平台中创建 LLM 驱动的工作流、Agent 和应用，可使用 LLM 原生工具如 [AIP Chatbot Studio](https://www.palantir.com/docs/foundry/chatbot-studio/overview/)（原 AIP Agent Studio）和 [AIP Logic](https://www.palantir.com/docs/foundry/logic/overview/)，也可使用 AIP 加速的平台应用如 [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-llm/) 和 [Workshop](https://www.palantir.com/docs/foundry/workshop/widgets-aip-chatbot/)。

Palantir 提供的 LLM 也可以在 Foundry 核心功能中使用，包括 [Functions](https://www.palantir.com/docs/foundry/functions/language-models-python-tsv2/)、[Transforms](https://www.palantir.com/docs/foundry/transforms-python-spark/palantir-provided-models/) 以及通过 [Code Workspaces](https://www.palantir.com/docs/foundry/code-workspaces/palantir-provided-models/) 使用 Jupyter® notebook。

此外，Palantir 已有的模型集成能力允许用户[接入自定义大语言模型](https://www.palantir.com/docs/foundry/aip/bring-your-own-model/)，从零开始独立构建用例。

更多信息请参阅下方的[应用参考](https://www.palantir.com/docs/foundry/aip/aip-features/#aip-application-reference)。

### AIP 应用参考

下表介绍了 AIP 的各应用及使用场景。你也可以查看 [Foundry 套件应用参考页面](https://www.palantir.com/docs/foundry/getting-started/application-reference/)。

| 应用 | 描述 |
| --- | --- |
| [**AIP Assist**](https://www.palantir.com/docs/foundry/assist/overview/) | AIP Assist 是一个 LLM 驱动的支持工具，帮助用户导航 Palantir 平台，提供实时、安全的自然语言协助。用户可以通过自然语言向 AIP Assist 提问，获得上下文感知的回答，从而加速工作流、提升效率。 |
| [**AIP Logic**](https://www.palantir.com/docs/foundry/logic/overview/) | AIP Logic 是一个无代码开发环境，用于创建、测试和部署 AI 驱动的函数——通过点击操作即可利用 LLM 的能力，并以 Ontology 中的数据为支撑。AIP Logic 提供直观的 Prompt 工程界面、自动化设置以及结构化/非结构化 Ontology 数据集成。你可以用 AIP Logic 轻松自动化复杂流程（如调度或优化问题），同时保持完善的安全控制。 |
| [**AIP Chatbot Studio**](https://www.palantir.com/docs/foundry/chatbot-studio/overview/) | AIP Chatbot Studio 让你创建交互式聊天机器人，利用 Ontology 中的企业数据和各种工具来完成任务和目标。你可以部署 LLM 驱动的 AIP 聊天机器人来自动化手动操作、编辑 Ontology 数据、简化工作流并增强应用交互。 |
| [**AIP Evals**](https://www.palantir.com/docs/foundry/aip-evals/overview/) | AIP Evals 是生产环境中稳定可靠的 AIP 工作流的基础；通过 AIP Evals 测试和评估基于 LLM 的函数和 Prompt，你可以对 LLM 驱动的工作流建立信心。通过在 AIP Evals 中设置测试用例和评估标准，你可以系统地调试、迭代和改进实现，比较不同模型，并检查跨运行的差异。 |
| [**AIP Threads**](https://www.palantir.com/docs/foundry/threads/overview/) | AIP Threads 让你轻松使用 LLM 执行任务和即席分析，无需技术设置即可与文档和 AIP 聊天机器人交互——只需将文档拖放到 AIP Threads 中或从现有资源和聊天机器人中选择，然后用 Prompt 提出你的请求。 |
| [**Palantir MCP**](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) | Palantir MCP 让外部 AI IDE 和 Agent 能够连接 Palantir 平台，获取关于你的 Ontology 和 Foundry 工具的上下文。使用 Palantir MCP 让外部 AI 系统更高效地查询数据、访问文档和构建应用。 |

## AIP 与开发者工具链

Palantir 的[开发工具链](https://www.palantir.com/docs/foundry/dev-toolchain/overview/)为你提供了构建 AI 应用的基础模块，这些应用直接操作你的 Ontology 数据、逻辑和 Action。[Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) 让你用 Python、Java 或 TypeScript 编写 AIP 驱动的应用，内置对 AIP Logic 函数的访问。[Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) 将外部 AI IDE 和 Agent 连接到 Palantir 平台，让它们了解你的 Ontology 和 Foundry 应用的上下文，从而更高效地查询数据、访问文档和构建应用。这些工具组合在一起，让你能便捷地构建利用组织数据的 AI 解决方案，无需拼凑各种零散系统。

## 平台应用中的 AIP 功能

AIP 功能也已嵌入到 Foundry 核心应用中，帮助用户加速工作流、释放更多平台价值。以下是部分 AIP 功能的示例，并非完整列表。最新的 AIP 更新可在文档的 [Announcements](https://www.palantir.com/docs/foundry/announcements/) 部分找到。平台管理员可通过 Control Panel 的 [**AIP settings**](https://www.palantir.com/docs/foundry/aip/enable-aip-features/) 管控这些功能的使用。

### AIP Assist 侧边栏

在任意平台应用中，你都可以打开 AIP Assist 侧边栏获取帮助；AIP Assist 具有上下文感知能力，回答会根据当前活跃的平台应用而变化。你可以通过工作区导航栏打开 AIP Assist，或使用快捷键（`Cmd + Shift + U`（macOS）或 `Ctrl + Shift + U`（Windows））访问。

[了解更多关于 AIP Assist 的信息。](https://www.palantir.com/docs/foundry/assist/overview/)

### Pipeline Builder

在 Pipeline Builder 中使用 AIP，帮助你更好地理解、构建和管理 pipeline。Pipeline Builder 有一组核心的 Assist 功能和额外的 AIP 能力用于自定义工作流。

拥有适当[权限](https://www.palantir.com/docs/foundry/aip/enable-aip-features/)后，你可以在 Pipeline Builder 中使用 AIP 能力进行自定义工作流，例如：

*   [Use LLM 节点](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-llm/)提供了一种便捷方法，在大规模数据上执行大语言模型。

![Image 1: Pipeline Builder 中 Use LLM 节点的"创建 Prompt"界面。](https://www.palantir.com/docs/resources/foundry/aip/llm-doc-create-prompt.png?width=550)
*   你还可以在少量输入数据行上[运行试验](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-llm/#trial-runs)，在整个数据集上运行模型之前迭代优化 Prompt。

![Image 2: Pipeline Builder 中 Use LLM 节点的试验运行。](https://www.palantir.com/docs/resources/foundry/aip/aip-pipeline-builder-trial-run.png?width=750)
*   Pipeline Builder 中可用的 [Text to embeddings](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-aip/#text-to-embeddings) 表达式允许你使用 text embedding ada-002 模型将文本字符串转换为语义向量表示，从而支持基于词义的高级文本分析和操作。

Pipeline Builder 的用户还可以受益于[核心 Assist 功能](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-aip/)，包括：

*   **Explain：** 了解 pipeline 开发中各步骤的详情，并获取相关的名称和描述建议。

![Image 3: AIP Explain 功能在 Pipeline Builder 图中解释 13 个节点的关系。](https://www.palantir.com/docs/resources/foundry/aip/aip-assist-pb.png)

*   **Regex Helper：** 按需生成定制的正则表达式，适合各种技能水平。

![Image 4: 在 Pipeline Builder 中使用 Regex Helper 功能生成搜索邮箱域名的正则表达式。](https://www.palantir.com/docs/resources/foundry/aip/aip-regex-helper.png)

*   **Transform Assist：** 创建和编辑正则表达式，轻松将字符串转换为特定时间戳格式。

### Automate

[Automate 应用](https://www.palantir.com/docs/foundry/automate/overview/)让用户构建自动化流程，持续监控定义的条件，并在条件满足时自动执行操作。

[Automate 与 AIP Logic 集成](https://www.palantir.com/docs/foundry/logic/aip-logic-integration-automate/)，让你直接从 AIP Logic 文件创建自动化。这一能力改善了 Ontology 管理体验，自动化应用或暂存 Ontology 编辑以供人工审核。工作流用户可以检查每个建议操作背后的逻辑，审批后自动应用变更。

### Notepad

AIP 为 [Notepad 带来了 LLM 驱动的功能](https://www.palantir.com/docs/foundry/notepad/aip-features/)，你可以使用 AIP 自动拼写检查、缩短、修改或翻译文本，而不影响文档的现有格式。

![Image 5: Notepad 中的 AIP 下拉菜单显示可用功能。](https://www.palantir.com/docs/resources/foundry/aip/aip-assist-notepad.png?width=550)

### Scheduler

你可以在 [Scheduler 应用中使用 AIP](https://www.palantir.com/docs/foundry/pipeline-builder/schedules-scheduler-aip/)，在创建带有特定时间触发器的数据集构建计划时生成计划配置。在 **New schedule view** 侧面板中输入计划触发器 Prompt，为复杂触发器生成正确的 cron 格式。

* * *

_Jupyter®、JupyterLab® 和 Jupyter® 标识是 NumFOCUS 的商标或注册商标。_
