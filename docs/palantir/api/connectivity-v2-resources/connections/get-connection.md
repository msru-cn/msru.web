Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/connectivity-v2-resources/connections/get-connection/

Published Time: Thu, 09 Jul 2026 17:47:46 GMT

# [](https://www.palantir.com/docs/foundry/api/connectivity-v2-resources/connections/get-connection/#get-connection)Get Connection

GET/api/v2/connectivity/connections/{connectionRid}

Get the Connection with the specified rid.

Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:connectivity-connection-read`.

## [](https://www.palantir.com/docs/foundry/api/connectivity-v2-resources/connections/get-connection/#path-parameters)Path parameters

connectionRid

`string`

The Resource Identifier (RID) of a Connection (also known as a source).

## [](https://www.palantir.com/docs/foundry/api/connectivity-v2-resources/connections/get-connection/#response-body)Response body

Connection

`object`

### Hide child attributes

Expand all

rid

`string`

The Resource Identifier (RID) of a Connection (also known as a source).

parentFolderRid

`string`

The unique resource identifier (RID) of a Folder.

displayName

`string`

The display name of the Connection. The display name must not be blank.

exportSettings

`object`

The [export settings of a Connection](https://www.palantir.com/docs/foundry/data-connection/export-overview/#enable-exports-for-source).

### Show child attributes

worker

`union`

[The worker of a Connection](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#workers), which defines where compute for capabilities are run.

### Show child attributes

configuration

`union`

### Show child attributes

## [](https://www.palantir.com/docs/foundry/api/connectivity-v2-resources/connections/get-connection/#examples)Examples

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
	"https://$HOSTNAME/api/v2/connectivity/connections/ri.magritte..source.c078b71b-92f9-41b6-b0df-3760f411120b"
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

## [](https://www.palantir.com/docs/foundry/api/connectivity-v2-resources/connections/get-connection/#error-responses)Error responses

| Error Name |  |
| --- | --- |
| `ParentFolderNotFoundForConnection` | **Error Code** | `NOT_FOUND` |
| **Status Code** | 404 |
| **Description** | The parent folder for the specified connection could not be found. |
| **Parameters** | `connectionRid` |
| `ConnectionTypeNotSupported` | **Error Code** | `INVALID_ARGUMENT` |
| **Status Code** | 400 |
| **Description** | The specified connection is not yet supported in the Platform API. |
| **Parameters** | `connectionType` |
| `ConnectionNotFound` | **Error Code** | `NOT_FOUND` |
| **Status Code** | 404 |
| **Description** | The given Connection could not be found. |
| **Parameters** | `connectionRid` |

See [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) for a general overview of errors in the platform.

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

