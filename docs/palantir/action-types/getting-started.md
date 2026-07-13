Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/getting-started/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/getting-started/#getting-started)Getting started

In this guide, we will create a simple action type for changing the priority on a ticket.

We will configure submission criteria to make sure that the priority is `P0`, `P1` or `P2`, and that the ticket status is `Open`.

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#prerequisites)Prerequisites

For this guide, we will use a `Demo Ticket` object type, which has four properties:

*   `Ticket ID`
*   `Title`
*   `Priority`
*   `Status`

We also have two demo objects available:

| Ticket ID | Title | Status | Priority |
| --- | --- | --- | --- |
| PDS-123 | Demo Ticket One | Open | P2 |
| PDS-124 | Demo Ticket Two | Closed | P1 |

You can recreate these in your Ontology if desired, but it is not essential.

Note that for a user to be able to take an action defined in an action type configuration, [additional configuration is required](https://www.palantir.com/docs/foundry/object-link-types/allow-editing/#set-up-the-prerequisites). If running Object Storage V2, the user must enable edits with a toggle. If running Object Storage V1 (Phonograph), a writeback dataset must be created. Note that [Object Storage V1](https://www.palantir.com/docs/foundry/object-databases/object-storage-v1/) is in a [planned deprecation](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development; [migrate to Object Storage V2](https://www.palantir.com/docs/foundry/object-backend/osv1-osv2-migration/).

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#create-a-new-action-type)Create a new action type

We start by creating a new action type for changing the ticket's priority. In the Ontology Manager, select **Action type** on the left sidebar, then choose **New Action type** at the top right of the view.

![Image 10: Create a new action type](https://www.palantir.com/docs/resources/foundry/action-types/actions_wizard.png)

The creation wizard allows you to configure the most important features of an action type. Enter a **Display name** for your action type. Next, select the **Change object(s)** option and set it to **Modify**. From the following dropdown, select the `Demo Ticket` object type and add the `Priority` property by selecting **Add property**. Finally, select **Create** in the bottom right.

You can now see the full detailed view of your action type. You can make additional adjustments, like adding a **Description** in the **Overview** tab or adding additional properties to modify in the **Rules** tab.

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#edit-parameters)Edit parameters

Select the **Forms** tab to get an overview of the parameters. The `Ticket` and `Priority` parameter have already been created based by the **Rule**.

![Image 11: Actions form](https://www.palantir.com/docs/resources/foundry/action-types/actions_form.png)

Select the `Priority` parameter to limit the values it can take on. Change the constraints from **User input** to **Multiple choice**. This will allow you to pick what values can be chosen for this parameter. Add `P0`, `P1` and `P2` as options. If you applied your action to an object now, you could change the priority of a ticket to `P0`, `P1`, or `P2`. You will now add submission criteria that will restrict you to only changing the priority for open tickets.

![Image 12: Priority parameter](https://www.palantir.com/docs/resources/foundry/action-types/actions_constraints.png)

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#add-submission-criteria)Add submission criteria

Open the submission criteria section in the **Security & Submission Criteria** tab from the sidebar. Create a new condition by selecting **Condition** in the **Execution** section. Using the **Parameter** condition template, set a condition on the `Ticket` object parameter's `Status` property. Using the `is` operator, you can then do an exact string comparison between the ticket status and the specific value `Open`.

![Image 13: Submission criteria](https://www.palantir.com/docs/resources/foundry/action-types/actions_submission_criteria.png)

Add a failure message so users can see why an action has failed. Your action definition is now complete, and you can configure it to show up next to the Object View in Object Explorer.

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#add-the-action-to-an-object-view)Add the action to an Object View

Go to **Demo Ticket One** and edit its Object View. Add a new widget to the top, and choose the **Actions** widget. In the sidebar, select **Add Item.** Copy and paste the action RID from the Ontology Manager and paste it into the Action RID field. Name the label "Change Ticket Priority".

![Image 14: Add the action to an Object View](https://www.palantir.com/docs/resources/foundry/action-types/getting_started_add_RID.png)

By default, the action form will show every parameter as a field in the action form, including the `Ticket` parameter. Additionally, an action does not know that it should fill the current object in for the `Ticket` parameter. We will configure the action form to hide the ticket field (so the user cannot change the status of a different ticket), and set its value to the current object. Under **Default value**, select **Add Item**. Type the parameter ID for the `Ticket` parameter—in this tutorial, we set it to `ticket`. Change the value type to **Environment variable** and select **Current object**. Finally, change the display option to **Hidden**.

![Image 15: Configure the action form](https://www.palantir.com/docs/resources/foundry/action-types/getting_started_configure_action_form.png)

You will now see the action button on the preview page:

![Image 16: Action button on Preview page](https://www.palantir.com/docs/resources/foundry/action-types/getting_started_preview_page.png)

You can now save and publish the Object View.

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#apply-the-action)Apply the action

Visit an open ticket and select the **Change Ticket Priority** button we configured. You should see the action form appear over the view. Clicking into the **Priority** field will show the single selected submission criterion we configured on the parameter:

![Image 17: Changing ticket priority with action](https://www.palantir.com/docs/resources/foundry/action-types/getting_started_apply_action.png)

Pick a priority and select submit. The form will disappear and the object view will update with the new priority. Our submission criteria said that it should not be possible to run this action on a closed ticket—if we open Demo Ticket Two, which is closed, we see the following:

![Image 18: Submission criteria prevents action from running on closed ticket](https://www.palantir.com/docs/resources/foundry/action-types/getting_started_testing_validation.png)

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#resolve-conflicting-user-edits-actions-and-datasource-updates)Resolve conflicting user edits (actions) and datasource updates

Object instances in the Foundry Ontology can be created and modified by both input datasources and user edits/actions. When a single object instance (that is, a row or object with a specific primary key value) receives data from both the input datasource and user edits, these received values must be transparently resolved with a conflict resolution strategy.

There are two strategies for resolving conflicts:

*   Strategy 1: Apply user edits (default)
*   Strategy 2: Apply most recent value (may not be available on your enrollment)

[Learn more about how to resolve conflicting user edits and datasource updates.](https://www.palantir.com/docs/foundry/object-edits/how-edits-applied/#resolve-conflicting-user-edits-and-datasource-updates)

## [](https://www.palantir.com/docs/foundry/action-types/getting-started/#next-steps)Next steps

*   [Learn more about action permissions.](https://www.palantir.com/docs/foundry/action-types/permissions/)
*   [Create a function-backed action.](https://www.palantir.com/docs/foundry/action-types/function-actions-getting-started/)
*   [Use an action elsewhere in the platform.](https://www.palantir.com/docs/foundry/action-types/use-actions/)
*   [Resolve conflicting user edits (actions) and datasource updates](https://www.palantir.com/docs/foundry/object-edits/how-edits-applied/#resolve-conflicting-user-edits-and-datasource-updates)

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/action-types/overview/)

[NEXT Use actions in the platform →](https://www.palantir.com/docs/foundry/action-types/use-actions/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

