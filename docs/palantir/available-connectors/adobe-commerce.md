Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/adobe-commerce/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/adobe-commerce/#adobe-commerce)Adobe Commerce

The Adobe Commerce connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Adobe Commerce.

To create a new Adobe Commerce source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Adobe Commerce-specific configuration and networking. For the complete property reference, see the [official Adobe Commerce driver documentation ↗](https://cdn.cdata.com/help/BZK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/adobe-commerce/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/BZK/jdbc/RSBMagento_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to AdobeCommerce 2.x. | `Basic` |
| [`URL` ↗](https://cdn.cdata.com/help/BZK/jdbc/RSBMagento_p_URL.htm) | Mandatory | Set the URL to the HTTP or HTTPS endpoint of your AdobeCommerce system. For example, [https://adobecommercehost/](https://adobecommercehost/). | `https://myadobecommercehost` |
| [`AccessToken` ↗](https://cdn.cdata.com/help/BZK/jdbc/RSBMagento_p_AccessToken.htm) | Recommended | The AdobeCommerce Access Token. | — |
| [`StoreCode` ↗](https://cdn.cdata.com/help/BZK/jdbc/RSBMagento_p_StoreCode.htm) | Recommended | Specifies the code of the store against which the API requests are executed. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/adobe-commerce/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always |

[← PREVIOUS Adobe Analytics](https://www.palantir.com/docs/foundry/available-connectors/adobe-analytics/)

[NEXT ADP →](https://www.palantir.com/docs/foundry/available-connectors/adp/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

