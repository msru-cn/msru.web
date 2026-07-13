Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-evals/analyze-run-results/

Markdown Content:
## 分析运行结果

运行结果展示你的函数在测试用例和评估标准上的表现。结果视图可在 AIP Evals 应用或 AIP Logic 和 AIP Chatbot Studio 中集成的 AIP Evals 侧边栏中查看。

如果你在评估器上配置了[通过标准](https://www.palantir.com/docs/foundry/aip-evals/create-suite/#add-an-evaluator)，AIP Evals 会自动确定每个测试用例的 `Passed` 或 `Failed` 状态。结果页面显示所有测试用例的总体通过率。

## 测试用例调试视图

在某些情况下，你可能需要进一步调查特定的测试用例结果。这时可以使用调试视图。该视图提供单个测试用例的执行追踪、输入/输出数据和错误消息，让你了解函数输出和评估器结果。

### 访问调试视图

有多种方式可以打开测试用例的调试视图。可以从 AIP Evals、AIP Logic 或 AIP Chatbot Studio 打开。

#### 在 AIP Evals 中

1.   在评估套件页面打开 **Results** 标签。
2.   选择一次运行并切换到 **Test cases**。
3.   将鼠标悬停在测试用例结果上。
4.   选择测试用例行右侧出现的 **Open** 选项。

![Image 1: AIP Evals 应用结果视图。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-app-result-view.png)

#### 在 AIP Logic 或 AIP Chatbot Studio 中

1.   在运行结果对话框视图中，将鼠标悬停在测试用例结果上。
2.   选择测试用例卡片右上角出现的 **Debugger** 选项。
3.   调试视图将打开，显示详细的执行信息。

![Image 2: AIP Logic 中的 AIP Evals 运行结果视图。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-sidebar-result-view.png)

### 调试视图功能

调试视图提供测试函数执行和评估器结果的详细信息。它允许你：

*   检查测试用例的测试函数输入和输出。
*   **TypeScript/Python 函数：** 访问已执行代码的语法高亮代码预览。
*   **AIP Logic 函数：** 使用原生 Logic 调试器逐步追踪函数执行。
*   **评估器：** 检查输入和输出值、预期与实际评估器结果的对比，以及自定义函数评估器的调试输出。

![Image 3: AIP Evals 调试视图中的函数输出。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-debug-view-function-output.png)

![Image 4: AIP Evals 调试视图中的评估器标签。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-debug-view-evaluator-output.png)

自定义函数评估器可以在指标输出之外返回字符串值。这些字符串在评估器标签中显示为 **Debug outputs**，提供额外的上下文，如推理过程、中间值或诊断信息。

![Image 5: 自定义函数评估器的调试输出。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-debug-view-debug-outputs.png)

由 AIP Logic 支持的评估函数（如开箱即用的 [Rubric grader 或 Contains key details 评估器](https://www.palantir.com/docs/foundry/aip-evals/create-suite/#marketplace-deployed-evaluation-functions)）允许访问原生 Logic 调试器。这帮助你理解为什么评估产生了特定结果，在使用 LLM-as-a-judge 评估器时特别有用。

在下面截图所示的示例中，rubric grader 评估器未通过，因为 `8` 分未达到定义的最低阈值 `9` 分。查看 Logic 调试器，我们可以看到 LLM judge 只给了 `8` 分是因为回复被包裹在引号中。要获得更高分，我们需要改进 prompt。

![Image 6: 使用 AIP Evals 调试视图理解评估器结果的示例。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-debug-view-evaluator-logic-debugger-example.png)

## 跨目标函数比较结果

当评估套件配置了[多个目标函数](https://www.palantir.com/docs/foundry/aip-evals/create-suite/#additional-target-functions)时，你可以在 AIP Evals 中选择并比较不同目标运行的结果。这对于分析不同函数实现在相同测试用例上的表现很有用。

![Image 7: 多目标结果比较视图。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-multi-target-results-comparison.png)

## 使用 AI FDE 分析结果

你可以使用 [AI FDE](https://www.palantir.com/docs/foundry/ai-fde/overview/) 来分析失败的测试用例、识别根因模式，并获取改进 prompt 的建议。

### 从 AIP Evals 分析

1.   在评估套件页面打开 **Results** 标签。
2.   选择包含失败测试用例的单次运行，选择 **Test cases** 标签。
3.   选择 **Analyze with AI FDE**。

### 从 AIP Logic 分析

1.   从 AIP Evals 侧边栏打开运行结果对话框视图。
2.   选择 **Analyze with AI FDE**。

AI FDE 将在新标签页中打开，包含运行结果的上下文。有关 AI FDE 的更多信息，请参阅 [AI FDE 文档](https://www.palantir.com/docs/foundry/ai-fde/overview/)。
