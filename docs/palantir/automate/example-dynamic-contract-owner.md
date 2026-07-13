Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/automate/example-dynamic-contract-owner/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/automate/example-dynamic-contract-owner/#example-notify-contract-owners-of-contract-review)Example: Notify contract owners of contract review

In this example, we want to notify contract owners when the status of a contract changes to `Requires review`. We will use the `Contract` object type, which is a custom object type that we have created for this example.

## [](https://www.palantir.com/docs/foundry/automate/example-dynamic-contract-owner/#condition)Condition

We begin in the automation creation wizard by selecting the `Object added to set` condition. Since we want to be notified whenever a contract changes its status to `Requires review`, we can add a filter on the selected object set on the `contract status` as shown below. This automation will always trigger when an object enters the filtered object set, whether because a new object was created with the status `Requires review` or because an existing object changed its status to `Requires review`.

![Image 7: Notify contract owners example - condition](https://www.palantir.com/docs/resources/foundry/automate/example-dynamic-contract-owners-condition.png?width=450)
## [](https://www.palantir.com/docs/foundry/automate/example-dynamic-contract-owner/#effect)Effect

Next, we select **Notification** as the effect.

![Image 8: Notify contract owners example - select notification effect.](https://www.palantir.com/docs/resources/foundry/automate/example-dynamic-contract-owners-effect-select.png)

To ensure contract owners receive a separate email for each contract that requires review, select the **Send one notification for each Contract added** option. To dynamically send an email to the respective contract owners, use the **Object-property-backed** recipients feature and select the `Contract Owners` property as the user property. `Contract owners` is a property on the `Contract` object that contains an array of Foundry user IDs (similar to `1234a567-8bc9-12ab-3456-7ca89b1c234a`) of the associated owners. Note that all recipients require at least **Viewer** permission on the automation or they will not receive the notification.

![Image 9: Notify contract owners example - notification recipients.](https://www.palantir.com/docs/resources/foundry/automate/example-dynamic-contract-owners-effect-recipients.png)

Next, we need to define our notification content. To configure a more complex notification for our recipients, we will use the [function-generated notification content](https://www.palantir.com/docs/foundry/automate/effect-notification/#function-generated-notification) feature. Function-generated notifications provide more flexibility in how to structure our notification content and support the use of HTML content (`<html>`).

To support our function-generated notification, we create a [function](https://www.palantir.com/docs/foundry/functions/overview/) in a code repository that takes the recipient and a contract object as input and returns a notification.

Copied!

```typescript
1import { Function, Notification, User, ShortNotification, EmailNotificationContent } from "@foundry/functions-api";
2import { _automateExampleContract  } from "@foundry/ontology-api";
3
4@Function()
5public createContractStatusChangeNotification(user: User, contract: _automateExampleContract): Notification | undefined {
6
7    const shortNotification = ShortNotification.builder()
8        .heading("Contract change")
9        .content(`The contract "${contract.title}" changed its status to ${contract.contractStatus}`)
10        .addObjectLink("View contract", contract)
11        .build();
12
13    // Define the email body. The email body may contain headless HTML, such as tables of data
14    // Note that we can access properties of both the user and the contract in the content
15    const emailBody = `Hello, ${user.firstName}!
16    The contract "${contract.title}" that you are owning changed its status to "${contract.contractStatus}".
17
18    Check the contract details. View more customer information <a href="${contract.customerUrl}">here</a>.
19    `;
20
21    const emailNotificationContent = EmailNotificationContent.builder()
22        .subject(`Contract change - ${contract.customerName}`)
23        .body(emailBody)
24        .addObjectLink("View contract", contract)
25        .build();
26
27    return Notification.builder()
28        .shortNotification(shortNotification)
29        .emailNotificationContent(emailNotificationContent)
30        .build();
31}
```

After publishing the function, we can select the function in the automation creation wizard and connect the function to our effect inputs. For the `user` property, we select the `Recipient` of the notification. For `contract`, we select `New Contract added`, which is exposed as a condition effect input by our object set condition.

![Image 10: Notify contract owners example - notification content](https://www.palantir.com/docs/resources/foundry/automate/example-dynamic-contract-owners-effect-content.png?width=450)
## [](https://www.palantir.com/docs/foundry/automate/example-dynamic-contract-owner/#settings)Settings

To prevent contract owners from receiving status notifications about the automation, we can add our automation administrator group to the **Automation administrators** setting on the **Settings** tab of the automation creation wizard.

![Image 11: Notify contract owners example - settings](https://www.palantir.com/docs/resources/foundry/automate/example-dynamic-contract-owners-settings.png)

## [](https://www.palantir.com/docs/foundry/automate/example-dynamic-contract-owner/#summary)Summary

To complete the process, we provide a name for the automation, select a save location, adjust the expiration date to "never expire", and save the automation.

![Image 12: Notify contract owners example - overview](https://www.palantir.com/docs/resources/foundry/automate/example-dynamic-contract-owners-overview.png)

[← PREVIOUS Close tickets after a specified time](https://www.palantir.com/docs/foundry/automate/example-relative-time-condition/)

[NEXT Limits →](https://www.palantir.com/docs/foundry/automate/limits/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

