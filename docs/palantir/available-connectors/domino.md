Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/domino/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/domino/#domino)Domino

The Domino connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Domino.

To create a new Domino source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Domino-specific configuration and networking. For the complete property reference, see the [official Domino driver documentation ↗](https://cdn.cdata.com/help/JKK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/domino/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`DatabaseScope` ↗](https://cdn.cdata.com/help/JKK/jdbc/RSBDomino_p_DatabaseScope.htm) | Mandatory | The name of a Domino scope from the Domino Web UI's Scopes page. The provider exposes forms and views for the schema governed by the specified scope. | — |
| [`TableTypes` ↗](https://cdn.cdata.com/help/JKK/jdbc/RSBDomino_p_TableTypes.htm) | Mandatory | Choose whether Domino forms or Domino views are exposed by the provider. | `Forms` |
| [`URL` ↗](https://cdn.cdata.com/help/JKK/jdbc/RSBDomino_p_URL.htm) | Mandatory | Set this to the URL of the server where your Domino instance is hosted. | — |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/JKK/jdbc/RSBDomino_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to Domino. | `OAuthJWT` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/JKK/jdbc/RSBDomino_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/JKK/jdbc/RSBDomino_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/JKK/jdbc/RSBDomino_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/JKK/jdbc/RSBDomino_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/JKK/jdbc/RSBDomino_p_User.htm) | Recommended | Specifies the user ID of the authenticating Domino user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/domino/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |

[← PREVIOUS DocuSign](https://www.palantir.com/docs/foundry/available-connectors/docusign/)

[NEXT eBay →](https://www.palantir.com/docs/foundry/available-connectors/ebay/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

