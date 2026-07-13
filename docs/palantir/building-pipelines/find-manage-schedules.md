Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/find-manage-schedules/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/find-manage-schedules/#find-and-manage-schedules)Find and manage schedules

[Schedules](https://www.palantir.com/docs/foundry/data-integration/schedules/) can be searched for and managed using the **Build Schedules** application, allowing you to apply criteria and filters to your searches. For example, you can search for paused schedules by a given user or schedules scoped to a certain Project, filtered by name and sorted by latest run.

To access the Build Schedules application, look for **Build schedules** in the Foundry navigation sidebar to the left of your browser.

![Image 3: Build Schedules app in Foundry sidebar](https://www.palantir.com/docs/resources/foundry/building-pipelines/build-schedules-foundry-sidebar.png?width=300)
From the Build Schedules landing page, you will first see the schedules you created. Search parameters are stored in the page link, allowing you to bookmark a page or send the link to other users.

## [](https://www.palantir.com/docs/foundry/building-pipelines/find-manage-schedules/#adding-search-criteria)Adding search criteria

![Image 4: Add more schedules to view](https://www.palantir.com/docs/resources/foundry/building-pipelines/add-more-schedules.png)

To find other schedules, select **Add more schedules to view**. Schedules will be found if they match any search criteria. The available search criteria are:

*   **Files:** Find schedules by the datasets or other files in Foundry that they build. If no branch is specified, the default branch will be used.
*   **User:** Find schedules last updated by the user(s) selected.
*   **Projects:** Find schedules scoped to a given Project. User-scoped schedules are currently not supported for this parameter.

## [](https://www.palantir.com/docs/foundry/building-pipelines/find-manage-schedules/#further-filtering-and-options)Further filtering and options

The list of schedules can be further refined by schedule name (if one is present on the schedule) and pause status. It can also be sorted by name, creation date, last run date, or last update date of the schedule.

## [](https://www.palantir.com/docs/foundry/building-pipelines/find-manage-schedules/#schedule-information)Schedule information

For each schedule, the configuration of the schedule is shown as well as details on recent runs. The following details are shown over the 10 most recent runs (or fewer if the schedule has run fewer than 10 times):

*   **Total compute:** Total CPU time for the recent runs of the schedule.
*   **Median duration:** The median build duration over the recent runs of the schedule where the build succeeded.
*   **Mean frequency:** How often the schedule has recently run, on average.

The colored dots represent the recent runs of the schedule, with the most recent on the right. Hover over them to see more details or, for schedules that ran a build, click them to view the build report for that build.

## [](https://www.palantir.com/docs/foundry/building-pipelines/find-manage-schedules/#schedule-actions)Schedule actions

Actions on found schedules can be performed individually or in bulk. The menu on each schedule card contains links to edit the schedule in [Data Lineage](https://www.palantir.com/docs/foundry/data-lineage/overview/) and a link to the **Metrics and History** page, where you can view more details on the schedule’s performance and history and set up health checks. There are also controls to toggle pause, run, or delete the schedule.

It is also possible to pause, enable, or delete schedules in bulk:

1.   Choose **Select schedules…** in the header.
2.   Select the schedules on which you want to perform the action.
3.   Select an action from the header.

[← PREVIOUS View and modify schedules](https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/)

[NEXT Common scheduling configurations →](https://www.palantir.com/docs/foundry/building-pipelines/common-schedules/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

