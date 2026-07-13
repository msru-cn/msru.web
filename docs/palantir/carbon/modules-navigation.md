Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/carbon/modules-navigation/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

Markdown Content:
## Configure navigation between modules

One of the advantages of Carbon workspaces is the ability to perform workflows which span more than just a single module. This provides users with a unified workflow rather than a set of siloed and disconnected applications.

When performing their workflows, users should not have to think in terms of particular products, modules, or interfaces. Instead, users should be able to proceed seamlessly through their work. Carbon provides a navigation framework which enables an object or a set of objects to be passed as parameters from one module to another.

## Introduction to navigation in Carbon

As a builder in Carbon, you can define the _input_ and _output_ for each module as well as what object or set of objects is currently actionable. The actionable object or object set could be a selection on a list, the results of a function, all objects of a given type, or any other object set that can be encoded using Ontology primitives. On the receiving end, another module can specify (with appropriate constraints) which one of its parameters can accept the _output_ described above.

![Image 1: Navigation input / output](https://www.palantir.com/docs/resources/foundry/carbon/navigation-input-output.png)

### Navigating between modules

If the user decides to perform a navigation action from one module to another (usually via a button in an action menu or other action triggered from a frontend component), Carbon will open the receiving module in a new tab, allowing the user to move step-by-step through a workflow without losing the state preserved in the module of origin.

This helps with composing complex workflows by making it easier for the results of one module to be branched into multiple instances of another module. For example, results in an Object Explorer list can be opened independently as Object View tabs and inspected without losing track of the original result list.

![Image 2: Navigation multiple results](https://www.palantir.com/docs/resources/foundry/carbon/navigation-branching.png)

### Multiple navigation steps

There is no limit on the number of navigation actions between modules. This means that any number of workflow steps can be facilitated by the navigation framework, since the output from each subsequent module can be an input to another module. The same module can even appear more than once in a workflow, as shown below, with possibly different inputs each time.

#### Example with multiple navigation steps

In the workflow depicted below, we are interested in using the tools available in our Carbon workspace to find a particular single-aisle Aircraft from which to start a Quiver analysis.

First, we search for the keyword `aircraft`; the navigation framework takes us to the Search module with `aircraft` as the input.

![Image 3: Navigation multiple steps - step 1](https://www.palantir.com/docs/resources/foundry/carbon/navigation-multi-step-1.png?width=500)

We select `Aircraft object type` from the search results. The navigation framework takes us to the Object Explorer module with `Aircraft object type` as the input.

![Image 4: Navigation multiple steps - step 2](https://www.palantir.com/docs/resources/foundry/carbon/navigation-multi-step-2.png?width=500)

Now, we want to analyze the entire set of object results in the **Single Aisle Aircrafts** Quiver module. The navigation framework opens the **Single Aisle Aircrafts** Quiver module with the 185 objects of `Aircraft` type as the input.

![Image 5: Navigation multiple steps - step 3](https://www.palantir.com/docs/resources/foundry/carbon/navigation-multi-step-3.png?width=500)

From this module, we select the `Q-AGM` Aircraft for further inspection. The navigation framework opens the Object View module with `Q-AGM Aircraft` as the input.

![Image 6: Navigation multiple steps - step 4](https://www.palantir.com/docs/resources/foundry/carbon/navigation-multi-step-4.png?width=500)

At this point, we decide that further analysis is needed on this object. For example, we may want to inspect the object's links or examine associated time series data. To accomplish this, the navigation framework is used again to open the **Single Aisle Aircrafts** Quiver module, this time with the `Q-AGM Aircraft` object as the input.

![Image 7: Navigation multiple steps - step 5](https://www.palantir.com/docs/resources/foundry/carbon/navigation-multi-step-5.png?width=500)

### Navigation outside of Carbon

It is important to note that although the navigation framework was designed primarily for operational use cases in Carbon, the navigation framework is also used in standalone frontend applications in the objects realm. When working in these applications outside of Carbon, navigation actions will open the receiving application in a new browser tab (as opposed to opening in a Carbon tab), but all benefits still hold true. As a result of this, neither end users nor builders need to distinguish between in-Carbon and outside-Carbon use cases.

## Module discovery or using an integrated module in a Carbon workspace

To create high-quality operational interfaces in Carbon, builders must be able to designate which modules can be used for navigation in order to curate a workspace tailored to the steps of the end user workflows.

These usable modules are called _discoverable modules_ and corresponding navigation actions are accessible in the **Open in** menus present in some of the modules, like Object Explorer or Object View (note that only the actions for which the constraints are met will be displayed). Other modules like Workshop allow builders to specify a concrete navigation action to be triggered after a user interaction, such as a button click. You can find details and examples for how each module type handles navigation actions in the [Integration with the navigation framework for Carbon Modules](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#integration-with-the-navigation-framework-for-carbon-modules) section below.

Module discovery behavior - that is, the options that appear in the **Open in** menu - differs depending on whether the user is working in Carbon or outside of a Carbon workspace. This is described [in the documentation below](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#module-discovery-behavior-in-carbon-and-outside-carbon).

### Configuring discoverable modules in Carbon config editor

1.   In the Carbon editor (accessed via `/workspace/carbon/edit`), navigate to the **General** tab and add the module to the list of **Discoverable Modules**.
2.   Select the **Add an element** button to open a pop-up that prompts for **Module Type**.
3.   Select the desired module type in the **Module Type** dropdown and then select **Open Compass dialog** to choose the specific module that you want to make discoverable.

![Image 8: Module discovery part 1: Carbon](https://www.palantir.com/docs/resources/foundry/carbon/configure-workspace-discoverable-modules.png?width=200)

## Module discovery behavior in Carbon and outside Carbon

Module discovery behavior - that is, the options that appear in the **Open in** menu - differs depending on whether the user is working in Carbon or outside of the Carbon interface.

When working in a Carbon workspace, the **Open in** menu will surface only the discoverable modules configured for the currently selected workspace. This way, each workspace can serve as a space with a concrete, curated set of navigation actions aimed at a well-defined collection of operational workflows.

When working outside of Carbon, the **Open in** button will surface all discoverable modules across all promoted workspaces for which a user has access. This gives users the full capabilities of Foundry when operating outside of a particular Carbon workspace. The set of all discoverable modules is determined by a UNION operation as follows:

1.   First, consider all the Organizations to which the user has access, including the _primary_ Organization of the user and all of the Organizations for which the user has _guest_ access.
2.   For each Organization, consider all [promoted workspaces for that Organization](https://www.palantir.com/docs/foundry/carbon/workspaces-overview/#promoted-workspaces) and union all discoverable modules for these workspaces.
3.   Filter the modules down to the ones which can be applied to the current _output_ of the module displaying the **Open in** menu.

The following example illustrates the difference between module discovery in Carbon and outside of Carbon.

*   Zayna's primary Organization is Primary Org, and she also has guest access to Guest Org.

![Image 9: Navigation Primary Org](https://www.palantir.com/docs/resources/foundry/carbon/navigation-disc-modules-primary-org.png?width=500)![Image 10: Navigation Guest Org](https://www.palantir.com/docs/resources/foundry/carbon/navigation-disc-modules-guest-org.png?width=500)
*   Zayna is a member of two different Carbon workspaces from Primary Org:

*   Zayna is also a member of a single Carbon workspace from Guest Org, the Flight Workspace.

    *   The Flight Workspace has one module configured to be discoverable (the Flight Tracker). 

![Image 11: Navigation Flight Tracker Discoverable Modules](https://www.palantir.com/docs/resources/foundry/carbon/navigation-disc-modules-flight.png?width=500)

Because of this configuration, Zayna will see different sets of modules in the **Open in** button depending on where she is working:

## Setting up navigation when Carbon is not accessed directly by users

In some circumstances, there may not be any operational users or use cases for Carbon workspaces. However, you may still want to configure the **Open in** actions to navigate between stand-alone objects applications, as described earlier in [Module discovery or using an integrated Module in a Carbon workspace](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#module-discovery-or-using-an-integrated-module-in-a-carbon-workspace).

The recommended solution is to create a Carbon workspace which would be accessible to the desired set of users (preferably by using Project-level permissions), and configure the set of discoverable modules there. The workspace must be a promoted workspace in order for its discoverable modules to appear under **Open in** actions outside of Carbon.

We recommend ensuring that discoverable modules are themselves accessible to users - the simplest way is to put them inside the same Project as the Carbon workspace itself.

The following example demonstrates this process:

## Integration with the navigation framework for Carbon modules

This section contains information on how each type of Carbon module can be integrated with the navigation framework. You will find details on what is considered an _output_ for a navigation action in the context of each module type, and how a Carbon parameter can become an _input_ of a navigation action.

For modules which do not have an associated Foundry Resource (Object View, Object Explorer, Search), the inputs and outputs are pre-defined and cannot be changed or configured. For example, an Object View will always accept any single object as its input, while the output of Object Explorer is set to the current results of the user's Exploration. We call such modules _built-in_; built-in modules do not need to be explicitly [made discoverable](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#configuring-discoverable-modules-in-carbon-config-editor).

Modules that can be created by builders (e.g. Workshop, Slate, Quiver, or Map) have more complex and robust ways of specifying an input and output, usually through a variable or a parameter defined in the context of such module. We call such modules _dynamic_ and they must be [made discoverable explicitly](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#configuring-discoverable-modules-in-carbon-config-editor).

### Object View (built-in)

#### Object View: Input via module discovery

The Object View module supports a single object of any object type as its input. A navigation action to open an Object View module is present by default in most context or action menus related to a single selected object. It is not possible to disable this navigation action or to configure the Object View module as discoverable in the Workspace configuration editor.

![Image 12: Object view input](https://www.palantir.com/docs/resources/foundry/carbon/navigation-object-view-input-1.png)

#### Object View: Input via UI elements

In _dynamic_ modules it is possible to create UI elements which would trigger a navigation action into an Object View:

#### Object View: Output

The currently displayed object in the Object View is the _output_ of the module.

### Object Explorer

#### Object Explorer: Input via module discovery

The Object Explorer module supports a single object set (versioned or unversioned) as its input. A navigation action to open an Object Explorer module is present in most context or action menus related to a single selected object set, or where there is a link to an object set (see the image below for an example of an object's property rendered as a link to an object set). It is not possible to disable this action or to configure the Object Explorer module as discoverable in the Workspace configuration editor.

![Image 13: Navigation Object Explorer input Search 1](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-link-to-exploration.png?width=500)

It is also possible to navigate to the Object Explorer module from the Search module in multiple ways, such as:

*   Opening a saved exploration,
*   Opening a saved object list,
*   Starting an exploration on an object type, and
*   Opening a shortcut to a module.

![Image 14: Navigation Object Explorer input Search 1](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-oe-from-search-1.png?width=500)![Image 15: Navigation Object Explorer input Search 2](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-oe-from-search-2.png?width=500)

#### Object Explorer: Input via UI elements

In _dynamic_ modules it is possible to create UI elements which would trigger a navigation action into an Object Exploration:

#### Object Explorer: Output

The currently selected object set in Object Explorer is the output of the module.

### Search (built-in)

The Search module is the gateway to opening various Ontology artifacts, providing the ability to filter object types and their properties with a keyword and to browse through lists of resources like Explorations, Lists, and Modules.

#### Search: Input via module discovery

The Search module can only be accessed directly through module shortcuts in a Workspace or through the Carbon home module's search bar (see below).

#### Search: Input via UI elements

The Carbon home module can be configured to show a search bar. The query entered in the search bar becomes the parameter value used to open the search module.

![Image 16: Navigation Search input Home](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-search-from-home.png?width=500)

#### Search: Output

When a particular resource is acted on by the user in the search module, a corresponding module will be opened in a new tab in Carbon. With the exception of module artifacts (where only the selected module will be opened), Object Explorer will receive the input object set:

*   For an object type, a new Exploration based on that type will open.
*   For an Exploration, a new Exploration based on a versioned object set the exploration is backed by will open.
*   For a List, a new Exploration based on the objects included on the list will open.
*   For a Comparison, a new Exploration in comparison mode based on the comparison view will open.

![Image 17: Navigation Search](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-search.png?width=500)

### Workshop

#### Workshop: Input via module discovery

Any Workshop module with at least one module interface variable of object set type can be configured to be discoverable, as [discussed in the Configure module discovery, Workshop modules, section](https://www.palantir.com/docs/foundry/carbon/modules-discovery/#workshop-modules).

#### Workshop: Input via UI elements

In _dynamic_ modules it is possible to create UI elements which would trigger a navigation action into a Workshop module:

*   In Workshop, you can define an Event of **Open Workshop** type.

![Image 18: Navigation Workshop input](https://www.palantir.com/docs/resources/foundry/carbon/navigation-module-workshop-input-workshop.png?width=500)

*   In Slate, navigation through a regular HTML link to a standalone Workshop application will be intercepted by Carbon and a new Workshop module will open instead with the object set RID present in the link. See the [documentation on Slate](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#slate) for more details.

![Image 19: Navigation Workshop Slate input](https://www.palantir.com/docs/resources/foundry/carbon/navigation-module-workshop-input-slate.png?width=500)

#### Workshop: module interface

[Workshop variables](https://www.palantir.com/docs/foundry/workshop/concepts-variables/) can be added to the module interface by setting an external ID in the variable **Settings** panel to enable parameterization of the Workshop module. Values for module interface variables can be passed into a standalone Workshop application via URL, or into a Carbon Workshop module via parameters.

##### Via URL

To pass parameters through the URL to a Workshop application from within a Carbon module, you must add `param.variable.` before the parameter in the URL.

Example: `workspace/carbon/ri.carbon.main.workspace.../ri.workshop.main.module...?param.variable.flight_id=1000,1001&param.variable.route=100,200`

##### Via parameters

When used as a Carbon parameter (for example, in the top bar module shortcuts), the name of the parameter must be the variable external ID prefixed with string `variable.` (including the dot).

##### Limitations

Currently, Carbon navigation does not support the following types of module interface variables:

*   Object set variables that have an empty object set as their value
*   Number variables with a value of `NaN` (Not a Number)
*   Time series set variables
*   Geoshape and geopoint variables
*   Struct variables
*   Scenario variables

#### Workshop: events

In a Workshop module, there might be multiple object sets being actioned at the same time via the variables concept laid out in the paragraph above. It is possible to pass any such object set as the input of a navigation action into many types of other modules, using the **Open Application** type of a [Workshop Event](https://www.palantir.com/docs/foundry/workshop/concepts-events/).

The following types of modules are currently supported:

*   Workshop
*   Object View
*   Object Explorer
*   Notepad (read-only)
*   Vertex exploration

![Image 20: Navigation Workshop Events](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-workshop-events.png?width=600)

Once the type of application or module to be opened is chosen (and in the case of _dynamic_ modules, a module selected via Resource Selector), a particular variable can be chosen as the input.

![Image 21: Navigation Workshop Events Variable](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-workshop-events-variable.png?width=600)![Image 22: Navigation Workshop Events Variables List](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-workshop-variable-list.png?width=600)

When the configured event is triggered inside of a Workshop module, a navigation action will be constructed with the current value of the chosen variable and a new Carbon tab opened.

![Image 23: Navigation Workshop Events](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-workshop-events-in-action.png)

### Slate

#### Configure a Slate document to use as a Carbon module

Carbon can display Slate modules in inline frames (iframes). Slate uses a document API to preserve the state of its widgets, such as remembering which value is selected in a dropdown, or whether a given checkbox is checked.

Preserving the state of Slate widgets requires communication between Carbon and the Slate module. When a user navigates away from a Slate module in Carbon, Carbon will send a POST message to the Slate module's iframe to notify the underlying Slate document to save its state and report a corresponding identifier back to Carbon. This identifier is converted into a Carbon module parameter. In order for a Slate module to understand the POST message from Carbon and successfully save state during navigation, two small events must be added to the Slate document backing the module, listed below:

**Event to save the view upon Carbon’s request**

Copied!

```
1Event: slate.getMessage
2Action: slate.saveView
3const type = {{slEventValue}}['type'];
4if (type !== "carbon-save-view-request") {
5  return {{slDisableAction}};
6}
```

![Image 24: Event to save the view upon Carbon’s request](https://www.palantir.com/docs/resources/foundry/carbon/navigation-api-slate-save-view-action.png)

**Event to message the saved view identifier to iframe parent (Carbon)**

Copied!

```
1Event: slate.viewSaved
2Action: slate.sendMessage
3return {
4  type: "viewSaved",
5  payload: {{slEventValue}}
6};
```

![Image 25: Event to message the saved view identifier to iframe parent (Carbon)](https://www.palantir.com/docs/resources/foundry/carbon/navigation-api-slate-view-saved-action.png)

#### Slate variables and Carbon parameters

Slate module inputs employ Slate variables, which are converted into Carbon module parameters to specify Carbon features like Menu Bar Items. The following section contains more information on how Slate variables can be converted and typed in a format that Carbon accepts.

_Slate variables:_

![Image 26: Navigation Slate variables](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-slate-variables.png?width=500)

_Slate menu bar item:_

![Image 27: Navigation Slate menu bar item](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-slate-menu-bar-item.png?width=500)

_Slate parameters_

![Image 28: Navigation Slate parameters passed](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-slate-params-passed.png?width=500)

**Carbon parameter type determinations for Slate variables**

Slate variables are untyped; there is no mechanism to declare that a given variable is a string, a number, or an object. Because of this, Carbon checks the default value of a variable to determine its type. In the screenshots above, `v_var3` has an object RID as its default value. This lets us specify an object as a value for the corresponding Carbon parameter. If it does not make sense for your Slate document's variables to have default values, there are two variable names that are auto-typed by Carbon:

Copied!

```
1  v_objectSetPassedFromCarbon # auto-typed as objectSet
2  v_objectPassedFromCarbon    # auto-typed as object
```

If defined in a Slate document, these variables will always be typed as described above, regardless of their default value. This can be particularly useful if you want to make your Slate module discoverable and have a selection of objects (or a single object) passed via a Carbon parameter to the module from another module or an application like Object Explorer.

![Image 29: Navigation Slate open in](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-slate-open-in.png?width=500)

#### Slate: Input via module discovery

A Slate module supports a single object or a single object set (versioned or unversioned) as its input. It is important to ensure that Carbon can interpret exactly one of the Slate document's variables-turned-carbon-parameters as being of such type, otherwise a corresponding navigation action will not be available.

#### Slate: Input via UI elements

Currently there is no support for navigating to a Slate module via UI elements other than from another Slate module (see the [Output](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#slate-output) section below).

#### Slate: Output

Slate modules are integrated with the navigation framework in a specific way. Whenever navigation would occur in the Slate document (for example, by clicking a link), Carbon intercepts such navigation and tries to interpret it. If the address to which navigation occurred can be recognized as a standalone frontend application, and if that application has a corresponding Carbon module, that module will be opened in a new Carbon tab. For example:

*   A link to `workspace/hubble/objects/ri.phonograph2-objects.main.object.4202d614-bb6e-471d-80d2-2cf9c735caf3` will be interpreted as opening the Object View module with object RID `ri.phonograph2-objects.main.object.4202d614-bb6e-471d-80d2-2cf9c735caf3`.
*   A link to `workspace/module/view/latest/ri.workshop.main.module.25b772f5-a095-48c6-a889-a960eeb93ce1?orderInput=ri.object-set.main.object-set.63417288-3e8d-4b34-a995-d6c2c6054e27` will be interpreted as opening the Workshop module with module RID `ri.workshop.main.module.a1838b32-448d-43f6-beff-3c9e40a34929` and parameter `orderInput` equal to `ri.object-set.main.object-set.63417288-3e8d-4b34-a995-d6c2c6054e27`.
*   A link to `workspace/slate/documents/another-slate-doc` will be interpreted as opening the Slate module with module RID corresponding to the Slate permalink `another-slate-doc`.
*   A link to `workspace/quiver/dashboard/view/ri.quiver.main.dashboard.b5597828-d4a2-4fec-964f-304a3ad7f1a9` will be interpreted as opening the Quiver Dashboard module with the module RID `ri.quiver.main.dashboard.b5597828-d4a2-4fec-964f-304a3ad7f1a9`.
*   A link to `workspace/hubble/exploration/saved/ri.object-set.main.versioned-object-set.ba21a7b3-3407-4bb1-ae9f-aae3d70c4a40` will be interpreted as opening the Object Explorer module with object set RID `ri.object-set.main.versioned-object-set.ba21a7b3-3407-4bb1-ae9f-aae3d70c4a40`.

Therefore, there is no particular output of the Slate module based on the state of widgets in the Slate document; each navigation action is a result of a user's action and the output is determined based on that action.

#### Navigation from nested iframes in a Slate module

Slate has the capability of embedding an iframe inside of a document. Any navigation via a link inside of such iframe will fall into one the following categories:

*   **Navigation occurs within the iframe:** The iframe will change its own source URL. For example, the iframe may be considered a sub-view which keeps content changes inside the iframe.
*   **Navigation occurs outside of the iframe:** When the link in an iframe is clicked, a new Carbon tab will be opened. For example, when a link in an iframe points to an object, clicking the link will open that object in a new tab.

In the latter case, for the mechanism described in the [_output_ section for Slate modules](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#slate-output) to take effect, the link in the nested iframe has to specify the outermost Slate iframe (the one in which Carbon displays the top-level Slate module) as its `target`. Carbon sets the name of that iframe to `carbon-navigation-target`. An example HTML snippet for a link can be found below:

```
<a
  href="/workspace/hubble/objects/ri.phonograph2-objects.main.object.4202d614-bb6e-471d-80d2-2cf9c735caf3"
  target="carbon-navigation-target"
>
  Link to an object with target="carbon-navigation-target"
</a>
```

This approach will work correctly with any depth of iframe nesting. For example, you can embed a third iframe inside of the second iframe, embedded inside the top-level Slate module iframe created by Carbon.

![Image 30: Navigation from double-nested iframe](https://www.palantir.com/docs/resources/foundry/carbon/navigation-api-slate-nested-iframes-click.png)

### Quiver

Among Quiver artifacts, only Quiver dashboards can be used as Carbon modules. See the [Create and embed dashboards in Quiver documentation](https://www.palantir.com/docs/foundry/quiver/dashboards-overview/) to learn about the difference between a dashboard and an analysis, as well as how to create dashboards.

A Quiver dashboard can take objects or object sets as input.

In both cases, the object or object set has to be of a specified type. This is to ensure that whenever a parameter - either an object or an object set - is piped into the dashboard, all the defined transformations will work well (for example, that the same set of object properties and ontology links will always be considered).

As a consequence, the object type which the dashboard is based on is converted into a _constraint_ on possible inputs. See [Module discovery or using an integrated Module in a Carbon Workspace](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#module-discovery-or-using-an-integrated-module-in-a-carbon-workspace) for more details on how constraints affect the availability of navigation actions leading to Quiver modules.

For example, assume that the `Single Aisle Aircrafts` dashboard has an object set as input with the `Aircraft` object type.

![Image 31: Quiver dashboard example](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-quiver-template-example.png)

An inferred constraint for the navigation action is that the object set input has to contain only `Aircraft` objects. In a Carbon workspace, the `Single Aisle Aircrafts` module is added to the [Discoverable Modules section of the configuration](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#configuring-discoverable-modules-in-carbon-config-editor).

When inspecting a set of results of the `Aircraft` object type in the Object Explorer module, the navigation action is shown in the **Open in** menu since the action's constraint is satisfied (because the object set contains objects of type `Aircraft`):

![Image 32: Navigation Quiver action discovered](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-quiver-template-yes-disc.png)

When inspecting a set of results of the `Order` object type in the Object Explorer module, the navigation action is not present in the **Open in** menu. This is because the object set contains objects of a different type than `Aircraft` and the navigation action's constraint is not satisfied:

![Image 33: Navigation Quiver action not discovered](https://www.palantir.com/docs/resources/foundry/carbon/navigation-modules-quiver-template-no-disc.png)

#### Quiver: Input via module discovery

Any non-empty Quiver Dashboard module can be configured to be discoverable, as [described in the previous sections](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#configuring-discoverable-modules-in-carbon-config-editor).

#### Quiver: Input via UI elements

Currently, among _dynamic_ modules, a Quiver Dashboard module can be opened via UI elements in Slate. In a Slate module, navigation through a regular HTML link to a standalone Quiver application will be intercepted by Carbon and a new Quiver Dashboard module will be opened instead. See the [Slate module documentation](https://www.palantir.com/docs/foundry/carbon/modules-navigation/#slate) for more details.

![Image 34: Navigation Quiver Slate input](https://www.palantir.com/docs/resources/foundry/carbon/navigation-module-quiver-input-slate.png)

#### Quiver: Output

Quiver dashboards provide very basic integration with the navigation framework on the _output_ side. Each object displayed in a card can be inspected in a pop-over, and the navigation action to the Object View can be triggered from there.

![Image 35: Navigation Quiver Object View output](https://www.palantir.com/docs/resources/foundry/carbon/navigation-module-quiver-output.png)
