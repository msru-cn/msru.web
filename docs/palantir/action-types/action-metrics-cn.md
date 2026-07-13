Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/action-metrics/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/action-metrics/#action-metrics)Action metrics

Action metrics 展示某个 action type 在过去 30 天的近实时使用情况。你可以在 [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/) 的 action type 概览页面，或者在 [Workflow Lineage](https://www.palantir.com/docs/foundry/workflow-lineage/overview/) 中选择某次执行的 action 节点来查看这些指标。可用指标如下：

*   **成功/失败指标：** 通过成功和失败计数监控 action 的当前状态。可以快速发现问题并主动排查，在失败发生时立即处理。
*   **P95 耗时指标：** 追踪每个 action type 的第 95 百分位（P95）执行耗时。这个指标反映执行时间的上限，帮助你发现性能瓶颈、优化工作流，确保运行稳定高效。

你还可以查看 [run history](https://www.palantir.com/docs/foundry/aip-observability/run-history/)，它提供了某个 action 过去七天执行记录的完整视图。了解更多 [AIP observability 功能](https://www.palantir.com/docs/foundry/aip-observability/overview/)。

![Image 2: 概览页面中 action metrics 截图。](https://www.palantir.com/docs/resources/foundry/action-types/action-metrics-failures.png)

所有指标使用 Foundry Telemetry Service (FTS) 的最新数据进行近实时更新，确保你获得最新的监控、调试和健康状态信息。

## [](https://www.palantir.com/docs/foundry/action-types/action-metrics/#action-failure-types)Action 失败类型

Action metrics 不需要 action log 即可显示。与 action log 不同，action metrics 会追踪失败。

Action metrics 有多种失败类别：

*   **Invalid parameter failure：** action 提交时使用了在该 action 上下文中无效的 parameter。
*   **Scale limit failure：** action 影响的 object type 数量超过了允许的上限（默认通常为 10,000）。
*   **Authentication failure：** 用户未通过该 action 的安全提交条件。
*   **Side effect failure：** action 因 webhook 或配置错误的 side effect 而失败。
*   **Function failure：** action 因底层 function 失败而失败。仅 function-backed action 可能出现此失败模式。
*   **User-facing function failure：** action 底层的 function 抛出了一个面向用户的错误。仅 function-backed action 可能出现此失败模式。
*   **Conflict failure：** action 因冲突（如并发修改）而失败。
*   **Unclassified failure：** action 失败不属于以上任何类别。

## [](https://www.palantir.com/docs/foundry/action-types/action-metrics/#permissions)权限

查看 action metrics 需要对该 action 拥有 `viewer` 角色。

[← 上一页 Branching action types](https://www.palantir.com/docs/foundry/action-types/branching-action-types/)

[下一页 Action log →](https://www.palantir.com/docs/foundry/action-types/action-log/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

