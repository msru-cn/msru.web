Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/reckon-accounts-hosted/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/reckon-accounts-hosted/#reckon-accounts-hosted)Reckon Accounts Hosted

The Reckon Accounts Hosted connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Reckon Accounts Hosted.

To create a new Reckon Accounts Hosted source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Reckon Accounts Hosted-specific configuration and networking. For the complete property reference, see the [official Reckon Accounts Hosted driver documentation ↗](https://cdn.cdata.com/help/KHK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/reckon-accounts-hosted/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Password` ↗](https://cdn.cdata.com/help/KHK/jdbc/RSBReckonAccountsHosted_p_Password.htm) | Mandatory | The company file's password. | — |
| [`SubscriptionKey` ↗](https://cdn.cdata.com/help/KHK/jdbc/RSBReckonAccountsHosted_p_SubscriptionKey.htm) | Mandatory | The subscription key used to authenticate to Reckon Accounts Hosted. | — |
| [`User` ↗](https://cdn.cdata.com/help/KHK/jdbc/RSBReckonAccountsHosted_p_User.htm) | Mandatory | The company file's username. | — |
| [`CompanyFile` ↗](https://cdn.cdata.com/help/KHK/jdbc/RSBReckonAccountsHosted_p_CompanyFile.htm) | Recommended | The path to the company file. | — |
| [`CountryVersion` ↗](https://cdn.cdata.com/help/KHK/jdbc/RSBReckonAccountsHosted_p_CountryVersion.htm) | Recommended | To connect to a Hosted company file, you will need to pass the appropriate value in the CountryVersion. | `2021.R2.AU` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/KHK/jdbc/RSBReckonAccountsHosted_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/KHK/jdbc/RSBReckonAccountsHosted_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/KHK/jdbc/RSBReckonAccountsHosted_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/reckon-accounts-hosted/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.reckon.com | Always |
| identity.reckon.com | Always |

[← PREVIOUS Reckon](https://www.palantir.com/docs/foundry/available-connectors/reckon/)

[NEXT Redis →](https://www.palantir.com/docs/foundry/available-connectors/redis/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

