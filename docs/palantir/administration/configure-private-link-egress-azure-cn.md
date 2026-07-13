Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-azure/

Markdown Content:
## 配置 Azure 私有链接出站

Beta

私有链接出站处于 [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) 开发阶段，在你的注册中可能尚不可用。功能在活跃开发期间可能会发生变化。

本页面介绍如何为托管在 Azure 上的 Palantir 平台配置和管理私有链接出站，以连接到托管在 Azure 中的客户服务，底层由 [Azure Private Link ↗](https://learn.microsoft.com/en-us/azure/private-link/private-link-overview) 提供支持。

私有链接出站支持到 Azure 服务、部署在 Azure 上的用户自有资源以及部署在 Azure 上的第三方 API 的私有出站。

## 配置私有链接

导航到 Control Panel 中**网络出站**页面的**私有链接**标签页来管理私有链接。

![图片 1：Control Panel 中在 Azure 上管理私有链接的页面。](https://www.palantir.com/docs/resources/foundry/administration/private-link-overview-azure.png)

要成功创建私有链接连接：

1.   [为目标资源创建私有链接服务](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-azure/#create-a-private-link-service-for-your-target-resource)。
2.   [允许 Palantir 平台访问目标资源](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-azure/#allow-the-palantir-platform-to-access-the-target-resource)。
3.   [提供目标资源详情](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-azure/#provide-the-target-resource-details)。
4.   [创建网络出站策略](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-azure/#create-private-link-egress-policies)。

### 为目标资源创建私有链接服务

#### 支持私有端点的 Azure 服务

许多 Azure 服务原生支持私有端点，允许你通过私有链接连接到它们，无需创建自定义私有链接服务。支持私有端点的 Azure 服务的完整列表可以在 [Azure 文档 ↗](https://learn.microsoft.com/en-us/azure/private-link/availability) 中找到。

对于这些服务，Azure 会自动提供必要的私有链接服务配置，你只需要创建私有端点连接。

### 允许 Palantir 平台访问目标资源

要让 Palantir 平台能够创建到你 Azure 资源的私有端点连接，你必须配置可见性，并可选地配置自动审批设置。

#### 对于自定义私有链接服务

对于自定义[私有链接服务 ↗](https://learn.microsoft.com/en-us/azure/private-link/private-link-service-overview)，请按以下步骤操作：

1.   在 **Control Panel > Network egress > Private links** 中找到 Palantir 平台的 Azure 订阅 ID。

![图片 2：显示 Palantir 平台 Azure 订阅的 Control Panel 提示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-account-callout-azure.png) 
2.   将 Palantir 订阅 ID 添加到对你的私有链接服务具有可见性的订阅列表中。这样 Palantir 平台就可以请求访问该服务。

3.   可选地，为 Palantir 订阅 ID 启用自动审批，以自动批准连接请求，无需手动审批。

#### 对于 Azure PaaS 

对于大多数 Azure PaaS 服务，如 Azure Storage、Azure SQL Database、Azure Key Vault、Cosmos DB 等，默认行为如下：

*   任何知道其资源 ID 或名称的人都可以看到该资源。
*   在其订阅中拥有足够 Azure 权限的任何人都可以尝试创建到你的资源的私有端点。
*   这会触发手动审批工作流，你需要接受或拒绝连接请求。

自动审批配置因 Azure 服务而异。某些服务支持预批准订阅，而其他服务则需要对每个连接请求进行手动审批。请参阅特定服务的 Azure 文档以获取详细说明。

### 提供目标资源详情

要在 Control Panel 中创建私有链接，你需要要连接的目标资源的 Azure 资源 ID。

1.   导航到 **Control Panel > Network egress > Private links** 并选择**新建私有链接**。
2.   输入你的 Azure 资源的**资源 ID**。资源 ID 是到资源的完整 Azure Resource Manager 路径。
3.   可选地，如果要连接到目标资源的特定子资源（例如 Azure Storage 的 `blob` 或 Azure SQL Database 的 `sqlServer`），请指定**子资源**。

#### 标准私有链接

标准私有链接是连接大多数 Azure 资源和自定义私有链接服务的默认配置。对 Azure SQL Database、Azure Key Vault、Azure Cosmos DB、自定义私有链接服务和其他 Azure PaaS 服务使用标准私有链接。创建标准私有链接时，你需要提供资源 ID 并可选地指定子资源。

![图片 3：在 Azure 上创建标准私有链接的 Control Panel 对话框。](https://www.palantir.com/docs/resources/foundry/administration/private-link-create-normal-azure.png)

**高级设置：**

*   **DNS 区域：** 用于名称解析的私有 DNS 区域（例如 `privatelink.blob.core.windows.net`）。如果指定了 DNS 记录则为必填。
*   **DNS 记录：** 可选地为私有链接指定自定义 DNS 记录。如果添加了 DNS 记录，还必须指定 DNS 区域。

标准私有链接的 DNS 配置是可选的。如果未指定，则必须直接使用 Azure 生成的私有端点 IP 地址。

#### 存储私有链接

存储私有链接专门用于 Azure Storage 账户（资源 ID 中包含 `/Microsoft.Storage/storageAccounts/` 的资源）。与标准私有链接不同，存储私有链接会自动定义 DNS 配置来处理 Azure 存储资源的网络边缘情况。系统会以 `{storage-account-name}.privatelink.{sub-resource}.core.windows.net` 格式生成所需的 DNS 区域和记录。

![图片 4：在 Azure 上创建存储私有链接的 Control Panel 对话框。](https://www.palantir.com/docs/resources/foundry/administration/private-link-create-storage-azure.png)

**存储私有链接的重要说明：**

*   DNS 配置由系统自动管理，无法更改。
*   系统会为存储账户的私有端点创建适当的 DNS 记录。
*   必须根据你要访问的存储服务指定子资源（blob、file、table、queue、dfs）。

提供上述详情后，选择**创建**。

私有链接可能具有以下状态：

*   **创建中：** 私有链接创建已开始。
*   **创建云资源中：** 正在预置 Azure Private Endpoint 及相关云资源。
*   **等待云资源：** 等待 Azure 完成 Private Endpoint 的预置。
*   **等待接受：** 私有链接正在等待服务提供商接受（适用于某些 Azure 服务）。
*   **就绪：** 私有链接已成功创建并可运行。

### 创建私有链接出站策略

成功创建私有链接后，创建私有链接出站策略以允许出站到目标资源。

1.   在 Control Panel 中选择 **Actions > Create network egress policy** 来创建网络出站策略。
2.   创建网络出站策略时，选择 **Private link** 类型的地址，并为每个条目输入目标资源的端口。这些创建的策略可以在 Control Panel 中的 **Actions > View network egress policy** 下查看。

![图片 5：Control Panel 中 Azure 私有链接网络出站策略设置的显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-create-egress-policy-azure.png)

私有链接处于**就绪**状态且网络出站策略创建完成后，就可以在 Palantir 平台中使用该私有链接了。

## 管理私有链接

私有链接详情页的 **Actions** 下以及私有链接列表中每个条目的操作菜单中，显示了对私有链接可执行的操作。

![图片 6：Control Panel 中通过详情页管理私有链接的菜单显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-managing-1-azure.png)

![图片 7：Control Panel 中通过概览页管理私有链接的菜单显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-managing-2-azure.png)

### 更新私有链接

可以通过选择 **Actions > Update** 来更新私有链接的 **DNS 区域**、**DNS 记录**和 **TCP 端口**。

![图片 8：Control Panel 中在 Azure 上更新私有链接的显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-update-azure.png)

### 删除私有链接

可以通过选择 **Actions > Delete** 来删除私有链接。
