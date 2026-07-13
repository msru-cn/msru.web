Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/foundry-rules/add-a-custom-property/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/foundry-rules/add-a-custom-property/#add-a-custom-property)Add a custom property

A common customization in Foundry Rules is adding custom properties to your rule and proposal objects. Custom properties can let you track additional metadata beyond the default configuration. To add a custom property, follow these steps:

1.   In the Ontology Manager, add the property (e.g. `severity`) to the rule object.

Object properties must be backed by a column in the input dataset.

In the case of an empty, auto-generated input dataset, edit the schema directly in the **Details** tab by copying and modifying an existing column definition.

For rules coming from an existing pipeline, add the new columns in a transform.

1.   Add corresponding `current_<PROPERTY>` and `new_<PROPERTY>` properties (e.g. `current_severity` and `new_severity`) to the proposal object.
2.   Annotate the `current_<PROPERTY>` proposal object property with the type class `foundry-rules.property-diff-for:new_<PROPERTY>` (e.g. `foundry-rules.property-diff-for:new_severity`).

Type classes are characterized by a _kind_ and a _name_, written out as `kind.name`. In the case of `foundry-rules.property-diff-for:new_<PROPERTY>`, the kind is `foundry-rules` and the name is `property-diff-for:new_<PROPERTY>`.

1.   Edit every action type in the Foundry Rules setup which modifies or creates a rule or proposal object by adding a parameter of the new custom property. Follow the example of another similar property such as _rule\_name_ to see the required additions.

2.   In the Workshop application, add a Workshop variable that takes the custom property of the selected rule. You can do this by defining a new objectProperty variable with the existing `selectedRule` variable as the object set input.

![Image 4: Define a variable](https://www.palantir.com/docs/resources/foundry/foundry-rules/define_variable_selectedrule.png?width=500)
Set this Workshop variable as the default value for the "Create a proposal to edit rule" Action in the Rule Editor's configuration sidebar.

![Image 5: Set Workshop variable as default value](https://www.palantir.com/docs/resources/foundry/foundry-rules/set_default_value.png?width=300)
3.   If the proposal widget is not displaying diffs correctly, follow these steps:

    *   In the Workshop app, add the `new_<PROPERTY>` property to **Properties grouped by section** in the Proposal Reviewer widget configuration. It is not necessary to select the "current" value here.

    *   If desired, edit the property name to remove the ”new“ prefix.

    *   Add the `foundry-rules.property-diff-for:ID_OF_NEW_PROPERTY` type class to the **current** property of the **proposal object**.

![Image 6: Alert Recipient property added to the proposal reviewer configuration sidebar with the 'New' prefix highlighted to indicate it can be removed](https://www.palantir.com/docs/resources/foundry/foundry-rules/custom_property_in_proposal_reviewer.png?width=300)

[← PREVIOUS Enable optional features](https://www.palantir.com/docs/foundry/foundry-rules/enable-optional-features/)

[NEXT Permissions for editing rules →](https://www.palantir.com/docs/foundry/foundry-rules/rule-permissions/)

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

