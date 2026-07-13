Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/architecture-center/multimodal-data-plane/

Published Time: Thu, 09 Jul 2026 17:47:50 GMT

Markdown Content:
## 多模态数据平面（MMDP）

多模态数据平面（MMDP）是 Palantir 的开放数据和计算架构。MMDP 反映了二十年来在客户任务前线打造实战检验方案的经验，以及在分析和运营系统设计之间经常产生张力的设计权衡中积累的认识。

具体来说，大多数平台架构都围绕特定的计算运行时或数据存储模式构建。虽然这对窄用例可能有效，但当扩展到需要复杂配合的互联用例时（例如结构化、非结构化、时序、地理空间或几何数据的复杂交互），这些依赖会很快成为阻碍——每种数据都需要不同形式的计算来转换和操作，然后才能无缝整合到终端用户体验中。

在 AI 时代，超越碎片化数据和计算不再只是"锦上添花"，而是解锁企业自主性的关键。

![Image 1: Illustration showing many different data sources, compute engines, and models with a title of "Any Data, Any compute, Any model".](https://www.palantir.com/docs/resources/foundry/architecture-center/mmdp-any.png)

## 任意数据：MMDP 的开放数据架构

MMDP 的基石是开放数据架构。首先体现在将 Apache Iceberg 作为 Foundry 和 AIP 的主要表格式。

Iceberg 正在被 Palantir 的关键合作伙伴（包括 AWS、Google Cloud、Microsoft Azure、Databricks 和 Snowflake）作为开放标准广泛采用。

MMDP 允许在 Palantir 内管理 Iceberg catalogs，也可以作为从这些（或其他）提供商注册的虚拟 catalogs 和虚拟表。这意味着在 Ontology 中利用数据进行运营应用和 AI 驱动的自动化，永远不需要复制数据。

采用 Iceberg 也意味着 SQL 应用和分析 notebooks 等标准工具可以像在任何其他环境中一样安全地交互和操作 Foundry 和 AIP 中的数据。

许多组织正在构建"data mesh"（或现在的"AI mesh"），将 Palantir 作为更广泛、更多样化企业架构中的一个参与者。MMDP 的一个明确目标是支持这类混合架构，提供一个"无围墙的花园"来实现端到端成果交付，同时确保架构的每一层都能与现有数据湖、湖仓一体、传统仓库、数据治理工具和其他关键存储库深度集成。

![Image 2: Illustration showing example tabular data sources supported by MMDP with title "Any Data".](https://www.palantir.com/docs/resources/foundry/architecture-center/mmdp-any-data-tabular.png)

### MMDP：超越表格数据的开放性

除了表格数据，MMDP 将同样的开放保证扩展到媒体、文档、流数据、地理空间数据以及各种多模态数据类型。

媒体数据可以在对底层格式最少假设的情况下同步；对于已识别的格式，分析工具可以立即帮助交互式解析；对于自定义或小众格式的集成，元数据可以从其他来源延迟附加。

流数据和时空数据也是如此，它们可能有需要在与主入口管道并行的数据管道中处理的关联元数据（如传感器标签）。

无论数据如何摄取和转换，所有底层文件和节点都可以通过标准 REST APIs 以及 Python 和 TypeScript SDKs 安全访问。

导出任务和基于 Ontology 的 webhooks 提供了简单安全的方法来将任何数据（无论模态如何）同步到外部系统，而基于 Source 的 Transforms 范式使开发者能够使用 Foundry 工具链的全部能力来自定义数据输出，精细到单个工作流步骤。

![Image 3: Illustration showing example data sources (tabular, media, streaming, and geospatial) supported by MMDP with title "Any Data".](https://www.palantir.com/docs/resources/foundry/architecture-center/mmdp-any-data.png)

## 任意计算：MMDP 的开放计算架构

MMDP 的开放计算架构释放了开放数据架构的价值。Foundry 和 AIP 配备了一系列开箱即用的运行时，都使用加固的、自动伸缩的基于 Kubernetes 的计算网格（[Palantir Rubix](https://www.palantir.com/docs/foundry/architecture-center/rubix/)）。

Rubix 按照零信任原则运行，在其管理的每个运行时和服务上执行严格的安全策略；例如，为防御高级持续性威胁，每个容器在 72 小时内被销毁和轮换。这要求依赖的计算基础设施具备高可用性，通常对单节点故障有弹性。

各角色和职能的用户，无论是技术数据工程师、分析数据科学家还是运营业务用户，都可以在平台内（以及通过 APIs 和 SDKs）利用批处理、流处理和交互式计算引擎。这包括自动伸缩的 Spark 用于批计算；自动伸缩的 Flink 用于流计算；以及一系列开放高性能单节点引擎如 Apache DataFusion、Polars 和 DuckDB。

在 Ontology "南侧"管理的数据转换（从原始数据到 Ontology 数据）以及 Ontology "北侧"使用的交互式函数（从 Ontology 数据到终端用户）都可以以弹性和受治理的方式利用这些运行时和其他运行时。

![Image 4: Illustration showing example compute engines supported by MMDP with title "Any Compute".](https://www.palantir.com/docs/resources/foundry/architecture-center/mmdp-any-compute.png)

### MMDP：用任意计算构建

[Compute Modules](https://www.palantir.com/docs/foundry/compute-modules/overview/) 框架支持"自带计算"（"BYO Compute"），任何容器化资源都可以导入并通过批处理、流处理和交互式函数安全地使用。

在运营工作流中，最重要的可执行文件和模型通常被困在特定领域的工件或不再积极开发的遗留包中。Compute Modules 使这些碎片化的计算工件能够被安全地解放出来，然后在 AI 驱动的工作流中以及与现代逻辑工件（如 Python、Java、SQL、Go 或 Rust 程序）一起托管和使用。

Foundry 和 AIP 还可以编排位于 Palantir 环境之外的计算资源，包括现有模型推理基础设施、Spark 集群、云托管优化引擎和在本地运行的高性能计算资源。

MMDP 还支持将计算原生无缝下推到云原生运行时（如 Databricks 或 Snowflake），让开发者能够使用 Pipeline Builder 和 Code Workspaces 等工具配合现有计算资源。

![Image 5: Illustration showing how compute resources can be connected with title "Build pipelines with Any Compute".](https://www.palantir.com/docs/resources/foundry/architecture-center/mmdp-pipeline-compute.png)

## 任意模型：Palantir 对模型访问的承诺

Palantir 对开放性和选择权的承诺延伸到生成式 AI。MMDP 的"任意模型"理念反映了通过 AIP 的 Model Catalog 提供最新生成式 AI 模型（包括来自 OpenAI、Anthropic、Google、Meta 和 xAI 的模型）的持续承诺，并为企业提供平等的注册和使用自有模型的平台。

无论是 Palantir 提供的还是自定义注册的 LLM 和多模态模型，都可以在 Foundry 和 AIP 应用中无缝使用，包括 Pipeline Builder、Workshop、AIP Logic 和开发者工具链。

为协助管理，可以精确地治理模型访问，在所有用例和工作线上设置 token 限制。同时，资源管理能力通过 MMDP 连接的所有数据、计算和 AI 模型统一延伸，不受具体底层模态、运行时或格式的影响。

![Image 6: Illustration showing example models supported by MMDP with title "Any Model".](https://www.palantir.com/docs/resources/foundry/architecture-center/mmdp-any-model.png)

## 任意位置：MMDP 对开放性的承诺

MMDP 通过抵制单体存储和计算架构提供的简单答案，桥接了分析和运营两个世界。

开放数据架构利用 Apache Iceberg 等开放标准，同时为媒体、文档、流和多模态数据类型提供同等支持。

开放计算架构内置常用运行时，允许团队自带计算资源，并提供丰富接口与企业中现有计算基础设施编排协作。

这种开放性延伸到生成式 AI，通过 Model Catalog 提供多种 LLM，并支持轻松注册自定义、微调和现有企业模型。

借助 Palantir Apollo，所有这些灵活性在所有维度上都与底层基础设施提供商无关，并根据前线最紧迫的需求持续演进。

MMDP 的理念："任意数据、任意计算、任意模型、任意位置。"

![Image 7: Illustration showing MMDP underlying the Ontology layer and the automations, agents, and apps layer.](https://www.palantir.com/docs/resources/foundry/architecture-center/mmdp-layers.png)
