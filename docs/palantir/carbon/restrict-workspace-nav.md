Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/carbon/restrict-workspace-nav/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/carbon/restrict-workspace-nav/#restrict-navigation-out-of-a-workspace)Restrict navigation out of a workspace

In some cases, you may want to ensure that operational users will only interact with Carbon to curate their experience and restrict access to other Foundry applications or functionality.

There are two levels at which navigation out of Carbon can be restricted: workspace and module.

## [](https://www.palantir.com/docs/foundry/carbon/restrict-workspace-nav/#disable-navigation-at-the-workspace-level)Disable navigation at the workspace level

Switch to the **General** configuration tab (highlighted in red in the image below) and locate the **Navigation out of Carbon** section.

![Image 9: Locate section](https://www.palantir.com/docs/resources/foundry/carbon/restrict-workspace-general-tab.png?width=300)
The default setting is **Enabled**; you can restrict navigation from Carbon interface elements by changing the setting to **Disabled**. The effects of disabling navigation in this way are as follows:

*   External Foundry links will be hidden in the navigation menu. 
    *   The configuration of existing links will be retained in the workspace's configuration, but these links will not be active. This allows you to restore link functionality if toggling **Navigation out of Carbon** back to the **Enabled** state.

*   The configuration editor will render the **External links** section as inactive (grayed out) along with a message to notify you that the settings are superseded by the disabling of navigation out of Carbon.

![Image 10: Settings in editor blocked](https://www.palantir.com/docs/resources/foundry/carbon/restrict-workspace-blocked-settings.png?width=300)
*   Navigation from the elements on the right side of the menu bar will be restricted. 
    *   The **Help and support** dropdown will be hidden entirely.
    *   The **Notifications** dropdown will show all notifications. However, links will only be clickable if the links keep the user inside Carbon. For example, a notification about a dataset being shared with the user will show up but will not be actionable. A notification about a Workshop module being shared with the user will be actionable since clicking the link will open that module inside of Carbon.

![Image 11: Settings in editor blocked](https://www.palantir.com/docs/resources/foundry/carbon/restrict-workspace-notifications.png?width=300)
*   The **User** dropdown will still allow the user to log out and show the username, but users will not be able to click through to the Account page (which is outside of Carbon workspaces).

![Image 12: Settings in editor blocked](https://www.palantir.com/docs/resources/foundry/carbon/restrict-workspace-user-profile.png?width=300)

It might still be possible for users to leave a Carbon workspace via links inside of modules. While most of such links leading to applications should already be covered by the navigation framework and open a new tab in Carbon, it is still possible for actions leading to applications outside of Carbon (like Dataset Preview, Data Lineage, Contour, and so on) to be present in some cases. Use [Control Panel](https://www.palantir.com/docs/foundry/administration/configure-workspaces/) settings to restrict access for your users to spaces other than Carbon and to rely on modules to honor such restrictions. Learn more about module-level restrictions below.

## [](https://www.palantir.com/docs/foundry/carbon/restrict-workspace-nav/#disable-navigation-at-the-module-level)Disable navigation at the module level

Carbon links that point to modules (using Carbon's [navigation framework](https://www.palantir.com/docs/foundry/carbon/restrict-workspace-nav/modules-navigation.md)) will keep the operational user inside the workspace; these links will remain active when navigation out of Carbon workspaces is disabled.

Some navigation actions available across modules may lead the user to applications outside of Carbon workspaces. These include actions to open a backing dataset for an object type, to explore the data lineage of an object type, or to start a new analysis (in Contour, Quiver, or Code Workbooks) on top of an object type. It is _not_ possible to disable these actions on a level of a particular Carbon workspace. Instead, use the **Application access** page in [Control Panel](https://www.palantir.com/docs/foundry/administration/configure-workspaces/) to configure these settings for operational user groups.

For example, to disable the action to explore the data lineage of an object type, remove access to the **Data integration** application group. Then, choose to disable all access, or only make the applications available to select users or groups.

![Image 13: Disable Data integration application group.](https://www.palantir.com/docs/resources/foundry/carbon/restrict-workspace-disable-data-integration.png)

To disable an action to start a new analysis on top of an object type in either Contour, Quiver, or Code Workbook, toggle on the **Manage multiple application** option at the top of the page.

![Image 14: Disable multiple analysis applications with the toggle.](https://www.palantir.com/docs/resources/foundry/carbon/restrict-workspace-multiple-toggle.png)

Then, select the applications you wish to disable, and choose the **Manage application** option in the top right corner to manage access.

![Image 15: Choose multiple applications from the list.](https://www.palantir.com/docs/resources/foundry/carbon/restrict-workspace-manage-multiple.png)

Select **Save** to apply your changes.

![Image 16: Review the access choices, then select Save.](https://www.palantir.com/docs/resources/foundry/carbon/restrict-workspace-manage-multiple-save.png)

[← PREVIOUS Configure navigation between workspaces](https://www.palantir.com/docs/foundry/carbon/workspaces-navigation/)

[NEXT Modules / Overview →](https://www.palantir.com/docs/foundry/carbon/modules-overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

