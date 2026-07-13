Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-user-and-group-visibility/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-user-and-group-visibility/#configure-user-and-group-visibility)配置用户和群组可见性

Control Panel 中的 **Member discovery** 设置允许管理员控制组织内的用户是否可以发现同一组织中的其他用户和群组。此功能通过阻止用户查看组织的其他成员来增强隐私和安全隔离。

默认情况下，组织中的用户可以发现同一组织中的其他用户和群组。禁用 member discovery 会阻止此可见性，同时保持管理员和应用操作的正常功能。

当组织的用户发现功能被禁用时，只有 organization administrators 可以查看该组织中的其他用户。

组织的访客成员也可能是该组织的 organization administrators。有关访客成员的更多信息，请访问 [enrollments and organization access](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-access/#guest-access-to-organizations)。

这些设置仅影响组织内部的发现。要管理跨组织协作，请访问[跨组织协作](https://www.palantir.com/docs/foundry/security/cross-organization-collaboration/)。

## [](https://www.palantir.com/docs/foundry/administration/configure-user-and-group-visibility/#configure-member-discovery-settings)配置 member discovery 设置

按照以下指南为组织配置 member discovery 设置：

1.   导航到 **Control Panel > Organization management**。
2.   找到你的组织并选择 **Actions > Manage member discovery**。

![Image 3: 组织管理操作菜单。](https://www.palantir.com/docs/resources/foundry/administration/manage-member-discovery-action.png?width=300)

3.   配置 member discovery 设置：
    *   **Discover users：** 关闭以阻止此组织中的用户发现同一组织中的其他用户。
    *   **Discover groups：** 关闭以阻止此组织中的用户发现同一组织中的群组。

![Image 4: Member discovery 设置页面](https://www.palantir.com/docs/resources/foundry/administration/manage-member-discovery-extension.png?width=600)

4.   选择 **Save** 以应用更改。

## [](https://www.palantir.com/docs/foundry/administration/configure-user-and-group-visibility/#consumer-mode-benefits)Consumer mode 的优势

在 consumer mode 下运行时，配置私有组织可带来显著优势。

### [](https://www.palantir.com/docs/foundry/administration/configure-user-and-group-visibility/#user-privacy)用户隐私

Consumers 无法看到其他 consumer 用户，维护不同客户账户之间的隐私。这确保来自不同组织或客户群的用户无法发现彼此的存在。

### [](https://www.palantir.com/docs/foundry/administration/configure-user-and-group-visibility/#group-isolation)群组隔离

防止发现内部管理群组和其他 consumer 特定群组。用户将无法浏览或发现对他们不可见的群组。

### [](https://www.palantir.com/docs/foundry/administration/configure-user-and-group-visibility/#security-enhancement)安全增强

减少关于组织结构和成员的信息泄露。这通过防止用户收集组织结构情报来限制攻击面。

### [](https://www.palantir.com/docs/foundry/administration/configure-user-and-group-visibility/#expected-behavior)预期行为

管理员可以正常查看所有用户，确保管理功能继续正常运行，同时 consumer 用户的可见性受到限制。

## [](https://www.palantir.com/docs/foundry/administration/configure-user-and-group-visibility/#impact-on-functionality)对功能的影响

Member discovery 设置不影响现有权限或访问权。当用户或群组可见性被禁用时，任何依赖用户访问用户或群组详细信息能力的逻辑可能会失败。受限视图将继续工作，但任何依赖用户或群组可见性的用户定义逻辑将无法访问该信息。

当 member discovery 被禁用时，功能将受到以下影响：

*   **用户不能：** 浏览或搜索其组织内的其他用户和群组。
*   **用户可以：** 根据跨组织可见性设置与其他组织的用户和群组协作。
*   **管理员保留：** 对所有用户和群组的完全可见性和管理功能。
*   **应用可以：** 使用现有权限和访问模式正常运行。

[← 上一篇 Configure logging](https://www.palantir.com/docs/foundry/administration/configure-logging/)

[下一篇 Enablement / Consumer mode / Overview →](https://www.palantir.com/docs/foundry/consumer-mode/overview/)
