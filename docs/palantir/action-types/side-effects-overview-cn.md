Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/side-effects-overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/side-effects-overview/#side-effects)Side effects

Action type 被设计为支持组织内全方位的决策流程。当 Ontology 作为决策流程的记录系统时，使用 [rules](https://www.palantir.com/docs/foundry/action-types/rules/) 定义 object 修改可以让你以极大的灵活性表达业务流程。为了支持全方位的组织流程，action type 支持一些额外功能：

*   对于实时流程，你可能需要 _通知_ 用户系统中正在发生的变化，以便他们采取响应措施。
*   当 Foundry 以外的系统是你组织的真实数据源时，你可能需要与其他系统 _集成_ 以支持现有的业务流程。这种模式有时被称为 "决策编排"。

Action type 中的 **Side effects** 使你能够将数据从 Foundry 发送出去，与现有的组织流程集成。主要有两种 side effect 类型：

*   [Notifications](https://www.palantir.com/docs/foundry/action-types/notifications/) 允许你灵活配置在 action 应用时如何通知用户。这包括向平台上的用户发送 email 的能力。
*   [Webhooks](https://www.palantir.com/docs/foundry/action-types/webhooks/) 允许你以高度灵活的方式连接到 Foundry 以外的系统，包括向 REST API 或 ERP 系统发送请求。这使你能够写入组织中的其他源系统，或通过与消息系统集成更灵活地向用户发送通知。

你可以使用上面的链接了解更多关于 notifications 和 webhooks 的信息，或查看这些指南开始使用：

*   [设置 notifications](https://www.palantir.com/docs/foundry/action-types/set-up-notification/)
*   [设置 webhook](https://www.palantir.com/docs/foundry/action-types/set-up-webhook/)

[← 上一页 Function-backed actions / Batched execution](https://www.palantir.com/docs/foundry/action-types/function-actions-batched-execution/)

[下一页 Notifications →](https://www.palantir.com/docs/foundry/action-types/notifications/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

