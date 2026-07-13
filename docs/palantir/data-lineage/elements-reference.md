Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-lineage/elements-reference/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-lineage/elements-reference/#graph-elements-reference)Graph elements reference

## [](https://www.palantir.com/docs/foundry/data-lineage/elements-reference/#node-types)Node types

| Node | Type | Description |
| --- | --- | --- |
| ![Image 9: Data Source](https://www.palantir.com/docs/resources/foundry/data-lineage/data-lineage-node-data-source.png) | **Data source** | This is the name of the data source as it appears in [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/). [Learn more about the different source types.](https://www.palantir.com/docs/foundry/data-integration/source-type-overview/) |
| ![Image 10: Dataset node](https://www.palantir.com/docs/resources/foundry/data-lineage/data-lineage-node-dataset.png) | **Dataset** | Foundry datasets and the lineage between them. The color of the dataset node depends on [user selection](https://www.palantir.com/docs/foundry/data-lineage/node-coloring/). Dashed border indicates unstructured datasets. |
| ![Image 11: Object type node](https://www.palantir.com/docs/resources/foundry/data-lineage/data-lineage-node-object-type.png) | **Object type** | Ontology [object types](https://www.palantir.com/docs/foundry/object-link-types/object-types-overview/). The icon and color of the node depends on the definition of each object type. When clicking on the “link” icon next to the object type name, Data Lineage shows the relations between this object type and other object types. |
| ![Image 12: Artifact node](https://www.palantir.com/docs/resources/foundry/data-lineage/data-lineage-node-artifact.png) | **Artifact** | Data Lineage exposes different Foundry artifacts like: [Contour](https://www.palantir.com/docs/foundry/contour/overview/) analyses, [Reports](https://www.palantir.com/docs/foundry/reports/overview/), etc. The color of the node depends on the artifact type, which is indicated at the top of the node. |

## [](https://www.palantir.com/docs/foundry/data-lineage/elements-reference/#node-indicators)Node indicators

Node indicators appear on top of dataset nodes and provide additional information about the resource.

| Indicator | Type | Description |
| --- | --- | --- |
| ![Image 13: Issues icon](https://www.palantir.com/docs/resources/foundry/data-lineage/data-lineage-icon-issues-reported.png) | **Open issues** | This indicator signals there are currently open issues associated with the node on the graph. Hovering over this signal indicates the number of open issues. |
| ![Image 14: Linked object icon](https://www.palantir.com/docs/resources/foundry/data-lineage/data-lineage-icon-linked-objects.png) | **Defines an object type** | This indicator appears on datasets that are used to define Ontology object types. Hovering over the right arrow of allows you to expose those linked object types. [Learn more about object types.](https://www.palantir.com/docs/foundry/object-link-types/object-types-overview/) |
| ![Image 15: Syncs icon](https://www.palantir.com/docs/resources/foundry/data-lineage/data-lineage-icon-syncs.png) | **Syncs** | Datasets with this indicator on them have syncs to other databases or systems. You can view these syncs by selecting the node and opening the Properties panel, or by opening the “Details” tab in Dataset Preview (right click on the node and click on **Open**). |
| ![Image 16: Trashed icon](https://www.palantir.com/docs/resources/foundry/data-lineage/data-lineage-icon-trashed.png) | **Trashed** | This indicator appears on nodes representing deleted datasets or artifacts. Deleted nodes are also partially faded with their name crossed out. |

[← PREVIOUS Node coloring](https://www.palantir.com/docs/foundry/data-lineage/node-coloring/)

[NEXT Understand and manage datasets / View dataset preview and logic →](https://www.palantir.com/docs/foundry/data-lineage/dataset-preview-logic/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

