Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/ai-fde/overview/

Markdown Content:
![Image 1: AI FDE 概览头图。](https://www.palantir.com/docs/resources/foundry/ai-fde/ai-fde-overview-hero.png)

## AI FDE

**AI FDE**，即 AI 驱动的前沿部署工程师（Forward Deployed Engineer），是一个通过对话命令操作 Foundry 的交互式 Agent。AI FDE 将自然语言请求转化为 Foundry 操作，允许你执行数据转换、管理代码仓库、构建和维护 Ontology 等。你还可以为 AI FDE 提供来自 Foundry 的上下文，以辅助和指导操作。

## 要求

AI FDE 需要在你的环境中[启用 AIP](https://www.palantir.com/docs/foundry/aip/enable-aip-features/)。还建议启用 [Global Branching](https://www.palantir.com/docs/foundry/global-branching/overview/) 以支持 AI FDE 的 Ontology 编辑操作。请联系你的 Palantir 管理员为环境启用 AIP 和 Global Branching。

## AI FDE 工作原理

当你用自然语言提出请求时，AI FDE 会执行以下步骤：

1.   分析你的意图和提供的上下文。
2.   确定要执行的 Foundry 操作。
3.   使用原生工具支持执行请求的操作。
4.   返回带上下文的说明和文档。

所有操作都遵循用户的现有权限，包括应用和数据访问权限。你可以选择要使用的具体模型，以及模型可用的工具和数据，确保 AI FDE 仅能访问所请求操作所需的能力。

### 可定制工具

AI FDE 可以使用与用户在平台中可执行操作匹配的工具，包括创建对象类型、编写转换和运行构建。使用工具的能力对于需要可靠地与开发工具、API 和基础设施交互的生产系统至关重要。AI FDE 会显示在 Foundry 中执行操作时使用的工具，并在[聊天大纲](https://www.palantir.com/docs/foundry/ai-fde/navigation/#chat-outline)中保留活跃会话期间所有提示词和工具的记录。

### 上下文管理

AI FDE 让用户对模型可以访问的信息拥有完全的控制权和可见性。初始状态下，AI FDE 加载最少的上下文，为模型提供 Foundry 概念的通用知识，而不访问用户数据。这种基线配置确保系统每次交互都从干净的状态开始。这种受控的上下文方法避免了"上下文污染"——无关信息稀释模型推理效果的问题；通过从受控基线开始，AI FDE 可以对模型的能力和知识边界保持精确的治理。

用户可以通过多种方式扩展上下文，包括拖拽文件夹、数据集或文档来提供相关信息。[了解更多上下文管理。](https://www.palantir.com/docs/foundry/ai-fde/navigation/#manage-context)

### 闭环操作

AI FDE 采用*闭环*操作模型，模型执行操作、观察结果，并利用反馈决定下一步操作。这创建了一个持续的反馈循环，一个操作的输出成为后续决策的输入，从而实现复杂的多步骤工作流。

AI FDE 可以执行各种操作来验证自己的更改，包括但不限于：

*   运行转换预览来验证转换代码。
*   运行函数预览来验证函数行为。
*   检查 CI 来验证 Code Repositories 中编写的代码。

## 能力

AI FDE 可以访问多种[模式和能力](https://www.palantir.com/docs/foundry/ai-fde/modes-and-capabilities/)，使其能够执行广泛的操作。你可以在请求输入框下方的 **Tools** 菜单中自定义 AI FDE 可用的工具。

AI FDE 能够基于自然语言描述执行各种任务，包括：

*   **数据集成：** 构建或修改数据管道（Python 转换或 Pipeline Builder）。
*   **数据连接：** 创建、管理和调试 [Data Connection](https://www.palantir.com/docs/foundry/data-connection/core-concepts/) 源、出站策略和其他功能。
*   **Ontology 编辑：** 创建或更新构成 Ontology 的对象、链接和操作。
*   **Functions 编辑：** 在 [Logic](https://www.palantir.com/docs/foundry/logic/overview/)、TypeScript 或 Python 中编写 Foundry 函数，并使用 [AIP Evals](https://www.palantir.com/docs/foundry/aip-evals/overview/) 进行测试。
*   **探索：** 只读调查；在进行更改之前了解平台中存在什么。
*   **治理：** 审计权限、访问控制、标记和数据保护。
*   **OSDK React：** 构建连接到 Foundry 数据的 React 应用或自定义组件。
*   **平台问答：** 询问有关 Foundry 如何工作的一般问题。

默认情况下，AI FDE 在所有工作流中使用分支。AI FDE 会在 Global Branch 提案或 Code Repository pull request 中提议更改以供审核。

## 模型支持

要在 AI FDE 中使用，模型必须在你的环境中启用。AI FDE 对 Anthropic、OpenAI、Google 和 xAI 模型提供一等支持，同时支持原生工具 API。

* * *

注意：AIP 功能可能会发生变化，不同客户之间可能存在差异。
