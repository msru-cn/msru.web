Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-integration/streaming-guide/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-integration/streaming-guide/#streaming-resource-guide)Streaming resource guide

This page lists the resources you may need to reference when implementing an end-to-end streaming workflow.

Data Connection supports syncing data from a wide variety of streaming platforms into Foundry streaming datasets, which can then be used in [streaming pipelines](https://www.palantir.com/docs/foundry/building-pipelines/streaming-overview/). Streaming syncs enable data to flow into Foundry with low latency and high throughput to support real time decision-making processes.

There are two ways to sync data from streams into Foundry:

*   Data Connection supports pulling records from streaming platforms into Foundry. As with batch syncs, data is read from a stream and synced to Foundry using only unidirectional connections using the [agent architecture](https://www.palantir.com/docs/foundry/data-connection/architecture/).
*   If desired, Foundry enables pushing records from a stream directly into a Foundry stream via the _stream proxy_.

Foundry can connect to many sources of streaming data. Sources with dedicated connectors include:

*   **[Apache Kafka](https://www.palantir.com/docs/foundry/available-connectors/kafka/)**
*   **[Amazon Kinesis](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/)**
*   **Amazon SQS**
*   **[Aveva PI](https://www.palantir.com/docs/foundry/available-connectors/pi/)**
*   **[Google Pub/Sub](https://www.palantir.com/docs/foundry/available-connectors/pubsub/)**

For streaming sources without a dedicated connector, you can connect to them using [external transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/). This includes sources such as:

*   **ActiveMQ**
*   **Amazon SNS**
*   **IBM MQ**
*   **RabbitMQ**
*   **MQTT [Beta]**
*   **Solace**

This page lists the resources you may need to reference when implementing an end-to-end streaming workflow.

## [](https://www.palantir.com/docs/foundry/data-integration/streaming-guide/#1-core-concepts)1. Core concepts

We recommend reviewing the following introductory concept page to understand what streams are, how they are stored, and how they are processed.

*   [Streams](https://www.palantir.com/docs/foundry/data-integration/streams/)
*   [Flink in Foundry streaming](https://www.palantir.com/docs/foundry/data-integration/flink-streaming/)

## [](https://www.palantir.com/docs/foundry/data-integration/streaming-guide/#2-overview)2. Overview

These pages will offer a broader scope of the various points to consider when determining if streaming is right for your use case or when deploying production streams.

*   [Streaming pipelines overview](https://www.palantir.com/docs/foundry/building-pipelines/streaming-overview/)
*   [Comparison: Streaming vs. batch](https://www.palantir.com/docs/foundry/building-pipelines/stream-vs-batch/)
*   [Performance considerations](https://www.palantir.com/docs/foundry/building-pipelines/streaming-performance-considerations/)
*   [Streaming compute usage](https://www.palantir.com/docs/foundry/building-pipelines/streaming-compute-usage/)
*   [Streaming profiles](https://www.palantir.com/docs/foundry/data-integration/streaming-profiles/)
*   [Stream monitoring](https://www.palantir.com/docs/foundry/data-integration/stream-monitoring/)
*   [Streaming keys](https://www.palantir.com/docs/foundry/building-pipelines/streaming-keys/)
*   [Streaming stateful transforms](https://www.palantir.com/docs/foundry/building-pipelines/streaming-stateful-transforms/)
*   [Stream debugging](https://www.palantir.com/docs/foundry/dataset-preview/overview/#stream-only-for-streaming-datasets)

## [](https://www.palantir.com/docs/foundry/data-integration/streaming-guide/#3-connect-to-data-sources)3. Connect to data sources

You will need to complete one of the following workflows to connect your external data sources to Foundry for streaming. We recommend reviewing both options to understand possible benefits and limitations for your use case.

*   [Set up a streaming sync](https://www.palantir.com/docs/foundry/data-connection/set-up-streaming-sync/)
*   [Push data into a stream](https://www.palantir.com/docs/foundry/data-connection/push-based-ingestion/)

## [](https://www.palantir.com/docs/foundry/data-integration/streaming-guide/#4-transform-your-streaming-data)4. Transform your streaming data

You can use [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/) to transform your live data. Outputs of your Pipeline Builder transforms will still be streaming datasets that you can [use in real time throughout Foundry](https://www.palantir.com/docs/foundry/building-pipelines/stream-vs-batch/#front-end-tools).

*   [Create a streaming pipeline with Pipeline Builder](https://www.palantir.com/docs/foundry/building-pipelines/create-stream-pipeline-pb/)
*   [Integrate your stream with the Ontology](https://www.palantir.com/docs/foundry/object-indexing/funnel-streaming-pipelines/)

## [](https://www.palantir.com/docs/foundry/data-integration/streaming-guide/#5-monitor-streaming-pipelines-beta)5. Monitor streaming pipelines [Beta]

Set up alerting around your pipeline's health.

*   [Stream monitoring](https://www.palantir.com/docs/foundry/data-integration/stream-monitoring/)

## [](https://www.palantir.com/docs/foundry/data-integration/streaming-guide/#6-development-tools)6. Development tools

Here, you can find tools to improve development of streaming pipelines.

*   [Reset stream](https://www.palantir.com/docs/foundry/data-integration/reset-stream/)

[← PREVIOUS Connector type reference / SAP / FAQ](https://www.palantir.com/docs/foundry/sap/faq/)

[NEXT Flink fundamentals →](https://www.palantir.com/docs/foundry/data-integration/flink-streaming/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

