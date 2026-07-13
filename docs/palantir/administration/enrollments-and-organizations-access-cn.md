Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-access/

Markdown Content:
## 管理访问

### 谁可以在 Control Panel 中管理权限？

被授予 **Enrollment administrator** 角色的用户可以在 **Enrollment permissions** 标签页中管理其 enrollment 的权限。相反，被授予 **Organization administrator** 角色的用户可以在 **Organization permissions** 标签页中管理其 Organization 的权限。未被授予这些角色的用户将无法访问这些标签页。

### 为什么我在 Control Panel 中看不到某个设置标签页？

Control Panel 中的设置以侧面板上的标签页呈现，按 enrollment / organization 级别分组。这些设置标签页仅对具有相关权限的用户可见。例如，**Authentication** 标签页需要 **Manage SAML providers** workflow。

如果你无法在 Control Panel 中看到特定设置标签页，点击侧面板中的 Search 或使用 Cmd+J（MacOS）或 Ctrl+J（Windows）快捷键打开搜索对话框。然后你可以搜索相关设置。如果你看到类似 `Contact your organization administrator to grant you access` 的消息（如下所示），请请求管理你 enrollment/organization 权限的人授予你正确的角色。

![Image 1: 无访问权限的搜索结果](https://www.palantir.com/docs/resources/foundry/administration/no-access-search-result.png)

在某些情况下，你可能会看到类似 `Contact Palantir Support to unlock these settings` 的消息，这表示 beta 或限量发布功能。

![Image 2: beta 搜索结果](https://www.palantir.com/docs/resources/foundry/administration/beta-extension-search-result.png)

如果不确定该授予哪个角色，使用 **Enrollment/Organization permissions** 中的搜索功能查找关键词。这将搜索角色名称、描述和 workflows，以及每个角色启用的设置。

![Image 3: 扩展搜索结果](https://www.palantir.com/docs/resources/foundry/administration/extension-search-results.png)

## 管理 Organization 访问

用户访问 Organization 有两种方式：作为用户的[主要 Organization](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-access/#primary-organization)，或作为用户具有[访客访问](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-access/#guest-access-to-organizations)权限的 Organization。

### Primary Organization

每个用户恰好有一个 primary Organization。用户的主要 Organization 可以在用户创建时分配，通过 SAML 设置映射（在 [**Admin > Authentication > Organization assignment**](https://www.palantir.com/docs/foundry/authentication/org-assignment/) 中可用），或在 **Users** 界面中管理。

用户的主要 Organization 决定：

*   用户个人资料中显示的 Organization。
*   用户对其他 Organization 用户的可见性。
*   用户创建的新 Projects 和群组的默认 Organization markings；默认情况下，资源限制给主要 Organization 内的用户。

### Organization 的访客访问

除了主要 Organization 外，用户还可以被授予其他 Organizations 的访客访问权限。Organization 的访客是可以查看该 Organization 中的 Projects、文件、用户、群组、标签类别和集合的用户。访客可以是用户或群组。

假设用户 Alice 对 Organization X 有访客访问权限。对 Organization X 的访客访问允许 Alice 查看以 Organization X 为主要 Organization 的用户，但不能查看 Organization X 的其他访客用户。以 Organization X 为主要 Organization 的用户始终能够查看作为 Organization X 访客的用户，除非 Organization X 禁用了[用户可见性](https://www.palantir.com/docs/foundry/administration/configure-user-and-group-visibility/)。

你可以从 **Organization Permissions** 页面的 **Guest membership** 标签页向 Organization 添加访客。

![Image 4: 管理组织访客成员](https://www.palantir.com/docs/resources/foundry/administration/manage-guests.png)
