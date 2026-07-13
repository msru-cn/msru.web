Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-widgets/additional-widget/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-widgets/additional-widget/#add-an-additional-widget-to-a-widget-set)Add an additional widget to a widget set

Widget sets allow you to publish multiple widgets from a single code repository for code sharing and performance optimizations. This page explains how to add an additional widget to a widget set and assumes a project structure starting from our provided templates using React, Vite, and [`@osdk/widget.vite-plugin` ↗](https://www.npmjs.com/package/@osdk/widget.vite-plugin).

A widget set can contain a maximum of 50 widgets.

The following example project structure is for a widget set containing two widgets:

```
repo/
├── src/
│   ├── first.tsx
│   ├── first.config.ts
│   ├── second.tsx
│   ├── second.config.ts
│   └── ...
│── first.html
│── second.html
│── vite.config.ts
└─ ...
```

## [](https://www.palantir.com/docs/foundry/custom-widgets/additional-widget/#define-an-additional-widget)Define an additional widget

Create a new TypeScript file to define the widget's metadata with `defineConfig` for type safety:

second.config.ts

Copied!

```text
1import { defineConfig } from "@osdk/widget.client";
2
3export default defineConfig({
4  id: "secondWidgetId",
5  name: "Second Widget",
6  description: "A second widget",
7  type: "workshop",
8  parameters: {
9    ...
10  },
11  events: {
12    ...
13  },
14});
```

Create a new TypeScript file as the entrypoint to render your widget, and provide the context for parameters and events:

second.tsx

Copied!

```text
1import { FoundryWidget } from "@osdk/widget.client-react";
2import { createRoot } from "react-dom/client";
3import Second from "./second.config.js";
4
5const root = document.getElementById("root")!;
6
7createRoot(root).render(
8  <FoundryWidget config={Second}>
9    {/* Render something for the widget! */}
10  </FoundryWidget>,
11);
```

## [](https://www.palantir.com/docs/foundry/custom-widgets/additional-widget/#include-the-additional-widget-in-the-widgets-manifest)Include the additional widget in the widgets manifest

Create a new HTML file to load the entrypoint script:

second.html

Copied!

```html
1<!DOCTYPE html>
2<html lang="en">
3    <head>
4        <meta charset="UTF-8" />
5        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
6        <title>Widget: Ontology SDK + React</title>
7    </head>
8    <body>
9        <script type="module" src="/src/second.tsx"></script>
10    </body>
11</html>
```

Configure Vite to include the new HTML file during builds:

vite.config.ts

Copied!

```text
1import foundryWidgetPlugin from "@osdk/widget.vite-plugin";
2import { defineConfig } from "vite";
3
4export default defineConfig({
5  plugins: [foundryWidgetPlugin()],
6  build: {
7    rollupOptions: {
8      input: ["./first.html", "./second.html"],
9    },
10  },
11});
```

The `.palantir/widgets.config.json` manifest file created in the production build of the widget set should now contain information about your additional widget.

## [](https://www.palantir.com/docs/foundry/custom-widgets/additional-widget/#publish-an-additional-widget)Publish an additional widget

Follow the instructions in our [documentation](https://www.palantir.com/docs/foundry/custom-widgets/publish/) to publish a new version of the widget set. Your additional widget will be available for use after publication. Note that you must have a first release of the additional widget before you can continue developing it.

[← PREVIOUS Parameters and events](https://www.palantir.com/docs/foundry/custom-widgets/parameters-and-events/)

[NEXT Add widget set to a Marketplace product →](https://www.palantir.com/docs/foundry/custom-widgets/marketplace/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

