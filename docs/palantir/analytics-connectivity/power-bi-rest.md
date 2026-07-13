Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/#rest-connector-setup)REST Connector setup

The following page and discusses implementation of the Power BI® connector to access Foundry resources from the Power Query interface. If you are searching for information on our Microsoft Power BI® XMLA connector for data integration, refer to our [data connectivity documentation](https://www.palantir.com/docs/foundry/available-connectors/microsoft-power-bi-xmla/).

You can access Palantir Foundry datasets from Power BI® without needing to install the Palantir Foundry ODBC driver. Compared to the built-in Palantir Foundry connector that is available in Power BI® by default, this connector only supports smaller dataset sizes. It is only intended for use when it is not possible to install the ODBC driver.The Palantir Foundry REST connector only supports **Import** mode for dataset ingestion and not **Direct Query**.

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/#step-1-install-the-connector-in-the-custom-connectors-directory)Step 1: Install the Connector in the Custom Connectors Directory

You can deploy custom connectors that are not natively shipped to ingest data into Power BI®. Locate the **Custom Connectors** folder within the Power BI® installation in your file directory. This directory should have been created as a part of the installation for Power BI®. Download the Palantir Foundry REST Connector and move it into this directory.

Download:

*   [Palantir REST Power BI® Connector ↗](https://www.palantir.com/drivers/artifacts/datasets/powerbi-rest/1.0.0/foundry-rest-1.0.0.mez)

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/#step-2-configure-power-bi-to-use-custom-connectors)Step 2: Configure Power BI® to use Custom Connectors

Change the Power BI® desktop settings to allow unverified extensions by navigating to **Options > Security > Data extensions**. Select the option **(Not Recommended) Allow any extension to load without validation or warning**.

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-rest/#step-3-ingest-data)Step 3: Ingest data

Restart the Power BI® application to allow the configurations to take effect. Custom connectors are loaded on start up and should now be available for use. You can follow the instructions in the [Power BI®: Getting Started Guide](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/) to get started building your first report backed by Foundry data. Note that the connector will be called "Palantir Foundry (REST)" in Power BI® when not using the ODBC connector method.

[← PREVIOUS Setup](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-setup/)

[NEXT Getting started →](https://www.palantir.com/docs/foundry/analytics-connectivity/power-bi-getting-started/)

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

