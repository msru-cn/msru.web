Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/filesystem-v2-resources/projects/get-project/

Published Time: Thu, 09 Jul 2026 17:47:46 GMT

# [](https://www.palantir.com/docs/foundry/api/filesystem-v2-resources/projects/get-project/#get-project)Get Project

GET/api/v2/filesystem/projects/{projectRid}

Get the Project with the specified rid.

Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:filesystem-read`.

## [](https://www.palantir.com/docs/foundry/api/filesystem-v2-resources/projects/get-project/#path-parameters)Path parameters

projectRid

`string`

The unique resource identifier (RID) of a Project.

## [](https://www.palantir.com/docs/foundry/api/filesystem-v2-resources/projects/get-project/#response-body)Response body

Project

`object`

### Hide child attributes

Collapse all

rid

`string`

The unique resource identifier (RID) of a Project.

displayName

`string`

The display name of the Project. Must be unique and cannot contain a /

description

`string`optional

The description associated with the Project.

documentation

`string`optional

The documentation associated with the Project.

path

`string`

The full path to the resource, including the resource name itself

createdBy

`string`

The Foundry user who created this resource

updatedBy

`string`

The Foundry user who last updated this resource

createdTime

`string`

The time at which the resource was created.

updatedTime

`string`

The time at which the resource was most recently updated.

trashStatus

`string` (enum)

The trash status of the Project.

Enum values: `DIRECTLY_TRASHED`, `ANCESTOR_TRASHED`, `NOT_TRASHED`

spaceRid

`string`

The Space Resource Identifier (RID) that the Project lives in.

resourceLevelRoleGrantsAllowed

`boolean`

Whether role grants are allowed on individual resources within the Project.

## [](https://www.palantir.com/docs/foundry/api/filesystem-v2-resources/projects/get-project/#examples)Examples

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
	"https://$HOSTNAME/api/v2/filesystem/projects/ri.compass.main.folder.01a79a9d-e293-48db-a585-9ffe221536e8"
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

## [](https://www.palantir.com/docs/foundry/api/filesystem-v2-resources/projects/get-project/#error-responses)Error responses

| Error Name |  |
| --- | --- |
| `ProjectNotFound` | **Error Code** | `NOT_FOUND` |
| **Status Code** | 404 |
| **Description** | The given Project could not be found. |
| **Parameters** | `projectRid` |

See [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) for a general overview of errors in the platform.

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

