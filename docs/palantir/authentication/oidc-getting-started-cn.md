Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/oidc-getting-started/

Markdown Content:
## 快速上手

[OpenID Connect 1.0 (OIDC) ↗](https://openid.net/connect/) 协议是构建在 OAuth 2.0 之上的简单身份层。它允许 Foundry 等客户端验证终端用户的身份并获取基本的用户资料信息。

部分 OIDC 提供商是公开可用的，任何人都可以创建账号。公开提供商的配置不当可能会导致不受欢迎的用户访问你的注册环境，请谨慎操作。

## 网络出口

OIDC 认证和元数据收集需要出站调用。你可以选择出口策略或[配置网络出口策略](https://www.palantir.com/docs/foundry/administration/configure-egress/)。

## OIDC 概念

以下部分介绍 Foundry 中常见的 OIDC 认证概念。

### 重定向 URL

重定向 URL 需要在 OIDC 提供商处注册。它允许提供商将授权请求的结果回传给 Foundry。提供商在发送给终端用户的授权请求中包含重定向 URL，终端用户在授权过程中会被重定向到该 URL。Foundry 随后处理来自提供商的响应。

### 登出 URL

Foundry 提供前向通道和后向通道的 URL。注册哪个登出 URL 到 OIDC 提供商取决于期望的登出行为。

### OIDC 集成元数据

OIDC 集成元数据是传递给 Foundry 的 IdP 信息。如果提供了元数据发现 URI，Foundry 可以自动获取所需的元数据字段。

你也可以手动提供所需的元数据，包括：

*   **Issuer：**OIDC 提供商的 URL，标识提供商及其位置。Foundry 使用此 URL 定位 OIDC 发现文档，该文档可以指定提供商的 OIDC 端点、声明、支持的 scope 和公钥等。
*   **Authorization endpoint：**提供商的授权端点，用于重定向终端用户以获取授权码。
*   **Token endpoint：**提供商的令牌端点，用于将授权码换取访问令牌和 ID 令牌。
*   **JWKS URI：**提供商的 JSON Web Key Set (JWKS) 文档 URL，包含用于验证 ID 令牌签名的公钥。
*   **User info endpoint**（如适用）：提供商的用户信息端点，用于获取终端用户的资料信息。并非所有提供商都支持此端点，部分支持的提供商可能要求使用。
*   **End session endpoint**（可选）：提供商的会话结束端点，用于将终端用户从提供商的会话中登出。此端点是可选的，可能不被所有提供商支持。

### 客户端凭证

客户端凭证指 OIDC 提供商向 Foundry 签发的客户端 ID 和客户端密钥。Foundry 使用这些凭证向提供商认证并获取终端用户资源的访问权限。

获取凭证的方式因提供商而异，请查阅提供商的文档。

### 认证方式

选择 Foundry 如何向令牌端点发起认证请求。选项包括：

*   HTTP basic 认证方案。
*   POST：将凭证作为表单值包含在请求中。

### Scope

OIDC scope 决定 ID 令牌和用户信息响应中包含哪些信息。每个 scope 返回一组用户属性（即声明）。

必须包含 `openid`、`email` 和 `profile` scope。

### 邮箱域名

邮箱域名与已配置的认证提供商关联。这些域名限制谁能使用该提供商登录，并决定用户登录时是否展示该提供商作为选项。

### 支持的主机

支持的主机用于确保集成仅展示给使用这些主机登录的用户。

你可以从注册环境中配置的主机中选择。

### 属性映射

将 IdP 中定义的属性映射到 Foundry 中的表示。

#### 用户属性

用户属性也叫"声明"（claims），包括姓名、邮箱和其他可用的附加信息。这些属性以属性键到值或值列表的映射形式发送，例如 `email → user@example.com`。

要让 Foundry 获取正确的用户属性值，你必须将 IdP 属性（也叫"声明"）映射到对应的 Foundry 属性。Foundry 要求以下映射：

*   **ID：**默认设为 `sub`。该值应始终存在于 OIDC 断言中，且具有静态唯一值。
*   **Username：**默认设为 `preferred_username`。你可以改为其他可读的属性。
*   **Email：**默认设为 `email`。应映射到邮箱属性。
*   **First name：**默认设为 `given_name`。应映射到名字属性。
*   **Last name：**默认设为 `family_name`。应映射到姓氏属性。

你可以通过选择 **Add attribute mapping** 创建额外的映射，在 Foundry 中设置更多用户属性。左侧字段输入 Foundry 中的属性名，右侧字段输入 JSON Web Token (JWT) 中声明的路径。

高级用法支持 JSONPath 语法来指定提供商返回的 JWT 中声明的路径。默认情况下，声明值会以单个字符串提取。在路径末尾追加 `[*]` 可以逐个提取值。例如：`groups` 可能提取 `"[group1, group2]"`，而 `groups[*]` 会提取 `["group1", "group2"]`。

每个映射在 Foundry 中有一个切换选项，用于选择当属性在 OIDC 响应中有多个值时的行为：

*   **First：**使用收到的第一个值填充属性。
*   **All：**使用收到的所有值填充属性。

你可以通过选择 **Import user groups from the identity provider** 选项并提供 JWT 中对应群组的声明路径来导入群组。

### 高级设置

#### 提示（可选）

prompt 参数用于请求在认证过程中提示用户执行特定操作。可能的值包括：

*   `none`：认证不需要进一步的用户输入。
*   `login`：提示用户输入凭证以完成认证。
*   `consent`：提示用户授予同意以完成认证。
*   `select_account`：提示用户选择要用于认证的账号。通常在用户在同一提供商有多个账号时使用。

你可以选择多个 prompt。未选择任何 prompt 时的默认行为取决于提供商。

#### 异步用户管理器

异步用户管理器（AUM）是登录流程中可配置的额外步骤。展开 **Asynchronous user managers** 查看可用的 AUM。

#### Checkpoints Login

创建[登录检查点](https://www.palantir.com/docs/foundry/checkpoints/overview/)会在用户登录时将其重定向到一个可配置的提示页面，要求提供理由后才允许登录继续。要启用登录检查点，先开启 **Checkpoints Login AUM** 开关，然后按步骤[创建检查点](https://www.palantir.com/docs/foundry/security/requesting-justification-for-sensitive-actions/)。
