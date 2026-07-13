Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/hubspot/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/hubspot/#hubspot)Hubspot

Connect Foundry to HubSpot to import data and create, modify, and delete records in HubSpot.

## [](https://www.palantir.com/docs/foundry/available-connectors/hubspot/#source-configuration)Source configuration

Before you configure the HubSpot connection, generate a HubSpot API key. You can get an existing API key or generate a new HubSpot API key by following the steps below.

1.   In your Hubspot account, select the settings icon in the main navigation bar.
2.   In the left sidebar menu, navigate to **Integrations > API Key**.
3.   If a key has never been generated for your account, select **Generate API Key**. If an API key already exists, select **Show** to view it.

You can now set the retrieved key in the `api-key` connection property.

The following is the most basic structure for a Hubspot connection:

Copied!

```yaml
1type: hubspot
2config:
3  apiKey: '{{api-key}}'
```

[← PREVIOUS Highrise](https://www.palantir.com/docs/foundry/available-connectors/highrise/)

[NEXT IBM Cloud Data Engine →](https://www.palantir.com/docs/foundry/available-connectors/ibm-cloud-data-engine/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

