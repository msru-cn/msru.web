Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/evaluate-models/metric-sets-reference/

Markdown Content:
## MetricSets reference [Planned deprecation]

Planned deprecation

Metric sets were built for dataset-backed models using `foundry_ml`, a library which has been formally deprecated since October 31, 2025. For new implementations, we recommend using [experiments](https://www.palantir.com/docs/foundry/model-integration/experiments/) instead. While metric sets will not appear on the model page for a model built with `palantir_models`, it is still possible to write metric sets against a model and view the metrics in [Modeling Objectives](https://www.palantir.com/docs/foundry/evaluate-models/model-evaluation-code/).

A **metric set** serves as a container for named metrics which we define as any summarization of a model's output. Supported metrics include numerical, charts, and images.

In Python, metric sets are implemented via the `MetricSet` class within the `foundry_ml_metrics` package (requires `foundry_ml` within the environment configuration).

All metrics are addable via the `MetricSet.add` method with the following parameters:

*   `name` The string name of the metric
*   `value` The value of the metric you want to add
*   `subset` A `dict<str, str>` describing the subset of data this metric is for
*   `stage` A Foundry ML model stage or stage uuid to tie this to a specific stage, **defaults to the last model stage**

Below is an example of creating an empty metric set to illustrate the concept.

Copied!

```
1import foundry_ml_metrics
2
3def Metrics(Model, validation_hold_out):
4
5    # Initialize the MetricSet with the model and input data
6    metric_set = foundry_ml_metrics.MetricSet(
7        model = Model,
8        input_data=validation_hold_out
9    )
10
11    val_df = validation_hold_out.dataframe()
12
13    # Run the model on the dataset to get the inference results
14    inference_results = Model.transform(val_df)
15
16    # Compute metrics
17    y_true, y_pred = ...
18    acc = ...
19    f1 = ...
20
21    # Add metrics to MetricSet
22    metric_set.add(name='Accuracy', value=acc)
23    metric_set.add(name='F1 Score', value=f1)
24
25    return metric_set
```

On creation, you must pass the `model` and `input_data` parameters to `MetricSet`.

To save a metric set, return it as you would a model. The example above represents the approach for saving from a Code Workbook.

## MetricSets in Code Repositories

We recommend replacing [metric sets](https://www.palantir.com/docs/foundry/evaluate-models/metric-sets-reference/) with [experiments](https://www.palantir.com/docs/foundry/model-integration/experiments/) where possible. This feature is only made available for backcompability purposes for models that were initially built as dataset-backed models and should not be used for new implementations.

While metric sets will not appear on the model page for a model built with `palantir_models`, it is still possible to write metric sets against a model and view the metrics in [Modeling Objectives](https://www.palantir.com/docs/foundry/evaluate-models/model-evaluation-code/).

To do so, author your model in Code Repositories and add the `foundry_ml_metrics` library to your environment. Here is an example of how to use a metric set in conjunction with `palantir_models`:

Copied!

```
1import uuid
2from transforms.api import transform, Input, Output
3from palantir_models.transforms import ModelInput
4
5from foundry_ml_metrics import MetricSet # add foundry_ml_metrics to your environment
6
7@transform(
8    evaluation_data_input=Input("path_to_input"),
9    model_input=ModelInput("path_to_model"),
10    metric_set_output=Output("path_to_output"),
11)
12def compute(training_data_input, model_input, metric_set_output):
13    metric_set = MetricSet(
14        # Pass the "hash" part of the model version identifier, for example, given
15        # ri.models.main.model-version.6c0f17a8-ad73-46a4-b86e-8d0a13327ef2,
16        # only pass 6c0f17a8-ad73-46a4-b86e-8d0a13327ef2.
17        model=uuid.UUID(
18            # The model_version_rid property is only available on the ModelInput class
19            # for versions of palantir_models greater or equal to 0.1602.0.
20            model_input.model_version_rid.replace("ri.models.main.model-version.", "")
21        ),
22        input_data=evaluation_data_input
23    )
24    metric_set.add(name='Accuracy', value=0.8)
25    metric_set.add(name='F1', value=0.95)
26    metric_set.save(metric_set_output)
```

Next, configure the `evaluation_data_input` dataset as an evaluation dataset in Modeling Objectives' evaluation configuration. The metrics will then appear under that dataset in Modeling Objectives' evaluation view.

## Input dataset

The input dataset is an explicit reference to the specific version of data that the model was applied to, which metrics were then computed on. By tracking these manually, you create a record and full provenance of a model's performance. This feature is necessary when evaluating many models against each other in a Modeling objective, to ensure that those models are being evaluated against the same data.

Input datasets must be passed as type **Python transform input** into `MetricSets` in order to get the appropriate metadata. Note: Code Workbook only supports this for imported datasets. Aligned with best practices, we must do the validation in a separate workbook from the test/train split.

![Image 1: change input type](https://www.palantir.com/docs/resources/foundry/evaluate-models/concept-change-input-type.png)

## Metric Types

### Numerical metrics

Numerical metrics are the most basic metric type and are typically an analyst's first insight into model performance. Numerical metrics are simply python `int` or `float` types and are simply added to the metric set.

Copied!

`1metric_set.add(name='My numeric metric', value=1.5)`

### Chart metrics

Charts provide visualizations of model performance beyond simple numerical metrics. `foundry_ml` provides the ability to directly save data to back charts in a variety of formats. Since the data is saved this allows superior model comparison ability, particularly in Modeling objectives.

All supported charts are created by functions in the `foundry_ml_metrics.charts` package.

Consider an example:

Copied!

```
1import foundry_ml_metrics.charts
2
3line_chart = foundry_ml_metrics.charts.line(xs=[0.0, 1.0], ys=[1.0, 0.0])
4bar_chart = foundry_ml_metrics.charts.bar(xs=["category 1", "category 2"], ys=[0.56, 0.41])
5
6metric_set.add(name='My line chart', value=line_chart)
7metric_set.add(name='My bar chart', value=bar_chart)
```

### Image metrics

Python has a plethora of open source plotting libraries capable of saving images. To take advantage of this, `foundry_ml` allows you to provide matplotlib and seaborn compatible image objects as metric values.

Copied!

```
1from matplotlib import pyplot
2pyplot.plot([0, 1], [1, 0])
3matplotlib_plot = pyplot.gcf()
4metric_set.add(name='My image chart', value=matplotlib_plot)
```

## Validation data subsets

Often model performance varies across distinct subsets of a dataset. To aide in analyzing this the `MetricSet.add` method accepts a `subset` parameter, a python dictionary of strings -> strings describing any filters you applied. The semantic names for filters helps users understand their model performance on different slices of data that represent real world problems.

Metrics and subsets will appear in Modeling objectives.

For example, perhaps on classic open source iris data you are computing accuracy of your model on below average and above average petal lengths.

This can be done by:

Copied!

```
1def compute_accuracy(testing_df):
2    # An implementation of accuracy
3    compute_accuracy = ...
4
5    metric_set = foundry_ml_metrics.MetricSet(
6        model = Model,
7        input_data=testing_df
8    )
9
10    # Compute scores on all data
11    predictions = Model.transform(testing_df)
12    # subset = {} indicates overall, the default
13    metric_set.add(name='accuracy', subset={}, value=compute_accuracy(predictions))
14
15    # Filter data
16    predictions_long = predictions.filter('sepal_length > 3')
17    metric_set.add(name='accuracy', subset={'sepal_length': 'long'}, value=compute_accuracy(predictions_long))
18
19    predictions_short = predictions.filter('sepal_length < 3')
20    metric_set.add(name='accuracy', subset={'sepal_length': 'short'}, value=compute_accuracy(predictions_short))
```

An arbitrary number of fields can be provided to the subset dictionary.

## Updating metrics

Metric sets are represented as datasets, and are [computed via Foundry Builds](https://www.palantir.com/docs/foundry/data-integration/builds/). When a model is updated in-place, or a new input data version becomes available, you must re-build the metric set, since it is associated with specific versions of the model and the input dataset.

Importantly, if you update and re-run a model, you'll also need to re-build linked metric sets to prevent stale information since they are associated with specific model (and input dataset) versions. Otherwise, you will not see metrics within the Model Preview.
