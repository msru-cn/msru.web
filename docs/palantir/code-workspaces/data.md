Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-workspaces/data/

Markdown Content:
## Interact with data

Jupyter® and RStudio® Code Workspaces allow you to read, analyze, transform, and write back to Foundry datasets, [Iceberg tables](https://www.palantir.com/docs/foundry/iceberg/jupyter/), and [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/). They also allow you to read and analyze [restricted views](https://www.palantir.com/docs/foundry/security/restricted-views/) and [time series properties](https://www.palantir.com/docs/foundry/code-workspaces/ontology/#time-series-properties).

### Security

Code Workspaces respects [Foundry markings](https://www.palantir.com/docs/foundry/security/markings/) applied to datasets, and a workspace will inherit the markings of all datasets loaded into it. This is referred to as the **workspace lineage**. This means that to access a workspace, you must also have the required permissions for all of the datasets and other inputs contained in the workspace. If you lose access to a single input of the workspace, you will lose access to the entire workspace.

### Resource considerations

Jupyter® and RStudio® workspaces are designed for interactive, analytical workflows and application development. They run on a single virtual machine and do not process datasets with a distributed Spark environment. As a result, the data you work with must fit into your machine's resources, which default to a maximum of 8 CPUs and 64 GB of memory. Using [filters](https://www.palantir.com/docs/foundry/code-workspaces/data/#when-to-use-filters-for-tabular-datasets) or [SQL](https://www.palantir.com/docs/foundry/code-workspaces/data/#query-tabular-datasets-with-sql) to reduce the amount of data you need before loading large datasets can help you avoid exceeding these limits. [Filtering dataset files](https://www.palantir.com/docs/foundry/code-workspaces/data/#filter-dataset-files) is another strategy to stay within your workspace's limits.

To develop large-scale data pipelines, use [Python transforms with Spark](https://www.palantir.com/docs/foundry/transforms-python-spark/overview/) or [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/).

### Dataset branching

By default, Code Workspaces will load the data of the dataset from the same branch as the workspace itself, and will otherwise fall back to the `master` branch. For example, a code workspace currently on branch `my-branch` will try to read the `my-branch` version of the dataset, and will fall back to the `master` branch if `my-branch` does not exist on the dataset.

To pin a dataset branch for a specific imported dataset, select the options **•••** icon next to the dataset in the **Data** tab of the left sidebar. Then, select **Pin dataset branch for reads** and choose the desired dataset branch for use within your code workspace.

## Read data

Code Workspaces requires you to select an **alias** for every Foundry dataset or restricted view that you import into a workspace. The alias acts as a reference that allows you to read from a dataset or restricted view and write to a dataset within your code. When registering a dataset in the **Data** tab, Code Workspaces creates a mapping between the chosen dataset alias and the Foundry resource's unique identifier in a hidden file located under the `/home/user/repo/.foundry` folder of the workspace.

Code Workspaces allows you to load tabular datasets, non-tabular datasets, [Iceberg tables](https://www.palantir.com/docs/foundry/iceberg/jupyter/), [virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/), and [restricted views](https://www.palantir.com/docs/foundry/security/restricted-views/). You can add a new data source to your workspace by using the **Add > Read data** button in the **Data** tab.

After selecting a dataset to add to your workspace, you must define an alias for that resource to serve as a unique identifier and reference in your code. Choosing a read strategy for the dataset (such as pandas DataFrame, Polars LazyFrame, or raw file access) generates a code snippet that loads the dataset as the specified input type.

*   You can modify this read strategy and generate a new snippet at any time, even after registering the dataset.
*   By default, code workspaces will suggest a dataset alias with the same name as the dataset itself.

Selecting **Done** will complete the dataset registration process and allow you to use the data in your code with the **Run snippet** or **Copy to clipboard** options.

This page provides examples for [tabular datasets](https://www.palantir.com/docs/foundry/code-workspaces/data/#tabular-datasets), [non-tabular datasets](https://www.palantir.com/docs/foundry/code-workspaces/data/#non-tabular-datasets), and [restricted views](https://www.palantir.com/docs/foundry/code-workspaces/data/#restricted-views).

### Tabular datasets

The following snippets are generated for a `Cats` tabular dataset with a dataset alias `kittens`. Notice that `Cats` is not referenced anywhere in the code snippet; Code Workspaces implicitly registers it under your chosen alias.

In Jupyter®:

For the full list of methods and properties available on the `Dataset` class used in Jupyter® workspaces, see the [`foundry.transforms.Dataset` API reference](https://www.palantir.com/docs/foundry/api-reference/transforms-python-library/api-dataset/).

Note that the `read_table` method shown above supports the following arguments:

*   **`arrow` (recommended):** Converts the dataset to an Apache Arrow table on which efficient filtering can be performed. You can then convert this table to a pandas dataframe using `.to_pandas()`.
*   **`pandas` or `dataframe`:** Converts the dataset to a pandas dataframe.
*   **`polars`:** Converts the dataset to a Polars dataframe. You can then convert it to a pandas dataframe using `.to_pandas()`.
*   **`lazy-polars`:** The lazy variant of a Polar dataframe. [Filters](https://www.palantir.com/docs/foundry/code-workspaces/data/#filter-dataset-files) cannot be executed on lazy polars.
*   **`path`:** Outputs the local path under which the dataset is stored.

In RStudio®:

The syntax above loads the dataset and automatically collects the data into an R dataframe.

If the data exceeds the workspace's memory capacity, you can apply push-down [filters](https://www.palantir.com/docs/foundry/code-workspaces/data/#filter-dataset-files) to only load a subset of rows or columns using the following syntax:

#### Query tabular datasets with SQL

You may query any tabular dataset, [Iceberg table](https://www.palantir.com/docs/foundry/iceberg/jupyter/), or [virtual table](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/)[that supports SQL queries](https://www.palantir.com/docs/foundry/sql-warehousing/sql-console/) using SQL in Python.

The following snippets are generated for a `Ducks` tabular dataset with a dataset alias `ducklings`. Notice that `Ducks` is not referenced anywhere in the code snippet; Code Workspaces implicitly registers it under your chosen alias.

You may only query one dataset per `SELECT` Spark SQL statement using the approaches below. Queries return the results as a [PyArrow table ↗](https://arrow.apache.org/docs/python/generated/pyarrow.Table.html) that you can then convert to another format, such as a pandas DataFrame.

*   Note that the default limit for SQL queries is one million rows. If you need to query more than one million rows at a time, you can parallelize separate queries and combine their results. Ensure that your data can fit within your workspace’s memory.

In Jupyter®:

After installing the `containers-sql` and `foundry-platform-sdk` packages, you may use the `FoundrySdkSqlExecutor` to write Spark SQL:

You may also use a [magic command ↗](https://ipython.readthedocs.io/en/stable/interactive/magics.html) by first running the following at the top of your notebook:

Then, use either the `%sql` magic command to run a single-line query or `%%sql` to run a multi-line query. Using `%%sql -o df` will assign the result of your SQL query to the python object `df` as a PyArrow table:

In RStudio®:

First install `containers-sql`, `foundry-platform-sdk`, `pyarrow`, and `reticulate`. Then use the `reticulate` package with the Python SQL executor described above to query a dataset:

### Non-tabular datasets

The following snippets are generated for a `Dogs` non-tabular dataset with dataset alias `puppies`. Notice that `Dogs` is not referenced anywhere in the code snippet; Code Workspaces implicitly registers it under your chosen alias. Contrary to reading tabular datasets, this approach gives you access to the files from the dataset in a `puppies_files` variable instead of inserting values inside a dataframe.

In Jupyter®:

In RStudio®:

See [Filter dataset files](https://www.palantir.com/docs/foundry/code-workspaces/data/#filter-dataset-files) for details on how to target a certain subset of files to download into your workspace.

### Restricted views

You can query restricted views using the [SQL approach described above](https://www.palantir.com/docs/foundry/code-workspaces/data/#query-tabular-datasets-with-sql) using Python. To do this, import a restricted view into your workspace and query it by its alias as with any other tabular dataset.

Note that importing a restricted view into your code workspace requires enabling [restricted outputs mode](https://www.palantir.com/docs/foundry/code-workspaces/security/#restricted-outputs-mode) to enforce a higher level of data security. With restricted outputs mode enabled, you can perform analysis on data contained in a restricted view but cannot publish outputs from your workspace that use the data.

When adding a restricted view to your workspace for the first time, a prompt will instruct you to install specific Python dependencies. You can then define an alias (as with a dataset) and add the restricted view to your workspace. You must enable restricted outputs mode and restart your workspace to query the restricted view.

### Filter dataset files

Code Workspaces enables you to download the files backing any dataset, whether they are tabular (i.e., they have a schema) or non-tabular. It is possible to select a subset of files to download, either by name, or by applying filtering logic on the file metadata (path, size in bytes, transaction RID, and updated time).

In Jupyter®:

When downloading multiple files, you should use the filter syntax rather than downloading files individually by name to leverage parallel downloads.

In RStudio®:

In both cases, `downloaded_files` will be a map from file name as defined in the current dataset view (which may contain slashes) to the local path where the file was downloaded. Note that this local path may change, so it is recommended to rely on the map keys.

### Filter tabular datasets

Code Workspaces enables you to apply filters to datasets prior to loading them into memory. This reduces the memory consumption of the dataframes imported into the workspace, enabling you to focus on the subset of data relevant for your analysis. Code Workspaces provides the flexibility to work with a selection of columns, rows, or both.

#### When to use filters for tabular datasets

To ensure that you stay within your workspace's [available resources](https://www.palantir.com/docs/foundry/code-workspaces/data/#resource-considerations), we recommend the following:

*   When your uncompressed data fits within your workspace's memory, you can load datasets without filters and apply transformations in-memory for maximum efficiency.

*   When your uncompressed data exceeds your workspace's memory, you can use [column](https://www.palantir.com/docs/foundry/code-workspaces/data/#column-filters) and [row](https://www.palantir.com/docs/foundry/code-workspaces/data/#row-filters) filters to load a subset of the data into memory. These push-down filters are applied before data is loaded into the workspace, reducing the memory footprint of the imported data. The speed of these filter operations depends on the scale and partioning of the data. You can also use [SQL with Python](https://www.palantir.com/docs/foundry/code-workspaces/data/#query-tabular-datasets-with-sql) to query tabular datasets of any size as long as the resulting data fits within your machine's memory limits.

    *   If this approach does not fit your use case, you can also use a [Spark-based application](https://www.palantir.com/docs/foundry/code-workspaces/data/#resource-considerations) to process your data and produce a smaller dataset that you can work with in Code Workspaces. This often speeds up interactive workflows that depend on using the same subset of data frequently or across multiple workspaces, because Parquet files from datasets are downloaded only once while filtering occurs each time data is loaded into the workspace.

*   For more complex data loading requirements, you can download the files backing a dataset using [non-tabular dataset syntax](https://www.palantir.com/docs/foundry/code-workspaces/data/#non-tabular-datasets) and use native `Python` or `R` packages to process the file contents.

#### Row limit

It is possible to only load a limited number of rows from a dataset.

In Jupyter®:

In RStudio®:

#### Column filters

All tabular datasets can be loaded into a workspace with a subset of columns. Consider the following dataset as an example:

| name | weight | color | age | breed |
| --- | --- | --- | --- | --- |
| Bella | 60 | Brown | 4 | Labrador |
| Max | 75 | Black | 7 | German Shepherd |
| Daisy | 30 | White | 2 | Poodle |

You may want to load this dataset only with the `breed` and `age` columns using the syntax below, assuming a `dogs` dataset was correctly registered into the workspace:

In Jupyter®:

In RStudio®:

#### Row filters

Tabular datasets can also be loaded into a workspace with a subset of rows that meet certain conditions.

Recall the `dogs` dataset mentioned earlier:

| name | weight | color | age | breed |
| --- | --- | --- | --- | --- |
| Bella | 60 | Brown | 4 | Labrador |
| Max | 75 | Black | 7 | German Shepherd |
| Daisy | 30 | White | 2 | Poodle |
| Buddy | 65 | Yellow | 3 | Labrador |
| Gizmo | 18 | Brown | 1 | Pug |

##### Row filter syntax in Jupyter®

The syntax below can be used to filter datasets in Jupyter® at the row level.

You may only load brown-colored dogs from the `dogs` dataset using the following syntax:

Notice the use of `.where`, `select`, or `.limit` to pre-filter the dataset before it gets loaded into the workspace. These statements can be chained to apply several conditions at once:

Below, you can find more examples of acceptable row filtering syntax supported in Jupyter® Code Workspaces:

##### Row filter syntax in RStudio®

The syntax below can be used to filter datasets in RStudio® at the row level.

Rstudio filters are implemented through the use of the `dplyr` library and implement the standard methods `filter`, `select`, and `head`. These filters are **pushed down**, which means they are applied before the data gets loaded into the memory of the workspace.

You may load only brown-colored dogs from the `dogs` dataset using the following syntax:

Notice the use of `foundry::filter` to pre-filter the dataset before it gets loaded into the workspace. Technically, the `foundry::` prefix is not required, but we recommend to use it in order to avoid potential conflicts with other similarly named `filter` functions from other packages in your environment. These `filter` statements can be chained to apply several conditions at once using the `%>%` operator from the `dplyr` library. This library should be imported by default in the `.Rprofile` file of your RStudio workspace.

Below, you can find more examples of acceptable row filtering syntax supported in RStudio® Code Workspaces. Column names must be passed to the `foundry::filter` function without wrapping them with quotation marks.

Additionally, you may perform advanced data transformations, such as `group_by`, by temporarily collecting the data as an `Arrow` table:

### Column and row filters together

Column filters and row filters can be used together in order to load in a dataset that has both a subset of its columns and a subset of its rows. Using the `dogs` dataset mentioned earlier:

| name | weight | color | age | breed |
| --- | --- | --- | --- | --- |
| Bella | 60 | Brown | 4 | Labrador |
| Max | 75 | Black | 7 | German Shepherd |
| Daisy | 30 | White | 2 | Poodle |
| Buddy | 65 | Yellow | 3 | Labrador |
| Gizmo | 18 | Brown | 1 | Pug |

The syntax below can be used to get a dataset with the name, breed, and color of brown dogs that exceed a given weight.

In Jupyter®:

In RStudio®:

## Write data

You can interactively write Foundry datasets with Code Workspaces by following the steps below.

1.   Create a target output Dataset by opening the **Data** tab and selecting the **Save to dataset** option, which can be found to the right of **Import Dataset**.
2.   Select a name for the output dataset as well as a location to save the dataset.
3.   Select **Save**.
4.   A new dataset will appear in the **Data** tab. By default, the **Save to dataset** option will be selected, which should be left as such for output datasets.
5.   You will also be prompted to specify a dataset alias, which will become the name of the output dataset within the workspace, similarly to how aliases work when importing data.

*   For tabular output datasets, you will also be prompted to specify the dataframe variable which will populate the dataset.
*   For non-tabular datasets, you need instead to specify a local file or folder path to upload to the dataset.

1.   Once the dataset type, the dataset alias, and the dataframe variable are set, select **Copy and register dataset** to register the dataset in the workspace, which will also save the code snippet to your clipboard.
2.   Paste the code snippet in your workspace, replacing the variable as necessary, and execute the code to write to the output dataset.

### Transaction types

When writing back interactively, each SDK function call will correspond to one transaction, by default:

*   A `SNAPSHOT` transaction will be created when writing back tabular data (`output_dataset_tabular.write_table(df_variable)` in Python or `datasets.write_table(df_variable, "output_dataset_tabular")` in R).
*   An `UPDATE` transaction will be created when writing back files (`output_dataset_non_tabular.upload_directory(path_to_file_variable)` in Python or `datasets.upload_files(path_to_file_variable, "output_dataset_non_tabular")` in R).

Once the script has been registered as a transform, interactive calls will start writing to a branch prefixed by `code-workspace-sandbox/`, while the current branch will be updated when the transform runs. In this case, a single transaction will be created for the full script execution, even if there are multiple SDK function calls:

*   By default, the transaction will be of type `SNAPSHOT`.
*   If incremental settings have been configured, transaction will be of type `APPEND`.

### Example code snippets

Following the instructions above, assume that two datasets named `output_dataset_tabular` and `output_dataset_non_tabular` were created with variables of the same name, and registered in the workspace. Code Workspaces will generate the following code snippets for each dataset based on your chosen variables:

And in R:
