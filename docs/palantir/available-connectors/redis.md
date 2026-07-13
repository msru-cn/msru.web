Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/redis/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/redis/#redis)Redis

The Redis connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Redis.

To create a new Redis source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Redis-specific configuration and networking. For the complete property reference, see the [official Redis driver documentation ↗](https://cdn.cdata.com/help/EIK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/redis/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/EIK/jdbc/RSBRedis_p_AuthScheme.htm) | Mandatory | The authentication mechanism that the provider will use to authenticate with Redis. | `Password` |
| [`Server` ↗](https://cdn.cdata.com/help/EIK/jdbc/RSBRedis_p_Server.htm) | Mandatory | The host name or IP address of the server hosting the Redis instance. | `{serverAddress}` |
| [`UseSSL` ↗](https://cdn.cdata.com/help/EIK/jdbc/RSBRedis_p_UseSSL.htm) | Mandatory | This field sets whether SSL is enabled. | `TRUE` |
| [`EnableCluster` ↗](https://cdn.cdata.com/help/EIK/jdbc/RSBRedis_p_EnableCluster.htm) | Recommended | This field sets whether the Redis Cluster Mode is enabled. | `FALSE` |
| [`LogicalDatabase` ↗](https://cdn.cdata.com/help/EIK/jdbc/RSBRedis_p_LogicalDatabase.htm) | Recommended | The index of the Redis Logical Database. | `0` |
| [`Password` ↗](https://cdn.cdata.com/help/EIK/jdbc/RSBRedis_p_Password.htm) | Recommended | The password used to authenticate with Redis. | — |
| [`Port` ↗](https://cdn.cdata.com/help/EIK/jdbc/RSBRedis_p_Port.htm) | Recommended | The port for the Redis database. | `6379` |
| [`ReplicaSet` ↗](https://cdn.cdata.com/help/EIK/jdbc/RSBRedis_p_ReplicaSet.htm) | Recommended | This property allows you to specify multiple servers in addition to the one configured in Server and Port . Specify both a server name and port; separate servers with a comma. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/redis/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Server and Port connection properties; default `Port=6379` |
| <SSHServer>:<SSHPort> | If `UseSSH=TRUE,` default `SSHPort=22` |

[← PREVIOUS Reckon Accounts Hosted](https://www.palantir.com/docs/foundry/available-connectors/reckon-accounts-hosted/)

[NEXT REST API plugin (legacy) →](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

