Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/media-sets-v2-resources/media-sets/get-media-item-info/

Published Time: Thu, 09 Jul 2026 17:47:47 GMT

# [](https://www.palantir.com/docs/foundry/api/media-sets-v2-resources/media-sets/get-media-item-info/#get-media-item-info)Get Media Item Info

GET/api/v2/mediasets/{mediaSetRid}/items/{mediaItemRid}

Warning

This endpoint is in preview and may be modified or removed at any time. To use this endpoint, add `preview=true` to the request query parameters.

Gets information about the media item.

Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:mediasets-read`.

## [](https://www.palantir.com/docs/foundry/api/media-sets-v2-resources/media-sets/get-media-item-info/#path-parameters)Path parameters

mediaSetRid

`string`

The RID of the media set.

mediaItemRid

`string`

The RID of the media item.

## [](https://www.palantir.com/docs/foundry/api/media-sets-v2-resources/media-sets/get-media-item-info/#query-parameters)Query parameters

preview

`boolean`optional

A boolean flag that, when set to true, enables the use of beta features in preview mode.

## [](https://www.palantir.com/docs/foundry/api/media-sets-v2-resources/media-sets/get-media-item-info/#response-body)Response body

GetMediaItemInfoResponse

`object`

### Hide child attributes

Expand all

viewRid

`string`

The Resource Identifier (RID) of a single View of a Media Set. A Media Set View is an independent collection of Media Items.

path

`string`optional

A user-specified identifier for a media item within a media set. Paths must be less than 256 characters long. If multiple items are written to the same media set at the same path, then when retrieving by path the media item which was written last is returned.

logicalTimestamp

`string`

A number representing a logical ordering to be used for transactions, etc. This can be interpreted as a timestamp in microseconds, but may differ slightly from system clock time due to clock drift and slight adjustments for the sake of ordering.

Only positive timestamps (representing times after epoch) are supported.

attribution

`object`optional

### Show child attributes

originallyUploadedFileMimeType

`string`optional

The [media type](https://www.iana.org/assignments/media-types/media-types.xhtml) of the file or attachment. Examples: `application/json`, `application/pdf`, `application/octet-stream`, `image/jpeg`

mimeType

`string`optional

The [media type](https://www.iana.org/assignments/media-types/media-types.xhtml) of the file or attachment. Examples: `application/json`, `application/pdf`, `application/octet-stream`, `image/jpeg`

sizeBytes

`integer`optional

The size of the media item in bytes.

## [](https://www.palantir.com/docs/foundry/api/media-sets-v2-resources/media-sets/get-media-item-info/#examples)Examples

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
	"https://$HOSTNAME/api/v2/mediasets/{mediaSetRid}/items/{mediaItemRid}?preview=true"
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

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

