Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-domains-and-certificates/

Markdown Content:
## 配置域名和证书

截至 2026 年 2 月，此功能仅适用于新的客户管理域名。此前在 Palantir 支持下配置的任何现有域名可能仍需要 Palantir 支持。

拥有编辑自定义域名和证书权限的用户可以在 [Control Panel](https://www.palantir.com/docs/foundry/administration/overview/) 的 **Enrollment settings** 下访问 **Domains & certificates** 标签页，创建、编辑和删除自定义域名以及续期证书。`Enrollment administrators` 和 `Information Security Officers` 默认拥有这些权限。

Control Panel 中的自定义域名和证书配置是一项新功能，由于合规性原因和正在进行的迁移，可能在某些 enrollment 上不可用。如果你的 enrollment 尚未提供此功能，请联系你的 Palantir 代表获取帮助。

![Image 1: 域名和证书设置。](https://www.palantir.com/docs/resources/foundry/administration/domain_management_extension.png)

## 创建新的自定义域名

按照以下步骤创建自定义域名。第一步是创建新证书。

### 1. 生成证书签名请求（CSR）

*   在证书表中选择 **+ Add** 按钮。
    *   _可选：_ 勾选 **Populate fields from existing certificate** 复选框以从现有证书复制详细信息。

*   提供通用名称（CN）。此外，你可以包含主题备用名称（SAN），可以是常规域名或通配符域名。你还可以指定其他详细信息，如国家（C）、州（ST）、城市（L）、组织（O）和组织单位（OU）。
*   生成 CSR 后，下载 `.pem` CSR 文件。此 CSR 在下一步中用于从证书颁发机构（CA）获取签名证书。

### 2. 签署证书

证书签署应在平台外部完成。这可以通过许多域名提供商或注册的 CA 来完成。为确保兼容性和安全性，签名证书必须满足以下条件：

*   证书不得在 30 天内过期。如果即将过期，请先续期再继续。
*   证书必须使用 PEM 格式编码。PEM 是一种 Base64 编码格式，被广泛使用且兼容大多数系统。
*   `CN` 和 `SAN` 字段必须与生成的 CSR 完全匹配。
*   证书必须使用 SHA256withRSA 签名算法。
*   证书必须被主流浏览器公开信任。如果你希望使用由自定义 CA 签名的证书，请联系 Palantir Support 获取指导。

如果你收到多个签名证书（包括由中间 CA 签名的叶证书和由根 CA 签名的中间证书），将这些证书合并为一个 `.pem` 文件，叶证书在前，中间证书在后。上传到 Control Panel 的证书必须由 Palantir 安全团队批准的根 CA 签名才能被接受。

此过程可能因你选择的域名和签署方式而异。

![Image 2: 下载 CSR、获取签名证书并上传回 Foundry 的平台内步骤。](https://www.palantir.com/docs/resources/foundry/administration/download-csr.png)

### 3. 上传签名证书

*   如果满足步骤 2 中的条件，将签名证书上传到表单中。
*   表单将对签名证书运行验证检查。如果有问题，会显示错误消息。请参阅[常见错误](https://www.palantir.com/docs/foundry/administration/configure-domains-and-certificates/#common-errors)获取指导。
*   验证成功后，将显示签名证书的 CA 和到期日期作为确认。

### 4. 配置域名

*   上传签名证书后，选择是否要为平台访问创建域名。选择此选项将配置此域名以立即启用平台访问。
*   如果你想稍后再通过此域名启用平台访问（见步骤 6），或者你不打算为此域名配置平台访问（例如你想在此域名上托管 artifact 网站），请选择 **Skip this step**。

![Image 3: 上传签名证书后配置域名的设置](https://www.palantir.com/docs/resources/foundry/administration/configure-domain.png)

### 5. 更新域名服务器（DNS）

*   要启用自定义域名的网络连接，需要在域名注册商平台上更新 DNS 设置。
*   这在 Palantir 平台外部进行，过程取决于域名提供商。
*   Control Panel 将显示使用规范域名创建 CNAME 记录所需的域名信息。

![Image 4: DNS 设置。](https://www.palantir.com/docs/resources/foundry/administration/domain-management_dns.png)

### 6. 使用新证书创建域名

*   在自定义域名表中选择 **+ Add**。
*   输入你要配置的自定义域名。
*   从 **Select certificate** 下拉菜单中选择你刚创建的证书。
*   选择 **Create**。

![Image 5: 使用现有证书创建新自定义域名的对话框](https://www.palantir.com/docs/resources/foundry/administration/domain_management_create_custom_domain.png)

### 常见错误

*   `NotAllowedByPalantirSecurity`：证书颁发机构未被 Palantir 安全团队认可。此错误的常见根因包括：
    *   上传自签名证书或由主流浏览器不认可的 CA 签名的证书。如果需要使用自定义 CA，请联系 Palantir Support 获取帮助。
    *   上传由中间 CA 签名的证书。确保上传完整的证书链，包括所有中间证书。

*   `UntrustedAlgorithm`：证书使用了不受信任的算法签名。
*   `InvalidSignedCertificate`：签名证书无效，或与 CSR 不匹配。
*   `ShortExpiryForCertificate`：证书到期前的时间太短。

## 复制现有域名配置

设置新域名时，你可以选择将现有域名的设置复制到新域名以便于操作。选择此选项后会发生以下自动变更：

*   网络 ingress allowlist 将从现有域名复制到新域名。你可以在 **Network Ingress** 扩展中进一步修改。
*   新域名将被添加到当前使用现有域名的所有组织中。可以在 **Organization management** 部分进一步调整。
*   [可选] 你的新域名可以添加到身份验证提供商中。你可以将其添加到所有 auth providers 或选择特定的。
*   旧域名在新域名设置完成后将继续工作，直到被手动移除。

![Image 6: 从现有域名复制配置。](https://www.palantir.com/docs/resources/foundry/administration/domain_management_copying_domain.png)

按照以下步骤从现有域名迁移：

1.   按照[创建新域名](https://www.palantir.com/docs/foundry/administration/configure-domains-and-certificates/#create-a-new-custom-domain)的步骤操作。
2.   在迁移屏幕上选择 **Yes**。
3.   选择要从中复制设置的现有域名。
4.   决定是否应更新使用旧域名的身份验证提供商，如果是，选择要更新的身份验证提供商。
5.   选择 **Migrate**。
6.   按照说明更新你的身份验证提供商。你的身份提供商需要在源头进行更新，过程取决于身份提供商类型（SAML 或 OIDC）：
    *   **SAML：** 下载每个提供商的元数据（XML 格式）。
    *   **OIDC：** 复制每个提供商的重定向 URL。

7.   身份提供商更新完成后，选择 **Finish setup** 将域名的迁移状态标记为完成。你将被重定向到域名列表，可以看到新域名。

## 续期即将过期的证书

如果证书将在 30 天内过期，Control Panel 顶部将显示横幅通知你。此外，还会向具有 `Enrollment administrator` 角色的用户发送电子邮件。

要续期即将过期的证书，请按以下步骤操作：

1.   导航到证书列表。
2.   选择 **Actions > Renew** 启动证书创建流程，CSR 表单将预填充现有证书详细信息以方便操作。
3.   完成[创建新自定义域名](https://www.palantir.com/docs/foundry/administration/configure-domains-and-certificates/#create-a-new-custom-domain)中的步骤以生成证书签名请求并上传签名证书。
4.   上传完成后，你将被引导到续期页面，可以在其中替换现有证书。选择目标证书并选择 **Renew**。
5.   你将被重定向回域名和证书列表，可以看到续期后的证书。

## 创建新的自定义证书

创建新自定义证书的过程与[创建新自定义域名](https://www.palantir.com/docs/foundry/administration/configure-domains-and-certificates/#create-a-new-custom-domain)类似。如果不存在与新证书通用名称对应的自定义域名，将创建一个新域名，流程将自动切换到新自定义域名的创建。

## 编辑活跃证书

要编辑域名的活跃证书：

1.   导航到域名列表。
2.   进入 **Actions > Edit active certificate** 以切换证书。
3.   选择一个符合条件的证书设置为自定义域名的活跃证书。

![Image 7: 编辑活跃证书](https://www.palantir.com/docs/resources/foundry/administration/domain_management_edit_active_certificate.png)

## 删除域名

要删除域名，导航到 **Actions > Delete**。

在以下任何情况下，域名无法被删除：

*   它正在被一个或多个组织使用
*   它正在被一个或多个身份验证提供商用作支持的宿主
*   它有活跃的子域名或未完成的子域名注册请求

![Image 8: 删除域名。](https://www.palantir.com/docs/resources/foundry/administration/domain_management_delete_domain.png)

## 术语表

*   `CSR` = Certificate Signing Request（证书签名请求）
*   `CA` = Certificate Authority（证书颁发机构）
*   `SAML` = Security Assertion Markup Language（安全断言标记语言）
*   `OIDC` = OpenID Connect
*   `DNS` = Domain Name Server（域名服务器）

## 常见问题

以下部分用于回答常见问题。

### 我可以更改 Palantir 拥有的域名吗？

不可以。你的 enrollment 附带的 Palantir 拥有的域名不可通过自助服务修改。如果你有企业账户并需要将域名更改为另一个 Palantir 拥有的域名，请联系你的 Palantir 代表。

### 我可以让证书由中间 CA 而非根 CA 签名吗？

不可以。上传到 Control Panel 的证书必须由 Palantir 安全团队批准的根 CA 签名才能被接受。叶证书不能单独使用。如[步骤 2](https://www.palantir.com/docs/foundry/administration/configure-domains-and-certificates/#2-sign-the-certificate) 中所述，你必须将叶证书和中间证书合并为一个 `.pem` 文件，叶证书在前，中间证书在后：

```
-----BEGIN CERTIFICATE-----
[叶证书内容]
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
[中间证书内容]
-----END CERTIFICATE-----
```

### 我可以在子域名上托管 Foundry 吗？

可以，你可以在子域名上托管 Foundry（如 `client.example.com`），但有如下限制：

*   Foundry 不能同时托管在主域名和该域名的子域名上。例如，不支持同时在 `example.com` 和 `client.example.com` 上托管 Foundry。要为 `client.example.com` 生成有效的 CSR，请确保 `example.com` 当前未配置为 enrollment 主机。
*   要将 `client.example.com` 配置为 enrollment 主机，你必须购买通用名称（CN）为 `client.example.com` 的证书。你可以购买通配符证书（`*.client.example.com`），以便在 `app1.client.example.com` 等域名上托管 artifact 网站（如 Ontology SDK 应用）。但主域名的通配符证书（`*.example.com`）不能用于将子域名 `client.example.com` 配置为 enrollment 主机。
