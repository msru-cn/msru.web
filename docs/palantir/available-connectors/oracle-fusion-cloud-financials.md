Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-financials/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-financials/#oracle-fusion-cloud-financials)Oracle Fusion Cloud Financials

The Oracle Fusion Cloud Financials connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Oracle Fusion Cloud Financials.

To create a new Oracle Fusion Cloud Financials source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Oracle Fusion Cloud Financials-specific configuration and networking. For the complete property reference, see the [official Oracle Fusion Cloud Financials driver documentation ↗](https://cdn.cdata.com/help/KEM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-financials/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Password` ↗](https://cdn.cdata.com/help/KEM/jdbc/RSBOracleERP_p_Password.htm) | Mandatory | Specifies the authenticating user's password. | — |
| [`URL` ↗](https://cdn.cdata.com/help/KEM/jdbc/RSBOracleERP_p_URL.htm) | Mandatory | The URL of the Oracle Fusion Cloud Financials account that you want to connect to. Typically, this is the URL of your Oracle Cloud service. | `https://servername.fa.us2.oraclecloud.com` |
| [`User` ↗](https://cdn.cdata.com/help/KEM/jdbc/RSBOracleERP_p_User.htm) | Mandatory | Specifies the authenticating user's user ID. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-financials/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property, i.e. `URL='https://servername.fa.us2.oraclecloud.com'` |

[← PREVIOUS Oracle Eloqua](https://www.palantir.com/docs/foundry/available-connectors/oracle-eloqua/)

[NEXT Oracle Fusion Cloud HCM →](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-hcm/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

