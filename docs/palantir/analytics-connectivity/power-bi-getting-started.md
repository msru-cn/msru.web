Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#getting-started)Getting started

The following page discusses implementation of the Power BI® connector to access Foundry resources from the Power Query interface. If you are searching for information on our Microsoft Power BI® XMLA connector for data integration, refer to our [data connectivity documentation](https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/).

This guide will teach you how to authenticate with Foundry via Power BI®, select a dataset, and get started building your first report.

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#select-foundry-as-your-data-source-in-power-bi)Select Foundry as your data source in Power BI®

*   From Power BI®, click on "Get data" in the ribbon and select "More".
*   Search for "Palantir Foundry" in the data sources list, or select it under Online Services.
*   If you encounter an error at this point, ensure you've completed the [installation instructions](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-setup/).

![Image 5: pbi-get-data](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/power-bi_get_data.gif)

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#configure-your-connection-settings)Configure your connection settings

You'll now be prompted for some details about your Foundry connection:

*   **Base URL:** Enter your Foundry connection URL under "Base URL". Your Foundry connection URL is the link you normally use to access Foundry. You should be able to copy-paste this path by right clicking and copying the link address: [Base URL](https://www.palantir.com/docs/foundry/analytics-connectivity/). _(Note if you load this URL in your browser it may redirect to another page. If this happens, simply delete anything after ".com" in the address, and you will have the base URL again.)_
*   **(Optional) Dataset RID & Branch:** If you already know the dataset RID or branch of the dataset you wish to access, you can enter this information here. (See [Guides: Identifying a dataset's RID or filepath in Foundry](https://www.palantir.com/docs/foundry/analytics-connectivity/identify-dataset-rid/).) Otherwise, leave these fields blank. There will be a dataset browser in a subsequent step where you can select your data.
*   **Data Connectivity Mode:** Select whether you would like to use the "Import" or "DirectQuery" mode.

Click "OK" and proceed to the next step.

![Image 6: connection-settings](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/power-bi_connection-settings.png)

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#authenticate-with-foundry)Authenticate with Foundry

There are three options for authenticating with Foundry: **Foundry OAuth**, **Foundry Token**, and **Foundry Client Credentials**. OAuth is the recommended and simplest authentication method for Power BI® Desktop. Client credentials are recommended for administrators to use when configuring authentication on Power BI® Service.

You can select which method to use from the left side of the Power BI® authentication dialog. Instructions for using these authentication options are described below.

#### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#foundry-oauth-authentication-recommended-for-power-bi-desktop)Foundry OAuth authentication (recommended for Power BI® Desktop)

OAuth is the recommended method for authorizing Power BI® Desktop to connect to Foundry. If using OAuth authentication, select **Sign in** from the Power BI® OAuth dialog. This will then open a new window with your Foundry login screen.

If this is your first time using Power BI® with Foundry, you will be prompted to approve Power BI®'s access to your Foundry account. Click to "allow" Power BI®'s request for access, and then sign in to Foundry as normal.

![Image 7: oauth](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/power-bi_oauth.png)

If you receive an error page logging in via OAuth, it is likely your organization has not yet enabled the OAuth login capability for Power BI®. In this case, contact your Foundry administrator to [enable Power BI® as a third-party application](https://www.palantir.com/docs/foundry/platform-security-third-party/manage-3pa/). You can also use the alternative token-based authentication option described below in the meantime.

#### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#foundry-token-authentication)Foundry Token Authentication

If using token-based authentication, follow the instructions on [Generating a Token](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/) to generate a private authentication token inside Foundry. Once you have the token, you can paste it into the Power BI® prompt.

Your credentials should now be saved in Power BI® and will continue to work as long as they are valid. You won't be prompted for a token again until your token validity has expired. At this point you can follow the above instructions again to generate a new token.

#### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#foundry-third-party-application-client-credentials-recommended-for-foundry-administrators-in-power-bi-service)Foundry third-party application client credentials (recommended for Foundry administrators in Power BI® Service)

Third-party application client credentials are the recommended method for Foundry administrators to authorize reports published to Power BI® Service. This type of credential has no expiration.

First, you must configure a third-party application within Foundry. [Follow the instructions](https://www.palantir.com/docs/foundry/platform-security-third-party/register-3pa/) to configure the application. Choose the **confidential client** option and ensure the **client credentials grant** is enabled. Do **not** enable the Ontology SDK.

Then, grant the appropriate permissions to the service user of the third-party application. Data access within Power BI® will reflect the service user's level of access.

Finally, within Power BI®, choose the **Foundry Client Credentials** authentication option and enter the client ID and secret from your third-party application.

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/#connect-to-foundry-and-select-your-dataset)Connect to Foundry and select your dataset

*   Use the navigator on the left hand side to select the dataset(s) you'll need for your report.
*   Once you've made your selection, choose either "Load" or "Transform Data" and proceed with building your report as usual.

![Image 8: dataset](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/power-bi_dataset-selection.png)

_Power BI® and the Power BI® logo are trademarks of the Microsoft group of companies._

[← PREVIOUS REST Connector setup](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/)

[NEXT FAQs →](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-faqs/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored. Further information is available in our [Cookie Policy](https://www.palantir.com/cookie-statement/)

Accept Cookies Reject All

Do Not Sell or Share My Personal Information

![Image 9: Palantir Logo](https://cdn.cookielaw.org/logos/356f77a2-eb53-4146-ba66-df614f266841/018ec371-84cc-7226-bc6b-40b41ec0280c/1204dd5e-843b-4e03-8e5d-3eaeae33575c/Palantir_Logo_300dpi.png)

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

