Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-workspaces/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-workspaces/#configure-workspaces)配置 workspaces

已弃用功能

这些文档仅适用于你在 Control Panel 中看到 **Foundry suite** 部分的情况。如果你看到的是 **Application access**，请参阅 [Configure application access](https://www.palantir.com/docs/foundry/administration/configure-application-access/)。

如果你想缩小用户访问范围并帮助用户专注于提供的工作流，你可以通过 Control Panel 的 **Foundry Suite** 部分按 Organization 或用户组自定义可用应用。

## [](https://www.palantir.com/docs/foundry/administration/configure-workspaces/#platform-access)Platform access

除非另有规定，所有用户都可以访问 Foundry 平台的大部分内容。不在具有 platform access 的用户组中的用户只能访问他们已被明确授予访问权限的 Slate 或 Workshop 中构建的面向消费者的应用。此外，这些受限用户将看不到 Foundry 导航侧边栏，也无法导航到 Foundry 的其他部分。

对于具有 platform access 的用户，你可以进一步自定义他们能够使用哪些 workspaces。

## [](https://www.palantir.com/docs/foundry/administration/configure-workspaces/#workspaces)Workspaces

**Workspace** 是以下之一：

*   没有 Foundry 侧边栏的独立应用
*   带有 Foundry 侧边栏的相关应用分组

### [](https://www.palantir.com/docs/foundry/administration/configure-workspaces/#foundry-suite)Foundry Suite

要访问 Control Panel 中的 Foundry Suite 部分，你需要 **User experience administrator** 角色所属的 **Manage application access** workflow（之前称为 **Manage Foundry suite workspaces**）。此角色在 Control Panel 的 **Organization permissions** 标签页中管理。

一旦你有权限访问 Foundry Suite 设置，你将在 Control Panel 侧边栏中看到它作为选项。从 Foundry Suite 页面，你可以限制 platform access 并了解为特定 Organization 启用了哪些 workspaces。

![Image 7: Foundry Suite 概览](https://www.palantir.com/docs/resources/foundry/administration/foundry-suite-overview.png)

### [](https://www.palantir.com/docs/foundry/administration/configure-workspaces/#restrict-platform-access)限制 platform access

要限制哪些用户能够访问 Foundry 平台整体，选择 **Select user groups** 并搜索应该有平台访问权限的用户组。不在这些组中的用户将被限制使用自定义的面向消费者的应用，且 Foundry 应用导航侧边栏对他们不可见。页面下方 **Foundry application access** 下的 workspace 和应用访问配置仅适用于具有 platform access 的用户。

![Image 8: 配置 platform access](https://www.palantir.com/docs/resources/foundry/administration/configure-platform-access.png)

### [](https://www.palantir.com/docs/foundry/administration/configure-workspaces/#configure-a-workspace)配置 workspace

选择 **Manage workspace** 以配置 workspace 的访问权限。你将找到有关 workspace 及任何关联应用的更多详情。以下示例显示了为 **Analyze data** workspace 选择 **Manage workspace** 的结果。从此页面，你可以使用 **Enable workspace** 开关整个 workspace 或仅特定应用。如果某个应用被认为是此 workspace 的默认应用，则无法关闭。

![Image 9: Workspace 应用列表](https://www.palantir.com/docs/resources/foundry/administration/workspace-application-list.png)

### [](https://www.palantir.com/docs/foundry/administration/configure-workspaces/#configure-more-granular-access-to-workspaces-and-applications)配置更细粒度的 workspaces 和应用访问

要对 workspace 进行细粒度的权限配置，你可以将访问限制给指定的组，如下所示。

![Image 10: 细粒度 workspace 设置](https://www.palantir.com/docs/resources/foundry/administration/granular-workspace-settings.png)

此外，在 workspace 内，你可以在 **Advanced settings** 下将应用的访问限制给指定的组。用户只能看到属于已启用 workspaces 的应用。如果 workspace 被限制给一组特定的组，则应用只能为该组或该组的更小子集启用。

![Image 11: 细粒度应用设置](https://www.palantir.com/docs/resources/foundry/administration/granular-application-settings.png)

### [](https://www.palantir.com/docs/foundry/administration/configure-workspaces/#disable-access-to-workspaces-and-applications)禁用 workspaces 和应用的访问

没有访问某个 workspace 或应用权限的用户将不会在侧边栏中找到特定的应用和 workspaces。此外，如果用户尝试通过链接访问未授权的应用或 workspace，将遇到 403 "Permission denied" 错误。

Workspaces 中的某些应用默认启用且无法在 workspace 内关闭，因为它们被视为该 workspace 的核心功能。

![Image 12: Permission denied](https://www.palantir.com/docs/resources/foundry/administration/403-permission-denied.png)

[← 上一篇 Configure application access](https://www.palantir.com/docs/foundry/administration/configure-application-access/)

[下一篇 Configure RStudio® license →](https://www.palantir.com/docs/foundry/administration/configure-rstudio-license/)
