Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/parameter-overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/parameter-overview/#parameters)Parameters

**Parameters** 是 action type 的输入。它们是 **Rules** 和其他 Foundry 应用之间的接口，如 [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/)、[Slate](https://www.palantir.com/docs/foundry/slate/overview/) 和 [Object Views](https://www.palantir.com/docs/foundry/object-views/overview/)。Parameters 被视为包含外部值的变量。每个 parameter 由一个类型定义，该类型决定它可以接受什么样的值。除了类型之外，parameter 还有多种其他可能的配置。每个 parameter 都可以单独配置是否在 form 中暴露，以及是否可以被用户更改。

Parameters 在 action type 中传递值，可以在 rules 中引用来将值传递给 object、link 或 side effect，在 submission criteria 中检查 action 是否可以提交，访问 action 更改前 object 属性的当前值，或在 overrides 中更改后续 parameter 的配置。

示例

一个 parameter 可以是允许用户修改所选 ticket 状态的 action type 中的 `Ticket` object type 形式。`Status` parameter 被定义为字符串。提交 action 时，object type parameter 会取所选 `Ticket` object 的值，`Status` parameter 包含未来的状态。然后 action type 将两个 parameter 值传递给 rules 并执行它们来编辑 object。

示例

作为 Workshop 中的变量，`previous_status` 可以获取所选 `Ticket` object 的 `Status` 属性的当前值。这可以传递给 action 中的隐藏 parameter `Previous Status`，`Status` parameter 可以包含更新后的状态。提交 action 后，action type 将 `Previous Status` 和 `Status` 值都传递给 rules 并执行它们来编辑 object。

[← 上一页 Rules](https://www.palantir.com/docs/foundry/action-types/rules/)

[下一页 Set parameter default value →](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

