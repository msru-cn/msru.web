Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/architecture-center/interoperability/

Markdown Content:
## 互操作性

Palantir AIP 和 Foundry 设计为与全系列数据、逻辑、AI、工作流和安全系统互操作。

这包括跨越传统数据、分析、治理和运营领域的工具和技术——包括边缘设备和加固环境。

消除集成平台常见的传统权衡，Palantir 架构的目标是提供连贯完整的体验，同时支持与现有（或未来）企业软件平台深度连接所需的模块化。

![Image 1: Illustration of Palantir platform interoperability.](https://www.palantir.com/docs/resources/foundry/architecture-center/interoperability-layers.png)

## 数据互操作性

Palantir 平台基于开放数据标准构建。所有数据以其原始格式（如 CSV、Iceberg 或 Parquet）存储，并通过标准接口（如 REST、JDBC 和 S3 兼容访问）可访问。此外，所有转换后的数据默认以开放格式（如 Apache Iceberg 和 Apache Parquet）可访问。这允许与现有数据平台、记录系统和企业数据架构中的其他服务深度连接。

除原生能力外，Multimodal Data Plane（MMDP）实现了与现有企业资产的前所未有的集成。这包括 Virtual Tables 框架，用于在通用数据平台（如 Databricks、Snowflake 或 BigQuery）中利用现有数据资产而无需不必要的数据复制。MMDP 还包括完全编排的下推计算，使 Pipeline Builder 等应用可以无缝地与现有计算投资配合使用。

了解更多关于数据互操作性：

*   探索 [Multimodal Data Plane](https://www.palantir.com/docs/foundry/architecture-center/multimodal-data-plane/) 背后的理念。
*   查看不断扩展的开箱即用 Data Connection [Source types](https://www.palantir.com/docs/foundry/data-integration/source-type-overview/) 列表。
*   了解构建 [custom data connections](https://www.palantir.com/docs/foundry/data-connection/external-transforms/)。
*   查看使用 [Virtual Tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/) 避免数据复制的选项。
*   了解使用 [Palantir HyperAuto](https://www.palantir.com/docs/foundry/hyperauto/overview/) 开箱即用生成数据管道。

## 元数据互操作性

Palantir Foundry 和 AIP 为各种强制性元数据（如安全、归属或血缘）和自主性元数据（如标签或增强信息）提供丰富的元数据集成能力。元数据服务安全地公开跨项目、数据集、Ontology 元素、agents、模型、分析、应用、管道编排、资源健康等存在的所有元数据属性。这允许与现有数据目录、元数据管理工具、主数据管理工具和现有治理架构中的其他服务深度连接。

了解更多关于各种类型的元数据：

*   了解 [dataset metadata](https://www.palantir.com/docs/foundry/data-integration/datasets/#schemas)（以及通过 [Platform SDK ↗](https://github.com/palantir/foundry-platform-python) 可访问的所有元数据）。
*   探索 [Developer Libraries & API reference](https://www.palantir.com/docs/foundry/api-reference/)。
*   了解 [Ontology metadata](https://www.palantir.com/docs/foundry/ontologies/ontologies-overview/)（以及 [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/)）。

## 语义互操作性

Palantir Ontology 超越了传统语义定义，包含驱动复杂操作、agents 和 AI 驱动自动化的对象、链接、actions 和 functions 的细粒度定义。组织 Ontology 中的所有元素都可以通过 REST APIs 访问并通过 JSON 驱动的编写范式配置。这允许与现有语义建模工具、数据目录中的 ontologies 和特定领域建模工具进行双向同步。

了解更多关于创建和集成 Ontology：

*   查看 [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) 了解如何在 Ontology 之上构建应用和工作流。
*   了解使用 [Webhooks](https://www.palantir.com/docs/foundry/action-types/webhooks/) 与现有运营系统集成。
*   探索 [Palantir MCP](https://www.palantir.com/docs/foundry/palantir-mcp/overview/)，它支持 agent 驱动的语义互操作。

## 代码与逻辑互操作性

Palantir 对开放软件标准的承诺适用于数据工程、数据科学和所有其他代码驱动的编写范式。所有数据转换默认使用开放语言（如 Python、Java 或 SparkSQL），这些语言绑定了平台捆绑的开放运行时（如 Spark、Flink、DataFusion 或 Polars）。此外，所有数据科学工作流利用开放语言（如 Python 或 R），利用相同的开放运行时，并设计为利用通用开放格式（如 ONNX）。代码仓库存储在高可用 Git 服务中，可以通过 UI 驱动的导出和 API（编程）交互安全访问。

除了打包的计算运行时和相关语言外，[Compute Modules](https://www.palantir.com/docs/foundry/compute-modules/overview/) 框架允许团队自带容器化运行时、应用、模型和各种可执行文件。这些容器由 Palantir 底层计算基础设施（[Rubix](https://www.palantir.com/docs/foundry/architecture-center/rubix/)）安全编排和管理，并可以在全系列数据管道、应用构建、分析和 AI 驱动工作流中稳健地使用。

了解更多关于代码和逻辑接口：

*   查看数据转换开箱即用 [languages supported](https://www.palantir.com/docs/foundry/building-pipelines/supported-languages/)。
*   查看数据科学工作流的 [languages supported](https://www.palantir.com/docs/foundry/code-workbook/workbooks-languages/)。
*   探索全系列 [model integration](https://www.palantir.com/docs/foundry/model-integration/models/) 选项。
*   了解 [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/) 环境。
*   了解如何使用 [Compute Modules](https://www.palantir.com/docs/foundry/compute-modules/overview/) "自带容器"。

## 分析互操作性

Palantir Foundry 和 AIP 提供全系列分析工具赋能用户，还能与现有投资（如 BI 和数据科学工具）无缝互操作。开箱即用的连接器可用于 Power BI、Tableau、Jupyter 和 RStudio 等常见系统。这些连接器让广泛的用户能够利用集成数据，同时享受一流的数据管理、模型管理和治理。

除了数据连接器，[Code Workspaces](https://www.palantir.com/docs/foundry/code-workspaces/overview/) 提供了在平台内原生使用 Jupyter 和 RStudio 的无缝体验。

了解分析连接器：

*   了解 [SQL & BI Connectors](https://www.palantir.com/docs/foundry/analytics-connectivity/overview/) 如何与现有 BI 投资集成。
*   [Get started](https://www.palantir.com/docs/foundry/code-workspaces/getting-started/) 直接在 Jupyter 或 RStudio 中使用 Code Workspaces。
*   参考 GitHub 上的 [Platform SDK ↗](https://github.com/palantir/foundry-platform-python) 和 [R SDK ↗](https://github.com/palantir/palantir-r-sdk) 与数据科学工具集成。

## 安全互操作性

平台为所有资源提供稳健透明的控制。安全服务旨在利用现有认证系统（例如通过 SAML）进行身份验证，以及现有授权系统（如 Active Directory）进行权限管理，可跨越基于角色、基于分类和基于用途的制度。通过 Ontology SDK，权限可以灵活地扩展和管理用于第三方和自定义应用开发。通过平台的 REST APIs 可以动态和追溯地访问所有安全信息。

了解更多关于与 Palantir 安全服务接口：

*   了解设置 [SAML integration](https://www.palantir.com/docs/foundry/authentication/overview/) 进行认证。
*   了解 Palantir 如何支持 [cross-organization collaboration](https://www.palantir.com/docs/foundry/security/cross-organization-collaboration/)。
*   了解 [Ontology SDK](https://www.palantir.com/docs/foundry/developer-console/permissions/) 中的权限。
