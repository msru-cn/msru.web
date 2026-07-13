Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/carbon/permissions-configure/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/carbon/permissions-configure/#configure-permissions)Configure permissions

There are three main types of permissions in Carbon:

*   [Administrator permissions](https://www.palantir.com/docs/foundry/carbon/permissions-configure/#configure-administrator-permissions), which permit promotion of Carbon workspaces and configuration of organization-wide Carbon settings
*   [Editor permissions](https://www.palantir.com/docs/foundry/carbon/permissions-configure/#configure-workspace-editor-permissions), which permit editing of a specific Carbon workspace
*   [Viewer permissions](https://www.palantir.com/docs/foundry/carbon/permissions-configure/#configure-workspace-viewer-permissions), which permit the viewing and use of specific Carbon workspaces

## [](https://www.palantir.com/docs/foundry/carbon/permissions-configure/#configure-administrator-permissions)Configure administrator permissions

Carbon administrator permissions are required in order to configure organization-wide settings in Carbon. This includes choosing which workspaces are promoted, customizing the appearance of the Navigation Menu, and enabling or disabling dark mode. Carbon administrator permissions are granted in [Control Panel](https://www.palantir.com/docs/foundry/administration/overview/) and can be configured independently for each [Organization](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations/).

To grant Carbon administrator permissions to a group of users:

1.   Navigate to Control Panel (`workspace/control-panel`), and select an enrollment to configure, if multiple enrollments are available.
2.   Under **Setting Up an Organization**, select **Assign organization permissions**.
3.   Configure permissions with **one** of the following options: 
    *   Search for the `User experience administrator` role and configure which groups and users should have this role. This will also grant permission for related admin workflows.
    *   For more granular permissions, select **New role**, fill out the name and description, and add the `Manage Carbon workspaces` workflow.

## [](https://www.palantir.com/docs/foundry/carbon/permissions-configure/#configure-workspace-editor-permissions)Configure workspace editor permissions

To edit a Carbon workspace, a user must have at least edit access to the resource. You can locate, view, and manage permissions for the workspace resource in a Project; the workspace file location is selected when creating a new workspace, but you can also move an existing workspace to a different Project.

Editors can create and edit the home page and header menu bar for specific workspaces they have editor permissions on. Editing a Carbon workspace without promoting it enables iterating on a draft workspace.

Only a Carbon administrator can promote workspaces. Non-admin editors cannot determine which workspaces are displayed in the Navigation Menu, and even if a workspace is configured as the default workspace for a user group, it will not be displayed in the Navigation Menu if it is not promoted by an administrator.

## [](https://www.palantir.com/docs/foundry/carbon/permissions-configure/#configure-workspace-viewer-permissions)Configure workspace viewer permissions

Users must meet the following requirements to be able to view a specific Carbon workspace:

*   The user has at least view access to the workspace file. 
    *   You can locate, view, and manage permissions for the workspace resource in a Project. The workspace file can be found in the location in which it was stored when it was created, or opened via the **Access** tab in the editor side bar.

*   The workspace is [promoted by a Carbon administrator](https://www.palantir.com/docs/foundry/carbon/workspaces-navigation/#promote-and-hide-workspaces) for the organization to which the user belongs. 
    *   Users with view permissions can still view the workspace if they have the exact URL to navigate to it, even if the workspace is not promoted.

Note that providing access to a Carbon workspace is not equivalent to providing access to all the Workshop modules, objects, applications, and other resources displayed in the Carbon workspace. Access to these resources is determined independently from access to the Carbon workspace.

[← PREVIOUS Modules / Configure navigation between modules](https://www.palantir.com/docs/foundry/carbon/modules-navigation/)

[NEXT Set a default workspace →](https://www.palantir.com/docs/foundry/carbon/permissions-default-workspace/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

