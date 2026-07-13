Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/sas-data-sets/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/sas-data-sets/#sas-data-sets)SAS Data Sets

The SAS Data Sets connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for SAS Data Sets.

To create a new SAS Data Sets source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for SAS Data Sets-specific configuration and networking. For the complete property reference, see the [official SAS Data Sets driver documentation ↗](https://cdn.cdata.com/help/LIK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/sas-data-sets/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`ConnectionType` ↗](https://cdn.cdata.com/help/LIK/jdbc/RSBSASDataSets_p_ConnectionType.htm) | Mandatory | Specifies the file storage service, server, or file access protocol through which your SAS Data Sets files are stored and retrieved. | `Local` |
| [`URI` ↗](https://cdn.cdata.com/help/LIK/jdbc/RSBSASDataSets_p_URI.htm) | Mandatory | The Uniform Resource Identifier (URI) for the SAS resource location. | `C:\myfolder` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/LIK/jdbc/RSBSASDataSets_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/LIK/jdbc/RSBSASDataSets_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/LIK/jdbc/RSBSASDataSets_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |

[← PREVIOUS SAP applications / SAP SuccessFactors](https://www.palantir.com/docs/foundry/available-connectors/sap-successfactors/)

[NEXT SAS Xpt →](https://www.palantir.com/docs/foundry/available-connectors/sas-xpt/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

