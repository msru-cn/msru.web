Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-integration/schedules/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-integration/schedules/#schedules)Schedules

**Schedules** are used to run [builds](https://www.palantir.com/docs/foundry/data-integration/builds/) on a recurring basis to keep data flowing through Foundry consistently. In a schedule, the **trigger** defines the condition that must be satisfied for the associated build to be run.

When a trigger is satisfied and a build is performed, we say that the schedule is **run**. If a schedule is triggered while the previous run is still in action, then it will remain triggered and run only after the previous schedule is finished.

The run history provides a record of when a schedule was run and information about the task that was performed on each run. A schedule run can be one of a few types:

*   **Succeeded**. The run successfully initiated a build. Note that a successful run only indicates that the build was successfully started. The build itself may still be running, or may have failed.
*   **Ignored**. The run was attempted, but a build was not created. An ignored run likely indicates that everything is up-to-date and there was no work to do. See [staleness](https://www.palantir.com/docs/foundry/data-integration/builds/#staleness) for more details.
*   **Failed**. The schedule failed to run.

To learn more about schedules, refer to the following resources:

*   Learn to [create a schedule](https://www.palantir.com/docs/foundry/building-pipelines/create-schedule/).
*   Learn about [scheduling best practices](https://www.palantir.com/docs/foundry/building-pipelines/scheduling-best-practices/).
*   Explore the [available trigger types](https://www.palantir.com/docs/foundry/building-pipelines/triggers-reference/).

### [](https://www.palantir.com/docs/foundry/data-integration/schedules/#find-and-manage-schedules)Find and manage schedules

Schedules can be edited, managed, and updated in the schedule sidebar of the [Data lineage](https://www.palantir.com/docs/foundry/data-lineage/manage-schedules/) application. Workflows around finding schedules can be conducted in the **Build schedules** application available from your Apps sidebar. Queries that you can run include but are not limited to the following:

*   “Find paused schedules by a given user”
*   “Find schedules scoped to a certain project, filter by name, and sort by latest run”
*   “Find schedules with 'TESTING_PROJECT_1' in their name”
*   “Find paused schedules"

You can use the following search criteria:

*   **Files:** Find schedules by the datasets or other assets in Foundry that they build. If no branch is specified, the default branch will be used.
*   **User:** Find schedules last updated by the user(s) selected.
*   **Projects:** Find project-scoped schedules scoped to a specific project. User-scoped schedules are currently not supported in this parameter.

When arriving at the page you will initially see your own schedules. You can then filter schedules by name, pause or sort them. Search parameters are stored in the page link, allowing you to bookmark a page or share the link with other users.

The list of schedules can be further refined by **Schedule name** (if one is present on the schedule) and **Pause status**. It can also be sorted by **Name**, **Creation date**, **Last run date**, or **Last update date** of the schedule.

### [](https://www.palantir.com/docs/foundry/data-integration/schedules/#pause-a-schedule)Pause a schedule

A schedule can be [paused](https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/#pause-a-schedule) to temporarily prevent it from running.

When a schedule is paused, its trigger state is reset and all observed events are forgotten. While a schedule is paused, it cannot be triggered and will ignore all observed events.

A paused schedule can be [resumed](https://www.palantir.com/docs/foundry/building-pipelines/view-modify-schedules/#resume-a-schedule) to allow it to begin running again.

### [](https://www.palantir.com/docs/foundry/data-integration/schedules/#project-scope)Project scope

The datasets a schedule has permission to build is determined by whether a schedule is saved using the user's permissions to datasets or whether it is saved using the set of Projects containing the datasets being built. The former (user mode) is prone to unexpected changes if the permissions of the user change, since the schedule runs as if the user were running the build. The latter (Project-scoped mode) is more consistent, since the schedule is run independently of the user's permissions and only changes if the set of Projects the schedule is scoped to changes.

[← PREVIOUS Builds](https://www.palantir.com/docs/foundry/data-integration/builds/)

[NEXT Health checks →](https://www.palantir.com/docs/foundry/data-integration/health-checks/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored. Further information is available in our [Cookie Policy](https://www.palantir.com/cookie-statement/)

Accept Cookies Reject All

Do Not Sell or Share My Personal Information

![Image 1: Palantir Logo](https://cdn.cookielaw.org/logos/356f77a2-eb53-4146-ba66-df614f266841/018ec371-84cc-7226-bc6b-40b41ec0280c/1204dd5e-843b-4e03-8e5d-3eaeae33575c/Palantir_Logo_300dpi.png)

## Do Not Sell or Share My Personal Data

Opt-Out Request Honored

## Do Not Sell or Share My Personal Data

*   ### Your Privacy 
*   ### Strictly Necessary Cookies 
*   ### Targeting Cookies 

#### Your Privacy

When you visit our website, we store cookies on your browser to collect information. The information collected might relate to you, your preferences or your device, and is mostly used to make the site work as you expect it to and to provide a more personalized web experience. However, you can choose not to allow certain types of cookies, which may impact your experience of the site and the services we are able to offer. Click on the different category headings to find out more and change our default settings according to your preference. You cannot opt-out of our First Party Strictly Necessary Cookies as they are deployed in order to ensure the proper functioning of our website (such as prompting the cookie banner and remembering your settings, to log into your account, to redirect you when you log out, etc.). For more information about the First and Third Party Cookies used please follow this link. 

[More information](https://www.palantir.com/cookie-statement/)

#### Strictly Necessary Cookies

Always Active

These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.

Cookies Details

#### Targeting Cookies

- [x] Targeting Cookies 

Under US privacy laws, you have the right to opt-out of the sale or sharing of your personal information to third parties. These cookies collect information for analytics and to personalize your experience with targeted ads. You may exercise your right to opt out of the sale or sharing of personal information by using this toggle switch. If you opt out we will not be able to offer you personalized ads and will not hand over your personal information to any third parties. Additionally, you may contact our legal department for further clarification about your rights as a California consumer by using this Exercise My Rights link.If you have enabled privacy controls on your browser (such as a plugin), we have to take that as a valid request to opt-out. Therefore we would not be able to track your activity through the web. This may affect our ability to personalize ads according to your preferences.

*   ##### Performance Cookies

- [x] Switch Label label  
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.

*   ##### Targeting Cookies

- [x] Switch Label label  
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.

Cookies Details

### Cookie List

Consent Leg.Interest

- [x] checkbox label label

- [x] checkbox label label

- [x] checkbox label label

Clear
*   - [x] checkbox label label 

Apply Cancel

Confirm My Choices

Reject All Allow All

