Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/foundry-rules/marketplace/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/foundry-rules/marketplace/#add-foundry-rules-to-a-marketplace-products)Add Foundry Rules to a Marketplace products

Use [Foundry DevOps](https://www.palantir.com/docs/foundry/devops/overview/) to include your Foundry Rules workflow in [Marketplace products](https://www.palantir.com/docs/foundry/devops/core-concepts/#product) and enable other users to install and reuse them. [Learn how to create your first product](https://www.palantir.com/docs/foundry/foundry-devops/create-products/).

## [](https://www.palantir.com/docs/foundry/foundry-rules/marketplace/#supported-features)Supported features

All Foundry Rules features are supported.

## [](https://www.palantir.com/docs/foundry/foundry-rules/marketplace/#add-foundry-rules-workflows-to-products)Add Foundry Rules workflows to products

To add a Foundry Rules workflow to a product, first [create a product](https://www.palantir.com/docs/foundry/foundry-devops/create-products/) then select the **Workshop Application** content type, followed by your [Foundry Rules authoring application](https://www.palantir.com/docs/foundry/foundry-rules/author-and-run-a-rule/), as below.

![Image 5: Adding your Foundry Rules rules authoring application to your product](https://www.palantir.com/docs/resources/foundry/foundry-rules/add-fr-workfhop.png)

After adding your Workshop application, go to the **Foundry rules workflows** section in your product's inputs and include your workflow.

![Image 6: Adding the Foundry Rules workflow application to your product in the inputs section](https://www.palantir.com/docs/resources/foundry/foundry-rules/including-fr-workflow.png)

Once your workflow has been included, additional object type and action types will be included as inputs to your product. You will likely want to include both the `Rule` and `Proposal` object types, along with all of the generated action types to your product.

![Image 7: Adding the Rule and Proposal object types to your product](https://www.palantir.com/docs/resources/foundry/foundry-rules/fr-add-object-types.png)![Image 8: Adding the Foundry Rules generated action types to your product](https://www.palantir.com/docs/resources/foundry/foundry-rules/fr-add-action-types.png)

When setting your product's installation mode to `Production`, be sure to enable `Only allow edits via actions` for the `Rule` and `Proposal` object types in the `Datasources` tab of the Ontology Manager application. Without this step, users will encounter an `Actions:PermissionDenied` error when attempting to create a proposal.

[← PREVIOUS Troubleshooting reference](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/)

[NEXT Map / Overview →](https://www.palantir.com/docs/foundry/map/overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

