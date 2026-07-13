Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/#foundry-rules-workflow-configuration)Foundry Rules workflow configuration

The **workflow configuration editor** is used when making changes to how the entire Foundry Rules workflow is configured; for example, when adding new [inputs](https://www.palantir.com/docs/foundry/foundry-rules/rule-logic/#inputs) so that they may be used by rule authors, or when modifying [workflow outputs](https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/#workflow-outputs). The workflow configuration editor can be accessed from the [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/) once a Foundry Rules workflow has been [deployed](https://www.palantir.com/docs/foundry/foundry-rules/deploy-foundry-rules/). The Foundry Rules workflow is tied to a Project and shows as a resource in your Project folder. This controls permissions to the workflow configuration and allows users to rename, move, or delete the workflow.

## [](https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/#workflow-inputs)Workflow inputs

As explained in the [rule logic inputs](https://www.palantir.com/docs/foundry/foundry-rules/rule-logic/#inputs) section, the **Inputs** pane of the configuration editor is where workflow owners may add additional inputs for use by rule authors. When adding object inputs, the owner may also select which associated link types they wish to make available.

![Image 5: Foundry Rules workflow inputs](https://www.palantir.com/docs/resources/foundry/foundry-rules/workflow_inputs.png)

## [](https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/#workflow-outputs)Workflow outputs

Workflow outputs specify the destination and format for the output of all the Foundry rules in the workflow. Each output corresponds to a different **Foundry dataset** which, when built, will contain the results from all Foundry rules that reference it. Within each output, the name and type of the output columns can be configured. You can also restrict what values the output column [permits and takes as default](https://www.palantir.com/docs/foundry/foundry-rules/permitted-and-default-output-values/).

![Image 6: Foundry Rules workflow output](https://www.palantir.com/docs/resources/foundry/foundry-rules/workflow_outputs.png)

## [](https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/#transform-configuration)Transform configuration

This section contains additional information for configuring the **Transform** that generates the results of the Foundry rules. It includes the location of the rule status dataset as well as any **Spark profiles** applied to the transform. This section represents advanced configuration and can be ignored when first setting up a Foundry Rules workflow.

![Image 7: Foundry Rules transform configuration](https://www.palantir.com/docs/resources/foundry/foundry-rules/transform_config.png)

## [](https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/#rule-execution)Rule execution

The Foundry Rules workflow configuration also generates a transforms pipeline to apply the rules. The transforms pipeline is where the rules take effect; for instance, by creating alerts or categorizing/tagging data. The [Data Lineage](https://www.palantir.com/docs/foundry/data-lineage/overview/) graph below outlines an example Foundry Rules pipeline; the exact structure of a pipeline depends on the use case and may vary significantly based on need and circumstance.

![Image 8: Data Lineage graph showing the objects backing & writeback datasets, datasets to write rules against, and outputs of rules](https://www.palantir.com/docs/resources/foundry/foundry-rules/foundry_rules_data_lineage.png)

The pipeline takes the datasets backing the [workflow inputs](https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/#workflow-inputs) together with the writeback dataset of rules and applies these rules to the inputs. It then populates the output datasets specified by the [workflow outputs](https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/#workflow-outputs) with the rows output by the rules.

[← PREVIOUS Rule logic](https://www.palantir.com/docs/foundry/foundry-rules/rule-logic/)

[NEXT Deploy / Overview →](https://www.palantir.com/docs/foundry/foundry-rules/deploy-foundry-rules/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

