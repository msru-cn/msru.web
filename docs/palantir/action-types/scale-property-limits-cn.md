Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/scale-property-limits/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#scale-and-property-limits)规模和属性限制

存在若干限制以确保被编辑的 object type 能快速处理编辑并更新面向用户的数据，而不拖慢在线应用。超过这些限制提交的 action 不会成功，并会向用户显示错误消息。

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#configuration-limits)配置限制

`Allow multiple values` 开关允许用户向 parameter 传入一个值列表。

| 限制 | 最大值 |
| --- | --- |
| 基础类型列表 parameter 中的元素数量 | 10,000 |
| Object reference 列表 parameter 中的元素数量 | 1,000 |
| 在 submission criteria 中使用的列表 parameter 元素数量 | 1,000 |

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#edit-limits)编辑限制

| 限制 | 最大值 |
| --- | --- |
| 单次 action 提交可编辑的 **object type** 数量 | 50 |
| 单次 action 提交可编辑的 **object** 数量 | 10,000 |
| Action 提交中每个 **object** 的单独编辑 | 32KB (OSv1), 3MB (OSv2) |

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#batch-call-limits)批量调用限制

一个 action 在批量调用中最多可以被调用 10,000 次。如果 action 是 function-backed 且 function 未配置使用 [批量执行](https://www.palantir.com/docs/foundry/action-types/function-actions-batched-execution/)，此限制降为 20。

在批量 action 调用中应用的编辑在执行 [编辑限制](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#edit-limits) 时被视为一组，不管批量中的哪个请求导致了这些编辑。

根据调用应用的不同，可能还有其他限制适用。

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#supported-property-types)支持的属性类型

以下是支持的单值和数组属性类型的规格。注意，某些属性类型仅由 object storage v2 (OSv2) 支持。

### [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#single-property-types)单值属性类型

| 属性类型 | Parameter 类型 | 支持情况 |
| --- | --- | --- |
| Attachment | Attachment | 是 |
| Boolean | Boolean | 是 |
| Byte | Integer | 是 |
| Cipher text | String | 是 |
| Date | Date | 是 |
| Decimal | Decimal | 是 |
| Double | Double | 是 |
| Float | Double | 是 |
| Geopoint | Geopoint | 是 |
| Geoshape | Geoshape | 是 |
| Geotime series reference | Geotime series reference | 是（仅 OSv2） |
| Integer | Integer | 是 |
| Long | Long | 是 |
| Mandatory control | - | 不支持作为属性或在 action 中使用 |
| Media reference | Media reference | 是（仅 OSv2） |
| String | String | 是 |
| Short | Integer | 是 |
| Struct | Struct | 是（仅 OSv2） |
| Timestamp | Timestamp | 是 |
| Time series reference | Time series reference | 是（仅 OSv2） |
| Vector | Double list | 是（仅 OSv2） |

### [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#array-property-types)数组属性类型

| 数组属性类型 | 列表 parameter 类型 | 支持情况 |
| --- | --- | --- |
| Attachment | Attachment | 是 |
| Boolean | Boolean | 是 |
| Byte | Integer | 是 |
| Cipher text | String | 是 |
| Date | Date | 是 |
| Decimal | Decimal | 是 |
| Double | Double | 是 |
| Float | Double | 是 |
| Geopoint | Geopoint | 是 |
| Geoshape | Geoshape | 是 |
| Geotime series reference | Geotime series reference | 是（仅 OSv2） |
| Integer | Integer | 是 |
| Long | Long | 是 |
| Mandatory control | Mandatory control | 是 |
| Media reference | - | 不支持在 action 中使用 |
| String | String | 是 |
| Short | Integer | 是 |
| Struct | Struct | 是（仅 OSv2） |
| Timestamp | Timestamp | 是 |
| Time series reference | - | 不支持作为属性或在 action 中使用 |
| Vector | - | 不支持作为属性或在 action 中使用 |

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#supported-properties)支持的属性

目前，action 不能用于编辑 object 的 **主键**。修改主键等同于删除一个 object 然后添加一个新 object；你可以直接使用 [rules](https://www.palantir.com/docs/foundry/action-types/rules/#ontology-rules) 创建或删除 object，而不是用 action 编辑主键。

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#notification-recipients)Notification 收件人

使用 [side effect notifications](https://www.palantir.com/docs/foundry/action-types/notifications/) 时，单个 action 最多可以通知 500 个收件人。当 notification 内容使用 "From a function" 渲染时，此限制降为 50 个收件人。有关生成 notification 时需要考虑的限制的更多信息，请参阅 [notification 最大收件人限制](https://www.palantir.com/docs/foundry/action-types/notifications/#maximum-recipient-limits) 文档。

[← 上一页 Upload attachments](https://www.palantir.com/docs/foundry/action-types/upload-attachments/)

[下一页 Inline edits →](https://www.palantir.com/docs/foundry/action-types/inline-edits/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

