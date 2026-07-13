Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#configure-the-content-security-policy-for-embedding)Configure the Content Security Policy for embedding

This section reviews how to embed a Foundry resource, such as a [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) module, on your organization’s own website, and vice versa.

The configuration requires editing the Content Security Policy configuration found in [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) for your Foundry environment. Note that this section is only available to those who are designated as organization administrators or data governance officers in Control Panel.

![Image 5: Content Security Policy main page](https://www.palantir.com/docs/resources/foundry/administration/csp-main-page.png)

## [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#using-workflows)Using workflows

The following sections describe how to use workflows to configure your Content Security Policy (CSP) to support embedding. If you need to make other changes, you can also use the manual configuration tab to configure your CSP directly. See the [manual configuration](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#manual-configuration) documentation for more information.

### [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#embed-a-foundry-resource-externally)Embed a Foundry resource externally

Users of your site will be able to see the URL of your embedded Foundry resource. Do not embed Foundry into sites accessed by users who you don't want to know about your Foundry environment.

To allow Foundry to be embedded into external resources, select the **Embed Foundry into an external site** workflow in the workflows tab. Follow the provided instructions to configure your CSP automatically.

![Image 6: Content Security Policy workflow: embedding Foundry resources externally](https://www.palantir.com/docs/resources/foundry/administration/csp-workflow-embed-into-external.png)

#### [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#authentication)Authentication

When the Foundry resource is successfully embedded on your organization’s website, users must be logged in to both your organization’s website and to Foundry. For security reasons, the login flow cannot be shown in an iframe; users must log into Foundry in another tab or window.

You can configure an automation for your organization's website to automatically open the URL `https://{my-foundry-url}/workspace/auth-redirect` in a new tab or pop-up window and initiate the login flow. When login is complete, the tab or window will automatically close.

Foundry’s [core security principles](https://www.palantir.com/docs/foundry/security/overview/) will continue to apply to the embedded resource. This means that a user’s permissions, as configured in Foundry, will dictate their access to the embedded Foundry resource on your organization’s site.

### [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#embed-external-resources-in-foundry)Embed external resources in Foundry

You can also embed external resources into Foundry applications. To do so, select **Embed an external site into Foundry** in the workflows tab. Follow the provided instructions to configure your CSP automatically. The embedded external resource must also allow itself to be embedded in Foundry, by setting the appropriate [`frame-ancestors` directive for the `Content-Security-Policy` header ↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors).

![Image 7: Content Security Policy workflow: embedding external resources in Foundry](https://www.palantir.com/docs/resources/foundry/administration/csp-workflow-embed-into-foundry.png)

## [](https://www.palantir.com/docs/foundry/administration/embed-foundry-externally/#manual-configuration)Manual configuration

You can manually configure your Content Security Policy settings if your use case does not fall into the existing workflows. Navigate to the **Content Security Policy** section of Control Panel in your Foundry environment and select the manual configuration tab.

![Image 8: Content Security Policy manual configuration](https://www.palantir.com/docs/resources/foundry/administration/csp-manual-configuration-page.png)

[← PREVIOUS Enrollment settings / Configure support teams](https://www.palantir.com/docs/foundry/administration/configure-support-teams/)

[NEXT Configure application access →](https://www.palantir.com/docs/foundry/administration/configure-application-access/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

