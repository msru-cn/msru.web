Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/saml-provider-update/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/saml-provider-update/#update-saml-provider-in-control-panel)在 Control Panel 中更新 SAML 提供商

从一个 SAML IdP 迁移到另一个，不仅仅是创建和禁用提供商那么简单。你需要完成就地 SAML 提供商更新或外部到外部的 SAML 提供商更新流程。如果不做正确迁移，用户使用新 SAML 提供商登录 Foundry 时，系统会为他们创建一个重复的新账号，新提供商的群组也会重复。不执行正确迁移的后果包括：

*   用户会失去对之前主文件夹的访问权限，因为他们会获得新的主文件夹。
*   用户会失去之前通过直接共享或通过旧提供商群组共享的所有内容的访问权限。
*   共享对话框中会出现重复的用户和群组，容易造成混乱。

为避免上述问题，在切换到新 SAML 提供商之前，必须先将用户从旧提供商迁移到新提供商。有两种方式：

## [](https://www.palantir.com/docs/foundry/authentication/saml-provider-update/#in-place-saml-provider-update)就地 SAML 提供商更新

这是最简单的方式，仅适用于当前和目标 IdP 共享相同属性的情况。特别是，ID 属性映射的值_不能改变_，否则用户会在 Foundry 中获得全新的账号。

![Image 5: ID 属性](https://www.palantir.com/docs/resources/foundry/authentication/id-attribute-mapping.png)

如果新 IdP 中传入用户或群组的 ID 属性与现有 ID 属性不同，请按照外部到外部的 SAML 提供商更新流程操作。

执行就地 SAML 提供商更新的步骤：

1.   在 Control Panel 中，进入 **Enrollment Settings** 下的 **Authentication** 标签页。找到要更新的 SAML 提供商，点击 **Actions** 下拉菜单选择 **Manage**。

![Image 6: 管理提供商](https://www.palantir.com/docs/resources/foundry/authentication/manageProvider.png)

在 **SAML** 部分，选择 **Manage**。

![Image 7: 管理 SAML](https://www.palantir.com/docs/resources/foundry/authentication/manageSAML.png)

2.   下载 **[SAML 集成元数据 XML](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/#saml-integration-metadata)**。在 IdP 端更新你的 SAML 应用。

3.   在 **Identity provider metadata** 下，将新的 IdP 联合元数据文件上传到 Control Panel。

4.   **[测试](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/#test-integration)**新集成是否正常工作，确认用户属性没有变化，用户不会获得新的 Foundry 账号。

## [](https://www.palantir.com/docs/foundry/authentication/saml-provider-update/#external-to-external-saml-provider-update)外部到外部的 SAML 提供商更新

执行外部到外部 SAML 提供商更新的步骤：

1.   在 Control Panel 中，进入 **Enrollment Settings** 下的 **Authentication** 标签页。在 **Authentication providers** 下选择 **Add provider** 添加新提供商。

![Image 8: 添加提供商](https://www.palantir.com/docs/resources/foundry/authentication/addProvider.png)

了解更多关于[配置 SAML 2.0 集成](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/#configure-saml-20-integration)以添加新 SAML 提供商的信息。

2.   使用测试账号 **[测试](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/#test-integration)** 新的 SAML 集成。

3.   暂时禁用该集成，避免同时启用重复的提供商。

4.   联系你的 Palantir 代表，协助将用户从旧提供商迁移到新提供商。

[← PREVIOUS Other identity providers](https://www.palantir.com/docs/foundry/authentication/saml-other-idp/)

[NEXT OIDC / Getting started →](https://www.palantir.com/docs/foundry/authentication/oidc-getting-started/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
