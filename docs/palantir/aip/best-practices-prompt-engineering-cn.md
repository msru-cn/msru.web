Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip/best-practices-prompt-engineering/

Markdown Content:
## LLM Prompt Engineering 最佳实践

编写有效的 Prompt——即 Prompt Engineering——是释放大语言模型全部潜力的关键。Prompt Engineering 的目标是设计能引导 LLM 生成期望输出的输入。Prompt 的质量直接影响模型回答的相关性、准确性和连贯性。本指南提供了一些 Prompt Engineering 的最佳实践和示例。虽然每种策略的效果可能因 LLM 不同而有所差异，但以下是帮你开始编写有用且准确 Prompt 的最佳实践。

如果你专门在使用 AIP Assist，请参阅我们的 [AIP Assist 最佳实践](https://www.palantir.com/docs/foundry/assist/aip-best-practices/)。

## 高效 Prompt 的关键策略

高效的 Prompt Engineering 是一个动态迭代的过程，融合了清晰性、具体性和上下文相关性。遵循这些最佳实践并结合示例，用户可以最大化大语言模型的效果。随着 AI 技术的发展，持续关注新策略将进一步提升 Prompt 质量和输出准确性。

*   **清晰且具体**

    *   **表述清晰：** 用直接的语言定义任务或问题。
        *   _示例：_ 不要问"你对编程了解多少？"，而是指定"总结我开发 Web 应用时的框架选择。"

    *   **提供上下文：** 给出上下文以锚定模型的回答。
        *   _示例：_ "作为一名软件工程师，解释抽象的好处。"

*   **迭代优化**

    *   **测试和调整：** 尝试不同的 Prompt 结构，根据输出质量进行优化。
        *   _示例：_ 先用"列出 Web 应用的优点。"如果回答太宽泛，优化为"与原生应用相比，列出 Web 应用在维护方面的优点。"

    *   **反馈循环：** 利用模型的反馈持续改进 Prompt 设计。
        *   _示例：_ 如果模型误解了 Prompt，调整措辞后重新测试。

*   **使用示例**

    *   **展示期望输出：** 提供示例来设定期望的格式和内容。
        *   _示例：_ "将以下句子翻译成法语：'Hello, how are you?' 示例：'Hello' 翻译为 'Bonjour'。"

    *   **突出模式：** 用示例建立一致的回答模式。
        *   _示例：_ "对每种水果，列出颜色和味道。示例：苹果 - 红色，甜。"

*   **控制长度和复杂度**

    *   **保持简洁：** 提供必要细节，但不要过度堆砌。
        *   _示例：_ 不要用"你能告诉我机器人学的历史、现状和未来吗？"，而是用"简要描述机器人学的历史。"

    *   **避免过载：** 把复杂任务拆分成更简单的部分。
        *   _示例：_ "首先，列出半导体制造的步骤。然后，详细解释每个步骤。"

*   **加入约束**

    *   **设定边界：** 定义明确的约束来引导回答范围。
        *   _示例：_ "用不超过三句话总结这篇文章。"

    *   **限制不需要的输出：** 使用反面示例或明确指令。
        *   _示例：_ "生成远程工作的优缺点列表，但不要包含个人观点。"

*   **提供相关上下文**

    *   **与模型能力对齐：** 根据模型的优势和局限性定制 Prompt。
        *   _示例：_ 对于在医疗数据上训练的模型，问"解释糖尿病的症状"，而非不相关的主题。

    *   **保持相关性：** 确保 Prompt 与模型的训练数据相关。
        *   _示例：_ "讨论 AI 的最新进展"，与模型的知识库保持一致。

*   **优化交互方式**

    *   **角色扮演：** 分配角色来引导模型的语气和深度。
        *   _示例：_ "作为一名机械工程师，描述在重型制造过程中最重要的传感器。"

    *   **序列式 Prompt：** 用一系列 Prompt 获取复杂回答。
        *   _示例：_ "首先，描述半导体制造过程。接下来，列出三种半导体类型及其制造方式。"

## Prompt Engineering 补充资源

要深入了解 Prompting，可以参考以下来源的相关文档：

*   **Anthropic：**[Prompt engineering overview ↗](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
*   **Google：**[Prompt engineering whitepaper ↗](https://www.kaggle.com/whitepaper-prompt-engineering)
*   **Microsoft：**[Prompt engineering techniques ↗](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering?tabs=chat)
*   **OpenAI：**[Best practices for prompt engineering with the OpenAI API ↗](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)
