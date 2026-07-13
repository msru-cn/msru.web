Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/run-history/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#run-history)Run history

To see the run history for a Function, Action or automation, navigate to the resource, then select the **Run history** tab. This provides a complete view of all executions over the past 30 days.

![Image 3: The Run history tab displays a table of recent executions.](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-run-history.png)

## [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#run-history-data)Run history data

The **Run history** table includes:

*   **Timestamp:** When each execution finished.
*   **Status:** Success (✓) or failure (✗).
*   **Runtime:** Total execution time.
*   **Caller:** The resource that triggered the execution; this can be a Workshop application, Agent, Third-party application, Automation, Action, or other system component.
*   **Source executor:** The top level executable resource type (limited to Function, Action, or Automation) in the call chain.

The run history displays executions from the past 30 days, sorted by timestamp.

## [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#limitations)Limitations

*   **UDFs in Pipeline Builder:** Execution history is not available for user-defined functions (UDFs) run from a sidecar container, such as in [Python](https://www.palantir.com/docs/foundry/functions/python-functions-builder/) or [Java](https://www.palantir.com/docs/foundry/transforms-java/user-defined-functions/) UDFs.

## [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#filter-run-history)Filter run history

You can filter the results by:

*   **Status:** View successful or failed executions.
*   **Timestamp range:** View executions within a specified date range.
*   **User:** View executions triggered by a specific user.
*   **Run time range:** View executions within a specified duration range.
*   **Version:** View executions for a specified version (only applicable for functions).
*   **Caller:** View executions originating from a specified resource.
*   **Failure type:** View executions that failed for a specific reason. Learn more about [function](https://www.palantir.com/docs/foundry/functions/function-metrics/#function-failure-types) and [action](https://www.palantir.com/docs/foundry/action-types/action-metrics/#action-failure-types) failure types.

If more than one filter is specified, the results will be filtered to include only those that match all specified filters.

## [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#inspect-a-specific-execution)Inspect a specific execution

To inspect a specific execution, select the **View log details** option to access the full trace and debugging information.

![Image 4: View log details for a specific execution in the Run history table.](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-view-log-details.png)

## [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#next-steps)Next steps

*   View [trace details](https://www.palantir.com/docs/foundry/aip-observability/trace-view/) to understand execution flow.
*   Access [service logs](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/) for detailed debugging.
*   Configure [log permissions](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/) to enable log visibility.

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/aip-observability/overview/)

[NEXT Tracing →](https://www.palantir.com/docs/foundry/aip-observability/trace-view/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

