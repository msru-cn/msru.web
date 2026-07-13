Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/notifications/

Markdown Content:
## Notifications

Notifications 可以通过 **Add new rule** 下拉菜单添加到 action 中。[了解如何添加 notification 的更多信息。](https://www.palantir.com/docs/foundry/action-types/set-up-notification/)

![Image 1: Add new rule 下拉菜单](https://www.palantir.com/docs/resources/foundry/action-types/side_effects_notification_tutorial_edit_action_rules.png?width=500)

配置 notification 需要指定 [recipients](https://www.palantir.com/docs/foundry/action-types/notifications/#recipients) 和 [content](https://www.palantir.com/docs/foundry/action-types/notifications/#content)。以下部分将详细介绍这些选项。

## Recipients

配置 notification 的 **Recipients** 选项可以指定在 action 运行时接收通知的 Foundry 用户集合。Notifications 会单独发送给每个收件人。不支持将用户作为 CC（抄送）收件人添加到 email notification 中。

有几种支持的指定收件人方式：

![Image 2: Recipients 下拉菜单](https://www.palantir.com/docs/resources/foundry/action-types/side_effects_recipients_selector.png?width=400)

*   **Static：** 在配置中，你可以选择一组在 action 运行时始终会被通知的用户或 group。

*   **From a parameter：** 如果你的 action 有一个 Foundry user 或 group ID 的 parameter，你可以将其指定为 notification 的收件人。

    *   这可以用来让发送者在使用此 action 的应用或 module 的用户界面中选择一个或多个收件人，或自动检测并向运行该 action 的用户发送 notification。

*   **From an attribute of an object parameter：** 如果你的 action 有一个 object parameter，且该 object 的某个属性包含 Foundry user 或 group ID，你可以将该 parameter 的属性指定为收件人。这对于 Foundry user 和 group ID 的列表同样适用。

*   **From a function：** 如果你的用例不被上述选项覆盖，你可以编写一个自定义 function，接收 action parameters 并返回应该被通知的用户或 group 列表。[了解如何编写返回用户或 group 列表的 function 的更多信息。](https://www.palantir.com/docs/foundry/functions/types-reference/#users-groups-and-principals)

基于 function 的收件人用例示例包括：

    *   组合其他收件人选项；例如，通知从 object parameter 属性中指定的 `assignee`，同时始终通知一组静态的额外收件人。
    *   基于其他 parameter 或 parameter 属性值的收件人选择；例如，当 EMEA 有新任务时通知一组用户，当北美有新任务时通知另一组用户。
    *   任何不符合结构化选项的自定义逻辑。

收件人可以更改他们接收 notification 的偏好设置。例如，一个用户可能选择只在 web 浏览器中接收 notification，而另一个用户可能选择同时接收平台内 toast 和 email。如果用户在个人偏好设置中关闭了 action notification，他们不会被通知。但他们仍然可以在登录 Foundry 后通过进入 "Notifications" 然后 "See All" 来查看 notification。

## Content

自定义 notification 内容有多个选项。内容可以通过 _Template_ 配置或通过自定义 _function_ 提供。选择 template content 将允许你直接在配置对话框中配置完整内容。Function content 需要你有一个已发布的 function，返回适当的 notification 类型。

![Image 3: Content Type 下拉菜单](https://www.palantir.com/docs/resources/foundry/action-types/side_effects_content_selection_dropdown.png)

### Content components

1.   **Subject：** 通常，内容会包含一个 subject line。默认情况下，所有投递机制都使用相同的 subject line。

2.   **Body：** notification 的正文。对于平台内 notification，这会显示在 notification toast 内。对于 email，这会渲染在 email 的正文中。

3.   **Link：** 你可以指定一个链接。这会显示在 notification 正文内容的下方，作为一个按钮。按钮文本可以自定义。

    *   配置链接的以下选项可用：
        *   链接到现有 object parameter
        *   链接到 Workshop app
        *   链接到 Carbon workspace
        *   链接到新创建的 object

4.   **Advanced Email Configuration：** 配置 notification 时，你可以指定一个自定义内容正文用于通过 email 投递 notification。此选项允许你使用 HTML 进行更高级的格式设置（平台内 notification 不支持）。预览会显示你的 notification 外观，不包括 parameter 引用。只有将偏好设置为通过 email 接收 notification 的收件人才会收到此内容。

Triple handlebars 可用于在上述 Subject、Body 和 Link 中引用 parameter 和用户属性。编辑某个区域时，点击可用 parameter 之一会自动为该 parameter 或用户属性生成正确的 handlebar 引用。

1.   **From a Function：** 选择 "From a Function" 时，你不需要配置上述区域。而是必须提供一个 Function，返回一个带有适当属性的 `Notification` object，指定自定义内容的每个区域。如果以下任何情况适用，你可能需要使用 Function：
    *   notification 内容根据收件人或 Action 的输入 parameter 完全不同。
    *   你想为 email 和平台内 notification 使用不同的 subject line。
    *   你想使用完整的链接 URL，包括指向 Foundry 之外的外部系统或应用的链接。
    *   你想在渲染内容时执行 Search Arounds、聚合或查询超出 parameter 提供的数据。
    *   你有任何其他无法通过 template content 选项实现的自定义需求。

更多关于 Notification 返回类型的信息可以在 [Functions 文档](https://www.palantir.com/docs/foundry/functions/configure-notifications/) 中找到。

用于生成 notification 内容的 Ontology 数据将反映当前 Action 编辑应用前的 Ontology 状态。为了让 notification 收件人能够访问特定 object 的最新状态，可以在 notification 中嵌入通过 object parameter 引用的 object 链接，或新创建 object 的链接（如果这些 object 是通过 "create object" rule 而非 function 创建的）。

* * *

## 配置示例

这是一个 notification 的配置示例。

![Image 4: 示例 notification 配置标注](https://www.palantir.com/docs/resources/foundry/action-types/side_effects_numbered_example_configuration.png?width=400)

1.   **Recipients** 配置
2.   **Content** 配置
    *   从 template 中选择（直接在 Ontology 应用对话框中配置）或从 Function（指定一个返回完整 `Notification` object 的 Function）。

3.   template notification 的 **Subject** 行。
4.   基于 Action 可用 parameter 的可用 **parameters**。点击 parameter 可生成 `{{{}}}` 语法来引用该 parameter。
5.   template notification 的 **Body** 内容。
6.   template notification 的 **Link** 配置（可选）。
7.   template notification 的 **自定义 HTML email 内容**（可选）。

* * *

## 其他关键信息

### 最大收件人限制

*   使用 "From a Function" 选项渲染 notification 内容时，最多 50 个收件人。在内容配置选项下选择 "From a Function" 时，配置面板中会显示警告，并且每次运行 Action 时都会检查收件人数量。如果收件人数量超过限制，会显示红色错误 toast，Action 将无法运行。
*   当使用 "Template" 选项在配置对话框中直接配置内容时，单个 Action notification 最多 500 个收件人。

![Image 5: Function 渲染内容最大收件人警告](https://www.palantir.com/docs/resources/foundry/action-types/side_effects_function_content_max_recipients.png)

### 内容长度限制

*   最大 subject 长度为 250 个字符。
*   最大 body 长度为 1,000 个字符。渲染 email 的自定义 HTML 内容时，最大长度为 51,200 个字符。

请注意，这些最大内容长度会在 notification 渲染时进行验证和截断。这意味着如果渲染内容是动态的（例如，notification 内容包含 object 数据），超过允许最大长度的内容会被截断，并以尾部 `...` 表示。

### Strict redaction

如果你的 Foundry 实例启用了出站 email notification 的 "Strict Redaction" 或 "Group Redaction"，自定义 notification 内容不会被渲染。相反，用户会收到下面显示的通用消息。选择 "View" 会将他们引导到 Foundry 中，在那里他们可以查看完整的 notification 内容。[了解有关 Foundry 中 email 内容 redaction 的更多信息。](https://www.palantir.com/docs/foundry/email/email-content-redaction/)

![Image 6: Strict redaction email content 默认值](https://www.palantir.com/docs/resources/foundry/action-types/side_effects_redacted_email_content.png)

### 收件人用户账户

*   Group 会被解析为 individual user，以便在发送 notification 之前检查数据的权限。
*   Foundry user 和 group ID 可以通过 Settings 下的 Account 找到。notification 的配置界面在选择静态收件人集合时提供 user 和 group 的选择器。这只会显示配置 Action 的人有足够权限的 user 和 group。
*   如果通过引用 object 属性来配置收件人，请确保该属性以字符串形式存储 Foundry user 或 group ID。你可以使用条件格式化来显示关联的 user 或 group 显示名称（更多详情，请参阅 [value formatting 文档](https://www.palantir.com/docs/foundry/object-link-types/value-formatting/)）。
*   不支持直接发送到 email 地址。

### 新创建 object 的链接

链接新 object 时必须引用其主键，因为在 notification 渲染时还没有生成 object RID。

**示例：** 你有一个 Action 创建新的 `task` object，并且在创建 task 时会生成一个唯一 ID。在你的 Action notification 中，你使用 [Object Explorer 提供的 parameter 选项](https://www.palantir.com/docs/foundry/object-explorer/generate-urls/) 渲染一个指向新创建 object 的链接。

*   使用 Function 生成内容时有两种支持的 URL 链接指定方式：
    *   完整链接示例：`https://<your-foundry-instance>.com/workspace/module/view/latest/<module-rid>`
    *   相对链接示例：`/module/view/latest/<module-rid>`

### 收件人的数据访问要求

*   用户只能接收包含他们被允许查看的数据的 notification。
*   在有多个收件人的情况下，所有收件人都必须能够访问 notification 内容中渲染的 object 数据。
*   配置 Action 时，在侧边栏的 **Security & Submission Criteria** 标签页底部有两种处理 notification 失败的方法可用：
    *   **Require all users to have permissions（默认）：** 如果任何收件人没有所需的访问权限，尝试应用 Action 时会显示错误。如果发生这种情况，不会编辑任何数据，也不会发送任何 notification。
    *   **Require any user to have permissions：** 如果至少一个用户可以看到该 object，Action 会成功。只有有权限的用户才会收到 notification。

### 覆盖和禁用 email 内容 redaction

[如果组织设置允许](https://www.palantir.com/docs/foundry/email/email-content-redaction/#disable-email-redaction-in-action-types)，你可以绕过组织级别为特定 action type 设置的其他 strict redaction 设置，并让 action type 发送未 redacted 的内容。

要覆盖 email notification 的 redaction，导航到 **Security & Submission** 标签页，然后 **Notification settings > Disable notification redaction**。

![Image 7: 带有禁用 notification redaction 选项的 Notification 设置。](https://www.palantir.com/docs/resources/foundry/action-types/notification_settings.png)

要了解如何为组织启用此功能，请参阅 [email redaction 文档页面](https://www.palantir.com/docs/foundry/email/email-content-redaction/#disable-email-redaction-in-action-types)。

