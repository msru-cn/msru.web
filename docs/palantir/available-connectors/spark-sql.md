Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/spark-sql/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/spark-sql/#spark-sql)Spark SQL

The Spark SQL connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Spark SQL.

To create a new Spark SQL source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Spark SQL-specific configuration and networking. For the complete property reference, see the [official Spark SQL driver documentation ↗](https://cdn.cdata.com/help/ESM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/spark-sql/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/ESM/jdbc/RSBSparksql_p_AuthScheme.htm) | Mandatory | The authentication scheme used. Accepted entries are Plain, LDAP, NOSASL, and Kerberos. | `Plain` |
| [`Server` ↗](https://cdn.cdata.com/help/ESM/jdbc/RSBSparksql_p_Server.htm) | Mandatory | The host name or IP address of the server hosting the SparkSQL database. | `{serverAddress}` |
| [`UseSSL` ↗](https://cdn.cdata.com/help/ESM/jdbc/RSBSparksql_p_UseSSL.htm) | Mandatory | Specifies whether to use SSL Encryption when connecting to Hive. | `TRUE` |
| [`Database` ↗](https://cdn.cdata.com/help/ESM/jdbc/RSBSparksql_p_Database.htm) | Recommended | The name of the SparkSQL database. | — |
| [`Password` ↗](https://cdn.cdata.com/help/ESM/jdbc/RSBSparksql_p_Password.htm) | Recommended | The password used to authenticate with SparkSQL. | — |
| [`Port` ↗](https://cdn.cdata.com/help/ESM/jdbc/RSBSparksql_p_Port.htm) | Recommended | The port for the SparkSQL database. | `10000` |
| [`TransportMode` ↗](https://cdn.cdata.com/help/ESM/jdbc/RSBSparksql_p_TransportMode.htm) | Recommended | The transport mode to use to communicate with the Hive server. Accepted entries are BINARY and HTTP. | `BINARY` |
| [`User` ↗](https://cdn.cdata.com/help/ESM/jdbc/RSBSparksql_p_User.htm) | Recommended | The username used to authenticate with SparkSQL. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/spark-sql/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always. Server and Port connection properties; default `Port=10000` |
| <KerberosKDC>:88 | If `AuthScheme=Kerberos` |
| <KerberosServiceKDC>:88 | If `AuthScheme=Kerberos` and Kerberos topology uses multiple realms |

[← PREVIOUS Snowflake](https://www.palantir.com/docs/foundry/available-connectors/snowflake/)

[NEXT Splunk →](https://www.palantir.com/docs/foundry/available-connectors/splunk/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

