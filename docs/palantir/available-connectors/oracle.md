Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/oracle/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/oracle/#oracle-database)Oracle Database

Connect Foundry to Oracle Database to read and sync data between Oracle databases and Foundry.

If your external data source uses a version of the Oracle database that is older than 12.1 (which was released in 2013), you should use the [general JDBC connector](https://www.palantir.com/docs/foundry/available-connectors/custom-jdbc-sources/), and upload your own driver. The Oracle Database connector described below implements the Oracle JDBC 21.x driver. Learn more about the JDBC driver interoperability matrix for Oracle database versions in the [official Oracle documentation ↗](https://www.oracle.com/database/technologies/faq-jdbc.html).

The Oracle Database connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) connector. Review the [official documentation for this driver ↗](https://www.oracle.com/database/technologies/appdev/jdbc.html).

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Exploration | 🟢 Generally available |
| Batch syncs | 🟢 Generally available |
| Incremental | 🟢 Generally available |
| [Iceberg syncs](https://www.palantir.com/docs/foundry/iceberg/syncs/) | 🟡 Beta |
| Change data capture syncs | 🟢 Generally available |
| [Table exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#table-exports) | 🟢 Generally available |

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle/#setup)Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper right corner of the screen.
2.   Select **Oracle** from the available connector types.
3.   Follow the additional configuration prompts to continue the setup of your connector using the information in the sections below.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle/#authentication)Authentication

The Oracle Database connector supports authentication using a username and password. We recommend using service credentials rather than individual user credentials.

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle/#networking)Networking

For [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) sources, add the appropriate egress policies to the connector:

| Domain/Host | Required |
| --- | --- |
| Oracle host/IP | Always |

The default port for Oracle database connections is **1521**, but your specific configuration may use a different port.

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle/#connection-details)Connection details

| Option | Required? | Description |
| --- | --- | --- |
| `Host type` | Yes | The type of host identifier being provided. Can be either `hostname` or `ipv4`. |
| `Hostname` | Yes | The hostname or IP address of your Oracle database server. |
| `Port` | Yes | The port number of your Oracle database (default is 1521). |
| `Service identifier type` | Yes | The type of service identifier to use. Can be either `SID` or `Service name`. |
| `TLS` | No | Enable [TLS encryption ↗](https://docs.oracle.com/en/database/oracle/oracle-database/19/dbseg/configuring-network-data-encryption-and-integrity.html#GUID-B94C5D86-E941-4A2B-8857-D5A522BDD82E) for the connection. When enabled (default), the connection will use TLS to encrypt all communication with the Oracle database. |
| `Username` | Yes | The username to authenticate with the Oracle database. |
| `Password` | Yes | The password to authenticate with the Oracle database. |
| `Client certificates & private key` | No | Client certificates and private keys may or may not be required by your source to secure the connection. |
| `Server certificates` | No | Server certificates may or may not be required by your source to secure the connection. |

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle/#change-data-capture)Change data capture

The Oracle Database source supports [change data capture](https://www.palantir.com/docs/foundry/data-integration/change-data-capture/) (CDC) syncs.

Foundry CDC syncs from Oracle Databases use Debezium to capture row-level changes. This requires one-time system configuration changes, privilege grants, and supplemental logging enabled at a table-level. To configure your Oracle Database to allow a user named `PLTR` to set up a CDC sync on `MY_SCHEMA.MY_TABLE`, you can run the following commands:

```
-- One time configuration changes
ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;

ALTER USER PLTR QUOTA UNLIMITED ON PALANTIR_DATA;
GRANT CONNECT, RESOURCE TO PLTR;
GRANT SELECT_CATALOG_ROLE TO PLTR;
GRANT SELECT ON V_$DATABASE TO PLTR;
GRANT SELECT ON V_$LOGMNR_CONTENTS TO PLTR;
GRANT SELECT ON V_$LOGMNR_LOGS TO PLTR;
GRANT SELECT ON V_$LOGMNR_PARAMETERS TO PLTR;
GRANT SELECT ON V_$LOGFILE TO PLTR;
GRANT SELECT ON V_$LOG TO PLTR;
GRANT SELECT ON V_$ARCHIVED_LOG TO PLTR;
GRANT SELECT ON V_$ARCHIVE_DEST_STATUS TO PLTR;
GRANT EXECUTE ON "SYS"."DBMS_FLASHBACK" TO PLTR;
GRANT EXECUTE ON "SYS"."DBMS_LOGMNR_D" TO PLTR;
GRANT EXECUTE ON "SYS"."DBMS_LOGMNR" TO PLTR;
GRANT EXECUTE ON DBMS_LOGMNR TO PLTR;
GRANT SELECT ANY DICTIONARY TO PLTR;
GRANT SELECT ANY TRANSACTION TO PLTR;
GRANT CREATE SESSION TO PLTR;
GRANT LOGMINING TO PLTR;

-- Table-level configurations, repeat for each table
GRANT SELECT, LOCK, FLASHBACK ON TABLE "MY_SCHEMA"."MY_TABLE" TO PLTR
ALTER TABLE "MY_SCHEMA"."MY_TABLE" ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
```

### [](https://www.palantir.com/docs/foundry/available-connectors/oracle/#troubleshooting)Troubleshooting

Oracle listener logs can provide valuable information about the connection attempts from the Palantir CDC connector. Check the log for any connection-related errors or issues. The default location of the listener log is:

Copied!

```sql
1$ORACLE_BASE/diag/tnslsnr/<hostname>/<listener_name>/trace/listener.log
```

You can check the active sessions in the Oracle Database to determine if the user is connected. To do this, run the following SQL query:

Copied!

```sql
1SELECT username, osuser, status, machine, program FROM v$session WHERE username = `<user>`;
```

If the V_ $ tables grants fail, try running the following query with SYS.V_ $:

Copied!

```sql
1GRANT SELECT ON SYS.V_$DATABASE TO `<user>`;
```

The Oracle alert log contains important information about the database's operations, errors, and other significant events. The location of the alert log depends on your Oracle version and configuration. It is typically located in:

Copied!

```sql
1$ORACLE_BASE/diag/rdbms/<db_unique_name>/<instance_name>/trace/alert_<instance_name>.log
```

If the connector does not seem to be receiving new change events, it might be due to infrequent log switches. Query the V $ LOG_HISTORY view to see the history of log switches and their frequency:

Copied!

```sql
1SELECT * FROM v$log_history ORDER BY first_time DESC;
```

Set parameter ARCHIVE_LAG_TARGET to force a switch at regular intervals if required.

Ensure that your Oracle database is running in `ARCHIVELOG` mode, as this is a requirement for the connector to work. You can check the current mode with the following query:

Copied!

```sql
1SELECT log_mode FROM v$database;
```

If `ARCHIVELOG` mode is not enabled, you can enable it with the following commands:

Copied!

```sql
1ORACLE_SID=<SID> <user> sqlplus /nolog
2CONNECT sys/top_secret AS SYSDBA
3alter system set db_recovery_file_dest_size = 10G;
4alter system set db_recovery_file_dest = '/opt/oracle/data/recovery_area' scope=spfile;
5shutdown immediate
6startup mount
7alter database archivelog;
8alter database open;
```

Ensure that minimal supplemental logging is enabled at the database level. You can check if it is enabled with the following query:

Copied!

```sql
1SELECT supplemental_log_data_min FROM v$database;
```

## [](https://www.palantir.com/docs/foundry/available-connectors/oracle/#virtual-tables)Virtual tables

This section provides additional details around using [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/) from an Oracle Database source. This section is not applicable when syncing to Foundry datasets.

| Virtual tables capability | Status |
| --- | --- |
| Manual registration | 🟢 Generally available |
| Automatic registration | 🔴 Not available |
| Compute pushdown | 🔴 Not available |

When using [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/), remember the following source configuration requirements:

*   You must use a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) source. Virtual tables do not support use of [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) connections.
*   Ensure that bi-directional connectivity and allowlisting is established as described in the [**Networking** section above](https://www.palantir.com/docs/foundry/available-connectors/oracle/#networking).
*   If using virtual tables in Code Repositories, refer to the [related documentation](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/#virtual-tables-in-code-repositories) for details about additional required source configurations.
*   When setting up the source credentials, you must use `username/password`.

[← PREVIOUS OneLake and Azure Blob Filesystem (ABFS)](https://www.palantir.com/docs/foundry/available-connectors/onelake-and-azure-blob-filesystem/)

[NEXT Oracle Eloqua →](https://www.palantir.com/docs/foundry/available-connectors/oracle-eloqua/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

