Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/use-actions/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/use-actions/#use-actions-in-the-platform)在平台中使用 actions

Action types 可以无缝集成到 Foundry 的各个应用中。继续阅读了解如何从 [Object Explorer](https://www.palantir.com/docs/foundry/object-explorer/overview/) 和 [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) 配置和应用 action。

在下面的例子中，我们使用术语 **single action type** 来指使用 object reference parameter 的 action type，**bulk action type** 来指使用 object reference list parameter 的 action。

## [](https://www.palantir.com/docs/foundry/action-types/use-actions/#object-views)Object views

可以使用 **Actions section** 将 actions 添加到 [Object View](https://www.palantir.com/docs/foundry/object-views/overview/) 中。

![Image 6: Object View 的 Actions section](https://www.palantir.com/docs/resources/foundry/action-types/integrate_actions_object_explorer_object_view_actions_section.png)

配置 **Actions section** 时，你可以：

*   在 section 中添加任何 action 作为按钮。
*   为每个按钮设置自己的标签和颜色。
*   将默认的点击行为从打开 form 更改为使用默认值（如果有效）直接应用 action。
*   指定当非可见 parameter 无效时按钮应该隐藏还是禁用（因为可见 parameters 可以在打开 form 后更正）。
*   为每个 parameter 提供默认值；可以是当前 object 的属性值或 "本地" 值（当前用户、当前时间戳、当前 object 或手动输入的值）。
*   覆盖每个 parameter 的可见性。

如上所示，你可以使用此 section 提供同一通用 action 的多个结构化版本（"Delay 10 minutes"、"Delay 30 minutes" 等）。

## [](https://www.palantir.com/docs/foundry/action-types/use-actions/#object-explorer)Object Explorer

Actions 会自动显示在 [Object Explorer](https://www.palantir.com/docs/foundry/object-explorer/overview/) 的三个位置：

1.   Exploration View 中的 **Actions** 下拉菜单（右上角）。

![Image 7: Exploration View 中的 Actions 下拉菜单](https://www.palantir.com/docs/resources/foundry/action-types/integrate_actions_object_explorer_exploration_view_actions_dropdown.png)

使用当前 object 集合，此下拉菜单会自动填充适用的 bulk actions。

1.   Object View 中的 **Object Actions** 下拉菜单（右上角）。

![Image 8: Object View 中的 Object Actions 下拉菜单](https://www.palantir.com/docs/resources/foundry/action-types/integrate_actions_object_explorer_object_view_object_actions_dropdown.png)

使用当前 object，此下拉菜单会自动填充适用的 single 和 bulk action types。

1.   Object View 中的 **Linked objects view section**（顶部）。

![Image 9: Object View 中的 Linked objects view section](https://www.palantir.com/docs/resources/foundry/action-types/integrate_actions_object_explorer_object_view_linked_objects_view_section.png)

使用选中的 object，此下拉菜单会自动填充适用的 single 和/或 bulk action types。

在 "bulk" 上下文中（在列表视图中显示多个 object 时），只显示接受正确类型 object list parameters 的 actions。

## [](https://www.palantir.com/docs/foundry/action-types/use-actions/#workshop)Workshop

在 [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) 中，可以使用 [**Button group** widget](https://www.palantir.com/docs/foundry/workshop/widgets-button-group/) 配置和应用 Actions。

![Image 10: Workshop 中的 Button group widget](https://www.palantir.com/docs/resources/foundry/action-types/integrate_actions_workshop_button_group_widget.png)

此 widget 与 Object View 中的 [Actions section](https://www.palantir.com/docs/foundry/action-types/use-actions/#object-views) 有相同的配置选项，并有一些显著的扩展：

*   有三种可能的布局，上面都有展示。
*   按钮有额外的显示选项，包括左/右图标、最小样式和标签样式。
*   除了 Action，单个按钮还可以触发 Workshop event、URL 或 object set export。

还有一个区别：

*   默认值可以是 [variable](https://www.palantir.com/docs/foundry/workshop/concepts-variables/)、当前用户或当前时间戳

阅读更多关于 [Workshop 中的 Actions](https://www.palantir.com/docs/foundry/workshop/actions-overview/) 的信息，或阅读 [Button Group widget](https://www.palantir.com/docs/foundry/workshop/widgets-button-group/) 的完整参考以了解所有可用的配置选项。

[← 上一页 Getting started](https://www.palantir.com/docs/foundry/action-types/getting-started/)

[下一页 Rules →](https://www.palantir.com/docs/foundry/action-types/rules/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

