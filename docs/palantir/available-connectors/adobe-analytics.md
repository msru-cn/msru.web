Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/adobe-analytics/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/adobe-analytics/#adobe-analytics)Adobe Analytics

The Adobe Analytics connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Adobe Analytics.

To create a new Adobe Analytics source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Adobe Analytics-specific configuration and networking. For the complete property reference, see the [official Adobe Analytics driver documentation ↗](https://cdn.cdata.com/help/SCK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/adobe-analytics/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/SCK/jdbc/RSBAdobeAnalytics_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Adobe Analytics. | `OAuth` |
| [`GlobalCompanyId` ↗](https://cdn.cdata.com/help/SCK/jdbc/RSBAdobeAnalytics_p_GlobalCompanyId.htm) | Mandatory | Your company identifier. If not set, the driver tries to automatically detect it. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/SCK/jdbc/RSBAdobeAnalytics_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/SCK/jdbc/RSBAdobeAnalytics_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/SCK/jdbc/RSBAdobeAnalytics_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`OAuthJWTCert` ↗](https://cdn.cdata.com/help/SCK/jdbc/RSBAdobeAnalytics_p_OAuthJWTCert.htm) | Recommended | The JWT Certificate store. | — |
| [`OAuthJWTCertPassword` ↗](https://cdn.cdata.com/help/SCK/jdbc/RSBAdobeAnalytics_p_OAuthJWTCertPassword.htm) | Recommended | The password for the OAuth JWT certificate used to access a certificate store that requires a password. If the certificate store does not require a password, leave this property blank. | — |
| [`OAuthJWTCertType` ↗](https://cdn.cdata.com/help/SCK/jdbc/RSBAdobeAnalytics_p_OAuthJWTCertType.htm) | Recommended | The type of key store containing the JWT Certificate. | `PUBLIC_KEY_BLOB` |
| [`OAuthJWTIssuer` ↗](https://cdn.cdata.com/help/SCK/jdbc/RSBAdobeAnalytics_p_OAuthJWTIssuer.htm) | Recommended | The issuer of the Java Web Token. | — |
| [`RSID` ↗](https://cdn.cdata.com/help/SCK/jdbc/RSBAdobeAnalytics_p_RSID.htm) | Recommended | Your report suite identifier. If not set, the driver tries to automatically detect it. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/adobe-analytics/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| analytics.adobe.io | Always |
| ims-na1.adobelogin.com | Always. OAuth |

[← PREVIOUS Acumatica](https://www.palantir.com/docs/foundry/available-connectors/acumatica/)

[NEXT Adobe Commerce →](https://www.palantir.com/docs/foundry/available-connectors/adobe-commerce/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

