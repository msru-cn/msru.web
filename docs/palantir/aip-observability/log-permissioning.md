Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/

Markdown Content:
## Log permissions

## Required roles

The following table lists the required roles for various operations in AIP observability.

| Capability | Required role |
| --- | --- |
| View [metrics](https://www.palantir.com/docs/foundry/aip-observability/metrics/) | `View` permission on the resource¹ |
| View [run history](https://www.palantir.com/docs/foundry/aip-observability/run-history/) | `Edit` permission on the resource¹ |
| View [trace](https://www.palantir.com/docs/foundry/aip-observability/trace-view/) and [service logs](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/)² | `Edit` permission on the resource¹ + Log access enabled³ + Access to all markings |
| [Search logs](https://www.palantir.com/docs/foundry/aip-observability/log-search/)² | `Edit` permission on the resource¹ + Log access enabled³ + Access to all markings |
| [Configure log access](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows) | `Information security officer` or `Enrollment administrator` role |
| [Delete logs](https://www.palantir.com/docs/foundry/administration/configure-logging/#delete-log-history) | `Information security officer` or `Enrollment administrator` role |

¹A Foundry operation backs each capability: `foundry-telemetry-service:read-metrics` (granted by the `Viewer` role) for metrics, and `foundry-telemetry-service:view-execution-history` (granted by the `Editor` role) for run history and logs. You can grant these operations through a different role using [custom roles](https://www.palantir.com/docs/foundry/platform-security-management/manage-roles/).

²Users always have access to logs for their own executions from the past 24 hours with just the `foundry-telemetry-service:view-execution-history` operation, independent of log access settings. This exception does not apply on [CBAC stacks](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/), where log access must be enabled to see logs for one's own executions.

³Log access enablement: An administrator must enable log access either on the source executor resource directly (as a resource override) or on the source executor's project (and attributed project if the resource has been moved). See [log access requirements](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/#log-access-requirements) below for full details, and [Configure logging](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows) for how to enable it.

## Log access requirements

To view the run history for a resource, you must have **edit** permission on the resource.

To view the trace and service logs for an execution you did not invoke, you must satisfy all three requirements below. The **log access overview** dialog, described in [Review log access requirements](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/#review-log-access-requirements) below, shows each requirement and whether you currently meet it.

*   **Role:** You must have **Edit** permission on the source executor. The source executor is the first executable resource in the call chain and can be a function, action, automation, AIP logic, AIP agent, or model live deployment.
*   **Log access policy:** Log access must be enabled for the source executor, either on its **project** (and its **attributed project** — the project the resource first emitted telemetry under — if the resource has been moved) or through a **resource-level override**. An `Information security officer` or `Enrollment administrator` enables this. See [Configure logging](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows) for how to enable log access.
*   **Markings:** You must hold every marking applied to the logs. See [Markings on log content](https://www.palantir.com/docs/foundry/aip-observability/log-permissioning/#markings-on-log-content) below.

Actions are a special case. An action managed by [legacy Ontology permissions](https://www.palantir.com/docs/foundry/object-permissioning/ontology-permissions-legacy/) cannot yet be managed at the project level, so enabling log access for it requires a **resource-level override** rather than the project setting, until the action is [migrated to project-based permissions](https://www.palantir.com/docs/foundry/ontology-manager/migrate-to-project-based-permissions/). See [Configure logging](https://www.palantir.com/docs/foundry/administration/configure-logging/#configure-resource-overrides-for-legacy-ontology-permissions) for details.

## Source executor log access status

The **Run history** and **Log search** panels in Workflow Lineage display a status tag for the source executor's log access. The tag reflects your current level of access:

*   **Full log access:** Log access is enabled on the project or through a resource-level override, and you hold the required markings. Logs are visible for all executions originating from the resource.
*   **User ID secured log access:** Based on your role, you have access to logs from your own executions in the past 24 hours. This applies even when log access is not otherwise enabled (except on CBAC stacks).
*   **No log access:** Log access is not enabled and you have no other path to the logs.

When log access is enabled for the project and marking permissions are satisfied, **Source executor log access** will show as enabled. Logs will be visible for all executions originating from the enabled project.

![Image 1: Source executor log access status tag showing full log access enabled on the project.](https://www.palantir.com/docs/resources/foundry/aip-observability/log-access-status-tag-source-executor.png)

Otherwise, only your own executions from the past 24 hours show logs (except on [CBAC stacks](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/)).

![Image 2: Source executor log access status tag showing user ID secured access for the past 24 hours.](https://www.palantir.com/docs/resources/foundry/aip-observability/log-access-status-tag-user24.png)

## Open the log access overview

To check what you need to read logs, open the **Log access overview** dialog from either of these places:

*   From the Workflow Lineage graph, select the resource's node and choose **View log access**.
*   From the **Run history** or **Log search** panel, select **View log access** in the top right.

![Image 3: Workflow Lineage graph node menu showing the View log access option.](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-node-view-log-access.png)

Viewing the overview requires at least the `Viewer` role on both the resource and its project.

If you have the `Information security officer` or `Enrollment administrator` role and can manage log access for the resource, the **Run history** and **Log search** panels show **Edit permissions** in place of **View log access**. That menu adds **Configure log access** and **Delete log history**, both covered in [Configure logging](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows).

![Image 4: Workflow Lineage showing the Edit permissions control in the Run history panel.](https://www.palantir.com/docs/resources/foundry/aip-observability/workflow-lineage-run-history-edit-permissions.png)

## Review log access requirements

The **Log access overview** dialog lists the three requirements a viewer must satisfy to see logs.

*   **Role:** Shows your current role on the resource. If your role does not grant log access, the dialog suggests the least-privileged role that grants log access.
*   **Log access policy:** Shows whether log access is enabled on the project containing this resource (and attributed project if the resource has been moved), enabled via a resource-level override, or not enabled. If you have the `Information security officer` or `Enrollment administrator` role, you can select **Edit** to configure the policy (see [Configure logging](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows)).
*   **Log access markings:** Shows the markings applied to the logs and, if you are missing any, how many.

![Image 5: Log access overview dialog showing the role, log access policy, and markings requirements.](https://www.palantir.com/docs/resources/foundry/aip-observability/log-access-overview-requirements.png)

## Markings on log content

The markings that protect log content are configured explicitly by an administrator when log access is enabled. These are the only markings enforced when a user attempts to view logs.

Markings are not derived from the source executor's resource, its inputs, or any data the execution accessed. Administrators are responsible for selecting markings that reflect the maximum sensitivity of any data the workflow may touch, as the platform cannot determine the full set of data sources a workflow may reach in advance. Logs enabled without markings are visible to every user who satisfies the role and log access requirements described above.

## Related documentation

*   [Configure logging](https://www.palantir.com/docs/foundry/administration/configure-logging/#in-platform-log-access-for-ontology-and-aip-workflows): Enable and manage in-platform log access
*   [Execution history](https://www.palantir.com/docs/foundry/aip-observability/run-history/): View available executions
*   [Service logs](https://www.palantir.com/docs/foundry/aip-observability/service-logs-and-debugging/): Access logs once permissions are configured
*   [Log search](https://www.palantir.com/docs/foundry/aip-observability/log-search/): Search across logs from all executions for a source executor
*   [AIP security and privacy](https://www.palantir.com/docs/foundry/aip/aip-security/): Learn about the AIP security model
