Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-cors/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-cors/#configure-cors-cross-origin-resource-sharing)配置 CORS（跨域资源共享）

CORS（跨域资源共享）是一种安全功能，使网页能够访问不同源上托管的 API。CORS 的工作原理是允许在请求和响应中添加特定的 HTTP 头，从而允许跨域请求通过。此功能对合法的跨域请求至关重要，同时防止恶意外部网站访问敏感信息。

你可以为 Foundry enrollment 配置 CORS 策略，允许某些外部源访问你的资源，支持访问 [Foundry 公共 API](https://www.palantir.com/docs/foundry/api/general/overview/introduction/) 和集成[第三方应用](https://www.palantir.com/docs/foundry/platform-security-third-party/third-party-apps-overview/)等工作流。

# [](https://www.palantir.com/docs/foundry/administration/configure-cors/#configure-cors-policies)配置 CORS 策略

Control Panel 中的 CORS 策略配置是一项新功能，依赖于正确的网络基础设施。如果你的 enrollment 尚未提供此功能，请联系你的 Palantir 代表获取帮助。

要开始配置策略，请前往 Control Panel 中的 **CORS** 标签页。此功能对具有 Information Security Officer 或 Enrollment Administrator 角色的用户可用。这些角色由 Enrollment Administrators 在 [Control Panel 的 **Enrollment permissions** 标签页](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/)中授予。

![Image 2: CORS 扩展](https://www.palantir.com/docs/resources/foundry/administration/cors.png)

如上所示，你可以为 enrollment 的主机指定允许的来源，以便这些来源在向你的主机发起 HTTP 请求时可以加载资源。

添加来源时，注意以下规则：

*   非 localhost 来源必须以 "https://" 协议开头，后跟完整域名。但对于 localhost，也支持 "http://" 协议。
*   仅 localhost 来源允许指定端口。要指定端口，在来源地址末尾添加冒号 ':'，后跟端口号。
*   你可以使用星号作为通配符来表示任何子域（例如 https://*.palantir.com）。

配置完 enrollment 主机的 CORS 策略后，选择 **Save**；新策略应在五分钟内生效。

[← 上一篇 Configure domains and certificates](https://www.palantir.com/docs/foundry/administration/configure-domains-and-certificates/)

[下一篇 Internal dataset export →](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/)
