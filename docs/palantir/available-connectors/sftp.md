Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sftp/

Markdown Content:
## SFTP

Connect Foundry to SFTP servers to sync data between folders and Foundry datasets.

## Supported capabilities

| Capability | Status |
| --- | --- |
| Exploration | 🟢 Generally available |
| Bulk import | 🟢 Generally available |
| Incremental | 🟢 Generally available |
| Export tasks | 🟡 Sunset (legacy SFTP source only) |
| [File exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#file-exports) | 🟢 Generally available |

## Data model

The connector can transfer files of any type into Foundry datasets. File formats are preserved and no schemas are applied during or after the transfer. Apply any necessary schema to the output dataset, or write a [downstream transformation](https://www.palantir.com/docs/foundry/pipeline-builder/transforms-overview/) to access the data.

## Performance and limitations

There is no limit to the size of transferable files. However, network issues can result in failures of large-scale transfers. In particular, Foundry syncs that take more than two days to run will be interrupted. To avoid network issues, we recommend using smaller file sizes and limiting the number of files that are ingested in every execution of the sync. Syncs can be [scheduled](https://www.palantir.com/docs/foundry/data-connection/set-up-sync/#build-or-schedule-your-batch-sync) to run frequently.

## Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper right corner of the screen.
2.   Select **SFTP** from the available connector types.
3.   Follow the additional configuration prompts to continue the setup of your connector using the information in the sections below.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

### Authentication

Connections can be established to the SFTP server using either a password or an SSL private key. If you experience any issues when connecting to the server, verify that the authentication details are correct by attempting connections via an SFTP client outside of Foundry. The user for this connection must have access to the root directory as well as permissions to read and list all files and directories inside the root directory.

| Option | Required? | Description |
| --- | --- | --- |
| `Username` | Yes | The SFTP login username. |
| `Password` | No | The SFTP login password. |
| `Private key` | No | A SSL private key in RSA or OpenSSH format. The SFTP server must have the public key correctly configured as an authorized key for the username provided. |

### Networking

If your SFTP connection [runs in Foundry](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker), you must add a [network egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/) to allowlist the connection.

Egress policies should be created for the SFTP server hostname (if connecting via a domain) as well as the IPs to which the SFTP server host name resolves. After correctly configuring the egress policy, a non-standard connection port (22) still may not work due to [host name validation](https://www.palantir.com/docs/foundry/available-connectors/sftp/#hostname-validation). If this happens, report an issue to Palantir support with a list of policies applied to this connection.

On a UNIX machine, find the IP address that your server domain resolves to by running:

### Certificates and private keys

#### Server SSH key

SFTP servers identify themselves using a public key. This key can be obtained either from the server's administrator (preferable) or by running the command below from any Linux server that has network access to the SFTP server in question:

This key must be configured in the **Host key** section in the **Connection details** page. If it is not possible to obtain this key, or if the key changes frequently, key verification can be disabled using the **Accept any host key** toggle. Note that disabling key verification is unsafe and discouraged.

#### Hostname validation

Foundry attempts hostname validation for all egress routes. Network traffic outside of port 22 are sometimes not verified, resulting in hanging connections and/or timeout errors. If errors continue to occur despite proper egress policy configuration, report an issue to Palantir support with a list of policies for which you want to disable hostname validation.

## Configuration options

| Option | Required? | Default | Description |
| --- | --- | --- | --- |
| `Hostname` | Yes |  | The domain name pointing to the server or the IP address of the server. |
| `Port` | Yes |  | The port on which the SFTP server is running. |
| `Root directory` | Yes |  | The directory on the server that will be used as the starting directory for all requests via this connection. |
| `Username` | Yes |  | The SFTP login username. |
| `Password` | No |  | The SFTP login password. |
| `Private key` | No |  | A SSL private key in RSA or OpenSSH format. The SFTP server must have the public key correctly configured as an authorized key for the username provided. |
| `Host key` | Yes |  | See [Server SSH key](https://www.palantir.com/docs/foundry/available-connectors/sftp/#server-ssh-key) above for more information. |
| `Accept any host key` | No | `false` | See [Server SSH key](https://www.palantir.com/docs/foundry/available-connectors/sftp/#server-ssh-key) above for more information. |
| `Proxy` | No | Direct | Enable to allow a proxy connection to SFTP. |
| `Timeout` | No | 0 | See [Timeouts](https://www.palantir.com/docs/foundry/available-connectors/sftp/#timeouts) below for more information. |
| `Maximum concurrent connections` | No | The maximum parallel uploads supported by the runtime | A higher value typically results in faster transfer speeds. Setting this value to higher than the maximum parallel uploads that the runtime supports will not have any affect. Use this setting if your SFTP server can limit the number of concurrent connections to the server to manage the load. |
| Connection settings | No |  | See the [Connection settings](https://www.palantir.com/docs/foundry/available-connectors/sftp/#connection-settings) section below for more information. |
| `Logs` | No | `Info` | The level of logs to be recorded. Selecting a level will record all logs at that level or above; for example, a level of `Error` will record logs at both `Error` and `Fatal` levels. Refer to the [Logs](https://www.palantir.com/docs/foundry/available-connectors/sftp/#logs) section below for an example. |
| `Extension Negotiation` | No | N/A | These settings control the _extension negotiation_ messages sent by the connector to the SFTP server. Disabling these feature can sometimes resolve issues with establishing connections. See [below](https://www.palantir.com/docs/foundry/available-connectors/sftp/#extension-negotiation) for more guidance. |

### Timeouts

A value of 0 indicates that connections will wait indefinitely for every response from the server. This timeout controls how long the connector waits while establishing a connection with the server and for every command run on the server. The timeout is not triggered if the server continues to respond. Setting this to a low value will not prevent large file transfers but can help with debugging hanging connections.

### Connection settings

When establishing an SFTP connection, both the server and client (Foundry) must negotiate necessary details. These details include information to help the client and server decide which cryptographic algorithms to use. Due to compatibility issues, you may need to manually configure these settings instead of allowing them to be automatically negotiated. The table below lists the available configuration options you can use to adjust the negotiation as required. For more information, review the [FAQ ↗](https://github.com/mwiede/jsch#faq).

| Setting | Description |
| --- | --- |
| `Key exchange algorithms` | An explicit list of algorithms that can be used for key exchange. At least one algorithm must be selected. |
| `Ciphers` | A list of ciphers that can be used for encryption. |
| `Message Authentication Code (MAC)` | A list of MAC types. |
| `Host key types` | The types of host keys that can be used for this connection. |
| `Public key types` | The algorithms that will be used for public key authentication. |

## Sync data from SFTP

The SFTP connector uses the [file-based sync](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/) interface.

## Troubleshooting

### Borrowing connection for ls failed

If a build fails with the error `Borrowing connection for ls failed`, and the error contains `SocketException: Connection reset`, check build logs to see if a network connection to the SFTP server has been established. If the logs do not contain the lines `Connection established` and `Remote version string`, firewalls are blocking egressing traffic from the connection runtime, or the target SFTP server is not allowing the incoming connection. Check egress policies and firewall rules, and contact the SFTP server administrators to resolve network connectivity issues. Below is an example of successful connection logs:

```
jschLogMessage: Connecting to <HOSTNAME> port 2232
jschLogMessage: Connection established
jschLogMessage: Remote version string: <value identifying the type of server>
```

### Hanging connections

If connections hang without any progress or obvious failures, set the timeout to a small value (`1000`, for example) to help identify which call is hanging. For example, it may be taking longer to list a particular directory, or parts of a file are taking a long time to read.

Hanging connections can occur due to [hostname validation](https://www.palantir.com/docs/foundry/available-connectors/sftp/#hostname-validation), and setting a small timeout will allow failure logs to be generated that can help support teams identify root causes for connection issues.

### Agent worker connections [Legacy]

If you are using an egress proxy load balancer, note that FTP is a stateful protocol. Using a load balancer can cause the sync to fail (non-deterministically) if sequential requests do not originate from the same IP.

## Export data to SFTP

The connector can copy files from a Foundry dataset to any location on the SFTP server.

To export to a SFTP server, first [enable exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#enable-exports-for-source) for your SFTP connector. Then, [create a new export](https://www.palantir.com/docs/foundry/data-connection/export-overview/#create-a-new-export).

## Use SFTP sources in code

[Pro-code alternatives](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#use-in-code) can be used to connect to SFTP sources for more complex scenarios.

The examples below demonstrate how to connect to a SFTP source using the [Paramiko ↗](https://www.paramiko.org/) Python client in an [external transform](https://www.palantir.com/docs/foundry/data-connection/external-transforms/).

### Write files to SFTP

This example shows how to write a list of XLSX files to an SFTP server using OpenSSH private key authentication.

## Legacy SFTP connector

### Migrate to the new SFTP connector

Migration from the legacy to new SFTP connector is not automated and must be done manually. The new connector supports almost identical configuration options, and a new source should be created to replace the old source.

Note that:

*   Passwords cannot be retrieved from the old source but must be requested from the server administrators if you no longer have access to them.
*   `privateKeyFile` and `privateKeyPassphrase` are no longer supported, and the contents of the private key should be entered directly in the source settings if using private key authentication.
*   `knownHostsFile` is no longer supported, and the `base64HostKey` must be configured correctly in the source settings.

### Set up a legacy SFTP connector

To set up the legacy SFTP connector, navigate to the Data Connection application, then select **+ New source**. On the source selection screen, scroll down to **Advanced**, then select **Custom source**. Follow the prompts in the configuration screens to continue setting up your SFTP connector.

A complete example of the SFTP YAML configuration can look like the following:

### Export with the legacy SFTP connector

To export data, you must configure an [export task](https://www.palantir.com/docs/foundry/data-connection/export-tasks/). Navigate to the Project folder that contains the connector to which you want to export. Right select on the connector name, then select **Create Data Connection Task**.

In the left panel of the Data Connection view:

1.   Verify the `Source` name matches the connector you want to use.
2.   Add an `Input` named `inputDataset`. The **input dataset** is the Foundry dataset being exported.
3.   Add an `Output` named `outputDataset`. The **output dataset** is used to run, schedule, and monitor the task.
4.   Finally, add a YAML block in the text field to define the task configuration.

Use the following options when creating the export task YAML:

| Option | Required? | Description |
| --- | --- | --- |
| `directoryPath` | Yes | The directory where files will be written. The path must end with a trailing `/`. |
| `excludePaths` | No | A list of regular expressions; files with names matching these expressions will not be exported. |
| `rewritePaths` | No | See [section below](https://www.palantir.com/docs/foundry/available-connectors/sftp/#rewritepaths) for more information. |
| `uploadConfirmation` | No | When the value is `exportedFiles`, the output dataset will contain a list of files that were exported. |
| `createTransactionFolders` | No | When enabled, data will be written to a subfolder within the specified `directoryPath`. Every subfolder will have a unique name for every exported transaction in Foundry and is based on the time the transaction was committed in Foundry. |
| `incrementalType` | No | For datasets that are built incrementally, set to `incremental` to only export transactions that occurred since the previous export. |
| `flagFile` | No | See [Flag file section](https://www.palantir.com/docs/foundry/available-connectors/sftp/#flag-file) for more information. |
| `spanMultipleViews` | No | If `true`, multiple transactions in Foundry will be exported at once. If `false`, a single build will export only one transaction at a time. If incremental is enabled, the files from the oldest transaction will be exported first. |

### `rewritePaths`

If the first key matches the filename, the capture groups in the key will be replaced with the value. The value itself can have extra sections to add metadata to the filename.

If the value contains:

*   `${dt:javaDateExpression}`: This part of the value will be replaced by the timestamp of when the file is being exported. The `javaDateExpression` follows the [DateTimeFormatter ↗](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html) pattern.
*   `${transaction}`: This part of the value will be replaced with the Foundry transaction ID of the transaction that contains this file.
*   `${dataset}`: This part of the value will be replaced with the Foundry dataset ID of the dataset that contains this file.

Example:

Consider a file in a Foundry dataset called "spark/file_name", in a transaction with ID `transaction_id` and dataset ID `dataset_id`. If you use the expression `fi.*ame` as the key and `file_${dt:DD-MM-YYYY}-${transaction}-${dataset}_end` as a value, when the file is written to SFTP, it will be stored as `spark/file_79-03-2023-transaction_id-dataset_id_end`.

### Flag file

The connector can write an empty flag file to the SFTP server once all data is copied for a given build. The empty file signifies that the contents are ready for consumption and will no longer be modified. The flag file will be written to the `directoryPath`. However, if `createTransactionFolders` is enabled, a flag file will be made for every folder to which content was written. If flag files are enabled, and the flag file is called `confirmation.txt`, all flag files will be written at once after files being exported in the build have been written.

If the files in the SFTP server are newer than the flag file, this normally indicates that the previous export was not successful or an export is in progress for that folder.

An example of a simple export configuration is:

After you configure the export task, select **Save** in the upper right corner.

## Logs

Select the **Logs** tab in Data Connections to view logs from [explorations](https://www.palantir.com/docs/foundry/data-connection/source-exploration/) and builds. These logs are useful for debugging connection issues. Search for `jschLogMessage` to view details.

The log details below show a successful login attempt:

```
jschLogMessage: Connecting to <HOSTNAME> port 2232
jschLogMessage: Connection established
jschLogMessage: Remote version string: SSH-2.0-OpenSSH_8.4p1 Debian-5+deb11u1
jschLogMessage: Local version string: SSH-2.0-JSCH_0.2.12
jschLogMessage: CheckCiphers: chacha20-poly1305@openssh.com
jschLogMessage: CheckKexes: curve25519-sha256,curve25519-sha256@libssh.org,curve448-sha512
jschLogMessage: CheckSignatures: ssh-ed25519,ssh-ed448
jschLogMessage: server_host_key proposal before known_host reordering is: ssh-ed25519,ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521,rsa-sha2-512,rsa-sha2-256,ssh-dss,ssh-rsa
jschLogMessage: server_host_key proposal after known_host reordering is: ssh-ed25519,rsa-sha2-512,rsa-sha2-256,ssh-rsa,ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521,ssh-dss
jschLogMessage: SSH_MSG_KEXINIT sent
jschLogMessage: SSH_MSG_KEXINIT received
jschLogMessage: server proposal: KEX algorithms: curve25519-sha256,curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group16-sha512,diffie-hellman-group18-sha512,diffie-hellman-group14-sha256
jschLogMessage: server proposal: host key algorithms: ssh-ed25519,rsa-sha2-512,rsa-sha2-256,ssh-rsa
jschLogMessage: server proposal: ciphers c2s: chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com
jschLogMessage: server proposal: ciphers s2c: chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com
jschLogMessage: server proposal: MACs c2s: umac-64-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,hmac-sha1-etm@openssh.com,umac-64@openssh.com,umac-128@openssh.com,hmac-sha2-256,hmac-sha2-512,hmac-sha1
jschLogMessage: server proposal: MACs s2c: umac-64-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,hmac-sha1-etm@openssh.com,umac-64@openssh.com,umac-128@openssh.com,hmac-sha2-256,hmac-sha2-512,hmac-sha1
jschLogMessage: server proposal: compression c2s: none,zlib@openssh.com
jschLogMessage: server proposal: compression s2c: none,zlib@openssh.com
jschLogMessage: server proposal: languages c2s:
jschLogMessage: server proposal: languages s2c:
jschLogMessage: client proposal: KEX algorithms: curve25519-sha256,curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group16-sha512,diffie-hellman-group18-sha512,diffie-hellman-group14-sha256,diffie-hellman-group14-sha1,diffie-hellman-group-exchange-sha1,diffie-hellman-group1-sha1,ext-info-c
jschLogMessage: client proposal: host key algorithms: ssh-ed25519,rsa-sha2-512,rsa-sha2-256,ssh-rsa,ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521,ssh-dss
jschLogMessage: client proposal: ciphers c2s: aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com,aes128-cbc,3des-ctr,3des-cbc,blowfish-cbc,aes192-cbc,aes256-cbc
jschLogMessage: client proposal: ciphers s2c: aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com,aes128-cbc,3des-ctr,3des-cbc,blowfish-cbc,aes192-cbc,aes256-cbc
jschLogMessage: client proposal: MACs c2s: hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,hmac-sha1-etm@openssh.com,hmac-sha2-256,hmac-sha2-512,hmac-sha1,hmac-md5,hmac-sha1-96,hmac-md5-96
jschLogMessage: client proposal: MACs s2c: hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,hmac-sha1-etm@openssh.com,hmac-sha2-256,hmac-sha2-512,hmac-sha1,hmac-md5,hmac-sha1-96,hmac-md5-96
jschLogMessage: client proposal: compression c2s: none
jschLogMessage: client proposal: compression s2c: none
jschLogMessage: client proposal: languages c2s:
jschLogMessage: client proposal: languages s2c:
jschLogMessage: kex: algorithm: curve25519-sha256
jschLogMessage: kex: host key algorithm: ssh-ed25519
jschLogMessage: kex: server->client cipher: aes128-ctr MAC: hmac-sha2-256-etm@openssh.com compression: none
jschLogMessage: kex: client->server cipher: aes128-ctr MAC: hmac-sha2-256-etm@openssh.com compression: none
jschLogMessage: SSH_MSG_KEX_ECDH_INIT sent
jschLogMessage: expecting SSH_MSG_KEX_ECDH_REPLY
jschLogMessage: ssh_eddsa_verify: ssh-ed25519 signature true
jschLogMessage: Host '[<HOSTNAME>]:2232' is known and matches the EDDSA host key
jschLogMessage: SSH_MSG_NEWKEYS sent
jschLogMessage: SSH_MSG_NEWKEYS received
jschLogMessage: SSH_MSG_SERVICE_REQUEST sent
jschLogMessage: SSH_MSG_EXT_INFO received
jschLogMessage: server-sig-algs=<ssh-ed25519,sk-ssh-ed25519@openssh.com,ssh-rsa,rsa-sha2-256,rsa-sha2-512,ssh-dss,ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521,sk-ecdsa-sha2-nistp256@openssh.com,webauthn-sk-ecdsa-sha2-nistp256@openssh.com>
jschLogMessage: SSH_MSG_SERVICE_ACCEPT received
jschLogMessage: Authentications that can continue: publickey,keyboard-interactive,password
jschLogMessage: Next authentication method: publickey
jschLogMessage: PubkeyAcceptedAlgorithms = ssh-ed25519,ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521,rsa-sha2-512,rsa-sha2-256,ssh-rsa
jschLogMessage: PubkeyAcceptedAlgorithms in server-sig-algs = [ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521, rsa-sha2-512, rsa-sha2-256, ssh-rsa]
jschLogMessage: rsa-sha2-512 preauth success
jschLogMessage: rsa-sha2-512 auth success
jschLogMessage: Authentication succeeded (publickey).
```

Note that in the example above, the server supports host key algorithms of `ssh-ed25519`, `rsa-sha2-512`, `rsa-sha2-256`, and `ssh-rsa`. If any connection issues occurred using `ssh-ed25519`, you could set the [Host Key Algorithms setting](https://www.palantir.com/docs/foundry/available-connectors/sftp/#connection-settings) to `rsa-sha2-512` instead.

## Extension negotiation

The SFTP protocol allows clients to use advanced features of the protocol if they are supported by both the client and the servers. For most industry standard implementations of SFTP, we recommend keeping extensions enabled. However, extensions can cause connection failures if there are compatibility issues. The Foundry SFTP connector allows the extensions to be disabled as required. In general, the best practice is to disable as few extensions as necessary rather than disabling all extensions.
