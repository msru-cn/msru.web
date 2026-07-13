Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-getting-started/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-getting-started/#getting-started)Getting started

This guide will teach you how to authenticate with Foundry via Report Builder, select a dataset, and get started building your first report.

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-getting-started/#add-foundry-as-your-data-source-in-report-builder)Add Foundry as your data source in Report Builder

*   From Report Builder, click into the toolbar in the Report Data pane. Click New, and then click Data Source. The Data Source Properties dialog box opens.
*   In the Name text box, type any convenient name e.g. `FoundrySqlServer`. Click the "Use a connection embedded in my report" option.
*   Click into the "Select connection type" dropdown and select ODBC, so that your window looks as follows:

![Image 3: msrb-new-data-source](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microsoft-report-builder_new-data-source.png)

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-getting-started/#build-your-connection-string)Build your connection string

You'll now need to create your connection string for your Foundry connection by pasting the following Base Connection String into the Connection string text box in Report Builder, and replacing '' and '' as described below:

*   **Base Connection String:**`DSN=FoundrySql;BaseUrl=<URL>;PWD=<Token>`
*   **URL:** Add your Foundry connection URL as the "Base URL". Your Foundry connection URL is the link you normally use to access Foundry. To do so, replace the '' with this path by logging into Foundry, copying the URL, and deleting the `https://` prefix as well as anything after `.com`.
*   **Token:** Follow the instructions on [generating a token](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/) to generate a private authentication token inside Foundry. Once you have the token, you can paste it into the '' section of the Base Connection String.
*   Your Foundry data source should now be connected. You can now try clicking the "Test Connection" button. If you receive an error at this point, ensure you've completed the [installation instructions](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-setup/).

Your credentials should now be saved in Report Builder and will continue to work as long as they are valid. You won't be prompted for a token again until your token validity has expired. At this point you can follow the above instructions again to generate a new token.

Click "OK" and proceed to the next step.

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-getting-started/#connect-to-foundry-and-query-your-dataset)Connect to Foundry and query your dataset

*   Use the Report Data pane on the left hand side again to click New, and then click Add Dataset.
*   You will be prompted enter a name for your dataset. Click the "Use a dataset embedded in my report" option, and then select FoundrySqlServer from the dropdown.
*   To start working with a specific dataset, copy the dataset filepath or RID into the Query text box. You can locate these values in Foundry by navigating to the desired dataset's "About" page, clicking on "see more", and copying either the "RID" value or the "Location". (See [Guides: Identifying a dataset's RID or filepath in Foundry](https://www.palantir.com/docs/foundry/analytics-connectivity/identify-dataset-rid/).)
*   Construct your SQL Query and proceed with building your report as usual.

![Image 4: dataset-query](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/microsoft-report-builder_dataset-query.png)

[← PREVIOUS Setup](https://www.palantir.com/docs/foundry/analytics-connectivity/msft-report-builder-setup/)

[NEXT Excel →](https://www.palantir.com/docs/foundry/analytics-connectivity/excel/)

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

