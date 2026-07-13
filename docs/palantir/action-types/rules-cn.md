Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/rules/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/rules/#rules)Rules

**Rules** 定义 action type 的逻辑，将 parameters 转化为 Ontology 编辑或其他效果。主要有两种 rule 类型：编辑 Ontology 的 rule，和在 Foundry 中触发其他效果的 rule。

## [](https://www.palantir.com/docs/foundry/action-types/rules/#ontology-rules)Ontology rules

Ontology rule 修改 Ontology 的特定元素。它们可以创建、修改或删除已有类型的 object 和 link。要创建或删除一对多或一对一 link，需要使用 object rule 并修改 object 上的外键属性。

1.   **Create object：** 可用于创建预定义类型的 object。Object type 的主键是必填属性，必须填写。其他属性可选添加。
2.   **Modify object(s)：** 可用于修改主键从 object reference parameters 派生的已有 object。不能引用作为当前 action 一部分创建的 object。
3.   **Create or modify object(s)：** 可用于基于 object reference parameter 修改已有 object。如果未选择 object，将创建一个新 object，使用自动生成的唯一 ID 或用户提交的主键。
4.   **Delete object(s)：** 可用于删除主键从 object reference parameters 派生的已有 object。不能引用作为当前 action 一部分创建的 object。
5.   **Create link(s)：** 可用于在通过 object reference parameters 传递的 object 之间创建多对多 link。对于外键 link，需要使用 **Modify object** rule 显式修改外键属性。
6.   **Delete link：** 可用于删除通过 object reference parameters 传递的 object 之间的多对多 link。对于外键 link，需要使用 **Modify object** rule 显式修改外键属性。
7.   **Function rule：** 可用于引用一个 Ontology edit function，其输入从 action 的 parameters 派生。当存在此 rule 时，不能配置其他 rule，因为 function 代码本身就能处理其他 rule 所能做的一切。阅读更多关于 [function action types](https://www.palantir.com/docs/foundry/action-types/function-actions-overview/) 的信息。
8.   **Create object(s) of interface：** 可用于创建实现特定 interface 的任何类型的 object。阅读更多关于 [actions on interfaces](https://www.palantir.com/docs/foundry/action-types/actions-on-interfaces/) 的信息。
9.   **Modify object(s) of interface：** 可用于修改实现特定 interface 的类型的 object。阅读更多关于 [actions on interfaces](https://www.palantir.com/docs/foundry/action-types/actions-on-interfaces/) 的信息。
10.   **Delete object(s) of interface：** 可用于删除实现特定 interface 的类型的 object。阅读更多关于 [actions on interfaces](https://www.palantir.com/docs/foundry/action-types/actions-on-interfaces/) 的信息。
11.   **Create link(s) on object(s) of interface：** 可用于在实现特定 interface 的类型的 object 之间创建 link。阅读更多关于 [actions on interfaces](https://www.palantir.com/docs/foundry/action-types/actions-on-interfaces/) 的信息。
12.   **Delete link(s) on object(s) of interface：** 可用于删除实现特定 interface 的类型的 object 之间的 link。阅读更多关于 [actions on interfaces](https://www.palantir.com/docs/foundry/action-types/actions-on-interfaces/) 的信息。

### [](https://www.palantir.com/docs/foundry/action-types/rules/#values-and-parameters)值和 parameters

创建或修改 link 和 object 时，Rules 需要额外的值来执行操作。修改 object 时，rules 还定义哪些属性被修改。每个属性反过来映射到由以下多个选项之一提供的值（link 上的 Rules 只能接受 object reference parameters）：

*   **From parameter：** 与属性类型相同的已有 parameter。默认情况下，添加到 rule 的每个新属性会自动创建一个同名的 parameter 并映射为接受此 parameter 的值。
*   **Object parameter property：** 已有 object reference parameter 的属性。Object parameter 的属性类型需要与映射到的属性类型匹配。
*   **Static value：** 只存在于 action type 的 Rules 部分中的静态值。在 Workshop、Slate 或 Object Views 中与 action 交互时不能更改此值。
*   **Current User/Time：** 字符串和时间戳属性也可以接受上下文值，形式为 action 的当前用户或提交时间。与 **Static value** 一样，提交 action 时不能与这些值交互，也不能在 action type 的其他部分使用。

### [](https://www.palantir.com/docs/foundry/action-types/rules/#creating-an-object--many-to-many-link)创建 object 和多对多 link

你还可以同时创建 object 和链接多对多 link。虽然仅创建多对多 link 需要 link 两侧的 object 已存在，但你可以通过一个 action type 同时创建两者。首先配置一个 **Create object** rule，选择具有多对多 link 的 object type。然后点击 **Add property** 下方的 **Add link** 按钮来选择 link type 并配置 link。

要创建一对多或一对一 link type，只需修改 object 上的外键。

### [](https://www.palantir.com/docs/foundry/action-types/rules/#invalid-combinations)无效组合

Action type 可以包含 Ontology rules 的组合。当定义了多个 rules 时，actions 后端会编译 rules 以生成每个 object 的单个编辑（例如 **Add object**、**Modify object(s)** 或 **Delete object(s)**）。例如，如果一个 rule 的结果将属性更新为 "A"，但同一 action type 中的另一个 rule 将同一 object 的属性更新为 "B"，最终编辑只会将属性更新为 "B"。Rules 的顺序影响最终的 object 编辑。因此，以下 object 编辑组合不被支持：

*   Object 不能在添加或修改之前被删除。
*   Object 不能在添加之前被修改。
*   Object 不能在一次 form 提交中被创建两次。

## [](https://www.palantir.com/docs/foundry/action-types/rules/#other-rules)其他 rules

有两种触发 [side effect](https://www.palantir.com/docs/foundry/action-types/side-effects-overview/) 的 rule 类型：

*   [**Notification**](https://www.palantir.com/docs/foundry/action-types/notifications/) rules 可用于发送关于 action 的 notification。Parameters 可用于自定义 notification 的内容和收件人。终端用户可以调整偏好以通过平台内 push notification、email 或两者接收 notification。Notifications 在所有 action 编辑应用后发送，但 notification 的内容将基于编辑应用前的 Ontology 状态生成。
*   [**Webhooks**](https://www.palantir.com/docs/foundry/action-types/webhooks/) 使 action 在应用时能够向外部系统发出请求。Action parameters 可以传递到 webhook 中，webhook 反过来可以将 parameters 传递到外部请求。Webhooks 可以配置为在编辑应用之前或之后运行。

还有一个高级 rule 可以触发 [build](https://www.palantir.com/docs/foundry/data-integration/builds/)：

*   [**Schedule**](https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/) rules 可用于触发 schedule 的 build。Action parameters 可以传递到 schedule 中，schedule 反过来可以将 parameters 传递给 build 中的底层 [parameterized transforms](https://www.palantir.com/docs/foundry/building-pipelines/parameterization/)。Foundry 在 build 开始后应用 Ontology 编辑。

[← 上一页 Use actions in the platform](https://www.palantir.com/docs/foundry/action-types/use-actions/)

[下一页 Parameters / Overview →](https://www.palantir.com/docs/foundry/action-types/parameter-overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

