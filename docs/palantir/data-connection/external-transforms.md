Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/external-transforms/

Published Time: Thu, 09 Jul 2026 17:47:53 GMT

Markdown Content:
## External transforms

External transforms allow connections to external systems from [Python transforms](https://www.palantir.com/docs/foundry/transforms-python/overview/) repositories.

External transforms are primarily used to perform [batch sync](https://www.palantir.com/docs/foundry/data-connection/set-up-sync/), [export](https://www.palantir.com/docs/foundry/data-connection/export-overview/), and [media sync](https://www.palantir.com/docs/foundry/data-connection/media-set-sync/) workflows when one of the following is true:

*   An existing Data Connection source type is not available.
*   The desired capability is not available for the target source type.
*   The capability offered through the Data Connection user interface does not have the desired features.

Solutions to these situations may include the following:

*   Connecting to REST APIs, both over the Internet and within a private network.
*   Connecting to databases to arrange customized query logic not currently possible in the Data Connection user interface.
*   Transforming data as needed during sync or export. This could include batching files together before writing to Foundry, handling custom encryption/decryption of data during transfer, and more.

Any transforms that use [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/) are also considered to be external transforms, since the transforms job must be able to reach out to the external system that contains the virtualized data. To use [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/#virtual-tables-in-code-repositories) in Python transforms, follow the instructions below for details on how to set up the source.

## Setup guide

In this setup guide, we will walk through creating a Python transforms repository that connects to the [free public dictionary API ↗](https://dictionaryapi.dev/). The examples then use this API to explain various features of external transforms and how they can be used with the API.

The dictionary API used in this setup guide is unaffiliated with Palantir and may change at any time. This tutorial is not an endorsement, recommendation, or suggestion to use this API for production use cases.

### Prerequisite: Create a Python transforms repository

Before following this guide, be sure to first create a Python transforms repository and review how to author Python transforms as described in [our tutorial](https://www.palantir.com/docs/foundry/transforms-python/getting-started/). All features of Python transforms are compatible with external transforms.

### Prerequisite: Create a Data Connection source

Before you can connect to an external system from your Python repository, you must create a Data Connection source that you can import into code. For this tutorial, we will create a REST API source that connects to the dictionary API mentioned above.

#### Option 1: Create source in the external systems sidebar

The quickest way to create a source for use in external transforms is from a Python transforms code repository. Once you have initialized a repository, complete the following steps to set up a generic source:

If you are working in a Python transforms repository in a [VS Code workspace](https://www.palantir.com/docs/foundry/vs-code/overview/), the **External systems** settings are located in the **Settings** tab of the top navigation bar.

1.   From the left side panel, open the **External systems** tab.
2.   Select **Add > Create new**.

![Image 1: Select "Create new" to create a new generic connector from Code Repositories.](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-create-new-generic-connector.png)

1.   Choose a name for your source and a Project in which to store it. Upon creation, the newly created source will show up in the left side panel. Any egress policies, secrets and exportable markings can be directly configured from this panel.

![Image 2: Newly created generic connector from Code Repositories](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-new-generic-connector-created.png)

1.   For this tutorial, you should add an [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/) for the dictionary API: `api.dictionaryapi.dev`. You will not need any secrets since this API does not require authentication, and export controls may be skipped for now. However, they will be required to [use Foundry data inputs with this source](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#use-foundry-inputs-in-external-transforms).

2.   Since this connection is to a REST API, you will be automatically prompted to convert your generic connector to a REST API source so that you can use the built-in Python requests client.

#### Option 2: Create a source in Data Connection

You may also create a source from the Data Connection application or use an existing source you have already configured. To use this option, follow the steps below:

1.   Navigate to the Data Connection application within Foundry and choose **New Source**. From the list of options, select **REST API**.

![Image 3: Data connection new source page with a red box around the REST API card](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-choose-rest-api-source.png)

1.   Review the **Overview** page, then select **Continue** in the bottom right. You will be prompted to choose the connection worker: pick a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) to connect to the dictionary API, because [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) connections are not supported for external transforms.

2.   Choose a name for your source, and select a Project to which it should be saved.

3.   Fill out the **Domains** section with the connection information of the API source. The configuration for the dictionary API example is shown below:

![Image 4: REST API source creation page showing configuration to connect to api.dictionaryapi.dev without any authentication](https://www.palantir.com/docs/resources/foundry/data-connection/external-functions-configure-dictionary-api-source.png)

1.   For this example, we also need to create the necessary egress policy. The policy will be automatically suggested in the **Network Connectivity** section if you completed the previous step:

![Image 5: Suggested egress panel showing a suggested policy for api.dictionaryapi.dev on port 443](https://www.palantir.com/docs/resources/foundry/data-connection/external-functions-suggested-egress-for-dictionary-api.png)

1.   Select **Save**, then **Save and continue** to complete the source setup.

### Prerequisite: Import the `transforms-external-systems` library in your repository

To use external transforms, you must first import the `transforms-external-systems` library in your repository. Libraries are installed using the **Libraries** tab in the left side panel, searching for the desired library, then selecting **Install**.

![Image 6: Code repository showing the transforms-external-systems library installed.](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-install-transforms-external-systems-library.png)

[Learn more about installing and managing libraries.](https://www.palantir.com/docs/foundry/code-repositories/libraries/).

### Prerequisite: Import a source into code

REST API sources with multiple domains may not be imported. Instead, you should create a separate REST API source per domain if multiple domains are required in the same external transform.

1.   First, you must allow the REST API source to import into code. To configure this setting, navigate to the source in Data Connection, then to the **Connection settings > Code import configuration** tab.

2.   Toggle on the option to **Allow this source to be imported into code repositories**. Any code repositories that import this source will be displayed on this page.

![Image 7: Dictionary API source configuration options in data connection, showing the panel for code import configuration with code imports toggled on.](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-allow-dictionaryapi-source-to-be-imported-into-code.png)

1.   You are now ready to return to your code repository and import the source. In the repository, navigate to the left side panel and select the **External Systems** tab represented by the globe icon. Within the side panel, select **Add**, then search for the Dictionary API source that you previously created. Select this source, then **Confirm selection** to import.

![Image 8: Dialog for importing the Dictionary API source into a Python transforms repository.](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-import-dictionaryapi-source-to-repository.png)

You must have at least `Editor` access to the source to be able to import it in the repository. Read more about [permissions](https://www.palantir.com/docs/foundry/data-connection/permissions/#external-transforms-pipelines-and-compute-modules)

## Write external transforms

Once you set up a Python transforms repository that imports your Dictionary API source, you are ready to start writing Python transforms code that uses the source to connect externally.

Review our [external transforms examples](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#end-to-end-examples) to find fully configured examples of typical read or write workflows on top of common systems.

### Import and configure the `@external_systems` decorator

To use external transforms, you must import `external_systems` decorator and `Source` object from the `transforms.external.systems` library:

Copied!

`1from transforms.external.systems import external_systems, Source`

You should then specify the sources that should be included in a transform by using the `external_systems` decorator:

Copied!

```
1@external_systems(
2    dictionary_api_source=Source("ri.magritte..source.e301d738-b532-431a-8bda-fa211228bba6")
3)
```

Sources will automatically be rendered as links to open in Data Connection and will display the source name instead of the resource identifier.

### Access source attributes and credentials

Once a source is imported into your transform, you can access attributes of the source using the built-in connection object using the `get_https_connection()` method. The example below shows how we can grab the base URL of the Dictionary API source we configured in the previous step.

Copied!

`1dictionary_api_url = dictionary_api_source.get_https_connection().url`

Additional secrets or credentials stored on the source can also be accessed from the source. To identify the secret names that can be accessed, navigate to the left panel in your transform.

![Image 9: Left panel showing the Dictionary API source details.](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-left-panel.png)

Use the following syntax to access secrets in code:

Copied!

`1dictionary_api_source.get_secret("additionalSecretFoo")`

Currently, it is not possible to access source attributes that are not credentials unless the source provides an HTTPS client. For example, on a [PostgreSQL source](https://www.palantir.com/docs/foundry/available-connectors/postgresql/) you will not be able to access the `hostname` or other non-secret attributes.

### Use the built-in HTTP client

For sources that provide a RESTful API, the source object allows you to interact with a built-in HTTPS client. This client will be pre-configured with all of the details specified on the source, including any server or client certificates, and you can simply start making requests to the external system.

Copied!

```
1dictionary_api_url = dictionary_api_source.get_https_connection().url
2dictionary_api_client = dictionary_api_source.get_https_connection().get_client()
3
4# dictionary_api_client is a pre-configured Session object from Python `requests` library.
5# Example of GET request:
6response = dictionary_api_client.get(dictionary_api_url + "/api/v2/entries/en/" + word, timeout=10)
```

Alternatively, you can use your own client or source-specific Python libraries and use the source object to [retrieve attributes and credentials](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#access-source-attributes-and-credentials).

Changing the working directory (for example, using `os.chdir()`) in your transforms or UDFs may break references to environment variables necessary for establishing secure connections.

When connecting to an on-premise system using an [agent proxy runtime (sunset)](https://www.palantir.com/docs/foundry/data-connection/agent-proxy-runtime/), you _must_ use the built-in client since that will be automatically configured with the necessary agent proxy configuration.

### Example: Import data from the Dictionary API

The below example illustrates a complete transform that runs through a list of words and retrieves their phonetic transcription from the Dictionary API.

Copied!

```
1from pandas import DataFrame
2from transforms.api import transform
3from transforms.api import Output, Input, TransformContext, transform_pandas
4from transforms.external.systems import external_systems, Source
5import pandas as pd
6import logging
7
8logger = logging.getLogger(__name__)
9
10
11@external_systems(
12    dictionary_api_source=Source(
13        "<source_rid>"
14    )
15)
16@transform_pandas(Output("<output_dataset_rid>"))
17def compute(dictionary_api_source) -> DataFrame:
18    dictionary_api_url = dictionary_api_source.get_https_connection().url
19    dictionary_api_client = dictionary_api_source.get_https_connection().get_client()
20
21    words = ["apple", "dog", "cat"]
22
23    phonetics = []
24
25    for word in words:
26        logger.info("Fetching word from api.dictionaryapi.dev : " + word)
27
28        response = dictionary_api_client.get(
29            dictionary_api_url + "/api/v2/entries/en/" + word
30        ).json()
31
32        phonetics += [{"word": word, "phonetic": response[0]["phonetic"]}]
33
34    return pd.DataFrame(phonetics)
```

## Use Foundry inputs in external transforms

External transforms often need to use Foundry input data. For example, you might want to query an API to gather additional metadata for each row in a tabular dataset. Alternatively, you might have a workflow where you need to export Foundry data into an external software system.

Such cases are considered _export-controlled_ workflows, as they open the possibility of exporting secure Foundry data into another system with unknown security guarantees and severed data provenance. When configuring a source connection, the source owner must specify whether or not data from Foundry may be exported, and provide the set of security markings and organizations may be exported. Foundry provides governance controls to ensure developers can clearly encode security intent, and Information Security Officers can audit the scope and intent of workflows interacting with external systems.

### Configure export controls on the source

Exports are controlled using [security markings](https://www.palantir.com/docs/foundry/security/markings/). When configuring a source, the export configuration is used to specify which security markings and organizations are safe to export to the external system. This is done by navigating to the source in the data connection application, and then navigating to the **Connection settings > Export configuration** tab. You should then toggle on the option to **Enable exports to this source** and select the set of markings and organizations that may potentially be exported.

Doing this requires permission to remove markings on the relevant data and Organizations, since exporting is considered equivalent to removing markings on data within Foundry.

The setting to **Enable exports to this source** must be toggled on to allow the following:

*   Use datasets, media sets, and streams as an input to Python transforms code importing this source.
*   Use virtual tables registered on this source in Python transforms.

Below you can see an example export configuration for the Dictionary API source, allowing data from the `Palantir` organization with no additional security markings to be exported to the Dictionary API:

![Image 10: Data connection settings showing the export configuration for Dictionary API source with enable exports to this source toggled on](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-export-configuration-for-dictionaryapi-source.png)

Note that **Enable exports to this source** must be toggled on _even if you are not actually exporting data to this system_, since allowing Foundry data inputs into the same compute job with an open connection to this system means that data _could_ be exported.

### Example: Use Foundry imports alongside data from the Dictionary API

In this example, we use an input dataset of words instead of a static hard-coded list. It also illustrates basic error handling based on the status code of the response.

Copied!

```
1from pandas import DataFrame
2from transforms.api import transform
3from transforms.api import Output, Input, TransformContext, transform_pandas
4from transforms.external.systems import external_systems, Source, ResolvedSource
5import pandas as pd
6import logging
7
8logger = logging.getLogger(__name__)
9
10
11@external_systems(
12    dictionary_api_source=Source(
13        "<source_rid>"
14    )
15)
16@transform_pandas(
17    Output("<output_dataset_rid>"),
18    words_df=Input("<input_dataset_rid>"),
19)
20def compute(dictionary_api_source: ResolvedSource, words_df: DataFrame) -> DataFrame:
21    dictionary_api_url = dictionary_api_source.get_https_connection().url
22    dictionary_api_client = dictionary_api_source.get_https_connection().get_client()
23
24    words = words_df["word"].tolist()
25
26    phonetics= []
27
28    for word in words:
29        logger.info("Fetching word from api.dictionaryapi.dev: " + word)
30
31        response = dictionary_api_client.get(
32            dictionary_api_url + "/api/v2/entries/en/" + word
33        )
34
35        if response.status_code == 200:
36            data = response.json()[0]
37
38            if "phonetic" in data:
39                phonetic_transcription = data["phonetic"]
40            else:
41                logger.warning(f"No phonetic transcription found for {word}.")
42                phonetic_transcription = None
43        else:
44            logger.warning(f"Request for {words} failed with status code {response.status_code}.")
45            phonetic_transcription = None
46
47        phonetics += [{"word": word, "phonetic": phonetic_transcription}]
48
49    return pd.DataFrame(phonetics)
```

## End-to-end examples

Review the documentation below the find complex end-to-end examples for common systems:

*   REST API sources 
    *   [OAuth Client Credentials grant](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#oauth-client-credentials-grant)
    *   [Self-signed server certificates](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#use-self-signed-server-certificates)

*   Foundry API 
    *   [Call the Foundry API from code](https://www.palantir.com/docs/foundry/available-connectors/foundry/#call-the-foundry-api-from-code)

*   File-based systems 
    *   [Amazon S3](https://www.palantir.com/docs/foundry/available-connectors/amazon-s3/#use-s3-sources-in-code)
    *   [SMB](https://www.palantir.com/docs/foundry/available-connectors/smb/#use-smb-sources-in-code)

*   Custom Python SDKs 
    *   [BigQuery](https://www.palantir.com/docs/foundry/available-connectors/bigquery/#use-bigquery-sources-in-code)
    *   [Snowflake](https://www.palantir.com/docs/foundry/available-connectors/snowflake/#use-snowflake-sources-in-code)
    *   [SharePoint](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#use-sharepoint-sources-in-code)
    *   [SFTP](https://www.palantir.com/docs/foundry/available-connectors/sftp/#use-sftp-sources-in-code)
    *   [Kafka](https://www.palantir.com/docs/foundry/available-connectors/kafka/#use-kafka-sources-in-code)

*   Agent host file access 
    *   [Directory (SSH)](https://www.palantir.com/docs/foundry/available-connectors/directory/#ingest-files-from-agent-hosts-using-external-transforms)

*   JDBC-based systems 
    *   [PostgreSQL](https://www.palantir.com/docs/foundry/available-connectors/postgresql/#use-postgresql-sources-in-code)
    *   [Microsoft SQL Server](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/#use-microsoft-sql-server-sources-in-code)

## Permissions

Before using external transforms, make sure to familiarize yourself with the [Data Connection - Permissions reference](https://www.palantir.com/docs/foundry/data-connection/permissions/) page.

## Comparison of external transforms and legacy external transforms

The following are some key workflow differences between external transforms and legacy external transforms:

*   The tab for importing sources will always automatically show for external transforms. Previously, tabs for adding egress policy and credentials would only show after an Information Security Officer had toggled on the ability to use external systems in repository settings.
*   Settings to allow external connections and the use of inputs are no longer located in repository settings. Instead, these are controlled on each individual source.
*   Credentials, egress policies, and exportable markings are no longer specified in code. Instead, these settings are taken from the sources that are imported into the transform and applied automatically to the job. 
    *   If this configuration is changed at the source level, it will automatically be picked up by transforms that import the source without any code change or version bump required. This allows centralized governance of credentials, egress, and exportable Markings which will propagate immediately to downstream workflows.
    *   Changes will take effect as of the start of a build and will not affect running builds.

*   The decorator has changed from `@use_external_systems()` to `@external_systems()`.

Key advantages of external transforms include the following:

*   Support for connecting to systems not accessible from the Internet
*   Support for rotating/updating credentials without requiring code changes
*   Support for sharing connection configuration across multiple repositories
*   Out-of-the-box Python clients for selected source types
*   Improved and simplified governance workflows for enabling and managing external transform repositories
*   Visualization of external transforms connected to external sources in [Data Lineage](https://www.palantir.com/docs/foundry/data-lineage/overview/)

## Migrate to external transforms

There is currently no automatic migration path to update external transforms to external transforms. However, the manual action required is expected to be minimal for most workflows.

The following are the main steps to manually migrate to external transforms:

1.   Identify the set of credentials, egress policies, and export control Markings used in your existing legacy external transforms code.
2.   Identify or configure Data Connection sources that connect to the systems you wish to connect to from your external transforms. Ensure these sources are configured to allow imports into code.
3.   Import the relevant sources from step 2 into your existing Python transforms repository.
4.   Change your code to import and use the new `@external_systems()` decorator with source references, then remove any instances of the `@use_external_systems()` decorator. This will likely involve updating any references to credentials in your transforms logic to instead reference credentials retrieved from the sources you are now importing.
5.   Test your changes on a branch to ensure that your transforms continue to build successfully.
6.   After merging your updated transforms code, you can now un-toggle the repository settings.

Transforms cannot contain both external transforms and their legacy version. To remedy this, you can migrate all legacy external transforms to use source-based external transforms instead (preferred), or split your transform into multiple transforms. Transforms can be split into one that uses the `use_external_systems` decorator and another that uses the `external_systems` decorator.

## Capabilities

### `lightweight` external transforms

External transforms are also compatible with the single-node (lightweight) [compute engines](https://www.palantir.com/docs/foundry/transforms-python/compute-engines/). Using lightweight compute can dramatically increase the execution speed for transforms operating on small and medium-sized data.

The below example shows how the `@lightweight` decorator can be added to a transform along with the `@external_systems` decorator. For more information on the options for configuring lightweight transforms, see the [Python transforms documentation](https://www.palantir.com/docs/foundry/api-reference/transforms-python-library/api-transform/#transforms.api.transform.using).

Copied!

```
1@lightweight
2@external_systems(
3    dictionary_api_source=Source("<source_rid>")
4)
```

For more in-depth examples, refer to [sources in Python](https://www.palantir.com/docs/foundry/data-connection/sources-in-python/).

### Sources using agent proxy policies

External transforms support connecting to on-premise and privately hosted systems through Data Connection agents using [agent proxy policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies).

The example below demonstrates how to connect to a PostgreSQL database using a Spark sidecar transform. For more information, see the [Spark sidecar transforms documentation](https://www.palantir.com/docs/foundry/transforms-container/transforms-sidecar/).

Note that Spark sidecar transforms may not be needed for simpler use cases than the example below; other examples that do not need Spark sidecar transforms can be found [elsewhere on this page](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#external-transforms).

#### Create a source using an Agent network policy

To configure external transforms with private network access:

1.   **Create a [PostgreSQL source](https://www.palantir.com/docs/foundry/available-connectors/postgresql/) with direct connection runtime:** When creating your Data Connection source, select **Direct connection** as the runtime option.
2.   **Configure network policy:** In the source's network connectivity settings, create a network policy that defines the routing through your Data Connection agent. Select **Agent proxy** and then choose the agents that should be used to proxy.

![Image 11: The control panel for Network egress policy with the policy created.](https://www.palantir.com/docs/resources/foundry/data-connection/create-agent-proxy-network-egress-policy.png) 3. **Enable code imports:** In the code import configuration panel, toggle on **Allow this source to be imported into code repositories**.

![Image 12: Dictionary API source configuration options in data connection, showing the panel for code import configuration with code imports toggled on.](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-allow-dictionaryapi-source-to-be-imported-into-code.png) 4. Bootstrap a transform code repository and import the source.

#### Example: PostgreSQL connection via Spark sidecar

This example shows how to query a PostgreSQL database using a containerized Flask API within a sidecar container.

##### Dockerfile

Copied!

```
1FROM python:3.8-slim
2WORKDIR /usr/src/app
3COPY requirements.txt ./
4RUN pip install --no-cache-dir -r requirements.txt
5COPY . .
6EXPOSE 1234
7USER 5001
8CMD ["python", "app.py"]
```

##### requirements.txt

```
flask
psycopg2-binary
```

##### Flask application (app.py)

Copied!

```
1from flask import Flask, jsonify
2import psycopg2
3
4app = Flask(__name__)
5
6@app.route('/tables', methods=['POST'])
7def tables():
8    data = request.get_json()
9    password = data.get('password')
10
11    connection_params = {
12        "dbname": "<databasename>",
13        "user": "<user>",
14        "password": password,
15        "host": "postgres.com",
16        "port": "5432",
17    }
18
19
20    data = {"schema": [], "table": []}
21    with psycopg2.connect(**connection_params) as conn:
22        with conn.cursor() as cur:
23            cur.execute(
24                "SELECT table_schema, table_name FROM information_schema.tables WHERE table_type = 'BASE TABLE'"
25            )
26            tables = cur.fetchall()
27            for schema, table in tables:
28                data["schema"].append(schema)
29                data["table"].append(table)
30
31    return jsonify(data)
```

##### Transform implementation

Copied!

```
1import requests
2from transforms.sidecar import sidecar
3from transforms.external.systems import external_systems, Source
4from transforms.api import transform_df, Output
5
6@external_systems(
7    my_source=Source("<source_rid>")
8)
9@sidecar(image="simple", tag="0.0.1")
10@transform_df(
11    Output("<output_dataset_rid>"),
12)
13def compute(my_source, ctx):
14    password = my_source.get_secret("PASSWORD")
15    response = requests.post("http://localhost:1234/tables", json={"password": password})
16    data = [(response.text,)]
17    columns = ["table_schema_json"]
18    return ctx.spark_session.createDataFrame(data, columns)
```

## Advanced patterns

### Write data to Parquet files with memory-aware buffering

When an external transform fetches many records from an external source, holding all records in memory before writing can cause out-of-memory errors. The `BufferedParquetWriter` class below periodically flushes accumulated rows to Parquet files once a configurable memory threshold is exceeded. The pattern works with any external data source and uses `filesystem().open()` to write raw files and `put_metadata()` to finalize schema inference.

Copied!

```
1import gc
2import logging
3from datetime import datetime
4
5import pyarrow as pa
6import pyarrow.parquet as pq
7from pympler import asizeof
8
9from transforms.api import Output, transform, LightweightOutput
10from transforms.external.systems import external_systems, Source, ResolvedSource
11
12logger = logging.getLogger(__name__)
13
14
15class BufferedParquetWriter:
16    """Buffers rows in memory and flushes them to Parquet files when the buffer
17    exceeds a configurable size threshold."""
18
19    def __init__(self, output: LightweightOutput, schema: pa.Schema, flush_threshold_mb: int = 64):
20        self.output = output
21        self.schema = schema
22        self.flush_threshold_bytes = flush_threshold_mb * 1024 * 1024
23        self.buffer = []
24        self.buffer_size_bytes = 0
25        self.file_index = 0
26        self.row_size_estimate = None
27
28    def append(self, row: dict):
29        """Add a row to the buffer. If the buffer exceeds the threshold, flush to disk."""
30        self.buffer.append(row)
31
32        # Estimate row size from the first row, then use that estimate going forward
33        if self.row_size_estimate is None:
34            self.row_size_estimate = asizeof.asizeof(row)
35        self.buffer_size_bytes += self.row_size_estimate
36
37        if self.buffer_size_bytes >= self.flush_threshold_bytes:
38            self.flush()
39
40    def flush(self):
41        """Write buffered rows to a Parquet file and clear the buffer."""
42        if not self.buffer:
43            return
44        self.file_index += 1
45        table = pa.Table.from_pylist(self.buffer, schema=self.schema)
46        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
47        filename = f"output_{timestamp}_{self.file_index}.parquet"
48        with self.output.filesystem().open(filename, "wb") as f:
49            pq.write_table(table, f)
50        logger.info(f"Flushed {len(self.buffer)} rows to {filename}")
51        self.buffer = []
52        self.buffer_size_bytes = 0
53        gc.collect()
54
55    def finalize(self):
56        """Flush any remaining rows and trigger schema inference."""
57        self.flush()
58        if self.file_index > 0:
59            self.output.put_metadata()
60
61
62# Define the schema for your output records
63OUTPUT_SCHEMA = pa.schema([
64    ("id", pa.string()),
65    ("name", pa.string()),
66    ("value", pa.float64()),
67])
68
69
70@external_systems(
71    my_source=Source("<source_rid>")
72)
73@transform.using(
74    output=Output("<output_dataset_rid>"),
75).with_resources(
76    memory_gb=4,
77)
78def compute(my_source: ResolvedSource, output: LightweightOutput):
79    output.set_mode("replace")
80    writer = BufferedParquetWriter(output, OUTPUT_SCHEMA, flush_threshold_mb=64)
81
82    # Replace the loop below with your data fetching logic.
83    # For example, iterate over pages from an API, rows from a database cursor,
84    # or messages from a message queue.
85    # Each call to append() adds data to the writer, which automatically
86    # flushes to a Parquet file when the buffer exceeds the threshold.
87    for record in fetch_records_from_source(my_source):
88        writer.append({
89            "id": record["id"],
90            "name": record["name"],
91            "value": record["value"],
92        })
93
94    # Write any remaining buffered rows and finalize schema inference.
95    writer.finalize()
```

### Export a dataset as CSV

When you need to export data from Foundry as CSV, for example to deliver files to an external system that expects CSV format, you can use an external transform that reads an input dataset and writes a CSV file to the output using `filesystem().open()`. The output dataset can then be exported through [Data Connection](https://www.palantir.com/docs/foundry/data-connection/export-overview/).

Copied!

```
1import csv
2
3from transforms.api import Input, Output, transform, LightweightInput, LightweightOutput
4
5
6@transform.using(
7    source_data=Input("<input_dataset_rid>"),
8    csv_output=Output("<output_dataset_rid>"),
9)
10def compute(source_data: LightweightInput, csv_output: LightweightOutput):
11    OUTPUT_FILENAME = "export.csv"
12
13    # Read the input dataset as a Polars DataFrame.
14    df = source_data.polars()
15    fieldnames = df.columns
16
17    # Write the data as a CSV file.
18    with csv_output.filesystem().open(OUTPUT_FILENAME, "w") as f:
19        writer = csv.DictWriter(f, fieldnames=fieldnames)
20        writer.writeheader()
21        for row in df.iter_rows(named=True):
22            writer.writerow(row)
```
