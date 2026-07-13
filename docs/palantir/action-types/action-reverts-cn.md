Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/action-reverts/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/action-reverts/#revert-or-undo-actions)撤销或回退 action

[Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/) 中的 action revert 功能允许在 action 应用后立即撤销（即回退）该 action。你可以在 action 成功应用后，点击成功提示中的 **Undo** 来撤销。

新建的 action 默认支持撤销。

Action revert 仅适用于 Object Storage V2；也就是说，只有在 [OSv2](https://www.palantir.com/docs/foundry/object-backend/object-storage-v2-breaking-changes/) 中修改或创建 object type 的 action 才能被撤销。如果你的 object type 尚未存储在 Object Storage V2 中，可以按照此 [指南](https://www.palantir.com/docs/foundry/object-backend/osv1-osv2-migration/#migrate-from-object-storage-v1-phonograph-to-object-storage-v2) 进行迁移。

## [](https://www.palantir.com/docs/foundry/action-types/action-reverts/#configure-a-revertible-action)配置可撤销的 action

目前，只有执行 action 的用户才能撤销该 action。

在 action 的 **Form** 标签页中，打开 **Allow revert after action submission** 开关。配置并保存到 Ontology 后，该 action 即可撤销。

![Image 4: Form 区域中 action revert 开关截图](https://www.palantir.com/docs/resources/foundry/action-types/action-reverts-form-button.png)

对于 2024 年 5 月之后创建的、仅修改 OSv2 object type 的 action，**Form** 标签页中的 **Allow revert after action submission** 开关默认开启。如果 action 在 2024 年 5 月之前已存在且修改的是 OSv2 object type，则 revert 默认不开启，但可以手动启用。

如果 action 仅修改 OSv1 object type，则无法撤销。

## [](https://www.palantir.com/docs/foundry/action-types/action-reverts/#revert-an-action)撤销 action

撤销 action

下方的 toast 提示是你撤销 action 的唯一机会。执行 delete action 时尤其要注意这一点。

成功撤销后，用户会看到类似原始 action 成功时的 toast 提示，如下图所示。

编辑已应用：

![Image 5: Toast 提示："Edits successfully reverted"。](https://www.palantir.com/docs/resources/foundry/action-types/action-reverts-revert-action.png)

编辑已撤销：

![Image 6: Toast 提示："Edits successfully applied"。](https://www.palantir.com/docs/resources/foundry/action-types/action-reverts-edits-reverted.png)

## [](https://www.palantir.com/docs/foundry/action-types/action-reverts/#caveats)注意事项

Action revert 在某些情况下可能会失败：

*   如果 object 在 action 之后又被编辑过（即使编辑的是不同属性），则该 action 无法撤销。换句话说，只有当 action 是该 object 的最近一次编辑时，才能撤销。
*   如果在 action 提交后关闭了 action revert 开关，即使之后又打开了，该 action 也无法撤销。

Action revert 只回退 object instance 的编辑，不会回退 side effect（如通知或 webhook），也不会像原始 action 那样触发它们。

### [](https://www.palantir.com/docs/foundry/action-types/action-reverts/#undoing-a-delete-action-without-the-revert-action-toast)没有 revert toast 时如何撤销 delete action

如果执行了 delete action 且想撤销删除，但 revert toast 已消失，唯一的补救方案是：

*   迁移到新的 object type，并使用 function 复制所需的编辑；或者
*   丢弃该 object type 上的所有编辑。

[← 上一页 Monitoring](https://www.palantir.com/docs/foundry/action-types/monitoring/)

[下一页 Branching action types →](https://www.palantir.com/docs/foundry/action-types/branching-action-types/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

