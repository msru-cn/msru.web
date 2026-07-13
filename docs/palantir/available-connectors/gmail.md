Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/gmail/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/gmail/#gmail)Gmail

The Gmail connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Gmail.

To create a new Gmail source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Gmail-specific configuration and networking. For the complete property reference, see the [official Gmail driver documentation ↗](https://cdn.cdata.com/help/DLM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/gmail/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Schema` ↗](https://cdn.cdata.com/help/DLM/jdbc/RSBGmail_p_Schema.htm) | Mandatory | Used to specify what Gmail Api to use, either REST (default) or IMAP. | `REST` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/DLM/jdbc/RSBGmail_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Gmail. | `OAuthJWT` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/DLM/jdbc/RSBGmail_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/DLM/jdbc/RSBGmail_p_OAuthClientId.htm) | Recommended | Specifies the client ID (also known as the consumer key) assigned to your custom OAuth application. This ID is required to identify the application to the OAuth authorization server during authentication. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/DLM/jdbc/RSBGmail_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret assigned to your custom OAuth application. This confidential value is used to authenticate the application to the OAuth authorization server. | — |
| [`OAuthJWTCert` ↗](https://cdn.cdata.com/help/DLM/jdbc/RSBGmail_p_OAuthJWTCert.htm) | Recommended | Supplies the name of the client certificate's JWT Certificate store. | — |
| [`OAuthJWTCertType` ↗](https://cdn.cdata.com/help/DLM/jdbc/RSBGmail_p_OAuthJWTCertType.htm) | Recommended | Identifies the type of key store containing the JWT Certificate. | `GOOGLEJSONBLOB` |
| [`OAuthJWTSubject` ↗](https://cdn.cdata.com/help/DLM/jdbc/RSBGmail_p_OAuthJWTSubject.htm) | Recommended | The user subject for which the application is requesting delegated access. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/gmail/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| accounts.google.com | Always. Required for OAuth |
| googleapis.com | Always |

[← PREVIOUS GitHub](https://www.palantir.com/docs/foundry/available-connectors/github/)

[NEXT Google Campaign Manager →](https://www.palantir.com/docs/foundry/available-connectors/google-campaign-manager/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

