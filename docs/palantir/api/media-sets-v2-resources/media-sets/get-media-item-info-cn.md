Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/media-sets-v2-resources/media-sets/get-media-item-info/

Published Time: Thu, 09 Jul 2026 17:47:47 GMT

# 获取 Media Item 信息

GET/api/v2/mediasets/{mediaSetRid}/items/{mediaItemRid}

警告

此接口处于预览阶段，可能随时被修改或移除。使用此接口时需要在请求查询参数中添加 `preview=true`。

获取 media item 的相关信息。

通过 OAuth2 调用此接口的第三方应用需要请求以下操作范围：`api:mediasets-read`。

## 路径参数

mediaSetRid

`string`

Media set 的 RID。

mediaItemRid

`string`

Media item 的 RID。

## 查询参数

preview

`boolean`可选

布尔标志，设为 true 时启用预览模式下的 beta 功能。

## 响应体

GetMediaItemInfoResponse

`object`

### 隐藏子属性

展开全部

viewRid

`string`

Media Set 中单个 View 的资源标识符（RID）。Media Set View 是 Media Items 的独立集合。

path

`string`可选

用户指定的 media set 内 media item 的标识符。路径长度必须小于 256 个字符。如果多个 item 写入同一 media set 的相同路径，按路径检索时返回最后写入的 media item。

logicalTimestamp

`string`

表示逻辑排序的数字，用于事务等场景。可以理解为微秒级的时间戳，但由于时钟漂移和排序微调，可能与系统时钟时间略有偏差。

仅支持正时间戳（表示 epoch 之后的时间）。

attribution

`object`可选

### 显示子属性

originallyUploadedFileMimeType

`string`可选

文件或附件的 [media type](https://www.iana.org/assignments/media-types/media-types.xhtml)。示例：`application/json`、`application/pdf`、`application/octet-stream`、`image/jpeg`

mimeType

`string`可选

文件或附件的 [media type](https://www.iana.org/assignments/media-types/media-types.xhtml)。示例：`application/json`、`application/pdf`、`application/octet-stream`、`image/jpeg`

sizeBytes

`integer`可选

Media item 的大小（字节）。

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
	"https://$HOSTNAME/api/v2/mediasets/{mediaSetRid}/items/{mediaItemRid}?preview=true"
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
```

```json
{
  "viewRid": "ri.mio.main.view.1",
  "logicalTimestamp": 12345,
  "path": "example.png",
  "attribution": {
    "creatorId": 1,
    "creationTimestamp": "2020-07-10 15:00:00.000"
  },
  "originallyUploadedFileMimeType": "image/png"
}
```
