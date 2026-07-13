Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/monitoring/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/monitoring/#action-monitoring)Action monitoring

Actions in Foundry can be monitored to track performance and reliability. This page explains the available monitoring capabilities for actions.

## [](https://www.palantir.com/docs/foundry/action-types/monitoring/#available-monitoring-rules)Available monitoring rules

Action monitoring in Foundry supports two key rule types:

1.   **Action duration p95:** Alerts when the 95th percentile execution time exceeds thresholds.
2.   **Number of action failures in window:** Alerts when failure count exceeds thresholds within a timeframe.

For detailed configuration options and parameters, review our [monitoring rules reference documentation.](https://www.palantir.com/docs/foundry/monitoring-views/rules-reference/#action-rules).

## [](https://www.palantir.com/docs/foundry/action-types/monitoring/#set-up-action-monitoring)Set up action monitoring

To set up monitoring for your actions, follow the standard process for creating monitoring views and rules:

1.   Create a monitoring view as described in the [monitoring views overview documentation](https://www.palantir.com/docs/foundry/monitoring-views/overview/#create-a-new-monitoring-view).
2.   Add a monitoring rule for an action or action type as described in the section on [adding a monitoring rule](https://www.palantir.com/docs/foundry/monitoring-views/overview/#add-a-monitoring-rule).
3.   Configure appropriate thresholds and severity levels.
4.   Set up alert notifications following the [alert subscription guide](https://www.palantir.com/docs/foundry/monitoring-views/overview/#subscribe-to-alerts).

![Image 3: Example monitoring alert setup.](https://www.palantir.com/docs/resources/foundry/action-types/monitoring-alerts.png)

### [](https://www.palantir.com/docs/foundry/action-types/monitoring/#dynamic-scopes)Dynamic scopes

Action monitors support **Workflow Lineage**, **Workshop**, and **OSDK application** as dynamic scopes. When you select one of these scopes, the monitor automatically tracks all actions the scoped resource uses and adjusts as actions are added or removed without further intervention.

![Image 4: Select scope dialog showing dynamic scope options for action type monitors, including Workshop module, Workflow Lineage, and Developer Console application.](https://www.palantir.com/docs/resources/foundry/action-types/app-as-dynamic-scope-monitoring.png)

## [](https://www.palantir.com/docs/foundry/action-types/monitoring/#related-documentation)Related documentation

*   [Monitoring rules reference](https://www.palantir.com/docs/foundry/monitoring-views/rules-reference/#action-rules)
*   [Monitoring views overview](https://www.palantir.com/docs/foundry/monitoring-views/overview/)

[← PREVIOUS Permissions](https://www.palantir.com/docs/foundry/action-types/permissions/)

[NEXT Undo or revert Actions →](https://www.palantir.com/docs/foundry/action-types/action-reverts/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

