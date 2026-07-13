Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-lineage/dataset-rollback/

Published Time: Thu, 09 Jul 2026 17:47:54 GMT

# [](https://www.palantir.com/docs/foundry/data-lineage/dataset-rollback/#roll-back-a-dataset)Roll back a dataset

When building a pipeline, you may need to roll back a [dataset](https://www.palantir.com/docs/foundry/data-integration/datasets/) to an earlier version. There may be various reasons for this, including the following:

*   You identified a mistake in the logic required to build a dataset and need to revert it.
*   Incorrect data was pushed into your pipeline from an upstream source.
*   An outage occurred, and you want to quickly navigate back to an earlier state of your dataset.

The dataset rollback feature allows you to update the data and job history of a dataset. If the dataset is being built [incrementally](https://www.palantir.com/docs/foundry/transforms-python/incremental-overview/), the dataset rollback feature also ensures that the incrementality of your dataset is preserved.

## [](https://www.palantir.com/docs/foundry/data-lineage/dataset-rollback/#types-of-dataset-rollbacks)Types of dataset rollbacks

The two types of possible rollbacks on a dataset are as follows:

1.   **[Rolling back to an earlier transaction](https://www.palantir.com/docs/foundry/data-lineage/dataset-rollback/#roll-back-to-an-earlier-transaction):** Performed when there is a previous transaction to roll the dataset back to.
2.   **[Forcing a snapshot on the next build](https://www.palantir.com/docs/foundry/data-lineage/dataset-rollback/#force-a-snapshot-on-the-next-build):** Typically applicable for incremental workflows when there is no previous transaction to roll back to, meaning that the dataset needs to be rolled back to a state before the branch or the dataset was created.

If you accidentally force a snapshot on the next build of a dataset, but you intended to roll back to an earlier transaction, do not proceed with a rollback, as this could leave the dataset in a partially rolled back state. 

 Instead, build the dataset; it will run as a snapshot since the dataset was configured to snapshot on the next build, and then carry out the intended rollback.

## [](https://www.palantir.com/docs/foundry/data-lineage/dataset-rollback/#considerations-and-limitations)Considerations and limitations

When rolling back a dataset, keep the following considerations in mind:

*   Only transactional datasets are supported for rollbacks.
*   You are only able to roll back to a _successful_ transaction.
*   It is not possible to roll back to a transaction that was deleted based on a [retention policy](https://www.palantir.com/docs/foundry/retention/overview/). However, you _can_ roll back to a transaction that was deleted by a dataset rollback in Data Lineage.
*   You can only roll back a dataset on which you have the [`Editor` role](https://www.palantir.com/docs/foundry/security/projects-and-roles/#roles).
*   After a rollback is carried out, the logic backing the dataset will be left unchanged and will need to be updated in order to apply to the next build.
*   If the branch on which a rollback is being performed does not exist on the dataset, the rollback will be applied to a fallback branch.

![Image 10: Rollback will be performed on a fallback branch if the branch does not exist.](https://www.palantir.com/docs/resources/foundry/data-lineage/fallback-branch.png)

## [](https://www.palantir.com/docs/foundry/data-lineage/dataset-rollback/#roll-back-to-an-earlier-transaction)Roll back to an earlier transaction

1.   Navigate to a [Data Lineage](https://www.palantir.com/docs/foundry/data-lineage/overview/) graph containing the dataset you would like to roll back.
2.   Select the dataset in the graph. Then, from the branch selector at the top of the graph, select the branch on which you would like to perform the rollback.

![Image 11: Select the branch that you want to perform a rollback on.](https://www.palantir.com/docs/resources/foundry/data-lineage/branch_selector.png)

1.   Select the **History** tab in the panel at the bottom of the page.
2.   Select the transaction to roll back to.

![Image 12: Choose the transaction to which you would like to roll back.](https://www.palantir.com/docs/resources/foundry/data-lineage/dataset-history.png)

1.   Select **Rollback to transaction**.
2.   A confirmation dialog will be displayed.

![Image 13: Confirm the rollback.](https://www.palantir.com/docs/resources/foundry/data-lineage/rollback-confirmation-dialog.png)

1.   Acknowledge the warning that a rollback cannot easily be undone and select **Rollback dataset**.

2.   Once the rollback is complete, navigate to the dataset's **History** tab and ensure that the rolled back transactions are now crossed out, as shown below:

![Image 14: The transaction is crossed out after a successful rollback.](https://www.palantir.com/docs/resources/foundry/data-lineage/dataset-history-after-rollback.png)

If a dataset backs an [object type](https://www.palantir.com/docs/foundry/object-link-types/object-types-overview/) stored using object storage v2, manual intervention is required to ensure that the object type is [reindexed](https://www.palantir.com/docs/foundry/object-indexing/funnel-batch-pipelines/#full-reindexing-special-cases) with a successful run of the [replacement pipeline](https://www.palantir.com/docs/foundry/object-indexing/funnel-batch-pipelines/#replacement-pipelines) to reflect the state after the rollback.

## [](https://www.palantir.com/docs/foundry/data-lineage/dataset-rollback/#force-a-snapshot-on-the-next-build)Force a snapshot on the next build

Forcing a snapshot will **not** change the dataset’s transaction history or produce immediate visible changes. The snapshot will occur on the next build. 

 Forcing a snapshot **will** require a force build to rebuild the dataset if there are no changes to either the input data or the logic backing the dataset.

1.   Navigate to a [Data Lineage](https://www.palantir.com/docs/foundry/data-lineage/overview/) graph containing the dataset you would like to force a snapshot on.
2.   Select the dataset in the graph. Then, from the branch selector at the top of the graph, select the branch on which you would like to perform the rollback.

![Image 15: Select the branch that you want to perform a rollback on.](https://www.palantir.com/docs/resources/foundry/data-lineage/branch_selector.png)

1.   Select the **History** tab in the panel at the bottom of the page. Do not select any transactions.

![Image 16: The summary panel within the "History" tab.](https://www.palantir.com/docs/resources/foundry/data-lineage/dataset-history-summary.png)

1.   In the displayed **Summary** panel, select the **Force snapshot** option in the toolbar at the top right.

![Image 17: Select Force snapshot.](https://www.palantir.com/docs/resources/foundry/data-lineage/force-snapshot.png)

1.   A confirmation dialog will be displayed.

![Image 18: Confirm forcing a snapshot on the next build.](https://www.palantir.com/docs/resources/foundry/data-lineage/force-snapshot-confirmation.png)

1.   Acknowledge the warning that a forcing a snapshot on the next build cannot be undone and select **Queue snapshot**.

[← PREVIOUS Roll back a pipeline](https://www.palantir.com/docs/foundry/data-lineage/pipeline-rollback/)

[NEXT Understand permissions / Check resource permissions →](https://www.palantir.com/docs/foundry/data-lineage/check-permissions/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

