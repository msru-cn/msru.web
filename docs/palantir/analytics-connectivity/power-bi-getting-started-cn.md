Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#getting-started)入门

本页讨论 Power BI® 连接器的实现，用于从 Power Query 界面访问 Foundry 资源。如果你在找 Microsoft Power BI® XMLA 连接器的数据集成信息，请参阅我们的[数据连接文档](https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/)。

本指南介绍如何通过 Power BI® 认证 Foundry、选择数据集，并开始构建第一个报告。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#select-foundry-as-your-data-source-in-power-bi)在 Power BI® 中选择 Foundry 作为数据源

*   在 Power BI® 中，点击功能区的"Get data"，选择"More"。
*   在数据源列表中搜索"Palantir Foundry"，或在 Online Services 下选择。
*   如果报错，请确认已完成[安装步骤](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-setup/)。

![Image 5: pbi-get-data](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/power-bi_get_data.gif)

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#configure-your-connection-settings)配置连接设置

接下来会提示输入 Foundry 连接信息：

*   **Base URL：** 输入 Foundry 连接 URL。就是你平时访问 Foundry 的链接。可以右键复制链接地址粘贴进来。_（注意：在浏览器中访问此 URL 可能会重定向。如果发生，删除地址中".com"之后的部分即可。）_
*   **（可选）Dataset RID & Branch：** 如果已知数据集 RID 或分支，可以在这里输入。（参见[指南：识别数据集的 RID 或文件路径](https://www.palantir.com/docs/foundry/analytics-connectivity/identify-dataset-rid/)。）否则留空，后续步骤有数据集浏览器可以选择数据。
*   **Data Connectivity Mode：** 选择"Import"或"DirectQuery"模式。

点击"OK"继续下一步。

![Image 6: connection-settings](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/power-bi_connection-settings.png)

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#authenticate-with-foundry)认证 Foundry

有三种认证方式：**Foundry OAuth**、**Foundry Token** 和 **Foundry Client Credentials**。OAuth 是 Power BI® Desktop 推荐的认证方式。Client Credentials 建议管理员在配置 Power BI® Service 认证时使用。

可以在 Power BI® 认证对话框左侧选择认证方式。各方式说明如下。

#### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#foundry-oauth-authentication-recommended-for-power-bi-desktop)Foundry OAuth 认证（Power BI® Desktop 推荐）

OAuth 是 Power BI® Desktop 连接 Foundry 的推荐方式。选择 **Sign in**，会打开新窗口显示 Foundry 登录界面。

首次使用时，会提示批准 Power BI® 访问你的 Foundry 账户。点击"allow"允许访问请求，然后正常登录 Foundry。

![Image 7: oauth](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/power-bi_oauth.png)

如果 OAuth 登录报错，可能是组织尚未启用 Power BI® 的 OAuth 登录。联系 Foundry 管理员[将 Power BI® 启用为第三方应用](https://www.palantir.com/docs/foundry/platform-security-third-party/manage-3pa/)。也可以先用下方的 token 认证方式。

#### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#foundry-token-authentication)Foundry Token 认证

按照[生成 Token](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/) 的说明在 Foundry 中生成认证 token，然后粘贴到 Power BI® 提示框中。

凭据会保存在 Power BI® 中，token 有效期内无需重新输入。token 过期后按上述步骤重新生成即可。

#### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#foundry-third-party-application-client-credentials-recommended-for-foundry-administrators-in-power-bi-service)Foundry 第三方应用客户端凭据（推荐管理员在 Power BI® Service 中使用）

第三方应用客户端凭据是 Foundry 管理员在 Power BI® Service 中授权报告的推荐方式。此类凭据不会过期。

首先在 Foundry 中配置第三方应用。[按照说明](https://www.palantir.com/docs/foundry/platform-security-third-party/register-3pa/)配置。选择 **confidential client**，确保启用 **client credentials grant**。不要启用 Ontology SDK。

然后为第三方应用的服务用户授予适当权限。Power BI® 中的数据访问将反映服务用户的权限级别。

最后在 Power BI® 中选择 **Foundry Client Credentials** 认证方式，输入第三方应用的 client ID 和 secret。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#connect-to-foundry-and-select-your-dataset)连接 Foundry 并选择数据集

*   使用左侧导航器选择报告需要的数据集。
*   选择完成后，选择"Load"或"Transform Data"，然后照常构建报告。

![Image 8: dataset](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/power-bi_dataset-selection.png)

_Power BI® 和 Power BI® 标识是 Microsoft 集团公司的商标。_

[← 上一页 REST 连接器设置](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/)

[下一页 FAQ →](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

不出售或共享我的个人信息
