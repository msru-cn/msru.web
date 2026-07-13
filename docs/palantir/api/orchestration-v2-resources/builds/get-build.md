Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/api/orchestration-v2-resources/builds/get-build/

Published Time: Thu, 09 Jul 2026 17:47:47 GMT

# [](https://www.palantir.com/docs/foundry/api/orchestration-v2-resources/builds/get-build/#get-build)Get Build

GET/api/v2/orchestration/builds/{buildRid}

Get the Build with the specified rid.

Users are allowed to make a maximum of **4 requests per second** and **25 concurrent requests**.

Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:orchestration-read`.

## [](https://www.palantir.com/docs/foundry/api/orchestration-v2-resources/builds/get-build/#path-parameters)Path parameters

buildRid

`string`

The RID of a Build.

## [](https://www.palantir.com/docs/foundry/api/orchestration-v2-resources/builds/get-build/#response-body)Response body

Build

`object`

### Hide child attributes

Expand all

rid

`string`

The RID of a Build.

branchName

`string`

The branch that the build is running on.

createdTime

`string`

The timestamp that the build was created.

createdBy

`string`

The user who created the build.

fallbackBranches

`list<BranchName>`optional

The branches to retrieve JobSpecs from if no JobSpec is found on the target branch.

### Show child attributes

jobRids

`list<JobRid>`optional

### Show child attributes

retryCount

`integer`

The number of retry attempts for failed Jobs within the Build. A Job's failure is not considered final until all retries have been attempted or an error occurs indicating that retries cannot be performed. Be aware, not all types of failures can be retried.

retryBackoffDuration

`object`

The duration to wait before retrying after a Job fails.

### Show child attributes

abortOnFailure

`boolean`

If any job in the build is unsuccessful, immediately finish the build by cancelling all other jobs.

status

`string` (enum)

The status of the build.

Enum values: `RUNNING`, `SUCCEEDED`, `FAILED`, `CANCELED`

finishedTime

`string`optional

The time the build finished processing. Will be empty while the build is still running.

scheduleRid

`string`optional

Schedule RID of the Schedule that triggered this build. If a user triggered the build, Schedule RID will be empty.

## [](https://www.palantir.com/docs/foundry/api/orchestration-v2-resources/builds/get-build/#examples)Examples

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
	"https://$HOSTNAME/api/v2/orchestration/builds/ri.foundry.main.build.a4386b7e-d546-49be-8a36-eefc355f5c58"
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

## [](https://www.palantir.com/docs/foundry/api/orchestration-v2-resources/builds/get-build/#error-responses)Error responses

| Error Name |  |
| --- | --- |
| `BuildNotFound` | **Error Code** | `NOT_FOUND` |
| **Status Code** | 404 |
| **Description** | The given Build could not be found. |
| **Parameters** | `buildRid` |

See [Errors](https://www.palantir.com/docs/foundry/api/general/overview/errors/) for a general overview of errors in the platform.

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

