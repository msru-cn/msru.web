Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/marklogic/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/marklogic/#marklogic)MarkLogic

The MarkLogic connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for MarkLogic.

To create a new MarkLogic source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for MarkLogic-specific configuration and networking. For the complete property reference, see the [official MarkLogic driver documentation ↗](https://cdn.cdata.com/help/OMK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/marklogic/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Password` ↗](https://cdn.cdata.com/help/OMK/jdbc/RSBMarkLogic_p_Password.htm) | Mandatory | Specifies the password of the authenticating user account. | — |
| [`Server` ↗](https://cdn.cdata.com/help/OMK/jdbc/RSBMarkLogic_p_Server.htm) | Mandatory | The address of the MarkLogic server to which you are connecting. | — |
| [`User` ↗](https://cdn.cdata.com/help/OMK/jdbc/RSBMarkLogic_p_User.htm) | Mandatory | Specifies the user ID of the authenticating MarkLogic user account. | — |
| [`UseSSL` ↗](https://cdn.cdata.com/help/OMK/jdbc/RSBMarkLogic_p_UseSSL.htm) | Mandatory | This field sets whether SSL is enabled. | `TRUE` |
| [`API` ↗](https://cdn.cdata.com/help/OMK/jdbc/RSBMarkLogic_p_API.htm) | Recommended | Specifies the API which will be used by the provider to query data. | `REST` |
| [`Database` ↗](https://cdn.cdata.com/help/OMK/jdbc/RSBMarkLogic_p_Database.htm) | Recommended | The name of the MarkLogic database to connect to. | — |
| [`Port` ↗](https://cdn.cdata.com/help/OMK/jdbc/RSBMarkLogic_p_Port.htm) | Recommended | The ODBC Server port for the MarkLogic. | `8000` |

## [](https://www.palantir.com/docs/foundry/available-connectors/marklogic/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always |

[← PREVIOUS Marketo](https://www.palantir.com/docs/foundry/available-connectors/marketo/)

[NEXT Microsoft Access →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-access/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

