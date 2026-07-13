Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/webhooks-overview/

Published Time: Thu, 09 Jul 2026 17:47:54 GMT

# [](https://www.palantir.com/docs/foundry/data-connection/webhooks-overview/#webhooks)Webhooks

You can use Data Connection to configure **webhooks** to connect Foundry to systems and workflows outside of Foundry.

This section contains information on _outbound_ webhooks (Foundry making requests to another system). If you need to receive _inbound_ webhooks (another system sending requests to Foundry), consider using [listeners](https://www.palantir.com/docs/foundry/data-connection/listeners-overview/) instead.

Each webhook provides a way to make a request to an external system outside of Foundry. For example, you could create a webhook that performs an HTTP request to an external server when a user selects a button in a Foundry application, connecting that application to existing workflows and source systems.

Each webhook is associated with a single [source](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#sources) in Data Connection. The source stores the credentials necessary for connecting to the external system. Depending on the type of source the webhook is associated with, certain task types are available for use. For example, when using [REST](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/), you can flexibly configure an HTTP call that should be made to an external service.

Webhooks can be configured flexibly to accept specific inputs and capture outputs from external system requests. Additionally, you can set time, concurrency, and rate limits on webhook executions. For detailed configuration options, see the [webhooks reference](https://www.palantir.com/docs/foundry/data-connection/webhooks-reference/).

Review the following documentation to learn more about webhooks:

*   [Set up a webhook](https://www.palantir.com/docs/foundry/data-connection/webhooks-setup/).
*   Review the [webhooks reference](https://www.palantir.com/docs/foundry/data-connection/webhooks-reference/) to learn more about configuration, limits, and permissions.
*   Review the [actions documentation](https://www.palantir.com/docs/foundry/action-types/webhooks/) to learn about how webhooks can be configured for end-user applications.
*   [Call webhooks from external functions](https://www.palantir.com/docs/foundry/data-connection/external-functions/) for writing custom code to interact with external systems.
*   [Publish a webhook as a function](https://www.palantir.com/docs/foundry/data-connection/webhooks-reference/#webhook-functions) so it can be used in Workshop, Ontology SDK (OSDK), functions, and actions.

[← PREVIOUS Exports / Export tasks [Legacy]](https://www.palantir.com/docs/foundry/data-connection/export-tasks/)

[NEXT Set up a webhook →](https://www.palantir.com/docs/foundry/data-connection/webhooks-setup/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored. Further information is available in our [Cookie Policy](https://www.palantir.com/cookie-statement/)

Accept Cookies Reject All

Do Not Sell or Share My Personal Information

![Image 1: Palantir Logo](https://cdn.cookielaw.org/logos/356f77a2-eb53-4146-ba66-df614f266841/018ec371-84cc-7226-bc6b-40b41ec0280c/1204dd5e-843b-4e03-8e5d-3eaeae33575c/Palantir_Logo_300dpi.png)

## Do Not Sell or Share My Personal Data

Opt-Out Request Honored

## Do Not Sell or Share My Personal Data

*   ### Your Privacy 
*   ### Strictly Necessary Cookies 
*   ### Targeting Cookies 

#### Your Privacy

When you visit our website, we store cookies on your browser to collect information. The information collected might relate to you, your preferences or your device, and is mostly used to make the site work as you expect it to and to provide a more personalized web experience. However, you can choose not to allow certain types of cookies, which may impact your experience of the site and the services we are able to offer. Click on the different category headings to find out more and change our default settings according to your preference. You cannot opt-out of our First Party Strictly Necessary Cookies as they are deployed in order to ensure the proper functioning of our website (such as prompting the cookie banner and remembering your settings, to log into your account, to redirect you when you log out, etc.). For more information about the First and Third Party Cookies used please follow this link. 

[More information](https://www.palantir.com/cookie-statement/)

#### Strictly Necessary Cookies

Always Active

These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.

Cookies Details

#### Targeting Cookies

- [x] Targeting Cookies 

Under US privacy laws, you have the right to opt-out of the sale or sharing of your personal information to third parties. These cookies collect information for analytics and to personalize your experience with targeted ads. You may exercise your right to opt out of the sale or sharing of personal information by using this toggle switch. If you opt out we will not be able to offer you personalized ads and will not hand over your personal information to any third parties. Additionally, you may contact our legal department for further clarification about your rights as a California consumer by using this Exercise My Rights link.If you have enabled privacy controls on your browser (such as a plugin), we have to take that as a valid request to opt-out. Therefore we would not be able to track your activity through the web. This may affect our ability to personalize ads according to your preferences.

*   ##### Performance Cookies

- [x] Switch Label label  
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.

*   ##### Targeting Cookies

- [x] Switch Label label  
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.

Cookies Details

### Cookie List

Consent Leg.Interest

- [x] checkbox label label

- [x] checkbox label label

- [x] checkbox label label

Clear
*   - [x] checkbox label label 

Apply Cancel

Confirm My Choices

Reject All Allow All

