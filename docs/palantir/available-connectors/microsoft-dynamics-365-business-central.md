Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365-business-central/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365-business-central/#microsoft-dynamics-365-business-central)Microsoft Dynamics 365 Business Central

The Microsoft Dynamics 365 Business Central connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Dynamics 365 Business Central.

To create a new Microsoft Dynamics 365 Business Central source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Dynamics 365 Business Central-specific configuration and networking. For the complete property reference, see the [official Microsoft Dynamics 365 Business Central driver documentation ↗](https://cdn.cdata.com/help/FBK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365-business-central/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/FBK/jdbc/RSBDynamics365_p_AuthScheme.htm) | Mandatory | Whether to use OAuth Authentication or Access Key Authentication when connecting to Business Central. | `AzureAD` |
| [`OrganizationURL` ↗](https://cdn.cdata.com/help/FBK/jdbc/RSBDynamics365_p_OrganizationURL.htm) | Mandatory | The URL to your Dynamics 365 organization, sometimes referred to as the resource. | `https://businesscentral.dynamics.com/<Organization>/` |
| [`Company` ↗](https://cdn.cdata.com/help/FBK/jdbc/RSBDynamics365_p_Company.htm) | Recommended | The name of the Microsoft Dynamics 365 Business Central company. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/FBK/jdbc/RSBDynamics365_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/FBK/jdbc/RSBDynamics365_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/FBK/jdbc/RSBDynamics365_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365-business-central/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <OrganizationURL> | Always. OrganizationURL connection property (will contain more than just the base domain) |
| api.businesscentral.dynamics.com | This endpoint will likely be used in any cloud instance, unless on-prem is used |
| login.microsoftonline.com | If `AuthScheme=AzureAD,` AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=GLOBAL` (default) |
| login.chinacloudapi.cn | If `AuthScheme=AzureAD,` AzureServicePrincipal , AzureServicePrincipalCert AND `AzureEnvironment=CHINA` |
| login.microsoftonline.us | If `AuthScheme=AzureAD,` AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=USGOVT` or USGOVTDOD |

[← PREVIOUS Microsoft Dynamics 365](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365/)

[NEXT Microsoft Dynamics CRM →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-crm/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

