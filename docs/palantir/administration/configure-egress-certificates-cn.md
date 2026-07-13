Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-egress-certificates/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-egress-certificates/#configure-egress-certificates)配置 egress 证书

enrollment 内的用户可以在 [Control Panel](https://www.palantir.com/docs/foundry/administration/overview/) 的 **Networking** 部分下访问 **Egress certificates** 页面，创建和管理 enrollment 内使用的自定义证书。

证书在建立连接时通过验证身份来建立系统之间的信任。配置的证书可以应用于使用 [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) 的 [Data connection 源](https://www.palantir.com/docs/foundry/data-connection/set-up-source/)，以建立安全连接。

可以配置两种类型的证书：

*   **Client certificate（客户端证书）：** 包含公共证书和私钥，允许 Foundry 在连接到需要双向 TLS（mTLS）认证的外部系统时进行身份验证。
*   **Server certificate（服务端证书）：** 公共证书，允许 Foundry 验证由私有证书颁发机构（CA）签名的证书的外部系统身份。服务端证书组织为证书包（bundle），可以将多个相关证书分组。

## [](https://www.palantir.com/docs/foundry/administration/configure-egress-certificates/#configure-client-certificates)配置客户端证书

导航到 **Client certificates** 标签页，选择 **Create client certificate**。

1.   提供证书别名以标识你的证书。
2.   添加 PEM 格式的客户端证书。还需要添加到达根证书所需的中间证书。
3.   添加对应的 PEM 格式私钥（`PKCS#8` 或 `RSA`）。确保此私钥与你的证书完全匹配。私钥在上传后会被安全加密并存储在 Foundry 中。
4.   配置谁有权限读取、导入和管理你的证书。

## [](https://www.palantir.com/docs/foundry/administration/configure-egress-certificates/#configure-server-certificate-bundles)配置服务端证书包

导航到 **Server certificate bundles** 标签页，选择 **Create server certificate bundle**。

1.   提供名称以标识你的证书包。
2.   添加 PEM 格式的服务端证书。每个服务端证书需要一个别名。你可以为证书包分配任意数量的服务端证书。
3.   配置谁有权限读取、导入和管理你的证书包。

[← 上一篇 Configure private link egress for Azure](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress-azure/)

[下一篇 Configure ingress →](https://www.palantir.com/docs/foundry/administration/configure-ingress/)
