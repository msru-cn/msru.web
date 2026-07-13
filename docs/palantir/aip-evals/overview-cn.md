Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-evals/overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/aip-evals/overview/#aip-evals)AIP Evals

AIP Evals 是一个测试环境，用于评估 [AIP Logic functions](https://www.palantir.com/docs/foundry/logic/overview/)、[AIP Chatbot functions](https://www.palantir.com/docs/foundry/chatbot-studio/chatbots-as-functions/) 或[代码编写的 functions](https://www.palantir.com/docs/foundry/functions/overview/) 的性能。它专门设计来帮助你应对 LLM 的非确定性特征。AIP Evals 允许你创建测试用例、定义评估函数来衡量性能，并将结果与函数的先前版本进行比较。它让你建立必要的信心，将 LLM 驱动的函数投入生产或修改现有实现。

你可以使用 AIP Evals 来：

*   创建测试用例并定义评估标准。
*   调试、迭代和改进函数和 Prompt。
*   比较不同模型在你的函数上的性能。
*   检查多次运行间的差异。

AIP Evals 也可作为 [AI FDE](https://www.palantir.com/docs/foundry/ai-fde/overview/) 中的集成工具使用，让你通过对话式命令创建和运行评估套件。

![Image 2: Evals 概述](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-overview.png)

## [](https://www.palantir.com/docs/foundry/aip-evals/overview/#core-concepts)核心概念

**评估套件：** 用于基准测试函数性能的测试用例、目标函数和评估函数的集合。

**目标函数：** 被评估的函数。一个套件可以配置为同时测试[多个目标函数](https://www.palantir.com/docs/foundry/aip-evals/create-suite/#additional-target-functions)。

**评估函数：** 将目标函数的实际输出与期望输出进行比较或评估时使用的方法。

**测试用例：** 在评估套件运行期间传入评估函数的已定义输入和期望输出集。

**指标：** 评估函数的结果。指标按测试用例生成，可以在运行之间进行汇总或逐个比较。

要开始使用，创建一个 [Logic 函数的评估套件](https://www.palantir.com/docs/foundry/aip-evals/getting-started/)，或创建一个[通用函数的评估套件](https://www.palantir.com/docs/foundry/aip-evals/create-suite/)，并了解更多关于[评估运行配置](https://www.palantir.com/docs/foundry/aip-evals/run-suite/)的信息。

[← 上一页 AIP Document Intelligence / Document-to-text media transformations](https://www.palantir.com/docs/foundry/document-intelligence/document-to-text/)

[下一页 Logic 函数的评估套件 →](https://www.palantir.com/docs/foundry/aip-evals/getting-started/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
