Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/agents/build-agent-continue/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#build-an-agent-with-continue)Build an agent with Continue

Beta

Agents are in the [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development and may not be available on your enrollment. Functionality may change during active development.

You can use [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) with [Continue ↗](https://www.continue.dev/) to build your agent directly from your editor using natural-language prompts. Continue can help with any part of building your agent, including managing the [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) and [Ontology MCP (OMCP)](https://www.palantir.com/docs/foundry/ontology-mcp/overview/) attached to the agent without leaving your development environment.

![Image 2: Using Continue to build an Agent in the code repository.](https://www.palantir.com/docs/resources/foundry/agents/agent-continue.png)

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#capabilities)Capabilities

Using Palantir MCP with Continue, you can perform the following:

*   Write and iterate on any part of your agent, such as updating the system prompt, defining arguments, or adding custom tools.
*   Manage the Ontology resources available to your agent through the OSDK and OMCP.
*   Publish your agent.

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#prerequisites)Prerequisites

Before you begin, ensure that you have the following:

*   An agent repository created using the [agent template](https://www.palantir.com/docs/foundry/agents/agent-templates/). See [Build an agent in Foundry](https://www.palantir.com/docs/foundry/agents/create-agent/).
*   [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/installation/) installed in your editor.
*   The [Continue ↗](https://www.continue.dev/) extension installed in your editor.

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#build-your-agent)Build your agent

Continue can help with any agent-building task. For example, prompt Continue to update your agent's behavior:

Copied!

```text
1Update the system prompt so the agent summarizes results in two sentences.
```

For more information on the tools available through Palantir MCP, review the [Palantir MCP documentation](https://www.palantir.com/docs/foundry/palantir-mcp/overview/).

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#manage-the-sdk-and-omcp-scope)Manage the SDK and OMCP scope

Prompt Continue to add the Ontology resources your agent needs to the SDK. For example:

Copied!

```text
1Add MyObjectTypeApiName to the SDK and install it here.
```

In response, Continue creates an [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) if one does not exist. It then looks up the object type or action type, adds it to the SDK, generates a new SDK version, and installs it in your repository. Because the [Ontology MCP](https://www.palantir.com/docs/foundry/ontology-mcp/overview/) is created from the same SDK resources, the resources you add also become available as OMCP tools.

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#publish-your-agent)Publish your agent

When your agent is ready, prompt Continue to publish it:

Copied!

```text
1Publish this agent.
```

For more detail on the publishing flow, review [Publish and call an agent](https://www.palantir.com/docs/foundry/agents/publish-and-call/).

## [](https://www.palantir.com/docs/foundry/agents/build-agent-continue/#next-steps)Next steps

*   [Build your first agent in Foundry.](https://www.palantir.com/docs/foundry/agents/create-agent/)
*   [Understand how the agent authenticates without client credentials](https://www.palantir.com/docs/foundry/agents/scoped-permissions/).
*   [Learn more about the tools available through Palantir MCP.](https://www.palantir.com/docs/foundry/palantir-mcp/getting-started/).

[← PREVIOUS Build an agent in Foundry](https://www.palantir.com/docs/foundry/agents/create-agent/)

[NEXT Compute modules / Overview →](https://www.palantir.com/docs/foundry/compute-modules/overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

