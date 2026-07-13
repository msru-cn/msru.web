Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/kafka/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#kafka)Kafka

Connect Foundry to Kafka to read data from a Kafka queue into a Foundry stream in realtime.

## [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Exploration | 🟢 Generally available |
| Streaming syncs | 🟢 Generally available |
| [Streaming exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#streaming-exports) | 🟢 Generally available |

## [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#data-model)Data model

| key (binary) | value (binary) |
| --- | --- |
| London | {"firstName": "John", "lastName": "Doe"} |
| Paris | {"firstName": "Jean", "lastName": "DuPont"} |

The Kafka connector does not parse message contents, and data of any type can be synced into Foundry. All content is uploaded, unparsed, under the `value` column. Use a downstream streaming transform (for example, `parse_json` in [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/transforms-overview/)) to parse the data. The `key` column will display the key that was recorded in Kafka along with the message. If the message does not include a key, the value will be `null`.

## [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#performance-and-limitations)Performance and limitations

The connector uses one consumer thread by default. You can configure additional threads to increase throughput, where each creates an independent Kafka consumer assigned a subset of the topic's partitions by the broker. Note that configuring more threads than partitions provides no added benefit, as the extra threads will remain idle.

Streaming syncs are meant to be consistent, long-running jobs. Any interruption to a streaming sync is a potential outage depending on expected outcomes.

Currently, streaming syncs have the following limitations:

*   Jobs from agent connections restart during maintenance windows (typically once a week) to pick up upgrades. Expected downtime is less than five minutes.
*   Jobs from direct connections restart at least once every 48 hours. Expected downtime is single-digit minutes (assuming resource availability allows jobs to restart immediately).

We recommend running streaming syncs on an agent connection for improved performance, bandwidth, and availability.

## [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#setup)Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper right corner of the screen.
2.   Select **Kafka** from the available connector types.
3.   Choose to use a [**direct connection**](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/) over the Internet or to connect [**through an intermediary agent**](https://www.palantir.com/docs/foundry/data-connection/set-up-agent/). 
    *   We recommend connecting through two agents per source to successfully set up your Kafka connector and reduce downtime. Be sure the agents do not have overlapping maintenance windows.

4.   Follow the additional configuration prompts to continue the set up of your connector using the information in the sections below.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

If you do not see Kafka on the connector type page, contact Palantir Support to enable access.

### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#bootstrap-servers)Bootstrap servers

| Parameter | Required? | Default | Description |
| --- | --- | --- | --- |
| Bootstrap servers | Yes | No | Add Kafka broker servers in the format `HOST:PORT`, one per line. |

### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#authentication)Authentication

Select a credential method to authenticate your Kafka connection: SSL, Username/Password, Azure AD, Kerberos, or NONE.

Configured credentials must allow the following operations:

*   `Topic` resource: 
    *   `Read` for streaming syncs and exploration
    *   `Write` for streaming exports

#### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#ssl)SSL

SSL authentication corresponds to the standard Kafka `SSL` and `SASL_SSL`protocols.

To authenticate with SSL, complete the following configuration options:

| Parameter | Required? | Default | Description |
| --- | --- | --- | --- |
| Endpoint identification algorithm | Yes | HTTPS | `HTTPS`: Verify that the broker host name matches the host name in the broker's certificate. `NONE`: Disable endpoint identification. |
| Custom client private key password (legacy) | No | Disabled | Applies only to legacy [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) sources. Enable when your target requires mutual TLS and the password of the private key differs from the keystore password. |
| Use SASL | No | No | Enable SASL authentication. |

If your connection requires mutual TLS (two-way SSL) follow the [steps to add your private key](https://www.palantir.com/docs/foundry/available-connectors/kafka/#mutual-tls-mtls). If you require a custom client private key password, complete the following configuration options:

| Parameter | Required? | Default | Description |
| --- | --- | --- | --- |
| SSL key password | Yes | No | Password required to decrypt private key. |

If enabling SASL authentication, complete additional configuration:

| Parameter | Required? | Default | Description |
| --- | --- | --- | --- |
| SASL mechanism | No | No | Select the algorithm with which to encrypt credentials. |
| saslJaasConfigUsername | Yes | No | Username |
| SASL JAAS config password | Yes | No | Password |
| SASL client callback handler class | Yes | No | Shows the default callback handler for SASL clients. See the [Java SASL API documentation ↗](https://docs.oracle.com/javase/8/docs/technotes/guides/security/sasl/sasl-refguide.html) for more information about SASL callback handlers. |

#### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#oauth-20)OAuth 2.0

OAuth authentication uses the OAuth 2.0 protocol. Only the Client Credentials Grant flow is currently supported.

To use the OAuth 2.0 protocol for authentication, complete the following configuration options:

| Parameter | Required? | Default | Description |
| --- | --- | --- | --- |
| Client ID | Yes | No | The ID of your application requesting authentication |
| Client Secret | Yes | No | The shared secret between the server and your application |
| Token Endpoint URI | Yes | No | The Uniform Resource Identifier (URI) of the server that grants access/ ID tokens |
| Scopes | No | No | Connecting via OAuth to Kafka, or specific Kafka topics, may require requesting a collection of scopes. Scopes are arbitrary string values configured in the authentication provider. For example, consumers may need to request one of (kafka-topics-read, kafka-topics-list) in their authentication request to determine the level of access to Kafka they receive. |
| SASL Extensions | No | No | Some Kafka servers, for example Confluent Cloud, may require [SASL extensions ↗](https://cwiki.apache.org/confluence/display/KAFKA/KIP-342%3A+Add+support+for+Custom+SASL+extensions+in+OAuthBearer+authentication) to be configured, which would be key-value pairs specific to that server platform. |

#### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#azure-ad)Azure AD

The Azure AD authentication mode applies to the Kafka interface for Azure Event Hubs. This mode requires an Azure AD service principal. Review the [Azure documentation ↗](https://learn.microsoft.com/azure/event-hubs/event-hubs-about) to learn how to create a service principal and set up access to Event Hubs.

| Parameter | Required? | Default |
| --- | --- | --- |
| Tenant ID | Yes | No |
| Client ID | Yes | No |
| Client secret | Yes | No |

The Kafka interface for Azure Event Hubs can also be accessed through a [SAS Token ↗](https://learn.microsoft.com/en-us/azure/event-hubs/azure-event-hubs-kafka-overview#shared-access-signature-sas). To authenticate with a SAS token, select Username/Password authentication, with username `$ConnectionString` (no quotes) and password your EventHubs connection string.

#### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#none)None

Corresponds to Kafka's standard `PLAINTEXT` protocol.

We highly discourage configuring the connector without authentication or SSL as this will pass unencrypted data between the connector and the Kafka broker. Only use this configuration within secure networks.

### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#networking)Networking

The connector must have access to the host of the Kafka broker. If using a direct connection, create DNS egress policies for all bootstrap server hosts.

### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#certificates-and-private-keys)Certificates and private keys

You may need to configure additional client or server certificates and private keys for SSL and TLS.

### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#ssl-1)SSL

SSL connections validate servers certificates. Normally, SSL validations occur through a certificate chain; by default, both agent and Foundry workers trust most standard certificate chains. However, if the server to which you are connecting has a self-signed certificate, or if hostname validation intercepts the connection, the connector must trust the certificate. Contact your Kafka administrator for the right certificate to use.

Learn more about [using certificates in Data Connection](https://www.palantir.com/docs/foundry/data-connection/set-up-source/#optional-add-certificates).

#### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#mutual-tls-mtls)Mutual TLS (mTLS)

Your Kafka cluster might require that both the server and client authenticate through mTLS. To enable mTLS, you must configure the following:

*   [Client certificate](https://www.palantir.com/docs/foundry/data-connection/agent-configuration-reference/#certificates)
*   [Server certificate](https://www.palantir.com/docs/foundry/data-connection/agent-configuration-reference/#agents-in-tls-inspected-environments)
*   Client private key

Follow the steps below to configure a client private key based on the connector run type.

##### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#configure-client-private-key-for-agents)Configure client private key for agents

If connecting via an agent, follow the instructions on how to [add a private key](https://www.palantir.com/docs/foundry/data-connection/agent-worker/#add-a-private-key)

##### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#configure-client-private-key-for-direct-connections)Configure client private key for direct connections

If connecting directly, upload your private key in the **Configure client certificates and private key** section of the connector configuration page. Use the alias `kafka` in the pop-up that appears, then add the private key and client certificate.

![Image 5: Interface showing option to configure client certificates and private key](https://www.palantir.com/docs/resources/foundry/available-connectors/direct-client-private-key-1.png)

![Image 6: Pop-up where users can enter alias, private key, and client certificate](https://www.palantir.com/docs/resources/foundry/available-connectors/direct-client-private-key-2.png)

## [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#sync-data-from-kafka)Sync data from Kafka

For more complex scenarios, use [pro-code alternatives](https://www.palantir.com/docs/foundry/available-connectors/kafka/#use-kafka-sources-in-code).

Learn how to set up a sync with Kafka in the [Set up a streaming sync](https://www.palantir.com/docs/foundry/data-connection/set-up-streaming-sync/) tutorial.

## [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#schema-registry-integration)Schema Registry integration

The Kafka Schema Registry functions as a centralized storage system, maintaining a versioned history of all schemas. The registry offers compatibility with `Avro`, `Protobuf`, and `JSON` schemas, and uses SerDes (Serializer/Deserializer) to facilitate conversions between schema formats and serialized data.

To leverage the Kafka Schema Registry effectively, it is necessary to register schemas for the relevant `Kafka` topics and append the `Schema Registry URL` to the source configuration. This adjustment enables the connector to transform raw bytes into corresponding data types.

For instance, a standard extraction would typically ingest raw bytes from Kafka into Foundry, as depicted below:

![Image 7: Standard binary Kafka extract.](https://www.palantir.com/docs/resources/foundry/available-connectors/Standard_ingest.png)

However, with the Schema Registry configured, the connector can discern the underlying schema of the bytes and transform them into first-class Foundry types, as shown here:

![Image 8: Avro Kafka extract.](https://www.palantir.com/docs/resources/foundry/available-connectors/avro_ingest.png)

This feature can significantly streamline downstream pipelines by eliminating the need for cumbersome type conversion. Moreover, it elevates data consistency guarantees, given that the Schema Registry offers centralized schema management and compatibility checks as schemas evolve.

## [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#export-data-to-kafka)Export data to Kafka

For more complex scenarios, use [pro-code alternatives](https://www.palantir.com/docs/foundry/available-connectors/kafka/#use-kafka-sources-in-code).

The connector supports exporting streams to external Kafka clusters via Data Connection.

To export to Kafka, first [enable exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#enable-exports-for-source) for your Kafka connector. Then, [create a new export](https://www.palantir.com/docs/foundry/data-connection/export-overview/#create-a-new-export).

### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#export-configuration-options)Export configuration options

| Option | Required? | Default | Description |
| --- | --- | --- | --- |
| `Topic` | Yes | N/A | The Kafka topic to which you want to export. |
| `Linger milliseconds` | Yes | 0 | The number of milliseconds to wait before sending records to Kafka. Records that accrue during the waiting time will be batched together when exported. This setting defaults to 0, meaning that records will be sent immediately. However, this default may result in more requests to your Kafka instance. |
| `Key column` | No | Undefined | The column from the Foundry stream that you wish to use as the **Key** when publishing records to Kafka. Null keys are not supported; ensure the selected column is populated for all records in the stream being exported. |
| `Value column` | No | Undefined | The column from the Foundry stream that you wish to export. If not specified, all fields from the row will be serialized as bytes and exported to Kafka in the body of the message. |
| `Header column` | No | Undefined | The column from the Foundry stream that you wish to use as the headers attached to a streaming record. This column must be of type struct, and all fields in your struct will be parsed as a string. If not specified or if the column is null, no headers will be attached. |
| `Enable Base64 Decode` | No | Disabled | Binary data in Foundry streams is Base64 encoded when stored internally. When enabled, this flag will result in binary data being decoded before exporting. This may only be enabled if both `Key column` and `Value column` are specified. |

### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#export-task-configuration-legacy)Export task configuration (legacy)

We do not recommend exporting to Kafka through export tasks. If possible, existing export tasks should be migrated to use [our recommended export capability](https://www.palantir.com/docs/foundry/data-connection/export-overview/). The documentation below is intended for historical reference.

To begin exporting data using export tasks, navigate to the Project folder that contains the Kafka connector to which you want to export. Right select on the connector name, then select `Create Data Connection Task`.

In the left side panel of the Data Connection view:

1.   Verify the `Source` name matches the Kafka connector you want to use.
2.   Add an `Input` called `dataset` of type `Streaming dataset`. The **input dataset** is the Foundry dataset being exported.
3.   Add an `Output` called `dataset` of type `Streaming export`. The **output dataset** is used to run, schedule, and monitor the task.
4.   Finally, add a YAML block in the text field to define the task configuration.

Use the following options when creating the YAML:

| Option | Required? | Default | Description |
| --- | --- | --- | --- |
| `maxParallelism` | Yes | No | The maximum allowed number of parallel threads used to export data. Actual number of threads is dictated by the number of partitions on the input Foundry stream (if lower than `maxParallelism`). |
| `topic` | Yes | No | The name of the topic to which data is pushed. |
| `clientId` | Yes |  | The identifier to use for the export task. The identifier maps to the Kafka `client.id`. Review the [Kafka documentation ↗](https://kafka.apache.org/documentation/#producerconfigs_client.id) for more information. |
| `batchOptions` | Yes | No | See `batchOptions` configuration below. |
| `keyColumn` | No | No | Name of a column in input streaming dataset. Values in this column are used as the key in exported messages. Omitting this property will export `null` values for the key. |
| `valueColumn` | No | No | Name of a column in input streaming dataset. Values in this column are used as the value in exported messages. Omitting this property will export all columns (as a stringified JSON object) under the `value` field. |
| `enableIdempotence` | No | `true` | Review the [Kafka documentation ↗](https://kafka.apache.org/documentation/#producerconfigs_enable.idempotence) for more information. |
| `useDirectReaders` | Yes | No | Always set `false`. Configure per the example. |
| `transforms` | Yes | No | See the example configuration below. |

Configure `batchOptions`using the following options:

| Option | Required? | Default | Description |
| --- | --- | --- | --- |
| `maxMilliseconds` | Yes | No | The maximum duration (in milliseconds) to wait before writing available rows to the output topic. Lower this value to reduce latency, increase to reduce network overhead (number of requests). This value is used unless the batch hits the `maxRecords` limit first. |
| `maxRecords` | Yes | No | The maximum number of messages to buffer before writing to the output topic. Lower this value to reduce latency, increase to reduce network overhead (number of requests). This value is used unless the batch hits the `maxMilliseconds` limit first. |

The following shows an example export task configuration:

Copied!

```yaml
1type: streaming-kafka-export-task
2config:
3  maxParallelism: 1
4  topic: test-topic
5  clientId: client-id
6  keyColumn: key
7  valueColumn: value
8  batchOptions:
9    maxMilliseconds: 5000
10    maxRecords: 1000
11transforms:
12  transformType: test
13  userCodeMavenCoords: []
14useDirectReaders: false
```

After you configure the export task, select **Save** in the upper-right corner.

## [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#use-kafka-sources-in-code)Use Kafka sources in code

[Pro-code alternatives](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#use-in-code) can be used to connect to Kafka sources for more complex scenarios. The examples below demonstrate how to connect to an Apache Kafka source using the [Python client for Apache Kafka ↗](https://kafka-python.readthedocs.io/en/master/), `kafka-python` in an [external transform](https://www.palantir.com/docs/foundry/data-connection/external-transforms/).

### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#read-from-kafka-with-an-external-transform)Read from Kafka with an external transform

This example reads messages from a given Kafka topic using incremental batch processing. It reads for one minute at a time, or up to 100 messages.

Copied!

```python
1from transforms.api import Output, lightweight, incremental, transform_pandas
2from transforms.external.systems import external_systems, Source, ResolvedSource
3from datetime import timedelta, datetime
4from kafka import KafkaConsumer
5import json
6import pandas as pd
7
8@lightweight
9@incremental()
10@external_systems(
11    kafka_source=Source("<source_rid>>")
12)
13@transform_pandas(
14    Output("<output_dataset_rid>"),
15)
16def compute(kafka_source: ResolvedSource) -> pd.DataFrame:
17
18    # 1. Set up the Kafka consumer
19    USERNAME = kafka_source.get_secret("username")
20    PASSWORD = kafka_source.get_secret("password")
21    BOOTSTRAP_SERVER = "<server in the form host[:port]> " # Can also be a list of servers
22    TOPIC = "<topic name>"
23    CONSUMER_NAME = "<consumer name>" # Unique name for the consumer for committing offsets
24
25    consumer = KafkaConsumer(
26        TOPIC,
27        bootstrap_servers=BOOTSTRAP_SERVER,
28        security_protocol="SASL_SSL",
29        sasl_mechanism="PLAIN",
30        sasl_plain_username=USERNAME,
31        sasl_plain_password=PASSWORD,
32        group_id=CONSUMER_NAME,
33        enable_auto_commit=True,  # Enable automatic offset commit
34    )
35
36    # 2. Define time and content limits for message reading
37    MAX_BATCH_SIZE = 100
38    TIMEOUT_MINUTES = 1
39    END_TIME: datetime = datetime.now() + timedelta(minutes=TIMEOUT_MINUTES)
40
41    # 3. Fetch and process messages
42    events_received = []
43    count = 0
44    while datetime.now() < END_TIME and count < MAX_BATCH_SIZE:
45        # Poll for messages (wait up to 1 second for new messages)
46        msg_pack = consumer.poll(timeout_ms=1000)
47        for _, messages in msg_pack.items():
48            for message in messages:
49                events_received.append(json.loads(message.value))
50                count += 1
51    consumer.close()
52
53    # 4. Return the results
54    return pd.DataFrame(events_received)
```

### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#read-from-kafka-with-incremental-offset-tracking)Read from Kafka with incremental offset tracking

The following example reads all available messages from a Kafka topic and persists offsets in a separate dataset so that subsequent runs resume where the previous run stopped. Unlike the [basic example above](https://www.palantir.com/docs/foundry/available-connectors/kafka/#read-from-kafka-with-an-external-transform), this approach does not rely on Kafka consumer group auto-commit. Instead, it manually assigns partitions, seeks to previously saved offsets, and polls until each partition's end offset is reached.

The transform produces two outputs:

*   `records_output`: The ingested Kafka records
*   `offsets_output`: A small dataset that stores the last consumed offset per partition, used on the next incremental run

Copied!

```python
1import logging
2from datetime import datetime, timedelta
3from collections import defaultdict
4
5import polars as pl
6from kafka import KafkaConsumer
7
8from transforms.api import (
9    Output,
10    transform,
11    incremental,
12    LightweightOutput,
13    IncrementalLightweightOutput,
14    IncrementalTransformContext,
15)
16from transforms.external.systems import external_systems, Source, ResolvedSource
17
18logger = logging.getLogger(__name__)
19
20
21def wait_for_partition_assignment(consumer, timeout_seconds=30):
22    """Poll until the broker assigns partitions to this consumer."""
23    deadline = datetime.now() + timedelta(seconds=timeout_seconds)
24    while not consumer.assignment():
25        consumer.poll(timeout_ms=100)
26        if datetime.now() > deadline:
27            raise TimeoutError(
28                f"Partition assignment did not complete within {timeout_seconds} seconds."
29            )
30
31
32def read_offsets(offsets_output, ctx):
33    """Read the offset map from the previous incremental run."""
34    if not ctx.is_incremental:
35        return {}
36    offset_df = offsets_output.polars(mode="previous")
37    result = defaultdict(dict)
38    for row in offset_df.iter_rows(named=True):
39        result[row["topic"]][row["partition"]] = row["offset"]
40    return result
41
42
43def write_offsets(offsets, offsets_output):
44    """Persist the current offset map for the next incremental run."""
45    rows = [
46        {"topic": topic, "partition": partition, "offset": offset}
47        for topic, partitions in offsets.items()
48        for partition, offset in partitions.items()
49    ]
50    df = pl.DataFrame(rows, schema={"topic": pl.Utf8, "partition": pl.Int32, "offset": pl.Int64})
51    offsets_output.set_mode("replace")
52    offsets_output.write_table(df)
53
54
55@external_systems(
56    kafka_source=Source("<source_rid>")
57)
58@incremental()
59@transform.using(
60    records_output=Output("<records_dataset_rid>"),
61    offsets_output=Output("<offsets_dataset_rid>"),
62)
63def compute(
64    kafka_source: ResolvedSource,
65    records_output: LightweightOutput,
66    offsets_output: IncrementalLightweightOutput,
67    ctx: IncrementalTransformContext,
68):
69    # 1. Create consumer with manual offset management
70    consumer = KafkaConsumer(
71        "<topic_name>",
72        bootstrap_servers="<bootstrap_server>",
73        security_protocol="SASL_SSL",
74        sasl_mechanism="PLAIN",
75        sasl_plain_username=kafka_source.get_secret("username"),
76        sasl_plain_password=kafka_source.get_secret("password"),
77        enable_auto_commit=False,
78        auto_offset_reset="earliest",
79        group_id="external-transform-consumer",
80    )
81
82    # 2. Wait for partition assignment and record end offsets as a stopping point
83    wait_for_partition_assignment(consumer)
84    end_offsets = {tp.partition: consumer.end_offsets([tp])[tp] for tp in consumer.assignment()}
85
86    # 3. On incremental runs, seek each partition to its last saved offset + 1
87    saved_offsets = read_offsets(offsets_output, ctx)
88    topic_offsets = saved_offsets.get("<topic_name>", {})
89    for tp in consumer.assignment():
90        last_offset = topic_offsets.get(tp.partition)
91        if last_offset is not None:
92            consumer.seek(tp, last_offset + 1)
93
94    # 4. Poll messages until end offsets are reached
95    current_offsets = {}
96    rows = []
97    MAX_IDLE_POLLS = 5
98    idle_count = 0
99
100    while idle_count <= MAX_IDLE_POLLS:
101        msg_pack = consumer.poll(timeout_ms=1000, max_records=1000)
102        if not msg_pack:
103            idle_count += 1
104            continue
105        idle_count = 0
106
107        for tp, messages in msg_pack.items():
108            for message in messages:
109                rows.append({
110                    "topic": message.topic,
111                    "partition": message.partition,
112                    "offset": message.offset,
113                    "timestamp": message.timestamp,
114                    "key": message.key.decode("utf-8") if message.key else None,
115                    "value": message.value.decode("utf-8"),
116                })
117                current_offsets[tp.partition] = message.offset
118
119        # Stop once every partition has reached its end offset
120        if all(
121            current_offsets.get(p, -1) >= end - 1
122            for p, end in end_offsets.items()
123        ):
124            break
125
126    consumer.close()
127
128    # 5. Write records to the output dataset
129    if rows:
130        records_df = pl.DataFrame(rows)
131        records_output.set_mode("replace")
132        records_output.write_table(records_df)
133    else:
134        ctx.abort_job()
135        return
136
137    # 6. Persist offsets for the next run
138    all_offsets = dict(saved_offsets)
139    all_offsets["<topic_name>"] = current_offsets
140    write_offsets(all_offsets, offsets_output)
```

Key differences from the basic example:

*   **No auto-commit:** Offsets are stored in a Foundry dataset rather than committed to Kafka, giving you full control over processing semantics.
*   **Partition assignment:** The `wait_for_partition_assignment()` helper ensures the consumer has been assigned partitions before reading end offsets.
*   **Incremental seeking:** On subsequent runs, the transform reads the previous offsets dataset and seeks past already-consumed messages.
*   **End-offset stopping:** The polling loop exits once every partition reaches its end offset, ensuring the transform processes all available messages without hanging indefinitely.

For high-volume topics where holding all rows in memory could cause out-of-memory errors, consider using the [memory-aware buffered Parquet writer](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#write-data-to-parquet-files-with-memory-aware-buffering) pattern to flush records to disk incrementally instead of collecting them all before writing.

### [](https://www.palantir.com/docs/foundry/available-connectors/kafka/#write-to-kafka-with-an-external-transform)Write to Kafka with an external transform

This example writes synthetic sensor data to a given Kafka topic every two seconds, for one minute.

Copied!

```python
1from transforms.api import Output, transform_pandas, lightweight
2from transforms.external.systems import external_systems, Source, ResolvedSource
3from datetime import datetime, timedelta
4import pandas as pd
5from kafka import KafkaProducer
6import time
7import random
8import json
9
10@external_systems(
11    kafka_source=Source("<source_rid>>")
12)
13@transform_pandas(
14    Output("<output_dataset_rid>"),
15)
16def compute(kafka_source: ResolvedSource) -> pd.DataFrame:
17
18    # 1. Set up the Kafka producer
19    USERNAME = kafka_source.get_secret("username")
20    PASSWORD = kafka_source.get_secret("password")
21    BOOTSTRAP_SERVER = "<server in the form host[:port]> " # Can also be a list of servers
22    TOPIC = "<topic name>"
23
24    producer = KafkaProducer(
25        bootstrap_servers=BOOTSTRAP_SERVER,
26        security_protocol="SASL_SSL",
27        sasl_mechanism="PLAIN",
28        sasl_plain_username=USERNAME,
29        sasl_plain_password=PASSWORD,
30    )
31
32    # 2. Define parameters for periodic data sending
33    TIMEOUT_MINUTES = 1
34    INTERVAL_SECONDS = 2
35    END_TIME: datetime = datetime.now() + timedelta(minutes=TIMEOUT_MINUTES)
36
37    # 3. Send sensor data
38    events_sent = []
39    while datetime.now() < END_TIME:
40        data = get_random_sensor_data(datetime.now()) # This should be replaced with actual data
41        producer.send(TOPIC, value=json.dumps(data).encode("utf-8"))
42        events_sent.append(data)
43        time.sleep(INTERVAL_SECONDS)
44    producer.flush()
45    producer.close()
46
47    # 4. Return the results
48    return pd.DataFrame(events_sent, columns=["timestamp", "temperature_c", "humidity_percent", "pressure_hpa", "status"])
49
50def get_random_sensor_data(timestamp):
51    """Generate random sensor data for a given timestamp. Should be replaced with actual data"""
52    def random_sensor_status():
53        # 90% OK, 8% WARN, 2% FAIL
54        return random.choices(["OK", "WARN", "FAIL"], weights=[90, 8, 2], k=1)[0]
55
56    return {
57        "timestamp": timestamp.isoformat(),
58        "temperature_c": round(random.gauss(22, 2), 2),  # mean=22C, std=2
59        "humidity_percent": round(random.gauss(50, 10), 1),  # mean=50%, std=10
60        "pressure_hpa": round(random.gauss(1013, 5), 1),  # mean=1013 hPa, std=5
61        "status": random_sensor_status(),
62    }
```

[← PREVIOUS Jira Service Management](https://www.palantir.com/docs/foundry/available-connectors/jira-service-management/)

[NEXT Kintone →](https://www.palantir.com/docs/foundry/available-connectors/kintone/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

