Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-remote-marketplace-stores/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-remote-marketplace-stores/#configure-remote-marketplace-stores)配置远程 Marketplace stores

部分 [Marketplace](https://www.palantir.com/docs/foundry/marketplace/overview/) stores 是远程的，即它们在一个 Foundry enrollment 上创建，然后在其他 Foundry enrollments 上可用。例如，**Foundry Store** 由 Palantir 提供，包括 [Mapbox boundary datasets](https://www.palantir.com/docs/foundry/geospatial/ontology/#mapbox-boundaries) 等产品。在你的 Foundry enrollment 上创建的 stores 将[继承其保存位置的访问权限](https://www.palantir.com/docs/foundry/foundry-devops/create-products/#choose-a-store)，而远程 stores 的访问可以在 Control Panel 中配置。Remote stores 由 Palantir 在你的 Foundry enrollment 上提供。部分 stores 对所有客户可用（如 **Foundry Store** 和 **Reference Resources**），而其他 stores 可能是为组织内的特定用例添加的。

用户创建的 Marketplace stores 默认是本地的。有关跨 enrollments 共享产品的信息，请参阅 [DevOps 文档](https://www.palantir.com/docs/foundry/foundry-devops/export-import-products/)。

## [](https://www.palantir.com/docs/foundry/administration/configure-remote-marketplace-stores/#remote-store-permissions)Remote store 权限

![Image 3: Remote stores](https://www.palantir.com/docs/resources/foundry/administration/marketplace-remote-stores.png)

Remote store 设置按组织配置。设置可由具有 **Organization Administrators** 角色的用户配置，由具有 **Organization Settings Viewer** 角色的用户查看。

一旦 remote store 在你的 Foundry 组织上可用：

*   如果 store 已开启，store 及其产品将对 [Marketplace](https://www.palantir.com/docs/foundry/marketplace/browse-products/) 中的所有用户可见。默认情况下，如果新 store 从另一个 enrollment 提供给你的组织，它将被启用。
*   你可以将访问限制给组织内特定用户组的成员。如果你为一个跨多个组织的用户组设置了权限，只有你组织中该组的成员才能查看 store。
*   如果 store 已关闭，则没有用户能在 [Marketplace](https://www.palantir.com/docs/foundry/marketplace/browse-products/) 中看到 store 或其产品。

![Image 4: 限制对群组的访问](https://www.palantir.com/docs/resources/foundry/administration/marketplace-configure-groups.png)

[← 上一篇 Configure RStudio license](https://www.palantir.com/docs/foundry/administration/configure-rstudio-license/)

[下一篇 Configure outbound applications →](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/)
