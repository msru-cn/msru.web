Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-workshop/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-workshop/#configure-workshop-settings)配置 Workshop 设置

## [](https://www.palantir.com/docs/foundry/administration/configure-workshop/#kiosk-mode)Kiosk mode

[Kiosk mode](https://www.palantir.com/docs/foundry/workshop/kiosk-mode/) 设置在 Organization 级别配置和管理。具有 **Data Governance Officer** 角色的管理员可以在 Control Panel 中设置哪些模块可以启用 kiosk mode 以及哪些用户组可以启动 kiosk mode 会话。

对于跨多个 Organization 共享的项目中的 Workshop 模块，kiosk mode 可以在一个 Organization 中启用而在另一个中不启用。为该模块启动 kiosk mode 会话的用户将在验证其访问权限时检查其主要 Organization 的 Control Panel 设置。

要访问和配置 kiosk mode 设置，导航到相关 Organization 的 **All settings** 标签页，从 **Application Configuration** 部分选择 **Workshop**。在 **Kiosk mode** 标签页中，你可以查看以下部分：

*   **Allowlist：** 添加或移除 Workshop 模块以设置哪些模块可以启用 kiosk mode。
*   **Permission group：** 搜索、添加或移除用户组以设置哪些用户有权限为已启用 kiosk mode 的模块启动 kiosk mode 会话。
*   **Session Launch History：** 提供所有历史和活跃 kiosk mode 会话的视图。

![Image 3: Kiosk mode 模块 allowlist 和 permission group allowlist。](https://www.palantir.com/docs/resources/foundry/administration/kiosk-mode-allow-list.png?width=550)![Image 4: Kiosk mode 模块 allowlist 和 permission group allowlist。](https://www.palantir.com/docs/resources/foundry/administration/kiosk-mode-session-launch-history.png?width=600)

[← 上一篇 Configure file access presets](https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/)

[下一篇 Configure logging →](https://www.palantir.com/docs/foundry/administration/configure-logging/)
