Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/automate/

Markdown Content:

# Automate

Automate 是一个完全向后兼容的产品，替代 [Object Monitoring](https://www.palantir.com/docs/foundry/object-monitors/overview/) 成为平台中所有业务自动化的统一入口。

**Automate** 是一个业务自动化应用。通过 Automate，你可以定义持续检查或按计划检查的条件，以及当指定条件满足时自动执行的效果。

条件可以是 _基于时间的条件_（"每周一上午 9 点触发"）、基于 Foundry Ontology 构建的 _对象数据条件_（"当添加优先级为 `high` 的新 `Alert` 对象时触发"），或基于时间和对象数据条件的组合。

**可用效果：**

*   提交 [Foundry actions](https://www.palantir.com/docs/foundry/action-types/overview/)
*   触发 [AIP Logic functions](https://www.palantir.com/docs/foundry/logic/overview/)
*   执行 [Foundry functions](https://www.palantir.com/docs/foundry/functions/overview/)
*   发送带附件的平台和邮件通知

## 用例

Automate 可用于各种不同的自动化工作流，包括：

*   [**Scheduled report sending and digests:**](https://www.palantir.com/docs/foundry/automate/example-weekly-report/) 指定时间并向预定义的收件人列表发送周报。从 [Notepad](https://www.palantir.com/docs/foundry/notepad/overview/) 或 [Notepad templates](https://www.palantir.com/docs/foundry/notepad/templates-overview/) 生成的 PDF 可以自动附加到邮件中。
*   **数据告警：** 定义和监控对象集，当特定数据条件满足时通知用户；例如，当开放问题对象的总数超过阈值时。
*   **工作流自动化：** Automate 可用于自动对满足指定条件的对象数据执行 Actions。可以自动化的任务包括：
    *   检查数据异常并自动将这些对象传入带有修复问题逻辑的 Action。
    *   监控建议或潜在 Actions，并在预设的事件和时间条件满足时自动应用它们。这些 Actions 可以包括通过 Webhooks 向外部系统发起 API 调用以直接在外部系统中应用变更。

*   **监控搜索：** 配置自动化在已保存的对象探索有新结果或搜索结果的整体条件满足时通知；例如，所有传感器对象中的最高温度超过阈值。

## 访问 Automate

要访问 Automate，在 Foundry 导航侧边栏中选择 Automate 应用图标。按照我们的文档中 [getting started with Automate](https://www.palantir.com/docs/foundry/automate/getting-started/) 的步骤开始。

Automate 专为业务自动化设计。如果你在寻找数据连接和管道构建的健康监控，参见 [Health checks](https://www.palantir.com/docs/foundry/health-checks/overview/) 文档。

[← 上一页 Application building / Pilot / Troubleshooting](https://www.palantir.com/docs/foundry/pilot/troubleshooting/)

[下一页 Getting started →](https://www.palantir.com/docs/foundry/automate/getting-started/)
