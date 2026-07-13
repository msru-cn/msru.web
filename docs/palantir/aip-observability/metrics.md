Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/metrics/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/aip-observability/metrics/#metrics)Metrics

Foundry provides near real-time metrics for functions, actions, and AIP Logic resources. You can access these metrics through [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/) or in [Workflow Lineage](https://www.palantir.com/docs/foundry/workflow-lineage/overview/) by selecting the resource node for a given execution. These metrics give you visibility into the health and performance of your Ontology and AIP workflows over the last 30 days.

## [](https://www.palantir.com/docs/foundry/aip-observability/metrics/#available-metrics)Available metrics

The following metrics are available for each resource type:

*   **Success/failure metrics:** Monitor the current status of your executions with success and failure counts. This enables rapid identification of issues and supports proactive troubleshooting.

![Image 3: Example of execution metrics for an AIP Logic resource in Workflow Lineage.](https://www.palantir.com/docs/resources/foundry/aip-observability/logic-metric-in-wfl-executions.png)

*   **P95 duration metric:** Track the 95th percentile (P95) execution duration. This metric highlights the upper range of execution times, helping you detect performance bottlenecks and optimize workflows.

![Image 4: Example of P95 duration metric for an AIP Logic resource in Workflow Lineage.](https://www.palantir.com/docs/resources/foundry/aip-observability/logic-metric-in-wfl-p95.png)

All metrics are updated in near real-time using the latest data from the Foundry Telemetry Service (FTS).

## [](https://www.palantir.com/docs/foundry/aip-observability/metrics/#resource-specific-metrics)Resource-specific metrics

Each resource type has its own metrics page with details on available failure categories and how to access metrics:

*   [Function metrics](https://www.palantir.com/docs/foundry/functions/function-metrics/)
*   [Action metrics](https://www.palantir.com/docs/foundry/action-types/action-metrics/)
*   [AIP Logic metrics](https://www.palantir.com/docs/foundry/logic/logic-metrics/)

## [](https://www.palantir.com/docs/foundry/aip-observability/metrics/#permissions)Permissions

To view metrics, you must be a `viewer` on the resource. For more details, see the [log permissions](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/) page.

## [](https://www.palantir.com/docs/foundry/aip-observability/metrics/#related-resources)Related resources

*   **[Execution history](https://www.palantir.com/docs/foundry/aip-observability/run-history/):** View a complete history of executions over the past 30 days.
*   **[Function monitoring](https://www.palantir.com/docs/foundry/functions/monitoring/):** Set up alerts for function performance and failure rates.
*   **[Action monitoring](https://www.palantir.com/docs/foundry/action-types/monitoring/):** Configure monitoring rules for action performance and reliability.

[← PREVIOUS Log permissions](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/)

[NEXT Performance monitoring and optimization →](https://www.palantir.com/docs/foundry/aip-observability/performance-monitoring-and-optimization/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

