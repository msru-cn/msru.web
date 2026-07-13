Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics/datasets-object-sets/

Published Time: Thu, 09 Jul 2026 17:47:45 GMT

# [](https://www.palantir.com/docs/foundry/analytics/datasets-object-sets/#datasets-and-object-sets)数据集和对象集

## [](https://www.palantir.com/docs/foundry/analytics/datasets-object-sets/#datasets)数据集

在 Contour 和 Code Workbook 中，用户可以输出数据集（表格数据）来保存分析结果。这些数据集可以在 Contour、Code Workbook、Fusion 等应用中使用，也可以共享给其他用户。

该用哪个工具构建流水线？

Contour 和 Code Workbook 并不是为生产流水线设计的。如果你要构建或维护生产流水线，请使用 [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/)，它包含版本历史、分支与合并请求等功能，更适合健壮的生产流水线。更多信息见 [Foundry 代码转换工具对比](https://www.palantir.com/docs/foundry/code-workbook/code-products-comparison/)。

### [](https://www.palantir.com/docs/foundry/analytics/datasets-object-sets/#contour)Contour

在 Contour 中，你可以在分析路径底部选择 **Save as dataset** 来保存结果。命名并选择保存位置后，数据集会基于分析结果构建。[了解更多关于从 Contour 保存数据集。](https://www.palantir.com/docs/foundry/contour/datasets-save/)

![Image 6: Screenshot of Contour save path as dataset](https://www.palantir.com/docs/resources/foundry/analytics/datasets-contour-save.png)

### [](https://www.palantir.com/docs/foundry/analytics/datasets-object-sets/#code-workbook)Code Workbook

你可以选择 **Save as dataset** 将 Code Workbook 转换结果保存为数据集。默认情况下，新的转换不会自动保存为数据集。[了解更多关于从 Code Workbook 保存数据集。](https://www.palantir.com/docs/foundry/code-workbook/optional-data-persistence/)

![Image 7: code workbook save dataset](https://www.palantir.com/docs/resources/foundry/analytics/datasets-code-workbook-save.png)

### [](https://www.palantir.com/docs/foundry/analytics/datasets-object-sets/#when-are-code-repositories-a-better-fit)什么时候该用 Code Repositories？

建议使用 [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/) 来创建健壮的生产流水线，支持需要更高治理和监控水平的工作流。数据工程师可以用 Code Repositories 批量创建高效流水线。

适合 Code Repositories 的场景：

*   大规模数据的每日流水线，需要增量计算。
*   高可见度流水线，需要严格治理——能回退到历史代码版本，或者要求单元测试通过才能提交代码变更。

适合在 Contour 或 Code Workbook 中保存数据集的场景：

*   一次性抓取数据，然后在其他分析应用中使用。

虽然你可以给 Contour 和 Code Workbook 创建的数据集设置定时构建，但流水线类工作流通常应该放在 Code Repositories 中。

## [](https://www.palantir.com/docs/foundry/analytics/datasets-object-sets/#object-sets)对象集

对象集是真实世界实体的列表，保存后可在 Foundry 各应用中复用。对象集作为资源保存，方便与合作者共享。

对象集有两种类型：

*   **静态对象集：** 保存为主键列表，不随输入数据变化而改变。
*   **动态对象集：** 保存的是筛选条件的描述，当新数据满足条件时，对象集会自动更新。

在 Quiver 分析中创建的对象集可以保存到 Foundry。保存后，可以在新的 Quiver 分析中导入，或在 Object Explorer 等其他 Foundry 应用中打开。

要导出对象集，点击卡片右上角的 ![Image 8: Settings icon](https://www.palantir.com/docs/resources/foundry/analytics/gear.png?width=30px) 图标打开编辑器，然后切换到 Export 标签页。

![Image 9: Animation of export of object sets to a resource](https://www.palantir.com/docs/resources/foundry/analytics/object-sets-export-compass.gif)

要导入对象集，使用 **Import saved object reference** 卡片。

![Image 10: Import saved object set](https://www.palantir.com/docs/resources/foundry/analytics/object-sets-import-quiver.png?width=250px)
了解更多：[如何在 Quiver 中导入和导出对象集](https://www.palantir.com/docs/foundry/quiver/objects-overview/)。

对象集也可以在 Object Explorer 中保存、更新和比较。了解更多：[Object Explorer](https://www.palantir.com/docs/foundry/object-explorer/overview/)。

[← 上一页 模型](https://www.palantir.com/docs/foundry/analytics/models/)

[下一页 导出输出 →](https://www.palantir.com/docs/foundry/analytics/exporting-outputs/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings
