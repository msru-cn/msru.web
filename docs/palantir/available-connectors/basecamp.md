Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/basecamp/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/basecamp/#basecamp)Basecamp

The Basecamp connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Basecamp.

To create a new Basecamp source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Basecamp-specific configuration and networking. For the complete property reference, see the [official Basecamp driver documentation ↗](https://cdn.cdata.com/help/BCK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/basecamp/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AccountId` ↗](https://cdn.cdata.com/help/BCK/jdbc/RSBBasecamp_p_AccountId.htm) | Mandatory | Account Id of the currently authenticated user. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/BCK/jdbc/RSBBasecamp_p_Schema.htm) | Mandatory | Specify the Basecamp version to connect with. | `V2` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/BCK/jdbc/RSBBasecamp_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/BCK/jdbc/RSBBasecamp_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/BCK/jdbc/RSBBasecamp_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/BCK/jdbc/RSBBasecamp_p_Password.htm) | Recommended | Password of the currently authenticated user. | — |
| [`ProjectId` ↗](https://cdn.cdata.com/help/BCK/jdbc/RSBBasecamp_p_ProjectId.htm) | Recommended | The Project Id of the currently authenticated user. | — |
| [`User` ↗](https://cdn.cdata.com/help/BCK/jdbc/RSBBasecamp_p_User.htm) | Recommended | Username of the currently authenticated user. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/basecamp/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| launchpad.37signals.com | Required for OAuth flows - not used for basic auth |
| 3.basecampapi.com | Required if connecting to basecamp V3 instance |
| basecamp.com | Required if connecting to basecamp V1/V2 instance |

[← PREVIOUS Azure Table Storage](https://www.palantir.com/docs/foundry/available-connectors/azure-table-storage/)

[NEXT BigCommerce →](https://www.palantir.com/docs/foundry/available-connectors/bigcommerce/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

