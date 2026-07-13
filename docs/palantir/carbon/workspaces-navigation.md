Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/carbon/workspaces-navigation/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/carbon/workspaces-navigation/#configure-navigation-between-workspaces)Configure navigation between workspaces

The Navigation Menu allows users to move between Carbon workspaces and access other Foundry applications. In order for a workspace to be visible to a user in the Navigation Menu, the user must have view access on the workspace resource and belong to an organization for which the workspace is "promoted". The Navigation Menu can also display links to [other Palantir Foundry applications](https://www.palantir.com/docs/foundry/carbon/workspaces-navigation/#add-additional-links-to-the-navigation-menu).

Note that workspaces that have not been promoted are not displayed in the Navigation Menu, but are still accessible to users via a direct link.

## [](https://www.palantir.com/docs/foundry/carbon/workspaces-navigation/#promote-and-hide-workspaces)Promote and Hide Workspaces

Only Carbon administrators can edit the list of promoted workspaces for each organization. To configure promoted workspaces, enter edit mode by clicking the **Edit** button in the menu bar.

![Image 3: Configure Navigation Menu](https://www.palantir.com/docs/resources/foundry/carbon/configure-navigation-menu.png?width=300)
Once the edit sidebar is open, first select the Organization that you want to configure in the dropdown at the top of the sidebar (**A**). Note that a dropdown will only appear if you have Carbon administrator permissions in multiple organizations.

After the desired Organization has been selected, you can reorder and demote Workspaces for the Organization by clicking on **Edit** (**B**) and save by clicking **Done**. Changes to the allowlist are saved and implemented immediately.

To add a new workspace to the Navigation Menu, you can either (**C**) open an existing workspace (that is not yet promoted to the allowlist) or (**D**) create a new workspace, then promote the workspace in the [Access tab](https://www.palantir.com/docs/foundry/carbon/configuration-access/#workspace-visibility) of the edit sidebar.

Warning

Note that the promoted workspace configuration applies to an entire organization and is not workspace-specific. All the users within a certain organization will see the same configuration, regardless of the specific workspace they are in.

## [](https://www.palantir.com/docs/foundry/carbon/workspaces-navigation/#add-additional-links-to-the-navigation-menu)Add additional links to the Navigation Menu

If a user needs to access parts of the platform that are not available within Carbon, you can configure additional links in the Navigation Menu. In the edit sidebar mode, click **Configure** in the **Organization** section to open the organization metadata dialog. From here, add links to specific platform applications or set a custom link to a different part of the platform. For each link, you can set a custom icon, link title, or relative URL.

![Image 4: Configure External Links](https://www.palantir.com/docs/resources/foundry/carbon/configure-navigation-menu-add-links.png?width=400)
Follow [these instructions](https://www.palantir.com/docs/foundry/carbon/configuration-general/#external-links) to override the organization-level external links at the workspace level.

[← PREVIOUS View version history](https://www.palantir.com/docs/foundry/carbon/workspaces-history/)

[NEXT Restrict navigation out of a workspace →](https://www.palantir.com/docs/foundry/carbon/restrict-workspace-nav/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

