Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/freshbooks/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/freshbooks/#freshbooks)FreshBooks

The FreshBooks connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for FreshBooks.

To create a new FreshBooks source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for FreshBooks-specific configuration and networking. For the complete property reference, see the [official FreshBooks driver documentation ↗](https://cdn.cdata.com/help/DFK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/freshbooks/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AccountId` ↗](https://cdn.cdata.com/help/DFK/jdbc/RSBFreshBooks_p_AccountId.htm) | Recommended | The Account Id to connect to. If a value is not specified, the first one returned will be used. | — |
| [`CallbackURL` ↗](https://cdn.cdata.com/help/DFK/jdbc/RSBFreshBooks_p_CallbackURL.htm) | Recommended | The OAuth callback URL to return to when authenticating. This value must match the callback URL you specify in your app settings. | `https://localhost:33333/` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/DFK/jdbc/RSBFreshBooks_p_InitiateOAuth.htm) | Recommended | Set this property to initiate the process to obtain or refresh the OAuth access token when you connect. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/DFK/jdbc/RSBFreshBooks_p_OAuthClientId.htm) | Recommended | The client Id assigned when you register your application with an OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/DFK/jdbc/RSBFreshBooks_p_OAuthClientSecret.htm) | Recommended | The client secret assigned when you register your application with an OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/freshbooks/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.freshbooks.com | Always |
| my.freshbooks.com | Always |

[← PREVIOUS Foundry](https://www.palantir.com/docs/foundry/available-connectors/foundry/)

[NEXT Freshdesk →](https://www.palantir.com/docs/foundry/available-connectors/freshdesk/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

