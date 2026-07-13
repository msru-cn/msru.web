Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/ontology-manager/view-usage/

Published Time: Thu, 09 Jul 2026 17:47:57 GMT

# [](https://www.palantir.com/docs/foundry/ontology-manager/view-usage/#ontology-metrics)Ontology metrics

The Ontology Manager can be configured to show usage metrics for object types and link types.

## [](https://www.palantir.com/docs/foundry/ontology-manager/view-usage/#key-terminology)Key terminology

*   **Reads:** A read is recorded when an application loads objects for a specified object type. This can include displaying objects in a table in Workshop, returning all objects from search for a given object type, aggregating a property on an object type, and so on. Note that one read represents one load request from [Object Storage V1 (Phonograph)](https://www.palantir.com/docs/foundry/object-databases/object-storage-v1/) or the Object Set Service (OSS). Many objects loaded or aggregated at once will only be recorded as a single read. Also note that any object type or link type usage happening in Ontology Manager is not included.
*   **Writes:** A write is recorded when an application makes edits to objects of this type as the result of an [Action](https://www.palantir.com/docs/foundry/action-types/overview/), [Function](https://www.palantir.com/docs/foundry/functions/overview/), Foundry Form, direct Object Explorer edit, or API call. Note that one write represents one edit request sent to [Object Storage V1 (Phonograph)](https://www.palantir.com/docs/foundry/object-databases/object-storage-v1/). Many objects edited in bulk at once will only be recorded as a single write.
*   **Interactions:** The total number of reads and writes on objects of this type over the last 30 days.
*   **Active users:** The number of unique user IDs that triggered the reads and writes recorded over the last 30 days.

## [](https://www.palantir.com/docs/foundry/ontology-manager/view-usage/#viewing-usage)Viewing usage

There are two places in the Ontology Manager to view object type and link type usage:

*   A usage graph on the **Overview** tab: High-level summary of usage over the last 30 days, enabling Ontology users to quickly understand the implications of making a breaking change to this resource.

![Image 3: Usage graph on the overview tab](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-user-interface-overview-usage.png)

Warning

If you see “No usage for the last 30 days” in the usage graph when you would expect to see usage statistics, then it’s possible that internal tables may not have been configured. Contact your Palantir representative for more information.

*   A dedicated **Usage** tab: Detailed usage metrics for resources. Users can see, over the last 30 days, who has used each object type, when, and in which Foundry applications. The feature is intended to help Ontology users make Ontology changes more safely by providing a clearer understanding of a change's impact. The **Usage** tab can also be accessed by clicking **See more** on the usage graph in the **Overview** tab.

![Image 4: Usage tab](https://www.palantir.com/docs/resources/foundry/ontology-manager/oma-user-interface-usage-tab.png)

## [](https://www.palantir.com/docs/foundry/ontology-manager/view-usage/#enabling-ontology-usage)Enabling Ontology usage

Usage on the **Overview** tab and detailed usage metrics in the **Usage** tab are configured from the **Ontology settings** tab in Control Panel using the **Ontology metrics** toggle. This toggle can only be enabled or disabled by Ontology administrators and changes may take up to 60 minutes to take effect in Ontology Manager.

## [](https://www.palantir.com/docs/foundry/ontology-manager/view-usage/#shared-ontology-usage)Shared Ontology usage

If your organization shares an Ontology with another organization, then the **Usage** tab will be accessable by users of all organizations that have the Ontology metrics turned on. The usage metrics displayed only includes the usage from users who have access to the object type and those who are from organizations that have the Ontology metrics enabled. See the steps outlined in [Enabling Ontology usage](https://www.palantir.com/docs/foundry/ontology-manager/view-usage/#enabling-ontology-usage) for more information.

[← PREVIOUS Navigation](https://www.palantir.com/docs/foundry/ontology-manager/navigation/)

[NEXT Migrate to project-based permissions →](https://www.palantir.com/docs/foundry/ontology-manager/migrate-to-project-based-permissions/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

