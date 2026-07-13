Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/azure-devops/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/azure-devops/#azure-devops)Azure DevOps

The Azure DevOps connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Azure DevOps.

To create a new Azure DevOps source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Azure DevOps-specific configuration and networking. For the complete property reference, see the [official Azure DevOps driver documentation ↗](https://cdn.cdata.com/help/HNK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-devops/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AzureDevOpsEdition` ↗](https://cdn.cdata.com/help/HNK/jdbc/RSBAzureDevOps_p_AzureDevOpsEdition.htm) | Mandatory | The edition of AzureDevOps being used. Set either [AzureDevOps Online] or [AzureDevOps OnPremise]. | `AzureDevOps Online` |
| [`Organization` ↗](https://cdn.cdata.com/help/HNK/jdbc/RSBAzureDevOps_p_Organization.htm) | Mandatory | The name of the Organization or Collection, depending upon the value of AzureDevOpsEdition . | — |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/HNK/jdbc/RSBAzureDevOps_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Azure DevOps. Azure DevOps OnPremise connections support only Basic authentication. | `Basic` |
| [`Catalog` ↗](https://cdn.cdata.com/help/HNK/jdbc/RSBAzureDevOps_p_Catalog.htm) | Recommended | Specify this property to connect with a particular catalog. | — |
| [`IncludeCustomFields` ↗](https://cdn.cdata.com/help/HNK/jdbc/RSBAzureDevOps_p_IncludeCustomFields.htm) | Recommended | A boolean indicating if you would like to include custom fields in the column listing. | `TRUE` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/HNK/jdbc/RSBAzureDevOps_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/HNK/jdbc/RSBAzureDevOps_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/HNK/jdbc/RSBAzureDevOps_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`PersonalAccessToken` ↗](https://cdn.cdata.com/help/HNK/jdbc/RSBAzureDevOps_p_PersonalAccessToken.htm) | Recommended | The personal access token used for accessing the data in your organization. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/HNK/jdbc/RSBAzureDevOps_p_Schema.htm) | Recommended | Specify this property to connect with a particular schema. | `REST` |

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-devops/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| dev.azure.com | If `Schema=REST` (default) AND `AzureDevOpsEdition='AzureDevOps Online'` (default) |
| analytics.dev.azure.com | If `Schema=Analytics` AND `AzureDevOpsEdition='AzureDevOps Online'` (default) |
| <URL> | If `AzureDevOpsEdition='AzureDevOps OnPremise'` |
| login.microsoftonline.com | If `AuthScheme=AzureAD` (default) AND `AzureEnvironment=GLOBAL` (default) |
| login.chinacloudapi.cn | If `AuthScheme=AzureAD` (default) AND `AzureEnvironment=CHINA` |
| login.microsoftonline.us | If `AuthScheme=AzureAD` (default) AND `AzureEnvironment=USGOVT` or USGOVTDOD |

[← PREVIOUS Azure Data Catalog](https://www.palantir.com/docs/foundry/available-connectors/azure-data-catalog/)

[NEXT Azure Synapse →](https://www.palantir.com/docs/foundry/available-connectors/azure-synapse/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

