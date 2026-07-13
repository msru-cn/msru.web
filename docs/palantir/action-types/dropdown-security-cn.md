Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/dropdown-security/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/dropdown-security/#object-dropdown-security-considerations)Object dropdown 安全注意事项

Object dropdown 验证中的静态值过滤器会暴露给所有能查看该 action type 的用户。使用这些过滤器可能导致在没有权限查看被过滤 object 的用户面前暴露属性值组合。通过依赖 object 属性或 parameter 来过滤 object set 可以降低这个风险，因为值不会直接显示在界面中。

## [](https://www.palantir.com/docs/foundry/action-types/dropdown-security/#example-data-privacy-issue)示例：数据隐私问题

举个例子，假设我们有一个 `Document` object，带有 `Investigation Name` 属性。在我们的 action type 中，给 object reference parameter 添加了一个过滤器，只显示 **Investigation Name** 为 `Area 51 Investigation` 的 **Document**。

![Image 3: Object Dropdown 安全隐患](https://www.palantir.com/docs/resources/foundry/action-types/objectDropdownSecurityFilter.png)

这样，我们可能会向无法查看这些 document 的用户暴露 `Area 51 Investigation` 是某些 `Document` object 的属性值这一信息。

这仅适用于 **静态值过滤器**。通过 parameter 或另一个 object 的属性来过滤 `Investigation Name` 属性时，不会引用 `Area 51 Investigation`，因为：

*   `Investigation Name` parameter 由用户提供。不会向 action type 查看者暴露底层数据的任何信息。
*   `Investigation Object` parameter 会遵守该用户已有的 object 可见性限制。

因此，这两种搜索查询都不存在数据隐私隐患。

![Image 4: Object Dropdown 属性过滤器](https://www.palantir.com/docs/resources/foundry/action-types/objectDropdownSecurityProperty.png)

## [](https://www.palantir.com/docs/foundry/action-types/dropdown-security/#technical-details)技术细节

在大多数情况下，action 后端会对 action type 定义中的敏感信息进行脱敏，以避免暴露敏感的属性值。例如，无法编辑 action type 的用户看不到 submission criteria。类似地，用户不会在界面中的 action type 定义中或后端检查响应时看到新的 object dropdown 过滤器。

但是，在查看 action form 时，object dropdown 验证会被转换为 object set。这意味着用户可以查看包含此 object set 的网络请求。在上面的例子中，用户会收到一个包含 `Investigation Name = 'Area 51 Investigation'` 过滤器的 object set RID，即使他们无法查看对应的任何 object，也会暴露该属性值的存在。

这意味着这些值 **不会在界面中对任何用户可见**。如果更关注可见性而非安全性，可以忽略此警告。

[← 上一页 Filter results of a parameter dropdown](https://www.palantir.com/docs/foundry/action-types/parameters-filter/)

[下一页 Override parameter configurations →](https://www.palantir.com/docs/foundry/action-types/parameters-override/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

