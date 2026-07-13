Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-integration/connecting-to-data/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-integration/connecting-to-data/#connecting-to-data)Connecting to data

The first step to getting value from Foundry is to connect it to your Organization's sources of data. Foundry's tools for connecting to data support the full range of standard enterprise data sources, ranging from cloud-based object stores, file systems, and databases and data warehouses.

You can connect to data in a variety of ways with different Foundry applications, depending on the type of data you need to access.

## [](https://www.palantir.com/docs/foundry/data-integration/connecting-to-data/#data-connection)Data Connection

Connect to sources to run batch, streaming, media, and CDC syncs and to use virtual tables.

The [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) framework is designed to manage data over time, through discrete versions that are managed using dataset [transactions](https://www.palantir.com/docs/foundry/data-integration/datasets/#transactions). This framework enables full lineage of data versions across time, providing you with an understanding of which sync tasks produced which versions of a given dataset. It also enables syncing of only the data required, in cases where full data loading on each sync is not possible.

Granular security in Data Connection allows federated management of data syncs across different teams. Collections of syncs, or even individual data syncs, can be made visible or editable to only specific teams (defined through role- or classification-based access controls). Learn more about [securing a data foundation](https://www.palantir.com/docs/foundry/security/securing-a-data-foundation/).

You can manage sync metadata independently of the actual sync definitions. This allows for full branching of new configurations, where the new sync is sandboxed and tested in a branch before it affects any downstream transformation jobs.

## [](https://www.palantir.com/docs/foundry/data-integration/connecting-to-data/#hyperauto)HyperAuto

To evolve beyond simple data syncing solutions, [Palantir HyperAuto](https://www.palantir.com/docs/foundry/hyperauto/overview/) implements support for Software-Defined Data Integration (SDDI). This toolset allows organizations to not only connect to common ERP and CRM systems, but also to programmatically generate data pipelines that clean, normalize, and harmonize datasets into a cohesive data asset at unprecedented speed. This data asset can then feed into the [Ontology](https://www.palantir.com/docs/foundry/ontology/overview/) to translate data into operational value.

## [](https://www.palantir.com/docs/foundry/data-integration/connecting-to-data/#external-transforms)External transforms

Perform scheduled syncs and exports to external systems using REST APIs.

If you want to connect to external sources to create syncs and export data, we recommend using Code Repositories to write [external Python transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/) using the REST API. You can also add dataset inputs and media set outputs to your transforms.

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/data-integration/overview/)

[NEXT What is a data pipeline? →](https://www.palantir.com/docs/foundry/data-integration/data-pipeline/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

