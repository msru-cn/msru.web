Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/youtube-analytics/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/youtube-analytics/#youtube-analytics)YouTube Analytics

The YouTube Analytics connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for YouTube Analytics.

To create a new YouTube Analytics source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for YouTube Analytics-specific configuration and networking. For the complete property reference, see the [official YouTube Analytics driver documentation ↗](https://cdn.cdata.com/help/BYM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/youtube-analytics/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/BYM/jdbc/RSBYouTubeAnalytics_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to YouTube Analytics. | `OAuthJWT` |
| [`ChannelId` ↗](https://cdn.cdata.com/help/BYM/jdbc/RSBYouTubeAnalytics_p_ChannelId.htm) | Recommended | The Id of a channel belonging to the authenticated user. | — |
| [`ContentOwnerId` ↗](https://cdn.cdata.com/help/BYM/jdbc/RSBYouTubeAnalytics_p_ContentOwnerId.htm) | Recommended | The Id of the copyright holder for content in YouTube's rights management system. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/BYM/jdbc/RSBYouTubeAnalytics_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/BYM/jdbc/RSBYouTubeAnalytics_p_OAuthClientId.htm) | Recommended | Specifies the client ID (also known as the consumer key) assigned to your custom OAuth application. This ID is required to identify the application to the OAuth authorization server during authentication. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/BYM/jdbc/RSBYouTubeAnalytics_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret assigned to your custom OAuth application. This confidential value is used to authenticate the application to the OAuth authorization server. (Custom OAuth applications only.) | — |
| [`OAuthJWTCert` ↗](https://cdn.cdata.com/help/BYM/jdbc/RSBYouTubeAnalytics_p_OAuthJWTCert.htm) | Recommended | Supplies the name of the client certificate's JWT Certificate store. | — |
| [`OAuthJWTCertType` ↗](https://cdn.cdata.com/help/BYM/jdbc/RSBYouTubeAnalytics_p_OAuthJWTCertType.htm) | Recommended | Identifies the type of key store containing the JWT Certificate. | `GOOGLEJSONBLOB` |

## [](https://www.palantir.com/docs/foundry/available-connectors/youtube-analytics/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| accounts.google.com | Always. Required for OAuth |
| googleapis.com | Always |
| developers.google.com | Always |
| youtubeanalytics.googleapis.com | Always |

[← PREVIOUS Xero WorkflowMax](https://www.palantir.com/docs/foundry/available-connectors/xero-workflowmax/)

[NEXT Zendesk →](https://www.palantir.com/docs/foundry/available-connectors/zendesk/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

