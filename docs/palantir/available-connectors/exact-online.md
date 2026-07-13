Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/exact-online/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/exact-online/#exact-online)Exact Online

The Exact Online connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Exact Online.

To create a new Exact Online source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Exact Online-specific configuration and networking. For the complete property reference, see the [official Exact Online driver documentation ↗](https://cdn.cdata.com/help/DYK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/exact-online/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Region` ↗](https://cdn.cdata.com/help/DYK/jdbc/RSBExact_p_Region.htm) | Mandatory | The region of the Exact Online server to which you are connecting. | `United States` |
| [`Division` ↗](https://cdn.cdata.com/help/DYK/jdbc/RSBExact_p_Division.htm) | Recommended | The Division associated with the Exact Online administration. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/DYK/jdbc/RSBExact_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/DYK/jdbc/RSBExact_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/DYK/jdbc/RSBExact_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/exact-online/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| start.exactonline.<Region> | Always |

### [](https://www.palantir.com/docs/foundry/available-connectors/exact-online/#region-mappings)Region mappings

Use the following region mapping to complete the domain URL:

| Region | Endpoint |
| --- | --- |
| United Kingdom | co.uk |
| The Netherlands | nl |
| Belgium | be |
| Germany | de |
| Spain | es |
| France | fr |

[← PREVIOUS Epicor Kinetic](https://www.palantir.com/docs/foundry/available-connectors/epicor-kinetic/)

[NEXT Facebook →](https://www.palantir.com/docs/foundry/available-connectors/facebook/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

