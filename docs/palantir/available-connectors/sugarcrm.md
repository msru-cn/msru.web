Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sugarcrm/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sugarcrm/#sugarcrm)SugarCRM

The SugarCRM connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SugarCRM.

To create a new SugarCRM source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SugarCRM-specific configuration and networking. For the complete property reference, see the [official SugarCRM driver documentation ↗](https://cdn.cdata.com/help/CCK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sugarcrm/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`URL` ↗](https://cdn.cdata.com/help/CCK/jdbc/RSBSugarCRM_p_URL.htm) | Mandatory | The URL of the SugarCRM account in the form 'http://{sugar crm instance}.com'. | `https://{mySugarCRMInstance}.com` |
| [`APIVersion` ↗](https://cdn.cdata.com/help/CCK/jdbc/RSBSugarCRM_p_APIVersion.htm) | Recommended | The version of the SugarCRM used. | `v11` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/CCK/jdbc/RSBSugarCRM_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/CCK/jdbc/RSBSugarCRM_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/CCK/jdbc/RSBSugarCRM_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/CCK/jdbc/RSBSugarCRM_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/CCK/jdbc/RSBSugarCRM_p_User.htm) | Recommended | Specifies the user ID of the authenticating SugarCRM user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/sugarcrm/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |

[← PREVIOUS Stripe](https://www.palantir.com/docs/foundry/available-connectors/stripe/)

[NEXT SuiteCRM →](https://www.palantir.com/docs/foundry/available-connectors/suitecrm/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

