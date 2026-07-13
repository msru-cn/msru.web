Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/oracle-eloqua/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/oracle-eloqua/#oracle-eloqua)Oracle Eloqua

The Oracle Eloqua connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Oracle Eloqua.

To create a new Oracle Eloqua source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Oracle Eloqua-specific configuration and networking. For the complete property reference, see the [official Oracle Eloqua driver documentation ↗](https://cdn.cdata.com/help/DUK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle-eloqua/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/DUK/jdbc/RSBEloqua_p_AuthScheme.htm) | Mandatory | The authentication scheme used. Accepted entries are Basic and OAuth. | `Basic` |
| [`Schema` ↗](https://cdn.cdata.com/help/DUK/jdbc/RSBEloqua_p_Schema.htm) | Mandatory | The type of schema to use. | `OracleEloqua` |
| [`Company` ↗](https://cdn.cdata.com/help/DUK/jdbc/RSBEloqua_p_Company.htm) | Recommended | The company of the Eloqua account. This field is used to authenticate the user. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/DUK/jdbc/RSBEloqua_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/DUK/jdbc/RSBEloqua_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/DUK/jdbc/RSBEloqua_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/DUK/jdbc/RSBEloqua_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/DUK/jdbc/RSBEloqua_p_User.htm) | Recommended | Specifies the user ID of the authenticating Oracle Eloqua user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle-eloqua/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| login.eloqua.com | Always |
| {BaseURL} | Always. The Base and Bulk URLs are returned by the API after authenticating |
| {BulkURL} | Always |

[← PREVIOUS Oracle Database](https://www.palantir.com/docs/foundry/available-connectors/oracle/)

[NEXT Oracle Fusion Cloud Financials →](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-financials/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

