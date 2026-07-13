Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/

Markdown Content:
## 服务日志与调试

要访问详细的日志信息，请在选择特定执行的 **View log details** 选项后导航到 **Details** 视图。

服务日志提供：

*   **按时间排列的日志条目：** 执行期间生成的所有日志消息。
*   **日志级别：**`INFO`、`WARN`、`ERROR`、`DEBUG` 和 `TRACE` 消息。
*   **自定义日志消息：** 来自函数或模型的任何 console.log() 或日志语句。

![图片 1：Workflow Lineage 服务日志示例](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-service-logs.png)

## 所需权限

要查看追踪和服务日志，管理员必须为相关项目启用[日志访问](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/)。用户始终可以访问自己过去 24 小时内的执行日志，但在 [CBAC 堆栈](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/) 上除外，在 CBAC 堆栈中必须启用日志访问才能查看追踪和服务日志。

## 筛选日志

要筛选特定日志级别，请使用表格顶部的 **log levels** 选择器：

![图片 2：带服务日志筛选器的 Workflow Lineage 示例](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-service-log-filter.png)

可用日志级别：

*   **ERROR：** 错误消息和堆栈跟踪
*   **WARN：** 关于潜在问题的警告
*   **INFO：** 关于执行流程的一般信息
*   **DEBUG：** 详细的调试信息
*   **TRACE：** 详细的追踪信息

要查看任何日志条目的完整详情，选择 **Content** 字段：

![图片 3：带服务日志详情的 Workflow Lineage 示例](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-service-log-details.png)

## 在函数中编写有效的日志

有效的日志记录能帮助你快速调试问题并了解函数在生产环境中的行为。请遵循以下最佳实践：

### 选择适当的日志级别

*   **INFO：** 用于正常运行流程和关键业务事件。
*   **WARN：** 用于可恢复的问题或不影响执行的意外情况。
*   **ERROR：** 用于阻止正常运行的失败。
*   **DEBUG：** 用于详细的诊断信息（避免在生产环境中使用）。

### 包含相关上下文

建议包含标识符和相关数据，帮助你了解发生了什么：

Copied!

```
1// TypeScript v1 示例 - 良好的日志实践
2console.log("Processing order", orderId, "for user", userId); // 包含相关 ID
3console.log("Retrieved", results.length, "items from Ontology"); // 包含计数/指标
4console.warn("Retry attempt", attemptNumber, "of", maxRetries, "for operation", operationId); // 包含重试上下文
5console.error("Failed to process order", orderId, "Error:", error.message); // 包含错误详情
```

Copied!

```
1import { logs } from "@opentelemetry/api-logs";
2const logger = logs.getLogger("my-function");
3
4// TypeScript v2 示例 - 良好的日志实践
5logger.emit({
6    severityText: "INFO",
7    attributes: { LOG_MESSAGE: `Processing order ${orderId} for user ${userId}` }, // 包含相关 ID
8    body: { orderId, userId },
9});
10logger.emit({
11    severityText: "WARN",
12    attributes: { LOG_MESSAGE: `Retry attempt ${attemptNumber} of ${maxRetries} for operation ${operationId}` }, // 包含重试上下文
13    body: { attemptNumber, maxRetries, operationId },
14});
15logger.emit({
16    severityText: "ERROR",
17    attributes: { LOG_MESSAGE: `Failed to process order ${orderId}. Error: ${error.message}` }, // 包含错误详情
18    body: { orderId, error: error.message },
19});
```

### 避免记录敏感数据

绝不要记录可能危及安全的敏感信息：

Copied!

```
1// 不要这样做
2console.log("User credentials", username, password);
3console.log("API response", fullApiResponse); // 可能包含敏感数据
4
5// 应该这样做
6console.log("Authentication attempt for user", username);
7console.log("API call completed with status", response.status);
```

## 另请参阅

*   [日志搜索](https://www.palantir.com/docs/foundry/aip-observability/log-search/)：搜索源执行器的所有执行日志。
*   [日志权限](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/)：配置谁可以查看日志。
*   [追踪视图](https://www.palantir.com/docs/foundry/aip-observability/trace-view/)：将日志与执行时间线关联。
