Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/#microsoft-power-bi-xmla)Microsoft Power BI® XMLA

The following page discusses the Microsoft Power BI® XMLA connector for data integration. If you are searching for information on the Power BI® connector to access Foundry resources from the Power Query interface, review our [analytics connectivity documentation](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-overview/).

The Microsoft Power BI® XMLA connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Power BI® XMLA.

To create a new Microsoft Power BI® XMLA source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Power BI® XMLA-specific configuration and networking. For the complete property reference, see the [official Microsoft Power BI® XMLA driver documentation ↗](https://cdn.cdata.com/help/LGM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/LGM/jdbc/RSBPowerBIXMLA_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Microsoft Power BI XMLA. | `AzureServicePrincipal` |
| [`AzureTenant` ↗](https://cdn.cdata.com/help/LGM/jdbc/RSBPowerBIXMLA_p_AzureTenant.htm) | Recommended | Identifies the Microsoft Power BI XMLA tenant being used to access data. Accepts either the tenant's domain name (for example, contoso.onmicrosoft.com ) or its directory (tenant) ID. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/LGM/jdbc/RSBPowerBIXMLA_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/LGM/jdbc/RSBPowerBIXMLA_p_OAuthClientId.htm) | Recommended | Specifies the client ID (also known as the consumer key) assigned to your custom OAuth application. This ID is required to identify the application to the OAuth authorization server during authentication. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/LGM/jdbc/RSBPowerBIXMLA_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret assigned to your custom OAuth application. This confidential value is used to authenticate the application to the OAuth authorization server. (Custom OAuth applications only.) | — |
| [`PowerBIEnvironment` ↗](https://cdn.cdata.com/help/LGM/jdbc/RSBPowerBIXMLA_p_PowerBIEnvironment.htm) | Recommended | Specifies the PowerBI environment to use for API requests. | `NONE` |
| [`Workspace` ↗](https://cdn.cdata.com/help/LGM/jdbc/RSBPowerBIXMLA_p_Workspace.htm) | Recommended | Specifies the Premium Power BI workspace(s) to connect to, using a comma-separated list of workspace names. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.powerbi.com | IF `AzureEnvironment=GLOBAL(default`) |
| *.pbidedicated.windows.net | IF `AzureEnvironment=GLOBAL(default`); The exact cluster used (added in the *) is determined by calling the api.powerbi.com |
| login.microsoftonline.com | If `AuthScheme=AzureAD` (default), AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=GLOBAL` (default) |
| login.chinacloudapi.cn | If `AuthScheme=AzureAD` (default), AzureServicePrincipal , AzureServicePrincipalCert AND `AzureEnvironment=CHINA` |
| login.microsoftonline.us | If `AuthScheme=AzureAD` (default), AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=USGOVT,USGOVTHIGH` USGOVTDOD |
| api.powerbigov.us | IF `AzureEnvironment=USGOVT` |
| api.high.powerbigov.us | IF `AzureEnvironment=USGOVTHIGH` |
| api.mil.powerbigov.us | IF `AzureEnvironment=USGOVTDOD` |
| *.pbidedicated.usgovcloudapi.net | IF `AzureEnvironment=USGOVT,USGOVTHIGH,USGOVTDOD` |

[← PREVIOUS Microsoft Planner](https://www.palantir.com/docs/foundry/available-connectors/microsoft-planner/)

[NEXT Microsoft Project →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-project/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

