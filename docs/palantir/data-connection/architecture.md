Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/architecture/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/architecture/#architecture-examples)Architecture examples

## [](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-direct-connection-policies)Foundry worker with direct connection policies

This type of connection can also be referred to as a "direct connection".

Foundry worker with direct connection policies is the recommended default for accessing external systems that accept inbound traffic from Foundry, such as REST APIs and cloud/SaaS systems.

In this scenario, data connections run in an isolated compute container called a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker), which handles authenticated encrypted network requests. The external system must accept inbound traffic from Foundry. Network egress from Foundry is managed and administered in-platform via [direct connection egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#direct-connection-egress-policies).

External system credentials are stored with AES-256-GCM server-side encryption and can only be decrypted by containers triggered by authorized users.

To create a direct connection, follow instructions about [setting up a source](https://www.palantir.com/docs/foundry/data-connection/set-up-source/).

![Image 4: Architecture diagram of direct connection.](https://www.palantir.com/docs/resources/foundry/data-connection/direct-connection-architecture.png)

## [](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-agent-proxy-policy)Foundry worker with agent proxy policy

This type of connection can also be referred to as an "agent proxy" or an "agent thin mode" connection.

Foundry worker with agent proxy policies is the recommended architecture to access external systems hosted on private networks. It requires the use of a [data connection agent](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agents).

In this scenario, the agent acts as a simple network tunnel without performing any data processing itself.

The agent initiates a network request with Foundry to establish a websocket connection. [Learn more about network controls available on agents.](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/#security-controls-specific-to-agent-proxy)

All data connection and computation capabilities are executed by a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker), an isolated container with scalable compute resources that processes data and communicates with external systems via the provided websocket.

The ability to use the agent as a proxy is granularly managed and administered in-platform via [agent proxy egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies).

Multiple agents can be used to load balance workloads across multiple external systems.

Like [direct connections](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-direct-connection-policies), external system credentials are stored using AES-256-GCM server-side encryption and can only be decrypted by the container triggered by authorized users.

To create an agent-proxy connection, you will need to:

*   [Set up an agent.](https://www.palantir.com/docs/foundry/data-connection/set-up-agent/)
*   Create one or many [agent proxy policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies).
*   [Set up a Foundry worker source](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/) using the policies above.

![Image 5: Architecture diagram of agent proxy connection.](https://www.palantir.com/docs/resources/foundry/data-connection/agent-proxy-architecture.png)

## [](https://www.palantir.com/docs/foundry/data-connection/architecture/#legacy-architecture-agent-worker)Legacy architecture: Agent worker

Legacy

Agent worker is in the [legacy](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development. We recommend [Foundry worker with agent proxy](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-agent-proxy-policy) for on-premise and privately hosted systems. See [Foundry worker vs. agent worker](https://www.palantir.com/docs/foundry/data-connection/foundry-worker-vs-agent-worker/) for the comparison.

This type of connection can also be referred to as "agent thick mode".

Agent worker connection is the historical architecture used to access external systems hosted on private networks from Foundry. It requires the use of a [data connection agent](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agents). [Learn more about agent worker known limitations.](https://www.palantir.com/docs/foundry/data-connection/agent-worker/#known-limitations)

To migrate an existing agent worker source to a Foundry worker, follow the [migration guide](https://www.palantir.com/docs/foundry/data-connection/foundry-worker-vs-agent-worker/#switch-source-from-agent-worker-to-foundry-worker).

In this scenario, the agent constantly polls Foundry via unidirectional outbound connections secured by HTTPS for new tasks to execute. Once received, the task is executed by the agent itself, also called [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) and results are sent to Foundry over that same unidirectional connection. All the networking configuration required for the agent to be able to communicate with internal source systems is [configured on the agent host itself](https://www.palantir.com/docs/foundry/data-connection/set-up-agent/#configure-agent-network-access).

External system credentials are stored on the platform using AES-128-GCM encryption with keys stored on the agent. During capability execution, the agent retrieves encrypted credentials from Foundry, decrypts them locally, and uses them for queries. Decrypted credentials are automatically deleted from memory after execution.

To create an agent worker connection, you will need to:

*   [Set up an agent.](https://www.palantir.com/docs/foundry/data-connection/set-up-agent/)
*   Configure it to be an [agent worker](https://www.palantir.com/docs/foundry/data-connection/agent-worker/).
*   [Set up an agent worker source](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) and assign it that agent.

![Image 6: Architecture diagram of agent worker.](https://www.palantir.com/docs/resources/foundry/data-connection/agent-worker-architecture.png)

## [](https://www.palantir.com/docs/foundry/data-connection/architecture/#summary)Summary

| Type of connection | Capability execution | Networking | System credentials |
| --- | --- | --- | --- |
| [Direct connection](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-direct-connection-policies) | In Foundry | Direct from Foundry to source systems. | Stored encrypted in platform with encryption keys in platform. |
| [Agent proxy](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-agent-proxy-policy) | In Foundry | Outbound connection from agent to Foundry to establish a websocket and proxy traffic. | Stored encrypted in platform with encryption keys in platform. |
| [Agent worker (legacy)](https://www.palantir.com/docs/foundry/data-connection/architecture/#legacy-architecture-agent-worker) | On agent host | Outbound connection from agent to Foundry to poll tasks. Inbound connection from agent to source systems. | Stored encrypted in platform with encryption keys on agent. |

[← PREVIOUS Core concepts](https://www.palantir.com/docs/foundry/data-connection/core-concepts/)

[NEXT Connection security →](https://www.palantir.com/docs/foundry/data-connection/connection-security/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

