Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-repositories/create-transforms/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-repositories/create-transforms/#create-transforms)Create transforms

Transforms can be created in Code Repositories using the file template configuration wizard. This wizard enables you to select a transform type and then bootstrap a minimal example by providing values for the variables required by the transform, such as input or output datasets.

To get started using the wizard, create new Python transforms repository. The wizard will be automatically opened. In existing repositories, the wizard can be opened by selecting **Add** and then **New file from template** in the Files side panel.

![Image 4: The 'New file from template' menu option in the 'Add' menu of Code Repositories](https://www.palantir.com/docs/resources/foundry/code-repositories/create-transforms-instructions.png)

After opening the wizard, you will be prompted to select a template. Each template represents a transform type. Illustrations and descriptions are provided to help contrast the different options and identify the correct choice for your use-case. Available templates include:

*   **Lightweight transforms:** Generally recommended for transforms that operate on datasets of less than 10 million rows.
*   **Spark transforms:** Leverage distributed computing to enable better performance for transforms on datasets of more than 10 million rows.

![Image 5: The template selection page of the wizard, with options for Spark and Lightweight transforms](https://www.palantir.com/docs/resources/foundry/code-repositories/create-transforms-template-page.png)

After choosing a template, select **Next** to open the template configuration page. Here, you can configure your template by supplying the required values and selecting resources from across Foundry. This page displays a live preview of your transform based on the current configuration; modifying any input or output variables will update the preview. Your configuration is automatically validated at this stage, and any errors must be addressed before the transform can be created.

Common validation errors include:

*   **Using resources from different projects:** Input and output resources must be contained within the same project as the repository.
*   **Duplicate parameter names:** All parameter names in your transform must be unique.
*   **Not providing required parameters:** Some templates require at least one input or output variable. Provide a valid variable value to resolve this error.

![Image 6: The configuration page of the wizard, displaying the required input and output variables](https://www.palantir.com/docs/resources/foundry/code-repositories/create-transforms-configuration-page.png)

Once your configuration is valid, you will be able to create your transform by selecting **Generate file**. This will create a new file in your repository with the contents shown in the preview of the configuration page. If the template requires specific backing dependencies or libraries, these will be automatically configured so that your transform runs correctly.

[← PREVIOUS FAQ](https://www.palantir.com/docs/foundry/code-repositories/faq/)

[NEXT Preview transforms →](https://www.palantir.com/docs/foundry/code-repositories/preview-transforms/)

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

