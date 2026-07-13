Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/media-set-sync/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/media-set-sync/#media-set-syncs)Media set syncs

This page discusses how to set up a media set source and sync into Foundry via Data Connection.

The following source types support media syncs:

*   [Amazon S3](https://www.palantir.com/docs/foundry/available-connectors/amazon-s3/)
*   [OneLake and Azure Blob Filesystem (ABFS)](https://www.palantir.com/docs/foundry/available-connectors/onelake-and-azure-blob-filesystem/)

A growing list of sources support media syncs. However, if your desired file-based source is not yet supported, you can ingest your files within a dataset and convert them into media sets via [Python transforms](https://www.palantir.com/docs/foundry/transforms-python/media-sets/). For example, to ingest files from SharePoint Online into a media set, you can use the [SharePoint Online connector](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/) to sync files into a Foundry dataset, then create a Python transform that reads those files and writes them into a media set.

## [](https://www.palantir.com/docs/foundry/data-connection/media-set-sync/#set-up-a-media-set-source-and-sync)Set up a media set source and sync

1.   Find a supported source by navigating to the **Source** page via **+ New Source**. Then, search for **Media Sync** to find all supported sources.

![Image 8: Media Syncs.](https://www.palantir.com/docs/resources/foundry/data-connection/media-syncs.png)

1.   Ensure you have permissions to import any necessary network policies and then set up supported source using the appropriate instructions below:

*   [Amazon S3](https://www.palantir.com/docs/foundry/available-connectors/amazon-s3/)
*   [OneLake and Azure Blob Filesystem (ABFS)](https://www.palantir.com/docs/foundry/available-connectors/onelake-and-azure-blob-filesystem/)

1.   In the **Overview** page of the source, find the **Media set syncs** section to create a media set sync.

![Image 9: Media set sync section](https://www.palantir.com/docs/resources/foundry/data-connection/media-set-sync-section.png)

1.   Set up the media set sync by selecting the desired media file types. See [supported media set schemas](https://www.palantir.com/docs/foundry/media-sets-advanced-formats/media-overview/#supported-media-set-schemas).

![Image 10: Media set sync file type configuration](https://www.palantir.com/docs/resources/foundry/data-connection/set-up-media-set-sync-file-type.png)

1.   Create the desired build schedule for your media sync ingest. You can edit the schedule after the initial configuration.

![Image 11: Media set sync schedule](https://www.palantir.com/docs/resources/foundry/data-connection/set-up-media-set-sync-schedule.png)

1.   Select the relevant subfolder within your source. If your media files are at the root path, there is no need to add a subfolder configuration.

![Image 12: Media set sync subfolder Configuration](https://www.palantir.com/docs/resources/foundry/data-connection/set-up-media-set-sync-subfolder.png)

1.   Set up your sync filters. Available sync filters include **Exclude files already synced**, **Path matches**, **File size limit**, and **Ignore items not matching schema**.

![Image 13: Media set sync filters](https://www.palantir.com/docs/resources/foundry/data-connection/set-up-media-set-sync-filters.png)

1.   Choose **Save media set sync** when you have selected your initial configuration.

2.   Select **Run** to trigger your first sync and view your media sync.

![Image 14: Run initial media set sync](https://www.palantir.com/docs/resources/foundry/data-connection/set-up-media-set-sync-run-initial-sync.png)

Once you have set up your media set sync, learn how to leverage your media set with [transforms in Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/transforms-transform-media/).

[← PREVIOUS File-based syncs](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/)

[NEXT Optimize JDBC syncs →](https://www.palantir.com/docs/foundry/data-connection/optimize-jdbc-syncs/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

