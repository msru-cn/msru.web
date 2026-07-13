Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/foundry-rules/common-issues/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/#troubleshooting-reference)Troubleshooting reference

This page describes several common issues with Foundry Rules and steps to debug.

## [](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/#error-messages)Error messages

### [](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/#readonlyobjecterror)`ReadonlyObjectError`

Make sure that each object you created has a writeback dataset associated. Review the build writeback datasets step of [authoring and running a rule](https://www.palantir.com/docs/foundry/foundry-rules/author-and-run-a-rule/) for more information.

### [](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/#400-actionsinvalidparametersforapply)400: `Actions:InvalidParametersForApply`

Some required parameters were not provided in the Action request. Verify that the Actions are configured properly.

## [](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/#proposal-diff-not-displayed-correctly-for-custom-property)Proposal diff not displayed correctly for custom property

To get the proposal widget to display diffs correctly, follow these steps:

1.   In the Workshop app, add the `new_<PROPERTY>` property to the **Properties grouped by section** in the Proposal Reviewer widget configuration. It is not necessary to select the "current" value here.

2.   If desired, edit the property name to remove the ”new“ prefix.

![Image 3: Alert Recipient property added to the proposal reviewer configuration sidebar with the 'New' prefix highlighted to indicate it can be removed](https://www.palantir.com/docs/resources/foundry/foundry-rules/custom_property_in_proposal_reviewer.png?width=300)
3.   Add the `foundry-rules.property-diff-for:ID_OF_NEW_PROPERTY` type class to the **current** property of the **proposal object**. Note that type classes are characterized by a _kind_ and a _name_, written out as `kind.name`. In the case of `foundry-rules.property-diff-for:new_<PROPERTY>`, the kind is `foundry-rules` and the name is `property-diff-for:new_<PROPERTY>`.

![Image 4: Example type class name and kind added to a property in ontology app](https://www.palantir.com/docs/resources/foundry/foundry-rules/typeclass_example.png?width=300)

## [](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/#older-errors)Older errors

Prior to July 2022, Foundry Rules (previously known as Taurus) required additional configuration and used slightly different concepts. The following errors are associated with that process. If you deployed Foundry Rules after July 2022 and you encounter one of the issues below, try navigating to the [Workflow Configuration Editor](https://www.palantir.com/docs/foundry/foundry-rules/foundry-rules-workflow-configuration/) to see if there are any errors in the workflow.

### [](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/#taurusmissingontologyinformation)`Taurus:MissingOntologyInformation`

This error indicates that the requested Ontology information, as identified in the error message, either does not exist or the transform does not have permissions to access it. Check the following steps to remediate the error:

1.   Verify that the RID or ID in the message exists in the [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/).
2.   Verify that all object types _and_ relations used in the Foundry Rules Workshop application are imported into the Project using the **Ontology Imports** helper within the **Settings** tab of the Code Repository.
3.   Verify that the RIDs of all object types _and_ relations used in the Foundry Rules Workshop application are listed in the `@AdditionalInputs` section at the top of the transform code. Learn more about [using `@AdditionalInputs`](https://www.palantir.com/docs/foundry/foundry-rules/configure-transforms-pipeline/#using-additionalinputs-to-add-ontology-inputs).
4.   Make sure all the backing datasets for the object types and many-to-many relations used in the Foundry Rules Workshop application are [imported](https://www.palantir.com/docs/foundry/compass/move-and-share-resources/) into the Project using the **Project References** section of the Project view. This includes any objects or relations backed by Restricted Views.

### [](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/#transformsgradlepluginstatictaurusdependencydisallowed)`TransformsGradlePlugin:StaticTaurusDependencyDisallowed`

This error indicates that declaring a static version number dependency on `tau-execution-core` is no longer allowed. To remediate this error, change the declared version to be the version range `[0,1[` instead of the static version number:

1.   First, navigate to the [**Code Repository**](https://www.palantir.com/docs/foundry/code-repositories/overview/) that contains the Foundry Rules transform.
2.   Turn on **Show hidden files and folders**.
3.   Within the Project level `build.gradle` file, change the line `compile "com.palantir.tau-execution:tau-execution-core:0.x.x"` to `compile "com.palantir.tau-execution:tau-execution-core:[0,1["`. 
    *   If there is another line, `compile "com.palantir.tau-grammar:tau-grammar-api-objects:0.x.x"`, then _delete this line_.

4.   Commit the result and the checks should pass.

### [](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/#the-rule-editor-preview-does-not-match-the-output-from-the-foundry-rules-transform)The Rule Editor preview does not match the output from the Foundry Rules transform

1.   Verify that the input datasets of the Foundry Rules transform correspond to the ones used to back your objects in the Rule Editor preview.
2.   Verify that the flag `.shouldMatchContourExecutionBehavior(true)` is set to `true` in the Foundry Rules transform (example below). This flag ensures that the execution of the logic performed by the Foundry Rules transform is the same as in the Rule Editor preview.

Copied!

```java
1    // Configuring the Foundry Rules Rule Runner
2    Args ruleRunnerArgs = new TaurusRuleRunner.Args.Builder()
3            .rules(new Rules.Builder()
4                    .logicColumnName("RuleLogic")
5                    .ruleIdColumnName("RuleId")
6                    .dataset(rulesDataset)
7                    .build())
8            .putSources(SourceReference.objectTypeId("employee"), source)
9            // set to true to ensure the rule execution output matches the rule editor widget's preview
10            .shouldMatchContourExecutionBehavior(true)
11            .context(transformContext)
12            .build();
```

### [](https://www.palantir.com/docs/foundry/foundry-rules/common-issues/#taurusunknownmeasurename)`Taurus:UnknownMeasureName`

This error can occur when a sensor object is either missing or the transform does not have the correct permissions. Check the following to remediate the error:

*   Check that the RID of the link between the root object and the sensor object is imported into the Project using the Ontology Imports helper within the **Settings** tab of the Code Repository.
*   Check that the RID of the link between the root and sensor object is listed in the `@AdditionalInputs` section at the top of the transform code.
*   Check that the backing dataset of the sensor object is listed in the `@AdditionalInputs` section at the top of the transform code.
*   Check that the backing dataset of the sensor object is [imported](https://www.palantir.com/docs/foundry/compass/move-and-share-resources/) into the Project using the **Project References** section of the Project view.

Verify that you have followed all the steps in [the deployment guide](https://www.palantir.com/docs/foundry/foundry-rules/configure-transforms-pipeline/).

[← PREVIOUS Legacy Foundry Rules setup (Taurus) / Upgrade to use rule Actions](https://www.palantir.com/docs/foundry/foundry-rules/upgrade-to-use-rule-actions/)

[NEXT Add Foundry Rules to a Marketplace product →](https://www.palantir.com/docs/foundry/foundry-rules/marketplace/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

