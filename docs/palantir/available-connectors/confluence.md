Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/confluence/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/confluence/#confluence)Confluence

The Confluence connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Confluence.

To create a new Confluence source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Confluence-specific configuration and networking. For the complete property reference, see the [official Confluence driver documentation ↗](https://cdn.cdata.com/help/UGK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/confluence/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/UGK/jdbc/RSBConfluence_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Confluence. | `Basic` |
| [`Timezone` ↗](https://cdn.cdata.com/help/UGK/jdbc/RSBConfluence_p_Timezone.htm) | Mandatory | Specify the timezone of the Confluence instance in order to use the datetime filters accordingly and retrieve the results according to your timezone. An example of a timezone would be America/New_York. | `America/New_York` |
| [`URL` ↗](https://cdn.cdata.com/help/UGK/jdbc/RSBConfluence_p_URL.htm) | Mandatory | The URL to your Confluence endpoint. | `https://yoursitename.atlassian.net` |
| [`APIToken` ↗](https://cdn.cdata.com/help/UGK/jdbc/RSBConfluence_p_APIToken.htm) | Recommended | APIToken of the currently authenticated user. | — |
| [`CloudId` ↗](https://cdn.cdata.com/help/UGK/jdbc/RSBConfluence_p_CloudId.htm) | Recommended | The Cloud Id for the Atlassian site that was authorized. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/UGK/jdbc/RSBConfluence_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/UGK/jdbc/RSBConfluence_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/UGK/jdbc/RSBConfluence_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/UGK/jdbc/RSBConfluence_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/UGK/jdbc/RSBConfluence_p_User.htm) | Recommended | Specifies the user ID of the authenticating Confluence user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/confluence/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |
| api.atlassian.com | If `AuthScheme=OAuth` |
| <SSOLoginURL> | If `AuthScheme=Okta` or Crowd |
| <SSOExchangeURL> | If `AuthScheme=Okta` or Crowd |

[← PREVIOUS CockroachDB](https://www.palantir.com/docs/foundry/available-connectors/cockroachdb/)

[NEXT Couchbase →](https://www.palantir.com/docs/foundry/available-connectors/couchbase/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

