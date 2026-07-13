Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/presto/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/presto/#presto)Presto

The Presto connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Presto.

To create a new Presto source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Presto-specific configuration and networking. For the complete property reference, see the [official Presto driver documentation ↗](https://cdn.cdata.com/help/ORK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/presto/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/ORK/jdbc/RSBPresto_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are None, Basic, Kerberos and LDAP. None is the default. | `None` |
| [`PrestoKind` ↗](https://cdn.cdata.com/help/ORK/jdbc/RSBPresto_p_PrestoKind.htm) | Mandatory | Indicates whether the connected instance is Trino or not. | `Presto` |
| [`Server` ↗](https://cdn.cdata.com/help/ORK/jdbc/RSBPresto_p_Server.htm) | Mandatory | The host name or IP address of the Presto REST server. | `{serverAddress}` |
| [`UseSSL` ↗](https://cdn.cdata.com/help/ORK/jdbc/RSBPresto_p_UseSSL.htm) | Mandatory | Indicates whether SSL is enabled. | `TRUE` |
| [`Port` ↗](https://cdn.cdata.com/help/ORK/jdbc/RSBPresto_p_Port.htm) | Recommended | The port for the Presto REST server. | `8080` |

## [](https://www.palantir.com/docs/foundry/available-connectors/presto/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always. Server and Port connection property. Default `Port=8080` |
| <KerberosKDC>:88 | If `AuthScheme=Kerberos` |
| <KerberosServiceKDC>:88 | If `AuthScheme=Kerberos` and Kerberos topology uses multiple realms |

[← PREVIOUS PostgreSQL](https://www.palantir.com/docs/foundry/available-connectors/postgresql/)

[NEXT Quickbase →](https://www.palantir.com/docs/foundry/available-connectors/quickbase/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

