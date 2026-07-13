Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/ebay/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/ebay/#ebay)eBay

The eBay connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for eBay.

To create a new eBay source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for eBay-specific configuration and networking. For the complete property reference, see the [official eBay driver documentation ↗](https://cdn.cdata.com/help/BEK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/ebay/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/BEK/jdbc/RSBEbay_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are OAuth and AuthNAuth. | `AuthNAuth` |
| [`RuName` ↗](https://cdn.cdata.com/help/BEK/jdbc/RSBEbay_p_RuName.htm) | Mandatory | The Redirect URL name used for validation. This property is only needed if you are using the provider to allow other users to access their own data. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/BEK/jdbc/RSBEbay_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/BEK/jdbc/RSBEbay_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/BEK/jdbc/RSBEbay_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`SiteID` ↗](https://cdn.cdata.com/help/BEK/jdbc/RSBEbay_p_SiteID.htm) | Recommended | The Id of the eBay site to which you want to send the request. By default this is 0, (U.S.). | `0` |
| [`UseSandbox` ↗](https://cdn.cdata.com/help/BEK/jdbc/RSBEbay_p_UseSandbox.htm) | Recommended | A boolean indicating if you are using a sandbox account. | `FALSE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/ebay/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| auth.ebay.com | If `AuthScheme=OAuth` |
| signin.ebay.com | If `AuthScheme=AuthNAuth` |
| api.ebay.com | If `UseSandbox=False` |
| svcs.ebay.com | If `UseSandbox=False` |
| auth.sandbox.ebay.com | If `AuthScheme=OAuth` and `UseSandbox=True` |
| signin.sandbox.ebay.com | If `AuthScheme=AuthNAuth` and `UseSandbox=True` |
| api.sandbox.ebay.com | If `UseSandbox=True` |
| svcs.sandbox.ebay.com | If `UseSandbox=True` |

[← PREVIOUS Domino](https://www.palantir.com/docs/foundry/available-connectors/domino/)

[NEXT eBay Analytics →](https://www.palantir.com/docs/foundry/available-connectors/ebay-analytics/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

