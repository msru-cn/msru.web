Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/adp/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/adp/#adp)ADP

The ADP connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for ADP.

To create a new ADP source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for ADP-specific configuration and networking. For the complete property reference, see the [official ADP driver documentation ↗](https://cdn.cdata.com/help/JDM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/adp/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`SSLClientCert` ↗](https://cdn.cdata.com/help/JDM/jdbc/RSBADP_p_SSLClientCert.htm) | Mandatory | Specifies the TLS (SSL) client certificate issued by ADP that your application presents for authentication. | — |
| [`TestConnectionEndpoint` ↗](https://cdn.cdata.com/help/JDM/jdbc/RSBADP_p_TestConnectionEndpoint.htm) | Mandatory | Specifies the API endpoint that the provider uses to test the connection to ADP. | `workers` |
| [`UseUAT` ↗](https://cdn.cdata.com/help/JDM/jdbc/RSBADP_p_UseUAT.htm) | Mandatory | Specifies whether the provider connects to the ADP User Acceptance Testing (UAT) environment instead of production. | `FALSE` |
| [`IncludeCustomFields` ↗](https://cdn.cdata.com/help/JDM/jdbc/RSBADP_p_IncludeCustomFields.htm) | Recommended | A boolean indicating if you would like to include custom fields in the column listing. | `TRUE` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/JDM/jdbc/RSBADP_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/JDM/jdbc/RSBADP_p_OAuthClientId.htm) | Recommended | Specifies the client ID (also known as the consumer key) assigned to your custom OAuth application. This ID is required to identify the application to the OAuth authorization server during authentication. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/JDM/jdbc/RSBADP_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret assigned to your custom OAuth application. This confidential value is used to authenticate the application to the OAuth authorization server. (Custom OAuth applications only.) | — |
| [`SSLClientCertPassword` ↗](https://cdn.cdata.com/help/JDM/jdbc/RSBADP_p_SSLClientCertPassword.htm) | Recommended | Specifies the password required to access the TLS/SSL client certificate store. Use this property if the selected certificate store type requires a password for access. | — |
| [`SSLClientCertType` ↗](https://cdn.cdata.com/help/JDM/jdbc/RSBADP_p_SSLClientCertType.htm) | Recommended | The type of key store containing the TLS/SSL client certificate. | `PFXBLOB` |

## [](https://www.palantir.com/docs/foundry/available-connectors/adp/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.adp.com | If `UseUAT=FALSE` |
| accounts.adp.com | If `UseUAT=FALSE` |
| uat-api.adp.com | If `UseUAT=TRUE` |
| uat-accounts.adp.com | If `UseUAT=TRUE` |

[← PREVIOUS Adobe Commerce](https://www.palantir.com/docs/foundry/available-connectors/adobe-commerce/)

[NEXT Agent-level filesystem →](https://www.palantir.com/docs/foundry/available-connectors/filesystem/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

