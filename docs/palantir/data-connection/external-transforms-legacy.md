Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/external-transforms-legacy/

Markdown Content:
## External transforms [Legacy]

Transforms with direct references to egress policies, credential values, and export control markings are in the [legacy](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development, and no additional development is expected. Full support remains available. We recommend using [source-based external transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/).

[Source-based external transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/) is the supported way to connect to external systems with code.

Key advantages of using source-based external transforms over legacy external transforms include support for the following:

*   Connecting to systems not accessible from the Internet.
*   Rotating/updating credentials without requiring code changes.
*   Sharing connection configuration across multiple repositories.
*   Out-of-the-box Python clients for selected source types.
*   Improved and simplified governance workflows for enabling and managing external transform repositories.
*   The visualization of external transforms connected to external sources in [Data Lineage](https://www.palantir.com/docs/foundry/data-lineage/overview/).
*   Compatibility with [Virtual Tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/).

You can use Python transforms in Code Repositories to connect to an external system directly in code. This could be useful if, for example, you require complex logic for interacting with an external system or you want to use a software development kit (SDK) provided by a third party. We recommend using external transforms to perform scheduled syncs and exports using REST APIs.

Before continuing, be sure to create a [Python transforms code repository](https://www.palantir.com/docs/foundry/transforms-python/getting-started/#set-up-a-python-code-repository) and configure it following the instructions below.

Transforms connecting to an external system can only be previewed using the Preview helper in Code Repositories if they do _not_ use Foundry inputs.

## Allow Code Repositories to set up external connections

This section covers the configurations required to use external transforms.

External transforms may only be used with repositories running in **SECURE** mode. Alternative security modes are only available by speaking with Palantir Support.

### Enable external system interaction

Within the code repository you just created, a Foundry user with the `Information Security Officer` role should navigate to the [repository **Settings**](https://www.palantir.com/docs/foundry/code-repositories/repository-settings/) tab, then navigate to **Repository > External systems** to toggle on the option to **Allow access to external systems from this repository**.

The `Information Security Officer` is a default role in Foundry; users can be granted the `Information Security Officer` role in [Control Panel](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/) under **Enrollment permissions**.

![Image 1: Enable external system interaction](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-enable.png)

### Enable dataset inputs

A Foundry user with the `Information Security Officer` role may optionally allow the use of inputs in external transforms.

When a dataset is used as an input to a transform that can communicate with an external system, any data in that dataset can potentially leave Foundry. A Foundry user with the `Information Security Officer` role should select the set of security markings and Organization markings for any data that should be allowed as an input to external transforms in this repository.

As an example, you may have a dataset with a **Sensitive** marking in the **Palantir** Organization. To use this dataset in an external transform, the Information Security Officer must add both the **Sensitive** marking and the **Palantir** Organization under step three, **Configure use of Foundry inputs with external systems**, in the code repository settings.

![Image 2: Enable external system interaction with inputs](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-enable-inputs.png)

### Add the `transforms-external-systems` library

Once external system interactions are enabled for the code repository, you must add the `transforms-external-systems` library from the [**Libraries** sidebar tab](https://www.palantir.com/docs/foundry/transforms-python/use-python-libraries/) to the left of the code interface.

If you are working in a Python transforms repository in a [VS Code workspace](https://www.palantir.com/docs/foundry/vs-code/overview/), navigate to the **Settings** tab in the top navigation bar and select **External systems** to access the **Egress** and **Credentials** settings.

![Image 3: Add library in the Libraries tab to left side panel. ](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-library.png)

### Configure egress and credentials

After adding the library, you can access a new **Egress and Credentials** tab to the left of the code interface.

In this tab, you can set up the network egress policies required for any endpoints called from your code, and add credentials (if necessary) for the repository to use. Note that not all endpoints require credentials.

![Image 4: The Egress and Credentials tab in Code Editor](https://www.palantir.com/docs/resources/foundry/data-connection/external-transforms-egress-and-credentials-tab.png?width=300)

## Use network egress policies and credentials

### Add egress policies

Foundry requires all connections initiated from user-authored code to be bound to a network egress policy when reaching out to external destinations. A network egress policy allows permitted connections that are initiated from user-authored code to reach destinations outside Foundry.

If self-service egress is enabled for your enrollment, you can [create and administer egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/) in Control Panel. If your connection requires you to add a new network route, contact your Information Security Officer or Palantir Support with the details of your egress policy.

If your Foundry instance does not have self-service egress enabled, contact Palantir Support to internally enable the endpoint and configure the policy.

Before using egress policies for external transforms (whether global or non-global), you must import them from the **Egress** tab in the code repository, found in the **Egress and Credentials** panel. The **Egress** tab exposes all policies to which you have permissions and classifies them into three categories:

*   **Imported:** The network egress policies ready for use from your transform in the current code repository.
*   **Importable:** Requires adding a Project reference to the network egress policy.
*   **Access request required:** You have `Viewer` but not `Importer` permissions on the policy.

Within this tab, search for the desired network egress policy. If the policy is marked as `Importable`, select it and choose **Import egress policy to project**.

If the desired network egress policy is marked as `Access request required`, a Foundry user with the `Information Security Officer` role should grant you the `Importer` role in the **Network egress** page in Control Panel. To grant the `Importer` role, the Information Security Officer should first select the desired network policy, then select **Actions > Manage Sharing** to add you as an `Importer` of the policy.

### Add credentials

If your external system requires authorized credentials (username and password) to gain access, you can add a set of credentials using the **Credentials** tab in the **Egress and Credentials** side panel and use them in your code.

You must allowlist Foundry IP addresses if the source endpoint has an allowlisting process in place. Contact Palantir Support for the required IP addresses.

#### Pass certificates

If your external system requires an SSL/TLS certificate to be passed, you can store the certificate in a credential, then use the credential in the external transforms logic.

## Write external transforms logic

You are now ready to write a Python data transform to an external system. We recommend reviewing the basic instructions on how to [write a Python data transformation](https://www.palantir.com/docs/foundry/transforms-python/getting-started/#write-a-python-data-transformation) before writing an external transform.

From the `transforms.external.systems` package, import the required `use_external_systems` decorator along with the `EgressPolicy` and `Credential` (if needed) inputs. From the `transforms-api`, import the transform decorator and `Output`. If your external source does not require credentials, you do not need to add `Credential` inputs to your logic.

You must use the `use_external_systems` decorator to successfully write external transforms logic. A transform cannot contain both the `use_external_systems` decorator and the `external_systems` decorator for source-based external transforms.

The following example shows how to use the `use_external_systems` decorator:

Copied!

```
1from transforms.api import transform, Output
2from transforms.external.systems import use_external_systems, EgressPolicy, Credential
3
4@use_external_systems(
5    egress=EgressPolicy('<policy RID>'),
6    creds=Credential('<credential RID>')
7)
8@transform(
9    output=Output('/path/to/output/dataset')
10)
11def compute(egress, creds, ...):
12    # ...
```

You can then set up a simple transform to reach out to an API:

Copied!

```
1from transforms.api import transform, Output
2from transforms.external.systems import EgressPolicy, use_external_systems, Credential
3import requests
4
5
6@use_external_systems(
7    egress=EgressPolicy('<policy RID>'),
8    creds=Credential('<credential RID>')
9)
10@transform(
11    output=Output('/path/to/output/dataset')
12)
13def compute(egress, output, creds):
14    username = creds.get('username')
15    password = creds.get('password')
16    response = requests.get('https://<API URL>', auth=(username, password), timeout=10).text
17    with output.filesystem().open('response.json', 'w') as f:
18        f.write(response)
```

You can also specify multiple egress policies or credentials in a single transform, as shown in the example below.

Copied!

```
1from transforms.api import transform, Output
2from transforms.external.systems import use_external_systems, EgressPolicy, Credential
3
4@use_external_systems(
5    egress1=EgressPolicy('<first policy RID>'),
6    egress2=EgressPolicy('<second policy RID>'),
7    creds1=Credential('<first credential RID>'),
8    creds2=Credential('<second credential RID>')
9)
10@transform(
11    output=Output('/path/to/output/dataset')
12)
13def compute(egress1, egress2, creds1, creds2, ...):
14    # ...
```

## Add Foundry dataset inputs

In some cases, it may be useful to write external transforms that process Foundry input data. For example, you might want to query an API to gather additional metadata for each row in a tabular dataset. Alternatively, you might have a workflow where you need to mirror Foundry data into an external software system.

Such cases are considered _export-controlled_ workflows, as they open the possibility of exporting secure Foundry data into another system with unknown security guarantees and severed data provenance. It is the transform developer's responsibility to assess the security of an export workflow and ensure that the data leaving Foundry is correctly secured in external systems. Foundry provides governance controls to ensure developers can clearly encode security intent, and Information Security Officers can audit the scope and intent of workflows interacting with external systems.

To opt into export controls, apply an `ExportControl` to your external transform. The `ExportControl` accepts a list of security Markings and Organization IDs that are intended for export. The transform job will then be guaranteed to fail if upstream data is marked with additional security Markings. To expand the set of exportable markings supported in a code repository, an Information Security Officer must adjust the repository settings. Navigate to the **Settings > Repository** tab. Then, in the **External Systems** section, choose to **Allow use of Foundry inputs with external systems in this repository** under Step 3.

Security markings and Organizations are both implemented as markings and should be listed together in the export control configuration. An error message about missing markings may be referring to security markings or Organizations.

As an example, you could use an export external transform to download an image URL as specified in a Foundry dataset:

Copied!

```
1from transforms.api import transform, Input, Output
2from transforms.external.systems import use_external_systems, ExportControl, EgressPolicy
3from pyspark.sql.functions import udf
4import shutil
5
6@use_external_systems(
7    export_control=ExportControl(markings=['<marking ID>']),
8    egress=EgressPolicy(<policy RID>),
9)
10@transform(
11    images_output=Output('/path/to/output/dataset'),
12    image_urls=Input('/path/to/input/dataset'),
13)
14def compute(export_control, egress, images_output, image_urls):
15
16    @udf
17    def download(name, url):
18        response = requests.get(url, stream=True)
19        with images_output.filesystem().open(f'{name}.jpg', mode='wb') as out_file:
20            shutil.copyfileobj(response.raw, out_file)
21
22        return True
23
24    image_urls.dataframe().withColumn('downloaded', download(col('Name'), col('Url'))).collect()
```

## Add Foundry media set outputs

When using external transforms to ingest media files like images, audio, or PDFs, you may want to write the files out to a [media set](https://www.palantir.com/docs/foundry/data-integration/media-sets/). To write a media item to an existing media set, programmatically put the item in the specified media set output:

Copied!

```
1from transforms.api import transform
2from transforms.mediasets import MediaSetOutput
3from transforms.external.systems import use_external_systems
4import requests
5import tempfile
6
7
8@use_external_systems()
9@transform(
10    media_set_output=MediaSetOutput('/path/to/output/media/set')
11)
12def compute(media_set_output):
13    response = requests.get('https://<API URL>')
14    fname = 'my_image.png'
15
16    with tempfile.NamedTemporaryFile() as tmp:
17        tmp.write(response.content)
18        tmp.flush()
19
20        with open(tmp.name, 'rb') as tmp_read:
21            media_set_output.put_media_item(tmp_read, path=fname)
```

## More ways to connect to external systems

### Interact with API services

You are able to programmatically access and use API services if they exist within the external system. As an example, you can use the [Mapbox Static Images API ↗](https://docs.mapbox.com/api/maps/static-images/) from an external transform to output a map image to a Foundry dataset:

Copied!

```
1from transforms.external.systems import EgressPolicy, use_external_systems, Credential
2from transforms.api import transform, Output
3from mapbox import Static
4
5
6@use_external_systems(
7    egress=EgressPolicy('<policy RID>'),
8    mapbox_creds=Credential('<credential RID>')
9)
10@transform(
11    output=Output('/Users/username/datasets/example_mapbox'),
12)
13def compute(output, egress, mapbox_creds):
14    mapbox_access_token = mapbox_creds.get('mapbox-token')
15    client = Static(access_token=mapbox_access_token)
16    london = client.image('mapbox.satellite', lat=51.5072, lon=0.0, z=12)
17    with output.filesystem().open('london.log', 'w') as f:
18        f.write(f'response code: {london.status_code}')
19    with open('london.png', 'wb') as f:
20        f.flush()
21    with output.filesystem().open('london.png', 'wb') as f:
22        f.write(london.content)
```

### Interact with dataset files

You are able to programmatically open, stream, and interact with files as you would with a regular transform. Learn more about [reading and writing unstructured files](https://www.palantir.com/docs/foundry/transforms-python/unstructured-files/#read-and-write-unstructured-files).

### Incremental processing

You are able to run external transforms incrementally as you would with a regular transform.

Maintaining state between execution is often needed in external incremental transforms. With regular incremental transforms, the input files are tracked and compared to the latest transaction processed. For external incremental transforms, the incremental state must be stored in an alternative way explicitly. One option is to save a state file which will hold the latest state of the incremental transform, as shown in the example below:

Copied!

```
1from transforms.api import transform, Input, Output, configure, incremental
2from pyspark.sql import Row
3from pyspark.sql import functions as F
4from pyspark.sql import types as T
5import logging
6import time
7import json
8log = logging.getLogger(__name__)
9
10@incremental()
11@configure(profile=["KUBERNETES_NO_EXECUTORS"])
12@use_external_systems(
13    egress=EgressPolicy('<policy RID>'),
14    creds=Credential('<credential RID>')
15)
16@transform(
17    out=Output("<output_dataset>"),
18)
19def compute(ctx, out, egress, creds):
20    # Get the filesystem of the output dataset to read and write files onto it:
21    out_fs = out.filesystem()
22    state_filename = "_state.json" # Prepend with "_" to consider it a hidden file and not show it in the dataset preview.
23    state = {"last_seen" : 0} # Some arbitrary starting state
24
25    # Try to fetch the state from the output dataset:
26    try:
27        with out_fs.open(state_filename, mode='r') as state_file:
28            data = json.load(state_file)
29            # Validate the fetched state:
30            state = data
31            logging.info(f"state file found, continuing from : {data}")
32
33    except Exception as e:
34        logging.warn("state file not found, starting over from default state")
35
36
37    # Here, write logic to make API Calls, create custom processing, generate a dataframe and save it, or save files directly to the output dataset.
38    # For example purposes, the following generates a dataframe and saves it on the output dataset (as if we fetched some data through API calls):
39    out.write_dataframe(get_dataframe(ctx))
40    # Update the state for next iteration:
41    state["last_seen"] = 1 + state["last_seen"]
42
43    # Save the new state on the output dataset:
44    with out_fs.open(state_filename, "w") as state_file:
45        json.dump(state, state_file)
46
47
48# This function generates a dataframe for example purposes. This step would not be relevant in a production implementation:
49def get_dataframe(ctx):
50    # Define the schema of the dataframe:
51    schema = T.StructType([
52        T.StructField("name", T.StringType(), True),
53        T.StructField("age", T.IntegerType(), True),
54        T.StructField("city", T.StringType(), True)
55    ])
56
57    # Create a list of rows:
58    data = [("Alice", 25, "New York"),
59            ("Bob", 30, "San Francisco"),
60            ("Charlie", 35, "London")]
61
62    # Create a PySpark dataframe:
63    df = ctx.spark_session.createDataFrame(data, schema=schema)
```
