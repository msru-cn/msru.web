Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/overview/#action-types)Action types

在 Ontology 中，用户可以通过应用 action 来修改 object、属性和 link。Action 是一个单一事务，基于用户定义的逻辑改变一个或多个 object 的属性。Action 使用户能够以整体目标而非具体属性编辑的视角来处理和管理数据。

**Action type** 是用户可以 一次性执行的一组变更或编辑的定义，包括 object、属性值和 link。它还包括 action 提交时发生的 side effect 行为。

**示例：**

你可以创建一个 `Assign Employee` action type，定义用户如何更改给定 `Employee` object 的 `role` 属性值。这个 action type 可以要求一个 parameter 定义，使用户能够在标准化表单中输入新的 role，并可以包含自动创建 `Employee` object 和新 `Manager` object 之间链接的 rule。

这个 action 还可以：

*   包含一个 notification side effect，通知新旧 manager 有关变更。
*   验证授权员工（如人力资源部门的员工）可以执行该 action。

设置好这些 parameter 后，HR 员工就可以执行 action 将 "Melissa Chang" 的 `role` 切换为 "Product Manager"。

Foundry Ontology 不是抽象数据模型，而是将每个 ontological 概念映射到组织的实际数据，使这些数据资产能够为实际应用提供支持。随着用户决策和洞察以 Ontology 编辑的形式被捕获，数据资产的丰富度和价值会不断增长。

对 object、属性值和 link 的任何更改都会在用户执行 action 时提交到 Ontology，并在所有用户应用中反映。同样，相同的 action 逻辑和验证可以在所有面向用户的 中可用，确保对 Ontology 的一致编辑。带有用户编辑的最新 object 数据将被捕获在 object type 的 writeback dataset 中。

从学习如何 [创建 action type](https://www.palantir.com/docs/foundry/action-types/getting-started/) 开始，或了解 [rules](https://www.palantir.com/docs/foundry/action-types/rules/)、[parameters](https://www.palantir.com/docs/foundry/action-types/parameter-overview/) 和 [submission criteria](https://www.palantir.com/docs/foundry/action-types/submission-criteria/)。

[← 上一页 Object and link types / Add Ontology types to a Marketplace product](https://www.palantir.com/docs/foundry/object-link-types/marketplace-ontology-types/)

[下一页 Getting started →](https://www.palantir.com/docs/foundry/action-types/getting-started/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

