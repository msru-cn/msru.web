Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/automate/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/automate/#automate)Automate

Automate is a fully backwards-compatible product that replaces [Object Monitoring](https://www.palantir.com/docs/foundry/object-monitors/overview/) as the single entry point for all business automation in the platform.

**Automate** is an application for business automation. With Automate, you can define conditions that are checked continuously or on a schedule, along with effects that execute automatically when the specified conditions are met.

Conditions can be _time-based conditions_ ("trigger every Monday at 9 AM"), _object data conditions_ built on top of the Foundry Ontology ("trigger when a new `Alert` object with priority `high` is added"), or a combination of time-based and object data conditions.

**Available effects:**

*   Submit [Foundry actions](https://www.palantir.com/docs/foundry/action-types/overview/)
*   Trigger [AIP Logic functions](https://www.palantir.com/docs/foundry/logic/overview/)
*   Execute [Foundry functions](https://www.palantir.com/docs/foundry/functions/overview/)
*   Send platform and email notifications with attachments

## [](https://www.palantir.com/docs/foundry/automate/#use-cases)Use cases

Automate can be used for a variety of different automation workflows, including:

*   [**Scheduled report sending and digests:**](https://www.palantir.com/docs/foundry/automate/example-weekly-report/) Specify a time and send out weekly reports to a predefined list of recipients. PDFs generated from [Notepad](https://www.palantir.com/docs/foundry/notepad/overview/) or [Notepad templates](https://www.palantir.com/docs/foundry/notepad/templates-overview/) can be attached to emails automatically.
*   **Data alerting:** Define and watch object sets and alert users when specific data conditions are met; for example, when the total count of open issue objects crosses a threshold.
*   **Workflow automation:** Automate can be used to automatically perform Actions on object data meeting specified criteria. Some tasks that can be automated include: 
    *   Checking for data anomalies and automatically passing those objects into an Action with logic to remediate the issue.
    *   Watching for suggestions or potential Actions and automatically applying them when preconfigured event and time conditions are met. Such Actions could include making an API call to an external system via Webhooks to apply a change directly in the external system.

*   **Watched searches:** Configure automations to notify when saved object explorations have new results or when an aggregate criterion is met across all results from a search; for example, the maximum temperature across all sensor objects crosses a threshold.

## [](https://www.palantir.com/docs/foundry/automate/#access-automate)Access Automate

To access Automate, select the Automate application icon in your Foundry navigation sidebar. Follow the steps in our documentation on [getting started with Automate](https://www.palantir.com/docs/foundry/automate/getting-started/) to begin.

Automate is designed for business automation. If you are looking for health monitoring for data connections and pipeline builds, see the [Health checks](https://www.palantir.com/docs/foundry/health-checks/overview/) documentation.

[← PREVIOUS Application building / Pilot / Troubleshooting](https://www.palantir.com/docs/foundry/pilot/troubleshooting/)

[NEXT Getting started →](https://www.palantir.com/docs/foundry/automate/getting-started/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

