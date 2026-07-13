Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/internal-dataset-export/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/#internal-dataset-export)内部数据集导出

内部数据集导出可用于将内部 Foundry 服务数据集导出到你的 enrollment 中，以分析你对 Foundry 平台的使用情况。导出后，这些数据集会随着你的 enrollment 的新数据保持更新。

内部数据集较为敏感，只应由授权人员查看。Palantir 建议对导出的数据集进行适当的权限控制，例如对项目应用 [marking](https://www.palantir.com/docs/foundry/security/markings/)。导出数据的处理受 Palantir [可接受使用政策 ↗](https://palantir.pactsafe.io/legal-3791.html#ucr-985315) 约束。

## [](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/#setting-up-an-export)设置导出

要导出数据集，首先在可导出数据集列表中找到数据集并点击 **Export Dataset** 按钮。将出现一个对话框，你可以在其中选择保存此导出的位置。导出后，新的构建将开始，从创建导出到数据在你的数据集中可见可能需要几分钟。

注意这些数据集可能包含敏感信息，只应由具有必要安全资质的人员查看。导出后，你有责任确保此数据具有适当的权限，例如对项目应用 [marking](https://www.palantir.com/docs/foundry/security/markings/)。

![Image 2: 内部数据集导出](https://www.palantir.com/docs/resources/foundry/administration/internal-dataset-export.png)

## [](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/#exportable-datasets)可导出的数据集

以下类别列出了当前可导出的所有数据集以及创建导出所需的权限。要查看这些数据集的 schema，请前往 **Control Panel** 的 **Internal dataset export** 部分并点击数据集旁的下拉图标。

### [](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/#resource-management-granular-usage-data)Resource Management：精细使用数据

**Granular Usage Data** 数据集包含你的 enrollment 的基础设施使用数据，如计算和存储值。此数据集只能由具有 Resource Management Administrator 角色的用户导出。有关如何管理具有此角色的用户的更多信息，请参阅 [enrollment permissions](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/) 文档。

### [](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/#resource-management-aip-token-usage)Resource Management：AIP Token 使用量

**AIP Token Usage** 数据集包含你的 enrollment 的精细 LLM 使用数据，按模型细分 token 消耗。每行代表每个资源每天的特定模型和使用指标（如输入 token、输出 token、缓存读写），以及相应的计算和货币使用量。有关 LLM token 使用量如何转换为计算秒数的更多信息，请参阅 [Compute usage with AIP](https://www.palantir.com/docs/foundry/aip/aip-compute-usage/)。此数据集只能由具有 `Resource Management Administrator` 角色的用户导出。有关如何管理具有此角色的用户的更多信息，请参阅 [enrollment permissions](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/) 文档。

### [](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/#user-activity-processed-user-activity-metrics)User Activity：处理后的用户活动指标

**Processed user activity metrics** 数据集包含你的 enrollment 用户与平台应用交互时生成的聚合用户活动。事件按每天、每个应用和交互类型（查看或修改）进行聚合。每个事件还附加了应用的 project RID 和生成活动的用户的 organization RID。此数据集只能由具有 Enrollment Administrator 角色的用户导出。有关如何管理具有此角色的用户的更多信息，请参阅 [enrollment permissions](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/) 文档。

### [](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/#user-activity-raw-event-logs)User Activity：原始事件日志

**Raw event logs** 数据集包含你的 enrollment 用户生成的精细事件日志，附加了用户的 organization RID。与 **Processed user activity metrics** 数据集相比，此数据集更精细，支持更详细的活动分析。此数据集只能由具有 Enrollment Administrator 角色的用户导出。有关如何管理具有此角色的用户的更多信息，请参阅 [enrollment permissions](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/) 文档。

## [](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/#faq)FAQ

### [](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/#who-pays-for-the-build-of-this-exported-dataset)谁支付此导出数据集的构建费用？

生成导出数据集的计算成本不包含在你的使用费用中。但是，对此导出数据集的任何使用（如 Contour 分析、pipelines 或同步到 Ontology）将产生与这些功能的其他使用相同的费用。

### [](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/#why-are-resource-names-not-present-in-the-exported-datasets)为什么导出数据集中没有资源名称？

资源和项目名称可能包含关于所含数据的敏感信息，因此不包含在资源使用导出中。

### [](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/#why-is-there-no-data-in-my-exported-dataset)为什么我的导出数据集中没有数据？

导出的数据集按需生成，需要时间构建才能在导出数据集中显示数据。如果你的导出数据集在 30 分钟后仍不可用，请联系你的 Palantir 代表。

[← 上一篇 Configure CORS (cross-origin resource sharing)](https://www.palantir.com/docs/foundry/administration/configure-cors/)

[下一篇 Configure egress →](https://www.palantir.com/docs/foundry/administration/configure-egress/)
