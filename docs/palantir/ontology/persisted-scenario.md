Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/ontology/persisted-scenario/

Published Time: Thu, 09 Jul 2026 17:47:57 GMT

# [](https://www.palantir.com/docs/foundry/ontology/persisted-scenario/#store-scenario-metadata-as-objects)Store scenario metadata as objects

You can define and store metadata of a scenario in the Ontology, where each object represents a scenario, to create a **persisted** scenario.

When stored in the Ontology, scenarios are shareable and collaborative. Teams can compare multiple persisted scenarios side-by-side, attach rich metadata including descriptions and authorship, and link scenarios to related objects for easy organization. Persisted scenarios inherit Foundry's permissions and governance model, ensuring proper access control, and create a durable audit trail of the decision-making process.

## [](https://www.palantir.com/docs/foundry/ontology/persisted-scenario/#configure-in-ontology-manager)Configure in Ontology Manager

To configure the scenario object type in Ontology Manager, follow the steps below:

1.   In Ontology Manager, navigate to the **Object types** tab and select **+ New object type**.

2.   Follow the configuration wizard. At step 3 (**Properties**), choose to **Add** an interface, then search for the **Ontology Scenario** interface. Ensure that **Scenario Reference** is mapped to the primary key of your object type, then complete the remaining steps. 

![Image 2: Persist scenario metadata in the Ontology.](https://www.palantir.com/docs/resources/foundry/ontology/persist-scenario-metadata-ontology-manager.png)

3.   Once the new object type is created, open the **Properties** tab and confirm that the **Primary Key** property has a value type of **Scenario Reference** assigned to it.

4.   Optionally, add additional properties to store metadata about the scenario, such as **Created By** or **Description**. Save the configuration and wait for the initial sync to complete.

## [](https://www.palantir.com/docs/foundry/ontology/persisted-scenario/#functions-on-a-scenario)Functions on a scenario

All functions, except AIP Logic functions, can be run on a scenario as is. If they are reading from the Ontology, they will read the state of the Ontology on the scenario. If they are making Ontology edits, they will make those edits on the scenario. Contact Palantir Support if you want to use AIP Logic on a scenario.

[← PREVIOUS Temporary scenarios](https://www.palantir.com/docs/foundry/ontology/temporary-scenario/)

[NEXT Merge scenarios →](https://www.palantir.com/docs/foundry/ontology/merge-scenario/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

