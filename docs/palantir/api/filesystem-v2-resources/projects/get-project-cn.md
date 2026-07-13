Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/filesystem-v2-resources/projects/get-project/

Published Time: Thu, 09 Jul 2026 17:47:46 GMT

# 获取 Project

GET/api/v2/filesystem/projects/{projectRid}

获取指定 rid 的 Project。

通过 OAuth2 调用此接口的第三方应用需要请求以下操作范围：`api:filesystem-read`。

## 路径参数

projectRid

`string`

Project 的唯一资源标识符（RID）。

## 响应体

Project

`object`

### 隐藏子属性

收起全部

rid

`string`

Project 的唯一资源标识符（RID）。

displayName

`string`

Project 的显示名称。必须唯一且不能包含 /

description

`string`可选

Project 的描述信息。

documentation

`string`可选

Project 的文档。

path

`string`

资源的完整路径，包括资源名称本身。

createdBy

`string`

创建此资源的 Foundry 用户。

updatedBy

`string`

最后更新此资源的 Foundry 用户。

createdTime

`string`

资源创建的时间。

updatedTime

`string`

资源最近一次更新的时间。

trashStatus

`string` (枚举)

Project 的回收站状态。

枚举值：`DIRECTLY_TRASHED`、`ANCESTOR_TRASHED`、`NOT_TRASHED`

spaceRid

`string`

Project 所在 Space 的资源标识符（RID）。

resourceLevelRoleGrantsAllowed

`boolean`

是否允许在 Project 内的单个资源上授予角色权限。

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
	"https://$HOSTNAME/api/v2/filesystem/projects/ri.compass.main.folder.01a79a9d-e293-48db-a585-9ffe221536e8"
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
  "path": "/Empyrean Airlines/My Important Project",
  "updatedTime": "2024-09-25T17:29:35.974Z",
  "updatedBy": "f05f8da4-b84c-4fca-9c77-8af0b13d11de",
  "createdBy": "f05f8da4-b84c-4fca-9c77-8af0b13d11de",
  "displayName": "My Important Project",
  "documentation": "project documentation",
  "resourceLevelRoleGrantsAllowed": true,
  "description": "project description",
  "createdTime": "2024-09-25T17:29:35.974Z",
  "rid": "ri.compass.main.folder.01a79a9d-e293-48db-a585-9ffe221536e8",
  "spaceRid": "ri.compass.main.folder.a86ad5f5-3db5-48e4-9fdd-00aa3e5731ca",
  "trashStatus": "NOT_TRASHED"
}
```

## 错误响应

| 错误名称 |  |
| --- | --- |
| `ProjectNotFound` | **错误码** | `NOT_FOUND` |
| **状态码** | 404 |
| **描述** | 找不到指定的 Project。 |
| **参数** | `projectRid` |

参见 [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) 了解平台错误的总体说明。
