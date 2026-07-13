Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/optimize-jdbc-syncs/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/optimize-jdbc-syncs/#optimize-jdbc-syncs)Optimize JDBC syncs

This guide provides tips to improve the speed and reliability of JDBC syncs.

Warning

If your sync is already working reliably, there is no need to take the actions described below. If you are setting up a new sync or your sync takes too long to complete or does not complete reliably, we recommend following this guide.

There are two primary methods for speeding up JDBC syncs. We recommend starting by making your sync incremental and only moving on to parallelizing the SQL query if the incremental sync is insufficient:

*   [Make your sync incremental](https://www.palantir.com/docs/foundry/data-connection/optimize-jdbc-syncs/#incremental-syncs)
*   [Parallelize the SQL query](https://www.palantir.com/docs/foundry/data-connection/optimize-jdbc-syncs/#parallelize-the-sql-query)

## [](https://www.palantir.com/docs/foundry/data-connection/optimize-jdbc-syncs/#incremental-syncs)Incremental syncs

By default, batch syncs will sync all matching rows from the target table. _Incremental syncs_, by contrast, maintain state about the most recent sync and thus can be used to ingest only _new_ matching rows from the target. This can improve sync performance dramatically for tables with a large number of rows. Incremental syncs work by adding data as an [`APPEND` transaction](https://www.palantir.com/docs/foundry/data-integration/datasets/#transactions) to the synced dataset.

Below is an example configuration for an incremental batch sync:

![Image 2: incremental-jdbc-sync](https://www.palantir.com/docs/resources/foundry/data-connection/incremental-jdbc-sync.png)

Perform the following steps to set up an incremental batch sync:

1.   Navigate to the configuration page for the sync you want to convert, and ensure that the preview is working.

2.   Set the transaction type to `APPEND`. This is necessary to avoid overwriting rows from previous syncs.

3.   Select **Enable** in the **Incremental** box. Ensure that the preview has successfully run on this sync. With a working preview, the **Incremental** box will expand to allow you to configure the initial incremental state for the sync.

4.   Configure the sync's incremental state. This state consists of an **incremental column** and an **initial value**, which can be configured in the user interface. Keep the following important considerations in mind when setting these values:

    *   The **incremental column** must be _strictly increasing_ between syncs. If your rows are _immutable_ (i.e., existing rows cannot be updated in place), any consistently incrementing column (e.g., an auto-incrementing ID, or a timestamp indicating when the row was added) will be sufficient. If your rows are _mutable_ (i.e., your table allows existing rows to be updated, as opposed to only allowing new rows to be inserted), you'll need a column that increases with every mutation of the data (e.g. an `update_time` column).
    *   To avoid ingesting rows more than once, the **initial value** of the incremental column must be greater than that of _all rows_ synced in previous runs. For example, if the most recent `SNAPSHOT` sync brought in rows with values of an integer `id` column ranging up to `1999`, you could set the initial value to `2000`.

When you ingest an updated version of an existing row, the Foundry dataset will still include previous versions of the row (remember, we're using the `APPEND` transaction type). If you want only the _latest_ version of each row, you will need to use another tool in Foundry, such as Transforms, to clean the data. Refer to the guidance on [incremental pipelines](https://www.palantir.com/docs/foundry/building-pipelines/incremental-overview/) to learn more.

1.   Finally, update the query to use the wildcard symbol `?`. Exactly how you include the wildcard in the query depends on your query logic; see below for a simple example, and note the following: 
    *   In the first incremental run, this wildcard will be replaced by the **initial value** we specified in the previous step.
    *   In any subsequent run, the wildcard will be replaced with the _maximum_ synced value of the **incremental column** from the previous run.

As mentioned above, the incremental state interface only works if a preview of the sync has run successfully. This means that if you are creating an incremental sync from scratch or duplicating an existing incremental sync, you will need to run a preview **without the wildcard `?` operator in your query**.

### [](https://www.palantir.com/docs/foundry/data-connection/optimize-jdbc-syncs/#example)Example

Suppose you are ingesting a table called `employees`, with transaction type set to `SNAPSHOT` and the following simple SQL query:

Copied!

```sql
1SELECT
2    *
3FROM
4    employees
```

At time `T1`, the table looks as follows:

| id | name | surname | update_time | insert_time |
| --- | --- | --- | --- | --- |
| `1` | Jane | Smith | `1478862205` | `1478862205` |
| `2` | Erika | Mustermann | `1478862246` | `1478862246` |

And suppose this table is mutable, so that at a later time, `T2`, it looks like this:

| id | name | surname | update_time | insert_time |
| --- | --- | --- | --- | --- |
| `1` | Jane | Doe | `1478862452` | `1478862205` |
| `2` | Erika | Mustermann | `1478862246` | `1478862246` |
| `3` | **Juan** | **Perez** | `1478862438` | `1478862438` |

We want to convert this sync to be incremental, so we update the transaction type to `APPEND`.

What should we use as the incremental column? It's important to note that **neither the `id` nor `insert_time` columns are appropriate to use as the incremental column** because they will miss updates, like the change in the `surname` column of the `Jane` row. Instead, we should use `update_time` as the incremental column.

What we choose for the initial value depends on whether or not we've previously synced rows from this table. Supposing that we ran a `SNAPSHOT` sync at time `T1` and have already synced rows with values of `update_time` as high as `1478862246`; we should use `1478862247` as our initial value to avoid duplicates. If we never synced any rows from this table, we could use `0` (or `01/01/1970` if setting a date) as the initial value.

Finally, we change the SQL query to

Copied!

```sql
1SELECT
2    *
3FROM
4    employees
5WHERE
6    update_time > ?
```

The conversion is now complete. Note that after running the sync incrementally, we will have multiple `Jane` rows in our dataset (one for each update). As mentioned previously, we'll have to handle these duplicates in our downstream logic—in Contour or Transforms, for example.

If you run into issues with incremental JDBC syncs, [this section](https://www.palantir.com/docs/foundry/data-connection/syncs-troubleshooting/#incremental-jdbc-sync-issues) of the troubleshooting guide may be helpful.

## [](https://www.palantir.com/docs/foundry/data-connection/optimize-jdbc-syncs/#parallelize-the-sql-query)Parallelize the SQL query

Warning

Because the parallel feature runs separate queries against the target database, carefully consider the case of live-updating tables being treated differently by slightly differently-timed queries.

The parallel feature allows you to easily split the SQL query into multiple smaller queries that will be executed in parallel by the agent.

In order to achieve this behavior you need to change your SQL statement to this structure:

Copied!

```text
1SELECT 
2    /* FORCED_PARALLELISM_COLUMN({{column}}), FORCED_PARALLELISM_SIZE({{size}}) */
3    column1,
4    column2
5FROM 
6    {{table_name}}
7WHERE
8    {{condition}}
9    /* ALREADY_HAS_WHERE_CLAUSE(TRUE) */
```

The key parts of the query are:

*   `FORCED_PARALLELISM_COLUMN({{column}})`
    *   This specifies the column on which the table will be divided.
    *   It should be a numeric column (or a column expression that yields a numeric column) with a distribution as _even as possible_.

*   `FORCED_PARALLELISM_SIZE({{size}})`
    *   Specifies the degree of parallelism, e.g. `4` would result in five simultaneous queries: four which split up the values for the specified parallelism column, plus a query for NULL values in the parallelism column.

*   `ALREADY_HAS_WHERE_CLAUSE(TRUE)`
    *   This specifies if there is already a `WHERE` clause or if one needs to be generated. If this is `FALSE`, `WHERE column%size = X` will be added to each of the generated queries. If this is `TRUE`, this condition will instead be appended with an `AND`.

### [](https://www.palantir.com/docs/foundry/data-connection/optimize-jdbc-syncs/#example-1)Example

Suppose you are syncing a table called `employees` that contains the following data:

| id | name | surname |
| --- | --- | --- |
| `1` | Jane | Smith |
| `2` | Erika | Mustermann |
| `3` | Juan | Perez |
| `NULL` | Mary | Watts |

The basic query will look like this:

Copied!

```sql
1SELECT 
2    id, name, surname
3FROM
4    employees
```

This will execute a single query in the database and attempt to retrieve all records from the table.

To leverage the parallel mechanism the query can be changed to the following:

Copied!

```sql
1SELECT 
2    /* FORCED_PARALLELISM_COLUMN(id), FORCED_PARALLELISM_SIZE(2) */
3    id, name, surname
4FROM
5    employees
6 /* ALREADY_HAS_WHERE_CLAUSE(FALSE) */
```

This will execute the following three queries in parallel:

Copied!

```sql
1SELECT 
2    id, name, surname
3FROM
4    employees
5WHERE
6    id % 2 = 1
```

Extracting:

| id | name | surname |
| --- | --- | --- |
| `1` | Jane | Smith |
| `3` | Juan | Perez |

**and**

Copied!

```sql
1SELECT 
2    id, name, surname
3FROM
4    employees
5WHERE
6    id % 2 = 0
```

Extracting:

| id | name | surname |
| --- | --- | --- |
| `2` | Erika | Mustermann |

**and**

Copied!

```sql
1SELECT 
2    id, name, surname
3FROM
4    employees
5WHERE
6    id % 2 IS NULL
```

Extracting:

| id | name | surname |
| --- | --- | --- |
| `NULL` | Mary | Watts |

### [](https://www.palantir.com/docs/foundry/data-connection/optimize-jdbc-syncs/#parallelisms-with-a-where-clause-that-contains-an-or-condition)Parallelisms with a WHERE clause that contains an OR condition

When using parallelism with a WHERE clause that contains an OR condition, you should wrap conditions in parentheses to indicate how the conditions should be evaluated. For instance, examine the sync provided below:

Copied!

```sql
1SELECT  /* FORCED_PARALLELISM_COLUMN(col1), FORCED_PARALLELISM_SIZE(32) */
2col1,
3col2
4FROM tbl
5WHERE
6condition1 = TRUE OR condition2 = TRUE
7/* ALREADY_HAS_WHERE_CLAUSE(TRUE) */
```

This example sync will be transformed to the following:

Copied!

```sql
1condition1 = TRUE OR condition2 = TRUE AND col1 % X = 0
```

However, that statement may be logically interpreted as `condition1 = TRUE OR (condition2 = TRUE AND col1 % X = 0)`, rather than the desired `(condition1 = TRUE OR condition2 = TRUE) AND col1 % X = 0`. You can ensure the intended interpretation by wrapping the entire WHERE clause in parentheses. For the example above, this would mean:

Copied!

```sql
1SELECT  /* FORCED_PARALLELISM_COLUMN(col1), FORCED_PARALLELISM_SIZE(32) */
2col1,
3col2
4FROM tbl
5WHERE
6(condition1 = TRUE OR condition2 = TRUE)
7/* ALREADY_HAS_WHERE_CLAUSE(TRUE) */
```

[← PREVIOUS Set up a media set sync](https://www.palantir.com/docs/foundry/data-connection/media-set-sync/)

[NEXT Troubleshooting reference →](https://www.palantir.com/docs/foundry/data-connection/syncs-troubleshooting/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

