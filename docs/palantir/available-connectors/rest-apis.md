Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/rest-apis/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#rest)REST

Foundry can integrate with external systems that expose a REST (representational state transfer) API. You may need to use a different approach depending on whether you are syncing, exporting, or interactively calling REST APIs. On this page you can find several connection options for secure and efficient integration with REST APIs.

## [](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#rest-api-source)REST API source

The REST API source may be used for workflows requiring interactive HTTP requests to external systems directly from Foundry applications via Actions. For example, you can create a Workshop application with a button that uses a webhook to calls a REST endpoint when clicked, connecting that application to existing workflows and source systems.

Webhooks to HTTP endpoints should use the REST API source type in Data Connection. You will need to configure the base URL, authentication, and an optional port.

| Option | Required | Description |
| --- | --- | --- |
| Domain | Yes | At least one domain must be specified. |
| Authentication | Yes | For each domain, the authentication must be specified. Options include `None`, `Basic`, `Bearer Token`, and `API Key`. |
| Port | No | A port may be optionally specified. By default, all REST webhooks will use HTTPS on port 443. Non-default ports are only supported on legacy [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) sources. |
| Request Options | No | When selecting `API Key` authentication, you may choose whether you want to pass the API Key as a query param or header in the webhook requests. |

The example configuration below shows how to configure a connection to `https://my-domain.com` using bearer token authentication.

![Image 2: New webhook](https://www.palantir.com/docs/resources/foundry/available-connectors/webhooks-rest-api-domains.png?width=500)

The REST API source type does not support other capabilities such as syncs or exports. The legacy `magritte-rest-v2` source type is no longer recommended for Webhooks workflows. Syncs and exports to REST APIs should use external transforms.

[Learn more about Webhooks in Foundry.](https://www.palantir.com/docs/foundry/data-connection/webhooks-overview/)

## [](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#external-transforms-in-code-repositories)External transforms in Code Repositories

Use [external transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/) to configure syncs and exports that require you to call REST APIs. Simply import a source in a [Python Code Repository](https://www.palantir.com/docs/foundry/transforms-python/overview/) and write custom logic to query the API.

You can use external transforms to access REST API sources inaccessible over the internet when using a [Foundry worker with agent egress policies](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-agent-proxy-policy).

[Learn more about calling APIs from code repositories.](https://www.palantir.com/docs/foundry/data-connection/external-transforms/)

### [](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#examples)Examples

The examples below show common patterns of complex external transforms.

#### [](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#oauth-client-credentials-grant)OAuth Client Credentials grant

The [OAuth Client Credentials grant ↗](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4) is a common authentication pattern for non-interactive, service-to-service REST API calls. The client exchanges a `client_id` and `client_secret` at the OAuth2 server's token endpoint for a short-lived access token, then includes that token as a bearer token in the `Authorization` header of every subsequent request to the resource API.

Before writing the transform, configure the REST API source with the OAuth2 token endpoint domain and the resource API domain, and store the `client_id` and `client_secret` as [additional secrets](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#access-source-attributes-and-credentials) on the source. Do not hard-code secrets in your transform.

The request to the token endpoint must use the `application/x-www-form-urlencoded` content type with at least the following parameters:

| Parameter | Value |
| --- | --- |
| `grant_type` | `client_credentials` |
| `client_id` | The application client ID |
| `client_secret` | The application client secret |
| `scope` | Space-separated list of required scopes |

Once you have an access token, include it in the `Authorization` header of every request to the resource API:

```
Authorization: Bearer <access_token>
```

Many APIs return results in pages. A common pattern uses a `nextPageToken` field in the response to indicate there are more results; your transform should loop until no `nextPageToken` is returned.

Access tokens expire. If your transform runs for a long time, you may need to request a new token partway through execution. Check the `expires_in` field from the token response to determine when the token will expire.

##### [](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#basic-client_idclient_secret-example)Basic `client_id`/`client_secret` example

The following example requests an access token and calls a paginated resource API. It uses generic placeholders so that it can be adapted to any OAuth2-protected REST API.

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
11    api_source=Source("<source_rid>")
12)
13@transform_pandas(
14    Output("<output_dataset_rid>"),
15)
16def compute(api_source: ResolvedSource) -> pd.DataFrame:
17    base_url = api_source.get_https_connection().url
18    client = api_source.get_https_connection().get_client()
19
20    client_id = api_source.get_secret("additionalSecretClientId")
21    client_secret = api_source.get_secret("additionalSecretClientSecret")
22
23    token_response = client.post(
24        base_url + "/oauth/token",
25        data={
26            "grant_type": "client_credentials",
27            "client_id": client_id,
28            "client_secret": client_secret,
29            "scope": "<space-separated-scopes>",
30        },
31        headers={"Content-Type": "application/x-www-form-urlencoded"},
32    )
33    token_response.raise_for_status()
34    access_token = token_response.json()["access_token"]
35
36    auth_headers = {"Authorization": f"Bearer {access_token}"}
37
38    results = []
39    page_token = None
40    while True:
41        params = {"pageSize": 100}
42        if page_token:
43            params["pageToken"] = page_token
44
45        response = client.get(
46            base_url + "/api/v1/<resource>",
47            headers=auth_headers,
48            params=params,
49        )
50        response.raise_for_status()
51        body = response.json()
52
53        results.extend(body.get("data", []))
54
55        page_token = body.get("nextPageToken")
56        if not page_token:
57            break
58
59        logger.info(f"Fetched {len(results)} items so far, continuing to next page.")
60
61    return pd.DataFrame(results)
```

To adapt this pattern, replace the token endpoint path, the resource URL, and the `scope` values with those required by the target API. Some OAuth2 servers require additional parameters such as `audience` or `resource` — add them to the `data` dictionary of the token request.

If the target API is the Foundry API itself (a Foundry-to-Foundry call from a transform), see [Call the Foundry API from code](https://www.palantir.com/docs/foundry/available-connectors/foundry/#call-the-foundry-api-from-code) for the Foundry-specific token endpoint, scopes, and setup steps.

##### [](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#jwt-client-assertion-variant-netsuite)JWT client-assertion variant (NetSuite)

Some OAuth2 servers — including NetSuite — require the client to authenticate with a signed JWT client assertion instead of a plain `client_secret`. The following example updates account names in NetSuite from an input dataset of accounts, using the [`POST /account` ↗](https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2025.1/index.html#tag-account) endpoint. To enable the grant type, the `client_id`, `certificate_id`, and `certificate_private_key` are added to the source as [additional secrets](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#access-source-attributes-and-credentials).

Copied!

```python
1from transforms.api import (
2    transform,
3    Output,
4    Input,
5    TransformInput,
6    TransformOutput,
7    TransformContext,
8)
9from transforms.external.systems import external_systems, Source, ResolvedSource
10import datetime
11import jwt
12from urllib.parse import urljoin
13import logging
14
15logger = logging.getLogger(__name__)
16
17@external_systems(
18    netsuite_rest_source=Source("<source_rid>")
19)
20@transform(
21    output=Output("<dataset_rid>"),
22    account_updates=Input("<dataset_rid>"),  # Dataset with schema [account_id: String, account_name: String]
23)
24def update_account_names(
25    netsuite_rest_source: ResolvedSource,
26    account_updates: TransformInput,
27    output: TransformOutput,
28    ctx: TransformContext,
29):
30    # --- Set up connections and secrets ---
31    base_url = netsuite_rest_source.get_https_connection().url
32    client = netsuite_rest_source.get_https_connection().get_client()
33    client_id = netsuite_rest_source.get_secret("additionalSecretClientId")
34    certificate_id = netsuite_rest_source.get_secret("additionalSecretCertificateId")
35    certificate_private_key = netsuite_rest_source.get_secret("additionalSecretPrivateCertificate")
36
37    # --- Helper: Make JWT token ---
38    def make_jwt_token(
39        url, client_id, certificate_id, certificate_private_key, lifetime_in_minutes=59
40    ):
41        current_timestamp = datetime.datetime.now()
42        expiration = current_timestamp + datetime.timedelta(minutes=lifetime_in_minutes)
43
44        payload = {
45            "iss": client_id,
46            "scope": "rest_webservices",
47            "aud": url,
48            "iat": current_timestamp,
49            "exp": expiration,
50        }
51
52        additional_headers = {
53            "kid": certificate_id,
54        }
55
56        return jwt.encode(
57            payload,
58            certificate_private_key,
59            algorithm="ES256",
60            headers=additional_headers,
61        )
62
63    # --- Helper: Get OAuth2 access token ---
64    def get_oauth2_access_token():
65        url = urljoin(base_url, "/services/rest/auth/oauth2/v1/token")
66        payload = {
67            "grant_type": "client_credentials",
68            "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
69            "client_assertion": make_jwt_token(
70                url,
71                client_id,
72                certificate_id,
73                certificate_private_key,
74            ),
75        }
76        headers = {"Content-Type": "application/x-www-form-urlencoded"}
77        response = client.post(url, data=payload, headers=headers)
78        return response.json()["access_token"]
79
80    # --- Prepare data for update ---
81    account_update_data = [
82        {
83            "account_id": row.account_id,
84            "payload": f'{{"acctName": "{row.account_name}"}}',
85        }
86        for row in account_updates.dataframe().collect()
87    ]
88
89    # --- Update accounts ---
90    token = get_oauth2_access_token()
91    headers = {
92        "Content-Type": "application/json",
93        "Authorization": f"Bearer {token}",
94    }
95
96    responses = []
97    for account in account_update_data:
98        account_id = account["account_id"]
99        payload = account["payload"]
100        logger.info(f"Updating account: {account_id} with payload {payload}")
101        url = urljoin(base_url, f"/services/rest/record/v1/account/{account_id}")
102        response = client.patch(url, data=payload, headers=headers)
103        responses.append(
104            {
105                "account_id": account_id,
106                "response_status": response.status_code,
107                "response": response.text,
108            }
109        )
110
111    output.write_dataframe(ctx.spark_session.createDataFrame(responses))
```

#### [](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#use-self-signed-server-certificates)Use self-signed server certificates

On-premise systems sometimes use self-signed server certificates that must be added to the source for the connection to be trusted. These certificates are typically added automatically to the [built-in HTTPS client](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#use-the-built-in-http-client) provided in external transforms. However, some Python clients might rely on the `REQUESTS_CA_BUNDLE` environment variable. In these cases, you will need to override the variable.

The example below demonstrates how to override the `REQUESTS_CA_BUNDLE` to read data from an on-premise SharePoint source using the [Python client for SharePoint ↗](https://pypi.org/project/Office365-REST-Python-Client/)`Office365-REST-Python-Client`, which is a required step to use the client.

Copied!

```python
1from pyspark.sql import DataFrame
2from transforms.api import Output, transform, lightweight
3from transforms.external.systems import external_systems, Source
4import pandas as pd
5import polars as pl
6import tempfile
7import os
8from office365.sharepoint.client_context import ClientContext
9
10@lightweight
11@external_systems(
12    sharepoint_rest=Source("<source_rid>")
13)
14@transform(
15    output=Output("<dataset_rid>"),
16)
17def compute(ctx,  output, sharepoint_rest) -> DataFrame:
18
19    # 1. Add custom certificates to default certificates environment variable
20    cert_file = tempfile.NamedTemporaryFile(delete=False)
21    with open(cert_file.name, 'w') as tmp_f:
22        with open(os.environ.get("REQUESTS_CA_BUNDLE"), 'r') as ca_f:
23            with open(sharepoint_rest.server_certificates_bundle_path, 'r') as source_ca_f:
24                tmp_f.write(ca_f.read())
25                tmp_f.write(source_ca_f.read())
26    cert_file.close()
27
28    os.environ["REQUESTS_CA_BUNDLE"] = cert_file.name # the REQUESTS_CA_BUNDLE now contains the source self-signed certificate
29
30
31    # 2. Connect to Sharepoint using client certificate authentication.
32    client = ClientContext("<sharepoint_url>").with_client_certificate(
33        tenant="<tenant_id>",
34        client_id="<client_id>",
35        thumbprint="<thumbprint>",
36        private_key=sharepoint_rest.get_secret("additionalSecretPrivateKey"),
37        passphrase=sharepoint_rest.get_secret("additionalSecretPrivateKeyPassphrase"), # optional, if the private key is password encrypted
38    )
39
40    # 3. Grab web title and return it as DataFrame
41    current_web = client.web
42    client.load(current_web)
43    client.execute_query()
44
45    data = [{"web_title": current_web.properties['Title']}]
46    output.write_table(pl.from_pandas(pd.DataFrame.from_records(data)))
```

## [](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/#foundry-rest-api)Foundry REST API

For cases where you want to build applications on top of the Foundry platform, use the Foundry REST API. The Foundry API uses the OAuth 2.0 protocol for authentication, primarily uses JSON requests and responses, and provides support for Ontology and Modeling resources.

[Learn more about the Foundry API.](https://www.palantir.com/docs/foundry/api/general/overview/introduction/)

[← PREVIOUS REST API plugin (legacy)](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/)

[NEXT RSS →](https://www.palantir.com/docs/foundry/available-connectors/rss/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

