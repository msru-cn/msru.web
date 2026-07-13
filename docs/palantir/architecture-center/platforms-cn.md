Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/architecture-center/platforms/

Published Time: Thu, 09 Jul 2026 17:47:50 GMT

Markdown Content:
## 集成平台：AIP、Foundry 和 Apollo

标准 Palantir 架构由三个集成平台组成：AIP、Foundry 和 Apollo。

_Apollo_ 是持续交付平台，管理托管 Foundry 和 AIP 服务的底层基础设施。Apollo 支持每天跨数百个服务和资产编排数千次零停机升级。

_Foundry_ 是基础数据运营平台，提供数据管理、逻辑编写、Ontology 开发、分析和工作流开发的核心能力。

_AIP_ 是生成式 AI 平台，通过 "_k_-LLM" 范式提供与大语言模型的安全连接，用于构建 agents 和自动化的开发工具链，一系列 AI 驱动的终端用户应用，用于治理生产环境中 AI 工作流的全面 Evals 框架等。

![Image 1: Foundry, AIP, and Apollo make up the Enterprise Operating System.](https://www.palantir.com/docs/resources/foundry/architecture-center/platforms-enterprise-os.png)

## AIP、Foundry 和 Apollo：企业操作系统

集成的 AIP + Foundry + Apollo 架构设计为企业操作系统运行。

综合来看，AIP + Foundry 可以概念性地映射为九个能力集，如下图所示：

*   **Ontology 语言**、**Ontology 引擎** 和 **Ontology 工具链**，共同构成 [Ontology 系统](https://www.palantir.com/docs/foundry/architecture-center/ontology-system/)；
*   驱动 Ontology 系统的 **Data Services**、**Logic Services** 和 **Workflow Services**；
*   用户可以利用来实现目标的 **Analytics & Applications**、**Automations** 和 **Product Delivery** 工具链。

这九个能力集中的每一个都整体利用六个网格级组件：**Storage**、**Compute**、**Networking**、**Security**、**Governance** 和 **Workspace**。所有这些组件都由 Apollo 驱动。

这个全面架构驱动着大型医院系统的 AI 驱动护理运营、大型航空公司的集成网络规划、美国最大公用事业的电力运营和野火响应、美国及盟国的全谱军事行动，以及数千个其他用例。为解决世界上最困难的问题，Palantir 的客户使用企业操作系统将数据、分析和 AI 与关键任务运营连接起来。

![Image 2: Illustration showing the 9 capability sets and six lateral categories of AIP+Foundry.](https://www.palantir.com/docs/resources/foundry/architecture-center/platforms-capability-sets-categories.png)

## 统一安全架构

统一安全架构跨越三个平台（AIP、Foundry 和 Apollo），涵盖三个主要领域：基础设施安全、平台安全和企业安全。

在 _基础设施_ 层面，Palantir 服务网格中的每个组件都以零信任方式运行（意味着所有元素都基于身份、设备健康和验证进行访问控制），并假设存在恶意攻击并需要自主执行（例如通过 Apollo 强制的加密、防火墙和运行时配置）。

在 _平台_ 层面，Foundry 和 AIP 都提供实现可信协作所需的全系列控制。这些控制包括对人类和 agents 的访问范围严格执行、基于角色、基于标记和基于用途的细粒度访问控制（与自动血缘和审计相连），以及面向跨学科团队的一系列平台内应用。

这些基础控制由 _企业安全_ 控制扩展，使加密、审计日志、授权和认证配置能够与组织现有的身份提供商、信息安全工具和架构模式深度集成。

![Image 3: Illustration of platform security architecture.](https://www.palantir.com/docs/resources/foundry/architecture-center/platforms-security-arch.png)

## 可扩展性和互操作性

标准 AIP + Foundry + Apollo 架构设计为可扩展并与其他服务和应用深度集成。

在"战术"层面，Palantir 的 [Compute Modules](https://www.palantir.com/docs/foundry/compute-modules/overview/) 框架允许开发者安全地将自己的容器（如容器化的 LLMs、优化器、数据处理运行时或端到端应用）带入 Apollo 管理的网格。

一个更广泛的例子是 Palantir 自己的国防产品；它们的最初组件在标准 AIP + Foundry + Apollo 架构之前开发，但现在所有产品都已完全集成到标准架构中。这包括 Palantir Gotham 的核心多模态应用和工具集，由 Foundry 管理的 Ontology 驱动。

在商业领域也可以看到其他例子，如 Airbus 通过扩展标准架构的定制产品驱动整个航空生态系统（Skywise）；Fujitsu 构建和交付一组使用 Foundry 和 AIP 开发者工具链的专业 agent 应用；或 Andretti Racing 开发的 "RaceOS" 将实时赛车性能连接到丰富的 AI 驱动应用中。

下图展示了医院如何在 Palantir 架构之上构建应用。

![Image 4: Illustration of "Palantir for Hospitals" offering.](https://www.palantir.com/docs/resources/foundry/architecture-center/platforms-offering-hospitals.png)

下面是 Palantir 的 "Warp Speed" 的插图，一个面向制造业的操作系统。

![Image 5: Illustration of "Palantir Warp Speed" offering.](https://www.palantir.com/docs/resources/foundry/architecture-center/platforms-offering-warp-speed.png)

以下国防应用构建在与 Palantir 商业产品相同的核心架构之上，但针对世界上最严苛和高风险的用例进行了专门化。

![Image 6: Illustration of "Palantir Defense" offering.](https://www.palantir.com/docs/resources/foundry/architecture-center/platforms-offering-defense.png)

## 追求 alpha

标准架构的目标是交付非标准化的结果：通过可维护的定制实现极致差异化。

在最佳情况下，客户组织应该利用 Apollo 管理的 AIP 和 Foundry 服务星座来构建应用、集成和 agent 舰队，使他们能够解决最重要的问题。

一个成功的 Palantir 部署是企业追求投资术语中的"alpha"；换句话说，通过围绕其差异化构建，将其独特性注入 Ontology，并实时适应复杂运营条件来追求战略目标，产生超额回报。

继续这个类比，投资概念中的"beta"是追求唾手可得的成果，如一刀切 SaaS 部署中的基础解决方案。Palantir 架构中的广泛能力可以支持这些用例，但理想情况下只是作为追求 alpha 的副产品。

![Image 7: Illustration of how Palantir provides products for "alpha".](https://www.palantir.com/docs/resources/foundry/architecture-center/platforms-products-for-alpha.png)

## Forward Deployed Engineering

AIP、Foundry 和 Apollo 的活力共同反映了称为 Forward Deployed Engineering 的产品开发范式，可以看作是人类版的反向传播。Palantir 工程师深入嵌入世界各地的关键环境，从战区到工厂车间，与客户同行千里，不知疲倦地构建和发布新功能。Palantir 由客户的任务驱动，最终，我们将标准架构每次部署的雄心视为成为企业独特的、唯一的、不断演进的操作系统。
