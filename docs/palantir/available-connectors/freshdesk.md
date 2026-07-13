Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/freshdesk/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/freshdesk/#freshdesk)Freshdesk

The Freshdesk connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Freshdesk.

To create a new Freshdesk source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Freshdesk-specific configuration and networking. For the complete property reference, see the [official Freshdesk driver documentation ↗](https://cdn.cdata.com/help/GFK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/freshdesk/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`APIKey` ↗](https://cdn.cdata.com/help/GFK/jdbc/RSBFreshDesk_p_APIKey.htm) | Mandatory | The API key used for accessing your Freshdesk account. | — |
| [`Domain` ↗](https://cdn.cdata.com/help/GFK/jdbc/RSBFreshDesk_p_Domain.htm) | Mandatory | Domain is used for accessing your Freshdesk account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/freshdesk/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Domain>.freshdesk.com | Always. Domain connection property |

[← PREVIOUS FreshBooks](https://www.palantir.com/docs/foundry/available-connectors/freshbooks/)

[NEXT FTP/FTPS →](https://www.palantir.com/docs/foundry/available-connectors/ftps/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

