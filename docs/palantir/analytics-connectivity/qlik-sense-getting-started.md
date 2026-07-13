Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-getting-started/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-getting-started/#getting-started)Getting started

This guide will teach you how to authenticate to Foundry within Qlik Sense, and get started loading datasets.

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-getting-started/#connect-to-foundry)Connect to Foundry

*   You will need to have a Foundry access [token](https://www.palantir.com/docs/foundry/platform-security-third-party/user-generated-tokens/) ready to authenticate.
*   You will also need the name of the Foundry DSN created by your server admin
*   Within Qlik Sense, open the data manager, and click the icon to create a new connection
*   Select `OLE DB` as the data source
*   Choose `Microsoft OLE DB Provider for ODBC Drivers` as the provider
*   For the data source, enter `<Foundry_DSN>;PWD=<Token>`, where `<Foundry_DSN>` is the name of the DSN your server admin created, and `<Token>` is your Foundry token For example, you might end up with something like `Foundry;PWD=eyJwbG50ci...`
*   Choose `Specific user name and password`, but leave them blank
*   Pick an appropriate name for the connection. (Qlik may have set the token in the name by default, remove this!)
*   Test the connection to check everything is OK, and then click create to open the table browser.

Qlik Sense currently has a limitation on the maximum password length you can enter into the "password" field, which is shorter than a Foundry token. This is why we set the token in the data source string rather than in the password field.

![Image 4: Qlik Foundry connection](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/qlik_qlik-sense-new-connection.png?width=500)
### [](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-getting-started/#loading-datasets)Loading datasets

After you've created a connection, a table browser will open. You can also open this browser by selecting a previously created connection. From here, you first select the Foundry project containing the dataset(s) you want to load (referred to as a "database" here).

The project tables will then be listed, and you can select the ones you wish to import.

![Image 5: Qlik Foundry dataset preview](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/qlik_qlik-sense-table-preview.png?width=500)
### [](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-getting-started/#writing-sql-queries)Writing SQL queries

If you're familiar with SQL, you can write your own SQL queries from within Qlik Sense. This can be helpful for filtering and aggregating large datasets, so that only the smaller transformed data is imported into Qlik.

To do this, after creating a connection, open the data load editor and create a new script. Then write a SQL query like in the below image. Datasets can be referenced by their path or dataset RID, surrounded by double quotes.

For more documentation on the "LIB CONNECT" syntax, refer to the [Qlik documentation](https://help.qlik.com/en-US/sense/February2021/Subsystems/Hub/Content/Sense_Hub/Scripting/ScriptRegularStatements/CONNECT.htm).

![Image 6: Qlik Foundry query](https://www.palantir.com/docs/resources/foundry/analytics-connectivity/qlik_qlik-sense-sql-query.png?width=500)
To access a specific branch of a dataset, use the following syntax:

Copied!

```sql
1SELECT * FROM "branch"."dataset_path"
```

[← PREVIOUS Server setup](https://www.palantir.com/docs/foundry/analytics-connectivity/qlik-sense-setup/)

[NEXT MicroStrategy →](https://www.palantir.com/docs/foundry/analytics-connectivity/microstrategy/)

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

