Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/authorize-net/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/authorize-net/#authorizenet)Authorize.Net

The Authorize.Net connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Authorize.Net.

To create a new Authorize.Net source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Authorize.Net-specific configuration and networking. For the complete property reference, see the [official Authorize.Net driver documentation ↗](https://cdn.cdata.com/help/CWK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/authorize-net/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`LoginID` ↗](https://cdn.cdata.com/help/CWK/jdbc/RSBAuthorizeNet_p_LoginID.htm) | Mandatory | The Authorize.net Login Id. | — |
| [`TransactionKey` ↗](https://cdn.cdata.com/help/CWK/jdbc/RSBAuthorizeNet_p_TransactionKey.htm) | Mandatory | The Authorize.net transaction key. | — |
| [`UseSandbox` ↗](https://cdn.cdata.com/help/CWK/jdbc/RSBAuthorizeNet_p_UseSandbox.htm) | Recommended | A boolean indicating if you are using a Sandbox account. The provider makes requests to the production environment by default. | `FALSE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/authorize-net/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.authorize.net | If `UseSandbox=FALSE` |
| apitest.authorize.net | If `UseSandbox=TRUE` |

[← PREVIOUS Asana](https://www.palantir.com/docs/foundry/available-connectors/asana/)

[NEXT Avalara →](https://www.palantir.com/docs/foundry/available-connectors/avalara/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

