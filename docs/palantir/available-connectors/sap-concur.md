Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sap-concur/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sap-concur/#sap-concur)SAP Concur

The SAP Concur connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SAP Concur.

To create a new SAP Concur source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SAP Concur-specific configuration and networking. For the complete property reference, see the [official SAP Concur driver documentation ↗](https://cdn.cdata.com/help/FNK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-concur/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Region` ↗](https://cdn.cdata.com/help/FNK/jdbc/RSBConcur_p_Region.htm) | Mandatory | The region where the server is located. Valid values are US, EU and CN. | `US` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/FNK/jdbc/RSBConcur_p_AuthScheme.htm) | Recommended | The scheme used for authentication. Accepted entries are OAuth, OAuthPassword, and CompanyLevelAuth. | `OAuthPassword` |
| [`ConcurInstanceURL` ↗](https://cdn.cdata.com/help/FNK/jdbc/RSBConcur_p_ConcurInstanceURL.htm) | Recommended | The server URL to use. The new server URLs are backwards compatible with the legacy authentication methods, so set this only if necessary. For example, [https://us2.api.concursolutions.com](https://us2.api.concursolutions.com/) for some production accounts and [https://us-impl.api.concursolutions.com](https://us-impl.api.concursolutions.com/) for sandbox accounts. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/FNK/jdbc/RSBConcur_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`LoginId` ↗](https://cdn.cdata.com/help/FNK/jdbc/RSBConcur_p_LoginId.htm) | Recommended | Login ID of the user. Can be used if the user account associated with the OAuth 2.0 access token has a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard. | — |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/FNK/jdbc/RSBConcur_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/FNK/jdbc/RSBConcur_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/FNK/jdbc/RSBConcur_p_Password.htm) | Recommended | The password used to authenticate the user. | — |
| [`UserId` ↗](https://cdn.cdata.com/help/FNK/jdbc/RSBConcur_p_UserId.htm) | Recommended | The unique identifier of the SAP Concur user. Used only for tables that expose V4 endpoints of the SAP Concur API. | — |
| [`Username` ↗](https://cdn.cdata.com/help/FNK/jdbc/RSBConcur_p_Username.htm) | Recommended | The user account used to authenticate to SAP Concur. | — |
| [`UseSandbox` ↗](https://cdn.cdata.com/help/FNK/jdbc/RSBConcur_p_UseSandbox.htm) | Recommended | A boolean indicating if you are using a Sandbox account. The provider makes requests to the production environment by default. | `FALSE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-concur/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| developer.concur.com | Always |
| us2.api.concursolutions.com | If `UseSandbox=FALSE` (default) AND `Region=US` (default) |
| www-us2.api.concursolutions.com | If `UseSandbox=FALSE` (default) AND `Region=US` (default) - OAuth Authorization URL |
| eu2.api.concursolutions.com | If `UseSandbox=FALSE` (default) AND `Region=EU` |
| www-eu2.api.concursolutions.com | If `UseSandbox=FALSE` (default) AND `Region=EU` - OAuth Authorization URL |
| cn.api.concurcdc.cn | If `UseSandbox=FALSE` (default) AND `Region=CN` |
| www-cn.api.concurcdc.cn | If `UseSandbox=FALSE` (default) AND `Region=CN` - OAuth Authorization URL |
| us-impl.api.concursolutions.com | If `UseSandbox=TRUE` AND `Region=US` (default) |
| www-us-impl.api.concursolutions.com | If `UseSandbox=TRUE` AND `Region=US` (default) - OAuth Authorization URL |
| emea-impl.api.concursolutions.com | If `UseSandbox=TRUE` AND `Region=EU` |
| www-emea-impl.api.concursolutions.com | If `UseSandbox=TRUE` AND `Region=EU` - OAuth Authorization URL |
| <GeoLocation> | If `UseNewOAuthVersion=FALSE` - GeoLocation property (retrieved automatically unless OAuthAccessToken set) |
| <ConcurInstanceURL> | Used with older API versions (API v1-3) |
| concursolutions.com | If `UseNewOAuthVersion=FALSE` AND GeoLocation empty AND ConcurInstanceURL empty |

[← PREVIOUS SAP Cloud for Customer](https://www.palantir.com/docs/foundry/available-connectors/sap-cloud-for-customer/)

[NEXT SAP Fieldglass →](https://www.palantir.com/docs/foundry/available-connectors/sap-fieldglass/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

