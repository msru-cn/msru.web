Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/parameter-performance-considerations/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/parameter-performance-considerations/#performance-considerations-for-parameter-configuration)Parameter 配置的性能注意事项

Parameters 之间的依赖关系（如 [默认值](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/) 和 [多选选项](https://www.palantir.com/docs/foundry/action-types/parameters-filter/) 的定义）可能会影响 action form 的加载时间。例如，考虑以下 action parameter 配置：

1.   第一个 parameter 是一个 `object reference`，带有 `from single result of object set` 默认值。
2.   第二个 parameter 是一个字符串，其默认值是引用第一个 parameter 的 `object parameter property`。
3.   第三个 parameter 也是一个字符串，没有默认值，但配置为使用 `get options from an object set` 的 `multiple choice` 下拉菜单。Object set 的定义引用了第二个 parameter。

当用户加载此 action 的 action form 时，需要迭代执行多个操作。

1.   首先，需要检索第一个 parameter 的默认值。
2.   然后，需要从第一个 parameter 的值推导出第二个 parameter 的默认值。
3.   最后，需要从第二个 parameter 的值推导出第三个 parameter 的选项。

配置 action parameters 时，建议尽可能保持依赖层次扁平。在上述 action 的上下文中，如果在第三个 parameter 的 object set 定义中引用第一个 parameter 而非第二个 parameter，将允许并行推导第二个和第三个 parameter 所需的信息，从而减少打开 form 到 form 完全可交互之间的总延迟。

[← 上一页 Override parameter configurations](https://www.palantir.com/docs/foundry/action-types/parameters-override/)

[下一页 Submission criteria →](https://www.palantir.com/docs/foundry/action-types/submission-criteria/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

