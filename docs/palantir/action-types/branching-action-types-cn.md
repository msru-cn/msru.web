Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/branching-action-types/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/branching-action-types/#branching-action-types)Branching action types

Ontology action 与 Global Branching 集成，让你可以在分支上测试 action type，而不影响生产环境。你可以在隔离的分支上下文中运行 action、验证配置、观察编辑结果，然后再将变更合并到 `main`。

关于 Global Branching 概念和工作流的通用信息，请参阅 [Global Branching 文档](https://www.palantir.com/docs/foundry/global-branching/overview/)。

## [](https://www.palantir.com/docs/foundry/action-types/branching-action-types/#running-actions-on-a-branch)在分支上运行 action

你可以在分支上的 Workshop module 中测试 action，验证它们的配置是否正确。当所有相关 object type 在分支上被索引后，你可以运行 action type 并在分支上查看结果编辑。

### [](https://www.palantir.com/docs/foundry/action-types/branching-action-types/#prerequisites)前提条件

要在分支上运行 action，action type 编辑的所有 object type 都必须在该分支上被索引。你可以通过单独的 object type 页面或 Ontology Manager 中的 action type 页面来索引 object type。

![Image 8: 分支上的 action indexing banner。](https://www.palantir.com/docs/resources/foundry/action-types/action-indexing-banner.png)

在分支上运行 action 是作为测试机制使用的。分支上的 action 编辑不会合并回 `main`。

### [](https://www.palantir.com/docs/foundry/action-types/branching-action-types/#working-with-function-backed-actions-on-a-branch)在分支上使用 function-backed action

分支上的 function-backed action 行为取决于它们是否 branch-aware。Branch-aware function 可以在分支上修改并从中读取 schema，而非 branch-aware function 只从 `main` 读取 schema。不管是否 branch-aware，所有 function-backed action 都只在分支上执行，不会将变更写回 `main`。请参阅 [Global Branching 文档](https://www.palantir.com/docs/foundry/global-branching/integrations/) 中支持的 function 类型。

## [](https://www.palantir.com/docs/foundry/action-types/branching-action-types/#managing-side-effects-on-branches)管理分支上的 side effect

以下信息专门适用于在分支上 **通过 action** 应用的 webhook、带外部调用的 function 和 notification。通过其他方式应用的 side effect 将按各自的定义行为运行。

### [](https://www.palantir.com/docs/foundry/action-types/branching-action-types/#webhooks)Webhooks

默认情况下，在分支上应用 action 时 webhook 不会执行。这是为了防止在测试环境中意外写入外部系统。

在这种情况下，你会看到一个 toast 提示说明此行为。

![Image 9: 提示 action 已应用但 webhook 未执行的 toast。](https://www.palantir.com/docs/resources/foundry/action-types/action-webhook-toast.png)

但在某些场景下，在分支上测试 webhook 是有意义的，比如调用 READ 端点时。

要覆盖默认行为，可以在 Ontology Manager 中配置 action type 的 **Security and submission criteria** 标签页，启用分支上的 webhook 执行。

![Image 10: 启用分支上 webhook 的设置。](https://www.palantir.com/docs/resources/foundry/action-types/action-webhook-setting.png)

如果启用了分支上的 webhook，webhook 会像在 `main` 上一样运行。因此，如果 webhook 配置为访问外部生产环境，即使 action 在分支上执行，它仍然会这样做。

### [](https://www.palantir.com/docs/foundry/action-types/branching-action-types/#functions-with-external-calls)带外部调用的 function

默认情况下，带外部调用的 function-backed action 逻辑在分支上应用 action 时不会执行；action 会直接失败。这是为了防止在测试环境中意外写入外部系统。

在这种情况下，你会看到一个表示失败的 toast 提示，并附带行为说明。

![Image 11: 外部 function 调用阻止了 action。](https://www.palantir.com/docs/resources/foundry/action-types/action-function-error-toast.png?width=400)
但在某些场景下，在分支上测试是必要的，比如调用 READ 端点。你可以在 Ontology Manager 中 action type 的 **Security and submission criteria** 标签页启用分支上的带外部调用的 function 来覆盖此限制。

![Image 12: 启用分支上带外部调用的 function 的设置。](https://www.palantir.com/docs/resources/foundry/action-types/action-function-setting.png)

如果启用了分支上带外部调用的 function，function 会像在 `main` 上一样进行相同的外部调用。因此，如果 function 配置为访问外部生产环境，即使 action 在分支上执行，它仍然会这样做。

### [](https://www.palantir.com/docs/foundry/action-types/branching-action-types/#notifications)Notifications

默认情况下，在分支上应用 action 时 notification 不会执行。这是为了防止在测试环境中意外通知收件人。

在这种情况下，你会看到一个 toast 提示说明此行为。

![Image 13: 提示 action 已应用但 notification 未执行的 toast。](https://www.palantir.com/docs/resources/foundry/action-types/action-notification-toast.png)

但在某些场景下，在分支上测试 notification 是有意义的。

要覆盖默认行为，可以在 Ontology Manager 中 action type 的 **Security and submission criteria** 标签页启用分支上的 notification。

此外，你可以指定 action 在分支上运行时的通知收件人：

*   **Branch owner：** 将所有 notification 发送给分支所有者。
*   **Default recipients：** 通知在原始 notification 中配置的收件人。

![Image 14: 启用分支上 notification 的设置。](https://www.palantir.com/docs/resources/foundry/action-types/action-notification-setting.png)

## [](https://www.palantir.com/docs/foundry/action-types/branching-action-types/#known-limitations)已知限制

*   分支上的 action 编辑仅用于测试，不会合并回 `main`。
*   在分支上运行 action 时，默认不执行 webhook 和 email notification。
*   调用外部系统的 function 在分支上运行 action 时默认会失败。

[← 上一页 Undo or revert Actions](https://www.palantir.com/docs/foundry/action-types/action-reverts/)

[下一页 Action metrics →](https://www.palantir.com/docs/foundry/action-types/action-metrics/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

