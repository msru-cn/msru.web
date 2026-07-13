Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-crm/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-crm/#microsoft-dynamics-crm)Microsoft Dynamics CRM

The Microsoft Dynamics CRM connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Dynamics CRM.

To create a new Microsoft Dynamics CRM source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Dynamics CRM-specific configuration and networking. For the complete property reference, see the [official Microsoft Dynamics CRM driver documentation ↗](https://cdn.cdata.com/help/RMK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-crm/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`CRMVersion` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_CRMVersion.htm) | Mandatory | The type of Dynamics CRM server to which you are connecting. Accepted entries are CRM2011+, CRMOnline. | `CRM2011+` |
| [`URL` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_URL.htm) | Mandatory | The root URL of the organization. For example, a CRM 4.0 or CRM 2011 URL will resemble [http://MySite/MyOrganization](http://mysite/MyOrganization). For CRM Online, the URL will resemble [https://myOrg.crm.dynamics.com/](https://myorg.crm.dynamics.com/). | `https://myOrg.crm.dynamics.com/, http://mySite/myOrganization` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_AuthScheme.htm) | Recommended | The authentication scheme used. Accepted entries are OAuth,NTLM,Kerberos,AzureServicePrincipal,AzureServicePrincipalCert. | `Auto` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`InternetFacingDeployment` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_InternetFacingDeployment.htm) | Recommended | Whether you are connecting to an Internet Facing Deployment (IFD) for CRM. | `FALSE` |
| [`LanguageCode` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_LanguageCode.htm) | Recommended | The code indicating the language. | `1033` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`OrganizationName` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_OrganizationName.htm) | Recommended | The name of the organization. In Dynamics CRM 4.0 without IFD, the organization is specified in the URL; for example, [http://website/organizationname](http://website/organizationname). In Dynamics CRM 4.0 with IFD, this property must be set. In other versions of CRM, this property is optional. | — |
| [`Password` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_Password.htm) | Recommended | The password used to authenticate the user. | — |
| [`ServerVersion` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_ServerVersion.htm) | Recommended | The Server SDK version of DynamicsCRM. | — |
| [`User` ↗](https://cdn.cdata.com/help/RMK/jdbc/RSBDynamicsCRM_p_User.htm) | Recommended | The SharePoint user account used to authenticate. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-crm/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |
| <ADFSServer> | If `CRMVersion='CRM2011+'` (Default) and `AuthScheme=AzureAD` |
| login.microsoftonline.com | If `CRMVersion=CRMOnline` AND `AuthScheme=AzureAD,` AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=GLOBAL` (default) |
| login.chinacloudapi.cn | If `CRMVersion=CRMOnline` AND `AuthScheme=AzureAD,` AzureServicePrincipal , AzureServicePrincipalCert AND `AzureEnvironment=CHINA` |
| login.microsoftonline.us | If `CRMVersion=CRMOnline` AND `AuthScheme=AzureAD,` AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=USGOVT` or USGOVTDOD |

[← PREVIOUS Microsoft Dynamics 365 Business Central](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365-business-central/)

[NEXT Microsoft Dynamics GP →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-gp/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

