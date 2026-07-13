Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/#configure-private-link-egress-beta)配置 private link egress [Beta]

Beta

Private link egress 处于 [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) 开发阶段，可能尚未在你的 enrollment 上可用。功能可能在活跃开发期间发生变化。

Private links，也称为 VPC connectivity，是云提供商服务，允许 Palantir 平台与托管在同一云提供商上的其他系统之间建立直接、安全的连接。[了解有关 private links 的更多信息。](https://www.palantir.com/docs/foundry/private-link/overview/)

Private link **egress** 是指从 Palantir 平台到你的云 VPC 的流量。Private link egress 目前可由用户为以下服务配置：

*   **AWS 托管的 Palantir 平台** 连接到 AWS 上托管的客户服务。
*   **Azure 托管的 Palantir 平台** 连接到 Azure 上托管的客户服务。

本页介绍如何在 Control Panel 中配置和管理 private link egress，以及这些创建的连接如何在 Palantir 平台中使用。

如果你想为 Foundry 的 ingress 配置 private link（即从你的网络_向_ Foundry 发起请求），请查阅 [private link 文档](https://www.palantir.com/docs/foundry/private-link/overview/)。

## [](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/#limits)限制

*   每个 enrollment 允许 20 个 private links。
*   每个 private link 允许 10 个 private domains。

如需提高这些限制，请联系你的 Palantir 管理员。

## [](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/#configure-a-private-link)配置 private link

要为你的云提供商配置 private link，请参阅以下文档：

*   [为 AWS 配置 private link egress](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/)
*   [为 Azure 配置 private link egress](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-azure/)

[← 上一篇 Network egress observability](https://www.palantir.com/docs/foundry/administration/network-egress-observability/)

[下一篇 Configure private link egress for AWS →](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/)
