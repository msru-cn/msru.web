Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-code-workbook-profiles/

Markdown Content:
## 配置 Code Workbook profiles

Availability

Code Workbook profiles 仅在某些环境的 Control Panel 中可配置。如有问题请联系你的 Palantir 代表。

Code Workbook profiles 可以看作是针对特定用例或用户组的 Conda 包和 Spark 设置的有用默认配置。Code Workbook profiles 会出现在 Code Workbook 的 [Environment Configuration 对话框](https://www.palantir.com/docs/foundry/code-workbook/environment-overview/) 中供用户选择。你还可以为指定 profile 配置预热模块以减少启动时间。

在 Control Panel 中新创建的 Code Workbook profiles 由 Artifacts 支持。有关 Artifacts profiles 的详情见下文。

## Artifacts profiles

在 Control Panel 中创建的所有新 profile 都由 Artifacts 支持。Artifacts profiles 的配置与现有旧版 profile 基本相同，区别在于 Artifacts profiles 支持使用通过 Artifacts 安全发布的库，包括在 Foundry 中创建但未发布到 `shared` 频道的 Python 库。

在 Artifacts profile 中，Conda 环境包含包列表和支持仓库列表。要在 Code Workbook 中使用某个 profile，profile 上列出的所有支持仓库都必须导入到 workbook 的项目中。

编辑 profile 的 Conda 环境时，UI 会自动查找所需的支持仓库列表，并通知用户它们将被添加到 profile 中。

![Image 1: code workbook artifacts control panel](https://www.palantir.com/docs/resources/foundry/administration/code-workbook-artifacts-control-panel.png)

## 配置 Code Workbook profiles

### Conda 环境

在 Conda environment 标签页中，指定使用此 profile 时的默认包。用户可以根据需要在 workbook 中自定义其 Conda 环境。

要执行 Python 和 R 转换，Code Workbook 要求 profile 环境中分别存在 `vector-spark-module-py` 和 `vector-spark-module-r` 包。要添加这些包，你可以切换 Conda environment 标签页中的 Python 和 R 复选框，或在 **Add package** 下拉菜单中手动添加。SQL 不需要额外的包，因此在任何 profile 上都始终可用。

在更改 profile 的 Conda 环境之前，请先在 workbook 中自定义环境以确保所提议的环境可以正常解析。保存 Conda 环境更改时，系统会要求你确认已完成此操作。

![Image 2: code workbook profiles environment](https://www.palantir.com/docs/resources/foundry/administration/code-workbook-profiles-environment.png)

Code Workbook 会在启用 Python 时自动添加 `pandas`、`matplotlib` 和 `numpy` 的默认版本，在启用 R 时添加 `r-base` 的默认版本。如果需要不同版本，可以在 Control Panel 的 Conda environment 标签页中手动添加这些包，或直接在 Code Workbook 中通过 **Environment > Configure environment > Customize Profile** 添加，然后从下拉菜单中选择满足版本要求的版本。

此外，R 默认尚未提供自助服务。请联系 Palantir 支持以启用。

### Spark 设置

首次迁移到 Control Panel 支持的 Code Workbook profiles 时，你的旧版 Spark 设置会被保留。但是，如果你选择对 Spark 设置进行任何更改，则需要使用 Spark Configuration Service profiles 重新创建这些覆盖设置。

你必须对 Spark profile 具有导入权限才能将其添加到 Code Workbook profile 中。[了解有关可用 Spark profiles 的更多信息。](https://www.palantir.com/docs/foundry/optimizing-pipelines/spark-profiles-reference/)

![Image 3: code workbook profiles spark settings](https://www.palantir.com/docs/resources/foundry/administration/code-workbook-profiles-spark-settings.png)

### 预热

对于每个 profile，你可以选择预热一定数量的模块，使其随时可用。如果未定义预热模块，选择该 profile 的用户需要等待环境初始化。

在 Prewarming 标签页中，你可以看到预热 Interactive 和 Batch 模块的选项。Interactive 模块用于 workbook 会话。Batch 模块用于构建，包括定时构建。[了解 batch builds 和 interactive builds 的区别。](https://www.palantir.com/docs/foundry/code-workbook/environment-batch-interactive/)

![Image 4: code workbook profiles wmq](https://www.palantir.com/docs/resources/foundry/administration/code-workbook-profiles-wmq.png)

### 权限

profile 的 Owner 可以编辑 profile，Importer 可以将 profile 导入项目。Owner 自动包含在 Importer 组中。你可以选择 **Everyone in this enrollment** 来允许 enrollment 中的所有用户导入该 profile。

当 Importer 将 profile 导入项目后，项目中的任何人都可以使用该 profile。你可以为 profile 添加 markings 以将 profile 限制给特定 Organization。

![Image 5: code workbook profiles permissions](https://www.palantir.com/docs/resources/foundry/administration/code-workbook-profiles-permissions.png)

## FAQ

### 谁可以配置 Code Workbook profiles？

允许为 enrollment 创建 Code Workbook profiles 的用户集合可在 Control Panel 的 Enrollment Permissions 标签页中配置。

*   要创建 profile，用户必须具有 `Manage Code Workbook profiles` workflow，该 workflow 属于 `Analytical applications administrator` 角色（或是 enrollment administrator）。
*   要编辑现有 profile 配置（如 Spark 或 Conda 环境配置），用户必须对该 profile 资源具有 Owner 角色。

### 谁可以配置 warm module queues？

要配置 warm module queues，用户必须对 profile 具有 "manage" 权限（`Manage Code Workbook profiles` workflow 加上是 profile 的 Owner），以及 `Manage Code Workbook warm module queues` workflow，该 workflow 属于 `Resource management administrator` 角色。

### 默认所有用户使用哪个 profile？

名为 `default` 的 profile 是 enrollment 中 Organizations 用户的默认环境。

### 我在 Control Panel 中能看到哪些 profiles？

你拥有 Owner 访问权限的所有 profiles 将列在 Control Panel 的 Code Workbook 标签页中。可能还有一些你只有 Importer 访问权限但没有 Owner 访问权限的 profiles；你可以在 Code Workbook 中使用这些 profiles，但无法在 Control Panel 中查看它们。
