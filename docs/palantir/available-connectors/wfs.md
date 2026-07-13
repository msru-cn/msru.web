Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/wfs/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/wfs/#web-feature-service-wfs)Web Feature Service (WFS)

Connect Foundry to a [WFS ↗](https://www.ogc.org/standards/wfs/) version `1.1.0` server and pull geospatial data into a Foundry dataset.

## [](https://www.palantir.com/docs/foundry/available-connectors/wfs/#setup)Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper right corner of the screen.
2.   Select **WFS** from the available connector types under **Protocol sources**.
3.   Choose to use a [**direct connection**](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/) over the Internet or to connect [**through an intermediary agent**](https://www.palantir.com/docs/foundry/data-connection/set-up-agent/).
4.   Follow the additional configuration prompts to continue the setup of your connector using the information in the sections below.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/wfs/#source-configuration)Source configuration

On the **Connection details** page, enter the **Upstream host URL** in the **WFS Source Config** panel to connect to a single WFS server.

### [](https://www.palantir.com/docs/foundry/available-connectors/wfs/#authorization)Authorization

The WFS connector currently supports two types of authorization configuration: **No Auth** and **GEOAxIS**. If you select **GEOAxIS**, then you must also upload any non-person entity (NPE) certificates and private keys required to connect to the server. To upload NPE certificates or private keys, select **More Options** before choosing **Configure server certificates** for NPE certificates or **Configure client certificates** for private keys.

### [](https://www.palantir.com/docs/foundry/available-connectors/wfs/#optional-source-configuration)Optional source configuration

The **More options** menu provides two additional configuration options:

1.   **Use lower-case WFS requests:** By default, the WFS connector sends all query parameters as upper-case strings. If your server handles this in a case-sensitive manner, you can toggle the connector to use lower-case query parameters.
2.   **Header overrides:** Use this option to configure additional headers for all requests made by the WFS connector.

### [](https://www.palantir.com/docs/foundry/available-connectors/wfs/#networking)Networking

You must access your WFS server on port 443. Ensure an [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/) exists for the source.

### [](https://www.palantir.com/docs/foundry/available-connectors/wfs/#source-previews)Source previews

After you configure your source, select **Preview sources** on the right side of your screen to view the names of feature layers available on the WFS server.

## [](https://www.palantir.com/docs/foundry/available-connectors/wfs/#sync-configuration)Sync configuration

After you create your source, you can [create syncs](https://www.palantir.com/docs/foundry/data-connection/set-up-sync/) that import data for a specific feature type into Foundry. You will need to specify the name of the feature to import in the **WFS feature import config**.

By default, the WFS connector creates a dataset with two columns: one for the feature ID and one for a JSON string of the properties on that feature. You can optionally configure the connector to parse the schema definition from the WFS server to create a dataset with a typed column for each property on the feature type. To do this, change the **Feature import mode** from **JSON** to **Schematized**.

![Image 2: Sample schematized sync configuration.](https://www.palantir.com/docs/resources/foundry/available-connectors/wfs_sync_config.png)

The **Schematized** import mode may result in longer build times for feature types with many properties or more failure-prone builds in cases where WFS servers have a non-standard schema definition.

### [](https://www.palantir.com/docs/foundry/available-connectors/wfs/#optional-sync-configuration)Optional sync configuration

The **More options** menu provides two additional configuration options:

1.   **Maximum batch size for imports:** The WFS connector creates batches of data to import into Foundry, and the batch size can influence performance depending on the geometry type of imported features. Generally, syncs that pull in more complicated geometry should use a smaller batch size and syncs that pull in simple geometry, like points, can use a larger batch size. Similarly, you can fix failing builds by increasing the batch size so the connector pulls in more data per request from the WFS server. The default batch size is 1000 features.
2.   **Maximum requests to send to upstream per second:** Builds for the WFS connector can run for a long time if there is a lot of data to sync. Upstream WFS servers may rate limit a client if it sends too many requests within a short period. To avoid hitting server rate limits, you can configure rate limiting at the sync level. The default sync rate limit is 10 requests per second.

### [](https://www.palantir.com/docs/foundry/available-connectors/wfs/#wfs-restrictions)WFS restrictions

The WFS connector may fail as a result of the following restrictions on the server's `1.1.0` specification:

*   **Specification violations:** If a server does not adhere to the WFS `1.1.0` specification, then the WFS connector cannot query features correctly. The connector uses `GetFeature` requests to respond with the number of features fetched, but some servers will always respond with 0. In this case, the connector cannot determine how much data to fetch and will exit.
*   **Small geographic regions with many features:** WFS `1.1.0` does not provide a mechanism to page through feature data, so the connector will try to page through it in batches. If there is more data in one small region than can fit in a single batch, the connector cannot import that data and the sync will fail. By default, the smallest region possible is a single 10-kilometer by 10-kilometer area. Although this is not configurable, the default batch size is configurable at the sync level.

[← PREVIOUS Wave Financial](https://www.palantir.com/docs/foundry/available-connectors/wave-financial/)

[NEXT WooCommerce →](https://www.palantir.com/docs/foundry/available-connectors/woocommerce/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

