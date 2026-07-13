Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/overview/

Markdown Content:
## AIP 可观测性

AIP 可观测性功能通过指标、追踪、日志和执行历史，为你提供 AIP 和 Ontology 工作流执行情况的可见性。作为平台整体可观测性策略的一部分，这些功能集成在 Workflow Lineage 中，使跨职能团队能够监控和优化使用 AIP 和 Ontology 构建的应用、工作流和产品在每一层的性能。

![图片 1：Workflow Lineage 追踪视图示例](https://www.palantir.com/docs/resources/foundry/aip-observability/aip-observability-overview-example.png)

## AIP 可观测性的核心能力

*   **[指标](https://www.palantir.com/docs/foundry/aip-observability/metrics/)：** 监控函数、actions 和 AIP Logic 的近实时成功/失败计数和 P95 执行时长。
*   **[执行历史](https://www.palantir.com/docs/foundry/aip-observability/run-history/)：** 跟踪过去 30 天内的函数、actions、自动化和 AIP Logic 执行记录。
*   **[分布式追踪](https://www.palantir.com/docs/foundry/aip-observability/trace-view/)：** 可视化跨函数、actions、语言模型、自动化和 Ontology 加载的完整执行流程。
*   **[日志和调试](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/)：** 访问服务日志、自定义函数日志消息、令牌使用量、提示词、错误详情等。
*   **[日志搜索](https://www.palantir.com/docs/foundry/aip-observability/log-search/)：** 搜索源执行器的所有服务日志，查找跨多次执行的特定日志消息、错误或模式。
*   **[性能监控](https://www.palantir.com/docs/foundry/aip-observability/performance-monitoring-and-optimization/)：** 识别瓶颈并优化执行时间。
*   **[日志导出到 Foundry 流式数据集](https://www.palantir.com/docs/foundry/administration/configure-logging/)：** 将日志导出到流式数据集并对遥测数据执行复杂分析。

## AIP 可观测性入门

要使用 AIP 可观测性：

1.   在 Workflow Lineage 中导航到函数、action 或自动化。
2.   选择 **Run history** 标签页查看最近的执行记录。
3.   对任意执行选择 **View log details** 以访问[追踪](https://www.palantir.com/docs/foundry/aip-observability/trace-view/)和[日志](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/)。
4.   确保为你的资源配置了适当的[日志权限](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/)。

## 平台范围的可观测性

AIP 可观测性与 Palantir 平台的其余部分集成，即使你的注册未启用 AIP，也能提供对所有 Ontology 和 AIP 工作流的洞察。以下工具协同工作，为系统提供全面的可见性，从单个函数执行到平台范围的资源消耗。

### 性能监控与优化

*   **[函数插桩](https://www.palantir.com/docs/foundry/functions/instrumentation-telemetry/)：** 在生产环境中对函数进行插桩的工具概览。
*   **[函数监控](https://www.palantir.com/docs/foundry/functions/monitoring/)：** 为函数性能和故障率设置告警。
*   **[Action 指标](https://www.palantir.com/docs/foundry/action-types/action-metrics/)：** 分析 action 执行模式和性能。
*   **[Action 监控](https://www.palantir.com/docs/foundry/action-types/monitoring/)：** 配置监控规则以跟踪 action 性能和可靠性。
*   **[模型插桩](https://www.palantir.com/docs/foundry/integrate-models/instrumentation-telemetry/)：** 在生产环境中对模型进行插桩的工具概览。

### 资源使用和成本监控

*   **[AIP 使用指标](https://www.palantir.com/docs/foundry/workflow-lineage/aip-usage-observability/#aip-usage-metrics)：** 模型使用着色和图表，用于跟踪令牌使用量和模型请求。
*   **[Logic 计算使用量](https://www.palantir.com/docs/foundry/logic/compute-usage/)：** 跟踪 AIP Logic 应用中的计算消耗。
*   **[AIP 计算使用量](https://www.palantir.com/docs/foundry/aip/aip-compute-usage/)：** 了解跨 AIP 功能的计算分配和使用情况。

### 模型性能监控

*   **[AIP Evals](https://www.palantir.com/docs/foundry/aip-evals/getting-started/)：** 系统地评估和监控 LLM 性能。
