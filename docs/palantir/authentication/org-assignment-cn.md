Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/org-assignment/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#organization-assignment)组织分配

用户登录时会被分配到其主组织。用户的主组织在用于登录的 IdP 集成的组织分配部分中确定。如果你在该集成中配置了提供商群组，这些群组也会根据该部分的设置被标记到一个或多个组织。

## [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#default-organization-or-advanced-rules)默认组织或高级规则

大多数情况下，通过某个 IdP 集成登录的所有用户都应分配到同一个组织。选择 **Default Organization** 选项即可实现。提供商群组（如果配置了的话）也会被标记为与用户相同的组织。

高级规则创建可用于更复杂的场景，允许你定义一系列规则来分配正确的组织，并可选地设置回退方案。你可以分别为用户和提供商群组管理规则。

![Image 6: 选择了高级规则](https://www.palantir.com/docs/resources/foundry/authentication/advanced-rules-selected.png)

点击用户规则或群组规则对应的 **Manage** 打开高级规则编辑器。

### [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#define-organization-assignment-rules)定义组织分配规则

在提供商管理页面，展开 **Organization assignment** 部分。这让你可以决定用户登录时属于哪些组织。

对于简单的 SAML 2.0 集成，选择 **Default Organization** 并在下拉菜单中选择你的组织，然后保存。

![Image 7: 组织分配](https://www.palantir.com/docs/resources/foundry/authentication/authentication-org-assignment.png)

### [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#user-rules)用户规则

用户的组织分配规则通过编写匹配用户属性、内部群组或提供商群组的条件来配置。我们强烈建议使用用户属性和/或提供商群组条件，而不是内部群组条件。

![Image 8: 高级用户规则编辑器](https://www.palantir.com/docs/resources/foundry/authentication/advanced-user-rules.png)

保存前可以对已有用户验证这些规则。测试面板会显示用户匹配了哪条规则以及会被分配到哪个组织。注意，只有通过该提供商登录过的用户才能用于测试。

![Image 9: 测试用户规则](https://www.palantir.com/docs/resources/foundry/authentication/organization-assignment-testing.png)

### [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#group-rules)群组规则

群组的组织分配规则通过编写匹配群组名称的条件来配置。群组可以被分配到一个或多个组织。

由于匹配条件使用正则表达式，请确保条件中对特殊字符进行了转义。

![Image 10: 高级群组规则编辑器](https://www.palantir.com/docs/resources/foundry/authentication/advanced-group-rules.png)

## [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#no-organization)无组织

如果用户被分配为 `No organization`（通过默认组织功能或高级规则），则会被阻止登录。

如果提供商群组被分配为 `No organization`（通过 **Default organization** 或 **Advanced rule creation** 选项），则该群组会被分配到最近登录成员所属的组织。

Multipass 群组 AUM 规则

某些历史身份认证提供商集成可能在使用一种叫做 Multipass Group AUM 规则的旧版实现来分配用户和提供商群组到组织。如果 Control Panel 中未配置组织分配，这些规则仍然生效。但是，**如果在 Control Panel 中配置了组织分配，Multipass Group AUM 规则将被忽略**。如果不确定是否适用于你的配置，请联系你的 Palantir 代表。

完成设置后，[启用并测试你的 IdP 集成](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/)。

[← PREVIOUS Intake forms](https://www.palantir.com/docs/foundry/authentication/intake-forms/)

[NEXT Group assignment →](https://www.palantir.com/docs/foundry/authentication/group-assignment/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
