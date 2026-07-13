Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/datasets-v2-resources/datasets/get-dataset/

Markdown Content:

# 获取 Dataset

GET/api/v2/datasets/{datasetRid}

获取指定 rid 的 Dataset。

通过 OAuth2 调用此接口的第三方应用需要请求以下操作范围：`api:datasets-read`。

## 路径参数

datasetRid

`string`

Dataset 的资源标识符（RID）。

## 响应体

Dataset

`object`

### 隐藏子属性

收起全部

rid

`string`

Dataset 的资源标识符（RID）。

name

`string`

parentFolderRid

`string`

Folder 的唯一资源标识符（RID）。

## 示例

### 请求

Copied!

```bash
1curl \
2	-H "Authorization: Bearer $TOKEN" \
3	"https://$HOSTNAME/api/v2/datasets/ri.foundry.main.dataset.c26f11c8-cdb3-4f44-9f5d-9816ea1c82da"
```

### 响应

Copied!

```json
1{
2  "parentFolderRid": "ri.compass.main.folder.c410f510-2937-420e-8ea3-8c9bcb3c1791",
3  "name": "My Dataset",
4  "rid": "ri.foundry.main.dataset.c26f11c8-cdb3-4f44-9f5d-9816ea1c82da"
5}
```

## 错误响应

| 错误名称 |  |
| --- | --- |
| `ResourceNameAlreadyExists` | **错误码** | `CONFLICT` |
| **状态码** | 409 |
| **描述** | 提供的资源名称已被同一文件夹中的其他资源使用。 |
| **参数** | `parentFolderRid, displayName` |
| `DatasetNotFound` | **错误码** | `NOT_FOUND` |
| **状态码** | 404 |
| **描述** | 找不到请求的 Dataset，或客户端 token 无权访问。 |
| **参数** | `datasetRid` |

参见 [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) 了解平台错误的总体说明。
