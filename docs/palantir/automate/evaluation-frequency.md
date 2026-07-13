Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/automate/evaluation-frequency/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#evaluation-frequency)Evaluation frequency

Automate offers three evaluation frequency modes for [object set conditions](https://www.palantir.com/docs/foundry/automate/condition-objects/): [live monitoring](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#live-monitoring), [scheduled monitoring](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#scheduled-monitoring), and [automation-dependent](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#automation-dependent).

## [](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#evaluation-frequency-support)Evaluation frequency support

The following table summarizes the condition types that support each evaluation frequency mode:

| Condition type | Live monitoring | Scheduled monitoring | Automation-dependent |
| --- | --- | --- | --- |
| [Time condition](https://www.palantir.com/docs/foundry/automate/condition-time/) | - | ✓ | - |
| [Objects added to set](https://www.palantir.com/docs/foundry/automate/condition-objects/#objects-added-to-set) | ✓ [1](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#streaming-live-monitoring) | ✓ | ✓ |
| [Objects removed from set](https://www.palantir.com/docs/foundry/automate/condition-objects/#objects-removed-from-set) | ✓ [1](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#streaming-live-monitoring) | ✓ | ✓ |
| [Objects modified in set](https://www.palantir.com/docs/foundry/automate/condition-objects/#objects-modified-in-set) | ✓ | – | – |
| [Run on all objects](https://www.palantir.com/docs/foundry/automate/condition-objects/#run-on-all-objects) | – | ✓ | ✓ |
| [Metric changed](https://www.palantir.com/docs/foundry/automate/condition-objects/#metric-changed-sunset) | – | ✓ | – |
| [Threshold crossed](https://www.palantir.com/docs/foundry/automate/condition-objects/#threshold-crossed) | – | ✓ | – |

**1** Only supported for batch pipelines. Streaming pipelines are not supported.

## [](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#live-monitoring)Live monitoring

Live monitoring runs evaluations within minutes of an object change appearing in the Ontology. [Ontology indexing](https://www.palantir.com/docs/foundry/object-indexing/overview/) must complete before Automate detects the change. Latency expectations differ by type of change: patches (user edits) are smaller and process faster, while base versions (backing dataset changes) are larger and take longer to process.

[Review the table above](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#evaluation-frequency-support) to understand the object set conditions that support live monitoring.

Automate live monitoring supports [funnel batch pipelines](https://www.palantir.com/docs/foundry/object-indexing/funnel-batch-pipelines/), and has partial support for [funnel streaming pipelines](https://www.palantir.com/docs/foundry/object-indexing/funnel-streaming-pipelines/). For example, stream-backed object types cannot be used for `Objects added to set` or `Objects removed from set` condition types.

**Requirements:**

*   Object type must use [Object Storage V2](https://www.palantir.com/docs/foundry/object-backend/overview/#object-databases).

After migrating an object type from Object Storage V1 to V2, re-save automations to enable live monitoring.

**Unsupported object set features:**

*   Relative time conditions
*   More than one object type
*   Joined object sets
*   Certain filter types like prefixes, terms, and phrases
*   Function-generated object sets
*   Interfaces

## [](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#scheduled-monitoring)Scheduled monitoring

Scheduled monitoring can result in high compute usage, especially for complex queries that run on a frequent schedule.

Scheduled monitoring evaluates the condition on a user-defined schedule. Conditions default to scheduled monitoring when live monitoring is unsupported. In the Automate UI, the scheduled monitoring label will explain which functionality is preventing live monitoring.

![Image 4: The Automate interface displaying the reason why a condition cannot support live monitoring.](https://www.palantir.com/docs/resources/foundry/automate/condition-evaluation-latency-scheduled-monitoring.png)

Most conditions that support live monitoring can switch to scheduled monitoring, either by choosing **Scheduled Monitoring** from the **Evaluation frequency** dropdown menu in the Automation interface or by adding a schedule. A schedule allows you to check an object set condition at a specific point in time or on a regular cadence.

![Image 5: The Evaluation frequency dropdown menu showing the different options.](https://www.palantir.com/docs/resources/foundry/automate/condition-evaluation-latency-toggle-automation-dependencies.png)

### [](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#example-use-case-digest-emails)Example use case: Digest emails

Send a weekly list of new `Support Ticket` objects created in the previous week, but only if tickets exist:

1.   Add a schedule for 8:00 AM Monday to an **Objects added** condition containing all `Support Ticket` objects.
2.   Add a notification effect to render the list.

![Image 6: A digest email example use case in Automate.](https://www.palantir.com/docs/resources/foundry/automate/condition-evaluation-latency-digest-email-example.png)

Review the [weekly report example use case](https://www.palantir.com/docs/foundry/automate/example-weekly-report/) for a detailed walkthrough of how to configure an automation that sends digest emails.

## [](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#automation-dependent)Automation-dependent

Automation-dependent monitoring evaluates the condition dependent on another automation triggering. You can optionally add a wait-time parameter.

Refer to the [evaluation frequency support table](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/#evaluation-frequency-support) to see which conditions support automation-dependent monitoring. Notably, **Run on all objects** supports automation-dependent monitoring even though it does not support live monitoring.

[Learn more about automation dependencies](https://www.palantir.com/docs/foundry/automate/automation-dependencies/).

[← PREVIOUS Execution settings](https://www.palantir.com/docs/foundry/automate/execution-settings/)

[NEXT Manual and automatic retries →](https://www.palantir.com/docs/foundry/automate/retries/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

