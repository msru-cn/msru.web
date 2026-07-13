Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/quickbase/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/quickbase/#quickbase)Quickbase

The Quickbase connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Quickbase.

To create a new Quickbase source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Quickbase-specific configuration and networking. For the complete property reference, see the [official Quickbase driver documentation ↗](https://cdn.cdata.com/help/GUK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/quickbase/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/GUK/jdbc/RSBQuickBase_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Quickbase. | `Basic` |
| [`Domain` ↗](https://cdn.cdata.com/help/GUK/jdbc/RSBQuickBase_p_Domain.htm) | Mandatory | Your Quickbase domain name. | `myDomain.quickbase.com` |
| [`ApplicationToken` ↗](https://cdn.cdata.com/help/GUK/jdbc/RSBQuickBase_p_ApplicationToken.htm) | Recommended | The application token used to authenticate the user. | — |
| [`Password` ↗](https://cdn.cdata.com/help/GUK/jdbc/RSBQuickBase_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/GUK/jdbc/RSBQuickBase_p_User.htm) | Recommended | Specifies the user ID of the authenticating Quickbase user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/quickbase/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Domain> | Always. Domain connection property |

[← PREVIOUS Presto](https://www.palantir.com/docs/foundry/available-connectors/presto/)

[NEXT QuickBooks Desktop →](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-desktop/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

