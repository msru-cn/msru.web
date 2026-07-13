Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/function-actions-overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/function-actions-overview/#function-backed-actions)Function-backed actions

在 action type 中，[rules](https://www.palantir.com/docs/foundry/action-types/rules/) 定义了 action 应用时 object 应该如何变更。许多 action type 可以用简单的 rule 来定义，允许你创建、修改和删除 object，或者创建和删除 object 之间的 link。

但在某些情况下，简单的 rule 不足以描述你想要的变更。例如，你可能需要：

*   修改当前互相链接的多个 object。例如，你可能想把 `Incident` object 的 `status` 字段设为 `Closed`，同时把所有链接的 `Alert` object 的 `status` 设为 `Resolved`。
*   基于更复杂的逻辑修改 object 的属性。例如，你可能想基于读取多个 object 数据的业务逻辑来计算一个值，然后将该值写入一个 object 属性。
*   创建多种不同类型的 object 并设置它们之间的链接。

为了支持这些用例，action type 可以配置为调用一个 [function](https://www.palantir.com/docs/foundry/functions/overview/) 来定义 object 应如何被修改的逻辑。这些 action type 通常称为 **function-backed action**。通过使用 function，你可以创建任意复杂度的 action type，读取任意数量的 object 并按需修改。

虽然 function-backed action type 非常灵活，但需要注意它们受 [action type 限制](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/) 和 [function 执行限制](https://www.palantir.com/docs/foundry/functions/manage-functions/#enforced-limits) 的约束。

跟随 [教程](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/) 开始使用 function-backed action。

[← 上一页 Actions on structs](https://www.palantir.com/docs/foundry/action-types/actions-on-structs/)

[下一页 Getting started →](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

