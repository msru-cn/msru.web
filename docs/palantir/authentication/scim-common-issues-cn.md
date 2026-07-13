Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/scim-common-issues/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/scim-common-issues/#common-questions-and-issues)常见问题和疑难

**组织分配规则是否对通过 SCIM 创建的用户生效？**

如果你的组织分配规则使用 _外部管理的群组_ 来将用户分配到组织，这些规则在 SCIM 初次配置用户时（无论是初始同步还是后续的创建请求）不会执行。用户需要手动登录 Foundry，或者 SCIM 需要发送 `updateUser` 请求，这些规则才会执行并将用户正确分配。这是因为 SCIM 创建用户时不会立即更新群组成员关系，所以 Foundry 无法基于 IdP 群组进行组织分配。

同样，当 SCIM 更新外部管理群组的成员关系时，组织分配规则不会对那些成员关系被更新的用户执行。换句话说，对于依赖外部管理群组成员关系才能运行的组织分配规则，用户需要手动登录 Foundry 或有其他用户更新（例如用户名变更）触发 SCIM `updateUser` 请求。

**支持嵌套群组吗？**

不要尝试同步嵌套群组，因为 Entra ID 不允许通过 SCIM 配置嵌套群组（参见相关[文档 ↗](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/how-provisioning-works#assignment-based-scoping)）。这是为了与交互式登录中发送的声明保持一致，其中群组成员关系是被展平的。

**SCIM 请求有审计日志吗？**

Foundry 在请求失败时有错误日志，但审计成功 SCIM 事件的最佳方式是查看 IdP 中的配置日志。

**Foundry 是否支持 SCIM 请求的 bearer 认证方式？**

默认不支持。OAuth2 Client Credentials 授权方式相比 bearer 认证有显著的安全改进，是 SCIM 要求的认证方式，除非在特殊情况下。如果需要使用 bearer 认证，请联系 Palantir Support。

**在 Entra ID 中测试连接时出现 `SystemForCrossDomainIdentityManagementCredentialValidationUnavailable` 错误（错误信息为 `An error occurred while sending the request`），怎么办？**

你可能需要设置 Azure Front Door Proxy。Entra 的 SCIM 配置代理使用一组特定的出口 IP 和路由，有时无法建立到某些端点的 TCP/TLS 连接。请联系 Palantir Support 获取更多信息。

**SCIM 配置开始后，收到错误信息 `Cannot complete login for your user with username [username] and provider user ID [provider user ID] because that username is already being used by the user with user ID [existing user ID] and provider user ID [existing provider user ID].`，如何解决？**

这很可能是因为 SCIM 配置设置中映射到 `externalId` 的值与 Control Panel 属性映射中映射到 `Provider ID` 的值不一致。这两个值必须发送相同的值。在 IdP 中更新 `externalId` 发送的值并等待额外的 SCIM 同步应该可以解决问题。

如果遇到其他问题，请联系 Palantir Support。

[← PREVIOUS Using other identity providers](https://www.palantir.com/docs/foundry/authentication/scim-other-idp/)

[NEXT Multi-factor authentication →](https://www.palantir.com/docs/foundry/authentication/multi-factor-auth/)

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
