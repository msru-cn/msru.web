Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#analysis-resources)Analysis resources

AIP Analyst lets you save an analysis as a [Compass resource](https://www.palantir.com/docs/foundry/compass/overview/), so you can return to your work, share it with collaborators, and organize it alongside your other Foundry projects.

Analyses are **dynamic**, meaning they stay current with your data. When you reopen an analysis, AIP Analyst re-runs the agent's tools against the latest state of your Ontology, so the results always reflect the current truth and respect each viewer's permissions.

To support this behavior, an analysis stores the conversation state needed to recreate the analysis: your messages, the tools called, and the referenced resources. It does not store tool results or agent responses.

## [](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#review-saved-content)Review saved content

Before saving, the save dialog includes a **Review** panel that lets you preview the content that will be stored. It splits the analysis into two views:

*   **Messages and tools:** The user messages and tool calls the agent generated during the session.
*   **References:** The Foundry resources the agent had access to during the analysis, such as object sets, datasets, and functions.

![Image 3: The save dialog Review panel.](https://www.palantir.com/docs/resources/foundry/aip-analyst/aip-analyst-save-review.png)

## [](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#per-analysis-settings)Per-analysis settings

Settings travel with each saved analysis. When you save, AIP Analyst records your [analysis settings](https://www.palantir.com/docs/foundry/aip-analyst/using-aip-analyst/#settings), model choice, and enabled tools, so reopening the analysis restores the same configuration.

## [](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#permissions)Permissions

Saved analyses follow the standard [Compass permissions model](https://www.palantir.com/docs/foundry/compass/move-and-share-resources/).

Opening an analysis resource does not grant access to every resource referenced by that analysis. When an analysis loads, AIP Analyst checks the viewer's permissions for each referenced resource. References the viewer cannot access may show an error or be skipped.

If your enrollment uses [classification-based access controls](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/), the save dialog will prompt you to apply classification markings to the analysis before saving.

## [](https://www.palantir.com/docs/foundry/aip-analyst/analysis-resources/#admin-configuration)Admin configuration

Analysis saving can be disabled at the enrollment level from Control Panel. AIP Analyst checks the enrollment of each user's **primary organization** to determine whether saving is available. When analysis saving is disabled, AIP Analyst hides the analysis sidebar and resource header, and users cannot create or open analysis resources from AIP Analyst.

![Image 4: The AIP Analyst analysis saving Control Panel setting.](https://www.palantir.com/docs/resources/foundry/aip-analyst/aip-analyst-control-panel.png)

[← PREVIOUS Using AIP Analyst](https://www.palantir.com/docs/foundry/aip-analyst/using-aip-analyst/)

[NEXT Workshop widget →](https://www.palantir.com/docs/foundry/aip-analyst/workshop-widget/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

