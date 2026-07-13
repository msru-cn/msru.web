Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/parameters-override/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/parameters-override/#overrides)Overrides

Overrides 用于在特定情况下更改 parameter 的行为和配置。使用 overrides，parameters 和 form 可以变得更灵活，无需配置只有细微差异的单独 action type。合理使用 overrides 可以通过引导用户完成 action 提交来改善用户体验。

例如，假设你有一个 action type 可以更改 support ticket object 的状态，并且你想将 action 提交限制为 managers 和 assignees。虽然 assignees 可以更改状态，但 managers 必须提供理由。使用 overrides，`Justification reason` parameter 可以对 managers 设为必填和可见，而对 assignee 隐藏且可选。

## [](https://www.palantir.com/docs/foundry/action-types/parameters-override/#add-and-edit-overrides)添加和编辑 overrides

你可以从 parameter 视图的不同位置添加和编辑 overrides。添加新 override 最简单的方式是直接从 **General** 区域的 **Value** 标签页。通过点击三个选项之一的 **Add override**，你可以通过弹出窗口轻松创建 override，它会自动根据所选选项配置 override。**General** 区域还显示某个选项何时以及已配置了多少 overrides。要编辑现有 overrides，选择 override 按钮。

![Image 4: Override 弹出窗口](https://www.palantir.com/docs/resources/foundry/action-types/override_pop_up.png)

你也可以通过 **Overrides** 标签页手动添加 override。Overrides 标签页显示为该 parameter 配置的所有 overrides 的概览。你可以从这里添加 override blocks，或向现有 blocks 添加新条件或 overrides。

![Image 5: Override 标签页](https://www.palantir.com/docs/resources/foundry/action-types/override_tab.png)

## [](https://www.palantir.com/docs/foundry/action-types/parameters-override/#override-block)Override block

Override block 是 overrides 的基础。它定义了条件（显示在 "if" 部分）和 overrides（显示在 "then" 部分）。每个 block 的标题显示逻辑摘要。每个 parameter 可以包含多个 override blocks，但如果多个 block 为 true，只有第一个会被执行。

![Image 6: Override block](https://www.palantir.com/docs/resources/foundry/action-types/override_block.png)

### [](https://www.palantir.com/docs/foundry/action-types/parameters-override/#if-and-conditions)"If" 和条件

每个 block 可以包含一个或多个条件。要了解更多关于条件及如何配置它们的信息，请参阅 [submission criteria 文档中的条件部分](https://www.palantir.com/docs/foundry/action-types/submission-criteria/#conditions)。Override 条件和 submission criteria 条件的唯一区别是，override 条件中只能引用在 form 层次结构中位于当前 parameter 之上的 parameters。

### [](https://www.palantir.com/docs/foundry/action-types/parameters-override/#then-and-overrides)"Then" 和 overrides

**Then** 区域定义了当 block 条件满足时将应用的 overrides。每个 block 的 **Then** 区域可以包含多个 overrides，它们会一起应用。Override 可以更改 parameter 的约束、可见性、必填性和默认值配置。如果 override 配置的值与 parameter 上已设置的默认值相同，会在 override 本身上显示警告。

### [](https://www.palantir.com/docs/foundry/action-types/parameters-override/#multiple-override-blocks)多个 override blocks

你可以为单个 parameter 添加多个 override blocks。如果多个 block 为 true，只有第一个 override 会被执行。

[← 上一页 Object dropdown security considerations](https://www.palantir.com/docs/foundry/action-types/dropdown-security/)

[下一页 Performance considerations →](https://www.palantir.com/docs/foundry/action-types/parameter-performance-considerations/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

