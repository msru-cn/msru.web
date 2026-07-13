Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/agents/scoped-permissions/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/agents/scoped-permissions/#scoped-permissions)Scoped permissions（作用域权限）

Beta

Agent 目前处于 [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) 开发阶段，可能尚未在你的环境中可用。功能可能会在开发过程中发生变化。

Agent 开箱即支持对 [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/)、[Ontology MCP (OMCP)](https://www.palantir.com/docs/foundry/ontology-mcp/overview/) 和 [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) 的 scoped permissions 认证。你无需配置客户端 ID 和密钥，也无需传递 Foundry token 来调用工具。

## [](https://www.palantir.com/docs/foundry/agents/scoped-permissions/#how-scoped-permissions-work)scoped permissions 的工作原理

从 [Agent 模板](https://www.palantir.com/docs/foundry/agents/agent-templates/)创建 Agent 时，Foundry 会自动为 Agent 配置调用 OSDK、OMCP 和 Palantir MCP 所需的凭据。模板在运行时通过 Agent 库提供的辅助函数解析连接详情，包括服务 URL 和授权头。Agent 代码请求一个已配置的客户端或 MCP 连接并直接使用。

由于凭据由平台进行作用域管理，Agent 代码中不需要：

*   客户端 ID 和密钥
*   Foundry token
*   手动设置 OAuth 客户端

Agent 只能访问其作用域允许的资源。访问权限受发布时选择的 [Ontology 绑定](https://www.palantir.com/docs/foundry/agents/publish-and-call/#ontology-binding)和适用于底层客户端的[应用限制](https://www.palantir.com/docs/foundry/developer-console/application-restrictions/)管控。

## [](https://www.palantir.com/docs/foundry/agents/scoped-permissions/#retrieve-an-ontology-mcp-connection)获取 Ontology MCP 连接

Agent 库（`@palantir/agent-templates-bundle`）暴露了一个辅助函数，返回可直接使用的 Ontology MCP 连接。连接包含已解析的 URL 和授权头，无需客户端 ID、密钥或 Foundry token。实现细节请参阅 [Agent 模板](https://www.palantir.com/docs/foundry/agents/agent-templates/#ontology-mcp)。

## [](https://www.palantir.com/docs/foundry/agents/scoped-permissions/#retrieve-an-osdk-client)获取 OSDK 客户端

Agent 库还提供了一个辅助函数，用于构建绑定到所选 Ontology 的 OSDK 客户端。实现细节请参阅 [Agent 模板](https://www.palantir.com/docs/foundry/agents/agent-templates/#ontology-sdk)。

## [](https://www.palantir.com/docs/foundry/agents/scoped-permissions/#next-steps)后续步骤

*   [在 Agent 代码中配置 OSDK 和 Ontology MCP 连接。](https://www.palantir.com/docs/foundry/agents/agent-templates/)
*   [构建并发布你的第一个 Agent。](https://www.palantir.com/docs/foundry/agents/create-agent/)

[← PREVIOUS Use cases](https://www.palantir.com/docs/foundry/agents/use-cases/)

[NEXT Agent templates →](https://www.palantir.com/docs/foundry/agents/agent-templates/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

