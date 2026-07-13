Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-getting-started/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-getting-started/#getting-started)入门

本指南介绍如何通过 Report Builder 认证 Foundry、选择数据集，并开始构建第一个报告。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-getting-started/#add-foundry-as-your-data-source-in-report-builder)在 Report Builder 中添加 Foundry 数据源

*   在 Report Builder 中，点击 Report Data 面板中的工具栏。点击 New，再点击 Data Source。打开 Data Source Properties 对话框。
*   在 Name 文本框中输入任意名称，如 `FoundrySqlServer`。选择"Use a connection embedded in my report"。
*   在"Select connection type"下拉菜单中选择 ODBC，窗口应如下所示：

![Image 3: msrb-new-data-source](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microsoft-report-builder_new-data-source.png)

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-getting-started/#build-your-connection-string)构建连接字符串

接下来需要在 Report Builder 的 Connection string 文本框中粘贴以下基础连接字符串，并替换 `<URL>` 和 `<Token>`：

*   **基础连接字符串：**`DSN=FoundrySql;BaseUrl=<URL>;PWD=<Token>`
*   **URL：** 填入 Foundry 连接 URL。就是你平时访问 Foundry 的链接。替换方法是：登录 Foundry，复制 URL，去掉 `https://` 前缀和 `.com` 之后的部分。
*   **Token：** 按照[生成 token](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/) 的说明在 Foundry 中生成认证 token。拿到 token 后粘贴到基础连接字符串的 `<Token>` 部分。
*   Foundry 数据源应该已经连接好了。可以点击"Test Connection"按钮测试。如果报错，请确认已完成[安装步骤](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-setup/)。

凭据会保存在 Report Builder 中，token 有效期内无需重新输入。token 过期后按上述步骤重新生成即可。

点击"OK"继续下一步。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-getting-started/#connect-to-foundry-and-query-your-dataset)连接 Foundry 并查询数据集

*   在左侧 Report Data 面板中点击 New，再点击 Add Dataset。
*   输入数据集名称。选择"Use a dataset embedded in my report"，然后在下拉菜单中选择 FoundrySqlServer。
*   要使用具体数据集，将数据集的文件路径或 RID 复制到 Query 文本框中。在 Foundry 中找到这些值：进入目标数据集的"About"页面，点击"see more"，复制"RID"值或"Location"。（参见[指南：在 Foundry 中识别数据集的 RID 或文件路径](https://www.palantir.com/docs/foundry/analytics-connectivity/identify-dataset-rid/)。）
*   编写 SQL 查询，然后照常构建报告。

![Image 4: dataset-query](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microsoft-report-builder_dataset-query.png)

[← 上一页 设置](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-setup/)

[下一页 Excel →](https://www.palantir.com/docs/foundry/analytics-connectivity/excel/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

不出售或共享我的个人信息
