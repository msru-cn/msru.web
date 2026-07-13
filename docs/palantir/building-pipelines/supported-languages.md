Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/supported-languages/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/supported-languages/#supported-languages)Supported languages

Before getting started with your data transformation, it’s important to consider the benefits as well as the limitations of each language. This table includes a summary of the key differences between the supported languages:

| Description | [SQL](https://www.palantir.com/docs/foundry/building-pipelines/supported-languages/#sql) | [Python](https://www.palantir.com/docs/foundry/building-pipelines/supported-languages/#python) | [Java](https://www.palantir.com/docs/foundry/building-pipelines/supported-languages/#java) |
| --- | --- | --- | --- |
| _Non-proprietary language:_ documentation available online | ✓ | ✓ | ✓ |
| _Support for file access:_ read and write files in Foundry datasets—this means your data transformation can operate on unstructured data |  | ✓ | ✓ |
| _Transform Level Logic Versioning (TLLV):_ more info in the [TLLV section](https://www.palantir.com/docs/foundry/transforms-python/transforms/#transform-logic-level-versioning) | ✓ | ✓ |  |
| _Incremental computation:_ more info in the [incremental computation section](https://www.palantir.com/docs/foundry/building-pipelines/incremental-overview/) |  | ✓ | ✓ |
| _Support for removing inherited markings_ | ✓ | ✓ | ✓ |
| _Multiple output datasets allowed per file_ |  | ✓ | ✓ |
| _Support for dataset previews_ | ✓ | ✓ | ✓ |
| _Custom Transforms profiles_ | ✓ | ✓ | ✓ |

## [](https://www.palantir.com/docs/foundry/building-pipelines/supported-languages/#sql)SQL

SQL is a language that has plenty of external documentation available online. Here are some key benefits of writing data transformations in SQL:

*   SQL is the most performant language (including most Spark optimization).
*   Transforms SQL gives you access to a SQL scratchpad that allows you to run sample SQL queries to check your SQL syntax.

[Learn more about SQL Transforms.](https://www.palantir.com/docs/foundry/transforms-sql/overview/)

## [](https://www.palantir.com/docs/foundry/building-pipelines/supported-languages/#python)Python

Python is a language with plenty of external documentation available online. You may want to write data transformations in Python so that you can take advantage of the language-specific capabilities and libraries of Python. The Python API is lower-level than other languages like SQL. Here are some key benefits of using Python:

*   The [`transforms` Python library](https://www.palantir.com/docs/foundry/api-reference/transforms-python-library/api-overview/) is an API that exposes functionalities such as file reads and writes. File-based data transformations can be useful early on in data transformation pipelines when you want to parse and clean data.
*   There is first-class support for using external libraries such as pandas, NumPy, and other machine learning libraries.
*   You get access to the full Spark Python (PySpark) API, which includes additional features of Spark that aren’t supported in other languages.

[Learn more about Python Transforms.](https://www.palantir.com/docs/foundry/transforms-python/overview/)

## [](https://www.palantir.com/docs/foundry/building-pipelines/supported-languages/#java)Java

Java is a language with plenty of external documentation available online. You may want to write data transformations in Java so that you can take advantage of the language-specific capabilities in Java. Java is a lower-level API than other languages like SQL. Here are some key benefits of using Java:

*   The `transforms` Java library is an API that exposes functionalities such as file reads and writes. File-based data transformations can be useful early on in data transformation pipelines when you want to parse and clean data.

[Learn more about Java Transforms.](https://www.palantir.com/docs/foundry/transforms-java/overview/)

[← PREVIOUS Types of pipelines](https://www.palantir.com/docs/foundry/building-pipelines/pipeline-types/)

[NEXT Considerations: Pipeline Builder and Code Repositories →](https://www.palantir.com/docs/foundry/building-pipelines/considerations-pb-cr/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

