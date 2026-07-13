Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/azure-cosmos-db/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/azure-cosmos-db/#azure-cosmos-db)Azure Cosmos DB

The Azure Cosmos DB connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Azure Cosmos DB.

To create a new Azure Cosmos DB source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Azure Cosmos DB-specific configuration and networking. For the complete property reference, see the [official Azure Cosmos DB driver documentation ↗](https://cdn.cdata.com/help/EHK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-cosmos-db/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AccountEndpoint` ↗](https://cdn.cdata.com/help/EHK/jdbc/RSBCosmosdb_p_AccountEndpoint.htm) | Mandatory | The value should be the Cosmos DB account URL from the Keys blade of the Cosmos DB account. | `https://<URL>` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/EHK/jdbc/RSBCosmosdb_p_AuthScheme.htm) | Mandatory | The type of authentication to use when connecting to Azure Cosmos DB. | `AccountKey` |
| [`AccountKey` ↗](https://cdn.cdata.com/help/EHK/jdbc/RSBCosmosdb_p_AccountKey.htm) | Recommended | A master key token or a resource token for connecting to the Azure Cosmos DB REST API. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/EHK/jdbc/RSBCosmosdb_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/EHK/jdbc/RSBCosmosdb_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/EHK/jdbc/RSBCosmosdb_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/EHK/jdbc/RSBCosmosdb_p_Schema.htm) | Recommended | Specify the Azure Cosmos DB database you want to work with. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-cosmos-db/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <AccountEndpoint> | Always. AccountEndpoint connection property (may be in the format https://<Server>:<Port> or may be a full URL) |
| login.microsoftonline.com | If `AuthScheme=AzureAD,` AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=GLOBAL` (default) |
| login.chinacloudapi.cn | If `AuthScheme=AzureAD,` AzureServicePrincipal , AzureServicePrincipalCert AND `AzureEnvironment=CHINA` |
| login.microsoftonline.us | If `AuthScheme=AzureAD,` AzureServicePrincipal, AzureServicePrincipalCert AND `AzureEnvironment=USGOVT` or USGOVTDOD |

[← PREVIOUS Azure Active Directory](https://www.palantir.com/docs/foundry/available-connectors/azure-active-directory/)

[NEXT Azure Data Catalog →](https://www.palantir.com/docs/foundry/available-connectors/azure-data-catalog/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

