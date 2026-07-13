Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-logging/

Markdown Content:
## 配置日志 [Beta]

Foundry 中的应用会发出日志，提供运行状况的可见性，包括转换运行、构建失败和其他系统事件。

Foundry 日志包含以下信息：

*   应用和函数执行事件
*   转换和 pipeline 运行
*   构建和部署活动
*   系统错误和警告

此外，在 Code Repositories 中用户添加的日志也会被发出。

这些日志可以导出到 Foundry streaming dataset 以进行实时监控和分析。此功能仅对 Organization Administrators 可用，他们可以配置目标，将 Foundry 应用的日志流入 Foundry streaming dataset。

除了日志导出管理外，平台内的 Ontology 和 AIP 日志访问也由 Organization Administrators 和 Information Security Officers 管理。

要开始管理组织的日志可观测性设置：

1.   导航到 Control Panel 应用。
2.   在顶部横幅中，从下拉菜单中选择相关组织。
3.   在左侧边栏中，选择 **Organization** 部分下的 **Log observability settings**。或者，在主页中搜索 `Log observability settings` 并选择搜索结果中的相关页面。

![Image 1: Control Panel 搜索界面显示 log observability settings 选项。](https://www.palantir.com/docs/resources/foundry/administration/log-exporting-control-panel-search.png)

## 导出 Foundry 日志

Foundry 日志可以按组织导出到 Foundry streaming dataset。

定义导出配置后，日志条目将从配置创建之时起持续写入 streaming dataset。你可以使用 Foundry 丰富的数据转换和可视化工具套件实时处理和分析数据，或将日志导出到外部监控系统。

### 导出权限

要导出 Foundry 日志，用户必须是 **Organization Administrator**。此角色提供为组织配置日志导出目标所需的权限。有关组织级权限的更多详细信息，请参阅[组织权限](https://www.palantir.com/docs/foundry/platform-security-management/manage-orgs-and-spaces/#organizations)。

日志数据可能包含敏感信息。我们建议对输出 streaming dataset 应用 [security markings](https://www.palantir.com/docs/foundry/security/markings/) 以控制对此数据的访问。你可以在创建导出时直接应用 markings，或之后将它们添加到 dataset 中。

### 要求和限制

日志导出按 **source executor** 运行。Source executor 是发出日志的资源，如函数、action 或自动化。配置导出时，Foundry 从你选择的项目中存在的 source executor 收集日志，并针对这些 source executor（而不仅仅是导出 dataset）评估以下约束。

在设置日志导出之前，必须满足以下要求：

*   **Organization markings 必须匹配：** 每个 source executor 的 organization marking 集合必须与导出 dataset 的 organization marking 集合匹配。如果两个 marking 集合不同，则该 source executor 的日志无法导出。确保导出 dataset 所在位置的组织 markings 与你打算从中导出日志的 source executor 的组织 markings 匹配。
*   **Actions 必须使用基于项目的权限：** 导出范围内包含的任何 action type 必须先迁移到 [Ontology 基于项目的权限](https://www.palantir.com/docs/foundry/object-permissioning/ontology-permissions/)，然后才能为其设置日志导出。仍由[旧版 Ontology 权限](https://www.palantir.com/docs/foundry/object-permissioning/ontology-permissions-legacy/)管理的 action type 必须先[迁移到基于项目的权限](https://www.palantir.com/docs/foundry/ontology-manager/migrate-to-project-based-permissions/)。

### 定义导出配置

Foundry 日志可以从属于一组项目的资源导出，也可以从组织中的所有资源导出。定义导出配置时有一些限制：

*   每个组织最多可以有 50 个导出配置。
*   每个项目最多可以包含在三个导出配置中。
    *   此限制包括导出所有项目日志的配置。

*   为配置选择一组项目时，每个配置最多可包含 100 个项目。

按照以下步骤定义导出配置：

1.   选择 **Create log export**，将打开定义配置的对话框。

![Image 2: 日志导出配置页面显示现有配置和创建新导出的按钮。](https://www.palantir.com/docs/resources/foundry/administration/log-exporting-create-configuration.png)

1.   选择要从中导出相关日志的项目。你可以使用下拉菜单按空间筛选项目列表，或按名称搜索项目。已包含在其他导出配置中的项目会显示一个计数，指示现有导出的数量。

![Image 3: 日志范围选择界面显示要选择的日志导出项目列表。](https://www.palantir.com/docs/resources/foundry/administration/log-exporting-select-log-scope.png)

1.   指定日志将导出到的 streaming dataset 的名称和位置。位置必须在 Foundry 文件系统内，不能是用户创建的文件夹。

![Image 4: 导出位置配置对话框显示指定数据集名称和位置的字段。](https://www.palantir.com/docs/resources/foundry/administration/log-exporting-select-export-location.png)

1.   选择[日志 schema](https://www.palantir.com/docs/foundry/administration/configure-logging/#log-schema) 格式。Foundry 提供两种 schema 类型：内部 Palantir 格式（将 payload 作为序列化 JSON 字符串提供），或 OpenTelemetry (OTel) 协议格式（将 payload 序列化为 protocol buffer 二进制）。在同一步骤中，使用 **Unredact user IDs** 开关控制导出的日志中是否隐藏用户 ID。用户 ID 默认被隐藏。

![Image 5: Schema 选择界面显示可用的日志格式选项。](https://www.palantir.com/docs/resources/foundry/administration/configure-logging-select-schema.png)

1.   在 **Apply markings** 步骤中，选择要应用于输出 streaming dataset 的 security markings。此步骤是可选的，但建议用于控制对日志数据的访问，因为该数据可能包含敏感信息。选定的 markings 将在导出配置创建后应用于生成的日志 dataset。

![Image 6: Apply markings 步骤显示用于选择要应用于日志 dataset 的 security markings 的搜索界面。](https://www.palantir.com/docs/resources/foundry/administration/configure-logging-apply-markings.png)

1.   审核摘要和访问要求后选择 **Create configuration**。摘要显示选定的 markings 及其他配置详情，以便在创建导出前确认选择。

![Image 7: 摘要步骤显示选定的项目、导出位置、schema、应用的 markings 和访问要求确认。](https://www.palantir.com/docs/resources/foundry/administration/log-exporting-review-access-requirements.png)

1.   配置创建后，它将出现在现有配置列表中。任何应用的 markings 都会与导出配置详情一起显示。

注意，首次配置日志导出时，日志开始流入导出位置的 dataset 可能需要最多五分钟。

### 禁用日志导出

要禁用日志导出，选择配置右侧的垃圾桶图标删除任何列出的日志存储配置。生成的 dataset 将继续存在，但不会有新日志导出到其中。此外，如果 streaming dataset 被移到回收站或永久删除，日志将停止导出。

### 分析日志数据

日志存储 dataset 可能包含大量 streaming 数据，因此我们建议在分析前适当筛选 dataset。考虑使用基于时间的筛选来关注与你的监控和排障需求相关的日志条目。

Foundry 提供了许多强大的日志分析工具，如 [Transforms](https://www.palantir.com/docs/foundry/code-workbook/transforms-overview/) 和 [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/)。

### 日志 schema

Foundry 应用日志是遵循一致 schema 的结构化日志，使其适合程序化分析和监控。

具体来说，Foundry 日志包含各种应用事件的信息，包括转换执行、构建过程、系统错误和其他运维活动。日志结构取决于生成日志条目的应用或服务类型。

应用特定信息在结构化字段中捕获，提供有关正在执行的操作的上下文，包括执行详情、错误信息和性能指标。

Foundry 提供两种 schema 类型：

*   内部 Palantir 格式，将 payload 作为序列化 JSON 字符串提供
*   OpenTelemetry (OTel) 协议格式，以 [OTel 协议 ↗](https://opentelemetry.io/docs/specs/otel/overview/) 格式提供日志，payload 序列化为 protocol buffer 二进制，用于下游 OTel collector 的摄取。

![Image 8: Schema 选择界面显示可用的日志格式选项。](https://www.palantir.com/docs/resources/foundry/administration/configure-logging-select-schema.png)

### 日志归属

Foundry 应用日志由平台内的各种服务和应用生成。当日志流式传输到配置的 dataset 时，它们会被筛选为仅包含与配置日志存储配置的组织相关的日志。

为特定组织配置的日志导出将接收该组织使用的应用和服务的日志。这包括转换执行、构建和在组织上下文中执行的其他活动。

生成日志的资源的 RID 包含在日志条目中，可用于追溯日志到资源。

### 日志保证

Foundry 日志_不是_[审计日志](https://www.palantir.com/docs/foundry/security/audit-logs-overview/)。不保证 100% 可靠的日志传递。

Foundry 生成的日志内容可能会在不通知的情况下更改。

## 平台内 Ontology 和 AIP 工作流的日志访问

Ontology 和 AIP 的平台内日志访问在项目级别管理。平台内查看的日志访问控制与为导出 streaming dataset 配置的权限不同。这些控制特别针对从启用的项目调用的函数、actions、自动化工作流和语言模型。

你可以从 [Control Panel](https://www.palantir.com/docs/foundry/administration/configure-logging/#configure-log-access-from-control-panel) 或直接从 [Workflow Lineage](https://www.palantir.com/docs/foundry/administration/configure-logging/#configure-log-access-from-workflow-lineage) 中的资源节点配置平台内日志访问。

用户需要满足以下条件才能查看他们未调用的日志（保留 30 天）：

*   对 source executor 所在项目启用了 **Log reading**，或通过资源级覆盖。
*   对在项目日志访问设置或资源级覆盖中配置的任何 markings 具有 **Markings access**。
*   对日志发出所在的 source executor 具有 **Edit permission**。

具体来说，Edit permission 要求对应 `foundry-telemetry-service:view-execution-history` 操作，`Editor` 角色默认授予此操作。你可以使用[自定义角色](https://www.palantir.com/docs/foundry/platform-security-management/manage-roles/)通过不同的角色授予此操作。

有关查看要求和对应角色的权威列表，请参阅[日志权限](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/#log-access-requirements)。

## 从 Control Panel 配置日志访问

要按项目管理平台内日志访问控制：

1.   导航到 **Log access** 标签页。此标签页显示你的组织启用了日志读取的项目（如有）。默认情况下，组织内所有项目的日志访问都是禁用的。

![Image 9: Log access 标签页显示启用了日志读取权限的项目。](https://www.palantir.com/docs/resources/foundry/administration/log-access-observability-settings.png)

1.   要为项目启用日志访问，选择 **Add project**，将打开配置项目遥测日志可见性的对话框。

![Image 10: 用于配置遥测日志可见性设置的项目选择对话框。](https://www.palantir.com/docs/resources/foundry/administration/configure-telemetry-log-visibility-for-project.png)

1.   选择项目后，将出现第二个对话框以启用项目的日志读取并应用必要的 markings。

![Image 11: 确认对话框显示选定的项目及启用日志读取的选项。](https://www.palantir.com/docs/resources/foundry/administration/project-selected-to-configure-log-visibility.png)

1.   为项目启用日志访问后，它将出现在已启用项目列表中。

![Image 12: 更新后的列表显示所有已启用日志访问的项目。](https://www.palantir.com/docs/resources/foundry/administration/project-with-enabled-log-access.png)

1.   然后你应该能在整个平台中看到更新后的策略，项目中所有 source executor 资源的日志查看已启用。

![Image 13: 平台界面显示项目的已应用日志访问策略。](https://www.palantir.com/docs/resources/foundry/administration/project-policy-displayed-in-platform.png)

## 从 Workflow Lineage 配置日志访问

除了 [Control Panel 流程](https://www.palantir.com/docs/foundry/administration/configure-logging/#configure-log-access-from-control-panel)外，管理员还可以在 Workflow Lineage 的 **Log access overview** 对话框中查看和调整资源的日志访问。按照[日志权限](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/#open-the-log-access-overview)中的说明打开对话框，然后在 **Log access policy** 要求上选择 **Edit** 以打开配置步骤。

我们建议使用项目级日志访问。选择 **Configure in Control Panel** 使用 [Control Panel 流程](https://www.palantir.com/docs/foundry/administration/configure-logging/#configure-log-access-from-control-panel)启用。

配置步骤显示一个表格，总结资源日志访问的解析位置：

| 列 | 含义 |
| --- | --- |
| Current project | 当前包含资源的项目。显示 **Enabled** 或 **Not configured**。 |
| Attributed project | 资源归属的项目（用于日志访问）——资源首次发出遥测数据的项目。仅在与当前项目不同时显示。显示 **Enabled** 或 **Not configured**。 |
| Resource override | 资源级覆盖，当覆盖处于活跃状态或项目禁用了日志访问时显示。显示 **Enabled**、**Disabled** 或 **Not configured**。 |

![Image 14: 日志访问配置表格显示项目和资源覆盖状态。](https://www.palantir.com/docs/resources/foundry/administration/log-access-configure-table.png)

### 更新项目归属

Source executor 因日志访问目的而归属于某个项目。默认情况下，归属项目是 source executor 首次写入日志时所在的项目。如果资源在写入第一个日志后被移动，则当前项目和归属项目不同，日志访问将同时对两者执行。

当两个项目不同时，管理员可以将归属重新指向当前项目：悬停在前一个项目的状态标签上并选择 **Clear and inherit**。

![Image 15: 清除对前一个项目的归属以从当前项目继承日志访问。](https://www.palantir.com/docs/resources/foundry/administration/log-access-clear-attribution.png)

### 为旧版 Ontology 权限配置资源覆盖

只有在将 action 迁移到 [Ontology 基于项目的权限](https://www.palantir.com/docs/foundry/object-permissioning/ontology-permissions/)后，才能在项目级别管理 action。仍由[旧版 Ontology 权限](https://www.palantir.com/docs/foundry/object-permissioning/ontology-permissions-legacy/)管理的 actions 必须先[迁移到基于项目的权限](https://www.palantir.com/docs/foundry/ontology-manager/migrate-to-project-based-permissions/)。迁移完成后，管理员通过清除旧版 Ontology 资源标识符来更新其项目归属。

对于使用旧版 Ontology 权限的 action，配置步骤提供两条路径：将 action 迁移到项目（推荐），或配置资源覆盖。action 的 Ontology 资源标识符替代项目显示；管理员无法启用它，也无法通过 Foundry 的项目和文件系统访问它。

在 action 迁移之前，你可以通过激活资源覆盖并应用查看者必须持有才能读取资源日志的 **Required markings** 来启用日志访问。这些 markings 应用于日志之上，覆盖资源和项目日志设置上已有的任何 markings。

![Image 16: 为资源级日志访问覆盖配置所需 markings。](https://www.palantir.com/docs/resources/foundry/administration/log-access-resource-override-markings.png)

已禁用的资源覆盖已弃用。如果表格显示已禁用的覆盖，请将其移除并依赖项目级策略；在你完成此操作之前，对话框会阻止 **Next**。

配置策略后，选择 **Next** 继续到确认步骤。

### 确认变更

在变更生效之前，你必须选择确认复选框以确认安全权衡。启用覆盖时，你确认敏感对象数据可能被记录，并且你已应用正确的 markings。清除覆盖时，你确认资源恢复到项目级日志可见性。选择复选框后，选择 **Apply Changes** 保存。

![Image 17: 确认步骤要求在应用日志访问更改之前确认。](https://www.palantir.com/docs/resources/foundry/administration/log-access-acknowledgement.png)

### 删除日志历史

具有 `Information security officer` 或 `Enrollment administrator` 角色的用户可以随时删除日志。在 Workflow Lineage 的 **Run history** 或 **Log search** 面板中，选择 **Edit permissions > Delete log history > Delete logs**。

![Image 18: Workflow Lineage 菜单显示 Delete log history 选项。](https://www.palantir.com/docs/resources/foundry/administration/workflow-lineage-delete-logs-popup.png?width=500)

![Image 19: Workflow Lineage 对话框确认删除日志历史。](https://www.palantir.com/docs/resources/foundry/administration/workflow-lineage-delete-logs.png?width=500)
