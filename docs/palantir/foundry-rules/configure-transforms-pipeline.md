Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/foundry-rules/configure-transforms-pipeline/

Markdown Content:
## Configure transforms pipeline

Prior to July 2022, Foundry Rules (previously known as Taurus) required users to create their own transform to run Foundry Rules. This section is only relevant if you deployed Foundry Rules prior to July 2022.

Once rules have been [written and reviewed in the Workshop application](https://www.palantir.com/docs/foundry/foundry-rules/author-and-run-a-rule/), the encoded logic is applied as part of a transform. This section explains the various components of the transform and how to configure them for your use case. The majority of the transform is configured by default via the default deployment; however, extensions to the workflow may require additional steps.

## Example transform

After [deploying the Foundry Rules transform](https://www.palantir.com/docs/foundry/foundry-rules/deploy-workflow/), the transform will look similar to the example below:

Copied!

```
1public final class FoundryRulesTransformExample {
2    // In addition to replacing the RIDs below, you will also need to import the relevant object types
3    // and relations into the Project using the "Ontology" section of the 'Settings' tab above
4    @AdditionalInputs
5    public static Set<InputSpec> additionalInputs = ImmutableOntologyInputs.builder()
6            .addObjectRids("ri.ontology.main.object-type.4168ed49-00...") // employee
7            // .addLinkRids("...") // add all referenced relations
8            .ontologyRid("ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000")
9            .ontologyBranchRid("ri.ontology.main.branch.00000000-0000-0000-0000-000000000000")
10            .build()
11            .getInputSpecs();
12
13    @Compute
14    public void compute(
15            @Input("ri.foundry.main.dataset.0000...") FoundryInput source_object_backing_dataset,
16            @Input("ri.foundry.main.dataset.0000...") FoundryInput rules_input,
17            @Output("ri.foundry.main.dataset.0000...") FoundryOutput outcome_output,
18            @Output("REPLACE WITH PATH TO WRITE STATUS DATASET TO") FoundryOutput rule_status_output,
19            TransformContext transformContext) {
20
21        Dataset<Row> source = source_object_backing_dataset.asDataFrame().read();
22        Dataset<Row> rulesDataset = rules_input.asDataFrame().read();
23
24        // Configuring the Taurus Rule Runner
25        Args ruleRunnerArgs = new TaurusRuleRunner.Args.Builder()
26                .rules(new Rules.Builder()
27                        .logicColumnName("RuleLogic")
28                        .ruleIdColumnName("RuleId")
29                        .dataset(rulesDataset)
30                        .build())
31                // Put all sources used in Foundry Rules editor Workshop app here (for datasets the name here
32                // must match the dataset name in the Foundry Rules app)
33                .putSources(SourceReference.objectTypeId("employee"), source)
34                // .putSources(SourceReference.dataset(DatasetName.of("name in Foundry Rules app")), dataset)
35                // Required if you use many-many ontology join tables:
36                // .manyToManyJoinTables(ImmutableMap.of(LinkTypeId.of("relation-id"), dataset))
37                // set to true to ensure the rule execution output matches the rule editor widget's preview (this flag is false by default)
38                // .shouldMatchContourExecutionBehavior(true)
39                .context(transformContext)
40                .build();
41
42        // Run the rules using Spark (lazily evaluated)
43        RuleEffects ruleEffects = TaurusRuleRunner.runRules(ruleRunnerArgs);
44
45        // Get the results from all the rules that use the specified actions
46        Dataset<Row> outcomes = ruleEffects.actionReadyMergedDataset(
47            ActionTypeRid.valueOf("ri.actions.main.action-type.b6f052c7-f7b1-4b4f-83ee-f81d9e854114"));
48        outcome_output.getDataFrameWriter(outcomes).write();
49
50        rule_status_output.getDataFrameWriter(ruleEffects.statusDataset()).write();
51    }
52}
```

* * *

## Using `@AdditionalInputs` to add Ontology inputs

Copied!

```
1@AdditionalInputs
2public static Set<InputSpec> additionalInputs = ImmutableOntologyInputs.builder()
3        .addObjectRids("ri.ontology.main.object-type.4168ed49-00...") // employee
4        // .addLinkRids("...") // add all referenced relations
5        .ontologyRid("ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000")
6        .ontologyBranchRid("ri.ontology.main.branch.00000000-0000-0000-0000-000000000000")
7        .build()
8        .getInputSpecs();
```

You can use `@AdditionalInputs` to provide the permissions to access metadata about the object types used in Foundry Rules. Any object types configured for use in the Foundry Rules Workshop application must be added here. The first object type RID will be filled out by default, but any additional objects added as part of the [deploy workflow template](https://www.palantir.com/docs/foundry/foundry-rules/deploy-workflow/) section must be added as additional `.addObjectRids()` entries.

In addition, any _relations_ that will be used in the Workshop application must be added here as a `.addLinkRids()` entry. The RIDs can be obtained from the [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/) using the object type and relation pages, respectively.

After adding these entries, it is also necessary to import the object types and relations into the Project using the **Ontology Imports** helper within the **Settings** tab of the Code Repository.

![Image 1: Ontology imports settings panel with imported object type](https://www.palantir.com/docs/resources/foundry/foundry-rules/ontology_imports.png)

## Input and output datasets

Copied!

```
1@Compute
2public void compute(
3        @Input("ri.foundry.main.dataset.0000...") FoundryInput source_object_backing_dataset,
4        @Input("ri.foundry.main.dataset.0000...") FoundryInput rules_input,
5        @Output("ri.foundry.main.dataset.0000...") FoundryOutput outcome_output,
6        @Output("REPLACE WITH PATH TO WRITE STATUS DATASET TO") FoundryOutput rule_status_output,
```

This section provides the data for all the [inputs](https://www.palantir.com/docs/foundry/foundry-rules/rule-logic/#inputs) used by the Foundry rules in your application. This includes the backing datasets for any objects and many-to-many join tables used in Foundry rules. By default, several of these will be pre-filled.

However, any additional objects or dataset added in while [deploying the workflow template](https://www.palantir.com/docs/foundry/foundry-rules/deploy-workflow/) must be added as new `@Input` entries here. These datasets will be required later as part of [TaurusRuleRunner.Args](https://www.palantir.com/docs/foundry/foundry-rules/configure-transforms-pipeline/#foundry-rules-rule-runner).

Additionally, you must provide a path for the output of `rule_status_output`. This dataset contains details of any rules that did not run successfully and is a useful debugging tool.

## Foundry Rules rule runner

Copied!

```
1// Configuring the Foundry Rules rule runner
2Args ruleRunnerArgs = new TaurusRuleRunner.Args.Builder()
3        .rules(new Rules.Builder()
4                .logicColumnName("RuleLogic")
5                .ruleIdColumnName("RuleId")
6                .dataset(rulesDataset)
7                .build())
8        // Put all sources used in Foundry Rules editor Workshop app here (for datasets the name here must
9        // match the dataset name in the Foundry Rules application)
10        .putSources(SourceReference.objectTypeId("employee"), source)
11        // .putSources(SourceReference.dataset(DatasetName.of("name in Foundry Rules app")), dataset)
12        // Required if you use many-many ontology join tables:
13        // .manyToManyJoinTables(ImmutableMap.of(LinkTypeId.of("relation-id"), dataset))
14        // set to true to ensure the rule execution output matches the rule editor widget's preview (this flag is false by default)
15        // .shouldMatchContourExecutionBehavior(true)
16        .context(transformContext)
17        .build();
```

This section configures the rule runner (`TaurusRuleRunner`) that will ultimately run the Foundry rules provided in the `rulesDataset`. This section is also mostly pre-configured by default, but, as described in [Input and Output Datasets](https://www.palantir.com/docs/foundry/foundry-rules/configure-transforms-pipeline/#input-and-output-datasets), any extra [inputs](https://www.palantir.com/docs/foundry/foundry-rules/rule-logic/#inputs) must be registered with the `TaurusRuleRunner` by adding additional `.putSources()` entries. Additionally, any many-to-many join tables used between objects configured with Foundry rules must be registered here using `.manyToManyJoinTables()` as shown in the example above.

## Rule Action datasets

Copied!

```
1RuleEffects ruleEffects = TaurusRuleRunner.runRules(ruleRunnerArgs);
2
3Dataset<Row> outcomes = ruleEffects.actionReadyMergedDataset(
4    ActionTypeRid.valueOf("ri.actions.main.action-type.b6f052c7-f7b1-4b4f-83ee-f81d9e854114"));
5outcome_output.getDataFrameWriter(outcomes).write();
```

**Rule Actions** act as a common output schema for a collection of Foundry rules. Having run all rules using `.runRules()`, it is possible to get all result rows for a particular rule Action by calling `.actionReadyMergedDataset()` with the **Action type RID** of the required Action. This RID can be found in the Action type view of the [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/).

![Image 2: Ontology App with the Action Type Rid of a particular Action Type](https://www.palantir.com/docs/resources/foundry/foundry-rules/action_type_rid.png)

The dataset returned can be written to an output of the transform as shown in the above example. This dataset will contain one column per Action parameter of the Action, plus a `Foundry Rules_rule_id` column containing the ID of the rule that the row originated from.

Additional **rule Actions** added to the Workshop app can be included here by copying the example, then replacing the Action type RID and adding a new output dataset, as described in the [Input and Output Datasets](https://www.palantir.com/docs/foundry/foundry-rules/configure-transforms-pipeline/#input-and-output-datasets) section.

### Reference implementation

If configured by your Palantir representative, there may be an available reference implementation of the above transform. Search for the `Business Rules with Rules Workflow` folder or navigate to the **Foundry Training and Resources** Project, then to **Reference Examples → Application Development in Workshop → Business Rules with Rules Workflow**.

Here, you will find a template Workflow application and transform pipeline implemented on top of the example aviation Ontology.
