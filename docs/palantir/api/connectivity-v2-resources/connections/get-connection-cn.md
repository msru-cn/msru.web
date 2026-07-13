Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/connectivity-v2-resources/connections/get-connection/

Published Time: Thu, 09 Jul 2026 17:47:46 GMT

# 获取 Connection

GET/api/v2/connectivity/connections/{connectionRid}

获取指定 rid 的 Connection。

通过 OAuth2 调用此接口的第三方应用需要请求以下操作范围：`api:connectivity-connection-read`。

## 路径参数

connectionRid

`string`

Connection 的资源标识符（RID），也称为 source。

## 响应体

Connection

`object`

### 隐藏子属性

展开全部

rid

`string`

Connection 的资源标识符（RID），也称为 source。

parentFolderRid

`string`

Folder 的唯一资源标识符（RID）。

displayName

`string`

Connection 的显示名称。显示名称不能为空。

exportSettings

`object`

[Connection 的导出设置](https://www.palantir.com/docs/foundry/data-connection/export-overview/#enable-exports-for-source)。

### 显示子属性

worker

`union`

[Connection 的 worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#workers)，定义了能力的计算运行位置。

### 显示子属性

configuration

`union`

### 显示子属性

## 示例

### 请求

Copied!

```
1
2
3
```

```bash
curl \
	-H "Authorization: Bearer $TOKEN" \
	"https://$HOSTNAME/api/v2/connectivity/connections/ri.magritte..source.c078b71b-92f9-41b6-b0df-3760f411120b"
```

### 响应

Copied!

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
```

```json
{
  "parentFolderRid": "ri.compass.main.folder.c410f510-2937-420e-8ea3-8c9bcb3c1791",
  "configuration": {
    "type": "jdbc",
    "url": "jdbc:postgresql://localhost:5432/test",
    "driverClass": "org.postgresql.Driver"
  },
  "displayName": "Connection to my external system",
  "exportSettings": {
    "exportsEnabled": true,
    "exportEnabledWithoutMarkingsValidation": false
  },
  "rid": "ri.magritte..source.c078b71b-92f9-41b6-b0df-3760f411120b"
}
```

## 错误响应

| 错误名称 |  |
| --- | --- |
| `ParentFolderNotFoundForConnection` | **错误码** | `NOT_FOUND` |
| **状态码** | 404 |
| **描述** | 找不到指定 connection 的父文件夹。 |
| **参数** | `connectionRid` |
| `ConnectionTypeNotSupported` | **错误码** | `INVALID_ARGUMENT` |
| **状态码** | 400 |
| **描述** | 指定的 connection 类型在 Platform API 中尚不支持。 |
| **参数** | `connectionType` |
| `ConnectionNotFound` | **错误码** | `NOT_FOUND` |
| **状态码** | 404 |
| **描述** | 找不到指定的 Connection。 |
| **参数** | `connectionRid` |

参见 [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) 了解平台错误的总体说明。
