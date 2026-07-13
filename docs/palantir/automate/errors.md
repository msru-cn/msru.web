Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/automate/errors/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/automate/errors/#evaluation-and-effect-errors)Evaluation and effect errors

This page describes some common error categories that may be encountered when using Automate.

## [](https://www.palantir.com/docs/foundry/automate/errors/#evaluation-errors)Evaluation errors

An automation may fail to evaluate due to problems with the underlying data. Automations are automatically [retried](https://www.palantir.com/docs/foundry/automate/retries/), but some errors may require manual intervention. For example, if the object type being monitored is deleted, automations using that type will fail to evaluate.

### [](https://www.palantir.com/docs/foundry/automate/errors/#automation-out-of-sync)Automation out of sync

Automations may use a reference to a [saved exploration](https://www.palantir.com/docs/foundry/object-explorer/save-explorations/) to define the input. This reference is not dynamic, but instead is stored according to the exploration as it exists when the automation is saved. If the exploration changes, the automation will continue to evaluate using the exploration's old state unless the automation is updated. In this case, a warning banner is displayed on the automation:

![Image 3: Warning banner for out of sync automation](https://www.palantir.com/docs/resources/foundry/automate/monitor-out-of-sync-banner.png)

### [](https://www.palantir.com/docs/foundry/automate/errors/#permissions)Permissions

Automation evaluation uses the permissions of the owner or recipients. This ensures that condition evaluation and any subsequent effects always reflect data that the user has access to at the time the automation is evaluated. If a user lacks permission to view object types, saved explorations, or the automation, they may see a permission-related error message instead of successful evaluation.

We strongly recommend storing automations and their related resources in shared [Projects](https://www.palantir.com/docs/foundry/security/projects-and-roles/). Learn more about automation [scope and log visibility](https://www.palantir.com/docs/foundry/automate/history-visibility-and-scope/).

## [](https://www.palantir.com/docs/foundry/automate/errors/#effect-failures-and-fallback-effects)Effect failures and fallback effects

To handle effect failures gracefully, you can configure a [fallback effect](https://www.palantir.com/docs/foundry/automate/effect-fallback/) for action and Logic effects. Fallback effects execute when the primary effect fails, allowing you to send notifications, log failures, or trigger alternative workflows.

### [](https://www.palantir.com/docs/foundry/automate/errors/#action-effect-errors)Action effect errors

After a successful condition evaluation, action effects may fail to execute. This failure could happen for a variety of reasons, including the following:

*   Changes to the action logic make it incompatible with the saved input configuration on the automation.
*   The [submission criteria](https://www.palantir.com/docs/foundry/action-types/submission-criteria/) for the action are not met.
*   The function backing the action has a runtime execution failure.

If an action effect fails, the history timeline will indicate that one or more actions failed to execute for that event, along with relevant error details.

Note that when per-object execution is enabled, the object identifier surfaced in the error details as the cause of the error represents the object associated with the first request that caused the failure; there may be more hidden failures that are not propagated.

### [](https://www.palantir.com/docs/foundry/automate/errors/#cycle-detection)Cycle detection

Consider a set of automations defined as follows:

*   **Automation A:** Monitors an object set of all red cars. When a new red car is added to the ontology, an action triggers to change the car color to blue.
*   **Automation B:** Monitors an object set of all blue cars. When a new blue car is added to the ontology, an action triggers to change the car color to red.

Such a sequence of automations would cause an infinite loop, or **cycle**. A framework has been implemented to automatically detect and disable live automations that cause cycles.

For certain automations, cycle detection may be undesirable. Cycles can be allowed by overriding the configuration in the **Settings** tab of an automation.

![Image 4: Allow cycles](https://www.palantir.com/docs/resources/foundry/automate/allow-cycles.png)

### [](https://www.palantir.com/docs/foundry/automate/errors/#notification-effect-errors)Notification effect errors

After a successful condition evaluation, notifications may fail to send. If this occurs, the history event will show a tag indicating that notifications were not sent to subscribers. Additional details will include an error identifier, the error message, and the object or objects that triggered the failure.

[← PREVIOUS Limits](https://www.palantir.com/docs/foundry/automate/limits/)

[NEXT Add an automation to a Marketplace product →](https://www.palantir.com/docs/foundry/automate/marketplace-automate/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

