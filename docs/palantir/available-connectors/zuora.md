Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/zuora/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/zuora/#zuora)Zuora

The Zuora connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Zuora.

To create a new Zuora source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Zuora-specific configuration and networking. For the complete property reference, see the [official Zuora driver documentation ↗](https://cdn.cdata.com/help/HZK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/zuora/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/HZK/jdbc/RSBZuora_p_OAuthClientId.htm) | Mandatory | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/HZK/jdbc/RSBZuora_p_OAuthClientSecret.htm) | Mandatory | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/HZK/jdbc/RSBZuora_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`Tenant` ↗](https://cdn.cdata.com/help/HZK/jdbc/RSBZuora_p_Tenant.htm) | Recommended | The Tenant type of your hosted application. | `USProduction` |
| [`ZuoraService` ↗](https://cdn.cdata.com/help/HZK/jdbc/RSBZuora_p_ZuoraService.htm) | Recommended | Specifies which execution service or schema to use. You can find more details in the Establishing a Connection section. | `AQuADataExport` |

## [](https://www.palantir.com/docs/foundry/available-connectors/zuora/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| rest.zuora.com | If `Tenant=USProduction` (default) |
| rest.apisandbox.zuora.com | If `Tenant=USAPISandbox` |
| rest.pt1.zuora.com | If `Tenant=USPerformanceTest` |
| rest.eu.zuora.com | If `Tenant=EUProduction` |
| rest.sandbox.eu.zuora.com | If `Tenant=EUSandbox` |
| rest.na.zuora.com | If `Tenant=USCloudProduction` |
| rest.sandbox.na.zuora.com | If `Tenant=USCloudAPISandbox` |
| rest.test.zuora.com | If `Tenant=USCentralSandbox` |
| rest.test.eu.zuora.com | If `Tenant=EUCentralSandbox` |
| <URL> | URL connection property for US Production copy environment |

[← PREVIOUS Zoho Projects](https://www.palantir.com/docs/foundry/available-connectors/zoho-projects/)

[NEXT Other source types →](https://www.palantir.com/docs/foundry/available-connectors/other-source-types/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

