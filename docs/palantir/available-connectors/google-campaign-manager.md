Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/google-campaign-manager/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/google-campaign-manager/#google-campaign-manager)Google Campaign Manager

The Google Campaign Manager connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Google Campaign Manager.

To create a new Google Campaign Manager source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Google Campaign Manager-specific configuration and networking. For the complete property reference, see the [official Google Campaign Manager driver documentation ↗](https://cdn.cdata.com/help/EPK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/google-campaign-manager/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`ProfileID` ↗](https://cdn.cdata.com/help/EPK/jdbc/RSBDoubleClickCM_p_ProfileID.htm) | Mandatory | The DFA Profile ID. If not specified, the first Profile returned from the UserProfiles service will be used. | — |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/EPK/jdbc/RSBDoubleClickCM_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Google Campaign Manager 360. | `OAuthJWT` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/EPK/jdbc/RSBDoubleClickCM_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/EPK/jdbc/RSBDoubleClickCM_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/EPK/jdbc/RSBDoubleClickCM_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`OAuthJWTCert` ↗](https://cdn.cdata.com/help/EPK/jdbc/RSBDoubleClickCM_p_OAuthJWTCert.htm) | Recommended | The JWT Certificate store. | — |
| [`OAuthJWTCertType` ↗](https://cdn.cdata.com/help/EPK/jdbc/RSBDoubleClickCM_p_OAuthJWTCertType.htm) | Recommended | The type of key store containing the JWT Certificate. | `GOOGLEJSONBLOB` |
| [`OAuthJWTSubject` ↗](https://cdn.cdata.com/help/EPK/jdbc/RSBDoubleClickCM_p_OAuthJWTSubject.htm) | Recommended | The user subject for which the application is requesting delegated access. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/google-campaign-manager/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| ads.google.com | Always |
| admanager.google.com | Always |
| accounts.google.com | Always. Used for OAuth |

[← PREVIOUS Gmail](https://www.palantir.com/docs/foundry/available-connectors/gmail/)

[NEXT Google Cloud Storage →](https://www.palantir.com/docs/foundry/available-connectors/google-cloud-storage/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

