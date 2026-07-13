Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/greenplum/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/greenplum/#greenplum)Greenplum

The Greenplum connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Greenplum.

To create a new Greenplum source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Greenplum-specific configuration and networking. For the complete property reference, see the [official Greenplum driver documentation ↗](https://cdn.cdata.com/help/SGK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/greenplum/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Password` ↗](https://cdn.cdata.com/help/SGK/jdbc/RSBGreenplum_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`Server` ↗](https://cdn.cdata.com/help/SGK/jdbc/RSBGreenplum_p_Server.htm) | Mandatory | The host name or IP address of the server. | `{serverAddress}` |
| [`User` ↗](https://cdn.cdata.com/help/SGK/jdbc/RSBGreenplum_p_User.htm) | Mandatory | Specifies the user ID of the authenticating Greenplum user account. | — |
| [`UseSSL` ↗](https://cdn.cdata.com/help/SGK/jdbc/RSBGreenplum_p_UseSSL.htm) | Mandatory | This field sets whether SSL is enabled. | `TRUE` |
| [`Database` ↗](https://cdn.cdata.com/help/SGK/jdbc/RSBGreenplum_p_Database.htm) | Recommended | The name of the Greenplum database. | — |
| [`Port` ↗](https://cdn.cdata.com/help/SGK/jdbc/RSBGreenplum_p_Port.htm) | Recommended | The port number of the Greenplum server. | `5432` |

## [](https://www.palantir.com/docs/foundry/available-connectors/greenplum/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always |
| <KerberosKDC>:88 | If `AuthScheme=Negotiate` |
| <KerberosServiceKDC>:88 | If `AuthScheme=Negotiate` and Kerberos topology uses multiple realms |

[← PREVIOUS GraphQL](https://www.palantir.com/docs/foundry/available-connectors/graphql/)

[NEXT HDFS →](https://www.palantir.com/docs/foundry/available-connectors/hdfs/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

