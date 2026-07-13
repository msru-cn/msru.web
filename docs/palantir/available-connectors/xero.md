Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/xero/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/xero/#xero)Xero

The Xero connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Xero.

To create a new Xero source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Xero-specific configuration and networking. For the complete property reference, see the [official Xero driver documentation ↗](https://cdn.cdata.com/help/DXK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/xero/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/DXK/jdbc/RSBXero_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Xero. | `OAuthClient` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/DXK/jdbc/RSBXero_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/DXK/jdbc/RSBXero_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/DXK/jdbc/RSBXero_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/DXK/jdbc/RSBXero_p_Schema.htm) | Recommended | The Xero API you want to access as a database schema. | `ACCOUNTING` |
| [`Tenant` ↗](https://cdn.cdata.com/help/DXK/jdbc/RSBXero_p_Tenant.htm) | Recommended | Sets the Xero organization to connect to. Can be a name or tenant ID. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/xero/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.xero.com | Always |
| login.xero.com | OAuth Authorization URL |
| identity.xero.com | Always. OAuth Token URL |

[← PREVIOUS xBase](https://www.palantir.com/docs/foundry/available-connectors/xbase/)

[NEXT Xero WorkflowMax →](https://www.palantir.com/docs/foundry/available-connectors/xero-workflowmax/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

