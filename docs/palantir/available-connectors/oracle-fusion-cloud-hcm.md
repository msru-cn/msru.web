Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-hcm/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-hcm/#oracle-fusion-cloud-hcm)Oracle Fusion Cloud HCM

The Oracle Fusion Cloud HCM connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Oracle Fusion Cloud HCM.

To create a new Oracle Fusion Cloud HCM source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Oracle Fusion Cloud HCM-specific configuration and networking. For the complete property reference, see the [official Oracle Fusion Cloud HCM driver documentation ↗](https://cdn.cdata.com/help/KMK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-hcm/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Password` ↗](https://cdn.cdata.com/help/KMK/jdbc/RSBOracleHCM_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`URL` ↗](https://cdn.cdata.com/help/KMK/jdbc/RSBOracleHCM_p_URL.htm) | Mandatory | The Oracle Fusion Cloud HCM Cloud URL. | `https://servername.fa.us2.oraclecloud.com` |
| [`User` ↗](https://cdn.cdata.com/help/KMK/jdbc/RSBOracleHCM_p_User.htm) | Mandatory | Specifies the user ID of the authenticating Oracle Fusion Cloud HCM Cloud user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-hcm/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |

[← PREVIOUS Oracle Fusion Cloud Financials](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-financials/)

[NEXT Oracle Fusion Cloud SCM →](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-scm/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

