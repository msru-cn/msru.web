Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/#configure-private-link-egress-beta)Configure private link egress [Beta]

Beta

Private link egress is in the [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development and may not be available on your enrollment. Functionality may change during active development.

Private links, also called VPC connectivity, are cloud provider services that allow direct, secure connectivity between the Palantir platform and another system hosted on the same cloud provider as the Palantir platform. [Learn more about private links.](https://www.palantir.com/docs/foundry/private-link/overview/)

Private link **egress** refers to traffic from the Palantir platform to your cloud VPC. Private link egress is currently configurable by users for the following services:

*   **AWS-hosted Palantir platforms** connecting to customer services hosted in AWS.
*   **Azure-hosted Palantir platforms** connecting to customer services hosted in Azure.

This page outlines how private link egress is configured and managed in Control Panel, and how these created connections are used in the Palantir platform.

If you want to configure a private link for ingress to Foundry (that is, making requests from your network _to_ Foundry), consult the [private link documentation](https://www.palantir.com/docs/foundry/private-link/overview/).

## [](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/#limits)Limits

*   20 private links are allowed per enrollment.
*   10 private domains are allowed per private link.

To increase these limits contact your Palantir administrator.

## [](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/#configure-a-private-link)Configure a private link

To configure a private link for your cloud provider, see the following documentation:

*   [Configure private link egress for AWS](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/)
*   [Configure private link egress for Azure](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-azure/)

[← PREVIOUS Network egress observability](https://www.palantir.com/docs/foundry/administration/network-egress-observability/)

[NEXT Configure private link egress for AWS →](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-aws/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

