Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/create-external-pipeline-pb/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/create-external-pipeline-pb/#external-pipelines-in-pipeline-builder)External pipelines in Pipeline Builder

If you're new to Pipeline Builder, review [how to create a batch pipeline in Pipeline Builder](https://www.palantir.com/docs/foundry/building-pipelines/create-batch-pipeline-pb/) before proceeding.

Pipeline Builder now offers **external pipelines**, which push down compute to external compute engines. This functions in a similar manner as [compute pushdown in Python transforms](https://www.palantir.com/docs/foundry/transforms-python/tables-compute-pushdown/), and allows Foundry's pipeline management, data lineage, and security functionality to be used on top of external data warehouse compute.

As with compute pushdown in Python transforms, all inputs and outputs from external pipelines must be [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/).

Tables built with external compute can be composed together with datasets and tables built with Foundry-native compute using Foundry’s scheduling tools, allowing you to orchestrate complex multi-technology pipelines using the exact right compute at every step along the way.

![Image 4: Diagram showing how Foundry external pipelines use virtual tables to enable you to push down compute to external execution engines.](https://www.palantir.com/docs/resources/foundry/building-pipelines/compute-pushdown-diagram.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-external-pipeline-pb/#supported-external-compute-engines-for-pipeline-builder)Supported external compute engines for Pipeline Builder

Currently, Databricks and Snowflake are supported external compute engines in Pipeline Builder. To use other external compute engines, such as BigQuery, use [transforms with compute pushdown](https://www.palantir.com/docs/foundry/transforms-python/tables-compute-pushdown/).

| Source type | Status |
| --- | --- |
| [BigQuery](https://www.palantir.com/docs/foundry/available-connectors/bigquery/) | Not available |
| [Databricks](https://www.palantir.com/docs/foundry/available-connectors/databricks/) | Generally available |
| [Snowflake](https://www.palantir.com/docs/foundry/available-connectors/snowflake/) | Generally available |

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-external-pipeline-pb/#create-a-new-external-pipeline)Create a new external pipeline

1.   Open Pipeline Builder and select **Create new pipeline**.
2.   After entering a name for your pipeline and the desired location, choose **Batch pipeline**>**External** in the configuration settings and select **Next**.
3.   Search for and select your [supported external source](https://www.palantir.com/docs/foundry/building-pipelines/create-external-pipeline-pb/#supported-external-compute-engines-for-pipeline-builder) and import it into the pipeline.
4.   Now you can add virtual tables from that source to the graph and create your pipeline as usual.
5.   All pipeline outputs will be [virtual table outputs](https://www.palantir.com/docs/foundry/pipeline-builder/outputs-add-virtual-table-output/) in the source.
6.   When ready to build, save and deploy the pipeline. The pipeline will run using external compute and then output the result as a virtual table with storage in the source system.

All input and output tables must be virtual tables from the same source you selected as part of the pipeline setup. For Databricks external pipelines, only Databricks tables are supported. For Snowflake external pipelines, only Snowflake virtual tables from the same external volume are supported. Foundry datasets are not supported as inputs or outputs when using external pipelines.

![Image 5: Screenshot of Pipeline configuration.](https://www.palantir.com/docs/resources/foundry/building-pipelines/external-compute.png)

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-external-pipeline-pb/#configuring-build-settings)Configuring build settings

You can edit your pipeline source and configure source-specific compute options in the build settings panel.

![Image 6: Screenshot of external build settings configuration](https://www.palantir.com/docs/resources/foundry/building-pipelines/external-compute-build-settings.png?width=600)
The configuration for external compute is available under the **Default compute profile** build setting.

| Source type | Compute profile | Description |
| --- | --- | --- |
| [Databricks](https://www.palantir.com/docs/foundry/available-connectors/databricks/) | Serverless | Use serverless compute with Databricks Connect (default). Refer to the [official Databricks documentation ↗](https://docs.databricks.com/aws/en/dev-tools/databricks-connect/cluster-config) for more information on compute options in Databricks Connect. |
| [Databricks](https://www.palantir.com/docs/foundry/available-connectors/databricks/) | Classic compute | Specify the cluster ID of a classic compute cluster. If unspecified, the Spark cluster ID will be derived from the source configuration. Must be provided if the source is configured to use a SQL warehouse. |
| [Snowflake](https://www.palantir.com/docs/foundry/available-connectors/snowflake/) | Compute warehouse | Specify the Snowflake warehouse to use for compute. If unspecified, the compute warehouse configured on the source will be used. |

## [](https://www.palantir.com/docs/foundry/building-pipelines/create-external-pipeline-pb/#known-limitations)Known limitations

External pipelines do not currently support the same set of transforms and expressions as standard batch pipelines.

Due to the differences between external and batch pipelines, you should always verify results using **Preview** or by examining build outputs.

Currently unsupported features and expressions include:

*   Incremental computation
*   LLM features
*   Media set operations
*   Union
*   User-defined functions
*   Geospatial operations

[← PREVIOUS Faster pipelines with Pipeline Builder](https://www.palantir.com/docs/foundry/building-pipelines/create-faster-pipeline-pb/)

[NEXT Incremental pipelines / Overview →](https://www.palantir.com/docs/foundry/building-pipelines/incremental-overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

