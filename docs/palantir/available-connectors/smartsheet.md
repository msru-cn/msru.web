Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/smartsheet/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/smartsheet/#smartsheet)Smartsheet

The Smartsheet connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Smartsheet.

To create a new Smartsheet source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Smartsheet-specific configuration and networking. For the complete property reference, see the [official Smartsheet driver documentation ↗](https://cdn.cdata.com/help/BSK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/smartsheet/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/BSK/jdbc/RSBSmartsheet_p_AuthScheme.htm) | Recommended | Specifies the authentication method to use when connecting to Smartsheet. | `PersonalAccessToken` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/BSK/jdbc/RSBSmartsheet_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/BSK/jdbc/RSBSmartsheet_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/BSK/jdbc/RSBSmartsheet_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`PersonalAccessToken` ↗](https://cdn.cdata.com/help/BSK/jdbc/RSBSmartsheet_p_PersonalAccessToken.htm) | Recommended | Specifies the Personal Access Token for authenticating with Smartsheet. This token can be generated through the Smartsheet user interface. | — |
| [`Region` ↗](https://cdn.cdata.com/help/BSK/jdbc/RSBSmartsheet_p_Region.htm) | Recommended | Specifies the hosting region for your Smartsheet account. | `GLOBAL` |

## [](https://www.palantir.com/docs/foundry/available-connectors/smartsheet/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| api.smartsheet.com | If `Region=GLOBAL` (default) |
| api.smartsheet.eu | If `Region=EU` |
| api.smartsheetgov.com | If `Region=GOV` |
| app.smartsheet.com | Only for Authorization URL, If `Region=GLOBAL` (default) |
| app.smartsheet.eu | Only for Authorization URL, If `Region=EU` |
| app.smartsheetgov.com | Only for Authorization URL, If `Region=GOV` |

### [](https://www.palantir.com/docs/foundry/available-connectors/smartsheet/#connection-settings)Connection settings

The URL field cannot be modified and is fixed as `jdbc:smartsheet:`. The `JDBC properties` section can be used as an alternative to modifying the JDBC URL.

For example, to represent the following JDBC URL: `jdbc:smartsheet:InitiateOAuth=GETANDREFRESH;OAuthClientId=MyOAuthClientId;OAuthClientSecret=MyOAuthClientSecret;CallbackURL=http://localhost:33333;`, you can specify the additional properties in the `JDBC properties` section as follows:

![Image 2: Smartsheet connection settings.](https://www.palantir.com/docs/resources/foundry/available-connectors/smartsheet-connection-settings.png)

[← PREVIOUS Slack](https://www.palantir.com/docs/foundry/available-connectors/slack/)

[NEXT SMB →](https://www.palantir.com/docs/foundry/available-connectors/smb/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

