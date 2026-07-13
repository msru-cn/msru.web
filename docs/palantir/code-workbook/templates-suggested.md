Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-workbook/templates-suggested/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-workbook/templates-suggested/#suggested-templates)Suggested templates

For groups of similar datasets, you may want to suggest templates to apply. For example, for a group of datasets containing monthly stock returns, you may want to suggest a template that calculates the annualized return. Suggested templates are shown in a separate button within the New Transform panel, making them more discoverable.

![Image 5: suggested-templates](https://www.palantir.com/docs/resources/foundry/code-workbook/suggested-templates.png)

## [](https://www.palantir.com/docs/foundry/code-workbook/templates-suggested/#configuring-input-tags-in-a-template)Configuring input tags in a template

Below, we see a template that calculates annualized returns from monthly returns. For any dataset with the tag **Finance**, this template will appear in the **Suggested** tab when the user creates a new transform with the dataset as a parent.

Configure the desired input tags in the **Input Tags** field when creating or editing a template. You can add multiple input tags.

![Image 6: configure-input-tags](https://www.palantir.com/docs/resources/foundry/code-workbook/configure-input-tags.png)

## [](https://www.palantir.com/docs/foundry/code-workbook/templates-suggested/#adding-tags-to-a-dataset)Adding tags to a dataset

One way to add input tags to a dataset is to open the dataset in Dataset-app. Note that because tags are tied to datasets, tags cannot be added to unpersisted transforms in Code Workbook. This means that Suggested Templates are not supported for unpersisted transforms.

![Image 7: add-tags-dataset-app](https://www.palantir.com/docs/resources/foundry/code-workbook/add-tags-dataset-app.png)

## [](https://www.palantir.com/docs/foundry/code-workbook/templates-suggested/#configuring-output-tags-in-a-multi-node-template)Configuring output tags in a multi-node template

Rather than adding tags manually from Dataset-app, you can configure output tags as part of a Multi-Node template.

Imagine a multi-node template with two nodes, where the output of the second node is a dataset with monthly stock returns. We'd like this dataset to automatically add the **Finance** tag, so templates with that input tag configured will appear under Suggested Templates.

While creating or editing the multi-node template, set the desired output tag under **Output tags**. When the multi-node template is applied, the output tag will immediately be added to a dataset created by the multi-node template.

![Image 8: mnt-output-tags](https://www.palantir.com/docs/resources/foundry/code-workbook/mnt-output-tags.png)

[← PREVIOUS Multi-node templates](https://www.palantir.com/docs/foundry/code-workbook/templates-multi-node/)

[NEXT Environment / Overview →](https://www.palantir.com/docs/foundry/code-workbook/environment-overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

