Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/app-building/curating-apps/

Markdown Content:

# 在 Applications Portal 中管理应用

Applications Portal 是一个发现和访问 Foundry 中所有应用的工具。它包括（1）Foundry 核心平台应用和（2）管理员推广到 Applications Portal 的受信自定义应用。

![Image 5: Applications Portal](https://www.palantir.com/docs/resources/foundry/app-building/apps-portal.png)

### 导航到 Applications Portal

你可以通过选择左侧边栏的 **Applications Portal** 图标打开 Applications Portal。你可以查看在 [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/)、[Slate](https://www.palantir.com/docs/foundry/slate/overview/) 或 [Carbon](https://www.palantir.com/docs/foundry/carbon/overview/) 中构建并已 [promoted](https://www.palantir.com/docs/foundry/app-building/curating-apps/#promoted-apps-in-applications-portal) 的应用。你还能快速访问所有 Foundry 平台应用。

你可以将常用应用"固定"到左侧边栏方便访问。在 Applications Portal 中或编辑应用时，选择应用名称旁边的星标图标。固定后，Foundry 侧边栏会出现 **Promoted Apps** 分区，列出你收藏的推广应用。

![Image 6: Sidebar Promoted App](https://www.palantir.com/docs/resources/foundry/app-building/apps-portal-sidebar-promoted.png?width=300)
Applications Portal 的权限基于 [filesystem permissions](https://www.palantir.com/docs/foundry/security/projects-and-roles/#request-access-to-a-project)。如果你只有 Discoverer 角色，系统会提示你 [request access](https://www.palantir.com/docs/foundry/security/projects-and-roles/#request-access-to-a-project)。

![Image 7: Promoted Apps](https://www.palantir.com/docs/resources/foundry/app-building/apps-portal-promoted-apps.png)

## Applications Portal 模式

Applications Portal 有两种使用模式：

*   基础开箱即用模式：发现和了解所有 Foundry 平台应用的工具。无需管理员操作。即使没有推广的自定义应用，Applications portal 也是左侧边栏中不可或缺的工具。
*   高级精选模式：管理员、Palantir 代表或客户治理团队将所有受信自定义应用推广到 Applications Portal。

每个注册环境或多租户注册环境中的每个租户只有一个 Applications Portal。用户可查看的推广应用限于其所属 [Organization](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/#organizations) 下的 [spaces](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/#spaces)。如果你有权访问共享 space，你也会看到该 space 的推广应用。

## Applications Portal 中的推广应用

推广应用是管理员标记为受信且可投入生产的应用。每个推广应用都需要以下元数据，将在 Applications Portal 和左侧边栏中展示：

*   名称：可以与资源名称不同
*   图标
*   描述（可选）
*   应用负责人
*   缩略图
*   Collections 和 tags：可以用来对推广应用进行分类，并在 Applications Portal 中应用筛选。Collections 为必填，tags 为可选。

推广应用会获得紫色勾选标记表示受信内容，与 Data Catalog 中的项目类似。

### 推广应用到 Applications Portal 的权限

管理员可以将 Workshop modules、Slate applications、Carbon workspaces 或外部网页链接推广到 Applications Portal。推广应用的权限在 [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 中授予。你必须拥有"Organization Administrator"或"User Experience Administrator"角色。你还必须是应用的编辑者或所有者才能推广它。

推广应用会在 Applications Portal 中展示给所有至少拥有该应用及其 space 的 Discoverer 角色的用户。

### 如何推广应用到 Applications Portal

应用推广 UI 在 Applications Portal 以及 Workshop 和 Slate 的编辑模式中均可用（见下方示例）。

取消推广也通过推广 UI 完成，选择左下角的 **Unpromote** 按钮即可。

你可以更改推广引用的资源，以受控方式发布新版本应用。

![Image 8: Applications Portal Promotion Workflow](https://www.palantir.com/docs/resources/foundry/app-building/apps-portal-promotion-ui.png?width=300)
## Applications Portal 中的分类

你可以使用 collections 和 tags 对 Applications Portal 中的应用进行分类，并应用筛选条件只查看特定应用。

创建 collections 和 tags 或将其添加到推广应用的权限与推广到 Applications Portal 的权限相同，基于 Control Panel 中的"Organization administrator"和"User experience administrator"角色。

### Collections

Collections 在左侧边栏中显示为 Applications Portal 的分区标题。它们用作 Applications Portal 的顶级分类来精选你的体验。Collections 在 Data Catalog 中创建和管理。创建 collection 后，你可以从 Data Catalog 或文件系统将推广应用添加到其中。

只有链接了推广应用的 collections 才会显示在 Applications Portal 中，且前提是你有权查看/发现这些应用。如果一个 collection 没有链接推广应用，或者你无权访问该 collection 中的任何应用，则不会显示。

### Tags

Tags 显示为推广应用卡片上的标签，可以从 Applications Portal 右上角进行筛选。你可以在 [**Tags** section of Platform Settings](https://www.palantir.com/docs/foundry/compass/tags/) 创建和管理 tags。创建后，可以在推广 UI 以及文件系统中将 tags 添加到推广应用。

只有链接了推广应用的 tags 才会作为筛选项显示在 Applications Portal 中，且前提是用户有权查看/发现这些应用。如果一个 tag 未添加到任何推广应用，或者用户无权访问带有该 tag 的任何应用，则不会显示。

### 在 Applications Portal 中管理平台应用

Foundry 平台应用包括 Quiver、Contour、Data Connection、Pipeline Builder 等工具。你可以在 Control Panel 的 **Application access** 标签下配置向用户显示或隐藏平台应用的选项。这让你在 Applications Portal 以及 Foundry 其余部分中只展示特定的应用子组。

[← 上一页 Conduct sentiment analysis with AIP](https://www.palantir.com/docs/foundry/app-building/sentiment-analysis/)

[下一页 Application building / Workshop / Overview →](https://www.palantir.com/docs/foundry/workshop/overview/)
