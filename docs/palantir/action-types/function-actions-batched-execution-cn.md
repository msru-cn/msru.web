Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/function-actions-batched-execution/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/function-actions-batched-execution/#batched-execution)批量执行

当 action 以批量方式触发时（例如在 [Workshop inline edits](https://www.palantir.com/docs/foundry/workshop/widgets-object-table/#inline-edits-cell-level-writeback) 或 [Automate](https://www.palantir.com/docs/foundry/automate/execution-settings/) 中），底层 function 通常按顺序对每个请求调用一次，所有编辑在 action 调用结束时原子性地应用。

另外，为了提高性能或解决编辑冲突，你可能希望配置 function 在单次执行中接收整批 action 调用。

要启用批量执行，function 必须接收 _单个输入 parameter_，其中包含 _一个 struct 列表_（也称为 "map" 或 "dictionary"）。然后你可以启用批量执行，并将数据传入这个 struct 的字段，方式与通常向 function 顶层输入传数据一样。

使用批量执行时：

*   单次 action 调用会触发一次 function 执行，列表输入 parameter 中只有 _单个条目_。
*   批量 action 调用会触发一次 function 执行，列表输入 parameter 中有 _多个条目_。

### [](https://www.palantir.com/docs/foundry/action-types/function-actions-batched-execution/#example)示例

不是使用如下签名的 function-backed action：

```typescript
1@OntologyEditFunction()
2  public updateDestination(flight: Flight, destination: Airport): void {
3    // update flight object
4}
```

Function 可以接收一个请求 "批次" 并在单次执行中处理所有请求：

```typescript
1@OntologyEditFunction()
2public updateDestinationBatch(batch: {flight: Flight, destination: Airport}[]): void {
3    batch.forEach(({flight, destination}) => {
4      // update flight object
5    });
6}
```

然后你可以在配置 action type 时为该 function 启用批量执行：

![Image 2: 批量执行开关](https://www.palantir.com/docs/resources/foundry/action-types/function_backed_actions_batch_execution_toggle.png)

[← 上一页 Getting started](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/)

[下一页 Side effects / Overview →](https://www.palantir.com/docs/foundry/action-types/side-effects-overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

