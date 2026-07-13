Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/saml-getting-started/

Markdown Content:
## 快速上手

[SAML 2.0 (Security Assertion Markup Language) ↗](https://en.wikipedia.org/wiki/SAML_2.0) 是一种基于 XML 的数据格式，用于在 _service provider_（简称 _SP_，如 Foundry）和 _IdP_（如 Azure AD 或 Okta）之间交换认证和授权数据。SAML 2.0 最常见的使用场景是浏览器中的 _Single Sign-On_（_SSO_）。

## 概念

以下讨论 Foundry 中常见的认证概念。

### SAML 集成元数据

SAML 集成元数据也叫 service provider 元数据，是需要传递给 IdP 的 Foundry 信息。包括：

*   **Entity ID：**标识 Foundry 的唯一 ID，使用 [URN ↗](https://en.wikipedia.org/wiki/Uniform_Resource_Name) 格式 `urn:uuid:[$UUID]`。
*   **Assertion Consumer Service (ACS) URL：**Foundry 端点，接受 SAML 响应消息以基于断言建立会话。
*   **Single Logout URL：**Foundry 端点，接受来自 IdP 的 SAML 单点登出请求。
*   **Certificate：**用于签名发送给 IdP 的 SAML 消息。

这些信息编码为自动生成的 XML 文件，可以整体复制后由客户上传到 IdP。此外，Control Panel 会将信息拆分为独立字段，可以逐个复制。

### IdP 元数据

IdP 元数据是需要传递给 Foundry 的 IdP 信息，包括 IdP 的 entity ID、单点登录 (SSO) 和单点登出 URL，以及证书。

IdP 元数据编码为 XML 文件，可以通过以下方式上传到 Control Panel：

*   `Upload`：从 IdP 保存 XML 文件后上传到 Control Panel。
*   `Fetch`：提供元数据发现 URI，Foundry 可以从中获取 IdP 信息，包括 entity ID、SSO、SLO URL 和证书。你还需要配置网络出口策略，使 Foundry 能够访问所提供的元数据发现 URI。

SAML 证书有过期日期，过期后用户可能会遇到登录问题。当与 IdP 关联的证书将在 30 天内过期时，Control Panel 会显示[警告横幅](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/#there-are-x-providers-with-certificates-expiring-within-30-days)。

### 邮箱域名

邮箱域名用于决定哪些 IdP 集成作为登录选项展示给用户。当用户在登录页面输入邮箱或用户名时，系统会测试所有已配置的 IdP 集成的邮箱域名，只展示匹配的集成。

邮箱域名可以是正则表达式，不过通常使用简单形式 `@example.com`，会自动转换为 `.*@example\.com`。如果 IdP 集成需要对所有用户展示，使用 `.*`。

![Image 1: "允许的邮箱域名"窗口，可定义与认证提供商关联的邮箱域名。选择了"限制邮箱域名"选项，已添加多个简单形式和正则表达式形式的示例域名。](https://www.palantir.com/docs/resources/foundry/authentication/authentication-saml-email-domains.png)

注意，简单形式（`@example.com`）和正则表达式（`.*@example\.com`）的邮箱域名默认区分大小写。可以在正则表达式开头添加 `(?i)` 使其不区分大小写，所以不区分大小写的 `@example.com` 写法是 `(?i).*@example\.com` 或 `(?i)@example\.com`。

### 支持的主机

支持的主机用于：

*   构造 SAML 集成元数据中的 ACS 和 Single Logout URL。
*   确保集成仅展示给使用这些主机登录的用户。

你可以从注册环境中配置的主机中选择。

### 属性映射

将 SAML 响应映射到 Foundry，确保传递了充分且正确的用户属性。

#### 用户属性

用户在 SAML 登录过程中通过 IdP 认证后，会向 Foundry 发送 SAML 响应。该响应包含用户属性（也叫"声明"），如姓名、邮箱和其他可用的附加信息。这些属性以属性键到值（如 `email` → `user@example.com`）或值列表的映射形式发送。

要让 Foundry 获取正确的用户属性值，你必须将 IdP 属性（或"声明"）映射到对应的 Foundry 属性。Foundry 要求以下映射：

*   ID：默认设为 `NameID`。该值应始终存在于 SAML 断言中，且具有静态唯一值。
*   Username：默认设为 `NameID`，但可改为其他可读属性（例如 Azure AD 的 `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`）。
*   Email：应映射到邮箱属性（例如 Azure AD 的 `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`）。
*   First name：应映射到名字属性（例如 Azure AD 的 `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname`）。
*   Last name：应映射到姓氏属性（例如 Azure AD 的 `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname`）。

查看 [Azure AD](https://www.palantir.com/docs/foundry/authentication/saml-azure-ad/#attribute-mapping) 和 [Okta](https://www.palantir.com/docs/foundry/authentication/saml-okta/#attribute-mapping) 的参考映射。

点击 **Add attribute mapping** 可以设置额外的映射，在 Foundry 中创建更多用户属性。左侧字段输入 Foundry 中的属性名，右侧字段输入 IdP 中的属性名。

每个映射都有一个切换选项，用于选择当属性在 SAML 响应中有多个值时的行为。可以设为 **First**（使用收到的第一个值填充属性）或 **All**（使用收到的所有值填充属性）。

#### 提供商群组

你还可以配置 Foundry 根据 IdP 属性创建群组（称为"提供商群组"），在 Foundry 中镜像你现有的群组成员关系。你可能需要额外配置提供商，使其在 SAML 响应中包含群组属性。

要设置提供商群组映射，在 **Group attribute mapping** 下点击 **Add attribute mapping**。用户登录时，已配置属性的每个值都会被镜像为提供商群组，用户会被添加为成员。

可选地，你可以设置正则表达式模式来提取群组，适用于群组以单个值而非列表形式发送的情况。例如，用 `[^,]+` 匹配逗号分隔的群组。

### 高级设置

#### 异步用户管理器

异步用户管理器（AUM）是登录流程中可配置的额外步骤。展开 **Asynchronous user managers** 查看可用的 AUM。

##### Checkpoints Login

创建[登录检查点](https://www.palantir.com/docs/foundry/checkpoints/overview/)会在用户登录时将其重定向到一个可配置的提示页面，可以要求提供理由后才允许登录继续。要启用登录检查点，先开启 **Checkpoints Login** AUM 开关，然后按步骤[创建检查点](https://www.palantir.com/docs/foundry/security/requesting-justification-for-sensitive-actions/)。

## 配置 SAML 2.0 集成

要配置新的 SAML 集成，请根据你的 IdP 查看对应步骤：

*   [Azure](https://www.palantir.com/docs/foundry/authentication/saml-azure-ad/)
*   [Okta](https://www.palantir.com/docs/foundry/authentication/saml-okta/)
*   [其他 IdP](https://www.palantir.com/docs/foundry/authentication/saml-other-idp/)

## 故障排查

### "Login failed as a suitable authentication provider could not be located. Please contact your administrator for further assistance." 错误

此错误表示用户输入的用户名与 Control Panel 中配置和白名单中的任何认证提供商[邮箱域名](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/#email-domains)都不匹配。也可能表示用户尝试登录的主机未被添加为其已配置认证提供商的[支持主机](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/#supported-hosts)。

### "There are x providers with certificates expiring within 30 days."

此警告横幅表示 IdP 元数据中的证书将在 30 天内过期。IdP 应切换到新证书以避免认证中断。你可以通过手动上传或自动刷新来解决。

#### 手动上传

1.   在 IdP 中生成新证书。**确保旧证书仍然存在且处于活跃状态。** 这样在将新元数据传递给 Control Panel 之前，登录可以继续正常工作。
2.   通过 `Upload` 方式将新的 XML 文件上传到 Control Panel 中的提供商，确认你能看到提取出的即将过期的证书和新证书。
3.   保存后，IdP 可以切换到使用新证书并移除旧证书。移除即将过期的证书后无需重新上传元数据。

注意，如果你的 IdP 在你将新 XML 文件上传到 Control Panel 之前就开始使用新证书签名，用户会遇到登录问题。

#### 自动刷新

当你配置上述 `Fetch` 方式时，可以选择 **Automatically refresh the identity provider's metadata using the provider metadata URI**。当 IdP 轮换到新证书时，下一次登录尝试最初会失败，促使 Foundry 自动从元数据发现 URI 获取更新后的元数据并重试请求，不会影响用户的登录体验。

注意，如果你的 IdP 在证书轮换期间更改了元数据 URI，自动元数据刷新将不起作用。如果发生这种情况，你必须在现有证书过期前手动更新 Control Panel 中的元数据发现 URI。

部分 IdP 在其元数据中包含 `validUntil` 日期。此日期可能与当前活跃签名证书的过期时间绑定，而非所有已发布证书中最晚的过期时间。因此，即使元数据中已发布新证书，`validUntil` 日期过后元数据本身也会失效，导致登录失败。当 IdP 切换到使用新证书时，`validUntil` 日期通常会更新以反映新证书的过期时间。

启用自动元数据刷新后，Foundry 会在证书切换后获取新元数据（包含更新后的 `validUntil` 日期），无需手动干预即可解决因 `validUntil` 过期导致的登录失败。未启用自动元数据刷新时，你需要在 IdP 切换到新证书后重新将更新后的提供商元数据上传到 Control Panel。
