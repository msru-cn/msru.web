Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/google-search/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/google-search/#google-search)Google Search

The Google Search connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Google Search.

To create a new Google Search source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Google Search-specific configuration and networking. For the complete property reference, see the [official Google Search driver documentation ↗](https://cdn.cdata.com/help/BLK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/google-search/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`APIKey` ↗](https://cdn.cdata.com/help/BLK/jdbc/RSBGooglesearch_p_APIKey.htm) | Mandatory | Your key for the Custom Search API. | — |
| [`CustomSearchId` ↗](https://cdn.cdata.com/help/BLK/jdbc/RSBGooglesearch_p_CustomSearchId.htm) | Mandatory | The Id of the Custom Search engine. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/google-search/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| googleapis.com | Always |

[← PREVIOUS Google Pub/Sub](https://www.palantir.com/docs/foundry/available-connectors/pubsub/)

[NEXT Google Sheets →](https://www.palantir.com/docs/foundry/available-connectors/google-sheets/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

