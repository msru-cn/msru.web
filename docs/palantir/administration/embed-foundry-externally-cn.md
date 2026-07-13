Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#configure-the-content-security-policy-for-embedding)配置 Content Security Policy 以支持嵌入

本节介绍如何在组织自己的网站上嵌入 Foundry 资源（如 [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) 模块），以及反向操作。

配置需要编辑 Foundry 环境的 [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) 中的 Content Security Policy 配置。注意，此部分仅对 Control Panel 中被指定为 organization administrators 或 data governance officers 的用户可用。

![Image 5: Content Security Policy 主页面](https://www.palantir.com/docs/resources/foundry/administration/csp-main-page.png)

## [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#using-workflows)使用 workflows

以下部分介绍如何使用 workflows 配置 Content Security Policy (CSP) 以支持嵌入。如果你需要进行其他更改，也可以使用手动配置标签页直接配置 CSP。更多信息请参阅[手动配置](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#manual-configuration)文档。

### [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#embed-a-foundry-resource-externally)将 Foundry 资源嵌入外部

你的网站用户将能够看到你嵌入的 Foundry 资源的 URL。不要将 Foundry 嵌入到你不希望了解你的 Foundry 环境的用户访问的网站中。

要允许 Foundry 嵌入外部资源，在 workflows 标签页中选择 **Embed Foundry into an external site** workflow。按照提供的说明自动配置你的 CSP。

![Image 6: Content Security Policy workflow：外部嵌入 Foundry 资源](https://www.palantir.com/docs/resources/foundry/administration/csp-workflow-embed-into-external.png)

#### [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#authentication)认证

当 Foundry 资源成功嵌入组织网站后，用户必须同时登录组织网站和 Foundry。出于安全原因，登录流程不能在 iframe 中显示；用户必须在另一个标签页或窗口中登录 Foundry。

你可以为组织网站配置自动化，自动在新标签页或弹出窗口中打开 URL `https://{my-foundry-url}/workspace/auth-redirect` 并启动登录流程。登录完成后，标签页或窗口将自动关闭。

Foundry 的[核心安全原则](https://www.palantir.com/docs/foundry/security/overview/)将继续适用于嵌入的资源。这意味着在 Foundry 中配置的用户权限将决定他们对组织网站上嵌入的 Foundry 资源的访问权限。

### [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#embed-external-resources-in-foundry)在 Foundry 中嵌入外部资源

你也可以将外部资源嵌入 Foundry 应用。为此，在 workflows 标签页中选择 **Embed an external site into Foundry**。按照提供的说明自动配置你的 CSP。嵌入的外部资源还必须通过设置适当的 [`frame-ancestors` 指令用于 `Content-Security-Policy` 头 ↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) 来允许自身被嵌入 Foundry。

![Image 7: Content Security Policy workflow：在 Foundry 中嵌入外部资源](https://www.palantir.com/docs/resources/foundry/administration/csp-workflow-embed-into-foundry.png)

## [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#manual-configuration)手动配置

如果你的用例不属于现有 workflows，你可以手动配置 Content Security Policy 设置。导航到 Foundry 环境中 Control Panel 的 **Content Security Policy** 部分，选择手动配置标签页。

![Image 8: Content Security Policy 手动配置](https://www.palantir.com/docs/resources/foundry/administration/csp-manual-configuration-page.png)

[← 上一篇 Enrollment settings / Configure support teams](https://www.palantir.com/docs/foundry/administration/configure-support-teams/)

[下一篇 Configure application access →](https://www.palantir.com/docs/foundry/administration/configure-application-access/)
