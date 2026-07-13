Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/bugzilla/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/bugzilla/#bugzilla)Bugzilla

The Bugzilla connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Bugzilla.

To create a new Bugzilla source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Bugzilla-specific configuration and networking. For the complete property reference, see the [official Bugzilla driver documentation ↗](https://cdn.cdata.com/help/SBK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/bugzilla/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`APIKey` ↗](https://cdn.cdata.com/help/SBK/jdbc/RSBBugzilla_p_APIKey.htm) | Mandatory | An ApiKey to authenticate to your account. API keys can be created in the Preferences > API Keys section. | — |
| [`URL` ↗](https://cdn.cdata.com/help/SBK/jdbc/RSBBugzilla_p_URL.htm) | Mandatory | The URL to the Bugzilla server used for logging in. | `https://<BugzillaURL>` |

## [](https://www.palantir.com/docs/foundry/available-connectors/bugzilla/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always |

[← PREVIOUS Blackbaud Raisers Edge NXT](https://www.palantir.com/docs/foundry/available-connectors/blackbaud-raisers-edge-nxt/)

[NEXT Bullhorn CRM →](https://www.palantir.com/docs/foundry/available-connectors/bullhorn-crm/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

