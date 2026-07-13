Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/certinia/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/certinia/#certinia)Certinia

The Certinia connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Certinia.

To create a new Certinia source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Certinia-specific configuration and networking. For the complete property reference, see the [official Certinia driver documentation ↗](https://cdn.cdata.com/help/HFK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/certinia/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/HFK/jdbc/RSBFinancialForce_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Certinia. | `OAuth` |
| [`APIVersion` ↗](https://cdn.cdata.com/help/HFK/jdbc/RSBFinancialForce_p_APIVersion.htm) | Recommended | The version of the Certinia API used. | `62.0` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/HFK/jdbc/RSBFinancialForce_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`LoginURL` ↗](https://cdn.cdata.com/help/HFK/jdbc/RSBFinancialForce_p_LoginURL.htm) | Recommended | URL to the Certinia server used for logging in. | `https://login.salesforce.com/services/Soap/c/58.0` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/HFK/jdbc/RSBFinancialForce_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/HFK/jdbc/RSBFinancialForce_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/HFK/jdbc/RSBFinancialForce_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`SecurityToken` ↗](https://cdn.cdata.com/help/HFK/jdbc/RSBFinancialForce_p_SecurityToken.htm) | Recommended | The security token used to authenticate access to the Certinia account. | — |
| [`User` ↗](https://cdn.cdata.com/help/HFK/jdbc/RSBFinancialForce_p_User.htm) | Recommended | Specifies the user ID of the authenticating Certinia user account. | — |
| [`UseSandbox` ↗](https://cdn.cdata.com/help/HFK/jdbc/RSBFinancialForce_p_UseSandbox.htm) | Recommended | A boolean determining if the connection should be made to a Salesforce sandbox account. | `FALSE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/certinia/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| test.salesforce.com | If `UseSandbox=TRUE` |
| <Site>.my.salesforce.com | Returned by Salesforce when authenticating |
| login.salesforce.com | Default LoginURL, overridden by LoginURL property. LoginURL used when `AuthScheme=Basic,` OAuth, OAuthPassword, OAuthJWT, OAuthPKCE |
| <LoginURL> | Used in place of login.salesforce.com |
| <SSOLoginURL> | If `AuthScheme=Okta,` PingFederate, ADFS |
| <Subdomain>.onelogin.com | If `AuthScheme=OneLogin.`<Subdomain> is set in SSOProperties |
| <SSOExchangeURL> | If `AuthScheme=Okta,` PingFederate, ADFS, OneLogin, AzureAD |
| <Resource> | If `AuthScheme=AzureAD.`<Resource> is set in SSOProperties |
| <RelyingParty> | If `AuthScheme=ADFS.`<RelyingParty> set in SSOProperties |

[← PREVIOUS Cassandra](https://www.palantir.com/docs/foundry/available-connectors/cassandra/)

[NEXT Cloudant →](https://www.palantir.com/docs/foundry/available-connectors/cloudant/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

