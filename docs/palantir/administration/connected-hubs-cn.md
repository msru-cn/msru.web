Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/connected-hubs/

Markdown Content:
## Connected hubs

Control Panel 中的 **Connected hubs** 扩展使你能够在 Foundry enrollment 和 [Apollo](https://www.palantir.com/docs/apollo/core/introduction/) hubs 之间建立认证连接。连接建立后，你可以将 [Marketplace](https://www.palantir.com/docs/foundry/marketplace/overview/) stores 添加到发布白名单，使这些 stores 中的新产品发布自动发布到连接的 Apollo hub。

这实现了 Marketplace 产品的跨网络发布：用户可以在自己的数据之上构建产品，发布到他们控制的 Apollo hub，并将这些产品安装到其他 Foundry 环境中，无需任何 Palantir 特定的权限。

单个 Marketplace stores 可以连接到多个 Apollo hubs，每个 hub 可以接收来自多个 stores 的产品。

## 前提条件

要访问 Control Panel 中的 **Connected hubs** 扩展，你必须具有 **Enrollment administrator** 角色，在 **Enrollment permissions** 扩展中授予。更多详情，请参阅[权限](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/)。

## 连接 Apollo hub

在连接 Apollo hub 之前，请确保以下设置已完成：

1.   **网络连接：** Apollo hub 必须允许来自你的 Foundry enrollment 的入站流量。配置方法：

a. 在你的 Foundry enrollment 的 **Control Panel** 中，导航到 **[Network egress](https://www.palantir.com/docs/foundry/administration/configure-egress/)** 扩展并选择 **What IPs do connections from Foundry come from?** 复制 CIDRs。

b. 在 Apollo hub 的 **Control Panel** 中，导航到 **[Network ingress](https://www.palantir.com/docs/foundry/administration/configure-ingress/)** 扩展并添加这些 CIDRs。

2.   **第三方应用凭证：** 在 Apollo hub 上创建你的 Foundry enrollment 用于认证的凭证：

a. 在 Apollo hub 的 **Control Panel** 中，导航到 **[Third-party applications](https://www.palantir.com/docs/foundry/platform-security-third-party/third-party-apps-overview/)** 扩展。

b. 创建一个新应用并选择 **Confidential client**，然后选择 **Client credentials grant**。

c. 启用应用并开启 **Organization level consent**。

设置完成后，在 Control Panel 中连接 hub：

1.   导航到 **Control Panel** 并从 **Enrollment settings** 下的侧面板选择 **Connected hubs**。
2.   选择 **Add**。

![Image 1: Connected hubs 扩展显示 Add 按钮。](https://www.palantir.com/docs/resources/foundry/administration/connected-hubs-add.png)

1.   提供以下信息：

| 字段 | 描述 |
| --- | --- |
| Apollo hub URL | 要连接的 Apollo hub 的 URL。 |
| Apollo Space ID | 与 hub 关联的 Apollo space 的标识符。此值区分大小写。 |
| Client ID | 在 Apollo hub 上创建第三方应用时生成的 client ID。 |
| Client secret | 在 Apollo hub 上创建第三方应用时生成的 client secret。 |

1.   选择 **Submit** 以建立连接。

连接保存后，扩展将显示连接状态，指示认证是否有效。

## 验证 hub 连接

连接 Apollo hub 后，**Connected hubs** 扩展将显示每个连接的当前状态。使用此功能验证认证凭证是否有效以及 hub 是否可访问。

![Image 2: 显示有效连接状态的已连接 hub。](https://www.palantir.com/docs/resources/foundry/administration/connected-hubs-status.png)

## 将产品发布到已连接的 Apollo hub

要将 Marketplace 产品发布到已连接的 Apollo hub，请确保在 Apollo hub 上完成以下额外设置：

1.   **Apollo hub 权限：** 将第三方应用用户添加到具有以下[权限](https://www.palantir.com/docs/apollo/core/authorization/#authorization-via-roles)的团队（或创建新团队）：
    *   **Artifacts：** Creator, Viewer
    *   **Products：** Release Creator, Creator, Viewer

### 将 Marketplace stores 添加到发布白名单

hub 权限配置完成后，你可以将 Marketplace stores 添加到该 hub 的发布白名单。

1.   选择你要配置的已连接 hub。
2.   选择 **Configure** 或齿轮图标。
3.   将 Marketplace store 添加到白名单。

![Image 3: 已连接 Apollo hub 的发布白名单。](https://www.palantir.com/docs/resources/foundry/administration/connected-hubs-whitelist.png)

当 Marketplace store 在发布白名单中时，在该 store 中创建新版本将自动发布到该 store 配置的所有 Apollo hubs。只有使用 **[strict folder tracking](https://www.palantir.com/docs/foundry/foundry-devops/folder-tracking/)** 且配置了 **[Maven coordinate](https://www.palantir.com/docs/foundry/foundry-devops/manage-products/#configure-a-maven-coordinate)** 的产品才会成功发布；不满足这些要求的产品不会阻止其他产品的发布。

### 发布工作流

一旦 store 在白名单中且配置正确：

1.   在 DevOps 中，为白名单 store 中的产品创建发布。
2.   产品自动发布到该 store 被白名单的所有已连接 Apollo hubs。

## 从已连接的 Apollo hub 安装产品

要从 Apollo 安装 Foundry Products，首先确保你有到相应 hub 的有效连接，并附加要从中安装的 [Apollo environment](https://www.palantir.com/docs/apollo/core/environments/) 的环境 ID。然后联系 Palantir Support 以启用从已连接 hubs 安装第三方 Foundry Products。

设置完成后，将 Foundry Products 安装到附加的 Apollo environment 将导致这些产品被导入到你的 enrollment 可见的 remote stores。可以在 [remote Marketplace stores](https://www.palantir.com/docs/foundry/administration/configure-remote-marketplace-stores/) 页面设置更细粒度的权限。
