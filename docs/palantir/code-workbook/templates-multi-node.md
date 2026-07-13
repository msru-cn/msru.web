Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-workbook/templates-multi-node/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-workbook/templates-multi-node/#multi-node-templates)Multi-node templates

Code Workbook supports multi-node templates for templatized workflows. A template can be created from multiple other templates, and you can bind the values of parameters in these templates together.

Let's walk through an example using `titanic_dataset`. We will templatize a workflow selecting two numeric columns and plotting them in two graphs. The first graph is a scatterplot of the two numeric columns. The second plot is a histogram of whether or not the passengers survived, based on filtering on the numeric columns.

Here's a visual overview of the workflow we are templatizing:

![Image 11: mnt_workflow.png](https://www.palantir.com/docs/resources/foundry/code-workbook/mnt_workflow.png)

## [](https://www.palantir.com/docs/foundry/code-workbook/templates-multi-node/#creating-templates)Creating Templates

First, create a template selecting two numeric columns from the input dataset, along with `Survived`. Title this template `Filter`.

![Image 12: filter_template](https://www.palantir.com/docs/resources/foundry/code-workbook/filter_template.png)

Second, create a template plotting a scatterplot of the two numeric columns. Title this template `Scatterplot`. Note that the input dataset is set to be read in as a Pandas dataframe.

![Image 13: scatterplot_template](https://www.palantir.com/docs/resources/foundry/code-workbook/scatterplot_template.png)

Finally, create a template that filters the input dataset based on the two numeric columns and two templatized inputs. Note that the input dataset is set to be read in as a Spark dataframe.

![Image 14: filter_then_histogram](https://www.palantir.com/docs/resources/foundry/code-workbook/filter_then_histogram.png)

## [](https://www.palantir.com/docs/foundry/code-workbook/templates-multi-node/#creating-multi-node-templates)Creating Multi-Node Templates

Select all three templates and right-click to open the menu, then select **Create new template**. You should now see the template editor.

![Image 15: creating_multi_node_template](https://www.palantir.com/docs/resources/foundry/code-workbook/creating_multi_node_template.png)

We want to link the values of the `col1` parameters, and link the values of the `col2` parameters. First, click into the `Filter` template. Click into `col1`, and select **Create shared parameter** in the dropdown.

![Image 16: shared-mnt-parameter](https://www.palantir.com/docs/resources/foundry/code-workbook/shared-mnt-parameter.png)

On the right-hand side, a new parameter titled `col1` has been created. Select `titanic_dataset` as the source dataset in the right-hand pane. Then, click into the two other templates and choose to link `col1` to the new `col1` Multi-Node Template parameter. Repeat for `col2`, and then save the multi-node template.

## [](https://www.palantir.com/docs/foundry/code-workbook/templates-multi-node/#using-multi-node-templates)Using Multi-Node Templates

The three templates we previously created are now part of a multi-node template.

Click into the `Filter` template. Next to the `col1` and `col2` parameters, there is an icon indicating this parameter value is controlled by the multi-node template parameter.

![Image 17: mnt_logic_pane_1](https://www.palantir.com/docs/resources/foundry/code-workbook/mnt_logic_pane_1.png)

Select `View Group` at the top of the pane. You now see a view highlighting the nodes in the Multi-Node Template, and listing the shared parameters in the template. You can change the value of `col1` and `col2` in this view, and all instances in the three nodes will also be changed.

![Image 18: mnt_logic_pane_2](https://www.palantir.com/docs/resources/foundry/code-workbook/mnt_logic_pane_2.png)

If you change the value of a shared parameter in the child node pane, the value will also be changed for all instances in the multi-node template.

Let's add a new instance of this template.

![Image 19: add-new-mnt-titanic.png](https://www.palantir.com/docs/resources/foundry/code-workbook/add-new-mnt-titanic.png)

Let's analyze `Fare` and `PClass`. By selecting these two columns in the view for the child node, notice that you're setting the column values across the group.

![Image 20: mnt_workflow_new_instance](https://www.palantir.com/docs/resources/foundry/code-workbook/mnt_workflow_new_instance.png)

Then, update the cutoff values in `Filter then histogram`. Run the templates, and we've now created the same graphs for a different set of numeric columns.

[← PREVIOUS Getting started](https://www.palantir.com/docs/foundry/code-workbook/templates-getting-started/)

[NEXT Suggested templates →](https://www.palantir.com/docs/foundry/code-workbook/templates-suggested/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

