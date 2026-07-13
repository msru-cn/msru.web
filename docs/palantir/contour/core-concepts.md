Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/contour/core-concepts/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/contour/core-concepts/#core-concepts)Core concepts

## [](https://www.palantir.com/docs/foundry/contour/core-concepts/#paths)Paths

Contour is a tool for top-down analysis and data transformation and sharing your results with others. An _analysis_ in Contour consists of one or more analytical _paths_.

Each Contour _path_ should begin with a particular dataset you’re interested in; you can then add different Contour [_boards_](https://www.palantir.com/docs/foundry/contour/core-concepts/#boards) to visualize, filter, or transform the data. You can also bring in additional datasets and join them to your current set.

You can save the results of your path as a new, separate dataset in Foundry. The sequence of transformations you performed in the path is saved as a Foundry _job_, and is executed as part of the Foundry build system. This means that if one of the underlying datasets changes, or you change some part of the path, you can easily recompute your new dataset. (See [Builds](https://www.palantir.com/docs/foundry/data-integration/builds/) for more information on how Foundry manages data.)

You can also refresh a path from your analysis to get the latest version of its underlying datasets.

## [](https://www.palantir.com/docs/foundry/contour/core-concepts/#boards)Boards

Exploration and analysis in Contour are performed through the use of [_boards_](https://www.palantir.com/docs/foundry/contour/boards-overview/) in series. Some boards create charts or perform calculations, while others are used to manipulate your dataset by filtering, removing columns, and so on.

## [](https://www.palantir.com/docs/foundry/contour/core-concepts/#dashboards)Dashboards

With Contour, you can build [_dashboards_](https://www.palantir.com/docs/foundry/contour/dashboards-overview/) that display the results and findings of Contour analyses. These dashboards support chart-to-chart filtering, inline parameter references, a fullscreen presentation view, and PDF exports.

## [](https://www.palantir.com/docs/foundry/contour/core-concepts/#parameters)Parameters

Contour analysis [_parameters_](https://www.palantir.com/docs/foundry/contour/analysis-parameterize/) allow you to easily switch between different views of the data and results. After defining parameters, you can use them in your analytical paths and expose them in dashboard mode. This allows end users of a dashboard to interact live with the data and results presented in the dashboard.

[← PREVIOUS Getting started](https://www.palantir.com/docs/foundry/contour/getting-started/)

[NEXT FAQ →](https://www.palantir.com/docs/foundry/contour/faq/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

