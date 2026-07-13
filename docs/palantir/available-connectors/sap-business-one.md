Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sap-business-one/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sap-business-one/#sap-business-one)SAP Business One

The SAP Business One connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SAP Business One.

To create a new SAP Business One source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SAP Business One-specific configuration and networking. For the complete property reference, see the [official SAP Business One driver documentation ↗](https://cdn.cdata.com/help/FVK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-business-one/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`CompanyDB` ↗](https://cdn.cdata.com/help/FVK/jdbc/RSBSAPBusinessOne_p_CompanyDB.htm) | Mandatory | Your SAP Business One company database. | — |
| [`Password` ↗](https://cdn.cdata.com/help/FVK/jdbc/RSBSAPBusinessOne_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`URL` ↗](https://cdn.cdata.com/help/FVK/jdbc/RSBSAPBusinessOne_p_URL.htm) | Mandatory | URL to the SAP Business One Service Layer root. For example, [http://localhost:50000/b1s/v1](http://localhost:50000/b1s/v1). | `https://{serverAddress}:{port}/b1s/v{version}` |
| [`User` ↗](https://cdn.cdata.com/help/FVK/jdbc/RSBSAPBusinessOne_p_User.htm) | Mandatory | Specifies the user ID of the authenticating SAP Business One user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-business-one/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property; default format `URL='http://[server]:[port]/b1s/[version]'` |

[← PREVIOUS SAP Ariba Procurement](https://www.palantir.com/docs/foundry/available-connectors/sap-ariba-procurement/)

[NEXT SAP BusinessObjects BI →](https://www.palantir.com/docs/foundry/available-connectors/sap-businessobjects-bi/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

