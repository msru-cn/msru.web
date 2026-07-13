Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/docusign/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/docusign/#docusign)DocuSign

The DocuSign connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for DocuSign.

To create a new DocuSign source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for DocuSign-specific configuration and networking. For the complete property reference, see the [official DocuSign driver documentation ↗](https://cdn.cdata.com/help/UCK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/docusign/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/UCK/jdbc/RSBDocuSign_p_AuthScheme.htm) | Recommended | The type of authentication to use when connecting to DocuSign. | `OAuthJWT` |
| [`CallbackURL` ↗](https://cdn.cdata.com/help/UCK/jdbc/RSBDocuSign_p_CallbackURL.htm) | Recommended | The URL users return to after authenticating to DocuSign via OAuth. | `http://localhost:33333` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/UCK/jdbc/RSBDocuSign_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/UCK/jdbc/RSBDocuSign_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/UCK/jdbc/RSBDocuSign_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`OAuthJWTCert` ↗](https://cdn.cdata.com/help/UCK/jdbc/RSBDocuSign_p_OAuthJWTCert.htm) | Recommended | The JWT Certificate store. | — |
| [`OAuthJWTCertType` ↗](https://cdn.cdata.com/help/UCK/jdbc/RSBDocuSign_p_OAuthJWTCertType.htm) | Recommended | The type of key store containing the JWT Certificate. | `PEMKEY_BLOB` |
| [`OAuthJWTIssuer` ↗](https://cdn.cdata.com/help/UCK/jdbc/RSBDocuSign_p_OAuthJWTIssuer.htm) | Recommended | The issuer of the Java Web Token. | — |
| [`OAuthJWTSubject` ↗](https://cdn.cdata.com/help/UCK/jdbc/RSBDocuSign_p_OAuthJWTSubject.htm) | Recommended | The user subject for which the application is requesting delegated access. | `<YourUserID>` |

## [](https://www.palantir.com/docs/foundry/available-connectors/docusign/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| account.docusign.com | If `UseSandbox=FALSE` (default) |
| account-d.docusign.com | Always |

[← PREVIOUS Directory](https://www.palantir.com/docs/foundry/available-connectors/directory/)

[NEXT Domino →](https://www.palantir.com/docs/foundry/available-connectors/domino/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

