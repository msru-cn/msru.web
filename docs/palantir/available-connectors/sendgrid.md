Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sendgrid/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sendgrid/#sendgrid)SendGrid

The SendGrid connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SendGrid.

To create a new SendGrid source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SendGrid-specific configuration and networking. For the complete property reference, see the [official SendGrid driver documentation ↗](https://cdn.cdata.com/help/BGK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sendgrid/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`APIKey` ↗](https://cdn.cdata.com/help/BGK/jdbc/RSBSendgrid_p_APIKey.htm) | Mandatory | The API key of the currently authenticated user. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/BGK/jdbc/RSBSendgrid_p_Schema.htm) | Mandatory | The type of schema to use. | `NMC` |
| [`IncludeCustomFields` ↗](https://cdn.cdata.com/help/BGK/jdbc/RSBSendgrid_p_IncludeCustomFields.htm) | Recommended | A boolean indicating if you would like to include custom fields in the column listing. | `TRUE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/sendgrid/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.sendgrid.com | Always |

[← PREVIOUS SAS Xpt](https://www.palantir.com/docs/foundry/available-connectors/sas-xpt/)

[NEXT SFTP →](https://www.palantir.com/docs/foundry/available-connectors/sftp/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

