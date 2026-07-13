Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/architecture-center/overview/

Published Time: Thu, 09 Jul 2026 17:47:50 GMT

Markdown Content:
## 概述

自创立以来，Palantir 的软件一直由客户最严苛的任务塑造。从最初聚焦反恐，Palantir 的范围现已涵盖 50 多个垂直领域，从医疗到造船到能源生产到保险；也就是说，几乎涵盖了西方世界每一个核心运营环境。

Palantir 的平台和产品通过 Forward Deployed Engineering 方法论持续开发。这相当于人类的反向传播——工程师团队尽可能深入问题现场，同时与核心工程团队协作，不知疲倦地综合反馈和发布新功能。

![Image 1: Illustration of FDEs sending feedback from the field.](https://www.palantir.com/docs/resources/foundry/architecture-center/overview-fde-feedback.png)

## Palantir 的平台

在各个行业中，Palantir 采用统一架构，由 [三个平台组成：AIP、Foundry 和 Apollo](https://www.palantir.com/docs/foundry/architecture-center/platforms/)。这些平台被整体设计为企业操作系统。Foundry 作为核心数据运营平台；AIP 作为生成式 AI 平台；Apollo 是支撑它们的持续交付平台。

AIP 和 Foundry 总共包含 300 多个微服务和资产，全部运行在高可用、自动伸缩的计算网格中，基于零信任安全基础设施，在每个组件上执行严格的安全策略（例如激进的节点轮换以防御高级持续性威胁）。

特定领域的产品，如国防和情报领域的产品，或日益丰富的医院运营应用，扩展了 AIP 和 Foundry 的底层能力。这种基础服务与全面运营产品的复杂编排，只有通过 Apollo 的自主软件交付方式才能实现。

![Image 2: Illustration of the relationship between AIP, Foundry, Apollo, and Palantir's products.](https://www.palantir.com/docs/resources/foundry/architecture-center/overview-platforms-and-products.png)

## Ontology 系统

Palantir 架构的核心是 [Ontology 系统](https://www.palantir.com/docs/foundry/architecture-center/ontology-system/)。Ontology 将企业的数据、逻辑、操作和安全策略整合为人类和 AI agent 都能使用的直观表示。

在供应链场景中，Ontology 可以将数十个碎片化的 ERP、MES、CRM、客户、边缘和其他各种数据源整合为一组通用对象或"名词"——制造工厂、生产线、客户订单等构成运营世界的核心概念。

这些"名词"与"动词"配对，"动词"是必须跨工作流编排的操作，如更新采购订单、更改分销策略，或运行多步骤模拟来评估如何应对供应中断。

每个名词和动词都可以由全范围的逻辑驱动，从业务规则、机器学习模型和优化器到跨计算环境串联多个引擎的计算。

多模态、军事级安全控制涵盖在 Ontology 中建模的对象、链接、actions、functions 和其他语义与动态原语。这确保人类和 AI agent 都能在 Ontology 上协作，同时具备维持信任所需的精度和保护措施。

[阅读更多关于 Ontology 及其对释放 AI 价值的关键作用。](https://www.palantir.com/docs/foundry/architecture-center/ontology-system/)

![Image 3: Illustration of the Ontology as a layer; above are applications, automation, and agents, below are governance, data services, logic services, and workflow services.](https://www.palantir.com/docs/resources/foundry/architecture-center/overview-ontology-diagram.png)

## Data Services、Logic Services 和 Workflow Services

有数百个服务与 Ontology 系统协同工作，包括 Data Services、Logic Services 和 Workflow Services。

*   _Data Services_ 涵盖数据连接、数据转换、数据虚拟化、数据存储、数据健康监控和数据管理。
*   _Logic Services_ 涵盖编写业务规则、训练机器学习模型、编排外部模型、集成 LLM 和其他形式的生成式 AI、端到端 Model Ops 和 Agent Ops 等。
*   _Workflow Services_ 支持分析和运营用例的交互式计算、事件驱动自动化、定时自动化、专业代码和低代码工作流编写工具等。

所有这些能力都与构成 Ontology 系统的语言、引擎和工具链原生连接。它们共同支持在 Palantir 架构之上构建各种分析、应用、AI 驱动的 agents 和自动化以及自定义产品，所有这些都利用平台级的变更管理和发布管理方法，并遵守管理员配置的安全和治理控制。

![Image 4: Grid of Palantir services and capabilities.](https://www.palantir.com/docs/resources/foundry/architecture-center/overview-nine-grid.png)

## Architecture Center 指南

本 Architecture Center 重点介绍与企业架构和数字战略最相关的主题，包括：

*   [Ontology 系统](https://www.palantir.com/docs/foundry/architecture-center/ontology-system/)；
*   Palantir 的开放数据和计算架构，即 [Multimodal Data Plane](https://www.palantir.com/docs/foundry/architecture-center/multimodal-data-plane/)；
*   构建 AI 驱动 agent 工作流的 [reference architecture](https://www.palantir.com/docs/foundry/architecture-center/aip-architecture/)；
*   [infrastructure](https://www.palantir.com/docs/foundry/architecture-center/interoperability/) 和 [security](https://www.palantir.com/docs/foundry/architecture-center/rubix/) 范式的详细信息。

得益于 Apollo 平台每周编排数万个发布，每个部署都是活的运行环境。即便如此，Palantir 致力于为客户最重要的任务赋能，这意味着我们要确保 Palantir 部署的管理者和利益相关者始终具备构建、维护和扩展最大稳健性解决方案的能力，每个方案都能在关键时刻发挥作用。

![Image 5: Illustration of the industries powered by Palantir.](https://www.palantir.com/docs/resources/foundry/architecture-center/overview-nine-grid-above.png)
