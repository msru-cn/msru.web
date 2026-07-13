Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/apache-phoenix/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/apache-phoenix/#apache-phoenix)Apache Phoenix

The Apache Phoenix connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Apache Phoenix.

To create a new Apache Phoenix source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Apache Phoenix-specific configuration and networking. For the complete property reference, see the [official Apache Phoenix driver documentation ↗](https://cdn.cdata.com/help/UAK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/apache-phoenix/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/UAK/jdbc/RSBApachePhoenix_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are None, and Negotiate (Kerberos). None is the default. | `Basic` |
| [`URL` ↗](https://cdn.cdata.com/help/UAK/jdbc/RSBApachePhoenix_p_URL.htm) | Mandatory | The URL to your Apache Phoenix instance. This property overrides the Server/Port/UseSSL connection properties. When the LoadBalanceStrategy is configured, this takes a list of URLs in a comma separated format, for example “URL1,URL2…URLn”. | `https://{serverAddress}:{port}` |
| [`LoadBalanceStrategy` ↗](https://cdn.cdata.com/help/UAK/jdbc/RSBApachePhoenix_p_LoadBalanceStrategy.htm) | Recommended | The load balancing strategy to be used by the client side load balancer. | `None` |
| [`Password` ↗](https://cdn.cdata.com/help/UAK/jdbc/RSBApachePhoenix_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/UAK/jdbc/RSBApachePhoenix_p_User.htm) | Recommended | Specifies the user ID of the authenticating Apache Phoenix user account. | — |
| [`Version` ↗](https://cdn.cdata.com/help/UAK/jdbc/RSBApachePhoenix_p_Version.htm) | Recommended | The version of the Apache Phoenix instance. | `4.9.0` |

## [](https://www.palantir.com/docs/foundry/available-connectors/apache-phoenix/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always |
| <KerberosKDC>:88 | If `AuthScheme=Negotiate` |
| <KerberosServiceKDC>:88 | If `AuthScheme=Negotiate` and Kerberos topology uses multiple realms |

[← PREVIOUS Apache Hive](https://www.palantir.com/docs/foundry/available-connectors/apache-hive/)

[NEXT Asana →](https://www.palantir.com/docs/foundry/available-connectors/asana/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

