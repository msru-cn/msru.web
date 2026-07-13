Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/apache-hive/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/apache-hive/#apache-hive)Apache Hive

The Apache Hive connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Apache Hive.

To create a new Apache Hive source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Apache Hive-specific configuration and networking. For the complete property reference, see the [official Apache Hive driver documentation ↗](https://cdn.cdata.com/help/FIM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/apache-hive/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/FIM/jdbc/RSBHive_p_AuthScheme.htm) | Mandatory | The authentication scheme used. Accepted entries are Anonymous, Plain, LDAP, NoSasl, and Kerberos. | `Anonymous` |
| [`Server` ↗](https://cdn.cdata.com/help/FIM/jdbc/RSBHive_p_Server.htm) | Mandatory | The host name or IP address of the server hosting HiveServer2. | `{serverAddress}` |
| [`UseSSL` ↗](https://cdn.cdata.com/help/FIM/jdbc/RSBHive_p_UseSSL.htm) | Mandatory | Specifies whether to use SSL Encryption when connecting to Hive. | `TRUE` |
| [`Database` ↗](https://cdn.cdata.com/help/FIM/jdbc/RSBHive_p_Database.htm) | Recommended | The name of the Hive database to use by default. | — |
| [`Password` ↗](https://cdn.cdata.com/help/FIM/jdbc/RSBHive_p_Password.htm) | Recommended | The password used to authenticate with Hive. | — |
| [`Port` ↗](https://cdn.cdata.com/help/FIM/jdbc/RSBHive_p_Port.htm) | Recommended | The port for the connection to the HiveServer2 instance. | `10000` |
| [`SSLServerCert` ↗](https://cdn.cdata.com/help/FIM/jdbc/RSBHive_p_SSLServerCert.htm) | Recommended | Specifies the certificate to be accepted from the server when connecting using TLS/SSL. | — |
| [`TransportMode` ↗](https://cdn.cdata.com/help/FIM/jdbc/RSBHive_p_TransportMode.htm) | Recommended | The transport mode to use to communicate with the Hive server. Accepted entries are BINARY and HTTP. | `BINARY` |
| [`User` ↗](https://cdn.cdata.com/help/FIM/jdbc/RSBHive_p_User.htm) | Recommended | The username used to authenticate with Hive. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/apache-hive/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always |
| <KerberosKDC>:88 | If `AuthScheme=Negotiate` |
| <KerberosServiceKDC>:88 | If `AuthScheme=Negotiate` and Kerberos topology uses multiple realms |

[← PREVIOUS Apache HBase](https://www.palantir.com/docs/foundry/available-connectors/apache-hbase/)

[NEXT Apache Phoenix →](https://www.palantir.com/docs/foundry/available-connectors/apache-phoenix/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

