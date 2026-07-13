Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/architecture-center/ontology-system/

Markdown Content:
## Ontology 系统

Ontology 是 Palantir 架构核心的系统。Ontology 旨在表示企业复杂的、相互关联的 _决策_，而不仅仅是数据。这使人类和 AI agents 能够在必须与物理世界编排的运营工作流中协作。

*   一家航空公司可能会在其 ontology 中对航班、飞机、机组清单、排班优化器和其他碎片化的企业资产进行建模，以驱动当日航班运营和更远程的规划。

*   一个医院系统可能会对患者、护士排班、医疗物资、床位容量和其他通常实时变化且对驱动患者生命周期至关重要的元素进行建模。

*   在军事场景中，ontology 可以统一前部署部队的战备信息与支撑侦察和目标选择的运营流程，为多国团队提供共享的运营世界。

![Image 1: Diagram of how the Ontology connects data sources, logic sources, and systems and actions.](https://www.palantir.com/docs/resources/foundry/architecture-center/ontology-system.png)

## Ontology 如何建模决策

Ontology 通过 **数据**、**逻辑**、**操作** 和 **安全** 的四重集成来建模决策。

![Image 2: Diagram of how the Ontology is layered above a security layer, in turn above data, logic, and actions.](https://www.palantir.com/docs/resources/foundry/architecture-center/ontology-system-zoom.png)

**数据** 可以从各种可以想象的来源流入，如碎片化的 ERP 系统、自建记录系统、CRMs、工业数据库、地理空间存储库、实时传感器、文档存储以及基本上任何其他数字角落。Ontology 将这些不同的数据源统一为连贯的对象、属性和链接——这些语义概念使所有利益相关者能够与信息和操作交互。

数据对象或"名词"必须与"动词"配合才能建模决策；语义必须与动态性配对。Ontology 设计为建模全范围的 **操作**，从简单事务到必须实时写回运营和边缘系统的复杂多步骤更新。

驱动每个操作的 **逻辑** 可以是模块化的并随时间演进，反映驱动决策的多样计算和推理。某个操作（或增强特定对象）背后的逻辑可以是简单的业务规则、传统机器学习模型、LLM 驱动的函数，或涉及多个计算引擎的复杂多步骤编排。

为了说明 **安全** 的关键作用（以及它如何融入数据、逻辑和操作），我们以一家使用 Ontology 的假想医疗制造企业为例。

### Ontology 示例：医疗制造

想象一家医疗制造商需要管理供应商互动、生产线、物流活动和客户生命周期的复杂网络。

他们的 ontology 对制造工厂、工单、客户详情、入库包裹、出库货运和其他关键语义概念进行建模，整合了数百个底层数据源。

对于与 Ontology 交互的供应链分析师、生产工程师、仓库员工和其他团队成员，不同的访问范围是相关的。

*   生产团队可能需要访问与机器和成品生命周期相关的全球遥测数据；
*   仓库员工可能基于团队成员的区域位置有更细粒度的限制；
*   供应链分析师可能有更细粒度的权限，基于特定用户对敏感数据元素应用行/列级别限制。

当这些不同团队构建 AI 驱动的 agents 时，它们的安全范围必须继承自人类用户或来自已定义项目的权限结构。考虑到连接到 Ontology 的操作和逻辑原语（这些对开展工作流至关重要），这变得更加复杂。

触发采购订单的能力可能有细粒度权限，而运行场景来评估拟议重新分配影响的能力可能更宽松；底层优化器或调用 LLM 的能力（这些表现为通过 actions 交互式编排的 functions）可能有完全不同的安全范围。Ontology 的安全系统必须在交互时协调所有这些细粒度策略，跨越数万人类和 agents。

![Image 3: Diagram of how the Ontology enables read-write loops.](https://www.palantir.com/docs/resources/foundry/architecture-center/ontology-read-write-loops.png)

## Ontology 语言、Ontology 引擎和 Ontology 工具链

Ontology 不是"语义层"；数据、逻辑、操作和安全的四重集成和操作化无法用薄薄的语义层或单体设计来实现。

相反，Ontology 是一个由数十个底层组件组成的多模态系统，概念上可分为语言、引擎和工具链。

*   **语言** 对语义对象、链接和属性进行建模；以及动态 actions 和自动化；还有定义这些操作如何运作以及它们如何与其他系统交互的逻辑字面片段。

*   **引擎** 使语言的每个组件实例化。它提供模块化的读架构，支持大规模 SQL 查询、实时状态变更订阅以及人类 + AI 混合团队所需的每种物化。同样，它提供可扩展的写架构，支持原子持久事务更新、大规模批量变更、大规模流以及 Change Data Capture 等机制，实现与其他运营系统的极低延迟镜像。

*   **工具链** 涵盖语言的全部表达力和引擎的能力，使开发者能将 Ontology 用作后端。面向野火响应、海军后勤、汽车装配和无数其他用例的丰富 AI 驱动应用都构建在 Ontology SDK（OSDK）之上，以及为生产用例的规模化治理设计的丰富 DevOps 工具集合之上。

![Image 4: Table showing "Language", "Engine", and "Toolchain" as rows and "Data", "Logic", "Action", and "Security" as columns.](https://www.palantir.com/docs/resources/foundry/architecture-center/ontology-table.png)

## 你的世界的数字化表示

Ontology 充当控制论企业的动态、复合核心。

每次数据集成都有助于构建人类和 AI agents 共享的运营世界的完整保真表示。

每一段逻辑，无论是简单的业务规则还是多步骤编排，都可以连接到每个操作，在一个连接传统碎片化流程的决策图中。

在工作流中收集的每一条反馈都可以安全地纳入持续学习循环，并驱动从增强到自动化的旅程。

经过实战检验的安全和审计系统确保每项活动都能被精确治理，覆盖整个人类和机器工作者队伍。Ontology 反映了 Palantir 客户的雄心，其持续演进由他们最重要的任务驱动。
