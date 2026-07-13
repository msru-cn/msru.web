Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-workbook/workbooks-global-code/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-workbook/workbooks-global-code/#global-code)Global code

The Global Code pane, accessible on the right-hand side of the Workbook interface, allows you to define variables and functions that will be available in all code transforms of that language across the Workbook. For instance, you can use global code to define constants that will be used in multiple transforms or define helper functions you want to use repeatedly.

## [](https://www.palantir.com/docs/foundry/code-workbook/workbooks-global-code/#example)Example

In this example, we’ll write a simple function based on the `titanic_dataset` that takes the age of a passenger and returns their age bracket.

Let’s begin by opening the Python Global Code panel at the right of the page, which looks like this:

![Image 3: global-code](https://www.palantir.com/docs/resources/foundry/code-workbook/workbooks-global-code.png)

Once the Global Code panel is open, copy-paste the following code into the panel:

Copied!

```python
1def return_age_bracket(age):
2  if age is None: 
3    return 'Not specified'
4  elif (age <= 12):
5    return '12 and under'
6  elif (age >= 13 and age < 19):
7    return 'Between 13 and 19'
8  elif (age >= 19 and age < 65):
9    return 'Between 19 and 65'
10  elif (age >= 65):
11    return '65 and over'
12  else: return 'N/A'
```

To use this global function, create a new Python transform derived from `titanic_dataset` and paste the following code into the transform:

Copied!

```python
1def passengers_by_age_bracket_udf(titanic_dataset):
2  from pyspark.sql.functions import udf
3
4  input_df = titanic_dataset
5
6  age_bracket_udf = udf(return_age_bracket)
7
8  output_df = input_df.withColumn("age_bracket", age_bracket_udf(input_df.Age))
9  output_df = output_df.select(output_df.Name, output_df.age_bracket)
10
11  return output_df
```

Now run the code. You will see the following output:

![Image 4: passengers-by-bracket](https://www.palantir.com/docs/resources/foundry/code-workbook/workbooks-passengers-by-bracket.png)

This code may take some time to run since user defined functions (UDFs), especially with loops, can often be inefficient. Using globally defined functions is not always a best practice. For this example, `pyspark.functions` offers a simpler method: `when((condition), result).otherwise(result)`.

Let’s try to get the same result as above without using a UDF:

Copied!

```python
1def passengers_by_age_bracket(titanic_dataset):
2  from pyspark.sql import functions as F
3
4  input_df = titanic_dataset
5  output_df = input_df.withColumn("age_bracket", F.when(input_df.Age.isNull(), 'Not specified')\
6                                                  .when( input_df.Age <= 12, '12 and under')\
7                                                  .when(( (input_df.Age >= 13) & (input_df.Age < 19)), 'Between 13 and 19')\
8                                                  .when(( (input_df.Age >= 19) & (input_df.Age < 65)), 'Between 19 and 65')\
9                                                  .when(input_df.Age >= 65, '65 and over').otherwise('N/A'))
10  output_df = output_df.select('Name','age_bracket')
11
12  return output_df
```

Under most conditions, the above transformation should run in a few seconds, compared to minutes with a UDF.

## [](https://www.palantir.com/docs/foundry/code-workbook/workbooks-global-code/#note-on-reproducibility)Note on reproducibility

Note that in order to ensure that results are reproducible, mutating variables and functions in global code will not propagate to other transforms. For example, in Python, if you define a list in global code like this:

Copied!

```python
1my_list = [1,2,3,4]
```

And then update the list in your transform:

Copied!

```python
1def my_transform(input_df):
2    my_list.append(5)
3    print(my_list)
```

Running `my_transform` will print `[1,2,3,4,5]`, but other transforms will still receive a value of `[1,2,3,4]`.

[← PREVIOUS Console](https://www.palantir.com/docs/foundry/code-workbook/workbooks-console/)

[NEXT Duplicate nodes →](https://www.palantir.com/docs/foundry/code-workbook/workbooks-duplicate-nodes/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

