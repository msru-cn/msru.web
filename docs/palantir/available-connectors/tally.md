Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/tally/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/tally/#tally)Tally

The Tally connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Tally.

To create a new Tally source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Tally-specific configuration and networking. For the complete property reference, see the [official Tally driver documentation ↗](https://cdn.cdata.com/help/HTK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/tally/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`URL` ↗](https://cdn.cdata.com/help/HTK/jdbc/RSBTally_p_URL.htm) | Mandatory | The URL of the Tally instance. Default value is http://{hostname or server ip}:9000. | `https://{serverAddress}:9000` |
| [`Company` ↗](https://cdn.cdata.com/help/HTK/jdbc/RSBTally_p_Company.htm) | Recommended | The Name of the Company in Tally. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/tally/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property, i.e., `URL=http://192.168.1.100:9000` |

[← PREVIOUS Tableau CRM Analytics](https://www.palantir.com/docs/foundry/available-connectors/tableau-crm-analytics/)

[NEXT TaxJar →](https://www.palantir.com/docs/foundry/available-connectors/taxjar/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

