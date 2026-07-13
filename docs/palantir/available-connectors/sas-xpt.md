Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sas-xpt/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/sas-xpt/#sas-xpt)SAS Xpt

The SAS Xpt connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SAS Xpt.

To create a new SAS Xpt source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SAS Xpt-specific configuration and networking. For the complete property reference, see the [official SAS Xpt driver documentation ↗](https://cdn.cdata.com/help/JXK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sas-xpt/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`ConnectionType` ↗](https://cdn.cdata.com/help/JXK/jdbc/RSBSASXpt_p_ConnectionType.htm) | Mandatory | Specifies the file storage service, server, or file access protocol through which your SAS Xpt files are stored and retrieved. | `Local` |
| [`URI` ↗](https://cdn.cdata.com/help/JXK/jdbc/RSBSASXpt_p_URI.htm) | Mandatory | The Uniform Resource Identifier (URI) for the SASXpt resource location. | `C:\folder` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/JXK/jdbc/RSBSASXpt_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/JXK/jdbc/RSBSASXpt_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/JXK/jdbc/RSBSASXpt_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

[← PREVIOUS SAS Data Sets](https://www.palantir.com/docs/foundry/available-connectors/sas-data-sets/)

[NEXT SendGrid →](https://www.palantir.com/docs/foundry/available-connectors/sendgrid/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

