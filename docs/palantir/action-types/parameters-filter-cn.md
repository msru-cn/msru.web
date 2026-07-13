Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/parameters-filter/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#filter-results-of-a-parameter-dropdown)过滤 parameter 下拉菜单的结果

给非 object reference 的 multiple choice 或单个 object reference parameter 添加过滤器，将决定 parameter 下拉菜单中可选的允许值。

## [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#multiple-choice-parameter-dropdowns)Multiple choice parameter 下拉菜单

配置 multiple choice parameter 下拉菜单时，action 编辑者可以将允许值缩减为 object set 属性的子集。这可以用来基于链接 object 的属性来显示或预填充值。要实现这一点，请确保 parameter 设置为显示 multiple choices，选择 **Get options from an object set**，配置所需的 object set，然后选择包含 parameter 下拉菜单所有允许值的属性。如果结果 object set 中只有一个链接 object 可用，且 parameter 是必填的，parameter 下拉菜单会自动预填充对应的属性值。生成的 multiple choice 选项将从用户有权限查看的 object 集合中派生。换句话说，从 object set 中派生 multiple choice 选项时，用户不会看到他们无权访问的 object 的属性。

![Image 7: Property 下拉菜单配置](https://www.palantir.com/docs/resources/foundry/action-types/property_dropdown_configuration.png)

## [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#object-dropdowns)Object 下拉菜单

在 parameter 配置视图中，action 编辑者可以指定过滤器和 Search Arounds 来限制在所有 action 界面中下拉菜单显示的 object。配置过滤器后，action form 会渲染一个只包含匹配过滤器 object 的下拉菜单。所选值在执行 action 之前也会被验证。

例如，一个配置为只显示 **Name** 等于 `Name` parameter 值的 **Stock Series** 的 object 下拉菜单。

![Image 8: Object 下拉菜单起始集合](https://www.palantir.com/docs/resources/foundry/action-types/objectDropdownStartingSet.png)

下图显示了 `Name` parameter 的可能值：

![Image 9: Object 下拉菜单结果 form](https://www.palantir.com/docs/resources/foundry/action-types/objectDropdownResultingForm.png)

### [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#data-privacy-implications)数据隐私影响

在 object parameter 上使用新验证时，所有能查看 action type 的人都可能看到数据。如果 parameter 过滤器中有敏感的静态值，用户即使无法查看被过滤的底层 object，也能看到这些值。[了解有关数据隐私影响的更多信息。](https://www.palantir.com/docs/foundry/action-types/dropdown-security/)

## [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#supported-operations)支持的操作

### [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#filtering-on-a-property)按属性过滤

Object 下拉菜单只显示指定属性匹配任何提供值的 object。

![Image 10: Object 下拉菜单按属性过滤](https://www.palantir.com/docs/resources/foundry/action-types/object_dropdown_filtering_on_property.png)

值可以由用户静态定义，从另一个 parameter 推断，或来自 `Object Reference` parameter 的属性。如果提供了多个值进行比较，结果将是 **OR** 操作。

### [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#changing-the-starting-object-set)更改起始 object set

查询的 **starting set** 默认设置为该 object type 的所有 object，但可以更改为任何其他类型。Starting set 也可以设置为 `ObjectReference` 列表 parameter。

![Image 11: Object 下拉菜单更改起始集合](https://www.palantir.com/docs/resources/foundry/action-types/object_dropdown_changing_starting_set.png)

### [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#search-arounds)Search Arounds

Search Around 会通过遍历当前集合中每个 object 的 link 来创建新集合。例如，`Github Issue of Current Employee` 会获取当前集合中的 `Employees` 并创建一个与这些 `Employees` 链接的 `Github Issues` 结果集合。

![Image 12: Object 下拉菜单 Search Around](https://www.palantir.com/docs/resources/foundry/action-types/object_dropdown_search_around.png)

[← 上一页 Set parameter default value](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/)

[下一页 Object dropdown security considerations →](https://www.palantir.com/docs/foundry/action-types/dropdown-security/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

