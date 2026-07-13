Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-row-level-triggering-actions-and-events/

Published Time: Thu, 09 Jul 2026 17:47:54 GMT

# [](https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-row-level-triggering-actions-and-events/#triggering-actions-and-events-on-a-row)Triggering actions and events on a row

Ontology actions enable you to create, modify, and delete objects in the Ontology. Workshop events enable you to trigger pop-ups, toggle sections, switch tabs, update variable values, and more. On each row, you can configure actions and events that can be triggered by the end user.

Actions and events can be triggered by:

*   **Row right-click menus**
*   **"On row select" events**

![Image 3: Right click menu and row select event configuration.](https://www.palantir.com/docs/resources/foundry/dynamic-scheduling/row-right-click-row-select-config.png?width=600)
## [](https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-row-level-triggering-actions-and-events/#row-right-click-menu)Row right-click menu

A row-level right-click menu can be configured under **Row Configuration > Right Click Menu**. Menu options can be reordered by dragging the menu item. The available right-click menu options are detailed in the following sections:

*   [Action types](https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-row-level-triggering-actions-and-events/#action-types)
*   [Workshop events](https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-row-level-triggering-actions-and-events/#workshop-events)

### [](https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-row-level-triggering-actions-and-events/#action-types)Action types

Common uses:

*   Edit a property on the row object;
*   Create a new object at the point in time that you right-click in the Gantt chart.

1.   Provide a custom name for this menu option.
2.   Select any ontology action type to trigger on click. This can be related to the `resource object type` but is not required.
3.   Prefill the parameters of your action type with Workshop variables or Scheduling Gantt chart-specific variables: 
    *   **Resource object:** Auto-fills with the row object you right-click on.
    *   **Selected start timestamp:** Auto-fills with the timestamp of the point in the row you right-clicked. Useful when right-clicking in the whitespace of the row.

### [](https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-row-level-triggering-actions-and-events/#workshop-events)Workshop events

Common uses:

*   Trigger a popover with more details about the selected row
*   Open a different Workshop application or page, with the selected row pre-populated as an input.

1.   Provide a custom name for this menu option.
2.   Select a Workshop event to trigger on click. Often uses the Gantt chart's selection output variable as a reference to the selected row.

![Image 4: Example of Row Right Click Menu.](https://www.palantir.com/docs/resources/foundry/dynamic-scheduling/row-right-click-menu-example.png?width=600)
## [](https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-row-level-triggering-actions-and-events/#on-row-select-event)"On row select" event

The "on row select" event can be configured below the right-click menu in the configuration. When toggled on, these events trigger when the user selects (clicks on) a row header. Events can be any Workshop event.

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-row-level-interactions-overview/)

[NEXT Schedule layer-level interactions / Overview →](https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-schedule-layer-level-interactions/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

