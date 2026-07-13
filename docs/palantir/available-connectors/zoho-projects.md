Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/zoho-projects/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/zoho-projects/#zoho-projects)Zoho Projects

The Zoho Projects connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Zoho Projects.

To create a new Zoho Projects source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Zoho Projects-specific configuration and networking. For the complete property reference, see the [official Zoho Projects driver documentation ↗](https://cdn.cdata.com/help/PZK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/zoho-projects/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/PZK/jdbc/RSBZohoProjects_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/PZK/jdbc/RSBZohoProjects_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/PZK/jdbc/RSBZohoProjects_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`PortalId` ↗](https://cdn.cdata.com/help/PZK/jdbc/RSBZohoProjects_p_PortalId.htm) | Recommended | Restrict exposed entities based on the Portal Id. If left empty all available portals will be exposed. | — |
| [`ProjectId` ↗](https://cdn.cdata.com/help/PZK/jdbc/RSBZohoProjects_p_ProjectId.htm) | Recommended | Restrict exposed entities based on the Project Id. If left empty, all available portals will be exposed. | — |
| [`Region` ↗](https://cdn.cdata.com/help/PZK/jdbc/RSBZohoProjects_p_Region.htm) | Recommended | The Top Level Domain (TLD) in the server URL. | `US` |

## [](https://www.palantir.com/docs/foundry/available-connectors/zoho-projects/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| projectsapi.zoho.<Region> | Always. Region connection property maps to TLD (default `Region=US` --> .com) |
| <APIDomain> - default: zohoapis.<Region> | Always. Retrieved automatically with OAuth flow; set in APIDomain connection property when manually providing OAuthAccessToken |
| <AccountsServer> - default: accounts.zoho.<Region> | Always. Retrieved automatically with OAuth flow; set in AccountsServer connection property when manually providing OAuthAccessToken |

### [](https://www.palantir.com/docs/foundry/available-connectors/zoho-projects/#region-mappings)Region mappings

Use the following region mapping to complete the domain URL:

| Region | Endpoint |
| --- | --- |
| US | .com |
| Europe | .eu |
| India | .in |
| Australia | .com.au |
| Japan | .jp |
| China | .com.cn |

[← PREVIOUS Zoho Inventory](https://www.palantir.com/docs/foundry/available-connectors/zoho-inventory/)

[NEXT Zuora →](https://www.palantir.com/docs/foundry/available-connectors/zuora/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

