Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/admin-v2-resources/users/get-user/

Published Time: Thu, 09 Jul 2026 17:47:46 GMT

# 获取用户

GET/api/v2/admin/users/{userId}

获取指定 id 的用户。

通过 OAuth2 调用此接口的第三方应用需要请求以下操作范围：`api:admin-read`。

## 路径参数

userId

`string`

Foundry 用户 ID。

## 查询参数

status

`string` (枚举)可选

用户的当前状态。

枚举值：`ACTIVE`、`DELETED`

## 响应体

User

`object`

### 隐藏子属性

展开全部

id

`string`

Foundry 用户 ID。

username

`string`

用户的 Foundry 用户名。在 realm 内唯一。

givenName

`string`可选

用户的名字。

familyName

`string`可选

用户的姓氏。

email

`string`可选

用于联系用户的邮箱。多个用户可以有相同的邮箱地址。

realm

`string`

标识用户或组所属的 Realm。`palantir-internal-realm` 用于管理员在 Foundry 中创建的、不与任何 SSO 提供商关联的用户或组。

organization

`string`可选

用户主所属组织的 RID。第三方应用的服务用户此字段为空。

status

`string` (枚举)

用户的当前状态。

枚举值：`ACTIVE`、`DELETED`

attributes

`map<AttributeName, AttributeValues>`可选

用户属性的映射。以 "multipass:" 为前缀的属性由 Foundry 内部保留使用，可能会变更。其他属性可以由 Foundry 管理员在 Control Panel 中配置，并在用户登录时由 SSO 提供商填充。

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
	"https://$HOSTNAME/api/v2/admin/users/dd05feb8-662a-445d-8f4c-ce92d46bedeb?status=ACTIVE"
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
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
```

```json
{
  "givenName": "John",
  "familyName": "Smith",
  "organization": "ri.multipass..organization.c30ee6ad-b5e4-4afe-a74f-fe4a289f2faa",
  "realm": "palantir-internal-realm",
  "attributes": {
    "multipass:givenName": [
      "John"
    ],
    "multipass:familyName": [
      "Smith"
    ],
    "multipass:email:primary": [
      "jsmith@example.com"
    ],
    "multipass:realm": [
      "eab0a251-ca1a-4a84-a482-200edfb8026f"
    ],
    "multipass:organization-rid": [
      "ri.multipass..organization.c30ee6ad-b5e4-4afe-a74f-fe4a289f2faa"
    ],
    "department": [
      "Finance"
    ],
    "jobTitle": [
      "Accountant"
    ]
  },
  "id": "0d1fe74e-2b70-4a93-9b1a-80070637788b",
  "email": "jsmith@example.com",
  "username": "jsmith",
  "status": "ACTIVE"
}
```

## 错误响应

| 错误名称 |  |
| --- | --- |
| `UserDeleted` | **错误码** | `INVALID_ARGUMENT` |
| **状态码** | 400 |
| **描述** | 用户已删除。 |
| **参数** | `principalId` |
| `UserIsActive` | **错误码** | `INVALID_ARGUMENT` |
| **状态码** | 400 |
| **描述** | 用户处于活跃状态。 |
| **参数** | `principalId` |
| `UserNotFound` | **错误码** | `NOT_FOUND` |
| **状态码** | 404 |
| **描述** | 找不到指定的用户。 |
| **参数** | `userId` |

参见 [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) 了解平台错误的总体说明。
