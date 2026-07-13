Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/scale-property-limits/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#scale-and-property-limits)Scale and property limits

Several limits are in place to ensure edited object types can quickly process edits and update user-facing data without slowing down live applications. Actions submitted that exceed these limits will not succeed and will display an error message to the user.

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#configuration-limits)Configuration limits

The `Allow multiple values` toggle allows users to pass in a list of values to a parameter.

| Limit | Maximum |
| --- | --- |
| Number of elements in a primitive list parameter | 10,000 |
| Number of elements in an object reference list parameter | 1,000 |
| Number of elements in a list parameter when used in submission criteria | 1,000 |

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#edit-limits)Edit limits

| Limit | Maximum |
| --- | --- |
| Number of **object types** you can edit in a single action submission | 50 |
| Number of **objects** you can edit in a single action submission | 10,000 |
| Each individual edit of an **object** in an action submission | 32KB (OSv1), 3MB (OSv2) |

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#batch-call-limits)Batch call limits

An action can be called a maximum of 10,000 times in a batch. This limit is reduced to 20 when the action is function-backed and the function is not configured to use [batched execution](https://www.palantir.com/docs/foundry/action-types/function-actions-batched-execution/).

The edits applied in a batched action call are treated as a single group when enforcing [edit limits](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#edit-limits), regardless of which request in the batch was the cause of the edits.

Additional limits may apply, depending on the calling application.

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#supported-property-types)Supported property types

Below are specifications for supported single and array property types. Note that some property types are only supported by object storage v2 (OSv2).

### [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#single-property-types)Single property types

| Property type | Parameter type | Supported |
| --- | --- | --- |
| Attachment | Attachment | Yes |
| Boolean | Boolean | Yes |
| Byte | Integer | Yes |
| Cipher text | String | Yes |
| Date | Date | Yes |
| Decimal | Decimal | Yes |
| Double | Double | Yes |
| Float | Double | Yes |
| Geopoint | Geopoint | Yes |
| Geoshape | Geoshape | Yes |
| Geotime series reference | Geotime series reference | Yes (OSv2 only) |
| Integer | Integer | Yes |
| Long | Long | Yes |
| Mandatory control | - | Not supported as a property or in actions |
| Media reference | Media reference | Yes (OSv2 only) |
| String | String | Yes |
| Short | Integer | Yes |
| Struct | Struct | Yes (OSv2 only) |
| Timestamp | Timestamp | Yes |
| Time series reference | Time series reference | Yes (OSv2 only) |
| Vector | Double list | Yes (OSv2 only) |

### [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#array-property-types)Array property types

| Array property type | List parameter type | Supported |
| --- | --- | --- |
| Attachment | Attachment | Yes |
| Boolean | Boolean | Yes |
| Byte | Integer | Yes |
| Cipher text | String | Yes |
| Date | Date | Yes |
| Decimal | Decimal | Yes |
| Double | Double | Yes |
| Float | Double | Yes |
| Geopoint | Geopoint | Yes |
| Geoshape | Geoshape | Yes |
| Geotime series reference | Geotime series reference | Yes (OSv2 only) |
| Integer | Integer | Yes |
| Long | Long | Yes |
| Mandatory control | Mandatory control | Yes |
| Media reference | - | Not supported in actions |
| String | String | Yes |
| Short | Integer | Yes |
| Struct | Struct | Yes (OSv2 only) |
| Timestamp | Timestamp | Yes |
| Time series reference | - | Not supported as a property or in actions |
| Vector | - | Not supported as a property or in actions |

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#supported-properties)Supported properties

Currently, actions cannot be used to edit the **primary key** of an object. Modifying the primary key is equivalent to deleting an object and then adding a new object; instead of editing the primary key with an action, you can create or delete an object directly using [rules](https://www.palantir.com/docs/foundry/action-types/rules/#ontology-rules).

## [](https://www.palantir.com/docs/foundry/action-types/scale-property-limits/#notification-recipients)Notification recipients

When using [side effect notifications](https://www.palantir.com/docs/foundry/action-types/notifications/), a maximum of 500 recipients can notified in a single action. This limit is reduced to fifty recipients when notifications content is rendered "From a function". For further information about limits to account for when generating notifications, see the documentation on [maximum recipient limits for notifications](https://www.palantir.com/docs/foundry/action-types/notifications/#maximum-recipient-limits).

[← PREVIOUS Upload attachments](https://www.palantir.com/docs/foundry/action-types/upload-attachments/)

[NEXT Inline edits →](https://www.palantir.com/docs/foundry/action-types/inline-edits/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

