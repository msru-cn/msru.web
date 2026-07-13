Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/zoho-creator/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/zoho-creator/#zoho-creator)Zoho Creator

The Zoho Creator connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Zoho Creator.

To create a new Zoho Creator source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Zoho Creator-specific configuration and networking. For the complete property reference, see the [official Zoho Creator driver documentation ↗](https://cdn.cdata.com/help/KCK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/zoho-creator/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Region` ↗](https://cdn.cdata.com/help/KCK/jdbc/RSBZohoCreator_p_Region.htm) | Mandatory | The Top Level Domain (TLD) in the server URL. | `US` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/KCK/jdbc/RSBZohoCreator_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/KCK/jdbc/RSBZohoCreator_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/KCK/jdbc/RSBZohoCreator_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`ReportFormRelations` ↗](https://cdn.cdata.com/help/KCK/jdbc/RSBZohoCreator_p_ReportFormRelations.htm) | Recommended | The mapping of the reports and forms in the application. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/KCK/jdbc/RSBZohoCreator_p_Schema.htm) | Recommended | Specify the application name to connect with. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/zoho-creator/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <APIDomain> - default: creatorapp.zoho.<Region> | Always. Region connection property maps to TLD (default `Region=US` --> .com); APIDomain can be used when manually setting OAuthAccessToken |
| <AccountsServer> - default: accounts.zoho.<Region> | Always. Retrieved automatically with OAuth flow; set in AccountsServer connection property when manually providing OAuthAccessToken |

### [](https://www.palantir.com/docs/foundry/available-connectors/zoho-creator/#region-mappings)Region mappings

Use the following region mapping to complete the domain URL:

| Region | Endpoint |
| --- | --- |
| US | .com |
| Europe | .eu |
| India | .in |
| Australia | .com.au |
| Japan | .jp |
| China | .com.cn |

[← PREVIOUS Zoho Books](https://www.palantir.com/docs/foundry/available-connectors/zoho-books/)

[NEXT Zoho CRM →](https://www.palantir.com/docs/foundry/available-connectors/zoho-crm/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

