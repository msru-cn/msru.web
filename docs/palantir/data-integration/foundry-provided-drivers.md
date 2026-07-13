Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#palantir-provided-drivers-for-jdbc-sources)Palantir-provided drivers for JDBC sources

You can connect your Foundry enrollment to various external sources using a JDBC driver that appears as Foundry sources in Data Connection. These sources are wrappers around JDBC drivers that allow for customization, and they come with recommended and required properties and links to official documentation.

If you want to upload your own JDBC driver to Foundry, review the documentation on configuring [a custom JDBC driver](https://www.palantir.com/docs/foundry/available-connectors/custom-jdbc-sources/)

## [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup)Setup

1.   Open the Data Connection application and select **+New Source** in the upper right corner of the screen.

2.   Find your specific source from the listed options. [View a complete list of Foundry-provided drivers.](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#available-drivers)

3.   Choose to run the source capabilities on a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) or on an [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker).

4.   Select **Documentation ↗** to review official documentation for the driver source. 

![Image 10: The documentation link in a Foundry-provided driver source configuration page](https://www.palantir.com/docs/resources/foundry/data-integration/foundry-provided-drivers-docs-link.png)

5.   Follow the additional configuration prompts to continue the setup of your connector using the information in the sections below.

## [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#configuration-options)Configuration options

| Parameter | Required? | Description |
| --- | --- | --- |
| `URL` | Yes | The JDBC URL that is used by the driver. Comes pre-populated with a template that may need to be modified to ensure correct behavior. Refer to the source system's documentation for the JDBC URL format, and review the [Java documentation ↗](https://docs.oracle.com/javase/tutorial/jdbc/basics/connecting.html) for additional information. |
| `JDBC properties` | Yes | Lists out all required and recommended properties that the driver needs. Hovering over a required or recommended property will allow you to navigate to the official documentation. You can add any additional properties by choosing the **+ Add property** button. |
|  |  |  |

### [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#jdbc-properties)JDBC properties

You can add [properties ↗](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Properties.html) to your JDBC connection to configure behavior. Certain properties are mandatory for a particular driver. These mandatory properties are populated by default and must be set before you can save your source. You can also view recommended properties that you can add by selecting **+Add property** and viewing the **Recommended** section.

Hover over the name of a `Required` or `Recommended` property to visit the official documentation page for the selected driver.

![Image 11: A link to documentation appears in a tooltip when hovered over the driver name.](https://www.palantir.com/docs/resources/foundry/data-integration/foundry-provided-drivers-jdbc-property-docs-tooltip.png)

## [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#configure-foundry-provided-driver-syncs)Configure Foundry-provided driver syncs

### [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#sql-queries)SQL queries

A single SQL query can be executed per sync. This query should produce a table of data as an output, which will be saved to the output dataset in Foundry.

Exceptionally, this query can invoke stored procedures that produce data as a result. [Read below](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#stored-procedures) for more details.

![Image 12: The SLQ Query input on the Edit syncs page for a JDBC connector.](https://www.palantir.com/docs/resources/foundry/data-integration/jdbc-sql-query.png)

## [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#configuration-options-for-cdata-provided-drivers)Configuration options for CData-provided drivers

Many of the Foundry-provided drivers are developed by [CData ↗](https://www.cdata.com/drivers/). CData provides full documentation for each driver including, in-depth instructions for generating credentials on the source system. You can navigate to these instructions from the documentation page for any CData driver.

The sections below contain information about CData-specific configuration options that can help you successfully connect to external systems.

### [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#automatically-perform-test-connection-on-source-exploration)Automatically perform test connection on source exploration

By default, CData drivers defer performing the connection until actual queries are made. This can result in mistaken assumptions around source exploration, since the display of static metadata tables stored in the driver may lead you to think that exploration was successful, when in reality the connection to the underlying system was not successful due to missing credentials, missing egress policies, or other issues.

You can force the driver to perform a no-operation test connection, even when only exploring the source, by setting the **ConnectOnOpen** JDBC property to `true`. This is recommended to ensure that all connection issues are uncovered when exploring the source.

`ConnectOnOpen: true` can not be used alongside [OAuth 2.0 authentication](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#oauth-20-authentication). 

`ConnectOnOpen: true` can be the reason the connection fail when the credentials used to connect are very scoped down and are not allowed perform the no-operation command used for the test connection.

![Image 13: CData driver with ConnectOnOpen configured.](https://www.palantir.com/docs/resources/foundry/data-integration/cdata-connectonopen.png)

### [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#certificate-authentication)Certificate authentication

Many CData drivers support certificate authentication, in particular for Azure-based systems.

To connect using a certificate, you must define the following JDBC properties in addition to the connection-specific configuration requirements:

*   **AuthScheme:**`AzureServicePrincipalCert`
*   **OAuthJWTCertType:**`PFXBLOB`
*   **OAuthJWTCert:**`base64-encoded_cert/pfx/pem_file_content`
*   (Optional) **OAuthJWTCertPassword:**`password_for_the_cert/pfx/pem_file`

To transform the certificate file into Base64 format on a Windows machine, use the following command: `[Convert]::ToBase64String([IO.File]::ReadAllBytes("\path\to\file.pfx"))`

![Image 14: Microsoft Exchange driver with private certificate authentication configured.](https://www.palantir.com/docs/resources/foundry/data-integration/exchange-driver-certificate.png)

### [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#stored-procedures)Stored procedures

Some CData drivers connecting to file-based source systems like [Amazon Marketplace](https://www.palantir.com/docs/foundry/available-connectors/amazon-marketplace/) or [Microsoft OneDrive](https://www.palantir.com/docs/foundry/available-connectors/microsoft-onedrive/) rely on the ability to invoke stored procedures to ingest data.

![Image 15: Microsoft OneDriver sync extracting a file using a stored procedure.](https://www.palantir.com/docs/resources/foundry/data-integration/onedrive-downloadfile-procedure.png)

Running the stored procedure will produce a table where the file content is stored as a Base64 encoded string. You can decode it in a downstream data transformation, for example in Pipeline Builder using a [Base64 decode](https://www.palantir.com/docs/foundry/pb-functions-expression/base64DecodeV1/) board.

### [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#oauth-20-authentication)OAuth 2.0 authentication

Some CData drivers support [OAuth 2.0 ↗](https://oauth.net/2/) authorization code grant flow. This enables secure connections to external systems by allowing users to authenticate with their own credentials and perform actions on their behalf. The [list of available drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#available-drivers) details which ones support OAuth 2.0 authentication.

OAuth 2.0 authentication is only supported when running the source on a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker). Sources running on an [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) do not support OAuth 2.0 authentication.

To use OAuth 2.0 authentication:

1.   Add the **CallbackUrl** JDBC property to the source configuration. The property value will auto-fill with a URL of the form `https://<YOUR_FOUNDRY_URL>/workspace/oauth2-clients/callback`.

2.   In the external system, register a custom OAuth application and provide the callback URL.

    *   The specifics of how to register a custom OAuth application will depend on each external system. For [GitHub ↗](https://github.com/), for example, navigate to **Settings > Developer Settings > OAuth Apps**. Then select **New OAuth App**.

3.   Copy the generated **OAuth client id** and **OAuth client secret** and paste them in your source configuration JDBC properties. 

![Image 16: Github source configuration using OAuth 2.0 authentication.](https://www.palantir.com/docs/resources/foundry/data-integration/github-oauth20-source-configuration.png)

4.   Once the configuration is saved, navigate to the source overview page. Select **Authorize** in the top banner labeled **Authorization required to start using this source** to start the OAuth flow. 

![Image 17: Github source ready for authorization.](https://www.palantir.com/docs/resources/foundry/data-integration/github-auhorization-required.png)

You can renew or revoke authorization from the right-side panel on the source overview page. 

![Image 18: Revoke OAuth 2.0 authorization for a Github source.](https://www.palantir.com/docs/resources/foundry/data-integration/github-revoke-oauth-authorization.png)

Starting, renewing, or revoking the OAuth flow requires the `Owner` role on the source by default. Users with only `Viewer` or `Editor` will see a permission denied error when selecting **Authorize**. If you need to grant these operations without granting full `Owner` permissions, define a custom role that includes the source administration operations.

## [](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#available-drivers)Available drivers

| Driver | Supports OAuth 2.0 Authentication |
| --- | --- |
| [Act! CRM](https://www.palantir.com/docs/foundry/available-connectors/act!-crm/) | FALSE |
| [Act-On](https://www.palantir.com/docs/foundry/available-connectors/act-on/) | TRUE |
| [ActiveCampaign](https://www.palantir.com/docs/foundry/available-connectors/activecampaign/) | FALSE |
| [Acumatica](https://www.palantir.com/docs/foundry/available-connectors/acumatica/) | FALSE |
| [Adobe Analytics](https://www.palantir.com/docs/foundry/available-connectors/adobe-analytics/) | TRUE |
| [Adobe Commerce](https://www.palantir.com/docs/foundry/available-connectors/adobe-commerce/) | FALSE |
| [ADP](https://www.palantir.com/docs/foundry/available-connectors/adp/) | TRUE |
| [Airtable](https://www.palantir.com/docs/foundry/available-connectors/airtable/) | TRUE |
| [AlloyDB](https://www.palantir.com/docs/foundry/available-connectors/alloydb/) | FALSE |
| [Amazon DynamoDB](https://www.palantir.com/docs/foundry/available-connectors/amazon-dynamodb/) | FALSE |
| [Amazon Marketplace](https://www.palantir.com/docs/foundry/available-connectors/amazon-marketplace/) | TRUE |
| [Apache CouchDB](https://www.palantir.com/docs/foundry/available-connectors/apache-couchdb/) | FALSE |
| [Apache HBase](https://www.palantir.com/docs/foundry/available-connectors/apache-hbase/) | FALSE |
| [Apache Hive](https://www.palantir.com/docs/foundry/available-connectors/apache-hive/) | FALSE |
| [Apache Phoenix](https://www.palantir.com/docs/foundry/available-connectors/apache-phoenix/) | FALSE |
| [Authorize.Net](https://www.palantir.com/docs/foundry/available-connectors/authorize-net/) | FALSE |
| [Avalara](https://www.palantir.com/docs/foundry/available-connectors/avalara/) | FALSE |
| [Azure Active Directory](https://www.palantir.com/docs/foundry/available-connectors/azure-active-directory/) | FALSE |
| [Azure Cosmos DB](https://www.palantir.com/docs/foundry/available-connectors/azure-cosmos-db/) | TRUE |
| [Azure Data Catalog](https://www.palantir.com/docs/foundry/available-connectors/azure-data-catalog/) | TRUE |
| [Azure DevOps](https://www.palantir.com/docs/foundry/available-connectors/azure-devops/) | TRUE |
| [Azure Synapse](https://www.palantir.com/docs/foundry/available-connectors/azure-synapse/) | TRUE |
| [Azure Table Storage](https://www.palantir.com/docs/foundry/available-connectors/azure-table-storage/) | TRUE |
| [Basecamp](https://www.palantir.com/docs/foundry/available-connectors/basecamp/) | TRUE |
| [BigCommerce](https://www.palantir.com/docs/foundry/available-connectors/bigcommerce/) | TRUE |
| [Blackbaud Raisers Edge NXT](https://www.palantir.com/docs/foundry/available-connectors/blackbaud-raisers-edge-nxt/) | TRUE |
| [Bugzilla](https://www.palantir.com/docs/foundry/available-connectors/bugzilla/) | FALSE |
| [Bullhorn CRM](https://www.palantir.com/docs/foundry/available-connectors/bullhorn-crm/) | TRUE |
| [Cassandra](https://www.palantir.com/docs/foundry/available-connectors/cassandra/) | FALSE |
| [Certinia](https://www.palantir.com/docs/foundry/available-connectors/certinia/) | TRUE |
| [Cloudant](https://www.palantir.com/docs/foundry/available-connectors/cloudant/) | TRUE |
| [CockroachDB](https://www.palantir.com/docs/foundry/available-connectors/cockroachdb/) | FALSE |
| [Confluence](https://www.palantir.com/docs/foundry/available-connectors/confluence/) | TRUE |
| [Couchbase](https://www.palantir.com/docs/foundry/available-connectors/couchbase/) | FALSE |
| [Databricks](https://www.palantir.com/docs/foundry/available-connectors/databricks/) | FALSE |
| [DocuSign](https://www.palantir.com/docs/foundry/available-connectors/docusign/) | TRUE |
| [Domino](https://www.palantir.com/docs/foundry/available-connectors/domino/) | TRUE |
| [eBay](https://www.palantir.com/docs/foundry/available-connectors/ebay/) | TRUE |
| [eBay Analytics](https://www.palantir.com/docs/foundry/available-connectors/ebay-analytics/) | TRUE |
| [EnterpriseDB](https://www.palantir.com/docs/foundry/available-connectors/enterprisedb/) | FALSE |
| [Epicor Kinetic](https://www.palantir.com/docs/foundry/available-connectors/epicor-kinetic/) | TRUE |
| [Exact Online](https://www.palantir.com/docs/foundry/available-connectors/exact-online/) | TRUE |
| [Facebook](https://www.palantir.com/docs/foundry/available-connectors/facebook/) | TRUE |
| [Facebook Ads](https://www.palantir.com/docs/foundry/available-connectors/facebook-ads/) | TRUE |
| [FreshBooks](https://www.palantir.com/docs/foundry/available-connectors/freshbooks/) | TRUE |
| [Freshdesk](https://www.palantir.com/docs/foundry/available-connectors/freshdesk/) | FALSE |
| [GitHub](https://www.palantir.com/docs/foundry/available-connectors/github/) | TRUE |
| [Gmail](https://www.palantir.com/docs/foundry/available-connectors/gmail/) | TRUE |
| Google Ad Manager | FALSE |
| Google Ads | FALSE |
| Google Analytics | FALSE |
| Google Calendar | FALSE |
| [Google Campaign Manager](https://www.palantir.com/docs/foundry/available-connectors/google-campaign-manager/) | TRUE |
| [Google Contacts](https://www.palantir.com/docs/foundry/available-connectors/google-contacts/) | TRUE |
| [Google Data Catalog](https://www.palantir.com/docs/foundry/available-connectors/google-data-catalog/) | TRUE |
| [Google Directory](https://www.palantir.com/docs/foundry/available-connectors/google-directory/) | TRUE |
| [Google Drive](https://www.palantir.com/docs/foundry/available-connectors/google-drive/) | TRUE |
| [Google Search](https://www.palantir.com/docs/foundry/available-connectors/google-search/) | FALSE |
| [Google Spanner](https://www.palantir.com/docs/foundry/available-connectors/google-spanner/) | TRUE |
| [GraphQL](https://www.palantir.com/docs/foundry/available-connectors/graphql/) | TRUE |
| [Greenplum](https://www.palantir.com/docs/foundry/available-connectors/greenplum/) | FALSE |
| [Highrise](https://www.palantir.com/docs/foundry/available-connectors/highrise/) | TRUE |
| [IBM Cloud Data Engine](https://www.palantir.com/docs/foundry/available-connectors/ibm-cloud-data-engine/) | TRUE |
| [IBM Cloud Object Storage](https://www.palantir.com/docs/foundry/available-connectors/ibm-cloud-object-storage/) | TRUE |
| [Instagram](https://www.palantir.com/docs/foundry/available-connectors/instagram/) | TRUE |
| [Jira Service Management](https://www.palantir.com/docs/foundry/available-connectors/jira-service-management/) | TRUE |
| [Kintone](https://www.palantir.com/docs/foundry/available-connectors/kintone/) | FALSE |
| [LDAP](https://www.palantir.com/docs/foundry/available-connectors/ldap/) | FALSE |
| [LinkedIn](https://www.palantir.com/docs/foundry/available-connectors/linkedin/) | TRUE |
| [LinkedIn Marketing Solutions](https://www.palantir.com/docs/foundry/available-connectors/linkedin-marketing-solutions/) | TRUE |
| [Mailchimp](https://www.palantir.com/docs/foundry/available-connectors/mailchimp/) | TRUE |
| [Marketo](https://www.palantir.com/docs/foundry/available-connectors/marketo/) | TRUE |
| [MarkLogic](https://www.palantir.com/docs/foundry/available-connectors/marklogic/) | FALSE |
| [Microsoft Access](https://www.palantir.com/docs/foundry/available-connectors/microsoft-access/) | FALSE |
| [Microsoft Ads](https://www.palantir.com/docs/foundry/available-connectors/microsoft-ads/) | TRUE |
| [Microsoft Bing](https://www.palantir.com/docs/foundry/available-connectors/microsoft-bing/) | FALSE |
| [Microsoft Dataverse](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dataverse/) | FALSE |
| [Microsoft Dynamics 365](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365/) | TRUE |
| [Microsoft Dynamics 365 Business Central](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365-business-central/) | TRUE |
| [Microsoft Dynamics CRM](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-crm/) | TRUE |
| [Microsoft Dynamics GP](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-gp/) | FALSE |
| [Microsoft Dynamics NAV](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-nav/) | FALSE |
| [Microsoft Excel](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel/) | TRUE |
| [Microsoft Excel Online](https://www.palantir.com/docs/foundry/available-connectors/microsoft-excel-online/) | TRUE |
| [Microsoft Exchange](https://www.palantir.com/docs/foundry/available-connectors/microsoft-exchange/) | TRUE |
| [Microsoft Office 365](https://www.palantir.com/docs/foundry/available-connectors/microsoft-office-365/) | TRUE |
| [Microsoft OneDrive](https://www.palantir.com/docs/foundry/available-connectors/microsoft-onedrive/) | TRUE |
| [Microsoft OneNote](https://www.palantir.com/docs/foundry/available-connectors/microsoft-onenote/) | TRUE |
| [Microsoft Planner](https://www.palantir.com/docs/foundry/available-connectors/microsoft-planner/) | TRUE |
| [Microsoft Power BI® XMLA](https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/) | TRUE |
| [Microsoft Project](https://www.palantir.com/docs/foundry/available-connectors/microsoft-project/) | TRUE |
| [Microsoft SharePoint](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sharepoint/) | TRUE |
| [Microsoft SharePoint Excel](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sharepoint-excel/) | FALSE |
| [Microsoft SQL Server](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/) | FALSE |
| [Microsoft SQL Server Analysis Services](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server-analysis-services/) | FALSE |
| [Microsoft Teams](https://www.palantir.com/docs/foundry/available-connectors/microsoft-teams/) | TRUE |
| [Monday](https://www.palantir.com/docs/foundry/available-connectors/monday/) | TRUE |
| [MYOB](https://www.palantir.com/docs/foundry/available-connectors/myob/) | TRUE |
| [OData](https://www.palantir.com/docs/foundry/available-connectors/odata/) | TRUE |
| [Odoo](https://www.palantir.com/docs/foundry/available-connectors/odoo/) | FALSE |
| [Oracle](https://www.palantir.com/docs/foundry/available-connectors/oracle/) | FALSE |
| [Oracle Eloqua](https://www.palantir.com/docs/foundry/available-connectors/oracle-eloqua/) | TRUE |
| [Oracle Fusion Cloud Financials](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-financials/) | FALSE |
| [Oracle Fusion Cloud HCM](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-hcm/) | FALSE |
| [Oracle Fusion Cloud SCM](https://www.palantir.com/docs/foundry/available-connectors/oracle-fusion-cloud-scm/) | FALSE |
| [Oracle Sales](https://www.palantir.com/docs/foundry/available-connectors/oracle-sales/) | FALSE |
| [Oracle Service Cloud](https://www.palantir.com/docs/foundry/available-connectors/oracle-service-cloud/) | FALSE |
| [Outreach](https://www.palantir.com/docs/foundry/available-connectors/outreach/) | TRUE |
| [Paylocity](https://www.palantir.com/docs/foundry/available-connectors/paylocity/) | TRUE |
| [PayPal](https://www.palantir.com/docs/foundry/available-connectors/paypal/) | TRUE |
| [Pinterest](https://www.palantir.com/docs/foundry/available-connectors/pinterest/) | TRUE |
| [Pipedrive](https://www.palantir.com/docs/foundry/available-connectors/pipedrive/) | TRUE |
| [Presto](https://www.palantir.com/docs/foundry/available-connectors/presto/) | FALSE |
| [Quickbase](https://www.palantir.com/docs/foundry/available-connectors/quickbase/) | FALSE |
| [QuickBooks Desktop](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-desktop/) | FALSE |
| [QuickBooks Online](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-online/) | TRUE |
| [QuickBooks POS](https://www.palantir.com/docs/foundry/available-connectors/quickbooks-pos/) | FALSE |
| [Raisers Edge NXT](https://www.palantir.com/docs/foundry/available-connectors/raisers-edge-nxt/) | TRUE |
| [Reckon](https://www.palantir.com/docs/foundry/available-connectors/reckon/) | FALSE |
| [Reckon Accounts Hosted](https://www.palantir.com/docs/foundry/available-connectors/reckon-accounts-hosted/) | TRUE |
| [Redis](https://www.palantir.com/docs/foundry/available-connectors/redis/) | FALSE |
| Redshift | FALSE |
| [RSS](https://www.palantir.com/docs/foundry/available-connectors/rss/) | FALSE |
| [Sage 200](https://www.palantir.com/docs/foundry/available-connectors/sage-200/) | TRUE |
| [Sage 300](https://www.palantir.com/docs/foundry/available-connectors/sage-300/) | FALSE |
| [Sage 50 UK](https://www.palantir.com/docs/foundry/available-connectors/sage-50-uk/) | FALSE |
| [Sage Business Cloud Accounting](https://www.palantir.com/docs/foundry/available-connectors/sage-business-cloud-accounting/) | TRUE |
| [Salesforce Marketing Cloud](https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud/) | TRUE |
| [Salesforce Marketing Cloud Account Engagement](https://www.palantir.com/docs/foundry/available-connectors/salesforce-marketing-cloud-account-engagement/) | TRUE |
| [Salesloft](https://www.palantir.com/docs/foundry/available-connectors/salesloft/) | TRUE |
| [SAP Ariba Procurement](https://www.palantir.com/docs/foundry/available-connectors/sap-ariba-procurement/) | FALSE |
| [SAP Business One](https://www.palantir.com/docs/foundry/available-connectors/sap-business-one/) | FALSE |
| [SAP BusinessObjects BI](https://www.palantir.com/docs/foundry/available-connectors/sap-businessobjects-bi/) | FALSE |
| [SAP ByDesign](https://www.palantir.com/docs/foundry/available-connectors/sap-bydesign/) | FALSE |
| [SAP Cloud for Customer](https://www.palantir.com/docs/foundry/available-connectors/sap-cloud-for-customer/) | TRUE |
| [SAP Concur](https://www.palantir.com/docs/foundry/available-connectors/sap-concur/) | TRUE |
| [SAP Fieldglass](https://www.palantir.com/docs/foundry/available-connectors/sap-fieldglass/) | TRUE |
| [SAP HANA XSA](https://www.palantir.com/docs/foundry/available-connectors/sap-hana-xsa/) | TRUE |
| [SAP SuccessFactors](https://www.palantir.com/docs/foundry/available-connectors/sap-successfactors/) | TRUE |
| [SAS Data Sets](https://www.palantir.com/docs/foundry/available-connectors/sas-data-sets/) | TRUE |
| [SAS Xpt](https://www.palantir.com/docs/foundry/available-connectors/sas-xpt/) | TRUE |
| [SendGrid](https://www.palantir.com/docs/foundry/available-connectors/sendgrid/) | FALSE |
| ServiceNow | FALSE |
| [ShipStation](https://www.palantir.com/docs/foundry/available-connectors/shipstation/) | FALSE |
| [Shopify](https://www.palantir.com/docs/foundry/available-connectors/shopify/) | TRUE |
| [SingleStore](https://www.palantir.com/docs/foundry/available-connectors/singlestore/) | TRUE |
| [Slack](https://www.palantir.com/docs/foundry/available-connectors/slack/) | FALSE |
| [Smartsheet](https://www.palantir.com/docs/foundry/available-connectors/smartsheet/) | TRUE |
| [Snapchat Ads](https://www.palantir.com/docs/foundry/available-connectors/snapchat-ads/) | TRUE |
| [Snowflake](https://www.palantir.com/docs/foundry/available-connectors/snowflake/) | FALSE |
| [Spark SQL](https://www.palantir.com/docs/foundry/available-connectors/spark-sql/) | FALSE |
| [Splunk](https://www.palantir.com/docs/foundry/available-connectors/splunk/) | FALSE |
| [Square](https://www.palantir.com/docs/foundry/available-connectors/square/) | TRUE |
| [Streak](https://www.palantir.com/docs/foundry/available-connectors/streak/) | FALSE |
| [Stripe](https://www.palantir.com/docs/foundry/available-connectors/stripe/) | TRUE |
| [SugarCRM](https://www.palantir.com/docs/foundry/available-connectors/sugarcrm/) | TRUE |
| [SuiteCRM](https://www.palantir.com/docs/foundry/available-connectors/suitecrm/) | TRUE |
| [SurveyMonkey](https://www.palantir.com/docs/foundry/available-connectors/surveymonkey/) | TRUE |
| [SybaseIQ](https://www.palantir.com/docs/foundry/available-connectors/sybaseiq/) | FALSE |
| [Tableau CRM Analytics](https://www.palantir.com/docs/foundry/available-connectors/tableau-crm-analytics/) | TRUE |
| [Tally](https://www.palantir.com/docs/foundry/available-connectors/tally/) | FALSE |
| [TaxJar](https://www.palantir.com/docs/foundry/available-connectors/taxjar/) | FALSE |
| [Trello](https://www.palantir.com/docs/foundry/available-connectors/trello/) | TRUE |
| [TSheets](https://www.palantir.com/docs/foundry/available-connectors/tsheets/) | TRUE |
| [Twilio](https://www.palantir.com/docs/foundry/available-connectors/twilio/) | FALSE |
| [Twitter Ads](https://www.palantir.com/docs/foundry/available-connectors/twitter-ads/) | TRUE |
| [Veeva Vault](https://www.palantir.com/docs/foundry/available-connectors/veeva-vault/) | TRUE |
| [Wave Financial](https://www.palantir.com/docs/foundry/available-connectors/wave-financial/) | TRUE |
| [WooCommerce](https://www.palantir.com/docs/foundry/available-connectors/woocommerce/) | TRUE |
| [WordPress](https://www.palantir.com/docs/foundry/available-connectors/wordpress/) | TRUE |
| Workday | FALSE |
| [xBase](https://www.palantir.com/docs/foundry/available-connectors/xbase/) | FALSE |
| [Xero](https://www.palantir.com/docs/foundry/available-connectors/xero/) | TRUE |
| [Xero WorkflowMax](https://www.palantir.com/docs/foundry/available-connectors/xero-workflowmax/) | TRUE |
| [YouTube Analytics](https://www.palantir.com/docs/foundry/available-connectors/youtube-analytics/) | TRUE |
| [Zendesk](https://www.palantir.com/docs/foundry/available-connectors/zendesk/) | TRUE |
| [Zoho Books](https://www.palantir.com/docs/foundry/available-connectors/zoho-books/) | TRUE |
| [Zoho Creator](https://www.palantir.com/docs/foundry/available-connectors/zoho-creator/) | TRUE |
| [Zoho CRM](https://www.palantir.com/docs/foundry/available-connectors/zoho-crm/) | TRUE |
| [Zoho Inventory](https://www.palantir.com/docs/foundry/available-connectors/zoho-inventory/) | TRUE |
| [Zoho Projects](https://www.palantir.com/docs/foundry/available-connectors/zoho-projects/) | TRUE |
| [Zuora](https://www.palantir.com/docs/foundry/available-connectors/zuora/) | TRUE |

[← PREVIOUS Available connectors / Other source types](https://www.palantir.com/docs/foundry/available-connectors/other-source-types/)

[NEXT SAP / Overview →](https://www.palantir.com/docs/foundry/sap/overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

