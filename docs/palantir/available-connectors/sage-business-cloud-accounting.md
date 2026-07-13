Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sage-business-cloud-accounting/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sage-business-cloud-accounting/#sage-business-cloud-accounting)Sage Business Cloud Accounting

The Sage Business Cloud Accounting connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Sage Business Cloud Accounting.

To create a new Sage Business Cloud Accounting source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Sage Business Cloud Accounting-specific configuration and networking. For the complete property reference, see the [official Sage Business Cloud Accounting driver documentation ↗](https://cdn.cdata.com/help/GAK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sage-business-cloud-accounting/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/GAK/jdbc/RSBSageBCAccounting_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/GAK/jdbc/RSBSageBCAccounting_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/GAK/jdbc/RSBSageBCAccounting_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/sage-business-cloud-accounting/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.accounting.sage.com | Always |
| sageone.com | Always |
| oauth.accounting.sage.com | Always |

[← PREVIOUS Sage 50 UK](https://www.palantir.com/docs/foundry/available-connectors/sage-50-uk/)

[NEXT Salesforce →](https://www.palantir.com/docs/foundry/available-connectors/salesforce/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

