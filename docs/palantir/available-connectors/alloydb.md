Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/alloydb/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/alloydb/#alloydb)AlloyDB

The AlloyDB connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for AlloyDB.

To create a new AlloyDB source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for AlloyDB-specific configuration and networking. For the complete property reference, see the [official AlloyDB driver documentation ↗](https://cdn.cdata.com/help/KYK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/alloydb/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/KYK/jdbc/RSBAlloydb_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are Password, OAuth. | `Password` |
| [`Password` ↗](https://cdn.cdata.com/help/KYK/jdbc/RSBAlloydb_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`Server` ↗](https://cdn.cdata.com/help/KYK/jdbc/RSBAlloydb_p_Server.htm) | Mandatory | The host name or IP address of the server. | `{serverAddress}` |
| [`User` ↗](https://cdn.cdata.com/help/KYK/jdbc/RSBAlloydb_p_User.htm) | Mandatory | Specifies the user ID of the authenticating AlloyDB user account. | — |
| [`UseSSL` ↗](https://cdn.cdata.com/help/KYK/jdbc/RSBAlloydb_p_UseSSL.htm) | Mandatory | This field sets whether SSL is enabled. | `TRUE` |
| [`Database` ↗](https://cdn.cdata.com/help/KYK/jdbc/RSBAlloydb_p_Database.htm) | Recommended | The name of the AlloyDB database. | — |
| [`Port` ↗](https://cdn.cdata.com/help/KYK/jdbc/RSBAlloydb_p_Port.htm) | Recommended | The port number of the AlloyDB server. | `5432` |

## [](https://www.palantir.com/docs/foundry/available-connectors/alloydb/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always. Server and Port connection properties (default `Port=5432`) |

[← PREVIOUS Airtable](https://www.palantir.com/docs/foundry/available-connectors/airtable/)

[NEXT Amazon DynamoDB →](https://www.palantir.com/docs/foundry/available-connectors/amazon-dynamodb/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

