Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-application-access/

Markdown Content:
## 配置应用访问权限

Control Panel 中的 **Application access** 部分允许相应管理员控制用户和群组对 Foundry 中特定工具的访问范围。

限制应用访问的一个常见场景是避免在 Foundry 中使用自定义应用或一小组精选分析和其他资源的用户产生困惑或分心。限制该用户组可用的应用范围可以简化他们的 Foundry 体验。

另一个常见场景是使用应用访问权限让平台管理团队或一组高级用户提前访问 [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/#beta) 应用，同时限制更广泛用户群体的可用性。

甚至可以移除几乎所有 Foundry 应用的访问权限。在这种情况下，用户只能访问面向消费者的应用，如 Slate 和 Workshop。

应用访问不是安全功能；它只是简化不需要查看某些应用的用户的前端体验。有关如何正确设置功能权限的指导，请参阅 [Security 文档](https://www.palantir.com/docs/foundry/security/overview/)。

要查看和配置 Control Panel 中的 Application access 部分，用户需要 **Manage application access** workflow，该 workflow 由 **User experience administrator** 角色授予。角色在 Control Panel 的 **[Organization permissions](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/#roles)** 标签页中管理。

![Image 1: Application access 页面](https://www.palantir.com/docs/resources/foundry/administration/application-access-overview.png)

## 变更请求

更改应用访问配置会在 [Approvals](https://www.palantir.com/docs/foundry/approvals/overview/) 中生成变更请求。可以在 [Control Panel 的 Approvals 收件箱](https://www.palantir.com/docs/foundry/administration/control-panel-approvals/) 中查看，请求类型为 **Application access change requests**。所有变更的历史记录都会被保留。

![Image 2: Application access 变更请求](https://www.palantir.com/docs/resources/foundry/administration/application-access-change-request.png)

## 配置审批策略

默认情况下，应用访问变更请求会自动自审批并应用。可以在 **Advanced settings** 标签页中配置。

![Image 3: Application access 高级设置](https://www.palantir.com/docs/resources/foundry/administration/application-access-advanced-settings.png)

选择 **Manage** 以请求更改审批策略。将弹出一个对话框，你可以在其中选择应应用于应用访问请求的新策略。

![Image 4: Application access 变更策略对话框](https://www.palantir.com/docs/resources/foundry/administration/application-access-change-policy-dialog.png)

选择新的审批策略，然后选择 **Request change**。这将在 Approvals 中生成变更请求。审批策略的变更需要由具有 **Manage application access** workflow 的用户（非变更请求发起人）审批。

![Image 5: Application access 策略变更请求](https://www.palantir.com/docs/resources/foundry/administration/application-access-policy-change-request.png)

审批通过后，更新后的审批策略将立即应用于应用访问变更请求。

## 限制平台访问

默认情况下，Foundry 用户可以访问 Foundry 平台的大部分内容。通过 Application access，可以灵活地为不同用户组定制 Foundry 体验。

最严格的配置是完全移除 Foundry 平台的访问权限。限制 Foundry 平台访问有两种选项：allowlist 或 blocklist。**Everyone except members of groups** 限制至少属于指定组之一的用户。**Only members of groups** 限制_不属于_任何指定组的用户。被限制访问 Foundry 平台的用户只能访问他们已被明确授予资源级访问权限的 Slate 或 Workshop 中构建的面向消费者的应用。对于这些用户，Foundry 侧边栏将被隐藏，且无法导航到 Foundry 的任何其他部分。注意，应用访问在应用级别运作；这些控制不区分读和写访问。

要限制哪些用户能够访问 Foundry 平台整体：

1.   选择 **Foundry Platform** 旁边的 **Manage**，打开配置 Foundry 平台访问的对话框。
2.   选择 **Everyone except members of groups** 或 **Only members of groups**。
3.   搜索根据之前的选择应该有或没有平台访问权限的用户组。
4.   选择 **Request and apply change** 以创建变更请求并立即应用。

![Image 6: 配置平台访问](https://www.palantir.com/docs/resources/foundry/administration/application-access-platform-access.png)

注意，具有 **User experience administrator** 角色的用户账号必须至少保留在一个仍有 Foundry 平台访问权限的组中，否则将无法访问 Control Panel，也就无法再管理这些设置。

## 自定义应用访问

可以按应用级别限制 Foundry 平台的范围。没有访问权限的用户将无法从侧边栏或 [Application Portal](https://www.palantir.com/docs/foundry/getting-started/orientation-and-nav//#applications-portal) 发现该应用。此外，当他们尝试通过 URL 访问没有权限的应用时，会看到 403 "Permission denied" 错误消息。

![Image 7: Permission denied](https://www.palantir.com/docs/resources/foundry/administration/403-permission-denied.png)

所有应用按类别和[生命周期阶段](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/)分组，并按字母排序。

![Image 8: 应用类别](https://www.palantir.com/docs/resources/foundry/administration/application-access-category.png)

选择 **Manage** 打开配置单个应用访问的对话框。要为多个应用配置相同的访问设置，切换页面顶部的 **Manage multiple applications**，然后选择要更新的应用。

![Image 9: 选择多个应用进行批量管理](https://www.palantir.com/docs/resources/foundry/administration/application-access-bulk-select.png)

此时，管理对话框会显示所有选中的应用及其当前生命周期阶段和访问设置。

![Image 10: 批量管理应用](https://www.palantir.com/docs/resources/foundry/administration/application-access-bulk-dialog.png)

注意，Control Panel 不能被完全禁用。你所属的至少一个组需要有访问权限，否则你将无法再管理这些设置。

## 生命周期阶段更新

应用遵循[开发生命周期](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/)。当应用从一个生命周期阶段过渡到下一个阶段时，同一组用户保持访问权限，但以下情况除外：

*   当应用变为全面可用（generally available）时，所有用户将自动获得访问权限，除非该应用在实验或 beta 阶段被明确禁用。将被自动启用的 beta 应用在 **Application access** 中显示为 "Not yet enabled" 而非 "Disabled"，以指示此状态。
*   当应用被弃用时，所有用户将失去访问权限。

为了突出重要的生命周期阶段更新，一些应用会显示在页面顶部，直到其设置被确认或更新：

*   **Previously disabled 的 generally available 应用：** 在实验或 beta 阶段被明确禁用或限制给某些用户组的应用，在达到 general availability 时仍保持受限状态。可以使用快捷操作选择保持限制或在新生命周期阶段为所有用户启用。
*   **Recently sunsetted 且已启用的应用：** 当应用进入 sunset 阶段时，之前有访问权限的用户将保持访问权限。此时不建议继续使用该应用，但仍提供关键 bug 修复支持。如果已设定弃用时间线（通常为 12 个月），弃用日期将会公布并显示在应用访问页面上。请在弃用日期之前与用户合作减少使用量，然后禁用它。
*   **已弃用且已启用的应用：** 预计所有用户已在应用处于 sunset 阶段且设定弃用日期时迁移到其他工作流。已弃用的应用可能随时从 Foundry 安装中消失，不应再使用。

注意，所有应用生命周期阶段变更将提前两周在文档的 [Announcements](https://www.palantir.com/docs/foundry/announcements/) 部分公布。在 **Platform administration** [联系信息](https://www.palantir.com/docs/foundry/administration/platform-communications/#configure-contact-information) 中配置的地址也会收到关于这些变更的邮件通知。
