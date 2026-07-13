Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/log-search/

Markdown Content:
## 日志搜索

[Workflow Lineage](https://www.palantir.com/docs/foundry/workflow-lineage/overview/) 中的 **Search logs** 标签页允许你搜索选定源执行器在过去 30 天内生成的所有[服务日志](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/)。与单次执行的服务日志视图不同，日志搜索汇总了从给定源执行器发起的每次执行的日志，适用于调查重复出现的错误或查找跨多次运行的特定日志消息。

源执行器是调用链中的第一个可执行资源，可以是函数、action、自动化、AIP Logic、AIP agent 或模型实时部署。当函数由其他资源支持时，如 AIP Logic、语言模型或 AIP agent，日志搜索面板会将支持资源显示为源执行器而非底层函数。

## 访问日志搜索

要访问日志搜索：

1.   打开 [Workflow Lineage](https://www.palantir.com/docs/foundry/workflow-lineage/overview/) 并导航到包含你的资源的工作流。
2.   选择一个可执行资源节点。
3.   选择底部面板中的 **Search logs** 标签页。

![图片 1：Workflow Lineage 中的日志搜索。](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-log-search.png)

## 搜索日志

**Search logs** 面板顶部的搜索栏接受文本查询。输入搜索词后，结果会填充到结果表中。搜索区分大小写，并匹配完整的日志行，包括 **Message** 和 **Content** 字段。

你可以使用 `*` 作为通配符来匹配任意字符序列。例如：

*   `connection failed` 匹配包含确切短语"connection failed"的日志行
*   `timeout*retry` 匹配包含"timeout"后跟"retry"且中间有任意字符的日志行
*   `Error` 匹配"Error"但不匹配"error"或"ERROR"

![图片 2：日志搜索结果，在 Content 列中显示匹配的文本高亮。](https://www.palantir.com/docs/resources/foundry/aip-observability/log-search-automate.png)

Search logs 标签页显示的是选定资源作为_源执行器_的执行日志。资源被其他资源调用时产生的日志不包含在内。在下面的示例中，函数在执行期间产生了日志，但它不是源执行器——它是被自动化调用的。从函数搜索返回空结果；要查找这些日志，请从自动化节点搜索。

### 源执行器建议

如果未找到选定资源的日志，**Search logs** 面板会检查它最近是否被其他源执行器调用，并将其显示为建议。选择一个建议的源执行器以导航到图中的该节点并搜索其日志。面板标题还会显示 **Also recently executed by** 指示器。你可以选择此指示器以查看并导航到源执行器。

![图片 3：日志搜索显示选定函数无结果，附带源执行器建议和 Also recently executed by 指示器。](https://www.palantir.com/docs/resources/foundry/aip-observability/log-search-function-no-logs.png)

## 筛选结果

**Search logs** 面板左侧的筛选器侧边栏允许你缩小日志结果范围。选择筛选器图标以展开或收起侧边栏。可用的筛选器包括：

*   **日志级别：** 按严重性级别筛选日志。从下拉菜单中选择一个日志级别，只显示匹配该级别的日志。可用级别为 `ERROR`、`FATAL`、`WARN`、`INFO`、`DEBUG` 和 `TRACE`。默认显示所有日志级别。
*   **时间戳范围：** 将结果限制在特定时间窗口内。你可以选择预定义的相对范围，如 `Past 1 day` 或 `Past 1 hour`，也可以指定自定义的日期和时间范围。默认范围为 `Past one day`。最大可选范围为 30 天，与日志保留期一致。
*   **产生资源：** 按产生日志的资源筛选。当源执行器的调用链包含多个下游资源，且你想隔离来自特定函数、action、自动化、AIP Logic 或 AIP agent 的日志时使用此筛选器。选择筛选器旁边的清除按钮以移除选择。

当多个筛选器处于活动状态时，它们以 `AND` 逻辑组合；只返回匹配所有已选筛选器的日志条目。选择侧边栏标题中的 **Reset** 以清除所有筛选器并返回默认视图。

## 理解结果表

搜索结果以表格形式按时间戳排序显示，最近的日志排在最前面。表格包含以下列：

| 列 | 说明 |
| --- | --- |
| **日志级别** | 表示严重性的颜色编码图标：红色表示 `ERROR` 和 `FATAL`，橙色表示 `WARN`，中性色表示 `INFO`、`DEBUG` 和 `TRACE` |
| **时间戳** | 日志条目记录的日期和时间 |
| **Message** | 主要日志消息。选择该字段以打开详情对话框 |
| **Content** | 附加的结构化内容，通常为 JSON 格式。选择该字段以打开详情对话框 |
| **产生资源** | 发出该日志条目的资源 |

搜索查询中的匹配文本会在 **Message** 和 **Content** 列中高亮显示。

当鼠标悬停在日志行上时，行右侧会出现 **View trace** 按钮。选择此按钮以打开产生该日志条目的执行的[追踪视图](https://www.palantir.com/docs/foundry/aip-observability/trace-view/)。这样你可以看到完整的执行时间线，并确定日志在调用链中的发出位置。

![图片 4：鼠标悬停时日志行右侧出现的 View trace 按钮。](https://www.palantir.com/docs/resources/foundry/aip-observability/log-search-view-trace.png)

## 查看日志详情

选择任何 **Message** 或 **Content** 单元格以打开包含完整日志条目的详情对话框。对话框提供：

*   **Message** 和 **Content** 标签页用于在两个字段之间切换
*   文本搜索栏用于在日志条目中查找特定内容
*   **Wrap lines** 开关，方便阅读长日志行
*   结构化内容的自动 JSON 格式化

![图片 5：显示 Content 标签页的服务日志内容对话框，包含格式化的 JSON 和高亮的搜索匹配。](https://www.palantir.com/docs/resources/foundry/aip-observability/log-search-log-details.png)

## 日志保留和分页

日志搜索覆盖最近 30 天的日志。超过 30 天的日志会被自动删除且无法恢复。结果以每页 100 条的形式加载。滚动到表格底部以加载更多结果。日志不是实时流式传输的；要查看初始搜索后产生的其他日志，请刷新页面。

## 权限

日志搜索使用与[执行历史](https://www.palantir.com/docs/foundry/aip-observability/run-history/)相同的权限模型。要搜索资源的日志，你必须拥有该资源的 **edit** 权限。如果源执行器所在项目的日志访问已启用，并且你拥有所有必要的 Markings 的访问权限，则可以搜索所有执行的日志。如果日志访问未启用，则只能搜索自己过去 24 小时内的执行日志，但仍需要该资源的 **edit** 权限。在 [CBAC 堆栈](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/) 上，此自行执行例外不适用；必须启用日志访问才能搜索日志。

![图片 6：日志搜索显示访问仅限于自己过去 24 小时内的执行。](https://www.palantir.com/docs/resources/foundry/aip-observability/log-search-action-no-perms.png)

有关日志访问配置的完整详情，请参见[日志权限](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/)。

## 相关功能

*   [服务日志](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/)：查看特定执行的日志
*   [执行历史](https://www.palantir.com/docs/foundry/aip-observability/run-history/)：浏览资源的所有最近执行记录
*   [追踪视图](https://www.palantir.com/docs/foundry/aip-observability/trace-view/)：可视化执行时间线并与日志数据关联
*   [日志权限](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/)：配置谁可以访问日志
