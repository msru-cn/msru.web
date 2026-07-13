Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/app-building/curating-apps/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/app-building/curating-apps/#curating-apps-in-applications-portal)Curating apps in Applications Portal

Applications Portal is a tool for discovering and accessing all apps in Foundry. This includes both (1) core Foundry platform apps and (2) trusted custom apps that admins promote to Applications Portal.

![Image 5: Applications Portal](https://www.palantir.com/docs/resources/foundry/app-building/apps-portal.png)

### [](https://www.palantir.com/docs/foundry/app-building/curating-apps/#navigate-to-applications-portal)Navigate to Applications Portal

You can open Applications Portal by selecting the **Applications Portal** icon in the left sidebar. You will be able to view any application built in [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/), [Slate](https://www.palantir.com/docs/foundry/slate/overview/), or [Carbon](https://www.palantir.com/docs/foundry/carbon/overview/) that you have [promoted](https://www.palantir.com/docs/foundry/app-building/curating-apps/#promoted-apps-in-applications-portal). You will also have quick access to all Foundry platform apps.

You can "pin" your favorite apps to the left sidebar for easy access. Select the star icon next to the application's name from the Applications Portal or when you're editing the application. Once pinned, a section called **Promoted Apps** will appear in the Foundry sidebar with a list of your favorite promoted apps.

![Image 6: Sidebar Promoted App](https://www.palantir.com/docs/resources/foundry/app-building/apps-portal-sidebar-promoted.png?width=300)
Permissions for Applications Portal are based on [filesystem permissions](https://www.palantir.com/docs/foundry/security/projects-and-roles/#request-access-to-a-project). If you have the Discoverer role, you will be prompted to [request access](https://www.palantir.com/docs/foundry/security/projects-and-roles/#request-access-to-a-project).

![Image 7: Promoted Apps](https://www.palantir.com/docs/resources/foundry/app-building/apps-portal-promoted-apps.png)

## [](https://www.palantir.com/docs/foundry/app-building/curating-apps/#applications-portal-modes)Applications Portal modes

Applications Portal has two modes of engagement:

*   Basic, out-of-the-box: a tool to discover and learn about all Foundry platform apps. No admin work is required. Applications portal is an integral tool in the left sidebar, even without any promoted custom apps.
*   Advanced, curation-based: an admin, Palantir representative, or customer governance team promotes all trusted custom apps to Applications Portal.

There is a single Applications Portal for each enrollment or tenant on a multi-tenant enrollment. The promoted apps that a user can view are limited to the [spaces](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/#spaces) that belong to their [Organization](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/#organizations). If you have access to a shared space, you will also see promoted apps from that space.

## [](https://www.palantir.com/docs/foundry/app-building/curating-apps/#promoted-apps-in-applications-portal)Promoted apps in Applications Portal

A promoted application is an application that was marked by an admin as trusted and production-ready. Every promotion application has the following required metadata that will be displayed in Applications Portal and in the left sidebar:

*   Name: this can be different than the resource name
*   Icon
*   Description (optional)
*   Application Owner
*   Thumbnail
*   Collections and tags: you can use these to categorize promoted apps in different sections and apply filters in Applications Portal. Collections are required, while tags are optional.

Promoted apps receive the purple checkmark for trusted content, similar to items in the Data Catalog.

### [](https://www.palantir.com/docs/foundry/app-building/curating-apps/#permissions-for-promoting-apps-to-applications-portal)Permissions for promoting apps to Applications Portal

Admins can promote Workshop modules, Slate applications, Carbon workspaces, or external web links to Applications Portal. Permission to promote apps to Applications Portal is granted in [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/). You must have either the “Organization Administrator” or “User Experience Administrator” role. You also must be an editor or owner of an app to be able to promote it.

Promoted applications appear in Applications Portal for all users with at least the Discoverer role for the application and its space.

### [](https://www.palantir.com/docs/foundry/app-building/curating-apps/#how-to-promote-apps-to-applications-portal)How to promote apps to Applications Portal

The apps promotion UI is available both in Applications Portal and in edit mode of Workshop and Slate (see example below).

Un-promoting a promoted application is also done using the promotion UI, by selecting the **Unpromote** button at the bottom left.

You can change the resource that a promotion references to release new applications in a controlled manner.

![Image 8: Applications Portal Promotion Workflow](https://www.palantir.com/docs/resources/foundry/app-building/apps-portal-promotion-ui.png?width=300)
## [](https://www.palantir.com/docs/foundry/app-building/curating-apps/#categorization-in-applications-portal)Categorization in Applications Portal

You can use collections and tags to categorize apps in Applications Portal and apply filters to only view certain apps.

Permissions to create collections and tags or add them to a promoted app are the same as the permissions to promote to Applications Portal, based on the roles of “Organization administrator” and “User experience administrator” in Control Panel.

### [](https://www.palantir.com/docs/foundry/app-building/curating-apps/#collections)Collections

Collections are displayed on the left sidebar as titles of sections in Applications Portal. They are used as the top-line category in Applications Portal to curate your experience. Collections are created and managed in the Data Catalog. Once you create a collection, you can add a promoted app to it from Data Catalog and from the filesystem.

Only collections that have promoted apps linked to them are displayed in Applications Portal, and only if you have access to view/discover these apps. If a collection has no promoted apps linked to it, or if you do not have access to any apps on the collection, it will not be displayed.

### [](https://www.palantir.com/docs/foundry/app-building/curating-apps/#tags)Tags

Tags are displayed as labels on the promoted apps cards and can be filtered from the top right of Applications Portal. You can create and manage tags from the [**Tags** section of Platform Settings](https://www.palantir.com/docs/foundry/compass/tags/). Once they are created, they can be added to a promoted app on the promotion UI, as well as in the filesystem.

Only tags that have promoted apps linked to them are displayed in Applications Portal as filters, and only if the user has access to view/discover these apps. If a tag is not added to any promoted apps, or if a user has no access to any apps with that tag, it would not be displayed.

### [](https://www.palantir.com/docs/foundry/app-building/curating-apps/#managing-platform-apps-in-applications-portal)Managing platform apps in Applications Portal

Foundry platform apps are tools like Quiver, Contour, Data Connection, Pipeline Builder, and more. You can configure the option to display or hide platform apps from users in Control Panel under the **Application access** tab. This allows you to show only certain sub-groups of apps in Applications Portal, as well as in the rest of Foundry.

[← PREVIOUS Conduct sentiment analysis with AIP](https://www.palantir.com/docs/foundry/app-building/sentiment-analysis/)

[NEXT Application building / Workshop / Overview →](https://www.palantir.com/docs/foundry/workshop/overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

