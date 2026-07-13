Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/

Markdown Content:
## 日志权限

## 所需角色

下表列出了 AIP 可观测性中各项操作所需的角色。

| 能力 | 所需角色 |
| --- | --- |
| 查看[指标](https://www.palantir.com/docs/foundry/aip-observability/metrics/) | 资源的 `View` 权限¹ |
| 查看[执行历史](https://www.palantir.com/docs/foundry/aip-observability/run-history/) | 资源的 `Edit` 权限¹ |
| 查看[追踪](https://www.palantir.com/docs/foundry/aip-observability/trace-view/)和[服务日志](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/)² | 资源的 `Edit` 权限¹ + 已启用日志访问³ + 拥有所有 Marking 的访问权限 |
| [搜索日志](https://www.palantir.com/docs/foundry/aip-observability/log-search/)² | 资源的 `Edit` 权限¹ + 已启用日志访问³ + 拥有所有 Marking 的访问权限 |
| [配置日志访问](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows) | `Information security officer` 或 `Enrollment administrator` 角色 |
| [删除日志](https://www.palantir.com/docs/foundry/administration/configure-logging/#delete-log-history) | `Information security officer` 或 `Enrollment administrator` 角色 |

¹每项能力背后都有一个 Foundry 操作：指标对应 `foundry-telemetry-service:read-metrics`（由 `Viewer` 角色授予），执行历史和日志对应 `foundry-telemetry-service:view-execution-history`（由 `Editor` 角色授予）。你可以通过[自定义角色](https://www.palantir.com/docs/foundry/platform-security-management/manage-roles/)用其他角色授予这些操作。

²用户始终可以仅凭 `foundry-telemetry-service:view-execution-history` 操作访问自己过去 24 小时内的执行日志，与日志访问设置无关。此例外不适用于 [CBAC 堆栈](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/)，在 CBAC 堆栈中必须启用日志访问才能查看自己的执行日志。

³日志访问启用：管理员必须直接在源执行器资源上（作为资源覆盖）或在源执行器所在的项目（如果资源已被移动，则还包括归因项目）上启用日志访问。完整详情请参见下面的[日志访问要求](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/#log-access-requirements)，启用方法请参见[配置日志](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows)。

## 日志访问要求

要查看资源的执行历史，你必须拥有该资源的 **edit** 权限。

要查看非你触发的执行的追踪和服务日志，你必须满足以下三个要求。下面[检查日志访问要求](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/#review-log-access-requirements)中描述的**日志访问概览**对话框会显示每项要求以及你当前是否满足。

*   **角色：** 你必须拥有源执行器的 **Edit** 权限。源执行器是调用链中的第一个可执行资源，可以是函数、action、自动化、AIP Logic、AIP agent 或模型实时部署。
*   **日志访问策略：** 必须为源执行器启用日志访问，可以在其**项目**（如果资源已被移动，还包括其**归因项目**——资源首次发出遥测数据的项目）上启用，也可以通过**资源级覆盖**启用。由 `Information security officer` 或 `Enrollment administrator` 进行启用。启用方法请参见[配置日志](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows)。
*   **Markings：** 你必须拥有应用于日志的所有 Marking。请参见下面的[日志内容上的 Markings](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/#markings-on-log-content)。

Actions 是一种特殊情况。由[旧版 Ontology 权限](https://www.palantir.com/docs/foundry/object-permissioning/ontology-permissions-legacy/)管理的 action 尚无法在项目级别进行管理，因此在 action [迁移到基于项目的权限](https://www.palantir.com/docs/foundry/ontology-manager/migrate-to-project-based-permissions/)之前，为其启用日志访问需要**资源级覆盖**而非项目设置。详情请参见[配置日志](https://www.palantir.com/docs/foundry/administration/configure-logging/#configure-resource-overrides-for-legacy-ontology-permissions)。

## 源执行器日志访问状态

Workflow Lineage 中的 **Run history** 和 **Log search** 面板会显示源执行器的日志访问状态标签。该标签反映你当前的访问级别：

*   **完全日志访问：** 在项目上或通过资源级覆盖启用了日志访问，并且你拥有所需的 Markings。从该资源发起的所有执行的日志均可见。
*   **用户 ID 受限日志访问：** 基于你的角色，你可以访问自己过去 24 小时内的执行日志。即使未另外启用日志访问也适用（CBAC 堆栈除外）。
*   **无日志访问：** 未启用日志访问且没有其他途径可以访问日志。

当项目的日志访问已启用且 Marking 权限满足时，**Source executor log access** 会显示为已启用。从已启用项目发起的所有执行的日志均可见。

![图片 1：显示项目上已启用完全日志访问的源执行器日志访问状态标签。](https://www.palantir.com/docs/resources/foundry/aip-observability/log-access-status-tag-source-executor.png)

否则，只有你自己过去 24 小时内的执行会显示日志（[CBAC 堆栈](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/)除外）。

![图片 2：显示过去 24 小时用户 ID 受限访问的源执行器日志访问状态标签。](https://www.palantir.com/docs/resources/foundry/aip-observability/log-access-status-tag-user24.png)

## 打开日志访问概览

要查看读取日志所需的条件，可以从以下两个位置之一打开**日志访问概览**对话框：

*   在 Workflow Lineage 图中，选择资源的节点并选择 **View log access**。
*   在 **Run history** 或 **Log search** 面板中，选择右上角的 **View log access**。

![图片 3：显示 View log access 选项的 Workflow Lineage 节点菜单。](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-node-view-log-access.png)

查看概览至少需要资源和其项目的 `Viewer` 角色。

如果你拥有 `Information security officer` 或 `Enrollment administrator` 角色并可以管理资源的日志访问，**Run history** 和 **Log search** 面板会显示 **Edit permissions** 替代 **View log access**。该菜单提供 **Configure log access** 和 **Delete log history** 选项，两者均在[配置日志](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows)中有说明。

![图片 4：Workflow Lineage 中 Run history 面板的 Edit permissions 控件。](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-run-history-edit-permissions.png)

## 检查日志访问要求

**日志访问概览**对话框列出了查看者必须满足的三个要求。

*   **角色：** 显示你在资源上的当前角色。如果你的角色不授予日志访问权限，对话框会建议授予日志访问权限的最低权限角色。
*   **日志访问策略：** 显示是否在包含此资源的项目（如果资源已被移动，还包括归因项目）上启用了日志访问，是否通过资源级覆盖启用，或未启用。如果你拥有 `Information security officer` 或 `Enrollment administrator` 角色，可以选择 **Edit** 来配置策略（参见[配置日志](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows)）。
*   **日志访问 Markings：** 显示应用于日志的 Markings，如果你缺少任何 Marking，还会显示缺少几个。

![图片 5：显示角色、日志访问策略和 Markings 要求的日志访问概览对话框。](https://www.palantir.com/docs/resources/foundry/aip-observability/log-access-overview-requirements.png)

## 日志内容上的 Markings

保护日志内容的 Markings 由管理员在启用日志访问时显式配置。这些是用户尝试查看日志时唯一强制执行的 Markings。

Markings 不是从源执行器的资源、其输入或执行访问的任何数据派生的。管理员负责选择反映工作流可能触及的任何数据的最高敏感度的 Markings，因为平台无法提前确定工作流可能访问的全部数据源。未配置 Markings 的日志对所有满足上述角色和日志访问要求的用户可见。

## 相关文档

*   [配置日志](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows)：启用和管理平台内日志访问
*   [执行历史](https://www.palantir.com/docs/foundry/aip-observability/run-history/)：查看可用的执行记录
*   [服务日志](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/)：配置权限后访问日志
*   [日志搜索](https://www.palantir.com/docs/foundry/aip-observability/log-search/)：搜索源执行器的所有执行日志
*   [AIP 安全和隐私](https://www.palantir.com/docs/foundry/aip/aip-security/)：了解 AIP 安全模型
