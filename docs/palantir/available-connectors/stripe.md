Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/stripe/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/stripe/#stripe)Stripe

The Stripe connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Stripe.

To create a new Stripe source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Stripe-specific configuration and networking. For the complete property reference, see the [official Stripe driver documentation ↗](https://cdn.cdata.com/help/BOK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/stripe/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/BOK/jdbc/RSBStripe_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Stripe. | `APIKey` |
| [`AccountId` ↗](https://cdn.cdata.com/help/BOK/jdbc/RSBStripe_p_AccountId.htm) | Recommended | The ID of the Account that you want to use. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/BOK/jdbc/RSBStripe_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`LiveAPIKey` ↗](https://cdn.cdata.com/help/BOK/jdbc/RSBStripe_p_LiveAPIKey.htm) | Recommended | LiveAPIKey is required to generate and view the Reports. | — |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/BOK/jdbc/RSBStripe_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/BOK/jdbc/RSBStripe_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/stripe/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.stripe.com | Always |
| files.stripe.com | Used for DownloadQuote, DownloadFile, and UploadFile stored procedures |
| connect.stripe.com | If `AuthScheme=OAuth` |

[← PREVIOUS Streak](https://www.palantir.com/docs/foundry/available-connectors/streak/)

[NEXT SugarCRM →](https://www.palantir.com/docs/foundry/available-connectors/sugarcrm/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

