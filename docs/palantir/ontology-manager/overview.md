Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/ontology-manager/overview/

Published Time: Thu, 09 Jul 2026 17:47:57 GMT

# [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#ontology-manager)Ontology Manager

**Ontology Manager** (sometimes called the Ontology Management Application, or OMA) enables you to build and maintain your organization’s Ontology. You can use Ontology Manager for a wide range of activities related to your Ontology, from creating a new object type and defining a new action type, to connecting data to the Ontology, and investigating whether data is updating in user applications.

## [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#accessing-the-application)Accessing the application

You can access the application in three different ways, by either:

*   Selecting the **Ontology Manager** icon from the Workspace sidebar’s **Apps** section;
*   Right-clicking on an object type in Data Lineage and selecting **Configure object type**; or
*   Adding `/workspace/ontology` to the end of your Foundry home page URL (for instance, `https://example.website.com/workspace/ontology`).

## [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#user-interface)User interface

The Ontology Manager interface is divided into the following elements that you will see referenced throughout the documentation:

*   [Ontology Manager navigation](https://www.palantir.com/docs/foundry/ontology-manager/overview/#ontology-manager-navigation)
*   [Discover view](https://www.palantir.com/docs/foundry/ontology-manager/overview/#discover)
*   [Object type view](https://www.palantir.com/docs/foundry/ontology-manager/overview/#object-type-view)
*   [Property editor view](https://www.palantir.com/docs/foundry/ontology-manager/overview/#property-editor-view)
*   [Link type view](https://www.palantir.com/docs/foundry/ontology-manager/overview/#link-type-view)
*   [Action type view](https://www.palantir.com/docs/foundry/ontology-manager/overview/#action-type-view)
*   [Function type view](https://www.palantir.com/docs/foundry/ontology-manager/overview/#function-type-view)

### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#ontology-manager-navigation)Ontology Manager navigation

The two persisting elements of Ontology Manager are the top bar and the sidebar. The top bar and sidebar serve as navigation elements, providing intuitive access to various features, functionalities, and sections within the application.

The top bar has three main functionalities. It allows users to search for Ontology resources, create new Ontology resources, and navigate between or create new branches.

The sidebar provides easy navigation to different resources, pages, or applications within Ontology Manager.

![Image 14: Ontology Manager annotated view.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-navigation-annotated.png)

### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#discover)Discover

The Discover view offers a highly customizable landing page tailored to your preferences. By default, the Discover view showcases favorite object types, recently-viewed object types, and favorite groups.

![Image 15: Ontology Manager Discover view.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-discover-view.png)

In case the user is new to the Ontology, two specialized sections will be presented: one which displays all object types that were recently modified within that Ontology, and one for all prominent object types.

![Image 16: Ontology Manager Fallback sections.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-fallback-sections.png)

The Discover view provides the flexibility to configure the sections that appear on the page and control the number of items displayed within each section. The available sections include "Recently viewed object types," "Favorite object types," and "Favorite groups." Additionally, you have the option to add a separate section for a specific group, allowing you to explore all object types within that group.

![Image 17: Ontology Manager Customize homepage feature.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-customize-homepage.png)

![Image 18: Ontology Manager Group section.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-type-group-section.png)

### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#object-type-view)Object type view

Selecting an object type brings up the object type view, which has the following components:

*   Sidebar with page selections (on the left in the image below)
*   Selected page (on the right in the image below)

![Image 19: Object type view.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-user-interface-object-type-view.png)

The **Overview** page of an object type has the following sections, as numbered in the image below:

1.   Object type metadata
2.   Properties
3.   Action types
4.   Link type graph
5.   Dependents
6.   Data
7.   Usage

![Image 20: Object type overview page.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-user-interface-overview-annotated.png)

### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#property-editor-view)Property editor view

Select a property from the **Properties** section of an object type’s **Overview** page to open the property editor view of the application.

![Image 21: Property editor interface.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-user-interface-property-editor-v2.png)

### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#link-type-view)Link type view

Selecting a link type from the link type graph of an object type’s **Overview** tab (see image below) opens the link type view (with **Overview** and **Datasources** pages).

![Image 22: Link type view.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-user-interface-link-type.png)

### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#action-type-view)Action type view

Selecting an action type from the action type section of an object type’s **Overview** tab opens the action type view, with further access to the **Overview**, **Logic** and **Observability** pages.

![Image 23: Action type view.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-user-interface-action-type.png)

#### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#view-action-metrics-and-monitoring-rules)View action metrics and monitoring rules

The **Observability** tab shows the near real-time [usage of the action](https://www.palantir.com/docs/foundry/action-types/action-metrics/) over the last 30 days as well as any [monitoring rules](https://www.palantir.com/docs/foundry/monitoring-views/overview/) and their status defined for the action. [Review action rules](https://www.palantir.com/docs/foundry/monitoring-views/rules-reference/#action-rules) for detailed action monitoring rule configuration options.

![Image 24: Action observability tab view.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-user-interface-action-type-observability-tab.png)

### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#function-type-view)Function type view

Selecting a function type from the function type section of an object type’s **Overview** tab opens the function type view, with further access to the **Overview**, **Configuration** and **Observability** pages.

#### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#usage-history-of-a-function)Usage history of a function

The Usage History panel records the applications which have used any version of a function, along with the respective version information. From this panel, you can navigate to these applications in order to upgrade the version of a function.

#### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#view-previous-versions-of-a-function)View previous versions of a function

By default, the latest version of the function is displayed. To view other versions, use the version dropdown selector located in the left panel.

#### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#navigate-to-the-functions-code-repository)Navigate to the Functions Code Repository

Modifications to the function can only be made within the Functions Code Repository. To navigate to the repository, use the **Open in Code Repository** button found in the top right-hand corner of the entity view.

![Image 25: Function type view.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-user-interface-function-type.png)

#### [](https://www.palantir.com/docs/foundry/ontology-manager/overview/#view-function-metrics-and-monitoring-rules)View function metrics and monitoring rules

The **Observability** tab shows the near real-time [usage of the function](https://www.palantir.com/docs/foundry/functions/function-metrics/) over the last 30 days as well as any [monitoring rules](https://www.palantir.com/docs/foundry/monitoring-views/overview/) and their status defined for the function. [Review function rules](https://www.palantir.com/docs/foundry/monitoring-views/rules-reference/#function-rules) for detailed function monitoring rule configuration options.

![Image 26: Function observability tab view.](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-user-interface-function-type-observability-tab.png)

[← PREVIOUS Object Views / Add Object Views to a Marketplace product](https://www.palantir.com/docs/foundry/object-views/marketplace-object-views/)

[NEXT Navigation →](https://www.palantir.com/docs/foundry/ontology-manager/navigation/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

