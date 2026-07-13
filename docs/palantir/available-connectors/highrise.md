Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/highrise/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/highrise/#highrise)Highrise

The Highrise connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Highrise.

To create a new Highrise source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Highrise-specific configuration and networking. For the complete property reference, see the [official Highrise driver documentation ↗](https://cdn.cdata.com/help/BHK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/highrise/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AccountId` ↗](https://cdn.cdata.com/help/BHK/jdbc/RSBHighrise_p_AccountId.htm) | Mandatory | Account Id of the currently authenticated user. | — |
| [`APIToken` ↗](https://cdn.cdata.com/help/BHK/jdbc/RSBHighrise_p_APIToken.htm) | Recommended | APIToken of the currently authenticated user. | — |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/BHK/jdbc/RSBHighrise_p_AuthScheme.htm) | Recommended | Whether to connect to Highrise with OAuth2 or APIToken. | `APIToken` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/BHK/jdbc/RSBHighrise_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/BHK/jdbc/RSBHighrise_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/BHK/jdbc/RSBHighrise_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/highrise/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <AccountId>.highrisehq.com | Always |
| launchpad.37signals.com | If `AuthScheme=OAuth` |

[← PREVIOUS HDFS](https://www.palantir.com/docs/foundry/available-connectors/hdfs/)

[NEXT Hubspot →](https://www.palantir.com/docs/foundry/available-connectors/hubspot/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

