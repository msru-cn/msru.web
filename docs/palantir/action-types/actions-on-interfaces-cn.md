Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/actions-on-interfaces/

Markdown Content:
## Actions on interfaces

你可以创建通用的 action，应用于某个 interface 的所有 object。在 action 中使用 interface 主要有两种方式：

*   **Interface action rules：** 用于创建、修改、删除和链接所配置 interface 的 object。
*   **Interface reference parameters：** 用于引用所配置 interface 的 object。"Modify" 和 "Delete" interface action rules 需要这个参数，但其他 action rules 也可以使用。

Interface 还可以定义 [interface action type constraints](https://www.palantir.com/docs/foundry/interfaces/interface-action-type-constraints/)，描述实现该 interface 的 object type 可以通过具体 action type 满足的预期 action 能力。

Action type constraints 定义 interface 级别的 action 契约；action rules 定义提交 action type 时执行的编辑。

Interface action type constraints 目前是 Ontology Manager 的建模和映射功能，不是面向终端用户的应用或 Ontology SDK 调用接口。

Interface action 的提交条件统一适用于所有实现该 interface 的 object type。在创建 interface action 之前，请仔细审查哪些用户有权在所有实现该 interface 的 object type 上创建、修改或删除 object。[了解更多关于控制 interface action 的信息](https://www.palantir.com/docs/foundry/action-types/actions-on-interfaces/#limitations-of-interface-action-rules)。

## 使用 action on interface rules

当编辑操作可以应用于所有实现该 interface 的 object type 时，就可以使用 interface action rules。换句话说，interface action rules 只能修改 _interface 共享属性_ 或删除 object。例如，如果 "Feature request" 和 "Bug" 是 "Ticket" interface 的 object type，你可以用 "Create a ticket" action type 来创建 bug 和 feature request，但不能创建 bug 或 feature request 特有的属性。

![Image 1: 使用 action on interface rules](https://www.palantir.com/docs/resources/foundry/action-types/action_on_interface_rules.png)

### 创建新的 interface action type

在 Ontology Manager 的 **New** 菜单中选择 **Action type** 来设置新的 interface action type。

1.   在 **Interfaces** 下，选择目标 interface 和 rule 类型。

![Image 2: 创建新 interface](https://www.palantir.com/docs/resources/foundry/action-types/action_on_interface_new_interface.png)

1.   添加你想包含在 action 中的共享属性（如适用）。
2.   添加元数据来描述你的 action type。注意，这些元数据应该适用于所有实现该 interface 的 object type。
3.   在 **Submission criteria** 下，选择可以执行该 action 的用户（后续可以配置更复杂的条件）。注意，这些权限将适用于所有实现该 interface 的 object type，前提是用户有权限编辑它们。
4.   选择 **Create** 完成 action type 的创建。

### Interface 上的 "Create" action

由于 action type 只关联了一个 interface，会自动生成一个 "Object type" parameter 来指示应该创建哪种 object type。如果使用表单或表格，用户需要从列表中选择一个 object type。

![Image 3: Interface 上的 Create action](https://www.palantir.com/docs/resources/foundry/action-types/action_on_interface_create_action.png)

注意，**没有主键的 object 无法被创建**。因此，rule 中未分配主键的 object type 在提交时会失败。为避免此类失败，请确保 interface 和 Create rule 都包含一个可用作实现该 interface 的 object type 主键的 interface 属性。

![Image 4: 没有主键的 action on interface](https://www.palantir.com/docs/resources/foundry/action-types/action_on_interface_primary_key.png)

### Interface 上的 "Modify" action

Interface 上的 "Modify" rules 可以修改所配置 interface 的任何 object。会生成一个 "interface reference" parameter，限定为所选 interface。"interface reference" parameter 类似于 "object reference" parameter，区别在于 "interface reference" parameter 显示的是实现该 interface 的任何类型的 object。如果使用表单或表格，用户可以从列表中选择一个 object。

注意，主键值 _不能被任何 action type 修改_。因此，如果 action 试图修改某个 object type 的主键属性，提交时会失败。始终确保 action rule 不修改可能被某些实现该 interface 的 object type 用作主键的属性。

在下面的例子中，"Title" 属性被错误地用作 "Bug" object type 的主键。"Edit ticket" action 提交时会失败，因为该 action 试图修改 bug 的主键。

![Image 5: Interface 上修改主键的 action](https://www.palantir.com/docs/resources/foundry/action-types/action_on_interface_primary_key_modify.png)

### Interface 上的 "Delete" action

"Delete" action rules 可以分配一个 "interface reference" parameter 来代替 object reference parameter。这个限定到特定 interface 的 interface reference 将指示要删除的 object。如果使用表单或表格，用户可以从列表中选择一个 object。

### Interface 上的 "Create link" action

"Create interface link" rules 允许你使用 interface 上定义的 interface link constraint 创建链接。配置 "Create interface link" rule 的步骤：

1.   选择你要创建链接的 interface。
2.   选择该 interface 上定义的 interface link constraint。如果 link constraint 在两个 interface 之间，source 和 destination parameter 都会自动生成为 interface reference parameter。如果 link constraint 在一个 interface 和一个 object type 之间，source 是 interface reference parameter，destination 是 object reference parameter。

你也可以手动配置 source 和 destination object，而不使用 action 自动生成的 parameter。可以是：

*   引用已有 object 的 interface reference 或 object reference parameter。
*   同一 action type 中由 "Create object" 或 "Create object(s) of interface" rule 创建的 object。

如果 link constraint 在 object type 上有多个具体的 link 实现，action 会失败。此外，创建一对多链接会修改关系多侧的外键。如果你的 action type 同时通过 "Create object" 或 "Modify object(s)" rule 修改外键，请确保没有冲突。

### Interface 上的 "Delete link" action

"Delete interface link" rules 允许你使用 interface 上定义的 interface link constraint 删除链接。配置 "Delete interface link" rule 的步骤：

1.   选择你要删除链接的 interface。
2.   选择该 interface 上定义的 interface link constraint。如果 link constraint 在两个 interface 之间，source 和 destination parameter 都会自动生成为 interface reference parameter。如果 link constraint 在一个 interface 和一个 object type 之间，source 是 interface reference parameter，destination 是 object reference parameter。

你也可以手动配置 source 和 destination object，而不使用自动生成的 parameter。这些必须是引用已有 object 的 parameter — interface reference 或 object reference parameter。

如果 link constraint 在 object type 上有多个具体的 link 实现，action 会尝试删除所有具体的 link 实现。

### 执行 interface 上的 action

使用 interface action rules 创建的 action 可以应用于实现了该 interface 的 object type 的 object，与任何 object 级别的 action type 一样。对于给定的 object，所有可以应用于该 object 的 object-type-specific 和 interface-based action 都会出现在 action 下拉菜单中。

## 权限

Interface action rules 遵循与 object action type 相同的权限模型。

详见 [action type 权限](https://www.palantir.com/docs/foundry/action-types/permissions/) 文档。

## 支持程度

随着对 interface action rules 和 reference parameter 的支持范围扩大，在 Palantir 平台各处的可用性会有所不同。

### 支持的应用和服务

*   **Ontology Manager：** 创建 interface action type，在 submission criteria 和 overrides 中配置 interface parameter。
*   **Object Explorer 和 Object Views：** 渲染在 interface 上定义的 action。

### Interface action rules 的限制

*   Submission criteria 统一适用于所有实现该 interface 的 object type，因此不能在单个 interface action 中为不同 object type 配置不同权限。要限制访问，可以在 [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/) 中选择 **Interfaces** 标签页，在 **Interface action control** 区域禁用特定 object type 的 interface action。对 interface action 应用更细粒度权限控制的能力正在积极开发中。
*   尚不支持 action log。
*   Interface 上的 action 不能与 function 一起使用。

