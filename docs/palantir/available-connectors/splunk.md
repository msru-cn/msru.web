Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/splunk/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/splunk/#splunk)Splunk

The Splunk connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Splunk.

To create a new Splunk source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Splunk-specific configuration and networking. For the complete property reference, see the [official Splunk driver documentation ↗](https://cdn.cdata.com/help/FUK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/splunk/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/FUK/jdbc/RSBSplunk_p_AuthScheme.htm) | Mandatory | Whether to use Basic Authentication, AccessToken or HTTPEventCollectorToken Authentication when connecting to Splunk. | `Basic` |
| [`URL` ↗](https://cdn.cdata.com/help/FUK/jdbc/RSBSplunk_p_URL.htm) | Mandatory | The URL to your Splunk endpoint. | `https://mySite.splunk.com:{port}` |
| [`Password` ↗](https://cdn.cdata.com/help/FUK/jdbc/RSBSplunk_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/FUK/jdbc/RSBSplunk_p_User.htm) | Recommended | Specifies the user ID of the authenticating Splunk user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/splunk/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property, URL with management port, i.e. [https://yoursitename.splunk.com:8089](https://yoursitename.splunk.com:8089/) |

[← PREVIOUS Spark SQL](https://www.palantir.com/docs/foundry/available-connectors/spark-sql/)

[NEXT Square →](https://www.palantir.com/docs/foundry/available-connectors/square/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

