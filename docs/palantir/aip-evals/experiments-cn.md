Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-evals/experiments/

Markdown Content:
## 运行实验

系统地测试多个参数值的不同组合是评估和优化 LLM 驱动函数的重要环节。你可能想确定哪些模型表现最好同时最小化成本，或哪些 prompt 产生最佳结果。

实验让你优化被测试函数的性能和成本。你可以为 AIP Evals 定义参数值，在单独的评估套件运行中使用 grid search 测试所有可能的组合。之后，你可以分析实验结果以确定表现最佳的参数值。

![Image 1: 解释实验流程的示意图。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-experiments-illustration.png)

## 设置实验

### 准备函数

在本示例中，我们有一个[Logic 函数](https://www.palantir.com/docs/foundry/logic/overview/)用于总结文章，我们想确定什么模型和 prompt 组合表现最佳。注意实验不仅限于 Logic 函数。

首先，我们需要将模型和 prompt 参数化。这意味着将它们添加为输入并在 Logic 函数中使用。在这个例子中，我们想试验 prompt 措辞的细微差异来看看哪个产生最好的摘要。我们将使用 `extraPromptContext` 来为原始 prompt 附加额外上下文。

![Image 2: 将模型添加为可选输入，将 extraPromptContext 添加为 Logic 函数的必需输入。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-logic-inputs-setup.png)

对于模型，我们建议将变量从 `Required` 改为 `Optional`。你还需要配置每个 **Use LLM** block 使用模型变量。可以通过在 UseLLM block 中选择模型选择器并导航到 **Registered** 标签下的模型变量来完成。

![Image 3: UseLLM block 中的模型选择器，在 "Registered" 标签下显示模型变量。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-model-block-setup.png)

### 启用实验

参数化 Logic 函数后，在 **Run configuration** 对话框中开启开关来启用实验。

![Image 4: 在 "Run configuration" 对话框中启用 "Experiments" 开关。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-enable-experiments.png)

### 定义实验

你可以为实验命名，以便之后轻松找到结果。接下来，添加**实验参数**。这些是你想用不同值测试的参数。对于每个参数，你可以指定多个值选项在实验中探索。这将覆盖评估套件中每个测试已配置的现有值。

![Image 5: "Run configuration" 对话框，包含实验名称和参数的输入。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-define-experiment.png)

在该部分底部，你可以看到将发生多少次评估运行，并打开预览查看实验中使用 grid search 测试的所有参数组合。

![Image 6: 总评估运行次数的预览。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-experiment-preview.png)

## 运行实验

要运行实验，关闭对话框并选择 **Run experiment** 选项。

![Image 7: 评估测试用例下方显示的 "Run experiment" 选项。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-run-experiment.png?width=500)

## 查看和分析实验结果

实验完成后，选择侧面板底部的 **Results** 选项。这将带你进入 AIP Evals 应用，在那里你可以分析结果。

AIP Logic 中的 **Most recent run** 卡片仅显示集合中最后一次评估运行的结果（在本例中为第 6 次运行，共 6 次）。要获得结果的完整视图，我们建议通过 AIP Evals 访问。

![Image 8: "Experiment complete" 通知，包含查看实验结果的链接。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-experiment-complete-callout.png?width=500)

### 比较运行

在 AIP Evals 中，单次评估运行和实验运行可以在 **Results > Runs** 标签下查看。从 AIP Logic 的 **Results** 进入时（如上所示），**Runs** 表格将自动筛选到刚运行的实验。

![Image 9: Evals 中的 "Runs" 表格，已筛选到最新实验。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-runs-table-experiment.png)

**Group by** 选项允许你选择表格中的一列来分组运行并查看每组的聚合指标。例如，我们可以按模型分组，轻松比较每个模型在所有指标上的表现。

![Image 10: 按模型分组查看聚合指标。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-runs-table-group-by.png)

使用表头最右侧的列图标来控制表格中显示哪些列。

### 比较测试用例

你可以从 **Runs** 表格中选择最多 4 次运行进行比较，然后选择 **View test cases** 选项或 **Test cases** 子标签继续深入分析结果。

![Image 11: "View test cases" 选项。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-view-test-cases.png)

测试用例比较对于调试不同运行间的测试用例输出和指标对比非常有用，也可以了解不同参数间的性能和成本权衡。你可以将鼠标悬停在选中的运行上查看使用的具体参数值，或在表格中找到。

![Image 12: 悬停在模型 prompt 实验标签上时显示的实验元数据。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-test-cases-table-metadata.png)

你可以通过将相关测试用例和/或迭代分组在一起来改变行的显示方式。

*   **分组测试用例：** 将多次运行中相同测试用例的所有实例合并为一行，而不是在单独行中显示每个实例。
*   **分组迭代：** 将所有迭代折叠为单个选择器，而不是在单独行中显示每次迭代。

列选择器可用于以对你有意义的方式隐藏和显示列。例如，如果你想要数据的密集指标视图，可以选择隐藏包含输入和函数输出的列。

![Image 13: 在测试用例表格中隐藏和显示列。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-test-cases-table-columns.png)

### 调试测试用例

将鼠标悬停在行上时，会显示 **Open** 选项，让你进一步深入了解和调试测试用例的执行。

![Image 14: 悬停时行中显示的 "Open" 选项。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-test-cases-table-hover.png)

这将打开一个抽屉，显示函数执行和套件上任何评估器的输入、输出和日志。

注意比较视图取决于你如何分组表格。当比较运行显示为单独行时，调试器只会显示被选中行对应的运行。

![Image 15: 测试用例调试器。](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-debugger-drawer.png)
