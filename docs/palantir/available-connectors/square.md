Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/square/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/square/#square)Square

The Square connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Square.

To create a new Square source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Square-specific configuration and networking. For the complete property reference, see the [official Square driver documentation ↗](https://cdn.cdata.com/help/CRK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/square/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/CRK/jdbc/RSBSquare_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`LocationId` ↗](https://cdn.cdata.com/help/CRK/jdbc/RSBSquare_p_LocationId.htm) | Recommended | The Id of a business location that will be set as default. | — |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/CRK/jdbc/RSBSquare_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/CRK/jdbc/RSBSquare_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/CRK/jdbc/RSBSquare_p_Schema.htm) | Recommended | Specify the Square server version to connect with. | `v1` |
| [`UseSandbox` ↗](https://cdn.cdata.com/help/CRK/jdbc/RSBSquare_p_UseSandbox.htm) | Recommended | A boolean indicating whether you are using a Sandbox account. The provider makes requests to the production environment by default. | `FALSE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/square/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| connect.squareup.com | If `UseSandbox=FALSE` (default) |
| connect.squareupsandbox.com | If `UseSandbox=TRUE` |

[← PREVIOUS Splunk](https://www.palantir.com/docs/foundry/available-connectors/splunk/)

[NEXT Streak →](https://www.palantir.com/docs/foundry/available-connectors/streak/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

