Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-nav/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-nav/#microsoft-dynamics-nav)Microsoft Dynamics NAV

The Microsoft Dynamics NAV connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Dynamics NAV.

To create a new Microsoft Dynamics NAV source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Dynamics NAV-specific configuration and networking. For the complete property reference, see the [official Microsoft Dynamics NAV driver documentation ↗](https://cdn.cdata.com/help/CNK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-nav/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`ServerInstance` ↗](https://cdn.cdata.com/help/CNK/jdbc/RSBDynamicsNAV_p_ServerInstance.htm) | Mandatory | The instance of the Dynamics NAV server. For example, DynamicsNAV71. | `DynamicsNAV71` |
| [`URL` ↗](https://cdn.cdata.com/help/CNK/jdbc/RSBDynamicsNAV_p_URL.htm) | Mandatory | URL to the Microsoft Dynamics NAV server organization root. For example, [http://MyServer:7048](http://myserver:7048/). | `https://{serverName}:{port}` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/CNK/jdbc/RSBDynamicsNAV_p_AuthScheme.htm) | Recommended | The scheme used for authentication. Accepted entries are NTLM, Basic, Digest, None, or Negotiate. Negotiate is the default option. | `Negotiate` |
| [`Company` ↗](https://cdn.cdata.com/help/CNK/jdbc/RSBDynamicsNAV_p_Company.htm) | Recommended | The company to submit queries against. For example, 'CRONUS Canada, Inc.'. | `CRONUS Canada, Inc.` |
| [`Password` ↗](https://cdn.cdata.com/help/CNK/jdbc/RSBDynamicsNAV_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/CNK/jdbc/RSBDynamicsNAV_p_User.htm) | Recommended | Specifies the user ID of the authenticating Microsoft Dynamics NAV user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-nav/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property. Pattern: http://{server}:{port} |

[← PREVIOUS Microsoft Dynamics GP](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-gp/)

[NEXT Microsoft Excel →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

