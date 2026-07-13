Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/run-history/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#run-history)执行历史

要查看函数、action 或自动化的执行历史，请导航到该资源，然后选择 **Run history** 标签页。这将提供过去 30 天内所有执行的完整视图。

![图片 3：Run history 标签页显示最近执行的表格。](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-run-history.png)

## [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#run-history-data)执行历史数据

**Run history** 表格包含：

*   **时间戳：** 每次执行完成的时间。
*   **状态：** 成功（✓）或失败（✗）。
*   **运行时间：** 总执行时间。
*   **调用方：** 触发执行的资源；可以是 Workshop 应用、Agent、第三方应用、自动化、Action 或其他系统组件。
*   **源执行器：** 调用链中的顶层可执行资源类型（仅限于 Function、Action 或 Automation）。

执行历史显示过去 30 天的执行记录，按时间戳排序。

## [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#limitations)限制

*   **Pipeline Builder 中的 UDF：** 对于从 sidecar 容器运行的用户定义函数（UDF），如 [Python](https://www.palantir.com/docs/foundry/functions/python-functions-builder/) 或 [Java](https://www.palantir.com/docs/foundry/transforms-java/user-defined-functions/) UDF，执行历史不可用。

## [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#filter-run-history)筛选执行历史

你可以按以下条件筛选结果：

*   **状态：** 查看成功或失败的执行。
*   **时间戳范围：** 查看指定日期范围内的执行。
*   **用户：** 查看特定用户触发的执行。
*   **运行时间范围：** 查看指定时长范围内的执行。
*   **版本：** 查看指定版本的执行（仅适用于函数）。
*   **调用方：** 查看来自指定资源的执行。
*   **失败类型：** 查看因特定原因失败的执行。了解更多关于[函数](https://www.palantir.com/docs/foundry/functions/function-metrics/#function-failure-types)和 [action](https://www.palantir.com/docs/foundry/action-types/action-metrics/#action-failure-types) 的失败类型。

如果指定了多个筛选条件，结果将只包含匹配所有指定筛选条件的记录。

## [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#inspect-a-specific-execution)检查特定执行

要检查特定执行，选择 **View log details** 选项以访问完整的追踪和调试信息。

![图片 4：在 Run history 表格中查看特定执行的日志详情。](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-view-log-details.png)

## [](https://www.palantir.com/docs/foundry/aip-observability/run-history/#next-steps)后续步骤

*   查看[追踪详情](https://www.palantir.com/docs/foundry/aip-observability/trace-view/)以了解执行流程。
*   访问[服务日志](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/)进行详细调试。
*   配置[日志权限](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/)以启用日志可见性。

[← 上一页 概览](https://www.palantir.com/docs/foundry/aip-observability/overview/)

[下一页 追踪 →](https://www.palantir.com/docs/foundry/aip-observability/trace-view/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
