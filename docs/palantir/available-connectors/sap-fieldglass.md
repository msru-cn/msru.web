Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sap-fieldglass/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sap-fieldglass/#sap-fieldglass)SAP Fieldglass

The SAP Fieldglass connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SAP Fieldglass.

To create a new SAP Fieldglass source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SAP Fieldglass-specific configuration and networking. For the complete property reference, see the [official SAP Fieldglass driver documentation ↗](https://cdn.cdata.com/help/UFK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-fieldglass/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`APIKey` ↗](https://cdn.cdata.com/help/UFK/jdbc/RSBSAPFieldglass_p_APIKey.htm) | Mandatory | The API Key used to authenticate to SAP Fieldglass. | — |
| [`ConnectorDataFormat` ↗](https://cdn.cdata.com/help/UFK/jdbc/RSBSAPFieldglass_p_ConnectorDataFormat.htm) | Mandatory | The download data format configured during the Connector setup. | `CSV` |
| [`EnvironmentURL` ↗](https://cdn.cdata.com/help/UFK/jdbc/RSBSAPFieldglass_p_EnvironmentURL.htm) | Mandatory | The Environment URL where the instance of SAP Fieldglass is located. | `https://myInstance.com` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/UFK/jdbc/RSBSAPFieldglass_p_OAuthClientId.htm) | Mandatory | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/UFK/jdbc/RSBSAPFieldglass_p_OAuthClientSecret.htm) | Mandatory | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/UFK/jdbc/RSBSAPFieldglass_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-fieldglass/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <EnvironmentURL> | Always. EnvironmentURL connection property |

[← PREVIOUS SAP Concur](https://www.palantir.com/docs/foundry/available-connectors/sap-concur/)

[NEXT SAP HANA XSA →](https://www.palantir.com/docs/foundry/available-connectors/sap-hana-xsa/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

