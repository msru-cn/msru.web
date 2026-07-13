Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sap-bydesign/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sap-bydesign/#sap-bydesign)SAP ByDesign

The SAP ByDesign connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SAP ByDesign.

To create a new SAP ByDesign source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SAP ByDesign-specific configuration and networking. For the complete property reference, see the [official SAP ByDesign driver documentation ↗](https://cdn.cdata.com/help/UYK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-bydesign/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/UYK/jdbc/RSBSAPByDesign_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to SAP ByDesign. | `Basic` |
| [`Password` ↗](https://cdn.cdata.com/help/UYK/jdbc/RSBSAPByDesign_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`ServiceType` ↗](https://cdn.cdata.com/help/UYK/jdbc/RSBSAPByDesign_p_ServiceType.htm) | Mandatory | Specify the type of the service to get reports from. Used together with the Url and ServiceName connection properties to determine the service from which to retrieve data. | `AnalyticsService` |
| [`URL` ↗](https://cdn.cdata.com/help/UYK/jdbc/RSBSAPByDesign_p_URL.htm) | Mandatory | URL to your system host name. | `https://mySite.sapbydesign.com` |
| [`User` ↗](https://cdn.cdata.com/help/UYK/jdbc/RSBSAPByDesign_p_User.htm) | Mandatory | Specifies the user ID of the authenticating SAP ByDesign user account. | — |
| [`ServiceName` ↗](https://cdn.cdata.com/help/UYK/jdbc/RSBSAPByDesign_p_ServiceName.htm) | Recommended | Specify the SAP ByDesign service name to connect with. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-bydesign/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |

[← PREVIOUS SAP BusinessObjects BI](https://www.palantir.com/docs/foundry/available-connectors/sap-businessobjects-bi/)

[NEXT SAP Cloud for Customer →](https://www.palantir.com/docs/foundry/available-connectors/sap-cloud-for-customer/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

