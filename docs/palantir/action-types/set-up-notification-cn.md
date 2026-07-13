Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/set-up-notification/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/set-up-notification/#set-up-a-notification)设置 notification

本教程演示如何设置带有 notification 的 action。

我们将使用一个更新 `Alert` object 的 `Priority` 属性的 action，同时通知存储在该 Alert object 属性中的 `Assignee`（一个 Foundry user）。如果你想跟着操作，需要已经设置好以下内容：

*   一个具有正确属性并配置为可通过 action 编辑的 object
*   一个接受你的一个 object 以及包含新优先级的 parameter 并更新指定 object 上优先级属性的 action。如果你之前跟随了 [actions 快速开始教程](https://www.palantir.com/docs/foundry/action-types/getting-started/)，你应该已经有了这个设置。

如果你刚接触管理 object，可以阅读 [如何设置 object type](https://www.palantir.com/docs/foundry/object-link-types/create-object-type/)。

## [](https://www.palantir.com/docs/foundry/action-types/set-up-notification/#prerequisites)前提条件

### [](https://www.palantir.com/docs/foundry/action-types/set-up-notification/#complete-the-getting-started-tutorial)完成快速开始教程

本教程假设你已经完成了 actions 的 [快速开始](https://www.palantir.com/docs/foundry/action-types/getting-started/) 教程。

### [](https://www.palantir.com/docs/foundry/action-types/set-up-notification/#add-the-assignee-property-to-your-object-type)为你的 object type 添加 assignee 属性

在本教程中，你需要在 `Alert` object 上有一个名为 `Case Managers` 的属性，其中包含当前分配用户的 Foundry user ID。通常，如果你使用 actions 构建工作流，你将能够通过应用中的用户选择器组件捕获和存储 user ID。这些在 Foundry 中显示时会显示为完整的用户名。

## [](https://www.palantir.com/docs/foundry/action-types/set-up-notification/#add-a-notification)添加 notification

首先，导航到你更新 ticket 优先级的 action。在 **Rules** 区域选择 **Add new rule**，然后选择 **Notification**。这会打开添加 notification 的配置对话框。

![Image 4: Recipients 配置](https://www.palantir.com/docs/resources/foundry/action-types/side_effects_notification_tutorial_edit_action_rules.png?width=500)
## [](https://www.palantir.com/docs/foundry/action-types/set-up-notification/#configure-recipients)配置收件人

在这个例子中，你将 notification 发送给 assignee，它存储为被编辑的 `Alert` object 的属性。为此，在 **Recipients** 下拉菜单中使用 "Recipient(s) from property of object parameter" 选项。选择作为 action parameter 可用的 `Alert` object，然后在提示时选择 `Case managers` 属性。

你应该能在配置的 **Recipients** 区域看到所选的 object parameter 和属性。请记住，收件人必须始终是 Foundry user ID。如果此属性包含其他内容（如字符串 email 地址），则不会发送任何 notification。

为了测试，你可能希望先用硬编码的收件人配置 action，以验证逻辑和 notification 内容是否按预期配置。

![Image 5: 硬编码收件人](https://www.palantir.com/docs/resources/foundry/action-types/side_effects_notification_tutorial_static_test_user.png)

[了解更多关于其他收件人配置选项的信息。](https://www.palantir.com/docs/foundry/action-types/notifications/#recipients)

## [](https://www.palantir.com/docs/foundry/action-types/set-up-notification/#configure-notification-content)配置 notification 内容

接下来，你将通过自定义 notification 来配置内容：按名称称呼收件人，并在内容中包含 `Alert` object 的旧优先级和新优先级。下面是一个 notification 配置示例。

首先，从内容选项中选择 "Template"。这是配置内容最直接的方式，不需要编写任何代码。

对于 subject line，输入你想要的消息。要添加 parameter 引用，添加一个正斜杠 `/` 并从下拉列表中选择所需的 parameter。如果你的选择是 object parameter，系统会要求你选择要引用的属性。

对于 body，输入按名称称呼收件人、标识进行更改的用户并报告之前和更新后状态的文本。

与 subject 中的 object 引用一样，你可以从下拉列表中选择 "Recipient"、"Current User" 和任何 parameter 选项，以便生成对这些用户属性的正确引用。

[了解如何用更复杂的需求生成 notification 内容。](https://www.palantir.com/docs/foundry/action-types/notifications/#content)

## [](https://www.palantir.com/docs/foundry/action-types/set-up-notification/#configure-a-link)配置链接

最后，你将添加一个指向 Object Explorer 中指定 `Alert` 的 Object View 的链接。选择 "Object View"，然后从下拉菜单中选择你的 ticket object parameter。然后，为链接按钮添加一个标签 `View Ticket`。

现在你可以保存整个 notification 配置了：

![Image 6: 完整配置](https://www.palantir.com/docs/resources/foundry/action-types/side_effects_notification_tutorial_updated_full_finished_configuration.png?width=400)
[了解更多关于可配置的其他类型链接的信息。](https://www.palantir.com/docs/foundry/action-types/notifications/#content)

## [](https://www.palantir.com/docs/foundry/action-types/set-up-notification/#send-a-test-notification)发送测试 notification

要验证，创建一个以你自己为 assignee 的测试 alert。为了运行 action，你需要按照 [actions 文档](https://www.palantir.com/docs/foundry/workshop/actions-overview/) 中的说明在 Object Explorer 中或通过 Workshop module 中的按钮暴露该 action。

完成测试更改后，你应该会收到平台内 push notification 和 email notification（发送到你 Foundry 用户配置文件中指定的 email 账户）。平台内和 email notification 的预览会显示在 notification 配置视图中。

如果你没有收到 email，可能是因为你禁用了 email 和/或平台内 notification。你可以在 **User Settings** 下的 **Notifications** 中验证这一点。

## [](https://www.palantir.com/docs/foundry/action-types/set-up-notification/#next-steps)下一步

*   探索其他可选功能，例如收件人选择通过 email 接收 notification 时的 [自定义内容](https://www.palantir.com/docs/foundry/action-types/notifications/#content-components)。
*   使用 [functions](https://www.palantir.com/docs/foundry/functions/configure-notifications/) 为收件人或内容配置复杂逻辑。

[← 上一页 Notifications](https://www.palantir.com/docs/foundry/action-types/notifications/)

[下一页 Webhooks →](https://www.palantir.com/docs/foundry/action-types/webhooks/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

