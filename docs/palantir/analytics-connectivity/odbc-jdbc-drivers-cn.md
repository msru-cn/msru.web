Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/

Markdown Content:
## Foundry 数据集的 ODBC & JDBC 驱动

Foundry 数据集的 ODBC 和 JDBC 驱动提供只读的 SQL 接口，让客户端应用（如 BI 和 ETL 工具）能访问数据集。用户可以浏览 Foundry 中的项目和数据集，执行 SQL 查询访问表格数据。驱动在服务端使用 [Foundry SQL Server](https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/) 处理和执行 SQL 查询。

### JDBC 还是 ODBC？

如果客户端应用同时支持两种协议，建议使用 JDBC。JDBC 驱动安装配置更简单，数据加载性能更好。

### Foundry SQL Server

驱动依赖 Foundry SQL Server 对 Foundry 数据集处理和执行 SQL 查询。查看 [Foundry SQL Server 架构](https://www.palantir.com/docs/foundry/analytics-connectivity/architecture/)文档了解架构详情和查询性能优化方法。

## 系统要求

### ODBC

| 操作系统 | 要求 |
| --- | --- |
| Windows | * 64 位 * 管理员权限 * 已安装最新 [Microsoft Visual C++ Redistributable](https://docs.microsoft.com/cpp/windows/latest-supported-vc-redist?view=msvc-170) |

### JDBC

| 操作系统 | 要求 |
| --- | --- |
| Windows | * 最低 Java 版本：Java 11 * 最高 Java 版本：Java 15 |
| macOS |
| Linux |

## 设置指南

### ODBC

#### 第一部分：安装 ODBC 驱动

按照[下载：ODBC 驱动](https://www.palantir.com/docs/foundry/analytics-connectivity/downloads/#foundry-datasets-odbc-driver)中的说明运行安装程序。

#### 第二部分：配置数据源名称 (DSN)

要在客户端应用中使用驱动，需要先为 Foundry 环境配置 DSN：

1.   在 **Start** 菜单中搜索 **ODBC**，打开 **ODBC Data Sources** 工具。选择 64 位版本。
2.   在 **User DSN** 或 **System DSN** 标签页点击 **Add...**。
3.   在驱动列表中选择 **FoundrySqlDriver**。
4.   输入以下必要参数：
    1.   **Data Source Name：** 本机上的数据源名称。
    2.   **Server：** Foundry 环境的 URL，如 `https://<SUBDOMAIN>.palantirfoundry.com`。
    3.   **Token：** 从 Foundry **Settings** 页面生成的安全 token。参见[用户生成的 token](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/)文档了解如何获取。更多认证选项见[使用 OAuth 认证](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#use-oauth-to-authenticate)指南。

5.   点击 **Test...** 验证连接，然后点击 **OK** 保存 DSN 配置。

更多配置参数和构建连接 URL 的说明见[配置参数](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#configuration-parameters)。

#### 第三部分：在客户端应用中配置 DSN

DSN 创建好后，就可以在支持 ODBC 源的客户端应用中引用它。参考客户端应用的 ODBC 源文档。以下是一些常用的 Foundry 集成设置指南：

*   [Excel](https://www.palantir.com/docs/foundry/analytics-connectivity/excel/)
*   [Power BI](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-overview/)
*   [Microsoft Report Builder](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-overview/)

#### （可选）第四部分：执行 SQL 查询

如果客户端应用支持，测试一个返回 Foundry 数据集行的 SQL 查询：

客户端应用也可能允许浏览项目和选择数据集来访问数据。

### JDBC

#### 第一部分：安装 JDBC 驱动

下载[下载页面](https://www.palantir.com/docs/foundry/analytics-connectivity/downloads/)上的 JDBC 驱动（.jar 文件）。下载后，按客户端应用文档中配置 JDBC 连接的说明放到相应位置。

#### 第二部分：构建 JDBC 连接字符串

JDBC 连接字符串格式：

```
jdbc:foundrysql://<FOUNDRY_HOSTNAME>?Password=<TOKEN>
```

*   `FOUNDRY_HOSTNAME` 是 Foundry 环境的主机名（如 `subdomain.palantirfoundry.com`）。
*   `TOKEN` 是从 Foundry **Settings** 页面生成的安全 token。参见[用户生成的 token](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/)文档。更多认证选项见[使用 OAuth 认证](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#use-oauth-to-authenticate)指南。

可在连接字符串末尾追加 `&OptionalParam=<VALUE>` 指定可选参数。完整参数列表见[配置参数](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#configuration-parameters)。

如果 JDBC 客户端要求显式指定驱动类，使用 `com.palantir.foundry.sql.jdbc.FoundryJdbcDriver`。

#### （可选）第三部分：执行 SQL 查询

如果客户端应用支持，测试一个返回 Foundry 数据集行的 SQL 查询：

客户端应用也可能允许浏览项目和选择数据集来访问数据。

## 参考

### 配置参数

ODBC 和 JDBC 的可用配置参数相同。每个驱动可以通过两种方式配置：在客户端应用内使用连接字符串，或在客户端应用外配置：

|  | 使用连接字符串 | 客户端应用外配置 |
| --- | --- | --- |
| ODBC | `Driver=FoundrySqlDriver;BaseUrl=<FOUNDRY_HOSTNAME>;Pwd=<TOKEN>;OptionalParamOne=ABC;OptionalParamTwo=XYZ` | 使用 Windows ODBC Data Sources 工具配置 DSN。见[第二部分](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#part-2-configure-a-data-source-name-dsn-configuration)。 |
| JDBC | `jdbc:foundrysql://<FOUNDRY_HOSTNAME>?Password=<TOKEN>&OptionalParamOne=ABC&OptionalParamTwo=XYZ` | 使用 `foundry.ini` 配置文件。见[使用 foundry.ini 配置 JDBC 驱动](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#configure-the-jdbc-driver-using-a-foundryini-config-file)。 |

#### 参数参考

| 参数 | 连接字符串键 | 必填 | 说明 |
| --- | --- | --- | --- |
| Foundry URL | ODBC `BaseUrl` / JDBC N/A | 是 | Foundry URL，如 `https://<SUBDOMAIN>.palantirfoundry.com` |
| 认证 Token | ODBC `Pwd` / JDBC `Password` | 是 | [通过 Foundry UI 生成](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/)或通过 [OAuth 认证流程](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#use-oauth-to-authenticate)获取的认证 token。 |
| 数据集分支 | `Branch` | 否 | 查询数据集使用的分支。不设置则默认 `master`。 |
| 项目/Catalog | `Catalog` | 否 | 将驱动显示的表限制在单个项目内。设为完整项目路径，如 `/MyOrg/MyProject`。可解决某些应用中的表浏览问题。 |
| 认证方式 | `AuthMethod` | 否 | 连接使用的认证方式。可选值：`Token`（默认）、`OauthFlow` 或 `ClientCredentials`。使用 OAuth 认证参见[使用 OAuth 认证](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#use-oauth-to-authenticate)。 |
| OAuth 客户端 ID | `OauthClientId` | 否 | 在 Foundry 中注册并启用的第三方应用的客户端 ID。`AuthMethod` 设为 `OauthFlow` 或 `ClientCredentials` 时必填。也可在应用的用户名字段中设置。 |
| OAuth 客户端密钥 | `OauthClientSecret` | 否 | 在 Foundry 中注册并启用的第三方应用的客户端密钥。`AuthMethod` 设为 `ClientCredentials` 时必填。也可在应用的密码字段中设置。 |
| 代理主机 | `ProxyHost` | 否 | 访问 Foundry 所需的代理主机（如有需要）。格式为 `myproxy.example.com`，不要加 `http` 前缀。Windows 上驱动会自动使用系统默认代理，可能不需要此参数。 |
| 代理端口 | `ProxyPort` | 否 | 代理端口。设置了代理主机时必填。 |
| 代理用户名 | `ProxyUsername` | 否 | 代理用户名（如果代理需要认证）。仅支持 HTTP 基本认证。 |
| 代理密码 | `ProxyPassword` | 否 | 代理密码。设置了代理用户名时必填。 |
| 代理自动检测 | `EnableProxyAutoDetect` | 否 | 是否自动加载操作系统配置的代理。可选值：`true`（默认）或 `false`。如果需要凭据仍需手动指定。设为 `false` 可禁用并使用直连。 |
| SSL 信任库路径 | `TrustStorePath` | 否 | 自定义 SSL 证书信任库路径，`.pem` 格式。仅在 Foundry 证书不在操作系统默认信任库中时需要。 |
| SQL 方言 | `Dialect` | 否 | 连接使用的 [SQL 方言](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#sql-dialects)。可选值：`ODBC`（默认）、`ANSI` 或 `SPARK`。 |
| UTC 时间戳 | ODBC `UtcTimestamps` / JDBC N/A | 否 | 时间戳是否以 UTC 返回。可选值：`true` 或 `false`（默认）。使用 BI 工具发布报告时，此设置仅适用于本地 DSN，发布后可能不同。仅影响 ODBC 时间戳，JDBC 时间戳始终以 UTC 返回。 |

### 类型处理

下表展示 Foundry 类型如何映射到 ODBC 和 JDBC 类型。

| Foundry 类型 | ODBC 类型 | JDBC 类型 |
| --- | --- | --- |
| Array | 编码为 JSON，以字符串返回 (`SQL_WVARCHAR`)。 | 同 ODBC |
| Binary | 编码为十六进制字符串 (`SQL_WVARCHAR`)，前缀 `0x`。 | `byte[]` |
| Boolean | `SQL_BIT` | `boolean` |
| Byte | `SQL_TINYINT` | `byte` |
| Date | `SQL_DATE` | `java.sql.Date` |
| Decimal | `SQL_DECIMAL` | `java.math.BigDecimal` |
| Double | `SQL_DOUBLE` | `double` |
| Float | `SQL_DOUBLE` | `float` |
| Integer | `SQL_INTEGER` | `int` |
| Long | `SQL_BIGINT` | `long` |
| Map | 编码为 JSON，以字符串返回 (`SQL_WVARCHAR`)。 | 同 ODBC |
| Short | `SQL_SMALLINT` | `short` |
| String | `SQL_WVARCHAR`。最大字符串列长度可通过 `StringColumnLength` 属性设置。 | `java.lang.String` |
| Struct | 编码为 JSON，以字符串返回 (`SQL_WVARCHAR`)。 | 同 ODBC |
| Timestamp | `SQL_TIMESTAMP`。默认转换为系统本地时区。可通过 `UtcTimestamps` 属性更改。 | `java.sql.Timestamp`，UTC 时区。`UtcTimestamps` 属性无效。 |

### SQL 方言

下表概述了各 SQL 方言的部分语法和特性（见[配置参数](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#configuration-parameters)中的 `Dialect` 参数）。

|  | Spark（推荐） | ANSI、ODBC |
| --- | --- | --- |
| 引用标识符（列名、表名） | 反引号：`` SELECT * FROM `/Space/Project/...` `` | 双引号：`SELECT * FROM "/Space/Project/..."` |
| 引用字符串字面量 | 单引号或双引号：`WHERE column = 'value' OR column = "value"` | 单引号：`WHERE column = 'value'` |
| 日期字面量 | `SELECT DATE 'yyyy-mm-dd'` | 同 Spark |
| 当前日期 | `SELECT CURRENT_DATE` | 同 Spark |
| **更多参考** | [Spark SQL 指南：SQL Reference ↗](https://spark.apache.org/docs/latest/sql-ref.html) | 支持的函数：[ODBC Reference ↗](https://learn.microsoft.com/sql/odbc/reference/appendixes/appendix-e-scalar-functions?view=sql-server-ver16) |

## 使用指南

### 使用 SQL 查询 Foundry 数据集

数据集可以通过路径或 RID 在 SQL 查询中引用。SQL 语法取决于连接设置的方言（见[配置参数](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#configuration-parameters)）。

#### SPARK 方言

```
-- 基本 SELECT
SELECT * FROM `/Path/To/Dataset`

-- 使用 WHERE 子句筛选
SELECT * FROM `/Path/To/Dataset`
WHERE years < 13 AND category = 'Z';

-- 使用 JOIN
SELECT *
FROM `/Path/To/Dataset_A` a
JOIN `/Path/To/Dataset_B` b
    ON a.id = b.fk_id;
```

#### ODBC & ANSI 方言

```
-- 基本 SELECT
SELECT * FROM "/Path/To/Dataset";

-- 使用 WHERE 子句筛选
SELECT * FROM "/Path/To/Dataset"
WHERE years < 13 AND category = 'Z';

-- 使用 JOIN
SELECT *
FROM "/Path/To/Dataset_A" a
JOIN "/Path/To/Dataset_B" b
    ON a.id = b.fk_id;
```

使用数据集标识符的详细说明见[指南：识别数据集的 RID 或文件路径](https://www.palantir.com/docs/foundry/analytics-connectivity/identify-dataset-rid/)。

### 使用 OAuth 认证

除了手动生成绑定到单个 Foundry 账户的认证 token，ODBC & JDBC 驱动还支持 OAuth 2.0 流程：

*   **[个人用户](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#individual-users-odbc-on-windows-only)：** 驱动在浏览器中打开登录提示让你认证。
*   [**服务用户**](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#service-users)：驱动以在 Foundry 注册的第三方应用关联的服务用户身份连接。
*   [**外部应用（开发者）**](https://www.palantir.com/docs/foundry/analytics-connectivity/odbc-jdbc-drivers/#external-applications-for-developers)：第三方应用集成 Foundry OAuth 系统，代表用户获取 token。

建议尽可能使用 OAuth 方式，比 token 更安全，也支持共享嵌入式连接字符串而无需暴露个人 token。

#### 个人用户（仅限 Windows ODBC）

ODBC 驱动在 Windows 上支持自动 OAuth 登录流程。仅支持桌面应用，不支持通过浏览器访问的应用。

设置步骤：

1.   _（由 Foundry 管理员完成）_ 在 Foundry 中注册[第三方应用](https://www.palantir.com/docs/foundry/platform-security-third-party/register-3pa/)，配置如下：
    1.   **Client type：** 推荐 **Public client**；如需要也支持 **Confidential client**。
    2.   **Authorization grant types：** 启用 **Authorization code grant**，重定向 URL 设为 `http://127.0.0.1/foundrydriver/oauthredirect`。
    3.   确保应用已 **Registered** 并 **Enabled**。
    4.   从应用详情页复制 **Client ID**，分享给需要配置 ODBC 连接的用户。

2.   收到 **Client ID** 后，设置以下 ODBC 连接参数：
    1.   `AuthMethod` = `OauthFlow`
    2.   `OauthClientId` = `<YOUR_CLIENT_ID>`

    也可以将 **Client ID** 设到应用的用户名字段中代替 `OauthClientId`。`AuthMethod` 仍须设置。

3.   （可选）如果在 Windows ODBC Administrator 中配置，可以选择 **Test** 触发登录提示并验证。

下次在客户端应用中使用驱动时，会在浏览器中提示登录 Foundry。之后不需要每次登录，偶尔可能会再次提示。

#### 服务用户

对于不关联个人用户的工作流（如定时刷新仪表板数据），建议使用基于 OAuth 的服务用户，利用[第三方应用](https://www.palantir.com/docs/foundry/platform-security-third-party/register-3pa/)的 OAuth Client Credentials 授权类型。驱动使用长期有效的 client ID/secret 对认证，比手动创建的服务账户更方便管理。

设置步骤：

1.   _（由 Foundry 管理员完成）_ 在 Foundry 中注册[第三方应用](https://www.palantir.com/docs/foundry/platform-security-third-party/register-3pa/)：
    1.   **Client type：** 选择 **Confidential client**。
    2.   **Authorization grant types：** 启用 **Client credentials grant**，务必安全保存 **Client ID** 和 **Client Secret**。
    3.   确保应用已 **Registered** 并 **Enabled**。
    4.   确保生成的服务用户有权限访问需要通过驱动访问的数据集。服务用户列在 **Client credentials grant** 详情面板中。

2.   配置驱动时设置以下参数：
    1.   `AuthMethod` = `ClientCredentials`
    2.   `OauthClientId` = `<YOUR_CLIENT_ID>`
    3.   `OauthClientSecret` = `<YOUR_CLIENT_SECRET>`

    也可以将 **Client ID** 和 **Client Secret** 设到应用的用户名和密码字段中。`AuthMethod` 仍须设置。

驱动将以 OAuth 应用的服务用户身份连接 Foundry。

#### 外部应用（开发者）

应用开发者可以将 ODBC 和 JDBC 驱动集成到应用中，运行自己的 OAuth 客户端来管理登录流程。可以完全控制登录流程，包括将用户重定向到 Foundry 认证、处理认证授权响应。参见[为 Foundry 编写 OAuth2 客户端](https://www.palantir.com/docs/foundry/platform-security-third-party/writing-oauth2-clients/#authorization-code-grant)文档了解如何代表用户获取 access token。

应用获取到用户的 access token 后，可以通过标准密码属性传给驱动：

*   ODBC `Pwd` / JDBC `Password` = `<ACCESS_TOKEN_OBTAINED_FROM_TOKEN_ENDPOINT>`

### 在 ODBC 驱动中启用日志

如需启用驱动日志排查问题，按以下步骤操作。可能需要管理员权限。

1.   创建一个文件夹存放日志，如 `My Documents\Foundry Driver logs`。
2.   打开 Windows **ODBC Data Sources** 工具（搜索"ODBC"）。选择 64 位版本。
3.   打开 **System DSN** 标签页，选择 **FoundrySql** 数据源，点击 **Configure**。选哪个数据源都行，日志设置对所有使用 Foundry 驱动的数据源生效。
4.   在配置窗口中选择 **Logging Options**。
5.   日志级别设为 **DEBUG**，日志路径设为前面创建的文件夹。
6.   点击 **OK** 保存。

重启客户端应用，执行需要排查的操作。日志会出现在你选择的文件夹中。如需 Palantir 或其他团队支持，可以将文件夹压缩为 zip 分享。

排查完成后，回到 **ODBC Data Sources** 工具，将日志级别设为 `OFF` 关闭日志。建议关闭以提升性能。

### 在 JDBC 驱动中启用日志

JDBC 驱动会自动发现 Java 应用在 classpath 上提供的 SLF4J 日志记录器。具体来说，应用应提供 `org.slf4j.impl.StaticLoggerBinder` 和 `org.slf4j.impl.StaticMDCBinder` 类的实现。可以通过添加 `slf4j-simple`（1.X 版本）作为项目依赖来使用默认实现。

如果未配置 SLF4J 日志记录器，驱动首次加载时会打印以下信息：

```
SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
SLF4J: Failed to load class "org.slf4j.impl.StaticMDCBinder".
SLF4J: Defaulting to no-operation MDCAdapter implementation.
SLF4J: See http://www.slf4j.org/codes.html#no_static_mdc_binder for further details.
```

### 使用 `foundry.ini` 配置文件配置 JDBC 驱动

JDBC 驱动除了连接字符串外，还可以通过配置文件配置。在 JDBC .jar 文件同目录下创建 `foundry.ini` 文件。

.ini 文件分为两个部分：`low-priority` 和 `high-priority`。`low-priority` 中的属性优先级低于连接字符串——同名属性以连接字符串为准。`high-priority` 中的属性优先级高于连接字符串。这在报告从开发机发布到服务器时很有用，可以让服务器属性覆盖开发属性。

`foundry.ini` 示例：

```
[high-priority]
proxyHost=myproxy.abc
proxyPort=1234

[low-priority]
branch=production-branch
```

### 在 Java 16 及以上版本使用 JDBC 驱动

JDBC 驱动默认最高支持 Java 15。要在 Java 16 及以上版本使用，需要在应用中设置 `--add-opens` Java 运行时选项为 `java.base/java.nio=org.apache.arrow.memory.core,ALL-UNNAMED`。

#### 示例：Java 命令

#### 示例：环境变量

某些情况下，在 `_JAVA_OPTIONS` 环境变量中指定更方便，某些 Java 环境会自动检测和应用。在 Unix 系统上可以用 `export` 命令配置：

```
export _JAVA_OPTIONS="--add-opens=java.base/java.nio=org.apache.arrow.memory.core,ALL-UNNAMED"
```
