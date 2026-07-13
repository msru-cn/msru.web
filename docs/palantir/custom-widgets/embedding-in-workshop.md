Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-widgets/embedding-in-workshop/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-widgets/embedding-in-workshop/#embedding-a-widget-in-workshop)Embedding a widget in Workshop

To embed a widget in [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/), start by adding a **custom widget** component to your Workshop:

![Image 3: Select custom widget renderer.](https://www.palantir.com/docs/resources/foundry/custom-widgets/workshop-custom-widgets.png)

In the new **Widget setup** tab, find **Select** to select the widget set and version to use.

A brand-new widget must be published at least once before the new widget appears in the widget set and version selector. After the new widget's first release, you can use [dev mode](https://www.palantir.com/docs/foundry/custom-widgets/development/) to preview unpublished changes to the widget's code, parameters, and events directly in Workshop.

## [](https://www.palantir.com/docs/foundry/custom-widgets/embedding-in-workshop/#configure-parameters-and-events)Configure parameters and events

You can bind the **parameters** your widget uses to Workshop variables to allow passing data in and out of the Workshop state. For information on the different parameter types available, see [parameters and events](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/).

You can use **events** to allow widgets to update the parameter values. You can also bind these events to [Workshop events](https://www.palantir.com/docs/foundry/workshop/concepts-events/) such that when a widget fires an event, it will also trigger a Workshop event.

Widget parameters and events can be bound to Workshop variables and events in the **Widget setup** panel:

![Image 4: Events and parameters configuration.](https://www.palantir.com/docs/resources/foundry/custom-widgets/workshop-parameters-and-events.png?width=350)
## [](https://www.palantir.com/docs/foundry/custom-widgets/embedding-in-workshop/#limitations)Limitations

Custom widgets currently reload every time they are removed from the page and later displayed again. To prevent the widget from resetting in this case, consider storing custom widget data in Workshop variables that are passed to the widget.

[← PREVIOUS Create a widget set](https://www.palantir.com/docs/foundry/custom-widgets/create/)

[NEXT Develop a widget set →](https://www.palantir.com/docs/foundry/custom-widgets/development/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

