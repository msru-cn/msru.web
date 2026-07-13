Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/trello/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/trello/#trello)Trello

The Trello connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Trello.

To create a new Trello source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Trello-specific configuration and networking. For the complete property reference, see the [official Trello driver documentation ↗](https://cdn.cdata.com/help/UTK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/trello/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/UTK/jdbc/RSBTrello_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are Token and OAuth. | `OAuth` |
| [`APIKey` ↗](https://cdn.cdata.com/help/UTK/jdbc/RSBTrello_p_APIKey.htm) | Recommended | The Trello API key. | — |
| [`BoardId` ↗](https://cdn.cdata.com/help/UTK/jdbc/RSBTrello_p_BoardId.htm) | Recommended | The Trello BoardId. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/UTK/jdbc/RSBTrello_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/UTK/jdbc/RSBTrello_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/UTK/jdbc/RSBTrello_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Token` ↗](https://cdn.cdata.com/help/UTK/jdbc/RSBTrello_p_Token.htm) | Recommended | The Trello Token. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/trello/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.trello.com | Always |
| trello.com | If `AuthScheme=OAuth` |

[← PREVIOUS TaxJar](https://www.palantir.com/docs/foundry/available-connectors/taxjar/)

[NEXT TSheets →](https://www.palantir.com/docs/foundry/available-connectors/tsheets/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

