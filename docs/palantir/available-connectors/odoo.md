Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/odoo/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/odoo/#odoo)Odoo

The Odoo connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Odoo.

To create a new Odoo source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Odoo-specific configuration and networking. For the complete property reference, see the [official Odoo driver documentation ↗](https://cdn.cdata.com/help/OEK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/odoo/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`APIToken` ↗](https://cdn.cdata.com/help/OEK/jdbc/RSBOdoo_p_APIToken.htm) | Mandatory | The API token (or password) used to authenticate the user. | — |
| [`URL` ↗](https://cdn.cdata.com/help/OEK/jdbc/RSBOdoo_p_URL.htm) | Mandatory | The base URL of the Odoo site you're connecting to. For example, [http://my.odoo.com/](http://my.odoo.com/). | `https://MyOdooSite/` |
| [`User` ↗](https://cdn.cdata.com/help/OEK/jdbc/RSBOdoo_p_User.htm) | Mandatory | The Odoo user account used to authenticate. | — |
| [`CheckPermissions` ↗](https://cdn.cdata.com/help/OEK/jdbc/RSBOdoo_p_CheckPermissions.htm) | Recommended | Whether to use Odoo user's permissions to determine which tables and views to list. | `TRUE` |
| [`Database` ↗](https://cdn.cdata.com/help/OEK/jdbc/RSBOdoo_p_Database.htm) | Recommended | The name of the Odoo database you're connecting to. | — |
| [`OdooEdition` ↗](https://cdn.cdata.com/help/OEK/jdbc/RSBOdoo_p_OdooEdition.htm) | Recommended | The edition of Odoo being used. Set either Odoo Online or Odoo On-Premise. | `Odoo Online` |

## [](https://www.palantir.com/docs/foundry/available-connectors/odoo/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |

[← PREVIOUS OData](https://www.palantir.com/docs/foundry/available-connectors/odata/)

[NEXT OneLake and Azure Blob Filesystem (ABFS) →](https://www.palantir.com/docs/foundry/available-connectors/onelake-and-azure-blob-filesystem/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

