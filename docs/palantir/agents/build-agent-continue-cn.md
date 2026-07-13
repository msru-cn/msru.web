Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/agents/build-agent-continue/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#build-an-agent-with-continue)使用 Continue 构建 Agent

Beta

Agent 目前处于 [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) 开发阶段，可能尚未在你的环境中可用。功能可能会在开发过程中发生变化。

你可以将 [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) 与 [Continue ↗](https://www.continue.dev/) 结合使用，通过自然语言提示在编辑器中直接构建 Agent。Continue 可以协助构建 Agent 的任何部分，包括在开发环境中管理 Agent 关联的 [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) 和 [Ontology MCP (OMCP)](https://www.palantir.com/docs/foundry/ontology-mcp/overview/)。

![Image 2: 使用 Continue 在代码仓库中构建 Agent。](https://www.palantir.com/docs/resources/foundry/agents/agent-continue.png)

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#capabilities)功能

使用 Palantir MCP 和 Continue，你可以执行以下操作：

*   编写和迭代 Agent 的任何部分，例如更新系统提示词、定义参数或添加自定义工具。
*   通过 OSDK 和 OMCP 管理 Agent 可用的 Ontology 资源。
*   发布 Agent。

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#prerequisites)前置条件

开始之前，请确保具备以下条件：

*   使用 [Agent 模板](https://www.palantir.com/docs/foundry/agents/agent-templates/)创建的 Agent 仓库。参见[在 Foundry 中构建 Agent](https://www.palantir.com/docs/foundry/agents/create-agent/)。
*   编辑器中已安装 [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/installation/)。
*   编辑器中已安装 [Continue ↗](https://www.continue.dev/) 扩展。

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#build-your-agent)构建 Agent

Continue 可以协助任何 Agent 构建任务。例如，提示 Continue 更新 Agent 的行为：

Copied!

```text
1Update the system prompt so the agent summarizes results in two sentences.
```

有关 Palantir MCP 提供的工具的更多信息，请参阅 [Palantir MCP 文档](https://www.palantir.com/docs/foundry/palantir-mcp/overview/)。

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#manage-the-sdk-and-omcp-scope)管理 SDK 和 OMCP 范围

提示 Continue 将 Agent 需要的 Ontology 资源添加到 SDK。例如：

Copied!

```text
1Add MyObjectTypeApiName to the SDK and install it here.
```

作为响应，Continue 会在不存在的情况下创建一个 [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/)。然后查找该对象类型或操作类型，将其添加到 SDK，生成新的 SDK 版本，并安装到你的仓库中。由于 [Ontology MCP](https://www.palantir.com/docs/foundry/ontology-mcp/overview/) 是从相同的 SDK 资源创建的，你添加的资源也会作为 OMCP 工具可用。

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#publish-your-agent)发布 Agent

Agent 就绪后，提示 Continue 发布它：

Copied!

```text
1Publish this agent.
```

有关发布流程的更多详情，请参阅[发布并调用 Agent](https://www.palantir.com/docs/foundry/agents/publish-and-call/)。

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#next-steps)后续步骤

*   [在 Foundry 中构建你的第一个 Agent。](https://www.palantir.com/docs/foundry/agents/create-agent/)
*   [了解 Agent 如何在无客户端凭据的情况下进行认证](https://www.palantir.com/docs/foundry/agents/scoped-permissions/)。
*   [了解 Palantir MCP 提供的工具。](https://www.palantir.com/docs/foundry/palantir-mcp/getting-started/)。

[← PREVIOUS Build an agent in Foundry](https://www.palantir.com/docs/foundry/agents/create-agent/)

[NEXT Compute modules / Overview →](https://www.palantir.com/docs/foundry/compute-modules/overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

