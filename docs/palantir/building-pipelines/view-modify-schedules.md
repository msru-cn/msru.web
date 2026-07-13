Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/#view-and-modify-schedules)View and modify schedules

## [](https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/#view-metrics)View metrics

To view metrics and run history of an existing schedule:

1.   Navigate to the dataset view, open the **Actions** menu, and select **Manage Schedules**.

2.   This will bring you to the Data Lineage graph for that dataset, with the schedule panel open on the right.

To view metrics and build history for a schedule, select the **Metrics** button. 

![Image 7: schedules-page-metrics](https://www.palantir.com/docs/resources/foundry/building-pipelines/schedules-page-metrics.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/#view-schedule-edit-history)View schedule edit history

A new version of a schedule is created whenever the schedule is edited. The schedule versions page allows you to:

*   See previous versions of the schedule.
*   Compare two schedule versions to see what has changed.

To view the previous versions of a schedule:

1.   Navigate to the schedule's metrics page.
2.   Select the versions tab: 

![Image 8: schedules-versions](https://www.palantir.com/docs/resources/foundry/building-pipelines/schedule-versions.png)

Only the versions up until the date displayed will be shown. If you need to see older versions, edit the date picker in the top right corner of the page.

## [](https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/#edit-a-schedule)Edit a schedule

To edit an existing schedule:

1.   Navigate to the dataset view, open the **Actions** menu, and select **Manage Schedules**.

2.   This will bring you to the Data Lineage graph for that dataset, with the schedule panel open on the right.

3.   To edit a schedule, click on the entry for that schedule. 

![Image 9: schedules-page-edit](https://www.palantir.com/docs/resources/foundry/building-pipelines/schedules-page-edit.png)

4.   To edit the schedule, select the edit button. [Learn how to edit a schedule using the schedule editor.](https://www.palantir.com/docs/foundry/building-pipelines/create-schedule/#define-the-schedule)

5.   When you have finished editing your schedule, click the **Save** button.

## [](https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/#pause-a-schedule)Pause a schedule

To pause a schedule:

1.   Navigate to the dataset in Data Lineage, and open the schedule sidebar, selecting the schedule from the sidebar.
2.   This will bring you to the schedules page for the dataset.
3.   To pause a schedule, select the pause icon in the top right. 

![Image 10: schedules-page-delete](https://www.palantir.com/docs/resources/foundry/building-pipelines/schedules-page-delete-pause-buttons.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/#resume-a-schedule)Resume a schedule

To resume a schedule:

1.   Navigate to the dataset in Data Lineage, and open the schedule sidebar, selecting the schedule from the sidebar.
2.   This will bring you to the schedules page for the dataset.
3.   To resume a schedule, select **Resume** in the top right. 

![Image 11: schedules-page-resume](https://www.palantir.com/docs/resources/foundry/building-pipelines/schedules-page-resume.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/#automatically-paused-schedules)Automatically paused schedules

Foundry automatically pauses schedules that fail all jobs consecutively and over multiple times. Once the schedule is run successfully, the schedule will automatically unpause and the failure counter will be reset. If your schedule was paused and you would like to resume it, follow these steps:

1.   Navigate to the schedule by clicking the link in the email sent to you.
2.   Debug the schedule. Refer to the [troubleshooting guide](https://www.palantir.com/docs/foundry/optimizing-pipelines/troubleshoot-schedules/) for reference.
3.   Run the schedule after the fix is applied. After a job initiated by the schedule is completed successfully, the schedule will be automatically unpaused.

If you have a specific schedule that you want to exempt from being paused, contact your Palantir representative and provide the schedule RID.

## [](https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/#delete-a-schedule)Delete a schedule

To delete a schedule:

1.   Navigate to the schedule in Data Lineage, and choose the **Edit** button on the schedule.
2.   To delete a schedule, select the trash icon in the top right. 

![Image 12: schedules-page-delete](https://www.palantir.com/docs/resources/foundry/building-pipelines/schedules-page-delete-pause-buttons.png)

[← PREVIOUS Create a schedule](https://www.palantir.com/docs/foundry/building-pipelines/create-schedule/)

[NEXT Find and manage schedules →](https://www.palantir.com/docs/foundry/building-pipelines/find-manage-schedules/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

