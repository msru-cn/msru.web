Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-gp/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-gp/#microsoft-dynamics-gp)Microsoft Dynamics GP

The Microsoft Dynamics GP connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Dynamics GP.

To create a new Microsoft Dynamics GP source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Dynamics GP-specific configuration and networking. For the complete property reference, see the [official Microsoft Dynamics GP driver documentation ↗](https://cdn.cdata.com/help/DPK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-gp/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`CompanyId` ↗](https://cdn.cdata.com/help/DPK/jdbc/RSBDynamicsGP_p_CompanyId.htm) | Mandatory | The unique identifier of the company to access as a data source. | — |
| [`URL` ↗](https://cdn.cdata.com/help/DPK/jdbc/RSBDynamicsGP_p_URL.htm) | Mandatory | The URL of the Dynamics GP server. | `https://{servername}:{port}/Dynamics/GPService` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/DPK/jdbc/RSBDynamicsGP_p_AuthScheme.htm) | Recommended | The scheme used for authentication. Accepted entries are NTLM, Basic, Digest, None, and Negotiate. | `WSS` |
| [`Password` ↗](https://cdn.cdata.com/help/DPK/jdbc/RSBDynamicsGP_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/DPK/jdbc/RSBDynamicsGP_p_User.htm) | Recommended | Specifies the user ID of the authenticating Microsoft Dynamics GP user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-gp/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property. Pattern: http://{server}:{port}/Dynamics/GPService |
| schemas.microsoft.com | Always |
| schemas.datacontract.org | Always |

[← PREVIOUS Microsoft Dynamics CRM](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-crm/)

[NEXT Microsoft Dynamics NAV →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-nav/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

