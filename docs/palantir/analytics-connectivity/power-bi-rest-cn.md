Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/#rest-connector-setup)REST 连接器设置

本页讨论 Power BI® 连接器的实现，用于从 Power Query 界面访问 Foundry 资源。如果你在找 Microsoft Power BI® XMLA 连接器的数据集成信息，请参阅我们的[数据连接文档](https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/)。

无需安装 ODBC 驱动即可在 Power BI® 中访问 Foundry 数据集。相比内置连接器，此连接器仅支持较小的数据集，仅在无法安装 ODBC 驱动时使用。REST 连接器仅支持 **Import** 模式，不支持 **Direct Query**。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/#step-1-install-the-connector-in-the-custom-connectors-directory)第一步：将连接器安装到自定义连接器目录

Power BI® 支持部署自定义连接器来导入数据。在文件目录中找到 Power BI® 安装目录下的 **Custom Connectors** 文件夹（安装 Power BI® 时会自动创建）。下载 Palantir Foundry REST 连接器并放入该目录。

下载：

*   [Palantir REST Power BI® Connector ↗](https://www.palantir.com/drivers/artifacts/datasets/powerbi-rest/1.0.0/foundry-rest-1.0.0.mez)

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/#step-2-configure-power-bi-to-use-custom-connectors)第二步：配置 Power BI® 使用自定义连接器

在 Power BI® 桌面设置中，进入 **Options > Security > Data extensions**，选择 **(Not Recommended) Allow any extension to load without validation or warning**。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/#step-3-ingest-data)第三步：导入数据

重启 Power BI® 让配置生效。自定义连接器在启动时加载，重启后即可使用。按照 [Power BI®：入门指南](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/)开始构建报告。注意：不使用 ODBC 方式时，连接器在 Power BI® 中显示为"Palantir Foundry (REST)"。

[← 上一页 设置](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-setup/)

[下一页 入门 →](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

不出售或共享我的个人信息
