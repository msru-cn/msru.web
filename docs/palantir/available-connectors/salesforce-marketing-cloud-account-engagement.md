Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud-account-engagement/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud-account-engagement/#salesforce-marketing-cloud-account-engagement)Salesforce Marketing Cloud Account Engagement

The Salesforce Marketing Cloud Account Engagement connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Salesforce Marketing Cloud Account Engagement.

To create a new Salesforce Marketing Cloud Account Engagement source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Salesforce Marketing Cloud Account Engagement-specific configuration and networking. For the complete property reference, see the [official Salesforce Marketing Cloud Account Engagement driver documentation ↗](https://cdn.cdata.com/help/GPK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud-account-engagement/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`BusinessUnitID` ↗](https://cdn.cdata.com/help/GPK/jdbc/RSBSalesforcePardot_p_BusinessUnitID.htm) | Mandatory | Your Salesforce Marketing Cloud Account Engagement Business Unit ID (BU). Required when connecting via OAuth 2.0. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/GPK/jdbc/RSBSalesforcePardot_p_Schema.htm) | Mandatory | Specify the Salesforce Marketing Cloud Account Engagement API version to use. SalesforcePardotV5 is the rebuilt API. | `SalesforcePardotV5` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/GPK/jdbc/RSBSalesforcePardot_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Salesforce Marketing Cloud Account Engagement. | `OAuthPassword` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/GPK/jdbc/RSBSalesforcePardot_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`IsDemoAccount` ↗](https://cdn.cdata.com/help/GPK/jdbc/RSBSalesforcePardot_p_IsDemoAccount.htm) | Recommended | Whether the provided account is a demo account or not. | `FALSE` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/GPK/jdbc/RSBSalesforcePardot_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/GPK/jdbc/RSBSalesforcePardot_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/GPK/jdbc/RSBSalesforcePardot_p_Password.htm) | Recommended | The password of the user that is SSO-enabled. | — |
| [`User` ↗](https://cdn.cdata.com/help/GPK/jdbc/RSBSalesforcePardot_p_User.htm) | Recommended | The user that is SSO-enabled. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud-account-engagement/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| pi.pardot.com | If `IsDemoAccount=FALSE` (default) |
| pi.demo.pardot.com | If `IsDemoAccount=TRUE` |
| login.salesforce.com | If `UseSalesforceSandbox=FALSE` (default) |
| <Site>.my.salesforce.com | Always. URL returned by API after authentication |
| test.salesforce.com | If `UseSalesforceSandbox=TRUE` |

[← PREVIOUS Salesforce Marketing Cloud](https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud/)

[NEXT Salesloft →](https://www.palantir.com/docs/foundry/available-connectors/salesloft/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

