Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-analyst/capabilities/

Markdown Content:
## 能力

AIP Analyst 使用工具来搜索、分析和呈现问题的答案。你可以通过 **Tools** 菜单中的复选框自定义可用的工具。

![Image 1: AIP Analyst 工具菜单。](https://www.palantir.com/docs/resources/foundry/aip-analyst/aip-analyst-tools.png)

## 搜索

这些工具让 AIP Analyst 使用模糊关键词匹配在 Ontology 中找到相关资源。**Settings** 菜单中的[搜索范围](https://www.palantir.com/docs/foundry/aip-analyst/using-aip-analyst/#settings)设置适用于这些工具。

*   **Object type 搜索：** 基于 object type 元数据（如显示名称、ID、描述或状态）识别相关的 object type。
*   **Object 搜索：** 在整个 Ontology 或指定的 object type 中搜索，返回按 object type 分组的匹配对象。

## 查找

这些工具使用标识符加载特定资源的信息。

*   **Object type 查找：** 检索_特定 object type_ 的完整元数据，包括属性和到相关 object type 的链接。
*   **Object 查找：** 从给定的 object type 中检索特定对象，返回该对象的所有属性值。
*   **Function 查找：** 检索函数的签名及其源代码预览。
*   **Action type 查找：** 检索特定 action type 的元数据。
*   **Dataset 查找：** 查找和预览 dataset，包括 schema 信息和示例数据。
*   **Backing dataset 查找：** 检索给定 object type 的 backing dataset，支持对 Ontology 数据进行直接的数据集级分析。
*   **Workshop 查找：** 检索 Workshop module 引用的 object type、链接、functions 和 action type。
*   **Notepad 查找：** 检索 Notepad 文档的内容。
*   **Media set item 查找：** 从 media set 中检索特定媒体项。

## 查询与分析

这些工具创建 AIP Analyst 可以作为进一步分析基础模块的结果，如 object sets、聚合和 SQL 查询结果。

*   **Object set：** 创建 object set，可选地通过应用 filters、search-arounds 或语义搜索等操作进行过滤或转换。
*   **导入 object set：** 将现有 object sets 导入当前分析上下文。
*   **Ontology 聚合：** 对 object sets 执行聚合操作，可选分组属性。支持的操作包括 count、sum、average、min、max、percentile、cardinality、标准差和方差。
*   **Ontology SQL：** 对 object sets 执行 SQL 查询，返回可用于复杂分析或链式查询的表格数据。查询可以链式调用，每个查询引用前一个的结果。
*   **Dataset SQL：** 对 datasets 执行 SQL 查询以检索和分析数据，返回可用于进一步分析或链式后续查询的表格数据。支持引用多个 dataset 分支。

## Functions 和 Actions

AIP Analyst 可以在分析过程中执行 functions 和 actions。

*   **Function 执行：** 执行 functions 来进行计算或数据转换。你可以在分析会话中直接提供输入并查看输出。
*   **Action type 执行：** 执行 actions 来创建或修改对象。Actions 在执行前需要审批，如有需要可以撤销。

## 可视化

AIP Analyst 可以使用多种可视化工具呈现输出：

*   **Vega 图表：** 从表格数据（如 Ontology 聚合、SQL 结果或 dataset 查询）构建交互式图表。
*   **地图可视化：** 在交互式地图上可视化对象的地理空间数据。

## 文件和媒体支持

你可以上传文件到分析中供 AIP Analyst 处理：

*   **电子表格：** Excel（`.xlsx` 和 `.xls`）和 CSV 文件。
*   **文档：** Word（`.docx`）文件。嵌入的图片会与文本一起提取，因此 Agent 可以解读文档中的图表、图示和截图，而不仅仅是文字。
*   **图片：** JPEG、PNG、GIF 和 WebP。
*   **PDF：** 同时处理文本和视觉内容，因此 Agent 可以解读页面上渲染的图表、图示和表格。

你也可以从 media sets 附加媒体项作为分析上下文。

## 其他能力

*   **澄清问题：** 当查询不明确时，AIP Analyst 可能会提出澄清问题，在继续之前完善分析方法。
*   **上下文清理：** AIP Analyst 自动隐藏对话中过时或不必要的信息，让 Agent 专注于与当前问题相关的数据。
*   **管理工具：** 在分析期间启用或禁用工具，让 AIP Analyst 专注于与当前问题相关的能力。你仍然可以从 **Tools** 菜单手动配置工具。
