Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/scim-common-issues/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/scim-common-issues/#common-questions-and-issues)Common questions and issues

**Do organization assignment rules run for users created via SCIM?**

If you have organization assignment rules that use _externally managed groups_ to triage users into an organization, these rules will not be run when SCIM originally provisions a user (either from the initial sync or for a subsequent create request). Users will need to manually log into Foundry, or SCIM will need to send an `updateUser` request, for these rules to run and users to be triaged appropriately. This is because when SCIM creates a user, it does not update group membership immediately, so Foundry is unable to conduct organization assignment based on identity provider groups.

Similarly, when SCIM updates group membership for externally managed groups, organization assignment rules will not execute for those users whose membership was updated. In other words, for organization assignment rules that rely on externally managed group membership to run, users will need to manually log into Foundry or have some other update to the user (for example, username changes) that triggers a SCIM `updateUser` request.

**Are nested groups supported?**

Do not attempt to sync nested groups, as Entra ID does not allow provisioning nested groups via SCIM (see relevant [documentation ↗](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/how-provisioning-works#assignment-based-scoping)). This is to maintain equivalency with claims sent in an interactive login, where group membership is flattened.

**Are audit logs available for SCIM requests?**

Foundry has error logs when requests fail, but the best way to audit successful SCIM events is to look at the provisioning logs in your identity provider.

**Does Foundry support the bearer authentication method for SCIM requests?**

Not by default. The OAuth2 Client Credentials grant adds significant security improvements over bearer authentication, and is the authentication method that is required for SCIM unless in exceptional circumstances. If you need to use bearer authentication, contact Palantir Support.

**I am getting the `SystemForCrossDomainIdentityManagementCredentialValidationUnavailable` error (with error message `An error occurred while sending the request`) in Entra ID when attempting to test the connection. What do I do?**

You may need to set up an Azure Front Door Proxy. Entra's SCIM provisioning agent uses a specific set of egress IPs and routing that sometimes cannot establish a TCP/TLS connection to certain endpoints. Contact Palantir Support for additional information.

**After SCIM provisioning has begun, I receive the error message `Cannot complete login for your user with username [username] and provider user ID [provider user ID] because that username is already being used by the user with user ID [existing user ID] and provider user ID [existing provider user ID].` How do I resolve this?**

This is likely due to a mismatch between the value that is mapped to `externalId` in your SCIM provisioning settings and the value that is mapped to `Provider ID` in Control Panel attribute mapping. These values must send the same value. Updating the value sent as `externalId` in your identity provider and waiting for an additional SCIM sync should resolve the issue.

If you run into any other issues, contact Palantir Support.

[← PREVIOUS Using other identity providers](https://www.palantir.com/docs/foundry/authentication/scim-other-idp/)

[NEXT Multi-factor authentication →](https://www.palantir.com/docs/foundry/authentication/multi-factor-auth/)

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

