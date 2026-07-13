Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/document-intelligence/core-concepts/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/document-intelligence/core-concepts/#core-concepts)Core concepts

## [](https://www.palantir.com/docs/foundry/document-intelligence/core-concepts/#traditional-extraction)Traditional extraction

Traditional extraction configurations are based on algorithms not backed by large language models, such as PDF metadata extraction, Optical Character Recognition (OCR) detection, and layout detection. These configurations in AIP Document Intelligence are backed by the [transform media item endpoint](https://www.palantir.com/docs/foundry/api/v2/media-sets-v2-resources/media-sets/transform-media-item).

[Learn more about using document extraction media transformations in AIP Document Intelligence.](https://www.palantir.com/docs/foundry/document-intelligence/document-to-text/)

## [](https://www.palantir.com/docs/foundry/document-intelligence/core-concepts/#preprocessing)Preprocessing

For use cases that work with more complex documents, combining VLMs with preprocessing techniques has proven quite successful. Under **Configuration > Generative AI**, toggle on **Preprocess document**. Document preprocessing essentially runs traditional OCR (Optical Character Recognition) on the document, then passes that output _in addition_ to the document page itself to a VLM, giving the model more context to successfully analyze the document.

![Image 2: The preprocessing configuration section found in AIP Document Intelligence.](https://www.palantir.com/docs/resources/foundry/document-intelligence/preprocessing.png)

## [](https://www.palantir.com/docs/foundry/document-intelligence/core-concepts/#evaluations)Evaluations

Currently, you can only perform extraction evaluations if Anthropic Claude 4 Sonnet is available for your enrollment.

For each run of an extraction strategy, you can choose to view a qualitative rubric that leverages your selected VLM as a judge. We fine-tuned the prompt to rank various area from 1 (worst) to 5 (best), including how well a given strategy extracted tables, headers, and more. Evaluations allow you to quickly iterate and make judgments as you test different prompts and strategies.

## [](https://www.palantir.com/docs/foundry/document-intelligence/core-concepts/#deployment-paths)Deployment paths

Once you are satisfied with a particular strategy, you can deploy it in a batch pipeline to run it over your wider dataset. Currently, we only support a Python transform deployment path.

### [](https://www.palantir.com/docs/foundry/document-intelligence/core-concepts/#python-transform)Python transform

You can export your strategy to a Python transform repository template that is fully dynamic; the dataset RID/path, model RID/path, custom prompt, and selected configuration are all automatically configured. We recommend you verify this work before triggering a build.

Learn more about the [features](https://www.palantir.com/docs/foundry/document-intelligence/overview/#features) of AIP Document Intelligence and how to [get started](https://www.palantir.com/docs/foundry/document-intelligence/overview/#getting-started).

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/document-intelligence/overview/)

[NEXT Deploy extraction strategies to Python transforms →](https://www.palantir.com/docs/foundry/document-intelligence/deploy-to-python-transforms/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

