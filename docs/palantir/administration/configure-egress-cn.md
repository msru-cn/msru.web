Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-egress/

Markdown Content:
## 配置网络 egress

网络 egress 是指从 Foundry 内部发起的、尝试连接外部系统的任何网络流量。本页介绍如何在 [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 中配置和管理网络 egress，以及这些配置如何被 Foundry 中的用户工作负载所使用。

## 网络 egress 概述

Foundry 提供严格的网络防火墙来保护客户数据。客户管理的网络 egress 策略使用容器网络技术（[Cilium ↗](https://cilium.io/)、[eBPF ↗](https://ebpf.io/)）将网络防火墙规则应用于各个工作负载。除了这些客户特定规则外，Palantir 的信息安全团队还在基础设施代理层维护网络防火墙规则，提供额外的安全层。这些规则共同管控 Foundry 中用户工作负载的网络 egress 执行，包括以下工作负载：

*   使用 [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) 的 [Data connection 源](https://www.palantir.com/docs/foundry/data-connection/set-up-source/)
*   [External transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/)
*   [External functions](https://www.palantir.com/docs/foundry/data-connection/external-functions/)
*   External streaming 用户自定义函数（UDF）
*   [External model adapters](https://www.palantir.com/docs/foundry/integrate-models/model-adapter-creation/)（用于建模实时部署）
*   [Code workbooks](https://www.palantir.com/docs/foundry/code-workbook/getting-started/)

开放网络 egress 路由始终存在安全风险。Foundry enrollment 的信息安全官应确保仅开放到可信目的地的网络路由，并将对这些路由的访问限制给可信的开发者群体。即使是可信的外部系统也可能被恶意行为者利用来绕过安全控制。信息安全官应利用 Foundry 变更管理工具确保 egress 逻辑的变更由可信团队审核，并建立审计流程确保 egress 逻辑保持安全。

存在多种 egress 策略类型，代表从 Foundry 到外部系统的不同网络路径：

*   [Direct connection 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#direct-connection-egress-policies)
*   [Agent proxy 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies)
*   [Private link 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#private-link-egress-policies)
*   [Bucket endpoint 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#bucket-endpoint-egress-policies)

要创建 egress 策略，请导航到 Control Panel 中的 **Network egress** 页面并选择 **Request network egress policy**。

## Direct connection egress 策略

Direct connection 策略允许从 Foundry 网络直接向外部目的地发起连接。对于托管在云端的 Foundry 实例，这意味着通过互联网进行连接，如 REST API 或云端托管的系统。对于本地部署的 Foundry 实例，这意味着连接到本地网络本身的系统。

以下列表总结了配置 direct connection egress 策略时可能使用的选项。

| 选项 | 描述 |
| --- | --- |
| Address | **选项 1：DNS** 格式为 `subdomain.domain.com` 的域名。也支持通配符域名，允许到给定域名下多个子域的流量（例如 `*.domain.com`）。详见[通配符 egress 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#wildcard-egress-policies)。 **选项 2：IP** 格式为 `x.x.x.x` 的单个 IPv4 地址。 **选项 3：CIDR** 格式为 `x.x.x.x/x` 的 IPv4 CIDR 地址块。 |
| Port(s) | 应为指定域名允许的端口或端口范围。端口值必须在 `1 - 65535` 范围内。**选项 1：单端口** 使用 DNS 地址时，必须指定单个端口。**选项 2：端口范围** 使用此选项时，必须提供起始和结束端口，起始端口小于或等于结束端口。 |

### Server Name Indication (SNI) 验证

Palantir 的网络基础设施默认尝试对所有使用端口 **443**（默认 HTTPS 端口）的网络连接进行 SNI 验证。如果该端口上的流量不支持 SNI（如 FTP(S)、SFTP 和大多数基于 TCP 的数据库连接），你可能会遇到连接挂起和/或超时错误。

如果你预计某个策略在端口 443 上有非 HTTPS 流量，管理员可以禁用该策略的 SNI 验证。

### 通配符 egress 策略

通配符地址允许你将整个子域级别列入 allowlist（例如 `*.domain.com`），而无需管理各个子域名。这在子域名是动态的或事先未知的情况下非常有用——例如 Azure SQL 重定向模式、Kafka 节点或 MongoDB SRV 连接。

通配符必须作为单个元素出现在域名的最左侧标签中，且不能指向 **public suffix**（例如 `*.com`、`*.co.uk`、`*.github.io`）——如果指向 public suffix，该策略将不可用。通配符地址精确匹配一个子域级别。例如，`*.domain.com` 匹配 `bar.domain.com`，但不匹配 `domain.com` 或 `bar.baz.domain.com`。

| 模式 | 是否支持 |
| --- | --- |
| `*.domain.com` | 支持 |
| `*.com` | 不支持，public suffix |
| `*.s3.amazonaws.com` | 不支持，public suffix |
| `subdomain.*.com` | 不支持，中间通配符 |
| `*.*.domain.com` | 不支持，多个通配符 |

## Agent proxy egress 策略

Agent proxy egress 策略通过 [Data Connection agent](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agents) 启用到本地或私有托管系统的连接。Agent proxy egress 策略允许 Foundry 工作负载_如同_直接连接到外部系统一样运作，无需额外配置；所有流量都通过 agent 透明代理。

使用 agent egress 策略的源在以下工作流中受支持：

*   所有原生 [data connection 功能](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#capabilities)
    *   不支持的工作流：
        *   [Virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/)
        *   [OIDC 认证](https://www.palantir.com/docs/foundry/authentication/oidc-getting-started/)

*   [External transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/)（仅支持 VS code 预览）
*   External [deployed functions](https://www.palantir.com/docs/foundry/functions/functions-deployed/)。了解有关 [external functions](https://www.palantir.com/docs/foundry/data-connection/external-functions/) 的更多信息。
*   External streaming [用户自定义函数（UDF）](https://www.palantir.com/docs/foundry/transforms-java/user-defined-functions/)
*   [Code workspaces](https://www.palantir.com/docs/foundry/code-workspaces/overview/)
*   [Compute modules](https://www.palantir.com/docs/foundry/compute-modules/overview/)

以下列表总结了配置 agent proxy egress 策略时可能使用的选项。

| 选项 | 描述 |
| --- | --- |
| Address | **选项 1：DNS** 外部系统域名，格式为 `subdomain.domain.com`。也支持通配符域名，允许到任意一个级别的子域名的流量（例如 `*.domain.com`）。详见[通配符 egress 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#wildcard-egress-policies)。 **选项 2：IP** 外部系统单个 IPv4 地址，格式为 `x.x.x.x`。**注意：** 私有 IP 地址范围（如 `10.x.x.x`）可能与 Foundry 内部基础设施冲突且不可路由。对于仅使用私有 IP 地址可访问的源系统，使用 [host overrides](https://www.palantir.com/docs/foundry/data-connection/agent-configuration-reference/#when-to-use-host-overrides) 将占位符域名映射到网络内的私有 IP 地址。 **选项 3：CIDR** 外部系统 IPv4 CIDR 地址块，格式为 `x.x.x.x/x` |
| Port(s) | 应为指定域名允许的端口或端口范围。端口值必须在 `1 - 65535` 范围内。**选项 1：单端口** 使用 DNS 地址时，必须指定单个端口。**选项 2：端口范围** 使用此选项时，必须提供起始和结束端口，起始端口小于或等于结束端口。 |
| Agent(s) | 用于连接外部系统的 agent。如果指定了多个 agent，流量将随机分配给列表中的一个 agent。 |

## Private link egress 策略

Private link egress 策略通过 [private links](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/) 启用连接，将到某地址的所有流量路由到 private link 上。

以下列表总结了配置 private link egress 策略时可能使用的选项。

| 选项 | 描述 |
| --- | --- |
| Address | 外部系统域名，格式为 `subdomain.domain.com`。仅允许特定的域名，不支持通配符。例如，要允许到 `foo.mycompany.com` 和 `bar.mycompany.com` 的流量，需要创建两个独立的域名策略。 |
| Port(s) | 应为指定域名允许的端口或端口范围。端口值必须在 `1 - 65535` 范围内。**选项 1：单端口** 使用 DNS 地址时，必须指定单个端口。**选项 2：端口范围** 使用此选项时，必须提供起始和结束端口，起始端口小于或等于结束端口。 |
| Private link | 用于连接外部系统的 [private link](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/)。 |

使用 private link egress 策略的源在以下工作流中不受支持：

*   [Virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/)
*   [Iceberg 表的 Bring-your-own-bucket 存储](https://www.palantir.com/docs/foundry/iceberg/iceberg-byob/)
*   [OIDC 认证](https://www.palantir.com/docs/foundry/authentication/oidc-getting-started/)

## Bucket endpoint egress 策略

当 Palantir 平台与你要 egress 的外部系统托管在同一云提供商上（Amazon AWS、Azure 或 Google Cloud Platform）时，可能需要特定的 allowlist 来让流量在云提供商的特定端点内流通。Allowlist 通过 **bucket endpoint** egress 策略控制。

### AWS S3 bucket endpoint 策略

对于托管在 AWS 上的 Palantir 平台实例，连接到同一 [AWS 区域 ↗](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html) 中托管的外部 S3 bucket 时需要 bucket endpoint 策略。这是因为 AWS 处理从同一区域的 VPC gateway endpoint（本例中为 Palantir 平台）到 S3 的请求的网络方式。

要建立到 AWS 的连接，请按以下步骤操作：

1.   从 Control Panel 创建类型为 **Bucket endpoint** 的网络 egress 策略。

下表总结了 S3 bucket endpoint egress 策略的配置选项：

| 选项 | 描述 |
| --- | --- |
| Address | 外部系统域名，格式为 `subdomain.domain.com`。仅允许特定的域名，不支持通配符。例如，要允许到 `foo.mycompany.com` 和 `bar.mycompany.com` 的流量，需要创建两个独立的域名策略。 |
| Port(s) | 端口 443 |
| S3 bucket name | 此策略 egress 的目标 S3 bucket 名称。 |

![Image 1: 创建和配置 bucket endpoint 策略时打开的对话框](https://www.palantir.com/docs/resources/foundry/administration/network-egress-create-bucket-endpoint-policy.png)

1.   确保 S3 bucket 的 [bucket policy ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html) 允许来自 Palantir 平台实例的 VPC endpoint 的入站流量。

网络策略创建后，连接来源的 VPC endpoint 将显示在策略概览页面上。

![Image 2: 显示 VPC endpoint 的 bucket endpoint 策略](https://www.palantir.com/docs/resources/foundry/administration/network-egress-policy-details-vpce.png)

Amazon S3 文档包含[一个示例 ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html#example-bucket-policies-restrict-accesss-vpc-endpoint)，说明如何使用 bucket policy 将 S3 bucket 的流量限制到特定的 VPC endpoint。要了解有关管理来自 VPC endpoint 的 S3 入站流量的更多信息，请查阅官方 [AWS 文档 ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html)。

使用 bucket endpoint egress 策略的源在以下工作流中不受支持：

*   [Virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/)

## 使用策略

本节总结了网络 egress 策略的相关[权限](https://www.palantir.com/docs/foundry/administration/configure-egress/#permissions)、网络 egress 策略可能处于的[生命周期状态](https://www.palantir.com/docs/foundry/administration/configure-egress/#policy-states)，并描述如何[应用网络 egress 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#apply-a-policy)。

### 权限

下表总结了网络 egress 策略相关操作及这些权限的默认配置。

| 操作 | 描述 |
| --- | --- |
| Propose | 任何 Foundry 用户都可以提议网络 egress 策略。提议的策略只有在获批后才会变为活跃并可用。待审批的策略可在 Control Panel 的 Approvals 收件箱中看到。 |
| Approve/Create | 通过 `Manage network egress configuration` workflow 授予。默认情况下，此 workflow 授予 `Enrollment Administrator` 和 `Information Security Officer` 两个角色。 |
| Update metadata | 通过 `Manage network egress configuration` workflow 授予。默认情况下，此 workflow 授予 `Enrollment Administrator` 和 `Information Security Officer` 两个角色。 |
| Revoke | 通过 `Manage network egress configuration` workflow 授予。默认情况下，此 workflow 授予 `Enrollment Administrator` 和 `Information Security Officer` 两个角色。 |
| Pause | Palantir 的信息安全团队有能力阻止被视为安全风险或威胁的网络 egress。被此阻止的任何网络 egress 策略将在 Control Panel 中显示为 `Paused`。如果你认为你的 enrollment 的合法网络 egress 策略被错误暂停，请提交包含相关详情的支持工单。 |
| View | 允许指定的用户和组查看策略的存在，但不允许他们导入并在任何工作负载中使用。通常，我们建议将所有可能需要使用该策略的人设为 viewer，即使他们当前不是 importer。 |
| Import | 允许指定的用户和组查看策略的存在，并在工作负载中导入和使用。 |

网络 egress 的主要管理界面位于 Control Panel 的 enrollment 级别。拥有 `Manage network egress configuration` workflow（与 Enrollment administrator 角色关联）访问权限的用户可以访问 **Network Egress** 页面执行 egress 策略的任何管理操作。

Enrollment Administrators 和 Information Security Officers 还始终能够查看 egress 策略被导入了哪些项目。无论管理用户对项目的个人访问权限如何，都可以看到这些信息。此元数据旨在确保 Information Security Officers 对策略使用有足够的可见性，以便做出关于是否撤销或限制策略使用的治理决策。

审批策略时，Information Security Officer 必须决定哪些用户或组应被授予 `View` 或 `Import` 网络 egress 策略的权限。之后也可以在 Control Panel 中使用策略详情页面的 **Manage Sharing** 按钮进行管理。

默认情况下，策略是"opt-in"的，必须附加到 Foundry 中的工作负载上。例如，创建 data connection 源时，该源的策略应由具有策略 `Importer` 权限的用户显式附加到源上。这遵循[最小权限原则 ↗](https://csrc.nist.gov/glossary/term/least_privilege)，确保工作负载仅被授予该工作负载成功运行所严格需要的 egress 规则。

### 策略状态

在网络 egress 策略的生命周期中，它可能处于以下各种状态之一：

| 策略状态 | 描述 |
| --- | --- |
| `Pending approval` | Pending approval 是新网络 egress 策略的默认状态。处于此状态的策略可以附加到工作负载，但尝试使用 pending approval 策略的工作负载将运行失败。 |
| `Active` | 策略获批后变为 active。Active 策略的 Importers 可以将其附加到 Foundry 工作负载上，允许该工作负载 egress 到指定的外部地址。 |
| `Paused` | Palantir 的信息安全团队已阻止到指定地址的 egress。尝试使用 paused 策略的工作负载将运行失败。 |
| `Revoked` | Foundry enrollment 的 Information Security Officers 可以从 Control Panel 撤销策略。尝试使用 revoked 策略的工作负载将运行失败。 |

### 应用策略

按照以下步骤成功应用网络策略：

1.   在 Control Panel 中创建策略。如果你的 Foundry 策略由 Palantir 管理，请将 egress 策略的详细信息提供给你的 Palantir 代表。这样 Palantir 可以在扩展网络访问之前评估安全风险。如果你的 Foundry 策略管理是完全自助的，策略将自动应用于防火墙。

2.   将策略分配给用户工作负载：

*   **使用 Foundry worker 的 Data Connection 源：** 创建[新源](https://www.palantir.com/docs/foundry/data-connection/set-up-source/#configure-a-network-policy)时指定网络策略。
*   **Code Workbook：** 精细网络管理尚不可用，管理员必须创建全局策略。全局策略不加区分地应用于所有工作负载，应仅配置给高度可信的网络路由。

要将策略分配给用户工作负载，需要特定 egress 策略的 **Importer** 权限。此权限通过相应 egress 策略的 **Manage Sharing** 设置按策略授予。

![Image 3: 设置 egress 策略权限的对话框](https://www.palantir.com/docs/resources/foundry/administration/egress-policy-permissions-dialog.png)

## 限制

你最多可以将 10 个源导入到代码资源或转换中，最多合并 50 个使用 [TCP 级别 allowlisting](https://www.palantir.com/docs/foundry/administration/configure-egress/#tcp-level-allowlisting) 的 egress 策略。

## 可观测性

要使用日志和指标监控和排障网络 egress 策略，请查阅我们的[网络 egress 可观测性](https://www.palantir.com/docs/foundry/administration/network-egress-observability/)文档。

## 高级设置

### TCP 级别 allowlisting

Egress 控制可以在 HTTP 或 TCP 级别执行。除端口 `80` 和 `443`（HTTP 和 HTTPS 流量的标准端口）上的 direct connection 策略外，所有 egress 策略都需要 TCP 级别 allowlisting。无论是否使用 TCP 级别 allowlisting，连接的安全性不变。

如果在使用端口 `80` 或 `443` 的策略上传输非 HTTP(S) 流量，则必须启用 TCP 级别 allowlisting 以确保 egress 成功。

## 常见边界情况

### 当有两个相同的策略，一个被暂停/撤销而另一个处于活跃状态时会发生什么？

使用活跃策略的工作负载将成功运行，而尝试使用暂停/撤销策略的工作负载将运行失败。

### 如果策略重叠，一个被暂停/撤销而另一个处于活跃状态时会发生什么？

这可能发生在使用单个 IP 地址的策略与指定 CIDR 地址块的策略重叠时。

在这种情况下，与相同策略一样，使用活跃策略的工作负载将成功运行，而尝试使用暂停/撤销策略的工作负载将运行失败。

### 如果我提议了一个已存在的策略会怎样？

允许重复策略，审核提议的信息安全官可以选择以下操作之一：

1.   完全拒绝提议。
2.   拒绝提议并授予提议者对现有相同或重叠策略的 "Importer access"。
3.   批准提议并允许重复或重叠策略（不推荐）。

## Foundry 的连接来自哪些 IP？

当从 Foundry 发起连接到外部目的地时，它们来自特定的 IP 范围。有时这些 IP 需要添加到 allowlist 中，Foundry 的连接才会被接受。

当 Foundry 托管在 Palantir 的云基础设施中时，Foundry 流量的 egress IP 将显示在 Control Panel 的网络 egress 管理页面上。在目标系统的 allowlist 中添加时，应复制那里显示的 CIDR 范围。

## 云提供商 egress

### Amazon S3 bucket 策略

对于托管在 AWS 上的 Foundry 实例，连接到同一区域的 S3 bucket 时需要额外配置。这是因为 AWS 处理从同一区域的 VPC gateway endpoint 到 S3 请求的网络方式。

要检查你的连接是否需要额外配置，请导航到 Control Panel 中的 **Network egress** 页面。如果你找到一个名为 **S3 bucket policies** 的额外标签页，说明你的实例托管在 AWS 上，你必须显式允许来自 Palantir VPC endpoint 到同一区域任何 S3 bucket 的流量。

如果存在，**S3 bucket policies** 标签页还将显示你的实例所在的区域，以及用于将流量从 Foundry 路由到同区域 S3 bucket 的 VPC endpoint 的 Amazon Reference Number (ARN)。

![Image 4: 同区域 S3 bucket 策略的 Control Panel 配置页面。](https://www.palantir.com/docs/resources/foundry/administration/network-egress-same-region-s3-bucket-policies-page.png)

要成功连接到与 Foundry 同区域的 bucket，你必须完成以下操作：

1.   在 AWS 控制台中配置你的 bucket policy 以允许来自 Foundry 实例的 VPC endpoint 的流量。了解有关 [AWS bucket policies ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) 的更多信息。
2.   确保你期望的 bucket 列在 Control Panel 的 **Network egress > S3 bucket policies > AWS S3 Bucket Policies** 下。
3.   按照[上述](https://www.palantir.com/docs/foundry/administration/configure-egress/#network-egress-overview)描述创建适当的网络 egress 策略，并将其添加到用于连接的 [Data Connection 源](https://www.palantir.com/docs/foundry/data-connection/set-up-source/)的配置详情中。

#### 允许 S3 来自 Foundry 实例 VPC endpoint 的流量

在 AWS 控制台中，你必须确保 S3 bucket 的 [bucket policy ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) 允许来自 **Network egress > S3 bucket policies** 标签页中显示的 VPC endpoint 的入站流量，如下所示：

![Image 5: 显示 Foundry 实例 VPC endpoint 的 Control Panel 页面。](https://www.palantir.com/docs/resources/foundry/administration/network-egress-same-region-s3-vpce.png)

Amazon S3 文档包含[一个示例 ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html#example-bucket-policies-restrict-accesss-vpc-endpoint)，说明如何使用 bucket policy 将 S3 bucket 的流量限制到特定的 VPC endpoint。要了解有关管理来自 VPC endpoint 的 S3 入站流量的更多信息，请查阅官方 [AWS 文档 ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html)。

#### 添加 S3 bucket 策略

要添加同区域 bucket，选择 **Add bucket policy** 并按照提示输入你期望的 bucket 名称，如下所示：

![Image 6: 显示添加新同区域 S3 bucket 策略所需输入的对话框。](https://www.palantir.com/docs/resources/foundry/administration/network-egress-same-region-s3-bucket-policy-add.png)

表单将自动检查有效的 bucket 名称及区域。如果有效的 bucket 名称与 Foundry 实例所在区域匹配，你将能够保存。除了 bucket 名称外，你还必须提供 `READ ONLY` 或 `READ WRITE` 策略。这决定了你希望 Palantir 在建立到 S3 的连接时请求什么级别的访问权限。

#### 使用 S3 bucket 策略

添加后，同区域 bucket 策略立即生效并适用于所有尝试从 Foundry 直接 egress 到该 bucket 的工作负载。**与网络 egress 策略不同，它们不需要附加到 Foundry 中的特定源或其他工作负载。**

创建 S3 源时，配置界面会自动检查 bucket 是否与 Foundry 在同一区域以及该 bucket 是否已在 Control Panel 中添加。配置源的用户将看到一个绿色勾选表示 bucket 已正确添加，或一个红色勾选表示需要具有 Control Panel 中 S3 bucket policy 添加权限的管理员执行操作。

#### S3 bucket 策略限制

每个 enrollment 最多可添加 10 个同区域 bucket。如果你需要从 Foundry 实例访问超过 10 个同区域 S3 bucket，请联系 Palantir Support。

### Microsoft Azure Storage 策略

对于托管在 Azure 上的 Foundry 实例，连接到 Azure Storage 资源时需要额外配置，因为流量通过 Azure 服务端点路由。

要检查你的连接是否需要额外配置，请导航到 Control Panel 中的 **Network egress** 页面。如果你找到一个名为 **Azure Storage policies** 的可选择标签页，说明你的实例托管在 Azure 上，你必须显式允许来自 Palantir Azure 子网到任何有连接资源的 Azure Storage 账户的流量。

如果存在，**Azure Storage policies** 标签页将显示用于将流量从 Foundry 路由到任何 Azure Storage 资源的子网 ID。

![Image 7: Azure Storage 策略的 Control Panel 配置页面。](https://www.palantir.com/docs/resources/foundry/administration/network-egress-azure-storage-policies-page.png)

要成功连接到 Azure Storage 资源，你必须完成以下操作：

1.   在 Azure 中配置你的 Azure Storage 账户的虚拟网络规则，以允许来自 Foundry 实例子网的流量。了解有关[管理 Azure 虚拟网络规则 ↗](https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security?tabs=azure-portal#managing-virtual-network-rules)的更多信息。
2.   确保你期望的 Azure Storage 账户列在 Control Panel 的 **Network egress > Azure Storage policies** 下。
3.   按照[上述](https://www.palantir.com/docs/foundry/administration/configure-egress/#network-egress-overview)描述创建适当的网络 egress 策略，并将其添加到用于连接的 [Data Connection 源](https://www.palantir.com/docs/foundry/data-connection/set-up-source/)的配置详情中。

#### 允许 Azure Storage 账户来自 Foundry 实例子网的流量

在你的 Azure 账户中，你必须确保 Storage 账户的[虚拟网络规则 ↗](https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security?tabs=azure-portal#managing-virtual-network-rules) 允许来自 **Network egress > Azure Storage policies** 标签页中显示的子网 ID 的入站流量，如下所示：

![Image 8: 显示 Foundry 实例子网的 Control Panel 页面。](https://www.palantir.com/docs/resources/foundry/administration/network-egress-azure-storage-subnets.png)

#### 添加 Azure Storage 策略

要添加 Azure Storage egress 策略，选择 **Add Azure Storage policy**，并按照提示输入你期望的 Storage 账户资源 ID，如下所示：

![Image 9: 显示添加新 Azure Storage 策略所需输入的对话框。](https://www.palantir.com/docs/resources/foundry/administration/network-egress-azure-storage-create.png)

表单将自动检查提供的 Azure Storage 账户资源 ID 是否有效。你可以在 [Azure 文档 ↗](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-get-info?tabs=portal#get-the-resource-id-for-a-storage-account) 中找到有关如何查找 Azure Storage 账户资源 ID 的更多信息。

#### 使用 Azure Storage 策略

添加后，Azure Storage 策略立即生效并适用于所有尝试从 Foundry 直接 egress 到该 Storage 账户的工作负载。与网络 egress 策略不同，它们不需要附加到 Foundry 中的特定源或其他工作负载。

创建 [ABFS 源](https://www.palantir.com/docs/foundry/available-connectors/onelake-and-azure-blob-filesystem/) 时，配置界面会自动检查 Foundry 是否部署在 Azure 上以及是否已在 Control Panel 中添加了有效的 Storage 账户。配置源的用户将看到一个警告，表示需要具有 Control Panel 中 Azure Storage policy 添加权限的管理员执行操作，如下所示。

![Image 10: 指示此源需要 Azure Storage 策略的警告。](https://www.palantir.com/docs/resources/foundry/administration/network-egress-azure-storage-source-warning.png)

创建[网络 egress 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/#network-egress-overview)后，如果 egress 还需要 Azure Storage 策略，也会显示警告，如下所示：

![Image 11: 指示此网络策略需要 Azure Storage 策略的警告。](https://www.palantir.com/docs/resources/foundry/administration/network-egress-azure-policy-warning.png)

### Google Cloud Platform (GCP) egress

对于托管在 GCP 上的 Foundry 实例，连接到同样托管在 GCP 项目上的资源时需要额外配置，例如 [BigQuery](https://www.palantir.com/docs/foundry/available-connectors/bigquery/)、[Google Cloud Storage](https://www.palantir.com/docs/foundry/available-connectors/google-cloud-storage/) 和 [Google Pub/Sub](https://www.palantir.com/docs/foundry/available-connectors/pubsub/)。

要设置 GCP 项目所需的额外配置，请联系 Palantir Support 获取帮助。
