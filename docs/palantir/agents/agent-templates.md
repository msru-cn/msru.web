Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/agents/agent-templates/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/agents/agent-templates/#agent-templates)Agent templates

Beta

Agents are in the [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development and may not be available on your enrollment. Functionality may change during active development.

When you create an agent, your code repository is generated from an agent template. The template ships with simplified configuration for [Ontology MCP (OMCP)](https://www.palantir.com/docs/foundry/ontology-mcp/overview/), [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/), and the [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/), with common setup moved into the agent library. The template keeps your repository focused on agent logic rather than platform plumbing.

## [](https://www.palantir.com/docs/foundry/agents/agent-templates/#supported-templates)Supported templates

Templates are available for the following agent frameworks:

*   **Claude Agent SDK:** A TypeScript template built on the [Claude Agent SDK ↗](https://platform.claude.com/docs/en/agent-sdk/typescript), for agents that use Claude models. The agent loop is driven by the `query` function, and tools are exposed through MCP servers.
*   **OpenAI Agents SDK:** A TypeScript template built on the [OpenAI Agents SDK ↗](https://openai.github.io/openai-agents-js/), for agents that use OpenAI models. The agent loop is driven by the `Agent` and `run` primitives.
*   **Google ADK:** A TypeScript template built on the [Google Agent Development Kit (ADK) ↗](https://google.github.io/adk-docs/), for agents that use Google Gemini models. The agent loop is driven by the `Agent` and `InMemoryRunner` primitives. Gemini is routed through the Foundry language model proxy, so no Google API key is required.

These templates share the same [project structure](https://www.palantir.com/docs/foundry/agents/agent-templates/#project-structure), argument schema, default MCP configurations, and publishing flow. They differ in how the agent loop and custom tools are defined. Select a template when you create your agent. Unless noted otherwise, the examples in this section use the Claude Agent SDK template.

## [](https://www.palantir.com/docs/foundry/agents/agent-templates/#project-structure)Project structure

An agent template code repository has the following structure:

Copied!

```text
1agent/                # Your agent code
2├── index.ts          # Agent entry point and argument schema
3├── systemPrompt.ts   # System prompt
4├── customTools.ts    # Custom tools
5└── mcps/
6    └── default.ts    # Default MCP configurations provided by Foundry
7utils/                # Shared platform tooling
8scripts/              # Build scripts
```

| Path | Description |
| --- | --- |
| `agent/index.ts` | The agent entry point. Defines the `AgentArguments` schema and the `runAgent` function that drives the agent loop. |
| `agent/systemPrompt.ts` | The system prompt that defines how the model behaves. |
| `agent/customTools.ts` | Custom tools the agent can call, exposed through an in-process MCP server. |
| `agent/mcps/default.ts` | Default MCP configurations provided by the template, including Palantir MCP and Ontology MCP. |
| `utils/` | Shared platform tooling used by the template, including OSDK client helpers and publishing commands. |
| `scripts/` | Build scripts used to package the agent for publishing. |

Editing `agent/mcps/default.ts` may cause conflicts during repository upgrades. To add your own MCP configurations, create a new file in `agent/mcps/` instead, such as `agent/mcps/custom.ts`.

The `agent/mcps/default.ts` file includes a [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) configuration that provides tools to interact with the platform. To reduce token usage, you can enable [tool search](https://www.palantir.com/docs/foundry/palantir-mcp/tool-search/#agents) for Palantir MCP so that tools are discovered on demand rather than loaded all at once.

## [](https://www.palantir.com/docs/foundry/agents/agent-templates/#customize-your-agent)Customize your agent

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#system-prompt)System prompt

Edit `agent/systemPrompt.ts` to change the instructions that define how the agent behaves.

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#agent-arguments)Agent arguments

Agents can accept arguments that are provided for each run. Define them in the `AgentArguments` schema in `agent/index.ts` using `defineInputs`:

Copied!

```typescript
1import { defineInputs, t } from "@palantir/agent-templates-bundle";
2
3export const AgentArguments = defineInputs({
4  additionalAgentContext: t.string().optional(),
5  // Add your own arguments here
6});
```

Arguments are automatically accepted when the agent is invoked and registered as input types when the agent is published to Foundry.

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#custom-tools)Custom tools

Edit `agent/customTools.ts` to define tools the agent can call.

For the Claude Agent SDK template, define tools with `tool` and expose them through an in-process MCP server created with `createSdkMcpServer`:

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

For the OpenAI Agents SDK template, define tools with `tool` from `@openai/agents`:

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

For the Google ADK template, define tools with `FunctionTool` from `@google/adk`:

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

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#agent-loop)Agent loop

Modify the `runAgent` function in `agent/index.ts` to change the prompt, model, MCP servers, or tools passed to the agent.

For the Claude Agent SDK template, retrieve the Ontology MCP configuration, pass it to the `query` function as an MCP server, and consume the agent's response stream:

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
16  // Consume the agent's response stream
17}
```

For the OpenAI Agents SDK template, construct an `Agent`, connect its MCP servers, run the agent, and consume the result stream:

Copied!

```typescript
1import { Agent, run, MCPServer } from "@openai/agents";
2
3export async function runAgent(args: AgentArgs) {
4  const mcpServers: MCPServer[] = [
5    // Add MCP servers here
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
23    // Consume the agent's response stream
24
25    await result.completed;
26  } finally {
27    for (const server of mcpServers) {
28      await server.close();
29    }
30  }
31}
```

For the Google ADK template, construct an `Agent`, run it with an `InMemoryRunner`, and consume the event stream. The template provides a `FoundryGemini` model wrapper, defined in a template-managed `foundryGemini.ts` file, that routes Gemini through the Foundry language model proxy, so no Google API key is required:

Copied!

```typescript
1import { Agent, InMemoryRunner, MCPToolset, stringifyContent } from "@google/adk";
2import { FoundryGemini } from "./foundryGemini";
3
4export async function runAgent(args: AgentArgs) {
5  const mcpToolsets: MCPToolset[] = [
6    // Add MCP toolsets here
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

## [](https://www.palantir.com/docs/foundry/agents/agent-templates/#add-osdk-and-omcp-to-your-agent)Add OSDK and OMCP to your agent

The template makes both OSDK and Ontology MCP available to your agent without client credentials, through the agent's [scoped permissions](https://www.palantir.com/docs/foundry/agents/scoped-permissions/).

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#ontology-sdk)Ontology SDK

To give your agent access to Ontology resources, add an Ontology SDK to the agent. As when creating an SDK in Code Workspaces, select the object types, action types, and query functions to include, then generate the SDK. For step-by-step guidance, review [Create a new Ontology SDK](https://www.palantir.com/docs/foundry/code-workspaces/ontology/#create-a-new-ontology-sdk).

To read and write Ontology data directly, construct an OSDK client bound to your selected Ontology. The Ontology resource identifier (RID) is exposed by the generated SDK:

Copied!

```typescript
1import { getOntologySdkClient } from "@palantir/agent-templates-bundle";
2import { $ontologyRid } from "@ontology/sdk";
3
4const client = await getOntologySdkClient($ontologyRid);
```

For guidance on using the OSDK in your agent, review the [Ontology SDK documentation](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) and the [TypeScript OSDK reference](https://www.palantir.com/docs/foundry/ontology-sdk/typescript-osdk/).

### [](https://www.palantir.com/docs/foundry/agents/agent-templates/#ontology-mcp)Ontology MCP

When you add an Ontology SDK to your agent, an Ontology MCP is created based on the same SDK resources. The Ontology MCP exposes the object types, action types, and query functions in the SDK as MCP tools that your agent's model can call.

The `agent/mcps/default.ts` file exposes a `getOntologyMcpConfiguration` helper that resolves the Ontology MCP connection at runtime and returns an HTTP MCP server configuration. Because the URL and authorization headers are resolved through scoped permissions, no client ID, secret, or Foundry token is required:

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

To use Ontology MCP, pass the configuration to your agent's MCP servers as shown in [Agent loop](https://www.palantir.com/docs/foundry/agents/agent-templates/#agent-loop). For more information on the tools Ontology MCP exposes, review the [Ontology MCP documentation](https://www.palantir.com/docs/foundry/ontology-mcp/overview/).

## [](https://www.palantir.com/docs/foundry/agents/agent-templates/#next-steps)Next steps

*   [Publish and call an agent.](https://www.palantir.com/docs/foundry/agents/publish-and-call/)
*   [Learn how the agent authenticates without client credentials.](https://www.palantir.com/docs/foundry/agents/scoped-permissions/).

[← PREVIOUS Scoped permissions](https://www.palantir.com/docs/foundry/agents/scoped-permissions/)

[NEXT Publish and call an agent →](https://www.palantir.com/docs/foundry/agents/publish-and-call/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

