Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/github/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/github/#github)GitHub

The GitHub connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for GitHub.

To create a new GitHub source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for GitHub-specific configuration and networking. For the complete property reference, see the [official GitHub driver documentation ↗](https://cdn.cdata.com/help/FGK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/github/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/FGK/jdbc/RSBGitHub_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/FGK/jdbc/RSBGitHub_p_OAuthClientId.htm) | Recommended | Specifies the client ID (also known as the consumer key) assigned to your custom OAuth application. This ID is required to identify the application to the OAuth authorization server during authentication. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/FGK/jdbc/RSBGitHub_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret assigned to your custom OAuth application. This confidential value is used to authenticate the application to the OAuth authorization server. | — |
| [`OwnerLogin` ↗](https://cdn.cdata.com/help/FGK/jdbc/RSBGitHub_p_OwnerLogin.htm) | Recommended | A username used for an individual user account or a login name designated for an organization account. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/FGK/jdbc/RSBGitHub_p_Schema.htm) | Recommended | Restricts access to data within the specified schema. | — |
| [`URL` ↗](https://cdn.cdata.com/help/FGK/jdbc/RSBGitHub_p_URL.htm) | Recommended | The base URL for the GitHub environment you are connecting to. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/github/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| github.com | Always |
| api.github.com | Always |

[← PREVIOUS Generic connector](https://www.palantir.com/docs/foundry/available-connectors/generic/)

[NEXT Gmail →](https://www.palantir.com/docs/foundry/available-connectors/gmail/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

