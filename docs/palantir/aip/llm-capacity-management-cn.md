Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip/llm-capacity-management/

Markdown Content:
## LLM 容量管理

LLM 容量在行业层面是有限资源，所有提供商（Azure、OpenAI、AWS Bedrock、Google Cloud Vertex 等）都会限制每个账户的最大可用容量。因此 Palantir AIP 遵循 LLM 提供商设定的市场级约束。行业通用的计量单位是 tokens per minute (TPM) 和 requests per minute (RPM)。

## Enrollment 容量和速率限制

Palantir 为每个 enrollment 设定了最大容量上限，称为"enrollment 级速率限制"。该容量按 TPM 和 RPM 针对每个模型单独计量，涵盖 enrollment 上启用的所有提供商的所有模型，包括 GPT、Claude、Gemini、Llama、Mixtral 等。每个模型拥有独立、互不影响的容量，不受其他模型使用的影响。

AIP 中的 LLM 容量在三个层级管理：enrollment 级限制设定总上限，[项目速率限制](https://www.palantir.com/docs/foundry/aip/llm-capacity-management/#manage-project-rate-limits)控制每个项目可使用的容量比例，[用户速率限制](https://www.palantir.com/docs/foundry/aip/llm-capacity-management/#user-rate-limits)管控不归因于项目的流量中的个人用户消耗。

默认情况下，所有客户都在 medium 层级，这个容量足以构建原型并扩展到几个用例，即使有数百用户和大数据集（例如数百万文档）。

此外，如果需要更大容量，AIP 提供将 enrollment 容量从 medium 层级升级到 large 或 XL 层级的选项。如果你持续触达 enrollment 速率限制导致无法扩展 AIP 使用，或者预期会增加 pipeline 量或总用户数，请联系 Palantir 支持。

Enrollment 限制现在显示在 Resource Management 应用的 **AIP rate limits** 标签下，同时显示 enrollment 层级。

![Image 1: Resource Management 应用中的 AIP 速率限制概览，显示 enrollment 限制以及项目和用户速率限制管理卡片。](https://www.palantir.com/docs/resources/foundry/aip/rate-limits-overview.png)

AIP 提供足够的容量来构建大规模工作流，特别是 XL 层级。这些层级已为数百家大规模使用 LLM 的 Palantir 客户提供了充足容量，我们还在持续提升这些限制。

有关各模型和层级的 enrollment 速率限制完整明细，请参阅 [LLM enrollment 速率限制](https://www.palantir.com/docs/foundry/aip/llm-enrollment-rate-limits/)。

## AIP 用量和限制

Enrollment administrator 可以导航到 Resource Management 应用的 **AIP usage & limits** 页面来：

*   [**查看用量：**](https://www.palantir.com/docs/foundry/aip/llm-capacity-management/#view-usage) 查看 enrollment 中所有项目和资源的 Palantir 提供模型的 LLM token 和请求用量。

*   [**管理速率限制：**](https://www.palantir.com/docs/foundry/aip/llm-capacity-management/#manage-rate-limits) 管理 enrollment 的项目和用户速率限制。

    *   **项目速率限制：** 配置每个项目中所有资源在每分钟可以使用的 TPM 和 RPM 最大百分比，按模型分别设置。
    *   **用户速率限制：** 配置每个用户在每分钟可以使用的 TPM 和 RPM 最大值，按模型分别设置。

### 查看用量

**View usage** 标签提供 enrollment 中所有项目、资源和用户的所有 Palantir 提供模型的 LLM token 和请求用量的可见性。管理员可以利用此视图更好地管理 LLM 容量和处理速率限制。

![Image 2: AIP token 用量视图页面。](https://www.palantir.com/docs/resources/foundry/aip/aip-usage-views.png)

此视图允许你：

*   查看**所有模型的汇总用量**以及每个模型的用量明细。
*   跟踪**每分钟 token 和请求用量**，因为 LLM 容量按 TPM 和 RPM 管理。
*   **下钻到单个模型**，因为容量是按模型分别管理的。
*   查看 **enrollment 用量概览并放大到项目级用量**，因为如上所述 LLM 容量有 enrollment 级和项目级两层限制。
*   查看每个模型的**用户归因**总用量。
*   查看**速率限制阈值。** 开关（在右上角）通过显示虚线来可视化项目或 enrollment 限制何时被触达。限制因模型和项目而异。显示两条速率限制线：enrollment/项目限制，以及"batch limit"（上限为特定项目和整个 enrollment 总容量的 80%）。阅读更多关于[优先处理交互式查询](https://www.palantir.com/docs/foundry/aip/llm-capacity-management/#prioritizing-interactive-queries)的内容。
*   **筛选到特定时间范围，最长两周的数据，精度到分钟**。用户可以通过左侧边栏的日期范围筛选器，或在图表上使用拖拽时间范围筛选器来缩小到特定时间范围。当时间范围短于 6 小时时，图表将包含到项目（在 enrollment 级别）或到资源（在项目级别）的分段。
*   **以表格形式查看用量概览。** 图表下方的表格包含每个项目（或筛选到单个项目时的每个资源）的 token 和请求汇总。表格受所有筛选器影响（时间范围、模型、项目筛选器）。

请注意，此视图**并非为 LLM 使用成本管理而优化**。[了解如何通过 **Analysis** 标签查看 AIP enrollment 的 LLM 成本。](https://www.palantir.com/docs/foundry/aip/llm-capacity-management/#visibility-into-llm-cost-on-aip-enrollments)

### 根据 AIP 用量采取行动

如果你在 enrollment 或项目级别触达速率限制，可以考虑采取以下措施：

*   调整项目限制以控制可能饱和 enrollment 容量的某个资源或项目的用量。
*   跟踪交互式用量，确保它没有被 pipeline 限速。如果是，可以在项目级别限制这些 pipeline，或将资源迁移到有更高限制的单独项目。
*   将构建调度到不同时段，大型构建安排在周末——尽可能避免同时运行多个大型构建，尽量将定期构建安排在不同时间或频率以避免冲突。
*   将工作流切换到 enrollment 当前未充分利用的、有显著剩余容量的不同模型。
*   申请升级到更大的层级。

## 管理速率限制

LLM 请求归因有两种方式，二者互斥——每个请求恰好受其中一种限制类型管辖：

*   **项目归因请求** 受 enrollment 限制和相关项目限制管辖。这涵盖请求源自已配置项目资源的工作流（例如 Pipeline Builder pipelines、AIP Logic、Automate、Chatbot Studio 和 Workshop 应用）。每用户限制不适用于这些请求。
*   **用户归因请求** 受 enrollment 限制和调用用户的每用户限制管辖。这涵盖请求直接源自用户会话而非项目资源的工作流（例如 AI FDE、AIP Assist、AIP Analyst、Pipeline Builder Explain 和 Generate 等原生助手功能，以及连接到 Foundry 提供模型的 IDE 集成如 Continue (VS Code) 和 Claude Code）。

![Image 3: Manage rate limits 标签显示管理项目速率限制和用户速率限制的选项。](https://www.palantir.com/docs/resources/foundry/aip/manage-rate-limits.png)

### 管理项目速率限制

在 Resource Management 的 **AIP usage & limits** 页面下的 **Manage rate limits** 标签上，管理员可以灵活地为 AIP 中的高产用例最大化 LLM 使用量，同时限制或禁止实验性项目饱和整个 enrollment 容量。Enrollment administrator 可以配置每个项目中所有资源在每分钟可以使用的 TPM 和 RPM 最大百分比，按模型分别设置。

![Image 4: 在 Resource Management 应用的 AIP rate limits 页面检查模型速率限制。](https://www.palantir.com/docs/resources/foundry/aip/check-rate-limits.png)

默认情况下，所有项目都被分配一个特定的运行限制。管理员可以创建额外的项目限制，定义每个限制包含哪些项目，以及可使用 enrollment 容量的百分比。

#### 模型覆盖

在每个项目限制内，你可以配置特定模型的覆盖以进一步控制模型级别的容量分配。模型覆盖允许你为单个模型设置不同的百分比限制，覆盖基础项目限制。这些覆盖仅适用于包含在该特定项目限制中的项目（对于默认限制，则是所有未分配到其他手动创建的项目限制的项目）。

模型覆盖实现了更精细的容量管理，并允许你创建模型"白名单"；你可以将基础项目限制设为 0%，然后仅为批准的模型添加特定百分比的覆盖。你还可以通过将覆盖限制百分比设为 0% 来明确禁止某些模型。

例如，以下步骤说明如何将项目限制中的项目限制为仅使用 Claude Sonnet 4 和 GPT-4.1：

1.   将基础项目限制设为 0%。
2.   为 Claude Sonnet 4 添加 30% 的模型覆盖。
3.   为 GPT-4.1 添加 25% 的模型覆盖。

包含在此项目限制中的所有项目的用户将只能在分配的容量限制内访问指定模型。

![Image 5: 添加模型覆盖以控制项目级别的模型用量。](https://www.palantir.com/docs/resources/foundry/aip/aip-project-limit-model-overrides.png)

### 用户速率限制

每用户速率限制管控单个用户在用户归因请求中可用的容量。它们确保任何单个用户不会通过交互式工作流耗尽 enrollment 对某个模型的全部容量。

用户速率限制在 Resource Management 的 **AIP usage & limits** 页面下的 **Manage rate limits** 标签中管理。Enrollment administrator 可以查看默认每用户限制、创建用户组覆盖以及配置每模型覆盖。

![Image 6: 用户速率限制配置页面显示默认每用户限制和用户组覆盖设置。](https://www.palantir.com/docs/resources/foundry/aip/user-rate-limits-overview.png)

#### 默认每用户限制

每个模型的默认每用户限制显示在 Resource Management 的 **User rate limits** 标签中，或 [enrollment 速率限制表](https://www.palantir.com/docs/foundry/aip/llm-enrollment-rate-limits/)的 **Per-user Limits** 列中。这些默认值由 Palantir 设定，适用于所有用户，除非管理员在 **User rate limits** 标签中进行了覆盖。每个模型的默认每用户限制显示在 Resource Management 的 **User rate limits** 标签中，或 [enrollment 速率限制表](https://www.palantir.com/docs/foundry/aip/llm-enrollment-rate-limits/)的 **Per-user Limits** 列中。这些默认值由 Palantir 设定，适用于所有用户，除非管理员在 **User rate limits** 标签中进行了覆盖。

我们建议使用 Palantir 的默认用户速率限制。我们在定义时平衡了两个方面：(a) 保护 enrollment 限制不被单个用户饱和；(b) 让用户能在 Foundry 的最新 AIP 工具中最大化生产力。如果管理员选择为所有模型设置新的自定义限制，应在新模型发布时重新检查，确保没有无意中限制了用户。

#### 每用户覆盖

Enrollment administrator 可以覆盖每用户默认值，为特定用户（作为特定用户组的一部分）授予不同的每用户限制。这对于高级用户、交互式应用背后的服务账户或其用户归因工作流需要持续高吞吐量的团队非常有用，而无需提升 enrollment 的整体容量层级。它也可以用来保护生产工作流中使用的某个模型的容量，防止被用户意外饱和。

每用户覆盖可以用两种方式之一表达：

*   **Enrollment 限制的百分比：** 1 到 100 之间的值，代表 enrollment 级速率限制的百分比。例如，如果 enrollment 对某模型有 400 万 TPM，管理员配置了 25% 的覆盖，则该覆盖范围内的任何用户的有效限制为 100 万 TPM。
*   **绝对 TPM 和 RPM 值：** 明确的 tokens-per-minute 和 requests-per-minute 值。当百分比方式无法匹配期望限制时，这为管理员提供了精确控制。

配置覆盖后，它会替换公布的每用户默认值；不会与默认值混合或受其下限约束。

将某模型的每用户限制设置到 50,000 TPM 或 10 RPM 以下可能会导致受影响用户的某些 AIP 功能异常。覆盖表单会在配置的限制低于这些建议最低值时显示警告。

#### 覆盖层级

每用户覆盖可以在三个层级配置，按特异性顺序应用：

1.   **默认每用户覆盖：** 适用于 enrollment 中每个用户、所有模型的单一百分比。这成为替代 Palantir 公布的每模型默认值的新基线。
2.   **每模型覆盖：** 在默认值之上为一个或多个特定模型设置不同的百分比或绝对限制。每模型覆盖允许管理员在不改变整个目录的情况下针对个别模型调高或调低每用户限制。
3.   **用户组覆盖：** 针对一个或多个 Foundry 用户组的覆盖。用户组覆盖定义自己的默认百分比，以及可选的每模型覆盖（百分比或绝对值）。当用户属于覆盖范围内的组时，使用组的配置替代 enrollment 范围的每用户默认值。

如果在任何层级都未配置覆盖，则使用该模型的公布每用户默认值。

![Image 7: 用户速率限制覆盖配置允许管理员为特定用户组设置百分比或绝对值限制覆盖。](https://www.palantir.com/docs/resources/foundry/aip/user-rate-limits-override.png)

#### 用户组覆盖如何解析

用户组覆盖应用于一组命名的 Foundry 用户组。每个覆盖有名称、可选描述、可选默认百分比和可选的每模型限制集。当用户属于覆盖中列出的任何组时，该覆盖匹配该用户。

如果用户属于多个覆盖范围内的组，这些覆盖中对该用户和模型产生的最高限制胜出。这使覆盖具有累加性和可预测性：通过一个组给用户授予更高限制不会因其在另一个较低配置的组中的成员身份而被悄悄撤销。例如，假设 enrollment 的默认用户限制为 40%。用户 A 属于两个不同用户限制覆盖的组，一个定义用户限制为 10%，另一个定义为 enrollment 容量的 35%。用户 A 的用户限制将是 35%，即覆盖中的最高值。

当用户组覆盖被移除时，受影响组的成员将回退到 enrollment 范围的每用户配置。如果 enrollment 没有自己的每用户配置，则回退到公布的每用户默认值。

### AIP 预留容量

预留容量是 Resource Management 中的 AIP LLM 容量管理工具。预留容量可以在现有 enrollment 容量之外为生产工作流保障 tokens per minute (TPM) 和 requests per minute (RPM)。目标是保障关键生产工作流不受项目速率限制、enrollment 限制以及竞争同一 token 和 RPM 池的其他资源的限制。

![Image 8: 特定模型已分配预留容量的示例，显示有权访问额外容量的项目列表及各项目的百分比分配。](https://www.palantir.com/docs/resources/foundry/aip/aip-reserved-capacity-overview.png)

#### 关键功能

*   预留容量在项目级配置，通过将特定量的 TPM 和 RPM 分配给指定项目来实现。这适用于单个模型。
*   项目可以被分配总预留容量的百分比，让你能够优先保障最关键资源并根据组织需求定制 LLM 分配。
*   当预留容量用完时，已分配预留容量的项目和资源将自动使用现有的共享项目和 enrollment 限制，因为预留容量是在_现有 enrollment 容量之外_提供的。

#### 可用性和成本

我们无法保证所有模型在所有时间都有预留容量可用。这取决于 Azure、AWS、GCP、xAI 等模型提供商的可用性和服务。我们的目标是在所有行业领先的旗舰模型上提供预留容量。

根据过去一年 AIP 的表现，预留容量足以实现 99.9% 的可用性。我们无法保证 100% 的容量可用性，但基于过去一年的使用模式，超过 99% 的 LLM 请求失败是由于 enrollment 和项目速率限制导致的。这些问题可以通过预留容量工具来解决。

预留容量作为服务没有额外成本；增加的成本取决于额外的 token 使用，与 AIP 中所有其他 LLM 使用相同。未来对于新用例或特定模型可能会有变化。如果此政策变更，我们不会对使用预留容量的现有工作流追溯收费；这些工作流将继续仅按额外 token 使用计费。

Palantir 在标准环境中为最新 LLM 提供默认预留容量。拥有 `resource management administrator` 权限的用户可以将此预留容量分配到特定项目。

#### 使用示例

考虑以下示例以进一步理解预留容量的使用：

*   你的 enrollment 容量为 100 万 TPM。如果你有一个包含生产应用的项目，该应用的默认限制是 enrollment 容量的 70%，即 70 万 TPM。
*   要增加此生产应用的容量，你可以通过提高项目速率限制将包含项目的容量提升到 enrollment 容量的 100%，即 100 万 TPM。
*   虽然应用的限制现在是 enrollment 限制的 100%，但该应用仍在与其他资源竞争这个共享容量。你可以在 Resource Management 应用的 **AIP usage & limits** 部分的 **View usage** 标签中识别竞争资源。然后可以交替竞争资源的调度时间，或将资源迁移到不同模型。
*   要确保此生产应用拥有所需容量，即使已以其他方式最大化效率，你可以使用默认预留容量。假设提供的默认预留容量是特定模型的 50 万 TPM。
*   你可以将该预留容量分配给关键资源，如你的生产应用。此应用将使用 50 万 TPM 直到该额外容量用完。然后它将使用 100 万 TPM 的共享 enrollment 容量，与其他资源竞争。这样总容量达到 150 万 TPM，其中 50 万 TPM 由此应用独享，enrollment 的 100 万 TPM 容量在资源间共享。

## 查看 AIP enrollment 的 LLM 成本

使用 **Analysis** 页面查看 AIP 启用的 enrollment 上 LLM 使用的成本。

在 **Analysis** 页面，选择 **Filter by source:**`All LLMs` 和 **Group by source**。这将生成按模型分段的每日 LLM 成本图表。

![Image 9: Resource Management 的 Analysis 标签允许你筛选 LLM 查看按模型分段的每日 LLM 成本图表。](https://www.palantir.com/docs/resources/foundry/aip/analysis-tab-llm-usage.png)

## 优先处理交互式查询

通常，AIP 会将交互式请求优先于 batch 请求的 pipeline。交互式查询定义为与 LLM 的任何实时交互，如 Workshop、Chatbot Studio、AIP Logic LLM board 的预览以及 Pipeline Builder LLM 节点的预览。Batch 查询定义为大量发送的请求集，用户不期望立即响应，例如 Transforms pipelines、Pipeline Builder、Automate（用于 Logic）。

此原则目前保证 enrollment 和项目级的 20% 容量始终为交互式查询保留。这意味着对于某模型 100,000 TPM 的容量，在任何给定分钟最多只能有 80,000 TPM 用于 pipeline，而至少 20,000 TPM（最多 100,000 TPM）可用于交互式查询。

## FAQ

### 项目级和用户级速率限制预期如何使用？

考虑以下示例：

*   一个 enrollment 只有一个 AIP 用例在生产中，因此包含该用例的项目被移到"Production"限制下，可访问高达 100% 的 enrollment 限制。
*   除了这个生产用例外，还有一个处于测试阶段的用例需要考虑。这个测试用例应该能运行测试而不会占用整个生产用量。此用例可以添加到"Testing"限制中，最多 30% 容量。"Production"限制降低到 90% 以确保总有容量可用于测试。
*   在上述用例基础上，我们增加第二个生产用例。但与第一个使用 GPT-5 的不同，这个使用 Claude Sonnet 4.6。我们可以安全地将此新用例添加到"Production"限制中，与第一个生产用例并列。
*   同一个 enrollment 希望一组用户能够实验 LLM。Enrollment administrator 将两个项目添加到"Experimentation"限制中，最多 20% 容量。
*   测试项目和两个实验项目在技术上可以合计消耗高达 70% 的容量，但历史数据显示实际使用通常低于此值。
*   最后，此 enrollment 希望保护生产用例不被单个用户抢占。管理员将 GPT-5 和 Claude Sonnet 4.6 的默认用户速率限制覆盖设为 enrollment 容量的 10%，同时增加 Claude Opus 4.6 和 GPT-5.4 的容量。此外，他们将用户主目录容量设为 0%（以阻止在私有目录中构建并鼓励协作），并在 Control Panel AIP settings 中为这些指定用户授予 LLM 构建者权限。

### 为什么百分比在限制类别中的每个项目上分别执行，而不是在项目和用户间共享？

*   多个项目和资源可以共享相同的 100% 容量，原因是基于过去一年中数百个客户的 LLM 使用模式，大多数项目和资源不会频繁调用 LLM。因此多个资源可以共享相同的 100% 容量。
*   如果限制类别中的所有项目共享相同的使用百分比，就实施了硬性使用限制。但基于现有使用情况，99.9% 的情况下这没有必要。多个资源在同一分钟使用最大容量的情况非常罕见，即使发生，请求也会重试直到成功。

### 为什么有 AIP 使用限制？

*   首先，不同提供商在 TPM、RPM 和区域可用性方面的服务差异很大。虽然 AIP 利用所有提供商的容量，但 Palantir 无法绕过各云服务商施加的限制。

*   此外，Palantir 提供给客户的 LLM 容量比大多数提供商的常规服务有更高的合规要求。Palantir 保证零数据保留 (ZDR) 和对数据路由到特定区域的控制（地理限制）。

*   大多数提供商，即 Azure OpenAI、AWS Bedrock、GCP Vertex 和 Palantir 托管模型，都支持地理限制，但地理限制请求的 LLM 容量保障更小。其他提供商如 OpenAI 直连、Anthropic 直连和 xAI 在更少的区域提供模型。

    *   客户在 Control Panel 的 **AIP Settings** 中启用的模型提供商越多，获得的容量就越高。
    *   我们为有更高使用量的客户提供升级到更大容量层级的选项。
    *   无地理限制的 AIP 客户可以使用更大的容量池。
    *   某些模型在某些区域仍未广泛可用。有时 Palantir 有早期访问权，但并非总是如此。
    *   某些功能仍不可用，如 batch API。Batch API 支持在 24 小时内处理数十亿 token，但需要在该期间存储数据，这不符合 Palantir 的合规要求。

*   如上所述，我们的 medium 到 XL 层级足以支持大规模生产工作流。请联系 Palantir 支持更改你的层级。

### 解决容量问题的最大障碍是什么？

*   地理限制是导致容量问题的最主要原因。如果你的 enrollment 有地理限制，且从法律角度可以取消地理限制，你应该与 Palantir 团队合作来实现。
*   新模型在早期阶段通常容量有限。
*   容量问题在涉及数百万条记录的大型 pipeline 中更加严峻。
