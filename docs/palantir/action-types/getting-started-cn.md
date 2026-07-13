Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/getting-started/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/getting-started/#getting-started)快速开始

在本指南中，我们将创建一个用于更改 ticket 优先级的简单 action type。

我们将配置 submission criteria，确保优先级为 `P0`、`P1` 或 `P2`，且 ticket 状态为 `Open`。

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#prerequisites)前提条件

在本指南中，我们将使用一个 `Demo Ticket` object type，它有四个属性：

*   `Ticket ID`
*   `Title`
*   `Priority`
*   `Status`

我们还有两个示例 object：

| Ticket ID | Title | Status | Priority |
| --- | --- | --- | --- |
| PDS-123 | Demo Ticket One | Open | P2 |
| PDS-124 | Demo Ticket Two | Closed | P1 |

如果需要，你可以在自己的 Ontology 中重新创建这些，但不是必须的。

注意，要让用户能够执行 action type 配置中定义的 action，[需要额外配置](https://www.palantir.com/docs/foundry/object-link-types/allow-editing/#set-up-the-prerequisites)。如果运行的是 Object Storage V2，用户必须通过开关启用编辑。如果运行的是 Object Storage V1 (Phonograph)，必须创建一个 writeback dataset。注意 [Object Storage V1](https://www.palantir.com/docs/foundry/object-databases/object-storage-v1/) 处于 [计划弃用](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) 阶段；请 [迁移到 Object Storage V2](https://www.palantir.com/docs/foundry/object-backend/osv1-osv2-migration/)。

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#create-a-new-action-type)创建新的 action type

我们先创建一个用于更改 ticket 优先级的新 action type。在 Ontology Manager 中，在左侧边栏选择 **Action type**，然后在视图右上角选择 **New Action type**。

![Image 10: 创建新的 action type](https://www.palantir.com/docs/resources/foundry/action-types/actions_wizard.png)

创建向导允许你配置 action type 最重要的功能。为你的 action type 输入 **Display name**。接下来，选择 **Change object(s)** 选项并将其设为 **Modify**。在下面的下拉菜单中选择 `Demo Ticket` object type，通过选择 **Add property** 来添加 `Priority` 属性。最后在右下角选择 **Create**。

现在你可以看到 action type 的完整详细视图。你可以进行额外调整，例如在 **Overview** 标签页中添加 **Description**，或在 **Rules** 标签页中添加要修改的属性。

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#edit-parameters)编辑 parameter

选择 **Forms** 标签页获取 parameter 概览。`Ticket` 和 `Priority` parameter 已由 **Rule** 自动创建。

![Image 11: Actions form](https://www.palantir.com/docs/resources/foundry/action-types/actions_form.png)

选择 `Priority` parameter 来限制它可以接受的值。将约束从 **User input** 改为 **Multiple choice**。这将允许你选择该 parameter 可选的值。添加 `P0`、`P1` 和 `P2` 作为选项。如果你现在将 action 应用于一个 object，你可以将 ticket 的优先级改为 `P0`、`P1` 或 `P2`。接下来你将添加 submission criteria，限制你只能更改 open ticket 的优先级。

![Image 12: Priority parameter](https://www.palantir.com/docs/resources/foundry/action-types/actions_constraints.png)

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#add-submission-criteria)添加 submission criteria

从侧边栏打开 **Security & Submission Criteria** 标签页中的 submission criteria 区域。通过选择 **Execution** 区域中的 **Condition** 来创建一个新条件。使用 **Parameter** 条件模板，对 `Ticket` object parameter 的 `Status` 属性设置条件。使用 `is` 操作符，在 ticket 状态和特定值 `Open` 之间进行精确字符串比较。

![Image 13: Submission criteria](https://www.palantir.com/docs/resources/foundry/action-types/actions_submission_criteria.png)

添加一条失败消息，让用户能看到 action 失败的原因。你的 action 定义现在完成了，你可以配置它在 Object Explorer 中的 Object View 旁边显示。

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#add-the-action-to-an-object-view)将 action 添加到 Object View

进入 **Demo Ticket One** 并编辑其 Object View。在顶部添加一个新 widget，选择 **Actions** widget。在侧边栏中选择 **Add Item**。从 Ontology Manager 复制 action RID 并粘贴到 Action RID 字段中。将 label 命名为 "Change Ticket Priority"。

![Image 14: 将 action 添加到 Object View](https://www.palantir.com/docs/resources/foundry/action-types/getting_started_add_RID.png)

默认情况下，action form 会将每个 parameter 作为表单中的一个字段显示，包括 `Ticket` parameter。此外，action 不知道应该将当前 object 填入 `Ticket` parameter。我们将配置 action form 隐藏 ticket 字段（这样用户就不能更改不同 ticket 的状态），并将其值设为当前 object。在 **Default value** 下，选择 **Add Item**。输入 `Ticket` parameter 的 parameter ID——在本教程中，我们将其设为 `ticket`。将 value type 改为 **Environment variable**，并选择 **Current object**。最后，将 display option 改为 **Hidden**。

![Image 15: 配置 action form](https://www.palantir.com/docs/resources/foundry/action-types/getting_started_configure_action_form.png)

现在你会在预览页面上看到 action 按钮：

![Image 16: 预览页面上的 action 按钮](https://www.palantir.com/docs/resources/foundry/action-types/getting_started_preview_page.png)

现在你可以保存并发布 Object View。

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#apply-the-action)应用 action

打开一个 open ticket 并选择我们配置的 **Change Ticket Priority** 按钮。你应该会看到 action form 出现在 view 上方。点击进入 **Priority** 字段会显示我们在 parameter 上配置的 submission criterion 条件：

![Image 17: 用 action 更改 ticket priority](https://www.palantir.com/docs/resources/foundry/action-types/getting_started_apply_action.png)

选择一个优先级并提交。表单会消失，object view 会更新为新的优先级。我们的 submission criteria 规定不能在已关闭的 ticket 上运行此 action——如果我们打开已关闭的 Demo Ticket Two，会看到以下内容：

![Image 18: Submission criteria 阻止 action 在已关闭的 ticket 上运行](https://www.palantir.com/docs/resources/foundry/action-types/getting_started_testing_validation.png)

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#resolve-conflicting-user-edits-actions-and-datasource-updates)解决冲突的用户编辑（action）和 datasource 更新

Foundry Ontology 中的 object instance 可以由输入 datasource 和用户编辑/action 创建和修改。当单个 object instance（即具有特定主键值的行或 object）同时从输入 datasource 和用户编辑接收数据时，这些接收到的值必须通过冲突解决策略透明地处理。

有两种冲突解决策略：

*   策略 1：应用用户编辑（默认）
*   策略 2：应用最新的值（可能在你的 enrollment 中不可用）

[了解有关如何解决冲突的用户编辑和 datasource 更新的更多信息。](https://www.palantir.com/docs/foundry/object-edits/how-edits-applied/#resolve-conflicting-user-edits-and-datasource-updates)

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#next-steps)下一步

*   [了解 action 权限的更多信息。](https://www.palantir.com/docs/foundry/action-types/permissions/)
*   [创建一个 function-backed action。](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/)
*   [在平台的其他地方使用 action。](https://www.palantir.com/docs/foundry/action-types/use-actions/)
*   [解决冲突的用户编辑（action）和 datasource 更新](https://www.palantir.com/docs/foundry/object-edits/how-edits-applied/#resolve-conflicting-user-edits-and-datasource-updates)

[← 上一页 Overview](https://www.palantir.com/docs/foundry/action-types/overview/)

[下一页 Use actions in the platform →](https://www.palantir.com/docs/foundry/action-types/use-actions/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

