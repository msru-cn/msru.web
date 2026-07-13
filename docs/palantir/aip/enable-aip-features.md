Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip/enable-aip-features/

Markdown Content:
## Enable AIP features

[Palantir AIP (Artificial Intelligence Platform)](https://www.palantir.com/docs/foundry/platform-overview/aip-capabilities/) is enabled by default in new enrollments. Enrollments that began prior to 2024 may need to manually turn on access to AIP features in [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/). Your AIP configuration can be managed in **Control Panel > AIP settings** if you are an enrollment administrator.

![Image 1: Enable AIP toggle](https://www.palantir.com/docs/resources/foundry/aip/enable-aip-toggle.png)

Note that enabling AIP may [incur additional compute usage.](https://www.palantir.com/docs/foundry/aip/aip-compute-usage/)

[Review the list of supported models.](https://www.palantir.com/docs/foundry/aip/supported-llms/)

## AIP and capabilities for custom workflows

AIP's AI functionality can be divided into three categories:

*   **AIP Assist:** An LLM-powered support tool designed to help users navigate, understand, and generate value with the Palantir platform. Users can ask AIP Assist questions in natural language and receive real-time help with their queries.
*   **AIP assistant features in platform applications:** Native LLM-backed features designed to help end users perform regular workflows in the Palantir platform. These are highly-specific features that leverage knowledge of the platform to accelerate a user's day-to-day operations.
*   **AIP capabilities for custom workflows:** A set of capabilities that allow developers to build their own LLM-backed workflows or applications. These are open-ended functionalities built for developers or data scientists.

## AIP permissions

AIP usage on the Palantir platform is governed by two levels of permissions:

*   **[AIP and core assistant features](https://www.palantir.com/docs/foundry/aip/aip-features/):** Turns on AIP, [AIP Assist](https://www.palantir.com/docs/foundry/assist/overview/), and associated assistant features in [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/aip-features/), [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-aip/), and Workshop.

![Image 2: Toggle to enable AIP and core features.](https://www.palantir.com/docs/resources/foundry/aip/enable-initial-aip-features.png)

*   **AIP capabilities for custom workflows:** With AIP enabled, platform administrators can enable an additional layer of capabilities to empower developers and application builders to create custom AIP workflows and grant users the necessary permissions to use these custom AIP workflows. The capabilities that are unlocked when permission is granted are as follows:

    *   **Capabilities with LLM support in point-and-click interfaces**
        *   [AIP Logic: Use LLM Board](https://www.palantir.com/docs/foundry/logic/getting-started/#getting-started)
        *   [Pipeline Builder: Use LLM node](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-llm/) and [Text-to-embeddings](https://www.palantir.com/docs/foundry/pipeline-builder/pipeline-builder-aip/#text-to-embeddings)
        *   [AIP Automate](https://www.palantir.com/docs/foundry/logic/aip-logic-integration-automate/)
        *   [AIP Model Catalog](https://www.palantir.com/docs/foundry/model-catalog/overview/)
        *   [AIP Chatbot Studio](https://www.palantir.com/docs/foundry/chatbot-studio/overview/) (formerly AIP Agent Studio)
        *   AIP Workshop widgets: [AIP Chatbot](https://www.palantir.com/docs/foundry/workshop/widgets-aip-chatbot/), [AIP Generated Content](https://www.palantir.com/docs/foundry/workshop/widgets-aip-generated-content/)
        *   [AIP Workshop translations](https://www.palantir.com/docs/foundry/workshop/translations/#automatic-translation-with-aip)
        *   [Quiver](https://www.palantir.com/docs/foundry/quiver/quiver-aip/)
        *   [AIP Threads](https://www.palantir.com/docs/foundry/threads/overview/)

    *   **Capabilities for development with code-based tools**
        *   [Transforms using LLMs](https://www.palantir.com/docs/foundry/transforms-python-spark/palantir-provided-models/)
        *   [Functions using LLMs](https://www.palantir.com/docs/foundry/functions/language-models-python-tsv2/)
        *   [Jupyter® in Code Workspaces with LLMs](https://www.palantir.com/docs/foundry/code-workspaces/overview/)

## Restrict AIP usage

Platform administrators can restrict AIP usage on two different levels; user groups and Organizations.

### User groups

To restrict AIP usage on user groups, platform administrators can select **Everyone**, given **User Groups**, or restrict usage by selecting **Nobody**.

![Image 3: Enable AIP capabilities for custom workflows](https://www.palantir.com/docs/resources/foundry/aip/grant-use-aip-developer-capabilities.png?width=500)

Note that certain applications, such as AIP Logic, may need to first be enabled in **Control Panel > Application access** before they can be used.

### Organizations

To restrict AIP on Organizations, platform administrators can enable the **Restrict AIP To Organizations** option and select the desired Organizations from the dropdown. Keep in mind that this setting _restricts_ AIP to the selected Organizations. As a result, AIP will be disabled for any Organizations that are not selected. Additionally, if AIP is not enabled for an enrollment, no Organizations will have access to AIP.

AIP is only considered enabled for a resource when AIP is enabled for **all** organization markings on the resource's project.

![Image 4: Restrict AIP to Organizations.](https://www.palantir.com/docs/resources/foundry/aip/restrict-aip-to-organizations.png)

## Enable LLMs

Enrollment administrators must individually enable LLM usage under the **Model enablement** tab within the **AIP settings** extension of Control Panel.

![Image 5: Model enablement tab in AIP Settings Control Panel extension.](https://www.palantir.com/docs/resources/foundry/aip/model-enablement.png?width=700)

### Understanding model states

Each model family in the Model enablement interface displays one of three states:

*   **Enabled:** The model family is active and available for use by users and workflows. No further action is required.
*   **Disabled:** The model family is available on your enrollment but has not been activated by administrators. To enable it, select **Manage** and accept the terms and conditions.
*   **Disallowed:** The model family is restricted due to legal, geographical, or infrastructure constraints. Contact Palantir Support to discuss availability options.

An enrollment administrator must accept the relevant terms and conditions for each model family before enabling it for use. Model families in a **disabled** state can be enabled directly through Control Panel, while **disallowed** models require manual configuration by Palantir Support before they can be used.

![Image 6: Allow model family disclaimer and terms acceptance message.](https://www.palantir.com/docs/resources/foundry/aip/model-terms-acceptance.png)

Disabling a model family group will break workflows that rely on a model in that specific group.

[View a list of all supported models.](https://www.palantir.com/docs/foundry/aip/supported-llms/#available-llms)

[Learn how to bring your own model to run on the Palantir platform.](https://www.palantir.com/docs/foundry/aip/bring-your-own-model/)

Additionally, enrollment administrators can enable or disable model families at the organization level, allowing certain organizations within the same enrollment to access specific model families while restricting others.

In the example below, only the `Test1` organization in this enrollment has access to Amazon Bedrock Claude models.

![Image 7: Model family enablement at the organization level.](https://www.palantir.com/docs/resources/foundry/aip/org-model-family-enablement.png)

### Experimental models

Usage of experimental models can be enabled and disabled by enrollment administrators. For an experimental model to be visible for use in workflows, the **Enable experimental models** toggle must be enabled as well as the [model family](https://www.palantir.com/docs/foundry/aip/enable-aip-features/#enable-llms) to which the experimental model belongs.

![Image 8: Experimental Models toggle](https://www.palantir.com/docs/resources/foundry/aip/experimental-models-toggle.png)

## Learn more

*   [Available LLMs](https://www.palantir.com/docs/foundry/aip/supported-llms/#available-llms)
*   [LLM availability prerequisites](https://www.palantir.com/docs/foundry/aip/supported-llms/#llm-availability-prerequisites)
*   [LLM capacity management](https://www.palantir.com/docs/foundry/aip/llm-capacity-management/)
*   [Georestriction of model availability](https://www.palantir.com/docs/foundry/aip/supported-llms/#llm-availability-by-geography)

* * *

Note: AIP feature availability is subject to change and may differ between customers.

_The "OpenAI" name and the “GPT” brands are property of OpenAI._

_Jupyter®, JupyterLab®, and the Jupyter® logos are trademarks or registered trademarks of NumFOCUS._

All third-party trademarks (including logos and icons) referenced remain the property of their respective owners. No affiliation or endorsement is implied.
