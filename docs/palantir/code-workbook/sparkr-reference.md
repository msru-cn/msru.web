Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-workbook/sparkr-reference/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-workbook/sparkr-reference/#sparkr-reference)SparkR reference

## [](https://www.palantir.com/docs/foundry/code-workbook/sparkr-reference/#introduction-to-sparkr)Introduction to SparkR

Code Workbook allows users to use both Spark R and native R. Spark R provides a distributed data frame implementation that supports operations like selection, filtering, and aggregation on large datasets. While users may be more familiar with native R, it is recommended that users first use SparkR to filter large datasets before using native R.

## [](https://www.palantir.com/docs/foundry/code-workbook/sparkr-reference/#common-sparkr-operations)Common SparkR operations

Read the full [API documentation ↗](https://spark.apache.org/docs/latest/api/R/index.html) for SparkR to see all possible operations. Below, we outline syntax for common operations.

### [](https://www.palantir.com/docs/foundry/code-workbook/sparkr-reference/#filtering)Filtering

Filter experessions can be a SQL-like WHERE clause passed as a string.

Copied!

```r
1df_filtered <- SparkR::filter(df, "numeric_col > 10")
```

You can also use column expressions similar to standard R syntax.

Copied!

```r
1df_filtered <- SparkR::filter(df, df$numeric_col > 10)
```

You can also use `SparkR::where` with similar syntax.

Copied!

```r
1df_filtered <- SparkR::where(df, "numeric_col > 10")
```

### [](https://www.palantir.com/docs/foundry/code-workbook/sparkr-reference/#column-operations)Column operations

Subset columns using `SparkR::select()`.

Copied!

```r
1df_subset <- SparkR::select(df, "column1", "column2", "column3")
```

Rename a column with `SparkR::withColumnRenamed()`.

Copied!

```r
1df <- SparkR::withColumnRenamed(df, "old_column_name", "new_column_name")
```

Add new columns using `SparkR::withColumn()`.

Copied!

```r
1# Add two columns
2df <- SparkR::withColumn(df, 'col1_plus_col2', df$col1 + df$col2)
3# Multiply a column by a constant
4df <- SparkR::withColumn(df, 'col1_times_60', df$col1 * 60)
```

### [](https://www.palantir.com/docs/foundry/code-workbook/sparkr-reference/#aggregations)Aggregations

Use `SparkR::groupBy` and `SparkR::agg` to compute aggregates. Calling `SparkR::groupBy` will create a group by object. Pass the group by object into `SparkR::agg` to get an aggregated dataframe.

Copied!

```r
1df_grouped <- SparkR::groupBy(df, "group_col1", "group_col2")
2df_agg <- SparkR::agg(df_grouped, average_col1=avg(df$col1), max_col=max(df$col1))
```

[← PREVIOUS PySpark reference](https://www.palantir.com/docs/foundry/code-workbook/pyspark-reference/)

[NEXT R Filesystem API →](https://www.palantir.com/docs/foundry/code-workbook/r-filesystem/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

