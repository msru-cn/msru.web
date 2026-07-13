Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/zoho-books/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/zoho-books/#zoho-books)Zoho Books

The Zoho Books connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Zoho Books.

To create a new Zoho Books source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Zoho Books-specific configuration and networking. For the complete property reference, see the [official Zoho Books driver documentation ↗](https://cdn.cdata.com/help/GZK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/zoho-books/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Region` ↗](https://cdn.cdata.com/help/GZK/jdbc/RSBZohoBooks_p_Region.htm) | Mandatory | The Top Level Domain (TLD) in the server URL. | `US` |
| [`AccountsServer` ↗](https://cdn.cdata.com/help/GZK/jdbc/RSBZohoBooks_p_AccountsServer.htm) | Recommended | Deprecated. The full Account Server URL. | `https://books.zoho.com` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/GZK/jdbc/RSBZohoBooks_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/GZK/jdbc/RSBZohoBooks_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/GZK/jdbc/RSBZohoBooks_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`OrganizationId` ↗](https://cdn.cdata.com/help/GZK/jdbc/RSBZohoBooks_p_OrganizationId.htm) | Recommended | The Id associated with the specific Zoho Books organization that you wish to connect to. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/zoho-books/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <AccountsServer> - default: books.zoho.<Region> | Always. Set in AccountsServer connection property |
| accounts.zoho.<Region> | Always |

### [](https://www.palantir.com/docs/foundry/available-connectors/zoho-books/#region-mappings)Region mappings

Use the following region mapping to complete the domain URL:

| Region | Endpoint |
| --- | --- |
| US | .com |
| Europe | .eu |
| India | .in |
| Australia | .com.au |
| Japan | .jp |

[← PREVIOUS Zendesk](https://www.palantir.com/docs/foundry/available-connectors/zendesk/)

[NEXT Zoho Creator →](https://www.palantir.com/docs/foundry/available-connectors/zoho-creator/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

