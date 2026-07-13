Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/google-data-catalog/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/google-data-catalog/#google-data-catalog)Google Data Catalog

The Google Data Catalog connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Google Data Catalog.

To create a new Google Data Catalog source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Google Data Catalog-specific configuration and networking. For the complete property reference, see the [official Google Data Catalog driver documentation ↗](https://cdn.cdata.com/help/HGK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/google-data-catalog/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`OrganizationId` ↗](https://cdn.cdata.com/help/HGK/jdbc/RSBGoogleDataCatalog_p_OrganizationId.htm) | Mandatory | The ID associated with the Google Cloud Platform organization resource to connect to. | — |
| [`ProjectId` ↗](https://cdn.cdata.com/help/HGK/jdbc/RSBGoogleDataCatalog_p_ProjectId.htm) | Mandatory | The ID associated with the Google Cloud Platform project resource you would like to connect to. | — |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/HGK/jdbc/RSBGoogleDataCatalog_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Google Data Catalog. | `OAuthJWT` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/HGK/jdbc/RSBGoogleDataCatalog_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/HGK/jdbc/RSBGoogleDataCatalog_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/HGK/jdbc/RSBGoogleDataCatalog_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`OAuthJWTCert` ↗](https://cdn.cdata.com/help/HGK/jdbc/RSBGoogleDataCatalog_p_OAuthJWTCert.htm) | Recommended | The JWT Certificate store. | — |
| [`OAuthJWTCertType` ↗](https://cdn.cdata.com/help/HGK/jdbc/RSBGoogleDataCatalog_p_OAuthJWTCertType.htm) | Recommended | The type of key store containing the JWT Certificate. | `GOOGLEJSONBLOB` |
| [`OAuthJWTSubject` ↗](https://cdn.cdata.com/help/HGK/jdbc/RSBGoogleDataCatalog_p_OAuthJWTSubject.htm) | Recommended | The user subject for which the application is requesting delegated access. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/google-data-catalog/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| accounts.google.com | Always. Required for OAuth |
| googleapis.com | Always |
| datacatalog.googleapis.com | Always |

[← PREVIOUS Google Contacts](https://www.palantir.com/docs/foundry/available-connectors/google-contacts/)

[NEXT Google Directory →](https://www.palantir.com/docs/foundry/available-connectors/google-directory/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

