Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/filesystem/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/filesystem/#agent-level-filesystem)Agent-level filesystem

Files stored on disk on an [agent](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agents) can be synced into Foundry using the filesystem source type.

This source type can be used to sync data from a [Network File System ↗](https://en.wikipedia.org/wiki/Network_File_System) (NFS) or [Network-attached storage ↗](https://en.wikipedia.org/wiki/Network-attached_storage) (NAS) to Foundry, by mounting the NFS or NAS on the agent host and configuring the root directory appropriately.

## [](https://www.palantir.com/docs/foundry/available-connectors/filesystem/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Exploration | 🟢 Generally available |
| Bulk import | 🟢 Generally available |
| Incremental | 🟢 Generally available |
| [File exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#file-exports) | 🟢 Generally available |

## [](https://www.palantir.com/docs/foundry/available-connectors/filesystem/#configuration)Configuration

| Parameter | Required? | Default | Description |
| --- | --- | --- | --- |
| `rootDirectory` | Y |  | Root directory containing data. |
| `fileMustNotChangeDuration` | N | `PT2.0S` | Amount of time (in [ISO-8601 ↗](https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html#parse-java.lang.CharSequence)) a file must remain constant before being considered for upload. Note: If possible, use the more efficient `lastModifiedBefore` processor. |

**Example:**

Copied!

```yaml
1myDirectorySource:
2    type:           directory
3    rootDirectory:  /foo/bar
```

Data Connection excludes all symbolic links, regardless of whether the links are to files or to folders.

[← PREVIOUS ADP](https://www.palantir.com/docs/foundry/available-connectors/adp/)

[NEXT Airtable →](https://www.palantir.com/docs/foundry/available-connectors/airtable/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

