Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/oracle-sales/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/oracle-sales/#oracle-sales)Oracle Sales

The Oracle Sales connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Oracle Sales.

To create a new Oracle Sales source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Oracle Sales-specific configuration and networking. For the complete property reference, see the [official Oracle Sales driver documentation ↗](https://cdn.cdata.com/help/EOK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle-sales/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`HostURL` ↗](https://cdn.cdata.com/help/EOK/jdbc/RSBOracleSalesCloud_p_HostURL.htm) | Mandatory | The URL to the Oracle Sales server used for logging in. | `https://my.host.oraclecloud.com` |
| [`Password` ↗](https://cdn.cdata.com/help/EOK/jdbc/RSBOracleSalesCloud_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`Username` ↗](https://cdn.cdata.com/help/EOK/jdbc/RSBOracleSalesCloud_p_Username.htm) | Mandatory | The username of the Oracle Sales account used to authenticate to the server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle-sales/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <HostURL> | Always. HostURL connection property |

[← PREVIOUS Oracle NetSuite / NetSuite SuiteTalk (JDBC)](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/)

[NEXT Oracle Service Cloud →](https://www.palantir.com/docs/foundry/available-connectors/oracle-service-cloud/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

