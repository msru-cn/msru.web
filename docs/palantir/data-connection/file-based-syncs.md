Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#file-based-syncs)File-based syncs

After creating a file-based sync using [exploration](https://www.palantir.com/docs/foundry/data-connection/source-exploration/), you can update the configuration in the **Configurations** tab of the sync page.

## [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#conceptual-file-based-ingestion-modes)Conceptual file-based ingestion modes

While Foundry file-based syncs offer low-level settings for greater flexibility and configuration, most use cases will follow a known mode. The following table documents known modes and the low-level settings required to achieve the desired behavior, as well as settings that could be contradictory with those modes.

### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#batch-mirror-with-snapshot-default)Batch mirror with `SNAPSHOT` (default)

*   **Transaction type:**`SNAPSHOT`
*   **Filters:**`None`

Each run will [ingest all files](https://www.palantir.com/docs/foundry/building-pipelines/pipeline-types/#batch) nested in the external system's subdirectory, including files ingested in previous runs, and commit a [`SNAPSHOT`](https://www.palantir.com/docs/foundry/data-integration/datasets/#snapshot) transaction to the output dataset containing exactly those files. The output Foundry [dataset view](https://www.palantir.com/docs/foundry/data-integration/datasets/#dataset-views) will contain a single `SNAPSHOT` transaction containing all files.

#### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#contradictory-settings)Contradictory settings

*   **Filters:**`Exclude files already synced`
    *   Results in the [trailing window ingestion mode](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#trailing-window-with-snapshot).

*   **Filters:**`Limit number of files`
    *   Results in the output Foundry dataset view containing only a non-deterministic subset of the desired files if the limit is lower than the total number of available files.

*   **Filters:**`At least N files`
    *   If there are not `N` nested files in the specified subfolder of the external system, this setting will yield an empty transaction and result in 0 files being ingested. Otherwise, this setting has no effect.

### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#incremental-mirror-with-append)Incremental mirror with `APPEND`

*   **Transaction type:**`APPEND`
*   **Filters:**`Exclude files already synced`

The output [dataset view](https://www.palantir.com/docs/foundry/data-integration/datasets/#dataset-views) will contain a collection of [`APPEND`](https://www.palantir.com/docs/foundry/data-integration/datasets/#append) transactions, which in aggregate contain all nested files ever present during any job run from the specified subfolder. Each run will ingest [all files that have not yet been ingested](https://www.palantir.com/docs/foundry/building-pipelines/pipeline-types/#incremental), keyed by file path name, and commit an `APPEND` transaction to the output dataset.

#### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#contradictory-settings-1)Contradictory settings

*   **Filters:**`Exclude files already synced` with the `Last modified date` or `File size` option 
    *   These options would attempt to incorrectly re-ingest existing files, keyed by file path name, in an `APPEND` transaction when their `Last modified date` or `File size` change, respectively. To allow updates to existing files, review the [incremental with `UPDATE`](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#incremental-mirror-with-update) ingestion mode.

### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#incremental-mirror-with-update)Incremental mirror with `UPDATE`

*   **Transaction type:**`UPDATE`
*   **Filters:**`Exclude files already synced`
*   One or both of: 
    *   **Filters:**`Exclude files already synced` with the `Last modified date` option
    *   **Filters:**`Exclude files already synced` with the `File size` option

The output [dataset view](https://www.palantir.com/docs/foundry/data-integration/datasets/#dataset-views) will contain a collection of [`UPDATE`](https://www.palantir.com/docs/foundry/data-integration/datasets/#update) transactions, which in aggregate contain the latest version of all nested files ever present during any job run from the specified subfolder. Each run will ingest all files that have not yet been ingested _or_ have since changed, keyed by file path name, and commit an `UPDATE` transaction to the output dataset.

#### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#caveat)Caveat

Only use this mode if modifications to existing files are a non-negotiable behavior of the external system. While ingestion is incremental in the sense that only files that are new or changed are ingested in a given run, downstream pipelines cannot run incrementally, as the output dataset (input to the downstream pipelines) is not [append-only](https://www.palantir.com/docs/foundry/transforms-python/incremental-usage/#append-only-input-changes).

### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#trailing-window-with-snapshot)Trailing window with `SNAPSHOT`

*   **Transaction type:**`SNAPSHOT`
*   **Filters:**`Exclude files already synced`

The output [dataset view](https://www.palantir.com/docs/foundry/data-integration/datasets/#dataset-views) will contain a single [`SNAPSHOT`](https://www.palantir.com/docs/foundry/data-integration/datasets/#snapshot) transaction containing only files **that were never present in any previous job run**. Each run will ingest all files that have not yet been ingested, keyed by file path name, and commit a `SNAPSHOT` transaction to the output dataset, containing exactly those files.

This mode is useful when only "recent" files (files that were created in the external system between the second-to-last and last run) are relevant to downstream pipelines and operations. Files ingested in previous runs will not be visible in the output dataset view.

#### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#contradictory-settings-2)Contradictory settings

*   **Filters:**`Limit number of files`
    *   When the number of files created in the external system during a given window exceeds the specified limit, a non-deterministic subset of those files will be ingested, and the remainder will be deferred to a subsequent window. This number may grow rapidly over time, destroying the "recency" intended in the output dataset.

It is always safe to specify the subfolder and optional regex, in addition to filters that limit the file types desired in the output. Such filters include `Last modified after` to exclude outdated files or `Path does not match` to exclude files with a certain file extension, such as `.sh` executable files. 

 Only the `Exclude files already synced`, `At least N files`, and `Limit number of files` filters are tightly coupled to the desired sync mode and might interfere with it.

## [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#sync-failure-behavior)Sync failure behavior

As with all [batch syncs](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#batch-syncs), file-based syncs are transactional. If a sync fails at any point, the transaction is aborted and none of the files from that run are committed to the dataset.

For example, if a sync is configured to upload one million files and a network error occurs after uploading all but one file, the entire transaction is aborted. None of the uploaded files are committed and the dataset view is not modified.

Because of this behavior, syncs that process a large number of files in a single run are more vulnerable to transient failures. To reduce the impact of sync failures, consider using [incremental `APPEND` syncs](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#optimize-file-based-syncs) with a file limit filter so that each run processes a smaller batch of files. This way, a failure only requires re-syncing the current batch rather than all files.

## [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#configure-file-based-syncs)Configure file-based syncs

Configuration options for file-based syncs include the following:

| Parameter | Required? | Default | Description |
| --- | --- | --- | --- |
| `Subfolder` | Yes |  | Specify the location of files within the connector that will be synced into Foundry. |
| `Filters` | No |  | [Apply filters](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#filters) to limit the files synced into Foundry. |
| `Transformers` | No |  | [Apply transformers](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#transformers) to data before it is synced into Foundry. |
| 🟡 `Completion strategies [Legacy]` | No |  | [Enable to delete files](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#completion-strategies) and/or empty parent directories after a successful sync. Requires write permission on the source filesystem. Completion strategies are read-only and cannot be configured on new syncs. |

Syncs will include all nested files and folders from the specified subfolder.

### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#filters)Filters

Filters allow you to filter source files before they are imported into Foundry. The supported filter types are:

*   **Exclude files already synced:** Only sync files that were added or modified in size or date since the last sync.

`Exclude files already synced` has known scale limitations, as it requires scanning all files on every sync run. For syncs ingesting a large number of files, we recommend splitting the sync into a `SNAPSHOT` sync for historical data and an `INCREMENTAL` sync with `Exclude files already synced`, so that the filter is only applied to a smaller subset of recent files.

*   **Path matches:** Only sync files with a path (relative to the root of the connector) that matches the regular expression.
*   **Path does not match:** Only sync files with a path (relative to the root of the connector) that does not match the regular expression.
*   **Last modified after:** Only sync files that have been modified after a specified date and time.
*   **File size is between:** Only sync files with a size between the specified minimum and maximum byte value.
*   **Any file has path matching:** If any file has a relative path matching the regular expression, sync all files in the subfolder that are not otherwise filtered.
*   **At least N files:** Sync all filtered files only if there are at least N files remaining.
*   **Limit number of files:** Limit the number of files to keep per transaction. This option can increase the reliability of incremental syncs.

### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#transformers)Transformers

Transformers allow you to perform basic file transformations (compression or decryption, for example) before uploading to Foundry. During a sync, the files chosen for ingest will be modified per the chosen transformer.

Rather than using Data Connection transformers, we recommend performing data transformations in Foundry with [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/) and [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/) to benefit from provenance and branching.

The following transformers are supported in Data Connection:

*   Compress with Gzip
*   Concatenate multiple files 
    *   Join multiple files into a single file.

*   Rename files 
    *   Replace all occurrences of a given filename substring with a new substring.
    *   Drop the directory path from the filename by replacing `^(.*/)` with `/`.

*   Decrypt with PGP 
    *   Decrypt files that have been encrypted with PGP encryption.
    *   Requires that the agent system has PGP keys configured.
    *   Unavailable for syncs running on a Foundry worker.

*   Append timestamp to filenames 
    *   Add a timestamp in a custom format to the filename of each file ingested.

### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#completion-strategies)Completion strategies

Completion strategies are in the [legacy](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development, and no additional development is expected. Completion strategies are read-only on existing syncs and cannot be configured on new syncs. We recommend using a downstream [external transform](https://www.palantir.com/docs/foundry/data-connection/external-transforms/) as an alternative.

Completion strategies are a mechanism to attempt deleting files and empty parent directories after a successful batch sync of those files into a Foundry dataset. Completion strategies are read-only and cannot be configured on new syncs. Existing syncs with completion strategies will continue to function, but the configuration cannot be modified.

This workflow may be useful when data is synced from an intermediate staging area, such as a file storage system, rather than directly from the external system of record. This workflow is not recommended. Foundry should be connected directly to the external system of record. In cases where Foundry is the system of record, data should be pushed directly to Foundry rather than an intermediate staging area.

#### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#limitations-of-completion-strategies-and-alternatives)Limitations of completion strategies and alternatives

Completion strategies are subject to several important limitations and caveats. These limitations and potential mitigations or alternatives are described below.

##### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#completion-strategy-support)Completion strategy support

Completion strategies are in the [legacy](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development, and no additional development is expected. Completion strategies are read-only on existing syncs and cannot be configured on new syncs. Completion strategies were only available for sources using an [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker). We recommend implementing the functionality provided by completion strategies as a downstream transform instead.

As an example, assume you have a [direct connection](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-direct-connection-policies) to an S3 bucket containing the files `foo.txt` and `bar.txt`. You want to use a file batch sync to copy them to a dataset, and then delete the files from S3. Instead of using completion strategies, you should do the following:

*   Configure a batch sync without any completion strategies and schedule it to run.
*   Write a downstream [external transform](https://www.palantir.com/docs/foundry/data-connection/external-transforms/) job which is scheduled to run when the sync output dataset is updated, taking the synced data as an input.
*   In that external transform, write Python transforms code to iterate through the files that have appeared in the synced dataset, and make calls to S3 to delete those files from the bucket.

Note that this approach is retryable if any deletion calls fail, and guarantees that data is successfully committed to Foundry before attempting to perform any deletions. This approach is also compatible with incremental file batch syncs.

##### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#completion-strategies-are-best-effort)Completion strategies are best effort

For existing syncs using completion strategies, note that completion strategies are best effort. This means that they do not guarantee that data will be effectively removed. The following are some situations that may cause completion strategies to fail:

1.   Completion strategies will not be retried if the agent worker crashes or is restarted after the batch sync commits data to Foundry, but before the completion strategies run.
2.   If the credentials used to connect do not have write permissions, the batch sync may successfully read data and commit to Foundry, but fail to perform the deletions specified by the completion strategy.

In general, we recommend using an alternative to completion strategies wherever possible. Custom completion strategies are no longer supported.

For directory sources specifically, if you require guaranteed file deletion after ingestion, consider using an [external transform to delete files via SSH](https://www.palantir.com/docs/foundry/available-connectors/directory/#example-delete-files-from-an-agent-host-via-ssh) instead.

## [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#optimize-file-based-syncs)Optimize file-based syncs

Warning

This guide is recommended for users setting up a new sync or troubleshooting a slow or unreliable sync. If your sync is already working reliably, you do not need to take any action.

Syncing a large number of files into a single dataset can be slow and vulnerable to transient failures. As described in [sync failure behavior](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#sync-failure-behavior), a failure at any point aborts the entire transaction, which means larger syncs risk more lost work.

If the dataset grows over time, the time to sync the data as a `SNAPSHOT` increases because `SNAPSHOT` transactions sync all data into Foundry. Instead, use syncs configured with transaction type `APPEND` to import your data incrementally. Since you will be syncing smaller, discrete chunks of data, you will create an effective checkpoint; a sync failure will result in a minimal amount of duplicated work rather than requiring a complete re-run. Additionally, your dataset syncs will run faster as you no longer need to upload all of your data for every sync.

### [](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#configure-incremental-append-syncs)Configure incremental `APPEND` syncs

`APPEND` transactions require additional configuration to run successfully.

By default, files synced into Foundry are not filtered. However,`APPEND` syncs require filters to prevent the same files from being imported. We recommend using the `Exclude files already synced` and `Limit number of files` filters to control how many files get imported into Foundry in a single sync. Finally, [schedule your sync](https://www.palantir.com/docs/foundry/building-pipelines/create-schedule/) to remain up to date with your source system.

[← PREVIOUS Set up a streaming sync](https://www.palantir.com/docs/foundry/data-connection/set-up-streaming-sync/)

[NEXT Set up a media set sync →](https://www.palantir.com/docs/foundry/data-connection/media-set-sync/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

