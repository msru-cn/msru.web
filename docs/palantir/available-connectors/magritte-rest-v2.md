Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/

Markdown Content:
## Legacy REST API Plugin (magritte-rest-v2)

The legacy REST API options documented here using the custom `magritte-rest-v2` source type are for historical reference only. This feature is no longer under active development and should not be used.

Use instead the [REST API source type](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/) that supports:

*   [Webhooks](https://www.palantir.com/docs/foundry/data-connection/webhooks-overview/)
*   Syncs and exports via [external transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/)

The REST API source type can also be used to connect to on-premise REST APIs using [agent proxy egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies).

## Architecture

The following concepts illustrate the flow of information when using a `magritte-rest-v2` source.

*   The **source** defines how a connection is established. This includes how the request should authenticate.
*   The **sync** consists of a list of **calls**. Each call defines what sort of request should be made and implements any required logic around this request. A call can be as simple as a single GET request or more complex such as a loop of requests for pagination.
*   An **extractor** defines how to parse the response to both authentication calls and sync calls. For sync calls, it can save fields in the response to a **state**.
*   The resulting **state** is passed on to the next call. The variables in this `state` can then be injected into the proceeding calls. This allows for interdependent requests.

This diagram illustrates how the above concepts interact:

![Image 1: rest architecture](https://www.palantir.com/docs/resources/foundry/available-connectors/rest-architecture.png)

## Create a custom `magritte-rest-v2` source

To create a `magritte-rest-v2` source, select **New source** from the **Sources** tab of the Data Connection application. Then, select the option to **Add Custom Source**. The magritte-rest-v2 plugin is primarily configured via a YAML editor.

The following examples provide YAML code snippets necessary for configuration of different authentication types:

*   [Headers](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#headers)
*   [Username and password](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#username-and-password)
*   [Body](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#body)
*   [URL parameters](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#url-parameters)
*   [Call](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#call)
*   [Call to another domain](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#call-to-another-domain)
*   [Client certificate](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#client-certificate)
*   [NTLM](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#ntlm)

This documentation also provides additional guidance on these topics:

*   [Proxy](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#proxy)
*   [Server certificate issues](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#server-certificate-issues)
*   [TLS version](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#tls-version)

### Authentication

#### Headers

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest
5    headers:
6      Authorization: 'Bearer {{token}}'
7    url: "https://some-api.com/"
```

#### Username and password

Also known as `Basic` authentication.

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest
5    usernamePassword: '{{username}}:{{password}}'
6    url: "https://some-api.com/"
```

#### Body

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest-auth-call-source
5    url: "https://some-api.com/"
6    requestMimeType: application/json
7    body: '{"username": "{{username}}", "password": "{{password}}"}'
8    authCalls: []
```

#### URL parameters

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest-auth-call-source
5    url: "https://some-api.com/"
6    parameters:
7      username: "{{username}}"
8      password: "{{password}}"
9    authCalls: []
```

#### Call

The following configuration can be used to submit a URL-encoded form body to an `/auth` endpoint in order to use the returned token in a sync. You should only use `formBody` if your endpoint has a form type; otherwise use `body`.

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest-auth-call-source
5    url: "https://some-api.com/"
6    headers:
7      Authorization: 'Bearer {%token%}'
8    authCalls:
9      - type: magritte-rest-call
10        path: /auth
11        method: POST
12        formBody:
13          username: '{{username}}'
14          password: '{{password}}'
15        extractor:
16          - type: magritte-rest-json-extractor
17            assign:
18              token: /token
```

If the returned token regularly expires prior to the completion of your syncs, use the `authExpiration` parameter to specify how often the calls under `authCalls` should be retried. Set the value of `authExpiration` to be no longer than the validity period of the token returned by the `/auth` endpoint.

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest-auth-call-source
5    url: "https://some-api.com/"
6    authExpiration: 30m
7    headers:
8      Authorization: 'Bearer {%token%}'
9    authCalls:
10      - type: magritte-rest-call
11        path: /auth
12        method: POST
13        formBody:
14          username: '{{username}}'
15          password: '{{password}}'
16        extractor:
17          - type: magritte-rest-json-extractor
18            assign:
19              token: /token
```

When your API uses security headers like subscription keys in order to log in successfully, you will have to add an additional header section underneath `authCalls`. This second header section is used specifically for the authentication call, and is entirely separate from the first header section; all other API calls (aside from the authentication call) use the first header section. Not having these header sections properly configured may result in 401 authentication failures. An example is given below.

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest-auth-call-source
5    url: "https://some-api.com/"
6    headers:
7      X-service-identifier: SWN
8      Authorization: 'Bearer {%token%}'
9      Ocp-Apim-Subscription-Key: '{{subscriptionKey}}'
10    authCalls:
11      - type: magritte-rest-call
12        path: /auth
13        method: POST
14        headers:
15          X-service-identifier: SWN
16          Ocp-Apim-Subscription-Key: '{{subscriptionKey}}'
17        body:
18          username: '{{username}}'
19          password: '{{password}}'
20        extractor:
21          - type: magritte-rest-json-extractor
22            assign:
23              token: /token
```

#### Call to another domain

This enables authentication against one domain in order to use the token on another domain:

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  auth_api:
4    type: magritte-rest
5    url: "https://auth.api.com"
6  data_api:
7    type: magritte-rest-auth-call-source
8    url: "https://data-api.com/"
9    headers:
10      Authorization: 'Bearer {%token%}'
11    authCalls:
12      - type: magritte-rest-call
13        source: auth_api
14        path: /auth
15        method: POST
16        formBody:
17          username: '{{username}}'
18          password: '{{password}}'
19        extractor:
20          - type: magritte-rest-json-extractor
21            assign:
22              token: /token
```

#### Client certificate

Sources support supplying a Java KeyStore (JKS) file for authentication:

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest
5    url: "https://some-api.com/"
6    keystorePath: "/my/keystore/keystore.jks"
7    keystorePassword: "{{password}}"
```

#### NTLM

The following curl: `curl -v http://example.com/do.asmx --ntlm -u DOMAIN\\username:password` can be translated as:

Copied!

```
1type: magritte-rest-ntlm-source
2url: http://example.com
3user: "{{username}}"
4password: "{{password}}"
5domain: DOMAIN (optional)
6workstation: (optional) the name of your machine as given by $(hostname)
```

### Proxy

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest
5    url: http://example.com
6    proxy: 'http://my-proxy:8888/' # you can also pass an IP Address
```

You can also pass in proxy credentials in the config:

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest
5    url: http://example.com
6    proxy:
7      url: 'http://my-proxy:8888/' # you can also pass an IP Address
8      username: 'my-proxy-username'
9      password: 'my-proxy-password'
```

### Server certificate issues

If you see errors like `javax.net.ssl.SSLHandshakeException` you might need to add the server's certificate to agent's trust-store, following [this guide](https://www.palantir.com/docs/foundry/data-connection/agent-configuration-reference/#certificates).

For debugging purposes only, you might also disable checking of the certificate, which corresponds to running curl with the insecure `-k` flag (`curl -k https://some-domain`):

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest
5    url: https://example.com
6    insecure: true
```

#### TLS version

By default, the plugin will connect only over modern TLS versions (TLSv1.2 and TLSv1.3).

To use an older version, specify the TLS version in the config:

Copied!

```
1type: magritte-rest-v2
2sourceMap:
3  my_api:
4    type: magritte-rest
5    url: https://example.com
6    tlsVersion: 'TLSv1.1'
```

Supported versions: `TLSv1.3`, `TLSv1.2`, `TLSv1.1`, `TLSv1`, `SSLv3`.

## Create a sync

To create a sync, from the top of your `magritte-rest-v2` Source click the "Create Sync" button. The Basic view will guide you through creating one or more calls to fetch data. The Advanced view will enable you to edit the YAML configuration directly. You can toggle between these views at the top right of the page.

A sync requires at least one call. In the basic view, you can create new calls by clicking the "Add" button under the "Perform calls in sequence" heading. You can then specify if the call should be made once by selecting "Single Call" or multiple times based on a loop, a time range, a date range, a list, or by paging over results. Each call requires a path which will be appended to the source URL when queried. For example, if the source has the url `https://my-ap-source.com` using a path of `/api/v1/get-documents` would result in the call querying `https://my-ap-source.com/api/v1/get-documents`.

This section presents a list of YAML configurations that address common scenarios:

*   [DateTime-based API](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#datetime-based-api)
*   [Page-based API](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#page-based-api)
*   [Offset-based API](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#offset-based-api)
*   [Next-Page link-based API](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#next-page-link-based-api)
*   [Triggering and downloading a report](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#triggering-and-downloading-a-report)

This documentation also provides additional guidance on these topics:

*   [Incremental Syncs](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#incremental-syncs)

### Common Scenarios

#### DateTime-based API

Assume an API that serves CSV reports for each date at `/daily_data?date=2020-01-01`. In this example, we would like to ingest these reports as they become available. To achieve this, we could schedule a daily sync that will remember the last date for which reports were synced, in order to automatically fetch the reports for unsynced dates up to today:

Copied!

```
1type: rest-source-adapter2
2outputFileType: csv
3incrementalStateVars:
4  incremental_date_to_query: '2020-01-01'
5initialStateVars:
6  yesterday:
7    type: magritte-rest-datetime-expression
8    offset: '-P1D'
9    timezone: UTC
10    formatString: 'yyyy-MM-dd'
11restCalls:
12  - type: magritte-increasing-date-param-call
13    checkConditionFirst: true
14    paramToIncrease: date_to_query
15    increaseBy: P1D
16    initValue: '{%incremental_date_to_query%}'
17    stopValue: '{%yesterday%}'
18    format: 'yyyy-MM-dd'
19    method: GET
20    path: '/daily_data'
21    parameters:
22      date: '{%date_to_query%}'
23    extractor:
24      - type: magritte-rest-string-extractor
25        fromStateVar: 'date_to_query'
26        var: 'incremental_date_to_query'
```

You may find it helpful to compare the above configuration with an equivalent Python snippet.

Copied!

```
1import requests
2from datetime import datetime, timedelta
3
4incremental_state = load_incremental_state()
5if incremental_state is None:
6  incremental_state = {'incremental_date_to_query': '2020-01-01'}
7
8yesterday = datetime.utcnow() - timedelta(days=1)
9
10date_to_query = incremental_state['incremental_date_to_query']
11date_to_query = datetime.strptime(date_to_query, '%Y-%m-%d')
12while yesterday >= date_to_query:
13  response = requests.get(source.url + '/daily_data', params={
14    'date': date_to_query.strftime('%Y-%m-%d')
15  })
16  upload(response)
17  date_to_query += timedelta(days=1)
18  incremental_date_to_query = date_to_query
19
20save_incremental_state({'incremental_date_to_query': incremental_date_to_query})
```

#### Page-based API

Copied!

```
1type: rest-source-adapter2
2outputFileType: json
3restCalls:
4  - type: magritte-paging-inc-param-call
5    paramToIncrease: page
6    initValue: 0
7    increaseBy: 1
8    method: GET
9    path: '/data'
10    parameters:
11      page: '{%page%}'
12      entries_per_page: 1000
13    extractor:
14      - type: magritte-rest-json-extractor
15        assign:
16          page_items: '/items'
17    condition:
18      type: magritte-rest-non-empty-condition
19      var: page_items
```

If you are a developer, you might find it easier to understand the above configuration by comparing it with an equivalent python snippet:

Copied!

```
1import requests
2
3page = 0
4while True:
5  response = requests.get(source.url + '/data', params={
6    'page': page,
7    'entries_per_page': 1000
8  })
9  upload(response)
10
11  page += 1
12  page_items = response.json().get('items')
13  if not page_items:
14    break
```

#### Offset-based API

Here is an example ElasticSearch basic search API:

Copied!

```
1type: rest-source-adapter2
2outputFileType: json
3restCalls:
4  - type: magritte-paging-inc-param-call
5    paramToIncrease: offset
6    initValue: 0
7    increaseBy: 100
8    method: POST
9    path: '/_search'
10    body: |-
11      {
12        "from": {%offset%},
13        "size": 100
14      }
15    extractor:
16      - type: magritte-rest-json-extractor
17        assign:
18          hits: '/hits'
19    condition:
20      type: magritte-rest-non-empty-condition
21      var: hits
```

#### Next page link-based API

Next page tokens are also often known as cursor, continuation, or pagination tokens.

Here is an example ElasticSearch search and scrolling API:

Copied!

```
1type: rest-source-adapter2
2outputFileType: json
3restCalls:
4  - type: magritte-rest-call
5    method: GET
6    path: /my-es-index/_search?scroll=1m
7    parameters:
8      scroll: 1m
9    extractor:
10      - type: json
11        assign:
12          scroll_id: /_scroll_id
13  - type: magritte-do-while-call
14    method: GET
15    checkConditionFirst: true
16    path: /_search/scroll
17    parameters:
18      scroll: 1m
19      scroll_id: '{%scroll_id%}'
20    extractor:
21      - type: json
22        assign:
23          scroll_id: /_scroll_id
24          hits: /hits
25    timeBetweenCalls: 0s
26    condition:
27      type: magritte-rest-non-empty-condition
28      var: hits
```

Here is an example AWS nextToken paginated API:

Copied!

```
1type: rest-source-adapter2
2outputFileType: json
3restCalls:
4  - type: magritte-rest-call
5    method: POST
6    path: /findings/list
7    extractor:
8      - type: json
9        assign:
10          nextToken: /nextToken
11        allowNull: false
12        allowMissingField: true
13    requestMimeType: application/json
14    body: '{}'
15  - type: magritte-do-while-call
16    method: POST
17    checkConditionFirst: true
18    path: /findings/list
19    extractor:
20      - type: json
21        assign:
22          findings: /findings
23          nextToken: /nextToken
24        allowNull: false
25        allowMissingField: true
26    condition:
27      type: magritte-rest-available-condition
28      var: nextToken
29    timeBetweenCalls: 0s
30    requestMimeType: appliation/json
31    body: '{"nextToken":"{%nextToken%}"}'
```

#### Triggering and downloading a report

The following `sync` is for an API that requires three interdependent steps.

*   A body is posted to an endpoint that returns a response containing an ID.
*   This ID needs to be used in the next endpoint to fetch a report. However, the report is not immediately ready, so the response contains a field named `status` defining if the report is done.
*   Once the report is done, we can fetch the report from a third endpoint.

Copied!

```
1type: rest-source-adapter2
2outputFileType: json
3restCalls:
4  - type: magritte-rest-call
5    path: '/findRelevantId'
6    method: POST
7    requestMimeType: application/json
8    extractor:
9      - type: json
10        assign:
11          id: /id
12    body: >
13      body
14    saveResponse: false
15  - type: magritte-do-while-call
16    path: '/reportReady'
17    method: GET
18    parameters:
19      id: '{%id%}'
20    extractor:
21      - type: magritte-rest-json-extractor
22        assign:
23          status: /status
24    condition:
25      type: "magritte-rest-regex-condition"
26      var: status
27      matches: "(processing|queued)"
28    timeBetweenCalls: 8s
29    saveResponse: false
30  - type: magritte-rest-call
31    path: '/getReport/{%id%}'
32    method: GET
33    requestMimeType: application/json
```

The Extractor defines what fields to save in the state. Note that these variables are available in all following REST calls. To inject a saved variable, surround the variable name by {%%}. The second `do-while` call implements a loop that sends a request until the status variable is no longer queued or processing.

Some APIs do not have a `status` endpoint and instead require to poll the `getReport` endpoint, providing an empty response until the report is ready. The following config shows how to deal with such scenario:

Copied!

```
1type: rest-source-adapter2
2outputFileType: json
3restCalls:
4  - type: magritte-do-while-call
5    path: '/getReport/{%id%}'
6    method: GET
7    extractor:
8      - type: magritte-rest-string-extractor
9        var: response
10    condition:
11      type: magritte-rest-not-condition
12      condition:
13         type: magritte-rest-non-empty-condition
14         var: response
15    timeBetweenCalls: 8s
```

Or if the `getReport` endpoint would return a `204` status code until the report is ready, it could be handled as:

Copied!

```
1type: rest-source-adapter2
2outputFileType: json
3restCalls:
4  - type: magritte-do-while-call
5    path: '/getReport/{%id%}'
6    method: GET
7    extractor:
8     -  type: magritte-rest-http-status-code-extractor
9        assign: responseCode
10    condition:
11        type: magritte-rest-regex-condition
12        var: responseCode
13        matches: 204
14    timeBetweenCalls: 8s
```

### Incremental syncs

This plugin supports incremental Syncs. To do this, pick the variables from the `state` that you want to save as the Sync's incremental `state` by specifying `incrementalStateVars`:

Copied!

```
1type: rest-source-adapter2
2incrementalStateVars:
3  var_name: initial_value # Initial value used if no incremental metadata is found
```

Copied!

```
1type: rest-source-adapter2
2incrementalStateVars:
3  lastModifiedDate: 20190101
```

The saved incremental `state` will be used as the initial `state` when running a sync.

More detailed example:

Copied!

```
1type: rest-source-adapter2
2outputFileType: json
3incrementalStateVars:
4  lastModifiedTime: 'Some initial start time'
5initialStateVars:
6# get the current time
7  currentTime:
8    type: magritte-rest-datetime-expression
9    timezone: 'Some timezone, e.g. Europe/Paris'
10    formatString: 'Some format string https://docs.oracle.com/javase/8/docs/api/ \
11                     java/time/format/DateTimeFormatter.html'
12restCalls:
13  - type: magritte-rest-call
14    path: /my/values
15    method: GET
16    parameters:
17      from: '{%lastModifiedTime%}'
18      until: '{%currentTime%}'
19    extractor:
20    # Update the last modified time to be the current time
21      - type: magritte-rest-string-extractor
22        var: lastModifiedTime
23        fromStateVar: currentTime
```

## Detailed documentation

If you add more than one API source, in each REST call you must specify the source you want to use with the `source` attribute.

### Syncs

The sync config contains the following fields.

Copied!

```
1type: rest-source-adapter2
2restCalls: [calls] # see documentation for Calls below
3initialStateVars:
4  {variableName}: {variableValue}
5incrementalStateVars:
6  {variableName}: {variableValue}
7outputFileType: json # required for oneFilePerResponse
8cacheToDisk: defaults to True
9oneFilePerResponse: defaults to True; when set to True "outputFileType" is required
```

To set an output file type with `outputFileType`, `oneFilePerResponse` must be true, otherwise the responses will be saved as rows in a dataset. See [Storing response](https://www.palantir.com/docs/foundry/available-connectors/magritte-rest-v2/#storing-response) below for recommended options based on your response type.

#### Storing response

Recommended for binary responses or total sum of response size > 100MB:

Copied!

```
1cacheToDisk: true
2outputFileType: [any file format, e.g. txt, json, jpg]
3oneFilePerResponse: true # default, don't need to specify
```

For non-binary responses up to couple of MB and a total sum of response size below 100MB, we recommend the following:

Copied!

```
1cacheToDisk: false
2oneFilePerResponse: false
```

For a sync where the responses don't fit on disk, but the total sync time is low (under 3 minutes), we recommend the following:

Copied!

```
1cacheToDisk: false
2oneFilePerResponse: true
3outputFileType: [any file format, e.g. txt, json, jpg]
```

### Calls

#### Core call fields

All calls inherit from a base RestCall object, which contains the following fields:

Copied!

```
1type: Rest call type
2path: Endpoint
3method: GET | POST | PUT | PATCH
4# All below are optional
5source: The API source to use for this call. # This is required if there are multiple api sources.
6parameters: Map of parameters to pass with request # Defaults to empty map
7saveResponse: Should the response be saved in foundry # Defaults to True
8body: Body to post
9formBody:
10    # Map of parameters to use in a x-www-form-urlencoded post.
11    # Optional, only use instead of body when hitting a x-www-form-urlencoded endpoint.
12    param1: value1
13requestMimeType: application/json
14headers: Request headers, these append to the source headers, but replace matching headers
15# validResponseCodes: optional, set of HTTP response codes for which the API caller does not terminate.
16# If not set, valid HTTP response codes are 200, 201 and 204.
17validResponseCodes:
18   - 200
19   - 201
20   - 204
21# retries: defaults to 0. Requests can fail due to cancellation, a connectivity problem or timeout.
22# Enables setting the desired number of retries per request made by this call.
23retries: 0
24extractor: A list of extractor object, see Extractors
25# Filename template e.g. 'data_{%page%}',
26# otherwise the filename will be '[sourceName][path][parameters]'
27filename: '<dont override if not necessary>'
28addTimestampToFilename: Defaults to true, whether timestamp should be appended to filename
```

Inheriting calls can add additional fields to the ones above.

#### REST call

Copied!

`1type: magritte-rest-call`

Performs a single request. Uses the same YAML setup as the core call.

#### Incremental paging call

Performs the same request with an increasing parameter while some condition is met. Often used for paging. Note that the parameter that is being increased should have `{%paramToIncrease%}` as its value if included in either the path or in the `parameters:` section.

Copied!

```
1type: magritte-paging-inc-param-call
2paramToIncrease: state key to param to increase.
3checkConditionFirst: when set to "true", equivalent to a while loop. When "false" (default) equivalent to do-while loop.
4initValue: Initial value of increasing parameter.
5increaseBy: How much to increase the parameter by in each iteration.
6onEach: List of calls to run in each iteration. Optional and used to do nested calls.
7condition: Condition object that keeps requests going. As long as the condition is true,
8         a new request is created. The condition is checked only after the first request,
9         so this acts similarly to a do-while loop.
10maxIterationsAllowed: How many iterations to run before throwing an error.
11timeBetweenCalls: (optional) time to wait between requests
```

#### Incremental date call

Performs the same request with an increasing date parameter until some condition is met. Used for iterating through dates. This uses LocalDate and Period types, so the most granular increment available is one day. This only works for date-only matches. If you need to increment more granularly, see `magritte-increasing-time-param-call``.

Copied!

```
1type: magritte-increasing-date-param-call
2paramToIncrease: state key to param to increase.
3checkConditionFirst: when set to "true", equivalent to a while loop. When "false" (default) equivalent to do-while loop.
4initValue: Initial value of increasing parameter.
5increaseBy: How much to increase the parameter by in each iteration, parseable as a java.time.Period
6stopValue: The last date which will be used, including this value if applicable.
7format: The format (java.time.format.DateTimeFormatter) for the DateTime parameter in each call, the same
8          as initValue and stopValue.
9timeBetweenCalls: (optional) time to wait between requests
```

#### Incremental time call

Performs the same request with an increasing DateTime parameter until some condition is met. Used for iterating through DateTimes. Note, this uses OffsetDateTime and Duration types, in contrast to the magritte-incrementing-date-param-call. OffsetDateTime does not take into account any changes with Daylight Savings Time. Make sure this will not cause unexpected gaps with how the API handles DateTimes.

Copied!

```
1type: magritte-increasing-time-param-call
2paramToIncrease: state key to param to increase.
3checkConditionFirst: when set to "true", equivalent to a while loop. When "false" (default) equivalent to
4                       do-while loop.
5initValue: Initial value of increasing parameter.
6increaseBy: How much to increase the parameter by in each iteration, parseable as a java.time.Duration
7stopValue: The last DateTime which will be used, including this value if applicable.
8format: The format (java.time.format.DateTimeFormatter) for the DateTime parameter in each call, the same
9          as initValue and stopValue.
10timeBetweenCalls: (optional) time to wait between requests
```

#### Do while

Performs a request til a specified condition is no longer met. In addition to the core call fields, two fields should be provided.

Copied!

```
1type: magritte-do-while-call
2timeBetweenCalls: time to wait between requests
3checkConditionFirst: when set to "true", equivalent to a while loop. When "false" (default) equivalent to do-while loop.
4condition: Condition object that keeps requests going. As long as the condition is true,
5             a new request is created.
6maxIterationsAllowed: How many iterations to run before throwing an error. Defaults to 50.
```

Optionally, an initial `state` can be provided to bootstrap the first call.

For example:

Copied!

```
1initialState:
2  nextPage: ""
```

In the case where an initial `state` and an incremental `state` conflict, the incremental `state` will override the initial State.

#### Iterable state Call

Performs a request for each element in a `state` element that is iterable.

Copied!

```
1type: magritte-iterable-state-call
2timeBetweenCalls: 5s # Throttle the time between each call
3iterableField: The state key to iterate over. This variable must be iterable.
4iteratorExtractor: List of extractors to run on each element in the iterable.
5onEach: List of calls to run in each iteration. Optional and used to do nested calls.
6maxIterationsAllowed: How many iterations to run before throwing an error. Defaults to 50.
7parallelism: Integer number of threads to use for the sync. Assumptions/limitations include no side effect in request,
8             no guarantee as to order that calls are made or their responses update state, no time between calls.
9             This field is optional and defaults to 1.
```

### Extractors

An Extractor defines how to save variables from a response or a `state` variable into the State. You can reference a variable from `state` in URL, URL parameters, or in the request body as `{%var_name_1%}`.

The default behavior of Extractors is to extract values from the Response. Optionally you can add the `fromStateVar` config to extract from the State. This allows to run different Extractors one after the other, as an example:

Copied!

```
1type: rest-source-adapter2
2outputFileType: csv
3restCalls:
4  - type: magritte-rest-call
5    path: /my/path/index.html
6    source: mysource
7    method: GET
8    extractor:
9      - type: magritte-rest-json-extractor
10        assign:
11          full_name: /my/field/full_name
12      - type: magritte-rest-regexp-extractor
13        fromStateVar: full_name
14        assign:
15          names: '\w+'
```

All Extractors have a condition check built-in that can be used:

Copied!

`1condition: Check whether the input state meets the given condition. If not, do not run the extractor.`

#### JSON extractors

All the JSON Extractors use [Jackson JsonNode ↗](https://fasterxml.github.io/jackson-databind/javadoc/2.13/com/fasterxml/jackson/databind/JsonNode.html) and follow the same notation.

Quick guide on referencing fields: Given the JSON `{"id":1}`:

*   Using `"/id"` will return `1`
*   Using `"/"` will return `{"id":1}`

Given a list, such as `[1,2,3]` or `[{"id":1},{"id":2}]`:

*   Using `""` will return the list.

Wildcards may be used to reference sub-indices or fields of all items in a list. For example:

Given a field containing nested lists, such as `{ "result": [[1], [2, 3, 4]] }`:

*   Using `"/result/*/0"` will return `[1,2]`.

Given a field containing a list of objects such as `{ "result": [{ "foo": 1}, {"foo": 2}]}`:

*   Using `"/result/*/foo"` will return `[1,2]`.

##### Assign JSON extractor

An Extractor that simply places a field in the response into the State. The YAML setup is map of variables to save. The left string is the name of the variable in the State, the right string is the path to the variable.

The JSON Extractor supports wildcards - given the JSON `[{"id":1}, {"id":2}]`, using `/*/id` will return [1,2], while using "" (empty string) will return the full list.

Copied!

```
1type: json
2assign:
3  var_name_1: /field-name1
4  var_name_2: /field_name2
```

By default, the call will fail if the extracted field has a null value or is not present.

To prevent the call from failing in these situations, the following flags are available:

*   `allowMissingField` to not fail when fields are not present or if a field has a null value.
*   `allowNull` to not fail when a present field has a null value.
*   `allowUnescapedControlChars` to not fail when the JSON response contains unescaped control characters such as `\n`.

Copied!

```
1type: json
2allowMissingField: true
3assign:
4  var_name_1: /field-name1
5  var_name_2: /field_name2
```

##### Append JSON extractor

Copied!

```
1type: magritte-rest-append-json-extractor
2appendFrom: /field in response that contains an array to append from
3appendFromItem: /field per array element to extract # Optional
4appendTo: variable name in state to append elements to.
```

If the response looks like:

Copied!

```
1{
2  "things": [{"name": "dummy", "id": "1"},
3             {"name": "dummy2", "id": "2"}]
4}
```

then the YAML:

Copied!

```
1type: magritte-rest-append-json-extractor
2appendFrom: /things
3appendFromItem: /id
4appendTo: var
```

would result in appending `[1,2]` to `var`.

Alternatively one could use:

Copied!

```
1type: magritte-rest-append-json-extractor
2appendFrom: /things
3appendTo: var
```

which would result in appending `[{"name": "dummy", "id": "1"}, {"name": "dummy", "id": "2"}]` to the `state` var.

##### Max JSON extractor

Copied!

```
1type: magritte-rest-max-json-extractor
2list: /field in response that contains an array to max over.
3item: /field per array element to extract
4var: state variable to save the max value to.
5previousVal: state variable to get the current max value from# Optional
```

If the response looks like:

Copied!

```
1{
2  "things": [{"name": "dummy", "value": "1"},
3             {"name": "dummy2", "value": "2"}]
4}
```

then the YAML:

Copied!

```
1type: magritte-rest-max-json-extractor
2list: /things
3item: /id
4var: max_value
```

would result in saving `2` to `max_value`.

Alternatively, assuming we already have the value `5` in `max_value` then:

Copied!

```
1type: magritte-rest-max-json-extractor
2list: /things
3item: /id
4var: max_value
5previousVal: max_value
```

would leave `max_value` equal to 5.

##### Streaming JSON last line extractor

An Extractor for the Streaming JSON (NDJSON) format where the response contains a JSON file at each line. Usually this format is used to return datasets, thus every line should have a JSON in the same format.

The Extractor supports extracting a variable from a path from the last line of the NDJSON file.

Copied!

```
1type: magritte-rest-last-streaming-json-extractor
2nodePath: /id # if the json looks like {'value':'somevalue', 'id':1} this would extract the 1
3varName: id # name of the variable in the state to save the value to
4saveNulls: false # whether nulls should be saved to the var or skipped (default: false)
```

##### Streaming JSON append extractor

The Extractor supports extracting a variable from each line of the NDJSON file into an array as well as extracting the last encountered variable. Once the Extractor encounters a null (be it a missing line, a missing key or a null value under the key) it will stop looping.

Copied!

```
1type: magritte-rest-last-streaming-json-extractor
2nodePath: /id # if the json looks like {'value':'somevalue', 'id':1} this would extract the 1
3arrayVarName: ids # name of the variable in the state to save the array to
4optional<lastVarName>: lastId # name of the variable in the state to save the last value of the array to
5optional<limit>: 10 # limit the number of lines to parse, you can use this in addition to lastVarName and
6                    # couple it with an iterableStateCall to limit the number of call per extract run
```

#### XML extractors

##### Assign XML extractor

An Extractor that simply places a field in the response into the State. The YAML setup is map of variables to save. The left string is the name of the variable in the State, the right string is the path to the variable using xpath notation.

Copied!

```
1type: magritte-rest-xml-extractor
2assign:
3  var_name_1: /top_level_tag/second_level_tag/text()
4  var_name_2: /top_level_tag/text()
```

##### HTML extractor

Extracts from HTML by CSS selector ([supported selector syntax ↗](https://jsoup.org/apidocs/org/jsoup/select/Selector.html)). An attribute may be specified for extraction; if left blank will return the selected Element(s)'s text. If `first` is true, the Extractor will attempt to return the first Element as a String or Number. This Extractor can also be used for ill-formed XML.

Copied!

```
1type: magritte-rest-html-extractor
2var: 'links'
3selector: "a[href$='pdf']"
4attribute: href # Optional
5first: false # Optional, defaults to false
```

The provided example will save all anchor tag hypermedia references ending in `.pdf` as an array of strings in the `links` variable.

#### String extractors

##### String extractor

Extracts a string and returns a new `state` with this string assigned to the variable defined.

Copied!

```
1type: magritte-rest-string-extractor
2var: 'variable_name'
```

##### Substring extractor

Extracts a substring of a variable in the `state` and saves that to another state.

Copied!

```
1type: magritte-rest-substr-extractor
2start: 2 # starting index of
3length: 5 # Optional, length of substring (includes start index).
4          # If not set, substring will be the entire string after the start index.
5assign: var_to_save_substring_to
6# var: state_variable_to_substring - DEPRECATED, use fromStateVar instead!
```

##### Regexp extractor

An Extractor that extract one or more regexp from a string. The yaml setup is map of variables to save. The left string is the name of the variable in the State, the right string is the regexp to match.

Copied!

```
1type: magritte-rest-regexp-extractor
2assign:
3  var_name_1: (1(.*)3|a(.*)c)
4  var_name_2: (NotInString)
```

If the string in input is:

```
abcHelloWorld123
```

The response will look like that:

Copied!

```
1{
2  "var_name_1": ["abc", "123"],
3  "var_name_2": []
4}
```

Here is a full example of use to extract a CSV link from an HTML and then get the CSV:

Copied!

```
1type: rest-source-adapter2
2outputFileType: csv
3restCalls:
4  - type: magritte-rest-call
5    path: /my/path/index.html
6    source: mysource
7    method: GET
8    extractor:
9      - type: magritte-rest-regexp-extractor
10        assign:
11          file_paths: '(?<=https://www\.mysite\.com)(.*filename.*csv)(?=\")'
12    saveResponse: false
13  - type: magritte-iterable-state-call
14    source: mysource
15    timeBetweenCalls: 1s
16    iterableField: file_paths
17    method: GET
18    path: '{%path%}'
19    saveResponse: true
20    iteratorExtractor:
21      - type: magritte-rest-string-extractor
22        var: 'path'
```

##### Regexp replace extractor

An Extractor that replaces one regexp in a string, similar to the PySpark function `pyspark.sql.functions.regexp_replace`:

Copied!

```
1type: magritte-rest-regexp-replace-extractor
2var: result # `state` variable that will be created or overriden with the result string
3pattern: "[a]" # regex to look for
4replacement: "A" # new string to put in place of the regex matches
```

#### Array manipulation

##### Append to or extend an array

The Append Array Extractor takes in a `state` variable and pushes it to the end of an array. This Extractor is useful in collecting paths to pass to an iterable `state` call.

Copied!

```
1type: magritte-rest-append-array-extractor
2appendTo: target   # If the target uninitialized, the extractor will initialize an empty array.
3fromStateVar: args # Accepts either a single argument (append) or a collection (extend)
```

Here is a full example:

Copied!

```
1type: rest-source-adapter2
2restCalls:
3  - type: magritte-paging-inc-param-call
4    method: GET
5    path: category
6    paramToIncrease: page
7    initValue: 0
8    increaseBy: 100
9    parameters:
10      start_element: '{%page%}'
11      num_elements: 100
12    extractor:
13      - type: magritte-rest-json-extractor
14        assign:
15          res: /response/categories
16      - type: magritte-rest-append-array-extractor
17        fromStateVar: res
18        appendTo: categories
19    until:
20      type: magritte-rest-non-empty-condition
21      var: res
22  - type: magritte-iterable-state-call
23    method: GET
24    path: 'category/{%category%}'
25    timeBetweenCalls: 5s
26    iterableField: categories
27    iteratorExtractor:
28      - type: magritte-rest-string-extractor
29        var: category
30outputFileType: json
```

#### Other extractors

##### HTTP status code extractor

Extracts the HTTP status code from a response.

Copied!

```
1type: magritte-rest-http-status-code-extractor
2assign: 'variable_name'
```

##### Set-Cookie response header extractor

Extracts cookies from the Set-Cookie header in a response.

Copied!

```
1type: magritte-rest-set-cookie-header-extractor
2assign:
3  var_name_1: cookie_name_in_set_cookie_header
```

##### Array element extractor

Extracts an element from a given array.

Copied!

```
1type: magritte-rest-array-element-extractor
2fromStateVar: Array var to extract an element from.
3index: The index of the element in the input array to extract.
4toStateVar: Name of the variable to extract the element to.
```

The given index parameter can be negative to start at the end of the array, e.g. -1 to extract the last element.

##### Type cast extractor

An extractor that takes in a variable, casts the type of the variable using some pre-defined casting logic, and saves the result to a destination variable.

Copied!

```
1type: magritte-rest-typecast-extractor
2fromStateVar: Input variable to the extractor.
3toStateVar: Output variable of the extractor.
4toType: Type of the output variable after casting.
```

The `toType` parameter must be a valid Java type within the 'java.lang.' package.

Examples of valid types include 'String', 'Integer' but also the full 'java.lang' package and name: 'java.lang.Double'.

For type casting to work, there must be a pre-defined method to cast the type of the input variable to the output type. This means that there must be code within the plugin to transform variables from and to the configured types.

Note: Casting a `java.util.Arrays` of 2 strings `a` and `b` into a String will give you `[a, b]`, whereas casting a `com.fasterxml.jackson.databind.node.ArrayNode` of 2 strings `a` and `b` into a String will give you `["a","b"]` as it is the string representation of a JSON array.

### Conditions

The conditions work similar to ElasticSearch conditions. The current supported conditions are:

#### Regex

Copied!

```
1type: magritte-rest-regex-condition
2var: a state variable key
3matches: a valid regular expression
```

Example:

Copied!

```
1type: "magritte-rest-regex-condition"
2var: my_state_variable
3matches: '^\d+$'
```

#### Available condition

Checks if the given variable is available (whether it is assigned a non-null value).

Copied!

```
1type: magritte-rest-available-condition
2var: a state variable key
```

Example:

Copied!

```
1type: magritte-rest-available-condition
2var: my_state_variable
```

#### Non-empty condition

Check if the given variable is available and not empty.

Copied!

```
1type: magritte-rest-non-empty-condition
2var: a state variable key
```

Example:

Copied!

```
1type: magritte-rest-non-empty-condition
2var: my_array_state_variable
```

#### Not condition

Negates the given sub-condition.

Copied!

```
1type: magritte-rest-not-condition
2condition: A condition to negate.
```

Example:

Copied!

```
1type: magritte-rest-not-condition
2condition:
3    type: magritte-rest-available-condition
4    var: my_state_variable
```

#### And condition

Requires all the given sub-conditions to be true.

Copied!

```
1type: magritte-rest-and-condition
2conditions: A list of conditions to AND over.
```

Example:

Copied!

```
1type: magritte-rest-and-condition
2conditions:
3- type: magritte-rest-available-condition
4    var: my_state_variable
5- type: magritte-rest-non-empty-condition
6    var: my_array-state_variable
```

#### Binary condition

Copied!

```
1type: magritte-rest-binary-condition
2toCompare:
3    left: `state` key to compare on the left side of condition
4    right: `state` key to compare on the right side of condition
5op: One of the following "=", "<", ">", "<=", ">="
```

Example:

Copied!

```
1type: magritte-rest-binary-condition
2toCompare:
3    left: a_state_variable
4    right: another_state_variable
5op: <
```

### Expressions

An expression can be used to compute certain values anywhere during a Magritte REST sync. In contrast to extractors, results of expressions are not dependent on the `state` of a sync.

#### DateTime expressions

An expression that will supply a certain date and/or time. Starts by taking the current date/time and adding the given offset(s).

Other parameters for this initial `state` variable (e.g. should be put in a top level `initialStateVars:` block):

Copied!

```
1type: magritte-rest-datetime-expression
2offset: Optional. Time to add or substract from the current date/time. Can be negative.
3timezone: Optional. Which timezone to calculate the date/time for. Defaults to UTC.
4formatString: Optional. Output format of the calculated date and time.
5                Defaults to ISO 8601 datetime with offset.
```

For valid offsets, see [Java 8 Duration documentation ↗](https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html#parse-java.lang.CharSequence-).

For valid timezones, see [Java 8 ZoneId documentation ↗](https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html#of-java.lang.String-).

For valid output format strings, see [Java 8 DateTimeFormatter ↗](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html).

#### Literal expression

An expression that will provide a literal value.

The type of the literal will be automatically deduced and can be found by looking at the logs of the literal expression. Current supported types are strings, numbers, and lists.

Copied!

```
1type: magritte-rest-literal-expression
2literalValue: Required.
```

Example:

Copied!

```
1type: magritte-rest-literal-expression
2literalValue: 270
```

List example:

Copied!

```
1type: magritte-rest-literal-expression
2literalValue: ["it's", "a", "kind", "of", "magic"]
```

## Process JSON in Foundry

When ingesting JSON data:

Copied!

```
1{
2    "response": {
3        "size": 1000,
4        "items": [
5            { "item id": 1, "status": { "modifiedAt": "2020-02-11" }, "com.palantir.metadata": { ... } },
6            { "item id": 2, "status": { "modifiedAt": "2020-02-12" }, "com.palantir.metadata": { ... } },
7            { "item id": 3, "status": { "modifiedAt": "2020-02-13" }, "com.palantir.metadata": { ... } }
8        ]
9    }
10}
```

With the `magritte-rest-v2` plugin, each JSON response will be saved as a separate file in a dataset.

To easily process this data, put a schema on the raw dataset:

```
{
  "fieldSchemaList": [
    {
      "type": "STRING",
      "name": "row",
      "nullable": null,
      "userDefinedTypeClass": null,
      "customMetadata": {},
      "arraySubtype": null,
      "precision": null,
      "scale": null,
      "mapKeyType": null,
      "mapValueType": null,
      "subSchemas": null
    }
  ],
  "dataFrameReaderClass": "com.palantir.foundry.spark.input.DataSourceDataFrameReader",
  "customMetadata": {
    "format": "text",
    "options": {}
  }
}
```

To clean this dataset and have each `item` as a separate row in the dataset and `item` fields as columns, create a Python transforms repository.

Add the following snippet to a new `utils/read_json.py` file:

Copied!

```
1from pyspark.sql import functions as F
2import json
3import re
4
5
6def flattenSchema(df, dontFlattenCols=[], jsonCols=[]):
7    new_cols = []
8    for col in df.schema:
9        _flattenSchema(col, [], new_cols, dontFlattenCols + jsonCols, jsonCols)
10    print(new_cols)
11    return df.select(new_cols)
12
13
14def _flattenSchema(field, path, cols, dontFlattenCols, jsonCols):
15    curentPath = path + [field.name]
16    currentPathStr = '.'.join(curentPath)
17    if field.dataType.typeName() == 'struct' and currentPathStr not in dontFlattenCols:
18        for field2 in field.dataType.fields:
19            _flattenSchema(field2, curentPath, cols, dontFlattenCols, jsonCols)
20    else:
21        fullPath = '.'.join(['`{0}`'.format(col) for col in curentPath])
22        newName = '_'.join(curentPath)
23        sanitized = re.sub('[ ,;{}()\n\t\\.]', '_', newName)
24        if currentPathStr in jsonCols:
25            cols.append(F.to_json(fullPath).alias(sanitized))
26        else:
27            cols.append(F.col(fullPath).alias(sanitized))
28
29
30def parse_json(df, node_path, spark):
31    rdd = df.dataframe().rdd.flatMap(get_json_rows(node_path))
32    df = spark.read.json(rdd)
33    return df
34
35
36def get_json_rows(node_path):
37    def _get_json_object(row):
38        parsed_json = json.loads(row[0])
39        node = parsed_json
40        for segment in node_path:
41            node = node[segment]
42        return [json.dumps(x) for x in node]
43    return _get_json_object
```

You can then create a Python transform with code such as the following:

Copied!

```
1from transforms.api import transform, Input, Output
2from utils import read_json
3
4@transform(
5    output=Output("/output"),
6    json_raw=Input("/raw/json_files"),
7)
8def my_compute_function(json_raw, output, ctx):
9    df = read_json.parse_json(json_raw, ['response', 'items'], ctx.spark_session)
10    df = read_json.flattenSchema(df, jsonCols=['com.palantir.metadata'])
11    output.write_dataframe(df)
```

It will create a dataset:

```
item_id | status_modifiedAt | com_palantir_metadata
      1 |      "2020-02-11" | "{ ... }"
      2 |      "2020-02-12" | "{ ... }"
      3 |      "2020-02-13" | "{ ... }"
```
