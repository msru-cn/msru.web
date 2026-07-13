Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/jira-service-management/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/jira-service-management/#jira-service-management)Jira Service Management

The Jira Service Management connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Jira Service Management.

To create a new Jira Service Management source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Jira Service Management-specific configuration and networking. For the complete property reference, see the [official Jira Service Management driver documentation ↗](https://cdn.cdata.com/help/GKM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/jira-service-management/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/GKM/jdbc/RSBJiraServiceDesk_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Jira Service Management. | `APIToken` |
| [`URL` ↗](https://cdn.cdata.com/help/GKM/jdbc/RSBJiraServiceDesk_p_URL.htm) | Mandatory | The URL to your JIRA Service Management endpoint. | `https://yoursitename.atlassian.net` |
| [`APIToken` ↗](https://cdn.cdata.com/help/GKM/jdbc/RSBJiraServiceDesk_p_APIToken.htm) | Recommended | APIToken of the currently authenticated user. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/GKM/jdbc/RSBJiraServiceDesk_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/GKM/jdbc/RSBJiraServiceDesk_p_OAuthClientId.htm) | Recommended | Specifies the client ID (also known as the consumer key) assigned to your custom OAuth application. This ID is required to identify the application to the OAuth authorization server during authentication. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/GKM/jdbc/RSBJiraServiceDesk_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret assigned to your custom OAuth application. This confidential value is used to authenticate the application to the OAuth authorization server. | — |
| [`User` ↗](https://cdn.cdata.com/help/GKM/jdbc/RSBJiraServiceDesk_p_User.htm) | Recommended | Specifies the user ID of the authenticating Jira Service Management user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/jira-service-management/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | URL connection property (usually [https://yoursitename.atlassian.net](https://yoursitename.atlassian.net/)) |
| api.atlassian.com | If `AuthScheme=OAuth` |
| <SSOLoginURL> | If `AuthScheme=Okta` or Crowd |
| <SSOExchangeURL> | If `AuthScheme=Okta` or Crowd |

[← PREVIOUS JDBC (custom)](https://www.palantir.com/docs/foundry/available-connectors/custom-jdbc-sources/)

[NEXT Kafka →](https://www.palantir.com/docs/foundry/available-connectors/kafka/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

