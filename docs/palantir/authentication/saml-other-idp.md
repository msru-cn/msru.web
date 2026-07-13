Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/saml-other-idp/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/saml-other-idp/#configure-saml-20-integration-for-other-identity-providers)Configure SAML 2.0 integration for other identity providers

This section contains general steps for configuring the SAML 2.0 integration as part of the broader [end-to-end authentication via SAML 2.0 tutorial](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/).

If you received a Foundry setup link to configure your initial SAML integration, skip to the next step. Otherwise, you can add a new SAML provider by going to the **Authentication** tab in Control Panel and selecting **Manage** in the **SAML** section.

![Image 4: SAML](https://www.palantir.com/docs/resources/foundry/authentication/authentication-saml-azure.png)

The first block in this page contains Foundry’s metadata in different forms: an XML metadata file, individual entity ID, ACS URL, and so on. Go to your identity provider and use this metadata to create a SAML integration. The specific steps to achieve this will differ depending on your identity provider.

![Image 5: SAML integration metadata](https://www.palantir.com/docs/resources/foundry/authentication/authentication-integration-metadata.png)

Retrieve your identity provider’s metadata in an XML file, then upload the XML file to Foundry in the **Identity provider metadata** block.

![Image 6: Identity provider metadata](https://www.palantir.com/docs/resources/foundry/authentication/authentication-idp-metadata.png)

Add email domains associated with this SAML 2.0 integration under **Email domains**.

Then, fill in the **Attribute mapping** block. This block determines which attributes from your identity provider will be used for the user attributes in Foundry: **Username**, **Email**, **First Name**, and so on. You can also configure Foundry to create groups based on identity provider attributes. You may need to additionally configure your provider to include group attributes in the SAML response. You can find this information from your identity provider.

If you’re unsure, insert `dummy` as a temporary value to later correct when you reach the testing stage.

Finish by saving your SAML 2.0 integration and [move on to multi-factor authentication](https://www.palantir.com/docs/foundry/authentication/multi-factor-auth/).

[← PREVIOUS Okta](https://www.palantir.com/docs/foundry/authentication/saml-okta/)

[NEXT SAML provider updates in Control Panel →](https://www.palantir.com/docs/foundry/authentication/saml-provider-update/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored. Further information is available in our [Cookie Policy](https://www.palantir.com/cookie-statement/)

Accept Cookies Reject All

Do Not Sell or Share My Personal Information

![Image 7: Palantir Logo](https://cdn.cookielaw.org/logos/356f77a2-eb53-4146-ba66-df614f266841/018ec371-84cc-7226-bc6b-40b41ec0280c/1204dd5e-843b-4e03-8e5d-3eaeae33575c/Palantir_Logo_300dpi.png)

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

