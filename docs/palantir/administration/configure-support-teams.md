Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-support-teams/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-support-teams/#configure-support-teams)Configure support teams

Support teams enable administrators to define groups that provide support in Foundry Issues. When a **support team** group is assigned to an issue, [status automation](https://www.palantir.com/docs/foundry/administration/configure-support-teams/#status-automation) can be enabled in Control Panel. See below for how to enable [status automation](https://www.palantir.com/docs/foundry/administration/configure-support-teams/#status-automation) for a support team.

To register a group as a support team, open Control Panel and navigate to **Enrollment settings > Support > Support teams** and select **Add**.

## [](https://www.palantir.com/docs/foundry/administration/configure-support-teams/#status-automation)Status automation

Enabling status automation for a support team will apply the following rules to issues assigned to them and automatically set the resulting status. Select **Actions > Edit** in the list of support teams in Control Panel to enable or disable status automation per team.

*   _If_ the reporter comments on the issue, _then_ set the issue status to `Waiting on support`
*   _If_ the status is `Waiting on reporter` and issue has not been updated for over 5 days, _then_ set the issue status to `Pending closure`
*   _If_ the status is `Pending closure` and issue has not been updated for over 5 days, _then_ set the issue status to `Closed`

[← PREVIOUS Configure support types](https://www.palantir.com/docs/foundry/administration/configure-support-types/)

[NEXT Organization settings / Embed resources externally →](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

