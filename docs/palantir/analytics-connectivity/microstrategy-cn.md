Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#connecting-to-foundry-datasets-from-microstrategy)从 MicroStrategy 连接 Foundry 数据集

MicroStrategy 分析平台内置经过认证的连接器，让用户能轻松创建基于 Foundry 数据集的 MicroStrategy 报告和 dossier。该连接器兼容 Foundry 访问控制，包括细粒度权限。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#supported-products)支持的产品：

*   MicroStrategy Workstation（预览功能，2021 Update 8）
*   MicroStrategy Workstation（2021 Update 9 或更高版本）
*   MicroStrategy Library（2021 Update 9 或更高版本）

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#authentication-methods)认证方式

*   用户生成的 token

## [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#installation)安装

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#part-1-verify-connector-is-installed-in-microstrategy)第一步：确认 MicroStrategy 已安装连接器

如果你使用的是 **2021 Update 8**，Palantir Foundry 连接器应该已经作为[预览功能 ↗](https://www2.microstrategy.com/producthelp/Current/Workstation/en-us/Content/preview_features.htm)安装。按以下步骤确认：

1.   打开 MicroStrategy Workstation，启用预览功能。
2.   在左侧边栏的 **Administration** 下点击 **Data Sources** 旁的加号。
3.   在支持的数据源列表中搜索"Palantir Foundry"。如果找到了，进入第二步安装 JDBC 驱动。

如果你使用的是 **2021 Update 9 或更高版本**，Palantir Foundry 连接器已内置。按以下步骤确认：

1.   打开 MicroStrategy Workstation。
2.   在左侧边栏的 **Administration** 下点击 **Data Sources**。
3.   在支持的数据源列表中搜索"Palantir Foundry"。如果找到了，不需要单独安装 JDBC 驱动；直接进入[使用方法](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#usage)部分。

如果在支持的数据源列表中找不到 `Palantir Foundry`，请联系 MicroStrategy 支持。可能需要升级到最新版本。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#part-2-install-palantir-foundry-jdbc-driver)第二步：安装 Palantir Foundry JDBC 驱动

如果你使用的是 **2021 Update 8**，需要先安装 Foundry 数据集的 JDBC 驱动。前往[下载：Foundry 数据集 JDBC 驱动](https://www.palantir.com/docs/foundry/analytics-connectivity/downloads/#foundry-datasets-jdbc-driver)下载安装。

如果你使用的是 **2021 Update 9 或更高版本**，Foundry JDBC 驱动已预装在 MicroStrategy Windows Workstation 和 Intelligence Server 中。只有在使用 Mac Workstation 访问本地 dossier 时才需要安装 JDBC 驱动。

安装遇到问题请联系 Palantir 代表。

连接器安装完成后，就可以在 MicroStrategy 中构建基于 Foundry 数据集的报告和 dossier 了。

## [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#usage)使用方法

本指南介绍如何通过 MicroStrategy 认证 Foundry、选择数据集，并开始构建第一个 dossier。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#part-1-create-foundry-data-source)第一步：创建 Foundry 数据源

MicroStrategy 中有两种方式创建 Foundry 数据源：

*   [方式一：在 MicroStrategy Workstation 中创建](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#option-1-create-foundry-data-source-in-microstrategy-workstation)
*   [方式二：通过 MicroStrategy 数据集创建](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#option-2-create-foundry-data-source-using-microstrategy-datasets)

#### [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#option-1-create-foundry-data-source-in-microstrategy-workstation)方式一：在 MicroStrategy Workstation 中创建 Foundry 数据源

1.   如果使用 **2021 Update 8**，在 **Help** 菜单中启用 **Preview Features**。如果使用 **2021 Update 9 或更高版本**，直接下一步。

![Image 12: Enable Preview Features in MicroStrategy Help menu](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microstrategy_preview-features.png)

2.   在 Workstation 侧边栏的 **Administration** 下点击 **Data Sources** 旁的加号。
3.   在支持的数据源列表中找到并选择"Palantir Foundry"。

![Image 13: Palantir Foundry connector in MicroStrategy data sources list](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microstrategy_palantir-connector.png)

4.   指定数据源名称，保持数据库版本不变。然后选择要使用该连接的 MicroStrategy 项目。在 **Default Database Connection** 下拉菜单中选择 **Add New Database Connection**。

![Image 14: Add new Foundry data source in MicroStrategy](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microstrategy_data-source-settings.png)

5.   按提示添加 Foundry 连接信息，包括[连接属性](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#part-2-configure-foundry-connection-settings)。

![Image 15: Configure Foundry connection in MicroStrategy](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microstrategy_foundry-connection.png)

#### [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#option-2-create-foundry-data-source-using-microstrategy-datasets)方式二：通过 MicroStrategy 数据集创建 Foundry 数据源

1.   如果使用 **2021 Update 9 或更高版本**，可以通过 MicroStrategy 数据集创建 Foundry 数据源。在 Workstation 的 **Help** 菜单中禁用 **Enable New Data Import Experience**。

![Image 16: Disable New Data Import Experience in MicroStrategy Help menu](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microstrategy_new-data-import-experience.png)

2.   在 **Analysis** 下点击 **Datasets** 旁的加号，然后在 **Create Dataset** 对话框中选择 **Data Import Cube**。

![Image 17: Create Dataset with Data Import Cube type in MicroStrategy](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microstrategy_data-import-cube.png)

3.   在 **Data Sources** 窗口中搜索"Palantir Foundry"并选择。

![Image 18: Palantir Foundry connector in MicroStrategy data sources list](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microstrategy_palantir-connector-datasets.png)

4.   在 **Select Import Options** 窗口中选择任意选项，然后点 **Next**。本指南选择 **Select Tables**。

![Image 19: Select Import Options screen in MicroStrategy](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microstrategy_select-import-options.png)

5.   在 **Import from Table** 窗口中点击 **Data Sources** 旁的加号创建数据源。

![Image 20: Create a data source in MicroStrategy](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microstrategy_import-from-table.png)

6.   按下方的第二步提供连接属性。

![Image 21: Configure Foundry connection properties in MicroStrategy](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microstrategy_connection-properties.png)

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#part-2-configure-foundry-connection-settings)第二步：配置 Foundry 连接设置

创建到 Foundry 的连接需要提供以下属性：

*   **Server：** 访问 Foundry 的 URL，如 `<subdomain>.palantirfoundry.com`。
*   **Catalog：** Foundry 项目路径，如 `/MyOrg/MyProject`。此字段仅在 **2021 Update 9 或更高版本**中需要。设置此属性可以解决 MicroStrategy 中的表浏览问题。如果使用 **2021 Update 8**，切换到 **Advanced** 标签页，在 **Additional Connection String Parameters** 中添加。
*   **Token：** 在 Foundry 中生成的有效用户 token。参见[用户生成的 token](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/) 文档了解如何获取。

MicroStrategy 连接器仅支持基于 token 的认证。

*   **Additional Connection String Parameters（可选）：** 切换到 **Advanced** 标签页指定其他连接参数。参数用 `&` 分隔，如 `OptionalParam1=<VALUE>&OptionalParam2=<VALUE>`。完整参数列表见 Foundry 数据集 JDBC 驱动的[参数参考](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#parameter-reference)文档。如果使用 **2021 Update 9 或更高版本**，`Dialect` 已设为推荐值 `SPARK`，不可更改。

![Image 22: Create new database connection screen in MicroStrategy](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microstrategy_configuration-screen.png)

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/#part-3-connect-to-foundry-and-select-dataset)第三步：连接 Foundry 并选择数据集

1.   使用左侧导航栏选择 **Datasets**，然后选 **Data Import Cube** 或 **Intelligent Cube**。
2.   连接 Foundry 并选择数据集：
    *   如果使用 **2021 Update 8**，在 **Help** 菜单中启用 **Enable New Data Import Experience**。选择前面创建的 Foundry 数据源，连接并导入数据集。
    *   如果使用 **2021 Update 9 或更高版本**，在数据源列表中搜索"Palantir Foundry"并选择，然后在 **Select Import Options** 窗口中选择任意选项。在 **Import from Table** 窗口中选择前面创建的 Foundry 数据源，连接并导入数据集。

3.   继续在 MicroStrategy 中构建报告。

[← 上一页 Qlik Sense / 入门](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-getting-started/)

[下一页 Foundry 数据集的 ODBC 和 JDBC 驱动 →](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

不出售或共享我的个人信息
