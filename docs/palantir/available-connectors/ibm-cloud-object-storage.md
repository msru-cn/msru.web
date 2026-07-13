Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/ibm-cloud-object-storage/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/ibm-cloud-object-storage/#ibm-cloud-object-storage)IBM Cloud Object Storage

The IBM Cloud Object Storage connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for IBM Cloud Object Storage.

To create a new IBM Cloud Object Storage source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for IBM Cloud Object Storage-specific configuration and networking. For the complete property reference, see the [official IBM Cloud Object Storage driver documentation ↗](https://cdn.cdata.com/help/GMK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/ibm-cloud-object-storage/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`ApiKey` ↗](https://cdn.cdata.com/help/GMK/jdbc/RSBIBMCloudObjectStorage_p_ApiKey.htm) | Mandatory | The API Key used to identify the user to IBM Cloud. | — |
| [`CloudObjectStorageCRN` ↗](https://cdn.cdata.com/help/GMK/jdbc/RSBIBMCloudObjectStorage_p_CloudObjectStorageCRN.htm) | Recommended | The CRN which uniquely identifies your Cloud Object Storage instance in IBM Cloud. | — |
| [`InitiateOAuth` ↗](https://cdn.cdata.com/help/GMK/jdbc/RSBIBMCloudObjectStorage_p_InitiateOAuth.htm) | Recommended | Specifies the process for obtaining or refreshing the OAuth access token, which maintains user access while an authenticated, authorized user is working. | `GETANDREFRESH` |

## [](https://www.palantir.com/docs/foundry/available-connectors/ibm-cloud-object-storage/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| iam.bluemix.net | Always |
| resource-controller.cloud.ibm.com | Always |
| <Region>.cloud-object-storage.appdomain.cloud | Always. Region connection property is mapped (may also be returned by IBM or part of CRN) |

[← PREVIOUS IBM Cloud Data Engine](https://www.palantir.com/docs/foundry/available-connectors/ibm-cloud-data-engine/)

[NEXT Instagram →](https://www.palantir.com/docs/foundry/available-connectors/instagram/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

