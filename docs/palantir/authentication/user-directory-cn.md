Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/user-directory/

Markdown Content:
## 管理注册环境中的用户

Palantir 的自助式无密码 IdP 目前仅适用于新的商业和开发者级别注册环境以及 AIP 训练营。

大多数情况下，你的注册管理员会将组织现有的 IdP 与 Palantir 平台集成，这样你可以用与其他内部系统相同的凭证登录。

本页提供使用 Palantir 自助式用户目录时，如何在注册环境中访问和管理用户账号的详细指导。以下说明描述了如何添加新用户、管理 passkey、启用或禁用现有账号以及删除用户账号。

## 访问用户管理

要在注册环境中管理用户，你必须是 `enrollment administrator` 或 `authentication administrator`。如果你没有这些权限，现有的注册管理员可以为你分配相关角色。查看[授予用户管理注册环境用户的权限](https://www.palantir.com/docs/foundry/authentication/user-directory/#grant-user-permission-to-manage-users-of-the-enrollment)文档了解更多信息。

要访问 **Manage users** 页面，进入 **Control Panel > Manage user directory > Manage users**。

![Image 1: Control Panel 中的 Manage users 页面。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-manageusers.png?width=600)

## 添加新用户

1.   进入 **Manage users** 页面。参见[访问用户管理文档](https://www.palantir.com/docs/foundry/authentication/user-directory/#access-user-management)。

![Image 2: Control Panel 中的 Manage users 页面，准备添加新用户。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-addnewuser.png?width=600)

1.   选择 **Add new user**。在此处填写待添加用户的姓名和邮箱地址，发送加入注册环境的邀请。

![Image 3: 添加新用户选项。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-addnewusercloseup.png?width=200)![Image 4: 添加新用户对话框。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-addnewusermodal.png?width=200)

1.   新用户会收到一封邮件来完成用户账号注册并配置 passkey。查看[认证文档](https://www.palantir.com/docs/foundry/getting-started/login/#set-up-and-configure-a-passkey)了解更多信息。

## 管理 passkey

如果用户被锁定账号或需要添加/移除 passkey，管理员可以管理其 passkey。包括删除特定 passkey、删除所有 passkey 以重置账号，以及发送邀请让用户注册额外的 passkey。

要管理用户的 passkey，请按以下步骤操作：

1.   进入 **Manage users** 页面。参见[访问用户管理文档](https://www.palantir.com/docs/foundry/authentication/user-directory/#access-user-management)。
2.   选择要管理 passkey 的用户。
3.   选择 **User details** 面板中的 **Manage passkeys** 选项。

![Image 5: 管理用户目录的用户详情面板。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-userdetails-activeuser.png?width=200)

1.   **Manage passkeys** 对话框显示用户姓名、邮箱和用户 RID，以及两个可折叠面板：**Delete passkeys** 和 **Add passkey**。

### 删除 passkey

**Delete passkeys** 面板显示用户所有已注册 passkey 的列表。你可以选择性地删除一个或多个 passkey，不影响其他凭证。

![Image 6: Manage passkeys 对话框，Delete passkeys 面板展开，选中了一个 passkey 进行删除。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-managepasskeysmodal-deletepasskey.png?width=400)

选择要移除的 passkey，然后点击 **Delete passkey(s)** 按钮。对话框的行为根据选择的 passkey 数量而变化：

*   如果选择了部分 passkey，只删除选中的 passkey。用户通过剩余的 passkey 仍可访问。
*   如果选择了所有 passkey，操作会重置用户账号。用户会收到恢复邮件，需要注册新的 passkey。

![Image 7: Manage passkeys 对话框，选中了所有 passkey，显示移除所有 passkey 将重置账号的警告。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-managepasskeysmodal-deletepasskeysandresetaccount.png?width=400)

### 添加 passkey

**Add passkey** 面板允许你发送邀请，让用户注册额外的 passkey，不影响现有凭证。当用户在一个设备上被锁定但在其他设备上有有效的 passkey 时，这很有用。

每个用户最多可以注册四个 passkey。面板会显示剩余的 passkey 槽位数。

要添加 passkey，点击 **Add passkey** 按钮。

![Image 8: Manage passkeys 对话框，Add passkey 面板展开，显示四个槽位中剩余一个。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-managepasskeysmodal-addpasskey.png?width=400)

用户会收到一封包含一次性密码和注册额外 passkey 链接的邮件。如果用户已达到最多四个 passkey 的上限，**Add passkey** 按钮会被禁用。你必须先删除现有 passkey 才能添加新的。

### Passkey 名称可见性

管理员在管理用户的 passkey 时可以看到 passkey 名称。这种可见性有助于在恢复过程中识别要保留或移除的 passkey。用户在创建和编辑 passkey 时会被告知管理员可以看到其 passkey 名称，建议不要在名称中包含个人敏感信息。

## 禁用用户访问

要撤销用户的访问权限，管理员可以禁用账号。用户将无法注册、登录或重置账号，直到被重新启用。

要禁用用户账号，请按以下步骤操作：

1.   进入 **Manage users** 页面。参见[访问用户管理文档](https://www.palantir.com/docs/foundry/authentication/user-directory/#access-user-management)。
2.   选择要禁用的用户。
3.   使用 **User details** 面板中的 **Disable** 选项。

![Image 9: 管理用户目录的用户详情面板。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-userdetails-activeuser.png?width=200)

1.   查看弹出窗口中的信息，点击 **Disable** 确认。

![Image 10: 管理用户目录的禁用用户对话框。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-disableusermodal.png?width=400)

## 重新启用用户访问

被禁用的用户要重新获得平台访问权限，管理员需要启用其账号。启用后，用户账号会被重置，可以注册和登录。

要启用用户，请按以下步骤操作：

1.   进入 **Manage users** 页面。参见[访问用户管理文档](https://www.palantir.com/docs/foundry/authentication/user-directory/#access-user-management)。
2.   选择要启用的用户。
3.   选择 **User details** 面板中的 **Enable** 选项。

![Image 11: 管理用户目录的用户详情面板。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-userdetails-disableduser.png?width=200)

1.   查看弹出窗口中的信息，点击 **Enable** 确认。

![Image 12: 管理用户目录的启用用户对话框。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-enableusermodal.png?width=400)

## 删除用户

要永久撤销用户的访问权限，你应该删除用户。

此操作不可撤销，用户将不再有任何平台访问权限。删除用户前，应将其拥有的资源共享或转移所有权。

要删除用户账号，请按以下步骤操作：

1.   进入 **Manage users** 页面。参见[访问用户管理文档](https://www.palantir.com/docs/foundry/authentication/user-directory/#access-user-management)。
2.   选择要删除的用户。
3.   选择 **User details** 面板中的 **Delete** 选项。

![Image 13: 管理用户目录的用户详情面板。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-userdetails-activeuser.png?width=200)

1.   查看弹出窗口中的信息，点击 **Delete** 确认。

![Image 14: 管理用户目录的删除用户对话框。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-userdirectories-deleteusermodal.png?width=400)

## 授予用户管理注册环境用户的权限

要让其他用户能够管理注册环境中的用户，你需要为他们分配 `enrollment administrator` 和/或 `authentication administrator` 角色。更多关于注册权限的信息，查看[权限级别](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/)。

![Image 15: 管理用户目录的用户详情面板。](https://www.palantir.com/docs/resources/foundry/authentication/enrollmentperms-authenticationadministrator.png?width=600)
