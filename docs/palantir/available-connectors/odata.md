Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/odata/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/odata/#odata)OData

The OData connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for OData.

To create a new OData source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for OData-specific configuration and networking. For the complete property reference, see the [official OData driver documentation ↗](https://cdn.cdata.com/help/RDK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/odata/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/RDK/jdbc/RSBOData_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are NTLM, BASIC, DIGEST, NONE, NEGOTIATE, or SHAREPOINTONLINE. | `None` |
| [`URL` ↗](https://cdn.cdata.com/help/RDK/jdbc/RSBOData_p_URL.htm) | Mandatory | The root URL of the OData services file, also called the service root URL. For example, [http://services.odata.org/V4/Northwind/Northwind.svc](http://services.odata.org/V4/Northwind/Northwind.svc). | `https://{serverAddress}` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/RDK/jdbc/RSBOData_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/RDK/jdbc/RSBOData_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/RDK/jdbc/RSBOData_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/odata/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |
| <FeedURL> | FeedURL connection property |
| login.microsoftonline.com | If `AuthScheme=AzureAD` OR SharePointOnline AND `SharePointUseSSO=FALSE` |
| <SharePointSSODomain> | If `SharePointUseSSO=TRUE` AND `AuthScheme=SharePointOnline` AND Domain of User is different than domain for SSO service |
| <KerberosKDC>:88 | If `AuthScheme=Negotiate` |
| <KerberosServiceKDC>:88 | If `AuthScheme=Negotiate` and Kerberos topology uses multiple realms |
| <OAuthAuthorizationURL> | If `AuthScheme=OAuth` |
| <OAuthAccessTokenURL> | If `AuthScheme=OAuth` |
| <OAuthRefreshTokenURL> | If `AuthScheme=OAuth` |
| <OAuthRequestTokenURL> | If `AuthScheme=OAuth` |

[← PREVIOUS NoSQL stores](https://www.palantir.com/docs/foundry/available-connectors/nosql-stores/)

[NEXT Odoo →](https://www.palantir.com/docs/foundry/available-connectors/odoo/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

