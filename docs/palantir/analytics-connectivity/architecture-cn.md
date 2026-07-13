Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/#architecture)架构

本文档介绍原始 Spark 和 Direct Read SQL 引擎的架构。Foundry 正在迁移到 [Furnace](https://www.palantir.com/docs/foundry/sql-warehousing/furnace/)——下一代 SQL 引擎，性能、灵活性和兼容性都有显著提升。迁移是自动的，现有工作流无需任何改动。

外部 SQL 连接和本节中的 BI 工具集成由 Foundry SQL Server 服务驱动。该服务为针对 Foundry 数据集的只读查询提供轻量级的 SQL 会话和语句管理。Palantir 提供 JDBC 和 ODBC 驱动，通过开放标准促进客户端与该服务的交互，并为某些第三方平台提供基于这些驱动的插件实现。

## [](https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/#supported-sql-dialects)支持的 SQL 方言

支持 `ANSI`、`ODBC` 和 `SparkSQL` 方言。

注意，这些方言仅支持只读功能。

## [](https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/#execution-engines)执行引擎

Foundry SQL Server 会根据查询复杂度自动选择执行引擎。各引擎在整体性能、结果大小限制和支持的查询复杂度方面各有权衡。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/#spark-engine)Spark 引擎

默认执行引擎，基于 Spark SQL。支持完整的 SQL 计算功能，如聚合、join、排序、筛选等。使用该引擎的查询在数据规模上有限制，因为结果需要在传递给客户端应用前收集到 Spark driver 的内存中。限制取决于结果的行数和字节数。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/#direct-read-engine)Direct Read 引擎

在可能的情况下，Foundry SQL Server 会使用 Direct Read 引擎执行查询。当查询不需要 SQL 计算时，会绕过 Spark SQL，直接从数据集的底层文件流式读取记录。Direct Read 查询不受全量 SQL 计算那样的规模限制。

满足以下条件的查询可以使用 Direct Read：

1.   在数据集上执行。目前不支持[视图](https://www.palantir.com/docs/foundry/data-integration/views/)。
2.   数据集文件为支持的格式。目前 Direct Read 支持的格式有 Parquet、CSV、Avro 和 Soho。
3.   查询不需要 SQL 计算。包含 aggregate、filter、join 和 order by 的查询不能使用 Direct Read。
4.   查询未选择 Direct Read 不支持的列类型。`array`、`map` 和 `struct` 类型不支持 Direct Read。

Direct Read 查询区分大小写。

## [](https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/#caveats)注意事项

*   此功能用于支持 Foundry 平台之外的客户端，如 Power BI、Tableau 或其他下游应用。Foundry 平台内基于 SQL 的转换请使用 [SQL Transforms](https://www.palantir.com/docs/foundry/code-workbook/workbooks-languages/#introduction-to-sql)。
*   Foundry SQL Server 的架构已针对中等数据规模的临时交互查询做了优化。

[← 上一页 概述](https://www.palantir.com/docs/foundry/analytics-connectivity/overview/)

[下一页 Power BI® / 概述 →](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

不出售或共享我的个人信息
