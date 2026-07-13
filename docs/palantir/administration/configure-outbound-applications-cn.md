Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/

Markdown Content:
出站应用为管理员提供了一种方式，用于管理 Foundry 中构建的工作流到外部系统的 OAuth 2.0 连接。出站应用在 Control Panel 的组织级别进行管理。

出站应用代表一组配置，使 Foundry 能够作为 OAuth 2.0 _客户端_运行。该应用向另一个可作为 OAuth 2.0 _服务端_运行的系统发起请求。

Foundry 中的出站应用仅支持 [OAuth 2.0 授权码授权 ↗](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1) 类型。要设置 OAuth 2.0 客户端凭据授权，请按照[这些资源](https://www.palantir.com/docs/foundry/data-connection/webhooks-reference/#client-credentials-grant)在 webhook 中手动建立握手流程。

## 创建出站应用

要创建出站应用，首先导航到 Control Panel 中**组织设置**下的**出站应用**。如果你有多个组织的访问权限，请确保选择你要创建出站应用的目标组织。该组织中所有具有 Data Connection 数据源设置权限的用户，都可以选择任意出站应用作为其连接的授权方式。

要查看**出站应用**页面，你需要拥有"管理出站应用"工作流的权限，该权限默认授予 Control Panel 中的 `Organization administrator` 角色。

了解更多关于[配置角色](https://www.palantir.com/docs/foundry/platform-security-management/manage-roles/)的信息。

选择**新建应用**并提供所需的输入来设置出站应用。详细的配置选项如下所列。

### 配置选项

创建出站应用时可以使用以下配置选项。

| 选项 | 是否必填 | 说明 |
| --- | --- | --- |
| 授权页面 URL | 是 | OAuth 2.0 提供商的[授权端点 ↗](https://datatracker.ietf.org/doc/html/rfc6749#section-3.1)。通常该 URL 类似于 `https://oauth2-server.com/authorize`，大多数 SaaS 产品的公开文档中都能找到。 |
| 令牌端点 URL | 是 | OAuth 2.0 提供商的[令牌端点 ↗](https://datatracker.ietf.org/doc/html/rfc6749#section-3.2)。通常该 URL 类似于 `https://oauth2-server.com/token`，大多数 SaaS 产品的公开文档中都能找到。 |
| 出站策略 | 是 | 要连接到 OAuth 2.0 服务端，你必须创建并附加一个出站策略，允许连接到令牌端点 URL。对于 Foundry 网络可直接访问的服务器，使用[直连出站策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#direct-connection-egress-policies)；对于私有网络上的服务器，使用[代理出站策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies)。[出站](https://www.palantir.com/docs/foundry/administration/configure-egress/)按注册进行管理。 |
| 应用名称 | 是 | 该出站应用面向用户的名称。在 Data Connection 中为数据源配置认证时，选择出站应用时可以看到该名称。 |
| 描述 | 否 | 出站应用的描述。 |
| 审批提示 | 是 | 在使用授权码流程时，打开弹窗显示外部 OAuth 2.0 提供商的登录提示之前，会显示此文本。 |
| 客户端 ID | 是 | 来自 OAuth 2.0 提供商的[客户端标识符 ↗](https://datatracker.ietf.org/doc/html/rfc6749#section-2.2)。注意某些外部系统可能使用不同的术语来指代客户端 ID。 |
| 客户端密钥 | 是 | 来自 OAuth 2.0 提供商的[客户端密钥 ↗](https://datatracker.ietf.org/doc/html/rfc6749#section-2.3)。注意某些外部系统可能使用不同的术语来指代客户端密钥。 |
| 作用域 | 是 | 在 OAuth 2.0 服务器上配置的与所提供的客户端 ID 对应的作用域列表。此处输入的列表必须与外部系统管理界面中列出的内容一致。作用域可以留空，表示在向 OAuth 2.0 服务器授权时应提供空的作用域列表。 |
| 访问令牌过期时间 | 否 | 可选的访问令牌过期时间。通常该值由 OAuth 2.0 服务器作为授权码流程的一部分返回。如果服务器提供了访问令牌过期时间，此处输入的任何值都将被忽略。 |
| 启用 PKCE | 否 | 可选开关。启用后，出站应用将使用[证明密钥用于代码交换 ↗](https://datatracker.ietf.org/doc/html/rfc7636)（PKCE），这是授权码授权的扩展，通过额外的安全握手来防止 CSRF 和授权码注入攻击。强烈建议公共客户端使用此设置，部分 OAuth 2.0 服务器也会强制执行。 |

我们建议在设置出站应用时，如果 OAuth 2.0 服务器可以直接从 Foundry 访问，使用[直连](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-direct-connection-policies)。对于云端托管的 Foundry 实例，这意味着该服务器可以通过直接互联网连接访问。

如果 OAuth 2.0 服务器位于私有网络中，你可以使用[代理出站策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies)将流量路由到安装在你网络中的 [Data Connection 代理](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agents)。这样 Foundry 就能像直接可达一样连接到 OAuth 2.0 服务器。

![图片 1：Control Panel 中出站应用可用配置选项的视图。](https://www.palantir.com/docs/resources/foundry/administration/outbound-apps-server-config-cloud.png)

### （旧版）基于自定义 webhook 的 OAuth 2.0 握手

如果 OAuth 2.0 服务器需要非标准的令牌握手，你可以使用自定义 webhook 手动实现 OAuth 2.0 流程。这种方式通过 [REST API](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/) 数据源路由握手请求，使用[代理工作节点](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker)连接到服务器。

![图片 2：Control Panel 中本地部署出站应用可用配置选项的视图。](https://www.palantir.com/docs/resources/foundry/administration/outbound-apps-server-config-on-prem.png)

| 选项 | 是否必填 | 说明 |
| --- | --- | --- |
| 数据源连接 | 是 | 选择一个 [REST API 数据源](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/)，该数据源已配置为使用代理工作节点连接到你网络中的 OAuth 2.0 服务器。 |
| 获取令牌的 webhook | 是 | 一个 webhook，用于调用 OAuth 2.0 服务器的[令牌端点 ↗](https://datatracker.ietf.org/doc/html/rfc6749#section-3.2)以获取令牌。更多信息请参见[下面的部分](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/#token-webhook)。 |
| 刷新令牌的 webhook | 否 | 一个 webhook，用于调用 OAuth 2.0 服务器的[令牌端点 ↗](https://datatracker.ietf.org/doc/html/rfc6749#section-3.2)以刷新令牌。更多信息请参见[下面的部分](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/#refresh-token-webhook)。 |
| 授权页面 URL | 是 | OAuth 2.0 提供商的[授权端点 ↗](https://datatracker.ietf.org/doc/html/rfc6749#section-3.1)。通常该 URL 类似于 `https://oauth2-server.com/authorize`。 |

要设置基于自定义 webhook 的握手：

1.   创建一个 [REST API 数据源](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/)，使其能连接到你的 OAuth 2.0 服务器。例如，你可以用服务器域名和客户端密钥来配置数据源：

![图片 3：一个配置了域名 my-outh-server.com 和一个隐藏的客户端密钥的 REST API 数据源。](https://www.palantir.com/docs/resources/foundry/administration/outbound-apps-on-prem-rest-api-source-config.png)

1.   在该 REST API 数据源上创建一个 webhook，用于调用 OAuth 2.0 服务器的 `/token` 端点。你还可以选择性地创建第二个 webhook 用于刷新流程。

使用以下各节中的说明来创建令牌和刷新令牌 webhook。

#### 令牌 webhook

令牌 webhook 应实现对 OAuth 2.0 服务器上的 `/token` 端点发起请求，在给定 `client_id`、`redirect_uri` 和 `authorization_code` 的情况下获取有效令牌。令牌 webhook 必须具有下面列出的输入和输出参数。了解更多关于 [webhook 参数](https://www.palantir.com/docs/foundry/data-connection/webhooks-reference/#configuring-inputs-and-outputs)的信息。

下面是一个标准 OAuth 2.0 服务器令牌请求的示例请求配置：

![图片 4：一个带有键值对的 OAuth 2.0 服务器令牌请求。](https://www.palantir.com/docs/resources/foundry/administration/outbound-apps-on-prem-rest-api-token-webhook.png)

| 输入参数 | 是否必填 | 类型 |
| --- | --- | --- |
| `client_id` | 是 | String |
| `redirect_uri` | 是 | String |
| `authorization_code` | 是 | String |
| `code_verifier` | 否 | String |

你还必须在 webhook 表单体中将 `grant_type=authorization_code` 设置为其中一个条目。如果出站应用中启用了 **启用 PKCE**，则需要 `code_verifier`。查看你的 OAuth 2.0 服务器文档以了解更多必需的配置。

| 输出参数 | 是否必填 | 类型 | 备注 |
| --- | --- | --- | --- |
| `access_token` | 是 | String |  |
| `scope` | 是 | String |  |
| `refresh_token` | 否 | String | 并非所有 OAuth 2.0 服务器或应用都配置为允许自动刷新令牌。如果未返回刷新令牌，每当原始令牌过期时，都会提示用户重新授权该应用。 |
| `expires_in` | 否 | String | 并非所有 OAuth 2.0 服务器都会返回此参数。如果未提供此参数或未返回值，则使用出站应用中配置的访问令牌过期时间代替。 |

#### 刷新令牌 webhook

创建令牌 webhook 后，你必须使用下面列出的输入和输出参数创建第二个 webhook 用于刷新令牌流程。该 webhook 应向 `/token` 端点发起请求，在给定 `refresh_token` 和 `client_id` 的情况下获取新令牌。

下面是一个标准 OAuth 2.0 服务器刷新请求的示例请求配置：

![图片 5：一个带有键值对的 OAuth 2.0 服务器刷新请求。](https://www.palantir.com/docs/resources/foundry/administration/outbound-apps-on-prem-rest-api-refresh-webhook.png)

| 输入参数 | 是否必填 | 类型 |
| --- | --- | --- |
| `client_id` | 是 | String |
| `refresh_token` | 是 | String |

你还必须在 webhook 表单体中将 `grant_type=refresh_token` 设置为其中一个条目。查看你的 OAuth 2.0 服务器文档以了解更多必需的配置。

可用的输出参数与[令牌 webhook](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/#token-webhook) 的参数相同。

| 输出参数 | 是否必填 | 类型 | 备注 |
| --- | --- | --- | --- |
| `access_token` | 是 | String |  |
| `scope` | 是 | String |  |
| `refresh_token` | 否 | String | 并非所有 OAuth 服务器或应用都配置为允许自动刷新令牌。如果未返回刷新令牌，每当原始令牌过期时，都会提示用户重新授权该应用。 |
| `expires_in` | 否 | String | 并非所有 OAuth 2.0 服务器都会返回此参数。如果未提供此参数或未返回值，则使用出站应用中配置的访问令牌过期时间代替。 |

## 管理出站应用

创建出站应用后，该组织中的所有用户都可以将其用作 [Data Connection](https://www.palantir.com/docs/foundry/data-integration/overview/) 中 [REST API 数据源](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/)的授权方式。拥有管理出站应用权限的管理员可以使用以下选项。

### 删除出站应用

删除出站应用将永久移除所有已授权该应用的用户的存储令牌和刷新令牌。应用配置（包括客户端密钥）也将被永久删除。此操作不可逆。

### 重置出站应用

重置出站应用将永久移除所有已授权该应用的用户的存储令牌和刷新令牌。这实际上会将应用恢复到初始设置后的状态，即尚无用户完成交互式授权流程。下次用户尝试执行需要该出站应用令牌的工作流时，系统将提示重新完成授权流程。

### 启用出站应用

启用出站应用意味着用户可以对该外部系统执行交互式授权流程。禁用应用将阻止任何已存储的令牌和刷新令牌被使用。但这些令牌不会被删除，在应用重新启用后可以再次使用。

之前未授权过该应用的新用户，在出站应用被禁用期间将无法执行交互式授权流程。

新创建的应用默认启用，只有在创建之后才能被禁用。

## 在 Data Connection 中使用出站应用

有关如何在 Functions、Actions、Workshop 和 AIP 聊天机器人中使用出站应用的详细信息，请参见下面的[支持的工作流](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/#supported-workflows)。

创建并启用出站应用后，可以将其用作 [REST API 数据源](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/) 中某个域的认证方式。配置域时，选择 **OAuth 2.0**，然后从下拉菜单中选择所需的出站应用。

![图片 6：REST API 数据源配置的域部分。授权已从下拉菜单设置为 OAuth 2.0。](https://www.palantir.com/docs/resources/foundry/administration/outbound-apps-usage-in-rest-api-source.png)

任何使用配置了 OAuth 2.0 的域的 webhook，都会在用户首次运行时弹出交互式提示。Webhook 最常通过 [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) 中的 [Actions](https://www.palantir.com/docs/foundry/action-types/overview/) 调用；在这种情况下，在 Workshop 中运行 Action 时，用户会看到一个弹窗，显示 OAuth 2.0 服务器的认证页面，提示授权 Foundry 代表他们与该系统交互。

如果配置了令牌刷新流程，除非在外部系统中撤销授权或出站应用被重置，否则用户不太可能再次看到此提示。如果没有配置刷新流程，最终用户的令牌过期时会自动重新授权。令牌通常会在几分钟或几小时内过期，我们鼓励使用刷新流程以获得更好的用户体验。

## 支持的工作流

REST API 数据源配置了出站应用后，OAuth 令牌可在以下 Foundry 功能中使用：

*   [Functions](https://www.palantir.com/docs/foundry/functions/api-calls/#use-oauth-20-with-outbound-applications)：在 Python 和 TypeScript v2 函数中使用源中的 OAuth 令牌，直接从代码中对外部系统进行身份验证。TypeScript v1 函数必须使用 [webhook](https://www.palantir.com/docs/foundry/functions/webhooks/) 代替。
*   [函数支持的 actions](https://www.palantir.com/docs/foundry/action-types/function-actions-overview/)：如果底层函数调用了配置 OAuth 的数据源，会自动传递令牌。
*   [Webhook 副作用](https://www.palantir.com/docs/foundry/action-types/webhooks/)：配置了 OAuth 的 REST API 数据源上的 webhook 会在发出的请求中包含令牌。
*   [Workshop](https://www.palantir.com/docs/foundry/workshop/actions-overview/)：需要 OAuth 令牌的 actions 如果没有有效令牌会触发授权提示，如果用户已经授权则自动运行。从 Workshop 直接调用的函数（例如作为[函数支持的变量](https://www.palantir.com/docs/foundry/workshop/functions-use/#function-backed-variables-in-workshop)或填充小组件内容）无法触发授权提示；要将函数包装在[函数支持的 action](https://www.palantir.com/docs/foundry/action-types/function-actions-overview/) 中，才能在 Workshop 中使用 OAuth 支持的源。
*   [AIP 聊天机器人](https://www.palantir.com/docs/foundry/chatbot-studio/tools/)：调用 OAuth 支持的 action 工具的 agents 使用与其他工作流相同的令牌生命周期。
