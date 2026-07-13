Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/inline-edits/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/inline-edits/#inline-edits)Inline edits

Action-backed inline edits 的验证和提交方式与标准 [action](https://www.palantir.com/docs/foundry/action-types/getting-started/) 不同。对于标准 action，需要设置多个 parameter 才能使 action 有效。但对于 action-backed inline edits，每个 parameter 都是可选的，默认为 object 的现有值，因此用户可以逐个修改属性。

本文档讨论如何在使用 inline edits 时避免意外结果。Inline edits 在 Workshop 和 Object Explorer 中均可使用。Inline edit action 的配置取决于 action 在哪里使用。

## [](https://www.palantir.com/docs/foundry/action-types/inline-edits/#object-explorer-inline-edits)Object Explorer inline edits

Inline edits 允许用户在 [Object Explorer results view](https://www.palantir.com/docs/foundry/object-explorer/view-results/) 或原生 Object View widget（如 property 或 metric card widget）中快速编辑 object 的值。

### [](https://www.palantir.com/docs/foundry/action-types/inline-edits/#configuration)配置

![Image 2: Inline edit action 配置](https://www.palantir.com/docs/resources/foundry/action-types/inline-action-configuration.png)

要设置 inline edit action，导航到 object type 的 **Properties** 标签页，然后到 Ontology Manager 中的 **Interaction** 标签页。选择一个属性，然后在侧边栏中导航到 **Inline edit**。在下拉菜单中，选择一个可用的 action type 或创建一个。创建新的会触发 action type 创建工作流。每个属性只能有一个 inline edit action type。

你可以对多个属性使用同一个 action type 作为 inline edit，也可以为不同属性使用不同的 action type。

#### [](https://www.palantir.com/docs/foundry/action-types/inline-edits/#action-type-requirements-for-inline-edits)Inline edits 的 action type 要求

不是所有 action type 都可以用作 inline edit action type。要符合要求，action type 必须满足以下要求：

*   只能修改单个 object type 的单个 object。
*   必须启用默认值。
*   默认值必须来自定义 inline action 的 object reference parameter。因此，action 中被修改的属性不能映射到静态值或特殊值（如 "Current User" 或 "Current Time"）。
*   可以设置可见性状态和覆盖；但如果 inline edit 在 Object Explorer 和 Object Views 中使用，它们会被忽略。
*   不能启用 [Side effect webhooks](https://www.palantir.com/docs/foundry/action-types/webhooks/#webhooks-writeback-vs-side-effect) 或 [side effect notifications](https://www.palantir.com/docs/foundry/action-types/notifications/)。

## [](https://www.palantir.com/docs/foundry/action-types/inline-edits/#workshop-inline-edits)Workshop inline edits

在 Workshop 中使用 action type 作为 inline edit 不需要额外配置，但不是所有 action 都适合 cell 级别的编辑。有关如何配置 inline edits 的信息，请参阅 [Workshop 文档](https://www.palantir.com/docs/foundry/workshop/widgets-object-table/#inline-edits-cell-level-writeback)。

### [](https://www.palantir.com/docs/foundry/action-types/inline-edits/#background)背景

运行单个 action 时，编辑会逐个（按顺序）验证和提交。Inline edits 的区别在于它们是批量验证和提交的。正因为如此，不是所有 action 都适合 inline edits。由于 inline edits 可能失败或产生意外结果的 action 包括：

*   任何尝试读取另一个 action 可能已写入的数据的 action，或
*   两个试图写入同一个 object 的 action。

当 inline edits 应用于 [Scenario](https://www.palantir.com/docs/foundry/workshop/scenarios-overview/) 时，提交的 action 按顺序（非确定性顺序）应用，而不是同时应用（inline edits 的通常情况）。因此，通常因多个 action 试图写入同一 object 而失败的 inline edit action 在应用于 scenario 时可能会成功，但我们不建议构建依赖这种行为差异的应用。

### [](https://www.palantir.com/docs/foundry/action-types/inline-edits/#valid-inline-actions)有效的 inline Actions

Action 必须提交非冲突的编辑才能作为 Action-backed inline edits 生效。实际上，这意味着在同一个 table edit widget 中配置的多个 Action 不能：

*   写入同一个 object，
*   创建同一个 link，或
*   试图保持聚合值一致。

### [](https://www.palantir.com/docs/foundry/action-types/inline-edits/#invalid-inline-actions)无效的 inline Actions

**如果 inline edit 尝试对同一个 object 编辑两次，action 会返回错误。** 此外，inline edits 不支持添加或删除 join table link，会导致面向用户的错误消息。

用户应用 inline edits 时，[submission criteria](https://www.palantir.com/docs/foundry/action-types/submission-criteria/) 会应用于每次编辑，但编辑会批量提交。Parameter 和 global submission criteria 都会对每个被编辑的 object 进行评估，但引用共享或链接 object 的 submission criteria 与 inline edits 不兼容。这是因为应用 inline edits 时，累积 submission criteria 会将编辑后的值与该列的未编辑值进行比较。在最终提交时，编辑会一次性提交，如果它们都通过对应 object 的 parameter 和 global submission criteria，则会成功。

多个 Action type 之间共享的 object 或链接 object 上的 submission criteria 因此在每次编辑时都会被评估一次，在任何编辑实际执行之前。

引用共享 Action type 或链接 object 的 submission criteria 与 inline edits 不兼容，批量更新 object 可能违反按顺序（逐个）应用时能正常工作的 submission criteria 规则。

#### [](https://www.palantir.com/docs/foundry/action-types/inline-edits/#example-invalid-inline-actions)示例：无效的 inline Actions

假设有一个 `Delay Flight` Action，可以在一个机场将单个航班最多延误 20 分钟，而该机场所有航班的总延误最多为 50 分钟。

*   两个 submission criteria——20 分钟要求和 50 分钟总数——都会在每次 cell 更新时评估。
    *   因为还没有编辑被提交，50 分钟总数会将新的延误与该列中未编辑延误的总和（开始 inline editing 前的延误）进行比较。

*   第二个 submission criteria（机场所有延误总和小于 50 分钟）依赖一个聚合值，并且被该列中的所有 object 共享。
    *   由于 inline edits 是批量提交的，这第二个 submission criteria 无法有效限制给定机场航班延误的总时长；最终编辑的总和可能超过第二个 submission criteria 允许的 50 分钟。

*   这个 Action 不适合用于 table 编辑，因为与逐个 cell 运行 Action 相比，它会导致不一致的结果。

[← 上一页 Scale and property limits](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/)

[下一页 Permissions →](https://www.palantir.com/docs/foundry/action-types/permissions/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

