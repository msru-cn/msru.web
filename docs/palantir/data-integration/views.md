Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-integration/views/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-integration/views/#views)Views

A **View** behaves similarly to a Foundry [dataset view](https://www.palantir.com/docs/foundry/data-integration/datasets/#dataset-views), but it does not hold any files containing data. Instead, it is composed of the union of other datasets (known as backing datasets) when it is read. Views can be thought of as "pointing" to their backing datasets.

Views can also automatically perform deduplication of data with the addition of a primary key. If any of a View's backing datasets have new data, a build will be automatically triggered to ensure that the latest data is available after deduplication. Views build like regular datasets but complete almost instantly since no data is actually read or written as part of the build.

Generally, you can use Views like regular datasets. However, Views cannot be specified as valid transform _outputs_; instead, they can be specified as valid transform _inputs_.

Additionally, Views can only be used with datasets that have a schema, since Views operates with rows.

Views built over incremental datasets should not be used as incremental inputs in downstream transforms. When Views are read incrementally, the deduplication is done within the incrementally read transaction range and not across the entire View.

![Image 10: A diagram of how Views are built.](https://www.palantir.com/docs/resources/foundry/data-integration/views-overview.png)

Some primary use cases for views include the following:

*   **Automatic updates:** Create a union dataset that is always up-to-date without having to perform a transform.
*   **Folder organization:** Replicate a dataset in a different location without incurring additional compute and storage costs.
*   **Data uniqueness:** Automatically guarantee data with primary key deduplication without transforms.

## [](https://www.palantir.com/docs/foundry/data-integration/views/#create-a-view)Create a View

To create a new View, open **Files** from the left workspace navigation panel, then find your desired Project or folder. Once there, select **New > View** in the top right to create a new View within the current Project or folder:

![Image 11: Create a new View in a Project or folder.](https://www.palantir.com/docs/resources/foundry/data-integration/views-create-new.png)

Choose a name and location for the View, then proceed with configuration. When the View is created, a build schedule will be automatically created in the background that will rebuild the View any time the backing datasets update. If you want to immediately read the View after creating or modifying it, you must build the View manually.

### [](https://www.palantir.com/docs/foundry/data-integration/views/#select-backing-datasets)Select backing datasets

Because a View is composed of the union of its backing datasets, every backing dataset for a given View must possess the same set of column names and types (though the column order can be different).

If you add or remove columns from a backing dataset, the View may fail with a `View:MismatchedNumberOfColumns` error. To resolve this, navigate to **Details > Dataset view settings** and enable **Schema evolution**. This allows the View to automatically adapt to schema changes in its backing datasets without needing to create a new View.

One or more backing datasets are required to construct a View. After initial configuration, a View's backing datasets can be modified by navigating to **Details > Dataset view settings**.

![Image 12: Select backing datasets for a View.](https://www.palantir.com/docs/resources/foundry/data-integration/views-select-backing-datasets.png)

### [](https://www.palantir.com/docs/foundry/data-integration/views/#add-a-primary-key)Add a primary key

Data deduplication is a key feature of Views that you can enable by adding a primary key. Once the primary key is configured, the View is guaranteed to have primary key uniqueness; each primary key present in the View appears in only one row. Add a primary key to ensure that only the most up-to-date data for each primary key is returned when the View is read. This automatic deduplication can be especially useful in cases when the View's backing dataset(s) may contain unwanted duplicate rows.

Once the primary key is set, it cannot be modified without creating a new View.

To add a primary key, select one or more columns which, when combined, will form the primary key. The column(s) must not contain null values.

![Image 13: Add a primary key to a View.](https://www.palantir.com/docs/resources/foundry/data-integration/views-primary-key.png)

If you do not add a primary key during initial configuration, you can do so later by navigating to **Details > Dataset view settings**.

### [](https://www.palantir.com/docs/foundry/data-integration/views/#resolve-duplicate-keys)Resolve duplicate keys

To add a primary key, you must also specify a column (or combination of columns) for resolving duplicate primary keys. Deduplication of rows with the same primary key is performed by keeping the row with the highest values of these columns in order and discarding the others. This ensures that every primary key appearing in the View is unique.

### [](https://www.palantir.com/docs/foundry/data-integration/views/#select-a-deletion-column)Select a deletion column

You can also optionally specify a deletion column, which must contain Boolean values. After deduplication, if the final remaining row for a given primary key has `true` in the deletion column, that row will be excluded from the View.

### [](https://www.palantir.com/docs/foundry/data-integration/views/#deduplication-and-deletion-in-practice)Deduplication and deletion in practice

Duplicate primary keys are resolved _before_ the deletion column is used to exclude rows. Therefore, only the value of the deletion column in the “latest” row for a given primary key matters.

![Image 14: Example of deduplication and deletion for a single backing dataset.](https://www.palantir.com/docs/resources/foundry/data-integration/views-pkey-example-single.png)

Deduplication and deletion is performed across all of the backing datasets:

![Image 15: Example of deduplication and deletion for two backing datasets.](https://www.palantir.com/docs/resources/foundry/data-integration/views-pkey-example-union.png)

Deduplication and deletion is implemented with a combination of the following:

*   An appropriately configured, automatically created [projection](https://www.palantir.com/docs/foundry/optimizing-pipelines/projections-overview/) on the View.
*   Window function-based filter logic that is evaluated on every read.

Although the filter logic is evaluated on every read, the evaluation of this logic has a negligible impact on runtime and compute cost provided the projection is up to date and the backing datasets of the View have only had `APPEND` or `UPDATE` transactions since the last projection build.

Considering this architecture, we recommend only creating a View with primary key configuration in the following cases.

*   All of the backing datasets are updated with `APPEND` or strictly additive `UPDATE` transactions.
*   Some of the backing datasets are updated with `APPEND` or strictly additive `UPDATE` transactions and some are updated with `SNAPSHOT` transactions, but the ones that are updated with `SNAPSHOT` transactions are built infrequently.

If updates to the backing datasets require a full rebuild of the projection, considerable compute costs will be incurred since readers ([Contour](https://www.palantir.com/docs/foundry/contour/overview/), transform jobs, and so on) must apply the filter logic without the benefit of the projection until the projection rebuild is complete.

### [](https://www.palantir.com/docs/foundry/data-integration/views/#use-views)Use Views

![Image 16: The Data Lineage of a View.](https://www.palantir.com/docs/resources/foundry/data-integration/views-lineage.png)

Views are visible in Foundry like regular Foundry datasets and can be used anywhere that regular datasets can be used. The only exception to this is that Views are not valid transform outputs (though they are valid transform inputs). An example use case for Views is to create a union of multiple datasets efficiently, using a primary key to ensure the resulting View has data uniqueness.

### [](https://www.palantir.com/docs/foundry/data-integration/views/#remove-markings-with-views)Remove Markings with Views

Views do not support the removal of [Organizations](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/) from datasets, only [mandatory control Markings](https://www.palantir.com/docs/foundry/security/markings/).

Removing Markings with Views may not be enabled on your Foundry enrollment. Contact Palantir Support to enable this feature.

You can use Views to stop propagating Markings on datasets backing the View. You can do this by navigating to **Dataset view settings** in the **Details** tab of the View, then selecting **Edit > Manage marking propagation**.

![Image 17: Edit dataset View settings.](https://www.palantir.com/docs/resources/foundry/data-integration/dataset-view-settings-edit.png)

Only users with `Remove Marking` permissions will be able to stop propagation of the Marking. Changes to Marking propagation will take effect when any updates to the backing dataset occurs.

![Image 18: The remove Markings interface in a dataset View.](https://www.palantir.com/docs/resources/foundry/data-integration/views-unmarking.png)

Review our [guidance on removing Markings](https://www.palantir.com/docs/foundry/building-pipelines/remove-inherited-markings/) for more information.

[← PREVIOUS Change data capture (CDC)](https://www.palantir.com/docs/foundry/data-integration/change-data-capture/)

[NEXT Connectivity / Data Connection / Overview →](https://www.palantir.com/docs/foundry/data-connection/overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

