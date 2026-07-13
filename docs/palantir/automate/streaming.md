Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/automate/streaming/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/automate/streaming/#streaming)Streaming

For real-time data processing use cases, consider setting up automations on streaming datasets or objects. Effects will execute within seconds of new data entering the ontology.

## [](https://www.palantir.com/docs/foundry/automate/streaming/#automation-on-stream-backed-objects)Automation on stream-backed objects

For users requiring higher scale, you can automate on a stream-backed object to allow for monitoring without any throughput restrictions. This is particularly useful for large-scale applications where data is continuously ingested and processed, such as financial transaction monitoring or large-scale IoT deployments.

![Image 4: Stream condition.](https://www.palantir.com/docs/resources/foundry/automate/stream-condition.png)

To set this up, navigate to the **Objects modified** condition and select the stream-backed object. You should see evaluation frequency below the condition update accordingly.

![Image 5: Stream evaluation frequency.](https://www.palantir.com/docs/resources/foundry/automate/stream-evaluation-frequency.png)

Note that for real-time stream monitoring, it is not possible to explicitly specify properties to be monitored. All changes will be processed. To support stateful execution, modify the object set you are monitoring and handle state in the downstream ontology.

### [](https://www.palantir.com/docs/foundry/automate/streaming/#example-use-case)Example use case

Imagine a financial institution that needs to monitor transactions for fraud detection. With stream-backed objects, you can automate the detection of suspicious patterns in real-time, regardless of the volume of transactions being processed.

## [](https://www.palantir.com/docs/foundry/automate/streaming/#automation-on-streaming-datasets)Automation on streaming datasets

You can monitor streaming datasets directly through Automate. This allows for real-time automation on data streams, provided that the throughput does not exceed 200 records per second. This feature is ideal for scenarios where immediate action is required based on incoming data, such as monitoring live sensor data or tracking real-time user interactions.

![Image 6: Raw streams.](https://www.palantir.com/docs/resources/foundry/automate/raw-streams.png)

To set up this condition, simply select a stream condition, then search for the relevant streaming dataset in the user interface. Then, proceed to set up [effects](https://www.palantir.com/docs/foundry/automate/effect-actions/), including actions or logic.

You can additionally queue effect executions to ensure ordered event processing.

When using a binary stream column as the input for an effect, Automate will decode the content for you. For example, the binary stream value `eyJIZWxsbyI6ICJXb3JsZCEifQ==` will be passed to your effect as the string value `{"Hello": "World!"}`.

### [](https://www.palantir.com/docs/foundry/automate/streaming/#example-use-case-1)Example use case

Consider a scenario where you are monitoring a stream of temperature sensor data. You can set up an automation to trigger an alert if the temperature exceeds a certain threshold, ensuring immediate response to potential overheating issues.

[← PREVIOUS Automation dependencies](https://www.palantir.com/docs/foundry/automate/automation-dependencies/)

[NEXT Effects / Overview →](https://www.palantir.com/docs/foundry/automate/effects/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

