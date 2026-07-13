Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/evaluate-models/evaluator-custom/

Markdown Content:
## Custom evaluation library

An evaluation library is a published Python package in Foundry that produces a model evaluator. Evaluation libraries are used to measure model performance, model fairness, model robustness, and other metrics in a reusable way across different [modeling objectives](https://www.palantir.com/docs/foundry/model-integration/objectives/).

In addition to Foundry's default model evaluators for [binary classification](https://www.palantir.com/docs/foundry/evaluate-models/evaluator-binary-classification/) and [regression](https://www.palantir.com/docs/foundry/evaluate-models/evaluator-regression/) models, Foundry also allows you to create a _custom_ model evaluator that can be used natively in a modeling objective.

## Custom evaluator inside a modeling objective

A custom evaluator, its configuration options, and produced metrics will be displayed in the Modeling Objectives application with the names and descriptions that are specified in the docstring at the top of the evaluator implementation.

Once the custom evaluator has been published, it will be available in the Modeling Objective application to any users with view access to the published library. This enables you to write reusable logic for calculating standardized metrics across your organization.

![Image 1: Custom evaluator in code](https://www.palantir.com/docs/resources/foundry/evaluate-models/custom_evaluator-code.png)

The custom evaluator is selectable inside the evaluation library configuration of a modeling objective; that library is configurable based on the parameter defined by the evaluator.

![Image 2: Custom evaluator in modeling objective](https://www.palantir.com/docs/resources/foundry/evaluate-models/custom_evaluator-modeling-objective.png)

## Create a custom evaluator

To create a custom evaluator:

1.   [Create](https://www.palantir.com/docs/foundry/evaluate-models/evaluator-custom/#create-a-code-repository) a code repository from the `Model Evaluator Template Library`.
2.   [Implement](https://www.palantir.com/docs/foundry/evaluate-models/evaluator-custom/#implement-a-custom-evaluator) your custom evaluator.
3.   [Add parameters](https://www.palantir.com/docs/foundry/evaluate-models/evaluator-custom/#parameterize-an-evaluator) to your custom evaluator.
4.   Commit and [publish a new tag](https://www.palantir.com/docs/foundry/transforms-python/share-python-libraries/#publish-a-python-library) with your changes.

### Create a code repository

The [Code Repositories application](https://www.palantir.com/docs/foundry/code-repositories/overview/) has many template implementations; here, we'll be using the **Model Evaluator Template Library**. Navigate to a Foundry Project, select **+ New**>**Repository type**>**Model Integration**>**Language template**, select **Model Evaluator Template Library**, and finally select **Initialize repository**.

![Image 3: Initialize new code repository](https://www.palantir.com/docs/resources/foundry/evaluate-models/custom_evaluator-initialize-template.png)

#### Evaluator template structure

The **Model Evaluator Template Library** has an example implementation in the file `src/evaluator/custom_evaluator.py`. Any implementation of the **Evaluator** Python interface will automatically be registered and made available when you [publish a new version of its repository](https://www.palantir.com/docs/foundry/transforms-python/share-python-libraries/#publish-a-python-library) with a new repository version tag.

A repository that contains custom evaluator logic can publish multiple evaluators. Any additional evaluator implementation files will need to be added as a reference to the list of model evaluator modules in the `build.gradle` of the evaluator template.

![Image 4: Additional custom evaluators](https://www.palantir.com/docs/resources/foundry/evaluate-models/custom_evaluator-additional-evaluators.png)

## Implement a custom evaluator

To implement a custom evaluator, you need to create an implementation of the `Evaluator` interface and optionally provide configuration fields for interpretation by the Modeling Objectives application.

In the evaluator template library, add your evaluator to the file `src/evaluator/custom_evaluator.py`.

### Evaluator interface

The interface of an evaluator is defined:

Copied!

```
1class Evaluator():
2
3    def apply_spark(self, df: DataFrame) -> List[ComputedMetricValue]:
4        """
5        Applies the evaluator to compute metrics on a PySpark Dataframe.
6
7        :param df: The PySpark DataFrame to compute metrics on
8        :return: A list of computed metric values
9        """
10
11        pass
```

To use your newly configured custom evaluator in the Modeling Objectives application, you will first need to [publish a new version of its repository](https://www.palantir.com/docs/foundry/transforms-python/share-python-libraries/#publish-a-python-library), providing it with a new repository version tag.

### Evaluator documentation

A custom evaluator and its configuration options and produced metrics will be displayed in the Modeling Objectives application with the names and descriptions that are specified in the docstring at the top of the implementation.

The required values are:

*   `display-name`: The display name of the evaluator
*   `description`: The description of the evaluator

You can optionally add zero or more of the following:

*   `param`: A configuration parameter of your custom evaluator
*   `metric`: A metric produced by your evaluator

### Example evaluator implementation

This is an example evaluator that calculates the row count of the input dataset.

This example evaluator will be displayed in the Modeling Objectives application with:

*   The title `Row Count Evaluator`.
*   The description `This evaluator calculates the row count of the input DataFrame.`
*   The produced metric `Row Count` that has the description `The row count`.
*   Zero configuration parameters.

Copied!

```
1from pyspark.sql import DataFrame
2from pyspark.sql import functions as F
3from foundry_ml_metrics.evaluation import ComputedMetricValue, Evaluator
4
5class CustomEvaluator(Evaluator):
6    """
7        :display-name: Row Count Evaluator
8        :description: This evaluator calculates the row count of the input DataFrame.
9
10        :metric Row Count: The row count
11    """
12
13    def apply_spark(self, df: DataFrame) -> List[ComputedMetricValue]:
14        row_count = df.count()
15
16        return [
17            ComputedMetricValue(
18                metric_name='Row Count',
19                metric_value=row_count
20            )
21        ]
```

### Parameterize an evaluator

An evaluator can be made configurable in the Modeling Objectives application by providing configuration parameters. The configuration parameters will be populated by the Modeling Objectives application with the user-entered value at run time. A user of this evaluator will have the opportunity to configure the values of the parameters when they configure automated evaluation in a modeling objective.

The allowed configuration fields are:

*   `int`: An integer number
*   `float`: A floating point number
*   `bool`: A Boolean value (True or False)
*   `str`: A string value
*   `Field[float]`: A floating point column in the input DataFrame
*   `Field[int]`: An integer column in the input DataFrame
*   `Field[str]`: A string column in the input DataFrame

Parameters can be made optional by wrapping them in `Optional` (from the built-in `typing` package).

For example:

*   An optional `str` would be `Optional[str]`
*   An optional `Field[str]` would be `Optional[Field[str]]`

### Example evaluator with configuration fields

This is an example evaluator that calculates the row count of the input dataset and the row count when the input dataframe has been filtered such that the input column `column` has the value `value`.

This example evaluator will be displayed in the Modeling Objectives application with:

*   The title `Configurable Row Count Evaluator`.
*   The description `This evaluator calculates the row count of the input DataFrame, filtered to the specified value.`
*   A produced metric `Row Count` that has the description `The unfiltered row count`.
*   A produced metric `Filtered Row Count` that has the description `The filtered row count`
*   Two configuration parameters: 
    *   A column in an evaluation dataset that must be an integer with the name `column` and the description `Filtered column`.
    *   An integer value with the name `value` and the description `Filtered value`.

Copied!

```
1from pyspark.sql import DataFrame
2from pyspark.sql import functions as F
3from foundry_ml_metrics.evaluation import ComputedMetricValue, Evaluator, Field
4
5class CustomEvaluator(Evaluator):
6    """
7        :display-name: Configurable Row Count Evaluator
8        :description: This evaluator calculates the row count of the input DataFrame, filtered to the specified value.
9
10        :param column: Filtered column
11        :param value: Filtered value
12
13        :metric Row Count: The unfiltered row count
14        :metric Filtered Row Count: The filtered row count
15    """
16
17    column: Field[int]
18    value: int
19
20    def __init__(self, column: Field[int], value: int):
21        self.column = column
22        self.value = value
23
24    def apply_spark(self, df: DataFrame) -> List[ComputedMetricValue]:
25        column_name = self.column.name
26        column_value = self.value
27
28        row_count = df.count()
29
30        filtered_row_count = df.filter(
31            F.col(column_name) == column_value
32        ).count()
33
34        return [
35            ComputedMetricValue(
36                metric_name='Row Count',
37                metric_value=row_count
38            ),
39            ComputedMetricValue(
40                metric_name='Filtered Row Count',
41                metric_value=filtered_row_count
42            )
43        ]
```

## Reference classes

The below classes are provided as a reference.

### Field

Fields are used as configuration parameters for your evaluator library to tell the Modeling Objective application which properties need to be implemented. A `Field` has the following interface.

Copied!

```
1class Field():
2    name: str
```

### ComputedMetricValue

A `ComputedMetricValue` stores the information about a metric to attach to a Foundry model.

Copied!

```
1class ComputedMetricValue():
2    """
3    Metric computed by one of the evaluators comprising metric name, value, and subset information.
4    """
5    metric_name: str
6    metric_value: MetricValue
7
8    def __init__(self, metric_name, metric_value):
9        self.metric_name = metric_name
10        self.metric_value = metric_value
```

### MetricValue

A `MetricValue` can be any of the following:

*   A numeric value that is one of the types: 
    *   int
    *   np.int8
    *   np.int16
    *   np.int32
    *   np.int64
    *   np.uint8
    *   np.uint16
    *   np.uint32
    *   np.uint64
    *   float
    *   np.float32
    *   np.float64

*   A figure that is one of the types: 
    *   matplotlib.Figure
    *   matplotlib.pyplot.Figure

*   Any class that implements exactly one of the methods: 
    *   `get_figure(self) -> Figure`: Note that many seaborn plots implement this function.
    *   `save(self, path: str)`: Note that many seaborn plots implement this function.
    *   `savefig(self, path: str)`

*   A BarChart
*   A LineChart
