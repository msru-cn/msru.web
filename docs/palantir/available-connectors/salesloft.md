Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/salesloft/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/salesloft/#salesloft)Salesloft

The Salesloft connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Salesloft.

To create a new Salesloft source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Salesloft-specific configuration and networking. For the complete property reference, see the [official Salesloft driver documentation ↗](https://cdn.cdata.com/help/KBK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/salesloft/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`APIKey` ↗](https://cdn.cdata.com/help/KBK/jdbc/RSBSalesLoft_p_APIKey.htm) | Recommended | The API key used for accessing your SalesLoft account. | — |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/KBK/jdbc/RSBSalesLoft_p_AuthScheme.htm) | Recommended | Whether to use APIKey Authentication or OAuth Authentication when connecting to SalesLoft. | `APIKey` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/KBK/jdbc/RSBSalesLoft_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/KBK/jdbc/RSBSalesLoft_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/KBK/jdbc/RSBSalesLoft_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/salesloft/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.salesloft.com | Always |
| accounts.salesloft.com | If `AuthScheme=OAuth` |

[← PREVIOUS Salesforce Marketing Cloud Account Engagement](https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud-account-engagement/)

[NEXT SAP / SAP ERP →](https://www.palantir.com/docs/foundry/available-connectors/sap-erp/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

