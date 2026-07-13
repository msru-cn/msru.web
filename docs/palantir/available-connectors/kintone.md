Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/kintone/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/kintone/#kintone)Kintone

The Kintone connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Kintone.

To create a new Kintone source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Kintone-specific configuration and networking. For the complete property reference, see the [official Kintone driver documentation ↗](https://cdn.cdata.com/help/EKK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/kintone/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/EKK/jdbc/RSBKintone_p_AuthScheme.htm) | Mandatory | Whether to connect to Kintone with User/Password or APIToken or OAuth. | `Password` |
| [`Schema` ↗](https://cdn.cdata.com/help/EKK/jdbc/RSBKintone_p_Schema.htm) | Mandatory | Specify the Kintone API version to use. | `REST` |
| [`URL` ↗](https://cdn.cdata.com/help/EKK/jdbc/RSBKintone_p_URL.htm) | Mandatory | The Kintone URL. For example: [https://SUBDOMAIN\_NAME.cybozu.com](https://SUBDOMAIN%5C_NAME.cybozu.com) . | `https://subdomain.example.com` |
| [`Password` ↗](https://cdn.cdata.com/help/EKK/jdbc/RSBKintone_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/EKK/jdbc/RSBKintone_p_User.htm) | Recommended | Specifies the user ID of the authenticating Kintone user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/kintone/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property (example [https://subdomain.cybozu.com](https://subdomain.cybozu.com/)) |

[← PREVIOUS Kafka](https://www.palantir.com/docs/foundry/available-connectors/kafka/)

[NEXT LDAP →](https://www.palantir.com/docs/foundry/available-connectors/ldap/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

