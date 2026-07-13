Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/rss/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/rss/#rss)RSS

The RSS connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for RSS.

To create a new RSS source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for RSS-specific configuration and networking. For the complete property reference, see the [official RSS driver documentation ↗](https://cdn.cdata.com/help/RRK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/rss/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`URI` ↗](https://cdn.cdata.com/help/RRK/jdbc/RSBRSS_p_URI.htm) | Mandatory | The URI (Uniform Resource Identifier) of the feed. | `https://myservice/myfeed/` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/RRK/jdbc/RSBRSS_p_AuthScheme.htm) | Recommended | The scheme used for HTTP authentication. Accepted entries are NTLM, Basic, Digest, Negotiate and None. | `None` |
| [`AuthToken` ↗](https://cdn.cdata.com/help/RRK/jdbc/RSBRSS_p_AuthToken.htm) | Recommended | The token used for authentication. | — |

[← PREVIOUS REST APIs](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/)

[NEXT Sage 200 →](https://www.palantir.com/docs/foundry/available-connectors/sage-200/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

