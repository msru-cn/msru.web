Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/contour/project-references/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/contour/project-references/#project-references)Project references

In Foundry, [Projects](https://www.palantir.com/docs/foundry/compass/move-and-share-resources/) define a conceptual boundary around related work as well as a security boundary for applying and managing access. Using data across project boundaries must be treated with extra care.

## [](https://www.palantir.com/docs/foundry/contour/project-references/#referencing-a-resource)Referencing a resource

Project references provide a mechanism for users with higher permissions - typically the owners of a dataset or pipeline - to allow the discovery and use of data in pipelines in other projects. Project references add an increased layer of scrutiny for moving persistently data between projects by explicitly acknowledging when a dataset is imported into a project.

To reference a resource, go to the [Project navigation panel](https://www.palantir.com/docs/foundry/compass/move-and-share-resources/) at the root level of the project. Click the **+Add** button to add a reference to a dataset. In the below image, the datasets `flights` and `training_data` are added as references in the project. This means that you can use `flights` and `training_data` as inputs to a saved dataset in a Contour analysis.

![Image 4: add-reference-project](https://www.palantir.com/docs/resources/foundry/contour/references-add.png)

*   To reference a resource, you must have `compass:import-resource-from` on the resource (usually expanded from the Viewer role) and `compass:import-resource-to` on the destination project (usually expanded from the Editor role).
*   These roles can be customized using Custom Roles.

## [](https://www.palantir.com/docs/foundry/contour/project-references/#project-scoped-analyses)Project-scoped analyses

In order to save a dataset at the end of your path in a project-scoped analysis, all inputs and outputs must be in project scope.

*   All input datasets to the path must be in project scope: they must be in the same project as the workbook, or added as a reference in the project.
*   The output dataset must be in the same project as the analysis.

See the project scope settings for an analysis in the Settings tab of the sidebar. Any input or output datasets that are out of scope will be listed in the project scoping dialog. You may choose to add a reference directly from the dialog.

![Image 5: contour-psj-settings](https://www.palantir.com/docs/resources/foundry/contour/references-psj-settings.png?width=300)
There is also a callout in the Result board when an input dataset is out of scope. Clicking **Add references** will open the project scoping dialog.

![Image 6: result-psj-warning](https://www.palantir.com/docs/resources/foundry/contour/references-psj-warning.png)

There is no need to add a reference to use an input dataset in a Contour analysis unless you are saving a resulting dataset.

## [](https://www.palantir.com/docs/foundry/contour/project-references/#enabling-project-scoping-on-your-analysis)Enabling project scoping on your analysis

For analyses created prior to project scoping being enabled by default, you can enable project scoping in the Settings sidebar panel. Before you can enable project scoping, you must address any out-of-scope inputs by adding a reference to inputs and any out-of-scope outputs by moving the output to the project for the analysis.

[← PREVIOUS Change input dataset version](https://www.palantir.com/docs/foundry/contour/change-dataset-version/)

[NEXT Export logic to Pipeline Builder →](https://www.palantir.com/docs/foundry/contour/convert-to-pipeline-builder/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

