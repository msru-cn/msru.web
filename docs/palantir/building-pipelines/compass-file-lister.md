Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/compass-file-lister/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/building-pipelines/compass-file-lister/#compass-file-lister)Compass File Lister

Compass file lister is an automation that lists rids (resource identifiers) of resources in a given **input folder** into a Code repository. When run, a new pull request is opened on the **output repository** where it will either create the file for the first time, or override the existing one. The generated file will be stored by default at the following path: `compass-lister/rids.json`. Review [Create a connected flow](https://www.palantir.com/docs/foundry/building-pipelines/create-a-connected-flow/) for a step-by-step guide.

## [](https://www.palantir.com/docs/foundry/building-pipelines/compass-file-lister/#configuration-options)Configuration options

*   You can override the base path in output repository by setting the `generated_file_path` in the configuration block. If you set it to `transforms-python/generated`, the output will be written to `transforms-python/generated/rids.json`.

*   The resulting PR can be allowed to merge automatically if `merge_when_ready` is set to `true` in the configuration block. See your output repository settings to review the conditions that allow the PR to be merged.

### [](https://www.palantir.com/docs/foundry/building-pipelines/compass-file-lister/#configuration-example)Configuration example

```
{
  "generated_file_path": "transforms-python/generated",
  "merge_when_ready": true
}
```

[← PREVIOUS Create a connected flow](https://www.palantir.com/docs/foundry/building-pipelines/create-a-connected-flow/)

[NEXT Best practices / Recommended Project and team structure →](https://www.palantir.com/docs/foundry/building-pipelines/recommended-project-structure/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

