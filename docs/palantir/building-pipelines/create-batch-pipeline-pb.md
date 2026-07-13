Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#create-a-dataset-batch-pipeline-with-pipeline-builder)Create a dataset batch pipeline with Pipeline Builder

In this tutorial, you will use Pipeline Builder to create a simple pipeline with an output of a single dataset with information on flight alerts. You can then analyze this output dataset with tools like Contour or Code Workbook to answer questions such as which flight paths have the greatest risk of disruption.

The datasets used below are searchable by name in the dataset import step; you can find them in your Foundry filesystem.

At the end of this tutorial, you will have a pipeline that looks like the following:

![Image 38: A complete Pipeline Builder pipeline.](https://www.palantir.com/docs/resources/foundry/building-pipelines/complete-pipeline.png)

The pipeline will produce a new dataset output of `Flight Alerts Data` that you can use for further exploration in the platform.

Palantir Learning portal

You can find a deep dive course on building your first pipeline at [learn.palantir.com ↗](https://learn.palantir.com/deep-dive-building-your-first-pipeline).

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#part-1-initial-setup)Part 1: Initial setup

First, create a new pipeline.

1.   When logged into Foundry, select **Applications** from the left navigation sidebar to search for and open **Pipeline Builder**

![Image 39: The Pipeline Builder application, found in the application search.](https://www.palantir.com/docs/resources/foundry/building-pipelines/application-pipeline-builder.png)

2.   Next, on the Pipeline Builder landing page, create a new pipeline by selecting **New pipeline**, then choose **Batch pipeline**. Under **Select batch compute**, choose **Standard**. 

![Image 40: Choose to create a batch pipeline.](https://www.palantir.com/docs/resources/foundry/building-pipelines/new-pipeline-choice-standard-faster.png)

The ability to create a streaming pipeline is not available on all Foundry environments. Contact Palantir Support for more information if your use case requires it.

1.   Select a location to save your pipeline. Note that pipelines cannot be saved in personal folders. 

![Image 41: The choose pipeline location popover.](https://www.palantir.com/docs/resources/foundry/building-pipelines/choose-pipeline-location.png)

2.   Select **Create pipeline**.

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#part-2-add-datasets)Part 2: Add datasets

Now, you can add datasets to your pipeline workflow. Use sample datasets of notional or open-source data.

From the Pipeline Builder page, select **Add datasets** from Foundry.

![Image 42: Add datasets to your pipeline.](https://www.palantir.com/docs/resources/foundry/building-pipelines/add-dataset-location.png)

Alternatively, you can drag and drop a file from your computer to use as your dataset.

In this walkthrough example, you can add the `passengers_preprocessed`, `flight_alerts_raw`, and `status_mapping_raw` datasets. To add a selection of datasets, select the dataset. Then, choose the inline **+** icon, or select **Add to Selection**.

![Image 43: Add a dataset using the + icon.](https://www.palantir.com/docs/resources/foundry/building-pipelines/add-dataset-location2.png)

After selecting all required datasets, choose **Add datasets**.

![Image 44: Three dataset nodes on a Pipeline Builder graph.](https://www.palantir.com/docs/resources/foundry/building-pipelines/datasets-selected.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#part-3-clean-data)Part 3: Clean data

After adding raw datasets, you can perform some basic cleaning transforms to continue defining your pipeline. You will transform three of your raw datasets.

### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#dataset-1)Dataset 1

The first step is to clean the `passengers_preprocessed` dataset. Start by setting up a cast transform to change the `dob` column name into `dob_date` while converting the values to the `MM/dd/yy` format.

#### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#cast-transform)Cast transform

1.   Select the `passengers_preprocessed` node in your graph.

2.   Select **Transform**. 

![Image 45: Choose to transform the dataset from your graph.](https://www.palantir.com/docs/resources/foundry/building-pipelines/pax-preprocessed.png)

3.   Search for and select the **cast** transform from the dropdown menu to open the cast configuration board. 

![Image 46: Apply a cast transform to your selected dataset.](https://www.palantir.com/docs/resources/foundry/building-pipelines/pax-preprocessed-cast.png)

4.   From the **Expression** field, select `dob`; for **Type**, select `Date`.

5.   Enter `MM/dd/yy` for the **Format** type. Be sure to use uppercase `MM` to ensure a successful cast transform. Change the output column name to `dob_date`.

Your cast board should look like this: 

![Image 47: A completed cast transform board.](https://www.palantir.com/docs/resources/foundry/building-pipelines/cast-board.png)

6.   Select **Apply** to add the transform to your pipeline.

#### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#title-case-transform)Title case transform

Now, you can format the `flyer_status` column values to start with an uppercase letter.

1.   In the transform search field, search for and select the **Title case** transform to open the title case configuration board.

2.   In the **Expression** field, select the `flyer_status` column from the dropdown.

Your title case board should look like this: 

![Image 48: A completed title case transform board.](https://www.palantir.com/docs/resources/foundry/building-pipelines/titlecase-board.png)

3.   Select **Apply** to add the transform to your pipeline.

4.   In the top left corner of the transform configuration window, rename the transform `Passengers_Clean`. 

![Image 49: Rename the transform to customize it to your dataset.](https://www.palantir.com/docs/resources/foundry/building-pipelines/passengers-clean.png)

5.   Select **Back to graph** at the top right of the screen to return to your pipeline graph. 

![Image 50: The pipeline graph with a new transform node.](https://www.palantir.com/docs/resources/foundry/building-pipelines/dataset-1-transformed.png)

### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#dataset-2)Dataset 2

Now, clean the `flight_alerts_raw` dataset. The first step is to set up another cast transform to convert the `flight-date` column values into a `MM/dd/yy` format.

#### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#cast-transform-1)Cast transform

1.   Select the `flight_alerts_raw` dataset node in your graph.

2.   Select **Transform**. 

![Image 51: Choose to transform a new dataset from your graph.](https://www.palantir.com/docs/resources/foundry/building-pipelines/flight-alerts-transform.png)

3.   Search for and select the **cast** transform from the dropdown menu to open the cast configuration board. You can read the function definition listed on the right side of the selection box to learn more about the function. 

![Image 52: Search for the cast transform board.](https://www.palantir.com/docs/resources/foundry/building-pipelines/castdefinition.png)

4.   In the **Expression** field, select the `flight_date` column from the dropdown.

5.   Choose `Date` from the **Type** field dropdown menu.

6.   Enter `MM/dd/yy` for the **Format** type. Be sure to use uppercase `MM` to ensure a successful cast transform.

Your cast board should look like this: 

![Image 53: A completed cast transform board.](https://www.palantir.com/docs/resources/foundry/building-pipelines/dataset-2-cast.png)

7.   Select **Apply** to add the transform to your pipeline.

#### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#clean-string-transform)Clean string transform

Now, add a **Clean string** transform that will remove whitespace from `category` column values. For example, the transform will convert `delay···` string values to `delay`.

1.   Search for and select the clean string transform from the dropdown to open the clean string configuration board.

2.   In the **Expression** field, select the `category` column from the dropdown menu.

3.   Check the boxes for all three of the **Clean actions** options:

    *   Converts empty strings to null
    *   Reduce sequences of multiple whitespace characters to a single whitespace
    *   Trims whitespace at beginning and end of string

Your clean string board should look like this: 

![Image 54: A completed clean string transform board.](https://www.palantir.com/docs/resources/foundry/building-pipelines/clean-string.png)

4.   Select **Apply** to add the transform to your pipeline.

5.   In the top left corner of the transform configuration window, rename the transform `Flight Alerts - Clean`.

6.   Select **Back to graph** at the top right to return to your pipeline graph. 

![Image 55: The pipeline builder graph with two transform nodes.](https://www.palantir.com/docs/resources/foundry/building-pipelines/flight-alerts-clean-graph.png)

### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#dataset-3)Dataset 3

Finally, clean the `status_mapping_raw` dataset.

#### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#clean-string-transform-1)Clean string transform

You will only apply a **Clean string** transform to this dataset.

1.   Select the `status_mapping_raw` dataset node in your graph.

2.   Select **Transform**. 

![Image 56: Choose to transform a dataset from the graph.](https://www.palantir.com/docs/resources/foundry/building-pipelines/status-mapping-raw-transform.png)

3.   In the **Search transforms and columns...** field, select the `mapped_value` column from the dropdown menu. 

![Image 57: Choose the mapped_value column in the transform board.](https://www.palantir.com/docs/resources/foundry/building-pipelines/mapped-value-transform.png)

4.   In the same field, search and select the clean string transform from the dropdown.

5.   Check the boxes for all three of the **Clean actions** options:

*   Converts empty strings to null

*   Reduce sequences of multiple whitespace characters to a single whitespace

*   Trims whitespace at beginning and end of string

Your clean string board should look like this: 

![Image 58: A completed clean string transform board.](https://www.palantir.com/docs/resources/foundry/building-pipelines/clean-string-mapped-value.png)

1.   Select **Apply** to add the transform to your pipeline.

2.   In the top left corner of the transform configuration window, rename the transform `Status Mapping - Clean`.

3.   Select **Back to graph** at the top right to return to your pipeline graph.

You can see the connection between the transforms you just added and the datasets to which you applied them. 

![Image 59: A pipeline builder graph with three dataset and three transform nodes.](https://www.palantir.com/docs/resources/foundry/building-pipelines/transforms-done.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#part-4-join-datasets)Part 4: Join datasets

Now, you can combine some of the cleaned datasets with **joins**. A join allows you to combine datasets with at least one matching column. You will add two joins to your pipeline workflow.

### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#join-1)Join 1

Your first join will combine two of the cleaned datasets.

1.   Select the `Flight Alerts - Clean` transform node. This will be the left side of the join.

2.   Select **Join**. 

![Image 60: Choose to join a dataset from the graph.](https://www.palantir.com/docs/resources/foundry/building-pipelines/join-time.png)

3.   Choose the `Status Mapping - Clean` node to add it as the right side of the join.

4.   Select **Start** to open the join configuration board. 

![Image 61: Select Start to join the selected datasets.](https://www.palantir.com/docs/resources/foundry/building-pipelines/start-join.png)

5.   Verify that the **Join type** is set to `Left join`.

6.   Set the **Match condition** columns to `status` is equal to `value`.

7.   Select **Show advanced** to view additional configuration options.

8.   Set the **Prefix** of the right `Status Mapping - Clean` dataset to `status`.

Your join configuration board should look like this: 

![Image 62: A completed join board.](https://www.palantir.com/docs/resources/foundry/building-pipelines/input-tables.png)

9.   Select **Apply** to add the join to your pipeline.

10.   View a preview of the join output table in the **Preview** pane at the bottom of the configuration window. 

![Image 63: A preview of the join output.](https://www.palantir.com/docs/resources/foundry/building-pipelines/pipeline-preview-pane.png)

11.   In the top left corner of the join configuration window, rename the join `Join Status`.

12.   Select **Back to graph** at the top right to return to your pipeline graph. 

![Image 64: A pipeline graph with the new join node.](https://www.palantir.com/docs/resources/foundry/building-pipelines/back-to-graph-join-status.png)

13.   To make the graph easier to read, select the **Layout** icon to automatically arrange the datasets, or manually drag the two connected datasets next to each other. 

![Image 65: Use the layout tool to neatly organize the pipeline graph.](https://www.palantir.com/docs/resources/foundry/building-pipelines/reorganized-graph.png)

### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#join-2)Join 2

For your second join, combine your first join output table with another raw dataset.

1.   Add the `priority_mapping_raw` dataset to the graph by selecting **Add datasets**.

2.   Select the `Join Status` node you just added to the graph. This will be the left side of the join.

3.   Select **Join**.

4.   Select the `priority_mapping_raw` dataset node to add it as the right side of your join.

5.   Select **Start** to open the configuration board. 

![Image 66: Select Start to join the selected nodes.](https://www.palantir.com/docs/resources/foundry/building-pipelines/select-another-table-to-join.png)

6.   Verify that the **Join type** is set to `Left join`.

7.   Set the **Match condition** columns to `priority` is equal to `value`.

8.   Select **Show advanced** to view additional configuration options.

9.   Set the **Prefix** of the right `priority_mapping_raw` dataset to `priority`.

Your join configuration board should look like this: 

![Image 67: A completed join configuration.](https://www.palantir.com/docs/resources/foundry/building-pipelines/input-tables2.png)

10.   Select **Apply** to add the join to your pipeline.

11.   View a preview of the join output table in the **Preview** pane at the bottom of the configuration window. 

![Image 68: A preview of the configured join.](https://www.palantir.com/docs/resources/foundry/building-pipelines/preview-pane2.png)

12.   In the upper left corner of the join configuration window, rename the join `Join (2)`.

13.   Select **Back to graph** at the top right to return to your pipeline graph.

You can now see the connection between the joins you just added and the datasets to which you applied them.

![Image 69: The pipeline graph with another join node.](https://www.palantir.com/docs/resources/foundry/building-pipelines/join-stage-in-workspace.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#part-5-add-an-output)Part 5: Add an output

Now that you have finished transforming and structuring your data, you can add an output. For this tutorial, you will add a dataset output.

1.   In the **Pipeline outputs** sidebar to the right of the Pipeline Builder graph, name the output `Flight Alerts data`. Then select **Add dataset output**.
2.   Link `Join (2)` to the output by selecting the white circle to the right of the join node and connecting it to the `Flight Alerts data`dataset.
3.   Select **Use input schema** to use existing schema.
4.   From here, select the columns of data to keep. In this case, keep all the data together. 

![Image 70: Select the columns to include in the output dataset.](https://www.palantir.com/docs/resources/foundry/building-pipelines/add-an-output.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/#part-6-build-the-pipeline)Part 6: Build the pipeline

To build your pipeline, select **Deploy** in the top right of your graph. Then, choose **Save and deploy**.

![Image 71: Choose to save and deploy to build you pipeline](https://www.palantir.com/docs/resources/foundry/building-pipelines/save-and-deploy.png)

You should see a small alert indicating the deploy was successful. Select **View** in the alert box to open the **Build progress** page.

![Image 72: Screenshot of build progress page](https://www.palantir.com/docs/resources/foundry/building-pipelines/build-progress.png)

From this page, you can monitor the progress of your build until the dataset output is ready.

![Image 73: Screenshot of build progress with succeed status page](https://www.palantir.com/docs/resources/foundry/building-pipelines/build-succeed.png)

You can now access your dataset by selecting **Actions > Open**.

![Image 74: Screenshot of dataset output](https://www.palantir.com/docs/resources/foundry/building-pipelines/flight-alerts-data.png)

With this last step, you generated your pipeline output. This output is a dataset that can be further explored in other applications in Foundry, such as [Contour](https://www.palantir.com/docs/foundry/contour/analysis-create-path/#starting-an-analysis-from-datasets-in-foundry) or [Code Workbook](https://www.palantir.com/docs/foundry/code-workbook/workbooks-overview/).

[← PREVIOUS Considerations: Pipeline Builder and Code Repositories](https://www.palantir.com/docs/foundry/building-pipelines/considerations-pb-cr/)

[NEXT Create a media set batch pipeline with Pipeline Builder →](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

