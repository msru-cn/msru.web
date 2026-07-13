Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/twilio/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/twilio/#twilio)Twilio

The Twilio connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Twilio.

To create a new Twilio source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Twilio-specific configuration and networking. For the complete property reference, see the [official Twilio driver documentation ↗](https://cdn.cdata.com/help/BTK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/twilio/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AccountSID` ↗](https://cdn.cdata.com/help/BTK/jdbc/RSBTwilio_p_AccountSID.htm) | Mandatory | Account SID of the currently authenticated user. | — |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/BTK/jdbc/RSBTwilio_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Twilio. | `AuthToken` |
| [`AuthToken` ↗](https://cdn.cdata.com/help/BTK/jdbc/RSBTwilio_p_AuthToken.htm) | Mandatory | Auth token of the currently authenticated user. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/twilio/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.twilio.com | Always |
| sync.twilio.com | For ServiceLists and Services tables |
| insights.twilio.com | For CallSummary, CallEvents, and CallMetrics views |
| conversations.twilio.com | For Conversation view |

[← PREVIOUS TSheets](https://www.palantir.com/docs/foundry/available-connectors/tsheets/)

[NEXT Twitter Ads →](https://www.palantir.com/docs/foundry/available-connectors/twitter-ads/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

