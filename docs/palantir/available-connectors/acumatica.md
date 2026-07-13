Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/acumatica/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/acumatica/#acumatica)Acumatica

The Acumatica connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Acumatica.

To create a new Acumatica source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Acumatica-specific configuration and networking. For the complete property reference, see the [official Acumatica driver documentation ↗](https://cdn.cdata.com/help/OIK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/acumatica/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/OIK/jdbc/RSBAcumatica_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are Basic, OAuth, OAuthImplicit and OAuthPassword. | `Basic` |
| [`Schema` ↗](https://cdn.cdata.com/help/OIK/jdbc/RSBAcumatica_p_Schema.htm) | Mandatory | Specifies which Acumatica API to use. By default, it is set to the Contract-Based REST API. When set to OData, the driver uses the OData Version 3.0 API to dynamically retrieve all Generic Inquiries available through OData. If set to ODataV4, the driver uses the OData 4.0 API to query Data Access Class (DAC) objects. | `REST` |
| [`URL` ↗](https://cdn.cdata.com/help/OIK/jdbc/RSBAcumatica_p_URL.htm) | Mandatory | The base URL of your Acumatica site. | `https://domain.acumatica.com/entity/` |
| [`Company` ↗](https://cdn.cdata.com/help/OIK/jdbc/RSBAcumatica_p_Company.htm) | Recommended | Your Acumatica Company. | — |
| [`Password` ↗](https://cdn.cdata.com/help/OIK/jdbc/RSBAcumatica_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/OIK/jdbc/RSBAcumatica_p_User.htm) | Recommended | Specifies the user ID of the authenticating Acumatica user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/acumatica/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property (note may include more than just base domain) |

[← PREVIOUS ActiveCampaign](https://www.palantir.com/docs/foundry/available-connectors/activecampaign/)

[NEXT Adobe Analytics →](https://www.palantir.com/docs/foundry/available-connectors/adobe-analytics/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

