Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/agents/overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/agents/overview/#agents)Agents

Beta

Agents are in the [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development and may not be available on your enrollment. Functionality may change during active development.

With **Agents**, developers can build, configure, and ship pro-code agents in Foundry. An agent is custom logic written in a Foundry code repository. It uses a large language model (LLM) to reason over a prompt and call tools that read and write data in your environment.

Agents authenticate against the [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/), [Ontology MCP (OMCP)](https://www.palantir.com/docs/foundry/ontology-mcp/overview/), and [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) with scoped permissions out of the box. You do not need to pass a client ID and secret to call tools. After you publish an agent, you can call it from [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) or the [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) with no additional configuration.

For common ways to use agents, such as reading and writing Ontology data, building platform resources, and migrating legacy systems, review our [use cases documentation](https://www.palantir.com/docs/foundry/agents/use-cases/).

## [](https://www.palantir.com/docs/foundry/agents/overview/#how-agents-work)How agents work

An agent is defined in a code repository created from the agent template. The template includes:

1.   **An OSDK client** bound to your selected Ontology, used to read and write Ontology data.
2.   **Ontology MCP and Palantir MCP configuration**, exposing Ontology resources and platform tools to the agent's LLM.
3.   **The agent's logic**, where you define the prompt, the tools the agent can call, and how the agent consumes the model's response stream.

When you publish the agent, Foundry registers it with an Ontology binding and an agent API name. The [published](https://www.palantir.com/docs/foundry/agents/publish-and-call/) agent is exposed as an asynchronous function. We recommend triggering agents from [Automate](https://www.palantir.com/docs/foundry/automate/overview/), but you can also call them from Workshop, the Ontology SDK, and Ontology actions.

## [](https://www.palantir.com/docs/foundry/agents/overview/#key-capabilities)Key capabilities

*   **Scoped permissions out of the box:** Agents authenticate against OSDK, OMCP, and Palantir MCP with [scoped permissions](https://www.palantir.com/docs/foundry/agents/scoped-permissions/) automatically. You do not wire up client credentials manually to use tools.
*   **Templates for the Claude Agent SDK, OpenAI Agents SDK, and Google ADK:** Create your agent from a [template](https://www.palantir.com/docs/foundry/agents/agent-templates/) for the [Claude Agent SDK ↗](https://platform.claude.com/docs/en/agent-sdk/typescript), [OpenAI Agents SDK ↗](https://openai.github.io/openai-agents-js/), or [Google Agent Development Kit (ADK) ↗](https://google.github.io/adk-docs/). Each template ships with simplified configuration for OMCP, Palantir MCP, and the OSDK client, with common setup moved into the library.
*   **Published with an Ontology binding and agent API name:** Every agent is [published](https://www.palantir.com/docs/foundry/agents/publish-and-call/) with an Ontology binding and an agent API name, making its function callable from both Workshop and OSDK.
*   **Guided walkthrough:** After you create an agent, a **Build agent in Foundry** landing page walks you through the [next steps](https://www.palantir.com/docs/foundry/agents/create-agent/) of building, publishing, and calling your agent.
*   **Build your agent with Continue:** Use Palantir MCP with [Continue ↗](https://www.continue.dev/) to [manage both the SDK and the OMCP scope](https://www.palantir.com/docs/foundry/agents/build-agent-continue/) attached to the agent, directly from your editor.

## [](https://www.palantir.com/docs/foundry/agents/overview/#next-steps)Next steps

*   [Build your first agent in Foundry](https://www.palantir.com/docs/foundry/agents/create-agent/).

[← PREVIOUS Developer Console / How-to guides / Manage Node.js version in a Foundry code repository](https://www.palantir.com/docs/foundry/developer-console/manage-node-version-in-foundry-code-repository/)

[NEXT Use cases →](https://www.palantir.com/docs/foundry/agents/use-cases/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

