Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/

Published Time: Thu, 09 Jul 2026 17:47:57 GMT

# [](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#using-palantir-provided-models-to-create-a-semantic-search-workflow)Using Palantir-provided models to create a semantic search workflow

To use Palantir-provided language models, [AIP must first be enabled on your enrollment](https://www.palantir.com/docs/foundry/aip/enable-aip-features/). You also must have permissions to use [AIP developer capabilities](https://www.palantir.com/docs/foundry/platform-overview/aip-capabilities/). Using a custom model? Review [Using custom models to create a semantic search workflow](https://www.palantir.com/docs/foundry/ontology/using-custom-models-to-create-a-semantic-search-workflow/) instead.

This page illustrates the process of building a notional end-to-end semantic search workflow using a [Palantir-provided embedding model](https://www.palantir.com/docs/foundry/aip/supported-llms/).

## [](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#instructions)Instructions

To begin, you need to generate embeddings and store them in an object type with a [`vector` type](https://www.palantir.com/docs/foundry/object-link-types/property-metadata/#property-base-types-with-limited-support). Then, you can set up a semantic search workflow in [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/), build an [AIP Chatbot Workshop widget](https://www.palantir.com/docs/foundry/workshop/widgets-aip-chatbot/) solution, or create a custom semantic search function for use in [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) and [AIP Logic](https://www.palantir.com/docs/foundry/logic/overview/).

Prerequisite:

*   [Generate embeddings and create object type](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#generate-embeddings-and-create-object-type)

Options:

*   [Create a simple semantic search workflow within workshop using a KNN object set (no-code)](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#create-a-simple-semantic-search-workflow-within-workshop-using-a-knn-object-set-no-code)
*   [Enable an AIP Chatbot to semantic search for objects (no-code)](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#use-aip-chatbot-no-code)
*   [Create a function to semantically search across objects for use in Workshop and/or AIP Logic](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#create-a-function-to-semantically-search-across-objects-for-use-in-workshop-andor-aip-logic)

## [](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#generate-embeddings-and-create-object-type)Generate embeddings and create object type

We will use [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/) to embed text in the dataset as vectors with the [**Text to Embeddings** expression](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-aip/#text-to-embeddings). The expression takes a string and converts it to a vector using one of the Palantir-provided models - in our case the `text-embedding-ada-002` embedding model.

![Image 6: Text to Embedding](https://www.palantir.com/docs/resources/foundry/ontology/text-to-embedding.png)

These embeddings can then be added to the Ontology as a vector property.

![Image 7: Configuring a vector property in a Pipeline Builder output object property](https://www.palantir.com/docs/resources/foundry/ontology/embeddings-as-pipeline-builder-output-object-property.png)

If you would like more control around the generation of embeddings using Palantir-provided models, see [Language models within Python Transforms](https://www.palantir.com/docs/foundry/transforms-python-spark/palantir-provided-models/#embeddings).

## [](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#create-a-simple-semantic-search-workflow-within-workshop-using-a-knn-object-set-no-code)Create a simple semantic search workflow within workshop using a KNN object set (no-code)

The KNN object set cannot be sorted by relevancy. If you need ordered results, use the [function approach](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#create-a-function-to-semantically-search-across-objects-for-use-in-workshop-andor-aip-logic).

Configuring a [KNN object set](https://www.palantir.com/docs/foundry/functions/api-object-sets/#k-nearest-neighbors-knn) within [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) is an easy no-code way to build a semantic search workflow.

1.   Create an object set [variable](https://www.palantir.com/docs/foundry/workshop/concepts-variables/) and select the object type that contains an embedding property.
2.   Select the filter `+ On a property` option, then from the list of properties in the menu, select your embedding property.
3.   Once selected, the K-nearest-neighbors configuration should appear. If this configuration does not appear, verify that the property you selected is an embedding property.

![Image 8: Workshop KNN config](https://www.palantir.com/docs/resources/foundry/ontology/knn-config-workshop.png)

Within this panel, you can configure:

*   K-value: A number between 1-100 for how many objects to return in the semantic search.
*   Query: The string variable to use as a query when performing the semantic search.

1.   Next, create a [string selector](https://www.palantir.com/docs/foundry/workshop/widgets-string-selector/) widget and add its output variable to the KNN query option seen above.
2.   Lastly, add an [object table](https://www.palantir.com/docs/foundry/workshop/widgets-object-table/) widget and configure its input variable to be the newly created [KNN object set](https://www.palantir.com/docs/foundry/functions/api-object-sets/#k-nearest-neighbors-knn).

![Image 9: Workshop KNN semantic search](https://www.palantir.com/docs/resources/foundry/ontology/knn-workshop-semantic.png)

For more customized semantic search logic, see the [section on functions](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#create-a-function-to-semantically-search-across-objects-for-use-in-workshop-andor-aip-logic).

## [](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#use-aip-chatbot-no-code)Use AIP Chatbot (no-code)

AIP Chatbots (formerly AIP Agents) created in [AIP Chatbot Studio](https://www.palantir.com/docs/foundry/chatbot-studio/overview/) are good for beginning semantic searches across your objects because they do not require any code. Learn more about [incorporating semantic search with more control over the functionality](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#create-a-function-to-semantically-search-across-objects-for-use-in-workshop-andor-aip-logic).

Follow the instructions on the [getting started](https://www.palantir.com/docs/foundry/chatbot-studio/getting-started/) guide to create an AIP Chatbot and either add [Ontology context](https://www.palantir.com/docs/foundry/chatbot-studio/retrieval-context/#ontology-context) or an **Ontology semantic search**[tool](https://www.palantir.com/docs/foundry/chatbot-studio/tools/#types-of-tools). This initial setup will enable you to ask the AIP Chatbot to semantically search the objects.

## [](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#create-a-function-to-semantically-search-across-objects-for-use-in-workshop-andor-aip-logic)Create a function to semantically search across objects for use in Workshop and/or AIP Logic

We can [create a typescript repository](https://www.palantir.com/docs/foundry/functions/getting-started/) and create a function to query our object type. The overall goal is to be able to take some user input, generate a vector using the same Palantir-provided model [used earlier](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#generate-embeddings-and-create-object-type), and then do a [KNN search](https://www.palantir.com/docs/foundry/functions/api-object-sets/#k-nearest-neighbors-knn) over our object type. For more information on how to import Palantir-provided models, review [Language models within Functions](https://www.palantir.com/docs/foundry/functions/language-models/#embeddings).

Substitutions

In the code snippet below, replace every instance of `ObjectApiName` for your unique ObjectType. Note that the identifier may sometimes appear as `objectApiName` with the first letter in lowercase.

Enabling vector properties for functions

Before proceeding, ensure that the entry `"enableVectorProperties": true` is present in the `functions.json` file in your Functions code repository. If this entry is not present, add it to `functions.json` and commit the change to proceed. Contact your Palantir representative if you need further assistance.

### [](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#functions-typescriptsrcindexts)functions-typescript/src/index.ts

Copied!

```typescript
1import { Function, Integer } from "@foundry/functions-api";
2import { Objects, ObjectApiName } from "@foundry/ontology-api";
3import { TextEmbeddingAda_002 } from "@foundry/models-api/language-models"
4
5export class MyFunctions {
6    @Function()
7    public async findRelevantObjects(
8        query: string,
9        kValue: Integer,
10    ): Promise<ObjectApiName[]> {
11        if (query.length < 1) {
12            return []
13        }
14        const embedding = await TextEmbeddingAda_002.createEmbeddings({inputs: [query]}).then(r => r.embeddings[0]);
15
16        return Objects.search()
17                    .objectApiName()
18                    .nearestNeighbors(obj => obj.embeddings.near(embedding, {kValue: kValue}))
19                    .orderByRelevance()
20                    .take(kValue);
21    }
22}
```

At this point, we have a function that can run semantic search to query objects with natural language. Remember to [publish the function](https://www.palantir.com/docs/foundry/functions/getting-started/#publish-your-functions) so the function can be used anywhere within Foundry.

### [](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#use-semantic-search-functions-in-workshop)Use semantic search functions in Workshop

1.   Start by [creating a Workshop application](https://www.palantir.com/docs/foundry/workshop/getting-started/).
2.   Add a [text input widget](https://www.palantir.com/docs/foundry/workshop/widgets-text-input/), which will be used as an input to the published KNN document fetch function.
3.   Add an [object list widget](https://www.palantir.com/docs/foundry/workshop/widgets-object-list/) with an input [object set generated from the function](https://www.palantir.com/docs/foundry/workshop/functions-use/#function-backed-variables-in-workshop) and the selected inputs as shown below:

![Image 10: KNN Function to generate object set](https://www.palantir.com/docs/resources/foundry/ontology/semantic-search-workshop-function.png?width=450)
1.   Set the `kValue` to however many results you want returned, subject to the [specified limits](https://www.palantir.com/docs/foundry/functions/api-object-sets/#k-nearest-neighbors-knn).

### [](https://www.palantir.com/docs/foundry/ontology/using-palantir-provided-models-to-create-a-semantic-search-workflow/#use-semantic-search-functions-in-aip-logic)Use Semantic Search functions in AIP Logic

Add the published function as a [tool](https://www.palantir.com/docs/foundry/logic/getting-started/#use-a-logic-function) within AIP Logic. Instruct the language model to use the tool with a prompt similar to this:

> Use the fetchRelevantObjects tool with a kValue of 5 to find the most related objects. Remember to add quotes around query when using the tool.

[← PREVIOUS Ontology augmented generation](https://www.palantir.com/docs/foundry/ontology/ontology-augmented-generation/)

[NEXT Use custom models to create a semantic search workflow →](https://www.palantir.com/docs/foundry/ontology/using-custom-models-to-create-a-semantic-search-workflow/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

