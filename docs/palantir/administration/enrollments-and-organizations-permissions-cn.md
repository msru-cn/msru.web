Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/#permissions)权限

## [](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/#levels-of-permissions)权限级别

Control Panel 中的权限在两个不同级别管理：[_Enrollments_ 和 _Organizations_](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations/)。每个级别都有专门的页面来管理权限。

要管理 enrollment 的权限，使用 **Enrollment permissions** 标签页。

![Image 3: Enrollment permissions](https://www.palantir.com/docs/resources/foundry/administration/permissions-enrollment-permissions.png)

要管理 Organization 的权限，使用 **Organization permissions** 标签页。如果你能管理多个 Organization 的权限，使用顶部下拉菜单选择目标 Organization。

![Image 4: Organization permissions](https://www.palantir.com/docs/resources/foundry/administration/permissions-organization-permissions.png)

这两个级别严格独立。例如，能管理 enrollment 权限的用户不一定能管理 enrollment 的 Organization 权限。这提供了委派或分离职责的能力，特别是在多家公司在同一 Foundry 平台上协作的情况下。

## [](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/#roles)角色

在每个级别，**roles** 可以授予用户和/或群组。每个角色包含多个 _workflows_，对应被授予该角色的人能够执行的能力或操作。

每个级别有不同的角色，但每个级别都有一个最高权限级别的角色（分别是 **Enrollment administrator** 和 **Organization administrator**）。这些角色应谨慎授予，通常授予顶级管理员，因为它们：

*   授予管理 enrollment/Organization 权限的能力，因此也授予授予其他角色的能力；以及
*   包含该级别所有其他角色的所有 workflows。

[了解有关角色的更多信息。](https://www.palantir.com/docs/foundry/security/projects-and-roles/#roles)

### [](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/#technical-compliance-officer-role)Technical Compliance Officer 角色

每个 Organization 应至少有一个用户被授予 **Technical Compliance Officer** 角色。如果该角色未明确授予任何人，则 **Organization administrator** 将默认被视为 Technical Compliance Officer。

Technical Compliance Officer 的一个关键职责是作为 _Upgrade Assistant Operator_。作为 Operator，他们是主要联系人，负责了解需要关注的计划中的[平台变更](https://www.palantir.com/docs/foundry/upgrade-assistant/platform-changes/)，并可能需要用户手动操作。Upgrade Assistant Operator 应使用 [Upgrade Assistant 应用](https://www.palantir.com/docs/foundry/upgrade-assistant/overview/)中的 Operator View 来跟踪和推动用户执行所需操作的进度。

**Organization permissions** 下的 **Application-specific roles** 是正在迁移到上述角色的旧版独立角色。目前，application-specific roles 不包含在 **Organization administrator** 角色中，也不能包含在自定义角色中。

## [](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/#custom-roles)自定义角色

除了默认角色外，**Enrollment administrators** 和 **Organization administrators** 可以通过选择单个 _workflows_ 在 Control Panel 中定义自定义角色。这可用于创建更窄的角色以分离和委派职责。

自定义角色不跨组织共享，因此可以为不同组织定义不同的自定义角色。

[← 上一篇 Overview](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations/)

[下一篇 Managing access →](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-access/)
