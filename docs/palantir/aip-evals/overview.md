Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-evals/overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/aip-evals/overview/#aip-evals)AIP Evals

AIP Evals is a testing environment to evaluate the performance of your [AIP Logic functions](https://www.palantir.com/docs/foundry/logic/overview/), [AIP Chatbot functions](https://www.palantir.com/docs/foundry/chatbot-studio/chatbots-as-functions/), or [code-authored functions](https://www.palantir.com/docs/foundry/functions/overview/). It is specifically designed to help you deal with the non-deterministic nature of LLMs. AIP Evals allows you to create test cases, define evaluation functions to measure performance, and compare the results against previous versions of your function. It enables you to build the necessary confidence to put LLM-backed functions into production or make changes to an existing implementation.

You can use AIP Evals to:

*   Create test cases and define evaluation criteria.
*   Debug, iterate, and improve functions and prompts.
*   Compare the performance of different models on your functions.
*   Examine variance across multiple runs.

AIP Evals is also available as an integrated tool within [AI FDE](https://www.palantir.com/docs/foundry/ai-fde/overview/), allowing you to create and run evaluation suites through conversational commands.

![Image 2: Evals overview](https://www.palantir.com/docs/resources/foundry/aip-evals/aip-evals-overview.png)

## [](https://www.palantir.com/docs/foundry/aip-evals/overview/#core-concepts)Core concepts

**Evaluation suite:** The collection of test cases, target functions, and evaluation functions used to benchmark function performance.

**Target function:** The function being evaluated. A suite can be configured to test [multiple target functions](https://www.palantir.com/docs/foundry/aip-evals/create-suite/#additional-target-functions) simultaneously.

**Evaluation function:** The method used when comparing or evaluating the actual output of a target function against the expected output.

**Test cases:** Defined sets of inputs and expected outputs that are passed into evaluation functions during evaluation suite runs.

**Metrics:** The results of evaluation functions. Metrics are produced per test case and can be compared in aggregate or individually between runs.

To get started, create an [evaluation suite for logic functions](https://www.palantir.com/docs/foundry/aip-evals/getting-started/), or create an [evaluation suite for general functions](https://www.palantir.com/docs/foundry/aip-evals/create-suite/), and learn more about [evaluation run configurations](https://www.palantir.com/docs/foundry/aip-evals/run-suite/).

[← PREVIOUS AIP Document Intelligence / Document-to-text media transformations](https://www.palantir.com/docs/foundry/document-intelligence/document-to-text/)

[NEXT Evaluation suites for Logic functions →](https://www.palantir.com/docs/foundry/aip-evals/getting-started/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

