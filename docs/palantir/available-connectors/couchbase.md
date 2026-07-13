Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/couchbase/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/couchbase/#couchbase)Couchbase

The Couchbase connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Couchbase.

To create a new Couchbase source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Couchbase-specific configuration and networking. For the complete property reference, see the [official Couchbase driver documentation ↗](https://cdn.cdata.com/help/CKK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/couchbase/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/CKK/jdbc/RSBCouchbase_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Couchbase. | `Basic` |
| [`ConnectionMode` ↗](https://cdn.cdata.com/help/CKK/jdbc/RSBCouchbase_p_ConnectionMode.htm) | Mandatory | Determines how to connect to the Couchbase server. Must be either Direct or Cloud. | `Cloud` |
| [`CouchbaseService` ↗](https://cdn.cdata.com/help/CKK/jdbc/RSBCouchbase_p_CouchbaseService.htm) | Mandatory | Determines the Couchbase service to connect to. Default is N1QL. Available options are N1QL and Analytics. | `Analytics` |
| [`DNSServer` ↗](https://cdn.cdata.com/help/CKK/jdbc/RSBCouchbase_p_DNSServer.htm) | Mandatory | Determines what DNS server to use when retrieving Couchbase Capella information. | `8.8.8.8` |
| [`Server` ↗](https://cdn.cdata.com/help/CKK/jdbc/RSBCouchbase_p_Server.htm) | Mandatory | The address of the Couchbase server or servers to which you are connecting. | `https://couchbase.server` |
| [`UseSSL` ↗](https://cdn.cdata.com/help/CKK/jdbc/RSBCouchbase_p_UseSSL.htm) | Mandatory | Whether to negotiate TLS/SSL when connecting to the Couchbase server. | `TRUE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/couchbase/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server> | If `ConnectionMode=Direct` (Default); Server connection property. Can be an IP address or HTTP/S URL. Can accept multiple URLs |
| <DNSServer> | If `ConnectionMode=Cloud,` DNS Server is used to look up server addresses (default port 53, port can be passed with <Server>:<Port>, but is not required) |
| <N1QLPort> | If `ConnectionMode=Direct` and `CouchbaseServer=N1QL,` Port defaults to 18093 for SSL and 8093 when not SSL |
| <AnalyticsPort> | If `ConnectionMode=Direct` and `CouchbaseServer=Analytics,` Port defaults to 18095 w/ SSL and 8095 w/o SSL |
| <WebConsolePort> | If `ConnectionMode=Direct,` Port defaults to 18091 w/ SSL and 8091 w/o SSL |

[← PREVIOUS Confluence](https://www.palantir.com/docs/foundry/available-connectors/confluence/)

[NEXT Databricks →](https://www.palantir.com/docs/foundry/available-connectors/databricks/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

