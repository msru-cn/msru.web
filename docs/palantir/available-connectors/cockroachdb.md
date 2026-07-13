Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/cockroachdb/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/cockroachdb/#cockroachdb)CockroachDB

The CockroachDB connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for CockroachDB.

To create a new CockroachDB source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for CockroachDB-specific configuration and networking. For the complete property reference, see the [official CockroachDB driver documentation ↗](https://cdn.cdata.com/help/HJK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/cockroachdb/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Database` ↗](https://cdn.cdata.com/help/HJK/jdbc/RSBCockroachDB_p_Database.htm) | Mandatory | The name of the Cockroach database. | — |
| [`Password` ↗](https://cdn.cdata.com/help/HJK/jdbc/RSBCockroachDB_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`Port` ↗](https://cdn.cdata.com/help/HJK/jdbc/RSBCockroachDB_p_Port.htm) | Mandatory | The port number of the CockroachDB server. | `26257` |
| [`Server` ↗](https://cdn.cdata.com/help/HJK/jdbc/RSBCockroachDB_p_Server.htm) | Mandatory | The host name or IP address of the server. | `localhost` |
| [`User` ↗](https://cdn.cdata.com/help/HJK/jdbc/RSBCockroachDB_p_User.htm) | Mandatory | Specifies the user ID of the authenticating CockroachDB user account. | — |
| [`UseSSL` ↗](https://cdn.cdata.com/help/HJK/jdbc/RSBCockroachDB_p_UseSSL.htm) | Mandatory | Whether SSL is enabled. | `TRUE` |
| [`Cluster` ↗](https://cdn.cdata.com/help/HJK/jdbc/RSBCockroachDB_p_Cluster.htm) | Recommended | The name of the CockroachDB cluster. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/cockroachdb/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always. Server and Port connection properties (default: localhost:26257) |

[← PREVIOUS Cloudant](https://www.palantir.com/docs/foundry/available-connectors/cloudant/)

[NEXT Confluence →](https://www.palantir.com/docs/foundry/available-connectors/confluence/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

