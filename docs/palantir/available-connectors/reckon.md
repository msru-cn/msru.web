Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/reckon/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/reckon/#reckon)Reckon

The Reckon connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Reckon.

To create a new Reckon source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Reckon-specific configuration and networking. For the complete property reference, see the [official Reckon driver documentation ↗](https://cdn.cdata.com/help/BAK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/reckon/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Password` ↗](https://cdn.cdata.com/help/BAK/jdbc/RSBQuickBooks_p_Password.htm) | Mandatory | Specifies the password required to authenticate with the Reckon Gateway. | — |
| [`URL` ↗](https://cdn.cdata.com/help/BAK/jdbc/RSBQuickBooks_p_URL.htm) | Mandatory | Specifies the URL where the Reckon Gateway is running. This is the endpoint the driver uses to communicate with Reckon Desktop. | `http://localhost:8166` |
| [`User` ↗](https://cdn.cdata.com/help/BAK/jdbc/RSBQuickBooks_p_User.htm) | Mandatory | Specifies the username required to authenticate the connection to the Reckon Gateway. | — |
| [`ApplicationName` ↗](https://cdn.cdata.com/help/BAK/jdbc/RSBQuickBooks_p_ApplicationName.htm) | Recommended | Specifies the name of the application connecting to Reckon. | `CData Reckon Connector` |
| [`CompanyFile` ↗](https://cdn.cdata.com/help/BAK/jdbc/RSBQuickBooks_p_CompanyFile.htm) | Recommended | Specifies the Reckon company file the provider uses during the connection. | — |
| [`SSLServerCert` ↗](https://cdn.cdata.com/help/BAK/jdbc/RSBQuickBooks_p_SSLServerCert.htm) | Recommended | Specifies the certificate to be accepted from the server when connecting using TLS/SSL. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/reckon/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property - Address and Port of the host machine running the CData Reckon Gateway |

[← PREVIOUS Raisers Edge NXT](https://www.palantir.com/docs/foundry/available-connectors/raisers-edge-nxt/)

[NEXT Reckon Accounts Hosted →](https://www.palantir.com/docs/foundry/available-connectors/reckon-accounts-hosted/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

