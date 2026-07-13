Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/xero-workflowmax/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/xero-workflowmax/#xero-workflowmax)Xero WorkflowMax

The Xero WorkflowMax connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Xero WorkflowMax.

To create a new Xero WorkflowMax source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Xero WorkflowMax-specific configuration and networking. For the complete property reference, see the [official Xero WorkflowMax driver documentation ↗](https://cdn.cdata.com/help/GXJ/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/xero-workflowmax/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/GXJ/jdbc/RSBXeroWorkflowMax_p_InitiateOAuth.htm) | Recommended | Set this property to initiate the process to obtain or refresh the OAuth access token when you connect. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/GXJ/jdbc/RSBXeroWorkflowMax_p_OAuthClientId.htm) | Recommended | The client Id assigned when you register your application with an OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/GXJ/jdbc/RSBXeroWorkflowMax_p_OAuthClientSecret.htm) | Recommended | The client secret assigned when you register your application with an OAuth authorization server. | — |
| [`TenantId` ↗](https://cdn.cdata.com/help/GXJ/jdbc/RSBXeroWorkflowMax_p_TenantId.htm) | Recommended | Xero Workflow Max Tenant ID. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/xero-workflowmax/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.xero.com | Always |
| login.xero.com | OAuth Authorization URL |
| identity.xero.com | Always. OAuth Token URL |

[← PREVIOUS Xero](https://www.palantir.com/docs/foundry/available-connectors/xero/)

[NEXT YouTube Analytics →](https://www.palantir.com/docs/foundry/available-connectors/youtube-analytics/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

