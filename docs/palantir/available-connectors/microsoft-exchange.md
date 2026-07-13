Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-exchange/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-exchange/#microsoft-exchange)Microsoft Exchange

The Microsoft Exchange connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Exchange.

To create a new Microsoft Exchange source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Exchange-specific configuration and networking. For the complete property reference, see the [official Microsoft Exchange driver documentation ↗](https://cdn.cdata.com/help/CEM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-exchange/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`DefaultGroups` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_DefaultGroups.htm) | Mandatory | Determines the default group context when accessing group-scoped resources in Microsoft Exchange. | `AllGroups` |
| [`DefaultUser` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_DefaultUser.htm) | Mandatory | Determines the default user context when accessing user-scoped resources in Microsoft Exchange. | `CurrentUser` |
| [`Server` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_Server.htm) | Mandatory | Specifies the URL of the Microsoft Exchange server to connect to. | `https://outlook.office365.com/EWS/Exchange.asmx` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_AuthScheme.htm) | Recommended | Specifies the authentication scheme used to connect to the Microsoft Exchange server. | `AzureServicePrincipal` |
| [`AzureTenant` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_AzureTenant.htm) | Recommended | Identifies the Microsoft Exchange tenant being used to access data. Accepts either the tenant's domain name (for example, contoso.onmicrosoft.com ) or its directory (tenant) ID. | — |
| [`GroupId` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_GroupId.htm) | Recommended | Specifies the Id of a Microsoft Exchange group whose data you want to access. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_OAuthClientId.htm) | Recommended | Specifies the client ID (also known as the consumer key) assigned to your custom OAuth application. This ID is required to identify the application to the OAuth authorization server during authentication. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret assigned to your custom OAuth application. This confidential value is used to authenticate the application to the OAuth authorization server. (Custom OAuth applications only.) | — |
| [`Platform` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_Platform.htm) | Recommended | Specifies the Microsoft Exchange platform to target when establishing a connection. | `Exchange_Online` |
| [`Schema` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_Schema.htm) | Recommended | Specifies the schema to use when connecting to the Microsoft Exchange platform. | `EWS` |
| [`UserId` ↗](https://cdn.cdata.com/help/CEM/jdbc/RSBExchange_p_UserId.htm) | Recommended | Specifies the Id of a Microsoft Exchange user whose data you want to access. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-exchange/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server> | Always. For Exchange Online, use `Server=' https://outlook.office365.com/EWS/Exchange.asmx'` |
| outlook.office365.com | If `Platform=Exchange_Online` AND `Schema=EWS` |
| graph.microsoft.com | If `Platform=Exchange_Online` AND `Schema=MSGraph` |
| login.microsoftonline.com | If `Platform=Exchange_Online` (default) AND `AuthScheme=AzureAD,` AzureServicePrincipal, or AzureServicePrincipalCert |
| <KerberosKDC>:88 | If `AuthScheme=Negotiate` |
| <KerberosServiceKDC>:88 | If `AuthScheme=Negotiate` AND Kerberos topology uses multiple realms |

[← PREVIOUS Microsoft Excel Online](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel-online/)

[NEXT Microsoft Office 365 →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-office-365/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

