Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/singlestore/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/singlestore/#singlestore)SingleStore

The SingleStore connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SingleStore.

To create a new SingleStore source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SingleStore-specific configuration and networking. For the complete property reference, see the [official SingleStore driver documentation ↗](https://cdn.cdata.com/help/JMK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/singlestore/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/JMK/jdbc/RSBSinglestore_p_AuthScheme.htm) | Mandatory | The scheme used for authentication. | `Password` |
| [`Server` ↗](https://cdn.cdata.com/help/JMK/jdbc/RSBSinglestore_p_Server.htm) | Mandatory | The host name or IP of the server hosting the SingleStore database. | `{serverAddress}` |
| [`UseSSL` ↗](https://cdn.cdata.com/help/JMK/jdbc/RSBSinglestore_p_UseSSL.htm) | Mandatory | This field sets whether SSL is enabled. | `TRUE` |
| [`Database` ↗](https://cdn.cdata.com/help/JMK/jdbc/RSBSinglestore_p_Database.htm) | Recommended | The name of the SingleStore database. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/JMK/jdbc/RSBSinglestore_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/JMK/jdbc/RSBSinglestore_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/JMK/jdbc/RSBSinglestore_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/JMK/jdbc/RSBSinglestore_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`Port` ↗](https://cdn.cdata.com/help/JMK/jdbc/RSBSinglestore_p_Port.htm) | Recommended | The port of the server hosting the SingleStore database. | `3306` |
| [`User` ↗](https://cdn.cdata.com/help/JMK/jdbc/RSBSinglestore_p_User.htm) | Recommended | Specifies the user ID of the authenticating SingleStore user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/singlestore/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <Server>:<Port> | If `UseSSH=FALSE,` Server supports listing multiple addresses (i.e., `Server='192.168.1.100,192.168.1.101'`). Port supports listing multiple addresses (i.e., `Port='3306, 3307'`); default `Port=3306` |
| <SSHServer>:<SSHPort> | If `UseSSH=TRUE,` default `SSHPort=22` |

[← PREVIOUS Shopify](https://www.palantir.com/docs/foundry/available-connectors/shopify/)

[NEXT Slack →](https://www.palantir.com/docs/foundry/available-connectors/slack/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

