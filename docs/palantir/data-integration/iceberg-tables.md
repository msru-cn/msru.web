Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-integration/iceberg-tables/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-integration/iceberg-tables/#iceberg-tables-beta)Iceberg tables [Beta]

Beta

Iceberg table support is in the [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development and may not be available on your enrollment. Functionality may change during active development. Contact Palantir Support to request enabling Iceberg tables.

[Apache Iceberg ↗](https://iceberg.apache.org/) is a widely adopted open-source table format and is available in Foundry via **Iceberg tables** as an alternative resource type for representing tabular data.

Foundry offers Iceberg both as managed tables and as [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/) via an external catalog or storage provider.

## [](https://www.palantir.com/docs/foundry/data-integration/iceberg-tables/#what-is-iceberg)What is Iceberg?

[Apache Iceberg ↗](https://iceberg.apache.org/) is an open table format that has gained significant traction in the data and analytics community due to benefits around scalability, performance, and broad ecosystem support. In particular, the wide adoption of the Iceberg format specification enables a broad array of integrations and interoperability across modern data ecosystems.

The Apache Iceberg project includes the [Apache Iceberg table format specification ↗](https://iceberg.apache.org/spec/), as well as a set of engine connectors that support the Iceberg specification, such as [Spark ↗](https://iceberg.apache.org/docs/nightly/spark-getting-started/), [Flink ↗](https://iceberg.apache.org/docs/nightly/flink/) and more.

Beyond the core Apache Iceberg project, there is a growing ecosystem of connectors and engines that support the Iceberg format:

*   [PyIceberg ↗](https://py.iceberg.apache.org/) provides a gateway into the Python ecosystem.
*   Engines like [Trino ↗](https://trino.io/docs/current/connector/iceberg.html) and [PrestoDB ↗](https://prestodb.io/docs/current/connector/iceberg.html) offer native support.
*   Other third-party tools and platforms, such as [Databricks ↗](https://docs.databricks.com/aws/en/iceberg/) and [Snowflake ↗](https://docs.snowflake.com/en/user-guide/tables-iceberg), provide offerings built on top of the Iceberg format.

## [](https://www.palantir.com/docs/foundry/data-integration/iceberg-tables/#foundry-iceberg-catalog)Foundry Iceberg catalog

Apache Iceberg defines an [Iceberg REST Catalog ↗](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/apache/iceberg/main/open-api/rest-catalog-open-api.yaml) specification, which outlines a set of endpoints and behaviors that a service must implement to function as an Iceberg REST catalog.

By adhering to this specification, the service becomes compatible with a growing number of compute engines that support the Iceberg REST Catalog.

Foundry now natively implements this Iceberg REST Catalog specification, In addition, Foundry also supports connectivity to third-party Iceberg REST catalogs such as [Databricks Unity Catalog ↗](https://www.databricks.com/product/unity-catalog). See [Virtual tables: Iceberg catalogs](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/#iceberg-catalogs) for supported third-party catalogs.

Foundry exposes Iceberg catalog metadata explicitly as a JSON file via dataset application under the Details tab.

The screenshot below shows how Iceberg catalog metadata appears in the dataset application:

![Image 3: Iceberg metadata file](https://www.palantir.com/docs/resources/foundry/data-integration/iceberg-table-metadata.png)

## [](https://www.palantir.com/docs/foundry/data-integration/iceberg-tables/#iceberg-tables-vs-datasets)Iceberg tables vs. datasets

As Palantir expands coverage for Iceberg tables, the features and benefits available for Foundry Iceberg tables will grow over time and limitations will be removed.

Below summarizes the current state of support as compared to [datasets](https://www.palantir.com/docs/foundry/data-integration/datasets/), while Iceberg tables are in the Beta phase of development.

### [](https://www.palantir.com/docs/foundry/data-integration/iceberg-tables/#benefits-of-iceberg-tables)Benefits of Iceberg tables

The following benefits of Iceberg tables are currently available in Foundry:

*   **Interoperability:** Open Iceberg format means third-party tools can more easily read and write Palantir Iceberg tables.
*   **Compaction:** Support for automated compaction without affecting incremental reads.
*   **Row edits:** Support for `DELETE`, `UPDATE` and `MERGE INTO` statements, which allow you to conditionally modify rows without the need to re-snapshot.
*   **Changelogs:** Incrementally consume row deletions and updates.
*   **Enriched table history:** Enhanced history view surfacing Iceberg [table metadata ↗](https://iceberg.apache.org/spec/?h=metadata#table-metadata).

The interface for viewing Iceberg table history can be seen in the following screenshot:

![Image 4: Iceberg table history](https://www.palantir.com/docs/resources/foundry/data-integration/iceberg-table-ui.png)

### [](https://www.palantir.com/docs/foundry/data-integration/iceberg-tables/#notable-differences-between-iceberg-tables-and-foundry-datasets)Notable differences between Iceberg tables and Foundry datasets

There are a few notable differences worth calling out between the behavior of Iceberg tables and Foundry datasets today:

*   **Default branches:** Iceberg’s main branch is called `main`, whereas Foundry’s main branch is called `master`. In Foundry’s integration with Iceberg, `main` and `master` are treated as the same, which means a Foundry job running on `master` will write to an Iceberg’s table's `main`.
*   **Automatic schema evolution:** Iceberg table schema evolution is not always automatic. Certain workflows, such as table replaces, evolve the table's schema automatically; however, others require explicit schema evolution commands or settings, such as `ALTER TABLE`. When writing through Foundry's transforms APIs and Pipeline Builder, Foundry uses table replaces when running non-incrementally to handle this for you. Other workflows, such as incremental schema evolution, may fail and require manual resolution. See the [Apache Iceberg documentation on schema evolution ↗](https://iceberg.apache.org/spec/#schema-evolution) for details.

### [](https://www.palantir.com/docs/foundry/data-integration/iceberg-tables/#foundry-functionality-not-yet-available-for-iceberg-tables)Foundry functionality not yet available for Iceberg tables

Note that certain Foundry features are not currently supported for Iceberg tables, including:

*   Views ([Foundry views](https://www.palantir.com/docs/foundry/data-integration/views/) and [Iceberg views ↗](https://iceberg.apache.org/view-spec/))
*   [Restricted views](https://www.palantir.com/docs/foundry/security/restricted-views/)
*   [Streaming](https://www.palantir.com/docs/foundry/data-integration/streams/)
*   [Timeseries syncs](https://www.palantir.com/docs/foundry/time-series/time-series-syncs/)
*   [Projections](https://www.palantir.com/docs/foundry/optimizing-pipelines/projections-overview/)
*   [Faster pipelines in Pipeline Builder](https://www.palantir.com/docs/foundry/building-pipelines/create-faster-pipeline-pb/)

### [](https://www.palantir.com/docs/foundry/data-integration/iceberg-tables/#iceberg-terminology-disambiguation)Iceberg terminology disambiguation

Iceberg introduces terms that do not always have direct equivalents in Foundry:

| Iceberg term | Meaning | Foundry disambiguation |
| --- | --- | --- |
| [Table metadata ↗](https://iceberg.apache.org/spec/#table-metadata) | Metadata describing the structure, schema, and state of an Iceberg table. | Foundry also tracks metadata for tables and datasets across all formats, but this metadata is managed internally by Foundry services. For Iceberg tables, Foundry exposes the native Iceberg metadata explicitly as a JSON file via the Iceberg catalog. |
| [Snapshots ↗](https://iceberg.apache.org/spec/#snapshots) | A record of the table's state at a specific point in time. Iceberg creates a new snapshot with every data modification. | An Iceberg snapshot is roughly equivalent to a Foundry [transaction](https://www.palantir.com/docs/foundry/data-integration/datasets/#transactions). However, Foundry also uses the term ["snapshot"](https://www.palantir.com/docs/foundry/data-integration/datasets/#snapshot) differently: in Foundry, a "snapshot" refers to a transaction that fully replaces all data in a dataset, while an Iceberg snapshot captures all types of data operations, including incremental changes. See [Iceberg snapshot types](https://www.palantir.com/docs/foundry/iceberg/transactions/#iceberg-snapshot-types-and-foundry-dataset-transactions) for a complete disambiguation of Foundry catalog dataset transaction types and Iceberg snapshot types. |

## [](https://www.palantir.com/docs/foundry/data-integration/iceberg-tables/#using-iceberg-in-foundry)Using Iceberg in Foundry

Refer to the [Iceberg tables](https://www.palantir.com/docs/foundry/iceberg/overview/) section of the documentation for details and guides on working with Foundry Iceberg tables.

[← PREVIOUS Health checks](https://www.palantir.com/docs/foundry/data-integration/health-checks/)

[NEXT Virtual tables →](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

