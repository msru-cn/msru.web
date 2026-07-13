Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/agents/scoped-permissions/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/agents/scoped-permissions/#scoped-permissions)Scoped permissions

Beta

Agents are in the [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development and may not be available on your enrollment. Functionality may change during active development.

Agents authenticate against the [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/), [Ontology MCP (OMCP)](https://www.palantir.com/docs/foundry/ontology-mcp/overview/), and [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) with scoped permissions out of the box. You do not need to provision a client ID and secret or pass a Foundry token to call tools.

## [](https://www.palantir.com/docs/foundry/agents/scoped-permissions/#how-scoped-permissions-work)How scoped permissions work

When you create an agent from the [agent template](https://www.palantir.com/docs/foundry/agents/agent-templates/), Foundry provisions the credentials the agent needs to call OSDK, OMCP, and Palantir MCP on your behalf. The template resolves connection details at runtime, including the service URL and authorization headers, through helper functions provided by the agent library. Your agent code requests a configured client or MCP connection and uses it directly.

Because credentials are scoped and managed by the platform, the following are not required in agent code:

*   A client ID and secret
*   A Foundry token
*   Manual OAuth client setup

The agent only has access to the resources permitted by its scope. Access is governed by the [Ontology binding](https://www.palantir.com/docs/foundry/agents/publish-and-call/#ontology-binding) selected when the agent is published and the [application restrictions](https://www.palantir.com/docs/foundry/developer-console/application-restrictions/) that apply to the underlying client.

## [](https://www.palantir.com/docs/foundry/agents/scoped-permissions/#retrieve-an-ontology-mcp-connection)Retrieve an Ontology MCP connection

The agent library (`@palantir/agent-templates-bundle`) exposes a helper that returns a ready-to-use Ontology MCP connection. The connection includes the resolved URL and authorization headers, so no client ID, secret, or Foundry token is required. For implementation details, see [Agent templates](https://www.palantir.com/docs/foundry/agents/agent-templates/#ontology-mcp).

## [](https://www.palantir.com/docs/foundry/agents/scoped-permissions/#retrieve-an-osdk-client)Retrieve an OSDK client

The agent library also provides a helper to construct an OSDK client bound to your selected Ontology. For implementation details, see [Agent templates](https://www.palantir.com/docs/foundry/agents/agent-templates/#ontology-sdk).

## [](https://www.palantir.com/docs/foundry/agents/scoped-permissions/#next-steps)Next steps

*   [Configure OSDK and Ontology MCP connections in your agent code.](https://www.palantir.com/docs/foundry/agents/agent-templates/)
*   [Build and publish your first agent.](https://www.palantir.com/docs/foundry/agents/create-agent/)

[← PREVIOUS Use cases](https://www.palantir.com/docs/foundry/agents/use-cases/)

[NEXT Agent templates →](https://www.palantir.com/docs/foundry/agents/agent-templates/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

