Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-getting-started/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-getting-started/#getting-started)入门

本指南介绍如何在 Qlik Sense 中认证 Foundry 并开始加载数据集。

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-getting-started/#connect-to-foundry)连接 Foundry

*   准备好 Foundry 访问 [token](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/) 用于认证。
*   需要管理员创建的 Foundry DSN 名称。
*   在 Qlik Sense 中打开数据管理器，点击图标创建新连接。
*   选择 `OLE DB` 作为数据源。
*   选择 `Microsoft OLE DB Provider for ODBC Drivers` 作为提供程序。
*   数据源输入 `<Foundry_DSN>;PWD=<Token>`，其中 `<Foundry_DSN>` 是管理员创建的 DSN 名称，`<Token>` 是你的 Foundry token。例如：`Foundry;PWD=eyJwbG50ci...`
*   选择 `Specific user name and password`，但留空。
*   给连接取个合适的名称。（Qlik 可能默认把 token 放在了名称里，记得删掉！）
*   测试连接确认没问题，然后点击 create 打开表浏览器。

Qlik Sense 目前对"password"字段的最大长度有限制，短于 Foundry token 的长度。所以把 token 放在数据源字符串中而不是密码字段。

![Image 4: Qlik Foundry connection](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/qlik_qlik-sense-new-connection.png?width=500)
### [](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-getting-started/#loading-datasets)加载数据集

创建连接后会打开表浏览器。也可以通过选择之前创建的连接打开。先选择包含目标数据集的 Foundry 项目（这里称为"database"）。

然后列出项目中的表，选择要导入的。

![Image 5: Qlik Foundry dataset preview](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/qlik_qlik-sense-table-preview.png?width=500)
### [](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-getting-started/#writing-sql-queries)编写 SQL 查询

熟悉 SQL 的话，可以在 Qlik Sense 中编写自己的 SQL 查询。这对于筛选和聚合大数据集很有用，只导入较小的转换后数据到 Qlik。

创建连接后，打开数据加载编辑器创建新脚本。然后像下图一样编写 SQL 查询。数据集可以用路径或 RID 引用，用双引号包裹。

更多 "LIB_CONNECT" 语法文档参见 [Qlik 文档](https://help.qlik.com/en-US/sense/February2021/Subsystems/Hub/Content/Sense_Hub/Scripting/ScriptRegularStatements/CONNECT.htm)。

![Image 6: Qlik Foundry query](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/qlik_qlik-sense-sql-query.png?width=500)
要访问数据集的特定分支，使用以下语法：

Copied!

```sql
1SELECT * FROM "branch"."dataset_path"
```

[← 上一页 服务器设置](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-setup/)

[下一页 MicroStrategy →](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

不出售或共享我的个人信息
