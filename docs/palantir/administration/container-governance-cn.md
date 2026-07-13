Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/container-governance/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/container-governance/#container-governance)容器治理

Open Container Initiative 容器（通常称为 Docker 容器）是一种流行的语言无关的软件打包方式，允许开发者将来自多个工具链的依赖组合成一个统一的包。Docker 容器在打包复杂应用、利用传统技术或集成 Foundry 原生支持语言（Python、Java 和 R）中不可用的库方面尤为强大。

容器工作流会给你的组织带来额外的安全风险。由于容器镜像在 Foundry 外部编写，可能引入和积累软件漏洞，管理员负责实施软件供应链控制并定期审计在 Foundry 中运行的容器。

为了缓解这些风险，Foundry 的计算基础设施实施了行业领先的管控和严格的[镜像要求](https://www.palantir.com/docs/foundry/transforms-container/container-overview/#image-requirements)，限制用户可以运行的容器工作负载类型。特别是，容器镜像必须以非 root 数字用户 ID 运行，且不能访问内核权限。

Foundry 还提供管理工具来跟踪哪些容器在生产中运行，并定期扫描活跃容器以识别软件漏洞。[Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 中的 **Container governance** 页面使管理员能够审计其 Foundry 安装中容器工作流的状态，并在必要时召回有漏洞的容器。

通过 Foundry 计算基础设施运行的容器受到与 Apollo 平台中运行的容器类似的[元数据可见性](https://www.palantir.com/docs/apollo/apollo-product-specification/manifest/#metadata-visibility)规则的约束。

## [](https://www.palantir.com/docs/foundry/administration/container-governance/#enable-container-workflows)启用容器工作流

[Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 的 **Container governance** 页面的 **Settings** 标签页允许资源管理员启用或禁用容器工作流。默认情况下，所有容器工作流都是禁用的。所有容器工作流需要 [Rubix ↗](https://blog.palantir.com/introducing-rubix-kubernetes-at-palantir-ab0ce16ea42e) 引擎作为底层基础设施；如果不使用 Rubix，此开关将被禁用。

![Image 4: Container governance settings 标签页](https://www.palantir.com/docs/resources/foundry/administration/container-governance-settings.png)

## [](https://www.palantir.com/docs/foundry/administration/container-governance/#vulnerability-scanning)漏洞扫描

Foundry 定期扫描所有正在使用的用户上传的 Docker 容器的漏洞。[Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 的 **Container governance** 页面的 **Vulnerabilities** 标签页提供了影响你的 enrollment 的漏洞概览。默认情况下，Foundry 不会根据发现的容器漏洞采取任何操作。

![Image 5: Container governance vulnerabilities 标签页](https://www.palantir.com/docs/resources/foundry/administration/container-governance-vulnerabilities.png)

### [](https://www.palantir.com/docs/foundry/administration/container-governance/#recall-vulnerabilities)召回漏洞

[Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 的 **Container governance** 页面的 **Vulnerabilities** 标签页允许资源管理员召回或取消召回单个漏洞。任何使用受召回漏洞影响的容器的 Foundry 作业将被强制停止。同样，漏洞也可以被取消召回。

![Image 6: Container governance 漏洞召回弹窗](https://www.palantir.com/docs/resources/foundry/administration/container-governance-recall.png?width=500)

[← 上一篇 Configure VPN ingress](https://www.palantir.com/docs/foundry/administration/configure-vpn-ingress/)

[下一篇 Container restrictions →](https://www.palantir.com/docs/foundry/administration/container-restrictions/)
