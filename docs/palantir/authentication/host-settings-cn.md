Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/host-settings/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/host-settings/#view-and-modify-host-settings)查看和修改主机设置

主机是浏览器与 Foundry 栈之间的访问网关。配置并启用多个 IdP 后，你可以**选择性地**为每个主机设置默认提供商、Logo 和登录说明。如果某个主机没有配置默认提供商，用户登录时可以从下拉列表中选择已启用的提供商。

## [](https://www.palantir.com/docs/foundry/authentication/host-settings/#view-host-settings)查看主机设置

首先进入 Control Panel 中的 **Authentication** 扩展，选择页面顶部附近的 **Hosts** 标签页。

这里会显示你的注册下设置的主机列表，每个主机旁边会标注其**默认提供商**。如果某个主机没有设置默认提供商，会显示 **No default provider**。如果默认提供商存在但你没有查看权限，则可能显示 **Unknown default provider**。

![Image 3: hosts-ui](https://www.palantir.com/docs/resources/foundry/authentication/hosts-ui.png)

## [](https://www.palantir.com/docs/foundry/authentication/host-settings/#manage-host-settings)管理主机设置

点击目标主机右侧的 **Actions** 菜单，选择 **Manage**。弹出窗口后，你可以修改该主机的各项设置。

![Image 4: host-settings](https://www.palantir.com/docs/resources/foundry/authentication/host-settings.png)

### [](https://www.palantir.com/docs/foundry/authentication/host-settings/#update-default-provider)更新默认提供商

弹出窗口的第一项是一个下拉菜单，列出你有权限访问的所有可用 IdP。你可以为该主机选择新的默认提供商。

### [](https://www.palantir.com/docs/foundry/authentication/host-settings/#update-logo)更新 Logo

第二项是图片上传区域，你可以直接拖拽图片到该区域，或从文件系统中选择。上传的图片会替换主机登录页面上的 Palantir Logo。

### [](https://www.palantir.com/docs/foundry/authentication/host-settings/#update-login-instructions)更新登录说明

第三项是文本区域，你可以为用户编写登录说明。这段说明会显示在登录页面的最底部。

随时可以点击弹出窗口右下角的 **Cancel** 或 **Update** 来放弃或保存更改。

[← PREVIOUS Enable and test identity provider integration](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/)

[NEXT Retention / Overview →](https://www.palantir.com/docs/foundry/retention/overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
