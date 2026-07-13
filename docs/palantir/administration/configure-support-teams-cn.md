Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-support-teams/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-support-teams/#configure-support-teams)配置支持团队

Support teams 使管理员能够定义为 Foundry Issues 提供支持的群组。当 **support team** 群组被分配给一个 issue 时，可以在 Control Panel 中启用[状态自动化](https://www.palantir.com/docs/foundry/administration/configure-support-teams/#status-automation)。请参阅下文了解如何为 support team 启用[状态自动化](https://www.palantir.com/docs/foundry/administration/configure-support-teams/#status-automation)。

要将群组注册为 support team，请打开 Control Panel 并导航到 **Enrollment settings > Support > Support teams** 并选择 **Add**。

## [](https://www.palantir.com/docs/foundry/administration/configure-support-teams/#status-automation)状态自动化

为 support team 启用状态自动化将对分配给他们的 issue 应用以下规则并自动设置结果状态。在 Control Panel 的 support teams 列表中选择 **Actions > Edit** 以按团队启用或禁用状态自动化。

*   _如果_报告人对 issue 发表评论，_则_将 issue 状态设为 `Waiting on support`
*   _如果_状态为 `Waiting on reporter` 且 issue 已超过 5 天未更新，_则_将 issue 状态设为 `Pending closure`
*   _如果_状态为 `Pending closure` 且 issue 已超过 5 天未更新，_则_将 issue 状态设为 `Closed`

[← 上一篇 Configure support types](https://www.palantir.com/docs/foundry/administration/configure-support-types/)

[下一篇 Organization settings / Embed resources externally →](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/)
