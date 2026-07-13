Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/create-incremental-syncs/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/create-incremental-syncs/#creating-incremental-syncs)Creating incremental syncs

Although it is possible to derive `APPEND`-only datasets in a pipeline from Data Connection syncs that are configured as `SNAPSHOT` transactions, most of the benefits of incremental pipelines come from applying incremental end-to-end. This means that data syncs into Foundry should consist of `APPEND` transactions that only bring new data into the system. An added benefit of configuring incremental syncs is that they minimize load on the source system and can reduce data storage requirements.

Most datasets synced from source systems consist of files synced from a file system, or extracts from a database or data warehouse configured using a JDBC source type. The following guides walk you through how to configure incremental syncs for these source types:

*   [Optimize file-based append syncs](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/)
*   [Incremental JDBC syncs](https://www.palantir.com/docs/foundry/data-connection/optimize-jdbc-syncs/#incremental-syncs)

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/building-pipelines/incremental-overview/)

[NEXT Maintaining high performance →](https://www.palantir.com/docs/foundry/building-pipelines/maintaining-incremental-performance/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

