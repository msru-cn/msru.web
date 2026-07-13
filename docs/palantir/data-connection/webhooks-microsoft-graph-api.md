Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/webhooks-microsoft-graph-api/

Published Time: Thu, 09 Jul 2026 17:47:54 GMT

# [](https://www.palantir.com/docs/foundry/data-connection/webhooks-microsoft-graph-api/#set-up-a-webhook-for-the-microsoft-graph-api)Set up a Webhook for the Microsoft Graph API

This guide shows step-by-step how to configure a webhook for the Microsoft Graph API to access Microsoft Cloud service resources from Foundry.

[Learn more about the Microsoft Graph API ↗](https://learn.microsoft.com/en-us/graph/use-the-api).

## [](https://www.palantir.com/docs/foundry/data-connection/webhooks-microsoft-graph-api/#prerequisites)Prerequisites

Prior to configuration, you must:

*   Sign in to your Microsoft account by typing `login.microsoftonline.com` into your browser to authenticate and generate an access token you can use to create the webhook.
*   Configure [network egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/) for both `login.microsoftonline.com` and `graph.microsoft.com` to allow outbound connections from Foundry.

## [](https://www.palantir.com/docs/foundry/data-connection/webhooks-microsoft-graph-api/#instructions)Instructions

1.   [Create a REST API source](https://www.palantir.com/docs/foundry/data-connection/webhooks-setup/#create-a-source) for your webhook.
2.   Include `login.microsoftonline.com` and `graph.microsoft.com` as the source's **Domains** without any **Authentication** restraints.
3.   Set any necessary **Additional secrets**, such as the `TenantId`, `ClientId` and `ClientSecret` that you will use to authenticate against `login.microsoftonline.com`. You will find these after you [register an application in Microsoft Entra ↗](https://learn.microsoft.com/en-us/graph/auth-register-app-v2).
4.   Add the network egress policies you [created above](https://www.palantir.com/docs/foundry/data-connection/webhooks-microsoft-graph-api/#prerequisites) in the **Network connectivity** section before choosing **Save and continue**.

![Image 3: The Source Setup window is displayed.](https://www.palantir.com/docs/resources/foundry/data-connection/microsoft-graph-api-source-setup.png)

After you configure your REST API source, you will next configure your webhook to make two `POST` requests that:

1.   Login using the `login.microsoftonline.com` credentials created on the source to get a short-lived access token.
2.   Make an API call to `graph.microsoft.com` using the access token in the response from the first call as the bearer token in the call's authentication header.

![Image 4: The Calls configuration window is displayed.](https://www.palantir.com/docs/resources/foundry/data-connection/microsoft-graph-api-calls.png)

[Learn more about configuring Webhooks in Data Connection](https://www.palantir.com/docs/foundry/data-connection/webhooks-reference/).

[← PREVIOUS Set up a webhook](https://www.palantir.com/docs/foundry/data-connection/webhooks-setup/)

[NEXT Configuration reference →](https://www.palantir.com/docs/foundry/data-connection/webhooks-reference/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

