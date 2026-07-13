Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/foundry/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#foundry)Foundry

The Foundry connector enables data sharing from one instance of Foundry to another. This workflow requires access to both Foundry instances, and designates one instance as the "source" and the other as the "destination." Throughout the data connection process, users will perform most functions on the destination instance.

Note that this connector is not currently compatible with [views](https://www.palantir.com/docs/foundry/data-integration/views/) as inputs, nor it is compatible with [restricted views](https://www.palantir.com/docs/foundry/security/restricted-views/). Datasets ingested by the destination instance must first be materialized within their source instance.

For example, if a use case requires the transfer of data from `red.palantirfoundry.com` to `blue.palantirfoundry.com`, most of the setup and subsequent interactions will take place in the destination instance `blue.palantirfoundry.com`, which is where the transferred data will ultimately land. The workflows discussed below read data via ingest, rather than write data via export.

## [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Bulk import | 🟢 Generally available |
| Streaming ingests | 🟢 Generally available |
| Incremental ingests | 🟢 Generally available |
| Exploration | Coming soon |
| Virtual tables | 🟡 Beta |
| Compute pushdown | Not available |
| Table exports | Not available |
| Export tasks | Not available |

## [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#setup)Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper-right corner of the screen.

2.   Select **Foundry** from the available connector types.

3.   Choose to use a [direct connection](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/) over the Internet or to connect [through an intermediary agent](https://www.palantir.com/docs/foundry/data-connection/set-up-agent/).

4.   Input the `hostname` of your source Foundry instance. In this case, `blue.palantirfoundry.com` will pull data from `red.palantirfoundry.com`, so `red.palantirfoundry.com` is the source instance.

5.   Choose a means of authentication.

6.   Create an egress policy for the source instance if you are using a direct connection. To ingest data from `red.palantirfoundry.com` to `blue.palantirfoundry.com`, create an egress policy for the URL `https://red.palantirfoundry.com` on **port 443**. Unlike traditional data connections, you must whitelist all IP addresses within the source instance. This is done through Control Panel by selecting the option to **Configure network ingress**

7.   Follow the instructions below to configure ingress IP allowlisting for the source instance by adding the destination instance's IP addresses to the source instance's **Network ingress** extension in Control Panel:

    1.   Navigate to the **Network egress** Control Panel extension in the destination instance to identify the appropriate IP addresses.
    2.   Launch the **Network ingress** Control Panel extension in the source instance.
    3.   Review the existing documentation to [configure network ingress](https://www.palantir.com/docs/foundry/administration/configure-ingress/).

If you are creating an [agent-based connection](https://www.palantir.com/docs/foundry/data-connection/set-up-agent/), then you must provide the appropriate IP addresses based on your agent's host. Additionally, your agent must use Java 21, at a minimum, as agent-based connections using the Foundry connector are not compatible with prior versions of Java. [Learn more about identifying IPs when configuring network egress](https://www.palantir.com/docs/foundry/administration/configure-egress/#which-ips-do-connections-from-foundry-come-from).

Contact Palantir Support if you are unable to access the **Network ingress** Control Panel extension.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#authentication)Authentication

The Foundry connector supports the following authentication methods:

**Client credentials (production):** For long-lived connections, we only allow client credentials. To create a client credential follow the below steps:

1.   Navigate to Developer Console with the following link:

Copied!

```text
1https://<SOURCE_FOUNDRY_INSTANCE>.palantirfoundry.com/workspace/developer-console/
```

1.   Select **+ New application** and provide a name.
2.   Select **No, I will not use an Ontology SDK** and be sure to **enable** your application after selecting the organization it belongs to.
3.   Select **Backend service**.
4.   Provide your application with appropriate permissions. You can choose **Application permissions** or **User permissions** but, you should leave application permissions checked by default.
5.   You will be shown a client secret that you must copy to your clipboard then paste into the destination Foundry instance.
6.   After saving, navigate to **Oauth & permissions** in the left menu.
7.   Copy your client ID.

This process will create a **Service user** for which you can provide or deny access to assets in Foundry. To check if this service user has access to a dataset or a project, you can use the **Check access** feature for the given asset.

**Personal access token (temporary):** For security purposes, we don't allow tokens to be used in production use cases. Ingests will fail if a sync is run while relying on a token with a life span greater than 36 hours.

Authentication credentials are input in the destination instance. In the source instance, you must create a token that will afford the destination instance the ability to read data. To do so, navigate to the following URL:

Copied!

```text
1https://<SOURCE_FOUNDRY_INSTANCE>.palantirfoundry.com/workspace/settings/tokens
```

Then, select **+ Create token** in the upper-right corner. At this step you can name your token and choose its lifespan. Then, copy your token and navigate to the destination Foundry instance.

The provided credentials must have the following necessary privileges:

*   Browse and read datasets in the source Foundry instance
*   Read from specific projects and datasets being synced

## [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#networking)Networking

The Foundry connector requires network access to the destination Foundry instance on port 443 (HTTPS). The destination instance needs an egress policy that corresponds to the URL of the source instance.

To enable direct connections from a Foundry instance to another Foundry instance, the appropriate [egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/) must be added when setting up the source in the [Data Connection application](https://www.palantir.com/docs/foundry/data-connection/overview/).

Egress policies are not needed for connection using an agent.

## [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#sync-data-from-foundry)Sync data from Foundry

To set up a Foundry-to-Foundry sync, select **Explore and create syncs** in the upper-right of the source **Overview** screen. Browse the available projects and datasets in the source Foundry instance, then select the datasets you want to sync. When ready, select **Create sync for x datasets**.

### [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#incremental-syncs)Incremental syncs

Incremental, or Append, syncs maintain state about the most recent sync and only ingest new or changed data from the target dataset. There are two ways of establishing these ingests with the Foundry Connector.

### [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#incremental-option-1-ingest-all-data-then-updates-only)Incremental option 1: Ingest all data, then updates only

The "initial incremental state" can be set to an arbitrarily distant date, like January 1, 1970. On the first run of the ingest, all data will extracted. Starting from the second run onwards, each ingest will only extract the newest data available.

### [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#incremental-option-2-ingest-all-data-after-a-specific-date)Incremental option 2: Ingest all data after a specific date

The "initial incremental state" can be set to a date of your choosing, like January 1, 2024. Similar to the above option, the first run of the ingest will extract all data. Then subsequent ingests will only extract the newest data available. This is a more filtered option for use cases where the author of the ingest knows that they want to exclude data that was written in the external source system prior to a particular date.

## [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#create-streaming-syncs)Create streaming syncs

You can ingest a stream from one Foundry enrollment to another. The dataset from the source enrollment must be a stream. A sync can be established with a dataset RID and a branch name. After specifying a schema and running for the first time, a new dataset will be created in the destination enrollment.

### [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#streaming-offset-options)Streaming offset options

The sync can be configured to ingest only newly created rows, or to start by ingesting all existing rows of the stream. The main trade-off to consider is that ingesting all historical rows can be expensive from a time and compute perspective if the streaming dataset is sufficiently large.

## [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#virtual-tables)Virtual tables

Datasets are not supported with virtual tables. Only [managed](https://www.palantir.com/docs/foundry/iceberg/storage/)[Iceberg tables](https://www.palantir.com/docs/foundry/data-integration/iceberg-tables/) on the "source" Foundry instance can be virtualized.

This section provides additional details around using [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/) with a Foundry source. This section is not applicable when syncing to Foundry datasets.

The table below highlights the virtual table capabilities that are supported for Foundry.

| Capability | Status |
| --- | --- |
| Bulk registration | 🔴 Not available |
| Automatic registration | 🔴 Not available |
| Table inputs | 🟢 Generally available: tables in [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/), [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/) |
| Table outputs | 🟢 Generally available: tables in [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/), [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/) |
| Incremental pipelines | 🟢 Generally available |
| Compute pushdown | 🔴 Not available |

Review the [virtual tables documentation](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/#supported-foundry-workflows) for details on the supported workflows where Foundry tables can be used as inputs or outputs.

Ensure that the "destination" Foundry instance has network access to the "source" Foundry instance as well as the location of the bucket backing the Iceberg table. Verify that this bucket allows ingress from the "destination" Foundry instance.

## [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#call-the-foundry-api-from-code)Call the Foundry API from code

In addition to the Foundry-to-Foundry sync workflow above, a Python transform can call the Foundry API directly using the [OAuth2 client credentials grant](https://www.palantir.com/docs/foundry/platform-security-third-party/writing-oauth2-clients/#client-credentials-grant). Use this pattern when you need to invoke Foundry endpoints that are not exposed as syncs — for example, to enumerate project contents, trigger builds, or read from the Ontology API from within a transform.

The overall setup (REST API source configuration, storing `client_id`/`client_secret` as additional secrets, and the generic token-request and pagination scaffolding) is the same as any other OAuth2 client credentials flow. Review the [OAuth Client Credentials grant example](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#oauth-client-credentials-grant) on the REST API connector page for the generic pattern.

The sections below cover the Foundry-specific details that differ from a third-party API.

### [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#foundry-token-endpoint)Foundry token endpoint

Foundry's OAuth2 token endpoint is:

```
POST /multipass/api/oauth2/token
```

The endpoint is hosted on the Foundry instance you are calling. If the transform runs on the same instance it is calling, the `hostname` on the REST API source is that same instance; if it is a different instance, the source's `hostname` is that of the target instance and you must configure [egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/) and [ingress allowlisting](https://www.palantir.com/docs/foundry/administration/configure-ingress/) as described in [Networking](https://www.palantir.com/docs/foundry/available-connectors/foundry/#networking).

Learn more about the [token endpoint parameters](https://www.palantir.com/docs/foundry/platform-security-third-party/writing-oauth2-clients/#token-endpoint).

### [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#foundry-scopes)Foundry scopes

Every Foundry API endpoint documents the scope it requires — see the per-endpoint reference in the [API documentation](https://www.palantir.com/docs/foundry/api/general/overview/introduction/). Some common examples:

| Scope | Grants access to |
| --- | --- |
| `api:datasets-read` | Read datasets |
| `api:datasets-write` | Write datasets |
| `api:ontologies-read` | Read Ontology objects and link types |

Request only the scopes your transform needs. Multiple scopes are separated by spaces, for example `api:datasets-read api:datasets-write`.

### [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#create-a-client)Create a client

The `client_id` and `client_secret` used in the token request come from a [third-party application](https://www.palantir.com/docs/foundry/platform-security-third-party/register-3pa/) registered on the target Foundry instance. Follow the steps in [Authentication](https://www.palantir.com/docs/foundry/available-connectors/foundry/#authentication) above to create a backend service application and obtain the `client_id` and `client_secret`, then store them as [additional secrets](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#access-source-attributes-and-credentials) on your REST API source.

The service user created for the client must be granted permissions on every project, dataset, or Ontology resource the transform needs to access.

### [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#example-list-project-children)Example: List project children

The following transform requests an access token against `/multipass/api/oauth2/token`, then uses the token to list the children of a project via the Foundry `/api/v2/filesystem/resources/{rid}/children` endpoint. For the generic token-request and pagination scaffolding this example reuses, see the [REST API OAuth Client Credentials grant example](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#oauth-client-credentials-grant).

Copied!

```python
1import logging
2
3import pandas as pd
4from transforms.api import Output, transform_pandas
5from transforms.external.systems import external_systems, Source, ResolvedSource
6
7logger = logging.getLogger(__name__)
8
9
10@external_systems(
11    foundry_api_source=Source("<source_rid>")
12)
13@transform_pandas(
14    Output("<output_dataset_rid>"),
15)
16def compute(foundry_api_source: ResolvedSource) -> pd.DataFrame:
17    base_url = foundry_api_source.get_https_connection().url
18    client = foundry_api_source.get_https_connection().get_client()
19
20    client_id = foundry_api_source.get_secret("additionalSecretClientId")
21    client_secret = foundry_api_source.get_secret("additionalSecretClientSecret")
22
23    token_response = client.post(
24        base_url + "/multipass/api/oauth2/token",
25        data={
26            "grant_type": "client_credentials",
27            "client_id": client_id,
28            "client_secret": client_secret,
29            "scope": "api:datasets-read",
30        },
31        headers={"Content-Type": "application/x-www-form-urlencoded"},
32    )
33    token_response.raise_for_status()
34    access_token = token_response.json()["access_token"]
35
36    auth_headers = {"Authorization": f"Bearer {access_token}"}
37
38    project_rid = "ri.compass.main.folder.xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
39    resources = []
40    page_token = None
41    while True:
42        params = {"pageSize": 100}
43        if page_token:
44            params["pageToken"] = page_token
45
46        response = client.get(
47            base_url + f"/api/v2/filesystem/resources/{project_rid}/children",
48            headers=auth_headers,
49            params=params,
50        )
51        response.raise_for_status()
52        body = response.json()
53
54        for resource in body.get("data", []):
55            resources.append({
56                "rid": resource.get("rid"),
57                "name": resource.get("displayName"),
58                "type": resource.get("type"),
59            })
60
61        page_token = body.get("nextPageToken")
62        if not page_token:
63            break
64
65        logger.info(f"Fetched {len(resources)} resources so far, continuing to next page.")
66
67    return pd.DataFrame(resources)
```

### [](https://www.palantir.com/docs/foundry/available-connectors/foundry/#related-documentation)Related documentation

*   [OAuth Client Credentials grant example](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#oauth-client-credentials-grant) — generic token-request and pagination pattern
*   [Writing OAuth2 clients for Foundry](https://www.palantir.com/docs/foundry/platform-security-third-party/writing-oauth2-clients/) — OAuth2 protocol details and endpoint reference
*   [External transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/) — setup guide and full feature reference
*   [Application restrictions](https://www.palantir.com/docs/foundry/developer-console/application-restrictions/) — configuring restrictions for third-party applications

[← PREVIOUS Facebook Ads](https://www.palantir.com/docs/foundry/available-connectors/facebook-ads/)

[NEXT FreshBooks →](https://www.palantir.com/docs/foundry/available-connectors/freshbooks/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

