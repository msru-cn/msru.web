Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/ontology/merge-scenario/

Published Time: Thu, 09 Jul 2026 17:47:57 GMT

# [](https://www.palantir.com/docs/foundry/ontology/merge-scenario/#merge-scenarios)Merge scenarios

Scenarios are merged through action types that provide granular control over the scenario edits and enforce fine-grained execution permissions. At minimum, the merge action requires the single **Scenario** parameter, which is the RID of the scenario and includes all actions executed on the scenario. The parameter value can be passed from a Workshop variable or OSDK application.

## [](https://www.palantir.com/docs/foundry/ontology/merge-scenario/#apply-edits-on-a-scenario)Apply edits on a scenario

When working within a scenario, all edits (creating objects, modifying properties, deleting objects, and adding or removing links) exist only within that scenario's isolated sandbox. These edits do not affect the main Ontology. Applying the scenario commits all those staged edits to the Ontology as a single transaction via the merge action.

## [](https://www.palantir.com/docs/foundry/ontology/merge-scenario/#configure-the-merge-action)Configure the merge action

1.   In **Ontology Manager**, navigate to the **Action types** tab and select **+ New action type**. In the creation wizard, select the **Scenario** tab.
2.   Within the **Scenario** tab, define the scope of your scenario edits by adding the relevant **Object types** and **Link types**. 

![Image 3: Create a new action type dialog showing the Scenario tab with Object type and Link type selection fields for configuring a merge action.](https://www.palantir.com/docs/resources/foundry/ontology/merge-scenario-action.png)

3.   After completing the wizard, open the **Security & Submission Criteria** tab of the newly created action to define which users are permitted to execute the merge action.

If you have an existing action that you want to use as a merge action, you can add an **Apply Scenario**[rule](https://www.palantir.com/docs/foundry/action-types/rules/) to it from the **Rules** tab in the action configuration in Ontology Manager, rather than creating a new action type.

![Image 4: Scenario parameter in Apply Scenario rule in Ontology Manager.](https://www.palantir.com/docs/resources/foundry/ontology/merge-scenario-parameter.png)

[← PREVIOUS Store scenario metadata as objects](https://www.palantir.com/docs/foundry/ontology/persisted-scenario/)

[NEXT Use scenarios with OSDK →](https://www.palantir.com/docs/foundry/ontology/osdk-scenario/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

