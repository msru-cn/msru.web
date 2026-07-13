Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/suitecrm/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/suitecrm/#suitecrm)SuiteCRM

The SuiteCRM connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SuiteCRM.

To create a new SuiteCRM source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SuiteCRM-specific configuration and networking. For the complete property reference, see the [official SuiteCRM driver documentation ↗](https://cdn.cdata.com/help/ETK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/suitecrm/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Schema` ↗](https://cdn.cdata.com/help/ETK/jdbc/RSBSuiteCRM_p_Schema.htm) | Mandatory | The schema which will be used to connect to SuiteCRM. | `suitecrmv4` |
| [`URL` ↗](https://cdn.cdata.com/help/ETK/jdbc/RSBSuiteCRM_p_URL.htm) | Mandatory | The URL of the SuiteCRM account. | `https://{suiteCrmHost}.com/` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/ETK/jdbc/RSBSuiteCRM_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/ETK/jdbc/RSBSuiteCRM_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/ETK/jdbc/RSBSuiteCRM_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/ETK/jdbc/RSBSuiteCRM_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/ETK/jdbc/RSBSuiteCRM_p_User.htm) | Recommended | Specifies the user ID of the authenticating SuiteCRM user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/suitecrm/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |

[← PREVIOUS SugarCRM](https://www.palantir.com/docs/foundry/available-connectors/sugarcrm/)

[NEXT SurveyMonkey →](https://www.palantir.com/docs/foundry/available-connectors/surveymonkey/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

