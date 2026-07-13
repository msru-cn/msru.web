Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#phase-4-roles-and-responsibilities)Phase 4: Roles and responsibilities

The following are new roles and responsibilities for Phase 4 of the Foundry Program team, in addition to the roles established in [Phase 1](https://www.palantir.com/docs/foundry/foundry-adoption/phase-1-roles/), [Phase 2](https://www.palantir.com/docs/foundry/foundry-adoption/phase-2-roles/), and [Phase 3](https://www.palantir.com/docs/foundry/foundry-adoption/phase-3-roles/).

## [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#production-engineer)Production Engineer

### [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#responsibilities)Responsibilities

*   Own production pipelines; manage the release process to ensure that production pipelines adhere to the organization's standards and execute reliably.
*   Collaborate closely with SMEs to address any requested changes to the Ontology and intake feedback on pipeline performance and usability in production workflows.
*   Own the approval process of Pull Requests (PRs) into the master branch of the production pipeline, and manage approvals to run pipeline builds on the master branch.
*   Work with Pipeline and Data Source Developers to define health checks across key datasets and implement continuous monitoring of the health checks across releases.
*   The Production Engineer fundamentally owns the monitoring of the healthy execution of the production pipeline. This includes monitoring of data refresh on different sources, execution of pipeline builds, and assisting to triage support requests when applicable.

### [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#profile-and-required-skills)Profile and required skills

*   Data engineering skills (SQL, Python, PySpark/Spark)
*   Knowledge of data cleaning and quality best practices
*   Knowledge of version control best practices
*   Familiarity with agents / VMs / connecting systems

### [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#relevant-foundry-applications-and-resources)Relevant Foundry applications and resources

*   [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/)
*   [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/)
*   [Data Health](https://www.palantir.com/docs/foundry/health-checks/overview/)
*   [Code Workbook](https://www.palantir.com/docs/foundry/code-workbook/overview/)
*   [Data Lineage](https://www.palantir.com/docs/foundry/data-lineage/overview/)
*   [Foundry Data Integration](https://www.palantir.com/docs/foundry/data-integration/overview/)

## [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#pipeline-developer)Pipeline Developer

### [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#responsibilities-1)Responsibilities

*   Build a common ontological layer that provides data assets for use by all use cases.
*   Define this common ontological layer and build the transformations required to take data from the source structure to the ontology structure.
*   Work closely alongside Production Engineers and Ontology Managers to implement the ontological layer that is designed by Ontology Managers and is leveraged in the data provided to use case teams.

### [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#profile-and-required-skills-1)Profile and required skills

*   Data engineering skills (SQL, Python, PySpark/Spark)
*   Knowledge of data cleaning and quality best practices
*   Knowledge of version control best practices
*   Familiarity with agents / VMs / connecting systems

### [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#relevant-foundry-applications-and-resources-1)Relevant Foundry applications and resources

*   [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/)
*   [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/)
*   [Data Health](https://www.palantir.com/docs/foundry/health-checks/overview/)
*   [Code Workbook](https://www.palantir.com/docs/foundry/code-workbook/overview/)
*   [Data Lineage](https://www.palantir.com/docs/foundry/data-lineage/overview/)
*   [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/)
*   [Object Explorer](https://www.palantir.com/docs/foundry/object-explorer/overview/)
*   [Foundry Data Integration](https://www.palantir.com/docs/foundry/data-integration/overview/)

## [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#object-view-developer)Object View Developer

### [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#responsibilities-2)Responsibilities

*   Object View Developers develop object views based on the Ontology.
*   Intake requests from platform management, use case teams, and even business owners and end users for new features within object views, as well as new object views for new objects within the Ontology. Work closely with these teams to understand business requirements and ensure maximum utility for the object views.
*   Collaborate heavily with Ontology Managers to identify what objects and object views are expected to be built, and what backing datasets are required to create them.
*   Work with Production Engineers and Pipeline Developers to create processes for information sharing and bilateral awareness of development initiatives.
*   Build out prototypical views in Contour for eventual promotion to the production object view.
*   Build a process for how to make changes to ontology objects and object views to enable scaling to multiple developers and to provide visibility into object view development requirements, constraints, and best practices.

### [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#profile-and-required-skills-2)Profile and required skills

*   Data engineering skills (SQL, Python, PySpark/Spark)
*   Knowledge of version control best practices
*   Database knowledge
*   Business domain knowledge
*   Project management and change management skills
*   Proven ability to write comprehensive technical documentation
*   Ability to communicate between technical and non-technical stakeholders

### [](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4-roles/#relevant-foundry-applications-and-resources-2)Relevant Foundry applications and resources

*   [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/)
*   [Object Explorer](https://www.palantir.com/docs/foundry/object-explorer/overview/)
*   [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/)
*   [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/)
*   [Foundry Ontology Overview](https://www.palantir.com/docs/foundry/ontology/overview/)

[← PREVIOUS Phase 4 overview](https://www.palantir.com/docs/foundry/foundry-adoption/phase-4/)

[NEXT Program governance / Governance processes →](https://www.palantir.com/docs/foundry/foundry-adoption/governance-processes/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

