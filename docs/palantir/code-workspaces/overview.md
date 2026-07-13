Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-workspaces/overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-workspaces/overview/#code-workspaces)Code Workspaces

Code Workspaces brings the JupyterLab®, RStudio® Workbench, and VS Code third-party IDEs to Palantir Foundry, enabling users to boost their productivity and accelerate their data science and statistics workflows by using their preferred tools on the high-quality data of the Foundry Ontology. Code Workspaces containers are natively integrated with the rest of the Foundry ecosystem to combine familiar IDEs with the benefits of the Foundry platform, such as data security, branching, build scheduling, and resource management.

Code Workspaces gives platform administrators an easily-deployed, fully-managed, secure, and production-ready way to provide JupyterLab®, RStudio® Workbench, and VS Code to users with Foundry’s data governance and compliance with FedRAMP, GxP, and other standards built-in. With Code Workspaces, users can securely connect to existing internal systems and build analyses, transforms, models, applications, or entire workflows on data with Foundry’s access controls and data permissioning.

## [](https://www.palantir.com/docs/foundry/code-workspaces/overview/#key-features)Key features

Key features of Code Workspaces include:

*   **Security:** Code Workspaces is built on the core components of [Foundry security](https://www.palantir.com/docs/foundry/security/overview/) that underpin the platform as a whole, like robust permissions and granular access controls. This provides Foundry’s security model to the third-party IDEs available in Code Workspaces. For example, restricting access to a dataset in Foundry will restrict it for Code Workspaces IDEs as well, ensuring consistent permissions across tools.
*   **Customizable environments:** Code Workspaces allows users to define custom environment profiles and increase or decrease the compute resources of their workspace as desired.
*   **Git workflow support:** Code Workspaces are backed by the [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/) infrastructure, which provides industry-standard version control features like branching, merging, and commit history. These features enable multiple users to operate in the same workspace more easily and safely.
*   **Applications:** Code Workspaces currently supports [Dash ↗](https://plotly.com/dash/) and [Streamlit ↗](https://streamlit.io/) for Python applications and [Shiny® ↗](https://shiny.rstudio.com/) for R applications. Users can create application workflows directly in Code Workspaces with Foundry’s version control, branching, and data governance features built-in.
*   **Model integration:** Users can create model assets from within a Code Workspace and track these assets with [modeling objectives](https://www.palantir.com/docs/foundry/model-integration/objectives/). Multiple models can be created from the same workspace.
*   **Transforms/build integration:** Code Workspaces serves as a development environment for transforms. Logic written in Code Workspaces can be published as data transformation pipelines and seamlessly integrates with Foundry's [data integration](https://www.palantir.com/docs/foundry/data-integration/overview/) toolkit, including builds, schedules, data lineage, and health checks. Code Workspaces supports both R transforms and Python/Jupyter® transforms.

## [](https://www.palantir.com/docs/foundry/code-workspaces/overview/#when-to-use-code-workspaces)When to use Code Workspaces

Foundry has a variety of applications you can use for analytical or coding purposes. For example, if you are an analyst, you may be best served by Contour, Foundry’s point-and-click low-code interface for dataset analysis.

If you need to write large-scale data pipelines, set up data connections, or work with streaming data, other Foundry tools have more functionality than Code Workspaces; for these use cases, we recommend using [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/), [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/), and [Foundry Streaming](https://www.palantir.com/docs/foundry/building-pipelines/streaming-overview/), respectively.

Specifically, Code Workspaces runs on a single node, while other Foundry applications leverage a Spark infrastructure. Thus, we recommend that users performing large-scale data transformations choose [Pipeline Builder](https://www.palantir.com/docs/foundry/pipeline-builder/overview/) or [Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/overview/) instead of Code Workspaces.

Code Workspaces is geared for building machine learning models or those familiar with working in JupyterLab® or RStudio® Workbench.

## [](https://www.palantir.com/docs/foundry/code-workspaces/overview/#learn-more)Learn more

Code Workspaces currently supports three environments: [JupyterLab®](https://www.palantir.com/docs/foundry/code-workspaces/jupyterlab/), [RStudio®](https://www.palantir.com/docs/foundry/code-workspaces/rstudio/), and [VS Code](https://www.palantir.com/docs/foundry/vs-code/overview/).

More information about Code Workspaces can be found in the [FAQ](https://www.palantir.com/docs/foundry/code-workspaces/code-workspaces-faq/).

[Get started using Code Workspaces with this tutorial.](https://www.palantir.com/docs/foundry/code-workspaces/getting-started/)

* * *

_RStudio® and Shiny® are trademarks of Posit™._

_Jupyter®, JupyterLab®, and the Jupyter® logos are trademarks or registered trademarks of NumFOCUS._

All third-party trademarks (including logos and icons) referenced remain the property of their respective owners. No affiliation or endorsement is implied.

[← PREVIOUS Custom application building / Custom Endpoints / Use custom endpoints in your applications](https://www.palantir.com/docs/foundry/custom-endpoints/use-custom-endpoints/)

[NEXT Getting started →](https://www.palantir.com/docs/foundry/code-workspaces/getting-started/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

