Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/google-sheets/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/google-sheets/#google-sheets)Google Sheets

The Google Sheets connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) connector. The official documentation for this driver can be found [here ↗](https://cdn.cdata.com/help/RLM/jdbc/).

## [](https://www.palantir.com/docs/foundry/available-connectors/google-sheets/#networking)Networking

The table below lists the domains that the source needs to be able to access to successfully run.

If running the connection on a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker), be sure to add corresponding egress policies for each of those domains.

If those domains are in a different network from Foundry's network, configure [agent proxy egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies). The agent must be able to reach the domain addresses, and the systems on those domains must allow connections from the agent. [Learn more about agent networking.](https://www.palantir.com/docs/foundry/data-connection/set-up-agent/#configure-agent-network-access)

| Domain | Required |
| --- | --- |
| accounts.google.com | Always. Required for OAuth |
| `www.googleapis.com` | Always |

[← PREVIOUS Google Search](https://www.palantir.com/docs/foundry/available-connectors/google-search/)

[NEXT Google Spanner →](https://www.palantir.com/docs/foundry/available-connectors/google-spanner/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

