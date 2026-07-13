Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-workbook/r-filesystem/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-workbook/r-filesystem/#r-filesystem-api)R Filesystem API

## [](https://www.palantir.com/docs/foundry/code-workbook/r-filesystem/#r-transforminput-object)R `TransformInput` object

The interface for low level operations on a Foundry dataset.

**`spark.df()`**

*   Returns a [pyspark.sql.DataFrame ↗](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.html) of the input dataset.

**`data.frame()`**

*   Returns an [R data.frame ↗](https://www.rdocumentation.org/packages/base/versions/3.5.1/topics/data.frame) of the input dataset.

**`fileSystem()`**

*   Returns a _FileSystem_ object for direct _FoundryFS_ access.

## [](https://www.palantir.com/docs/foundry/code-workbook/r-filesystem/#r-transformoutput-object)R `TransformOutput` object

The interface for low level write operations on a Foundry dataset.

**`write.spark.df`(_df_, _partition\_cols=NULL_, _bucket\_cols=NULL_, _bucket\_count=NULL_, _sort\_by=NULL_)**

*   Write the given [DataFrame ↗](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.html) to the output dataset.

**Parameters***   **df** (_[pyspark.sql.DataFrame](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.html)_) – The PySpark dataframe to write.
    *   **partition_cols** (_List[str], optional_) - Column partitioning to use when writing data.
    *   **bucket_cols** (_List[str], optional_) - The columns by which to bucket the data. Must be specified if bucket_count is given.
    *   **bucket_count** (_int, optional_) – The number of buckets. Must be specified if bucket_cols is given.
    *   **sort_by** (_List[str], optional_) - The columns by which to sort the bucketed data.

**`write.data.frame`(_rdf_)**

*   Writes the given [R data.frame ↗](https://www.rdocumentation.org/packages/base/versions/3.5.1/topics/data.frame) to the output dataset.

**`fileSystem()`**

*   Returns a _FileSystem_ object for direct _FoundryFS_ access.

## [](https://www.palantir.com/docs/foundry/code-workbook/r-filesystem/#r-filesystem-object)R `FileSystem` object

**`ls`(_glob=NULL_, _regex='.*'_, _show\_hidden=FALSE_)**

*   Lists all files matching the given pattern (either `glob` or `regex`), with respect to the root directory of the dataset.

**Parameters***   **glob** (_str_, _optional_) – A unix file matching pattern. Also supports globstar.
    *   **regex** (_str_, _optional_) – A regex pattern against which to match filenames.
    *   **show_hidden** (_bool_, _optional_) – Include hidden files, those prefixed with ‘.’ or ‘_’.
**Returns**R array of the FileStatus named tuple (path, size, modified) - The logical path, file size (bytes), modified timestamp (ms since January 1, 1970 UTC)

**`open`(_path_, _open='r'_, _disk\_optimal=FALSE_, _encoding=default_)**

*   Open a FoundryFS file in the given mode.

**Parameters***   **path** (_str_) – The logical path of the file in the dataset. (**Remote path**)
    *   **open** (_str_) - A description of the [mode](https://www.rdocumentation.org/packages/base/versions/3.5.1/topics/connections) in which to open the connection. 
    *   **disk_optimal** (_bool_, _optional_) – Controls how FoundryFileSystem handles file i/o. 
    *   **encoding** (_str_, _optional_) - Defaults to the R language default (UTF-8).
**Returns**An R connection object

**`get_path`(_path_, _open='r'_, _disk\_optimal=FALSE_, _encoding=default_)**

*   For a given FoundryFS (remote) path, returns the local temporary path.

**Parameters***   **path** (_str_) – The logical path of the file in the dataset. (**Remote path**)
    *   **open** (_str_) - A description of the [mode](https://www.rdocumentation.org/packages/base/versions/3.5.1/topics/connections) in which to open the connection. 
    *   **disk_optimal** (_bool_, _optional_) – Controls how FoundryFileSystem handles file i/o. 
    *   **encoding** (_str_, _optional_) - Defaults to the R language default (UTF-8).
**Returns**_str_

**`upload`(_local\_path_, _remote\_path_)**

*   Upload the file from the local to the remote path. Write only.

**Parameters***   **local_path** (_str_) – The local path of the file to upload.
    *   **remote_path** (_str_) - The logical path of the file in the dataset.
**Returns**_None_

## [](https://www.palantir.com/docs/foundry/code-workbook/r-filesystem/#advanced-topic-disk_optimal-setting)Advanced topic: `disk_optimal` setting

In the `FileSystem` methods `open()` and `get_path()`, the `disk_optimal` argument controls how file input and output (i/o) is handled.

By default, `disk_optimal` is set to `FALSE` in both `open()` and `get_path()`. In this mode, files are guaranteed to be downloaded before they are accessed.

If you choose to set `disk_optimal` to `TRUE`, files are downloaded simultaneously while the code executes. The temporary local path must be opened via `fifo()` in order to read correctly. Note that not all libraries support reading this type of file.

You may choose to set `disk_optimal` to `TRUE` when the file you are reading is very large.

For example, let's imagine we have a very large txt file and we only want to read the first 10 lines. Use the below code to print only the first 10 lines, without reading the entire file.

Copied!

```r
1disk_optimal_example<- function(large_txt_file) {
2    fs <- large_txt_file$fileSystem()
3
4    ## Open a connection with fifo()
5    ## The text file is titled large_txt_file.txt
6    conn <- fs$open("large_txt_file.txt", "r", disk_optimal = TRUE)
7
8    A <- readLines(conn, n = 10)
9    print(A)
10    return(NULL)    
11}
```

If you want to use R TransformOutput to write a file and then read it, `disk_optimal` must be set to false.

[← PREVIOUS SparkR reference](https://www.palantir.com/docs/foundry/code-workbook/sparkr-reference/)

[NEXT Available fonts →](https://www.palantir.com/docs/foundry/code-workbook/available-fonts/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

