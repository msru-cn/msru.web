Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/amazon-marketplace/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/amazon-marketplace/#amazon-marketplace)Amazon Marketplace

The Amazon Marketplace connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Amazon Marketplace.

To create a new Amazon Marketplace source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Amazon Marketplace-specific configuration and networking. For the complete property reference, see the [official Amazon Marketplace driver documentation ↗](https://cdn.cdata.com/help/ONK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-marketplace/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`IncludeReports` ↗](https://cdn.cdata.com/help/ONK/jdbc/RSBAmazonMarketplace_p_IncludeReports.htm) | Recommended | Set this connection property to true to expose already created reports as views, this property is available for both schemas (SellerCentral and VendorCentral). | `FALSE` |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/ONK/jdbc/RSBAmazonMarketplace_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `REFRESH` |
| [`Marketplace` ↗](https://cdn.cdata.com/help/ONK/jdbc/RSBAmazonMarketplace_p_Marketplace.htm) | Recommended | The Marketplace region that you are registered to sell in. | `United States` |
| [`OAuthClientId` ↗](https://cdn.cdata.com/help/ONK/jdbc/RSBAmazonMarketplace_p_OAuthClientId.htm) | Recommended | Specifies the client Id that was assigned when the custom OAuth application was created. (Also known as the consumer key.) This ID registers the custom application with the OAuth authorization server. | — |
| [`OAuthClientSecret` ↗](https://cdn.cdata.com/help/ONK/jdbc/RSBAmazonMarketplace_p_OAuthClientSecret.htm) | Recommended | Specifies the client secret that was assigned when the custom OAuth application was created. (Also known as the consumer secret). This secret registers the custom application with the OAuth authorization server. | — |
| [`Schema` ↗](https://cdn.cdata.com/help/ONK/jdbc/RSBAmazonMarketplace_p_Schema.htm) | Recommended | The type of schema to use. | `Marketplace` |
| [`SellerId` ↗](https://cdn.cdata.com/help/ONK/jdbc/RSBAmazonMarketplace_p_SellerId.htm) | Recommended | The Seller ID or merchant identifier you received when creating the account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-marketplace/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| sts.<AWSRegion>.amazon.com | If `Schema=SellingPartner,` AWSRegion Mappings |
| sellingpartnerapi-<AWSRegion>.amazon.com | If `Schema=SellingPartner,` SellingPartner Mappings |
| sandbox.sellingpartnerapi-<AWSRegion>.amazon.com | If `Schema=SellingPartner` and `UseSandbox=True,` SellingPartner Sandbox Mappings |
| mws.amazonservices.<Marketplace> | If `Schema=Marketplace,` AWSMarketplace Mappings |
| api.amazon.com | If using OAuth |
| Seller Central URLs | If using OAuth |
| oa.cdata.com | If using the embedded CData OAuth credentials |

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-marketplace/#extracting-files)Extracting files

Files can be extracted from Amazon Marketplace by executing the [GetReport ↗](https://cdn.cdata.com/help/ONK/jdbc/pg_SellerCentralsp-getreport.htm) stored procedure.

To extract a file, add the following SQL query in the sync definition.

Copied!

```sql
1EXECUTE GetReport @ReportDocumentId = '1234'
```

This will produce an output dataset with the file content stored in a Base64 encoded string column, which should be decoded to binary in a downstream data transformation.

[← PREVIOUS Amazon Kinesis](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/)

[NEXT Amazon S3 →](https://www.palantir.com/docs/foundry/available-connectors/amazon-s3/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

