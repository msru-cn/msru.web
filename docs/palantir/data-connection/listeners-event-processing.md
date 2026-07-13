Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/listeners-event-processing/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/listeners-event-processing/#event-processing-with-https-listeners)Event processing with HTTPS listeners

HTTPS listeners write events to a [stream](https://www.palantir.com/docs/foundry/data-integration/streams/). You can locate this stream by navigating to your listener's **Overview** page in Data Connection. Once your data resides in a stream, several processing options are available.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-event-processing/#stream-processing-with-automate)Stream processing with Automate

Streams can be directly processed in [Automate](https://www.palantir.com/docs/foundry/automate/streaming/#automation-on-streaming-datasets), enabling you to execute an action or function for each inbound event. You can create objects in your ontology, run AIP logic, or use [sources](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in functions to interact with external systems, such as writing data back to the system that sent the event.

![Image 4: Option to process streams in Automate.](https://www.palantir.com/docs/resources/foundry/data-connection/automate-streams.png)

Processing streaming events with Automate is appropriate when:

*   The event stream is not high throughput
*   Your event processing is stateless
*   Latency of a few seconds is acceptable
*   At-least-once processing is sufficient

This approach is suitable for most listener integrations, providing low-cost, low-maintenance event processing workflows.

You can learn more about processing listener events with Automate in the [guide to creating an AI-powered chatbot with listeners](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/).

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-event-processing/#streaming-pipelines)Streaming pipelines

Listener event streams can be processed with [streaming pipelines](https://www.palantir.com/docs/foundry/building-pipelines/streaming-overview/) as a lower-latency alternative. These pipelines support high-throughput streams, [stateful event processing](https://www.palantir.com/docs/foundry/building-pipelines/streaming-stateful-transforms/), and (optionally) exactly-once event processing. Streaming pipelines can additionally [leverage UDFs](https://www.palantir.com/docs/foundry/functions/python-functions-builder/) to build powerful real-time event-processing workflows.

![Image 5: Build streaming pipelines in Pipeline Builder.](https://www.palantir.com/docs/resources/foundry/data-connection/event-stream-pipeline.png)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-event-processing/#batch-pipelines)Batch pipelines

Every few minutes, the listener event stream will [archive into a backing dataset](https://www.palantir.com/docs/foundry/data-integration/streams/#cold-buffer). This dataset can be used like any other dataset in the platform, allowing you to build [data pipelines](https://www.palantir.com/docs/foundry/data-integration/data-pipeline/) and [back your ontology](https://www.palantir.com/docs/foundry/object-link-types/create-object-type/#create-a-new-object-type).

![Image 6: Switch to archive mode on your event stream to access the underlying dataset.](https://www.palantir.com/docs/resources/foundry/data-connection/event-stream-archive.png)

For use cases that require historical analysis or that are not real-time, batch pipelines should be used.

[← PREVIOUS Security](https://www.palantir.com/docs/foundry/data-connection/listeners-https-security/)

[NEXT Set up a Google Pub/Sub listener →](https://www.palantir.com/docs/foundry/data-connection/listeners-google-pub-sub/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

