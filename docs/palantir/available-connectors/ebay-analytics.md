Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/ebay-analytics/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/ebay-analytics/#ebay-analytics)eBay Analytics

The eBay Analytics connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for eBay Analytics.

To create a new eBay Analytics source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for eBay Analytics-specific configuration and networking. For the complete property reference, see the [official eBay Analytics driver documentation ↗](https://cdn.cdata.com/help/JJK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/ebay-analytics/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/JJK/jdbc/RSBEbayAnalytics_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are OAuth and OAuthClient. | `OAuth` |
| [`RuName` ↗](https://cdn.cdata.com/help/JJK/jdbc/RSBEbayAnalytics_p_RuName.htm) | Mandatory | The Redirect URL name used for validation. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/JJK/jdbc/RSBEbayAnalytics_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`MarketplaceId` ↗](https://cdn.cdata.com/help/JJK/jdbc/RSBEbayAnalytics_p_MarketplaceId.htm) | Recommended | The identification number for the eBay Marketplace. | `DEFAULT` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/JJK/jdbc/RSBEbayAnalytics_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/JJK/jdbc/RSBEbayAnalytics_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/ebay-analytics/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| signin.ebay.com | If `UseSandbox=False` |
| api.ebay.com | If `UseSandbox=False` |
| signin.sandbox.ebay.com | If `UseSandbox=True` |
| api.sandbox.ebay.com | If `UseSandbox=True` |

[← PREVIOUS eBay](https://www.palantir.com/docs/foundry/available-connectors/ebay/)

[NEXT EnterpriseDB →](https://www.palantir.com/docs/foundry/available-connectors/enterprisedb/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

