Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/submission-criteria/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/submission-criteria/#submission-criteria)Submission criteria

**Submission criteria**（以前称为 validations）是决定 action 是否可以提交的条件。Submission criteria 支持将业务逻辑编码到数据编辑权限中，确保 Ontology 数据质量和编辑治理。

Submission criteria 通过基于上下文（如用户或 parameter）的条件和静态信息组合来创建逻辑语句。Submission criteria 可以将 object、关系甚至用户信息纳入逻辑语句，以确定 action 是否可以提交。

示例

例如，航空公司可能想要更改特定航班列出的飞机。配置的 action 允许用户更改链接到 `Flight` object 的 `Aircraft` object。但是，航空公司只希望特定用户（如航班调度员）能够使用此 action，以确保只使用仍在运营的飞机。使用 submission criteria，构建者可以确保只有当条件满足时才能提交更改航班飞机的 action，方法是将用户的 group 成员身份与提交 action 时的飞机状态组合起来。

![Image 6: 示例：Submission criteria 概览](https://www.palantir.com/docs/resources/foundry/action-types/submission_criteria_overview.png)

Submission criteria 由条件和操作符组成。条件是控制 parameter 或用户属性值的单个语句。操作符用于组合和嵌套不同的条件。

使用不同类型的操作符，我们可以创建更复杂的语句，反映其业务流程和需求。只有满足所有 submission criteria 时，action 才能提交。这与控制用户是否可以编辑 action type 本身的权限是独立的。虽然一个 object type 可以有多个 action type 来添加、修改和删除 object，但每个 action type 有独立的 submission criteria。

## [](https://www.palantir.com/docs/foundry/action-types/submission-criteria/#conditions)条件

条件是两个值之间的单个比较检查。每个条件根据其 parameter 或用户输入要么通过要么失败。可以使用两种条件模板之一来配置条件："based on current user" 或 "based on parameter"。这些模板为条件的其余部分提供框架。每个条件都是两个值之间使用中间操作符的简单比较。

![Image 7: 示例：选择条件模板](https://www.palantir.com/docs/resources/foundry/action-types/submission_criteria_select_condition_template.png?width=300)

示例

继续我们的例子，航班调度员要求可以使用 `Current User` 模板设置，因为它需要提交 action 的人的上下文。要了解飞机是否仍在运营，需要通过 `Parameter` 模板使用 `Aircraft` object。

### [](https://www.palantir.com/docs/foundry/action-types/submission-criteria/#current-user)当前用户

`Current User` 模板基于提交 action 的用户定义权限。`Current User` 输入可用于检查用户的 ID、通过 group ID 的 group 成员身份，或任何其他可用的 multipass 属性（如用户的组织）。Foundry 将 user ID 作为字符串评估，可以与静态定义的 user ID 列表或存储 user ID 的任何字符串 parameter 进行比较。

Group IDs 选项允许你使用 action 用户所属的 group（无论是直接还是继承成员身份）创建条件。Group 可以与静态选择的 group 或其他 parameter 提供的 group ID 进行比较。

Multipass 属性被视为字符串列表，只能与其他字符串或字符串列表进行比较。用户会有一个可访问的 multipass 属性列表。使用 `Other user attribute` 字段，可以对用户无权访问的属性配置条件。如果用户无权访问某个属性，他们将无法通过该条件。

示例

要了解我们例子中的用户是否是航班调度员，我们需要检查该用户是否是航班调度员 group 的成员。

### [](https://www.palantir.com/docs/foundry/action-types/submission-criteria/#parameter)Parameter

Submission criteria 还可以使用 parameter 区域中定义的 parameters。Parameters 从其他应用或用户本身传入 action type。在 parameters 上使用条件允许构建者将业务逻辑嵌入 action type，并防止用户提交不符合业务要求的数据上的 action。

示例

在我们的例子中，运营状态通过 `Aircraft` object 给出，并且每架飞机可能不同。条件需要建立在 `Aircraft` object type parameter 之上。

Submission criteria 不支持 attachment 和 object set parameters。这些 parameter 类型会从选择面板中移除。

### [](https://www.palantir.com/docs/foundry/action-types/submission-criteria/#select-a-value)选择值

选择条件模板后，选择要比较的值。某些 parameters（如列表或 object parameters）需要更细粒度地选择应在比较中使用的值。我们也可以选择比较列表的长度而非其内容。

![Image 8: 示例：选择值](https://www.palantir.com/docs/resources/foundry/action-types/submission_criteria_select_a_value_left.png?width=300)

示例

在飞机的例子中，飞机的运营状态存储在 `Aircraft` object 的属性中。

### [](https://www.palantir.com/docs/foundry/action-types/submission-criteria/#operators)操作符

操作符定义两个值之间的比较。为了简化配置工作流，操作符会预过滤，只显示对该 parameter 有效的操作符选择。当 parameter 更改时，所有使用该 parameter 的条件都需要重新配置。

![Image 9: 示例：选择操作符](https://www.palantir.com/docs/resources/foundry/action-types/submission_criteria_select_an_operator.png?width=300)
根据所选 parameters，有多种操作符可用。对于单值 parameters，以下操作符可用：

| 操作符 | 示例 | 数据示例 | 描述 |
| --- | --- | --- | --- |
| is | name _is_ John Doe | "John Doe" is "John Doe" = TRUE | 左侧值完全匹配右侧值。 |
| is not | **Current User** _is not_ John Doe | "John Doe" is not "Maria Smith" = TRUE | 左侧值和右侧值不匹配。 |
| matches | name _matches_ ^[A | E | I |
| is less than | Aircraft > Engine Count _is less than_ 2 | 4 is less than 2 = TRUE | 左侧值小于右侧值。 |
| is greater than or equals | Aircraft > Engine Count _is greater than or equals_ 2 | 4 is greater than or equals 2 = TRUE | 左侧值大于等于右侧值。 |

对于多值 parameters，以下操作符可用。Object reference 列表会转换为值列表（object 值或已定义属性的值）：

| 操作符 | 示例 | 数据示例 | 描述 |
| --- | --- | --- | --- |
| includes | Aircrafts > Pilot Name _includes_ "John Doe" | [ "John Doe", "Maria Smith" ] includes "John Doe" = TRUE | 左侧值中至少有一个完全匹配右侧值。 |
| includes any | List of names _includes any_ Aircrafts > Pilot Name | ["King Louis", "John Doe"] is included in [ "John Doe", "Maria Smith" ] = TRUE | 左侧值中至少有一个完全匹配右侧值中的至少一个。 |
| is included in | name _is included in_ [ "John Doe", "Maria Smith" ] | "John Doe" is included in [ "John Doe", "Maria Smith" ] = TRUE | 左侧值完全匹配右侧值中的至少一个。 |
| each is | Aircrafts > Pilot Name _each is_ "John Doe" | [ "John Doe", "Maria Smith" ] each is "John Doe" = FALSE | 所有左侧值都完全匹配右侧值。 |
| each is not | Aircrafts > Pilot Name _each is not_ "John Doe" | [ "John Doe", "Maria Smith" ] each is not "King Louis" = TRUE | 所有左侧值都不完全匹配右侧值。 |

示例

由于我们例子中的用户是多个 group 的成员，但比较的是单个 group，我们需要选择 `includes` 操作符来检查是否有交集。但运营状态需要完全匹配预期状态，所以必须设置 `is` 操作符。

### [](https://www.palantir.com/docs/foundry/action-types/submission-criteria/#value)值

值代表比较的另一侧。值可以基于现有 parameter、静态值或无值。无值检查第一个值是否为空（或 null）。与操作符一样，可用选项取决于第一个值的类型。

![Image 10: 示例：选择值](https://www.palantir.com/docs/resources/foundry/action-types/submission_criteria_select_a_value_right.png?width=300)

示例

我们现在可以完成飞机例子中需要的两个条件。对于航班调度员，需要选择正确的 group 作为静态 parameter。这是因为 group 不应改变，而应在每次提交 Action 时保持不变，与上下文无关。因此使用 `specific value`，并通过下拉菜单选择所需的 group。当运营状态属性为 `Yes` 时，飞机被视为可运营，这可以再次使用 specific value 选项设置。

## [](https://www.palantir.com/docs/foundry/action-types/submission-criteria/#logical-operators)逻辑操作符

逻辑操作符可用于组合不同的条件。逻辑操作符也可以嵌套以创建更复杂的逻辑，可以要求其下的所有、任一或无条件满足才能通过。

## [](https://www.palantir.com/docs/foundry/action-types/submission-criteria/#failure-message)失败消息

失败消息支持定义当 Action 无法提交时应显示的错误。根级别上的每个条件和逻辑操作符都有自己的失败消息。如果较低级别的条件不满足，将显示对应根级别（父级）的失败消息。当条件不满足时，失败消息会在 Foundry 各处（Object Explorer、Workshop 或 Quiver）显示给终端用户。失败消息告知用户为什么他们被阻止提交 Action。

[← 上一页 Parameters / Performance considerations](https://www.palantir.com/docs/foundry/action-types/parameter-performance-considerations/)

[下一页 Actions on interfaces →](https://www.palantir.com/docs/foundry/action-types/actions-on-interfaces/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

