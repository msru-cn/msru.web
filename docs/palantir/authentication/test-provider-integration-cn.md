Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/test-provider-integration/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/#enable-and-test-identity-provider-integration)启用并测试 IdP 集成

## [](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/#enable-authentication)启用认证

你必须启用 SAML 或 OIDC 提供商才能测试集成。如果使用了 Foundry 设置链接，直接跳到下一步。否则，进入 **Provider Management** 页面，为所需的提供商开启 **Enable provider** 开关。然后你可以使用新集成登录 Foundry。

![Image 6: 启用提供商](https://www.palantir.com/docs/resources/foundry/authentication/authentication-enable-provider.png)

## [](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/#test-integration)测试集成

要验证 IdP 集成的配置，你可以创建测试登录。如果使用了 Foundry 设置链接，点击 **Log in to Foundry** 自动创建测试登录。

或者，在平台内进入 **SAML** 或 **OIDC** 页面，选择 **Test SAML** 然后 **Create new test**。有两种测试方式：

*   选择 **Log in to Foundry** 自行测试集成。
*   使用剪贴板复制登录 URL 并发送给其他人。他们尝试登录后，你可以在摘要视图中看到结果。

![Image 7: 创建测试](https://www.palantir.com/docs/resources/foundry/authentication/authentication-create-test.png)![Image 8: 测试登录](https://www.palantir.com/docs/resources/foundry/authentication/authentication-test-login-in.png)

你（或你发送 URL 的人）登录后，可以看到测试结果。测试结果会显示登录是否成功，并捕获从提供商收到的用户属性快照。

你可以在 **Attribute Preview** 标签页中打开测试来预览这些属性在 Foundry 中的映射方式。当你修改属性映射配置时，结果会在面板中实时更新。

![Image 9: 登录测试](https://www.palantir.com/docs/resources/foundry/authentication/authentication-login-tests.png)![Image 10: 属性预览](https://www.palantir.com/docs/resources/foundry/authentication/authentication-attribute-preview.png)

测试结果会在一个月后自动删除。

[← PREVIOUS Group assignment](https://www.palantir.com/docs/foundry/authentication/group-assignment/)

[NEXT Host settings →](https://www.palantir.com/docs/foundry/authentication/host-settings/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
