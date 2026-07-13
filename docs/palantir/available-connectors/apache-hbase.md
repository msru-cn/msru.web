Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/apache-hbase/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/apache-hbase/#apache-hbase)Apache HBase

The Apache HBase connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Apache HBase.

To create a new Apache HBase source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Apache HBase-specific configuration and networking. For the complete property reference, see the [official Apache HBase driver documentation ↗](https://cdn.cdata.com/help/RHK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/apache-hbase/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Server` ↗](https://cdn.cdata.com/help/RHK/jdbc/RSBApachehbase_p_Server.htm) | Mandatory | The host name, IP address, or URL of the Apache HBase REST server. | `https://{serverAddress}` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/RHK/jdbc/RSBApachehbase_p_AuthScheme.htm) | Recommended | The scheme used for authentication. Accepted entries are None, Basic, and Negotiate (Kerberos). None is the default. | `Basic` |
| [`Password` ↗](https://cdn.cdata.com/help/RHK/jdbc/RSBApachehbase_p_Password.htm) | Recommended | The password used to authenticate to Apache HBase. | — |
| [`Port` ↗](https://cdn.cdata.com/help/RHK/jdbc/RSBApachehbase_p_Port.htm) | Recommended | The port for the Apache HBase REST (Stargate) server. | `8080` |
| [`User` ↗](https://cdn.cdata.com/help/RHK/jdbc/RSBApachehbase_p_User.htm) | Recommended | The user who is authenticating to Apache HBase. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/apache-hbase/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always |
| <KerberosKDC>:88 | If `AuthScheme=Negotiate` |
| <KerberosServiceKDC>:88 | If `AuthScheme=Negotiate` and Kerberos topology uses multiple realms |

[← PREVIOUS Apache CouchDB](https://www.palantir.com/docs/foundry/available-connectors/apache-couchdb/)

[NEXT Apache Hive →](https://www.palantir.com/docs/foundry/available-connectors/apache-hive/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

