Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sap-hana-xsa/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sap-hana-xsa/#sap-hana-xsa)SAP HANA XSA

The SAP HANA XSA connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SAP HANA XSA.

To create a new SAP HANA XSA source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SAP HANA XSA-specific configuration and networking. For the complete property reference, see the [official SAP HANA XSA driver documentation ↗](https://cdn.cdata.com/help/HHK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-hana-xsa/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`URL` ↗](https://cdn.cdata.com/help/HHK/jdbc/RSBSAPHanaXSA_p_URL.htm) | Mandatory | The OData service endpoint. | `https://{host}:{port}/{odataService}` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/HHK/jdbc/RSBSAPHanaXSA_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to SAP HANA XSA. | `OAuthPassword` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/HHK/jdbc/RSBSAPHanaXSA_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/HHK/jdbc/RSBSAPHanaXSA_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/HHK/jdbc/RSBSAPHanaXSA_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`OAuthGrantType` ↗](https://cdn.cdata.com/help/HHK/jdbc/RSBSAPHanaXSA_p_OAuthGrantType.htm) | Recommended | Specifies the grant type for the chosen OAuth flow. This value should be the same as the grant_type that was set during OAuth custom application creation. | `PASSWORD` |
| [`Password` ↗](https://cdn.cdata.com/help/HHK/jdbc/RSBSAPHanaXSA_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/HHK/jdbc/RSBSAPHanaXSA_p_User.htm) | Recommended | Specifies the user ID of the authenticating SAP HANA XSA user account. | — |
| [`XSUAAURL` ↗](https://cdn.cdata.com/help/HHK/jdbc/RSBSAPHanaXSA_p_XSUAAURL.htm) | Recommended | The URL to retrieve the OAuth access token from. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-hana-xsa/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. OData Service Endpoint - URL connection property (i.e., `URL='http://hxehost.com/euro.xsodata'`) |
| <XSUAAURL> | If `AuthScheme=OAuth,OAuthPassword` - URL to retrieve Access Token from |

[← PREVIOUS SAP Fieldglass](https://www.palantir.com/docs/foundry/available-connectors/sap-fieldglass/)

[NEXT SAP SuccessFactors →](https://www.palantir.com/docs/foundry/available-connectors/sap-successfactors/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

