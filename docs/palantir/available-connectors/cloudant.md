Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/cloudant/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/cloudant/#cloudant)Cloudant

The Cloudant connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Cloudant.

To create a new Cloudant source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Cloudant-specific configuration and networking. For the complete property reference, see the [official Cloudant driver documentation ↗](https://cdn.cdata.com/help/EWK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/cloudant/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/EWK/jdbc/RSBCloudant_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Cloudant. | `OAuth` |
| [`URL` ↗](https://cdn.cdata.com/help/EWK/jdbc/RSBCloudant_p_URL.htm) | Mandatory | The URL used to connect to Cloudant. | `https://{instance id}-bluemix.cloudantnosqldb.appdomain.cloud` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/EWK/jdbc/RSBCloudant_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |

## [](https://www.palantir.com/docs/foundry/available-connectors/cloudant/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | If `AuthScheme=OAuth` OR using local instance (local instance in the format <Server>:<Port>) |
| <User>.cloudant.com | If `AuthScheme=Basic` |

[← PREVIOUS Certinia](https://www.palantir.com/docs/foundry/available-connectors/certinia/)

[NEXT CockroachDB →](https://www.palantir.com/docs/foundry/available-connectors/cockroachdb/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

