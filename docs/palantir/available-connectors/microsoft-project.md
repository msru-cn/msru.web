Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-project/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-project/#microsoft-project)Microsoft Project

The Microsoft Project connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Project.

To create a new Microsoft Project source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Project-specific configuration and networking. For the complete property reference, see the [official Microsoft Project driver documentation ↗](https://cdn.cdata.com/help/COK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-project/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`URL` ↗](https://cdn.cdata.com/help/COK/jdbc/RSBMSProject_p_URL.htm) | Mandatory | URL to the MS Project Web App. For example, [https://MyOrganization.sharepoint.com/sites/pwa/](https://myorganization.sharepoint.com/sites/pwa/). | `https://contoso.com/sites/pwa/` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/COK/jdbc/RSBMSProject_p_AuthScheme.htm) | Recommended | The scheme used for authentication. Accepted entries are SharePointOnlineCookies,OAuth,OKTA,ADFS,AzureAD and OneLogin. | `SharePointOnlineCookies` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/COK/jdbc/RSBMSProject_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/COK/jdbc/RSBMSProject_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/COK/jdbc/RSBMSProject_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/COK/jdbc/RSBMSProject_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/COK/jdbc/RSBMSProject_p_Schema.htm) | Recommended | The type of schema to use: ODataV1 or ODataV2. | `ODataV2` |
| [`User` ↗](https://cdn.cdata.com/help/COK/jdbc/RSBMSProject_p_User.htm) | Recommended | Specifies the user ID of the authenticating Microsoft Project user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-project/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always |
| <SSOLoginURL> | If `AuthScheme=ADFS,` OKTA |
| login.microsoftonline.com | If `AuthScheme=AzureAD,` OAuth AND `AzureEnvironment=GLOBAL` (default) |
| login.chinacloudapi.cn | If `AuthScheme=AzureAD,` OAuth AND `AzureEnvironment=CHINA` |
| login.microsoftonline.us | If `AuthScheme=AzureAD,` OAuth AND `AzureEnvironment=USGOVT` or USGOVTDOD |
| <Subdomain>.onelogin.com | If `AuthScheme=OneLogin,` set in SSOProperties |

[← PREVIOUS Microsoft Power BI® XMLA](https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/)

[NEXT Microsoft SharePoint →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sharepoint/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

