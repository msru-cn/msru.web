Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-support-types/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-support-types/#configure-support-types)配置支持类型

使用 support types 定制 [Issues 应用](https://www.palantir.com/docs/foundry/getting-help/issues/)以匹配你的工作流和运营模式，使用户更容易提交工单并降低工单被分配给错误负责人的风险。

要配置自定义 support types，请打开 Control Panel 并导航到 **Enrollment settings > Support > Support types** 并选择 **Add**。

![Image 3: Support type 创建表单](https://www.palantir.com/docs/resources/foundry/administration/support-type-creation.png?width=600)
如果你没有配置 support types，即使用户可以访问 Issues 应用也无法提交 issue。

![Image 4: 没有 support types 的 issue 提交流程。](https://www.palantir.com/docs/resources/foundry/administration/no-support-types.png?width=600)
## [](https://www.palantir.com/docs/foundry/administration/configure-support-types/#create-a-link-to-the-submit-issue-modal-with-the-support-type-pre-populated)创建预填充 support type 的 Submit Issue 模态框链接

你可以创建并分享一个链接，打开预填充了 support type 的 **Submit Issue** 模态框。将 `supportTypeRid` 查询参数附加到 Issues 应用的 `create` 路由上：

`https://<FOUNDRY_URL>/workspace/issues-app/create?supportTypeRid=<supportTypeRid>`

例如，你可以在 [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) 应用中嵌入一个 **Report an issue** 按钮，传递带有相关 `supportTypeRid` 的 `create` 路由，使用户在提交 issue 时无需手动选择 support type。要查找 support type 的 RID，请在 Control Panel 中导航到 **Enrollment settings > Support > Support types**。

[← 上一篇 Configure documentation provider](https://www.palantir.com/docs/foundry/administration/configure-documentation-provider/)

[下一篇 Configure support teams →](https://www.palantir.com/docs/foundry/administration/configure-support-teams/)
