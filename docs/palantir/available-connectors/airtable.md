Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/airtable/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/airtable/#airtable)Airtable

The Airtable connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Airtable.

To create a new Airtable source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Airtable-specific configuration and networking. For the complete property reference, see the [official Airtable driver documentation ↗](https://cdn.cdata.com/help/JAK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/airtable/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`DisplayValue` ↗](https://cdn.cdata.com/help/JAK/jdbc/RSBAirtable_p_DisplayValue.htm) | Mandatory | Specifies the value format. | `FormattedValue` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/JAK/jdbc/RSBAirtable_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Airtable. | `PersonalAccessToken` |
| [`BaseId` ↗](https://cdn.cdata.com/help/JAK/jdbc/RSBAirtable_p_BaseId.htm) | Recommended | Id of the base. This property is not required when the Metadata API is enabled, but specifying it restricts the metadata that will be retrieved. | — |
| [`BaseName` ↗](https://cdn.cdata.com/help/JAK/jdbc/RSBAirtable_p_BaseName.htm) | Recommended | The schema to use - which corresponds to the name of the Base in Airtable. This property is only used when the Metadata API is enabled. | — |
| [`DisplayObjectIds` ↗](https://cdn.cdata.com/help/JAK/jdbc/RSBAirtable_p_DisplayObjectIds.htm) | Recommended | Boolean determining if schema, table, view and column names should be replaced by their corresponding internal ID. | `FALSE` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/JAK/jdbc/RSBAirtable_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthAccessToken` ↗](https://cdn.cdata.com/help/JAK/jdbc/RSBAirtable_p_OAuthAccessToken.htm) | Recommended | A token received after authentication to the OAuth network, granting the user access. The access token is used in place of the user's login ID and password, which stay on the server. | — |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/JAK/jdbc/RSBAirtable_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/JAK/jdbc/RSBAirtable_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`UseSimpleNames` ↗](https://cdn.cdata.com/help/JAK/jdbc/RSBAirtable_p_UseSimpleNames.htm) | Recommended | Boolean determining if simple names should be used for tables and columns. | `FALSE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/airtable/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.airtable.com | Always |
| airtable.com | If `AuthScheme=OAuthPKCE` |

[← PREVIOUS Agent-level filesystem](https://www.palantir.com/docs/foundry/available-connectors/filesystem/)

[NEXT AlloyDB →](https://www.palantir.com/docs/foundry/available-connectors/alloydb/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

