Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/

Published Time: Thu, 09 Jul 2026 17:47:53 GMT

# [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#parameters-and-events)Parameters and events

Parameters and events are the primary mechanisms for widgets to interact with host applications like Workshop. Parameters allow host applications to pass data into the widget, while events enable widgets to communicate back to the host application.

When developing custom widgets, you define parameters to allow users to configure widget behavior and interact with the host application, and you define events to enable two-way communication. This page explains the available parameter types, their formatting requirements, and how to use events.

Constraints

Widget configuration files have a limit of 50 parameters and 50 events. Parameter and event IDs must be in `camelCase` format.

## [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#parameters)Parameters

Parameters allow widgets to share state with the host application. They can be defined as primitive types, arrays of primitive types, and object set types.

### [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#parameter-types)Parameter types

| Type | Description | Format | Example |
| --- | --- | --- | --- |
| `boolean` | Boolean values (true/false) | Boolean | `true` or `false` |
| `date` | Calendar date | ISO 8601 format: `YYYY-MM-DD` | `"2023-12-31"` |
| `number` | Numeric values | Number | `42` or `3.14159` |
| `string` | Text values | String | `"Hello World"` |
| `timestamp` | Date and time with timezone | ISO 8601 format: `YYYY-MM-DDThh:mm:ss.sssZ` | `"2023-12-31T23:59:59.999Z"` |
| `objectSet` | Object set | Object set RID | `ri.object-set.main.temporary-object-set.2af08bf0-3feb-416e-9e34-ad604940581b` |
| `scenario` | Ontology scenario reference | Scenario RID | `ri.actions..scenario.2af08bf0-3feb-416e-9e34-ad604940581b` |

Object set parameters allow you to pass a set of objects between a custom widget and its host application. An object set may contain zero or more objects, either as a fixed list or as a set of filters applied to an object type or interface. An object set parameter should be defined in the widget configuration file with an object type or interface from an Ontology SDK (OSDK).

Scenario parameters allow you to pass an [Ontology scenario](https://www.palantir.com/docs/foundry/ontology/osdk-scenario/) between a custom widget and its host application. The value of a scenario parameter is a scenario reference (RID). Your widget can use this RID with the OSDK to read objects and apply actions within the scenario's isolated sandbox.

Scenario parameters are only available for [Ontology Scenarios](https://www.palantir.com/docs/foundry/ontology/overview-ontology-scenario/).

#### [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#unavailable-parameter-types)Unavailable parameter types

Types such as object set filters and structs are currently unsupported as first-class parameter types for custom widgets.

### [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#usage-in-parameter-definitions)Usage in parameter definitions

When defining parameters in your widget configuration file, use the appropriate type designation:

parameter-examples.ts

Copied!

```text
1{
2  parameters: {
3    // Primitive parameter example
4    startDate: {
5      type: "date",
6      displayName: "Start Date"
7    },
8    // Array parameter example
9    tags: {
10      type: "array",
11      subType: "string",
12      displayName: "Tags"
13    },
14    // Object set parameter example
15    flights: {
16      type: "objectSet",
17      allowedType: Flight,
18      displayName: "Flights"
19    }
20  }
21}
```

## [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#events)Events

Events allow widgets to communicate with the host application (such as Workshop) and trigger side effects or update parameters. Events can be defined in your widget configuration file alongside parameters.

### [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#defining-events)Defining events

Events are defined in the widget configuration file with the following structure:

events-definition.ts

Copied!

```text
1{
2  events: {
3    myEventId: {
4      displayName: "Human-readable event name",
5      parameterUpdateIds: ["parameter1", "parameter2"],
6    },
7  },
8}
```

The `parameterUpdateIds` field specifies which parameters can be updated when this event is triggered.

## [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#parameter-and-event-binding-in-workshop)Parameter and event binding in Workshop

In Workshop, widget parameters can be bound to Workshop variables, and widget events can be bound to Workshop events in the Widget setup panel. This allows for two-way communication:

1.   Workshop can pass data to widgets through parameter bindings, and a widget can update these parameters by emitting events.
2.   Workshop events can also be bound to widget events in order to trigger side-effects in Workshop.

## [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#examples)Examples

Below are complete examples showing both the widget configuration and usage in React.

### [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#primitive-parameters-and-events)Primitive parameters and events

First, define parameters and events in your configuration file:

simpleCounter.config.ts

Copied!

```text
1import { defineConfig } from "@osdk/widget.client";
2
3export default defineConfig({
4  id: "simpleCounter",
5  name: "Simple Counter",
6  description: "A minimal counter example",
7  type: "workshop",
8  parameters: {
9    name: {
10      displayName: "Name",
11      type: "string",
12    },
13    count: {
14      displayName: "Count",
15      type: "number",
16    },
17  },
18  events: {
19    updateCount: {
20      displayName: "Update Count",
21      parameterUpdateIds: ["count"],
22    },
23  },
24});
```

Then, use these parameters and events in your widget component:

Widget.tsx

Copied!

```text
1import { useFoundryWidgetContext } from "@osdk/widget.client-react";
2import React, { useCallback } from "react";
3import type SimpleCounterConfig from "./simpleCounter.config.js";
4
5const useWidgetContext = useFoundryWidgetContext.withTypes<typeof SimpleCounterConfig>();
6
7export const Widget = () => {
8  const { parameters, emitEvent } = useWidgetContext();
9
10  const name = parameters.values.name ?? "World";
11  const count = parameters.values.count ?? 0;
12
13  const increment = useCallback(() => {
14    emitEvent("updateCount", {
15      parameterUpdates: { count: count + 1 },
16    });
17  }, [emitEvent, count]);
18
19  return (
20    <div>
21      <h1>Hello, {name}!</h1>
22      <p>Count: {count}</p>
23      <button onClick={increment}>Increment</button>
24    </div>
25  );
26};
```

### [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#object-set-parameter)Object set parameter

First, define parameters and events in your configuration file:

flights.config.ts

Copied!

```text
1import { Flight } from "@custom-widget/sdk";
2import { defineConfig } from "@osdk/widget.client";
3
4export default defineConfig({
5  id: "flights",
6  name: "Flights Example",
7  description: "An example with flights",
8  type: "workshop",
9  parameters: {
10    flights: {
11      displayName: "Flights",
12      allowedType: Flight,
13      type: "objectSet",
14    },
15  },
16  events: {},
17});
```

When using an object set parameter, an OSDK client must be passed into the `FoundryWidget` component. To use the `useObjectSet` hook from `@osdk/react` for data fetching, you must also wrap your widget with `OsdkProvider2`. This provider enables the experimental React hooks that offer automatic caching, loading states, and real-time updates:

main.tsx

Copied!

```text
1import { FoundryWidget } from "@osdk/widget.client-react";
2import { OsdkProvider2 } from "@osdk/react/experimental";
3import { createRoot } from "react-dom/client";
4import FlightsConfig from "./flights.config.js";
5import { client } from "./client.js";
6import { Widget } from "./Widget.js";
7
8const root = document.getElementById("root")!;
9
10createRoot(root).render(
11  <FoundryWidget config={FlightsConfig} client={client}>
12    <OsdkProvider2 client={client}>
13      <Widget />
14    </OsdkProvider2>
15  </FoundryWidget>
16);
```

Then, use these parameters and events in your widget component. Since `useObjectSet` cannot be called with a `null` or `undefined` object set, the pattern below uses a separate component that only renders once the object set is available:

Widget.tsx

Copied!

```text
1import { Flight } from "@custom-widget/sdk";
2import type { ObjectSet } from "@osdk/api";
3import { useObjectSet } from "@osdk/react/experimental";
4import { useFoundryWidgetContext } from "@osdk/widget.client-react";
5import React from "react";
6import type FlightsConfig from "./flights.config.js";
7
8const useWidgetContext = useFoundryWidgetContext.withTypes<typeof FlightsConfig>();
9
10export const Widget = () => {
11  const { parameters } = useWidgetContext();
12
13  const flightsParam = parameters.values.flights;
14
15  if (flightsParam == null) {
16    return <div>Select an object set</div>;
17  }
18
19  return <FlightsView objectSet={flightsParam.objectSet} />;
20};
21
22const FlightsView = ({ objectSet }: { objectSet: ObjectSet<Flight> }) => {
23  const { data: flights, isLoading, error } = useObjectSet(objectSet);
24
25  if (isLoading) {
26    return <div>Loading flights...</div>;
27  }
28
29  if (error) {
30    return <div>Error loading flights</div>;
31  }
32
33  return (
34    <div>
35      <p>Flights: {flights?.map(f => ...)}</p>
36    </div>
37  );
38};
```

The value of an object set parameter contains an object set RID as well as an instantiated OSDK object set for convenience. When the object set definition changes, or data is invalidated in the host application, the object set RID and instantiated OSDK object set in the parameter value will update.

Learn more about @osdk/react

For more information on `useObjectSet` and other React hooks for querying, actions, and caching, see the [official @osdk/react documentation ↗](https://palantir.github.io/osdk-ts/react/getting-started).

### [](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/#update-an-object-set-parameter)Update an object set parameter

You can update an object set parameter by emitting an event using an OSDK `ObjectSet` to update the parameter.

First, define the event in your configuration file with the object set parameter in `parameterUpdateIds`.

flights.config.ts

Copied!

```text
1import { Flight } from "@custom-widget/sdk";
2import { defineConfig } from "@osdk/widget.client";
3
4export default defineConfig({
5  id: "flights",
6  name: "Flights Example",
7  description: "An example with flights",
8  type: "workshop",
9  parameters: {
10    flights: {
11      displayName: "Flights",
12      allowedType: Flight,
13      type: "objectSet",
14    },
15  },
16  events: {
17    updateFlights: {
18      displayName: "Update Flights",
19      parameterUpdateIds: ["flights"],
20    },
21  },
22});
```

Then, use `emitEvent` to update the object set parameter with a new `ObjectSet`.

Widget.tsx

Copied!

```text
1import { Flight } from "@custom-widget/sdk";
2import { useFoundryWidgetContext } from "@osdk/widget.client-react";
3import React, { useCallback } from "react";
4import { client } from "./client.js";
5import type FlightsConfig from "./flights.config.js";
6
7const useWidgetContext = useFoundryWidgetContext.withTypes<typeof FlightsConfig>();
8
9export const Widget = () => {
10  const { parameters, emitEvent } = useWidgetContext();
11
12  const filterToLongFlights = useCallback(() => {
13    const longFlights = client(Flight).where({
14      duration: { $gt: 500 },
15    });
16
17    emitEvent("updateFlights", {
18      parameterUpdates: { flights: longFlights },
19    });
20  }, [emitEvent]);
21
22  return (
23    <div>
24      <button onClick={filterToLongFlights}>Show Long Flights</button>
25    </div>
26  );
27};
```

Behavior and limitations

The SDK creates a temporary object set from your `ObjectSet` definition and sends the resulting RID to the host application. If the same event is emitted multiple times in quick succession, only the last call will be sent. Earlier calls are discarded to prevent race conditions. 

 Errors during object set creation, such as network failures, are not surfaced to the caller.

Refreshing object set data after actions

If your widget uses OSDK to apply Ontology actions that modify data in an object set parameter, you can enable automatic data refresh. See [Refresh host data on action](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/#refresh-host-data-on-action) for details.

[← PREVIOUS Use Ontology SDK (OSDK) in a widget set](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/)

[NEXT Add an additional widget to a widget set →](https://www.palantir.com/docs/foundry/custom-widgets/additional-widget/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

