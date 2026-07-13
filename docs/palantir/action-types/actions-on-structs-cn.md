Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/actions-on-structs/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/actions-on-structs/#actions-on-structs)Actions on structs

[Struct property](https://www.palantir.com/docs/foundry/object-link-types/structs-overview/) 的值可以通过 action 创建和修改，值由 struct parameter 提供。

## [](https://www.palantir.com/docs/foundry/action-types/actions-on-structs/#struct-parameters)Struct parameters

Struct parameter 是基础类型为 `STRUCT` 的 parameter，其中包含嵌套的 parameter 字段，每个字段有自己的名称和基础类型。Struct parameter 只能用于为 struct property 提供值。Struct parameter 字段支持的基础类型包括 `BOOLEAN`、`DATE`、`DOUBLE`、`GEOPOINT`、`INTEGER`、`LONG`、`STRING` 和 `TIMESTAMP`。

下面展示了一个 `Create Ticket` action 的 `Resolution` struct parameter。`summary`、`resolutionTime` 和 `owner` 这些嵌套字段将 ticket 的解决信息汇总到一个 parameter 中。

![Image 8: 包含嵌套字段的 struct parameter。](https://www.palantir.com/docs/resources/foundry/action-types/struct-parameter-nested-fields.png)

## [](https://www.palantir.com/docs/foundry/action-types/actions-on-structs/#defining-actions-on-struct-properties)在 struct property 上定义 action

使用带 struct parameter 的 action，你可以创建和修改带有 struct property 的 object type。Struct property 的值通过映射到该属性的 struct parameter 提交；struct property 的每个字段映射到 struct parameter 的对应字段。在下面的例子中，`Resolution` struct parameter 的每个字段都映射到 `Ticket` object type 的 `Resolution` struct property 的对应字段。

![Image 9: Struct property 字段映射。](https://www.palantir.com/docs/resources/foundry/action-types/struct-field-mapping.png)

Struct property 和 struct parameter 之间的映射必须是完整的，struct property 的每个字段都要映射到 struct parameter 的一个字段。Struct parameter 字段的基础类型 _必须_ 与映射的 struct property 字段的基础类型匹配。如果对 struct property type 做了任何破坏性变更（例如添加新字段、删除字段或更改字段的基础类型），相关的 action type 也必须相应修改。

### [](https://www.palantir.com/docs/foundry/action-types/actions-on-structs/#struct-parameters-in-an-action-form)Action form 中的 struct parameter

Struct parameter 可以像其他 parameter 类型一样通过 action form 填充。不过，struct parameter 字段在 form 中是作为一个组渲染的，而不是单独渲染。

![Image 10: Action form 中的 struct parameter。](https://www.palantir.com/docs/resources/foundry/action-types/struct-parameter-form.png)

## [](https://www.palantir.com/docs/foundry/action-types/actions-on-structs/#default-values-for-struct-parameter-fields)Struct parameter 字段的默认值

Struct parameter 字段的默认值是单独定义的。每个 struct parameter 字段映射到指定 object type 的 struct property 的字段。必须为 struct parameter 的所有字段定义默认值，并且必须映射到同一 object type struct property 的字段。只有 struct property 字段可以作为 struct parameter 字段的默认值。使用哪个 object type 的 struct property 字段作为默认值，通过 `ObjectReference` parameter 指定。

![Image 11: 为 struct parameter 字段定义默认值。](https://www.palantir.com/docs/resources/foundry/action-types/struct-parameter-default-values.png)

提交 action 时提供 `ObjectReference` parameter 指定类型的 object instance，该 object 的 struct property 字段值会自动填充到对应的 struct parameter 字段中。

![Image 12: 应用了默认值的 struct parameter 字段。](https://www.palantir.com/docs/resources/foundry/action-types/struct-parameter-form-default-values.png)

## [](https://www.palantir.com/docs/foundry/action-types/actions-on-structs/#constraints-on-struct-parameter-fields)Struct parameter 字段的约束

可以为 struct parameter 字段单独配置约束，与普通 parameter 一样。例如，可以在字符串类型的 struct parameter 字段上定义字符串长度约束，只允许 10 到 500 个字符的字符串值。这意味着 `Resolution` struct parameter 的 `summary` 字段必须至少 10 个字符，但不能超过 500 个字符。

![Image 13: 为 struct parameter 字段定义约束。](https://www.palantir.com/docs/resources/foundry/action-types/struct-parameter-field-constraint.png)

只有当 _所有_ 字段都满足定义的约束时，struct parameter 值才是有效的。用户只能在每个字段值都满足其约束的情况下提交 struct parameter 值。按照为 `summary` 字段定义的约束，少于 10 个字符的值是无效的。

![Image 14: 应用到 struct parameter 字段值的约束。](https://www.palantir.com/docs/resources/foundry/action-types/invalid-struct-parameter-value.png)

## [](https://www.palantir.com/docs/foundry/action-types/actions-on-structs/#limitations)限制

在使用 action 创建或修改 struct parameter 时，请注意以下限制：

*   Struct property 值只能通过 _struct parameter_ 创建或修改。不支持其他输入方式，如静态值或 object 属性引用。
*   Struct property 只能通过 _单个_ struct parameter 创建或修改。Action 中的 struct property 映射不能超过一个 parameter。
*   Struct parameter 只能用于创建或修改 _struct_ property。Struct parameter 字段不能单独用于创建或修改非 struct property。
*   只有 _单个 object type struct property 值_ 的引用可以作为 struct parameter 字段的默认值。不支持其他输入方式，如静态值。

[← 上一页 Actions on interfaces](https://www.palantir.com/docs/foundry/action-types/actions-on-interfaces/)

[下一页 Function-backed actions / Overview →](https://www.palantir.com/docs/foundry/action-types/function-actions-overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

