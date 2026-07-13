Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/carbon/getting-started/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/carbon/getting-started/#getting-started)Getting started

Carbon Permissions

To configure a Carbon Workspace, a Foundry developer will need the [correct permissions](https://www.palantir.com/docs/foundry/carbon/permissions-configure/#configure-workspace-editor-permissions).

This guide demonstrates the creation of a simple Carbon workspace using resources from the **Foundry Training and Resources** Project, which is included as part of the Foundry platform. The end result is an aviation workspace designed for an airline analyst to review alerts related to the performance of particular flight routes. This workspace includes quick links to relevant applications and data, along with access to the analyst's favorite individual objects.

![Image 7: Example Aviation Workspace](https://www.palantir.com/docs/resources/foundry/carbon/getting-started-end-state.png)

The example Aviation Workspace represents a bare minimum of Carbon configuration and is intended for use as a simple reference. The remainder of the Carbon documentation contains complete descriptions of available configuration options.

## [](https://www.palantir.com/docs/foundry/carbon/getting-started/#create-a-new-workspace)Create a new workspace

To configure a new Carbon workspace, first open **Carbon workspaces** from the Application Portal. Then, follow the instructions to [create a new Carbon workspace](https://www.palantir.com/docs/foundry/carbon/workspaces-create/).

![Image 8: Open Carbon from the Application Portal.](https://www.palantir.com/docs/resources/foundry/carbon/application-portal-carbon.png)

## [](https://www.palantir.com/docs/foundry/carbon/getting-started/#edit-mode-orientation)Edit Mode Orientation

Each Carbon workspace has a set of four configuration tabs in the right sidebar:

1.   **[General](https://www.palantir.com/docs/foundry/carbon/configuration-general/):** Control the metadata and global configurations for the workspace.
2.   **[Home](https://www.palantir.com/docs/foundry/carbon/configuration-home/):** Manage the content of the landing page, including the logo, search, and column contents, or replace the home page with a custom resource.
3.   **[Menu](https://www.palantir.com/docs/foundry/carbon/configuration-menu-bar/):** Choose the resources and links to populate the menu bar at the top of the Workspace.
4.   **[Access](https://www.palantir.com/docs/foundry/carbon/configuration-access/):** Determine the workspace visibility from the launcher, the location where the workspace is stored, and default workspaces for user groups.

To begin, add a **Name** and **Description** in the `General` tab.

![Image 9: Starting state of workspace creation](https://www.palantir.com/docs/resources/foundry/carbon/getting-started-zero-state.png)

## [](https://www.palantir.com/docs/foundry/carbon/getting-started/#update-the-home-page)Update the home page

The default home page presents a three-column layout, where each column is populated with one or more blocks of [featured items](https://www.palantir.com/docs/foundry/carbon/configuration-home/#featured-items). Above the columns are an optional logo and the Object Explorer search bar.

Before turning to the contents of the columns, let's restrict the object types that are searched from the search bar. If there are [object type groups](https://www.palantir.com/docs/foundry/object-explorer/configure/#customizable-object-type-groupings-on-home-page) configured, choose from these in the **Groups** list or change to the **object types** list and choose one or more object types to restrict the search results.

![Image 10: Configuration of search](https://www.palantir.com/docs/resources/foundry/carbon/getting-started-search-config.png)

To turn to the home page content, in **Column A**, let's add a list of the relevant object types for this workspace, adding a new block for `Object types (prominent & selected)` and choosing the `List` option, which allows selecting each object type displayed automatically.

![Image 11: Object type list](https://www.palantir.com/docs/resources/foundry/carbon/getting-started-object-type-list.png)

## [](https://www.palantir.com/docs/foundry/carbon/getting-started/#update-the-menu-bar)Update the Menu Bar

The [Menu Bar](https://www.palantir.com/docs/foundry/carbon/configuration-menu-bar/) holds links to Foundry resources that open within the context of the workspace. In this example, we add two Workshop modules, the **Route Alert Inbox** and the **Flight Command Center**. These **Anchored Modules** will be permanent tabs in the workspace. Additional resources can be added as **New-Tab Modules**, which will be available in a dropdown and open in a new tab when selected.

![Image 12: Update the menu bar](https://www.palantir.com/docs/resources/foundry/carbon/getting-started-top-bar.png)

After updating the menu bar, return to the home page configuration and add a new block in **Column B** with the `All menu bar items` contents, which will automatically populate with any resources configured in the menu bar. These will populate _after_ the workspace is saved.

## [](https://www.palantir.com/docs/foundry/carbon/getting-started/#save-the-workspace)Save the Workspace

In the upper right corner of the edit interface, click the **Save** button to save a new version of the workspace then click the **x** icon to leave edit mode and review the workspace as it will appear to users.

## [](https://www.palantir.com/docs/foundry/carbon/getting-started/#whats-next)What's Next?

We now have a simple but functioning Carbon workspace. You can continue customizing this example workspace, manage its access controls, or connect it to other applications with the information in the links below:

*   Customize the [logo](https://www.palantir.com/docs/foundry/carbon/configuration-home/#logo).
*   Review the workspace [visibility and permissions](https://www.palantir.com/docs/foundry/carbon/configuration-access/).
*   Learn how to wire together [navigation between resources](https://www.palantir.com/docs/foundry/carbon/modules-navigation/) for multi-app workflows.

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/carbon/overview/)

[NEXT Example workspaces →](https://www.palantir.com/docs/foundry/carbon/example-workspaces/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

