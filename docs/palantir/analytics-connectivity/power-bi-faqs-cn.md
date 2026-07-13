Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/

Markdown Content:
## FAQ

本页讨论 Power BI® 连接器的实现，用于从 Power Query 界面访问 Foundry 资源。如果你在找 Microsoft Power BI® XMLA 连接器的数据集成信息，请参阅我们的[数据连接文档](https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/)。

## 通用使用技巧

*   [数据传输有大小限制吗？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#is-there-a-size-limit-on-how-much-data-i-can-transmit)
*   [如何优化 Import 和 DirectQuery 模式的使用？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#how-do-i-optimize-usage-of-the-connector-across-import-and-directquery-modes)
*   [Foundry 和 Power BI® 之间的访问控制如何工作？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#how-do-access-controls-work-across-foundry-and-power-bi)
*   [如何在 Power BI® service 中使用 Foundry 集成？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#how-do-i-use-the-foundry-integration-with-the-power-bi-service)
*   [如何在 Power BI® service 中使用 Foundry 集成创建 Dataflows？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#how-do-i-use-the-foundry-integration-to-create-dataflows-in-the-power-bi-service)
*   [如何配置 Power BI® 连接器中未显示的 ODBC 驱动设置？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#how-do-i-configure-additional-odbc-driver-settings-with-the-power-bi-connector)

### 数据传输有大小限制吗？

有。查看[执行引擎](https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/#execution-engines)文档了解 Foundry 对最终结果大小的限制（使用 [Spark 引擎](https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/#spark-engine)时），以及如何通过使用 [Direct Read 引擎](https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/#direct-read-engine)绕过这些限制。

处理大数据集时还可参考：

*   [如何优化 Import 和 DirectQuery 模式的使用？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#how-do-i-optimize-usage-of-the-connector-across-import-and-directquery-modes)
*   [导入慢或因表过大而失败？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#slow-import-or-import-failure-due-to-table-size)

### 如何优化 Import 和 DirectQuery 模式的使用？

连接器提供两种连接模式，在设置数据连接时指定。![Image 1: import-dq](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/power-bi_import_dq.png)

**Import 模式**：选定的表和列被导入到 Power BI®。创建或交互可视化时，Power BI® 使用导入的数据。要查看初始导入或最近刷新后的数据变更，需要手动或通过计划刷新数据。

*   _使用建议_：推荐用于需要快速响应和高交互性的仪表板，基于中小型 Foundry 数据集。大多数情况下 Import 模式是首选，除非数据量很大且无法在仪表板消费层之前在 Foundry 中预筛选。
*   _使用限制_：由于连接器传输数据的大小限制，可能无法导入大型数据集。详见[数据传输有大小限制吗？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#is-there-a-size-limit-on-how-much-data-i-can-transmit)

**DirectQuery 模式**：数据不导入或复制到 Power BI®。创建或交互可视化时，Power BI® 直接查询 Foundry 作为底层数据源，所以你看到的始终是最新数据，还可以将数据转换和筛选推送到 Foundry 层。

*   _使用建议_：推荐用于基于超大数据集的简单低交互仪表板，可以利用 Foundry 的计算引擎动态查询和拉取结果。但性能比 Import 模式慢，因为计算被推送到 Foundry 的分布式计算引擎。建议 DirectQuery 仪表板保持较少的查询。
*   _使用限制_：与 Import 模式一样，返回给 Power BI® 的结果有大小上限。但可以操作 Foundry 中更大的数据集，只要返回的结果在限制范围内。

[了解 Import 和 DirectQuery 的区别 ↗](https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-use-directquery)。

**更广泛的使用建议**

建议尽可能使用 Import 模式。如果数据量大，考虑能否在 Foundry 中先减小数据量，比如筛选不必要的行、删除列、或尽量预聚合。这些预处理可以通过 Foundry 转换或 Contour 完成，并配置为自动构建。也可以将表导入拆分为较小的块，比如按日历年导入不同数据集。

DirectQuery 模式下，建议保持仪表板查询较少、交互简单。这样既能在大数据集上使用 DirectQuery，又能满足用户对性能的期望。

最后，考虑使用[复合模型 ↗](https://docs.microsoft.com/en-us/power-bi/transform-model/desktop-composite-models)实现"两全其美"。复合模型允许报告同时包含 Import 和 DirectQuery 数据连接。例如，配置一个 Import 连接提供预聚合或筛选后的概览和统计数据，快速加载；同时配置一个 DirectQuery 连接支持按需深入分析。

### Foundry 和 Power BI® 之间的访问控制如何工作？

使用 Foundry Power BI® 集成开发的报告会自动遵循开发者在 Foundry 中配置的访问权限。例如，在 Power BI® Desktop 中构建报告的开发人员只能访问他在 Foundry 中有权限的数据集或受限视图。

已发布的报告如果使用数据刷新，会使用 Power BI® Gateway 上配置的数据源凭据，而不是报告消费者的凭据。

更多关于管理网关数据源的信息见 [Microsoft Power BI® 文档中的管理数据源 ↗](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-enterprise-manage-scheduled-refresh)。

### 如何在 Power BI® service 中使用 Foundry 集成？

许多客户使用 [Power BI® service ↗](https://docs.microsoft.com/en-us/power-bi/fundamentals/power-bi-service-overview)在组织中更广泛地发布和分发报告。

要在这些报告中利用 Foundry 集成，需要使用安装了 Foundry 连接器和 ODBC 驱动的 [Power BI® Gateway ↗](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem)。在网关上使用 Foundry 连接类型创建连接时，将 `Authentication Method` 设为 `Key`，并提供在 Foundry 中为服务账户生成的 [token](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/)。网关即可连接 Foundry，供 Power BI® service 中的报告使用。

通过 Power BI® Gateway 使用 Foundry 连接器时，token 认证是唯一支持的方式。Power BI® service 中的 OAuth 认证暂不支持，因为此功能不适用于第三方开发的连接器。如需 OAuth，可以在 [Power BI® Ideas ↗](https://ideas.powerbi.com/ideas/) 提交反馈。

Foundry Power BI® 集成在 Power BI® Gateway 上的工作方式与 Desktop 基本一致。与 Power BI® 管理员确认网关上的安装已完成。

### 如何在 Power BI® service 中使用 Foundry 集成创建 Dataflows？

Foundry Power BI® 集成兼容 Power BI® Dataflows，使用 Power Query Online 编辑器。

开始前，确保你能访问已配置好 Foundry 连接的本地网关。由于 Power BI® service 的一个已知问题，目前不支持在 Dataflows 设置过程中新建网关连接。

创建从 Foundry 拉取数据的 Dataflow 步骤：

1.   在 Power BI® 工作区选择 **New**，然后选择 **Dataflow**。
2.   选择 **Add new tables**。
3.   在 **Choose data source** 页面选择连接器列表中的 **Palantir Foundry**。
4.   在 **Connect to data source** 页面指定 **Base URL**，需与本地数据网关上已配置的连接匹配。如 `https://<subdomain>.palantirfoundry.com/`。可选提供 **Dataset RID** 和 **Branch**。
5.   输入 **Base URL** 后，确保 **Connection** 下拉菜单显示你的本地网关名称。如果没有匹配的网关，检查 **Base URL** 与网关连接中配置的 URL 是否完全一致（包括尾部斜杠）。
6.   选择 **Next** 继续。
7.   在 **Choose data** 页面选择需要的表，然后选择 **Transform data**。
8.   继续使用 Power Query 编辑器创建和保存 Dataflow。

#### 创建 Dataflows 网关连接时的"Unexpected Error"

在 Dataflows 的 **Connect to data source** 页面创建新的本地网关连接时可能会收到以下错误：

```
Unexpected error (Session ID: <UUID>, Region: <REGION>)
```

这是 Power BI® service 的已知问题。解决方法：先在网关上设置好 Foundry 连接，再创建 Dataflow。在 Power BI® service 中，可以在 **Settings > Manage connections and gateways > Connections > New** 管理网关连接。

网关上配置好可用连接后，Dataflows 的 **Connect to data source** 页面会在你提供匹配的 **Base URL** 时自动选择你的网关。

### 如何配置 Power BI® 连接器中未显示的 ODBC 驱动设置？

可以配置 Power BI® 连接器界面中未显示的 ODBC 驱动选项，如代理设置。

安装 ODBC 驱动时会自动创建一个名为 **FoundrySql** 的 Windows System DSN。在此 DSN 上配置的任何额外设置都会应用到 Power BI® 连接器（服务器名和认证选项除外，这些已由 Power BI® 连接器指定）。可以在 Windows ODBC Data Sources 管理程序中正常配置此 DSN。

## 认证 FAQ

*   [什么是 token？为什么 token 认证需要它？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#what-is-a-token-and-why-do-i-need-one-for-token-based-authentication)
*   [为什么 OAuth 认证不行？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#why-is-oauth-authentication-not-working)
*   [如何从 token 认证切换到 OAuth 认证？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#how-do-i-switch-from-token-based-to-oauth-based-authentication)
*   [无法连接？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#unable-to-connect)
*   [从 Power BI® Server 下载后报告空白？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#blank-report-after-downloading-from-power-bi-server)

### 什么是 token？为什么 token 认证需要它？

认证 token 相当于你的私人密码，授权 Power BI® 代表你访问 Foundry 数据。可以在 Account → Settings → Tokens 页面管理现有 token 和创建新 token，详见[生成 token 文档](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/)。

![Image 2: token-img](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/token.png)

### 为什么 OAuth 认证不行？

如果 OAuth 认证时报错，可能是此功能尚未启用。错误信息可能类似下方截图。要使用此功能，需要在 Foundry 中将 Power BI® 启用为第三方应用。[管理第三方应用](https://www.palantir.com/docs/foundry/platform-security-third-party/manage-3pa/)文档详细说明了管理员如何启用。

如果 OAuth 尚未启用，可以继续使用[token 认证方式](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#foundry-token-authentication)。

![Image 3: PowerBI authorization error](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/power-bi_authorization-error.png?width=500)

### 如何从 token 认证切换到 OAuth 认证？

如果之前从 Power BI® 认证过 Foundry，现在想切换到 OAuth，需要先清除 Power BI® 中的现有凭据。

按照[无法连接](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#unable-to-connect)部分的说明清除凭据并重新认证。

### 无法连接

如果收到"Unable to connect"消息，很可能是认证凭据已过期。按以下步骤清除现有凭据并配置新数据源：

1.   在 Power BI® 中进入"File" > "Options and Settings" > "Data Source Settings"
2.   在 Palantir Foundry 连接器上选择"Clear permissions"。（如有多个 Foundry 连接，全部清除。）
3.   [配置新数据源](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#select-foundry-as-your-data-source-in-power-bi)并[重新认证 Foundry](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#authenticate-with-foundry)。如果使用 token 认证，需要生成新 token。

### 从 Power BI® Server 下载后报告空白

可能是认证凭据有问题，或 Power BI® 需要请求运行查询的权限。此时 Power BI® 可能会静默失败，显示空白报告页面且没有"Apply Changes"选项。点击"Edit Queries"看看有没有后续选项。如果没有，联系 Palantir 代表并分享错误信息。

## 数据集 FAQ

*   [为什么在表导航器中看不到我的表？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#why-dont-i-see-my-table-in-the-table-navigator)
*   [导入慢或因表过大而失败？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#slow-import-or-import-failure-due-to-table-size)
*   [数据集的数据刷新不再工作](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#data-refresh-is-no-longer-working-for-a-dataset)

### 为什么在表导航器中看不到我的表？

通过"Get Data" → "Palantir Foundry"选择数据集时，某些你在 Foundry 中有权限的表可能不会显示在文件夹导航器中。这是因为你有表的权限但没有父文件夹结构的权限。

只要你在 Foundry 中有表的权限，仍然可以把它拉入 Power BI® 可视化。使用前一页对话框中的"dataset RID"字段指定。RID 是数据集的唯一标识符，即使移动数据集也保持不变。在 Foundry 中找到目标数据集的"About"页面，点击"see more"复制 RID 值。

更详细的说明见[指南：识别数据集的 RID 或文件路径](https://www.palantir.com/docs/foundry/analytics-connectivity/identify-dataset-rid/)。

### 导入慢或因表过大而失败

表越大导入越慢。根据 Power BI® 订阅，Import 模式可能限制为 1GB。Palantir Foundry 连接器也对导入大小有限制——详见[数据传输有大小限制吗？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#is-there-a-size-limit-on-how-much-data-i-can-transmit)

如果导入因表过大而失败或很慢，参考[如何优化 Import 和 DirectQuery 模式的使用？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#how-do-i-optimize-usage-of-the-connector-across-import-and-directquery-modes)了解大数据集使用技巧。

### 数据集的数据刷新不再工作

如果在 Power BI® 中通过表导航器选择数据集，数据源依赖于数据集在该位置存在。如果数据集在 Foundry 中被重命名或移动，可能导致数据刷新问题，因为 Power BI® 找不到数据集了。

如果预期数据集会移动，建议使用数据集 RID 配置数据源。详见[为什么在表导航器中看不到我的表？](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/#why-dont-i-see-my-table-in-the-table-navigator)了解通过 RID 配置数据源的详情。

_Power BI® 和 Power BI® 标识是 Microsoft 集团公司的商标。_
