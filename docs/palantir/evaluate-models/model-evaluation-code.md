Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/evaluate-models/model-evaluation-code/

Markdown Content:
## Evaluate a model in code

Metric sets were built for dataset-backed models using `foundry_ml`, a library which has been formally deprecated since October 31, 2025. For new implementations, we recommend using [experiments](https://www.palantir.com/docs/foundry/model-integration/experiments/) instead. Metric sets will not appear on the model page for a model built with `palantir_models`, although they [can be shown in a modeling objective](https://www.palantir.com/docs/foundry/migrate-models/how-to/#migrating-a-model-using-metricsets).

In Foundry, the performance of an individual model can be evaluated in code by creating one or more `metric sets` for that model. This page assumes knowledge of the [MetricSet](https://www.palantir.com/docs/foundry/evaluate-models/metric-sets-reference/) class.

The metrics produced by a metric set are associated with a specific transaction of the evaluation dataset and are available for review in the [Modeling Objectives](https://www.palantir.com/docs/foundry/model-integration/objectives/) application. Note that you'll need to enable these metrics by toggling `Only show metrics produced by evaluation configuration` in the [Modeling Objectives settings page](https://www.palantir.com/docs/foundry/manage-models/modeling-objective-settings/#only-show-metrics-produced-by-evaluation-configuration).

Metrics are associated with a specific transaction of an input dataset; you may need to rerun the code that produces a metric set each time you update the model or input dataset.

![Image 1: Metrics in Model Preview Application](https://www.palantir.com/docs/resources/foundry/evaluate-models/model-preview-metrics.png)

## Evaluate a model in Code Workbook

To evaluate a model in the [Code Workbook](https://www.palantir.com/docs/foundry/code-workbook/overview/) application:

1.   Create a code workbook or open an existing workbook.
2.   Import the `foundry_ml` package into the [environment for your code workbook](https://www.palantir.com/docs/foundry/code-workbook/environment-overview/). The `foundry_ml_metrics` package will be available as part of `foundry_ml`.
3.   Import the model and evaluation dataset into the code workbook.
4.   Create a [transform](https://www.palantir.com/docs/foundry/code-workbook/transforms-overview/) that produces a `MetricSet` object in Python and associate your model and evaluation dataset as inputs of that `MetricSet`. 
    *   Be sure to [save the results as a dataset](https://www.palantir.com/docs/foundry/code-workbook/optional-data-persistence/#choose-whether-to-save-as-a-dataset).
    *   The [input types](https://www.palantir.com/docs/foundry/code-workbook/transforms-overview/#inputs) of the model will need to be an `Object` and the evaluation dataset a `TransformsInput`.

5.   Add the metrics to the `MetricSet` in your transform.
6.   Return the `MetricSet` as the result of the transform.

An example for a regression model named `lr_model` and testing dataset named `testing_data` is below. Note that this code snippet uses a model and testing dataset based on the housing dataset featured in the [Getting Started](https://www.palantir.com/docs/foundry/model-integration/tutorial-intro/) tutorial.

Copied!

```
1def lr_evaluation_testing(lr_model, testing_data_input):
2    from foundry_ml_metrics import MetricSet  # Make sure foundry_ml has been added to your environment
3
4    model = lr_model  # Rename model
5    metric_set = MetricSet(  # Create a MetricSet to add individual metrics to
6        model = lr_model,  # The Foundry ML Model you are evaluating
7        input_data=testing_data_input  # The TransformInput of the dataset you are evaluating performance against
8    )
9
10    testing_data_df = testing_data_input.dataframe().toPandas()  # Get a pandas dataframe from the TransformInput
11
12    y_true_column = 'median_house_value'  # This is the column in the evaluation dataset the model is predicting
13    y_prediction_column = 'prediction'  # This is the column the model produces when it transforms a dataset
14
15    scored_df = get_model_scores(model, testing_data_df)
16
17    # Add metrics on the entire input dataset
18    add_numeric_metrics_to_metric_set(metric_set, scored_df, y_true_column, y_prediction_column)
19    add_residuals_scatter_plot_to_metric_set(metric_set, scored_df, y_true_column, y_prediction_column)
20
21    # Add metrics where the housing_median_age column is greater than 30
22    old_homes_subset = {'median_house_value': 'Old (>30)'}
23    old_houses_scored_df = scored_df[scored_df['housing_median_age'] > 30]
24    add_numeric_metrics_to_metric_set(metric_set, old_houses_scored_df, y_true_column, y_prediction_column, old_homes_subset)
25    add_residuals_scatter_plot_to_metric_set(metric_set, old_houses_scored_df, y_true_column, y_prediction_column, old_homes_subset)
26
27    # Add metrics where the housing_median_age column is less than or equal to 5
28    new_homes_subset = {'median_house_value': 'New (<=5)'}
29    new_houses_scored_df = scored_df[scored_df['housing_median_age'] <= 5]
30    add_numeric_metrics_to_metric_set(metric_set, new_houses_scored_df, y_true_column, y_prediction_column, new_homes_subset)
31    add_residuals_scatter_plot_to_metric_set(metric_set, new_houses_scored_df, y_true_column, y_prediction_column, new_homes_subset)
32
33    return metric_set  # Code Workbooks will save this as a MetricSet in Foundry
34
35
36def get_model_scores(model, df):
37    return model.transform(df)  # Create predictions based on the model
38
39
40def add_numeric_metrics_to_metric_set(
41            metric_set,
42            scored_df,
43            y_true_column,
44            y_prediction_column,
45            subset=None
46        ):
47    import numpy as np
48    from sklearn.metrics import mean_squared_error, r2_score
49
50    y_true = scored_df[y_true_column]
51    y_pred = scored_df[y_prediction_column]
52
53    # Compute metrics
54    mse = mean_squared_error(y_true, y_pred)
55    rmse = np.sqrt(mse)
56    r2 = r2_score(y_true, y_pred)
57
58    metric_set.add(name='rmse', value=rmse, subset=subset)  # rmse is a float
59    metric_set.add(name='r2', value=r2, subset=subset)  # r2 is a float
60
61
62def add_residuals_scatter_plot_to_metric_set(
63            metric_set,
64            scored_df,
65            y_true_column,
66            y_prediction_column,
67            subset=None
68        ):
69    import matplotlib.pyplot as plt
70
71    y_true = scored_df[y_true_column]
72    y_pred = scored_df[y_prediction_column]
73
74    scatter_plot = plt.scatter((y_true - y_pred), y_pred)  # Create a scatter plot
75    figure = plt.gcf()  # Gets the current pyplot figure
76    metric_set.add(name='scatter_plot', value=figure, subset=subset)  # figure is a pyplot image
77    plt.close()  # Close the pyplot figure
```

## Evaluate a model in Code Repositories

To evaluate a model in the [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/) application:

1.   Create a code repository or open an existing repository.
2.   Import `foundry_ml` package into the [environment for your code repository](https://www.palantir.com/docs/foundry/transforms-python/environment-overview/). The `foundry_ml_metrics` package will be available as part of `foundry_ml`.
3.   Create a [transform](https://www.palantir.com/docs/foundry/transforms-python/transforms/) that produces a `MetricSet` object in Python and associate your model and evaluation dataset as inputs of that `MetricSet`. 
    *   Rather than return your MetricSet, save the metric_set with `metric_set.save(metrics_output)`.
    *   The [transform input types](https://www.palantir.com/docs/foundry/api-reference/transforms-python-library/api-transforminput/#transforms.api.TransformInput) of both your model and evaluation dataset will be `TransformInput`.

4.   Add the metrics to the `MetricSet` in your transform.
5.   Return the `MetricSet` as the result of the transform.

An example for a regression model named `lr_model` and testing dataset named `testing_data` is below. Note that this code snippet uses a model and testing dataset based on the housing dataset featured in the [Getting Started](https://www.palantir.com/docs/foundry/model-integration/tutorial-intro/) tutorial.

Copied!

```
1from transforms.api import transform, Input, Output
2
3# Make sure foundry_ml has been added to your run requirements in transforms-python/conda_recipe/meta.yaml
4from foundry_ml import Model
5from foundry_ml_metrics import MetricSet
6
7
8@transform(  # As this uses @transform, the inputs will be TransformInput's
9    # You will need to update the Output Path to the output location you want your metrics saved to
10    metrics_output=Output("/Path/to/metrics_dataset/sklearn_linear_regression_metrics"),
11    # You will need to update the Input Path to the path of your model and evaluation dataset
12    model_input=Input("/Path/to/model/sklearn_linear_regression"),
13    testing_data_input=Input("/Path/to/evaluation_dataset/house_prices_in_america_test")
14)
15def compute(metrics_output, model_input, testing_data_input):
16    model = Model.load(model_input)  # Load the Foundry ML Model from the TransformInput
17    metric_set = MetricSet(  # Create a MetricSet to add individual metrics to
18        model=model,  # The Foundry ML Model you are evaluating
19        input_data=testing_data_input  # The TransformInput of the dataset you are evaluating performance against
20    )
21
22    testing_data_df = testing_data_input.dataframe().toPandas()  # Get a pandas dataframe from the TransformInput
23
24    y_true_column = 'median_house_value'  # This is the column in the evaluation dataset the model is predicting
25    y_prediction_column = 'prediction'  # This is the column the model produces when it transforms a dataset
26
27    scored_df = get_model_scores(model, testing_data_df)
28
29    # Add metrics on the entire input dataset
30    add_numeric_metrics_to_metric_set(metric_set, scored_df, y_true_column, y_prediction_column)
31    add_residuals_scatter_plot_to_metric_set(metric_set, scored_df, y_true_column, y_prediction_column)
32
33    # Add metrics where the housing_median_age column is greater than 30
34    old_homes_subset = {'median_house_value': 'Old (>30)'}
35    old_houses_scored_df = scored_df[scored_df['housing_median_age'] > 30]
36    add_numeric_metrics_to_metric_set(metric_set, old_houses_scored_df, y_true_column, y_prediction_column, old_homes_subset)
37    add_residuals_scatter_plot_to_metric_set(metric_set, old_houses_scored_df, y_true_column, y_prediction_column, old_homes_subset)
38
39    # Add metrics where the housing_median_age column is less than or equal to 5
40    new_homes_subset = {'median_house_value': 'New (<=5)'}
41    new_houses_scored_df = scored_df[scored_df['housing_median_age'] <= 5]
42    add_numeric_metrics_to_metric_set(metric_set, new_houses_scored_df, y_true_column, y_prediction_column, new_homes_subset)
43    add_residuals_scatter_plot_to_metric_set(metric_set, new_houses_scored_df, y_true_column, y_prediction_column, new_homes_subset)
44
45    metric_set.save(metrics_output)  # Save this MetricSet in to the TransformsOutput
46
47
48def get_model_scores(model, df):
49    return model.transform(df)  # Create predictions based on the model
50
51
52def add_numeric_metrics_to_metric_set(
53            metric_set,
54            scored_df,
55            y_true_column,
56            y_prediction_column,
57            subset=None
58        ):
59    import numpy as np
60    from sklearn.metrics import mean_squared_error, r2_score
61
62    y_true = scored_df[y_true_column]
63    y_pred = scored_df[y_prediction_column]
64
65    # Compute metrics
66    mse = mean_squared_error(y_true, y_pred)
67    rmse = np.sqrt(mse)
68    r2 = r2_score(y_true, y_pred)
69
70    metric_set.add(name='rmse', value=rmse, subset=subset)  # rmse is a float
71    metric_set.add(name='r2', value=r2, subset=subset)  # r2 is a float
72
73
74def add_residuals_scatter_plot_to_metric_set(
75            metric_set,
76            scored_df,
77            y_true_column,
78            y_prediction_column,
79            subset=None
80        ):
81    import matplotlib.pyplot as plt
82
83    y_true = scored_df[y_true_column]
84    y_pred = scored_df[y_prediction_column]
85
86    scatter_plot = plt.scatter((y_true - y_pred), y_pred)  # Create a scatter plot
87    figure = plt.gcf()  # Gets the current pyplot figure
88    metric_set.add(name='scatter_plot', value=figure, subset=subset)  # figure is a pyplot image
89    plt.close()  # Close the pyplot figure
```

## Updating metrics

As the above code snippets create transforms, the metric sets are created and [computed via Foundry Builds](https://www.palantir.com/docs/foundry/data-integration/builds/). When a model is updated, or a new input data version becomes available, it is important to rebuild the metric set to update the metrics that are associated with that model.
