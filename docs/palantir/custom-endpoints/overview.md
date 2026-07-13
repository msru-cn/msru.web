Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-endpoints/overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-endpoints/overview/#custom-endpoints)Custom Endpoints

Beta

The Custom Endpoints application is in the [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development and may not be available on your enrollment. Functionality may change during active development. Contact Palantir Support to request access to Custom Endpoints.

The **Custom Endpoints** application enables developers to configure and deploy user-defined API endpoints with their own URL patterns. Users can also configure request and response shapes and endpoint specifications, while leveraging Foundry's back-end capabilities. Custom endpoints are backed by the ontology through actions and functions.

![Image 2: The Custom Endpoints application displaying deployed endpoints.](https://www.palantir.com/docs/resources/foundry/custom-endpoints/custom-endpoints-overview.png)

The Custom Endpoints application provides managed infrastructure for treating Foundry as a back-end service. Developers can define endpoint metadata describing how HTTP requests map to ontology operations, eliminating the need for external middleware services. This enables organizations to expose Foundry data through APIs that conform to their existing enterprise standards and specifications.

Below is an example of a standard Foundry API call:

Copied!

```http
1POST https://{your enrollment}.palantirfoundry.com/api/v2/ontologies/{ontology}/queries/{queryApiName}/execute
2Body: {"parameters": {"form_id": 62536, "section_id": 5}}
3Response: {"code": 200, "data": {"value": ["Val1", "Val2", "Val3"]}}
```

Below is the same API call, customized to accommodate existing organizational standards and remapped to a `GET` request:

Copied!

```http
1GET https://subdomain.domain.com/myApi/form/{form_id}/section/{section_id}
2Response: {"code": 200, "data": {"section1": "Val1", "section2": "Val2", "section3": "Val3"}}
```

Some examples of custom endpoint use cases include creating a unified API that combines Foundry data with third-party services, or a legacy-compatible endpoint that matches existing enterprise URL patterns and response formats.

[← PREVIOUS Compute modules / Usage and pricing](https://www.palantir.com/docs/foundry/compute-modules/usage/)

[NEXT Core concepts →](https://www.palantir.com/docs/foundry/custom-endpoints/core-concepts/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored. Further information is available in our [Cookie Policy](https://www.palantir.com/cookie-statement/)

Accept Cookies Reject All

Do Not Sell or Share My Personal Information

![Image 3: Palantir Logo](https://cdn.cookielaw.org/logos/356f77a2-eb53-4146-ba66-df614f266841/018ec371-84cc-7226-bc6b-40b41ec0280c/1204dd5e-843b-4e03-8e5d-3eaeae33575c/Palantir_Logo_300dpi.png)

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

