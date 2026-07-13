Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/v2/sql-queries-v2-resources/sql-queries/execute-sql-query/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/api/v2/sql-queries-v2-resources/sql-queries/execute-sql-query/#execute-sql-query)Execute Sql Query

POST/api/v2/sqlQueries/execute

Executes a new query. Only the user that invoked the query can operate on the query. The size of query results are limited by default to 1 million rows. Contact your Palantir representative to discuss limit increases.

Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:sql-queries-execute`.

## [](https://www.palantir.com/docs/foundry/api/v2/sql-queries-v2-resources/sql-queries/execute-sql-query/#request-body)Request body

ExecuteSqlQueryRequest

`object`

### Hide child attributes

Expand all

query

`string`

The SQL query to execute. Queries should conform to the [Spark SQL dialect](https://spark.apache.org/docs/latest/sql-ref.html). This supports SELECT queries only. Datasets can be referenced in SQL queries by path or by RID. See the [documentation](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#use-sql-to-query-foundry-datasets) for more details.

fallbackBranchIds

`list<BranchName>`optional

The list of branch ids to use as fallbacks if the query fails to execute on the primary branch. If a is not explicitly provided in the SQL query, the resource will be queried on the first fallback branch provided that exists. If no fallback branches are provided the default branch is used. This is `master` for most enrollments.

### Show child attributes

serializationFormat

`string` (enum)optional

The format used to serialize query results. If not specified, defaults to `ARROW`.

Enum values: `ARROW`, `CSV`

## [](https://www.palantir.com/docs/foundry/api/v2/sql-queries-v2-resources/sql-queries/execute-sql-query/#response-body)Response body

QueryStatus

`union`

### Hide child attributes

Expand all

running

`object`optional

### Show child attributes

canceled

`object`optional

failed

`object`optional

### Show child attributes

succeeded

`object`optional

### Show child attributes

## [](https://www.palantir.com/docs/foundry/api/v2/sql-queries-v2-resources/sql-queries/execute-sql-query/#examples)Examples

### Request

Copied!

```bash
1curl -X POST \
2	-H "Content-type: application/json" \
3	-H "Authorization: Bearer $TOKEN" \
4	"https://$HOSTNAME/api/v2/sqlQueries/execute" \
5	-d '{"fallbackBranchIds":["master"],"serializationFormat":"CSV","query":"SELECT * FROM `/Path/To/Dataset`"}'
```

## [](https://www.palantir.com/docs/foundry/api/v2/sql-queries-v2-resources/sql-queries/execute-sql-query/#error-responses)Error responses

| Error Name |  |
| --- | --- |
| `ColumnTypesNotSupported` | **Error Code** | `INVALID_ARGUMENT` |
| **Status Code** | 400 |
| **Description** | The query result contains column types that are not supported by the requested serialization format. |
| **Parameters** |  |
| `ReadQueryInputsPermissionDenied` | **Error Code** | `PERMISSION_DENIED` |
| **Status Code** | 403 |
| **Description** | The provided token does not have permission to access the inputs to the query. |
| **Parameters** | `rids` |
| `QueryParseError` | **Error Code** | `INVALID_ARGUMENT` |
| **Status Code** | 400 |
| **Description** | The query cannot be parsed. |
| **Parameters** | `errorMessage` |
| `QueryCanceled` | **Error Code** | `INVALID_ARGUMENT` |
| **Status Code** | 400 |
| **Description** | The query was canceled. |
| **Parameters** |  |
| `QueryPermissionDenied` | **Error Code** | `PERMISSION_DENIED` |
| **Status Code** | 403 |
| **Description** | The provided token does not have permission to access the given query. |
| **Parameters** |  |
| `QueryFailed` | **Error Code** | `INTERNAL` |
| **Status Code** | 500 |
| **Description** | The query failed. |
| **Parameters** | `errorMessage` |
| `QueryRunning` | **Error Code** | `INVALID_ARGUMENT` |
| **Status Code** | 400 |
| **Description** | The query is running. |
| **Parameters** |  |
| `ExecuteSqlQueryPermissionDenied` | **Error Code** | `PERMISSION_DENIED` |
| **Status Code** | 403 |
| **Description** | Could not execute the SqlQuery. |
| **Parameters** |  |

See [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) for a general overview of errors in the platform.

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

