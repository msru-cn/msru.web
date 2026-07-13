Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#microsoft-sql-server)Microsoft SQL Server

Connect Foundry to Microsoft SQL Server to read and sync data between SQL Server databases and Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Exploration | 🟢 Generally available |
| Batch syncs | 🟢 Generally available |
| Incremental | 🟢 Generally available |
| [Iceberg syncs](https://www.palantir.com/docs/foundry/iceberg/syncs/) | 🟡 Beta |
| Change data capture syncs | 🟢 Generally available |
| [Table Exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#table-exports) | 🟢 Generally available |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#setup)Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper right corner of the screen.
2.   Select **MS SQL Server** from the available connector types.
3.   Follow the additional configuration prompts to continue the setup of your connector using the information in the sections below.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#authentication)Authentication

You can authenticate with SQL Server in the following ways:

1.   **Username and password:** Provide a username and password. We recommend the use of service credentials rather than individual user credentials.
2.   **Active Directory Msi***: This option will use the `authentication=ActiveDirectoryMSI` JDBC setting. An `msiClientId` may optionally be provided.
3.   **Active Directory Password***: This option will use the `authentication=ActiveDirectoryPassword` JDBC setting. A username and password for an Active Directory user must be provided to use this setting.
4.   **Active Directory Service Principal***: This option will use the `authentication=ActiveDirectoryServicePrincipal` JDBC setting. A principal ID (sometimes referred to as an application or client ID) must be specified, along with a secret for that principal ID.

For more information on these authentication modes, see the [official documentation ↗](https://learn.microsoft.com/sql/connect/jdbc/connecting-using-azure-active-directory-authentication). For all authentication options, ensure that the provided user and role has the necessary privileges on the target database, as well as permission to read from or write to the target table(s).

* Note that Azure Active Directory is now called [Microsoft Entra ID ↗](https://www.microsoft.com/security/business/identity-access/microsoft-entra-id); however, the JDBC options on the SQL Server driver published by Microsoft retain the original names referring to Active Directory.

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#networking)Networking

The Microsoft SQL Server connector requires network access to the SQL Server instance that you wish to connect to. SQL Server connections will normally use a hostname to connect on port 1433.

For SQL Server connections, the appropriate [egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/) must be added when setting up the source in the [Data Connection application](https://www.palantir.com/docs/foundry/data-connection/overview/).

For SQL Server instances hosted on a cloud service like Azure SQL or AWS RDS, you must add an egress policy for the hostname retrieved from your cloud provider’s console.

If Azure redirect mode is used, then egress policies for all resolved IP addresses must also be added. The resolved IP may occasionally change, and you must update the egress policies to allow the new IP. If your instance of SQL Server is hosted on Azure, for example, then you can find more information on public IP addresses for Azure SQL instances in the [Azure SQL documentation ↗](https://learn.microsoft.com/azure/azure-sql/managed-instance/connectivity-architecture-overview?view=azuresql&tabs=current#public-endpoint).

*   To find the hostname for your Azure SQL instance, navigate to the **Settings > Properties** page in the Azure portal, and look for the **Server Name** field. An example hostname-based egress policy for Azure SQL: `<your-database-name>.database.windows.net (port 1433)`
*   To find the resolved IP, you can run `nslookup <your-database-name>.database.windows.net` from the command line. The final result will be the IP address that this hostname resolves to in Azure. The following is an example IPv4-based egress policy for Azure SQL: `x.x.x.x (port 1433)`. Azure SQL does load balancing across multiple hosts, so you may need to run the `nslookup` command several times and add all of the resolved IP addresses.

If you are connecting to an Azure SQL instance from a Foundry instance also hosted in Azure, you will need to use the **Proxy** connection policy option. For traffic originating within Azure, the connection policy defaults to **Redirect**. Using the redirect option to connection for Azure-Azure connections would require configuring egress policies for all Azure SQL IP addresses on all ports in the range of 11000 to 11999. This is possible but not recommended as it is overly permissive. For details on Azure SQL connection policies, see the official [Azure SQL documentation ↗](https://learn.microsoft.com/azure/azure-sql/database/connectivity-architecture?view=azuresql#connection-policy).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#connection-details)Connection details

| Option | Required? | Description |
| --- | --- | --- |
| `Host type` | Yes | Specify how Foundry should connect with your SQL Server database. **Option 1: Hostname** Provide a hostname. This is the recommended option for all SQL Server connections, and should always be used when connecting to an [Azure SQL ↗](https://azure.microsoft.com/products/azure-sql) instance. **Option 2: IPv4** Provide an IPv4 address. If you normally connect using an IPv4 address, either within a corporate network or over the Internet, you can use this option. **Option 3: IPv6** Provide an IPv6 address. Use this option if you normally connect using an IPv6 address. |
| `Port` | Yes | Specify a port to use when connecting. The default port for most SQL Server instances will be `1433`. For more information on ports, see the official documentation for the version of SQL Server you are connecting to. |
| `Database name` | Yes | The name of the database you're connecting to within your instance of MS SQL Server. |
| `Authentication` | Yes | Configure using the [Authentication](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#authentication) guidance shown above. |
| `Require encryption` | Yes | Defaults to enabled. For more details, see Microsoft's documentation for the `encrypt` setting on the SQL Server JDBC driver: [Connection properties reference ↗](https://learn.microsoft.com/sql/connect/jdbc/setting-the-connection-properties?view=sql-server-ver16) [Encryption support examples ↗](https://learn.microsoft.com/sql/connect/jdbc/understanding-ssl-support?view=sql-server-ver16) |
| `Trust server certificate` | Yes | Defaults to disabled. For more details, see Microsoft's documentation for the `trustServerCertificate` setting on the SQL Server JDBC driver: [Connection properties reference ↗](https://learn.microsoft.com/sql/connect/jdbc/setting-the-connection-properties?view=sql-server-ver16) |
| `Network Connectivity` | Yes | You must provide egress policies to allow connections to your MS SQL Server instance. Refer to the [Networking](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#networking) section for more details. |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#change-data-capture)Change data capture

The Microsoft SQL Server source supports [change data capture](https://www.palantir.com/docs/foundry/data-integration/change-data-capture/) syncs.

To enable change data capture for Microsoft SQL Server, you must run a command like the one below to enable CDC on the database.

```
USE <database>
GO
EXEC sys.sp_cdc_enable_db
GO
```

Then, run another command on each table that should be recording changelogs:

```
EXEC sys.sp_cdc_enable_table
    @source_schema = N'<schema>'
  , @source_name = N'<table_name>'
  , @role_name = NULL
  , @capture_instance = NULL
  , @supports_net_changes = 0
  , @filegroup_name = N'PRIMARY';
GO
```

Once change data capture is enabled for the table(s) you wish to sync to Foundry, you can navigate to the **Overview** page and select **+ Create CDC sync** to start creating a new change data capture sync.

The exploration runtime must be working in order to create a change data capture sync. If the runtime is still initializing, you may need to wait a few seconds and refresh the page to proceed with creating a change data capture sync.

For more information on these commands and using change data capture (CDC) with Microsoft SQL Server, see the [official documentation ↗](https://learn.microsoft.com/azure/azure-sql/database/change-data-capture-overview) for the version of SQL Server in use.

### [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#change-data-capture-permissioning)Change Data Capture permissioning

To successfully read CDC data, you will need to ensure you have provided sufficient permissions to the database user.

*   You can verify your permissions with the following query: `SELECT HAS_PERMS_BY_NAME('cdc', 'SCHEMA', 'EXECUTE') AS HasExecutePermission;`. The result will return 1 if `True` and 0 if `False`.
*   You can grant missing permissions by running the following query within the source system itself: `GRANT EXECUTE ON SCHEMA::cdc TO <USER>;`

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#use-microsoft-sql-server-sources-in-code)Use Microsoft SQL Server sources in code

These examples demonstrate how to connect to a [Microsoft SQL Server](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/) source using the [`pymssql` ↗](https://www.pymssql.org/pymssql_examples.html) Python package in an [external transform](https://www.palantir.com/docs/foundry/data-connection/external-transforms/).

The examples are based on a `Fruits` table created with the following schema:

Copied!

```sql
1CREATE TABLE Fruits (
2    FruitName VARCHAR(50) PRIMARY KEY,
3    Inventory INT NOT NULL,
4    PricePerKg DECIMAL(10, 2) NOT NULL
5);
```

### [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#read-from-mssql-with-an-external-transform)Read from MSSQL with an external transform

This example reads data from the `Fruits` table, filtered to `Inventory` values below `60`.

Copied!

```python
1import logging
2from pandas import DataFrame
3from transforms.external.systems import ResolvedSource
4from transforms.api import lightweight, Output, transform_pandas
5from transforms.external.systems import external_systems, Source
6import pymssql
7import pandas as pd
8
9logger = logging.getLogger(__name__)
10
11@lightweight
12@external_systems(
13    mssql_source=Source("<source_rid>")
14)
15@transform_pandas(
16    Output("<dataset_rid>")
17)
18def compute(mssql_source: ResolvedSource) -> DataFrame:
19    # Inventory threshold parameter (this could also be read from an input DataFrame)
20    INVENTORY_THRESHOLD = 60
21
22    connection_parameters = {
23        "server": "<your_server_name>",
24        "database": "<your_database_name>",
25        "port": "1433",
26        "user": "<your_user_name>",
27        "password": mssql_source.get_secret("MSSQL_BASIC_AUTH_PASSWORD"),
28        "encryption": "require",
29        "timeout": 30
30    }
31    try:
32        with pymssql.connect(**connection_parameters) as connection:
33            df = pd.read_sql(
34                'SELECT * FROM Fruits WHERE Inventory < %s',
35                connection,
36                params=(INVENTORY_THRESHOLD,)
37            )
38    except Exception as e:
39        logger.error(f"Error querying MSSQL Fruits table: {e}")
40        raise RuntimeError(f"Failed to fetch Fruits data from MSSQL: {e}") from e
41    return df
```

### [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#write-to-mssql-with-an-external-transform)Write to MSSQL with an external transform

This example uses an input dataset to update the `Fruits` table. It returns a dataset summarizing the actions (update or insert) taken per `FruitName`.

Copied!

```python
1import logging
2from transforms.api import lightweight, Output, transform_pandas, Input
3from transforms.external.systems import external_systems, Source
4import pymssql
5import pandas as pd
6
7logger = logging.getLogger(__name__)
8
9@lightweight
10@external_systems(
11    mssql_source=Source("<source_rid>")
12)
13@transform_pandas(
14    Output("<dataset_rid>"),
15    fruits_df=Input("<dataset_rid>") # DataFrame with schema [FruitName: String, Inventory: Integer, PricePerKg: Double]
16)
17def compute(mssql_source, fruits_df):
18    # Connection parameters
19    connection_parameters = {
20        "server": "<your_server_name>",
21        "database": "<your_database_name>",
22        "port": "1433",
23        "user": "<your_user_name>",
24        "password": mssql_source.get_secret("MSSQL_BASIC_AUTH_PASSWORD"),
25        "encryption": "require",
26        "timeout": 30
27    }
28    results = []
29    try:
30        with pymssql.connect(**connection_parameters) as connection:
31            with connection.cursor() as cursor:
32                for _, row in fruits_df.iterrows():
33                    fruit_name = row["FruitName"]
34                    inventory = row["Inventory"]
35                    price_per_kg = row["PricePerKg"]
36
37                    # Try to update; if no row updated, then insert
38                    update_sql = """
39                        UPDATE Fruits
40                        SET Inventory = %s, PricePerKg = %s
41                        WHERE FruitName = %s
42                    """
43                    cursor.execute(update_sql, (inventory, price_per_kg, fruit_name))
44                    if cursor.rowcount == 0:
45                        insert_sql = """
46                            INSERT INTO Fruits (FruitName, Inventory, PricePerKg)
47                            VALUES (%s, %s, %s)
48                        """
49                        cursor.execute(insert_sql, (fruit_name, inventory, price_per_kg))
50                        results.append({"FruitName": fruit_name, "action": "inserted"})
51                    else:
52                        results.append({"FruitName": fruit_name, "action": "updated"})
53                connection.commit()
54    except Exception as e:
55        logger.error(f"Error updating MSSQL Fruits table: {e}")
56        raise RuntimeError(f"Failed to update Fruits data in MSSQL: {e}") from e
57    # Return a DataFrame summarizing the actions
58    return pd.DataFrame(results, columns=["FruitName", "action"])
```

[← PREVIOUS Microsoft SharePoint Excel](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sharepoint-excel/)

[NEXT Microsoft SQL Server Analysis Services →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server-analysis-services/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

