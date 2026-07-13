Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/scim-enable/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/scim-enable/#enabling-scim-on-a-foundry-authentication-provider)在 Foundry 认证提供商上启用 SCIM

以下是在 Foundry 中为认证提供商启用 SCIM 的步骤。注意这些步骤只是一半——SCIM 要完全配置好，需要在 Foundry 和 IdP 中都启用。参见下文关于为 [Microsoft Entra ID](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/) 启用 SCIM 的指导。

要在 Foundry 中更新认证提供商，你必须具有 `Authentication administrator` 或 `Enrollment administrator` 角色。

## [](https://www.palantir.com/docs/foundry/authentication/scim-enable/#1-determine-if-you-need-a-scim-subdomain)1. 确定是否需要 SCIM 子域名

Control Panel 支持为你的注册主机域名创建一个专用于 SCIM 的子域名。如果你预计 IdP 会从不在注册主机域名入口策略中的 IP 地址发送 SCIM 请求，这一步是必要的。

例如，如果你的注册环境允许从 `34.216.227.26/32` 入站，但你预计 SCIM 请求会来自此 CIDR 块之外的 IP，且不想向这些新 IP 开放顶级域名，那就应该创建 SCIM 子域名。

## [](https://www.palantir.com/docs/foundry/authentication/scim-enable/#2-enable-scim-on-the-authentication-provider)2. 在认证提供商上启用 SCIM

要在认证提供商上启用 SCIM，需要创建一个使用 OAuth 2.0 client credentials 授权的第三方应用（TPA），为 IdP 提供凭证。

**创建 TPA 的步骤：**

1.   进入 **Control Panel**>**Authentication**>**[提供商名称]**>**Manage**>**Enable SCIM**。开启开关启用 SCIM。

![Image 6: Enable SCIM 卡片设为启用状态的图片，带有继续设置 SCIM 的按钮。](https://www.palantir.com/docs/resources/foundry/authentication/scim-set-up-domain.png?width=600)
1.   选择 **Set up SCIM domain**，选择你想要的域名，然后根据[步骤 1](https://www.palantir.com/docs/foundry/authentication/scim-enable/#1-determine-if-you-need-a-scim-subdomain) 的决定选择 **Use a SCIM subdomain** 或 **Use this domain**。

![Image 7: 确定使用 SCIM 子域名还是注册主机域名的对话框。](https://www.palantir.com/docs/resources/foundry/authentication/scim-choose-domain.png?width=600)
1.   保存更改。

## [](https://www.palantir.com/docs/foundry/authentication/scim-enable/#3-configure-network-ingress)3. 配置网络入站

无论你使用 SCIM 子域名还是将 SCIM 请求路由到顶级域名，都应该检查 IdP 用于发送 SCIM 请求的 CIDR 范围和地区。你需要确保这些 CIDR 范围和地区在 Control Panel 的 **Network ingress** 扩展中被允许。将 CIDR 或地区添加到网络入站白名单中，SCIM 域名就能接收传入请求。

参见[配置注册环境的网络入站](https://www.palantir.com/docs/foundry/administration/configure-ingress/)了解更多说明。你可以通过两种方式进入 **Network ingress** 扩展：

1.   选择 **Actions**>**View ingress**。
2.   搜索扩展名（macOS 按 `Cmd+J`，Windows 按 `Ctrl+J`）。

如果看到警告 `There is a denied IP address range in this change request. Remove it before invoking the request`，请联系 Palantir Support。

![Image 8: 表示请求的 IP 地址被拒绝的错误信息。](https://www.palantir.com/docs/resources/foundry/authentication/scim-ip-address-denied-by-palantir-security.png?width=600)

## [](https://www.palantir.com/docs/foundry/authentication/scim-enable/#4-generate-scim-credentials)4. 生成 SCIM 凭证

1.   回到 **Authentication**>**[提供商名称]**>**Manage**。

2.   选择 **Generate SCIM credentials**，选择第三方应用客户端将被创建的组织。**注意，你选择的组织决定了哪些用户有权限管理 SCIM 客户端并在需要时轮换密钥。** 如果用户没有权限编辑所选组织中的第三方应用，他们只能创建新的 SCIM 客户端，而不是轮换原客户端的密钥。创建新客户端会使原客户端的凭证失效。

![Image 9: 为 OAuth2 client credential 授权生成 SCIM 凭证的界面。](https://www.palantir.com/docs/resources/foundry/authentication/scim-generate-credentials.png?width=600)
1.   现在你有了 SCIM URL、Client ID、Token endpoint 和 Client secret。用这些信息在 IdP 端配置 SCIM。

提供的 token endpoint 应使用与步骤 2.2 相同的域名——如果使用 SCIM 子域名，token endpoint 格式为 `https://scim.{domain}/multipass/api/oauth2/token`。如果使用顶级域名，token endpoint 格式为 `https://{domain}/multipass/api/oauth2/token`。

![Image 10: SCIM 客户端凭证创建完成后显示的对话框。](https://www.palantir.com/docs/resources/foundry/authentication/scim-configure-client.png?width=600)

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/authentication/scim-overview/)

[NEXT Provisioning with Microsoft Entra ID →](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
