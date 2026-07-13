Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/directory/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/directory/#directory)Directory

The Directory connector is a sunset connector documented here for historical reference. It only works with the legacy [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) — there is no Foundry worker equivalent. 

 We recommend always using alternative file-sharing connectors when available, like [SFTP](https://www.palantir.com/docs/foundry/available-connectors/sftp/), [SMB](https://www.palantir.com/docs/foundry/available-connectors/smb/), or [FTP](https://www.palantir.com/docs/foundry/available-connectors/ftps/). If the files can only be accessed via the host itself, we recommend using [external transforms](https://www.palantir.com/docs/foundry/available-connectors/directory/#ingest-files-from-agent-hosts-using-external-transforms) with a REST API source instead of a Directory source.

The Directory connector allows you to ingest files located directly on the host where a Data Connection agent is running. This connector is useful for scenarios where files are generated or stored locally on the agent machine and need to be synced into Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/directory/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Exploration | 🟡 Sunset |
| Batch syncs | 🟡 Sunset |
| Incremental | 🟡 Sunset |

## [](https://www.palantir.com/docs/foundry/available-connectors/directory/#data-model)Data model

The connector can transfer files of any type into Foundry datasets. File formats are preserved, and no schemas are applied during or after the transfer. Apply any necessary schema to the output dataset, or [write a downstream transformation](https://www.palantir.com/docs/foundry/pipeline-builder/transforms-overview/) to access the data.

## [](https://www.palantir.com/docs/foundry/available-connectors/directory/#setup)Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper right corner of the screen.
2.   Select **Directory** from the available connector types.
3.   The source will be configured to run on an [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker).
4.   Follow the additional configuration prompts to continue the setup of your connector.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

### [](https://www.palantir.com/docs/foundry/available-connectors/directory/#configuration-options)Configuration options

| Option | Required? | Description |
| --- | --- | --- |
| `Root directory` | Yes | The directory on the agent host that will be used as the starting directory for all requests via this connection. |

## [](https://www.palantir.com/docs/foundry/available-connectors/directory/#sync-data-from-directory)Sync data from Directory

The Directory connector uses the [file-based sync interface](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/).

## [](https://www.palantir.com/docs/foundry/available-connectors/directory/#ingest-files-from-agent-hosts-using-external-transforms)Ingest files from agent hosts using external transforms

For more flexibility and control, you can ingest files from an agent host using [external transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/). This approach allows you to run the sync logic on a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) while still accessing files on a remote agent host.

### [](https://www.palantir.com/docs/foundry/available-connectors/directory/#prerequisites)Prerequisites

1.   **Create a REST API source:** Navigate to the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and create a new [REST API source](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#rest-api-source).
2.   **Configure the connection details:**
    *   Set the **domain** to your agent host address (or placeholder domain name if this is a private IP address, see below).
    *   Set the **port** to `22` (SSH).
    *   Add the SSH **username** and **password** as secrets for a user that can SSH to the host.

3.   **Add an agent proxy egress policy:** Create an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) for your agent host address (or placeholder domain name if this is a private IP address, see below), backed by the agent itself. This allows the Foundry worker to route traffic through the agent to reach the agent host.

If your agent host address is a private IP address (for example, `10.x.x.x`, `172.16.x.x`, or `192.168.x.x`), you must [configure a host override](https://www.palantir.com/docs/foundry/data-connection/agent-configuration-reference/#how-to-configure-host-overrides-for-an-agent) on your agent to map a placeholder domain name to that private IP. Use this placeholder domain instead of the private IP address when configuring the domain on your REST source and egress policy.

1.   **Import the source into your code repository:** Follow the [external transforms setup guide](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#setup-guide) to import the source into your Python transforms repository.

### [](https://www.palantir.com/docs/foundry/available-connectors/directory/#example-read-files-from-an-agent-host-via-ssh)Example: Read files from an agent host via SSH

The following example demonstrates how to connect to an agent host via SSH and read files into a Foundry dataset using the [Paramiko ↗](https://www.paramiko.org/) Python library.

Copied!

```python
1from transforms.api import transform, Output, Input, LightweightOutput, LightweightInput, lightweight
2from transforms.external.systems import external_systems, Source, ResolvedSource
3import paramiko
4
5
6@lightweight
7@external_systems(
8    agent_source=Source("<source_rid>")  # Replace with your REST API source RID
9)
10@transform(
11    output_dataset=Output("<output_dataset_rid>"),  # Replace with your output dataset RID
12    files_to_read=Input("<input_dataset_rid>"),  # Dataset containing file paths to read
13)
14def compute(
15    agent_source: ResolvedSource,
16    output_dataset: LightweightOutput,
17    files_to_read: LightweightInput,
18):
19    """
20    Read files from a remote agent host via SSH and write them to a Foundry dataset.
21    """
22    # 1. SSH connection setup
23    hostname = "<agent_hostname>"  # Replace with your agent hostname
24    username = "<ssh_username>"  # Replace with your SSH username
25    password = agent_source.get_secret("<password_secret_name>")  # Replace with your secret name
26
27    # 2. Establish SSH connection
28    client = paramiko.SSHClient()
29    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
30    client.connect(hostname, username=username, password=password)
31
32    # 3. Read file paths from input dataset
33    remote_file_paths = files_to_read.pandas()["remote_file_path"].tolist()
34
35    # 4. Open SFTP connection
36    sftp = client.open_sftp()
37
38    # 5. Read each file and write to output dataset
39    for remote_path in remote_file_paths:
40        with sftp.open(remote_path, "rb") as remote_file:
41            file_binary_data = remote_file.read()
42
43        # Extract filename from path and write to output
44        filename = remote_path.split("/")[-1]
45        with output_dataset.filesystem().open(filename, "wb") as f:
46            f.write(file_binary_data)
47
48    # 6. Close connections
49    sftp.close()
50    client.close()
```

Ensure that the `paramiko` library is installed in your Python transforms repository. You can add it via the **Libraries** tab in the left side panel of your code repository.

### [](https://www.palantir.com/docs/foundry/available-connectors/directory/#example-delete-files-from-an-agent-host-via-ssh)Example: Delete files from an agent host via SSH

If you need guaranteed deletion of files from a directory source after ingestion, you can use an external transform instead of relying on [completion strategies](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/#completion-strategies). Completion strategies only provide best-effort deletion.

The example below demonstrates how to delete files from an agent host after they have been processed. To use this approach:

1.   Create an upstream sync that ingests files from the directory source and outputs the list of successfully ingested file paths to a dataset.
2.   Schedule this delete transform to run after the sync completes, using the ingested file paths dataset as input.
3.   The output dataset will contain the deletion status for each file, allowing you to audit which files were successfully deleted.

Irreversible file deletion

This operation permanently deletes files from the agent host filesystem. Once executed, the deleted files cannot be recovered. Ensure you have confirmed the files are successfully ingested into Foundry before running this transform.

Copied!

```python
1from transforms.api import transform, Output, Input, LightweightOutput, LightweightInput, lightweight
2from transforms.external.systems import external_systems, Source, ResolvedSource
3import paramiko
4
5
6@lightweight
7@external_systems(
8    agent_source=Source("<source_rid>")  # Replace with your REST API source RID
9)
10@transform(
11    output_dataset=Output("<output_dataset_rid>"),  # Replace with your output dataset RID
12    files_to_delete=Input("<input_dataset_rid>"),  # Dataset containing file paths to delete
13)
14def compute(
15    agent_source: ResolvedSource,
16    output_dataset: LightweightOutput,
17    files_to_delete: LightweightInput,
18):
19    """
20    Delete files from a remote agent host via SSH.
21    Input dataset should contain a column 'remote_file_path' with absolute paths to delete.
22    """
23    hostname = "<agent_hostname>"  # Replace with your agent hostname
24    username = "<ssh_username>"  # Replace with your SSH username
25    password = agent_source.get_secret("<password_secret_name>")  # Replace with your secret name
26
27    client = paramiko.SSHClient()
28    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
29    client.connect(hostname, username=username, password=password)
30
31    remote_file_paths = files_to_delete.pandas()["remote_file_path"].tolist()
32
33    sftp = client.open_sftp()
34
35    deletion_results = []
36    for remote_path in remote_file_paths:
37        try:
38            sftp.remove(remote_path)
39            deletion_results.append({"file": remote_path, "status": "deleted"})
40        except FileNotFoundError:
41            deletion_results.append({"file": remote_path, "status": "not_found"})
42        except PermissionError:
43            deletion_results.append({"file": remote_path, "status": "permission_denied"})
44
45    sftp.close()
46    client.close()
47
48    # Write deletion results to output dataset
49    import pandas as pd
50    results_df = pd.DataFrame(deletion_results)
51    output_dataset.write_pandas(results_df)
```

[← PREVIOUS Db2](https://www.palantir.com/docs/foundry/available-connectors/db2/)

[NEXT DocuSign →](https://www.palantir.com/docs/foundry/available-connectors/docusign/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

