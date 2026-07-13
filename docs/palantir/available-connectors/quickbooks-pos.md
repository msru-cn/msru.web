Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/quickbooks-pos/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-pos/#quickbooks-pos)QuickBooks POS

The QuickBooks POS connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for QuickBooks POS.

To create a new QuickBooks POS source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for QuickBooks POS-specific configuration and networking. For the complete property reference, see the [official QuickBooks POS driver documentation ↗](https://cdn.cdata.com/help/DRJ/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-pos/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Password` ↗](https://cdn.cdata.com/help/DRJ/jdbc/RSBQBPOS_p_Password.htm) | Mandatory | A password for the CData QuickBooks Desktop Gateway connection. | — |
| [`URL` ↗](https://cdn.cdata.com/help/DRJ/jdbc/RSBQBPOS_p_URL.htm) | Mandatory | The URL for the CData QuickBooks Desktop Gateway. For example, [http://localhost:2080](http://localhost:2080/). | `http://localhost:8166` |
| [`User` ↗](https://cdn.cdata.com/help/DRJ/jdbc/RSBQBPOS_p_User.htm) | Mandatory | A username for the CData QuickBooks Desktop Gateway connection (if required by the Desktop Gateway). | — |
| [`ApplicationName` ↗](https://cdn.cdata.com/help/DRJ/jdbc/RSBQBPOS_p_ApplicationName.htm) | Recommended | The name of the developer's application. | — |
| [`CompanyFile` ↗](https://cdn.cdata.com/help/DRJ/jdbc/RSBQBPOS_p_CompanyFile.htm) | Recommended | The name of the CompanyFile to open. | — |
| [`QBPOSPractice` ↗](https://cdn.cdata.com/help/DRJ/jdbc/RSBQBPOS_p_QBPOSPractice.htm) | Recommended | Specifies whether to use practice mode within QuickBooks Point Of Sale. | `FALSE` |
| [`QBPOSVersion` ↗](https://cdn.cdata.com/help/DRJ/jdbc/RSBQBPOS_p_QBPOSVersion.htm) | Recommended | The QuickBooks Point Of Sale software version. | `12` |
| [`QBPOSXMLVersion` ↗](https://cdn.cdata.com/help/DRJ/jdbc/RSBQBPOS_p_QBPOSXMLVersion.htm) | Recommended | The version of QBPOSXML used in the outgoing message. | `3.0` |
| [`SSLServerCert` ↗](https://cdn.cdata.com/help/DRJ/jdbc/RSBQBPOS_p_SSLServerCert.htm) | Recommended | The certificate to be accepted from the server when connecting using TLS/SSL. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-pos/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property - Address and Port of the host machine running the CData QuickBooks Gateway |

[← PREVIOUS QuickBooks Online](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-online/)

[NEXT Raisers Edge NXT →](https://www.palantir.com/docs/foundry/available-connectors/raisers-edge-nxt/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

