Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/veeva-vault/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/veeva-vault/#veeva-vault)Veeva Vault

The Veeva Vault connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Veeva Vault.

To create a new Veeva Vault source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Veeva Vault-specific configuration and networking. For the complete property reference, see the [official Veeva Vault driver documentation ↗](https://cdn.cdata.com/help/SVK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/veeva-vault/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/SVK/jdbc/RSBVeevaVault_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are Basic, AzureAD, AzureADOpenID and OKTA. | `Basic` |
| [`URL` ↗](https://cdn.cdata.com/help/SVK/jdbc/RSBVeevaVault_p_URL.htm) | Mandatory | The host you see in the Url after you log in to Veeva Vault. | `https://myVault.veevavault.com` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/SVK/jdbc/RSBVeevaVault_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/SVK/jdbc/RSBVeevaVault_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/SVK/jdbc/RSBVeevaVault_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/SVK/jdbc/RSBVeevaVault_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/SVK/jdbc/RSBVeevaVault_p_User.htm) | Recommended | Specifies the user ID of the authenticating Veeva Vault user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/veeva-vault/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |
| login.microsoftonline.com | If `AuthScheme=AzureADOpenID` |

[← PREVIOUS Twitter Ads](https://www.palantir.com/docs/foundry/available-connectors/twitter-ads/)

[NEXT Wave Financial →](https://www.palantir.com/docs/foundry/available-connectors/wave-financial/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

