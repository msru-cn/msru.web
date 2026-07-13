Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/marketplace-schedules/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/marketplace-schedules/#add-schedule-to-a-marketplace-product)Add schedule to a Marketplace product

Use [Foundry DevOps](https://www.palantir.com/docs/foundry/devops/overview/) to include your schedules in [Marketplace products](https://www.palantir.com/docs/foundry/devops/core-concepts/#product) for other users to install and reuse. [Learn how to create your first product.](https://www.palantir.com/docs/foundry/foundry-devops/create-products/)

## [](https://www.palantir.com/docs/foundry/building-pipelines/marketplace-schedules/#supported-features)Supported features

We support including schedules in Marketplace products that satisfy the following:

*   The schedule is not user-scoped.
*   The schedule does not have [fallback branches](https://www.palantir.com/docs/foundry/code-repositories/branch-settings/#fallback-branches).
*   All [triggers](https://www.palantir.com/docs/foundry/building-pipelines/triggers-reference/) should be defined for the same branch.
*   No [triggers](https://www.palantir.com/docs/foundry/building-pipelines/triggers-reference/) or [target](https://www.palantir.com/docs/foundry/building-pipelines/create-schedule/#target-datasets) datasets are [Restricted Views](https://www.palantir.com/docs/foundry/security/restricted-views/).

We strongly recommended that all packaged datasets (excluding static datasets) have a corresponding schedule that builds the dataset as a target. If datasets are included without a schedule, the dataset and anything downstream will become stale.

## [](https://www.palantir.com/docs/foundry/building-pipelines/marketplace-schedules/#adding-schedules-to-products)Adding schedules to products

To add a schedule to a product, first [create a product](https://www.palantir.com/docs/foundry/foundry-devops/create-products/), then [add outputs](https://www.palantir.com/docs/foundry/foundry-devops/create-products/#add-outputs). Choose the **Schedule** output type.

If you have not yet added any [pipelines](https://www.palantir.com/docs/foundry/pipeline-builder/marketplace-pipeline-builder/) or [dataset transformations](https://www.palantir.com/docs/foundry/code-repositories/marketplace-dataset-transformation/), you will not have any schedules to select. Given this, we typically recommend adding these resource types first. Once you have added a pipeline or dataset transformation, view the **Datasets** content type to review which datasets will not be built, and schedules you could add to your product to remedy this.

![Image 3: add highlighted schedule](https://www.palantir.com/docs/resources/foundry/building-pipelines/marketplace-add-highlighted-schedules.png)

Select any relevant schedules to include with your product. If you don't see any schedules, you should [create one with your source datasets](https://www.palantir.com/docs/foundry/building-pipelines/create-schedule/) and then [create a new version of your product](https://www.palantir.com/docs/foundry/foundry-devops/manage-products/).

![Image 4: add schedule dialog](https://www.palantir.com/docs/resources/foundry/building-pipelines/marketplace-schedule-dialog.png)

[← PREVIOUS Troubleshooting reference](https://www.palantir.com/docs/foundry/building-pipelines/schedule-troubleshooting/)

[NEXT Parameterization →](https://www.palantir.com/docs/foundry/building-pipelines/parameterization/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

