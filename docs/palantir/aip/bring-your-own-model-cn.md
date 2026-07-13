Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip/bring-your-own-model/

Markdown Content:
## 将自有模型接入 AIP

Bring-your-own-model（BYOM），在 Palantir 平台中也称为注册模型（registered models），为客户提供一等公民级别的支持，让你可以将自有 LLM 或账户连接到 Palantir 各开发者产品的 AIP 中。这些产品包括 AI FDE、AIP Analyst、AIP Chatbot Studio、AIP Logic、Workshop、Code Repositories 中的 TypeScript functions、Pipeline Builder（即将推出）等。

## 何时使用

基于 LLM 的支持情况和可用性，我们通常建议使用模型提供商（如 OpenAI、Azure OpenAI、AWS Bedrock、xAI、GCP Vertex）提供的 Palantir 内置模型，或 Palantir 自托管的开源模型（如 Llama 模型）。

但你可能更倾向于将自有模型或账户接入 AIP。我们建议仅在以下情况下使用注册模型：因法律合规原因无法使用 Palantir 内置模型，或者你有自己的微调模型或其他独特的 LLM 需要在 AIP 中使用。

我们在 2026 年 3 月推出了新的注册模型实现，提供针对最常见模型提供商 API 优化的精简集成，本页将详细介绍。新实现在 AI FDE 和 AIP Analyst 等更多 AIP 应用中提供了更好的性能和运维功能。它还支持原生工具调用和推理，同时提供 AIP 基础设施工具，如速率限制、[Resource Management](https://www.palantir.com/docs/foundry/resource-management/overview/) 中的用量可观测性、[Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 中的权限控制和模型选择器。由于这些改进，我们建议使用新实现，而非之前通过 [function interfaces](https://www.palantir.com/docs/foundry/functions/function-interfaces/) 注册 LLM 的方式。

如果你之前已通过 function interfaces 注册了模型，请参阅[使用 function interfaces 注册 LLM [旧版] 文档](https://www.palantir.com/docs/foundry/aip/chat-completion-function-interface-quickstart/)。如果你的用例无法通过注册模型很好地解决，请联系 Palantir 支持。

## 支持的应用和功能

注册模型 BYOM 实现支持以下 AIP 应用和其他平台能力：

*   [AI FDE](https://www.palantir.com/docs/foundry/ai-fde/overview/)
*   [AIP Analyst](https://www.palantir.com/docs/foundry/aip-analyst/overview/)
*   [AIP Chatbot Studio](https://www.palantir.com/docs/foundry/chatbot-studio/overview/)
*   [AIP Logic](https://www.palantir.com/docs/foundry/logic/overview/)
*   [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/)（通过 AIP Chatbot Studio 或 AIP Logic）
*   [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/) 中的 [TypeScript functions](https://www.palantir.com/docs/foundry/functions/typescript-v2-getting-started/)

此外，该实现还提供以下 AIP 基础设施工具：

*   跨 AIP 应用的模型选择器
*   [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 权限和启用
*   [Resource Management](https://www.palantir.com/docs/foundry/resource-management/overview/) 应用速率限制和用量可观测性

## 不支持的应用和功能

注册模型 BYOM 实现目前不支持以下应用或功能：

*   [AIP Assist](https://www.palantir.com/docs/foundry/assist/overview/)，包括 [Code Repository 中的 code assist](https://www.palantir.com/docs/foundry/assist/application-integrations/#aip-assist-in-code-repositories)
*   Pipeline Builder 的 [**Generate**](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-aip/#generate) 和 [**Explain**](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-aip/#explain) 功能

## 如何注册和使用自有模型

你必须是 **Enrollment administrator** 才能注册模型，_并且_在按以下步骤配置的 Data Connection 源上拥有 `Owner` 或 `Editor` 权限。

首先，按以下步骤在 Data Connection 中创建 REST API 源：

1.   打开 [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) 应用，选择 **New source > REST API**，填写模型提供商的端点。
2.   输入源的 **Name** 并选择 **Source location**，确保你能保持 `Owner` 或 `Editor` 权限。
3.   配置模型提供商的 **Domain base URL**、**Authentication** 方式和 **Port**。
4.   确保在 **Export configuration** 部分开启 **Enable exports to this source** 和 **Enable exports to this source without markings validations**。
5.   完成 REST API 源的配置。可以参考 [REST API connector 文档](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/)获取更多详情。

![Image 1: Export configuration 部分，启用了 Enable exports to this source 和 Enable exports to this source without markings validations 开关。](https://www.palantir.com/docs/resources/foundry/aip/byom-export-configuration.png)

接下来，按以下步骤在 Control Panel 中注册模型：

1.   打开 Control Panel，导航到 **AIP settings** 扩展，选择 **Registered models** 标签。
2.   选择 **Register a model**。
3.   在 **Source configuration** 页面的 **Select source rid** 下拉菜单中搜索并选择 REST API 源 RID。
4.   在 **Configure source API** 和 **Model API configuration** 部分提供模型详情，如模型提供商名称、模型名称和 API 端点路径。
5.   按端点定义模型的能力。你声明的能力决定了模型可以驱动哪些 AIP 功能。启用 **Reasoning**、**Structured outputs** 和 **Tool calling** 可确保 AI FDE 和 AIP Analyst 能使用该模型。
6.   定义模型的速率限制，这是在 Resource Management 应用中启用容量管理和用量可观测性的前提：
    *   **Enrollment 速率限制：** 定义 enrollment 每分钟最大请求数或 token 数。项目级限制按这些 enrollment 限制的百分比计算。
    *   **用户速率限制：** 定义每用户限制，适用于 AI FDE、AIP Analyst 和其他用户归因应用中的用量。

7.   返回 Control Panel 的 **AIP settings** 扩展，为你的 enrollment 启用注册模型访问。你可以向整个 enrollment 或特定用户组授予访问权限。

你的注册模型现在可在各 AIP 应用中使用。它会出现在[所有支持的应用](https://www.palantir.com/docs/foundry/aip/bring-your-own-model/#supported-applications-and-features)的模型选择器中的 **Registered models** 标签下。

![Image 2: 源配置和模型信息。](https://www.palantir.com/docs/resources/foundry/aip/register-byom-model.png)

## 注册模型支持的功能

### LLM 速率限制

注册模型支持与 Palantir 内置模型相同的 LLM 速率限制。**Enrollment administrator** 必须在[模型注册](https://www.palantir.com/docs/foundry/aip/bring-your-own-model/#how-to-register-and-use-your-own-model)时定义 enrollment 级和用户级速率限制。

*   **Enrollment 速率限制** 适用于所有项目级的速率限制。
*   **项目级速率限制** 默认为 enrollment 限制的 70%，但可以在 Resource Management 应用的 **AIP usage and limits** 标签下配置。
*   **用户速率限制** 管控 AI FDE、AIP Analyst 和其他用户归因应用中的每用户消耗。

![Image 3: 配置速率限制。](https://www.palantir.com/docs/resources/foundry/aip/byom-configure-rate-limits.png)

### 权限和启用

*   **注册模型：** 只有 **Enrollment administrator** 可以在 Control Panel 中注册新模型或编辑注册。管理员还必须在关联的 Data Connection 源上拥有 `Owner` 或 `Editor` 权限，才能注册、编辑或删除注册模型。
*   **源权限在注册时解耦：** 模型一旦注册，其与底层 Data Connection 源的关联就与终端用户访问解耦。终端用户无需对源有任何权限即可使用注册模型；访问仅由 Control Panel 中配置的注册模型启用设置管控。
*   **使用注册模型：** 使用注册模型进行构建或作为终端用户使用的权限通过 Control Panel 中的注册模型启用设置管理。可以向整个 enrollment 或特定用户组授予访问权限，与标准 AIP 启用方式类似。
*   **禁用模型：** 注册模型可以随时在 Control Panel 的 **AIP settings** 扩展中禁用，阻止其在各 AIP 应用中使用。

![Image 4: 在 Control Panel 中管控注册模型访问。](https://www.palantir.com/docs/resources/foundry/aip/register-byom-model-access.png)

## 常见问题

### 注册模型支持 markings 吗？

目前，注册模型_不_支持 markings。**Enrollment administrator** 可以在 Control Panel 中限制谁可以使用注册模型，以及在 Resource Management 应用中哪些项目可以获得这些模型的容量。

### 注册模型的费用如何处理？

Palantir 不对使用注册模型收取额外平台费用。调用你外部托管模型的费用由你的模型提供商直接计费。注册模型费用不会出现在 Resource Management 应用中。

### 为什么不支持 AIP Assist 和 Pipeline Builder 的 Generate 和 Explain 功能？

这些是原生平台功能，依赖于对 Palantir 内置模型的评估和测试，我们无法保证它们在不熟悉的客户模型上能正常工作或提供高质量的服务。目前没有计划让注册模型支持这些原生助手能力。
