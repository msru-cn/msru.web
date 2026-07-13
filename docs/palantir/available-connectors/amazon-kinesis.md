Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#amazon-kinesis)Amazon Kinesis

Connect Foundry to Amazon Kinesis to read data from a Kinesis stream into a Foundry stream in realtime.

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Exploration | 🟢 Generally available |
| Streaming syncs | 🟢 Generally available |
| [Streaming exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#streaming-exports) | 🟢 Generally available |

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#data-model)Data model

| partition_key (string) | data (string) | kinesis_ingestion_timestamp (timestamp) | foundry_ingestion_timestamp (timestamp) |
| --- | --- | --- | --- |
| London | {"firstName": "John", "lastName": "Doe"} | 2023-07-12T15:12:42.371Z | 2023-07-12T15:12:42.512Z |
| Paris | {"firstName": "Jean", "lastName": "DuPont"} | 2023-07-12T15:12:42.418Z | 2023-07-12T15:12:42.512Z |

The Kinesis connector parses message contents into unicode strings. Use a downstream streaming transform (for example, `parse_json` in [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/transforms-overview/)) to parse structured data.

*   The `partition_key` column will contain the partition key that was used to post the message to Kinesis.
*   The `kinesis_ingestion_timestamp` column will contain the timestamp when the message was posted to Kinesis.
*   The `foundry_ingestion_timestamp` column will contain the timestamp when the message was ingested by Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#performance-and-limitations)Performance and limitations

The connector always uses a single consumer thread per active shard on the source Kinesis stream.

Streaming syncs are meant to be consistent, long-running jobs. Any interruption to a streaming sync is a potential outage, depending on the expected outcomes.

Currently, streaming syncs have the following limitations:

*   Jobs on a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) restart at least once every 48 hours. Expected downtime is single-digit minutes (assuming resource availability allows jobs to restart immediately).
*   For legacy [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) sources, jobs restart during agent maintenance windows (typically once a week) to pick up upgrades. Expected downtime is less than five minutes. For high availability, connect through two agents with non-overlapping maintenance windows.

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#message-ordering)Message ordering

The Kinesis connector guarantees message delivery order for messages with the same `partition_key`. Messages with different `partition_key` values may be processed in any order.

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#setup)Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper right corner of the screen.
2.   Select **Kinesis** from the available connector types.
3.   Follow the additional configuration prompts to continue the set up of your connector using the information in the sections below.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

### [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#connection-settings)Connection settings

| Parameter | Required? | Default | Description |
| --- | --- | --- | --- |
| AWS Region | Yes | us-east-1 | The AWS region your Kinesis stream is in. |

### [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#authentication)Authentication

Select an authentication method for your Kinesis connection: [AWS Instance](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#aws-instance) or [Static Credentials](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#static-credentials).

Below is a sample IAM policy with examples of the permissions required to read from and write to specified kinesis streams.

Copied!

```json
1{
2  "Version": "2012-10-17",
3  "Statement": [
4    {
5      "Sid": "ReadKinesisStream",
6      "Effect": "Allow",
7      "Action": [
8        "kinesis:ListShards",
9        "kinesis:GetShardIterator",
10        "kinesis:GetRecords",
11        "kinesis:DescribeStream"
12      ],
13      "Resource": "arn:aws:kinesis:us-east-1:123456789012:stream/read-stream-name"
14    },
15    {
16        "Sid": "WriteKinesisStream",
17        "Effect": "Allow",
18        "Action": [
19            "kinesis:PutRecords"
20        ],
21        "Resource": "arn:aws:kinesis:us-east-1:123456789012:stream/write-stream-name"
22    }
23  ]
24}
```

#### [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#aws-instance)AWS Instance

Legacy

AWS instance authentication is only available for legacy [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) sources. Foundry worker sources cannot use AWS instance authentication; use IAM access keys instead.

When your Foundry agent is running on an AWS resource with a provisioned IAM role (e.g. an EC2 instance), the Kinesis connector will use the provisioned IAM role to connect to Kinesis streams. No additional configuration is required.

#### [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#static-credentials)Static Credentials

Static Credentials refers to standard AWS authentication with an Access Key ID and Secret Access Key tied to an IAM user.

| Parameter | Required? | Default |
| --- | --- | --- |
| Access Key ID | Yes | No |
| Secret Access Key | Yes | No |

### [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#sts-role)STS Role

The Kinesis connector can optionally assume an STS role before connecting to a Kinesis stream. Refer to the [AWS documentation ↗](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) for details about these parameters.

| Parameter | Required? | Default |
| --- | --- | --- |
| Role ARN | Yes | No |
| Role session name | Yes | No |
| Role session duration | Yes | 900 |
| External ID | No | No |

### [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#networking)Networking

The connector must have access to the AWS Kinesis API and optionally the AWS STS API if using an STS role.

*   **Kinesis API:**`https://kinesis.<region>.amazonaws.com`
*   **STS API:**`https://sts.<region>.amazonaws.com`

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#sync-data-from-kinesis)Sync data from Kinesis

Learn how to set up a sync with Kinesis in the [Set up a streaming sync](https://www.palantir.com/docs/foundry/data-connection/set-up-streaming-sync/) tutorial.

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#export-data-to-kinesis)Export data to Kinesis

The connector supports exporting to external Kinesis streams in Data Connection.

To export to Kinesis, first [enable exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#enable-exports-for-source) for your Kinesis connector. Then, [create a new export](https://www.palantir.com/docs/foundry/data-connection/export-overview/#create-a-new-export).

### [](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/#export-configuration-options)Export configuration options

| Option | Required? | Default | Description |
| --- | --- | --- | --- |
| `Output stream ARN` | Yes | N/A | The ARN of the Kinesis stream to which you want to export. |
| `Partition column` | Yes | First String Column | The column that will be used to determine which shard a data record will belong to within the stream. This must be a string value, usually the primary key. Review the [AWS documentation ↗](https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html) for more information. |

[← PREVIOUS Amazon DynamoDB](https://www.palantir.com/docs/foundry/available-connectors/amazon-dynamodb/)

[NEXT Amazon Marketplace →](https://www.palantir.com/docs/foundry/available-connectors/amazon-marketplace/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

