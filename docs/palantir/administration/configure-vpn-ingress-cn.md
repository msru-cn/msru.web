Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-vpn-ingress/

Published Time: Thu, 09 Jul 2026 17:47:44 GMT

Markdown Content:
## 配置 VPN ingress [Beta]

Beta

配置 VPN ingress 的功能处于 beta 阶段，可能并非在所有 enrollment 上可用。某些功能在此功能全面可用之前可能会发生变化。请联系你的 Palantir 代表以启用自助 VPN ingress。

平台管理员可以通过 [AWS Site-to-Site VPN ↗](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) 服务配置 VPN 网络 ingress。这允许你在不通过互联网的情况下建立到 AWS 托管 Foundry 实例的连接。

## Ingress 限制

每个 Foundry enrollment 最多可以通过 VPN 连接配置三个不同的 ingress。请联系你的 Palantir 代表申请提高限制。

## 配置 VPN

导航到 Control Panel 的 **Network ingress** 页面中的 **VPNs** 标签页以管理 VPN。

![Image 1: 显示 Control Panel 的 Network ingress VPNs 页面。](https://www.palantir.com/docs/resources/foundry/administration/network-ingress-vpns-page.png)

要创建 VPN 连接，选择 **+ New VPN** 并按以下步骤操作：

### 1. 输入连接到 Foundry 的 VPN 配置详情

你可以在 **VPN configuration** 部分输入以下详情：

*   **VPN Name：** 命名你的 VPN 以标识 ingress。
*   **Public IP address of your VPN gateway：** 输入客户的公共 VPN 网关地址_或_使用 NAT 时的外部地址。
*   **Routing configuration：**
    *   **Static：** 在 **Allowed private CIDRs*** 文本框中输入可能访问 Foundry 的客户私有 IP 地址空间。
    *   **Dynamic：** 在 **Autonomous System Number (ASN)** 文本框中输入客户网关的 Border Gateway Protocol (BGP) Autonomous System Number (ASN)。

![Image 2: Add VPN connection 弹窗显示配置 ingress VPN 所需的步骤。](https://www.palantir.com/docs/resources/foundry/administration/network-ingress-create-vpn-1.png)

### 2. 为 Foundry 选择 CIDR 范围

选择一个显示的 CIDR 范围供 Foundry 保留以建立 VPN 连接。你选择的 CIDR 范围不能与你的私有网络的 CIDR 范围重叠。Foundry 在其基础设施中保留连接的 CIDR 以支持 VPN 连接。

![Image 3: Add VPN connection 弹窗显示 Select CIDR 标签页。](https://www.palantir.com/docs/resources/foundry/administration/network-ingress-create-vpn-2.png)

### 3. 配置隧道

每个 VPN 连接包含两个 Internet Protocol Security (IPsec) 隧道以实现冗余。Foundry 将这些隧道配置为**使用 AWS 默认值**，你可以通过参考[当前 AWS VPN Tunnels 文档 ↗](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNTunnels.html) 将 IPsec 隧道配置为 AWS 默认值的子集。选择 **Custom configuration** 可以在 AWS 默认值之外自定义隧道。

![Image 4: Add VPN connection 弹窗显示 Tunnel 1 配置标签页。](https://www.palantir.com/docs/resources/foundry/administration/network-ingress-create-vpn-tunnel-1-config.png)

如果 Tunnel 1 使用 AWS 默认配置，则 Tunnel 2 也将使用 AWS 默认配置。如果 Tunnel 1 有自定义配置，如果你选择 **Use tunnel 1 configuration**，Tunnel 2 也可以使用该自定义配置。此外，你可以在 **Add VPN connection** 弹窗的 **Tunnel 2 configuration** 步骤中选择 **Custom configuration** 单独配置 Tunnel 2。

![Image 5: Add VPN connection 弹窗显示 Tunnel 2 配置标签页。](https://www.palantir.com/docs/resources/foundry/administration/network-ingress-create-vpn-tunnel-2-config.png)

选择 **Submit** 完成 VPN 配置过程并初始化连接，这可能需要几分钟。一旦 Foundry 完成安装，VPN 连接将从 `Creating` 进入 `Ready` 状态。

### 4. 配置你的网关设备

VPN 连接就绪后，Control Panel 中的 **Download VPN configuration** 窗口将显示各种网关设备的示例配置列表。下载对应你的网关设备的配置并按照说明配置它，以允许流量通过创建的隧道路由。

你可以在 [AWS VPN 文档 ↗](https://docs.aws.amazon.com/vpn/latest/s2svpn/example-configuration-files.html) 中找到受支持的网关设备列表。

![Image 6: Download VPN configuration 窗口显示各厂商及其网关设备的配置。](https://www.palantir.com/docs/resources/foundry/administration/network-ingress-vpn-download-config.png)

配置网关设备后，隧道状态将显示为 `Up`，表示 IPsec 隧道已建立。

![Image 7: Control Panel 显示网络 ingress VPN 隧道状态为 Up。](https://www.palantir.com/docs/resources/foundry/administration/network-ingress-vpn-tunnel-status.png)

### 5. 连接到 Foundry

要连接到 Foundry，你需要：

1.   [允许从 VPN 进入 Foundry 的 ingress。](https://www.palantir.com/docs/foundry/administration/configure-vpn-ingress/#allow-ingress-into-foundry)
2.   [覆盖 VPN 中的 DNS 解析。](https://www.palantir.com/docs/foundry/administration/configure-vpn-ingress/#override-dns-in-a-vpn)

#### 允许进入 Foundry

你可以参考现有的 [ingress 配置文档](https://www.palantir.com/docs/foundry/administration/configure-ingress/#configure-network-ingress-in-control-panel) 以允许从客户的私有 CIDR 进入 Foundry。

#### 覆盖 VPN 中的 DNS

一旦隧道状态为 `Ready`，你可以通过 **VPN** 配置详情面板中显示的 **Frontdoor domain** 访问 Foundry。

![Image 8: 显示 VPN 配置详情面板。](https://www.palantir.com/docs/resources/foundry/administration/network-ingress-vpn-details.png)

要连接到 Foundry，你可以：

*   （推荐）在你组织的 DNS 管理系统中创建 CNAME 记录，将当前 Foundry front door 域名指向 VPN 的 **Frontdoor domain** 值，使得到 Foundry 的流量将通过创建的 VPN 连接的 IPsec 隧道。例如，将 `<mycompany>.palantirfoundry.com` 指向 `vpn-xxxx.palantircloud.com`。
*   （可选）在解析 Foundry front door `<mycompany>.palantirfoundry.com` 的主机上添加一个条目指向 **Frontdoor IPs**。例如，在目标系统的 `/etc/hosts` 中添加 `10.x.x.x. <mycompany>.palantirfoundry.com`。这种覆盖 DNS 的方式不推荐，因为 **Frontdoor IPs** 可能会变化。

此外，某些 Foundry 服务如 Code Workspaces 可能在后台使用其他专用域名，这些也必须通过 VPN 隧道路由。请联系你的 Palantir 代表获取你 enrollment 的完整自定义域名列表。

要测试 VPN 配置是否成功，运行以下命令时应收到 `pass`：

`curl -s https://<mycompany>.palantirfoundry.com/magritte-coordinator/api/ping > /dev/null && echo pass || echo fail`

## 管理 VPN

### 管理 VPN 状态

你可以通过导航到 VPN 列表并选择 **Actions** 下拉菜单来 **Disable** 或 **Delete** VPN，从而管理 VPN 状态。选择 **Delete** 后有 24 小时的宽限期可以恢复 VPN。此外，你可以禁用或启用 `Ready` 状态的 VPN 连接。

![Image 9: VPNs 标签页显示禁用或删除 VPN 的功能。](https://www.palantir.com/docs/resources/foundry/administration/network-ingress-vpn-actions.png)

VPN 的配置在创建连接后是不可变的。要进行配置更改，你可以 **Delete** 并重新创建 VPN 连接。

### 访问和查看 VPN 日志

你可以从 VPN 页面访问最多 10,000 条隧道日志，其中包含隧道建立、Internet Key Exchange (IKE) 协商和 dead peer detection (DPD) 协议消息的详细信息。使用 **Starting from** 筛选器缩小搜索范围，默认拉取最近一周的日志。

![Image 10: Logs 窗口显示基于配置的起始时间戳的日志。](https://www.palantir.com/docs/resources/foundry/administration/network-ingress-vpn-logs.png)
