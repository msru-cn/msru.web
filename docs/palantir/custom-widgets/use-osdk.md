Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/#use-ontology-sdk-osdk-in-a-widget-set)Use Ontology SDK (OSDK) in a widget set

You can use OSDK in a widget set by following the steps outlined in each section below.

## [](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/#configure-an-osdk-for-your-widget-set)Configure an OSDK for your widget set

To configure an Ontology SDK (OSDK) for your widget set, navigate to the overview page of your widget set and then select **Configure SDK** in the top bar on the page.

![Image 3: Configure SDK options.](https://www.palantir.com/docs/resources/foundry/custom-widgets/configure-sdk.png)

Then, select an ontology and the specific resources that you would like to access from your widget.

### [](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/#enable-ontology-apis)Enable Ontology APIs

You also need to enable the Ontology APIs for your widget set so that API calls made from the OSDK can succeed. This action can be performed by a user with the **Information Security Officer** default enrollment role. Alternatively, a user with a custom enrollment role that grants the **Enable widget set unscoped API access** workflow can also perform this action.

## [](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/#install-the-osdk-in-your-widget)Install the OSDK in your widget

After the above steps have been completed, you can start using your OSDK in your widget set. To do so, ensure that `@custom-widget/sdk` is listed in your package.json and properly installed using the following JSON:

JSON

Copied!

```json
1{
2    // ...
3    "dependencies": {
4        // ...
5        "@custom-widget/sdk": "latest"
6    }
7}
```

If you selected the **In Foundry** option during creation, then you are using a Foundry code repository. Your project `.npmrc` file should already be set up to resolve NPM dependencies including your OSDK package from Foundry and this file **should not be modified**.

If you selected the **Outside of Foundry** option and did not generate an OSDK package during creation, you must manually configure NPM to be able to resolve your OSDK package from Foundry. This can be done by setting up a `.npmrc` file in your project root with the following contents:

```
//<EXAMPLE>.palantirfoundry.com/artifacts/api/:_authToken=${FOUNDRY_TOKEN}
@custom-widget:registry=https://<EXAMPLE>.palantirfoundry.com/artifacts/api/repositories/<ri.widgetregistry..widget-set.LOCATOR>/contents/release/npm/
```

The above snippet tells NPM to resolve the `@custom-widget` scope from Foundry and auth with the `FOUNDRY_TOKEN` environment variable. You should replace the `<EXAMPLE>` and `<ri.widgetregistry..widget-set.LOCATOR>` placeholders with the specific values for your Foundry instance and widget set RID.

## [](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/#configure-the-osdk-in-your-widget)Configure the OSDK in your widget

Ensure that your client is configured with the `baseUrl` set to `window.location.origin`. You can use the `createFoundryWidgetTokenProvider()` helper to provide a placeholder value for the auth token, as any access to the ontology would use the user's token and adhere to the user's permissions at runtime. Review the following code snippet:

TypeScript

Copied!

```text
1import { createClient } from "@osdk/client";
2import { $ontologyRid } from "@custom-widget/sdk";
3import { createFoundryWidgetTokenProvider } from "@osdk/widget.client";
4
5const client = createClient(
6    window.location.origin,
7    $ontologyRid,
8    createFoundryWidgetTokenProvider(),
9);
```

## [](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/#use-the-osdk)Use the OSDK

Refer to your OSDK's documentation to learn more about usage by selecting the **SDK docs** option on the top bar of your widget set.

![Image 4: SDK docs option.](https://www.palantir.com/docs/resources/foundry/custom-widgets/view-sdk-docs.png)

## [](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/#refresh-host-data-on-action)Refresh host data on action

When a widget applies an Ontology action using OSDK that modifies data backing an object set parameter, the host application's data can become stale.

To address this, you can enable the `refreshHostDataOnAction` option, which causes the host application (such as Workshop) to automatically refresh any object set parameters passed to the widget after it applies an Ontology action. No additional configuration is required from the application builder in Workshop.

Newly-created widget sets have this option enabled at the plugin level by default. For existing widget sets, you can enable it manually as described below.

To set this as the default for all widgets in a widget set, configure the `defaults` option in the Vite plugin:

vite.config.ts

Copied!

```text
1import FoundryWidgetPlugin from "@osdk/widget.vite-plugin";
2import { defineConfig } from "vite";
3
4export default defineConfig({
5    plugins: [
6        FoundryWidgetPlugin({
7            defaults: {
8                refreshHostDataOnAction: true,
9            },
10        }),
11    ],
12});
```

To override the plugin-level default for an individual widget, set `refreshHostDataOnAction` in the widget configuration file:

myWidget.config.ts

Copied!

```text
1import { defineConfig } from "@osdk/widget.client";
2
3export default defineConfig({
4    id: "myWidget",
5    name: "My Widget",
6    description: "An example widget",
7    type: "workshop",
8    refreshHostDataOnAction: false, // overrides the plugin-level default
9    parameters: {},
10    events: {},
11});
```

## [](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/#limitations)Limitations

Currently, widgets do not support the following Foundry API features:

*   Object set subscriptions
*   Non-Ontology APIs

[← PREVIOUS Publish a widget set](https://www.palantir.com/docs/foundry/custom-widgets/publish/)

[NEXT Parameters and events →](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

