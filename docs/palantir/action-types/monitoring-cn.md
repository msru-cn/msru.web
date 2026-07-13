Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/monitoring/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/monitoring/#action-monitoring)Action monitoring

Foundry 中的 action 可以被监控，以追踪性能和可靠性。本页介绍 action 可用的监控功能。

## [](https://www.palantir.com/docs/foundry/action-types/monitoring/#available-monitoring-rules)可用的监控规则

Foundry 中的 action 监控支持两种关键规则类型：

1.   **Action duration p95：** 当第 95 百分位执行时间超过阈值时发出告警。
2.   **Number of action failures in window：** 当时间窗口内的失败计数超过阈值时发出告警。

有关详细的配置选项和参数，请查阅我们的 [监控规则参考文档](https://www.palantir.com/docs/foundry/monitoring-views/rules-reference/#action-rules)。

## [](https://www.palantir.com/docs/foundry/action-types/monitoring/#set-up-action-monitoring)设置 action 监控

要为 action 设置监控，请按照创建监控视图和规则的标准流程：

1.   按照 [监控视图概览文档](https://www.palantir.com/docs/foundry/monitoring-views/overview/#create-a-new-monitoring-view) 中描述的方式创建监控视图。
2.   按照 [添加监控规则](https://www.palantir.com/docs/foundry/monitoring-views/overview/#add-a-monitoring-rule) 部分的说明，为 action 或 action type 添加监控规则。
3.   配置适当的阈值和严重性级别。
4.   按照 [告警订阅指南](https://www.palantir.com/docs/foundry/monitoring-views/overview/#subscribe-to-alerts) 设置告警通知。

![Image 3: 监控告警配置示例。](https://www.palantir.com/docs/resources/foundry/action-types/monitoring-alerts.png)

### [](https://www.palantir.com/docs/foundry/action-types/monitoring/#dynamic-scopes)Dynamic scopes

Action 监控支持 **Workflow Lineage**、**Workshop** 和 **OSDK application** 作为 dynamic scopes。选择其中一种 scope 后，监控会自动追踪 scoped resource 使用的所有 action，并在 action 添加或删除时自动调整，无需额外干预。

![Image 4: 选择 scope 对话框，显示 action type 监控的 dynamic scope 选项，包括 Workshop module、Workflow Lineage 和 Developer Console application。](https://www.palantir.com/docs/resources/foundry/action-types/app-as-dynamic-scope-monitoring.png)

## [](https://www.palantir.com/docs/foundry/action-types/monitoring/#related-documentation)相关文档

*   [监控规则参考](https://www.palantir.com/docs/foundry/monitoring-views/rules-reference/#action-rules)
*   [监控视图概览](https://www.palantir.com/docs/foundry/monitoring-views/overview/)

[← 上一页 Permissions](https://www.palantir.com/docs/foundry/action-types/permissions/)

[下一页 Undo or revert Actions →](https://www.palantir.com/docs/foundry/action-types/action-reverts/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

