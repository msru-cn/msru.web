Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel-online/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel-online/#microsoft-excel-online)Microsoft Excel Online

The Microsoft Excel Online connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Excel Online.

To create a new Microsoft Excel Online source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Excel Online-specific configuration and networking. For the complete property reference, see the [official Microsoft Excel Online driver documentation ↗](https://cdn.cdata.com/help/FXK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel-online/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/FXK/jdbc/RSBExcelOnline_p_AuthScheme.htm) | Recommended | Specifies the type of authentication to use when connecting to Microsoft Excel Online. If this property is left blank, the default authentication is used. | `AzureServicePrincipal` |
| [`AzureTenant` ↗](https://cdn.cdata.com/help/FXK/jdbc/RSBExcelOnline_p_AzureTenant.htm) | Recommended | Identifies the Microsoft Excel Online tenant being used to access data, either by name (for example, contoso.onmicrosoft.com) or ID. (Conditional). | — |
| [`Drive` ↗](https://cdn.cdata.com/help/FXK/jdbc/RSBExcelOnline_p_Drive.htm) | Recommended | The Id of the drive. | — |
| [`IncludeSharePointSites` ↗](https://cdn.cdata.com/help/FXK/jdbc/RSBExcelOnline_p_IncludeSharePointSites.htm) | Recommended | Whether to retrieve drives for all SharePoint sites when querying Drives view. If 'true' the provider will retrieve all Site IDs recursively and for each of them issue a separate call to get their drives. Therefore, be aware that setting this property to 'true' may decrease performance for the Drives view. Note that the SharePointAccessToken or OAuthJWTCert connection property must be specified to query the SharePointSites view and other views if IncludeSharePointSites is set to 'true' when using the CLIENT OAuthGrantType or the AzureServicePrincipal AuthScheme. | `FALSE` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/FXK/jdbc/RSBExcelOnline_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/FXK/jdbc/RSBExcelOnline_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/FXK/jdbc/RSBExcelOnline_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`ShowSharedDocuments` ↗](https://cdn.cdata.com/help/FXK/jdbc/RSBExcelOnline_p_ShowSharedDocuments.htm) | Recommended | Whether or not to show shared documents. | `FALSE` |
| [`Workbook` ↗](https://cdn.cdata.com/help/FXK/jdbc/RSBExcelOnline_p_Workbook.htm) | Recommended | The name or Id of the workbook. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel-online/#networking)Networking

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
| <SharepointURL> | If setting the SharepointURL property |

[← PREVIOUS Microsoft Excel](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel/)

[NEXT Microsoft Exchange →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-exchange/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

