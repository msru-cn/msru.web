Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/app-building/operational-apps/

Markdown Content:

# 什么是运营应用？

在 Palantir，我们经常把某些工作流和应用称为"运营性的"。这是什么意思？

**运营应用** 用于驱动特定决策流程，并允许用户通过数据回写来记录决策。传统仪表板和报告侧重于向用户提供只读洞察，而运营应用让用户能够采取行动。

通常我们发现，驱动决策的工作流更容易获得用户认可并影响组织成果。本页其余部分介绍如何实际使用 Foundry 的应用构建能力来创建运营应用。

## Action 类型

在 Foundry Ontology 中，[action types](https://www.palantir.com/docs/foundry/action-types/overview/) 提供了一种集中式、受管控的方式来定义组织中的用户如何将数据回写到系统中。配置 action type 时，你可以定义用户需要输入的参数，并灵活地 [configure the form](https://www.palantir.com/docs/foundry/action-types/configure-sections/)，支持创建子分区、描述等丰富选项。

谁能执行哪些 action 的管控通过 [submission criteria](https://www.palantir.com/docs/foundry/action-types/submission-criteria/) 来控制，你可以定义任意复杂度的规则，确保数据只按照组织的约束条件写入。

除了基本的表单录入工作流，action types 还支持一系列高级选项：

*   [Uploading attachments](https://www.palantir.com/docs/foundry/action-types/upload-attachments/) 允许用户在提交信息时上传图片、PDF 或其他文件。
*   [Side effects](https://www.palantir.com/docs/foundry/action-types/side-effects-overview/) 允许用户发送通知（包括邮件），或通过 [Webhooks](https://www.palantir.com/docs/foundry/action-types/webhooks/) 编排将数据发送到 Foundry 之外的其他系统。
*   [Function-backed Actions](https://www.palantir.com/docs/foundry/action-types/function-actions-overview/) 让你用代码定义任意复杂度的 action types，控制对象如何变更。
*   [Triggering schedule builds](https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/) 允许用户触发数据集成构建。

## 在应用中使用 action types

在 Ontology 中定义了 action type 后，在 Foundry 的应用构建工具中使用它非常顺畅。[Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) 和 [Slate](https://www.palantir.com/docs/foundry/slate/overview/) 都原生支持将 action 表单直接嵌入面向用户的应用。

*   在 Workshop 中，[Button Group Widget](https://www.palantir.com/docs/foundry/workshop/widgets-button-group/) 可以配置为让用户轻松将数据提交回平台。
*   在 Slate 中，[Action Widget](https://www.palantir.com/docs/foundry/slate/widgets-platform/#action) 向用户展示 action 表单。你可以将其嵌入 [Dialog](https://www.palantir.com/docs/foundry/slate/widgets-container/#dialog-widget) 来模拟 Workshop 体验，或者按需融入你的应用。
*   如果你想在 Foundry 的应用构建框架之外开发完全自定义的应用，可以通过 Foundry 的 [REST APIs](https://www.palantir.com/docs/foundry/api/ontology-resources/actions/apply-action/) 搜索和应用 actions。

## 总结

在数据集成和管理上的投入让组织中的运营者能够用数据做出更好的决策，并将这些决策记录到系统中以持续学习。你可以用 Foundry 的 Ontology 和应用构建能力在几小时内创建闭环工作流。

从 [learning how to create an action type](https://www.palantir.com/docs/foundry/action-types/getting-started/) 开始。

[← 上一页 Overview](https://www.palantir.com/docs/foundry/app-building/overview/)

[下一页 Connecting analytics to operations →](https://www.palantir.com/docs/foundry/app-building/analytics-operations/)
