Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/incremental-overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/incremental-overview/#incremental-pipelines)Incremental pipelines

[Incremental pipelines](https://www.palantir.com/docs/foundry/building-pipelines/pipeline-types/#incremental) are often used to process input datasets that change significantly over time. By avoiding unnecessarily computing on all the rows or files of data that have not changed, incremental pipelines enable lower end-to-end latency while minimizing compute costs.

However, incremental pipelines carry additional development and maintenance complexity that you should be aware of before getting started.

## [](https://www.palantir.com/docs/foundry/building-pipelines/incremental-overview/#background)Background

Here are some of the factors related to incremental pipelines you may want to consider:

*   Developing an incremental pipeline requires a thorough understanding of how datasets change over time in Foundry using [transactions](https://www.palantir.com/docs/foundry/data-integration/datasets/#transactions). You will need to interact with the concepts of dataset transactions in Data Connection syncs and transformation logic to effectively create and manage an incremental pipeline over time.
*   Once you understand how transactions work in Foundry, you will need to design your pipeline to be resilient to unexpected transactions in your input datasets. Although incremental pipelines generally only process changed data that arrives in the form of `APPEND` transactions, your logic must be resilient to input datasets occasionally being recomputed, which results in a `SNAPSHOT` transaction. Ideally, your transformation logic should be written with thorough [unit tests](https://www.palantir.com/docs/foundry/transforms-python/unit-tests/) to validate behavior before this happens in practice.
*   To ensure incremental pipelines remain performant in the long run, you will need to understand how datasets change over time when many `APPEND` transactions are applied, causing datasets to consist of a large volume of small files. This includes understanding how [Spark](https://www.palantir.com/docs/foundry/optimizing-pipelines/spark-concepts/) handles large numbers of files and how this affects Spark partitioning. [Read more about maintaining high performance for incremental pipelines](https://www.palantir.com/docs/foundry/building-pipelines/maintaining-incremental-performance/).

## [](https://www.palantir.com/docs/foundry/building-pipelines/incremental-overview/#getting-started)Getting started

Get started with incremental pipelines by reviewing the following recommended resources:

*   Learn how to [create incremental syncs](https://www.palantir.com/docs/foundry/building-pipelines/create-incremental-syncs/) to bring data into Foundry incrementally.
*   See an example of how to [create an incremental pipeline](https://www.palantir.com/docs/foundry/building-pipelines/create-incremental-pipeline-pb/) with Pipeline Builder.
*   Refer to the [Python incremental overview](https://www.palantir.com/docs/foundry/transforms-python/incremental-overview/) to learn about developing incremental transform logic.

[← PREVIOUS Getting started / External pipelines with Pipeline Builder](https://www.palantir.com/docs/foundry/building-pipelines/create-external-pipeline-pb/)

[NEXT Creating incremental syncs →](https://www.palantir.com/docs/foundry/building-pipelines/create-incremental-syncs/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

