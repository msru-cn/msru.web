Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/saml-azure-ad/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/saml-azure-ad/#configure-saml-20-integration-for-entra-id-azure-ad)为 Entra ID (Azure AD) 配置 SAML 2.0 集成

本节包含针对 Entra ID（原 Azure AD）配置 SAML 2.0 集成的专属步骤，属于[端到端 SAML 2.0 认证教程](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/)的一部分。

你也可以在 Microsoft 文档中找到[快速入门指南 ↗](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/palantir-foundry-tutorial)。

如果你收到了 Foundry 设置链接来配置初始 SAML 集成，直接跳到下一步。否则，可以在 Control Panel 的 **Authentication** 标签页中的 **SAML** 部分选择 **Manage** 来添加新的 SAML 提供商。

![Image 8: SAML](https://www.palantir.com/docs/resources/foundry/authentication/authentication-saml-azure.png)

在 [Azure Portal ↗](https://portal.azure.com/) 中，选择 **Microsoft Entra ID**，然后 **Enterprise Applications**，再选 **New application**。搜索 **Palantir Foundry** 然后选择 **Create**。

![Image 9: 新建应用](https://www.palantir.com/docs/resources/foundry/authentication/authentication-azure-new-application.png)

创建完成后，选择 **Getting Started** 中的 **2. Set up single sign on**。

![Image 10: 单点登录](https://www.palantir.com/docs/resources/foundry/authentication/authentication-azure-new-application-sso.png)

然后会提示你选择单点登录方式，选择 **SAML**。

![Image 11: SAML](https://www.palantir.com/docs/resources/foundry/authentication/authentication-azure-new-application-saml.png)

## [](https://www.palantir.com/docs/foundry/authentication/saml-azure-ad/#saml-integration-metadata)SAML 集成元数据

在 Foundry 中下载 **SAML integration metadata XML**，使用 **Upload metadata file** 将 XML 上传到 Azure，然后 **Save**。

![Image 12: SAML 集成元数据](https://www.palantir.com/docs/resources/foundry/authentication/authentication-azure-saml-integration-metadata.png)

## [](https://www.palantir.com/docs/foundry/authentication/saml-azure-ad/#attribute-mapping)属性映射

你可以在 **Attribute mapping** 中定义以下用户属性映射。如果使用了 Foundry 设置链接，Azure 属性映射会被预填。

*   **ID：**`NameID`
*   **Username：**`http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
*   **Email：**`http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
*   **First name：**`http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname`
*   **Last name：**`http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname`

![Image 13: 属性映射](https://www.palantir.com/docs/resources/foundry/authentication/authentication-azure-attribute-mapping.png)

如果要配置提供商群组，在 Azure Portal 的 **User Attributes & Claims** 下选择 **Add a group claim**。在 Foundry 中，添加 `http://schemas.microsoft.com/ws/2008/06/identity/claims/groups` 作为 **Group attribute mapping**，不设置 **Group attribute pattern**。

## [](https://www.palantir.com/docs/foundry/authentication/saml-azure-ad/#identity-provider-metadata)IdP 元数据

在 Azure AD 中，通过 **SAML Signing Certificate** 下 **Federation Metadata XML** 旁边的链接下载 IdP 元数据 XML 文件，然后在 Foundry 的 **Identity provider metadata** 区域上传。

![Image 14: IdP 元数据](https://www.palantir.com/docs/resources/foundry/authentication/authentication-azure-idp-metadata.png)

## [](https://www.palantir.com/docs/foundry/authentication/saml-azure-ad/#finishing-and-saving)完成并保存

在 Foundry 中，在 **Email domains** 下添加与此 SAML 2.0 集成关联的邮箱域名。

最后保存 SAML 2.0 集成，然后继续配置 [MFA 多因素认证](https://www.palantir.com/docs/foundry/authentication/multi-factor-auth/)。

[← PREVIOUS Getting started](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/)

[NEXT Okta →](https://www.palantir.com/docs/foundry/authentication/saml-okta/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
