Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-onenote/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-onenote/#microsoft-onenote)Microsoft OneNote

The Microsoft OneNote connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft OneNote.

To create a new Microsoft OneNote source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft OneNote-specific configuration and networking. For the complete property reference, see the [official Microsoft OneNote driver documentation ↗](https://cdn.cdata.com/help/UNK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-onenote/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/UNK/jdbc/RSBOneNote_p_AuthScheme.htm) | Recommended | Specifies the type of authentication to use when connecting to Microsoft OneNote. If this property is left blank, the default authentication is used. | `AzureServicePrincipal` |
| [`AzureTenant` ↗](https://cdn.cdata.com/help/UNK/jdbc/RSBOneNote_p_AzureTenant.htm) | Recommended | Identifies the Microsoft OneNote tenant being used to access data, either by name (for example, contoso.onmicrosoft.com) or ID. (Conditional). | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/UNK/jdbc/RSBOneNote_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/UNK/jdbc/RSBOneNote_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/UNK/jdbc/RSBOneNote_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-onenote/#networking)Networking

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

[← PREVIOUS Microsoft OneDrive](https://www.palantir.com/docs/foundry/available-connectors/microsoft-onedrive/)

[NEXT Microsoft Planner →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-planner/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

