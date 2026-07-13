Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics/dashboards/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics/dashboards/#dashboards)仪表板

在 Foundry 中，有两种主要方式从分析结果构建交互式仪表板：[Contour 仪表板](https://www.palantir.com/docs/foundry/analytics/dashboards/#contour-dashboards)和 [Quiver 仪表板](https://www.palantir.com/docs/foundry/analytics/dashboards/#quiver-dashboards)。某些场景下，你可能需要用 [Code Workspaces 仪表板](https://www.palantir.com/docs/foundry/analytics/dashboards/#code-workspaces-applications)、[Notepad](https://www.palantir.com/docs/foundry/analytics/dashboards/#notepad) 或[自定义应用](https://www.palantir.com/docs/foundry/analytics/dashboards/#custom-applications)。本页介绍各工具的适用场景。

[了解 Contour 和 Quiver 的区别。](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#point-and-click-analysis)

## [](https://www.palantir.com/docs/foundry/analytics/dashboards/#contour-dashboards)Contour 仪表板

Contour 仪表板用于展示 Contour 分析的内容，比如分析结果和发现。支持图表间联动筛选、内联参数引用、全屏演示视图和 PDF 导出。

[了解更多关于 Contour 和 Contour 仪表板。](https://www.palantir.com/docs/foundry/contour/overview/)

![Image 4: contour dashboards](https://www.palantir.com/docs/resources/foundry/analytics/dashboards-contour.png)

_此截图使用了 [NYC Taxi & Limousine Commission ↗](https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page) 的开源数据。_

## [](https://www.palantir.com/docs/foundry/analytics/dashboards/#quiver-dashboards)Quiver 仪表板

Quiver 仪表板用于以只读、交互式的方式展示 Quiver 分析的内容。

Quiver 仪表板可以独立使用，也可以嵌入到 [Object Views](https://www.palantir.com/docs/foundry/object-views/overview/)、[Workshop 应用](https://www.palantir.com/docs/foundry/workshop/overview/) 或 [Notepad 文档](https://www.palantir.com/docs/foundry/notepad/overview/) 中。还可以在 [Carbon](https://www.palantir.com/docs/foundry/carbon/overview/) 中展示，直接交付给业务用户使用。

[了解更多关于 Quiver 和 Quiver 仪表板。](https://www.palantir.com/docs/foundry/quiver/overview/)

![Image 5: quiver dashboard](https://www.palantir.com/docs/resources/foundry/analytics/dashboards-quiver-dashboard.png)

## [](https://www.palantir.com/docs/foundry/analytics/dashboards/#code-workspaces-applications)Code Workspaces 应用

Code Workspaces 目前支持 Python 的 [Dash ↗](https://plotly.com/dash/) 和 [Streamlit ↗](https://streamlit.io/)，以及 R 的 [Shiny® ↗](https://shiny.rstudio.com/)。用户可以在 Code Workspaces 中直接创建应用工作流，并内置 Foundry 的版本控制、分支和数据治理功能。

[了解更多关于 Code Workspaces 和 Code Workspace 应用。](https://www.palantir.com/docs/foundry/code-workspaces/overview/)

![Image 6: Dash application in Code Workspaces](https://www.palantir.com/docs/resources/foundry/analytics/code-workspaces-dashboard.png)

## [](https://www.palantir.com/docs/foundry/analytics/dashboards/#other-presentation-tools)其他展示工具

### [](https://www.palantir.com/docs/foundry/analytics/dashboards/#notepad)Notepad

Contour 仪表板和 Quiver 模板最适合在 Foundry 内直接使用，交互式设计让用户可以通过参数和图表选择操作实时数据。而 [Notepad](https://www.palantir.com/docs/foundry/notepad/overview/) 更偏向报告场景，侧重创建可导出的静态内容。Notepad 文档可以整合多个应用的内容（包括 Contour 看板和 Quiver 卡片），而 Contour 仪表板和 Quiver 模板只能展示各自应用的内容。由于侧重静态内容，用户无法在 Notepad 中直接做分析或创建图表。

[了解更多关于报告工作流。](https://www.palantir.com/docs/foundry/analytics/reporting/)

### [](https://www.palantir.com/docs/foundry/analytics/dashboards/#custom-applications)自定义应用

Contour 仪表板和 Quiver 模板适合快速展示交互式分析结果，但某些场景下用应用构建工具（如 Workshop）可能更合适。如果你的需求需要完全自定义和灵活的布局、多步骤工作流或数据回写，应该考虑 Foundry 的[应用构建工具](https://www.palantir.com/docs/foundry/app-building/overview/)。

Quiver 仪表板可以嵌入到 Workshop 应用中，让业务用户也能使用更复杂的分析内容。

[了解更多关于在 Workshop 中嵌入 Quiver 仪表板。](https://www.palantir.com/docs/foundry/quiver/dashboards-workshop/)

[← 上一页 分析类型](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/)

[下一页 报告 →](https://www.palantir.com/docs/foundry/analytics/reporting/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings
