Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/metrics/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/aip-observability/metrics/#metrics)指标

Foundry 为函数、actions 和 AIP Logic 资源提供近实时指标。你可以通过 [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/) 或在 [Workflow Lineage](https://www.palantir.com/docs/foundry/workflow-lineage/overview/) 中选择给定执行的资源节点来访问这些指标。这些指标让你了解过去 30 天内 Ontology 和 AIP 工作流的健康状况和性能。

## [](https://www.palantir.com/docs/foundry/aip-observability/metrics/#available-metrics)可用指标

每种资源类型均可使用以下指标：

*   **成功/失败指标：** 通过成功和失败计数监控执行的当前状态。这有助于快速发现问题并支持主动故障排除。

![图片 3：Workflow Lineage 中 AIP Logic 资源执行指标示例。](https://www.palantir.com/docs/resources/foundry/aip-observability/logic-metric-in-wfl-executions.png)

*   **P95 时长指标：** 跟踪第 95 百分位（P95）执行时长。此指标突出显示执行时间的上限范围，帮助你检测性能瓶颈并优化工作流。

![图片 4：Workflow Lineage 中 AIP Logic 资源 P95 时长指标示例。](https://www.palantir.com/docs/resources/foundry/aip-observability/logic-metric-in-wfl-p95.png)

所有指标均使用 Foundry Telemetry Service (FTS) 的最新数据进行近实时更新。

## [](https://www.palantir.com/docs/foundry/aip-observability/metrics/#resource-specific-metrics)资源特定指标

每种资源类型都有自己的指标页面，包含可用失败类别的详细信息以及如何访问指标：

*   [函数指标](https://www.palantir.com/docs/foundry/functions/function-metrics/)
*   [Action 指标](https://www.palantir.com/docs/foundry/action-types/action-metrics/)
*   [AIP Logic 指标](https://www.palantir.com/docs/foundry/logic/logic-metrics/)

## [](https://www.palantir.com/docs/foundry/aip-observability/metrics/#permissions)权限

要查看指标，你必须是资源的 `viewer`。更多详情请参见[日志权限](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/)页面。

## [](https://www.palantir.com/docs/foundry/aip-observability/metrics/#related-resources)相关资源

*   **[执行历史](https://www.palantir.com/docs/foundry/aip-observability/run-history/)：** 查看过去 30 天内的完整执行历史。
*   **[函数监控](https://www.palantir.com/docs/foundry/functions/monitoring/)：** 为函数性能和故障率设置告警。
*   **[Action 监控](https://www.palantir.com/docs/foundry/action-types/monitoring/)：** 为 action 性能和可靠性配置监控规则。

[← 上一页 日志权限](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/)

[下一页 性能监控与优化 →](https://www.palantir.com/docs/foundry/aip-observability/performance-monitoring-and-optimization/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
