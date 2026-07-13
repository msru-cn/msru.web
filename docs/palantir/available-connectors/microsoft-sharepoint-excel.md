Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-sharepoint-excel/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sharepoint-excel/#microsoft-sharepoint-excel)Microsoft SharePoint Excel

The Microsoft SharePoint Excel connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft SharePoint Excel.

To create a new Microsoft SharePoint Excel source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft SharePoint Excel-specific configuration and networking. For the complete property reference, see the [official Microsoft SharePoint Excel driver documentation ↗](https://cdn.cdata.com/help/DTK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sharepoint-excel/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/DTK/jdbc/RSBExcelServices_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. Accepted entries are NTLM,Basic,Digest,Forms,None,Negotiate,ADFS. | `NTLM` |
| [`File` ↗](https://cdn.cdata.com/help/DTK/jdbc/RSBExcelServices_p_File.htm) | Mandatory | The name of the Excel file to which to connect. | `Book1.xlsx` |
| [`SharePointVersion` ↗](https://cdn.cdata.com/help/DTK/jdbc/RSBExcelServices_p_SharePointVersion.htm) | Mandatory | The version of the SharePoint server to which you are connecting. | `SharePoint 2013` |
| [`URL` ↗](https://cdn.cdata.com/help/DTK/jdbc/RSBExcelServices_p_URL.htm) | Mandatory | The base URL for a site or site collection. | `https://myorg.sharepoint.com` |
| [`Folder` ↗](https://cdn.cdata.com/help/DTK/jdbc/RSBExcelServices_p_Folder.htm) | Recommended | The folder containing the workbook specified by the File property. | — |
| [`Library` ↗](https://cdn.cdata.com/help/DTK/jdbc/RSBExcelServices_p_Library.htm) | Recommended | The Document Library to which to connect. | — |
| [`Password` ↗](https://cdn.cdata.com/help/DTK/jdbc/RSBExcelServices_p_Password.htm) | Recommended | The password of the account used to authenticate to the server. | — |
| [`User` ↗](https://cdn.cdata.com/help/DTK/jdbc/RSBExcelServices_p_User.htm) | Recommended | The username of the account used to authenticate to the server. | — |
| [`UseRESTAPI` ↗](https://cdn.cdata.com/help/DTK/jdbc/RSBExcelServices_p_UseRESTAPI.htm) | Recommended | Whether or not the REST API is used for retrieving data. | `TRUE` |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sharepoint-excel/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |
| <KerberosKDC>:88 | If `SharePointEdition='SharePoint OnPremise'` (default) AND `AuthScheme=Negotiate` |
| <KerberosServiceKDC>:88 | If `SharePointEdition='SharePoint OnPremise'` (default) AND `AuthScheme=Negotiate` AND Kerberos topology uses multiple realms |
| <SSOLoginURL> | If `SharePointEdition='SharePoint OnPremise'` (default) AND `AuthScheme=ADFS` |
| login.microsoftonline.com | If `SharePointEdition='SharePoint Online'` AND `AuthScheme=AzureAD,` AzurePassword, SharePointOAuth, OAuthJWT AND `AzureEnvironment=GLOBAL` (default) |
| login.chinacloudapi.cn | If `SharePointEdition='SharePoint Online'` AND `AuthScheme=AzureAD,` AzurePassword, SharePointOAuth, OAuthJWT AND `AzureEnvironment=CHINA` |
| login.microsoftonline.us | If `SharePointEdition='SharePoint Online'` AND `AuthScheme=AzureAD,` AzurePassword, SharePointOAuth, OAuthJWT AND `AzureEnvironment=USGOVT` or USGOVTDOD |

[← PREVIOUS Microsoft SharePoint](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sharepoint/)

[NEXT Microsoft SQL Server →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

