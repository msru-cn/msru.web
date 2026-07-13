Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/taxjar/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/taxjar/#taxjar)TaxJar

The TaxJar connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for TaxJar.

To create a new TaxJar source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for TaxJar-specific configuration and networking. For the complete property reference, see the [official TaxJar driver documentation ↗](https://cdn.cdata.com/help/JTK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/taxjar/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`APIKey` ↗](https://cdn.cdata.com/help/JTK/jdbc/RSBTaxJar_p_APIKey.htm) | Mandatory | The APIKey obtained from the TaxJar UI. | — |
| [`UseSandbox` ↗](https://cdn.cdata.com/help/JTK/jdbc/RSBTaxJar_p_UseSandbox.htm) | Recommended | Whether to connect to the sandbox environment or not. | `FALSE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/taxjar/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.taxjar.com | If `UseSandbox=FALSE` (default) |
| api.sandbox.taxjar.com | If `UseSandbox=TRUE` |

[← PREVIOUS Tally](https://www.palantir.com/docs/foundry/available-connectors/tally/)

[NEXT Trello →](https://www.palantir.com/docs/foundry/available-connectors/trello/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

