Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel/#microsoft-excel)Microsoft Excel

The Microsoft Excel connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Excel.

To create a new Microsoft Excel source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Excel-specific configuration and networking. For the complete property reference, see the [official Microsoft Excel driver documentation ↗](https://cdn.cdata.com/help/RXK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`ConnectionType` ↗](https://cdn.cdata.com/help/RXK/jdbc/RSBExcel_p_ConnectionType.htm) | Mandatory | Specifies the file storage service, server, or file access protocol through which your Microsoft Excel files are stored and retrieved. | `Local` |
| [`SSLMode` ↗](https://cdn.cdata.com/help/RXK/jdbc/RSBExcel_p_SSLMode.htm) | Mandatory | The authentication mechanism to be used when connecting to the FTP or FTPS server. | `IMPLICIT` |
| [`URI` ↗](https://cdn.cdata.com/help/RXK/jdbc/RSBExcel_p_URI.htm) | Mandatory | The Uniform Resource Identifier (URI) for the Excel resource location. | `C:\MyExcelWorkbooks\SampleWorkbook.xlsx` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/RXK/jdbc/RSBExcel_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/RXK/jdbc/RSBExcel_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/RXK/jdbc/RSBExcel_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel/#networking)Networking

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

[← PREVIOUS Microsoft Dynamics NAV](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-nav/)

[NEXT Microsoft Excel Online →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel-online/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

