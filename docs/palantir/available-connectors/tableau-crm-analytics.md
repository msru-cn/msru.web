Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/tableau-crm-analytics/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/tableau-crm-analytics/#tableau-crm-analytics)Tableau CRM Analytics

The Tableau CRM Analytics connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Tableau CRM Analytics.

To create a new Tableau CRM Analytics source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Tableau CRM Analytics-specific configuration and networking. For the complete property reference, see the [official Tableau CRM Analytics driver documentation ↗](https://cdn.cdata.com/help/FSK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/tableau-crm-analytics/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`UseSandbox` ↗](https://cdn.cdata.com/help/FSK/jdbc/RSBTableauCRM_p_UseSandbox.htm) | Mandatory | A boolean determining if the connection should be made to a Tableau CRM sandbox account. | `FALSE` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/FSK/jdbc/RSBTableauCRM_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Tableau CRM. | `OAuthJWT` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/FSK/jdbc/RSBTableauCRM_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`InstanceURL` ↗](https://cdn.cdata.com/help/FSK/jdbc/RSBTableauCRM_p_InstanceURL.htm) | Recommended | The URL of the Salesforce instance you want to use. | — |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/FSK/jdbc/RSBTableauCRM_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/FSK/jdbc/RSBTableauCRM_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`OAuthJWTCert` ↗](https://cdn.cdata.com/help/FSK/jdbc/RSBTableauCRM_p_OAuthJWTCert.htm) | Recommended | The JWT Certificate store. | — |
| [`OAuthJWTCertPassword` ↗](https://cdn.cdata.com/help/FSK/jdbc/RSBTableauCRM_p_OAuthJWTCertPassword.htm) | Recommended | The password for the OAuth JWT certificate used to access a certificate store that requires a password. If the certificate store does not require a password, leave this property blank. | — |
| [`OAuthJWTCertType` ↗](https://cdn.cdata.com/help/FSK/jdbc/RSBTableauCRM_p_OAuthJWTCertType.htm) | Recommended | The type of key store containing the JWT Certificate. | `PFXBLOB` |
| [`OAuthJWTIssuer` ↗](https://cdn.cdata.com/help/FSK/jdbc/RSBTableauCRM_p_OAuthJWTIssuer.htm) | Recommended | The issuer of the Java Web Token. | `{OAuthConsumerKey}` |

## [](https://www.palantir.com/docs/foundry/available-connectors/tableau-crm-analytics/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <InstanceURL> | Always. Returned by Salesforce when authenticating; can be set with InstanceURL property when `InitiateOAuth=OFF` |
| login.salesforce.com | If `UseSandbox=FALSE` and Subdomain blank |
| test.salesforce.com | If `UseSandbox=TRUE` |
| <Subdomain>.cloudforce.com | Subdomain connection property is used for custom branded authentication pages |

[← PREVIOUS SybaseIQ](https://www.palantir.com/docs/foundry/available-connectors/sybaseiq/)

[NEXT Tally →](https://www.palantir.com/docs/foundry/available-connectors/tally/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

