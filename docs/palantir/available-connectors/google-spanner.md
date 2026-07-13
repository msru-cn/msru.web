Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/google-spanner/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/google-spanner/#google-spanner)Google Spanner

The Google Spanner connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Google Spanner.

To create a new Google Spanner source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Google Spanner-specific configuration and networking. For the complete property reference, see the [official Google Spanner driver documentation ↗](https://cdn.cdata.com/help/OGK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/google-spanner/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`DatabaseDialect` ↗](https://cdn.cdata.com/help/OGK/jdbc/RSBGoogleSpanner_p_DatabaseDialect.htm) | Mandatory | The dialect type of the connected database. | `GoogleStandardSQL` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/OGK/jdbc/RSBGoogleSpanner_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Google Spanner. | `OAuthJWT` |
| [`Database` ↗](https://cdn.cdata.com/help/OGK/jdbc/RSBGoogleSpanner_p_Database.htm) | Recommended | The name of the Google Spanner database to connect to. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/OGK/jdbc/RSBGoogleSpanner_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`InstanceId` ↗](https://cdn.cdata.com/help/OGK/jdbc/RSBGoogleSpanner_p_InstanceId.htm) | Recommended | The id of the Google Spanner instance to which you are connecting. | — |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/OGK/jdbc/RSBGoogleSpanner_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/OGK/jdbc/RSBGoogleSpanner_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`OAuthJWTCert` ↗](https://cdn.cdata.com/help/OGK/jdbc/RSBGoogleSpanner_p_OAuthJWTCert.htm) | Recommended | The JWT Certificate store. | — |
| [`OAuthJWTCertType` ↗](https://cdn.cdata.com/help/OGK/jdbc/RSBGoogleSpanner_p_OAuthJWTCertType.htm) | Recommended | The type of key store containing the JWT Certificate. | `GOOGLEJSONBLOB` |
| [`OAuthJWTSubject` ↗](https://cdn.cdata.com/help/OGK/jdbc/RSBGoogleSpanner_p_OAuthJWTSubject.htm) | Recommended | The user subject for which the application is requesting delegated access. | — |
| [`ProjectId` ↗](https://cdn.cdata.com/help/OGK/jdbc/RSBGoogleSpanner_p_ProjectId.htm) | Recommended | The id of the project where your Google Spanner instance resides. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/google-spanner/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| accounts.google.com | Always. Required for OAuth |
| spanner.googleapis.com | Always. There is a hidden property Server that can override this with a different URL. |
| googleapis.com | Always |

[← PREVIOUS Google Sheets](https://www.palantir.com/docs/foundry/available-connectors/google-sheets/)

[NEXT GraphQL →](https://www.palantir.com/docs/foundry/available-connectors/graphql/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

