Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/epicor-kinetic/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/epicor-kinetic/#epicor-kinetic)Epicor Kinetic

The Epicor Kinetic connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Epicor Kinetic.

To create a new Epicor Kinetic source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Epicor Kinetic-specific configuration and networking. For the complete property reference, see the [official Epicor Kinetic driver documentation ↗](https://cdn.cdata.com/help/UEK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/epicor-kinetic/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/UEK/jdbc/RSBEpicorERP_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Epicor Kinetic. | `Basic` |
| [`ERPInstance` ↗](https://cdn.cdata.com/help/UEK/jdbc/RSBEpicorERP_p_ERPInstance.htm) | Mandatory | The name of the installed ERP application. | — |
| [`Service` ↗](https://cdn.cdata.com/help/UEK/jdbc/RSBEpicorERP_p_Service.htm) | Mandatory | Specify the service you want to retrieve data from. | `BaqSvc` |
| [`URL` ↗](https://cdn.cdata.com/help/UEK/jdbc/RSBEpicorERP_p_URL.htm) | Mandatory | Set this to the URL of the server where ERP instance is hosted. | `https://myServer.EpicorSaaS.com` |
| [`ApiVersion` ↗](https://cdn.cdata.com/help/UEK/jdbc/RSBEpicorERP_p_ApiVersion.htm) | Recommended | Specify the version of Epicor Kinetic API. | `v1` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/UEK/jdbc/RSBEpicorERP_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/UEK/jdbc/RSBEpicorERP_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/UEK/jdbc/RSBEpicorERP_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/UEK/jdbc/RSBEpicorERP_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/UEK/jdbc/RSBEpicorERP_p_User.htm) | Recommended | Specifies the user ID of the authenticating Epicor Kinetic user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/epicor-kinetic/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always |
| login.microsoftonline.com | If `AuthScheme=AzureADOpenID` |

[← PREVIOUS EnterpriseDB](https://www.palantir.com/docs/foundry/available-connectors/enterprisedb/)

[NEXT Exact Online →](https://www.palantir.com/docs/foundry/available-connectors/exact-online/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

