Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-setup/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-setup/#setup)设置

本页讨论 Power BI® 连接器的实现，用于从 Power Query 界面访问 Foundry 资源。如果你在找 Microsoft Power BI® XMLA 连接器的数据集成信息，请参阅我们的[数据连接文档](https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/)。

现在可以在 Power BI® 中访问 Palantir Foundry 数据集，用于构建报告和可视化。要在 Power BI® Desktop 中使用 Foundry，需要在本地电脑同时安装 Foundry 连接器和 ODBC 驱动。按以下指南完成安装。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-setup/#step-1-verify-that-the-connector-is-already-installed)第一步：确认连接器已安装

如果你使用的是 2020 年 6 月或更高版本的 Power BI®，Palantir Foundry 连接器应该已经内置。打开 Power BI®，点击"Get Data"，在 Online Services 列表中查找"Palantir Foundry"即可确认。

如果在列表中看到 Palantir Foundry，进入第二步安装 ODBC 驱动。

如果在列表中找不到，请联系 Palantir 代表。可能需要升级到最新版 Power BI®。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-setup/#step-2-install-the-palantir-foundry-odbc-driver)第二步：安装 Palantir Foundry ODBC 驱动

完成 Foundry Power BI® 集成设置还需要安装 ODBC 驱动。前往[下载页面：ODBC 驱动](https://www.palantir.com/docs/foundry/analytics-connectivity/downloads/#foundry-datasets-odbc-driver)下载安装。

安装遇到问题请联系 Palantir 代表。

如果无法安装 ODBC 驱动，可以按照说明使用[基于 REST 的 Palantir Foundry Power BI® 连接器](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/)，只需网络连接即可。但该连接器限制更多、性能不如内置连接器，建议尽可能使用内置连接器。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-setup/#step-3-get-started-building-reports)第三步：开始构建报告

ODBC 驱动安装完成后，按照 [Power BI®：入门指南](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/)开始构建基于 Foundry 数据的第一个报告。

_Power BI® 和 Power BI® 标识是 Microsoft 集团公司的商标。_

[← 上一页 概述](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-overview/)

[下一页 REST 连接器设置 →](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

不出售或共享我的个人信息
