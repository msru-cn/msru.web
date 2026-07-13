Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sage-300/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sage-300/#sage-300)Sage 300

The Sage 300 connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Sage 300.

To create a new Sage 300 source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Sage 300-specific configuration and networking. For the complete property reference, see the [official Sage 300 driver documentation ↗](https://cdn.cdata.com/help/GTK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sage-300/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Password` ↗](https://cdn.cdata.com/help/GTK/jdbc/RSBSage300_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`URL` ↗](https://cdn.cdata.com/help/GTK/jdbc/RSBSage300_p_URL.htm) | Mandatory | Set the URL to the HTTP or HTTPS endpoint of your Sage 300 system. For example, [http://localhost/Sage300WebApi/v1.0/-/](http://localhost/Sage300WebApi/v1.0/-/). | `https://{host-application-path}/v{version}/{tenant}/` |
| [`User` ↗](https://cdn.cdata.com/help/GTK/jdbc/RSBSage300_p_User.htm) | Mandatory | Specifies the user ID of the authenticating Sage 300 user account. | — |
| [`Company` ↗](https://cdn.cdata.com/help/GTK/jdbc/RSBSage300_p_Company.htm) | Recommended | Determines the company. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/sage-300/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property, in format {protocol}://{host-application-path}/v{version}/{tenant}/ (i.e., [http://localhost/Sage300WebApi/v1.0/-/](http://localhost/Sage300WebApi/v1.0/-/)) |

[← PREVIOUS Sage 200](https://www.palantir.com/docs/foundry/available-connectors/sage-200/)

[NEXT Sage 50 UK →](https://www.palantir.com/docs/foundry/available-connectors/sage-50-uk/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

