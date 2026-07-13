Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/app-building/overview/

Published Time: Thu, 09 Jul 2026 17:47:50 GMT

# 用例开发

Palantir 平台旨在赋能多元化的构建者社区，提供一系列强大的用例开发工具，包括应用构建工具、工作流构建工具、集成的 [analytics tools](https://www.palantir.com/docs/foundry/app-building/analytics-operations/) 和 [developer tools](https://www.palantir.com/docs/foundry/dev-toolchain/overview/)。每个工具都利用了 Foundry 核心的安全、血缘、数据和计算原语，让团队专注于交付运营能力，而非管理基础设施。关键是，Palantir 平台中的每个工具都被设计为持续、安全地丰富一组一致的数据和模型资产（包含在 [Ontology](https://www.palantir.com/docs/foundry/ontology/overview/) 中）。这使得知识能够随着运营工作流在企业中扩展而不断积累。

Palantir Learning portal

在 [learn.palantir.com ↗](https://learn.palantir.com/scoping-use-cases-for-foundry-aip) 了解 Foundry 和 AIP 的用例范围界定。

## 应用构建

Palantir 平台的主要应用构建工具是 [Workshop](https://www.palantir.com/docs/foundry/app-building/overview/#workshop) 和 [Slate](https://www.palantir.com/docs/foundry/app-building/overview/#slate)。

除了这些内置工具，还可以使用 [developer toolchain and Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/app-building/overview/#developer-toolchain) 在 Palantir 平台之上创建自定义应用。

### Workshop

**Workshop** 是一个灵活的、面向对象的应用构建工具。Workshop 利用 [Ontology](https://www.palantir.com/docs/foundry/ontology/overview/) 中的语义原语（如对象、链接）和动态原语（如 Actions、Functions），实现快速交付高度交互的桌面和移动应用。Workshop 的应用构建体验让用户能够通过无代码、低代码和代码组件创建强大应用，将对象、链接和 Actions 编织到用户驱动的工作流中，远超仪表板或被动可视化。无需技术专长即可开始使用组件构建。同时，基于 [Functions](https://www.palantir.com/docs/foundry/functions/overview/) 的代码增强可以无缝嵌入 Workshop 组件，实现复杂交互、级联处理和复杂数据采集。

[了解更多关于 Workshop。](https://www.palantir.com/docs/foundry/workshop/overview/)

### Slate

**Slate** 为构建者提供一套灵活的工具，快速创建运营应用和交互式仪表板。Slate 让应用开发者通过拖放界面构建动态响应式应用，减少开发时间和成本。Slate 包含与 Foundry Ontology 无缝集成的能力，同时也支持开发者使用 HTML、CSS 和 JavaScript 完全自定义应用。通过自定义 Slate 应用，组织各层级的利益相关者都可以快速探索和理解数据，做出更明智的决策。

[了解更多关于 Slate。](https://www.palantir.com/docs/foundry/slate/overview/)

## 工作流构建和管理

Palantir 平台的主要工作流构建和管理工具包括 [Workflow Lineage](https://www.palantir.com/docs/foundry/app-building/overview/#workflow-lineage)、[Automate](https://www.palantir.com/docs/foundry/app-building/overview/#automate)、[Solution Designer](https://www.palantir.com/docs/foundry/app-building/overview/#solution-designer) 和 [Use Cases](https://www.palantir.com/docs/foundry/app-building/overview/#use-cases)。

### Workflow Lineage

**Workflow Lineage** 提供交互式工作空间，用于理解和管理应用及其底层流程。通过 Workflow Lineage，你可以探索工作流并查看对象、actions、functions、大语言模型和应用等信息。Workflow Lineage 对创建、调试或维护工作流的应用构建者特别有用。溯源图、更深层的属性和 Workshop 组件/变量溯源，以及升级工具在修改或扩展工作流时都很有帮助。

### Automate

**Automate** 提供了一个统一入口，用于设置和执行平台中的所有业务自动化。Automate 应用允许用户定义条件和效果；条件会被持续检查，当满足指定条件时效果会自动执行。

[了解更多关于 Automate。](https://www.palantir.com/docs/foundry/automate/overview/)

### Carbon

**Carbon** 支持为特定用户群体配置定制化的平台体验（称为工作空间）。Carbon 可以为需要执行关键运营工作流的非技术用户提供专注的体验。每个 Carbon 工作空间都是精选的应用和资源集合，可以配置为优化一组特定的终端用户运营工作流。例如，一个飞机零部件维护工作空间可能包含一个 Workshop 应用（动态更新的待维护零部件列表和 Ontology 驱动的零部件分诊 Actions）、一个用于调查零部件维护问题的应用、以及一个展示维护趋势的 Quiver 分析。Carbon 让 Foundry 丰富的应用和分析能力可以集成到专注的运营体验中。

[了解更多关于 Carbon。](https://www.palantir.com/docs/foundry/carbon/overview/)

### Solution Designer

**Solution Designer** 是一个交互式工具，用于创建使用 Palantir 平台构建的解决方案的架构表示，包括第一方和第三方集成点的表示、平台资源链接、按需访问文档和最佳实践等。

[了解更多关于 Solution Designer。](https://www.palantir.com/docs/foundry/solution-designer/overview/)

### Use Cases

Use Cases 应用允许构建者在单一运营界面中组织工作。通过将文件系统视图与 Ontology 管理视图结合，开发者可以访问针对其负责工作的精选视图。

[了解更多关于 Use Cases 应用。](https://www.palantir.com/docs/foundry/use-cases/use-case-overview/)

## 开发者工具链

Palantir [developer toolchain](https://www.palantir.com/docs/foundry/dev-toolchain/overview/) 让你能使用自己的工具在 Palantir 平台之上构建应用。

Palantir 开发者工具链的核心是 [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/)。你可以用 Developer Console（在 Palantir 平台中可用）生成 Ontology 专属的 SDK。Ontology SDK 可以创建为 TypeScript 的 NPM（Node Package Manager）包或 Python 的 Pip 或 Conda 包，它只包含你 Ontology 的预选子集。SDK 让你访问对象类型、应用 actions 更新 Ontology 中的数据、调用 functions，以及为 [AIP-enabled](https://www.palantir.com/docs/foundry/aip/enable-aip-features/) 注册运行 AIP Logic functions。Developer Console 还包括为你的应用选择的实体的 Ontology 专属文档。应用使用 OAuth 流程作为公共或机密客户端访问数据。

[了解更多关于 Ontology SDK。](https://www.palantir.com/docs/foundry/ontology-sdk/overview/)

[下一页 What is an operational application? →](https://www.palantir.com/docs/foundry/app-building/operational-apps/)
