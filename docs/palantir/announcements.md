Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/announcements/

Published Time: Thu, 09 Jul 2026 17:47:45 GMT

Markdown Content:
## Announcements

**REMINDER:** Sign up for the Foundry Newsletter to receive a summary of new products, features, and improvements across the platform directly to your inbox. For more information on how to subscribe, see the [Foundry Newsletter and Product Feedback channels announcement](https://www.palantir.com/docs/foundry/announcements/2023-11/#foundry-newsletter-and-product-feedback-channels-available-for-sign-up-now-ga).

Share your thoughts about these announcements in our [Developer Community Forum ↗](https://community.palantir.com/c/announcements/6).

* * *

## Build, configure, and ship pro-code agents

Date published: 2026-07-09

Foundry now makes it easier to build, configure, and ship [pro-code agents](https://www.palantir.com/docs/foundry/agents/overview/). Agents combine a large language model with your Foundry data and tools. They can read and write Ontology data, fix failing builds, or migrate legacy systems into Foundry. Agents now authenticate against the Ontology SDK (OSDK), Ontology MCP (OMCP), and Palantir MCP with scoped permissions out of the box, so you no longer pass a client ID and secret to call tools. After you publish an agent, you can call it from Workshop or OSDK with no additional configuration.

![Image 1: An agent template repository with a landing page to guide you through building your agent.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-09-133715-agent-flows-agent-flows-2-pn.png)

_An agent template repository with a landing page to guide you through building your agent._

### What's new

#### Scoped permissions out of the box

Agents authenticate against OSDK, OMCP, and Palantir MCP with [scoped permissions](https://www.palantir.com/docs/foundry/agents/scoped-permissions/) automatically. You no longer wire up client credentials manually, or provide a client ID, secret, or Foundry token, to use tools.

#### Templates for Claude Agent SDK, OpenAI Agents SDK, and Google ADK

Create your agent from an [agent template](https://www.palantir.com/docs/foundry/agents/agent-templates/)for the Claude Agent SDK, OpenAI Agents SDK, or Google Agent Development Kit (ADK). Each template ships with simplified configuration for Ontology MCP, Palantir MCP, and the Ontology SDK client, with common setup moved into the library. After creating your agent, a guided walkthrough leads you through the next steps.

#### Ontology binding and agent API names

Every agent is [published](https://www.palantir.com/docs/foundry/agents/publish-and-call/) with an Ontology binding and an agent API name, making its function callable from both Workshop and Ontology SDK with no additional configuration.

![Image 2: The agent configuration page where you can bind your agent to an Ontology and assign it an API name.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-09-133719-agent-flows-agent-flows-pn.png)

_The agent configuration page, where you can bind your agent to an Ontology and assign it an API name._

#### Build an agent with Continue

Use Palantir MCP with Continue to manage both the SDK and MCP scope attached to the agent, [directly from your editor](https://www.palantir.com/docs/foundry/agents/build-agent-continue/).

![Image 3: The Continue extension in the agent template repository allowing you to build agents with natural-language prompts.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-09-133723-agent-flows-agent-flows-3-pn.png)

_The Continue extension in the agent template repository, allowing you to build agents with natural-language prompts._

### Tell us what you think

We welcome your feedback on building agents in the platform. Share your thoughts with Palantir Support channels or our[Developer Community ↗](https://community.palantir.com/).

* * *

## Automate now supports Global Branching

Date published: 2026-07-09

Automate now supports Global Branching. You can modify automations on a branch and test them end-to-end before merging your changes into the main branch. Branching lets you iterate on automation logic without disrupting live workflows or the people who depend on them. Automate supports the full set of branching features:

*   **Modifications:** Add, modify, remove, and merge changes on branches.
*   **Environment isolation:** Changes and executions of your automations run in the context of the branch.
*   **Protection:** Restrict edits to an automation’s main branch and require users to make all modifications through branches.
*   **Rebasing:** If an automation has changed on main since you originally branched, you can resolve differences by rebasing to unblock merging.
*   **Approvals:** After you propose changes, you can configure reviewers. The automation inherits approval policies from the project automatically. Reviewers view changes in the Automate application before they approve or reject them.

To get started, open any automation and add it to a branch.

![Image 4: An automation open on a global branch with the branch taskbar showing reviewer configuration and proposal checks.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-08-130802-automate-image-pn.png)

_An automation open on a global branch, with the branch taskbar showing reviewer configuration and proposal checks._

![Image 5: Reviewing proposed automation changes in a side-by-side diff before approving or rejecting.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-08-130807-automate-image-pn.png)

_Reviewing proposed automation changes in a side-by-side diff before approving or rejecting._

To learn more, see [Automate branching.](https://www.palantir.com/docs/foundry/automate/branching-automations/)

### Your feedback matters

We want to understand how branching for Automate improves your workflow and where we should focus our improvement efforts. Share your thoughts through Palantir Support channels and our [Developer Community ↗](https://community.palantir.com/) using the [automate tag ↗](https://community.palantir.com/tag/automate) and the [global-branching tag ↗](https://community.palantir.com/tag/global-branching).

* * *

## Claude Sonnet 5 now available in AIP

Date published: 2026-07-07

Claude Sonnet 5 is now available in AIP for eligible commercial and US government enrollments.

### Model overview

As Anthropic’s most agentic Sonnet model yet, Sonnet 5 narrows the gap with Claude Opus 4.8 on reasoning, tool use, coding, and knowledge work, while remaining available at a lower price point. It provides a strong balance of intelligence, speed, and cost for production AIP use cases. For more information, review:

*   [Anthropic’s Claude Sonnet 5 model documentation ↗](https://platform.claude.com/docs/en/about-claude/models/whats-new-sonnet-5)
*   [Anthropic’s Claude Sonnet 5 announcement ↗](https://www.anthropic.com/news/claude-sonnet-5)

### Availability

Claude Sonnet 5 is available for commercial enrollments that enable Anthropic through:

*   Microsoft Azure on non-georestricted enrollments
*   Amazon Bedrock on non-georestricted or US georestricted enrollments
*   Anthropic Direct on non-georestricted or US georestricted enrollments
*   Google Vertex on non-georestricted, US georestricted, or EU georestricted enrollments

Additionally, Claude Sonnet 5 is available for US government enrollments that enable Anthropic through Google Vertex on IL2 or IL4 enrollments.

### Getting started

To use this model:

*   [Confirm that your enrollment administrator has enabled the relevant model family.](https://www.palantir.com/docs/foundry/aip/enable-aip-features/#enable-llms)
*   Review [token costs and pricing.](https://www.palantir.com/docs/foundry/aip/aip-compute-usage/#tokens-in-aip)
*   See the complete [list of models available in AIP.](https://www.palantir.com/docs/foundry/aip/supported-llms/)

### Your feedback matters

We want to hear about your experiences using language models in the Palantir platform and welcome your feedback. Share your thoughts with Palantir Support channels or on our[Developer Community ↗](https://community.palantir.com/)using the [`language-model-service` tag ↗](https://community.palantir.com/tag/language-model-service).

* * *

## Introducing Model Evaluations: Compare and evaluate models outside of Modeling Objectives

Date published: 2026-07-07

[Model evaluations](https://www.palantir.com/docs/foundry/integrate-models/evaluations-overview/) is a new Python API for capturing how a model version performs against test data and visualizing the results directly on the model page. An evaluation is a collection of metrics, images, plots, and tables that you define and log yourself, allowing you to compare model performance across versions and over time.

Previously, evaluating a model in a structured way meant working inside a modeling objective. Model evaluations remove that requirement: you can now author evaluation logic anywhere you build models and attach the results to any model version, no modeling objective required.

![Image 6: The Evaluation tab on a model page. The modelperformance evaluation set shows results logged for each model version grouped by version so you can compare performance across runs.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-07-08-135655-modeling-evaluations-base-view-pn.png)

_The Evaluation tab on a model page. The_`model_performance`_evaluation set shows results logged for each model version, grouped by version so you can compare performance across runs._

### Evaluate any model version

Every evaluation is tied to a single model version - the version loaded into your transform using `ModelInput`. As the results are attached to that specific version, you point-in-time snapshot of how the model performed, and a foundation for comparing quality as the model is retrained.

### Track performance across versions with evaluation sets

**Evaluation sets** are a logical grouping of evaluations that share the same methodology. Each run of an evaluation transform writes a new evaluation to the same set, so you can track how a metric evolves over version as your model changes. To analyze a model in more than one way - for example, aggregate error in one set and per-segment error in another - define a separate set for each methodology.

### Getting started

To get started with model evaluations, just [upgrade your repository](https://www.palantir.com/docs/foundry/code-repositories/repository-upgrades/) to latest, upgrade the palantir_models library to >= 0.2384.0, and then [explore the documentation to get started with model evaluations.](https://www.palantir.com/docs/foundry/integrate-models/evaluations-overview/)

### What's next?

Over the next few months, we will introduce the following improvements to evaluations:

*   AI FDE support for the AI-assisted model development loop
*   Monitors that send alerts based on evaluation performance for automated drift detection
*   UI/UX enhancements for comparing evaluations

[Explore the documentation to get started with model evaluations.](https://www.palantir.com/docs/foundry/integrate-models/evaluations-overview/)

### Let us know what you think

Send feedback through Palantir Support or the[Developer Community ↗](https://community.palantir.com/) using the [modeling tag ↗](https://community.palantir.com/tag/modeling/17).

* * *

## Save AIP Analyst chats as analysis resources

Date published: 2026-07-02

AIP Analyst chats can now be saved as analysis resources in Compass, allowing you to return to prior analyses, share them with collaborators, and continue iterating over time in both standalone AIP Analyst and the Workshop widget. When you reopen an analysis, AIP Analyst re-runs the agent's tools and regenerates responses against the latest state of your Ontology, so the results always reflect the current state and respect each viewer's permissions.

![Image 7: Choose where to save the analysis and review what will be stored.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-06-30-155908-aip-analyst-screenshot-2026-06-23-at-2-33-12-pm-pn.png)

_Choose where to save the analysis and review what will be stored._

[Learn more in the AIP Analyst analysis resources documentation.](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/)

### Admin controls

Platform administrators can disable analysis saving through the AIP Analyst Control Panel extension at the enrollment level. When disabled, users cannot create or open analysis resources from AIP Analyst.

![Image 8: Configure analysis settings in Control Panel.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-06-30-155911-aip-analyst-aip-analyst-control-panel-pn.png)

_Configure analysis settings in Control Panel._

[Learn more about admin configuration.](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#admin-configuration)

### AIP Analyst capabilities

AIP Analyst helps users move from natural language questions to grounded analysis across Foundry. The agent can search the Ontology, build and transform object sets, run aggregations and SQL queries, analyze uploaded files and media, and generate summaries, charts, and maps. With analysis resources, these workflows can now be revisited, shared, and extended over time.

![Image 9: Example analysis in AIP Analyst.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-06-30-155914-aip-analyst-screenshot-2026-06-24-at-5-59-53-pm-pn.png)

_Example analysis in AIP Analyst._

[Learn more about the AIP Analyst capabilities.](https://www.palantir.com/docs/foundry/aip-analyst/capabilities/)

* * *

## Configurable user rate limits for AIP capacity management

Date published: 2026-07-02

Enrollment administrators can now view and configure per-user rate limits for LLM usage in AIP, providing more granular control over how an enrollment's capacity is consumed.

### Background

LLM capacity in AIP is managed at three levels.

*   Enrollment-level limits set the overall ceiling for your organization's token and request throughput.
*   Project rate limits control how much of that enrollment capacity each project can use. Project rate limits are already configurable by administrators.
*   Per-user rate limits govern how much capacity any single user can consume; usage can come from interactive, user-attributed workflows, from applications like AIP Assist, AIP Analyst, or AI FDE, from native assistant features (such as Pipeline Builder Explain and Generate), or from IDE integrations such as Continue and Claude Code.

Until now, per-user limits were set by Palantir as fixed defaults that administrators could not adjust. Until the introduction of configurable user rate limits, there was no self-service way to address issues like a single power user consuming a disproportionate share of capacity on a given model, or specific teams requesting more capacity.

### What's new

Administrators can now manage per-user rate limits directly from the **Manage rate limits** tab on the AIP usage & limits page in the Resource Management application. Administrators are now able to:

*   **Set a custom default** that applies to every user across all models, replacing Palantir's published defaults.
*   **Add per-model overrides** to raise or lower limits for specific models without changing limits across all models.
*   **Create user-group overrides** targeted at specific Foundry user groups, each with its own default and optional per-model configuration. This enables you to give a group of heavy builders more capacity, or restrict experimental users so that they only have high capacity on a subset of models.

![Image 10: The interface for managing AIP usage  limits displaying the default user rate limits and model overrides.](https://www.palantir.com/docs/resources/foundry/announcements/release-notes/2026-06-30-142701-language-model-service-screenshot-2026-06-30-at-12-00-44-am-pn.png)

_The interface for managing AIP usage & limits, displaying the default user rate limits and model overrides._

Palantir's built-in defaults remain the recommended and sensible option, and will continue to apply wherever no custom override is configured. We recommend starting with the defaults and adjusting only where your usage patterns call for it, and revisiting any custom limits as new models are released.

This feature is available now in the Resource Management application for all AIP enrollments. Learn more in the [LLM capacity management documentation](https://www.palantir.com/docs/foundry/aip/llm-capacity-management/).

### Your feedback matters

We want to hear about your experiences with AIP capacity management in the Palantir platform and welcome your feedback. Share your thoughts with Palantir Support channels or on our[Developer Community ↗](https://community.palantir.com/)using the[control-panel tag ↗](https://community.palantir.com/tag/control-panel/18).
