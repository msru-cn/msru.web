Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/automate/example-weekly-report/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/automate/example-weekly-report/#example-send-a-weekly-report-of-new-issues)Example: Send a weekly report of new issues

In this example, we want to send a weekly Notepad report that contains a list of all newly created support tickets from the previous week. If there were none, we do not want to send a report. We will use the `Support Ticket` object type, which is a custom object type that we have created for this example.

## [](https://www.palantir.com/docs/foundry/automate/example-weekly-report/#condition)Condition

We begin in the automation creation wizard by selecting the `Object added to set` condition. By selecting the `Support Ticket` object type without additional filters, the automation will trigger when new tickets are created.

Since we only want to send the report once a week, we add a schedule to the condition and specify that the automation should trigger every Monday morning at 8am.

Because we added a weekly schedule to the objects added condition, every Monday the automation will check whether new `Support Ticket` objects were created in the last week.

![Image 8: Weekly report - object and time condition](https://www.palantir.com/docs/resources/foundry/automate/example-weekly-report-object-and-time-condition.png)

## [](https://www.palantir.com/docs/foundry/automate/example-weekly-report/#effect)Effect

When the condition is met, we want to send an email with an attached PDF report that contains all support tickets that were created in the previous week. To accomplish this, we start by adding a notification effect.

![Image 9: Weekly report example - select notification effect.](https://www.palantir.com/docs/resources/foundry/automate/example-weekly-report-effect-select.png)

Since the PDF report should be generated for all support tickets that were created in the previous week, keep the default object grouping **Send one notification for all Support Tickets added**. For the recipients, add a group that contains the intended users. Alternatively, to only notify users who have had new support tickets assigned to them, select only object-property backed users.

![Image 10: Weekly report - notification recipients.](https://www.palantir.com/docs/resources/foundry/automate/example-weekly-report-notification-recipients.png)

Because the information is contained in the attached PDF, we do not need a complex notification body: instead, we can rely on the **Plain notification** type to configure the content in the UI. We can also provide a link to a [Quiver](https://www.palantir.com/docs/foundry/quiver/overview/) dashboard in the notification.

![Image 11: Weekly report - notification content](https://www.palantir.com/docs/resources/foundry/automate/example-weekly-report-notification-content.png)

### [](https://www.palantir.com/docs/foundry/automate/example-weekly-report/#attaching-a-notepad-document-to-a-notification)Attaching a Notepad document to a notification

To set up our notification attachment, we will use a [Notepad template](https://www.palantir.com/docs/foundry/notepad/templates-overview/) to dynamically create a Notepad document and attach a PDF of the Notepad document to our notification.

First, we need to create a Notepad template that can display the desired information. We can follow the [steps outlined in the Notepad documentation](https://www.palantir.com/docs/foundry/notepad/templates-create/) for this. In our specific case, we create a Notepad template that takes in a `Support Ticket` object set as template input. Using the template input, we display a chart and render a table with the title and description of each object in the object set.

![Image 12: Weekly report - notification template](https://www.palantir.com/docs/resources/foundry/automate/example-weekly-report-notification-notepad-template.png)

After saving and publishing our Notepad template, we can use it in our notification effect. First, we select it as attachment and define the template version. Then, we can connect the `support tickets` template input exposed by the Notepad template with the `New Support Tickets` condition effect input as shown below.

In this way, the Notepad template will be executed with the new support tickets as input and the resulting Notepad will be attached to the notification as PDF.

![Image 13: Weekly report - notification attachment](https://www.palantir.com/docs/resources/foundry/automate/example-weekly-report-notification-attachment.png)

## [](https://www.palantir.com/docs/foundry/automate/example-weekly-report/#summary)Summary

On the summary screen, we can confirm that the automation will send the Notepad template once for all new support tickets every Monday at 8am.

![Image 14: Auto-close support tickets - overview](https://www.palantir.com/docs/resources/foundry/automate/example-weekly-report-notification-overview.png)

[← PREVIOUS Branching automations](https://www.palantir.com/docs/foundry/automate/branching-automations/)

[NEXT Close tickets after a specified time →](https://www.palantir.com/docs/foundry/automate/example-relative-time-condition/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

