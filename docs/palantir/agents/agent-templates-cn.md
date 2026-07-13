Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/agents/agent-templates/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/agents/agent-templates/#agent-templates)Agent 模板

Beta

Agent 目前处于 [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) 开发阶段，可能尚未在你的环境中可用。功能可能会在开发过程中发生变化。

创建 Agent 时，代码仓库会从 Agent 模板生成。模板自带了简化的 [Ontology MCP (OMCP)](https://www.palantir.com/docs/foundry/ontology-mcp/overview/)、[Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) 和 [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) 配置，常见的设置已移至 Agent 库中。模板让你的仓库专注于 Agent 逻辑，而非平台基础设施。

## [](https://www.palantir.com/docs/foundry/agents/agent-templates/#supported-templates)支持的模板

以下 Agent 框架提供了对应模板：

*   **Claude Agent SDK：** 基于 [Claude Agent SDK ↗](https://platform.claude.com/docs/en/agent-sdk/typescript) 的 TypeScript 模板，适用于使用 Claude 模型的 Agent。Agent 循环由 `query` 函数驱动，工具通过 MCP 服务器暴露。
*   **OpenAI Agents SDK：** 基于 [OpenAI Agents SDK ↗](https://openai.github.io/openai-agents-js/) 的 TypeScript 模板，适用于使用 OpenAI 模型的 Agent。Agent 循环由 `Agent` 和 `run` 原语驱动。
*   **Google ADK：** 基于 [Google Agent Development Kit (ADK) ↗](https://google.github.io/adk-docs/) 的 TypeScript 模板，适用于使用 Google Gemini 模型的 Agent。Agent 循环由 `Agent` 和 `InMemoryRunner` 原语驱动。Gemini 通过 Foundry 语言模型代理路由，无需 Google API 密钥。

这些模板共享相同的[项目结构](https://www.palantir.com/docs/foundry/agents/agent-templates/#project-structure)、参数 schema、默认 MCP 配置和发布流程。区别在于 Agent 循环和自定义工具的定义方式。创建 Agent 时选择一个模板。除非另有说明，本节中的示例使用 Claude Agent SDK 模板。

## [](https://www.palantir.com/docs/foundry/agents/agent-templates/#project-structure)项目结构

Agent 模板代码仓库的结构如下：

Copied!

```text
1agent/                # Agent 代码
2├── index.ts          # Agent 入口和参数 schema
3├── systemPrompt.ts   # 系统提示词
4├── customTools.ts    # 自定义工具
5└── mcps/
6    └── default.ts    # Foundry 提供的默认 MCP 配置
7utils/                # 共享平台工具
8scripts/              # 构建脚本
```

| 路径 | 描述 |
| --- | --- |
| `agent/index.ts` | Agent 入口。定义 `AgentArguments` schema 和驱动 Agent 循环的 `runAgent` 函数。 |
| `agent/systemPrompt.ts` | 定义模型行为的系统提示词。 |
| `agent/customTools.ts` | Agent 可调用的自定义工具，通过进程内 MCP 服务器暴露。 |
| `agent/mcps/default.ts` | 模板提供的默认 MCP 配置，包括 Palantir MCP 和 Ontology MCP。 |
| `utils/` | 模板使用的共享平台工具，包括 OSDK 客户端辅助函数和发布命令。 |
| `scripts/` | 用于打包 Agent 以发布的构建脚本。 |

编辑 `agent/mcps/default.ts` 可能会在仓库升级时导致冲突。要添加自定义 MCP 配置，请在 `agent/mcps/` 下创建新文件，例如 `agent/mcps/custom.ts`。

`agent/mcps/default.ts` 文件包含 [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) 配置，提供与平台交互的工具。为减少 token 消耗，可以为 Palantir MCP 开启[工具搜索](https://www.palantir.com/docs/foundry/palantir-mcp/tool-search/#agents)，使工具按需发现而非一次性全部加载。

## [](https://www.palantir.com/docs/foundry/agents/agent-templates/#customize-your-agent)自定义 Agent

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#system-prompt)系统提示词

编辑 `agent/systemPrompt.ts` 来修改定义 Agent 行为的指令。

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#agent-arguments)Agent 参数

Agent 可以接受每次运行时提供的参数。在 `agent/index.ts` 的 `AgentArguments` schema 中使用 `defineInputs` 定义：

Copied!

```typescript
1import { defineInputs, t } from "@palantir/agent-templates-bundle";
2
3export const AgentArguments = defineInputs({
4  additionalAgentContext: t.string().optional(),
5  // 在这里添加你自己的参数
6});
```

Agent 被调用时会自动接受这些参数，发布到 Foundry 时会注册为输入类型。

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#custom-tools)自定义工具

编辑 `agent/customTools.ts` 来定义 Agent 可调用的工具。

对于 Claude Agent SDK 模板，使用 `tool` 定义工具，并通过 `createSdkMcpServer` 创建的进程内 MCP 服务器暴露：

Copied!

```typescript
1import { createSdkMcpServer, tool } from "@anthropic-ai/claude-agent-sdk";
2import { z } from "zod";
3
4tool(
5  "my_tool",
6  "Description of what this tool does",
7  z.object({ param: z.string() }),
8  async (params) => {
9    return mcpSuccessResponse("result");
10  },
11);
```

对于 OpenAI Agents SDK 模板，使用 `@openai/agents` 中的 `tool` 定义工具：

Copied!

```typescript
1import { tool } from "@openai/agents";
2
3const myTool = tool({
4  name: "my_tool",
5  description: "Description of what this tool does",
6  parameters: {
7    type: "object",
8    properties: { param: { type: "string" } },
9    required: ["param"],
10  },
11  strict: false,
12  execute: async (input) => {
13    return "result";
14  },
15});
```

对于 Google ADK 模板，使用 `@google/adk` 中的 `FunctionTool` 定义工具：

Copied!

```typescript
1import { FunctionTool } from "@google/adk";
2import { z } from "zod";
3
4const myTool = new FunctionTool({
5  name: "my_tool",
6  description: "Description of what this tool does",
7  parameters: z.object({ param: z.string() }),
8  execute: async (input) => {
9    return "result";
10  },
11});
```

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#agent-loop)Agent 循环

修改 `agent/index.ts` 中的 `runAgent` 函数来更改提示词、模型、MCP 服务器或传递给 Agent 的工具。

对于 Claude Agent SDK 模板，获取 Ontology MCP 配置，将其作为 MCP 服务器传递给 `query` 函数，并消费 Agent 的响应流：

Copied!

```typescript
1import { query } from "@anthropic-ai/claude-agent-sdk";
2import { getOntologyMcpConfiguration } from "./mcps/default";
3
4export async function runAgent(args: AgentArgs) {
5  const omcpConfig = await getOntologyMcpConfiguration();
6
7  const iter = query({
8    prompt: "...",
9    options: {
10      mcpServers: {
11        ["ontology_mcp"]: omcpConfig,
12      },
13    },
14  });
15
16  // 消费 Agent 的响应流
17}
```

对于 OpenAI Agents SDK 模板，构建 `Agent`，连接其 MCP 服务器，运行 Agent，并消费结果流：

Copied!

```typescript
1import { Agent, run, MCPServer } from "@openai/agents";
2
3export async function runAgent(args: AgentArgs) {
4  const mcpServers: MCPServer[] = [
5    // 在这里添加 MCP 服务器
6  ];
7
8  for (const server of mcpServers) {
9    await server.connect();
10  }
11
12  try {
13    const agent = new Agent({
14      name: "MyAgent",
15      instructions: "...",
16      mcpServers,
17      tools: [myTool],
18      model: "gpt-5.4",
19    });
20
21    const result = await run(agent, "...", { stream: true });
22
23    // 消费 Agent 的响应流
24
25    await result.completed;
26  } finally {
27    for (const server of mcpServers) {
28      await server.close();
29    }
30  }
31}
```

对于 Google ADK 模板，构建 `Agent`，使用 `InMemoryRunner` 运行，并消费事件流。模板提供了 `FoundryGemini` 模型包装器，定义在模板管理的 `foundryGemini.ts` 文件中，将 Gemini 路由到 Foundry 语言模型代理，无需 Google API 密钥：

Copied!

```typescript
1import { Agent, InMemoryRunner, MCPToolset, stringifyContent } from "@google/adk";
2import { FoundryGemini } from "./foundryGemini";
3
4export async function runAgent(args: AgentArgs) {
5  const mcpToolsets: MCPToolset[] = [
6    // 在这里添加 MCP 工具集
7  ];
8
9  try {
10    const agent = new Agent({
11      name: "MyAgent",
12      instruction: "...",
13      tools: [...mcpToolsets],
14      model: new FoundryGemini({ model: "gemini-2.5-flash" }),
15    });
16
17    const runner = new InMemoryRunner({ agent });
18
19    for await (const event of runner.runEphemeral({
20      userId: "user",
21      newMessage: { role: "user", parts: [{ text: "..." }] },
22    })) {
23      if (event.content) {
24        console.log(stringifyContent(event));
25      }
26    }
27  } finally {
28    for (const toolset of mcpToolsets) {
29      await toolset.close();
30    }
31  }
32}
```

## [](https://www.palantir.com/docs/foundry/agents/agent-templates/#add-osdk-and-omcp-to-your-agent)为 Agent 添加 OSDK 和 OMCP

模板通过 Agent 的 [scoped permissions](https://www.palantir.com/docs/foundry/agents/scoped-permissions/) 使 OSDK 和 Ontology MCP 无需客户端凭据即可使用。

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#ontology-sdk)Ontology SDK

要让 Agent 访问 Ontology 资源，需要添加 Ontology SDK。与在 Code Workspaces 中创建 SDK 一样，选择要包含的对象类型、操作类型和查询函数，然后生成 SDK。步骤指南请参阅[创建新的 Ontology SDK](https://www.palantir.com/docs/foundry/code-workspaces/ontology/#create-a-new-ontology-sdk)。

要直接读写 Ontology 数据，构建一个绑定到所选 Ontology 的 OSDK 客户端。Ontology 资源标识符（RID）由生成的 SDK 暴露：

Copied!

```typescript
1import { getOntologySdkClient } from "@palantir/agent-templates-bundle";
2import { $ontologyRid } from "@ontology/sdk";
3
4const client = await getOntologySdkClient($ontologyRid);
```

有关在 Agent 中使用 OSDK 的指南，请参阅 [Ontology SDK 文档](https://www.palantir.com/docs/foundry/ontology-sdk/overview/)和 [TypeScript OSDK 参考](https://www.palantir.com/docs/foundry/ontology-sdk/typescript-osdk/)。

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#ontology-mcp)Ontology MCP

当你为 Agent 添加 Ontology SDK 时，会基于相同的 SDK 资源创建 Ontology MCP。Ontology MCP 将 SDK 中的对象类型、操作类型和查询函数暴露为 Agent 模型可调用的 MCP 工具。

`agent/mcps/default.ts` 文件暴露了一个 `getOntologyMcpConfiguration` 辅助函数，在运行时解析 Ontology MCP 连接并返回 HTTP MCP 服务器配置。由于 URL 和授权头通过 scoped permissions 解析，无需客户端 ID、密钥或 Foundry token：

Copied!

```typescript
1export const getOntologyMcpConfiguration: () => Promise<McpHttpServerConfig> = async () => {
2  const { url, headers } = await getOntologyMcpConnection();
3  return {
4    type: "http",
5    url,
6    headers,
7  };
8};
```

要使用 Ontology MCP，按照 [Agent 循环](https://www.palantir.com/docs/foundry/agents/agent-templates/#agent-loop)中的方式将配置传递给 Agent 的 MCP 服务器。有关 Ontology MCP 暴露的工具的更多信息，请参阅 [Ontology MCP 文档](https://www.palantir.com/docs/foundry/ontology-mcp/overview/)。

## [](https://www.palantir.com/docs/foundry/agents/agent-templates/#next-steps)后续步骤

*   [发布并调用 Agent。](https://www.palantir.com/docs/foundry/agents/publish-and-call/)
*   [了解 Agent 如何在无客户端凭据的情况下进行认证。](https://www.palantir.com/docs/foundry/agents/scoped-permissions/)

[← PREVIOUS Scoped permissions](https://www.palantir.com/docs/foundry/agents/scoped-permissions/)

[NEXT Publish and call an agent →](https://www.palantir.com/docs/foundry/agents/publish-and-call/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

