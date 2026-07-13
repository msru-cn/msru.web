Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-integration/application-reference/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-integration/application-reference/#application-reference)Application reference

This page provides a reference to the Foundry applications you may encounter while performing data integration workflows.

## [](https://www.palantir.com/docs/foundry/data-integration/application-reference/#pipeline-builder)Pipeline Builder

[**Pipeline Builder**](https://www.palantir.com/docs/foundry/pipeline-builder/overview/) is Foundry's primary application for data integration. With Pipeline Builder, you can create end-to-end pipeline workflows, from data sources to final outputs. Users of Pipeline Builder can describe their workflow, transform data, edit schemas, and build outputs in a single easy-to-use application.

Pipeline Builder features an intuitive point-and-click interface and robust backend model that allows technical and less-technical users to define and deploy pipelines faster than in code-heavy applications. The streamlined builder interface allows users to apply data transforms alongside schema checks, saving time and costs typically spent on computation and checks at build time. Additional features like full version control and extensibility make Pipeline Builder an ideal application for safe collaboration.

![Image 7: Screenshot of Pipeline Builder](https://www.palantir.com/docs/resources/foundry/data-integration/pipeline-builder-app-reference@2x.png?width=0.50)

## [](https://www.palantir.com/docs/foundry/data-integration/application-reference/#code-repositories)Code Repositories

[**Code Repositories**](https://www.palantir.com/docs/foundry/code-repositories/overview/) is Foundry's primary interface for authoring code, most commonly used for creating data pipelines in Python, Java, and SQL. Code Repositories provides an integrated development environment (IDE) on top of a `git` server, enabling collaboration and governance of pipeline logic, as well as native support for writing, testing, and previewing data transformation logic. Code Repositories can also be used for authoring [machine learning models](https://www.palantir.com/docs/foundry/integrate-models/model-asset-code-repositories/) and Ontology [Functions](https://www.palantir.com/docs/foundry/functions/overview/).

![Image 8: Screenshot of Code repositories transforms](https://www.palantir.com/docs/resources/foundry/data-integration/code-repos-transforms.png)

If you are interested in data science and code-based analysis, [Code Workbook](https://www.palantir.com/docs/foundry/code-workbook/overview/) may be a better fit for your use case. [Learn more about the differences between Code Workbook, Code Workspaces, and Code Repositories.](https://www.palantir.com/docs/foundry/code-workbook/code-products-comparison/)

## [](https://www.palantir.com/docs/foundry/data-integration/application-reference/#data-lineage)Data Lineage

[**Data Lineage**](https://www.palantir.com/docs/foundry/data-lineage/overview/) is an application that shows how data flows through Foundry. You can use it to explore how any resource in Foundry is connected to other resources, across the boundaries of individual Projects or use cases. This includes support for data sources, datasets, analyses, Ontology object and link types, and user-facing applications. In addition to exploring connections, you can use Data Lineage to view previews of data, see the logic used to derive any piece of data, and manage scheduled pipelines.

![Image 9: Data Lineage flow animation](https://www.palantir.com/docs/resources/foundry/data-integration/data-lineage-flow.gif)

## [](https://www.palantir.com/docs/foundry/data-integration/application-reference/#data-connection)Data Connection

[**Data Connection**](https://www.palantir.com/docs/foundry/data-connection/overview/) is the application used to sync data into Foundry and manage associated resources including source credentials. After initial setup, Data Connection makes it simple to explore data sources and sync new data for use case development, while complying with the full range of governance controls required for managing source systems and use cases at scale.

## [](https://www.palantir.com/docs/foundry/data-integration/application-reference/#dataset-preview)Dataset Preview

[**Dataset Preview**](https://www.palantir.com/docs/foundry/dataset-preview/overview/) is an application used to view and understand [datasets](https://www.palantir.com/docs/foundry/data-integration/datasets/). Opening a dataset from any other application shows you the contents of the dataset, along with a range of contextual information. This includes information about dataset ownership, how the dataset has changed over time, any applicable health checks, and further details.

![Image 10: dataset preview](https://www.palantir.com/docs/resources/foundry/data-integration/dataset-preview.png)

## [](https://www.palantir.com/docs/foundry/data-integration/application-reference/#data-health)Data Health

[**Data Health**](https://www.palantir.com/docs/foundry/health-checks/overview/) is used to manage [data quality](https://www.palantir.com/docs/foundry/data-integration/health-checks/) across all data pipelines. Pipeline maintainers can perform health checks to quickly understand the performance and reliability of their pipelines, as well as subscribe to alerts on [monitoring views](https://www.palantir.com/docs/foundry/monitoring-views/overview/) to enable a broad set of data pipeline maintenance workflows.

![Image 11: data health](https://www.palantir.com/docs/resources/foundry/data-integration/data-health.png)

## [](https://www.palantir.com/docs/foundry/data-integration/application-reference/#builds)Builds

**Builds application** — formerly called Job Tracker — allows you to view all [builds](https://www.palantir.com/docs/foundry/data-integration/builds/) occurring across Foundry and explore details about each build, including information about execution progress, scheduling, and past success and failure rates. Builds application also enables you to access granular information about the Spark execution engine underlying execution, which enables debugging and optimization workflows.

![Image 12: builds application](https://www.palantir.com/docs/resources/foundry/data-integration/builds.png)

[← PREVIOUS What is a data pipeline?](https://www.palantir.com/docs/foundry/data-integration/data-pipeline/)

[NEXT Core concepts / Datasets →](https://www.palantir.com/docs/foundry/data-integration/datasets/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

