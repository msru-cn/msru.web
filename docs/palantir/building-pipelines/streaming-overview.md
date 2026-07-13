Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/streaming-overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/streaming-overview/#streaming-pipelines)Streaming pipelines

Streaming pipelines provide the ability to make immediate critical decisions based on real-time data. By processing data as a stream with dedicated compute, streaming pipelines are able to process records with [very low latency](https://www.palantir.com/docs/foundry/building-pipelines/streaming-performance-considerations/). On average, streaming data can be accessible in the Ontology and available for analysis in time series applications, such as [Quiver](https://www.palantir.com/docs/foundry/quiver/overview/) or [Foundry Rules](https://www.palantir.com/docs/foundry/foundry-rules/overview/), in under 15 seconds. To achieve this low-latency, streams are built on top of [compute that runs continuously](https://www.palantir.com/docs/foundry/building-pipelines/streaming-compute-usage/) and require different architecture and maintenance consideration compared to batch pipelines.

## [](https://www.palantir.com/docs/foundry/building-pipelines/streaming-overview/#best-practices)Best practices

When building out streaming pipelines, consider these factors:

*   Streams often power highly operational workflows and require careful planning around downtime, maintenance, and logic changes to ensure high uptime and availability.
*   Compute for streaming runs continuously. This can result in higher compute costs than a periodic batch job. Similarly to batch pipelines, consider starting with the smallest profile available and adjust that if the scale of your data requires it.
*   Streams operate on a per-row basis and have constraints on the maximum row size to ensure low latency data transfers. The constraint is set to 1mb per individual row.
*   Streams using state (windows or aggregations, for example) require design consideration to ensure the state is not broken when changing the stream logic.

## [](https://www.palantir.com/docs/foundry/building-pipelines/streaming-overview/#get-started)Get started

To start using streaming pipelines in Foundry, review how to [create a simple streaming pipeline](https://www.palantir.com/docs/foundry/building-pipelines/create-stream-pipeline-pb/), and learn about streaming transforms in [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/). If you want to learn about connecting your data sources to Foundry, review [how to push data into a stream](https://www.palantir.com/docs/foundry/data-connection/push-based-ingestion/), or [how to setup a streaming sync](https://www.palantir.com/docs/foundry/data-connection/set-up-streaming-sync/).

[← PREVIOUS Incremental pipelines / Maintaining high performance](https://www.palantir.com/docs/foundry/building-pipelines/maintaining-incremental-performance/)

[NEXT Comparison: Streaming vs. batch →](https://www.palantir.com/docs/foundry/building-pipelines/stream-vs-batch/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

