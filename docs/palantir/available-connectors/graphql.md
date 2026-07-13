Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/graphql/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/graphql/#graphql)GraphQL

The GraphQL connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for GraphQL.

To create a new GraphQL source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for GraphQL-specific configuration and networking. For the complete property reference, see the [official GraphQL driver documentation ↗](https://cdn.cdata.com/help/LAK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/graphql/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`URL` ↗](https://cdn.cdata.com/help/LAK/jdbc/RSBGraphQL_p_URL.htm) | Mandatory | Specifies the endpoint URL of the GraphQL service. | `https://api.example.com/graphql` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/LAK/jdbc/RSBGraphQL_p_AuthScheme.htm) | Recommended | Specifies the authentication method to use when connecting to remote services. | `Basic` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/LAK/jdbc/RSBGraphQL_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/LAK/jdbc/RSBGraphQL_p_OAuthClientId.htm) | Recommended | Specifies the client ID (also known as the consumer key) assigned to your custom OAuth application. This ID is required to identify the application to the OAuth authorization server during authentication. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/LAK/jdbc/RSBGraphQL_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret assigned to your custom OAuth application. This confidential value is used to authenticate the application to the OAuth authorization server. | — |
| [`Password` ↗](https://cdn.cdata.com/help/LAK/jdbc/RSBGraphQL_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/LAK/jdbc/RSBGraphQL_p_User.htm) | Recommended | Specifies the user ID of the authenticating GraphQL user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/graphql/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always |
| <OAuthRequestTokenURL> | If using `AuthScheme=OAuth` and `OAuthVersion=1.0` |
| <OAuthAuthorizationURL> | If using `AuthScheme=OAuth` |
| <OAuthAccessTokenURL> | If using `AuthScheme=OAuth` |
| <OAuthRefreshTokenURL> | If using `AuthScheme=OAuth` and `OAuthVersion=2.0` |
| cognito-idp.<AWSCognitoRegion>.amazonaws.<TLD> | If `AuthScheme=AwsCognitoBasic,AwsCognitoSrp,` AWSRegion Mappings |
| cognito-identity.<AWSCognitoRegion>.amazonaws.<TLD> | If `AuthScheme=AwsCognitoBasic,AwsCognitoSrp,` AWSRegion Mappings |

[← PREVIOUS Google Spanner](https://www.palantir.com/docs/foundry/available-connectors/google-spanner/)

[NEXT Greenplum →](https://www.palantir.com/docs/foundry/available-connectors/greenplum/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

