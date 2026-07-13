Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/act-on/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/act-on/#act-on)Act-On

The Act-On connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Act-On.

To create a new Act-On source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Act-On-specific configuration and networking. For the complete property reference, see the [official Act-On driver documentation ↗](https://cdn.cdata.com/help/OVK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/act-on/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/OVK/jdbc/RSBActOn_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Act-On. | `OAuth` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/OVK/jdbc/RSBActOn_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/OVK/jdbc/RSBActOn_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/OVK/jdbc/RSBActOn_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`TypeDetectionScheme` ↗](https://cdn.cdata.com/help/OVK/jdbc/RSBActOn_p_TypeDetectionScheme.htm) | Recommended | Specifies how to determine the data type of columns. | `RowScan` |

## [](https://www.palantir.com/docs/foundry/available-connectors/act-on/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| restapi.actonsoftware.com | Always |

[← PREVIOUS Act! CRM](https://www.palantir.com/docs/foundry/available-connectors/act!-crm/)

[NEXT ActiveCampaign →](https://www.palantir.com/docs/foundry/available-connectors/activecampaign/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

