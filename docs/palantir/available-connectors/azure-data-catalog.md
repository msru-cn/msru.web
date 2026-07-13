Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/azure-data-catalog/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/azure-data-catalog/#azure-data-catalog)Azure Data Catalog

The Azure Data Catalog connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Azure Data Catalog.

To create a new Azure Data Catalog source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Azure Data Catalog-specific configuration and networking. For the complete property reference, see the [official Azure Data Catalog driver documentation ↗](https://cdn.cdata.com/help/GNK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-data-catalog/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/GNK/jdbc/RSBAzureDataCatalog_p_AuthScheme.htm) | Recommended | Specifies the type of authentication to use when connecting to Azure Data Catalog. If this property is left blank, the default authentication is used. | `AzureServicePrincipal` |
| [`AzureTenant` ↗](https://cdn.cdata.com/help/GNK/jdbc/RSBAzureDataCatalog_p_AzureTenant.htm) | Recommended | Identifies the Azure Data Catalog tenant being used to access data, either by name (for example, contoso.onmicrosoft.com) or ID. (Conditional). | — |
| [`CatalogName` ↗](https://cdn.cdata.com/help/GNK/jdbc/RSBAzureDataCatalog_p_CatalogName.htm) | Recommended | The name of the catalog to connect to. | `defaultcatalog` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/GNK/jdbc/RSBAzureDataCatalog_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/GNK/jdbc/RSBAzureDataCatalog_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/GNK/jdbc/RSBAzureDataCatalog_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-data-catalog/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.azuredatacatalog.com | Always |
| datacatalog.azure.com | Always |
| login.microsoftonline.com | If `AuthScheme=AzureAD` (default), AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=GLOBAL` (default) |
| login.chinacloudapi.cn | If `AuthScheme=AzureAD` (default), AzureServicePrincipal , AzureServicePrincipalCert AND `AzureEnvironment=CHINA` |
| login.microsoftonline.us | If `AuthScheme=AzureAD` (default), AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=USGOVT` or USGOVTDOD |

[← PREVIOUS Azure Cosmos DB](https://www.palantir.com/docs/foundry/available-connectors/azure-cosmos-db/)

[NEXT Azure DevOps →](https://www.palantir.com/docs/foundry/available-connectors/azure-devops/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

