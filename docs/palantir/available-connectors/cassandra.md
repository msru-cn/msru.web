Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/cassandra/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/cassandra/#cassandra)Cassandra

The Cassandra connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Cassandra.

To create a new Cassandra source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Cassandra-specific configuration and networking. For the complete property reference, see the [official Cassandra driver documentation ↗](https://cdn.cdata.com/help/RCK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/cassandra/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/RCK/jdbc/RSBCassandra_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are Basic, DSE, Kerberos, and LDAP. | `Basic` |
| [`Database` ↗](https://cdn.cdata.com/help/RCK/jdbc/RSBCassandra_p_Database.htm) | Mandatory | The name of the Cassandra keyspace. | — |
| [`Password` ↗](https://cdn.cdata.com/help/RCK/jdbc/RSBCassandra_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`Port` ↗](https://cdn.cdata.com/help/RCK/jdbc/RSBCassandra_p_Port.htm) | Mandatory | The port for the Cassandra database. | `9042` |
| [`Server` ↗](https://cdn.cdata.com/help/RCK/jdbc/RSBCassandra_p_Server.htm) | Mandatory | The host name or IP address of the server hosting the Cassandra database. | — |
| [`User` ↗](https://cdn.cdata.com/help/RCK/jdbc/RSBCassandra_p_User.htm) | Mandatory | Specifies the user ID of the authenticating Cassandra user account. | — |
| [`UseSSL` ↗](https://cdn.cdata.com/help/RCK/jdbc/RSBCassandra_p_UseSSL.htm) | Mandatory | This field sets whether SSL is enabled. | `TRUE` |
| [`ConsistencyLevel` ↗](https://cdn.cdata.com/help/RCK/jdbc/RSBCassandra_p_ConsistencyLevel.htm) | Recommended | The consistency level determines how many of the replicas of the data you are interacting with need to respond for the query to be considered a success. | `ONE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/cassandra/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | If `UseSSH=FALSE` (default), Server and Port connection properties (default: localhost:9042) |
| <LDAPServer>:<LDAPPort> | If `AuthScheme=LDAP` (default `Port=389`) |
| <SSHServer>:<SSHPort> | If `UseSSH=TRUE` (default `Port=22`) |
| <KerberosKDC>:88 | If `AuthScheme=Kerberos` |
| <KerberosServiceKDC>:88 | If `AuthScheme=Kerberos` and Kerberos topology uses multiple realms |

[← PREVIOUS Bullhorn CRM](https://www.palantir.com/docs/foundry/available-connectors/bullhorn-crm/)

[NEXT Certinia →](https://www.palantir.com/docs/foundry/available-connectors/certinia/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

