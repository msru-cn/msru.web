Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/quickbooks-online/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-online/#quickbooks-online)QuickBooks Online

The QuickBooks Online connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for QuickBooks Online.

To create a new QuickBooks Online source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for QuickBooks Online-specific configuration and networking. For the complete property reference, see the [official QuickBooks Online driver documentation ↗](https://cdn.cdata.com/help/RNK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-online/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`CompanyId` ↗](https://cdn.cdata.com/help/RNK/jdbc/RSBQuickBooks_p_CompanyId.htm) | Mandatory | The unique identifier of a given company in QuickBooks Online. | — |
| [`CountryCode` ↗](https://cdn.cdata.com/help/RNK/jdbc/RSBQuickBooks_p_CountryCode.htm) | Recommended | The country code for the edition of QuickBooks Online being used. | `US` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/RNK/jdbc/RSBQuickBooks_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/RNK/jdbc/RSBQuickBooks_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/RNK/jdbc/RSBQuickBooks_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`UseSandbox` ↗](https://cdn.cdata.com/help/RNK/jdbc/RSBQuickBooks_p_UseSandbox.htm) | Recommended | A boolean indicating if you are using a Sandbox account. | `FALSE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-online/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| quickbooks.api.intuit.com | If `UseSandbox=FALSE` (Default) |
| sandbox-quickbooks.api.intuit.com | If `UseSandbox=TRUE` |
| qbo.sbfinance.intuit.com | Used when retrieving Entitlements (only available when `UseSandbox=FALSE`) |
| appcenter.intuit.com | Authorization URL |
| developer.api.intuit.com | Always. May be used for token disconnects |
| oauth.platform.intuit.com | Always. Token URL |

[← PREVIOUS QuickBooks Desktop](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-desktop/)

[NEXT QuickBooks POS →](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-pos/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

