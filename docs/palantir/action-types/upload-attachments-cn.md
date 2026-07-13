Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/upload-attachments/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/upload-attachments/#upload-attachments)上传附件

Actions 支持从 Workshop、Object Explorer、Object Views、Quiver 和 Slate 上传附件。查看、编辑和删除附件的权限与上传到的 object 一致。例如，如果用户对某个 object 有查看权限，他们将能够查看和下载存储在该 object 上的附件。替换现有附件需要对 object 有编辑权限。

你可以上传单个附件或附件列表。要使用 actions 上传附件，请按照 action type 和 object type 的配置步骤操作。

## [](https://www.palantir.com/docs/foundry/action-types/upload-attachments/#configuring-action-types)配置 action types

在 parameter 配置视图中，选择 **Attachment** 作为 parameter 类型。附件只能使用 attachment parameter 类型上传。Object-backing dataset 中的对应列必须是 **String**，被编辑的 object 属性必须是 **Attachment** 类型。

要一次上传多个媒体文件，选择 **Allow multiple values**。注意，在一个 action 中支持多个媒体文件需要在 [object type 配置](https://www.palantir.com/docs/foundry/action-types/upload-attachments/#configuring-object-types) 期间额外开启 **Allow multiple** 开关，如下所述。

## [](https://www.palantir.com/docs/foundry/action-types/upload-attachments/#configuring-object-types)配置 object types

在 object 详情视图中，选择 **Attachment** 作为属性类型。附件只能上传到 attachment 属性类型。

要将多个媒体文件上传到一个属性，开启 **Allow multiple**。在这种情况下，object-backing dataset 中的属性必须是 **Array**。

## [](https://www.palantir.com/docs/foundry/action-types/upload-attachments/#architecture-and-limits)架构和限制

附件一旦添加到 action form 就会立即上传到 Foundry。提交表单时，查看、编辑和删除附件的权限从用户对底层 object type 的权限推断。如果表单提交失败或被取消，未完成的附件将不再可直接访问，并会在一段时间后自动永久删除。同样，属于已删除 object 或不再映射到 object 的附件（当对应属性被删除时发生）也不再可直接访问，最终会自动永久删除。

附件同时支持 logic-backed 和 function-backed actions。有一个全局的固定文件大小限制：200MB。

*   每个附件在其生命周期内最多可以链接到十个 object。如果一个附件已链接到十个 object，即使一个或多个原始链接 object 已被删除，它也不能链接到任何其他 object。达到十个链接 object 的限制后，你可以重新上传文件作为新附件来链接更多 object。

[← 上一页 Upload media](https://www.palantir.com/docs/foundry/action-types/upload-media/)

[下一页 Scale and property limits →](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

