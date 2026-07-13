Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/automate/history-visibility-and-scope/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/automate/history-visibility-and-scope/#automation-history-visibility-and-scope)Automation history visibility and scope

Automations can be configured with different scoping options that determine who can access run history for action and Logic executions.

Regardless of scoping mode, automations execute as the owner. This means:

*   **Action criteria**: The owner must satisfy submission requirements (group membership and permissions).
*   **Compute tokens**: Functions receive the owner's authentication token.
*   **Edit attribution**: Object edit history and audit logs show changes as performed by the owner.
*   **Permissions**: All ontology reads/writes use the owner's access level.

![Image 2: Automation scoping options, showing project scoped automations highlighted.](https://www.palantir.com/docs/resources/foundry/automate/project-scoped.png)

## [](https://www.palantir.com/docs/foundry/automate/history-visibility-and-scope/#project-scoped-automations-recommended)Project-scoped automations (recommended)

Project-scoped automations require all transitive resources used in the automation to be imported into the project. When dependencies change (for example, an action references a new version of a function), update the automation to reimport references and regenerate the scope.

Project scope mode is the recommended set-up for automations, if possible. Project scope enables team collaboration by making run history (including effect executions) visible to all users who satisfy the markings on a run. Project scoped automations still run as the owner of the automation.

### [](https://www.palantir.com/docs/foundry/automate/history-visibility-and-scope/#limitations)Limitations

Project-scoped mode currently does not support:

*   Stateful functions, including: 
    *   [Deployed Python functions](https://www.palantir.com/docs/foundry/functions/functions-deployed/)
    *   [AIP Chatbot functions](https://www.palantir.com/docs/foundry/chatbot-studio/chatbots-as-functions/)

*   Python and Typescript v2 functions that use a platform SDK
*   [Notification effects](https://www.palantir.com/docs/foundry/automate/effect-notification/)
*   Cross-organizational workflows

Additionally, project-scoped mode has limited support for:

*   Object types with [restricted views](https://www.palantir.com/docs/foundry/object-permissioning/configuring-rv-access-controls/): The owner of the automation and any viewers of event history must have access to all rows.
*   Object types with [object security policies](https://www.palantir.com/docs/foundry/object-permissioning/object-security-policies/): You must re-import security policies to the project after you update them.

Additionally, dependency computation for Typescript v1 is best-effort and may miss entities, meaning dependencies may be incorrectly computed. Consider using Typescript v2.

## [](https://www.palantir.com/docs/foundry/automate/history-visibility-and-scope/#user-scoped-automations)User-scoped automations

In user-scoped mode, only the owner of the automation has access to the run history. For better team collaboration and debugging, project-scoped mode is the recommended setup for automations.

With **Shared trigger history** enabled, users with permissions on marked data in the condition can see that runs were executed, but effect executions remain visible only to the automation's owner. For more information about configuring and viewing shared history, review the [shared history events](https://www.palantir.com/docs/foundry/automate/history/#history-visibility) documentation.

[← PREVIOUS Automation history](https://www.palantir.com/docs/foundry/automate/history/)

[NEXT Permissions →](https://www.palantir.com/docs/foundry/automate/permissions/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

