Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-widgets/development/

Markdown Content:
## Development

## What is dev mode?

Dev mode is a development feature that allows you to preview widgets using non-production code directly within Foundry applications. When dev mode is active, your development server (running either locally or in Foundry) overrides the published widget assets, letting you see your code and configuration changes without needing to publish a new version.

Key characteristics of dev mode:

*   **Personal:** Only affects your user account and other users continue to see the published version.
*   **Temporary:** Automatically expires after 24 hours.
*   **Live updates:** Code changes from your development server immediately appear in the widget.
*   **Context-aware:** Works in both the custom widgets playground and host applications like Workshop.

## Set up a project

A widget no longer needs to be published before you can develop on it. You can preview an unpublished widget in the custom widgets playground and in Code Workspaces. To use a brand-new widget in Workshop, publish the widget once so that it becomes selectable in the **Widget setup** panel. Dev mode then previews your live changes against the published widget.

If you chose to use a Foundry Code Repository to store your source code, first follow the "Work locally" instructions in VS Code Workspace or the Code Repositories application to clone the repository to your local machine.

Set the `FOUNDRY_TOKEN` environment variable in your terminal with a [user-generated token](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/) with the following command, or the equivalent for your operating system.

Copied!

`1export FOUNDRY_TOKEN=<token>`

In the project directory, run the following commands to install dependencies and start the dev server:

Copied!

```
1npm install
2npm run dev
```

A link will be printed to the terminal which you can open to set up dev mode for your widget set. This will redirect the browser to the widget set overview page once complete, from which you can select a widget to start developing against. The live code running from your development server will now be displayed in the widget playground and any changes to your code will immediately update the widget on the page.

![Image 1: The npm run dev command in the terminal.](https://www.palantir.com/docs/resources/foundry/custom-widgets/npm-run-dev.png)

## Dev mode environments

Once your dev server is running, you can preview your widgets in the different environments outlined below.

### Custom widgets playground

The custom widgets playground is a dedicated development environment for testing individual widgets which provides:

*   **Isolated testing:** Preview widgets in different dimensions and configurations.
*   **Parameter controls:** Interactive controls to test widget parameters you have defined.
*   **Event monitoring:** A message log showing widget events and parameter updates from Foundry.
*   **Dev mode integration:** When dev mode is active, the playground displays your development code.

![Image 2: The widget in dev mode in the custom widgets playground.](https://www.palantir.com/docs/resources/foundry/custom-widgets/playground-dev-mode.png)

### Workshop integration

When developing Workshop widgets, dev mode extends beyond the playground to actual Workshop applications. This allows you to:

*   Preview widget changes in the full context where the widget will be used
*   Test interactions with other Workshop components
*   Validate the widget's behavior in real application scenarios

![Image 3: The widget in dev mode in Workshop.](https://www.palantir.com/docs/resources/foundry/custom-widgets/workshop-dev-mode.png)

### VS Code Workspaces integration

The development server can run directly from the terminal in a VS Code workspace. This is done automatically when the workspace starts, but can also be done manually using the following command in the terminal:

Copied!

`1npm run dev:remote`

The VS Code preview panel can then be used to select a widget to preview from the development server. A development server running in a VS Code workspace can also be used to preview changes in the custom widgets playground and in Workshop applications, just like a development server running on your local machine.

![Image 4: The widget in dev mode in VS Code Workspaces.](https://www.palantir.com/docs/resources/foundry/custom-widgets/vscode-workspaces-dev-mode.png)

## Dev mode controls and states

Dev mode can be controlled through the custom widgets playground interface. The controls indicate the current state and allow you to enable, disable, or pause dev mode as needed.

### Disabled state (default)

Dev mode is disabled by default. You can enable it through the playground controls, but it will remain inactive unless your dev server is running and has overrides for the current widget.

![Image 5: Dev mode controls in disabled state.](https://www.palantir.com/docs/resources/foundry/custom-widgets/dev-mode-disabled.png?width=350)

### Enabled state

When active, dev mode displays content from your development server instead of the published widget version. This state confirms that your local changes are being previewed.

The controls display whether the source is a development server running on localhost:

![Image 6: Dev mode controls in enabled state using localhost.](https://www.palantir.com/docs/resources/foundry/custom-widgets/dev-mode-enabled-localhost.png?width=350)

Or a VS Code workspace:

![Image 7: Dev mode controls in enabled state using a VS Code Workspace.](https://www.palantir.com/docs/resources/foundry/custom-widgets/dev-mode-enabled-vscode-workspace.png?width=350)

### Enabled (inactive) state

This state indicates dev mode is enabled but no development server overrides exist for the current widget, so the published version is still displayed. This typically happens when your dev server is not running or does not include the widget you are viewing.

![Image 8: Dev mode controls in enabled inactive state.](https://www.palantir.com/docs/resources/foundry/custom-widgets/dev-mode-enabled-inactive.png?width=350)

### Paused state

The paused state temporarily disables dev mode while keeping the controls visible in host applications like Workshop, making it easy to resume development when needed.

![Image 9: Dev mode controls in enabled (inactive) state.](https://www.palantir.com/docs/resources/foundry/custom-widgets/dev-mode-paused.png?width=350)

## Add and modify parameters and events

The parameters and events for a widget are typically defined in a `main.config.ts` file. This is type-safe so adding or modifying parameters and events can be done easily without errors. For more information on supported parameter types and events, see [parameters and events](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/).

Copied!

```
1// main.config.ts
2import { defineConfig } from "@osdk/widget.client";
3
4export default defineConfig({
5  id: "<Widget ID>", // The unique identifier of the widget within your project
6  name: "<Widget Name>", // A user friendly name for your widget
7  description: "<Widget Description>", // A user friendly description of your widget
8  type: "workshop",
9  parameters: {
10    headerText: {
11      displayName: "Widget title",
12      type: "string",
13    },
14    showWarning: {
15      displayName: "Show warning callout",
16      type: "boolean",
17    },
18    todoItems: {
19      displayName: "Todo items",
20      type: "array",
21      subType: "string",
22    },
23  },
24  events: {
25    updateHeader: {
26      displayName: "Update header",
27      parameterUpdateIds: ["headerText"],
28    },
29    updateTodoItems: {
30      displayName: "Update todo items",
31      parameterUpdateIds: ["todoItems"],
32    },
33  },
34});
```

Previewing parameter and event changes

With `@osdk/widget.vite-plugin` version `3.34.0` or later, dev mode previews changes to parameters and events without publishing a new version. Updated parameters and events appear in the custom widgets playground, in Code Workspaces, and in Workshop.

Parameter and event changes do not hot-reload like code changes. After you edit a configuration file, reapply dev mode to preview the changes. When developing locally, open the setup link printed in your terminal again. When developing in Code Workspaces, refresh the preview panel.

## Unsupported features

The custom widgets runtime does not support certain browser APIs for persisting data such as:

*   [Web Storage API ↗](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) (`localStorage`, `sessionStorage`)
*   [IndexedDB API ↗](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

To share state between multiple widgets on the page, use parameters configured through the host application (for example, variables in Workshop). To persist state, you may use saved states for Workshop variables, or write data to the ontology.

Non-Ontology APIs are also not supported in the custom widgets runtime.

The content security policy (CSP) of the custom widget runtime cannot be configured and is restrictive by design; no external requests are allowed. You may use Foundry resources to wrap external requests, such as functions and webhooks.
