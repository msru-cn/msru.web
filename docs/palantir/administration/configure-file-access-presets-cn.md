Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/#configure-file-access-presets)配置文件访问预设

要配置文件访问预设，你的 enrollment 必须同时使用 Foundry 和 Gotham。如果 Control Panel 中没有该扩展，请联系 Palantir Support 了解如何启用文件访问预设配置。

你可以使用 **Access presets & settings** 扩展在 [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 中为你的 [Organization](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/#organizations) 配置文件访问预设，让用户在创建文件时快速访问常用的安全设置。文件访问预设由标题和可选描述组成，可以同时应用 [mandatory markings](https://www.palantir.com/docs/foundry/security/markings/) 和 [Classification-based Access Controls (CBAC)](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/) markings。

CBAC markings 在 Foundry 上默认未启用。请查阅[现有文档](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/)了解有关 CBAC markings 的可用性和使用方式的更多信息。

![Image 6: 显示 Control Panel 中的 access preset 扩展。](https://www.palantir.com/docs/resources/foundry/administration/access_presets_extension.png)

要在 **Access presets & settings** 扩展中配置文件访问预设，你必须能够执行 **Manage Auth Chooser Enterprise Presets** workflow，该 workflow 属于 Control Panel **Organization permissions** 扩展中的 `Data governance officer` 或 `Organization administrator` 角色。如果你没有访问包含该 workflow 的角色的权限，则需要请求你的 Organization administrator 授予你访问权限。

![Image 7: Control Panel 中的 Organization permissions 扩展显示可以管理 auth chooser enterprise presets 以配置文件访问预设的成员。](https://www.palantir.com/docs/resources/foundry/administration/access_presets_permissions.png)

## [](https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/#create-a-file-access-preset)创建文件访问预设

要创建文件访问预设，选择 **New preset** 打开 **New access preset** 弹出窗口。为预设提供 **Name**，并可选地输入 **Description**，然后添加预设应用的 **Markings**。确保在 **Can be used as** 下勾选 **File preset**，然后选择 **Create access preset**。

![Image 8: 显示 New access preset 弹出窗口。](https://www.palantir.com/docs/resources/foundry/administration/access_presets_creation.png)

如果你的环境使用 CBAC，则 **New access preset** 弹出窗口还将允许你为文件访问预设添加 CBAC markings。

### [](https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/#set-a-default-preset-selection-ordering)设置默认预设选择排序

选择 **File preset settings** 来配置用户的默认选中预设排序。用户可见的第一个预设将默认被选中，但用户可以更改预设。由于缺少相关 Marking 权限而对用户不可见的预设将在排序中被忽略。

![Image 9: 显示 Default selected file access preset 弹出窗口。](https://www.palantir.com/docs/resources/foundry/administration/access_presets_default_selection_order.png)

## [](https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/#file-access-preset-visibility)文件访问预设可见性

如果你的 Organization 中的所有用户对预设中配置的_所有_ Markings 都具有 "Apply marking" 权限，则他们可以查看文件访问预设。

你组织的访客成员将无法查看或应用为你组织配置的预设。他们将看到为其主要组织配置的预设。

## [](https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/#apply-a-file-access-preset)应用文件访问预设

配置并保存文件访问预设后，你 Organization 中的用户在设置 Gotham 中创建的某些文件的安全性时，将能够选择该预设。

![Image 10: 用户在 Gotham 中创建 Gaia map 时应用文件访问预设。](https://www.palantir.com/docs/resources/foundry/administration/access_presets_apply.png)

[← 上一篇 Configure scoped sessions](https://www.palantir.com/docs/foundry/administration/configure-scoped-sessions/)

[下一篇 Configure Workshop →](https://www.palantir.com/docs/foundry/administration/configure-workshop/)
