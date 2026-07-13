Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/snowflake/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#snowflake)Snowflake

Connect Foundry to Snowflake to read and sync data between Snowflake and Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Exploration | 🟢 Generally available |
| Bulk import | 🟢 Generally available |
| Incremental | 🟢 Generally available |
| [Iceberg syncs](https://www.palantir.com/docs/foundry/iceberg/syncs/) | 🟡 Beta |
| Virtual tables | 🟢 Generally available |
| Compute pushdown | 🟢 Generally available |
| Export tasks | 🟡 Sunset |
| [Table Exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#table-exports) | 🟢 Generally available |

## [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#setup)Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper right corner of the screen.
2.   Select **Snowflake** from the available connector types.
3.   Follow the additional configuration prompts to continue the setup of your connector using the information in the sections below.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#connection-details)Connection details

Snowflake accounts with underscores (`_`) **must** replace underscores with dashes (`-`). For example, `my_account_prod` needs to become `my-account-prod`. Failure to do so will cause networking issues.

| Option | Required? | Description |
| --- | --- | --- |
| `Account identifier` | Yes | This is the identifier that precedes ".snowflakecomputing.com". See Snowflake's [official documentation ↗](https://docs.snowflake.com/user-guide/admin-account-identifier) for more details. |
| `Roles` | No | This is the default role to be used by the connection in case the credentials provided have access to multiple roles. |
| `Database` | Yes | Specify a default database to use once connected. |
| `Schema` | No | Option to specify a default schema to use once connected. If not specified, all schemas will be available that are in-scope of the credentials. |
| `Warehouse` | No* | The virtual warehouse to use once connected. In the case of registered [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/), this will be used for any source-side compute. |
| `Credentials` | Yes | Refer to the [authentication](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#authentication) section below for more details. |
| `Network Connectivity` | Yes | Refer to the [networking](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#networking) section below for more details. |

_* Warehouse details are optional for syncing [Foundry datasets](https://www.palantir.com/docs/foundry/data-integration/datasets/), but required for registering [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/)._

### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#authentication)Authentication

You can authenticate with Snowflake in the following ways:

| Method | Description | Documentation |
| --- | --- | --- |
| Username and password [Legacy] | Authenticate with a user account using a username and password. Basic authentication is legacy and not recommended in production. | [Working with passwords ↗](https://docs.snowflake.com/en/user-guide/password-authentication) |
| Key-pair authentication | Provide a username and private key. Note that only unencrypted private keys are supported. Foundry will encrypt and store the private key securely. | [Key-pair authentication and key-pair rotation ↗](https://docs.snowflake.com/user-guide/key-pair-auth#configuring-key-pair-authentication) |
| External OAuth (OIDC) [Recommended] | Authenticate as a user using workload identity federation. Workload identity federation allows workloads running in Foundry to access Snowflake without the need for Snowflake secrets. Follow the displayed source system configuration instructions to set up external OAuth. | [Workload identity federation ↗](https://docs.snowflake.com/en/user-guide/workload-identity-federation) Refer to our [OIDC documentation](https://www.palantir.com/docs/foundry/data-connection/oidc/) for an overview of how OpenID Connect (OIDC) is supported in Foundry. |
| Programmatic access token | Authenticate as a user using a programmatic access token (PAT). | [Programmatic access tokens ↗](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens) |

For all authentication options, ensure that the provided user and role has usage privileges on the target database(s) and schema(s), as well as select privileges on the target table(s).

When registering [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/), the user and their role should also have usage privileges on the warehouse.

Snowflake is rolling out changes to require multi-factor authentication (MFA) for human users that use passwords, and to disallow passwords for all service users. As such, **Username and password** will no longer be a suitable authentication mechanism. Refer to the [official Snowflake documentation ↗](https://docs.snowflake.com/en/user-guide/security-mfa-rollout) for additional information and guidance on migrating.

## [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#networking)Networking

For connections [running on a Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker), the appropriate [egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/) must be added when setting up the source in the [Data Connection application](https://www.palantir.com/docs/foundry/data-connection/overview/).

To identify the hostnames and port numbers of your Snowflake account to be allowlisted, you can run the following command in your Snowflake console. Ensure that at least the entries for `SNOWFLAKE_DEPLOYMENT` and `STAGE` are added as egress policies in Foundry.

Copied!

```sql
1SELECT t.VALUE:type::VARCHAR as type,
2       t.VALUE:host::VARCHAR as host,
3       t.VALUE:port as port
4FROM TABLE(FLATTEN(input => PARSE_JSON(SYSTEM$ALLOWLIST()))) AS t;
```

See Snowflake's [official documentation ↗](https://docs.snowflake.com/sql-reference/functions/system_allowlist) for additional information on identifying hostnames and port numbers to allowlist.

Connections from Foundry to Snowflake normally come from the default public gateway IPs for your environment. However, traffic _within the same cloud provider_ (for example, AWS-AWS or Azure-Azure) may use different routing, and require establishing a connection via PrivateLink. See below for the additional setup required per cloud provider, or contact your Palantir representative for additional guidance.

### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#snowflake-instance-hosted-on-s3)Snowflake instance hosted on S3

If your Snowflake instance is configured to route internal S3 stage traffic through a [VPCE ↗](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws#aws-configuration), the Snowflake JDBC driver must be manually configured to **not** use the custom VPCE domain. Otherwise, the driver will be routed to the custom VPCE domain (which is inaccessible from Foundry's VPC) and will fail connections to URLs with the format of `<bucketname>.bucket.vpce-<vpceid>.s3.<region>.vpce.amazonaws.com`.

You can manually configure this by adding a JDBC connection property in the **Connection details** of your instance, with a key of `S3_STAGE_VPCE_DNS_NAME` and an empty value field (the equivalent of setting it to `null`). The S3 stage traffic will then be routed through the AWS S3 Gateway Endpoint (`<bucketname>.bucket.s3.<region>.vpce.amazonaws.com`) which maintains private connectivity so traffic will not be routed through the public internet.

Review our [PrivateLink egress documentation ↗](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/) for more information.

For egress policies that depend on an S3 bucket in the same region as your Foundry instance, ensure you have completed the additional configuration steps detailed in our [Amazon S3 bucket policy documentation](https://www.palantir.com/docs/foundry/administration/configure-egress/#amazon-s3-bucket-policies) for the affected bucket(s).

### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#snowflake-instance-hosted-on-azure)Snowflake instance hosted on Azure

The Snowflake JDBC driver used for the Foundry Snowflake connector may attempt to connect directly to an underlying “internal stage” storage bucket when fetching data. For Snowflake hosted on Azure, because [Azure-hosted Foundry enrollments route traffic over Azure service endpoints](https://www.palantir.com/docs/foundry/administration/configure-egress/#microsoft-azure-storage-policies), network connectivity from Foundry to the underlying stage buckets must be explicitly allow-listed by following the instructions below.

#### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#gather-the-required-information-about-your-snowflake-warehouse)Gather the required information about your Snowflake warehouse

You will need the following information about your Azure-hosted Snowflake warehouse to establish network connectivity to Foundry:

*   Full list of [system allowlist domains](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#system-allowlist-domains).
*   Your [Azure storage account identifier](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#azure-storage-account-identifier), obtained from Snowflake.

##### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#system-allowlist-domains)System allowlist domains

Use the `SYSTEM$ALLOWLIST` command to get the full list of domains that may be required to successfully connect.

*   _Note: This is the same command than used above to define egress policies, and is explained in the network panel callout in Data Connection._
*   This list will include the domain of an Azure storage bucket used as the stage for your Snowflake warehouse.

##### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#azure-storage-account-identifier)Azure storage account identifier

For the Azure storage bucket returned from the `SYSTEM$ALLOWLIST` command, you will also need to retrieve the storage account identifier.

*   If you are using Snowflake Standard Edition or Enterprise Edition, you will need to file a ticket with Snowflake support to request the storage account identifier.
*   If you are using Snowflake [Business Critical Edition ↗](https://docs.snowflake.com/en/user-guide/intro-editions#business-critical-edition), you can retrieve the storage account identifier with the following steps: 
    *   Set the [`ENABLE_INTERNAL_STAGES_PRIVATELINK` ↗](https://docs.snowflake.com/en/sql-reference/parameters#label-enable-internal-stages-privatelink) parameter to `TRUE` for the account.
    *   Then, call the [`SYSTEM$GET_PRIVATELINK_CONFIG()` ↗](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function, which returns a field called `privatelink-internal-stage` containing the Azure storage account resource identifier. 
        *   _Note that even if you are not connecting over a PrivateLink, you still need to retrieve and provide the storage account resource identifier._

A full Azure Storage account resource identifier will be in the following format:

`/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{storageAccountName}`

More information on how to find an Azure Storage account resource ID directly in the Azure console can be found in the [Azure documentation ↗](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-get-info?tabs=portal#get-the-resource-id-for-a-storage-account). Restricting cross-account network traffic using VNET rules and the storage account identifier is in line with [Microsoft’s published best practices ↗](https://learn.microsoft.com/en-us/azure/well-architected/service-guides/network-connectivity/operational-excellence#design-considerations), and should be used for all connections to Azure-hosted Snowflake warehouses from within Azure compute instances.

#### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#allow-outbound-traffic-from-foundry-to-the-azure-storage-account-associated-with-your-snowflake-warehouse)Allow outbound traffic from Foundry to the Azure storage account associated with your Snowflake warehouse

Now that you have gathered the required information about your Snowflake warehouse, you can create the required policies needed to enable Foundry access to your Snowflake data.

1.   Create a [standard egress policy](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#networking) for the Azure storage internal stage, and attach it to your Snowflake source.

    *   Note that you should add policies for everything returned from the `SYSTEM$ALLOWLIST` command, and not just the storage bucket domain.

2.   Create an [Azure storage policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#add-an-azure-storage-policy), pasting in the storage account resource identifier.

Navigate back to your Snowflake source in Data Connection and confirm you can explore the source and run syncs.

### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#iceberg-tables-virtual-tables-only)Iceberg tables (virtual tables only)

The [Virtual tables](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#iceberg-tables) section of this documentation provides details on integrating Iceberg tables registered in Snowflake Horizon Catalog. This functionality requires network connectivity to the external volume where the Iceberg table is stored. You must create [network egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/) for each external volume, as Foundry reads and writes to the storage location directly rather than querying the table using a Snowflake compute warehouse.

Refer to the [official Snowflake documentation ↗](https://docs.snowflake.com/en/user-guide/tables-iceberg-configure-external-volume/) for more information on external volumes and how to determine table storage locations.

Configuring egress policies for an external volume enables network traffic to egress from Foundry to that storage location. Network controls may vary between cloud providers, so you should ensure that any network controls on the storage location permit network traffic from Foundry. [Learn more about identifying the IP addresses where Foundry traffic originates.](https://www.palantir.com/docs/foundry/administration/configure-egress/#which-ips-do-connections-from-foundry-come-from). 

 Additionally, refer to the other sections of this [Networking](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#networking) documentation to ensure you correctly set up connections to external volumes hosted in the same cloud region as your Foundry instance.

## [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#virtual-tables)Virtual tables

This section provides additional details around using [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/) with a Snowflake source. This section is not applicable when syncing to Foundry datasets.

[](https://www.palantir.com/docs/foundry/available-connectors/snowflake/)

The Snowflake connector now offers enhanced functionality when using virtual tables to access Iceberg tables registered in Horizon Catalog. Foundry uses the Iceberg REST APIs exposed in Horizon Catalog to access tables as well as read and write data in the underlying storage locations, which are configured as external volumes in Snowflake. Additionally, Foundry uses Horizon Catalog credential vending to ensure secure access to cloud object storage. This can also improve the performance of reads and writes against these tables.

The connector exposes Iceberg functionality automatically if you:

1.   Configure network egress policies that allow connectivity from Foundry to the external volume that stores the table.
2.   Configure credentials on the source that have permission to obtain vended credentials from Horizon Catalog.

Foundry uses Iceberg clients to establish connections to read or write tables to the storage location directly _without_ using Snowflake compute. However, Foundry still uses the warehouse configured on the source for certain metadata queries, such as determining the type of table being accessed.

Refer to the [official Snowflake documentation ↗](https://docs.snowflake.com/en/user-guide/tables-iceberg-query-using-external-query-engine-snowflake-horizon) for more information on querying Iceberg tables with an external engine through Snowflake Horizon Catalog. Writes to Horizon Catalog are currently a _private preview_ Snowflake feature. Refer to the [Networking](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#networking) section of this documentation for details on enabling network access to external volumes.

Foundry treats Iceberg tables like regular Snowflake tables if any of the above requirements are not met. Connections to Snowflake are made using the same mechanism as for other Snowflake data (such as tables, views, or materialized views) and rely on a Snowflake compute warehouse to read and write from the table.

The table below highlights the virtual table capabilities that are supported for Snowflake.

| Capability | Status |
| --- | --- |
| Bulk registration | 🟢 Generally available |
| Automatic registration | 🟢 Generally available |
| Table inputs | 🟢 Generally available: tables, views, materialized views in [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/), [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/) |
| Table outputs | 🟢 Generally available: tables in [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/), [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/) |
| Incremental pipelines | 🟢 Generally available: `APPEND` only, tables only [[1]](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#snowflake-incremental) |
| Compute pushdown | 🟢 Generally available: [Python transforms](https://www.palantir.com/docs/foundry/transforms-python/tables-snowflake/), [Pipeline Builder](https://www.palantir.com/docs/foundry/building-pipelines/create-external-pipeline-pb/) |

Consult the [virtual tables documentation](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/#supported-foundry-workflows) for details on the supported Foundry workflows where Snowflake tables can be used as inputs or outputs.

[1] Incremental pipelines are supported for tables only. Views are not supported for incremental pipelines because they are not versioned. To enable incremental support for pipelines backed by Snowflake virtual tables, ensure that [Change Tracking ↗](https://docs.snowflake.com/user-guide/streams-manage#enabling-change-tracking-on-views-and-underlying-tables) and [Time Travel ↗](https://docs.snowflake.com/en/user-guide/data-time-travel#enabling-and-disabling-time-travel) are enabled for the appropriate retention period. This functionality relies on [CHANGES ↗](https://docs.snowflake.com/en/sql-reference/constructs/changes) The `current` and `added` read modes in [Python Transforms](https://www.palantir.com/docs/foundry/transforms-python/incremental-usage/#incrementaltransforminput) are supported. These will expose the relevant rows of the change feed based on the `METADATA$ACTION` column. The `METADATA$ACTION`, `METADATA$ISUPDATE`, `METADATA$ROW_ID` columns will be made available in Python Transforms.

### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#privileges-on-source-credentials)Privileges on source credentials

For full feature support, you should provide the following privileges to the [credentials](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#authentication) configured for the source connection. You should apply these on either the database, schema, or table depending on the desired inheritance model.

| Category | Privilege | Notes |
| --- | --- | --- |
| Prerequisite | `USAGE` | Must be granted on the Snowflake databases and schemas that will be used in Foundry. |
| Read | `SELECT` | Required to read Snowflake tables when using syncs or virtual table inputs. |
| Edit | `DELETE`, `INSERT`, `TRUNCATE`, `UPDATE` | Required to modify Snowflake tables when using virtual table outputs. |
| Create | `CREATE SCHEMA`, `CREATE TABLE` | Required to create Snowflake tables when using virtual table outputs. |

When using Iceberg tables, `USAGE` privilege is required on the external volume where the table is stored.

Additionally, the credentials provided must have usage privileges on the warehouse provided in the source configuration.

Refer to the [official Snowflake documentation ↗](https://docs.snowflake.com/en/user-guide/security-access-control-privileges) for more information on access control privileges in Snowflake.

### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#source-configuration-requirements)Source configuration requirements

When using [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/), remember the following source configuration requirements:

*   You must use a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) source. Virtual tables do not support use of [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) connections.
*   Ensure that bi-directional connectivity and allowlisting is established as described in the [Networking section of this documentation](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#networking).
*   If using virtual tables in Code Repositories, refer to the [Virtual Tables documentation](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/#virtual-tables-in-code-repositories) for details of additional source configuration required.
*   You must specify a warehouse in the connection details.
*   The credentials provided must have usage privileges on the warehouse.

See the [Connection Details](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#connection-details) section above for more details.

## [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#iceberg-syncs-beta)Iceberg syncs [Beta]

Beta

Syncs into Iceberg tables are in the [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development.

You can sync data from this source directly into Foundry [Iceberg tables](https://www.palantir.com/docs/foundry/iceberg/overview/). Iceberg syncs support both non-incremental and incremental batch ingestion, along with multiple write modes, and run on the [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) runtime. For configuration details and supported write modes, review the [Iceberg syncs documentation](https://www.palantir.com/docs/foundry/iceberg/syncs/).

Iceberg syncs write data from a Snowflake source into Foundry-managed Iceberg tables. This is distinct from the [virtual tables](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#virtual-tables) functionality, which registers Iceberg tables stored in Snowflake Horizon Catalog for use in Foundry without copying the data.

## [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#compute-pushdown)Compute pushdown

Foundry offers the ability to push down compute to Snowflake when using virtual tables. Virtual table inputs leverage the [Snowflake Spark connector ↗](https://docs.snowflake.com/en/user-guide/spark-connector) which has built-in support for predicate pushdown.

When using Snowflake virtual tables registered to the same source as inputs and outputs to a pipeline, it is possible to fully federate compute to Snowflake. To push down compute to Snowflake, review the [Python documentation](https://www.palantir.com/docs/foundry/transforms-python/tables-snowflake/) for details. To push down compute to Snowflake in Pipeline Builder, review the [External pipelines documentation](https://www.palantir.com/docs/foundry/building-pipelines/create-external-pipeline-pb/).

## [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#use-snowflake-sources-in-code)Use Snowflake sources in code

You can use [pro-code alternatives](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#use-in-code) to connect to Snowflake sources for more complex scenarios.

The examples below demonstrate how to connect to a Snowflake source using the [Snowflake Connector for Python ↗](https://docs.snowflake.com/developer-guide/python-connector/python-connector) (`snowflake-connector-python`) in an [external transform](https://www.palantir.com/docs/foundry/data-connection/external-transforms/). Authentication is handled via [OIDC](https://www.palantir.com/docs/foundry/data-connection/oidc/), which provides short-lived OAuth tokens without the need for static Snowflake credentials.

### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#read-from-snowflake-with-an-external-transform)Read from Snowflake with an external transform

This example reads data from a Snowflake table using OIDC-based OAuth credentials.

Copied!

```python
1import polars as pl
2from transforms.api import transform, Output, LightweightOutput
3from transforms.external.systems import ResolvedSource, external_systems, Source
4import snowflake.connector
5
6
7@external_systems(
8    snowflake_source=Source("<source_rid>")
9)
10@transform.using(
11    output=Output("<output_dataset_rid>")
12)
13def read_from_snowflake(output: LightweightOutput, snowflake_source: ResolvedSource):
14    conn = snowflake.connector.connect(
15        authenticator="oauth",
16        token=snowflake_source.get_session_credentials().get().access_token,
17        account="<account_identifier>",
18        warehouse="<warehouse_name>",
19        database="<database_name>",
20    )
21
22    cursor = conn.cursor()
23    try:
24        cursor.execute("SELECT * FROM my_table LIMIT 100")
25        columns = [col[0] for col in cursor.description]
26        rows = cursor.fetchall()
27    finally:
28        cursor.close()
29        conn.close()
30
31    df = pl.DataFrame(rows, schema=columns)
32    output.write_table(df)
```

### [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#write-to-snowflake-with-an-external-transform)Write to Snowflake with an external transform

This example exports data from a Foundry dataset to a Snowflake table.

Copied!

```python
1import polars as pl
2from transforms.api import transform, Input, Output, LightweightOutput
3from transforms.external.systems import ResolvedSource, external_systems, Source
4import snowflake.connector
5
6
7@external_systems(
8    snowflake_source=Source("<source_rid>")
9)
10@transform.using(
11    output=Output("<output_dataset_rid>"),
12    source_data=Input("<input_dataset_rid>"),
13)
14def write_to_snowflake(output: LightweightOutput, snowflake_source: ResolvedSource, source_data):
15    conn = snowflake.connector.connect(
16        authenticator="oauth",
17        token=snowflake_source.get_session_credentials().get().access_token,
18        account="<account_identifier>",
19        warehouse="<warehouse_name>",
20        database="<database_name>",
21    )
22
23    cursor = conn.cursor()
24    try:
25        df = source_data.dataframe()
26        for row in df.iter_rows(named=True):
27            cursor.execute(
28                "INSERT INTO my_table (col1, col2) VALUES (%s, %s)",
29                (row["col1"], row["col2"]),
30            )
31    finally:
32        cursor.close()
33        conn.close()
34
35    output.write_table(df)
```

For more details on using session credentials with OIDC-enabled sources, review the [Sources in Python](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#session-credentials) documentation.

## [](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#data-model)Data model

Note that columns of type [`array` ↗](https://docs.snowflake.com/en/sql-reference/data-types-semistructured#array), [`object` ↗](https://docs.snowflake.com/sql-reference/data-types-semistructured#object), and [`variant` ↗](https://docs.snowflake.com/sql-reference/data-types-semistructured#variant) will be parsed by Foundry as type `string`. This is due to the source's variable typing.

For example, the Snowflake array `[ 1, 2, 3 ]` would be interpreted by Foundry as the string `"[1,2,3]"`.

See Snowflake's [official documentation ↗](https://docs.snowflake.com/user-guide/spark-connector-use#from-snowflake-to-spark-sql)for more details.

[← PREVIOUS Snapchat Ads](https://www.palantir.com/docs/foundry/available-connectors/snapchat-ads/)

[NEXT Spark SQL →](https://www.palantir.com/docs/foundry/available-connectors/spark-sql/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

