Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/orchestration-v2-resources/builds/get-build/

Published Time: Thu, 09 Jul 2026 17:47:47 GMT

# 获取 Build

GET/api/v2/orchestration/builds/{buildRid}

获取指定 rid 的 Build。

用户最多允许 **每秒 4 次请求** 和 **25 个并发请求**。

通过 OAuth2 调用此接口的第三方应用需要请求以下操作范围：`api:orchestration-read`。

## 路径参数

buildRid

`string`

Build 的 RID。

## 响应体

Build

`object`

### 隐藏子属性

展开全部

rid

`string`

Build 的 RID。

branchName

`string`

Build 运行所在的分支。

createdTime

`string`

Build 创建的时间戳。

createdBy

`string`

创建该 Build 的用户。

fallbackBranches

`list<BranchName>`可选

当目标分支上找不到 JobSpec 时，从这些分支获取 JobSpec。

### 显示子属性

jobRids

`list<JobRid>`可选

### 显示子属性

retryCount

`integer`

Build 内失败 Job 的重试次数。Job 的失败只有在尝试完所有重试或出现无法重试的错误后才算最终失败。注意，并非所有类型的失败都支持重试。

retryBackoffDuration

`object`

Job 失败后重试前的等待时间。

### 显示子属性

abortOnFailure

`boolean`

如果 Build 中任何 Job 失败，立即取消所有其他 Job 并结束 Build。

status

`string` (枚举)

Build 的状态。

枚举值：`RUNNING`、`SUCCEEDED`、`FAILED`、`CANCELED`

finishedTime

`string`可选

Build 处理完成的时间。Build 仍在运行时为空。

scheduleRid

`string`可选

触发此 Build 的 Schedule 的 RID。如果是用户手动触发的 Build，Schedule RID 为空。

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
	"https://$HOSTNAME/api/v2/orchestration/builds/ri.foundry.main.build.a4386b7e-d546-49be-8a36-eefc355f5c58"
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
```

```json
{
  "abortOnFailure": false,
  "createdBy": "f05f8da4-b84c-4fca-9c77-8af0b13d11de",
  "retryBackoffDuration": {
    "unit": "SECONDS",
    "value": 30
  },
  "retryCount": 1,
  "fallbackBranches": [],
  "scheduleRid": "ri.scheduler.main.schedule.5ad5c340-59f3-4a60-9fc6-161bb984f871",
  "branchName": "master",
  "createdTime": "2003-05-06T12:34:56.789Z",
  "jobRids": [
    "ri.foundry.main.job.aaf94076-d773-4732-a1df-3b638eb50448"
  ],
  "finishedTime": "2003-05-06T12:34:56.789Z",
  "rid": "ri.foundry.main.build.a4386b7e-d546-49be-8a36-eefc355f5c58",
  "status": "RUNNING"
}
```

## 错误响应

| 错误名称 |  |
| --- | --- |
| `BuildNotFound` | **错误码** | `NOT_FOUND` |
| **状态码** | 404 |
| **描述** | 找不到指定的 Build。 |
| **参数** | `buildRid` |

参见 [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) 了解平台错误的总体说明。
