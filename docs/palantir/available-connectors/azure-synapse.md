Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/azure-synapse/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/azure-synapse/#azure-synapse)Azure Synapse

The Azure Synapse connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Azure Synapse.

To create a new Azure Synapse source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Azure Synapse-specific configuration and networking. For the complete property reference, see the [official Azure Synapse driver documentation ↗](https://cdn.cdata.com/help/HEK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-synapse/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/HEK/jdbc/RSBAzureSynapse_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are Password, AzureAD, AzureServicePrincipal, AzureServicePrincipalCert, AzureMSI, AzurePassword. | `Password` |
| [`Database` ↗](https://cdn.cdata.com/help/HEK/jdbc/RSBAzureSynapse_p_Database.htm) | Mandatory | The name of the Synapse database. | — |
| [`Encrypt` ↗](https://cdn.cdata.com/help/HEK/jdbc/RSBAzureSynapse_p_Encrypt.htm) | Mandatory | This field sets whether SSL is enabled and whether the 'Strict' encryption type is used. | `TRUE` |
| [`Server` ↗](https://cdn.cdata.com/help/HEK/jdbc/RSBAzureSynapse_p_Server.htm) | Mandatory | The name of the server running Synapse. | `{serverAddress}` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/HEK/jdbc/RSBAzureSynapse_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/HEK/jdbc/RSBAzureSynapse_p_OAuthClientId.htm) | Recommended | Specifies the client ID (also known as the consumer key) assigned to your custom OAuth application. This ID is required to identify the application to the OAuth authorization server during authentication. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/HEK/jdbc/RSBAzureSynapse_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret assigned to your custom OAuth application. This confidential value is used to authenticate the application to the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/HEK/jdbc/RSBAzureSynapse_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`Port` ↗](https://cdn.cdata.com/help/HEK/jdbc/RSBAzureSynapse_p_Port.htm) | Recommended | The port of the Synapse. | `1433` |
| [`User` ↗](https://cdn.cdata.com/help/HEK/jdbc/RSBAzureSynapse_p_User.htm) | Recommended | Specifies the user ID of the authenticating Azure Synapse user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-synapse/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always. Server and Port connection properties (default `Port=1433`) |
| <StorageAccountLocation> | Used for staging data in COPY mode |
| login.microsoftonline.com | If `AuthScheme=AzureAD,` AzureServicePrincipal, AzureServicePrincipalCert, AzurePassword AND `AzureEnvironment=GLOBAL` (default) |
| login.chinacloudapi.cn | If `AuthScheme=AzureAD,` AzureServicePrincipal , AzureServicePrincipalCert, AzurePassword AND `AzureEnvironment=CHINA` |
| login.microsoftonline.us | If `AuthScheme=AzureAD,` AzureServicePrincipal, AzureServicePrincipalCert, AzurePassword AND `AzureEnvironment=USGOVT` or USGOVTDOD |

[← PREVIOUS Azure DevOps](https://www.palantir.com/docs/foundry/available-connectors/azure-devops/)

[NEXT Azure Table Storage →](https://www.palantir.com/docs/foundry/available-connectors/azure-table-storage/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

