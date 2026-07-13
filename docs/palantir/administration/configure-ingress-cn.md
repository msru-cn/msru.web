Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-ingress/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-ingress/#configure-network-ingress)配置网络 ingress

网络 ingress 是指从 Foundry 外部发起的连接。在使用我们的托管 SaaS 平台时，Control Panel 提供 allowlist 配置来定义可以从哪里建立此类连接。

必须在 Control Panel 中配置适当的网络 ingress 规则，用户才能登录和浏览 Foundry，以及需要访问 Foundry 内部的进程，[例如为 Data Connection 设置 agent](https://www.palantir.com/docs/foundry/data-connection/set-up-agent/#configure-agent-network-access)。

Control Panel 中配置网络 ingress 的功能可能尚未在你的 enrollment 中可用。

## [](https://www.palantir.com/docs/foundry/administration/configure-ingress/#configure-network-ingress-in-control-panel)在 Control Panel 中配置网络 ingress

网络 ingress allowlist 配置功能在 Control Panel 的 **Network ingress** 标签页中可用。此功能对具有 Information Security Officer 或 Enrollment Administrator 角色的用户可用。这些角色由 Enrollment Administrators 在 [Control Panel 的 **Enrollment permissions** 标签页](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/)中授予。

![Image 4: 网络 ingress 配置](https://www.palantir.com/docs/resources/foundry/administration/network-ingress.png)

支持两种类型的规则：

*   **Allowed IP address ranges** 部分：可以指定 IPv4 范围（CIDR 格式），定义可以建立 ingress 连接的来源。最多可配置 500 个 CIDR 块。
*   **Allowed countries** 部分：可以指定可以建立 ingress 连接的国家。

规则是累加的；满足基于 IP 的规则或基于国家的规则即可建立连接。

通过 VPN 连接的用户根据 VPN 的 egress IP 进行允许判断。

### [](https://www.palantir.com/docs/foundry/administration/configure-ingress/#considerations-country-based-allowlisting)注意事项：基于国家的 allowlisting

使用基于国家的 allowlisting 而非严格的基于 IP 的 allowlisting 时，请确保理解便利性和安全性之间的权衡。虽然仍然需要认证，但使用宽泛的网络 allowlist 可能大大增加以下风险：

*   基于身份的攻击
    *   示例：认证材料泄露、账户接管、暴力破解和凭证窃取。

*   社会工程和网络攻击
    *   示例：中间人攻击、DNS 投毒和其他定向钓鱼。

*   底层基础设施和应用的漏洞利用
    *   示例：零日漏洞利用。

Palantir 建议严格的 IP allowlisting 作为纵深防御控制措施，通过剥夺攻击者发起攻击所需的网络访问来显著降低这些风险。

基于国家的 allowlisting 通过对传入连接的 IP 进行地理标记来工作。此行为可能受到 Palantir 用于驱动此功能的第三方数据质量问题的影响。可能会出现误报和漏报，这对于 IP 地理标记工具来说是预期行为。

### [](https://www.palantir.com/docs/foundry/administration/configure-ingress/#make-a-change-request)提交变更请求

鉴于配置网络 ingress 的敏感性，所有 ingress 变更必须经过 [Approvals workflow](https://www.palantir.com/docs/foundry/approvals/overview/)。完成修改后，选择页面右下角的 **Request changes** 选项并提供变更理由。每个提议了 ingress 配置变更的域名将分别生成审批请求。默认情况下，管理员可以审批自己的 ingress 变更请求。但 approvals workflow 确保变更在生效前经过审核，并保留所有修改的历史记录。

下图展示了请求两个域名的 ingress 配置变更时的对话框示例。

![Image 5: Ingress 请求变更。](https://www.palantir.com/docs/resources/foundry/administration/ingress-requesting-changes.png)

请求会出现在 [Control Panel 的 Approvals 收件箱](https://www.palantir.com/docs/foundry/administration/control-panel-approvals/#approvals-inbox)中。

来自某些位置的 IP 地址可能被 Palantir 自动拒绝。如果你想要允许的 IP 地址出现此情况，请联系你的 Palantir 代表。

### [](https://www.palantir.com/docs/foundry/administration/configure-ingress/#advanced-settings)高级设置

在 **Advanced settings** 下，你可以切换 **Palantir access** 的开关；开启 **Palantir access** 将启用来自 Palantir 企业网络的 ingress 网络访问，而无需显式允许 Palantir 的企业 IP。

![Image 6: 高级设置](https://www.palantir.com/docs/resources/foundry/administration/network-ingress-advanced-settings.png)

如果 Palantir 工程师通过专用身份验证提供商并从 Palantir 网络访问你的 enrollment 提供支持，通常应开启 **Palantir access**。注意 Palantir access 通过 VPN 进行，不限于某个地理区域。

与基于 IP 和国家的 allowlisting 类似，**Palantir access** 设置是累加的：如果你的网络 ingress 配置允许来自美国的连接，并且此开关已启用，则也可以从美国以外的企业网络位置访问。

[← 上一篇 Configure egress certificates](https://www.palantir.com/docs/foundry/administration/configure-egress-certificates/)

[下一篇 Configure VPN ingress →](https://www.palantir.com/docs/foundry/administration/configure-vpn-ingress/)
