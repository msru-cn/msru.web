Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/shipstation/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/shipstation/#shipstation)ShipStation

The ShipStation connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for ShipStation.

To create a new ShipStation source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for ShipStation-specific configuration and networking. For the complete property reference, see the [official ShipStation driver documentation ↗](https://cdn.cdata.com/help/HSK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/shipstation/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`APIKey` ↗](https://cdn.cdata.com/help/HSK/jdbc/RSBShipStation_p_APIKey.htm) | Mandatory | The API key used for accessing your ShipStation account. | — |
| [`APISecret` ↗](https://cdn.cdata.com/help/HSK/jdbc/RSBShipStation_p_APISecret.htm) | Mandatory | The API secret used for accessing your ShipStation account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/shipstation/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| ssapi.shipstation.com | Always |

[← PREVIOUS SharePoint Online](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/)

[NEXT Shopify →](https://www.palantir.com/docs/foundry/available-connectors/shopify/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

