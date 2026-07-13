Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud/#salesforce-marketing-cloud)Salesforce Marketing Cloud

The Salesforce Marketing Cloud connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Salesforce Marketing Cloud.

To create a new Salesforce Marketing Cloud source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Salesforce Marketing Cloud-specific configuration and networking. For the complete property reference, see the [official Salesforce Marketing Cloud driver documentation ↗](https://cdn.cdata.com/help/FEK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Schema` ↗](https://cdn.cdata.com/help/FEK/jdbc/RSBSalesforceMarketingCloud_p_Schema.htm) | Mandatory | Specify the Salesforce Marketing Cloud server version to connect with. | `SOAP` |
| [`Subdomain` ↗](https://cdn.cdata.com/help/FEK/jdbc/RSBSalesforceMarketingCloud_p_Subdomain.htm) | Mandatory | The subdomain of the Salesforce Marketing Cloud API. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/FEK/jdbc/RSBSalesforceMarketingCloud_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/FEK/jdbc/RSBSalesforceMarketingCloud_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/FEK/jdbc/RSBSalesforceMarketingCloud_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/FEK/jdbc/RSBSalesforceMarketingCloud_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`UseLegacyAuthentication` ↗](https://cdn.cdata.com/help/FEK/jdbc/RSBSalesforceMarketingCloud_p_UseLegacyAuthentication.htm) | Recommended | A boolean determining if the connection should be made to Salesforce Marketing Cloud REST API using the legacy authentication. | `TRUE` |
| [`User` ↗](https://cdn.cdata.com/help/FEK/jdbc/RSBSalesforceMarketingCloud_p_User.htm) | Recommended | Specifies the user ID of the authenticating Salesforce Marketing Cloud user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Subdomain>.soap.marketingcloudapis.com | If `Schema=SOAP` (default) |
| <Subdomain>.rest.marketingcloudapis.com | If `Schema=REST` |
| <Subdomain>.auth.marketingcloudapis.com | If `UseLegacyAuthentication=FALSE` (default) AND `AuthScheme=OAuth,` OAuthClient |

[← PREVIOUS Salesforce](https://www.palantir.com/docs/foundry/available-connectors/salesforce/)

[NEXT Salesforce Marketing Cloud Account Engagement →](https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud-account-engagement/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

