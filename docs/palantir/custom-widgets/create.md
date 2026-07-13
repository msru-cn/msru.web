Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-widgets/create/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-widgets/create/#create-a-widget-set)Create a widget set

To create a new widget set, follow the instructions below:

1.   Select **Files** from the workspace navigation bar and find your desired project or folder.
2.   Select **New > Widget set** in the top right to create a new widget set within the current project or folder. The new widget set will inherit the permission of the project or folder.

![Image 6: Create a new widget set.](https://www.palantir.com/docs/resources/foundry/custom-widgets/create-from-compass.png?width=500)
1.   In the create new widget set wizard, configure the name of your widget set and select whether you will be developing in or outside of Foundry. Developing in Foundry is the easiest way to get started, as it automatically bootstraps a code repository with built-in CI/CD for creating, testing, and publishing your widget set. Alternatively, you can host your code in your own repository (such as GitHub) and use our CLI to manage version control and publish the widget set yourself.

![Image 7: Create new widget set wizard.](https://www.palantir.com/docs/resources/foundry/custom-widgets/creation-wizard.png)

## [](https://www.palantir.com/docs/foundry/custom-widgets/create/#enabling-ontology-sdk-osdk)Enabling Ontology SDK (OSDK)

To access the ontology from your widget set in code, configure an OSDK using the creation wizard (optional during setup). You can add or configure an OSDK for your widget set at any time.

If you choose to configure an Ontology SDK, you must also enable the Ontology APIs for your widget set, which can be done by any user with the Information Security Officer role. Otherwise, API calls made from the OSDK will fail. Review [Using Ontology SDK (OSDK) in a widget set](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/) documentation for further details.

![Image 8: Configuring the OSDK screen.](https://www.palantir.com/docs/resources/foundry/custom-widgets/enabling-osdk.png)

## [](https://www.palantir.com/docs/foundry/custom-widgets/create/#first-release)First release

If you chose to develop in Foundry, the widget release will be started automatically and should complete within a few minutes. To check the status of your custom widget:

*   Select the **Edit in Code Workspaces** option.
*   Select **Tags** in the top bar of Code Workspaces and then into the listed tag's check page.

If you opted to develop outside of Foundry, refer to the instructions provided on [publishing a widget set](https://www.palantir.com/docs/foundry/custom-widgets/publish/) documentation.

## [](https://www.palantir.com/docs/foundry/custom-widgets/create/#previewing-widgets)Previewing widgets

After the first version of your widget has been released, refresh the widget set's overview page to show a new widget. Selecting the widget will allow you to preview it.

You do not need to wait for a release to preview your widget. Using [dev mode](https://www.palantir.com/docs/foundry/custom-widgets/development/), you can preview an unpublished widget in the custom widgets playground and in Code Workspaces before its first release.

![Image 9: Widget set overview page.](https://www.palantir.com/docs/resources/foundry/custom-widgets/widget-set-overview.png)

![Image 10: Preview your widget.](https://www.palantir.com/docs/resources/foundry/custom-widgets/widget-preview.png)

[← PREVIOUS Core concepts](https://www.palantir.com/docs/foundry/custom-widgets/core-concepts/)

[NEXT Embedding a widget in Workshop →](https://www.palantir.com/docs/foundry/custom-widgets/embedding-in-workshop/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

