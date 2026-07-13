Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sap-businessobjects-bi/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sap-businessobjects-bi/#sap-businessobjects-bi)SAP BusinessObjects BI

The SAP BusinessObjects BI connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SAP BusinessObjects BI.

To create a new SAP BusinessObjects BI source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SAP BusinessObjects BI-specific configuration and networking. For the complete property reference, see the [official SAP BusinessObjects BI driver documentation ↗](https://cdn.cdata.com/help/GJK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-businessobjects-bi/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/GJK/jdbc/RSBSAPBusinessObjectsBI_p_AuthScheme.htm) | Mandatory | The authorization scheme to be used when server authorization is to be performed. | `Basic` |
| [`Password` ↗](https://cdn.cdata.com/help/GJK/jdbc/RSBSAPBusinessObjectsBI_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`URL` ↗](https://cdn.cdata.com/help/GJK/jdbc/RSBSAPBusinessObjectsBI_p_URL.htm) | Mandatory | The URL of the rest API exposed by the SAP BusinessObjects BI. | `https://myserver:6405/biprws` |
| [`User` ↗](https://cdn.cdata.com/help/GJK/jdbc/RSBSAPBusinessObjectsBI_p_User.htm) | Mandatory | Specifies the user ID of the authenticating SAP BusinessObjects BI user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/sap-businessobjects-bi/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property; default format `URL='http://{SERVER-NAME}:6405/biprws'` |

[← PREVIOUS SAP Business One](https://www.palantir.com/docs/foundry/available-connectors/sap-business-one/)

[NEXT SAP ByDesign →](https://www.palantir.com/docs/foundry/available-connectors/sap-bydesign/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

