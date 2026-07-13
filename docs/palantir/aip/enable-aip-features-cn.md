Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip/enable-aip-features/

Markdown Content:
## 启用 AIP 功能

[Palantir AIP（Artificial Intelligence Platform）](https://www.palantir.com/docs/foundry/platform-overview/aip-capabilities/) 在新 enrollment 中默认启用。2024 年之前开始的 enrollment 可能需要手动在 [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 中开启 AIP 功能访问。如果你是 enrollment administrator，可以在 **Control Panel > AIP settings** 中管理 AIP 配置。

![Image 1: Enable AIP 开关](https://www.palantir.com/docs/resources/foundry/aip/enable-aip-toggle.png)

注意，启用 AIP 可能会[产生额外的计算用量](https://www.palantir.com/docs/foundry/aip/aip-compute-usage/)。

[查看支持的模型列表。](https://www.palantir.com/docs/foundry/aip/supported-llms/)

## AIP 与自定义工作流能力

AIP 的 AI 功能可分为三个类别：

*   **AIP Assist：** 一个 LLM 驱动的支持工具，帮助用户导航、理解 Palantir 平台并从中获取价值。用户可以用自然语言向 AIP Assist 提问，获得实时的查询帮助。
*   **平台应用中的 AIP 助手功能：** 原生的 LLM 驱动功能，帮助终端用户在 Palantir 平台中执行常规工作流。这些是高度针对性的功能，利用对平台的了解来加速用户的日常操作。
*   **自定义工作流的 AIP 能力：** 一组允许开发者构建自有 LLM 驱动工作流或应用的能力。这些是面向开发者或数据科学家的开放式功能。

## AIP 权限

Palantir 平台上的 AIP 使用受两级权限管控：

*   **[AIP 和核心助手功能](https://www.palantir.com/docs/foundry/aip/aip-features/)：** 开启 AIP、[AIP Assist](https://www.palantir.com/docs/foundry/assist/overview/) 以及 [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/aip-features/)、[Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-aip/) 和 Workshop 中的相关助手功能。

![Image 2: 启用 AIP 和核心功能的开关。](https://www.palantir.com/docs/resources/foundry/aip/enable-initial-aip-features.png)

*   **自定义工作流的 AIP 能力：** 启用 AIP 后，平台管理员可以启用额外一层能力，让开发者和应用构建者创建自定义 AIP 工作流，并向用户授予使用这些自定义 AIP 工作流所需的权限。授权后解锁的能力如下：

    *   **点击界面中支持 LLM 的能力**
        *   [AIP Logic: Use LLM Board](https://www.palantir.com/docs/foundry/logic/getting-started/#getting-started)
        *   [Pipeline Builder: Use LLM 节点](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-llm/)和 [Text-to-embeddings](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-aip/#text-to-embeddings)
        *   [AIP Automate](https://www.palantir.com/docs/foundry/logic/aip-logic-integration-automate/)
        *   [AIP Model Catalog](https://www.palantir.com/docs/foundry/model-catalog/overview/)
        *   [AIP Chatbot Studio](https://www.palantir.com/docs/foundry/chatbot-studio/overview/)（原 AIP Agent Studio）
        *   AIP Workshop 组件：[AIP Chatbot](https://www.palantir.com/docs/foundry/workshop/widgets-aip-chatbot/)、[AIP Generated Content](https://www.palantir.com/docs/foundry/workshop/widgets-aip-generated-content/)
        *   [AIP Workshop translations](https://www.palantir.com/docs/foundry/workshop/translations/#automatic-translation-with-aip)
        *   [Quiver](https://www.palantir.com/docs/foundry/quiver/quiver-aip/)
        *   [AIP Threads](https://www.palantir.com/docs/foundry/threads/overview/)

    *   **基于代码工具的开发能力**
        *   [使用 LLM 的 Transforms](https://www.palantir.com/docs/foundry/transforms-python-spark/palantir-provided-models/)
        *   [使用 LLM 的 Functions](https://www.palantir.com/docs/foundry/functions/language-models-python-tsv2/)
        *   [Code Workspaces 中使用 LLM 的 Jupyter®](https://www.palantir.com/docs/foundry/code-workspaces/overview/)

## 限制 AIP 使用

平台管理员可以在两个不同层级限制 AIP 使用：用户组和 Organizations。

### 用户组

要按用户组限制 AIP 使用，平台管理员可以选择 **Everyone**、指定的 **User Groups**，或选择 **Nobody** 来限制使用。

![Image 3: 启用自定义工作流的 AIP 能力](https://www.palantir.com/docs/resources/foundry/aip/grant-use-aip-developer-capabilities.png?width=500)

注意，某些应用（如 AIP Logic）可能需要先在 **Control Panel > Application access** 中启用后才能使用。

### Organizations

要按 Organizations 限制 AIP，平台管理员可以启用 **Restrict AIP To Organizations** 选项，并从下拉菜单中选择目标 Organizations。请注意，此设置是将 AIP _限制_在所选 Organizations 中。因此，未被选中的 Organizations 将禁用 AIP。此外，如果 enrollment 未启用 AIP，则没有任何 Organization 能访问 AIP。

只有当 AIP 在资源项目上的**所有** organization markings 中都启用时，才认为该资源启用了 AIP。

![Image 4: 将 AIP 限制在指定 Organizations。](https://www.palantir.com/docs/resources/foundry/aip/restrict-aip-to-organizations.png)

## 启用 LLM

Enrollment administrator 必须在 Control Panel 的 **AIP settings** 扩展中的 **Model enablement** 标签下逐个启用 LLM。

![Image 5: Control Panel AIP Settings 扩展中的 Model enablement 标签。](https://www.palantir.com/docs/resources/foundry/aip/model-enablement.png?width=700)

### 了解模型状态

Model enablement 界面中的每个模型系列显示以下三种状态之一：

*   **Enabled：** 模型系列已激活，用户和工作流可以使用。无需额外操作。
*   **Disabled：** 模型系列在你的 enrollment 上可用，但尚未被管理员激活。要启用它，选择 **Manage** 并接受条款和条件。
*   **Disallowed：** 模型系列因法律、地理或基础设施限制而被限制。请联系 Palantir 支持讨论可用选项。

Enrollment administrator 必须接受每个模型系列的相关条款和条件后才能启用使用。**Disabled** 状态的模型系列可以直接通过 Control Panel 启用，而 **Disallowed** 状态的模型需要 Palantir 支持手动配置后才能使用。

![Image 6: 允许模型系列免责声明和条款接受消息。](https://www.palantir.com/docs/resources/foundry/aip/model-terms-acceptance.png)

禁用模型系列组将导致依赖该组中模型的工作流中断。

[查看所有支持模型的列表。](https://www.palantir.com/docs/foundry/aip/supported-llms/#available-llms)

[了解如何将自有模型接入 Palantir 平台运行。](https://www.palantir.com/docs/foundry/aip/bring-your-own-model/)

此外，enrollment administrator 可以在 organization 级别启用或禁用模型系列，允许同一 enrollment 中的某些 organization 访问特定模型系列，同时限制其他 organization。

在下面的示例中，此 enrollment 中只有 `Test1` organization 能访问 Amazon Bedrock Claude 模型。

![Image 7: Organization 级别的模型系列启用。](https://www.palantir.com/docs/resources/foundry/aip/org-model-family-enablement.png)

### 实验性模型

实验性模型的使用可以由 enrollment administrator 启用和禁用。要使实验性模型在工作流中可见，必须同时启用 **Enable experimental models** 开关和该实验性模型所属的[模型系列](https://www.palantir.com/docs/foundry/aip/enable-aip-features/#enable-llms)。

![Image 8: Experimental Models 开关](https://www.palantir.com/docs/resources/foundry/aip/experimental-models-toggle.png)

## 了解更多

*   [可用 LLM](https://www.palantir.com/docs/foundry/aip/supported-llms/#available-llms)
*   [LLM 可用性前提条件](https://www.palantir.com/docs/foundry/aip/supported-llms/#llm-availability-prerequisites)
*   [LLM 容量管理](https://www.palantir.com/docs/foundry/aip/llm-capacity-management/)
*   [模型可用性的地理限制](https://www.palantir.com/docs/foundry/aip/supported-llms/#llm-availability-by-geography)

* * *

注意：AIP 功能可用性可能会变化，不同客户之间可能有所不同。

_"OpenAI" 名称和 "GPT" 品牌是 OpenAI 的财产。_

_Jupyter®、JupyterLab® 和 Jupyter® 标识是 NumFOCUS 的商标或注册商标。_

所有引用的第三方商标（包括徽标和图标）仍为其各自所有者的财产。不存在任何关联或背书关系。
