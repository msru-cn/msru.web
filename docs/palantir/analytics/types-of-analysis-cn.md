Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics/types-of-analysis/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#types-of-analysis)分析类型

Foundry 分析套件同时支持点击式分析（无代码/低代码）和代码式数据分析，针对不同分析类型和数据源都有专门优化的工具，并提供仪表板和报告功能。

工具和支持的工作流汇总如下：

|  | 点击式分析 | 代码式分析 |
| --- | --- | --- |
| 表格数据 | Contour | Code Workbook |
| 对象数据（Ontology） | Insight, Quiver |  |
| 时间序列数据 | Quiver | Code Workbook |
| 地图（地理空间）数据 | Map, Contour, Quiver, Insight |  |

## [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#point-and-click-analysis)点击式分析

Foundry 提供多种点击式分析工具：Contour、Insight 和 Quiver。

*   **Contour** 用于大规模[表格数据](https://www.palantir.com/docs/foundry/analytics/datasets-object-sets/#datasets)分析。
*   **Insight** 面向业务用户，用于分析 Ontology 和创建[对象集](https://www.palantir.com/docs/foundry/analytics/datasets-object-sets/#object-sets)。
*   **Quiver** 支持高级 Ontology 分析、仪表板创建和[时间序列](https://www.palantir.com/docs/foundry/time-series/time-series-overview/)数据。

此外，**Object Explorer** 是 [Ontology 层](https://www.palantir.com/docs/foundry/ontology/overview/)的搜索和发现工具，支持跨 Ontology 搜索和查找单个对象。

Contour、Insight 和 Quiver 可以帮你：

*   无需代码即可可视化、筛选和转换数据。
*   利用表达式语言实现更高级的转换和聚合。
*   组织复杂分析。
*   创建交互式仪表板，让他人以引导式、结构化的方式探索和研究数据。
*   与同事共享分析。

以下是各工具针对的具体使用场景。

### [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#contour)Contour

![Image 5: contour](https://www.palantir.com/docs/resources/foundry/analytics/getting-started-contour.png)

Contour 适合以下场景：

*   **部分或全部数据未映射到 Ontology：** 通常建议尽可能使用 [Ontology 层](https://www.palantir.com/docs/foundry/ontology/overview/)，但有些情况不适合，比如一次性上传的数据不会被清洗或复用。并非所有数据都要进入 Ontology 层。例如 Contour 很适合查看流水线中的中间数据集。
*   **需要操作超大数据集：** Contour 专为大规模数据集的分析操作设计，而 Quiver 支持的对象聚合上限为 5 万行。
*   **想把分析结果保存为新数据集，供其他 Foundry 工具使用。**[了解更多关于保存结果为数据集](https://www.palantir.com/docs/foundry/analytics/datasets-object-sets/)。
*   **想构建参数化分析，方便在不同数据视图和结果间切换。**

[了解 Contour 入门。](https://www.palantir.com/docs/foundry/contour/getting-started/)

### [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#insight)Insight

![Image 6: Insight](https://www.palantir.com/docs/resources/foundry/analytics/insight-analysis.png)

Insight 适合以下场景：

*   **数据已映射到 Ontology：** Insight 利用对象类型、接口、链接类型和动作等 Ontology 数据。
*   **需要无需代码的临时分析：** 可视化分析路径可以逐步构建复杂查询，支持简单和复杂的下钻工作流。
*   **想探索对象间的关系：** **Link** 步骤可以沿链接发现关联对象，并基于关联属性筛选数据。
*   **想把数据回写到 Ontology：** Insight 支持从分析结果中创建、更新和删除对象。

[了解 Insight 入门。](https://www.palantir.com/docs/foundry/contour/getting-started/)

### [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#quiver)Quiver

![Image 7: quiver](https://www.palantir.com/docs/resources/foundry/analytics/getting-started-quiver.png)

Quiver 适合以下场景：

*   **数据已映射到 Ontology：** 对象间的链接在 Ontology 中原生表示，Quiver 用户不需要执行 join 也不用操心主键或外键。通过 [Search Around](https://www.palantir.com/docs/foundry/quiver/objects-import-linked/) 可以检索对象或对象集的关联对象。
*   **处理时间序列数据：** Quiver 专门优化了时间序列数据处理。包含专用的时间序列库，具备传感器和信号处理功能，底层可对接专门为高频信号操作优化的时序数据库。详见[时间序列分析](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#time-series-analysis)。
*   **想把发现嵌入到其他对象感知应用中：** Quiver 仪表板可以嵌入到 [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) 等业务应用中。
*   **想回写到 Ontology：** Quiver 可以用 [Action](https://www.palantir.com/docs/foundry/action-types/overview/) 将分析决策写回 Ontology，让分析结论立即可供他人使用。

[了解 Quiver 入门。](https://www.palantir.com/docs/foundry/quiver/getting-started/)

### [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#object-explorer)Object Explorer

用户可以在 [Object Explorer](https://www.palantir.com/docs/foundry/object-explorer/overview/) 中执行简单的对象分析工作流。Object Explorer 是一个搜索和分析工具，用于回答关于 Ontology 层中任何内容的问题。用户可以在 Object Explorer 中可视化地组合搜索查询，从简单筛选到 Search-around，找到目标对象。Object Explorer 适合以下场景：

*   **想在 Ontology 中搜索关键词：** Object Explorer 提供搜索入口，可跨 Ontology 查找对象或对象类型。搜索结果页支持查看对象实例和对象类型结果。
*   **想探索某个对象类型及其属性：** Object Explorer 是查找相关对象数据和查看 Object Views 的绝佳起点。
*   **最终目标是创建相关对象的列表（对象集）：** Object Explorer 支持创建对象探索和对象列表，可与他人共享或在 Quiver、Insight 等应用中进一步分析。[了解更多关于探索和对象列表。](https://www.palantir.com/docs/foundry/object-explorer/save-explorations/)

[了解 Object Explorer 入门。](https://www.palantir.com/docs/foundry/object-explorer/getting-started/)

## [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#code-based-analysis)代码式分析

### [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#code-workbook)Code Workbook

Code Workbook 让用户通过直观的图形界面分析和转换数据。

![Image 8: code workbook](https://www.palantir.com/docs/resources/foundry/analytics/getting-started-code-workbook.png)

Code Workbook 的设计理念：

*   **迭代速度：** 用户可以快速测试和完善转换与可视化逻辑，产出有用的结果。
*   **低门槛：** 图形界面和预编写逻辑的支持，让不同技术水平的用户都能轻松上手。
*   **协作：** 不同背景的用户可以共享逻辑，在单个分析中协同工作。
*   **模型创建：** 用户可以在 Code Workbook 中迭代 Foundry 模型，轻松查看模型阶段和指标。模型可以提交到建模目标并在业务中使用。
*   **平台互操作：** 用户可以将可视化添加到 Notepad，将就绪的流水线迁移到 Code Repository，在全平台推广成果。

Code Workbook 的主要功能：

*   **交互式控制台**：快速迭代转换逻辑和临时数据探索。
*   **可视化支持**：用常用包（Matplotlib、Plotly、Seaborn）创建详细的交互式图像。
*   **模板**：通过简单界面复用复杂和领域特定逻辑。
*   支持**多种语言**（Python、SQL、R）：用户可以为分析选择最佳语言，在单个分析中混合使用多种语言。
*   **分支**：隔离各用户的改动，促进协作。
*   **直观的用户界面**：方便自定义 Spark 环境、设置转换的输入类型、查看节点间关系。

[了解 Code Workbook 入门。](https://www.palantir.com/docs/foundry/code-workbook/getting-started/)

该用哪个工具构建流水线？

Code Workbook 不是为构建生产流水线设计的。如果你要构建或维护生产流水线，请使用 Code Repositories，它包含版本历史、分支与合并请求等功能，更适合健壮的生产流水线。更多信息见 [Foundry 代码转换工具对比](https://www.palantir.com/docs/foundry/code-workbook/code-products-comparison/)。

## [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#time-series-analysis)时间序列分析

Foundry 为时间序列的存储、监控、转换、分析和回写提供了先进的端到端工具。从历史性能分析到趋势与相关性分析再到预测，都能利用 Foundry 的时间序列能力。

[Quiver](https://www.palantir.com/docs/foundry/quiver/overview/) 和 [Code Workbook](https://www.palantir.com/docs/foundry/code-workbook/overview/) 分别支持无代码和代码式的时间序列分析。[了解时间序列入门。](https://www.palantir.com/docs/foundry/time-series/time-series-overview/)

## [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#map-based-geospatial-analysis)地图（地理空间）分析

地理空间数据通常是 Foundry 用户将分析与运营连接起来的关键输入。Foundry 简化了地理空间数据转换和分析，支持基于地图的工作流。

[Map 应用](https://www.palantir.com/docs/foundry/map/overview/)是强大的地理空间分析工具。此外，[Contour](https://www.palantir.com/docs/foundry/contour/overview/) 和 [Quiver](https://www.palantir.com/docs/foundry/quiver/overview/) 也包含地图组件，可在分析中使用地理空间数据。

## [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#dashboarding)仪表板

Contour 和 Quiver 都支持基于分析结果构建交互式仪表板。[了解更多关于仪表板。](https://www.palantir.com/docs/foundry/analytics/dashboards/)

## [](https://www.palantir.com/docs/foundry/analytics/types-of-analysis/#reporting)报告

Notepad 是 Foundry 的新一代报告工具，推荐用于大多数报告场景。[了解更多关于报告。](https://www.palantir.com/docs/foundry/analytics/reporting/)

[← 上一页 概述](https://www.palantir.com/docs/foundry/analytics/overview/)

[下一页 分析结果 / 仪表板 →](https://www.palantir.com/docs/foundry/analytics/dashboards/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

不出售或共享我的个人信息
