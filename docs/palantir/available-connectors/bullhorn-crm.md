Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/bullhorn-crm/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/bullhorn-crm/#bullhorn-crm)Bullhorn CRM

The Bullhorn CRM connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Bullhorn CRM.

To create a new Bullhorn CRM source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Bullhorn CRM-specific configuration and networking. For the complete property reference, see the [official Bullhorn CRM driver documentation ↗](https://cdn.cdata.com/help/HAK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/bullhorn-crm/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`DataCenterCode` ↗](https://cdn.cdata.com/help/HAK/jdbc/RSBBullhornCRM_p_DataCenterCode.htm) | Mandatory | The data center code where your account's data is hosted, for example, CLS2, CLS5 etc... | — |
| [`IncludeCustomFields` ↗](https://cdn.cdata.com/help/HAK/jdbc/RSBBullhornCRM_p_IncludeCustomFields.htm) | Recommended | A boolean indicating if you would like to include custom fields in the column listing. | `TRUE` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/HAK/jdbc/RSBBullhornCRM_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/HAK/jdbc/RSBBullhornCRM_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/HAK/jdbc/RSBBullhornCRM_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`RestURL` ↗](https://cdn.cdata.com/help/HAK/jdbc/RSBBullhornCRM_p_RestURL.htm) | Recommended | The base URL of the Bullhorn CRM REST API. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/bullhorn-crm/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| Data-center-specific API URLs | Always. Determined by the DataCenterCode set |
| <URL> | Required if the OAuth flow is executed manually |

[← PREVIOUS Bugzilla](https://www.palantir.com/docs/foundry/available-connectors/bugzilla/)

[NEXT Cassandra →](https://www.palantir.com/docs/foundry/available-connectors/cassandra/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

