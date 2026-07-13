Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sybaseiq/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sybaseiq/#sybaseiq)SybaseIQ

The SybaseIQ connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SybaseIQ.

To create a new SybaseIQ source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SybaseIQ-specific configuration and networking. For the complete property reference, see the [official SybaseIQ driver documentation ↗](https://cdn.cdata.com/help/GYM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sybaseiq/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/GYM/jdbc/RSBSybaseIQ_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are Password, Kerberos. | `Password` |
| [`ConnectionType` ↗](https://cdn.cdata.com/help/GYM/jdbc/RSBSybaseIQ_p_ConnectionType.htm) | Mandatory | This option specifies whether to connect to a SybaseIQ server or a SQLAnywhere server. | `SybaseIQ` |
| [`Database` ↗](https://cdn.cdata.com/help/GYM/jdbc/RSBSybaseIQ_p_Database.htm) | Mandatory | The name of the SybaseIQ or SAP SQL Anywhere database. | — |
| [`Port` ↗](https://cdn.cdata.com/help/GYM/jdbc/RSBSybaseIQ_p_Port.htm) | Mandatory | The port of the SybaseIQ database. | `2638` |
| [`Server` ↗](https://cdn.cdata.com/help/GYM/jdbc/RSBSybaseIQ_p_Server.htm) | Mandatory | The name of the server running the SybaseIQ or SAP SQL Anywhere Database. | `{serverAddress}` |
| [`UseSSL` ↗](https://cdn.cdata.com/help/GYM/jdbc/RSBSybaseIQ_p_UseSSL.htm) | Mandatory | This field sets whether SSL is enabled. For the Sybase IQ, it is available only when the server version is 16.1 or higher. | `TRUE` |
| [`Password` ↗](https://cdn.cdata.com/help/GYM/jdbc/RSBSybaseIQ_p_Password.htm) | Recommended | Specifies the authenticating user's password. | — |
| [`QueryPassthrough` ↗](https://cdn.cdata.com/help/GYM/jdbc/RSBSybaseIQ_p_QueryPassthrough.htm) | Recommended | This option passes the query to the SybaseIQ server as is. | `FALSE` |
| [`SSLServerCert` ↗](https://cdn.cdata.com/help/GYM/jdbc/RSBSybaseIQ_p_SSLServerCert.htm) | Recommended | Specifies the certificate to be accepted from the server when connecting using TLS/SSL. | — |
| [`User` ↗](https://cdn.cdata.com/help/GYM/jdbc/RSBSybaseIQ_p_User.htm) | Recommended | Specifies the authenticating user's user ID. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/sybaseiq/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always. Server and Port connection properties; default `Port=2638` |
| <KerberosKDC>:88 | If `AuthScheme=Kerberos` |
| <KerberosServiceKDC>:88 | If `AuthScheme=Kerberos` and Kerberos topology uses multiple realms |

[← PREVIOUS SurveyMonkey](https://www.palantir.com/docs/foundry/available-connectors/surveymonkey/)

[NEXT Tableau CRM Analytics →](https://www.palantir.com/docs/foundry/available-connectors/tableau-crm-analytics/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

