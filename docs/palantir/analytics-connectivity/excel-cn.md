Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/excel/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/excel/#excel)Excel

本指南介绍如何通过 Foundry ODBC 驱动将数据集导入 Excel。

## [](https://www.palantir.com/docs/foundry/analytics-connectivity/excel/#configure-a-foundry-connection)配置 Foundry 连接

1.   打开 Windows ODBC 管理员程序（在 Windows 搜索栏搜索"odbc"，打开与你的 Excel 版本匹配的 32 位或 64 位版本）。
2.   创建新的用户 DSN，选择 FoundrySqlDriver 驱动。取一个有意义的名称，如 `Foundry Excel`。
3.   在 **Server** 中输入你的 Foundry URL（示例：`myorganization.palantirfoundry.com`）。
4.   可选：如果使用 OAuth 认证，设置 [OAuth 属性](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#use-oauth-to-authenticate)。
5.   可选：可以在这里保存认证 token，但建议稍后在 Excel 中导入数据时再输入。
6.   点击 **OK** 保存 DSN。

![Image 3: excel-odbc-app](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/excel_excel_odbc_app.png)

## [](https://www.palantir.com/docs/foundry/analytics-connectivity/excel/#import-data-via-sql)通过 SQL 导入数据

1.   在 Excel 中打开 **Data** 标签页，点击功能区中的 **Get data**。选择 **From Other Sources -> From ODBC**。
2.   选择上一步配置的 DSN。
3.   在"Advanced Options"中输入 SQL 查询来导入数据。
    *   如果要导入数据集 `/YourProject/yourdataset`，输入 `SELECT * FROM "/YourProject/yourdataset"`。
    *   熟悉 SQL 的话，可以输入更高级的查询，如筛选和聚合。

4.   点击 **OK**。
5.   首次导入数据时会提示输入凭据。
    *   如果使用 OAuth，选择"Default or Custom"凭据类型，留空，点击"Connect"
    *   否则需要认证 token。选择"Database"，输入用户名。在"password"字段输入 token，_不是_ Foundry 密码。

6.   点击 **Connect**。

![Image 4: excel-data-import](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/excel_excel_data_import.png)

## [](https://www.palantir.com/docs/foundry/analytics-connectivity/excel/#import-data-via-the-table-browser)通过表浏览器导入数据

默认情况下，如果按上述步骤操作但不输入 SQL 查询，表浏览器会显示空白状态。解决方法是在 DSN 中添加 `catalog` 属性，设置为完整的项目路径（如 `MyOrg/MyProject`），将连接限制在单个项目。在 Driver DSN Setup 窗口中点击 **Additional Properties**，再点击 **Add**。之后表浏览器就能正常显示，但每个 DSN 只能浏览单个项目。

## [](https://www.palantir.com/docs/foundry/analytics-connectivity/excel/#import-data-into-microsoft-access)导入数据到 Microsoft Access

同一个 Foundry 连接器也可以用来向 Access 数据库导入数据。

1.   在 Access 中打开 **External Data** 标签页，点击功能区中的 **New Data Source**。选择 **From Other Sources -> ODBC Database**。
2.   选择 **Import the source data**（导入源数据）或 **Link to the source data**（链接到源数据）。
3.   在 **Machine Data Source** 标签页下选择本指南第一步配置的 DSN。
    *   需要在 Driver DSN Setup 窗口中保存好认证 token。
    *   需要按上一步说明设置 `catalog` 属性。
    *   项目路径必须符合 [Access 表名命名限制 ↗](https://support.microsoft.com/en-us/office/guidelines-for-naming-fields-controls-and-objects-120c27fa-7ae1-4182-9baa-dbd183179cc3)。

4.   在表浏览器中选择表，点击 **OK**。

[← 上一页 Microsoft Report Builder / 入门](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-getting-started/)

[下一页 Qlik Sense / 概述 →](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

不出售或共享我的个人信息
