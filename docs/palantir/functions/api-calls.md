Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/functions/api-calls/

Markdown Content:
## Make API calls from functions

It is possible to make API calls to external sources from TypeScript v1, TypeScript v2 and Python functions, but doing so requires additional configuration. This configuration and external source usage are detailed below.

Source aliases

For TypeScript v2 and Python functions, we recommend referencing sources through [source aliases](https://www.palantir.com/docs/foundry/functions/source-aliases/). A source alias is a portable, named reference that you can use as the source identifier in place of a specific source. When your function is distributed through a [Marketplace product](https://www.palantir.com/docs/foundry/functions/marketplace-functions/), the alias can be remapped to a different source per environment, keeping your function code portable. TypeScript v1 functions use generated source symbols and do not support aliases.

## Configure access to external APIs

By default, functions are not allowed to call external APIs. To enable calling external systems from your function, you must [configure a source](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) to allow Foundry to connect with an external system.

For functions to connect to your source's external system securely, your source must be configured to [enable exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#enable-exports-for-source) and allow the [import of your source into Code Repositories](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#prerequisite-import-a-source-into-code). Both of these can be configured by navigating to the source in Data Connection and opening the **Connection settings** section.

For TypeScript v1 functions, the source's API name (configured on the **Code import configuration** tab under **Connection settings**) is the identifier you reference in code.

Make sure to fully configure the certificate chain in your source.

Webhook and function runtime environments are not identical.

Sometimes, a webhook will work correctly while the API call from a function might encounter an `UNABLE_TO_GET_ISSUER_CERT` error.

Refer to our documentation on the [`openssl` command in the source terminal](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#openssl) to verify certificates.

## Use an external source in a function

To make API calls from a function, you must first import your source into a functions repository using the [resource imports sidebar](https://www.palantir.com/docs/foundry/functions/resource-imports-sidebar/). For TypeScript v2 and Python functions, we recommend then [creating a source alias](https://www.palantir.com/docs/foundry/functions/source-aliases/) and using its alias key as the source identifier. TypeScript v1 functions reference the imported source directly. You must then declare that your function uses the source, as shown in the examples below.

Examples of this are shown below:

Copied!

```
1import { ExternalSystems } from "@foundry/functions-api";
2import { MySource } from "@foundry/external-systems/sources";
3
4export class MyExternalFunctions {
5    @ExternalSystems({ sources: [MySource] })
6    @Function()
7    public async myExternalFunction(): Promise<string> {
8        const { url } = MySource.getHttpsConnection();
9        const response = await MySource.fetch(url);
10
11        return response.text();
12    }
13}
```

Copied!

```
1import { getSource, getHttpsConnection, getFetch } from "@palantir/functions-sources";
2
3export const config = {
4    sources: ["mySourceAlias"]
5}
6
7async function MyExternalFunction(): Promise<string> {
8    const source = await getSource("mySourceAlias");
9    const { url } = getHttpsConnection(source);
10    const fetch = await getFetch(source);
11
12    const response = await fetch(url);
13
14    return response.text();
15}
```

Copied!

```
1from functions.api import function
2from functions.sources import get_source
3
4
5@function(sources=["mySourceAlias"])
6def my_external_function() -> str:
7    source = get_source("mySourceAlias")
8    url = source.get_https_connection().url
9    client = source.get_https_connection().get_client()
10    response = client.get(url)
11    return response.text
```

You can test your function in live preview and use it to make external calls once published.

**Third-party clients are not yet supported for serverless execution or live preview without overriding the fetch function or HTTP agent.** To ensure your API calls function properly across all environments, you must use the relevant library methods to make requests with the correct configuration. Direct API calls to external sources or internal Foundry URLs are not guaranteed to work in all environments.

## Access source attributes and credentials

You can access source attributes provided by each function type's corresponding library.

The example below shows how to obtain the base URL of the source in the example above.

Copied!

`1const { url } = MySource.getHttpsConnection();`

Copied!

`1const { url } = getHttpsConnection(source);`

Copied!

`1url = get_source("mySourceAlias").get_https_connection().url`

You can also access additional secrets or credentials stored on the source by using the following syntax to access secrets:

Copied!

`1const secret = MySource.getSecret("MySecret");`

Copied!

`1const secret = source.secrets["MySecret"];`

Copied!

`1secret = get_source("mySourceAlias").get_secret("MySecret")`

## Use the pre-configured clients

For sources that provide a REST API, the source object allows you to retrieve a client. This client will be pre-configured with the server and client certificates specified on the source. It will also include additional proxy configurations which allow egress from the environment functions are executed in. You should always use this client, if possible, to guarantee your function can egress to the source from all environments.

Copied!

`1const fetch = MySource.fetch;`

Copied!

`1const fetch = await getFetch(source);`

Copied!

`1client = source.get_https_connection().get_client()`

Alternatively, you can use your own client or third-party libraries which make external requests, and use the source object to [retrieve attributes and credentials](https://www.palantir.com/docs/foundry/functions/api-calls/#access-source-attributes-and-credentials).

TypeScript v2 functions provide a pre-configured HTTP agent as an additional integration point for usage with third party libraries which accept a custom HTTP agent.

The following example demonstrates retrieving this agent and using it with [axios ↗](https://github.com/axios/axios).

Copied!

```
1import { getHttpAgent, getHttpsConnection } from "@palantir/functions-sources";
2import axios from 'axios';
3
4const agent = await getHttpAgent(source);
5const { url } = getHttpsConnection(source);
6
7const response = await axios.get(url, {
8    httpsAgent: agent,
9});
```

Currently, it is impossible to access source attributes that are not credentials unless the source provides an HTTPS client. For example, you will not be able to access the `hostname` or other non-secret attributes on a [PostgreSQL source](https://www.palantir.com/docs/foundry/available-connectors/postgresql/).

## Use OAuth 2.0 with outbound applications

If your external API requires OAuth 2.0 authorization, you can configure an [outbound application](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/) in Control Panel and use it as the authentication method for a REST API source. When your function runs, the source exposes the calling user's OAuth access token as session credentials. Your function can then use the token to call the external API on the user's behalf.

This pattern is supported in Python and TypeScript v2 functions. See [Use the source's pre-configured client](https://www.palantir.com/docs/foundry/functions/api-calls/#use-the-sources-pre-configured-client) below for code examples.

### Limitations

*   **TypeScript v1:** TypeScript v1 functions cannot retrieve OAuth tokens directly from a source. To authenticate with an OAuth 2.0 API from a TypeScript v1 function, wrap the call in a [webhook](https://www.palantir.com/docs/foundry/functions/webhooks/) on a REST API source configured with the outbound application. Consider [migrating to TypeScript v2](https://www.palantir.com/docs/foundry/functions/typescript-v2-migration/) for direct token access.
*   **Deployed mode:** OAuth token refreshing is not available when the function is running in [deployed mode](https://www.palantir.com/docs/foundry/functions/functions-deployed/). If the calling user's access token expires during execution, the function cannot refresh it automatically. Run your function in [serverless mode](https://www.palantir.com/docs/foundry/functions/functions-deployed/#choose-between-deployed-and-serverless-execution-modes) to use OAuth-backed outbound applications.
*   **Direct function usage in Workshop:** Functions used directly in a [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) module, such as [function-backed variables](https://www.palantir.com/docs/foundry/workshop/functions-use/#function-backed-variables-in-workshop) or functions that populate widget content, cannot trigger the OAuth 2.0 interactive authorization prompt. If a user has not already authorized the outbound application, the function will fail rather than display the prompt. To use an OAuth-backed function from Workshop, wrap it in a [function-backed action](https://www.palantir.com/docs/foundry/action-types/function-actions-overview/). Alternatively, ensure the user completes the authorization flow from another interactive interface (such as a function-backed action against the same outbound application) before the function is invoked directly in Workshop.

### Use the source's pre-configured client

The simplest approach is to use the HTTP client provided by the source. The `Authorization` header is injected automatically.

Copied!

```
1from functions.api import function
2from functions.sources import get_source
3
4@function(sources=["myOAuthSourceAlias"])
5def call_external_api() -> str:
6    source = get_source("myOAuthSourceAlias")
7    url = source.get_https_connection().url
8    client = source.get_https_connection().get_client()
9
10    response = client.get(url + "/api/v1/resource", timeout=10)
11    return response.text
```

Copied!

```
1import { getSource, getHttpsConnection, getFetch } from "@palantir/functions-sources";
2
3export const config = {
4    sources: ["myOAuthSourceAlias"]
5};
6
7export default async function callExternalApi(): Promise<string> {
8    const source = await getSource("myOAuthSourceAlias");
9    const { url } = getHttpsConnection(source);
10    const fetch = await getFetch(source);
11
12    const response = await fetch(url + "/api/v1/resource");
13
14    return response.text();
15}
```

### Use a native HTTP client with manual token injection

If you need to use your own HTTP client instead of the source-provided one, retrieve the OAuth token from session credentials and set the `Authorization` header manually.

Copied!

```
1import requests
2from functions.api import function
3from functions.sources import get_source
4from external_systems.sources import OauthCredentials, Refreshable, SourceCredentials
5
6@function(sources=["myOAuthSourceAlias"])
7def call_external_api() -> str:
8    source = get_source("myOAuthSourceAlias")
9    url = source.get_https_connection().url
10
11    refreshable_credentials: Refreshable[SourceCredentials] = source.get_session_credentials()
12    session_credentials: SourceCredentials = refreshable_credentials.get()
13
14    if not isinstance(session_credentials, OauthCredentials):
15        raise ValueError("Expected OAuth credentials")
16
17    access_token: str = session_credentials.access_token
18
19    response = requests.get(
20        url + "/api/v1/resource",
21        headers={"Authorization": f"Bearer {access_token}"},
22        timeout=10,
23    )
24    return response.text
```

Copied!

```
1import { getSource, getHttpsConnection } from "@palantir/functions-sources";
2
3export const config = {
4    sources: ["myOAuthSourceAlias"]
5};
6
7export default async function callExternalApi(): Promise<string> {
8    const source = await getSource("myOAuthSourceAlias");
9    const credentials = await source.sessionCredentials?.get();
10
11    if (!credentials || credentials.type !== "oauth") {
12        throw new Error("Expected OAuth credentials");
13    }
14
15    const accessToken: string = credentials.accessToken;
16    const { url } = getHttpsConnection(source);
17
18    const response = await fetch(url + "/api/v1/resource", {
19        headers: { Authorization: `Bearer ${accessToken}` },
20    });
21
22    return response.text();
23}
```

### Use OAuth-backed functions in actions

A common pattern is to call an OAuth-backed external API and feed the result into an [Ontology edit](https://www.palantir.com/docs/foundry/functions/edits-overview/). You can then expose that function through a [function-backed action](https://www.palantir.com/docs/foundry/action-types/function-actions-overview/). When a user runs the action from Workshop or AIP Studio, their OAuth token is used to make the API call, and the resulting object edits are attributed to them.

For example, the function below uses an OAuth token to fetch the calling user's profile from a third-party identity service. It then creates a new ontology object with that information:

Copied!

```
1from functions.api import function, OntologyEdit
2from functions.sources import get_source
3from ontology_sdk import FoundryClient
4from ontology_sdk.ontology.objects import UserProfile
5
6
7@function(sources=["myOAuthSourceAlias"], edits=[UserProfile])
8def link_user_profile() -> list[OntologyEdit]:
9    source = get_source("myOAuthSourceAlias")
10    url = source.get_https_connection().url
11    client = source.get_https_connection().get_client()
12
13    response = client.get(url + "/v1/me", timeout=10)
14    response.raise_for_status()
15    profile = response.json()
16
17    ontology_edits = FoundryClient().ontology.edits()
18    ontology_edits.objects.UserProfile.create(
19        profile["id"],
20        display_name=profile["display_name"],
21    )
22    return ontology_edits.get_edits()
```

Copied!

```
1import { getSource, getHttpsConnection, getFetch } from "@palantir/functions-sources";
2import { UserProfile } from "@ontology/sdk";
3import { Client } from "@osdk/client";
4import { createEditBatch, Edits } from "@osdk/functions";
5
6type OntologyEdit = Edits.Object<UserProfile>;
7
8export const config = {
9    sources: ["myOAuthSourceAlias"],
10    edits: [UserProfile],
11};
12
13export default async function linkUserProfile(client: Client): Promise<OntologyEdit[]> {
14    const source = await getSource("myOAuthSourceAlias");
15    const { url } = getHttpsConnection(source);
16    const fetch = await getFetch(source);
17
18    const response = await fetch(url + "/v1/me");
19    if (!response.ok) {
20        throw new Error(`Failed to fetch profile: ${response.status}`);
21    }
22    const profile = await response.json();
23
24    const batch = createEditBatch<OntologyEdit>(client);
25    batch.create(UserProfile, {
26        userProfileId: profile.id,
27        displayName: profile.display_name,
28    });
29    return batch.getEdits();
30}
```

## Troubleshoot common errors

For OAuth authorization errors, such as `HTTP 401: Unauthorized`, `Credentials expired and no refresh handler provided`, or `Resolved source credentials are not present on the Source`, see [OAuth and outbound applications](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#oauth-and-outbound-applications) in the Data Connection troubleshooting reference.

### HTTP 407: Proxy authentication required

Function network requests must be covered by your source's [egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the destination hostname does not match an allowed policy, the request may return `HTTP 407: Proxy Authentication Required`.

If your egress policies look correct, check how the request URL is built. The URL from `getHttpsConnection()` has no trailing slash, so an appended path that omits the leading `/` is fused to the hostname:

Copied!

```
1"https://example.com" + "api/v1"
2→ "https://example.comapi/v1"
```

The resulting hostname (`example.comapi`) is not covered by any egress policy, so the request is rejected. Prefix the path with `/` (for example, `url + "/api/v1"`).
