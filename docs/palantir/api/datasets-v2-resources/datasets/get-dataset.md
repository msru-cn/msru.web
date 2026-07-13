Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/datasets-v2-resources/datasets/get-dataset/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/api/datasets-v2-resources/datasets/get-dataset/#get-dataset)Get Dataset

GET/api/v2/datasets/{datasetRid}

Get the Dataset with the specified rid.

Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.

## [](https://www.palantir.com/docs/foundry/api/datasets-v2-resources/datasets/get-dataset/#path-parameters)Path parameters

datasetRid

`string`

The Resource Identifier (RID) of a Dataset.

## [](https://www.palantir.com/docs/foundry/api/datasets-v2-resources/datasets/get-dataset/#response-body)Response body

Dataset

`object`

### Hide child attributes

Collapse all

rid

`string`

The Resource Identifier (RID) of a Dataset.

name

`string`

parentFolderRid

`string`

The unique resource identifier (RID) of a Folder.

## [](https://www.palantir.com/docs/foundry/api/datasets-v2-resources/datasets/get-dataset/#examples)Examples

### Request

Copied!

```bash
1curl \
2	-H "Authorization: Bearer $TOKEN" \
3	"https://$HOSTNAME/api/v2/datasets/ri.foundry.main.dataset.c26f11c8-cdb3-4f44-9f5d-9816ea1c82da"
```

### Response

Copied!

```json
1{
2  "parentFolderRid": "ri.compass.main.folder.c410f510-2937-420e-8ea3-8c9bcb3c1791",
3  "name": "My Dataset",
4  "rid": "ri.foundry.main.dataset.c26f11c8-cdb3-4f44-9f5d-9816ea1c82da"
5}
```

## [](https://www.palantir.com/docs/foundry/api/datasets-v2-resources/datasets/get-dataset/#error-responses)Error responses

| Error Name |  |
| --- | --- |
| `ResourceNameAlreadyExists` | **Error Code** | `CONFLICT` |
| **Status Code** | 409 |
| **Description** | The provided resource name is already in use by another resource in the same folder. |
| **Parameters** | `parentFolderRid, displayName` |
| `DatasetNotFound` | **Error Code** | `NOT_FOUND` |
| **Status Code** | 404 |
| **Description** | The requested dataset could not be found, or the client token does not have access to it. |
| **Parameters** | `datasetRid` |

See [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) for a general overview of errors in the platform.

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

