Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/assist/overview/

Markdown Content:
## AIP Assist

AIP Assist 是一个由 LLM 驱动的支持工具，帮助用户在 Palantir 平台中导航、理解并产出价值。用户可以用自然语言向 AIP Assist 提问，并获得实时帮助。

使用 AIP Assist 的好处包括：

*   **用户友好的界面：** 由 LLM 驱动，AIP Assist 拥有直观的界面，让用户轻松提问并获得相关、自然、易懂的回答。
*   **实时协助：** AIP Assist 提供实时协助，帮助用户快速解决问题，提升用户生产力，同时减少对支持团队的依赖。
*   **多语言支持：** AIP 可以用所有常用语言回应查询。
*   **上下文感知：** 设计为保持对话上下文，AIP Assist 知道你当前在哪个 Foundry 应用中。
*   **Foundry 级安全：** AIP Assist 完全遵守 Palantir 的 [AI Ethics Principles ↗](https://www.palantir.com/pcl/palantir-ai-ethics/)，不访问你的数据。
*   **持续改进：** 用户可以对 AIP Assist 的回答质量提供反馈，帮助工具在持续开发中改进。

## 访问 AIP Assist

你可以通过选择工作区导航栏底部的 AIP Assist 图标或使用键盘快捷键（MacOS 上为 Cmd+Shift+U，Windows 上为 Ctrl+Shift+U）来访问 AIP Assist。AIP Assist 将如下方截图所示出现在面板中：

![Image 1: AIP Sidebar overview screenshot](https://www.palantir.com/docs/resources/foundry/assist/aip-sidebar-overview.png)

## 从 AIP Assist 获取支持

用户可以在 **Ask a question...** 输入框中以纯文本输入查询。AIP Assist 基于 Palantir 的平台文档训练，使用自然语言处理（NLP）和第三方大语言模型（LLMs）解析用户查询并提供最相关的回答，符合 Palantir 的安全标准。

![Image 2: AIP Sidebar overview screenshot](https://www.palantir.com/docs/resources/foundry/assist/aip-assist-support.png)

## 通过模式和 AIP Chatbots 聚焦你的 AIP Assist 体验

AIP Assist 开箱即用提供几种预配置模式，根据你的工作流提供更定制化的体验。以下是可用模式的概述：

*   **AIP Assist（默认）：** 在平台文档、开发者文档和自定义内容源之间动态选择。
*   **Platform Documentation Assist：** 基于平台文档回答问题。
*   **Developer Assist：** 专注于 Foundry APIs 和常见开发者示例。
*   **AIP Chatbots：** 用户开发的、由 LLM 驱动的交互式助手，配备企业特定信息。参见 [AIP Chatbots in Assist](https://www.palantir.com/docs/foundry/assist/agents-in-aip-assist/) 了解更多信息。

![Image 3: Mode Selector](https://www.palantir.com/docs/resources/foundry/assist/mode-selector.png)

## 添加自定义内容源以增强 AIP Assist

你可以添加自定义内容源并用它们来改善 AIP Assist 体验。目前有两种方法可以添加注册到 AIP Assist 的自定义内容源：

1.   **（推荐）** Notepad 文档
2.   平台内 [custom documentation](https://www.palantir.com/docs/foundry/custom-docs/overview/)（Code Repositories 中 `documentation` 类型仓库中的 Markdown 文件）。

参见 [registering custom content sources with AIP Assist](https://www.palantir.com/docs/foundry/assist/aip-assist-registering-content/) 了解更多信息。

### 在 AIP Assist 中使用自定义源

创建并注册自定义源后，有两种选项可以用它来增强 AIP Assist 体验：

1.   [Adding it to the default AIP Assist knowledge base](https://www.palantir.com/docs/foundry/assist/adding-documentation-to-aip-assist/)。

2.   [Creating an AIP Chatbot](https://www.palantir.com/docs/foundry/assist/agents-in-aip-assist/)。

将内容源添加到默认 AIP Assist 知识库会将它与你的注册环境中 AIP Assist 预加载的更大搜索上下文一起包含。相比之下，AIP Assist chatbots 是交互式的、LLM 驱动的助手，**仅** 使用提供的自定义内容源作为搜索上下文，使其成为针对你在 Palantir 平台上工作流的专注的、量身定制的支持工具。

* * *

注意：AIP 功能可用性可能会变更，不同客户之间可能有差异。
