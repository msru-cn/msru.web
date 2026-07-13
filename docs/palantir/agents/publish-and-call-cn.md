Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/agents/publish-and-call/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#publish-and-call-an-agent)发布并调用 Agent

Beta

Agent 目前处于 [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) 开发阶段，可能尚未在你的环境中可用。功能可能会在开发过程中发生变化。

每个 Agent 发布时都会带有 Ontology 绑定和 Agent API 名称。发布后，Agent 的函数可从 [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) 和 [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) 调用，无需额外配置。

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#ontology-binding)Ontology 绑定

Ontology 绑定将 Agent 与特定的 Ontology 关联。绑定决定了 Agent 通过其 [scoped permissions](https://www.palantir.com/docs/foundry/agents/scoped-permissions/) 可以访问哪些 Ontology 资源。

为确保每个 Agent 都绑定到 Ontology，Agent 配置页面包含一个必填的 **Ontology** 选择器。发布前请选择 Agent 要读写的 Ontology。

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#agent-api-name)Agent API 名称

每个 Agent 发布时都会带有一个 Agent API 名称，用于在从 Workshop 或 OSDK 调用时标识 Agent 的函数。Agent API 名称从仓库名称派生，你可以在 Agent 配置页面的 **Agent API name** 字段中编辑。

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#publish-an-agent)发布 Agent

发布 Agent 时，Foundry 会以 Ontology 绑定和 Agent API 名称注册它，并将其作为函数暴露。发布后，调用 Agent 无需进一步配置。

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#trigger-an-agent)触发 Agent

Agent 函数异步运行，不受同步函数五分钟执行限制的约束。

### [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#from-automate-recommended)通过 Automate 触发（推荐）

我们推荐通过 [Automate](https://www.palantir.com/docs/foundry/automate/overview/) 触发 Agent。配置一个带有[函数效果](https://www.palantir.com/docs/foundry/automate/effect-function/)的自动化，指向 Agent 的函数。Agent 以触发自动化的用户身份运行，或以自动化背后的服务用户身份运行。

### [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#from-workshop-ontology-sdk-or-ontology-actions)通过 Workshop、Ontology SDK 或 Ontology actions 触发

你也可以在任何可调用异步函数的地方调用 Agent 函数，包括 [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/)、[Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) 和 Ontology actions。

直接调用 Agent 函数时请注意以下事项：

*   **函数不返回值：** Agent 函数返回 `Void`，因此不能作为查询函数调用。要从 Workshop、Ontology SDK 或 Ontology actions 调用它，请以函数效果的方式调用，或将其包装在调用 Agent 的 [TypeScript Ontology 编辑函数](https://www.palantir.com/docs/foundry/functions/typescript-v2-ontology-edits/)中。
*   **通过 Ontology 消费结果：** 由于函数不返回值，让 Agent 将对话记录或结果写入 Ontology 对象，然后读取这些对象来消费输出。使用 [AIP Evals](https://www.palantir.com/docs/foundry/aip-evals/overview/) 评估 Agent 输出时也适用此模式。
*   **不支持流式和批量调用。**

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#pass-arguments-to-an-agent)向 Agent 传递参数

[Agent 接受在 `agent/index.ts` 的 `AgentArguments` schema 中定义的参数](https://www.palantir.com/docs/foundry/agents/agent-templates/#agent-arguments)。

触发 Agent 时，提供一个 JSON 对象，其键与 `AgentArguments` schema 匹配。对于 Ontology 对象，传递主键值而非整个对象，然后在 Agent 内部通过 [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) 或 [Ontology MCP](https://www.palantir.com/docs/foundry/ontology-mcp/overview/) 重新获取对象。

要在开发期间本地运行 Agent，通过模板的 `start` 命令提供参数，使用 `--json-args` 传递内联 JSON 或使用 `--json-args-file` 传递 JSON 文件：

Copied!

```bash
1npm start -- --json-args '{"additionalAgentContext": "some context"}'
```

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#next-steps)后续步骤

*   [在 Foundry 中构建并发布你的第一个 Agent。](https://www.palantir.com/docs/foundry/agents/create-agent/)

[← PREVIOUS Agent templates](https://www.palantir.com/docs/foundry/agents/agent-templates/)

[NEXT How-to guides / Build an agent in Foundry →](https://www.palantir.com/docs/foundry/agents/create-agent/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

