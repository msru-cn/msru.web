Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/architecture-center/rubix/

Markdown Content:
## Rubix 基板

AIP、Foundry 和 Apollo 都运行在一个加固的、自动伸缩的、高可用的 Kubernetes 实现中，即 [Palantir Rubix ↗](https://www.palantir.com/rubix/)。

基于 Palantir 数十年 [building secure software](https://www.palantir.com/docs/foundry/security/overview/) 的经验，Rubix 的开发目标是扩展开源容器化的核心优势，并增加在世界上最严苛环境中运行所需的特性。这包括具有强制轮换时间的临时计算节点、默认安全的网络、动态智能自动伸缩，以及满足最严格认证标准（包括 FedRAMP High、DOD DISA IL-5/IL-6 和 CMMC）的广泛功能。

Rubix 架构最初是为托管 Palantir 自己的软件而开发的，但现在已被各种规模的软件公司用来将其产品部署到他们选择的任何环境中，包括世界上最受限和最复杂的环境。

Rubix 设计的核心是一组不妥协的、互锁的假设：关键任务软件必须安全设计、高可用并能够快速演进。

![Image 1: Illustration of Rubix: a hardened, autoscaling, high-available implementation of Kubernetes.](https://www.palantir.com/docs/resources/foundry/architecture-center/rubix-k8s.png)

## 安全性

Rubix 设计为缓解战术性和高级持续性威胁向量。

每个工作负载都基于必要需求进行安全隔离，安全执行需要提升权限的操作任务，这些任务与以精确治理权限运行的应用驱动执行区分开来。加密在环境中每个元素上严格执行，工作负载之间的每次交互都必须按照不可变配置进行认证、授权和记录。

Palantir 构建的 Rubix 最初版本开创了这种安全的自动伸缩范式，配合 Spark 计算运行时。现在，这已扩展到 AIP、Foundry 和 Apollo 中的每个运行时和服务结构，从管理系统连接、数据集成、模型管理、应用开发、agent 构建到开发者工具链。

![Image 2: Illustration of Rubix Security.](https://www.palantir.com/docs/resources/foundry/architecture-center/rubix-security.png)

## 高可用性

高可用性与 Rubix 的临时性方法交织在一起；Rubix 环境中的节点不能存活超过 48 小时。这确保每个服务，无论是面向用户的 Ontology Manager 还是转换流的后端服务，都为中断和弹性故障转移而设计。Rubix 还减少了对基础设施团队手动干预的需求，因为过时实例会被自动替换，驱动替换的逻辑包含了来自全局性能的编码经验。

从安全角度看，激进的节点轮换确保攻陷单个节点不足以让攻击者获得对环境的持久访问。在运营方面，这种临时性与多维节点排空和终止管道协同工作，该管道利用策略驱动的节点选择，优雅地避免不稳定。

## Rubix 作为 Palantir 服务的基板

Rubix 为基础设施、平台和客户团队都带来效率。通过为 Palantir 的核心服务提供安全一致的基板，它使基础设施团队能够将 AIP、Foundry、Apollo 和依赖产品部署到 AWS、Azure、Google Cloud、Oracle Cloud 或本地环境——具有相同的运营特性。

对于向受管基础设施发布新功能和服务的 Palantir 团队，Rubix 提供可靠统一的基板，抽象掉不同环境和提供商的特殊性。

对于希望安全托管自定义应用、容器化模型和其他 Kubernetes 兼容工作负载（例如通过 Compute Modules）的客户开发者，Rubix 的所有核心优势都可以透明地利用。这包括智能工作负载分配、一系列复杂的需求感知算法以及驱动持续成本优化的其他功能。

## Apollo 和"Day 2"运营

Rubix 与 [Apollo](https://www.palantir.com/docs/apollo/core/introduction/) 协同工作，为"Day 2"基础设施运营提供强大的任务控制。

Apollo 的职责之一是为给定 Palantir 环境中数百个服务的安装、升级和回滚计算和传输 [plans](https://www.palantir.com/docs/apollo/core/plans-and-constraints/#plans)。

为确保零停机升级，Apollo 要求每个软件服务都以多节点配置部署，为"蓝/绿"发布策略而设计。与一次性发布策略不同，蓝/绿范式首先构建一个并行的绿色环境，并在现有蓝色环境旁边监控其性能。如果绿色环境在指定时间内运行正常，流量逐渐从蓝色节点重定向到绿色节点（蓝色节点按照强制轮换被直接销毁）。

这种零停机架构离不开 Rubix 固执己见的 API 层，Apollo 利用它将复杂的部署意图转化为服务创建、状态监控、产品修订管理、配置管理等资源级别的指令。

## 一次构建，随处运行

Rubix 为 Palantir 的"一次编写，随处发布"开发理念提供基础。Rubix 获取 Kubernetes 的核心优势，并用世界上最关键环境所需的软件快速发布所需的安全性、高可用性和可部署性特性来增强它们。

除了赋能 Palantir 的开发者团队，Rubix 现在还支持希望将自己的端到端解决方案部署到受监管环境的软件团队（使他们能够通过 Palantir FedStart 实现 FedRAMP 合规）。

Rubix 还使整个政府机构能够通过 Mission Manager 产品安全地加速供应商入职和管理。随着 Palantir 的客户和合作伙伴继续追求他们最关键的任务并挑战长期管理软件基础设施的过时正统观念，Rubix 将继续演进以支持他们最紧迫的需求。
