Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/sources-in-python/

Published Time: Thu, 09 Jul 2026 17:47:54 GMT

# [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#sources-in-python-environments)Sources in Python environments

Foundry provides the ability to connect to external systems in Python environments across the platform. These capabilities include [source-based external transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/), [external functions](https://www.palantir.com/docs/foundry/functions/api-calls/), and [compute modules ↗](https://github.com/palantir/python-compute-module#sources-in-compute-modules). This page discusses common use cases and workflows for external systems in Python environments. For more information, visit Palantir's [external-systems ↗](https://github.com/palantir/external-systems/) open source library.

Source initialization is not included in any of the examples below, as this will vary between environments. To learn how to obtain an initialized source object, refer to the environment's (for example, a transforms repository, functions repository, compute module, etc.) relevant documentation on usage of sources. You may additionally find snippets in the source information panel side bar with instructions for usage.

## [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#https-client)HTTPS client

For REST-based sources, Palantir provides a preconfigured HTTPS client built on top of the Python requests library.

Note that sources must be initialized with only one HTTP connection; sources initialized with more or less than one HTTP connection are considered invalid and a preconfigured client will not be created. If you attempt to create a connection with an invalid source connection configuration, you will receive an error `Only single connection sources are supported.`

To find out how many connections your source has, refer to the source's sidebar panel in the `External connection` section of your given environment, as seen in the example below:

![Image 2: Source connections displayed on the Foundry code resource sidebar](https://www.palantir.com/docs/resources/foundry/data-connection/source-connections-sidebar.png)

Copied!

```python
1from external_systems.sources import Source, HttpsConnection
2from requests import Session
3
4my_source: Source = # Source is initialized differently based on the environment
5
6https_connection: HttpsConnection = my_source.get_https_connection()
7
8external_system_url: str = https_connection.url
9
10http_client: Session = https_connection.get_client()
11
12response = http_client.get(external_system_url + "/api/v1/example/", timeout=10)
```

Changing the working directory (for example, using `os.chdir()`) before or during HTTPS client usage may break references to environment variables necessary for establishing secure connections.

## [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#secrets)Secrets

Source secrets can be referenced using `get_secret("<secret_name>")` on the source.

Copied!

```python
1from external_systems.sources import Source
2
3my_source: Source = ...
4
5my_secret: str = my_source.get_secret("SECRET_NAME")
```

### [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#session-credentials)Session credentials

A first-class method to retrieve and renew generated session credentials is available for some Foundry source types.

#### [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#supported-source-configurations)Supported source configurations

*   **S3:** Cloud Identity, OIDC
*   **BigQuery:** OIDC
*   **Snowflake:** OIDC

#### [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#example-s3)Example: S3

Copied!

```python
1import boto3
2
3from external_systems.sources import AwsCredentials, Refreshable, Source, SourceCredentials
4
5S3_BUCKET_REGION = <aws_region>
6S3_BUCKET_NAME = <bucket_name>
7
8s3_source: Source = ...
9
10refreshable_credentials: Refreshable[SourceCredentials] = s3_source.get_session_credentials()
11
12session_credentials: SourceCredentials = refreshable_credentials.get()
13
14if not isinstance(session_credentials, AwsCredentials):
15    raise ...
16
17s3_client = boto3.client(
18    "s3",
19    region_name=S3_BUCKET_REGION,
20    aws_access_key_id=session_credentials.access_key_id,
21    aws_secret_access_key=session_credentials.secret_access_key,
22    aws_session_token=session_credentials.session_token,
23)
24
25s3_response = s3_client.list_objects_v2(Bucket=S3_BUCKET_NAME)
```

#### [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#example-oidc-credentials)Example: OIDC credentials

For sources configured with [OIDC authentication](https://www.palantir.com/docs/foundry/data-connection/oidc/), such as [Snowflake](https://www.palantir.com/docs/foundry/available-connectors/snowflake/), session credentials are returned as `OauthCredentials`. These contain a short-lived `access_token` and an `expiration` timestamp.

Copied!

```python
1from external_systems.sources import OauthCredentials, Refreshable, Source, SourceCredentials
2
3my_source: Source = ...
4
5refreshable_credentials: Refreshable[SourceCredentials] = my_source.get_session_credentials()
6
7session_credentials: SourceCredentials = refreshable_credentials.get()
8
9if not isinstance(session_credentials, OauthCredentials):
10    raise ...
11
12access_token: str = session_credentials.access_token
```

## [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#on-premises-connectivity-with-agent-proxy-egress-policies)On-premises connectivity with agent-proxy egress policies

[Foundry worker with agent-proxy policy](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-agent-proxy-policy) sources allow connections in code to be established to on-premise systems as if the connections were made over the open Internet. For more details on how this is configured, refer to the [agent proxy documentation](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/).

### [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#socket-connections)Socket connections

For non-HTTPS connections to external systems that require connections through Foundry's agent proxy, a preconfigured socket is provided. Below is an example of using this socket with an on-premise SFTP server connection.

#### [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#on-premise-sftp-server-example)On-premise SFTP server example

This example uses the [Fabric ↗](https://docs.fabfile.org/en/latest/) library.

Copied!

```python
1import fabric
2
3from external_systems.sources import Source
4from socket import socket
5
6SFTP_HOST = <sftp_host>
7SFTP_PORT = <sftp_port>
8
9on_prem_sftp_server_source: Source = ...
10
11username: str = on_prem_sftp_server_source.get_secret("username")
12password: str = on_prem_sftp_server_source.get_secret("password")
13
14proxy_socket: socket = on_prem_sftp_server_source.create_socket(SFTP_HOST, SFTP_PORT)
15
16with fabric.Connection(
17    SFTP_HOST,
18    user=username,
19    port=SFTP_PORT,
20    connect_kwargs={
21        "password": password,
22        "sock": proxy_socket,
23    },
24) as sftp_conn:
25    sftp_client = sftp_conn.sftp()
26    file_list = sftp_client.listdir(".")
```

### [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#authenticated-proxy-uri)Authenticated proxy URI

For more granular use cases, a pre-authenticated proxy URI is provided to allow connections to on-premises external systems.

#### [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#non-requests-library-example)Non-requests library example

In cases where the requests library client is not sufficient, you may need to use another HTTP client. This example uses the [HTTPX ↗](https://www.python-httpx.org/) library.

Copied!

```python
1import httpx
2
3from external_systems.sources import Source
4from typing import Optional
5
6agent_proxy_source: Source = ...
7
8authenticated_proxy_uri: Optional[str] = agent_proxy_source.get_https_proxy_uri()
9
10source_url: str = agent_proxy_source.get_https_connection().url
11
12with httpx.Client(proxy=authenticated_proxy_uri) as client:
13    response = client.get(source_url + "/api/v1/example/", timeout=10.0)
```

## [](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/#source-properties)Source properties

For source types that are available via the [Foundry API](https://www.palantir.com/docs/foundry/api/v2/connectivity-v2-resources/connections/get-configuration/), the configuration properties can also be directly accessed for use in code.

Copied!

```python
1from external_systems.sources import Source
2
3snowflake_source: Source = ...
4
5account_id: str = snowflake_source.source_configuration.get("accountIdentifier")
```

[← PREVIOUS External functions](https://www.palantir.com/docs/foundry/data-connection/external-functions/)

[NEXT Legacy external transforms →](https://www.palantir.com/docs/foundry/data-connection/external-transforms-legacy/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

