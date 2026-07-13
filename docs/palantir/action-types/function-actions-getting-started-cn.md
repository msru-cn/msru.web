Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/#getting-started)快速开始

本教程介绍如何创建一个由 [Ontology Edit function](https://www.palantir.com/docs/foundry/functions/edits-overview/) 支撑的 action type。

## [](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/#prerequisites)前提条件

在本教程中，我们将使用与 [Actions 快速开始教程](https://www.palantir.com/docs/foundry/action-types/getting-started/) 中相同的 `Demo Ticket` object type 和示例 object。

首先编写一个 Ontology edit function，为 action 执行所需的编辑。这需要：

*   使用 functions on objects TypeScript 模板搭建仓库，
*   将相关 object type 导入到你的仓库中，以及
*   发布 Ontology edit function 供 action 读取。

这些步骤的信息可以在 functions 文档中找到：

*   **[Getting started](https://www.palantir.com/docs/foundry/functions/getting-started/)：** 跟随本教程创建一个基本的 functions 仓库并发布 function。
*   **[Functions on objects](https://www.palantir.com/docs/foundry/functions/functions-on-objects/)：** 跟随本教程创建一个使用 object 数据的 function。
*   **[Ontology edits](https://www.palantir.com/docs/foundry/functions/api-ontology-edits/)：** 使用此参考文档创建 Ontology edit function。

编写并发布 Ontology edit function 后，以下步骤将把 function 连接到 action，使 function 可以用来编辑 object。在本教程中，我们从仓库中编写并发布了以下 Ontology edit function：

![Image 7: Ontology edit function](https://www.palantir.com/docs/resources/foundry/action-types/function_backed_actions_ontology_edit_function.png)

为方便起见，代码如下：

```typescript
1@OntologyEditFunction()
2public addPriorityToTitle(ticket: DemoTicket): void {
3    let newTitle: string = "[" + ticket.ticketPriority + "]" + ticket.ticketTitle;
4    ticket.ticketTitle = newTitle;
5}
```

用于 action type 的 function 必须使用 `@OntologyEditFunction()` 注解，而非 `@Function()`。更多细节请参阅 [functions on objects](https://www.palantir.com/docs/foundry/functions/api-ontology-edits/#declaring-an-edit-function) 文档。

## [](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/#creating-a-function-backed-action)创建 function-backed action

在 **Rules** 区域，添加一个类型为 **Function** 的 rule。搜索你在 [前提条件](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/#prerequisites) 中发布的 function，选择最新版本。配置输入以匹配 action parameter，如下所示。注意，function rule 不能与 [其他 Ontology rules](https://www.palantir.com/docs/foundry/action-types/rules/#ontology-rules) 组合使用。

![Image 8: 配置输入](https://www.palantir.com/docs/resources/foundry/action-types/function_backed_actions_configure_inputs.png)

选择 function 时，function 的所有输入会自动创建为 parameter 并添加到 **Parameters** 标签页。在这些截图所示的例子中，创建了一个类型为 **Object reference** 的 `Demo Ticket` parameter。如果需要，可以进一步自定义该 parameter。

![Image 9: Demo Ticket](https://www.palantir.com/docs/resources/foundry/action-types/function_backed_actions_demo_ticket.png)

![Image 10: Demo Ticket 详情](https://www.palantir.com/docs/resources/foundry/action-types/function_backed_actions_demo_ticket_details.png)

保存 action 并按照 [与其他应用集成的指南](https://www.palantir.com/docs/foundry/action-types/use-actions/) 在平台各处进行配置。

## [](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/#changing-function-version)更改 function 版本

默认情况下，如果 function 逻辑被更改，action 不会自动更新以匹配。你需要回到 action 的 **Rules** 区域，升级 action 引用的 function 版本。例如，如果我们发布了 function 的 0.1.2 版本，需要在这里更新：

![Image 11: 如何更新 function 版本](https://www.palantir.com/docs/resources/foundry/action-types/function_backed_actions_update_function_logic.png)

### [](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/#auto-upgrades)自动升级

你可以选择为 action 引用的 function 启用自动升级。启用后，action 将以 [版本范围](https://www.palantir.com/docs/foundry/functions/version-range-dependencies-for-functions/) 依赖 function，并在运行时 [解析版本](https://www.palantir.com/docs/foundry/functions/version-range-dependencies-for-functions/#version-range-resolution)。

要为 action 启用自动升级，导航到 action 的 **Rules** 区域，选择 **Function** parameter。在 **Function** 下拉菜单中，选择你想运行的 function 最低版本，并启用 **Auto upgrade** 选项。这会对应一个版本范围依赖，包含所选最低版本的所有向后兼容版本，如 minor 或 patch 升级。

![Image 12: 如何为 function-backed action 启用自动升级](https://www.palantir.com/docs/resources/foundry/action-types/function_backed_actions_auto_upgrade.png)

`0.y.z` 形式的 function 版本不支持自动升级。这些版本保留用于初始开发阶段，function API 和行为可能频繁变化，不应视为稳定版。请参阅 [选择发布版本](https://www.palantir.com/docs/foundry/functions/functions-versioning/#choosing-a-release-version) 文档。

#### [](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/#security)安全性

如果为 function-backed action 启用了自动升级，没有 [action 编辑权限](https://www.palantir.com/docs/foundry/object-permissioning/ontology-permissions-legacy/#permissions-for-editing-link-types) 的用户可以通过修改底层 function 来改变 action 的行为。这是因为 function 的编辑权限与 action 的权限不绑定。

#### [](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/#breaking-changes)破坏性变更

自动升级可能因糟糕的 function 发布中的 [破坏性变更](https://www.palantir.com/docs/foundry/functions/version-range-dependencies-for-functions/#risks) 导致 action 执行失败。

#### [](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/#provenance)Provenance

Action 的 provenance 根据所选最低 function 版本的 provenance 设置。如果 function 的新版本返回此 provenance 之外的编辑（例如额外的 object type），action 执行会失败。

目前，provenance 仅包含 action 在运行时可能编辑的 object type。

[← 上一页 Overview](https://www.palantir.com/docs/foundry/action-types/function-actions-overview/)

[下一页 Batched execution →](https://www.palantir.com/docs/foundry/action-types/function-actions-batched-execution/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

