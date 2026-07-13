Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/azure-active-directory/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/azure-active-directory/#azure-active-directory)Azure Active Directory

The Azure Active Directory connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Azure Active Directory.

To create a new Azure Active Directory source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Azure Active Directory-specific configuration and networking. For the complete property reference, see the [official Azure Active Directory driver documentation ↗](https://cdn.cdata.com/help/CJM/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-active-directory/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`DefaultGroups` ↗](https://cdn.cdata.com/help/CJM/jdbc/RSBAzureActiveDirectory_p_DefaultGroups.htm) | Mandatory | Determines whether to use the /me/memberOf or /groups endpoint for user authentication. | `AllGroups` |
| [`DefaultUser` ↗](https://cdn.cdata.com/help/CJM/jdbc/RSBAzureActiveDirectory_p_DefaultUser.htm) | Mandatory | Determines whether to use the /me or /users endpoint for user authentication. | `AllUsers` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/CJM/jdbc/RSBAzureActiveDirectory_p_AuthScheme.htm) | Recommended | Specifies the type of authentication to use when connecting to Azure Active Directory. If this property is left blank, the default authentication is used. | `AzureServicePrincipal` |
| [`AzureTenant` ↗](https://cdn.cdata.com/help/CJM/jdbc/RSBAzureActiveDirectory_p_AzureTenant.htm) | Recommended | Identifies the Azure Active Directory tenant being used to access data. Accepts either the tenant's domain name (for example, contoso.onmicrosoft.com ) or its directory (tenant) ID. | — |
| [`GroupId` ↗](https://cdn.cdata.com/help/CJM/jdbc/RSBAzureActiveDirectory_p_GroupId.htm) | Recommended | Specify a default GroupId. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/CJM/jdbc/RSBAzureActiveDirectory_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/CJM/jdbc/RSBAzureActiveDirectory_p_OAuthClientId.htm) | Recommended | Specifies the client ID (also known as the consumer key) assigned to your custom OAuth application. This ID is required to identify the application to the OAuth authorization server during authentication. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/CJM/jdbc/RSBAzureActiveDirectory_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret assigned to your custom OAuth application. This confidential value is used to authenticate the application to the OAuth authorization server. (Custom OAuth applications only.) | — |
| [`UserId` ↗](https://cdn.cdata.com/help/CJM/jdbc/RSBAzureActiveDirectory_p_UserId.htm) | Recommended | Specify a default UserId. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/azure-active-directory/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | Always. Server and Port connection properties |

[← PREVIOUS AWS Redshift](https://www.palantir.com/docs/foundry/available-connectors/aws-redshift/)

[NEXT Azure Cosmos DB →](https://www.palantir.com/docs/foundry/available-connectors/azure-cosmos-db/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

