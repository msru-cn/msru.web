Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#analysis-resources)分析资源

AIP Analyst 让你将分析保存为 [Compass 资源](https://www.palantir.com/docs/foundry/compass/overview/)，这样你可以回到工作、与协作者共享，并将其与其他 Foundry 项目一起组织。

分析是**动态的**，意味着它们会保持与数据同步。当你重新打开一个分析时，AIP Analyst 会根据 Ontology 的最新状态重新运行 Agent 的工具，因此结果始终反映当前真实情况并遵循每个查看者的权限。

为支持这种行为，分析会存储重建分析所需的对话状态：你的消息、调用的工具和引用的资源。它不存储工具结果或 Agent 回复。

## [](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#review-saved-content)查看保存的内容

保存前，保存对话框包含一个 **Review** 面板，让你预览将被存储的内容。它将分析分为两个视图：

*   **消息和工具：** 会话期间用户发送的消息和 Agent 生成的工具调用。
*   **引用：** 分析期间 Agent 可以访问的 Foundry 资源，如 object sets、datasets 和 functions。

![Image 3: 保存对话框的 Review 面板。](https://www.palantir.com/docs/resources/foundry/aip-analyst/aip-analyst-save-review.png)

## [](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#per-analysis-settings)每个分析的设置

设置随每个保存的分析一起保存。当你保存时，AIP Analyst 记录你的[分析设置](https://www.palantir.com/docs/foundry/aip-analyst/using-aip-analyst/#settings)、模型选择和启用的工具，这样重新打开分析时会恢复相同的配置。

## [](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#permissions)权限

保存的分析遵循标准的 [Compass 权限模型](https://www.palantir.com/docs/foundry/compass/move-and-share-resources/)。

打开分析资源并不会授予对该分析引用的所有资源的访问权限。当分析加载时，AIP Analyst 会检查查看者对每个引用资源的权限。查看者无法访问的引用可能会显示错误或跳过。

如果你的 enrollment 使用[基于分类的访问控制](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/)，保存对话框会提示你在保存前对分析应用分类标记。

## [](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#admin-configuration)管理员配置

分析保存可以在 enrollment 级别通过 Control Panel 禁用。AIP Analyst 检查每个用户**主要 organization** 的 enrollment 来确定保存功能是否可用。当分析保存被禁用时，AIP Analyst 隐藏分析侧边栏和资源标题，用户无法从 AIP Analyst 创建或打开分析资源。

![Image 4: AIP Analyst 分析保存的 Control Panel 设置。](https://www.palantir.com/docs/resources/foundry/aip-analyst/aip-analyst-control-panel.png)

[← 上一页 使用 AIP Analyst](https://www.palantir.com/docs/foundry/aip-analyst/using-aip-analyst/)

[下一页 Workshop 组件 →](https://www.palantir.com/docs/foundry/aip-analyst/workshop-widget/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
