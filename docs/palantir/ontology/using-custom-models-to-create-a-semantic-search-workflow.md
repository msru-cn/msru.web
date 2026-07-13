Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/ontology/using-custom-models-to-create-a-semantic-search-workflow/

Published Time: Thu, 09 Jul 2026 17:47:57 GMT

Markdown Content:
## Using custom models to create a semantic search workflow

This page illustrates the process of building a notional end-to-end documentation search service that is capable of retrieving relevant docs when given a prompt. The service will use a [Foundry modeling objective](https://www.palantir.com/docs/foundry/model-integration/objectives/) to embed documents and extract their features into a vector. These documents and embeddings will be stored in an object type with the vector property.

For this example, we begin by setting up a model in Foundry and creating a pipeline to generate embeddings. Then, we will create a new object type and a function to query it through natural language.

We begin with a dataset that currently has our parsed documents and metadata, such as `Document_Content` and `Link`. Next, we will generate embeddings from the `Document_Content` to enable us to query them via semantic search.

![Image 1: Dataset to generate embeddings](https://www.palantir.com/docs/resources/foundry/ontology/dataset-to-generate-embeddings.png)

To understand the details of the KNN feature, review [KNN Functions on Objects](https://www.palantir.com/docs/foundry/functions/api-object-sets/#k-nearest-neighbors-knn) section in the Foundry documentation.

Value substitution

Throughout this workflow you can substitute a value of your choosing, as long as it is consistent for each instance. For example, every instance of `ObjectApiName` is always substituted with `Document`.

The values you must substitute are:

*   `ObjectApiName`: identifier for a unique ObjectType, in our case `Document`. _NOTE:_ The identifier may sometimes appear as `objectApiName` with the first letter lowercased.
*   `ModelApiName`: identifier for a function wrapping a Model
*   `OutputDatasetRid`: identifier for the output dataset from the [embedding transform](https://www.palantir.com/docs/foundry/ontology/using-custom-models-to-create-a-semantic-search-workflow/#1-create-embeddings-using-models-in-foundry).
*   `InputDatasetRid`: identifier for the input dataset for the [embedding transform](https://www.palantir.com/docs/foundry/ontology/using-custom-models-to-create-a-semantic-search-workflow/#1-create-embeddings-using-models-in-foundry).
*   `ModelRid`: identifier for the model used for the [embedding transform](https://www.palantir.com/docs/foundry/ontology/using-custom-models-to-create-a-semantic-search-workflow/#1-create-embeddings-using-models-in-foundry) and in the [creation of the Live Modeling Deployment](https://www.palantir.com/docs/foundry/ontology/using-custom-models-to-create-a-semantic-search-workflow/#3-create-a-live-modeling-deployment)

## 1. Create embeddings using models in Foundry

There are a few options for creating embeddings from a model in Foundry. In this example, we will create a transform to interact with an [imported open-source model](https://www.palantir.com/docs/foundry/integrate-models/import-huggingface-models/). We will use the `all-MiniLM-L6-v2` model, a general purpose text-embedding model that will create vectors of dimension (size) 384. This model can be swapped out with any other existing model that outputs vectors compatible with the [Foundry Ontology `vector` type](https://www.palantir.com/docs/foundry/object-link-types/property-metadata/#property-base-types-with-limited-support). To import a new open-source model, review our [Hugging Face model documentation](https://www.palantir.com/docs/foundry/integrate-models/import-huggingface-models/).

The code below expects the model to expose an API with a tabular input containing a `text` string column and a column for tabular outputs containing an `embedding` list of floats. For more details on defining model APIs, refer to the [model adapter API documentation](https://www.palantir.com/docs/foundry/integrate-models/model-adapter-api/).

Copied!

```
1import palantir_models as pm
2
3
4class EmbeddingModelAdapter(pm.ModelAdapter):
5    ...
6
7    @classmethod
8    def api(cls):
9        inputs = {
10            "inference_data": pm.Pandas(columns=[("text", str)])
11        }
12        outputs = {
13            "output_data": pm.Pandas(columns=[("text", str), ("embedding", list[float])])
14        }
15        return inputs, outputs
```

The transform below runs the data through the model to return an `embedding`, then casts the `embedding` value (double arrays) to floats in order to match the type necessary for vector embeddings.

A couple of points to consider:

*   Each `StructField` in the `schema` variable relates to a columns that are present in the processed input dataset (`InputDatasetRid`) plus the `embedding` column added by the model.
*   When working with data at larger scales, the transform might fail if using a Pandas dataframe that is excessively large. In these cases, the transform will have to be performed in Spark.
*   Graphics Processing Units (GPUs) can be leveraged to increase the speed at which embeddings are produced by a transform. GPUs can be used by adding the `@configure` decorator to your transform. Contact your Palantir representative if you are interested in enabling this in your environment.

An example transform is shown below:

Copied!

```
1from transforms.api import configure, transform, Input, Output
2from palantir_models.transforms import ModelInput
3from pyspark.sql.functions import pandas_udf, PandasUDFType
4from pyspark.sql.types import StructType, StructField, IntegerType, StringType, FloatType, ArrayType
5import numpy as np
6
7
8@configure(profile=["DRIVER_GPU_ENABLED"]) # Remove this line if GPUs have not been enabled in your environment
9@transform(
10    dataset_out=Output("OutputDatasetRid"),
11    dataset_in=Input("InputDatasetRid"),
12    embedding_model=ModelInput("ModelRid")
13)
14def compute(ctx, dataset_out, dataset_in, embedding_model):
15    # Match input column of model
16    spark_df = dataset_in.dataframe().withColumnRenamed("Document_Content", "text")
17
18    def embed_df(df):
19        # Create embeddings
20        output_df = embedding_model.transform(df).output_data
21        # Cast to float array
22        output_df["embedding"] = output_df["embedding"].apply(lambda x: np.array(x).astype(float).tolist())
23        # drop unnecessary column
24        return output_df.drop('inference_device', axis=1)
25
26    # Updated schema
27    schema = StructType([
28        StructField("UID", IntegerType(), True),
29        StructField("Category", StringType(), True),
30        StructField("text", StringType(), True),
31        StructField("Link", StringType(), True),
32        StructField("embedding", ArrayType(FloatType()), True)
33    ])
34
35    udf = pandas_udf(embed_df, returnType=schema, functionType=PandasUDFType.GROUPED_MAP)
36    output_df = spark_df.groupBy('UID').apply(udf)
37
38    # Write the output DataFrame
39    dataset_out.write_dataframe(output_df)
```

Next, we will need a Live Modeling Deployment to create embeddings off of a user query to be used to search against our existing vectors. The model used in this part should be the same as the one used to generate the initial embeddings in this current step.

## 2. Create object type

By now, we should have a new dataset with a column containing float vector embeddings generated using the batch modeling deployment [from our first and previous step](https://www.palantir.com/docs/foundry/ontology/using-custom-models-to-create-a-semantic-search-workflow/#1-create-embeddings-using-models-in-foundry). Next, we will create an object type.

We will name the object type `Document`, and set the `embedding` property to be of property type `Vector`. This requires configuring two values:

1.   **Dimension:** this is the length of the array produced in the column `embedding`.
2.   **Similarity Function:** the method by which distance between two `embedding` values from different objects will be calculated.

![Image 2: New vector property type](https://www.palantir.com/docs/resources/foundry/ontology/vector-property-in-oma.jpg)

Once this object type is created, we will have a property (`embedding`) that can be used to semantically search through the `Documentation` objects.

The value for `ObjectApiName` will be available after the object type is saved, and can be found on the configuration page for the object type created. More information can be found about this on the [Create an object type](https://www.palantir.com/docs/foundry/object-link-types/create-object-type/#add-metadata-for-a-new-object-type) section of the documentation.

## 3. Create a Live Modeling Deployment

Now that our objects have embeddings as a property, we need to generate embeddings for user queries with low-latency. These embeddings will be used to find objects with similar embedding values. To do this, create a live model deployment for fast, low-latency access with Functions.

Review the [instructions for configuring a live deployment in Modeling Objectives](https://www.palantir.com/docs/foundry/manage-models/set-up-live/) or [directly from a model](https://www.palantir.com/docs/foundry/manage-models/create-a-model-deployment/). A [Function then needs to be published](https://www.palantir.com/docs/foundry/model-integration/model-functions-guide/) for that model.

## 4. Create an embedding with Functions on Models

Enabling Vector properties for functions

Before proceeding, ensure that the entries `"enableVectorProperties": true`, `"enableResourceGeneration": true`, and `"useDeploymentApiNames": true` are _all_ present in the `functions.json` file in your Functions code repository. If these entries are not present, add them to `functions.json` and commit the change to proceed. Contact your Palantir representative if you need further assistance.

The final step is to create a function to query this object type. For the search phase, the overall goal is to be able to take some user input, generate a vector using the live modeling deployment [created earlier](https://www.palantir.com/docs/foundry/ontology/using-custom-models-to-create-a-semantic-search-workflow/#3-create-a-live-modeling-deployment), and then do a [KNN search](https://www.palantir.com/docs/foundry/functions/api-object-sets/#k-nearest-neighbors-knn) over our object type. A sample function for this use case is shown below, including the file structure they should reside within.

Edits to vector properties can be applied by Actions and Functions.

Further information on how to use a model in a Function can be found in the [Functions on models documentation](https://www.palantir.com/docs/foundry/functions/functions-on-models/).

### File structure

```
|-- functions-typescript
|   |-- src
|   |   |-- tests
|   |   |   |-- index.ts
|   |   |-- index.ts
|   |   |-- semanticSearch.ts
|   |   |-- service.ts
|   |   |-- tsconfig.json
|   |   |-- types.ts
|   |-- functions.json
|   |-- jest.config.js
|   |-- package-lock.json
|   |-- package.json
|-- version.properties
```

### functions-typescript/src/types.ts

Copied!

```
1import { Double } from "@foundry/functions-api";
2
3export interface IEmbeddingModel {
4    embed: (content: string) => Promise<IEmbeddingResponse>;
5}
6
7export interface IEmbeddingResponse {
8    text: string
9    embedding: Double[]
10    inference_device?: string
11}
12
13export interface IEmbeddingRequest {
14    text: string
15}
```

### functions-typescript/src/service.ts

Copied!

```
1// View the Model in the repository's Resource imports sidebar to know which namespace to import it from
2import { ModelApiName } from "@{YOUR_NAMESPACE_HERE}/models";
3import { IEmbeddingRequest, IEmbeddingResponse } from "./types";
4
5// service to hit model
6export class EmbeddingService {
7    public async embed(content: string): Promise<IEmbeddingResponse> {
8        const request: IEmbeddingRequest = {
9                                "text": content,
10                            };
11        return await ModelApiName([request])
12                                 .then((output: any) => output[0]) as IEmbeddingResponse;
13    }
14}
```

### functions-typescript/src/semanticSearch.ts

Copied!

```
1import { Function, Integer, Double } from "@foundry/functions-api";
2import { Objects, ObjectApiName } from "@foundry/ontology-api";
3
4import { EmbeddingService } from "./service";
5import { IEmbeddingResponse, IEmbeddingModel } from './types';
6
7export class SuggestedDocs {
8    embeddingService: IEmbeddingModel = new EmbeddingService;
9
10    @Function()
11    public async fetchSuggestedDocuments(userQuery: string, kValue: Integer, category: string): Promise<ObjectApiName[]> {
12        const embedding: IEmbeddingResponse = await this.embeddingService.embed(userQuery);
13        const vector: Double[] = embedding.embedding;
14
15        return Objects.search()
16                      .objectApiName()
17                      .filter(obj => obj.category.exactMatch(category))
18                      .nearestNeighbors(obj => obj.embedding.near(vector, {kValue: kValue}))
19                      .orderByRelevance()
20                      .take(kValue);
21    }
22
23    /**
24     * The following is an alternative to fetchSuggestedDocuments which applies a threshold similarity.
25     * Otherwise, kValue number of documents are always returned, no matter how similar.
26     * The computation of the distance function depends on the distance function defined for the embedding
27     * property. Here we assume it's cosine similarity, which can be computed with a simple vector dot
28     * product if the embedding model produces normalized vectors.
29     */
30    @Function()
31    public async fetchSuggestedDocumentsWithThreshold(userQuery: string, kValue: Integer, category: string, thresholdSimilarity: Double): Promise<ObjectApiName[]> {
32        const embedding: IEmbeddingResponse = await this.embeddingService.embed(userQuery);
33        const vector: Double[] = embedding.embedding;
34
35        return Objects.search()
36                      .objectApiName()
37                      .filter(obj => obj.category.exactMatch(category))
38                      .nearestNeighbors(obj => obj.embedding.near(vector, {kValue: kValue}))
39                      .orderByRelevance()
40                      .take(kValue)
41                      .filter(obj => SuggestedDocs.dotProduct(vector, obj.embedding! as number[]) >= thresholdSimilarity);
42    }
43
44    private static dotProduct<K extends number>(arr1: K[], arr2: K[]): number {
45        if (arr1.length !== arr2.length) {
46            throw EvalError("Two vectors must be of the same dimensions");
47        }
48        return arr1.map((_, i) => arr1[i] * arr2[i]).reduce((m, n) => m + n);
49    }
50}
```

### functions-typescript/src/index.ts

Copied!

`1export { SuggestedDocs } from "./semanticSearch";`

## 5. Publish the function and use in an example

At this point, we have a function that can run semantic search to query objects with natural language. The final step is to [publish the function](https://www.palantir.com/docs/foundry/functions/getting-started/#publish-your-functions) and use it in a workflow. To continue building on the documentation search example, we will create a Workshop application to invoke this function with a text input to return the top two matching documentation articles to a user.

The process to creating a semantic search for the documentation service in the example is as follows:

1.   Start by [creating a Workshop application](https://www.palantir.com/docs/foundry/workshop/getting-started/).
2.   Add a [text input](https://www.palantir.com/docs/foundry/workshop/widgets-text-input/) and a [string selector](https://www.palantir.com/docs/foundry/workshop/widgets-string-selector/). The string selector will be used to choose a documentation category with which to filter. Both the text input and string selector will serve as inputs into the published KNN document fetch function.
3.   Finally, add an [object list widget](https://www.palantir.com/docs/foundry/workshop/widgets-object-list/) with an input object set generated from the function and the selected inputs as shown below:

![Image 3: KNN Function to generate object set](https://www.palantir.com/docs/resources/foundry/ontology/knn-function-workshop-panel.png)

From this point, the inputs will be used to semantically search through documents in the object type and return the two most relevant. This is just one simple use case of vector properties and semantic search. See an example of the resulting Workshop application in the screenshot below:

![Image 4: Example semantic search workshop](https://www.palantir.com/docs/resources/foundry/ontology/completed-knn-workshop.png)
