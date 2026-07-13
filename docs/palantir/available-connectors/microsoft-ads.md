Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-ads/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-ads/#microsoft-ads)Microsoft Ads

The Microsoft Ads connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Ads.

To create a new Microsoft Ads source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Ads-specific configuration and networking. For the complete property reference, see the [official Microsoft Ads driver documentation ↗](https://cdn.cdata.com/help/EZK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-ads/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`CustomerId` ↗](https://cdn.cdata.com/help/EZK/jdbc/RSBBingAds_p_CustomerId.htm) | Mandatory | CustomerId of the currently authenticated user. | — |
| [`DeveloperToken` ↗](https://cdn.cdata.com/help/EZK/jdbc/RSBBingAds_p_DeveloperToken.htm) | Mandatory | DeveloperToken of the currently authenticated user. | — |
| [`AccountId` ↗](https://cdn.cdata.com/help/EZK/jdbc/RSBBingAds_p_AccountId.htm) | Recommended | The id of the account that you want to get data for. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/EZK/jdbc/RSBBingAds_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/EZK/jdbc/RSBBingAds_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/EZK/jdbc/RSBBingAds_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-ads/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| bingads.microsoft.com | Always |
| api.bingads.com | Always |
| clientcenter.api.bingads.microsoft.com | Always |
| login.microsoftonline.com | Always |
| campaign.api.bingads.microsoft.com | If `UseSandbox=False` |
| clientcenter.api.bingads.microsoft.com | If `UseSandbox=False` |
| adinsight.api.bingads.microsoft.com | If `UseSandbox=False` |
| reporting.api.bingads.microsoft.com | If `UseSandbox=False` |
| campaign.api.sandbox.bingads.microsoft.com | If `UseSandbox=True` |
| clientcenter.api.sandbox.bingads.microsoft.com | If `UseSandbox=True` |
| adinsight.api.sandbox.bingads.microsoft.com | If `UseSandbox=True` |
| reporting.api.sandbox.bingads.microsoft.com | If `UseSandbox=True` |

[← PREVIOUS Microsoft Access](https://www.palantir.com/docs/foundry/available-connectors/microsoft-access/)

[NEXT Microsoft Bing →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-bing/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

