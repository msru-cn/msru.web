Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/

Markdown Content:
## Service logs and debugging

To access detailed logging information, navigate to the **Details** view after selecting the **View log details** option for a specific execution.

The service logs provide:

*   **Chronological log entries:** All log messages generated during execution.
*   **Log levels:**`INFO`, `WARN`, `ERROR`, `DEBUG`, and `TRACE` messages.
*   **Custom log messages:** Any console.log() or logging statements from your functions or models.

![Image 1: Example Workflow Lineage with service logs](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-service-logs.png)

## Permission required

To view traces and service logs, an administrator must enable [log access](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/) for the relevant project. Users always have access to logs for their own executions from the past 24 hours, except on [CBAC stacks](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/), where log access must be enabled to view trace and service logs.

## Filtering logs

To filter for specific log levels, use the **log levels** selector at the top of the table:

![Image 2: Example Workflow Lineage with service log filter](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-service-log-filter.png)

Available log levels:

*   **ERROR:** Error messages and stack traces
*   **WARN:** Warnings about potential issues
*   **INFO:** General information about execution flow
*   **DEBUG:** Detailed debugging information
*   **TRACE:** Detailed trace information

To see the full details of any log entry, select the **Content** field:

![Image 3: Example Workflow Lineage with service log details](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-service-log-details.png)

## Writing effective logs in your functions

Effective logging helps you debug issues quickly and understand your function's behavior in production. Follow these best practices:

### Choose appropriate log levels

*   **INFO:** Use for normal operation flow and key business events.
*   **WARN:** Use for recoverable issues or unexpected conditions that don't prevent execution.
*   **ERROR:** Use for failures that prevent normal operation.
*   **DEBUG:** Use for detailed diagnostic information (avoid in production).

### Include relevant context

We recommend including identifiers and relevant data that can help you understand what has happened:

Copied!

```
1// TypeScript v1 example - Good logging practices
2console.log("Processing order", orderId, "for user", userId); // Include relevant IDs
3console.log("Retrieved", results.length, "items from Ontology"); // Include counts/metrics
4console.warn("Retry attempt", attemptNumber, "of", maxRetries, "for operation", operationId); // Include retry context
5console.error("Failed to process order", orderId, "Error:", error.message); // Include error details
```

Copied!

```
1import { logs } from "@opentelemetry/api-logs";
2const logger = logs.getLogger("my-function");
3
4// TypeScript v2 example - Good logging practices
5logger.emit({
6    severityText: "INFO",
7    attributes: { LOG_MESSAGE: `Processing order ${orderId} for user ${userId}` }, // Include relevant IDs
8    body: { orderId, userId },
9});
10logger.emit({
11    severityText: "WARN",
12    attributes: { LOG_MESSAGE: `Retry attempt ${attemptNumber} of ${maxRetries} for operation ${operationId}` }, // Include retry context
13    body: { attemptNumber, maxRetries, operationId },
14});
15logger.emit({
16    severityText: "ERROR",
17    attributes: { LOG_MESSAGE: `Failed to process order ${orderId}. Error: ${error.message}` }, // Include error details
18    body: { orderId, error: error.message },
19});
```

### Avoid logging sensitive data

Never log sensitive information that could compromise security:

Copied!

```
1// ❌ Don't do this
2console.log("User credentials", username, password);
3console.log("API response", fullApiResponse); // May contain sensitive data
4
5// ✅ Do this instead
6console.log("Authentication attempt for user", username);
7console.log("API call completed with status", response.status);
```

## See also

*   [Log search](https://www.palantir.com/docs/foundry/aip-observability/log-search/): Search across logs from all executions for a source executor.
*   [Log permissions](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/): Configure who can view logs.
*   [Trace view](https://www.palantir.com/docs/foundry/aip-observability/trace-view/): Correlate logs with execution timeline.
