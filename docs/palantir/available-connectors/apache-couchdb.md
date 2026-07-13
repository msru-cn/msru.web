Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/apache-couchdb/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/apache-couchdb/#apache-couchdb)Apache CouchDB

The Apache CouchDB connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Apache CouchDB.

To create a new Apache CouchDB source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Apache CouchDB-specific configuration and networking. For the complete property reference, see the [official Apache CouchDB driver documentation ↗](https://cdn.cdata.com/help/JCK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/apache-couchdb/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/JCK/jdbc/RSBApacheCouchDB_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Apache CouchDB. | `Basic` |
| [`URL` ↗](https://cdn.cdata.com/help/JCK/jdbc/RSBApacheCouchDB_p_URL.htm) | Mandatory | The URL used to connect to the Apache CouchDB. | `https://{serverAddress}:{port}` |
| [`Password` ↗](https://cdn.cdata.com/help/JCK/jdbc/RSBApacheCouchDB_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/JCK/jdbc/RSBApacheCouchDB_p_User.htm) | Recommended | Specifies the user ID of the authenticating Apache CouchDB user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/apache-couchdb/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always |

[← PREVIOUS Amazon S3](https://www.palantir.com/docs/foundry/available-connectors/amazon-s3/)

[NEXT Apache HBase →](https://www.palantir.com/docs/foundry/available-connectors/apache-hbase/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

