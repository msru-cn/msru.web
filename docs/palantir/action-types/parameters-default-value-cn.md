Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/parameters-default-value/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/#set-parameter-default-value)设置 parameter 默认值

Action type parameters 的默认值用于在 action form 中预填充 parameter。默认值在 parameter 级别配置，支持 Workshop、Object Explorer、Object Views、Quiver 和 Slate。它们可以部署用于在多个消费应用中标准化 action 逻辑，无需在每个应用中单独添加默认值。

Parameters 可以设置为默认值，以显示固定值或所选 object 的属性。

## [](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/#default-value-interaction-with-local-variables)默认值与本地变量的交互

本地默认值（例如 Workshop 变量）始终优先于全局默认值。当将任何 Workshop 变量传递给带有默认值的 action 时，action form 会使用 Workshop 变量的值进行预填充。同样的模式适用于 Object Views 的环境变量和 Slate 的默认值。每个 action 实例中提供的默认值优先。因此，迁移到默认值将需要移除本地覆盖。

## [](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/#configuring-default-values)配置默认值

选择任何 parameter 都会打开该 parameter 的 parameter 配置视图。选择 parameter 应该 默认为固定值还是来自 object parameter 属性的值。

### [](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/#static-default-value)静态默认值

假设有一个 action type 修改所选 `Aircraft` object 的 `Type` 属性为 `A320`。要配置，点击 `Type` parameter 并添加一个静态默认值。

![Image 6: 配置静态默认值](https://www.palantir.com/docs/resources/foundry/action-types/default_value_static_configuration.png)

要在不使用默认值的情况下实现类似的用户体验，需要在使用该 parameter 的每个应用中配置输入值。更新此行为（例如改为 `A380`）需要手动修改行为，可能跨多个应用。

![Image 7: 静态默认值示例](https://www.palantir.com/docs/resources/foundry/action-types/default_value_static_example.png)

### [](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/#object-property-default-values)Object 属性默认值

要将 object 属性设置为 parameter 的默认值，首先选择要配置的 object parameter。假设有一个更通用的 action type 叫做 `Change Airplane Details`，例如，用户需要在编辑前了解属性的当前值。这可以通过将每个 parameter 的值配置为从当前选中的 object（在我们的例子中是要修改的 `Plane` object）预填充来实现。只有位于输入列表中该 parameter 上方的 object reference parameters 可用作默认值。

![Image 8: 配置属性默认值](https://www.palantir.com/docs/resources/foundry/action-types/default_value_object_configuration.png)

在 Object Explorer 中，`Change Airplane Details` action 将预填充当前值。在这种情况下，用户可以选择只修改一个属性而保持其他属性不变。此默认逻辑将在 action 提交的任何地方存在。注意，一旦 action 用户更新此默认值后，`Lifetime Hours` 值会显示为已编辑。

![Image 9: Object 默认值](https://www.palantir.com/docs/resources/foundry/action-types/default_value_object_example.png)

### [](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/#type-class-prefills)Type class 预填充

Action parameters 可以通过使用 type class 注解来预填充特殊值（如自动生成的 UUID 或当前用户的 ID）。Ontology 文档有 [可用 type class 的完整列表](https://www.palantir.com/docs/foundry/object-link-types/metadata-typeclasses/)。

![Image 10: 配置 type class 预填充](https://www.palantir.com/docs/resources/foundry/action-types/default_value_type_class_configuration.png)

在大多数情况下，你应该将 parameter 可见性设置为 `hidden`，这样用户不会手动更改这些特殊的预填充值。

[← 上一页 Overview](https://www.palantir.com/docs/foundry/action-types/parameter-overview/)

[下一页 Filter results of a parameter dropdown →](https://www.palantir.com/docs/foundry/action-types/parameters-filter/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

