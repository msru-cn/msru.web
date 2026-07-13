Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-validation-rules/

Markdown Content:
## Validation rules

Constraints are an inherent part of any scheduling workflow. From simple time restrictions to frequently changing rule matrices, rules can range in complexity. Validation rules allow you to codify these constraints, enabling end users to build and modify schedules with an understanding of the limitations and restrictions that define your organization’s operations.

Each validation rule is backed by a TypeScript function that evaluates whether the current state of a schedule object meets a certain condition as defined in the function logic.

Users are presented with the results of validation rules on the front-end of the Scheduling Gantt Chart widget in Workshop. Upon initial load, all rules are evaluated based on the current state of the Ontology. With each modification to the schedule, the rules are re-evaluated. This process empowers users with the knowledge of how their decisions comply with specific constraints and restrictions.

Below is an example of scheduling constraints within a Scheduling Gantt Chart widget. In the first image, the rule **No Operator Overlaps** is applied, as indicated with the toggle. This option ensures that only results abiding by this rule will be presented. The following image demonstrates the output. In this example, there is a conflict between the two rows, where the operators, Brad Evans and Ashley Brown, are overlapping.

![Image 1: Example validation rules interface.](https://www.palantir.com/docs/resources/foundry/dynamic-scheduling/constraints-2.png?width=900)![Image 2: Example of non-compliant validation rule.](https://www.palantir.com/docs/resources/foundry/dynamic-scheduling/constraints-1.png?width=600)

## Orchestration

In the Scheduling Gantt Chart widget in Workshop, the validation rules will be called each time a change is performed to validate the schedules.

```
1. Action "saveHandler" called on scenario
2. Validation rules called on updated scenario
3. Action "saveHandler" called on scenario
4. Validation rules called on updated scenario
etc ...
n. The user selects "Submit changes", and all Actions that have been applied to the scenario are applied to the Ontology
```

![Image 3: Example of compliant validation rule.](https://www.palantir.com/docs/resources/foundry/dynamic-scheduling/validation-rules-outcome.png?width=300)

## Implement validation rules

Rules are configured directly in the Scheduling Gantt Chart widget, allowing you to apply rules on a per use case basis. To add a rule to your Scheduling Gantt Chart widget:

1.   Navigate to the schedule data layer for the relevant object type.
2.   Scroll down to the **Rules** section and select **Add new item**.
3.   In the **Rule Name** text box, provide a description of the rule that will be shown to end-users in the Scheduling Gantt Chart.
4.   Select a **Constraint Type** from the drop down menu. “HARD” will be represented by a red circle with an exclamation point. “SOFT” will be represented by an orange triangle with an exclamation point.
5.   Select the **Rule Function** from the drop down menu.
6.   Your Function should have a `scheduleObjectPrimaryKeys` input argument. You can leave this argument empty as it will be autofilled by the widget at runtime.

![Image 4: Example of rule configuration panel in Scheduling Gantt Chart widget.](https://www.palantir.com/docs/resources/foundry/dynamic-scheduling/scheduling-rule-config.png?width=300)

### Functions interface

The types below represent the necessary information to write a validation rule, which includes the status of the rule for each object.

Copied!

```
1type IFoORule = (scheduleObjectPrimaryKeys: string[]) => Array<IRuleResult>
2
3/*
4   Rule result is interpreted as follows:
5   true - Rule validated as passing
6   false - Rule validated as not passing
7   undefined - Rule is not relevant to the given schedule object
8*/
9
10interface IRuleResult {
11    result: boolean | undefined;
12    scheduleObjectPrimaryKey: string;
13    details?: Array<IRuleResultDetails>;
14}
15
16/*
17   By default the text on the pop-over card will display the rule name
18   as configured in the rule object
19
20   Optionally, you can explicitly define custom text based on the results
21   of rule evaluation
22
23   Additionally, you can provide a set of related puckIds to point users
24   towards why a rule is passing or failing
25*/
26
27interface IRuleResultDetails {
28    description: string;
29    relatedPuckIds: string[];
30}
```

### Example Functions

The following is a basic example of a Function without the core logic of the validation:

Copied!

```
1import { Function, Integer } from "@foundry/functions-api";
2import { Objects, TaskOrSchedule, ObjectSet} from "@foundry/ontology-api";
3
4// For type definitions, review our public documentation
5
6interface IRuleResultDetails {
7    description: string;
8    relatedPuckIds: string[];
9}
10interface IRuleResult {
11    result: boolean | undefined;
12    scheduleObjectPrimaryKey: string;
13    details?: Array<IRuleResultDetails>;
14}
15type IFoORule = (scheduleObjectPrimaryKeys: string[]) => Array<IRuleResult>
16
17
18export class MyFunctions {
19
20    // NOTE: it is important that the input argument to a constraint function is named EXACTLY `scheduleObjectPrimaryKeys`.
21    // This is how the widget knows to send over the correct set of keys to this Function.
22    @Function()
23    public async evaluateIfTaskOrScheduleIsValid(scheduleObjectPrimaryKeys: string[]): Promise<Array<IRuleResult>> {
24        // Fetch all schedule Ontology Objects
25        const taskOrSchedules = await Objects.search().taskOrSchedule()
26            .filter(taskOrSchedule => taskOrSchedule.primaryKey.exactMatch(...scheduleObjectPrimaryKeys))
27            .allAsync();
28
29        // Iterate through every input key and generate a result entry for it
30        const ruleResults: Array<IRuleResult> = scheduleObjectPrimaryKeys.map(pk => {
31            const currentTaskOrSchedule = taskOrSchedules.find(taskOrSchedule => taskOrSchedule.primaryKey === pk);
32            // Do something with the object and validate something, ...
33
34            // Build the validation result
35            const currentValidationDetails: Array<IRuleResultDetails> = [];
36            currentValidationDetails.push(
37                {
38                    description: "This is the description of the validation that passes or not",
39                    relatedPuckIds: []
40                });
41
42            const currentResult: IRuleResult= {
43                result: true,
44                scheduleObjectPrimaryKey: pk,
45                details: currentValidationDetails,
46            };
47            return currentResult;
48        });
49
50        return ruleResults;
51    }
52}
```

More complex validation rules can be created. For example, rules can check the following:

*   If schedules are in sequence (no gap)
*   If the schedules overlap
*   If the person attributed to a schedule has the matching skills or certifications
