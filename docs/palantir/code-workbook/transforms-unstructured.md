Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-workbook/transforms-unstructured/

Markdown Content:
## Access unstructured files

In addition to operating over Foundry datasets that have a defined tabular schema, Code Workbook supports accessing unstructured files in a dataset. This can be useful for analyzing and transforming unstructured data such as images and other types of media, semi-structured formats such as XML or JSON, compressed formats such as GZ or ZIP files, or R data formats like RDA and RDS.

## Unstructured files in Python

### Reading files

You can read files in a Python transform by reading an upstream dataset as a `Python transform input`. This API exposes a `FileSystem` object that allows file access based on the path of a file within the Foundry dataset, abstracting away the underlying storage. [Learn more about the `FileSystem`.](https://www.palantir.com/docs/foundry/api-reference/transforms-python-library/api-filesystem/#transforms.api.FileSystem). Other information, including the branch and RID (as detailed in the [transform input documentation](https://www.palantir.com/docs/foundry/api-reference/transforms-python-library/api-transforminput/#transforms.api.TransformInput)), is also exposed.

Change the type of your input using the input helper bar, or in the inputs tab.

Only imported datasets and persisted datasets can be read in as Python transform inputs. Transforms that are not saved as a dataset cannot be read in as Python transform inputs.

Datasets with no schema should be read in as a transform input automatically.

![Image 1: python-transform-input](https://www.palantir.com/docs/resources/foundry/code-workbook/python-transform-input.png)

#### Example: Reading CSVs inside a ZIP file

For example, the following code will read the CSVs inside of a ZIP file and return the CSV contents as a dataframe.

Copied!

```
1import tempfile
2import zipfile
3import shutil
4import io
5from pyspark.sql import Row
6
7# datasetOfZippedFiles is a dataset with a single zipped file that contains 3 CSVs with the same schema: ["id", name"].
8def sample(datasetOfZippedFiles):
9    df = datasetOfZippedFiles
10    fs = df.filesystem() # This is the FileSystem object.
11    MyRow = Row("id", "name")
12    def process_file(file_status):
13        with fs.open(file_status.path, 'rb') as f:
14            with tempfile.NamedTemporaryFile() as tmp:
15                shutil.copyfileobj(f, tmp)
16                tmp.flush()
17                with zipfile.ZipFile(tmp) as archive:
18                    for filename in archive.namelist():
19                        with archive.open(filename) as f2:
20                            br = io.BufferedReader(f2)
21                            tw = io.TextIOWrapper(br)
22                            tw.readline() # Skip the first line of each CSV
23                            for line in tw:
24                                yield MyRow(*line.split(","))
25    rdd = fs.files().rdd
26    rdd = rdd.flatMap(process_file)
27    df = rdd.toDF()
28    return df
```

### Writing Files

It is possible to write to an output FileSystem. This can be useful to write non-tabular data formats including images, PDFs, text files, etc.

Call `Transforms.get_output()` to instantiate a TransformOutput. [Learn more about the TransformOutput API.](https://www.palantir.com/docs/foundry/api-reference/transforms-python-library/api-transformoutput/#transforms.api.TransformOutput)

You can only write files using TransformOutput in nodes that are saved as datasets. You cannot write files using TransformOutput in the console.

Once you have instantiated a TransformOutput and used it by calling filesystem() or other methods, returning anything other than the TransformOutput object will be ignored.

#### Example: Writing a text file or dataset

The following code is an example of how to write a text file:

Copied!

```
1def write_text_file(): 
2    output = Transforms.get_output()
3    output_fs = output.filesystem()
4    
5    with output_fs.open('my text file.txt', 'w') as f: 
6        f.write("Hello world")
7        f.close()
8
```

The following code is an example of how to write a dataset and specify partitioning and output format.

Copied!

```
1def write_dataset(input_dataset): 
2    output = Transforms.get_output()
3    output.write_dataframe(input_dataset, partition_cols = ["colA", "colB"], output_format = 'csv')
```

## Unstructured files in R

### Reading files

You can read files in an R transform by reading an upstream dataset as an `R transform input`. The `TransformInput` object is exposed which allows file access based on the path of a file within the Foundry dataset. [Learn more about the `FileSystem` API.](https://www.palantir.com/docs/foundry/code-workbook/r-filesystem/)

Change the type of your input using the input helper bar, or in the inputs tab.

Only imported datasets and persisted datasets can be read in as R transform inputs. Transforms that are not saved as a dataset cannot be read in as R transform inputs.

By default, datasets without schemas should be set to input type R transform input already.

![Image 2: select-r-transform-input](https://www.palantir.com/docs/resources/foundry/code-workbook/select-r-transform-input.png)

#### Example: Loading an RDS

Use the code below to load an RDS that is a file in an imported dataset. The RDS contains an R data.frame.

Copied!

```
1RDS_reader <- function(RDS_dataset) {
2    fs <- RDS_dataset$fileSystem()
3    
4    ## The name of the file is test_loading_RDS.rds
5    
6    path <- fs$get_path("test_loading_RDS.rds", 'r')
7    rds <- readRDS(path)
8    return(rds)
9}
```

#### Example: Using rbind on the contents of a set of zipped CSVs

Use the code below to `rbind` the contents of a set of zipped CSVs.

Copied!

```
1result <- function(zip_file_with_csvs) {
2    fs <- zip_file_with_csvs$fileSystem()
3
4    ## Get the remote path (name) of the zipfile
5    zipfile_name <- fs$ls()[[1]]$path
6
7    ## Get the local path of the zipfile
8    path <- fs$get_path(zipfile_name, 'r')
9
10    # List the zipped files 
11    zipped_files <- as.list(unzip(path, list = TRUE)$Name)
12
13    # For every element on the list, return a dataframe
14    list_of_data_frames <- lapply(zipped_files, function(x){read.csv(unz(path, x), header = TRUE, sep = ",")})
15
16    # Bind all of the dataframes together
17    rbind_df <- do.call(rbind,list_of_data_frames)
18
19    return(rbind_df)
20
21}
```

### Writing files

It is possible to write to an output FileSystem. This can be useful to write non-tabular data formats including images, PDFs, text files, and so on.

Call `new.output()` to instantiate a TransformOutput. [Learn more about the `FileSystem` API.](https://www.palantir.com/docs/foundry/code-workbook/r-filesystem/)

You can only write files using TransformOutput in nodes that are saved as datasets. You cannot write files using TransformOutput in the console.

#### Example: Saving an R data.frame to an RDS file

Use the code below to save an R data.frame to an RDS file.

Copied!

```
1write_rds_file <- function(r_dataframe) {
2    output <- new.output()
3    output_fs <- output$fileSystem()
4    saveRDS(r_dataframe, output_fs$get_path("my_RDS_file.rds", 'w'))
5
6}
```

#### Example: Saving a plot to a PDF

Use the code below to save a plot to a PDF.

Copied!

```
1plot_pdf <- function() {
2    library(ggplot2)
3    theme_set(theme_bw())  # pre-set the bw theme
4    data("midwest", package = "ggplot2")
5
6    # Scatterplot
7    gg <- ggplot(midwest, aes(x=area, y=poptotal)) + 
8        geom_point(aes(col=state, size=popdensity)) + 
9        geom_smooth(method="loess", se=F) + 
10        xlim(c(0, 0.1)) + 
11        ylim(c(0, 500000)) + 
12        labs(subtitle="Area Vs Population", 
13            y="Population", 
14            x="Area", 
15            title="Scatterplot", 
16            caption = "Source: midwest")
17            
18    output <- new.output()
19    output_fs <- output$fileSystem()
20    pdf(output_fs$get_path("my pdf example.pdf", 'w'))
21    plot(gg)
22}
```

#### Example: Writing a TXT file using a connection

Use the code below to write a TXT file using a connection.

Copied!

```
1write_txt_file <- function() {
2    output <- new.output()
3    output_fs <- output$fileSystem()
4    conn <- output_fs$open("my file.txt", 'w')
5    writeLines(c("Hello", "world"), conn)
6}
```

#### Example: Uploading a TXT file to a remote path

Use the code below to take the text file at the local path `output.txt`, and upload it to the remote path `output_test.txt`. In the saved dataset, you will see one file named `output_test.txt`

Copied!

```
1upload <- function() {
2    output <- new.output()
3    output_fs <- output$fileSystem()
4    fileConn<-file("output.txt")
5    writeLines(c("Header 1"), fileConn)
6    close(fileConn)
7
8    output_fs$upload("output.txt", "output_test.txt")
9}
```

Copied!

```
1write_txt_file <- function() {
2    output <- new.output()
3    output_fs <- output$fileSystem()
4    conn <- output_fs$open("my file.txt", 'w')
5    writeLines(c("Hello", "world"), conn)
6}
```

#### Example: Writing a Spark dataframe with partitions

Use the code below to write a Spark dataframe that is partitioned by columns A and B.

Copied!

```
1write_partitioned_df <- function(spark_df) {
2    output <- new.output()
3
4    # partition on colA and colB
5    output$write.spark.df(spark_df, partition_cols=list("colA", "colB"))
6}
```
