Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/v2/sql-queries-v2-resources/sql-queries/execute-sql-query/

Markdown Content:

# 执行 SQL 查询

POST/api/v2/sqlQueries/execute

执行一个新查询。只有发起查询的用户才能操作该查询。查询结果默认限制为 100 万行。如需提高限制，请联系你的 Palantir 代表。

通过 OAuth2 调用此接口的第三方应用需要请求以下操作范围：`api:sql-queries-execute`。

## 请求体

ExecuteSqlQueryRequest

`object`

### 隐藏子属性

展开全部

query

`string`

要执行的 SQL 查询。查询应符合 [Spark SQL 方言](https://spark.apache.org/docs/latest/sql-ref.html)。仅支持 SELECT 查询。可以在 SQL 查询中通过路径或 RID 引用 Dataset。详见 [文档](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#use-sql-to-query-foundry-datasets)。

fallbackBranchIds

`list<BranchName>`可选

当查询在主分支上执行失败时，用作后备的分支 id 列表。如果 SQL 查询中未显式指定分支，将在提供的第一个存在的后备分支上查询资源。如果未提供后备分支，则使用默认分支。大多数注册环境的默认分支是 `master`。

### 显示子属性

serializationFormat

`string` (枚举)可选

用于序列化查询结果的格式。如果不指定，默认为 `ARROW`。

枚举值：`ARROW`、`CSV`

## 响应体

QueryStatus

`union`

### 隐藏子属性

展开全部

running

`object`可选

### 显示子属性

canceled

`object`可选

failed

`object`可选

### 显示子属性

succeeded

`object`可选

### 显示子属性

## 示例

### 请求

Copied!

```bash
1curl -X POST \
2	-H "Content-type: application/json" \
3	-H "Authorization: Bearer $TOKEN" \
4	"https://$HOSTNAME/api/v2/sqlQueries/execute" \
5	-d '{"fallbackBranchIds":["master"],"serializationFormat":"CSV","query":"SELECT * FROM `/Path/To/Dataset`"}'
```

## 错误响应

| 错误名称 |  |
| --- | --- |
| `ColumnTypesNotSupported` | **错误码** | `INVALID_ARGUMENT` |
| **状态码** | 400 |
| **描述** | 查询结果包含请求的序列化格式不支持的列类型。 |
| **参数** |  |
| `ReadQueryInputsPermissionDenied` | **错误码** | `PERMISSION_DENIED` |
| **状态码** | 403 |
| **描述** | 提供的 token 无权访问查询的输入。 |
| **参数** | `rids` |
| `QueryParseError` | **错误码** | `INVALID_ARGUMENT` |
| **状态码** | 400 |
| **描述** | 无法解析查询。 |
| **参数** | `errorMessage` |
| `QueryCanceled` | **错误码** | `INVALID_ARGUMENT` |
| **状态码** | 400 |
| **描述** | 查询已取消。 |
| **参数** |  |
| `QueryPermissionDenied` | **错误码** | `PERMISSION_DENIED` |
| **状态码** | 403 |
| **描述** | 提供的 token 无权访问指定查询。 |
| **参数** |  |
| `QueryFailed` | **错误码** | `INTERNAL` |
| **状态码** | 500 |
| **描述** | 查询失败。 |
| **参数** | `errorMessage` |
| `QueryRunning` | **错误码** | `INVALID_ARGUMENT` |
| **状态码** | 400 |
| **描述** | 查询正在运行。 |
| **参数** |  |
| `ExecuteSqlQueryPermissionDenied` | **错误码** | `PERMISSION_DENIED` |
| **状态码** | 403 |
| **描述** | 无法执行 SqlQuery。 |
| **参数** |  |

参见 [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) 了解平台错误的总体说明。
