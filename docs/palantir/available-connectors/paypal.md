Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/paypal/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/paypal/#paypal)PayPal

The PayPal connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for PayPal.

To create a new PayPal source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for PayPal-specific configuration and networking. For the complete property reference, see the [official PayPal driver documentation ↗](https://cdn.cdata.com/help/BPK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/paypal/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Schema` ↗](https://cdn.cdata.com/help/BPK/jdbc/RSBpaypal_p_Schema.htm) | Mandatory | The type of schema to use. | `SOAP` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/BPK/jdbc/RSBpaypal_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/BPK/jdbc/RSBpaypal_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/BPK/jdbc/RSBpaypal_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/BPK/jdbc/RSBpaypal_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`Signature` ↗](https://cdn.cdata.com/help/BPK/jdbc/RSBpaypal_p_Signature.htm) | Recommended | The signature required to use the SOAP API. | — |
| [`User` ↗](https://cdn.cdata.com/help/BPK/jdbc/RSBpaypal_p_User.htm) | Recommended | Specifies the user ID of the authenticating PayPal user account. | — |
| [`UseSandbox` ↗](https://cdn.cdata.com/help/BPK/jdbc/RSBpaypal_p_UseSandbox.htm) | Recommended | A Boolean value indicating if you are using a Sandbox account. | `FALSE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/paypal/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api-3t.paypal.com | If `Schema=SOAP` (default) AND `UseSandbox=FALSE` (default) |
| api.paypal.com | If `Schema=REST` AND `UseSandbox=FALSE` (default) |
| paypal.com | If `Schema=REST` AND `UseSandbox=FALSE` (default) |
| api-3t.sandbox.paypal.com | If `Schema=SOAP` (default) AND `UseSandbox=TRUE` |
| api.sandbox.paypal.com | If `Schema=REST` AND `UseSandbox=TRUE` |
| sandbox.paypal.com | If `Schema=REST` AND `UseSandbox=TRUE` |

[← PREVIOUS Paylocity](https://www.palantir.com/docs/foundry/available-connectors/paylocity/)

[NEXT PI System →](https://www.palantir.com/docs/foundry/available-connectors/pi/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

