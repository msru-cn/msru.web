Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#transforms-faq)Transforms FAQ

The following are some frequently asked questions about transforms.

For general information, see our [transforms documentation](https://www.palantir.com/docs/foundry/code-workbook/transforms-overview/).

*   [Is it possible to save a CSV file in `transforms-python` rather than saving Parquet?](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#is-it-possible-to-save-a-csv-file-in-transforms-python-rather-than-saving-parquet)
*   [Can I build multiple output datasets from one Python transform?](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#can-i-build-multiple-output-datasets-from-one-python-transform)
*   [How can I open a GZIP file with transforms?](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#how-can-i-open-a-gzip-file-with-transforms)
*   [How can I unzip a file as part of a Foundry pipeline? In parallel?](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#how-can-i-unzip-a-file-as-part-of-a-foundry-pipeline-in-parallel)

* * *

## [](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#is-it-possible-to-save-a-csv-file-in-transforms-python-rather-than-saving-parquet)Is it possible to save a CSV file in `transforms-python` rather than saving Parquet?

Below are examples of how to do this in each transform language:

Java

Copied!

```java
1foundryOutput.getDataFrameWriter(dataFrame)
2.setFormatSettings(DatasetFormatSettings.builder().format("csv").build())
3.write();
```

Python

Copied!

```python
1from transforms.api import transform, Input, Output
2@transform(
3  output=Output("/path/to/python_csv"),
4  my_input=Input("/path/to/input")
5)
6def my_compute_function(output, my_input):
7  output.write_dataframe(my_input.dataframe(), output_format="csv")
```

SQL

Copied!

```text
1CREATE TABLE `/path/to/sql_csv` USING CSV AS SELECT * FROM `/path/to/input`
```

[Return to top](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#transforms-faq)

* * *

## [](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#can-i-build-multiple-output-datasets-from-one-python-transform)Can I build multiple output datasets from one Python transform?

If you want multiple transforms/datasets, you can create them using a `for` loop:

Copied!

```python
1from transforms.api import transforms_df, Input, Output
2
3def transform_generator(sources):
4	#type: (List[str]) -> List([transforms.api.Transform])
5	transforms = []
6		# This example uses multiple input datasets. You can also generate multiple outputs
7		# from a single input dataset.
8	for source in sources:
9		@transforms_df(
10			Output('/sources/{source}/output'.format(source=source)),
11			my_input=Input('/sources/{source}/input'.format(source=source))
12			)
13		def compute_function(my_input, source=source):
14			# To capture the source variable in the function, you pass it as a defaulted keyword argument.
15			return my_input.filter(my_input.source == source)
16
17		transforms.append(compute_function)
18
19	return transforms
20
21TRANSFORMS = transforms_generator(['src1', 'src2', 'src3'])
```

You can now import the `TRANSFORMS` attribute of the module and manually add each transform to your pipeline:

Copied!

```python
1import my_module
2
3my_pipeline = Pipeline()
4my_pipeline.add_transforms(*my_module.TRANSFORMS)
```

To have a single transform that takes in one input and outputs multiple datasets in the same build, you can also do this programmatically as below:

Copied!

```python
1# Using the `/examples/students_hair_eye_color` dataset
2students_input = foundry.input('/examples/students_hair_eye_color')
3students_input.dataframe().sort('id').show(n=3)
4+---+-----+-----+----+
5| id| hair|  eye| sex|
6+---+-----+-----+----+
7|  1|Black|Brown|Male|
8|  2|Brown|Brown|Male|
9|  3|  Red|Brown|Male|
10+---+-----+-----+----+
11Note that this example only shows the top three rows.
12
13from transforms.api import transform, Input, Output
14
15@transform(
16	hair_eye_color=Input('/examples/students_hair_eye_color'),
17	males=Output('/examples/hair_eye_color_males'),
18	females=Output('examples/hair_eye_color_females'),
19)
20def brown_hair_by_sex(hair_eye_color, males, females):
21	# type: (TransformInput, TransformOutput, TransformOutput) -> None
22	brown_hair_df = hair_eye_color.dataframe().filter(hair_eye_color.dataframe().hair == 'Brown')
23
24	males.write_dataframe(brown_hair_df.filter(brown_hair_df.sex == 'Male'))
25	females.write_dataframe(brown_hair_df.filter(brown_hair_df.sex == 'Female'))
```

For more help and information on transforms, review the documentation for:

*   [Python transforms](https://www.palantir.com/docs/foundry/transforms-python/overview/)
*   [Java transforms](https://www.palantir.com/docs/foundry/transforms-java/overview/)
*   [Spark SQL transforms](https://www.palantir.com/docs/foundry/transforms-sql/spark-reference/)

[Return to top](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#transforms-faq)

* * *

## [](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#how-can-i-open-a-gzip-file-with-transforms)How can I open a GZIP file with transforms?

Since the input to transforms is a file-like object that is backed by a stream, you can process it as a file. This means you do not need to be concerned about reading the whole file in to memory or copying it on to a disk, allowing for usage of much larger files.

Use the `gzip` and `io` packages included in Python 3:

Copied!

```python
1import gzip, io
2
3def process_file(file_stauts):
4	fs = input_dataset.filesystem()
5	with fs.open(file_status.path, 'rb') as f:
6		gz = gzip.GzipFile(fileobj=f)
7		br = io.BufferedReader(gz)
```

And if you want reads to return strings, you can wrap it:

Copied!

```python
1tw = io.TextIOWrapper(br)
```

If your file has an encoding you can specify it:

Copied!

```python
1tw = io.TextIOWrapper(br, encoding='CP500')
```

For more help and information on transforms, review the documentation for:

*   [Python transforms](https://www.palantir.com/docs/foundry/transforms-python/overview/)
*   [Java transforms](https://www.palantir.com/docs/foundry/transforms-java/overview/)
*   [Spark SQL transforms](https://www.palantir.com/docs/foundry/transforms-sql/spark-reference/)

[Return to top](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#transforms-faq)

* * *

## [](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#how-can-i-unzip-a-file-as-part-of-a-foundry-pipeline-in-parallel)How can I unzip a file as part of a Foundry pipeline? In parallel?

This uses Java and Spark to unzip each file within the zip archive in a parallelized fashion. If you want to parallelize decompression within a single compressed file, use a splittable file format like `.bz2`.

Copied!

```java
1package com.palantir.transforms.java.examples;
2
3import com.google.common.io.ByteStreams;
4import com.palantir.transforms.lang.java.api.Compute;
5import com.palantir.transforms.lang.java.api.FoundryInput;
6import com.palantir.transforms.lang.java.api.FoundryOutput;
7import com.palantir.transforms.lang.java.api.ReadOnlyLogicalFileSystem;
8import com.palantir.transforms.lang.java.api.WriteOnlyLogicalFileSystem;
9import com.palantir.util.syntacticpath.Paths;
10import java.io.IOException;
11import java.util.zip.ZipEntry;
12import java.util.zip.ZipInputStream;
13
14/**
15 * This is an example of unzipping files in parallel using Spark.
16 * <p>
17 * The work is distributed to executors.
18 */
19public final class UnzipWithSpark {
20
21    @Compute
22    public void compute(FoundryInput zipFiles, FoundryOutput output) throws IOException {
23        ReadOnlyLogicalFileSystem inputFileSystem = zipFiles.asFiles().getFileSystem();
24        WriteOnlyLogicalFileSystem outputFileSystem = output.getFileSystem();
25
26        inputFileSystem.filesAsDataset().foreach(portableFile -> {
27            // "processWith" gives you the InputStream for the given input file.
28            portableFile.processWithThenClose(stream -> {
29                try (ZipInputStream zis = new ZipInputStream(stream)) {
30                    ZipEntry entry;
31                    // For each file in the zip file, write it to the output file system.
32                    while ((entry = zis.getNextEntry()) != null) {
33                        outputFileSystem.writeTo(
34                                Paths.get(entry.getName()),
35                                outputStream -> ByteStreams.copy(zis, outputStream));
36                    }
37                    return null;
38                } catch (IOException e) {
39                    throw new RuntimeException(e);
40                }
41            });
42        });
43    }
44}
```

For more help and information on transforms, review the documentation for:

*   [Python transforms](https://www.palantir.com/docs/foundry/transforms-python/overview/)
*   [Java transforms](https://www.palantir.com/docs/foundry/transforms-java/overview/)
*   [Spark SQL transforms](https://www.palantir.com/docs/foundry/transforms-sql/spark-reference/)

[Return to top](https://www.palantir.com/docs/foundry/code-workbook/transforms-faq/#transforms-faq)

[← PREVIOUS Spark](https://www.palantir.com/docs/foundry/code-workbook/transforms-spark/)

[NEXT Templates / Overview →](https://www.palantir.com/docs/foundry/code-workbook/templates-overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

