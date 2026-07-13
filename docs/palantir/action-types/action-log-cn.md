Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/action-log/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/action-log/#action-log)Action log

Action log 把所有 action 提交建模为 object type，可以在 Foundry 的 object-aware 工具中进行分析和展示。你可以把 action log object type 作为决策工作流的输入，也可以用来监控 Ontology 的变更。

Action log 的设计目标是捕获通过提交 action 做出的决策，并把这些决策作为数据暴露在 Ontology 中。如果需要记录某个 object 的所有编辑历史，可以为该 object type 开启 [edit history](https://www.palantir.com/docs/foundry/object-edits/user-edit-history/)。

## [](https://www.palantir.com/docs/foundry/action-types/action-log/#background)Background

Action 是修改 Ontology 和触发相关 side effect 的主要方式。通常这些 Ontology 修改是特定决策的结果，或者伴随着数据审计需求。Action log 简化了表示这些决策和数据编辑的 object type 的生成和维护。为了便于识别，所有 action log object type 都以 `[LOG]` 为前缀。

## [](https://www.palantir.com/docs/foundry/action-types/action-log/#action-log-ontology)Action log Ontology

Action log object type 与 action type 一一对应。提交一个 action 会生成对应 action log object type 的一个新 object。这个新创建的 object 会自动链接到该 action 编辑的所有 object。通过让 log object type 与 action type 一一对应，action log 可以捕获超出具体 object 编辑范围的上下文，比如还有哪些 object 被同时编辑了，以及提交 action 时 Ontology 所表示的世界状态。

举个例子，假设有一个 `Close Alerts` action type，它把多个选中的 `Alert` object 的 "Status" 属性改为 "Closed"。配置了 action log 后，一次性关闭 10 个 `Alert` object 会生成一个 `action log` object，并通过外键链接到这 10 个 `Alert` object。

要使用配置了 action log 的 action type，用户需要对该 action log object type 拥有相应权限，就跟 action type 通过 rules 和 functions 创建或修改的其他 object type 一样。

### [](https://www.palantir.com/docs/foundry/action-types/action-log/#action-log-schema)Action log schema

默认情况下，action log object type 会存储：

*   **Action RID：** 单次 action 提交的唯一标识符
*   **Action type RID：** 单个 action type 的唯一标识符
*   **Action type version：** 每次 action type 更新时自动递增的版本号
*   **Timestamp：** action 提交的 UTC 时间戳
*   **UserId：** 提交 action 的用户的 Multipass user ID
*   **Edited objects：** action 编辑的所有 object 的主键值。注意，不支持存储被编辑 object 除主键以外的其他属性。
*   [可选] **Summary：** 可自定义的字符串，用于描述该 action
*   [可选] **Parameter values**
*   [可选] **Object reference parameter 的属性值**（如果 `allow multiple values` 已启用，则不支持 object reference parameter）

Action log object type 可以配置为存储未被 action 编辑的 object 属性。这样既能记录数据编辑，也能记录 Ontology 编辑的相关上下文或动机信息。

回到 `Close Alerts` action type 的例子，假设 `Alert` object 还有一个 "Priority" 属性（值为 "High Priority" 和 "Low Priority"），以及 "Created at" 时间戳和 "Source" 机器。即使这些属性不被 `Close Alerts` 编辑，action log 也支持存储它们。通过按 "Priority" 聚合（不编辑该列），我们可以回答类似 "大多数 'High Priority' 告警的来源是哪里？" 或 "关闭 'High Priority' 告警需要多长时间？" 这样的问题。

## [](https://www.palantir.com/docs/foundry/action-types/action-log/#action-log-on-function-backed-action-types)Action log 在 function-backed action type 上的使用

要为 function-backed action type 配置 action log，底层 Ontology edit function 必须配置 `Edits` provenance。更多关于 `Edits` provenance 的信息请参阅 [functions 文档](https://www.palantir.com/docs/foundry/functions/edits-overview/)。

## [](https://www.palantir.com/docs/foundry/action-types/action-log/#action-log-timeline)Action log 时间线

你可以使用自定义 Workshop widget 在时间线中查看 action log object type。通过这个 widget，可以配置时间线来支持数据审计，帮助回答 "改了什么、谁改的、什么时候改的？" 这些问题。

在 Workshop 中，可以将多个 action log object type 合并（union），以获得某个用例或整个 Ontology 中编辑操作的全局视图。

配置 action log 时间线时，先选择被编辑的 object type，然后选择要显示的 action log object type 以及所需的 action log object type 属性。

[← 上一页 Action metrics](https://www.palantir.com/docs/foundry/action-types/action-metrics/)

[下一页 Add action types to a Marketplace product →](https://www.palantir.com/docs/foundry/action-types/marketplace-action-types/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

