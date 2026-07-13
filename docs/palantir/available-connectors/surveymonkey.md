Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/surveymonkey/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/surveymonkey/#surveymonkey)SurveyMonkey

The SurveyMonkey connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SurveyMonkey.

To create a new SurveyMonkey source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SurveyMonkey-specific configuration and networking. For the complete property reference, see the [official SurveyMonkey driver documentation ↗](https://cdn.cdata.com/help/FMK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/surveymonkey/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Datacenter` ↗](https://cdn.cdata.com/help/FMK/jdbc/RSBSurveyMonkey_p_Datacenter.htm) | Mandatory | The originating datacenter of the SurveyMonkey account. It will determine the API access URL to use during authentication and data retrieval. | `US` |
| [`AccessToken` ↗](https://cdn.cdata.com/help/FMK/jdbc/RSBSurveyMonkey_p_AccessToken.htm) | Recommended | The Access Token of the SurveyMonkey application. | — |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/FMK/jdbc/RSBSurveyMonkey_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to SurveyMonkey. | `AccessToken` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/FMK/jdbc/RSBSurveyMonkey_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/FMK/jdbc/RSBSurveyMonkey_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/FMK/jdbc/RSBSurveyMonkey_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/surveymonkey/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.surveymonkey.net | Always |

[← PREVIOUS SuiteCRM](https://www.palantir.com/docs/foundry/available-connectors/suitecrm/)

[NEXT SybaseIQ →](https://www.palantir.com/docs/foundry/available-connectors/sybaseiq/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

