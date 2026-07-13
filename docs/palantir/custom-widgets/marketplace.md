Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-widgets/marketplace/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-widgets/marketplace/#add-widget-set-to-a-marketplace-product)Add widget set to a Marketplace product

Use [Foundry DevOps](https://www.palantir.com/docs/foundry/devops/overview/) to include your widget set in [Marketplace products](https://www.palantir.com/docs/foundry/devops/core-concepts/#product) for other users to install and reuse. [Learn how to create your first product.](https://www.palantir.com/docs/foundry/foundry-devops/create-products/)

## [](https://www.palantir.com/docs/foundry/custom-widgets/marketplace/#supported-features)Supported features

All Custom Widgets features are supported by Marketplace products with the exception of:

*   Modifying installed source code in a Foundry code repository to develop and publish new versions. Source code in installed Foundry code repositories is available for debugging purposes only and not compatible for development.
*   Automatically enabling Ontology APIs during installation.
*   Ontology resources with different API names. All ontology resources must use the same API names as the source, either by installing without prefixes, or by mapping inputs to existing ontology resources.
*   Using versioned functions with the Ontology SDK. Only the latest version of a function is supported.

## [](https://www.palantir.com/docs/foundry/custom-widgets/marketplace/#adding-custom-widgets-widget-sets-to-products)Adding Custom Widgets widget sets to products

To add a Custom Widgets widget set to a product, first [create a product](https://www.palantir.com/docs/foundry/foundry-devops/create-products/), then [add outputs](https://www.palantir.com/docs/foundry/foundry-devops/create-products/#add-outputs). Choose the **Add files** option to navigate to the widget set from within the [Compass](https://www.palantir.com/docs/foundry/compass/overview/) filesystem and add it to your product.

Alternatively, if you have a [Workshop application](https://www.palantir.com/docs/foundry/workshop/overview/) that embeds a widget set, you can add the Workshop module to the product and the widget set will be included automatically.

A minimum version of [`@osdk/widget.vite-plugin` ↗](https://www.npmjs.com/package/@osdk/widget.vite-plugin) of `3.1.0` is required. If a previously published widget set version uses an older version of the vite plugin, first update the vite plugin version in the source code project, then republish a new widget set version before including in DevOps.

## [](https://www.palantir.com/docs/foundry/custom-widgets/marketplace/#manually-enable-ontology-apis-after-installation)Manually enable Ontology APIs after installation

Widget sets using Ontology SDK (OSDK) require a one-time manual configuration after installation to enable Ontology APIs. This configuration persists across product upgrades. For detailed instructions, see [Use Ontology SDK (OSDK) in a widget set](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/).

[← PREVIOUS Add an additional widget to a widget set](https://www.palantir.com/docs/foundry/custom-widgets/additional-widget/)

[NEXT Dark theme support →](https://www.palantir.com/docs/foundry/custom-widgets/dark-theme/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

