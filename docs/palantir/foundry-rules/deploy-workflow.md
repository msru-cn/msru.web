Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/foundry-rules/deploy-workflow/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/foundry-rules/deploy-workflow/#deploy-workflow)Deploy workflow

You can deploy a new Foundry Rules workflow from within the Rules application. From the application, generate the [required objects](https://www.palantir.com/docs/foundry/foundry-rules/object-model/) and Actions for your workflow.

1.   **Deploy a new Rules workflow:** Find and select the Foundry Rules application in the sidebar, then select **Rule-based data pipeline**. 

![Image 6: Button in the Rules application to deploy Foundry Rules](https://www.palantir.com/docs/resources/foundry/foundry-rules/rules-workflow-create@2x.png?width=0.50)

2.   **Provide configuration:** The application will create a new project for you that includes the relevant backing datasets, Foundry Rules workflow, and Workshop application resource. 

![Image 7: Rules Workflow configuration page](https://www.palantir.com/docs/resources/foundry/foundry-rules/rules_workflow_deployment_configuration@2x.png?width=0.50)

    *   Choose the relevant [space](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/).
    *   Choose the relevant [Ontology](https://www.palantir.com/docs/foundry/ontology/overview/). If you have multiple Ontologies, select the Ontology that contains all the object types on which you would like to define your rules.
    *   The Rule editor group is used for the submission criteria of the actions. Users in this group are able to create proposals to add, edit, delete rules, and also, to decide on proposals. This configuration is meant as a starting point as you can configure the submission criteria on the rule actions later. To change the submission criteria on the action types, review the [FAQ](https://www.palantir.com/docs/foundry/foundry-rules/deploy-workflow/#faq).

3.   **Deploy:** Once the fields have been completed, select **Deploy**. The deploy process takes about two to three minutes in the background during which you can safely navigate away. Pending and completed installations can be found on the main page under **Pending installations** or **Existing Rule Workflows**. All workflows have the default name "Foundry Rules Workflow" and a timestamp in the list of existing workflows. You may rename the workflow by renaming the corresponding resource in your project folder. 

![Image 8: Rules Workflow configuration page](https://www.palantir.com/docs/resources/foundry/foundry-rules/rules_workflow_deploy_pending.png)

After completing the above steps, learn how to [configure the workflow](https://www.palantir.com/docs/foundry/foundry-rules/configure-workflow/).

## [](https://www.palantir.com/docs/foundry/foundry-rules/deploy-workflow/#faq)FAQ

### [](https://www.palantir.com/docs/foundry/foundry-rules/deploy-workflow/#how-do-i-change-the-submission-criteria-on-the-action-types)How do I change the submission criteria on the action types?

To update your submission criteria on the action types, navigate to the Workshop application, select **Edit**. Then, review the Rule Editor configuration panel on the right as shown below.

![Image 9: Workshop application Rule editor configuration panel screen](https://www.palantir.com/docs/resources/foundry/foundry-rules/workshop-application-config-panel.png)

Then, hover your cursor over the "i" icon inline with the **Create add proposal action**'s "Create a proposal to add a rule" dropdown option.

From the new pop up, select **View Action Configuration**.

![Image 10: Create a proposal to add a rule pop-up](https://www.palantir.com/docs/resources/foundry/foundry-rules/view-action-configuration.png)

From here, you will be able to change the [submission criteria](https://www.palantir.com/docs/foundry/action-types/submission-criteria/).

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/foundry-rules/deploy-foundry-rules/)

[NEXT Configure workflow →](https://www.palantir.com/docs/foundry/foundry-rules/configure-workflow/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

