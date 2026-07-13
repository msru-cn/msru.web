Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/#trigger-schedule-build)Trigger schedule build

A [schedule](https://www.palantir.com/docs/foundry/data-integration/schedules/) defines a set of resources Foundry recomputes as part of a [build](https://www.palantir.com/docs/foundry/data-integration/builds/). By configuring a **schedule rule** on an action type, you can trigger a build of that schedule whenever the action is applied. This enables end-user workflows in the Ontology to recompute datasets without users having to navigate to [Data Lineage](https://www.palantir.com/docs/foundry/data-lineage/overview/) or the [Builds application](https://www.palantir.com/docs/foundry/data-integration/application-reference/#builds).

When an action type contains a schedule rule, the action's Ontology edits are applied _after_ the build begins. Edits do not wait for the build to finish. Instead, the action triggers the build, captures the schedule run RID, and immediately applies the rest of the rules, including the Ontology edits.

## [](https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/#configure-a-schedule-rule)Configure a schedule rule

Add a schedule rule to an action type and select a schedule. The schedule must be in [project-scoped mode](https://www.palantir.com/docs/foundry/data-integration/schedules/#project-scope).

![Image 3: Action type configuration page in Ontology Manager. A schedule rule is being added.](https://www.palantir.com/docs/resources/foundry/action-types/advanced-schedule-action-type-rule.png)

If the selected schedule is [parameterized](https://www.palantir.com/docs/foundry/building-pipelines/parameterization/), you must provide a value for each schedule parameter. When the action is applied, the resolved parameter values are passed to the schedule and forwarded to the underlying parameterized transforms inside the build.

Schedule rules are particularly useful when paired with [parallelized parameterized schedules](https://www.palantir.com/docs/foundry/building-pipelines/parameterization/#parallelized-mode-advanced). Review the [parameterization documentation](https://www.palantir.com/docs/foundry/building-pipelines/parameterization/#use-action-types-for-parallelized-schedules) to learn more about using actions in the Ontology for parallelized schedules.

## [](https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/#permissions)Permissions

The action's [submission criteria](https://www.palantir.com/docs/foundry/action-types/submission-criteria/) manage the permissions needed to trigger a schedule through the action. If users satisfy the action submission criteria, they can run the schedule without any direct permissions on the schedule.

Foundry checks whether a user has permission to run the schedule the first time it is referenced and whenever the schedule rule is edited. Referencing a schedule from an action type delegates control over running it from the schedule to the action type. Anyone who can manage actions on the action type then controls who can trigger the schedule.

## [](https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/#track-build-progress)Track build progress

When a schedule rule is triggered, the resulting schedule run is identified by a **schedule run RID**. This RID is exposed as a value that can be referenced from the action type's Ontology edit rules, allowing you to write it into a string property of an edited object. This is useful when you want to keep a record on the object of the build that was triggered by the action.

To capture the schedule run RID, configure a **Modify object** or **Create object** rule on the same action type and map a string property of the target object to the schedule run RID value provided by the schedule rule.

![Image 4: Action type configuration page in Ontology Manager. A schedule rule is added, and the schedule run RID is written to a string property through a Create object rule.](https://www.palantir.com/docs/resources/foundry/action-types/build-schedule-run-rid-property.png)

To render the stored RID as a live build status indicator, apply [resource RID formatting](https://www.palantir.com/docs/foundry/object-link-types/value-formatting/#supported-value-formatting) to the property. With formatting enabled, Foundry displays the RID value as a link with an icon and text that reflects the current status of the build: `Running`, `Ignored`, `Failed`, or `Succeeded`.

[← PREVIOUS Side effects / Set up a webhook](https://www.palantir.com/docs/foundry/action-types/set-up-webhook/)

[NEXT Configure sections →](https://www.palantir.com/docs/foundry/action-types/configure-sections/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

