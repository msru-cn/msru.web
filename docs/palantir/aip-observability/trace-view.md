Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/trace-view/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/aip-observability/trace-view/#trace-views)Trace views

The **Trace** view provides a visual timeline of your workflow execution, showing how different services interact and where time is spent. Specifically, a _distributed trace_ is the timeline comprising all of the events between the generation of a request and the receipt of a response; these events can cross process, network and security boundaries. Distributed traces are key to understanding the path a request takes within your application.

## [](https://www.palantir.com/docs/foundry/aip-observability/trace-view/#permission-required)Permission required

To view traces and service logs, an administrator must enable [log access](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/) for the relevant project. Users always have access to logs for their own executions from the past 24 hours, except on [CBAC stacks](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/), where log access must be enabled to view trace and service logs.

## [](https://www.palantir.com/docs/foundry/aip-observability/trace-view/#key-elements-of-the-trace-view)Key elements of the trace view

![Image 3: Example Workflow Lineage with trace view](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-trace-view.png)

*   **Timeline visualization:** Horizontal bars show the duration of each operation.
*   **Service hierarchy:** Nested spans show parent-child relationships between operations.
*   **Resource types:** Coloring indicating whether each span was produced from a function, action, automation, model, or LLM call.
*   **Performance metrics:** Each span displays its execution time.

## [](https://www.palantir.com/docs/foundry/aip-observability/trace-view/#analyzing-trace-details)Analyzing trace details

You can select any span to see the full **Trace Log Details** for that specific operation.

Trace details include:

*   **Operation name:** The specific function, action, language model, automation, model, or inner operation being executed.
*   **Duration:** Execution time for the operation.
*   **Input/output data:** For Function execution requests, you can view the parameters passed to and returned from the operation.
*   **Model interactions:** For LLM calls, you can view the prompt, response, and token usage.
*   **Error information:** Stack traces and error messages for failed operations.
*   **Trace identifiers:**`foundryTraceId`, the Foundry-assigned identifier used to fetch telemetry, and `x-b3-traceid`, the standard distributed-tracing identifier included in the **tags** field on each service log entry (best-effort; may be absent on logs originating outside Foundry, such as applications built with the Ontology SDK).

![Image 4: Example Workflow Lineage with trace log details](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-trace-log-details.png)

## [](https://www.palantir.com/docs/foundry/aip-observability/trace-view/#related-features)Related features

*   [Execution history](https://www.palantir.com/docs/foundry/aip-observability/run-history/): View all recent executions before diving into traces.
*   [Service logs](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/): Access detailed log messages for each span.
*   [Performance monitoring](https://www.palantir.com/docs/foundry/aip-observability/performance-monitoring-and-optimization/): Analyze trace data to identify optimization opportunities.

[← PREVIOUS Execution history](https://www.palantir.com/docs/foundry/aip-observability/run-history/)

[NEXT Logging and debugging →](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

