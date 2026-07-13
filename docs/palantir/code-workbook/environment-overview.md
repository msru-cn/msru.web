Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-workbook/environment-overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-workbook/environment-overview/#environments)Environments

Each Code Workbook is associated with an environment. An environment includes a set of Conda packages and Spark settings installed on the Spark module backing computation in the Workbook. On opening a Workbook, you may see **Waiting for resources** or **Initializing Environment** as the Workbook obtains a Spark module. You will not be able to use the console or run transforms until a Spark module is acquired.

Each user is assigned one Spark module that is used across workbooks in the same project with the same environment. Spark modules are never shared between users.

### [](https://www.palantir.com/docs/foundry/code-workbook/environment-overview/#select-a-profile)Select a profile

You can configure your environment by clicking on **Environment** and then **Customize Spark environment.** You will see a list of [predefined profiles](https://www.palantir.com/docs/foundry/code-workbook/environment-profiles/). These have been configured by your administrator as useful sets of defaults for particular workflows or user groups.

To use a predefined profile, select it in the left-hand panel, then click **Update Spark environment**.

![Image 3: environment selection](https://www.palantir.com/docs/resources/foundry/code-workbook/environment-overview-profile.png)

### [](https://www.palantir.com/docs/foundry/code-workbook/environment-overview/#modify-a-profile)Modify a profile

If none of the predefined profiles suit your use case, you can add or remove packages to modify a profile by editing the predefined profile in Control Panel or customizing the predefined profile in a workbook. The main difference between these options is the scope of your changes. If you edit a predefined profile in Control Panel, packages installed for all workbooks with that profile will change accordingly. Conversely, if you customize a predefined profile in a workbook, only the packages installed for that particular workbook will change.

To edit a predefined profile in Control Panel, you can [configure the packages for a Code Workbook profile](https://www.palantir.com/docs/foundry/administration/configure-code-workbook-profiles/#conda-environment).

To customize a predefined profile in a workbook, open the desired workbook, click on **Environment**, select **Configure environment**, and click on the **Customize profile** button. In the customization view, you can remove existing packages by clicking the minus sign, or change their requested versions. To add a new package, search for it in the **Packages** sidebar and click on the plus sign. Once it’s added to the profile, you can choose a specific version, choose `AUTOMATIC`, or specify a custom Conda version.

Customized environments will be slower to initialize than predefined profiles.

![Image 4: environemnt customize](https://www.palantir.com/docs/resources/foundry/code-workbook/environment-overview-profile-customize.png)

### [](https://www.palantir.com/docs/foundry/code-workbook/environment-overview/#add-a-profile)Add a profile

To create a new predefined profile for use across workbooks, you can [configure Code Workbook profiles](https://www.palantir.com/docs/foundry/administration/configure-code-workbook-profiles/) in Control Panel.

### [](https://www.palantir.com/docs/foundry/code-workbook/environment-overview/#custom-conda-versions)Custom Conda Versions

A Custom Conda Version can be:

*   A version (such as `3.6`)
*   A comparison operation and a version (such as `>=3.6`) (Accepted comparison operators are `=`, `==`, `>=`, `>`, `<=` and `<`) For more details, see the [Conda package specification ↗](https://docs.conda.io/projects/conda/en/latest/user-guide/concepts/pkg-specs.html#package-match-specifications).

[← PREVIOUS Templates / Suggested templates](https://www.palantir.com/docs/foundry/code-workbook/templates-suggested/)

[NEXT Code Workbook profiles →](https://www.palantir.com/docs/foundry/code-workbook/environment-profiles/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored. Further information is available in our [Cookie Policy](https://www.palantir.com/cookie-statement/)

Accept Cookies Reject All

Do Not Sell or Share My Personal Information

![Image 5: Palantir Logo](https://cdn.cookielaw.org/logos/356f77a2-eb53-4146-ba66-df614f266841/018ec371-84cc-7226-bc6b-40b41ec0280c/1204dd5e-843b-4e03-8e5d-3eaeae33575c/Palantir_Logo_300dpi.png)

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

