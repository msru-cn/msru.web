Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/agent-studio/agents-as-functions/

Markdown Content:
## Chatbots as Functions（将 Chatbot 发布为 Function）

AIP Chatbot 可以发布为 [Function](https://www.palantir.com/docs/foundry/functions/overview/)，从而在平台中任何可以执行 Function 的地方使用。例如，开发者可以将 AIP Chatbot 发布为 Function，在 [AIP Evals](https://www.palantir.com/docs/foundry/aip-evals/overview/) 中进行评估，通过 [Automate](https://www.palantir.com/docs/foundry/automate/overview/) 自动化 chatbot 工作流，或者在 [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/) 中使用 chatbot。你可以配置 Function 版本在每次 chatbot 发布或每次 chatbot 保存时自动发布。

## Function 输入

发布为 Function 的 chatbot 接受以下输入：

*   **`userInput`：** 用户输入字符串，chatbot 将对此进行回复。

*   **`sessionRid`（可选）：** 当前会话的字符串标识符，格式如下：

```
ri.aip-agents..session.{uuid}
```

    *   要与 chatbot 开启新会话，将 `sessionRid` 输入留空。不要提供空字符串，而是完全省略此输入。
    *   提供已有会话的 RID 值以继续该会话。
    *   所有 Function 执行都会返回此 RID。

*   所有用于[应用状态](https://www.palantir.com/docs/foundry/chatbot-studio/application-state/)的应用变量都会作为可选输入添加。这些变量可用于覆盖默认的应用状态值。

    *   对于对象集变量，默认值为该对象类型的基础对象集，即默认包含该对象类型中的所有对象。
    *   对于字符串变量，默认值在 Chatbot Studio 中显示并配置。

## Function 输出

发布为 Function 的 chatbot 产生以下输出：

*   **`markdownResponse`：** chatbot 生成的最终文本回复，使用 markdown 格式。

*   **`sessionRid`：** 当前会话的字符串标识符，格式如下：

```
ri.aip-agents..session.{uuid}
```

    *   所有 Function 执行都会返回此 RID。
    *   将此值传递给下一次 Function 执行以继续会话。

*   所有用于[应用状态](https://www.palantir.com/docs/foundry/chatbot-studio/application-state/)的应用变量都会作为可选输出添加。

    *   这些变量仅在值被更新时才会输出。未更新的变量将为空。

## 将 Chatbot 发布为 Function

1.   在 Chatbot Studio 中，点击右上角 **Publish** 按钮右侧的发布设置图标。这将打开 **Publish settings** 对话框。
![Image 1: 发布设置图标。](https://www.palantir.com/docs/resources/foundry/chatbot-studio/agent-studio-publish-settings.png)

2.   打开 **Publish function from chatbot** 开关，将显示已发布 Function 的额外配置选项。
![Image 2: 'Publish function from chatbot' 开关。](https://www.palantir.com/docs/resources/foundry/chatbot-studio/chatbot-studio-publish-function-toggle.png?width=500)

3.   在展开的 **Publish settings** 对话框中，选择一个 Ontology 并填写 Function 详情，包括 Function 名称、API 名称和描述。你还可以选择 **Version configuration** 下的复选框，在保存 chatbot 时发布 Function 小版本。
![Image 3: 展开的发布设置对话框。](https://www.palantir.com/docs/resources/foundry/chatbot-studio/chatbot-studio-publish-settings-dialog.png?width=500)

4.   点击对话框底部的 **Publish chatbot and function**。

发布后，会收到一条提示通知，告知 chatbot 和 Function 已发布，并附有链接可在 Ontology Manager 中查看已发布的 Function。你也可以打开 **Publish settings**，在 **Published function** 下查看该 Function。

### 关闭 chatbot Function 发布

要关闭 Function 发布，打开 **Publish settings** 并关闭 **Publish function from chatbot** 开关。关闭后，后续发布的 chatbot 版本将不会注册为 Function，直到重新开启此选项。你可以随时重新开启。重新开启后，发布 chatbot 即可发布 Function。

## 使用 AIP Evals 评估 Chatbot

将 chatbot 发布为 Function 后，可以使用 [AIP Evals](https://www.palantir.com/docs/foundry/aip-evals/overview/) 评估套件进行评估。要在 Chatbot Studio 中创建评估套件，确保 chatbot 已发布为 Function，然后打开左侧工具栏的 **Evaluation** 标签页。在这里选择 **Create evaluation suite**，系统会提示你命名套件并选择与 chatbot 相同的 Project。

![Image 4: "Evaluation" 标签页中创建评估套件的选项。](https://www.palantir.com/docs/resources/foundry/chatbot-studio/agent-studio-create-suite.png)

注意，评估套件必须与 chatbot 位于同一个 Project 中。创建后，选择已创建套件右侧的箭头图标可在 AIP Evals 中打开该套件。

![Image 5: 已创建的套件及可在 AIP Evals 中打开套件的箭头图标。](https://www.palantir.com/docs/resources/foundry/chatbot-studio/agent-studio-open-suite.png)

在 AIP Evals 中设置测试用例时请注意以下事项：

*   要与 chatbot 开启新会话，确保 `sessionRid` 设为 `null`。如果提供了 session RID，chatbot 将延续已有会话，这在测试时通常不是预期行为。

![Image 6: 在评估套件测试用例中将 sessionRid 设为 null 的选项。](https://www.palantir.com/docs/resources/foundry/chatbot-studio/agent-studio-sessionrid.png)

*   对象集变量必须设为 `null` 或包含实际值。对象集变量不能为空。

![Image 7: 在评估套件测试用例中选择对象集的选项。](https://www.palantir.com/docs/resources/foundry/chatbot-studio/agent-studio-object-set.png)

有关评估套件的更多信息，请参阅 [AIP Evals 文档](https://www.palantir.com/docs/foundry/aip-evals/overview/)。
