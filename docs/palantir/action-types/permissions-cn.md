Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/permissions/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/permissions/#permissions)权限

权限通过以下方式应用于 action type：

*   谁可以查看给定的 action type？
*   谁可以编辑给定的 action type？
*   谁可以使用给定的 parameter 集合执行 action type？

## [](https://www.palantir.com/docs/foundry/action-types/permissions/#apply-action)执行 action

执行 action type 的能力取决于它编辑的 object type 和 link type 的配置。在所有情况下，提交 action 的用户必须能够查看被编辑的 object type 和 link type 及其 datasource，并通过 [submission criteria](https://www.palantir.com/docs/foundry/action-types/submission-criteria/)。如果 object type 只允许通过 action 编辑，用户可以对其能查看的所有 object 进行编辑。对于允许除 action 外其他方式编辑的 object type 和 link type，如果 object type 或 link type 由 dataset 支持，用户还需要对 writeback dataset 拥有编辑权限。如果 object type 或 link type 由 [Restricted View](https://www.palantir.com/docs/foundry/security/restricted-views/) 支持，用户需要通过编辑策略。

使用侧边栏中的 **Check access** 面板检查用户对 Workshop module 的访问权限，包括对依赖的 action type 及其 submission criteria 的访问权限。更多信息请查阅 [check access 面板文档](https://www.palantir.com/docs/foundry/security/checking-permissions/)。

### [](https://www.palantir.com/docs/foundry/action-types/permissions/#submission-criteria)Submission criteria

Action submission criteria 允许对谁可以运行 action 进行细粒度的控制。简单的 submission criteria 可以要求特定的 user ID 或 group ID，并且可以与 parameter 的信息组合使用。更多信息请参阅 [submission criteria 文档](https://www.palantir.com/docs/foundry/action-types/submission-criteria/)。

### [](https://www.palantir.com/docs/foundry/action-types/permissions/#object-edits-permissions)Object edits 权限

Object edits 可以被锁定为只允许通过 action 编辑，或重新开放以允许通过 action、Foundry Forms、直接 Object Explorer 编辑和 API 调用来编辑。为了在多个工作流中强制执行一致的安全范式，默认情况下，新的 object type 只允许通过 action 编辑。不建议在新的使用场景中使用其他编辑形式。

对于只允许通过 action 编辑的 object type，提交 action 的用户只需要对被编辑 object 拥有 `Read` 访问权限。这意味着用户可能创建他们无法查看的 object。

相比之下，当由 dataset 支持的 object type 可以通过 action、Foundry Forms、直接 Object Explorer 编辑和 API 调用编辑时，提交 action 的用户必须对所有被编辑 object 的 writeback dataset 拥有 `Edit` 权限。拥有 `Edit` 权限的用户将能够查看 writeback dataset 中的所有数据。

因此，不建议将 object type 设置为可通过 action、Foundry Forms、直接 Object Explorer 编辑和 API 调用编辑，因为仅为 object 编辑而授予 `Edit` 权限可能会向用户暴露超出完成 Ontology 编辑工作流所需的数据。

无论使用哪种 writeback 设置，action type 的配置不会显示受影响的底层 object type 的权限设置；配置 action type 的人必须确保这些权限正确。

将 object type 的编辑权限更新为 "Only allow edits via actions" 不会移除历史的非 action 编辑，但会阻止通过 Foundry Forms、直接 Object Explorer 编辑和 API 调用的进一步编辑。

![Image 2: 推荐只允许通过 action 编辑。](https://www.palantir.com/docs/resources/foundry/action-types/recommended-writeback-setting.png)

[了解更多关于 writeback 权限的信息。](https://www.palantir.com/docs/foundry/object-permissioning/configuring-rv-access-controls/)

## [](https://www.palantir.com/docs/foundry/action-types/permissions/#side-effect-permissions)Side effect 权限

任何可以设置 action 的用户都可以配置 side effect。

*   Webhook side effect 默认不启用。需要额外权限才能在 Data Connection 应用中配置 webhook 插件，然后才能在 action 设置页面中使用。关于在你的 Foundry 实例上使用 webhooks 的任何问题，请联系你的 Palantir 代表。

Submission criteria 必须正常通过；如果 action submission criteria 失败，则 side effect 不会被触发。

收件人必须有权访问 notification 中包含的任何 object 数据。

*   如果用户无权访问 notification 内容中包含的所有数据，notification 不会发送给他们。
*   如果有多个收件人且部分收件人缺少 notification 中包含的正确权限数据，只有拥有足够权限的用户才会被通知。
*   如果 notification 因任何原因发送失败，编辑仍可能成功。

执行 Action 的用户必须能够查看将接收 notification 的用户和/或 group。

[← 上一页 Inline edits](https://www.palantir.com/docs/foundry/action-types/inline-edits/)

[下一页 Monitoring →](https://www.palantir.com/docs/foundry/action-types/monitoring/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

