Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/paylocity/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/paylocity/#paylocity)Paylocity

The Paylocity connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Paylocity.

To create a new Paylocity source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Paylocity-specific configuration and networking. For the complete property reference, see the [official Paylocity driver documentation ↗](https://cdn.cdata.com/help/KPK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/paylocity/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`CompanyId` ↗](https://cdn.cdata.com/help/KPK/jdbc/RSBPaylocity_p_CompanyId.htm) | Recommended | The ID of the company file. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/KPK/jdbc/RSBPaylocity_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`IV` ↗](https://cdn.cdata.com/help/KPK/jdbc/RSBPaylocity_p_IV.htm) | Recommended | The initialization vector (IV). | — |
| [`Key` ↗](https://cdn.cdata.com/help/KPK/jdbc/RSBPaylocity_p_Key.htm) | Recommended | The secret key for the symmetric algorithm. | — |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/KPK/jdbc/RSBPaylocity_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/KPK/jdbc/RSBPaylocity_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`RSAPublicKey` ↗](https://cdn.cdata.com/help/KPK/jdbc/RSBPaylocity_p_RSAPublicKey.htm) | Recommended | Set this to the public key shared by Paylocity. | — |
| [`UsePayEntryAPI` ↗](https://cdn.cdata.com/help/KPK/jdbc/RSBPaylocity_p_UsePayEntryAPI.htm) | Recommended | Set to true if you want to access the Pay Entry API. When this property is set to true, you should specify a different location for OAuthSettingsFile. | `FALSE` |
| [`UseSandbox` ↗](https://cdn.cdata.com/help/KPK/jdbc/RSBPaylocity_p_UseSandbox.htm) | Recommended | Set to true if you are using sandbox account. | `FALSE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/paylocity/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.paylocity.com | If `UseSandbox=FALSE` (default) |
| apisandbox.paylocity.com | If `UseSandbox=TRUE` |
| dc1prodgwext.paylocity.com | If `UsePayEntryAPI=TRUE` AND `UseSandbox=FALSE` (default) |
| dc1demogwext.paylocity.com | If `UsePayEntryAPI=TRUE` AND `UseSandbox=TRUE` |

[← PREVIOUS Outreach](https://www.palantir.com/docs/foundry/available-connectors/outreach/)

[NEXT PayPal →](https://www.palantir.com/docs/foundry/available-connectors/paypal/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

