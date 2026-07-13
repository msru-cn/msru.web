Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/oracle-service-cloud/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/oracle-service-cloud/#oracle-service-cloud)Oracle Service Cloud

The Oracle Service Cloud connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Oracle Service Cloud.

To create a new Oracle Service Cloud source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Oracle Service Cloud-specific configuration and networking. For the complete property reference, see the [official Oracle Service Cloud driver documentation ↗](https://cdn.cdata.com/help/KOK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle-service-cloud/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Password` ↗](https://cdn.cdata.com/help/KOK/jdbc/RSBOracleServiceCloud_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`URL` ↗](https://cdn.cdata.com/help/KOK/jdbc/RSBOracleServiceCloud_p_URL.htm) | Mandatory | The URL of the account to connect to. | `https://servername.fa.us2.oraclecloud.com` |
| [`User` ↗](https://cdn.cdata.com/help/KOK/jdbc/RSBOracleServiceCloud_p_User.htm) | Mandatory | Specifies the user ID of the authenticating Oracle Service Cloud user account. | — |
| [`IncludeCustomFields` ↗](https://cdn.cdata.com/help/KOK/jdbc/RSBOracleServiceCloud_p_IncludeCustomFields.htm) | Recommended | A boolean indicating if you would like to include custom fields in the column listing. | `TRUE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle-service-cloud/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |

[← PREVIOUS Oracle Sales](https://www.palantir.com/docs/foundry/available-connectors/oracle-sales/)

[NEXT Outreach →](https://www.palantir.com/docs/foundry/available-connectors/outreach/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

