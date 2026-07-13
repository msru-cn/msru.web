Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip/bring-your-own-model/

Markdown Content:
## Bring your own model to AIP

Bring-your-own-model (BYOM), also known as registered models in the Palantir platform, is a capability that provides first-class support for customers who want to connect their own LLMs or accounts to AIP across Palantir developer products. These products include AI FDE, AIP Analyst, AIP Chatbot Studio, AIP Logic, Workshop, TypeScript functions in Code Repositories, Pipeline Builder (coming soon), and more.

## When to use

Based on LLM support and viability, we generally recommend using Palantir-provided models from model providers (for example, OpenAI, Azure OpenAI, AWS Bedrock, xAI, GCP Vertex), or self-hosted open-source models by Palantir (such as Llama models).

However, you may prefer to bring your own models or accounts to AIP. We recommend using registered models only when you cannot use Palantir-provided models for legal and compliance reasons, or when you have your own fine-tuned or otherwise unique LLM that you would like to leverage in AIP.

We introduced a new implementation of registered models in March 2026 to provide a streamlined integration optimized for the most common model provider APIs, which this page describes. This new implementation offers improved performance and operational functionality across additional AIP applications, such as AI FDE and AIP Analyst. It also supports native tool calling and reasoning while providing infrastructure tooling for AIP, such as rate limit enablement, usage observability in [Resource Management](https://www.palantir.com/docs/foundry/resource-management/overview/), permissions control in [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/), and a model selector. Because of these enhancements, we recommend using the new implementation instead of the previous method of registering an LLM using [function interfaces](https://www.palantir.com/docs/foundry/functions/function-interfaces/).

If you previously registered a model using function interfaces, review the [Register an LLM using function interfaces [Legacy] documentation](https://www.palantir.com/docs/foundry/aip/chat-completion-function-interface-quickstart/). Contact Palantir Support if you have a use case that is not well addressed by registered models.

## Supported applications and features

The registered models BYOM implementation supports the following AIP applications and other platform capabilities:

*   [AI FDE](https://www.palantir.com/docs/foundry/ai-fde/overview/)
*   [AIP Analyst](https://www.palantir.com/docs/foundry/aip-analyst/overview/)
*   [AIP Chatbot Studio](https://www.palantir.com/docs/foundry/chatbot-studio/overview/)
*   [AIP Logic](https://www.palantir.com/docs/foundry/logic/overview/)
*   [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) (through AIP Chatbot Studio or AIP Logic)
*   [TypeScript functions](https://www.palantir.com/docs/foundry/functions/typescript-v2-getting-started/) in [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/)

Additionally, the implementation provides the following AIP infrastructure tools:

*   Model selector across AIP applications
*   [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) permissions and enablement
*   [Resource Management](https://www.palantir.com/docs/foundry/resource-management/overview/) application rate limits and usage observability

## Unsupported applications and features

The registered models BYOM implementation does not currently support the following applications or features:

*   [AIP Assist](https://www.palantir.com/docs/foundry/assist/overview/), including [code assist in a Code Repository](https://www.palantir.com/docs/foundry/assist/application-integrations/#aip-assist-in-code-repositories)
*   Pipeline Builder's [**Generate**](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-aip/#generate) and [**Explain**](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-aip/#explain) features

## How to register and use your own model

You must be an **Enrollment administrator** to register a model _and_ have `Owner` or `Editor` permissions on the Data Connection source you configure by following the steps below.

First, follow the steps below to create a REST API source in Data Connection:

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **New source > REST API** for your model provider's endpoint.
2.   Enter a **Name** for your source and select a **Source location** where you are able to retain `Owner` or `Editor` permissions.
3.   Configure the **Domain base URL**, **Authentication** method, and **Port** for your model provider.
4.   Ensure you toggle on **Enable exports to this source** and **Enable exports to this source without markings validations** in the **Export configuration** section.
5.   Finish configuring your REST API source. You can reference the [REST API connector documentation](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/) for additional details.

![Image 1: The Export configuration section with the Enable exports to this source and Enable exports to this source without markings validations toggles enabled.](https://www.palantir.com/docs/resources/foundry/aip/byom-export-configuration.png)

Next, follow the steps below to register a model in Control Panel:

1.   Open Control Panel and navigate to the **AIP settings** extension before selecting the **Registered models** tab.
2.   Select **Register a model**.
3.   Search for and choose the REST API source RID from the **Select source rid** dropdown menu on the **Source configuration** page.
4.   Provide your model details in the **Configure source API** and **Model API configuration** sections, such as the model provider name, model name, and API endpoint path.
5.   Define the model's capabilities, per endpoint. The capabilities you declare determine which AIP features the model can power. Enabling **Reasoning**, **Structured outputs**, and **Tool calling** ensures AI FDE and AIP Analyst can use the model.
6.   Define the model's rate limits, which are required to enable capacity management and usage observability in the Resource Management application: 
    *   **Enrollment rate limits:** Define the maximum requests per minute or tokens per minute available to the enrollment. Project-level limits are calculated as a percentage of these enrollment limits.
    *   **User rate limits:** Define per-user limits that apply to usage in AI FDE, AIP Analyst, and other user-attributed applications.

7.   Return to the **AIP settings** extension in Control Panel and enable registered model access for your enrollment. You can grant access to the entire enrollment or to specific user groups.

Your registered model is now available across AIP applications. It appears under the **Registered models** tab in the model selector in [all supported applications](https://www.palantir.com/docs/foundry/aip/bring-your-own-model/#supported-applications-and-features).

![Image 2: Source configuration and model information.](https://www.palantir.com/docs/resources/foundry/aip/register-byom-model.png)

## Features supported for registered models

### LLM rate limits

Registered models support LLM rate limits in the same way as Palantir-provided models. **Enrollment administrators** must define enrollment-level and user-level rate limits during [model registration](https://www.palantir.com/docs/foundry/aip/bring-your-own-model/#how-to-register-and-use-your-own-model).

*   **Enrollment rate limits** apply to all rate limiting at the project level.
*   **Project-level rate limits** default to 70 percent of the enrollment limit, but can be configured in the Resource Management application under the **AIP usage and limits** tab.
*   **User rate limits** govern per-user consumption in AI FDE, AIP Analyst, and other user-attributed applications.

![Image 3: Configure rate limits.](https://www.palantir.com/docs/resources/foundry/aip/byom-configure-rate-limits.png)

### Permissions and enablement

*   **Registering models:** Only **Enrollment administrators** can register new models or edit registrations in Control Panel. The administrator must also have `Owner` or `Editor` permissions on the associated Data Connection source to register, edit, or delete a registered model.
*   **Source permissions are severed at registration:** Once a model is registered, its association with the underlying Data Connection source is decoupled from end-user access. End users do not need any permissions on the source to use the registered model; access is governed solely by the registered model enablement configured in Control Panel.
*   **Using registered models:** Permissions to build with registered models or to use them as an end user are managed through the registered models enablement settings in Control Panel. Access can be granted to the entire enrollment or to specific user groups, similar to how standard AIP enablement works.
*   **Disabling a model:** A registered model can be disabled at any time in Control Panel's **AIP settings** extension, preventing it from being used across AIP applications.

![Image 4: Control registered model access in Control Panel.](https://www.palantir.com/docs/resources/foundry/aip/register-byom-model-access.png)

## Frequently asked questions

### Do registered models support markings?

Currently, registered models do _not_ support markings. **Enrollment administrators** can limit who can use registered models in Control Panel, as well as which projects receive capacity for these models in the Resource Management application.

### How are costs handled for registered models?

Palantir does not charge an additional platform fee for the use of registered models. Costs for calls to your externally hosted model are billed directly by your model provider. Registered model costs do not appear in the Resource Management application.

### Why are AIP Assist and Pipeline Builder's Generate and Explain features not supported?

These are native platform features that rely on evaluations and tests of Palantir-provided models, and we cannot guarantee that they work or provide a good quality offering with unfamiliar customer models. There are no plans to support these native assistant capabilities with registered models.
