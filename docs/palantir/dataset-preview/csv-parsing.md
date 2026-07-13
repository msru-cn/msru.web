Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/dataset-preview/csv-parsing/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/dataset-preview/csv-parsing/#csv-parsing)CSV parsing

Foundry supports **CSV datasets**. These are datasets that contain files in the CSV format.

The CSV format can use different delimiters, quote characters, and escape characters. To manage this, you can define parameters that control how CSV files are parsed. These parameters are stored in the schema of a dataset. Foundry will use inference to suggest a sensible set of parameters for a given dataset, but results should be validated and changes made if necessary.

## [](https://www.palantir.com/docs/foundry/dataset-preview/csv-parsing/#parsing-in-foundry)Parsing in Foundry

Foundry CSV datasets will generally have the `TextDataFrameReader` defined as their `dataFrameReaderClass` in the schema. This supports a set of custom parameters that can help deal with messy data effectively. At execution time, this delegates to the [Spark CSV DataFrameReader ↗](https://spark.apache.org/docs/latest/sql-data-sources-csv.html) for the best possible performance and reliability.

## [](https://www.palantir.com/docs/foundry/dataset-preview/csv-parsing/#configuration)Configuration

In Foundry, you can view the schema on any dataset in the [Dataset Preview](https://www.palantir.com/docs/foundry/dataset-preview/overview/) application by navigating to the **Details** tab and selecting **Schema**. For more details on the schema, see the [Dataset](https://www.palantir.com/docs/foundry/data-integration/datasets/) documentation.

CSV schemas can be manipulated in the **Edit Schema** UI, available from [Dataset Preview](https://www.palantir.com/docs/foundry/dataset-preview/overview/) when viewing the preview tab. This will help visualize the options available and how they affect the output dataset. In cases where CSVs are particularly malformed, you may need to manually edit the schema to get the desired output.

### [](https://www.palantir.com/docs/foundry/dataset-preview/csv-parsing/#textdataframereader-options)TextDataFrameReader options

To manually configure the `TextDataFrameReader` options in the schema, you can navigate to the schema page in the **Details** tab of [Dataset Preview](https://www.palantir.com/docs/foundry/dataset-preview/overview/) and select **Edit**. At the bottom of the schema, there should be a section as follows:

Copied!

```json
1  "dataFrameReaderClass": "com.palantir.foundry.spark.input.TextDataFrameReader",
2  "customMetadata": {
3    "textParserParams": {
4      "parser": "CSV_PARSER",
5      "charsetName": "UTF-8",
6      "fieldDelimiter": ",",
7      "recordDelimiter": "\n",
8      "quoteCharacter": "\"",
9      "dateFormat": {},
10      "skipLines": 1,
11      "jaggedRowBehavior": "THROW_EXCEPTION",
12      "parseErrorBehavior": "THROW_EXCEPTION",
13      "addFilePath": false,
14      "addFilePathInsteadOfUri": false,
15      "addImportedAt": false,
16      "initialReadTimeout": "1 hour"
17    }
18  }
19}
```

The following options are available for the `TextDataFrameReader`:

| Property | Purpose | Accepted values | Required? | Parsers supported |
| --- | --- | --- | --- | --- |
| parser | The parser type to use. | CSV_PARSER, MULTILINE_CSV_PARSER, SIMPLE_PARSER, SINGLE_COLUMN_PARSER | Yes | N/A |
| nullValues | The values that should be parsed to null. | A list of strings | Yes | all |
| fieldDelimiter | The delimiter character for splitting a record into multiple fields. | A one-character string | No, default to , (comma) | CSV_PARSER, MULTILINE_CSV_PARSER, SIMPLE_PARSER |
| recordDelimiter | The end of line symbols for splitting a CSV file into multiple records. | A string ends with newline character | No, default to \n (newline) CSV_PARSER, MULTILINE_CSV_PARSER |  |
| quoteCharacter | The quote character for CSV parsing. | A one-character string | No, default to " (doublequote) | CSV_PARSER, MULTILINE_CSV_PARSER |
| dateFormat | Format strings for date parsing in certain columns. | A map that maps column names to JodaTime DateTimeFormat patterns | No, default to empty map | CSV_PARSER, MULTILINE_CSV_PARSER, SIMPLE_PARSER |
| skipLines | The number of lines to skip parsing at the start of each file. | A non-negative number | No, default to 0 | all |
| jaggedRowBehavior | Behavior when there are more or fewer columns than types specified in the header. | THROW_EXCEPTION, DROP_ROW | No, defaults to THROW_EXCEPTION | N/A |
| parseErrorBehavior | Behavior when a value fails to parse into the requested type specified in the header. | THROW_EXCEPTION, REPLACE_WITH_NULL | No, defaults to THROW_EXCEPTION | N/A |
| addFilePath | Each row is augmented by a file path. | Boolean | No, default to false | all |
| addImportedAt | Each row is augmented by the import time. | Boolean | No, default to false | all |
| initialReadTimeout | Limits the time the parser will wait to read the first row. | A human-readable duration | No, default to 1 hour | all |

### [](https://www.palantir.com/docs/foundry/dataset-preview/csv-parsing/#spark-csv-options)Spark CSV options

If you are already familiar with the Spark CSV DataFrameReader, you can configure the `dataFrameReaderClass` to be `DataSourceDataFrameReader` and the `format` to be `csv` in the `customMetadata`.

See the [Spark CSV DataFrameReader documentation ↗](https://spark.apache.org/docs/latest/sql-data-sources-csv.html) for a list of supported options. You can add the configurations as key-value pairs like this:

Copied!

```json
1  "dataFrameReaderClass": "com.palantir.foundry.spark.input.DataSourceDataFrameReader",
2  "customMetadata": {
3    "format": "csv",
4    "options": {
5      "unescapedQuoteHandling": "STOP_AT_DELIMITER",
6      "multiline": true,
7      ...
8    }
9  }
```

Note that the schema options listed above are only applicable to datasets constructed from CSV files.

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/dataset-preview/overview/)

[NEXT FAQ →](https://www.palantir.com/docs/foundry/dataset-preview/dataset-preview-faq/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

