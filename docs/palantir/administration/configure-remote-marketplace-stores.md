Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-remote-marketplace-stores/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-remote-marketplace-stores/#configure-remote-marketplace-stores)Configure remote Marketplace stores

Some [Marketplace](https://www.palantir.com/docs/foundry/marketplace/overview/) stores are remote, meaning that they are created on one Foundry enrollment and then made available on other Foundry enrollments. For example, the **Foundry Store** is provided by Palantir and includes products such as [Mapbox boundary datasets](https://www.palantir.com/docs/foundry/geospatial/ontology/#mapbox-boundaries). While stores created on your Foundry enrollment will [inherit the access permissions of their save location](https://www.palantir.com/docs/foundry/foundry-devops/create-products/#choose-a-store), access to remote stores is configurable in Control Panel. Remote stores are made available on your Foundry enrollment by Palantir. Some stores are available for all customers (such as **Foundry Store** and **Reference Resources**) while others may have been added to facilitate specific use cases within your organization.

User-created Marketplace stores are local to an enrollment by default. See the [DevOps documentation](https://www.palantir.com/docs/foundry/foundry-devops/export-import-products/) for information on sharing products across enrollments.

## [](https://www.palantir.com/docs/foundry/administration/configure-remote-marketplace-stores/#remote-store-permissions)Remote store permissions

![Image 3: Remote stores](https://www.palantir.com/docs/resources/foundry/administration/marketplace-remote-stores.png)

Remote store settings are configured per organization. Settings can be configured by users with the **Organization Administrators** role and viewed by those with the **Organization Settings Viewer** role.

Once a remote store has been made available on your Foundry organization:

*   If the store is turned on, the store and its products will be visible to all users in [Marketplace](https://www.palantir.com/docs/foundry/marketplace/browse-products/). By default, if a new store is made available to your organization from another enrollment, it will be enabled.
*   You can limit access to specific members of user groups within your organization. If you set permissions to a group whose users spans multiple organizations, only the members of the group in your organization will be able to view the store.
*   If the store is turned off, no users will be able to see the store or its products in [Marketplace](https://www.palantir.com/docs/foundry/marketplace/browse-products/).

![Image 4: Limit access to groups](https://www.palantir.com/docs/resources/foundry/administration/marketplace-configure-groups.png)

[← PREVIOUS Configure RStudio® license](https://www.palantir.com/docs/foundry/administration/configure-rstudio-license/)

[NEXT Configure outbound applications →](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

