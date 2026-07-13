Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/group-assignment/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#group-assignment)群组分配

在配置身份认证提供商的过程中，管理员可以定义基于规则的群组。基于规则的群组会在用户登录时根据规则自动分配成员资格。每个身份认证提供商都可以单独配置这些规则。要设置基于规则的群组，进入 **Control Panel > Authentication > Authentication provider > Manage group assignment**，打开群组分配编辑器。

![Image 6: 分配规则菜单中的群组分配选项。](https://www.palantir.com/docs/resources/foundry/authentication/group-triaging.png)

## [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#defining-rule-based-groups)定义基于规则的群组

### [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#rules)规则

群组分配规则包含一个或多个 `AND` 条件，对用户属性或提供商群组进行评估。对于每条规则，满足所有条件的用户会被分配到指定的基于规则的群组。管理员可以通过为同一群组定义多条分配规则来实现 `OR` 条件。

条件使用正则表达式进行匹配，提供三种匹配方式：

*   包含模式匹配：模式至少匹配用户的一个提供商群组或数组类型属性中的一个值。
*   不包含模式匹配：模式不匹配用户的任何提供商群组，也不匹配数组类型属性中的任何值。
*   等于模式匹配：模式匹配用户的字符串类型属性。

![Image 7: 使用模式匹配的示例规则定义。](https://www.palantir.com/docs/resources/foundry/authentication/rule-based-groups-rules.png)

### [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#groups)群组

Foundry 在平台中使用三种类型的[用户群组](https://www.palantir.com/docs/foundry/platform-security-management/manage-groups/)：

1.   基于规则的群组：用于管理员定义的规则，在登录时应用。
2.   [内部群组](https://www.palantir.com/docs/foundry/platform-security-management/manage-groups/#group-internal-realms)：在 Foundry 中手动分配，可以包含用户和其他外部群组、基于规则的群组或内部群组。
3.   [外部群组](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/#provider-groups)：也叫提供商群组，由外部定义（通常由 IdP 定义），在用户登录时导入。

在这三种群组类型中，只有基于规则的群组可以通过这里讨论的自动化规则在 Foundry 中定义成员资格。

![Image 8: 群组列表及其类型。](https://www.palantir.com/docs/resources/foundry/authentication/group-types.png)

基于规则的群组有助于保证群组成员关系的清晰性和一致性，因此我们建议优先使用基于规则的群组而非内部群组。内部群组适用于临时访问、临时群组创建，或者有特定入职/撤销需求且无法由外部 IdP 满足的场景。因为这些情况需要人工介入，基于规则群组所用的属性和群组条件通常不足以判定访问权限。

![Image 9: 示例群组及其群组分配规则。](https://www.palantir.com/docs/resources/foundry/authentication/managing-rbgs.png)

## [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#validation-and-testing)验证和测试

*   进入 **Control Panel > Authentication > Authentication provider > Manage group assignment > Test rules**，可以对已有用户验证规则。这会显示用户匹配了哪些规则，以及下次登录时会被分配到哪些群组。注意，只有已经通过该提供商登录过的用户才能在 **Test rules** 面板中进行模拟。
*   规则在用户登录时生效，无论是已有用户还是新用户。规则_不会在保存后追溯执行_。
*   正则表达式的正确性是定义基于规则群组时常见的出错点。不匹配的模式往往会悄悄失败，同时导致意料之外的用户分配。

![Image 10: 对已有用户验证规则时的 Test rules 界面](https://www.palantir.com/docs/resources/foundry/authentication/rule-based-group-testing.png)

## [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#migrating-to-rule-based-groups-from-group-aum)从群组 AUM 迁移到基于规则的群组

部分 Foundry 身份认证配置使用了一种旧版工具来进行自动化用户分配，称为群组异步用户管理器（AUM）。群组 AUM 没有用户界面，由 Palantir 代表根据客户管理员的指示进行配置。

已启用群组 AUM 的客户注册无法使用基于规则的群组。未来，群组 AUM 规则将自动迁移为基于规则的群组规则。

[← PREVIOUS Organization assignment](https://www.palantir.com/docs/foundry/authentication/org-assignment/)

[NEXT Enable and test identity provider integration →](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information
