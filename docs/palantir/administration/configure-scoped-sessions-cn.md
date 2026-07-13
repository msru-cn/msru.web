Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-scoped-sessions/

Markdown Content:
## 配置作用域会话

作用域会话允许用户选择一组预定义的 [Markings](https://www.palantir.com/docs/foundry/security/markings/)，在其 Foundry 会话期间访问，以在不同类型的工作之间创建视觉隔离。作用域会话同时适用于 Foundry 文件系统和 Ontology 工作区。

作用域会话通过降低在 Foundry 中不同用途的工作之间意外交叉污染的风险来提高平台安全性。例如，一个从事特定医疗研究项目的用户可能被禁止使用另一个医疗研究项目中的信息（即使他们有访问权限），因为数据的混合可能会影响研究的有效性。通过将用户的会话隔离到他们当前工作的目的上，降低了交叉污染风险，用户可以更有信心地工作。

![图片 1：作用域会话示例](https://www.palantir.com/docs/resources/foundry/administration/change_scoped_session_example.png)

管理员可以在 [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 中为你的组织配置作用域会话。由于作用域会话会影响所有登录 Foundry 的用户，并可能导致显示 Foundry 工作区横幅，因此需要谨慎配置。因此，作用域会话默认关闭。

要为你的组织启用作用域会话，我们建议按照以下高级步骤操作：

1.   [检查你的 Marking 设置](https://www.palantir.com/docs/foundry/administration/configure-scoped-sessions/#review-your-marking-setup)
2.   [创建作用域会话](https://www.palantir.com/docs/foundry/administration/configure-scoped-sessions/#create-scoped-sessions)
3.   [检查作用域会话设置](https://www.palantir.com/docs/foundry/administration/configure-scoped-sessions/#review-scoped-sessions-settings)
4.   [启用作用域会话](https://www.palantir.com/docs/foundry/administration/configure-scoped-sessions/#enable-scoped-sessions)

## 检查你的 Marking 设置

作用域会话根据用户的 Marking 成员身份来限制访问。因此，要在整个平台中限制用户的范围，你必须同时做到：

*   将正确的用户设为正确 Marking 的成员，**并且**
*   将 [Markings 应用](https://www.palantir.com/docs/foundry/platform-security-management/manage-markings/#apply-markings)到你希望在 Foundry 中聚焦用户访问的项目、文件夹或文件上。

例如，假设 Anya Kimball 是一个用户，她在特定时间只能从事一个特定的研究项目，不能看到任何其他研究项目。这是使用作用域会话的好用例。要开始设置作用域会话，首先确保 Anya 是正确的一组研究 Marking 的成员。

![图片 2：Marking 管理界面](https://www.palantir.com/docs/resources/foundry/administration/marking_management.png)

然后你需要确认研究 Marking 在整个 Foundry 平台中被正确应用。用户将能够看到作用域会话中包含的一个或多个 Marking 的任何内容。同时，用户也能看到没有任何 Marking 的内容。

![图片 3：在必要项目上应用的 Markings](https://www.palantir.com/docs/resources/foundry/administration/applied_markings.png)

## 创建作用域会话

你可以在**会话预设**标签页下选择**新建作用域会话**来创建作用域会话。填写弹出的表单来创建新的作用域会话。创建后，你可以编辑与创建过程中相同的详细信息。

![图片 4：新建作用域会话对话框](https://www.palantir.com/docs/resources/foundry/administration/new_scoped_session_dialog.png)

只有在作用域会话中选择了所有 Marking 的用户才能选择此作用域会话。在本例中，Anya 是所有必需研究相关 Marking 的成员，因此她登录 Foundry 时将能够从所有可用的作用域会话中选择。

![图片 5：强制选择的作用域会话对话框](https://www.palantir.com/docs/resources/foundry/administration/scoped_session_forced_to_pick.png)

你可以通过在右侧面板中选择**管理**来更改给定作用域会话的 Marking。你还可以使用**删除作用域会话**按钮删除作用域会话。

## 检查作用域会话设置

启用作用域会话之前，你需要考虑 1）是否允许用户在不使用作用域会话的情况下工作，即["允许无作用域会话"](https://www.palantir.com/docs/foundry/administration/configure-scoped-sessions/#allow-no-scoped-session) 设置，以及/或 2）是否希望用户始终看到作用域会话选择器，即["始终显示选择器"](https://www.palantir.com/docs/foundry/administration/configure-scoped-sessions/#always-show-selector) 设置。

![图片 6：作用域会话设置标签页，作用域会话已禁用](https://www.palantir.com/docs/resources/foundry/administration/disabled_scoped_sessions.png)

### 允许无作用域会话

启用**无作用域会话**后，你组织中的人员可以在不使用作用域会话的情况下使用 Foundry。未启用作用域会话的用户将拥有对其所有 Marking 的访问权限。这与你的组织禁用作用域会话时用户拥有的访问权限相同。

![图片 7：无作用域会话](https://www.palantir.com/docs/resources/foundry/administration/no_scoped_session.png)

你可以为组织中的所有用户、仅特定组的成员或除选定组成员之外的所有用户启用**无作用域会话**。这样可以更好地控制谁可以绕过作用域会话。通常，管理员或支持用户应被允许选择**无作用域会话**选项。

### 始终显示选择器

启用**始终显示选择器**后，你组织中的人员在登录时将始终看到作用域会话选择器，即使只有一个会话可用。

![图片 8：始终显示选择器](https://www.palantir.com/docs/resources/foundry/administration/always_show_selector.png)

当**始终显示选择器**禁用时，只有一个作用域会话访问权限的用户在登录时不会看到作用域会话对话框（见上面的示例）；而是会自动登录到唯一可用的作用域会话。

## 启用作用域会话

打开**启用作用域会话**开关以完成作用域会话的设置。启用作用域会话后，你组织中的某些用户可能需要在 Foundry 中工作时选择作用域会话，这将把他们的访问限制在完整用户访问权限的子集中。如果用户有权访问多个作用域会话，他们会看到作用域会话对话框。

![图片 9：启用作用域会话](https://www.palantir.com/docs/resources/foundry/administration/enabling_scoped_sessions.png)

启用作用域会话并不意味着所有用户都一定会看到作用域会话对话框或作用域会话横幅；这取决于[作用域会话设置](https://www.palantir.com/docs/foundry/administration/configure-scoped-sessions/#review-scoped-sessions-settings)和用户的 Marking 成员身份。

在以下场景中，例如，用户不会看到作用域会话对话框或作用域会话横幅：

*   用户不是作用域会话中使用的任何 Marking 的成员。
*   为该用户启用了**无作用域会话**。
*   **始终显示选择器**已禁用。

继续上面 Anya 的例子，启用作用域会话后，Anya 登录 Foundry 时会看到下面的对话框。

![图片 10：作用域会话登录示例](https://www.palantir.com/docs/resources/foundry/administration/scoped_session_login_example.png)

选择 `SARS-CoV-2 B.1.1.529 Genome mapping` 作用域会话后，Anya 只能访问没有 Marking 的项目、文件夹和文件，或者具有 `B.1.1.529` 和/或 `SARS-CoV-2` Marking 的项目、文件夹和文件。

![图片 11：作用域会话工作区示例](https://www.palantir.com/docs/resources/foundry/administration/scoped_session_workspace_example.png)

从用户角度了解有关作用域会话的更多详细信息，请参阅 [Markings 文档](https://www.palantir.com/docs/foundry/security/markings/#use-scoped-sessions)。
