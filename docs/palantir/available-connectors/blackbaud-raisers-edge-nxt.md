Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/blackbaud-raisers-edge-nxt/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/blackbaud-raisers-edge-nxt/#blackbaud-raisers-edge-nxt)Blackbaud Raisers Edge NXT

The Blackbaud Raisers Edge NXT connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Blackbaud Raisers Edge NXT.

To create a new Blackbaud Raisers Edge NXT source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Blackbaud Raisers Edge NXT-specific configuration and networking. For the complete property reference, see the [official Blackbaud Raisers Edge NXT driver documentation ↗](https://cdn.cdata.com/help/JZK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/blackbaud-raisers-edge-nxt/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`SubscriptionKey` ↗](https://cdn.cdata.com/help/JZK/jdbc/RSBBlackbaudRaisersEdgeNXT_p_SubscriptionKey.htm) | Mandatory | Subscription key which provides access to the API. Found in your Profile. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/JZK/jdbc/RSBBlackbaudRaisersEdgeNXT_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/JZK/jdbc/RSBBlackbaudRaisersEdgeNXT_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/JZK/jdbc/RSBBlackbaudRaisersEdgeNXT_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/blackbaud-raisers-edge-nxt/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.sky.blackbaud.com | Always |
| oauth2.sky.blackbaud.com | Always |

[← PREVIOUS BigQuery](https://www.palantir.com/docs/foundry/available-connectors/bigquery/)

[NEXT Bugzilla →](https://www.palantir.com/docs/foundry/available-connectors/bugzilla/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

