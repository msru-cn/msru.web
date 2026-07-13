Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/woocommerce/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/woocommerce/#woocommerce)WooCommerce

The WooCommerce connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for WooCommerce.

To create a new WooCommerce source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for WooCommerce-specific configuration and networking. For the complete property reference, see the [official WooCommerce driver documentation ↗](https://cdn.cdata.com/help/UZK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/woocommerce/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/UZK/jdbc/RSBWooCommerce_p_AuthScheme.htm) | Mandatory | Whether to use Basic Authentication, the one-legged OAuth 1.0 Authentication or the OAuth 2.0 Authentication when connecting to WooCommerce. | `Basic` |
| [`URL` ↗](https://cdn.cdata.com/help/UZK/jdbc/RSBWooCommerce_p_URL.htm) | Mandatory | The URL of the WooCommerce instance. | `https://{serverAddress}/woocommerce/` |
| [`ConsumerKey` ↗](https://cdn.cdata.com/help/UZK/jdbc/RSBWooCommerce_p_ConsumerKey.htm) | Recommended | The consumer key assigned by WooCommerce when creating the authentication credentials. If this property is set, and InitiateOAuth is OFF, the provider will authenticate using one-legged OAuth1.0. | — |
| [`ConsumerSecret` ↗](https://cdn.cdata.com/help/UZK/jdbc/RSBWooCommerce_p_ConsumerSecret.htm) | Recommended | The consumer secret assigned by WooCommerce when creating the authentication credentials. If this and the ConsumerKey properties are set, and InitiateOAuth is OFF, the provider will authenticate using one-legged OAuth1.0. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/UZK/jdbc/RSBWooCommerce_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/UZK/jdbc/RSBWooCommerce_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/UZK/jdbc/RSBWooCommerce_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/woocommerce/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property (in format `URL='http://localhost/woocommerce/'`) |

[← PREVIOUS Web Feature Service (WFS)](https://www.palantir.com/docs/foundry/available-connectors/wfs/)

[NEXT WordPress →](https://www.palantir.com/docs/foundry/available-connectors/wordpress/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

