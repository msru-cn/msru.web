Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/streak/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/streak/#streak)Streak

The Streak connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Streak.

To create a new Streak source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Streak-specific configuration and networking. For the complete property reference, see the [official Streak driver documentation ↗](https://cdn.cdata.com/help/UDK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/streak/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`ApiKey` ↗](https://cdn.cdata.com/help/UDK/jdbc/RSBStreak_p_ApiKey.htm) | Mandatory | The required User Name of the role to use when authenticating. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/streak/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| streak.com | Always |

[← PREVIOUS Square](https://www.palantir.com/docs/foundry/available-connectors/square/)

[NEXT Stripe →](https://www.palantir.com/docs/foundry/available-connectors/stripe/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

