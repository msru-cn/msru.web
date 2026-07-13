Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/#trigger-schedule-build)触发 schedule build

[schedule](https://www.palantir.com/docs/foundry/data-integration/schedules/) 定义了 Foundry 作为 [build](https://www.palantir.com/docs/foundry/data-integration/builds/) 的一部分重新计算的一组资源。通过在 action type 上配置 **schedule rule**，你可以在 action 应用时触发该 schedule 的 build。这使 Ontology 中的终端用户工作流能够重新计算 dataset，而无需用户导航到 [Data Lineage](https://www.palantir.com/docs/foundry/data-lineage/overview/) 或 [Builds 应用](https://www.palantir.com/docs/foundry/data-integration/application-reference/#builds)。

当 action type 包含 schedule rule 时，action 的 Ontology 编辑在 build 开始 _之后_ 应用。编辑不会等待 build 完成。相反，action 触发 build，捕获 schedule run RID，并立即应用其余 rules，包括 Ontology 编辑。

## [](https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/#configure-a-schedule-rule)配置 schedule rule

向 action type 添加 schedule rule 并选择一个 schedule。Schedule 必须处于 [project-scoped 模式](https://www.palantir.com/docs/foundry/data-integration/schedules/#project-scope)。

![Image 3: Ontology Manager 中的 Action type 配置页面。正在添加 schedule rule。](https://www.palantir.com/docs/resources/foundry/action-types/advanced-schedule-action-type-rule.png)

如果所选 schedule 是 [parameterized](https://www.palantir.com/docs/foundry/building-pipelines/parameterization/)，你必须为每个 schedule parameter 提供一个值。当 action 被应用时，解析后的 parameter 值会传递给 schedule 并转发到 build 中的底层 parameterized transforms。

Schedule rules 在与 [parallelized parameterized schedules](https://www.palantir.com/docs/foundry/building-pipelines/parameterization/#parallelized-mode-advanced) 配合使用时特别有用。查看 [parameterization 文档](https://www.palantir.com/docs/foundry/building-pipelines/parameterization/#use-action-types-for-parallelized-schedules) 了解更多关于在 Ontology 中使用 actions 进行 parallelized schedules 的信息。

## [](https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/#permissions)权限

Action 的 [submission criteria](https://www.palantir.com/docs/foundry/action-types/submission-criteria/) 管理通过 action 触发 schedule 所需的权限。如果用户满足 action submission criteria，他们可以在不对 schedule 拥有任何直接权限的情况下运行 schedule。

Foundry 会在首次引用 schedule 以及编辑 schedule rule 时检查用户是否有权限运行该 schedule。从 action type 引用 schedule 会将运行控制权从 schedule 委托给 action type。任何可以管理 action type 上 actions 的人都可以控制谁能触发该 schedule。

## [](https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/#track-build-progress)追踪 build 进度

当 schedule rule 被触发时，生成的 schedule run 由一个 **schedule run RID** 标识。此 RID 作为一个值暴露，可以从 action type 的 Ontology edit rules 中引用，允许你将其写入被编辑 object 的字符串属性中。当你想在 object 上记录 action 触发的 build 时，这很有用。

要捕获 schedule run RID，在同一 action type 上配置 **Modify object** 或 **Create object** rule，并将目标 object 的字符串属性映射到 schedule rule 提供的 schedule run RID 值。

![Image 4: Ontology Manager 中的 Action type 配置页面。添加了 schedule rule，schedule run RID 通过 Create object rule 写入字符串属性。](https://www.palantir.com/docs/resources/foundry/action-types/build-schedule-run-rid-property.png)

要将存储的 RID 渲染为实时 build 状态指示器，请对该属性应用 [resource RID 格式化](https://www.palantir.com/docs/foundry/object-link-types/value-formatting/#supported-value-formatting)。启用格式化后，Foundry 会将 RID 值显示为带有图标和文本的链接，反映 build 的当前状态：`Running`、`Ignored`、`Failed` 或 `Succeeded`。

[← 上一页 Side effects / Set up a webhook](https://www.palantir.com/docs/foundry/action-types/set-up-webhook/)

[下一页 Configure sections →](https://www.palantir.com/docs/foundry/action-types/configure-sections/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

