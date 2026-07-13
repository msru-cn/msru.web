Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sage-200/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sage-200/#sage-200)Sage 200

The Sage 200 connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Sage 200.

To create a new Sage 200 source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Sage 200-specific configuration and networking. For the complete property reference, see the [official Sage 200 driver documentation ↗](https://cdn.cdata.com/help/GGK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sage-200/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`SubscriptionKey` ↗](https://cdn.cdata.com/help/GGK/jdbc/RSBSage200_p_SubscriptionKey.htm) | Mandatory | Your subscription key. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/GGK/jdbc/RSBSage200_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/GGK/jdbc/RSBSage200_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/GGK/jdbc/RSBSage200_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/GGK/jdbc/RSBSage200_p_Schema.htm) | Recommended | Used to specify what Sage200 API to use. The default one is the Standard UK API. | `StandardUK` |

## [](https://www.palantir.com/docs/foundry/available-connectors/sage-200/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.columbus.sage.com | Always |
| id.sage.com | Always |

[← PREVIOUS RSS](https://www.palantir.com/docs/foundry/available-connectors/rss/)

[NEXT Sage 300 →](https://www.palantir.com/docs/foundry/available-connectors/sage-300/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

