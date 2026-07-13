Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/carbon/modules-discovery/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#configure-module-discovery)Configure module discovery

The [Object Explorer](https://www.palantir.com/docs/foundry/object-explorer/overview/) application includes an **[Open in](https://www.palantir.com/docs/foundry/object-explorer/apply-actions/#opening-in-other-applications)** button that enables users working in one platform application to open a result set in another platform application. The list of available options for the **Open in** button can be configured in the Carbon editing sidebar's [discoverable modules](https://www.palantir.com/docs/foundry/carbon/configuration-general/#discoverable-modules) section. The "discoverable" options available for inclusion in the **Open in** menu include:

*   [Workshop modules](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#workshop-modules)
*   [Quiver dashboards](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#quiver-dashboards)
*   [Slate applications](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#slate-applications)
*   [Vertex graph](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#vertex-graph)

Module discovery behavior - that is, the options that appear in the **Open in** menu - differs depending on whether the user is working in Carbon or outside of a Carbon Workspace. [Learn more about module discovery behavior inside or outside of Carbon.](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#module-discovery-behavior-in-carbon-and-outside-carbon)

## [](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#workshop-modules)Workshop modules

Making a specific [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) module discoverable by the **Open in** button requires configuration in the Carbon editing sidebar as well as in the Workshop application.

### [](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#carbon-editing-sidebar)Carbon editing sidebar

The first steps of making a Workshop module discoverable by the **Open in** button occur in the Carbon editing sidebar.

1.   In the Carbon editor, navigate to the **General** tab and add the module to the list of **Discoverable modules**.
2.   Select the **Add item** button to open a pop-up that prompts for **Module Type**.
3.   Select **Workshop module** in the **Module Type** dropdown and then select **Open Compass dialog** to choose the specific Workshop module that you want to make discoverable.

![Image 4: Workshop module discovery part 1: Carbon](https://www.palantir.com/docs/resources/foundry/carbon/configure-workspace-discoverable-modules.png?width=300)
### [](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#workshop)Workshop

After configuration in the Carbon editing sidebar is complete, the next steps of making a Workshop module discoverable by the **Open in** button take place in the Workshop tool itself.

1.   In [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/), open the Workshop module you want to make discoverable.
2.   Create a module interface variable for the input object set, by adding an external ID in the variable **Settings** panel.
3.   Set a constraint to the input object type.
4.   If no constraint is set, the module will be discoverable for all object types on the **Open in** button.

![Image 5: Workshop module discovery part 2: Workshop](https://www.palantir.com/docs/resources/foundry/carbon/module-discovery-workshop.png)

## [](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#quiver-dashboards)Quiver dashboards

[Quiver dashboards](https://www.palantir.com/docs/foundry/quiver/dashboards-overview/) can also be added to the **Open in** menu. The action will appear in the **Open in** menu in explorations on the object type by which the dashboard was created.

For example, if you were to create this Quiver dashboard and add it as a discoverable module in your workspace, then **Open in Aircraft Dashboard** would appear in explorations on the **Aircraft** object type.

![Image 6: Create Quiver template](https://www.palantir.com/docs/resources/foundry/carbon/module-discovery-quiver-template-creation.png?width=400)
## [](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#slate-applications)Slate applications

If you select a [Slate](https://www.palantir.com/docs/foundry/slate/overview/) application that contains a [variable](https://www.palantir.com/docs/foundry/slate/concepts-variables/), it will appear in the **Open in** menu in explorations on all object types.

## [](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#vertex-graph)Vertex graph

Selecting [Vertex](https://www.palantir.com/docs/foundry/vertex/overview/) will add an **Open in Vertex graph** option to explorations on all object types.

## [](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#module-discovery-behavior-in-carbon-and-outside-carbon)Module discovery behavior in Carbon and outside Carbon

Module discovery behavior - that is, the options that appear in the **Open in** menu - differs depending on whether the user is working in Carbon or outside of the Carbon interface.

When working in a Carbon workspace, the **Open in** button will surface only the discoverable modules configured for the currently selected workspace.

Outside of Carbon, the **Open in** button will surface a union of all the modules discoverable across the promoted Workspaces for which a user has access. [Learn more about promoted Workspaces.](https://www.palantir.com/docs/foundry/carbon/workspaces-overview/#promoted-workspaces)

The following example illustrates this difference:

*   Zayna is a member of two different promoted Carbon workspaces: 
    *   Claims Workspace
    *   Actuary Workspace

*   In the Claims Workspace, there are two different modules configured to be discoverable: 
    *   Claim Alert Application
    *   Claim Investigator Application

*   In the Actuary Workspace, there is one module configured to be discoverable: 
    *   Claim Cohorts Application

Because of this configuration, Zayna will see different sets of modules in the **Open in** button depending on where she is working:

*   In the Claims Workspace, the **Open in** button will display: 
    *   Claim Alert Application
    *   Claim Investigator Application

*   In the Actuary Workspace, the **Open in** button will display: 
    *   Claim Cohorts Application

*   Outside of Carbon, the **Open in** button will display: 
    *   Claim Alert Application
    *   Claim Investigator Application
    *   Claim Cohorts Application

[Learn more about configuration of navigation between modules.](https://www.palantir.com/docs/foundry/carbon/modules-navigation/)

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/carbon/modules-overview/)

[NEXT Configure navigation between modules →](https://www.palantir.com/docs/foundry/carbon/modules-navigation/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

