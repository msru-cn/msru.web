Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#sharepoint-online)SharePoint Online

Connect to SharePoint Online to import files from specified SharePoint libraries into Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Exploration | 🟢 Generally available |
| Bulk import | 🟢 Generally available |
| Incremental | 🟢 Generally available |
| Export tasks | 🟡 Sunset |
| [File exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#file-exports) | 🟢 Generally available |

## [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#data-model)Data model

The connector can transfer files of any type into Foundry datasets. File formats are preserved, and no schemas are applied during or after the transfer. Apply any necessary schema to the output dataset, or [write a downstream transformation](https://www.palantir.com/docs/foundry/pipeline-builder/transforms-overview/) to access the data.

## [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#performance-and-limitations)Performance and limitations

There is no limit to the size of transferable files. However, network issues can result in failures of large-scale transfers. In particular, Foundry syncs that take more than two days to run will be interrupted. To avoid network issues, we recommend using smaller file sizes and limiting the number of files that are ingested in every execution of the sync. Syncs can be [scheduled](https://www.palantir.com/docs/foundry/data-connection/set-up-sync/#build-or-schedule-your-batch-sync) to run frequently.

Connections to on-premise SharePoint servers are not supported. Use a [REST API](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/) source type to connect to on-premise SharePoint.

## [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#setup)Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper right corner of the screen.
2.   Select **SharePoint Online** from the available connector types.
3.   Follow the additional configuration prompts to continue the setup of your connector using the information in the sections below.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#authentication)Authentication

Authentication for the SharePoint Online source requires an application in Microsoft Entra ID (formerly known as Azure Active Directory). If you are not an Entra ID administrator, contact your IT department to request access.

Follow the initial steps below to access Azure application credentials:

1.   Create an application registration in Azure by following the instructions in the [Microsoft documentation ↗](https://docs.microsoft.com/graph/auth-register-app-v2). 
    *   At Step 5, select **Accounts in this organizational directory only** and skip **Redirect URL (optional)**.

2.   Note the client ID and tenant ID once registration is complete.

Then, choose between two available authentication method:

*   [Client credentials:](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#client-credentials) Recommended when a wide range of access is required for every SharePoint site.
*   [Username/password:](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#usernamepassword) Recommended for limiting access to one or a few SharePoint sites.

### [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#client-credentials)Client credentials

In your Microsoft Entra admin center, complete the following steps:

1.   Go to **API Permissions** in the left sidebar.

2.   Select **Add a Permission**.

3.   Select **Microsoft Graph**.

4.   Select **Application Permissions**.

    *   If you would like your application to read _all_ SharePoint sites add `Sites.Read.All`. 
        *   If you plan to configure export tasks, use `Sites.ReadWrite.All` instead.

    *   If you would like your application to read **selected SharePoint sites** add `Sites.Selected`.

5.   If you are an Entra Administrator, select **Grant admin consent for [tenant]**.

6.   If you added `Sites.Selected` above, [add your application to specific sites ↗](https://devblogs.microsoft.com/microsoft365dev/controlling-app-access-on-specific-sharepoint-site-collections/).

    *   The available options for the `"roles"` array parameter are `"write"` and/or `"read"`. The `"read"` option is sufficient to ingest files from the SharePoint site.
    *   To easily send a POST with proper authentication, use the [Graph Explorer ↗](https://developer.microsoft.com/graph/graph-explorer).
    *   You can receive metadata about a site by sending a GET to `https://graph.microsoft.com/v1.0/sites/[tenantName]:/sites/[siteName]` (for example: `https://graph.microsoft.com/v1.0/sites/contoso.sharepoint.com:/sites/mySite`). This request will return an ID that is a composite of several values: Site collection hostname, Site collection unique ID, and Site unique ID where the middle value is the siteId needed to run the permissions POST.

7.   [Generate a client secret. ↗](https://docs.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal#option-2-create-a-new-application-secret).

Set the following source configurations in Data Connection:

| Option | Required? | Description |
| --- | --- | --- |
| `Azure Client ID` | Yes | The ID of the app registration; also called Application ID. |
| `Azure Tenant ID` | Yes | the unique identifier of the Microsoft Entra ID instance. |
| `Client secret` | Yes | The secret generated in the app registration. |

### [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#usernamepassword)Username/password

The username/password flow involves creating a user account that can sign in to Microsoft 365. The Graph API does not support two-factor authentication for the username/password authentication method. Because of this, **we strongly recommend creating a randomly generated password of at least 32 characters in length**.

In your Entra admin center, complete the following steps:

1.   Go to **API Permissions** in the left sidebar.
2.   Select **Add a Permission**.
3.   Select **Microsoft Graph**.
4.   Select **Delegated Permissions**.
5.   Add the `Sites.Read.All` permission;. 
    *   If you plan to configure export tasks, use `Sites.ReadWrite.All` instead.

6.   If you are an Azure Administrator, select **Grant admin consent for [tenant]**.
7.   Go to **Authentication** in the left sidebar.
8.   Change **Allow public client flows** to `Yes`.
9.   Create a user in Microsoft Entra ID _with a randomly generated password of at least 32 characters_.
10.   Add that user to any SharePoint sites that you would like it to read or write.

Set the following source configurations in Data Connection:

| Option | Required? | Description |
| --- | --- | --- |
| `Azure Client ID` | Yes | The ID of the app registration; also called Application ID. |
| `Username` | Yes | The user's email address. |
| `Password` | Yes | The generated password. |

### [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#xml-based-permissioning-for-sharepoint-add-ins)XML-based permissioning for SharePoint Add-ins

If you are using [SharePoint Add-ins for authorization and authentication ↗](https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/authorization-and-authentication-of-sharepoint-add-ins), and your SharePoint Add-in uses XML for permission management, you must ensure that the correct scope is set in the scope URI to avoid access issues when connecting to SharePoint.

Follow the steps below to verify and configure the correct scope:

1.   Locate the `AppManifest.xml` file containing the permission settings for your SharePoint Add-in.
2.   In the `AppManifest.xml` file, identify the scope URI within the XML file, which should look similar to this:

`<AppPermissionRequests AllowAppOnlyPolicy="true"> <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl" /> </AppPermissionRequests>`.

1.   Verify that the scope value (in this example, `http://sharepoint/content/sitecollection/web`) matches the SharePoint site to which you are connecting; if the scope value does not match, adjust the scope value accordingly.

### [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#networking)Networking

The SharePoint Online connector requires network access to the following domains on port 443:

*   `login.microsoftonline.com`
*   `graph.microsoft.com`
*   Your SharePoint URL; for example, `contoso.sharepoint.com`

If you are using a GovCloud SharePoint instance, use the following domains on port 443 instead:

*   `login.microsoftonline.us`
*   `graph.microsoft.us`
*   Your SharePoint URL; for example, `contoso.sharepoint.us`

## [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#configuration-options)Configuration options

The following configuration options are available for the SharePoint Online connector:

| Option | Required? | Description |
| --- | --- | --- |
| `SharePoint Library URL` | Yes | A single SharePoint site may have several document libraries; your URL must point to a specific library. Must be in the format `https://[tenant].sharepoint.com/sites/[site]/[library]`. |
| `Credentials settings` | Yes | Configure using the [Authentication](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#authentication) guidance shown above. |
| `Proxy settings` | No | Enable to use a proxy while connecting to SharePoint Online. |

## [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#sync-data-from-sharepoint-online)Sync data from SharePoint Online

The SharePoint Online connector uses the [file-based sync interface](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/).

## [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#export-data-to-sharepoint-online)Export data to SharePoint Online

To export to a SharePoint site, first [enable exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#enable-exports-for-source) for your SharePoint Online connector. Then, [create a new export](https://www.palantir.com/docs/foundry/data-connection/export-overview/#create-a-new-export).

### [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#export-configuration-options)Export configuration options

| Option | Required? | Default | Description |
| --- | --- | --- | --- |
| `Directory path` | Yes | / | The path to the folder in the SharePoint library where files should be exported. The full path for an exported file is calculated as `<SharePoint Library URL>/Directory Path>/<Exported File Path>` |

## [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#use-sharepoint-sources-in-code)Use SharePoint sources in code

The example below demonstrates how to upload a file to a SharePoint source using the [Python client for SharePoint ↗](https://pypi.org/project/Office365-REST-Python-Client/)`Office365-REST-Python-Client` in an [external transform](https://www.palantir.com/docs/foundry/data-connection/external-transforms/). Note that this example uses **client certificate** authentication.

Review more [examples from SharePoint ↗](https://github.com/vgrem/office365-rest-python-client/tree/master/examples/sharepoint).

Copied!

```python
1from pyspark.sql import DataFrame
2from transforms.api import Input, Output, transform, lightweight
3from transforms.external.systems import external_systems, Source
4import pandas as pd
5import polars as pl
6from office365.sharepoint.client_context import ClientContext
7
8@lightweight
9@external_systems(
10    sharepoint_source=Source("<source_rid>")
11)
12@transform(
13    output=Output("<dataset_rid>"),
14    input_df=Input("<dataset_rid>"), # Dataset containing a list of files to export to SharePoint
15)
16def compute(ctx, input_df: DataFrame, output, sharepoint_source) -> DataFrame:
17
18    # 1. Connect to SharePoint using client certificate authentication.
19    client = ClientContext("<sharepoint_url>").with_client_certificate(
20        tenant="<tenant_id>",
21        client_id="<client_id>",
22        thumbprint="<thumbprint>",
23        private_key=sharepoint_source.get_secret("clientSecret"),
24    )
25
26    current_web = client.web
27    client.load(current_web)
28    client.execute_query()
29
30    target_folder = client.web.lists.get_by_title("<document_library_name>").root_folder
31
32    # 2 Upload files from input_df, store URL in dataset
33    upload_urls = []
34    fs = input_df.filesystem()
35    input_files = fs.ls()
36    for f in input_files:
37        with fs.open(f.path) as fileobj:
38            uploaded_file = target_folder.upload_file(f.path, fileobj).execute_query()
39            upload_urls.append({'file_name': f.path, 'upload_url': uploaded_file.serverRelativeUrl})
40
41
42    # 3. Return dataset of uploaded URLs
43    output.write_table(pl.from_pandas(pd.DataFrame.from_records(upload_urls)))
```

### [](https://www.palantir.com/docs/foundry/available-connectors/sharepoint-online/#ingest-sharepoint-lists)Ingest SharePoint Lists

The SharePoint Online connector only supports file-based ingestion. To ingest data from SharePoint Lists, use an [external transform](https://www.palantir.com/docs/foundry/data-connection/external-transforms/) with the Microsoft Graph API. The following helper class handles OAuth2 authentication and provides methods to retrieve lists and list items with automatic pagination:

Copied!

```python
1import requests
2import logging
3from typing import Optional, Dict, List
4from urllib.parse import urlparse
5
6
7class SharePointListReader:
8    """
9    Client for reading SharePoint lists via Microsoft Graph API.
10
11    This class handles OAuth2 authentication and provides methods to:
12    - Retrieve all lists from a SharePoint site
13    - Fetch items from specific lists with automatic pagination
14
15    Args:
16        tenant_id: Azure AD tenant ID
17        client_id: Azure AD application (client) ID
18        client_secret: Azure AD application client secret
19        site_url: Full SharePoint site URL (e.g., https://contoso.sharepoint.com/sites/mysite)
20        logger: Optional custom logger instance
21    """
22
23    def __init__(
24        self,
25        tenant_id: str,
26        client_id: str,
27        client_secret: str,
28        site_url: str,
29        logger: Optional[logging.Logger] = None
30    ):
31        self.tenant_id = tenant_id
32        self.client_id = client_id
33        self.client_secret = client_secret
34        self.site_url = site_url.rstrip("/")
35        self.base_url = "https://graph.microsoft.com/v1.0"
36
37        self.access_token: Optional[str] = None
38        self.site_id: Optional[str] = None
39        self.logger = logger or self._setup_default_logger()
40
41    def _setup_default_logger(self) -> logging.Logger:
42        """Configure default logger with console output."""
43        logger = logging.getLogger(__name__)
44        if not logger.handlers:
45            handler = logging.StreamHandler()
46            formatter = logging.Formatter('%(levelname)s: %(message)s')
47            handler.setFormatter(formatter)
48            logger.addHandler(handler)
49            logger.setLevel(logging.INFO)
50        return logger
51
52    def get_access_token(self) -> bool:
53        """
54        Acquire OAuth2 access token from Azure AD.
55
56        Returns:
57            True if token was successfully acquired, False otherwise
58        """
59        token_url = f"https://login.microsoftonline.com/{self.tenant_id}/oauth2/v2.0/token"
60        payload = {
61            "grant_type": "client_credentials",
62            "client_id": self.client_id,
63            "client_secret": self.client_secret,
64            "scope": "https://graph.microsoft.com/.default",
65        }
66
67        try:
68            response = requests.post(token_url, data=payload)
69            response.raise_for_status()
70            token_data = response.json()
71            self.access_token = token_data["access_token"]
72
73            expires_in = token_data.get("expires_in", 3600)
74            self.logger.info(f"Authentication successful (expires in {expires_in}s)")
75            return True
76
77        except requests.exceptions.RequestException as e:
78            self.logger.error(f"Authentication failed: {e}")
79            return False
80
81    def _make_graph_request(self, url: str, params: Optional[Dict] = None) -> Optional[Dict]:
82        """
83        Execute authenticated GET request to Microsoft Graph API.
84
85        Args:
86            url: Full Graph API endpoint URL
87            params: Optional query parameters
88
89        Returns:
90            JSON response as dictionary, or None on failure
91        """
92        if not self.access_token and not self.get_access_token():
93            return None
94
95        headers = {
96            "Authorization": f"Bearer {self.access_token}",
97            "Content-Type": "application/json",
98        }
99
100        try:
101            response = requests.get(url, headers=headers, params=params)
102            response.raise_for_status()
103            return response.json()
104
105        except requests.exceptions.RequestException as e:
106            self.logger.error(f"API request failed: {e}")
107            if hasattr(e, 'response') and e.response is not None:
108                self.logger.debug(f"Response details: {e.response.text}")
109            return None
110
111    def get_site_id(self) -> Optional[str]:
112        """
113        Retrieve SharePoint site ID from site URL.
114
115        Returns:
116            Site ID string, or None if retrieval fails
117        """
118        if self.site_id:
119            return self.site_id
120
121        parsed = urlparse(self.site_url)
122        hostname = parsed.hostname
123        site_path = parsed.path.strip("/")
124
125        url = f"{self.base_url}/sites/{hostname}:/{site_path}"
126        data = self._make_graph_request(url)
127
128        if data and "id" in data:
129            self.site_id = data["id"]
130            self.logger.debug(f"Site ID retrieved: {self.site_id}")
131            return self.site_id
132
133        self.logger.error("Failed to retrieve site ID")
134        return None
135
136    def get_all_lists(self) -> Optional[Dict]:
137        """
138        Retrieve all lists from the SharePoint site.
139
140        Returns:
141            Dictionary containing list metadata, or None on failure
142        """
143        site_id = self.get_site_id()
144        if not site_id:
145            return None
146
147        url = f"{self.base_url}/sites/{site_id}/lists"
148        data = self._make_graph_request(url)
149
150        if data and "value" in data:
151            self.logger.info(f"Found {len(data['value'])} lists in site")
152            for lst in data["value"]:
153                self.logger.info(f"  - {lst['name']} (ID: {lst['id']})")
154
155        return data
156
157    def get_all_list_items(self, list_id: str) -> Optional[List[Dict]]:
158        """
159        Retrieve all items from a SharePoint list with automatic pagination.
160
161        Args:
162            list_id: GUID of the SharePoint list
163
164        Returns:
165            List of item dictionaries, or None on failure
166        """
167        site_id = self.get_site_id()
168        if not site_id:
169            return None
170
171        all_items = []
172        url = f"{self.base_url}/sites/{site_id}/lists/{list_id}/items"
173        params = {"$expand": "fields", "$top": 5000}
174
175        page_count = 0
176        while url:
177            current_params = None if "@odata.nextLink" in url else params
178            data = self._make_graph_request(url, current_params)
179
180            if not data or "value" not in data:
181                break
182
183            page_count += 1
184            items_in_page = len(data["value"])
185            all_items.extend(data["value"])
186
187            self.logger.debug(f"Page {page_count}: retrieved {items_in_page} items")
188
189            url = data.get("@odata.nextLink")
190            params = None
191
192        self.logger.info(f"Retrieved {len(all_items)} total items from list")
193        return all_items
```

The following example demonstrates how to use this class in an external transform to ingest SharePoint List data into a Foundry dataset:

Copied!

```python
1from transforms.api import Output, transform, lightweight
2from transforms.external.systems import external_systems, Source
3import polars as pl
4
5
6@lightweight
7@external_systems(
8    sharepoint_source=Source("<source_rid>")
9)
10@transform(
11    output=Output("<dataset_rid>"),
12)
13def compute(ctx, output, sharepoint_source):
14
15    # 1. Initialize the SharePoint List reader with credentials from the source
16    reader = SharePointListReader(
17        tenant_id="<tenant_id>",
18        client_id="<client_id>",
19        client_secret=sharepoint_source.get_secret("clientSecret"),
20        site_url="https://contoso.sharepoint.com/sites/mysite"
21    )
22
23    # 2. Retrieve all items from a specific list
24    items = reader.get_all_list_items(list_id="<list_guid>")
25
26    # 3. Extract the fields from each item and write to the output dataset
27    records = [item["fields"] for item in items if "fields" in item]
28    output.write_table(pl.from_dicts(records))
```

[← PREVIOUS SFTP](https://www.palantir.com/docs/foundry/available-connectors/sftp/)

[NEXT ShipStation →](https://www.palantir.com/docs/foundry/available-connectors/shipstation/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

