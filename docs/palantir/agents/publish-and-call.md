Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/agents/publish-and-call/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#publish-and-call-an-agent)Publish and call an agent

Beta

Agents are in the [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development and may not be available on your enrollment. Functionality may change during active development.

Every agent is published with an Ontology binding and an agent API name. Once published, the agent's function is callable from both [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) and the [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) with no additional configuration.

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#ontology-binding)Ontology binding

An Ontology binding associates your agent with a specific Ontology. The binding determines which Ontology resources the agent can access through its [scoped permissions](https://www.palantir.com/docs/foundry/agents/scoped-permissions/).

To ensure every agent is bound to an Ontology, the agent configuration page includes a required **Ontology** selector. Select the Ontology your agent will read from and write to before you publish.

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#agent-api-name)Agent API name

Each agent is published with an agent API name that identifies the agent's function when it is called from Workshop or OSDK. The agent API name is derived from the repository name, and you can edit it in the **Agent API name** field on the agent configuration page.

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#publish-an-agent)Publish an agent

When you publish an agent, Foundry registers it with its Ontology binding and agent API name and exposes it as a function. After publishing, no further configuration is required to call the agent.

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#trigger-an-agent)Trigger an agent

An agent function runs asynchronously and is not subject to the synchronous function execution limit of five minutes.

### [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#from-automate-recommended)From Automate (recommended)

We recommend triggering an agent from [Automate](https://www.palantir.com/docs/foundry/automate/overview/). Configure an automation with a [function effect](https://www.palantir.com/docs/foundry/automate/effect-function/) that points at your agent's function. The agent runs as the user that triggered the automation, or as the service user backing the automation.

### [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#from-workshop-ontology-sdk-or-ontology-actions)From Workshop, Ontology SDK, or Ontology actions

You can also invoke an agent function wherever asynchronous functions are callable, including [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/), the [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/), and Ontology actions.

Note the following when calling an agent function directly:

*   **The function returns no value:** An agent function returns `Void`, so it cannot be called as a query function. To invoke it from Workshop, the Ontology SDK, or Ontology actions, call it as a function effect or wrap it in a [TypeScript Ontology edit function](https://www.palantir.com/docs/foundry/functions/typescript-v2-ontology-edits/) that invokes the agent.
*   **Consume results through the Ontology:** Because the function does not return a value, have your agent write its transcripts or results to Ontology objects, then read those objects to consume the output. This pattern also applies when grading agent output with [AIP Evals](https://www.palantir.com/docs/foundry/aip-evals/overview/).
*   **Streaming and batch invocation are not supported.**

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#pass-arguments-to-an-agent)Pass arguments to an agent

[Agents accept arguments](https://www.palantir.com/docs/foundry/agents/agent-templates/#agent-arguments) defined in the `AgentArguments` schema in `agent/index.ts`.

When you trigger an agent, provide a JSON object with keys that match your `AgentArguments` schema. For Ontology objects, pass primary key values rather than whole objects, and re-fetch the objects inside your agent through the [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) or [Ontology MCP](https://www.palantir.com/docs/foundry/ontology-mcp/overview/).

To run an agent locally during development, provide arguments through the template's `start` command using `--json-args` for inline JSON or `--json-args-file` for a JSON file:

Copied!

```bash
1npm start -- --json-args '{"additionalAgentContext": "some context"}'
```

## [](https://www.palantir.com/docs/foundry/agents/publish-and-call/#next-steps)Next steps

*   [Build and publish your first agent in Foundry.](https://www.palantir.com/docs/foundry/agents/create-agent/)

[← PREVIOUS Agent templates](https://www.palantir.com/docs/foundry/agents/agent-templates/)

[NEXT How-to guides / Build an agent in Foundry →](https://www.palantir.com/docs/foundry/agents/create-agent/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

