Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/foundry-rules/upgrade-to-use-rule-actions/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/foundry-rules/upgrade-to-use-rule-actions/#upgrade-to-use-rule-actions)Upgrade to use rule Actions

These steps are for legacy versions of Foundry Rules (previously known as Taurus). If you are just starting to deploy Foundry Rules, then the following steps are unnecessary and are already included as part of the [default setup](https://www.palantir.com/docs/foundry/foundry-rules/deploy-foundry-rules/). Unless you've been specifically directed to this section, you likely do not need to follow these steps.

Previously, Foundry Rules only supported dataset [inputs](https://www.palantir.com/docs/foundry/foundry-rules/rule-logic/#inputs) to rules and had no concept of a [rule Action](https://www.palantir.com/docs/foundry/foundry-rules/configure-rule-actions/). While authoring rules on objects is an optional feature, we strongly recommend upgrading to use **rule Actions**, especially if you upgrade to use objects.

To enable objects and rule Actions in Foundry Rules, follow the steps below:

_All screenshots use notional data._

1.   **Upgrade your Foundry Rules transforms library version:** Ensure that `tau-execution:tau-execution-core` is on _at least_ version `0.60.4`, in the Project level `build.gradle` file:

    *   `compile "com.palantir.tau-execution:tau-execution-core:0.60.4"`
    *   If you can't find the `build.gradle` file, then check the **Show hidden files and folders** option in the **Files** sidebar under the gear icon.

2.   **Update the logic version:** Using edit mode in your Foundry Rules Workshop application, navigate to the **Rule Editor widget** and change the **Logic Version** to be "V1". While changing this selector has no destructive effects, it is not possible to change the version back to V0 after changing it to V1. However, there would be no benefit in returning to V0.

![Image 4: Selecting V1 logic version within the workshop app](https://www.palantir.com/docs/resources/foundry/foundry-rules/v1_logic_version_selection.png?width=300)
3.   **Add objects to the Workshop application:** In the same Workshop application, add any object types you wish to make available within Foundry Rules to the **Permitted object types** object set variable. This variable should be a unioned object set of all the object types you wish to expose, as shown below.

    *   If you are switching from a dataset to a corresponding object, then you should keep the dataset available in Foundry Rules until all of the existing rules have been migrated to use the object. However, there is no urgency to switch to using the object immediately, as the transform can continue to function with both declared.

![Image 5: Adding additional input objects to workshop app](https://www.palantir.com/docs/resources/foundry/foundry-rules/add_input_objects_to_workshop_app.png?width=700)
4.   **Add rule Actions:** After creating a suitable Foundry Action in the [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/), add the Action to the Workshop application by clicking **Add Rule actions**.

Learn more about [configuring](https://www.palantir.com/docs/foundry/foundry-rules/configure-rule-actions/) rule Actions.

![Image 6: Configuring the available rule actions](https://www.palantir.com/docs/resources/foundry/foundry-rules/rule_action_configuration.png?width=500)After adding a rule Action to the Workshop configuration, all existing rules will require you to configure a rule Action the next time each of them are edited. However, it is important to note that even without a rule Action configured for each rule, the old transforms pipeline will continue to work. Therefore, there is no downtime associated with migrating, and the migration can be done at a pace that suits the users. 
5.   **Update the transforms pipeline code:** The simplest way to update the transforms pipeline is to update your existing instance of the rules workflow template within the Ontology Manager by adding the missing objects and Actions. Then, deploy the updated transform to use as a reference. After deploying the reference, you can [configure the transforms pipeline](https://www.palantir.com/docs/foundry/foundry-rules/configure-transforms-pipeline/) to map this new code to your existing workflow.

As noted above, for the new transforms code to work, all rules must have a rule Action configured. Therefore, we recommend making the transform changes on a branch and testing those transform changes before merging. 

[← PREVIOUS Configure time series for Foundry Rules](https://www.palantir.com/docs/foundry/foundry-rules/configure-timeseries-foundry-rules/)

[NEXT Troubleshooting reference →](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/)

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

