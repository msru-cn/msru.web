Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/

Published Time: Thu, 09 Jul 2026 17:47:53 GMT

# [](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#set-up-a-direct-connection)Set up a direct connection

This documentation is outdated and retained for historical reference only. For updated guidance on connection set up, refer to our documentation on [setting up a source](https://www.palantir.com/docs/foundry/data-connection/set-up-source/).

Direct connections depend on Foundry's container infrastructure which is only available in Foundry's managed SaaS platform. As a result, cloud-based direct connections may not be available in your environment.

If you are trying to connect to a data source which is accessible over the Internet, such as a REST API, an SFTP server, or an Azure storage account, you can configure a direct connection to avoid needing to [set up an agent](https://www.palantir.com/docs/foundry/data-connection/set-up-agent/). Using a direct connection has a number of advantages:

*   No need to provision, configure, and manage an agent and its host
*   Avoids routing Internet-to-Foundry through your network
*   Offers excellent uptime and performance as cloud-based Syncs do not depend on an agent software package or its host

If you are interested in configuring a cloud-based direct connection, follow these steps:

1.   [Configure a network egress policy](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#configure-a-network-policy) for your enrollment.
2.   [Provision credentials](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#provision-credentials) to connect to your data source.
3.   [Create the Source in Data Connection](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#create-the-source-in-data-connection).

## [](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#configure-a-network-policy)Configure a network policy

You must have the _Information security officer_ role on your [Enrollment](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations/) to configure network egress. If you do not have permissions to configure egress, contact your Palantir representative for help.

The _Information security officer_ role can be found in the Enrollment permissions section of the [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/). An administrator needs to have the _Enrollment administrator_ role in order to see this section.

To configure a network policy, navigate to Control Panel using the **Other workspaces** link in the [Workspace sidebar](https://www.palantir.com/docs/foundry/getting-started/orientation-and-nav/#workspace-navigation-sidebar). In Control Panel, select **Network egress** in the sidebar. If you can't see this option, contact your Palantir representative to go through the following steps.

![Image 5: create network policy](https://www.palantir.com/docs/resources/foundry/data-connection/create-network-policy.png)

Add a network policy by selecting **Add network policy**. Add a description and connection details, similar to the details you provided when contacting Palantir:

*   If you are connecting via HTTP(S), add the DNS hostname of your data source
*   If you need to use a non-HTTP protocol, add a CIDR address and port

Keep the default **Optional** policy type selection, and select **Add network policy**.

## [](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#provision-credentials)Provision credentials

In the majority of cases, Foundry will require authorized credentials (such as a username and password) to access Sources. It is best practice to use a service account specifically for Foundry.

Provision a service account for the Source following any internal guidelines and processes that your organization has for establishing service accounts. Note the credentials before proceeding to the next step.

## [](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#create-the-source-in-data-connection)Create the Source in Data Connection

Once the above steps are done, you can proceed with creating the Source in Data Connection:

*   After logging in, navigate to **Data Connection** using the [sidebar](https://www.palantir.com/docs/foundry/getting-started/orientation-and-nav/).
*   Select the **Sources** tab.
*   Select **New source** in the top-right.
*   Select the [source type](https://www.palantir.com/docs/foundry/data-integration/source-type-overview/) corresponding to your data source.
*   Select **Direct connection**, then select **Continue** in the bottom right.

![Image 6: Create direct connection](https://www.palantir.com/docs/resources/foundry/data-connection/create-direct-connection.png)

### [](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#save-the-source-in-a-project)Save the Source in a Project

Next, name your Source and choose a [Project](https://www.palantir.com/docs/foundry/compass/move-and-share-resources/) to place it in. We generally recommend creating a new Project for each Source, as this provides the cleanest way to permission datasets derived from this Source. Consult the [Source permission best practices](https://www.palantir.com/docs/foundry/data-connection/permissions/#source-best-practices) for more information. Full guidance for how to structure data pipelines end-to-end in Foundry is available in the [recommended Project structure documentation](https://www.palantir.com/docs/foundry/building-pipelines/recommended-project-structure/).

Select **Create source and continue** in the bottom right.

### [](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#choose-your-network-policy)Choose your network policy

On the next page, select the network policy you [configured earlier](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#configure-a-network-policy) by clicking **Use existing policy** and searching for the policy name.

![Image 7: Use existing policy for direct connection](https://www.palantir.com/docs/resources/foundry/data-connection/use-existing-policy.png)![Image 8: select network policy](https://www.palantir.com/docs/resources/foundry/data-connection/select-network-policy.png)

### [](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#configure-source-and-add-drivers)Configure Source and add drivers

Add details about how to connect to your source. These details will depend on the [source type](https://www.palantir.com/docs/foundry/data-integration/source-type-overview/) you are using and typically consist of basic credentials such as connection URLs, cloud provider regions, and so on.

[JDBC sources](https://www.palantir.com/docs/foundry/available-connectors/custom-jdbc-sources/) may require adding and selecting **drivers** required to connect to your source. Although many drivers ship out-of-the-box with Foundry, you may need to upload and select a driver to proceed.

### [](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#add-credentials)Add credentials

Add the credentials you [provisioned](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#provision-credentials) previously to allow the direct connection to connect to your data.

### [](https://www.palantir.com/docs/foundry/data-connection/set-up-direct-connection/#save-and-continue)Save and continue

Select **Save** in the bottom right to complete setting up your direct connection. Once your Source is fully set up, you can proceed to [set up a Sync](https://www.palantir.com/docs/foundry/data-connection/set-up-sync/) to bring data into Foundry.

[← PREVIOUS Add virtual tables to a Marketplace product](https://www.palantir.com/docs/foundry/data-connection/marketplace-virtual-tables/)

[NEXT Agent worker runtime configuration reference →](https://www.palantir.com/docs/foundry/data-connection/agent-worker-runtime/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

