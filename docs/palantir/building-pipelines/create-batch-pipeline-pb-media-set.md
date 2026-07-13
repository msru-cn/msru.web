Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/#create-a-media-set-batch-pipeline-with-pipeline-builder)Create a media set batch pipeline with Pipeline Builder

In this tutorial, you will use Pipeline Builder to create a standard batch pipeline with media sets to extract text from PDF.

This example uses PDFs of publicly available documents published by Palantir.

At the end of this tutorial, you will have a pipeline that looks like the following:

![Image 24: A complete Pipeline Builder pipeline.](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-media-sets-overview.png)

The pipeline will produce a new Object output of the extracted PDF text, which can be used for further exploration.

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/#part-1-initial-setup)Part 1: Initial setup

First, create a new pipeline.

1.   When logged into Foundry, access **Pipeline Builder** from the left navigation bar. If Pipeline Builder is not in the list of applications, select **View all** and find **Pipeline Builder** under the **Build & Monitor Pipelines** section.

![Image 25: The Pipeline Builder application, found in the application search.](https://www.palantir.com/docs/resources/foundry/building-pipelines/application-pipeline-builder.png)

2.   Next, on the top right of the Pipeline Builder landing page, create a new pipeline by selecting **New pipeline**, then choose **Batch pipeline**. Under **Select batch compute**, choose **Standard** or **Faster**. For this example, choose **Standard**.

![Image 26: Choose to create a standard batch pipeline.](https://www.palantir.com/docs/resources/foundry/building-pipelines/new-pipeline-choice-standard-faster.png)

The ability to create a streaming pipeline is not available on all Foundry environments. Contact Palantir Support for more information if your use case requires it. 
3.   Select a location to save your pipeline. Note that pipelines cannot be saved in personal folders.

![Image 27: The choose pipeline location popover.](https://www.palantir.com/docs/resources/foundry/building-pipelines/choose-pipeline-location.png)

4.   Choose **Create pipeline**.

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/#part-2-add-media-sets)Part 2: Add media sets

Now, you can add datasets to your pipeline workflow. For this tutorial, you will use PDFs of publicly available documents from Palantir.

1.   From the Pipeline Builder page, select **Add Foundry data** on the home page. 

![Image 28: Add media sets to your pipeline.](https://www.palantir.com/docs/resources/foundry/building-pipelines/welcome-to-pipeline-builder-updated.png)

You can also select the **Add data** action on the top panel. 

![Image 29: The Add data option in the pipeline graph.](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-add-data-option.png)

Alternatively, you can drag and drop a file from your computer to use as your media set.

2.   If you selected **Add data** or **Add Foundry data**, you will have the option to select your desired media sets. 

![Image 30: Screenshot of Add media set from location popover](https://www.palantir.com/docs/resources/foundry/building-pipelines/add-media-set-pipeline-builder.png)

3.   When all media sets are selected, choose **Add data**.

4.   When you have imported your media set you will be able to see the media set with thumbnail preview. 

![Image 31: Screenshot of imported media set](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-imported-preview-media-set.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/#part-3-media-set-transformations)Part 3: Media set transformations

After adding raw media sets, you can perform some basic transformations. For this workflow, you will extract the text from these PDF files.

### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/#extract-text-from-pdf)Extract text from PDF

You can directly transform media or extract information from media using [media references](https://www.palantir.com/docs/foundry/data-integration/media-sets/). In this example, you will extract text from the `Media set of Annual Letters` media set.

1.   Choose the `Media set of Annual Letters` node in your graph.

2.   Select **Transform**. 

![Image 32: Screenshot of Media set of Annual Letters node](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-transform-mediaset.png)

3.   Search for and select the **Extract text from PDF** transform from the dropdown to open the board. 

![Image 33: Extract text transform options](https://www.palantir.com/docs/resources/foundry/building-pipelines/extract_text_expression_list.png)

4.   Select the extract method according to your needs and fill out the rest of the parameters.

*   `Raw text`: Computer-generated PDFs
*   `OCR`: Photocopies
*   `Layout aware`: Text and bounding boxes 

![Image 34: Text Extraction options](https://www.palantir.com/docs/resources/foundry/building-pipelines/extract_text_pdf_ocr_options.png)

1.   Choose **Apply** to add the transform to your pipeline.

2.   Your output should look like this when you hover over the extracted text: 

![Image 35: Text extraction output with Hover](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-text-extraction-output-hover.png)

You can now run available string transformations on the extracted text column.

3.   Select **Close** at the top right to return to your pipeline graph. 

![Image 36: Screenshot of the transform](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-transforms-mediaset-graph.png)

#### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/#optional-semantic-search-workflow)(Optional) Semantic search workflow

If desired, you can continue with a [semantic search workflow](https://www.palantir.com/docs/foundry/ontology/overview-semantic-search/) with your extracted text.

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/#part-4-add-an-output)Part 4: Add an output

Now that you have finished extracting text from your PDFs and potentially running extra string transformations, you can add an output. For this tutorial, you will add an object output.

1.   In the `Transforms` node where you have completed your transformations, select **Add output**. 

![Image 37: Add output from media set transformation](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-media-sets-add-output.png)

2.   Select **New object type**. 

![Image 38: Add new object type](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-mediasets-create-new-obj-type.png)

3.   Name your object type and set the Ontology by choosing **Please select an ontology**. 

![Image 39: Rename and set ontology output](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-rename-and-set-ontology.png)

4.   Select **Edit** and edit any column mapping. Ensure that you choose a valid column for the primary key. 

![Image 40: Edit column mapping](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-media-set-ontology-col-mapping.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/#part-5-build-the-pipeline)Part 5: Build the pipeline

1.   To build your pipeline, make sure to select **Save**, then **Deploy > Deploy pipeline**. 

![Image 41: Screenshot of scheme-filled dataset output pane](https://www.palantir.com/docs/resources/foundry/building-pipelines/deploy-this-pipeline.png)

2.   You should see `Intializing deployment` under the `Deploy Pipeline` sidebar option. 

![Image 42: Initializing deployment](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-initializing-deployment.png)

3.   Select **View deployment history** to track the progress of your deployment. You should be led to the `History` tab in your pipeline where you can view the statuses and history of your deployments: 

![Image 43: Deployment in progress](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-deployment-history-deploying.png)

![Image 44: Deployment complete](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-deployment-history-deployed.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/#optional-part-6-north-of-the-ontology)(Optional) Part 6: North of the Ontology

Once deployment has completed and your object is initialized, you should be able to directly action on your object output. Select **Create Workshop module** to generate a Workshop module with your pipeline output.

![Image 45: Create Workshop module](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-create-workshop-module.png)

With this last step, you have generated your pipeline output and a Workshop module.

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/#faq)FAQ

### [](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb-media-set/#can-i-transform-media-before-extracting-data-from-it)Can I transform media before extracting data from it?

Yes, you can transform media before extracting data from it, and this works with many extraction operations including extracting text and using large language models (LLMs). As an example, consider a media set containing landscape-oriented images that need to be rotated clockwise 90 degrees before performing OCR-based text extraction. You can add an expression to rotate images and subsequently add an expression to extract text with OCR.

![Image 46: Pipeline diagram showing a media set being transformed and then processed by a tabular extraction expression.](https://www.palantir.com/docs/resources/foundry/building-pipelines/pb-media-set-tabular-media-pipeline.png)

To safely write the pipeline results to a dataset output, you must remove the media reference column from the output schema as transformed media references are not valid column outputs.

To do this, remove the column using the output dialog.

[← PREVIOUS Create a dataset batch pipeline with Pipeline Builder](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/)

[NEXT Create a dataset batch pipeline with Code Repositories →](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-cr/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

