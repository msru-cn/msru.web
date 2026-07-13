Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-rstudio-license/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-rstudio-license/#configure-rstudio-license)配置 RStudio® 许可证

Code Workspaces 使用 RStudio® Workbench，需要相应的运营许可证。要启用 RStudio® Workbench，Organization administrators 应首先联系 Posit™ 获取 Foundry 的 Posit™ Workbench 许可证或确认现有许可证是否足够。然后必须将许可证添加到 Foundry 以使应用被列入白名单。

如果你续期或升级了现有 RStudio® 许可证，请通过更新 Foundry 中的相应许可证（而非创建新的）来确保对现有工作空间的不间断访问。上一次验证通过的许可证在你的更新被 Posit™ 验证之前仍然有效。

## [](https://www.palantir.com/docs/foundry/administration/configure-rstudio-license/#add-rstudio-license)添加 RStudio® 许可证

要将 RStudio® 许可证添加到 Foundry，请按以下说明操作：

1.   导航到 Control Panel 中的 **License management** 部分。

![Image 5: License management 部分](https://www.palantir.com/docs/resources/foundry/administration/license-mgt-1.png)

1.   提供许可证信息（许可证密钥、命名用户数、到期日期）。

![Image 6: 许可证信息](https://www.palantir.com/docs/resources/foundry/administration/license-mgt-2.png)

1.   按照提示联系 Posit™ 和 Palantir 将许可证列入白名单。

![Image 7: 联系白名单许可证](https://www.palantir.com/docs/resources/foundry/administration/license-mgt-3.png)

1.   一旦 Posit™ 确认指定的许可证信息准确且可运行，Palantir 将把许可证列入白名单并在 Foundry 中启用 RStudio® Code Workspaces。

Foundry 不验证许可证信息，但需要 Posit™ 确认可用。Foundry 内部管理许可证；如果所有许可证席位都已使用，下一个新用户将不允许在 Foundry 中启动 RStudio®。

可以从 **License management** 中将特定许可证的访问限制给一部分用户组。

![Image 8: 许可证审批弹窗显示"currently pending approval from RStudio®"消息](https://www.palantir.com/docs/resources/foundry/administration/license-mgt-group.png)

* * *

RStudio® 和 Shiny® 是 Posit™ 的商标。

所有引用的第三方商标（包括徽标和图标）均为其各自所有者的财产。不暗示任何关联或背书。

[← 上一篇 Configure workspaces](https://www.palantir.com/docs/foundry/administration/configure-workspaces/)

[下一篇 Configure remote Marketplace stores →](https://www.palantir.com/docs/foundry/administration/configure-remote-marketplace-stores/)
