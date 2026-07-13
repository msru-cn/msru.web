Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365/#microsoft-dynamics-365)Microsoft Dynamics 365

The Microsoft Dynamics 365 connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Dynamics 365.

To create a new Microsoft Dynamics 365 source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Dynamics 365-specific configuration and networking. For the complete property reference, see the [official Microsoft Dynamics 365 driver documentation ↗](https://cdn.cdata.com/help/LJK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/LJK/jdbc/RSBDynamics365_p_AuthScheme.htm) | Mandatory | Specifies the type of authentication to use when connecting to Microsoft Dynamics 365. If this property is left blank, the default authentication is used. | `AzureAD` |
| [`Edition` ↗](https://cdn.cdata.com/help/LJK/jdbc/RSBDynamics365_p_Edition.htm) | Mandatory | Specifies the Microsoft Dynamics 365 edition in use. If not specified, the default (FinOpsOnline) is assumed. | `Sales` |
| [`OrganizationURL` ↗](https://cdn.cdata.com/help/LJK/jdbc/RSBDynamics365_p_OrganizationURL.htm) | Mandatory | The URL to your Dynamics 365 organization, sometimes referred to as the resource. To find the correct URL for your Microsoft Dynamics 365 instance, search the Web Services page. | `https://myaccount.operations.dynamics.com/` |
| [`AzureTenant` ↗](https://cdn.cdata.com/help/LJK/jdbc/RSBDynamics365_p_AzureTenant.htm) | Recommended | Identifies the Microsoft Dynamics 365 tenant being used to access data, either by name (for example, contoso.onmicrosoft.com) or ID. (Conditional). | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/LJK/jdbc/RSBDynamics365_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/LJK/jdbc/RSBDynamics365_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/LJK/jdbc/RSBDynamics365_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`OAuthGrantType` ↗](https://cdn.cdata.com/help/LJK/jdbc/RSBDynamics365_p_OAuthGrantType.htm) | Recommended | Specifies the grant type for the chosen OAuth flow. This value should be the same as the grant_type that was set during OAuth custom application creation. | `CLIENT` |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <OrganizationURL> | Always. OrganizationURL connection property |
| <ADFSServer> | If `Edition=FinOpsOnPremise` |
| login.microsoftonline.com | If `AuthScheme=AzureAD` (default), AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=GLOBAL` (default) |
| login.chinacloudapi.cn | If `AuthScheme=AzureAD` (default), AzureServicePrincipal , AzureServicePrincipalCert AND `AzureEnvironment=CHINA` |
| login.microsoftonline.us | If `AuthScheme=AzureAD` (default), AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=USGOVT` or USGOVTDOD |

[← PREVIOUS Microsoft Dataverse](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dataverse/)

[NEXT Microsoft Dynamics 365 Business Central →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365-business-central/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

