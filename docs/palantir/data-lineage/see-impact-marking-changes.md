Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-lineage/see-impact-marking-changes/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-lineage/see-impact-marking-changes/#see-the-impact-of-marking-changes)See the impact of Marking changes

You can use Data Lineage to evaluate how changes to dataset Markings can impact derived datasets. This can be useful when [removing Markings](https://www.palantir.com/docs/foundry/building-pipelines/remove-markings/).

Warning

Marking simulation relies on the most recent dataset builds and does not account for changes that are not yet finalized. Confirm that you are working with the most up-to-date version of your data.

## [](https://www.palantir.com/docs/foundry/data-lineage/see-impact-marking-changes/#access-simulation-mode)Access simulation mode

1.   Open the **Access information** side panel.
2.   Toggle on **Simulate access requirements**.
3.   Select any dataset on the graph.
4.   Click **Edit markings**.

![Image 5: Access information side panel](https://www.palantir.com/docs/resources/foundry/data-lineage/marking-simulation-helper-sidebar.png)

## [](https://www.palantir.com/docs/foundry/data-lineage/see-impact-marking-changes/#simulate-marking-changes)Simulate Marking changes

![Image 6: Simulate marking changes](https://www.palantir.com/docs/resources/foundry/data-lineage/marking-simulation-apply.png)

To simulate Marking application, search for the Marking you want to apply, check the box next to the Marking, and then select the **Simulate changes** button.

Markings that are already applied on a dataset will appear as selected. To simulate Marking removal, uncheck the box next to the Marking and click **Simulate changes**.

You can only remove Markings that were applied directly on the dataset. Removal of Markings that were inherited through a dataset's lineage or from the parent Project cannot be simulated.

## [](https://www.palantir.com/docs/foundry/data-lineage/see-impact-marking-changes/#analyze-the-simulated-graph)Analyze the simulated graph

![Image 7: Analyze the simulated graph](https://www.palantir.com/docs/resources/foundry/data-lineage/marking-simulation-analyze.png)

When in simulation mode, the graph coloring will indicate the datasets affected by the Marking changes. The graph colors are labeled in the interface and can represent the following dataset statuses:

*   **Simulate changes applied** appears on the datasets to which you applied changes.
*   **Access affected** appears on datasets for which the Markings before and after the change will be different.
*   **Access unaffected** appears on datasets for which the Markings before and after the change will remain the same.
*   **No visible transactions** appears on datasets that have not been built yet, or where you do not have permission to see transactions.

By selecting any of the datasets, the **Access information** side panel will show the simulated access requirements. You can toggle simulation mode on and off to view differences without losing any of the simulation changes.

## [](https://www.palantir.com/docs/foundry/data-lineage/see-impact-marking-changes/#tips-for-understanding-changes)Tips for understanding changes

Before making changes, we suggest consulting the [Markings documentation](https://www.palantir.com/docs/foundry/security/markings/) to learn more about the impact of Markings on users.

When simulating Markings, consider the following:

*   Datasets can [stop propagating Markings _via code_](https://www.palantir.com/docs/foundry/building-pipelines/remove-inherited-markings/). 

![Image 8: Permissions coloring showing stop propagating Markings](https://www.palantir.com/docs/resources/foundry/data-lineage/marking-simulation-stop-propagating.png?width=400)
    *   In the **Permissions** coloring, nodes on the Data Lineage graph that stop propagating Markings show that data access was _modified via code_. This message will also appear in the **Access information** section of the node properties side panel.
    *   In the Code Helper, you can check the code for a dataset to see if it stops propagating Markings by using the term `stop_propagating`.

*   Datasets can have Markings propagated to them from _other inputs_; expand the dataset inputs by clicking on the left arrow in the dataset node.
*   Markings can be applied on the _parent Project or folder_; Markings will have a folder icon on their left when simulation mode is not enabled, and will show a folder icon in the Marking simulation menu when simulation mode is enabled.

[← PREVIOUS Check resource permissions](https://www.palantir.com/docs/foundry/data-lineage/check-permissions/)

[NEXT Dataset Preview / Overview →](https://www.palantir.com/docs/foundry/dataset-preview/overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

