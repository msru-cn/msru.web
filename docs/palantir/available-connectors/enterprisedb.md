Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/enterprisedb/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/enterprisedb/#enterprisedb)EnterpriseDB

The EnterpriseDB connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for EnterpriseDB.

To create a new EnterpriseDB source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for EnterpriseDB-specific configuration and networking. For the complete property reference, see the [official EnterpriseDB driver documentation ↗](https://cdn.cdata.com/help/JEK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/enterprisedb/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Password` ↗](https://cdn.cdata.com/help/JEK/jdbc/RSBEnterpriseDB_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`Server` ↗](https://cdn.cdata.com/help/JEK/jdbc/RSBEnterpriseDB_p_Server.htm) | Mandatory | The host name or IP address of the server. | `localhost` |
| [`User` ↗](https://cdn.cdata.com/help/JEK/jdbc/RSBEnterpriseDB_p_User.htm) | Mandatory | Specifies the user ID of the authenticating EnterpriseDB user account. | — |
| [`UseSSL` ↗](https://cdn.cdata.com/help/JEK/jdbc/RSBEnterpriseDB_p_UseSSL.htm) | Mandatory | Whether SSL is enabled. | `TRUE` |
| [`Database` ↗](https://cdn.cdata.com/help/JEK/jdbc/RSBEnterpriseDB_p_Database.htm) | Recommended | The name of the EnterpriseDB database. | — |
| [`Port` ↗](https://cdn.cdata.com/help/JEK/jdbc/RSBEnterpriseDB_p_Port.htm) | Recommended | The port number of the EnterpriseDB server. | `5444` |

## [](https://www.palantir.com/docs/foundry/available-connectors/enterprisedb/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always |

[← PREVIOUS eBay Analytics](https://www.palantir.com/docs/foundry/available-connectors/ebay-analytics/)

[NEXT Epicor Kinetic →](https://www.palantir.com/docs/foundry/available-connectors/epicor-kinetic/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

