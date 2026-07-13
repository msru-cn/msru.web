Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/marketplace-virtual-tables/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/marketplace-virtual-tables/#add-virtual-tables-to-a-marketplace-product)Add virtual tables to a Marketplace product

Use [Foundry DevOps](https://www.palantir.com/docs/foundry/devops/overview/) to include your [virtual table](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/) in a [Marketplace product](https://www.palantir.com/docs/foundry/devops/core-concepts/#product) for other users to install and reuse. [Learn how to create your first product.](https://www.palantir.com/docs/foundry/foundry-devops/create-products/)

## [](https://www.palantir.com/docs/foundry/data-connection/marketplace-virtual-tables/#supported-features)Supported features

All virtual tables may be packaged and synced.

Currently, packaging an individual source is not supported, nor is packaging a source that has auto-registration of virtual tables enable.

Installers must ensure the destination source contains a table at the same location with the same schema as the original source to guarantee compatibility and functionality.

## [](https://www.palantir.com/docs/foundry/data-connection/marketplace-virtual-tables/#adding-virtual-tables-to-products)Adding virtual tables to products

To add a virtual table to a product, first [create a product](https://www.palantir.com/docs/foundry/foundry-devops/create-products/), then [add outputs](https://www.palantir.com/docs/foundry/foundry-devops/create-products/#add-outputs). Choose the **Add files** option to navigate to the virtual table from within the [Compass](https://www.palantir.com/docs/foundry/compass/overview/) filesystem and add it to your product.

You can then select which virtual tables you would like to include in your product.

![Image 2: Selecting a virtual table for your product](https://www.palantir.com/docs/resources/foundry/data-connection/marketplace-virtual-table-selection.png)

[← PREVIOUS Add sync to a Marketplace product](https://www.palantir.com/docs/foundry/data-connection/marketplace-data-connection/)

[NEXT Legacy documentation / Set up a direct connection →](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

