Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/admin-v2-resources/users/get-user/

Published Time: Thu, 09 Jul 2026 17:47:46 GMT

# [](https://www.palantir.com/docs/foundry/api/admin-v2-resources/users/get-user/#get-user)Get User

GET/api/v2/admin/users/{userId}

Get the User with the specified id.

Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:admin-read`.

## [](https://www.palantir.com/docs/foundry/api/admin-v2-resources/users/get-user/#path-parameters)Path parameters

userId

`string`

A Foundry User ID.

## [](https://www.palantir.com/docs/foundry/api/admin-v2-resources/users/get-user/#query-parameters)Query parameters

status

`string` (enum)optional

Present status of user.

Enum values: `ACTIVE`, `DELETED`

## [](https://www.palantir.com/docs/foundry/api/admin-v2-resources/users/get-user/#response-body)Response body

User

`object`

### Hide child attributes

Expand all

id

`string`

A Foundry User ID.

username

`string`

The Foundry username of the User. This is unique within the realm.

givenName

`string`optional

The given name of the User.

familyName

`string`optional

The family name (last name) of the User.

email

`string`optional

The email at which to contact a User. Multiple users may have the same email address.

realm

`string`

Identifies which Realm a User or Group is a member of. The `palantir-internal-realm` is used for Users or Groups that are created in Foundry by administrators and not associated with any SSO provider.

organization

`string`optional

The RID of the user's primary Organization. This will be blank for third-party application service users.

status

`string` (enum)

The current status of the user.

Enum values: `ACTIVE`, `DELETED`

attributes

`map<AttributeName, AttributeValues>`optional

A map of the User's attributes. Attributes prefixed with "multipass:" are reserved for internal use by Foundry and are subject to change. Additional attributes may be configured by Foundry administrators in Control Panel and populated by the User's SSO provider upon login.

### Show child attributes

## [](https://www.palantir.com/docs/foundry/api/admin-v2-resources/users/get-user/#examples)Examples

### Request

Copied!

```
1
2
3
```

```bash
curl \
\t-H "Authorization: Bearer $TOKEN" \
	"https://$HOSTNAME/api/v2/admin/users/dd05feb8-662a-445d-8f4c-ce92d46bedeb?status=ACTIVE"
```

### Response

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

## [](https://www.palantir.com/docs/foundry/api/admin-v2-resources/users/get-user/#error-responses)Error responses

| Error Name |  |
| --- | --- |
| `UserDeleted` | **Error Code** | `INVALID_ARGUMENT` |
| **Status Code** | 400 |
| **Description** | The user is deleted. |
| **Parameters** | `principalId` |
| `UserIsActive` | **Error Code** | `INVALID_ARGUMENT` |
| **Status Code** | 400 |
| **Description** | The user is an active user. |
| **Parameters** | `principalId` |
| `UserNotFound` | **Error Code** | `NOT_FOUND` |
| **Status Code** | 404 |
| **Description** | The given User could not be found. |
| **Parameters** | `userId` |

See [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) for a general overview of errors in the platform.

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

