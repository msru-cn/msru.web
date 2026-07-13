Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/amazon-dynamodb/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/amazon-dynamodb/#amazon-dynamodb)Amazon DynamoDB

The Amazon DynamoDB connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Amazon DynamoDB.

To create a new Amazon DynamoDB source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Amazon DynamoDB-specific configuration and networking. For the complete property reference, see the [official Amazon DynamoDB driver documentation ↗](https://cdn.cdata.com/help/DDK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-dynamodb/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/DDK/jdbc/RSBDynamoDB_p_AuthScheme.htm) | Mandatory | Specifies the type of authentication to use when connecting to Amazon DynamoDB. If this property is left blank, the default authentication is used. | `AwsRootKeys` |
| [`AWSAccessKey` ↗](https://cdn.cdata.com/help/DDK/jdbc/RSBDynamoDB_p_AWSAccessKey.htm) | Recommended | Specifies your AWS account access key. This value is accessible from your AWS security credentials page. | — |
| [`AWSRegion` ↗](https://cdn.cdata.com/help/DDK/jdbc/RSBDynamoDB_p_AWSRegion.htm) | Recommended | The hosting region for your Amazon Web Services. | `NORTHERNVIRGINIA` |
| [`AWSSecretKey` ↗](https://cdn.cdata.com/help/DDK/jdbc/RSBDynamoDB_p_AWSSecretKey.htm) | Recommended | Your AWS account secret key. This value is accessible from your AWS security credentials page. | — |
| [`Domain` ↗](https://cdn.cdata.com/help/DDK/jdbc/RSBDynamoDB_p_Domain.htm) | Recommended | Specifies your AWS domain name. Use this property to set a custom domain name if your organization has associated one with AWS. | `amazonaws.com` |

## [](https://www.palantir.com/docs/foundry/available-connectors/amazon-dynamodb/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| dynamodb.<AWSRegion>.<domain> | Always. AWSRegion Mappings |
| sts.<Region>.amazonaws.<TLD> | If `AuthScheme=AwsIAMRoles,AwsMFA,TemporaryCredentials` |
| cognito-idp.<AWSCognitoRegion>.amazonaws.<TLD> | If `AuthScheme=AwsCognitoBasic,AwsCognitoSrp` |
| cognito-identity.<AWSCognitoRegion>.amazonaws.<TLD> | If `AuthScheme=AwsCognitoBasic,AwsCognitoSrp` |
| <SSOLoginURL> | If `AuthScheme=Okta,ADFS,PingFederate,` use SSOLoginURL property |
| <Resource> | If `AuthScheme=AzureAD,` Resource set in SSOProperties |
| <SSOExchangeURL> | If `AuthScheme=Okta` |

[← PREVIOUS AlloyDB](https://www.palantir.com/docs/foundry/available-connectors/alloydb/)

[NEXT Amazon Kinesis →](https://www.palantir.com/docs/foundry/available-connectors/amazon-kinesis/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

