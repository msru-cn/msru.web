Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/analyze-user-activity-metrics/

Markdown Content:
## 分析用户活动指标

了解你的内容被如何使用，有助于展示影响力并确定工作优先级。例如，使用指标可能显示某个报告每天被组织内大量访问，说明价值较高；也可能显示某个仪表盘很少被查看，需要修改或下线。

这些洞察可以帮助你更有效地分配时间和资源，把精力放在最重要的内容上。同时也能帮你发现哪些领域需要额外培训或沟通，以提高对特定资源的使用率。

Palantir 平台提供组织级别的指标，涵盖平台整体和资源级别的使用情况，使管理员能够跟踪不同用户群体的采用趋势。有关群组管理的更多信息，请参阅 [Authentication](https://www.palantir.com/docs/foundry/authentication/overview/)。

## 权限与导航

使用指标有两个视图，访问路径不同：

*   **Platform usage** 标签页（组织级聚合指标）：拥有组织级 **View usage metrics** workflow 的任何用户都可以访问。默认情况下，该 workflow 分配给 `Organization Administrator` 和 `Organization Settings Viewer` 角色。
*   **Resource usage** 标签页（单个资源的指标）：满足以下**任一**条件的用户可查看特定资源的指标：
    *   对该资源拥有 `Owner` 权限，或
    *   拥有该资源所属组织的 **View usage metrics** workflow。此时，他们可以查看该组织内所有资源的使用情况，而不仅限于自己拥有的资源。

要让某个用户同时访问这两个视图但又不将其设为管理员，`Organization Administrator` 可以将 **View usage metrics** workflow 分配给现有或[新创建的角色](https://www.palantir.com/docs/foundry/platform-security-management/manage-roles//#creating-a-custom-role)，然后将该用户加入该角色。有关权限的通用信息，请参阅 [Enrollments and organizations permissions 文档](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/)。

用户活动指标仪表盘可在 **Control Panel** 的 **Organization** 下找到。

![Image 1: Control Panel 侧边栏，显示 Organization 下的 User Activity Metrics 仪表盘选项。](https://www.palantir.com/docs/resources/foundry/administration/usage-metrics-controlpanel.png)

## Platform usage

仪表盘默认只提供聚合使用指标。要获取个人级别的使用指标，请参阅下方 [**导出用户活动指标**](https://www.palantir.com/docs/foundry/administration/analyze-user-activity-metrics/#exporting-user-activity-metrics)。

默认情况下，此视图显示组织级别的高层使用量统计。使用量表示每天访问过平台的不重复用户数，不限访问时长。

### 按组查看使用指标

使用指标可按以下方式分组：

*   **Applications/Resources：** 按 `Applications/Resources` 分组时，柱状图中的柱体将按应用进行颜色编码。
*   **User group membership：** 按 `User group membership` 分组时，柱状图将按应用使用情况和用户组同时编码（例如，某个组中使用 `Contour` 的所有用户将有专属颜色）。

当某个用户组在所选日期范围内未达到最低 10 次交互时，相关信息将被隐藏，不会出现在柱状图中。

![Image 2: Platform usage 视图，显示聚合用户活动指标。](https://www.palantir.com/docs/resources/foundry/administration/usage-metrics-platformusage.png)

### 筛选使用指标

使用指标可按以下方式筛选：

*   **Applications/Resources：** 默认勾选 `Workspace`，但你可以选择实例上安装的其他应用，如 `Workshop`、`Slate` 或 `Contour`。
*   **Interaction type：** View 和 Modify
    *   **View：** 对应应用被打开的次数。每个产生 `Modify` 交互的用户自动计入 `View` 统计。
    *   `Modify` 对应应用被编辑的次数。注意，并非所有应用类型都有 `Edit` 事件（例如 Data Lineage）。

*   **Date Range：** 你可以选择任意时间范围，或选择面板左侧的预定义选项。

![Image 3: 用于选择时间段的日期范围筛选器。](https://www.palantir.com/docs/resources/foundry/administration/usage-metrics-daterange.png)

*   **Limit to user groups：** 默认勾选 `Only my groups`。但拥有正确[权限](https://www.palantir.com/docs/foundry/administration/analyze-user-activity-metrics/#permission-and-navigation)的任何用户都可以查询并选择组织内的其他群组，以及你作为访客加入的组织。不过需要满足以下两个条件：
    *   用户组必须至少有 10 个成员，否则仪表盘不会显示用户活动指标。
    *   在所选日期范围内，该资源必须至少有 10 次查看交互。

### Platform usage 仪表盘使用示例

*   **对比采用率：** 用仪表盘对比两个用户组之间的应用采用率，这两个组可以代表不同的工厂、部门或团队。
*   **识别开发趋势：** 跟踪新工具引入平台后的开发趋势。例如，随着工作流趋于稳定，你可能会观察到"Modify"交互类型的用户数逐渐减少。

## Resource usage

Resource usage 视图允许用户监控特定资源（例如 Workshop 应用）随时间推移的使用情况，前提是用户对该资源有[访问权限](https://www.palantir.com/docs/foundry/administration/analyze-user-activity-metrics/#permission-and-navigation)。此视图具备 [Platform usage 视图](https://www.palantir.com/docs/foundry/administration/analyze-user-activity-metrics/#platform-usage)中提到的所有分组和筛选功能，并额外增加了一个筛选器：**Resource**。

要使用此筛选器，用户需要：

1.   从下拉菜单中选择一个 _Application_。
2.   从组织目录中选择对应的 _Resource_。

![Image 4: Resource Usage 视图，按特定项目筛选。](https://www.palantir.com/docs/resources/foundry/administration/usage-metrics-filterbyproject.png)

在 _Application_ 下，_Project_ 选项允许管理员跟踪用户与特定项目的交互。组织通常将项目作为不同团队或工作流的代理。因此，此选项使用户能够监控各业务线在 Palantir 平台上的总活动量。

## 导出用户活动指标

一些组织可能希望更深入地分析原始用户活动指标。内部数据集较为敏感，只应由授权人员按照所有适用法律进行访问。Palantir 建议对导出的数据集进行适当的权限控制——例如，对项目应用 [marking](https://www.palantir.com/docs/foundry/security/markings/)。导出数据的处理受 [Palantir 可接受使用政策 ↗](https://palantir.pactsafe.io/legal-3791.html#ucr-985315) 约束。请参阅文档中的 [Internal dataset exports](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/) 了解更多信息。
