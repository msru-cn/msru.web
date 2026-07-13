Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/webhooks/

Markdown Content:
## Webhooks

[Webhook](https://www.palantir.com/docs/foundry/data-connection/webhooks-overview/) 是 Data Connection 中的一个概念，允许向外部系统（如 Salesforce、SAP 或任何已配置的 HTTP 服务器）发送请求，通常用于修改该外部系统中的数据。

通过设置 webhook 然后在 action 中配置使用，你可以在终端用户在 Foundry 中应用 action 时向外部系统发送数据。这使 Foundry 中的工作流能够直接与源系统连接，并将数据和决策写回这些系统。

本节详细介绍在 action 中配置 webhook 的各种选项。有关分步教程，请参阅 [如何在 action 中添加 webhook](https://www.palantir.com/docs/foundry/action-types/set-up-webhook/) 文档。

## Webhooks：Writeback vs. side effect

有两种方式可以在 action 中配置 webhook：作为 **writeback** 或作为 **side effect**。

![Image 1: 添加 webhook](https://www.palantir.com/docs/resources/foundry/action-types/webhooks-add-webhook.png?width=400)

为方便起见，下面是比较 writeback 和 side effect webhook 行为的表格。

| 类型 | 何时应用 | 是否向终端用户显示失败？ | 时机 |
| --- | --- | --- | --- |
| **Writeback** | Object 变更前 | 是 | 在用户看到成功或失败之前 |
| **Side effect** | Object 变更后 | 否 | 可能在用户看到成功消息之后 |

以下部分更详细地描述 writeback webhooks 和 side effect webhooks。

### Writeback webhooks

当配置为 **writeback** 时，webhook 会在评估任何其他 rules _之前_ 执行；如果 webhook 执行失败，不会进行任何其他更改。如果你想确保在外部系统之前不在 Foundry 中进行更改，应该将 webhook 设置为 writeback。

这种行为在 Foundry 和外部系统之间提供了一定程度的事务性。使用 writeback webhook 保证如果对 外部系统的请求失败，不会对 Foundry Ontology 应用任何更改。但是，外部请求可能成功而 Ontology 更改可能失败的情况仍然有可能发生。

因为当 writeback webhook 失败时 action 会停止应用，你只能配置单个 webhook 作为 writeback。如果此 webhook 在 action 应用时失败，会向终端用户显示描述失败的错误。

当 webhook 被配置为 writeback 时，其输出 parameters 可用于后续 rules。详见下面的 [输出 parameters](https://www.palantir.com/docs/foundry/action-types/webhooks/#output-parameters) 部分。

### Side effect webhooks

当配置为 **side effect** 时，webhook 会在评估其他 rules _之后_ 执行。这意味着对 Foundry objects 的修改会在 side effects 应用之前发生。你可以在单个 action 中配置多个 side effect webhooks，它们会以不确定的顺序执行。在带有 side effect webhooks 的 action 中，终端用户会在 Foundry objects 被修改后看到成功消息；执行 side effects 可能在成功消息显示之后发生。

如果你需要从单个 action 多次调用 webhook，可以通过 side effect webhook 提供 payload 列表作为输入来实现。这会触发 webhook 与提供的列表中 payload 数量相同的次数，并以不保证的顺序处理。示例可以在下面的 [输入 parameters](https://www.palantir.com/docs/foundry/action-types/webhooks/#input-parameters) 部分找到。

当你想发送尽力而为的通知或写回多个外部系统时，应该使用 side effect webhooks。

## 输入 parameters

要在 Action 中配置 Webhook，你必须填充其所有必需的输入 parameters。有关 Webhook 输入 parameters 的一般参考材料可在 [Data Connection 文档](https://www.palantir.com/docs/foundry/data-connection/webhooks-reference/#input-parameters) 中找到。

有两种配置 Webhook 输入 parameters 的方式：映射到 Action parameters，或使用 Function。

映射到 **Action parameters** 时，每个必需的 Webhook 输入必须设置为相同类型的 Action parameter、静态值或 object parameter 的属性。

![Image 2: 输入 parameters](https://www.palantir.com/docs/resources/foundry/action-types/webhooks-input-parameters.png?width=400)

使用 [Function](https://www.palantir.com/docs/foundry/functions/overview/) 时，你必须选择一个返回自定义类型的 Function，该类型包含所有必需的 Webhook 输入 parameters 并与 Webhook 类型强匹配，否则会收到 `OntologyMetadata:ActionWebhookInputsDoNotHaveExpectedType` 错误。使用 Function 填充 Webhook 输入 parameters 在你需要使用逻辑填充输入时很有用，特别是当此逻辑基于 Ontology objects 时。例如，你可以检索链接的 objects 并从这些 objects 中提取属性值来预填充 Webhook 输入。

例如，假设你有一个接受三个输入 parameters（ID 为 `name`、`industry` 和 `country`）的 Webhook：

![Image 3: 输入 parameters 示例](https://www.palantir.com/docs/resources/foundry/action-types/webhooks-input-parameters-example.png?width=400)

你可以编写一个返回相同结构的自定义接口的 Function：

然后，你可以在 Action 中配置 Webhook 输入时选择此 Function，将 Action parameters 映射到 Function 所需的 parameters：

![Image 4: 将 Action parameters 映射到 Function 所需的 parameters](https://www.palantir.com/docs/resources/foundry/action-types/webhooks-input-parameters-define-using-action.png?width=400)

下面是一个完整的代码示例，展示了一个从 Ontology object 加载数据并使用它填充 Webhook 输入的 Function。

Side effect Webhook 可以通过从 Function 返回 payload 列表来被多次调用。下面是一个示例 Function，它接受两个 company 作为输入，并返回一个包含两个与 Webhook 预期输入 parameters 匹配的 payload 的列表。如果此 Function 从 Actions 中用于返回 side effect Webhook 的输入，它将导致两次独立的 Webhook 执行。

## 输出 parameters

当 Webhook 被配置为 [writeback Webhook](https://www.palantir.com/docs/foundry/action-types/webhooks/#writeback-webhooks) 时，你可以在后续 rules 中使用其输出 parameters。这在外部系统返回你想立即写入 Foundry object 或在后续 [notification](https://www.palantir.com/docs/foundry/action-types/notifications/) 或 [side effect Webhook](https://www.palantir.com/docs/foundry/action-types/webhooks/#side-effect-webhooks) 中使用的数据时很有用。

有关 Webhook 输出 parameters 的一般参考材料可在 [Data Connection 文档](https://www.palantir.com/docs/foundry/data-connection/webhooks-reference/#output-parameters) 中找到。

要在后续 logic rule 中使用输出 parameter，在填充 logic rule 的值时选择 **Writeback response**，然后选择你想使用的特定输出：

![Image 5: 在 Logic Rule 中使用输出 parameters](https://www.palantir.com/docs/resources/foundry/action-types/webhooks-output-parameters-in-logic-rule.png?width=400)

## OAuth 2.0 认证

当 webhook 配置在使用 [outbound application](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/) 进行认证的 REST API 源上时，Foundry 会代表用户管理 OAuth 2.0 授权流程。开发者不需要处理 token 获取或刷新。Foundry 会在每次 webhook 调用时传递正确的 access token。

有关 Foundry 工作流中 OAuth 2.0 outbound application 支持的完整概述，请参阅 [OAuth 2.0 outbound applications](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/) 文档。

