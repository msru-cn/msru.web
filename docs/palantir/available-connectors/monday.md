Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/monday/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/monday/#monday)Monday

The Monday connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Monday.

To create a new Monday source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Monday-specific configuration and networking. For the complete property reference, see the [official Monday driver documentation ↗](https://cdn.cdata.com/help/MOK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/monday/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/MOK/jdbc/RSBMonday_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Monday. | `Token` |
| [`APIToken` ↗](https://cdn.cdata.com/help/MOK/jdbc/RSBMonday_p_APIToken.htm) | Recommended | An API token associated with your Monday account. | — |
| [`Domain` ↗](https://cdn.cdata.com/help/MOK/jdbc/RSBMonday_p_Domain.htm) | Recommended | This property is deprecated. Use the URL connection property instead. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/MOK/jdbc/RSBMonday_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/MOK/jdbc/RSBMonday_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/MOK/jdbc/RSBMonday_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/MOK/jdbc/RSBMonday_p_Schema.htm) | Recommended | Limits displayed tables to those in the specified schema. | — |
| [`URL` ↗](https://cdn.cdata.com/help/MOK/jdbc/RSBMonday_p_URL.htm) | Recommended | Your Monday account URL. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/monday/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.monday.com | Always |
| <Domain>.monday.com | If using `Schema=AuditLog` |
| auth.monday.com | If using `AuthScheme=OAuth` |

[← PREVIOUS Microsoft Teams](https://www.palantir.com/docs/foundry/available-connectors/microsoft-teams/)

[NEXT MYOB →](https://www.palantir.com/docs/foundry/available-connectors/myob/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

