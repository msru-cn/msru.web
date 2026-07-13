Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/

Markdown Content:
## 配置 AWS 私有链接出站

Beta

私有链接出站处于 [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) 开发阶段，在你的注册中可能尚不可用。功能在活跃开发期间可能会发生变化。

本页面介绍如何为托管在 AWS 上的 Palantir 平台配置和管理私有链接出站，以连接到客户服务，底层由 [AWS PrivateLink ↗](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html) 提供支持。

私有链接出站支持到 AWS 服务、部署在 AWS 上的用户自有资源以及部署在 AWS 上的第三方 API 的私有出站。

## 配置私有链接

导航到 Control Panel 中**网络出站**页面的**私有链接**标签页来管理私有链接。

![图片 1：Control Panel 中管理私有链接的页面。](https://www.palantir.com/docs/resources/foundry/administration/private-link-overview.png)

要成功创建私有链接连接：

1.   [为目标资源创建端点服务](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/#create-an-endpoint-service-for-your-target-resource)。
2.   [允许 Palantir 平台访问目标资源](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/#allow-the-palantir-platform-to-access-the-target-resource)。
3.   [提供目标资源端点服务名称](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/#provide-the-target-resource-endpoint-service-name)。
4.   [创建网络出站策略](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/#create-private-link-egress-policies)。

### 为目标资源创建端点服务

#### AWS 服务

兼容私有链接的 AWS 服务列表及其端点服务名称可以在 [AWS 文档 ↗](https://docs.aws.amazon.com/vpc/latest/privatelink/aws-services-privatelink-support.html) 中找到。AWS 服务不需要创建端点服务；可以直接使用 AWS 提供的端点服务名称。支持私有链接的 AWS 服务示例是 [Amazon Bedrock ↗](https://docs.aws.amazon.com/bedrock/latest/userguide/usingVPC.html)。

#### AWS 上的用户自有资源

对于部署在 AWS 上的用户自有资源，请按照 [AWS 文档 ↗](https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html) 中的步骤创建端点服务。用户自有资源的示例包括由 [AWS RDS ↗](https://docs.aws.amazon.com/rds/) 提供支持的数据库。

#### AWS 上的第三方 API

对于部署在 AWS 上的用户自有第三方 API，请按照 [AWS 文档 ↗](https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html) 中的步骤创建端点服务。如果由另一方拥有，请请求他们的 VPC 端点服务名称。例如，可以按照 [Snowflake 文档 ↗](https://docs.snowflake.com/en/user-guide/admin-security-privatelink#create-and-configure-a-vpc-endpoint-vpce) 中所示请求 Snowflake 的 VPC 端点服务名称。

此外，如果服务使用的自定义传输层安全（TLS）证书对[私有链接的 AWS 生成域名 ↗](https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-share-your-services.html#endpoint-service-private-dns)无效，请请求第三方 API 的私有域名。例如，可以按照 [Snowflake 文档 ↗](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) 找到 Snowflake 的私有域名。以下是一个私有第三方域名示例：

```
abc.us-east-1.privatelink.snowflakecomputing.com
```

### 允许 Palantir 平台访问目标资源

要通过私有链接访问目标资源，需要允许 Palantir 平台访问该资源。按照 [AWS 文档 ↗](https://docs.aws.amazon.com/vpc/latest/privatelink/configure-endpoint-service.html) 将 Palantir 平台的 AWS 账户添加到你的端点服务的允许主体列表中。允许主体的格式如下：

```
arn:aws:iam::<palantir_platform_aws_account_id>:root
```

![图片 2：显示 Palantir 平台 AWS 账户的 Control Panel 提示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-account-callout.png)

### 提供目标资源端点服务名称

1.   导航到 **Control Panel > Network egress > Private links** 并选择**新建私有链接**来创建私有链接。

2.   为你的目标资源输入以下私有链接详情：

    *   **端点服务名称：** 在上一步中获取的目标资源的端点服务名称。

![图片 3：创建私有链接的 Control Panel 对话框。](https://www.palantir.com/docs/resources/foundry/administration/private-link-create.png) 
    *   **高级设置：**

        *   **私有域名：** 如果私有链接出站到具有自定义 TLS 证书的资源，请在此处添加这些域名条目。Palantir 平台将为这些域名创建 `CNAME` 记录，映射到私有链接的另一端。
        *   **TCP 端口：** 添加应在此私有链接上允许的端口；默认端口为 443。 
![图片 4：创建私有链接时的 Control Panel 高级设置。](https://www.palantir.com/docs/resources/foundry/administration/private-link-create-advanced.png)

3.   提供上述详情后，选择**创建**。

私有链接可能具有以下状态：

*   **创建中：** 私有链接创建已开始。
*   **创建云资源中：** 正在预置云资源。
*   **管理 DNS 中：** 正在管理 DNS 记录。
*   **等待云资源：** 等待云提供商创建资源。
*   **等待接受：** 私有链接正在等待服务提供商接受。
*   **就绪：** 私有链接已成功创建。

如果私有链接处于**失败**状态，则发生了以下错误之一：

*   **失败：** 连接请求失败。检查 AWS 中虚拟私有云（VPC）端点服务配置的权限并重新创建。
*   **被拒绝：** 服务提供商拒绝了连接请求。VPC 端点服务的所有者已拒绝连接，请联系他们以推进。
*   **已过期：** 连接请求已过期。VPC 端点服务的所有者未及时接受连接，请重新创建私有链接。
*   **超时：** 私有链接创建超时。这可能是临时错误，你应该删除后重试。如果重试未能解决问题，请联系 Palantir 支持。
*   **验证失败：** 私有链接验证失败。请联系你的 Palantir 管理员以推进。
*   **云提供商错误：** 云资源创建失败。请联系你的 Palantir 管理员以推进。
*   **DNS 管理失败：** DNS 管理失败。请联系你的 Palantir 管理员以推进。

### 创建私有链接出站策略

成功创建私有链接后，创建[私有链接出站策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#private-link-egress-policies)以允许出站到目标资源。

1.   在 Control Panel 中选择 **Actions > Create network egress policy** 来创建网络出站策略。
2.   创建网络出站策略时，选择 **Private link** 类型的地址，并为每个条目输入目标资源的端口。这些创建的策略可以在 Control Panel 中的 **Actions > View network egress policy** 下查看。

![图片 5：Control Panel 中私有链接网络出站策略设置中的默认域名、私有域名和区域域名的显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-create-egress.png)

#### 需要出站策略的情况

*   默认域名需要网络出站策略。如果你连接的是第三方 API，且不打算使用 AWS 生成的默认域名，则**不需要**网络出站策略。 
![图片 6：Control Panel 中私有链接网络出站策略设置中默认域名的显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-default-domain.png)

*   如果你打算使用区域域名，请为区域域名创建网络出站策略。如果你的 VPC 与 Palantir 平台在同一 AWS 区域，使用同区域域名可能更高效。 
![图片 7：Control Panel 中私有链接网络出站策略设置中区域域名的显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-zonal-domain.png)

*   如果配置了私有域名，请为私有域名创建网络出站策略。 
![图片 8：Control Panel 中私有链接网络出站策略设置中私有域名的显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-private-domains.png)

私有链接处于**就绪**状态且网络出站策略创建完成后，就可以在 Palantir 平台中使用该私有链接了。

## 管理私有链接

私有链接详情页的 **Actions** 下以及私有链接列表中每个条目的操作菜单中，显示了对私有链接可执行的操作。

![图片 9：Control Panel 中通过详情页管理私有链接的菜单显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-managing-1.png)

![图片 10：Control Panel 中通过概览页管理私有链接的菜单显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-managing-2.png)

### 更新私有链接

可以通过选择 **Actions > Update** 来更新私有链接的**私有域名**和 **TCP 端口**。

![图片 11：Control Panel 中更新私有链接的显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-update.png)

### 删除私有链接

可以通过选择 **Actions > Delete** 来删除私有链接。

将已创建的网络出站策略分享给打算通过私有链接出站到目标资源的用户。在要分享的域名或 IP 上，选择 **Actions > View network egress policy** 并导航到网络策略页面。在网络策略页面上，选择 **Actions > Manage sharing** 并添加目标用户或用户组来分享网络出站策略。

![图片 12：Control Panel 中分享网络出站策略的显示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-share-policy.png)

## 使用私有链接

### Data Connection 数据源

在 Data Connection 中，使用默认域名或第三方 API 域名[配置数据源](https://www.palantir.com/docs/foundry/data-connection/set-up-source/)，并附加已创建的网络出站策略。配置完成后，通过预览或浏览数据源来测试连通性，并验证数据源数据的准确性。

### Snowflake 数据源

要通过私有链接创建 Snowflake 数据源，请按以下步骤操作：

1.   [在 Snowflake 中将 Palantir 平台云提供商账户加入白名单](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/#allowlist-the-palantir-platform-cloud-provider-account-in-snowflake)。
2.   [在 Control Panel 中创建私有链接](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/#create-the-private-link-in-control-panel)。
3.   [在 Data Connection 中创建 Snowflake 数据源](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/#create-the-snowflake-source-in-data-connection)。

#### 在 Snowflake 中将 Palantir 平台云提供商账户加入白名单

要让 Palantir 平台创建到 Snowflake 的私有链接，需要在你 Snowflake 账户中将 Palantir 平台的账户加入白名单。操作步骤如下：

1.   在 **Control Panel > Network egress > Private links** 中找到 Palantir 平台的云提供商账户 ID，如下所示： 
![图片 13：显示 Palantir 平台 AWS 账户的 Control Panel 提示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-account-callout.png)

2.   向 Snowflake 提交[支持工单 ↗](https://community.snowflake.com/s/article/How-To-Submit-a-Support-Case-in-Snowflake-Lodge) 并提供以下信息： 
    *   Palantir 平台的云提供商账户 ID（包括云提供商；AWS、Azure 或 GCP）。
    *   Snowflake 账户 URL。
    *   说明上述账户 ID 需要被加入白名单以实现与 Palantir 的私有连接。注意不能使用 `SYSTEM$AUTHORIZE_PRIVATELINK`，因为 Palantir 用户没有直接访问底层云提供商基础设施的权限，也不会获得所需的 `federated_token`。

Snowflake 将 Palantir 平台的云提供商账户加入白名单后，继续下一步。

#### 在 Control Panel 中创建私有链接

在创建 Palantir 平台与 Snowflake 之间的私有链接之前，通过运行 [`SYSTEM$GET_PRIVATELINK_CONFIG` ↗](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) 命令从 Snowflake 获取私有链接配置。此命令输出在 Palantir 平台中创建私有链接所需的信息。

1.   要创建私有链接，导航到 **Control Panel > Network egress > Private links > New private link**。 
![图片 14：显示 Snowflake 私有链接示例配置的 Control Panel 提示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-create-snowflake.png)

2.   输入上述输出中的以下详情来创建私有链接： 
    *   **端点服务名称：** 输入 `SYSTEM$GET_PRIVATELINK_CONFIG` 输出中的 `privatelink-vpce-id`。
    *   **高级设置：**
        *   **私有域名：** Palantir 平台会将这些 URL 映射到 Snowflake 私有链接的另一端并在私有链接上路由流量，保持 Snowflake 使用在线证书状态协议（OCSP）进行安全保障。了解更多关于[配置 VPC 网络 ↗](https://docs.snowflake.com/en/user-guide/admin-security-privatelink#configure-your-vpc-network)的信息。可以使用 `SYSTEM$GET_PRIVATELINK_CONFIG` 获取以下值：
            *   `privatelink-account-url`
            *   `privatelink-connection-ocsp-urls`
            *   `privatelink-connection-urls`
            *   `privatelink-ocsp-url`
            *   `regionless-privatelink-account-url`
            *   `regionless-snowsight-privatelink-url`
            *   `snowsight-privatelink-url`

        *   **TCP 端口：** 按照 [Snowflake 文档 ↗](https://docs.snowflake.com/en/user-guide/admin-security-privatelink#create-and-configure-a-vpc-endpoint-vpce) 中的说明输入 `443` 和 `80`。

配置完成后，选择**创建**来创建私有链接。当私有链接处于**就绪**状态后，继续下一步。

#### 在 Data Connection 中创建 Snowflake 数据源

1.   要在 Data Connection 中创建 Snowflake 数据源，导航到 **Data Connection > New Source > Snowflake**。
2.   配置数据源，并在**连接详情**中执行以下操作以使用创建的私有链接： 
      **账户标识符：** 输入已为其创建私有链接的 Snowflake 账户的账户 ID。
    *   **私有链接：** 打开此开关以使用私有链接。

![图片 15：显示 Snowflake 数据源示例配置的 Control Panel 提示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-snowflake-source.png)

#### 网络出站策略

为 [`SYSTEM$ALLOWLIST_PRIVATELINK` ↗](https://docs.snowflake.com/en/sql-reference/functions/system_allowlist_privatelink) 命令输出的所有 URL 创建网络出站策略。此外，为输出的 `STAGE` 创建一个 [S3 存储桶策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#amazon-s3-bucket-policies)，如下所示：

![图片 16：显示 Snowflake 数据源建议出站的 Control Panel 提示。](https://www.palantir.com/docs/resources/foundry/administration/private-link-suggest-egress.png)

有关 Snowflake 配置的更多信息，请参阅 Palantir 的 [Snowflake 文档](https://www.palantir.com/docs/foundry/available-connectors/snowflake/)。
