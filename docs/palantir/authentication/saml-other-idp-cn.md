Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/saml-other-idp/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/saml-other-idp/#configure-saml-20-integration-for-other-identity-providers)为其他 IdP 配置 SAML 2.0 集成

本节包含配置 SAML 2.0 集成的通用步骤，属于[端到端 SAML 2.0 认证教程](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/)的一部分。

如果你收到了 Foundry 设置链接来配置初始 SAML 集成，直接跳到下一步。否则，可以在 Control Panel 的 **Authentication** 标签页中的 **SAML** 部分选择 **Manage** 来添加新的 SAML 提供商。

![Image 4: SAML](https://www.palantir.com/docs/resources/foundry/authentication/authentication-saml-azure.png)

此页面的第一个区块以不同形式展示 Foundry 的元数据：XML 元数据文件、独立的 entity ID、ACS URL 等。进入你的 IdP，使用这些元数据创建 SAML 集成。具体步骤因 IdP 而异。

![Image 5: SAML 集成元数据](https://www.palantir.com/docs/resources/foundry/authentication/authentication-integration-metadata.png)

获取 IdP 的元数据 XML 文件，然后在 Foundry 的 **Identity provider metadata** 区块中上传。

![Image 6: IdP 元数据](https://www.palantir.com/docs/resources/foundry/authentication/authentication-idp-metadata.png)

在 **Email domains** 下添加与此 SAML 2.0 集成关联的邮箱域名。

然后填写 **Attribute mapping** 区块。该区块决定 IdP 中的哪些属性用于 Foundry 的用户属性：**Username**、**Email**、**First Name** 等。你还可以配置 Foundry 根据 IdP 属性创建群组。你可能需要额外配置提供商，使其在 SAML 响应中包含群组属性。这些信息可以从你的 IdP 获取。

如果不确定，可以先填入 `dummy` 作为临时值，等到测试阶段再修正。

最后保存 SAML 2.0 集成，[继续配置 MFA 多因素认证](https://www.palantir.com/docs/foundry/authentication/multi-factor-auth/)。

[← PREVIOUS Okta](https://www.palantir.com/docs/foundry/authentication/saml-okta/)

[NEXT SAML provider updates in Control Panel →](https://www.palantir.com/docs/foundry/authentication/saml-provider-update/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored. Further information is available in our [Cookie Policy](https://www.palantir.com/cookie-statement/)

Accept Cookies Reject All

Do Not Sell or Share My Personal Information

![Image 7: Palantir Logo](https://cdn.cookielaw.org/logos/356f77a2-eb53-4146-ba66-df614f266841/018ec371-84cc-7226-bc6b-40b41ec0280c/1204dd5e-843b-4e03-8e5d-3eaeae33575c/Palantir_Logo_300dpi.png)

## Do Not Sell or Share My Personal Data

Opt-Out Request Honored

## Do Not Sell or Share My Personal Data

*   ### Your Privacy
*   ### Strictly Necessary Cookies
*   ### Targeting Cookies

#### Your Privacy

When you visit our website, we store cookies on your browser to collect information. The information collected might relate to you, your preferences or your device, and is mostly used to make the site work as you expect it to and to provide a more personalized web experience. However, you can choose not to allow certain types of cookies, which may impact your experience of the site and the services we are able to offer. Click on the different category headings to find out more and change our default settings according to your preference. You cannot opt-out of our First Party Strictly Necessary Cookies as they are deployed in order to ensure the proper functioning of our website (such as prompting the cookie banner and remembering your settings, to log into your account, to redirect you when you log out, etc.). For more information about the First and Third Party Cookies used please follow this link.

[More information](https://www.palantir.com/cookie-statement/)

#### Strictly Necessary Cookies

Always Active

These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.

Cookies Details

#### Targeting Cookies

- [x] Targeting Cookies

Under US privacy laws, you have the right to opt-out of the sale or sharing of your personal information to third parties. These cookies collect information for analytics and to personalize your experience with targeted ads. You may exercise your right to opt out of the sale or sharing of personal information by using this toggle switch. If you opt out we will not be able to offer you personalized ads and will not hand over your personal information to any third parties. Additionally, you may contact our legal department for further clarification about your rights as a California consumer by using this Exercise My Rights link.If you have enabled privacy controls on your browser (such as a plugin), we have to take that as a valid request to opt-out. Therefore we would not be able to track your activity through the web. This may affect our ability to personalize ads according to your preferences.

*   ##### Performance Cookies

- [x] Switch Label label
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.

*   ##### Targeting Cookies

- [x] Switch Label label
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.

Cookies Details

### Cookie List

Consent Leg.Interest

- [x] checkbox label label

- [x] checkbox label label

- [x] checkbox label label

Clear
*   - [x] checkbox label label

Apply Cancel

Confirm My Choices

Reject All Allow All
