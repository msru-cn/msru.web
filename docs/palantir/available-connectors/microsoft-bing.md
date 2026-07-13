Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-bing/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-bing/#microsoft-bing)Microsoft Bing

The Microsoft Bing connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Bing.

To create a new Microsoft Bing source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Bing-specific configuration and networking. For the complete property reference, see the [official Microsoft Bing driver documentation ↗](https://cdn.cdata.com/help/BMK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-bing/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`APIKey` ↗](https://cdn.cdata.com/help/BMK/jdbc/RSBBing_p_APIKey.htm) | Mandatory | The Bing Search API key. | — |
| [`APIVersion` ↗](https://cdn.cdata.com/help/BMK/jdbc/RSBBing_p_APIVersion.htm) | Recommended | Specify the Microsoft Bing API version to connect with. | `V7` |
| [`Domain` ↗](https://cdn.cdata.com/help/BMK/jdbc/RSBBing_p_Domain.htm) | Recommended | Specify the Microsoft Bing domain to connect with. | `Bing` |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-bing/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.<Domain>.microsoft.com | Always |

[← PREVIOUS Microsoft Ads](https://www.palantir.com/docs/foundry/available-connectors/microsoft-ads/)

[NEXT Microsoft Dataverse →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dataverse/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

