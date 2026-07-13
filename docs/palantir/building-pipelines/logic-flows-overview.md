Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/logic-flows-overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/logic-flows-overview/#logic-flows-sunset)Logic Flows [Sunset]

Logic Flows allow you to automate common workflows in Foundry. Logic Flows integrate with Foundry build and scheduling infrastructure to incorporate them into your data pipelines.

Sunset

As of August 2024, Logic Flows is in a [sunset](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) stage and should not be used for new development.

Sunset

Logic Flows is in the [sunset](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development and will be deprecated at a future date. Full support remains available. We recommend migrating your workflows to other applications and tools to serve your use case purposes:

*   **AIP Logic:** Use the power of LLMs to automate and support critical tasks, including connecting key information from unstructured inputs to your Ontology, resolving scheduling conflicts, optimizing asset performance by finding the best allocation, reacting to disruptions in your supply chain, and more.
*   **Actions:** Build automated transactions to change object properties based on the logic and criteria you define.

## [](https://www.palantir.com/docs/foundry/building-pipelines/logic-flows-overview/#core-concepts)Core concepts

An **automation** is a script interacting with Foundry service APIs using Builds intended to replace manual repeatable actions in the platform. It acts like other jobs in Foundry, except it doesn't use datasets as inputs or outputs. Palantir maintains a curated library of automations.

Automations take resources as _parameters_ and a JSON _configuration_.

Specific instances of automations are called **connected flows**. A connected flow is created with a project, parameters, and configuration.

Connected flows:

*   Are defined and executed on a single [project](https://www.palantir.com/docs/foundry/compass/move-and-share-resources/)
*   Run according to parameters and configuration, validated when a connected flow is created
*   Can be run as part of a [schedule](https://www.palantir.com/docs/foundry/data-integration/schedules/)
*   Can be run manually through Logic Flows UI, Data Lineage or Builds application
*   Do not store information between runs, therefore creating a new connected flow will not change the outcome of upcoming runs
*   Cannot be edited
*   Can be archived

## [](https://www.palantir.com/docs/foundry/building-pipelines/logic-flows-overview/#available-automations)Available automations

*   [**Compass Files Lister**](https://www.palantir.com/docs/foundry/building-pipelines/compass-file-lister/)

[← PREVIOUS Scheduling / Parameterization](https://www.palantir.com/docs/foundry/building-pipelines/parameterization/)

[NEXT Create a connected flow →](https://www.palantir.com/docs/foundry/building-pipelines/create-a-connected-flow/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

