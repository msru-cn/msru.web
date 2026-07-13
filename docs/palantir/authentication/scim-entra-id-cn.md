Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/scim-entra-id/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/#provisioning-with-microsoft-entra-id)使用 Microsoft Entra ID 进行配置

本节包含针对 Entra ID（原 Azure AD）配置 SCIM 的专属步骤。

此步骤需要与你的 Entra 管理员协调。此外，如果你的 SSO 使用 [SAML](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/#saml)，步骤与 [OIDC](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/#oidc) 略有不同。

[Palantir Foundry 画廊应用 ↗](https://learn.microsoft.com/en-us/entra/identity/saas-apps/palantir-foundry-tutorial) 尚不支持 SCIM 配置。如果你正在使用画廊应用通过 Entra ID 执行单点登录，你需要创建并使用一个新的企业应用来启用 SCIM。

## [](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/#configuration-steps)配置步骤

### [](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/#saml)SAML

#### [](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/#1-turn-on-scim-provisioning)1. 开启 SCIM 配置

进入 **[企业应用]**>**Provisioning**>**Admin Credentials**。

1.   使用 **OAuth2 Client Credentials Grant** 认证方式。

2.   Tenant URL：使用步骤 4 生成的 SCIM URL，并在末尾添加功能标志 `?aadOptscim062020`（例如 `https://<DOMAIN>/multipass/api/scim/<REALM>/v2/?aadOptscim062020`）。

你必须在生成 SCIM 凭证时返回的 SCIM URL 末尾添加功能标志参数。这是一个 Entra 功能标志，IdP 必须使用它才能使用 SCIM 2.0 协议。
3.   Client ID 和 secret：在[步骤 4：生成 SCIM 凭证](https://www.palantir.com/docs/foundry/authentication/scim-enable/#4-generate-scim-credentials)中生成。

![Image 3: 配置 SCIM 客户端凭证的 Entra ID 界面。](https://www.palantir.com/docs/resources/foundry/authentication/scim-entra-provisioning-credentials.png)

#### [](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/#2-configure-attribute-mapping)2. 配置属性映射

进入 **[企业应用]**>**Provisioning**>**Attribute mapping**。

**用户**

确保映射包含每个属性的正确属性值。在 Entra 配置设置的 `externalId` 字段中，发送与 SSO 声明中映射到 Control Panel 的 **Provider ID** 字段的值相同的值。默认是 `NameID`，但 Palantir 建议将此值改为稳定且唯一的标识符。

如果 `externalId` 与 Control Panel 中映射到 `Provider ID` 的值不匹配，SCIM 配置和登录可能会失败。

*   Foundry 仅同步 `userName`、`externalId`、`active`、`displayName`、`emails` 和 `name`（given 和 family）。你可以映射其他属性，但 Foundry 在用户下次登录前不会同步它们。
*   将用户的唯一标识符设为 `externalId`，其次为 `userName`。Entra ID 称之为"匹配优先级"：
    *   将 `externalId` 的匹配优先级设为 1。
    *   将回退标识符（或次级匹配优先级）设为 `userName`。

**群组**

群组的 `displayName` 和 `externalId` 属性都必须映射到当前用于在 Foundry 中持久化群组的值（群组的 `displayName` 或 `id`）。如果这些属性不匹配且群组名称发生变更，该群组的成员可能会被阻止登录。

要确认发送到 Foundry 的字段，进入 **[企业应用]**>**Single Sign On**>**2. Attributes and Claims**>**Edit**>`http://schemas.microsoft.com/ws/2008/06/identity/claims/groups`>**Source Attribute**。此处发送的值必须与 `externalId` 和 `displayName` 中发送的值匹配。

![Image 4: 配置 SCIM 群组配置属性映射的 Entra ID 界面。](https://www.palantir.com/docs/resources/foundry/authentication/scim-entra-group-attribute-mapping.png)

#### [](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/#3-toggle-provisioning-status-to-on)3. 将配置状态切换为 `On`

1.   这会启动初始同步，确保分配给此应用的每个用户和群组都存在于 Foundry 中，且所有群组成员关系已更新。Foundry 还会为 Control Panel 中配置的所有规则执行[组织分配](https://www.palantir.com/docs/foundry/authentication/org-assignment/)、[用户信息采集评估](https://www.palantir.com/docs/foundry/authentication/intake-forms/)和[基于规则的群组评估](https://www.palantir.com/docs/foundry/authentication/group-assignment/)。不会运行异步用户管理器。所有这些信息也会在用户下次登录时刷新。

如果你的组织分配规则使用 _外部管理的群组_ 来将用户分配到组织，这些规则在 SCIM 初次配置用户时（无论是初始同步还是后续的创建请求）不会执行。用户需要手动登录 Foundry，或者 SCIM 需要发送 `updateUser` 请求，这些规则才会执行并将用户正确分配。这是因为 SCIM 创建用户时不会立即更新群组成员关系，所以 Foundry 无法基于 IdP 群组进行组织分配。

同样，当 SCIM 更新外部管理群组的成员关系时，组织分配规则不会对那些成员关系被更新的用户执行。换句话说，对于依赖外部管理群组成员关系才能运行的组织分配规则，用户需要手动登录 Foundry 或有其他用户更新（例如用户名变更）触发 SCIM `updateUser` 请求。
2.   初始同步完成后，更新会以固定间隔批量发送——通常每 20 到 40 分钟一次。

### [](https://www.palantir.com/docs/foundry/authentication/scim-entra-id/#oidc)OIDC

如果你使用 Entra ID 的 OIDC 认证方式并想启用 SCIM，请联系 Palantir Support。

[← PREVIOUS Enabling SCIM on a Foundry authentication provider](https://www.palantir.com/docs/foundry/authentication/scim-enable/)

[NEXT Using other identity providers →](https://www.palantir.com/docs/foundry/authentication/scim-other-idp/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
