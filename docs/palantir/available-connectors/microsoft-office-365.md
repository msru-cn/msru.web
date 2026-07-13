Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-office-365/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-office-365/#microsoft-office-365)Microsoft Office 365

The Microsoft Office 365 connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Office 365.

To create a new Microsoft Office 365 source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Office 365-specific configuration and networking. For the complete property reference, see the [official Microsoft Office 365 driver documentation ↗](https://cdn.cdata.com/help/CXM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-office-365/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`DefaultGroups` ↗](https://cdn.cdata.com/help/CXM/jdbc/RSBOffice365_p_DefaultGroups.htm) | Mandatory | Determines the default group context when accessing group-scoped resources in Microsoft Office 365. | `CurrentUser` |
| [`DefaultUser` ↗](https://cdn.cdata.com/help/CXM/jdbc/RSBOffice365_p_DefaultUser.htm) | Mandatory | Determines the default user context when accessing user-scoped resources in Microsoft Office 365. | `CurrentUser` |
| [`MessageContentType` ↗](https://cdn.cdata.com/help/CXM/jdbc/RSBOffice365_p_MessageContentType.htm) | Mandatory | Determines whether to return messages in HTML format or as text. | `html` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/CXM/jdbc/RSBOffice365_p_AuthScheme.htm) | Recommended | Specifies the type of authentication to use when connecting to Microsoft Office 365. If this property is left blank, the default authentication is used. | `AzureServicePrincipal` |
| [`AzureTenant` ↗](https://cdn.cdata.com/help/CXM/jdbc/RSBOffice365_p_AzureTenant.htm) | Recommended | Identifies the Microsoft Office 365 tenant being used to access data. Accepts either the tenant's domain name (for example, contoso.onmicrosoft.com ) or its directory (tenant) ID. | — |
| [`GroupId` ↗](https://cdn.cdata.com/help/CXM/jdbc/RSBOffice365_p_GroupId.htm) | Recommended | Specifies the Id of a Microsoft Office 365 group whose data you want to access. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/CXM/jdbc/RSBOffice365_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/CXM/jdbc/RSBOffice365_p_OAuthClientId.htm) | Recommended | Specifies the client ID (also known as the consumer key) assigned to your custom OAuth application. This ID is required to identify the application to the OAuth authorization server during authentication. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/CXM/jdbc/RSBOffice365_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret assigned to your custom OAuth application. This confidential value is used to authenticate the application to the OAuth authorization server. (Custom OAuth applications only.) | — |
| [`UserId` ↗](https://cdn.cdata.com/help/CXM/jdbc/RSBOffice365_p_UserId.htm) | Recommended | Specifies the Id of a Microsoft Office 365 user whose data you want to access. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-office-365/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| graph.microsoft.com | If `AzureEnvironment=GLOBAL` (default) |
| login.microsoftonline.com | If `AuthScheme=AzureAD` (default), AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=GLOBAL` |
| microsoftgraph.chinacloudapi.cn | If `AzureEnvironment=CHINA` |
| login.chinacloudapi.cn | If `AuthScheme=AzureAD` (default), AzureServicePrincipal , AzureServicePrincipalCert AND `AzureEnvironment=CHINA` |
| graph.microsoft.us | If `AzureEnvironment=USGOVT` |
| login.microsoftonline.us | If `AuthScheme=AzureAD` (default), AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=USGOVT` or USGOVTDOD |
| dod-graph.microsoft.us | If `AzureEnvironment=USGOVTDOD` |

[← PREVIOUS Microsoft Exchange](https://www.palantir.com/docs/foundry/available-connectors/microsoft-exchange/)

[NEXT Microsoft OneDrive →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-onedrive/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

