Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sage-50-uk/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sage-50-uk/#sage-50-uk)Sage 50 UK

The Sage 50 UK connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Sage 50 UK.

To create a new Sage 50 UK source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Sage 50 UK-specific configuration and networking. For the complete property reference, see the [official Sage 50 UK driver documentation ↗](https://cdn.cdata.com/help/CSK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sage-50-uk/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/CSK/jdbc/RSBSage50UK_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are Basic, Digest, or None. | `Basic` |
| [`Password` ↗](https://cdn.cdata.com/help/CSK/jdbc/RSBSage50UK_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`URL` ↗](https://cdn.cdata.com/help/CSK/jdbc/RSBSage50UK_p_URL.htm) | Mandatory | URL to the Sage 50 UK SData service. For example, [http://MySite:5493/sdata/accounts50/GCRM/MyDatasetId/](http://mysite:5493/sdata/accounts50/GCRM/MyDatasetId/). | `https://MySite:5493/sdata/accounts50/GCRM/MyDatasetId/` |
| [`User` ↗](https://cdn.cdata.com/help/CSK/jdbc/RSBSage50UK_p_User.htm) | Mandatory | Specifies the user ID of the authenticating Sage 50 UK user account. | — |
| [`SSLServerCert` ↗](https://cdn.cdata.com/help/CSK/jdbc/RSBSage50UK_p_SSLServerCert.htm) | Recommended | Specifies the certificate to be accepted from the server when connecting using TLS/SSL. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/sage-50-uk/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property, example: [http://MySite:5493/sdata/accounts50/GCRM/MyDatasetId/](http://mysite:5493/sdata/accounts50/GCRM/MyDatasetId/) |

[← PREVIOUS Sage 300](https://www.palantir.com/docs/foundry/available-connectors/sage-300/)

[NEXT Sage Business Cloud Accounting →](https://www.palantir.com/docs/foundry/available-connectors/sage-business-cloud-accounting/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

