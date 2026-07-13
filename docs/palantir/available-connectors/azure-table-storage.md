Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/azure-table-storage/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/azure-table-storage/#azure-table-storage)Azure Table Storage

The Azure Table Storage connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Azure Table Storage.

To create a new Azure Table Storage source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Azure Table Storage-specific configuration and networking. For the complete property reference, see the [official Azure Table Storage driver documentation ↗](https://cdn.cdata.com/help/CAK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-table-storage/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`Account` ↗](https://cdn.cdata.com/help/CAK/jdbc/RSBAzure_p_Account.htm) | Mandatory | The Windows Azure Storage account name. | — |
| [`UseSSL` ↗](https://cdn.cdata.com/help/CAK/jdbc/RSBAzure_p_UseSSL.htm) | Mandatory | This field sets whether SSL is enabled. The default is true. | `TRUE` |
| [`AccessKey` ↗](https://cdn.cdata.com/help/CAK/jdbc/RSBAzure_p_AccessKey.htm) | Recommended | The key for the storage account. | — |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/CAK/jdbc/RSBAzure_p_AuthScheme.htm) | Recommended | The scheme used for authentication. Accepted entries are AccessKey, SharedAccessSignature, AzureAD, AzureServicePrincipal, AzureServicePrincipalCert and AzureMSI. The default value is SharedAccessSignature. | `AccessKey` |
| [`Backend` ↗](https://cdn.cdata.com/help/CAK/jdbc/RSBAzure_p_Backend.htm) | Recommended | The backend where data is stored. | `Storage` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/CAK/jdbc/RSBAzure_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/CAK/jdbc/RSBAzure_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/CAK/jdbc/RSBAzure_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Tables` ↗](https://cdn.cdata.com/help/CAK/jdbc/RSBAzure_p_Tables.htm) | Recommended | This property restricts the tables reported to a subset of the available tables. For example, Tables=TableA,TableB,TableC. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-table-storage/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Account>.table.core.windows.net | If `Backend=Storage` (default) |
| <Account>.table.cosmosdb.azure.com | If `Backend=CosmosDB` |
| <Account> | If `Backend=AzureStack` or Emulator, specify the full URL in Account |
| login.microsoftonline.com | If `AuthScheme=AzureAD` AND `AzureEnvironment=GLOBAL` (default) |
| login.chinacloudapi.cn | If `AuthScheme=AzureAD` AND `AzureEnvironment=CHINA` |
| login.microsoftonline.us | If `AuthScheme=AzureAD` AND `AzureEnvironment=USGOVT` or USGOVTDOD |

[← PREVIOUS Azure Synapse](https://www.palantir.com/docs/foundry/available-connectors/azure-synapse/)

[NEXT Basecamp →](https://www.palantir.com/docs/foundry/available-connectors/basecamp/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

