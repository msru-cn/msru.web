Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-platform-experience/

Markdown Content:
## 配置平台体验

你可以在 Control Panel 的**平台体验**页面中配置整体平台体验的相关设置。要查看**平台体验**标签页，你需要拥有以下角色之一：

*   在**注册权限**扩展中授予的 **Enrollment administrator**。
*   在**组织权限**扩展中授予的 **Organization administrator** 或 **User experience administrator**。

## 配置主页 URL

组织的主页 URL 可以在 Control Panel 的**平台体验**标签页中按组织或按用户组进行配置。

![图片 1：在平台体验设置中配置主页 URL。](https://www.palantir.com/docs/resources/foundry/administration/configure-homepage-url.png)

常见配置示例：

*   大多数新的 Foundry 注册会显示一个默认的叙事主页，帮助用户了解 Foundry 平台。该主页的 URL 为 `/narrative`。
*   如果要将 [Slate](https://www.palantir.com/docs/foundry/slate/overview/) 仪表板用作组织主页，请将值设置为 `/slate/<dashboard-rid-or-permalink>`。
*   如果要将 [Carbon](https://www.palantir.com/docs/foundry/carbon/overview/) 工作区用作组织主页，请将值设置为 `/carbon/<workspace-rid>`

如果某些用户组需要跳转到与组织默认值不同的主页 URL，你可以在左侧边栏的**组覆盖**下添加针对特定组的覆盖。列表中的第一个匹配条目（用户属于其中任一列出的组）将被使用。

## 配置可用语言

你可以在**平台体验**扩展中为用户启用除英语之外的其他语言。

![图片 2：在平台体验设置中配置语言。](https://www.palantir.com/docs/resources/foundry/administration/configure-languages.png)

拥有其他语言访问权限的用户会在 Foundry 侧边栏中看到一个语言切换器，可以进行语言选择。如果启用了**遵循用户浏览器语言偏好**或**在本地化值时始终使用浏览器语言偏好**选项，用户初始会看到 Foundry 以其在浏览器偏好中设为最高优先级的可用语言显示。否则默认使用英语，直到用户从语言切换器中选择其他语言。

## 配置平台 Logo

平台 Logo 可以按注册和组织进行配置，用你选择的图片替换默认的 Palantir Logo。你可以提供最多四种不同尺寸的 Logo：favicon、小、中、大。如果某种尺寸没有提供图片，Foundry 会使用合适的备用尺寸。favicon 没有备用行为。自定义 Logo 时，你应该上传 favicon 以及_至少_其他三种尺寸中的一种。

| 尺寸 | 备用 |
| --- | --- |
| Favicon | （无） |
| 小 | 中、大 |
| 中 | 小、大 |
| 大 | 中、小 |

![图片 3：在平台体验设置中配置平台 Logo。](https://www.palantir.com/docs/resources/foundry/administration/configure-platform-logo.png)

## 配置平台标题

平台标题可以按注册和组织进行配置，用你提供的标题替换对平台的引用。默认平台标题为 `Palantir`。你可以在**平台体验**扩展的**平台标题**标签页中进行配置。

配置新平台标题后，此更改也会反映在平台内文档的名称中。例如，如果你将平台重命名为 `ABC`，平台内文档应用将从默认的 `Custom documentation` 标题变为 `ABC documentation`。

![图片 4：在平台体验设置中配置平台标题。](https://www.palantir.com/docs/resources/foundry/administration/configure-platform-title.png)

## 配置平台版本

[平台版本切换器](https://www.palantir.com/docs/foundry/administration/configure-platform-experience/#platform-version-switcher) 让你可以在不同版本的平台之间选择。例如，一些用户可能更喜欢使用平台的 _beta_ 版本，以便在 _stable_ 版本发布之前提前使用新功能。

要查看和配置 Control Panel 中的**平台版本**标签页，用户需要 **Manage platform version** 工作流权限，该权限由 **User experience administrator** 角色授予。角色在 Control Panel 的 **[组织权限](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/#roles)** 标签页中管理。

### 平台版本

平台版本切换器提供三种平台版本：[stable](https://www.palantir.com/docs/foundry/administration/configure-platform-experience/#stable)、[beta](https://www.palantir.com/docs/foundry/administration/configure-platform-experience/#beta) 和 [prior](https://www.palantir.com/docs/foundry/administration/configure-platform-experience/#prior)。

#### Stable

stable 版本经过严格测试，被广泛使用。绝大多数用户都在使用 stable 版本。

#### Beta

beta 版本是未来的 stable 版本，包含当前 stable 版本尚未提供的新变更和新功能。由于 beta 版本更新，其中的变更可能没有 stable 版本那样经过严格测试，你可能会遇到意外行为。在 Palantir 平台中进行开发时，选择 beta 版本可以提前使用新功能。

#### Prior

prior 版本是当前 stable 版本之前的上一个 stable 版本。切换到 prior 版本可以在 stable 版本发生变更后查看旧 UI，但不建议日常使用 prior 版本。用户可以临时查看 prior 版本，但会自动切换回默认版本（参见[配置用户默认平台版本](https://www.palantir.com/docs/foundry/administration/configure-platform-experience/#configuring-users-default-platform-version)）。

### 平台版本切换器

要更改平台版本，请导航到左侧边栏底部的账户设置，然后选择 **Platform version** 旁边的当前版本以打开平台版本切换器。选择不同版本会重新加载页面并加载新版本。

![图片 5：更改平台版本。](https://www.palantir.com/docs/resources/foundry/administration/platform-version-switcher.png)

向用户显示的默认版本由 [Control Panel 中的默认平台版本设置](https://www.palantir.com/docs/foundry/administration/configure-platform-experience/#configuring-users-default-platform-version) 决定。查看非 stable 版本的平台版本时，侧边栏中会显示一个小标签，提示用户正在查看不同的版本。

![图片 6：侧边栏中可见的平台版本标签。](https://www.palantir.com/docs/resources/foundry/administration/version-tag.png)

### 限制平台版本切换器的访问

可以限制组织中用户对侧边栏中平台版本切换器的访问。要更改切换器的访问权限，请导航到**平台体验**扩展，然后进入**平台版本**标签页。

![图片 7：平台版本标签页](https://www.palantir.com/docs/resources/foundry/administration/configure-platform-version.png)

选择 **Platform version switcher** 旁边的 **Manage** 以打开对话框来更改平台版本切换器设置。

![图片 8：平台版本切换器对话框](https://www.palantir.com/docs/resources/foundry/administration/platform-version-switcher-dialog.png)

选择所需的访问方式，然后选择**为你组织请求并应用变更**。这会在 [Control Panel 的审批收件箱](https://www.palantir.com/docs/foundry/administration/control-panel-approvals/) 中创建一个变更请求，该请求会自动自我审批并应用。要查看所有过去的变更，请在审批收件箱中选择 **Platform version switcher requests**。

![图片 9：平台版本切换器请求](https://www.palantir.com/docs/resources/foundry/administration/platform-version-switcher-request.png)

### 配置用户默认平台版本

管理员还可以配置特定用户组默认使用 beta 平台版本。如果这些用户有平台版本切换器的访问权限，他们仍然可以从 beta 版本切换到其他版本。这样你可以选择一组高级用户默认使用 beta 版本，让他们在其他用户之前试用新功能。

![图片 10：平台版本默认值](https://www.palantir.com/docs/resources/foundry/administration/platform-version-default.png)

要配置哪些用户默认查看 beta 版本，请选择 **Default platform version** 旁边的 **Manage**。在对话框中，选择需要使用 beta 版本的组；未被选中的组的用户将默认查看 stable 版本。

![图片 11：平台版本默认值对话框](https://www.palantir.com/docs/resources/foundry/administration/platform-version-default-dialog.png)

配置完成后，选择**为你组织请求并应用变更**。这会在 [Control Panel 的审批收件箱](https://www.palantir.com/docs/foundry/administration/control-panel-approvals/) 中创建一个变更请求，该请求会自动自我审批并应用。要查看所有过去的变更，请在审批收件箱中选择 **Platform version default requests**。

![图片 12：平台版本默认值请求](https://www.palantir.com/docs/resources/foundry/administration/platform-version-default-request.png)

## 配置静态横幅

你可以按组织配置一个静态横幅，在每个页面的顶部、底部或顶部和底部同时显示。**Banner text** 字段支持基本的 Markdown 语法。此设置默认关闭。

![图片 13：在平台体验设置中配置静态横幅](https://www.palantir.com/docs/resources/foundry/administration/configure-static-banner.png)
