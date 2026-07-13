Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/foundry-rules/configure-workflow/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/foundry-rules/configure-workflow/#configure-workflow)Configure workflow

Once you finish [deploying the workflow template](https://www.palantir.com/docs/foundry/foundry-rules/deploy-workflow/), the following steps will guide you through the process of [configuring your workflow](https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/).

1.   **Access existing rule:** From the Foundry Rules home page, choose from a list of existing rules by selecting the item. Alternatively, you may also navigate and select it from its respective project found in **Files**. 

![Image 7: List of existing rules in Foundry Rules](https://www.palantir.com/docs/resources/foundry/foundry-rules/overview@2x.png?width=0.50)

2.   **Add workflow inputs:** With the rule in view, select the **Add Input** button to add an object or dataset input to the workflow. This will become usable as an input to the rule authored in the next section.

    *   You can add as many inputs here as you wish, but all workflows must contain at least one input.
    *   When adding object type inputs, the link types section will appear below each object type. Any links selected will become usable in the [Rules Management application](https://www.palantir.com/docs/foundry/foundry-rules/workshop-application/) for joining together different objects. 

![Image 8: Button to add a new Workflow Input](https://www.palantir.com/docs/resources/foundry/foundry-rules/add_workflow_input.png)

Objects backed by a restricted view cannot be used as inputs directly. Instead, configure the dataset which backs the restricted view as an [alternate backing dataset](https://www.palantir.com/docs/foundry/foundry-rules/configure-workflow/#alternate-backing-datasets).

1.   **Add workflow outputs:** In the third section of the editor, click **Add Dataset Output** and provide a name and location for the dataset where the rule results will be output. 

![Image 9: Button to add a new Workflow Output](https://www.palantir.com/docs/resources/foundry/foundry-rules/add_workflow_output.png)

    *   Provide a name for the output that will be displayed to rule authors in the **Rules Management application** (a).
    *   Click **Add column** to add at least one column to the output (b). Give this column a name to be used in the dataset and a display name to show to rule authors in the rules application. You can configure the type of column and determine whether it is required to provide this column when authoring a rule. Learn more about [permitted and default output values](https://www.palantir.com/docs/foundry/foundry-rules/permitted-and-default-output-values/).
    *   Add a column for each piece of information you wish to capture from the results of your rule. For example, an alerting workflow may have columns for `Alert ID`, `Severity`, and `Assignee` as well as a column to capture an identifier for the object that triggered the alert (e.g. `Machine ID`). 

![Image 10: Configuring the Workflow Output](https://www.palantir.com/docs/resources/foundry/foundry-rules/workflow_output_configuration.png)

2.   **Save the workflow:** In the top right of the configuration editor, click the save button.

    *   After saving the workflow, you should see a green banner appear at the top of the editor, signifying that the [transforms pipeline](https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/#rule-execution) has been created successfully. 

![Image 11: Banner showing that the transforms pipeline has been created successfully](https://www.palantir.com/docs/resources/foundry/foundry-rules/transforms-pipeline-success-banner.png)

After completing the above steps, learn how to [author and run a rule](https://www.palantir.com/docs/foundry/foundry-rules/author-and-run-a-rule/).

## [](https://www.palantir.com/docs/foundry/foundry-rules/configure-workflow/#advanced-configurations)Advanced configurations

### [](https://www.palantir.com/docs/foundry/foundry-rules/configure-workflow/#alternate-backing-datasets)Alternate backing datasets

You can configure an object input with an alternate backing dataset. This means your rules are evaluated against the supplied alternate backing dataset instead of the writeback (or backing) dataset configured in the Ontology.

This is useful when:

*   Writing rules on restricted view-backed objects
*   Running rules on a subset of the Object's backing data 

![Image 12: Configuring an alternate backing dataset](https://www.palantir.com/docs/resources/foundry/foundry-rules/configuring_alternate_backing_datasets.png?width=800)

[← PREVIOUS Deploy workflow](https://www.palantir.com/docs/foundry/foundry-rules/deploy-workflow/)

[NEXT Author and run a rule →](https://www.palantir.com/docs/foundry/foundry-rules/author-and-run-a-rule/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

