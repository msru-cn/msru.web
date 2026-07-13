Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/agents/overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/agents/overview/#agents)Agents

Beta

Agent 目前处于 [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) 开发阶段，可能尚未在你的环境中可用。功能可能会在开发过程中发生变化。

通过 **Agents**，开发者可以在 Foundry 中构建、配置和部署 pro-code Agent。Agent 是写在 Foundry 代码仓库中的自定义逻辑，使用大语言模型（LLM）对提示词进行推理，并调用工具在你的环境中读写数据。

Agent 开箱即支持对 [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/)、[Ontology MCP (OMCP)](https://www.palantir.com/docs/foundry/ontology-mcp/overview/) 和 [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) 的 scoped permissions 认证。你无需传递客户端 ID 和密钥来调用工具。发布 Agent 后，你可以从 [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) 或 [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) 调用它，无需额外配置。

有关 Agent 的常见使用方式，例如读写 Ontology 数据、构建平台资源和迁移遗留系统，请参阅[用例文档](https://www.palantir.com/docs/foundry/agents/use-cases/)。

## [](https://www.palantir.com/docs/foundry/agents/overview/#how-agents-work)Agent 工作原理

Agent 定义在从 Agent 模板创建的代码仓库中。模板包含：

1.   **OSDK 客户端**，绑定到所选的 Ontology，用于读写 Ontology 数据。
2.   **Ontology MCP 和 Palantir MCP 配置**，将 Ontology 资源和平台工具暴露给 Agent 的 LLM。
3.   **Agent 逻辑**，你在其中定义提示词、Agent 可调用的工具，以及 Agent 如何消费模型的响应流。

发布 Agent 时，Foundry 会以 Ontology 绑定和 Agent API 名称注册它。[已发布的](https://www.palantir.com/docs/foundry/agents/publish-and-call/) Agent 以异步函数的形式暴露。我们建议通过 [Automate](https://www.palantir.com/docs/foundry/automate/overview/) 触发 Agent，但也可以从 Workshop、Ontology SDK 和 Ontology actions 调用。

## [](https://www.palantir.com/docs/foundry/agents/overview/#key-capabilities)核心能力

*   **开箱即用的 scoped permissions：** Agent 自动使用 [scoped permissions](https://www.palantir.com/docs/foundry/agents/scoped-permissions/) 对 OSDK、OMCP 和 Palantir MCP 进行认证。无需手动配置客户端凭据来使用工具。
*   **Claude Agent SDK、OpenAI Agents SDK 和 Google ADK 模板：** 从 [Claude Agent SDK ↗](https://platform.claude.com/docs/en/agent-sdk/typescript)、[OpenAI Agents SDK ↗](https://openai.github.io/openai-agents-js/) 或 [Google Agent Development Kit (ADK) ↗](https://google.github.io/adk-docs/) 的[模板](https://www.palantir.com/docs/foundry/agents/agent-templates/)创建 Agent。每个模板都自带简化的 OMCP、Palantir MCP 和 OSDK 客户端配置，常见设置已移至库中。
*   **发布时带有 Ontology 绑定和 Agent API 名称：** 每个 Agent [发布时](https://www.palantir.com/docs/foundry/agents/publish-and-call/)都会带有 Ontology 绑定和 Agent API 名称，使其函数可从 Workshop 和 OSDK 调用。
*   **引导式入门：** 创建 Agent 后，**Build agent in Foundry** 着陆页会引导你完成构建、发布和调用 Agent 的[后续步骤](https://www.palantir.com/docs/foundry/agents/create-agent/)。
*   **使用 Continue 构建 Agent：** 将 Palantir MCP 与 [Continue ↗](https://www.continue.dev/) 结合使用，在编辑器中[管理 Agent 关联的 SDK 和 OMCP 范围](https://www.palantir.com/docs/foundry/agents/build-agent-continue/)。

## [](https://www.palantir.com/docs/foundry/agents/overview/#next-steps)后续步骤

*   [在 Foundry 中构建你的第一个 Agent](https://www.palantir.com/docs/foundry/agents/create-agent/)。

[← PREVIOUS Developer Console / How-to guides / Manage Node.js version in a Foundry code repository](https://www.palantir.com/docs/foundry/developer-console/manage-node-version-in-foundry-code-repository/)

[NEXT Use cases →](https://www.palantir.com/docs/foundry/agents/use-cases/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

