Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-lineage/check-permissions/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-lineage/check-permissions/#check-resource-permissions)Check resource permissions

You can use Data Lineage to check users' permissions to view datasets or artifacts using the "Permissions" coloring option. To do that, start by adding nodes to the graph. You can do so using the search helper on the side panel.

![Image 6: Add nodes to the graph](https://www.palantir.com/docs/resources/foundry/data-lineage/data_lineage_permissions_1.gif)

Then expand the graph to view the lineage leading to your resource (read more about [exploring lineage](https://www.palantir.com/docs/foundry/data-lineage/explore-lineage/)).

![Image 7: Expand graph to view lineage](https://www.palantir.com/docs/resources/foundry/data-lineage/data_lineage_permissions_2.gif)

Once you have done this, use the **Node color options** dropdown to select the **Permissions** color scheme.

![Image 8: Select permissions color scheme](https://www.palantir.com/docs/resources/foundry/data-lineage/data_lineage_permissions_3.gif)

Select the user's name from the **View as** dropdown. This will allow you to see the user's permissions to each of the nodes on the graph.

![Image 9: Select user's name from dropdown](https://www.palantir.com/docs/resources/foundry/data-lineage/data_lineage_permissions_4.gif)

There are two permission types you can color by:

*   [Data access in datasets](https://www.palantir.com/docs/foundry/data-lineage/check-permissions/#data-access-in-datasets)
*   [Resource access](https://www.palantir.com/docs/foundry/data-lineage/check-permissions/#resource-access)

![Image 10: Permission types for coloring nodes](https://www.palantir.com/docs/resources/foundry/data-lineage/data_lineage_permissions_5.png)

### [](https://www.palantir.com/docs/foundry/data-lineage/check-permissions/#data-access-in-datasets)Data access in datasets

Use this option to troubleshoot permissions issues. Remember that a user's data access is affected by data lineage (see [Platform Security](https://www.palantir.com/docs/foundry/security/checking-permissions/)). By coloring your nodes based on the user's access to data, you can easily see what the upstream datasets are that may restrict the user's access to data.

Note that this option only works on dataset nodes.

### [](https://www.palantir.com/docs/foundry/data-lineage/check-permissions/#resource-access)Resource access

This will allow you to see the [role](https://www.palantir.com/docs/foundry/security/projects-and-roles/) (such as Editor, Viewer, etc.) that is set for the selected user on the selected resource.

Use this option to view the level of access users have to your artifacts.

Roles do not correspond to data lineage the same way that data access does. For example, user being an "Editor" on a Contour Analysis does not guarantee they have permissions to see the data that the analysis depends on. Make sure your users can access the underlying data when sharing a resource with them.

[← PREVIOUS Understand and manage datasets / Roll back a dataset](https://www.palantir.com/docs/foundry/data-lineage/dataset-rollback/)

[NEXT See the impact of marking changes →](https://www.palantir.com/docs/foundry/data-lineage/see-impact-marking-changes/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored. Further information is available in our [Cookie Policy](https://www.palantir.com/cookie-statement/)

Accept Cookies Reject All

Do Not Sell or Share My Personal Information

![Image 11: Palantir Logo](https://cdn.cookielaw.org/logos/356f77a2-eb53-4146-ba66-df614f266841/018ec371-84cc-7226-bc6b-40b41ec0280c/1204dd5e-843b-4e03-8e5d-3eaeae33575c/Palantir_Logo_300dpi.png)

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

