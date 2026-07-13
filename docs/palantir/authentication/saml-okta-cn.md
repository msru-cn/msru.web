Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/saml-okta/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/saml-okta/#configure-saml-20-integration-for-okta)为 Okta 配置 SAML 2.0 集成

本节包含针对 Okta 配置 SAML 2.0 集成的专属步骤，属于[端到端 SAML 2.0 认证教程](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/)的一部分。

如果你收到了 Foundry 设置链接来配置初始 SAML 集成，直接跳到下一步。否则，可以在 Control Panel 的 **Authentication** 标签页中的 **SAML** 部分选择 **Manage** 来添加新的 SAML 提供商。

![Image 5: SAML](https://www.palantir.com/docs/resources/foundry/authentication/authentication-saml-okta.png)

在 Okta 中，按照[这些说明 ↗](https://help.okta.com/en/prod/Content/Topics/Apps/Apps_App_Integration_Wizard_SAML.htm)创建 SAML 应用集成。

## [](https://www.palantir.com/docs/foundry/authentication/saml-okta/#saml-integration-metadata)SAML 集成元数据

从 Foundry Control Panel 复制以下内容（如左图所示），在 Okta 的 **Edit SAML Integration** 页面中使用（如右图所示）：

| Foundry | Okta |
| --- | --- |
| Assertion consumer service (ACS) URL | Single sign on URL |
| Entity ID | Audience URI (SP Entity ID) |

![Image 6: SAML 集成元数据](https://www.palantir.com/docs/resources/foundry/authentication/authentication-okta-saml-integration-metadata.png)

## [](https://www.palantir.com/docs/foundry/authentication/saml-okta/#attribute-mapping)属性映射

Okta 没有定义除 `NameID` 以外可以直接使用的标准 SAML 属性。属性需要先在 Okta 中定义，然后才能在 Foundry 中映射。

在 Okta 中声明以下属性语句：

| Name | Name format | Value |
| --- | --- | --- |
| firstName | Basic | user.firstName |
| lastName | Basic | user.lastName |
| email | Basic | user.email |

你可以在 **Attribute mapping** 中定义以下用户属性映射。如果使用了 Foundry 设置链接，Okta 属性映射会被预填。

*   **ID：**`NameID`
*   **Username：**`NameID`（也可以用 `email`）
*   **Email：**`email`
*   **First name：**`firstName`
*   **Last name：**`lastName`

你还可以定义属性映射，在 Foundry 中镜像你现有的 Okta 群组。在 Okta 中定义一个或多个群组属性语句，然后在 **Group attribute mapping** 中映射。

![Image 7: 属性映射](https://www.palantir.com/docs/resources/foundry/authentication/authentication-okta-attribute-mapping.png)

## [](https://www.palantir.com/docs/foundry/authentication/saml-okta/#identity-provider-metadata)IdP 元数据

在 Okta 中完成 SAML 应用集成的创建，然后进入 **Sign on** 标签页，在 **Identity provider metadata** 下获取 IdP 元数据 XML 文件。将其上传到 Foundry 的 **Identity provider metadata** 部分。

![Image 8: IdP 元数据](https://www.palantir.com/docs/resources/foundry/authentication/authentication-okta-idp-metadata.png)

## [](https://www.palantir.com/docs/foundry/authentication/saml-okta/#finish-and-save)完成并保存

在 Foundry 中，在 **Email domains** 下添加与此 SAML 2.0 集成关联的邮箱域名。

最后保存 SAML 2.0 集成，[继续配置 MFA 多因素认证](https://www.palantir.com/docs/foundry/authentication/multi-factor-auth/)。

[← PREVIOUS Entra ID (Azure AD)](https://www.palantir.com/docs/foundry/authentication/saml-azure-ad/)

[NEXT Other identity providers →](https://www.palantir.com/docs/foundry/authentication/saml-other-idp/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
