Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/ldap/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/ldap/#ldap)LDAP

The LDAP connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for LDAP.

To create a new LDAP source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for LDAP-specific configuration and networking. For the complete property reference, see the [official LDAP driver documentation ↗](https://cdn.cdata.com/help/RJK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/ldap/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Server` ↗](https://cdn.cdata.com/help/RJK/jdbc/RSBLDAP_p_Server.htm) | Mandatory | Specifies the domain name or IP address of the LDAP server. This property is required to establish a connection and does not need to include the LDAP:\\ prefix, only the server’s domain name or IP address. | `{serverAddress}` |
| [`UseSSL` ↗](https://cdn.cdata.com/help/RJK/jdbc/RSBLDAP_p_UseSSL.htm) | Mandatory | Specifies whether SSL is used to secure the connection to the LDAP server. Enabling this property ensures that communication between the client and server is encrypted. | `TRUE` |
| [`BaseDN` ↗](https://cdn.cdata.com/help/RJK/jdbc/RSBLDAP_p_BaseDN.htm) | Recommended | Specifies the base portion of the distinguished name (DN) to limit LDAP queries to a specific subtree within the directory. Using a base DN helps narrow the search scope and improve query performance, especially on large LDAP servers. | — |
| [`Password` ↗](https://cdn.cdata.com/help/RJK/jdbc/RSBLDAP_p_Password.htm) | Recommended | Specifies the password associated with the distinguished name (DN) of the user account used for authentication with the LDAP server. This property is required when the server enforces authentication. | — |
| [`Port` ↗](https://cdn.cdata.com/help/RJK/jdbc/RSBLDAP_p_Port.htm) | Recommended | Specifies the port number on which the LDAP server is running. | `636` |
| [`User` ↗](https://cdn.cdata.com/help/RJK/jdbc/RSBLDAP_p_User.htm) | Recommended | Specifies the distinguished name (DN) of the user account to be used for authentication with the LDAP server. This property is required when the server enforces authentication. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/ldap/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always. Server and Port connection properties (default `Port=636`) |

[← PREVIOUS Kintone](https://www.palantir.com/docs/foundry/available-connectors/kintone/)

[NEXT LinkedIn →](https://www.palantir.com/docs/foundry/available-connectors/linkedin/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

