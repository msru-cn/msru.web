Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/trace-view/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/aip-observability/trace-view/#trace-views)追踪视图

**Trace** 视图提供了工作流执行的可视化时间线，展示不同服务之间如何交互以及时间花在了哪里。具体来说，_分布式追踪_是包含从请求生成到响应接收之间所有事件的时间线；这些事件可以跨越进程、网络和安全边界。分布式追踪是了解请求在你的应用中经过的路径的关键。

## [](https://www.palantir.com/docs/foundry/aip-observability/trace-view/#permission-required)所需权限

要查看追踪和服务日志，管理员必须为相关项目启用[日志访问](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/)。用户始终可以访问自己过去 24 小时内的执行日志，但在 [CBAC 堆栈](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/) 上除外，在 CBAC 堆栈中必须启用日志访问才能查看追踪和服务日志。

## [](https://www.palantir.com/docs/foundry/aip-observability/trace-view/#key-elements-of-the-trace-view)追踪视图的关键元素

![图片 3：追踪视图的 Workflow Lineage 示例](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-trace-view.png)

*   **时间线可视化：** 水平条形显示每个操作的持续时间。
*   **服务层级：** 嵌套的 span 显示操作之间的父子关系。
*   **资源类型：** 颜色标识每个 span 是来自函数、action、自动化、模型还是 LLM 调用。
*   **性能指标：** 每个 span 显示其执行时间。

## [](https://www.palantir.com/docs/foundry/aip-observability/trace-view/#analyzing-trace-details)分析追踪详情

你可以选择任何 span 以查看该特定操作的完整 **Trace Log Details**。

追踪详情包括：

*   **操作名称：** 正在执行的特定函数、action、语言模型、自动化、模型或内部操作。
*   **持续时间：** 操作的执行时间。
*   **输入/输出数据：** 对于函数执行请求，你可以查看传递给操作的参数和操作返回的参数。
*   **模型交互：** 对于 LLM 调用，你可以查看提示词、响应和令牌使用量。
*   **错误信息：** 失败操作的堆栈跟踪和错误消息。
*   **追踪标识符：**`foundryTraceId`，Foundry 分配的用于获取遥测数据的标识符，以及 `x-b3-traceid`，标准分布式追踪标识符，包含在每个服务日志条目的 **tags** 字段中（尽力而为；对于源自 Foundry 之外的日志，如使用 Ontology SDK 构建的应用，可能不存在）。

![图片 4：带追踪日志详情的 Workflow Lineage 示例](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-trace-log-details.png)

## [](https://www.palantir.com/docs/foundry/aip-observability/trace-view/#related-features)相关功能

*   [执行历史](https://www.palantir.com/docs/foundry/aip-observability/run-history/)：在深入追踪之前查看所有最近的执行记录。
*   [服务日志](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/)：访问每个 span 的详细日志消息。
*   [性能监控](https://www.palantir.com/docs/foundry/aip-observability/performance-monitoring-and-optimization/)：分析追踪数据以识别优化机会。

[← 上一页 执行历史](https://www.palantir.com/docs/foundry/aip-observability/run-history/)

[下一页 日志与调试 →](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
