Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/pipedrive/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/pipedrive/#pipedrive)Pipedrive

The Pipedrive connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Pipedrive.

To create a new Pipedrive source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Pipedrive-specific configuration and networking. For the complete property reference, see the [official Pipedrive driver documentation ↗](https://cdn.cdata.com/help/KDK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/pipedrive/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`CompanyDomain` ↗](https://cdn.cdata.com/help/KDK/jdbc/RSBPipeDrive_p_CompanyDomain.htm) | Mandatory | The company domain used for accessing your Pipedrive account. | `https://myCompanyDomain.pipedrive.com` |
| [`Schema` ↗](https://cdn.cdata.com/help/KDK/jdbc/RSBPipeDrive_p_Schema.htm) | Mandatory | Specify the Pipedrive API version to use. | `V1` |
| [`APIToken` ↗](https://cdn.cdata.com/help/KDK/jdbc/RSBPipeDrive_p_APIToken.htm) | Recommended | The API Token used for accessing your PipeDrive account. | — |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/KDK/jdbc/RSBPipeDrive_p_AuthScheme.htm) | Recommended | Whether to use Basic Authentication or OAuth Authentication when connecting to PipeDrive. | `Basic` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/KDK/jdbc/RSBPipeDrive_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/KDK/jdbc/RSBPipeDrive_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/KDK/jdbc/RSBPipeDrive_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/pipedrive/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <CompanyDomain> | Always. CompanyDomain connection property |
| oauth.pipedrive.com | If `AuthScheme=OAuth` |

[← PREVIOUS Pinterest](https://www.palantir.com/docs/foundry/available-connectors/pinterest/)

[NEXT PostgreSQL →](https://www.palantir.com/docs/foundry/available-connectors/postgresql/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

