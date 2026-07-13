Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/scim-other-idp/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/authentication/scim-other-idp/#using-other-identity-providers)使用其他 IdP

Foundry 实现了标准的 SCIM 2.0 协议，因此不限于这里记录的 IdP。任何支持 SCIM 2.0 的 IdP 都可以配置为向 Foundry 配置用户和群组。

本文档提供了 Microsoft Entra ID 的详细步骤，因为它是常用的提供商，且其设置流程具有代表性。如果你使用其他提供商，可以遵循同样的通用方法：确定是否应使用子域名、配置入站、将提供商的 SCIM 客户端指向 Foundry SCIM 端点、使用 OAuth 2.0 client credentials 授权进行认证，以及将提供商的用户和群组属性映射到与 Control Panel 属性映射匹配的 Foundry 期望属性。

需要注意的是，虽然 SCIM 2.0 提供了标准协议，但各提供商的实现和暴露方式存在差异。具体术语、配置界面、支持的属性和可用的配置选项因提供商而异，部分提供商可能不支持规范的每个部分。因此，你的提供商的具体步骤可能与这里记录的有所不同，你可能需要查阅提供商的 SCIM 文档来完成设置。

[← PREVIOUS Provisioning with Microsoft Entra ID](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/)

[NEXT Common questions and issues →](https://www.palantir.com/docs/foundry/authentication/scim-common-issues/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored. Further information is available in our [Cookie Policy](https://www.palantir.com/cookie-statement/)

Accept Cookies Reject All

Do Not Sell or Share My Personal Information

![Image 1: Palantir Logo](https://cdn.cookielaw.org/logos/356f77a2-eb53-4146-ba66-df614f266841/018ec371-84cc-7226-bc6b-40b41ec0280c/1204dd5e-843b-4e03-8e5d-3eaeae33575c/Palantir_Logo_300dpi.png)

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
