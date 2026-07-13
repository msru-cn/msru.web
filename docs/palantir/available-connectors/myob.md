Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/myob/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/myob/#myob)MYOB

The MYOB connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for MYOB.

To create a new MYOB source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for MYOB-specific configuration and networking. For the complete property reference, see the [official MYOB driver documentation ↗](https://cdn.cdata.com/help/UMK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/myob/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Instance` ↗](https://cdn.cdata.com/help/UMK/jdbc/RSBMYOB_p_Instance.htm) | Mandatory | Whether to use On-Premise instance or Cloud instance when connecting to MyOB. | `Cloud` |
| [`CompanyFileId` ↗](https://cdn.cdata.com/help/UMK/jdbc/RSBMYOB_p_CompanyFileId.htm) | Recommended | The ID of the company file. If not specified, the ID of the first returned company file will be used. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/UMK/jdbc/RSBMYOB_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/UMK/jdbc/RSBMYOB_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/UMK/jdbc/RSBMYOB_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/UMK/jdbc/RSBMYOB_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`URL` ↗](https://cdn.cdata.com/help/UMK/jdbc/RSBMYOB_p_URL.htm) | Recommended | The URL of the MYOB instance. | `https://myMYOBInstance/accountright` |
| [`User` ↗](https://cdn.cdata.com/help/UMK/jdbc/RSBMYOB_p_User.htm) | Recommended | Specifies the user ID of the authenticating MYOB user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/myob/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.myob.com | If `Instance=Cloud` (default) |
| secure.myob.com | If `Instance=Cloud` (default) |
| <URL> | URL field for on-premise |

[← PREVIOUS Monday](https://www.palantir.com/docs/foundry/available-connectors/monday/)

[NEXT NoSQL stores →](https://www.palantir.com/docs/foundry/available-connectors/nosql-stores/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

