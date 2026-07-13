Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/activecampaign/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/activecampaign/#activecampaign)ActiveCampaign

The ActiveCampaign connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for ActiveCampaign.

To create a new ActiveCampaign source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for ActiveCampaign-specific configuration and networking. For the complete property reference, see the [official ActiveCampaign driver documentation ↗](https://cdn.cdata.com/help/JUK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/activecampaign/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`APIKey` ↗](https://cdn.cdata.com/help/JUK/jdbc/RSBActiveCampaign_p_APIKey.htm) | Mandatory | The APIKey obtained from the ActiveCampaign UI. | — |
| [`URL` ↗](https://cdn.cdata.com/help/JUK/jdbc/RSBActiveCampaign_p_URL.htm) | Mandatory | Base URL which is used to access the API. | `https://<yourAccountName>.api-us1.com` |

## [](https://www.palantir.com/docs/foundry/available-connectors/activecampaign/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |

[← PREVIOUS Act-On](https://www.palantir.com/docs/foundry/available-connectors/act-on/)

[NEXT Acumatica →](https://www.palantir.com/docs/foundry/available-connectors/acumatica/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

