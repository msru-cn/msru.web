Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/automate/retries/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/automate/retries/#manual-and-automatic-retries)Manual and automatic retries

Automations can sometimes fail to execute. When this occurs, Automate will display an [error](https://www.palantir.com/docs/foundry/automate/errors/) as shown in the screenshot below.

![Image 11: An example effect failed error in Automate.](https://www.palantir.com/docs/resources/foundry/automate/failed-events.png)

Errors can be transient (temporary) or due to an invalid configuration. Automate's retry functionality provides resilience for both of these error types.

## [](https://www.palantir.com/docs/foundry/automate/retries/#configure-per-effect-automatic-retries)Configure per-effect automatic retries

Automations can fail for reasons that are transient. These failures can be manually retried, but you can also configure automatic retries for individual effect executions that are prone to transient errors.

Examples of transient errors include:

*   Rate limit errors from AIP models
*   External service errors when using webhooks

The retry configuration can be modified on the specific effect, as shown below.

![Image 12: The effect retry configuration.](https://www.palantir.com/docs/resources/foundry/automate/effect-retry-config.png)

Note that effect retries can currently only be configured on the following:

*   Action effects
*   Logic effects

## [](https://www.palantir.com/docs/foundry/automate/retries/#manually-retry-failures)Manually retry failures

Automate errors can occur when effects are not configured correctly. For example, when an action is misconfigured such that there are [action effect errors](https://www.palantir.com/docs/foundry/automate/errors/#action-effect-errors), automations using this action can fail. In order to remediate this, you can update the action configuration and rerun failed automations manually to ensure these events are correct.

These failures can be manually retried by selecting **Retry failed events**. This enables you to choose the specific events to retry, as shown below.

![Image 13: select failed events](https://www.palantir.com/docs/resources/foundry/automate/select-failed-events.png)

After choosing the events to retry, you can select the specific effects to retry. Note that these effects will be retried on the latest configuration. If there is only one effect available to retry, that effect will be automatically selected.

![Image 14: select effects prompt](https://www.palantir.com/docs/resources/foundry/automate/selected-effects.png)

After selecting **Retry events**, a retry job will be scheduled and will appear in the **Event log** as shown below. More details about the scheduled retry job can be viewed on the manual execution page.

![Image 15: retry-job](https://www.palantir.com/docs/resources/foundry/automate/retry-job.png)

### [](https://www.palantir.com/docs/foundry/automate/retries/#manual-execution-failures)Manual execution failures

You can also retry [manual executions](https://www.palantir.com/docs/foundry/automate/manual-execution/) which have failed effects. In order to retry failed batches, open up the sidebar for a manual execution run.

![Image 16: manual execution failures](https://www.palantir.com/docs/resources/foundry/automate/manual-exec-failures.png)

Selecting **Retry failed batches** will allow you to configure how you want the retried job to run, such as the batch size.

![Image 17: manual execution dialog](https://www.palantir.com/docs/resources/foundry/automate/manual-execution-retry-dialog.png)

Selecting **Retry** will immediately schedule a re-run of the failed effects.

![Image 18: rerunning job](https://www.palantir.com/docs/resources/foundry/automate/rerunning-failed-batch-job.png)

## [](https://www.palantir.com/docs/foundry/automate/retries/#event-retries)Event retries

Action, logic, and function effects support immediate, short-term retries for individual effect executions within a trigger event to overcome ephemeral errors such as rate limits. However, some errors such as service degradation and outages are more persistent and would need a more long-term retry strategy.

With event retries, users can configure retry strategies for entire trigger events, which will cause failed effect executions on individual objects to be attempted a specified time later, up to a certain number of times.

### [](https://www.palantir.com/docs/foundry/automate/retries/#configuration)Configuration

Two parameters can be configured:

*   **Retry interval:** The time interval between retries. This must be less than 24 hours.
*   **Number of retries:** The maximum number of times an event will be retried. Note that this does not include the initial attempt, and this must be between 1 and 5.

![Image 19: Example configuration of event retries.](https://www.palantir.com/docs/resources/foundry/automate/event-retries-configuration.png)

### [](https://www.palantir.com/docs/foundry/automate/retries/#retry-mechanism)Retry mechanism

If an event retry strategy has been configured, then for each effect, on each object, if the execution failed with a retryable error, the object on that effect will be considered eligible in the next retry.

Retryable errors include:

*   Rate limits
*   Service outages
*   Ephemeral errors such as `Actions:ObjectVersionChanged`

Note that no retry is scheduled if there are no retryable errors on any object or effect, or the maximum number of retries has been reached.

Fallback effects are not eligible for retries, and will only execute if an object failed non-retryably, or the maximum number of retries has been reached.

### [](https://www.palantir.com/docs/foundry/automate/retries/#example)Example

Event retries will appear as entirely new events in the event history page, with links to navigate between them.

![Image 20: Example of event retries.](https://www.palantir.com/docs/resources/foundry/automate/example-event-retries.png)

[← PREVIOUS Evaluation frequency](https://www.palantir.com/docs/foundry/automate/evaluation-frequency/)

[NEXT Muting, pausing, and expiration →](https://www.palantir.com/docs/foundry/automate/muting-pausing-expiration/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

