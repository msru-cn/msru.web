Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-cors/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-cors/#configure-cors-cross-origin-resource-sharing)Configure CORS (cross-origin resource sharing)

CORS (cross-origin resource sharing) is a security feature that enables web pages to access APIs hosted on a different origin. CORS works by allowing specific HTTP headers to be added to the request and response, which permits cross-origin requests to go through. This feature is essential for legitimate cross-origin requests and prevents malicious external websites from accessing sensitive information.

You can configure CORS policies for your Foundry enrollment to enable certain external origins to access your resources, supporting other workflows such as accessing [Foundry public APIs](https://www.palantir.com/docs/foundry/api/general/overview/introduction/) and integrating [third party applications](https://www.palantir.com/docs/foundry/platform-security-third-party/third-party-apps-overview/).

# [](https://www.palantir.com/docs/foundry/administration/configure-cors/#configure-cors-policies)Configure CORS policies

CORS policy configuration in Control Panel is a new feature that relies on proper network infrastructure. If the feature is not yet available in your enrollment, contact your Palantir representative for assistance.

To begin configuring policies, head to the **CORS** tab in Control Panel. This feature is available to users with the Information Security Officer or Enrollment Administrator role. These roles are granted by Enrollment Administrators, [in the **Enrollment permissions** tab of Control Panel](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations-permissions/).

![Image 2: CORS extension](https://www.palantir.com/docs/resources/foundry/administration/cors.png)

As seen above, you can specify the allowed origins for your enrollment's hosts to permit these origins to load resources when making HTTP requests to your hosts.

When adding an origin, note the following rules:

*   Non-localhost origins are required to start with the "https://" protocol followed by a complete domain. However, for localhost, the "http://" protocol is also supported.
*   Ports are allowed only for localhost origins. To specify a port, add a colon ':' at the end of the origin address followed by the port number.
*   You can use an asterisk to serve as a wildcard to represent any subdomain (for example, https://*.palantir.com).

Select **Save** once you have configured the CORS policies for your enrollment's host(s); your new policies should take effect within five minutes.

[← PREVIOUS Configure domains and certificates](https://www.palantir.com/docs/foundry/administration/configure-domains-and-certificates/)

[NEXT Internal dataset export →](https://www.palantir.com/docs/foundry/administration/internal-dataset-export/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

