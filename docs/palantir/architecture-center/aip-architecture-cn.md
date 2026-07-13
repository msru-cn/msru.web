Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/architecture-center/aip-architecture/

Markdown Content:
## AIP 架构

如 [AIP、Foundry 和 Apollo 概述](https://www.palantir.com/docs/foundry/architecture-center/platforms/) 中所述，AIP 是 Palantir 将生成式 AI 连接到运营领域的平台。虽然 AIP 和 Foundry 作为共享服务网格的一部分协同运行（由 Apollo 驱动并部署在 [Rubix](https://www.palantir.com/docs/foundry/architecture-center/rubix/) 中），但本页从以 AI 为中心的视角提供 AIP 端到端架构的视图。这包括安全连接全系列 LLM 的能力、持续将上下文集成到 Ontology 中、构建 agents 和自动化、观察和评估已部署 agents 的持续性能，以及管理 AI 驱动产品的完整开发者工具链。

AIP 架构可以归纳为 12 大类能力：

![Image 1: Diagram of AIP architecture, including the 12 general categories of capability.](https://www.palantir.com/docs/resources/foundry/architecture-center/aip-architecture.png)

1.   **安全 LLM 集成与访问：** 安全访问全系列商业 LLM（如 GPT、Gemini、Claude、Grok 模型）和开源模型（如 Llama），通过 Palantir 托管的基础设施确保第三方提供商不保留任何传输数据，模型提供商也不将传输数据用于再训练。企业还可以集成现有模型，包括现有模型订阅、微调模型或特定领域模型。
2.   **端到端可观测性：** 为 AI 驱动的工作流和 agent 流程的每一步提供监控工具。这包括对供给 Ontology 的所有数据流的细粒度监控、人类用户或 AI agents 采取的每个操作的日志记录，以及追踪工作流中链式执行级联的能力。可观测性还延伸到 token 消耗和资源使用的其他方面。
3.   **上下文工程：** 为开发者提供无代码、低代码和专业代码工具，用于集成驱动 Ontology 和所有依赖工作流的上下文数据、逻辑和操作。所有数据集成模式（如批处理、流处理、通过 CDC 的实时复制）都可以通过任何运行时（如 Spark、Flink、DataFusion、Polars）利用，同时遵守统一的安全、治理、血缘追踪和其他基本保证。
4.   **Ontology 系统：** 通过将不同数据、逻辑、操作和安全整合为企业决策的统一表示来激活上下文。[阅读更多关于 Ontology。](https://www.palantir.com/docs/foundry/architecture-center/ontology-system/)
    *   Ontology 的语言将运营流程的"名词"和"动词"建模为人类和 agents 都能理解的形式。
    *   Ontology 的引擎支持查询数十亿对象、编排数万个操作，并持续纳入基于反馈的学习。
    *   Ontology 的工具链赋能开发者在通用基础上构建多样复杂的 AI 驱动应用。

5.   **向量、计算、工具服务：** 提供生成和管理嵌入所需的集成向量化服务；可扩展的计算框架，能利用多节点引擎（如 Spark、Flink）、高效单节点引擎（如 DuckDB、Polars）和任何容器化的"自带"引擎；以及一组与 Ontology 系统协作的集成工具服务，充当不断演进的工具工厂。平台设计为在模型、计算引擎和接口方面具有模块化和可扩展性。
6.   **安全与治理：** 确保人类和 agents 的每个操作都遵守严格的基于角色、标记和用途的控制。这需要基础设施、平台和企业安全控制的组合。这些控制可以精细配置和动态查询，并在详尽的审计日志中记录。治理能力统一覆盖平台界面内以及通过 APIs/SDKs 以编程方式执行的所有运营、工程和开发活动。
7.   **Agent 生命周期：** 驱动生产环境中 agents 的互联构建、编排和评估流程。Agents 可以使用无代码、低代码和专业代码工作台构建。持久编排可以通过 [AIP Logic](https://www.palantir.com/docs/foundry/logic/overview/) 等低代码接口或 [Code Workspaces](https://www.palantir.com/docs/foundry/code-workspaces/overview/) 等专业代码接口配置和管理。集成评估框架（[AIP Evals](https://www.palantir.com/docs/foundry/aip-evals/overview/)）与 Ontology 无缝协作，支持创建测试用例、调试和迭代 agent 定义、比较不同 LLM 的性能、检查执行间的差异等。
8.   **运营自动化：** 支持工作流内部和跨工作流所需的不同自动化模式。这包括可扩展的基于计划的自动化、处理流数据的近实时事件驱动自动化，以及与 API 驱动操作交织的自动化。无论哪种模式，每个自动化都可以利用 Ontology 系统中丰富的数据、逻辑和操作原语集合，以及各种执行和通知配置。
9.   **开发环境：** 赋能开发者按自己的方式和位置构建 agents 和自动化。AIP 提供集成开发环境（如 VS Code、JupyterLab），与 Ontology 驱动的应用以及集成测试和评估框架无缝连接。同时，[Platform SDK ↗](https://github.com/palantir/foundry-platform-python) 和 [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) 配合 [Palantir 的 VS Code 插件](https://www.palantir.com/docs/foundry/palantir-extension-for-visual-studio-code/overview/)，将相同核心功能带到现有环境和开发者工具链中。此外，[Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/) 为 agent 开发提供安全接口（类似于平台内 AI FDE 的能力）。
10.   **人类 + AI 应用：** 提供全系列 AI 驱动体验；从面向对象的分析到实时应用构建，到多模态治理工作流，到核心平台能力管理。运营用户、合规团队、工程师、分析师和其他关键角色都有专门为其工作流出开箱即用的应用，以及快速构建新的 Ontology 驱动应用的能力。在每种情况下，AI 的融入都可以被精心控制和透明评估，确保从增强到自动化的平滑过渡。
11.   **打包、发布、部署：** 让开发者超越单点分析和应用，构建利用集成 DevOps 工具链的全功能 AI 产品。端到端的数据管道、Ontology 定义、自动化和预构建应用的集合可以打包、发布和部署到异构目标环境。开发者可以指定"最后一英里"定制的容许范围，下游团队可以在产品定义演进以及变更在发布渠道中验证和推广时安全地接收更新。
12.   **企业自动化：** 赋能各种角色和背景的构建者使用专业 AI agents（如 [AI FDE](https://www.palantir.com/docs/foundry/ai-fde/overview/)、[AIP Analyst](https://www.palantir.com/docs/foundry/aip-analyst/overview/)）来构建数据管道、编写业务逻辑、训练模型、构建 ontologies、制作分析和开发端到端应用。关键是，这些 agents 与人类用户运行在相同基础上，意味着它们遵守相同的集成变更管理能力（如 Global Branching），并可以将人机协作工作流与完全自主操作无缝编织在一起。
