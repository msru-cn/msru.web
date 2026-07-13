Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-dataverse/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dataverse/#microsoft-dataverse)Microsoft Dataverse

The Microsoft Dataverse connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft Dataverse.

To create a new Microsoft Dataverse source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft Dataverse-specific configuration and networking. For the complete property reference, see the [official Microsoft Dataverse driver documentation ↗](https://cdn.cdata.com/help/UVK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dataverse/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/UVK/jdbc/RSBDynamics365_p_AuthScheme.htm) | Mandatory | Specifies the type of authentication to use when connecting to Microsoft Dataverse. If this property is left blank, the default authentication is used. | `AzureAD` |
| [`OrganizationURL` ↗](https://cdn.cdata.com/help/UVK/jdbc/RSBDynamics365_p_OrganizationURL.htm) | Mandatory | The URL to your Dynamics 365 organization, sometimes referred to as the resource. To find the correct URL for your Microsoft Dataverse instance, search the Web Services page. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/UVK/jdbc/RSBDynamics365_p_Schema.htm) | Mandatory | Specifies the schema to use when listing metadata from Microsoft Dataverse. | `Entities` |
| [`AzureTenant` ↗](https://cdn.cdata.com/help/UVK/jdbc/RSBDynamics365_p_AzureTenant.htm) | Recommended | Identifies the Microsoft Dataverse tenant being used to access data, either by name (for example, contoso.onmicrosoft.com) or ID. (Conditional). | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/UVK/jdbc/RSBDynamics365_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/UVK/jdbc/RSBDynamics365_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/UVK/jdbc/RSBDynamics365_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`OAuthGrantType` ↗](https://cdn.cdata.com/help/UVK/jdbc/RSBDynamics365_p_OAuthGrantType.htm) | Recommended | Specifies the grant type for the chosen OAuth flow. This value should be the same as the grant_type that was set during OAuth custom application creation. | `CLIENT` |

[← PREVIOUS Microsoft Bing](https://www.palantir.com/docs/foundry/available-connectors/microsoft-bing/)

[NEXT Microsoft Dynamics 365 →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-dynamics-365/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

