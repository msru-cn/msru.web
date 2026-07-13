Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-widgets/publish/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-widgets/publish/#publish-a-widget-set)Publish a widget set

A widget set may be published through one of the following methods:

*   Manual upload of a .zip archive file in the user interface
*   CLI command from `@osdk/cli`
*   Foundry CI/CD for widget sets using Foundry Code Repositories

Publishing a new version of a widget set does not affect existing usages of widgets in the widget set. Host applications such as Workshop will not automatically display new changes until the applications have been configured to use the new published widget set version.

## [](https://www.palantir.com/docs/foundry/custom-widgets/publish/#build-a-project)Build a project

The instructions below to build a project are typically automated for CI/CD pipelines but must be followed when manually publishing a widget set.

Before starting, ensure you have followed the instructions in [set up a project](https://www.palantir.com/docs/foundry/custom-widgets/development/#set-up-a-project) to set up your `FOUNDRY_TOKEN` token environment variable. Run the following commands to install dependencies, lint your project for errors and create a production build of your widget set.

bash

Copied!

```bash
1npm install
2npm run lint
3npm run build
```

An example production build of a widget set in an output `dist/` folder looks like the following:

```
dist/
├── .palantir
│   └── widgets.config.json
├── assets
│   ├── allPaths-1o-wu5D1.js
│   ├── allPathsLoader-B5dDtRyf.js
│   ├── index-BKzgFDAn.js
│   ├── index-BvSuWPlB.js
│   ├── index-fzE76D9V.css
│   ├── index-JZHrjpfy.js
│   └── splitPathsBySizeLoader-BdSoFTZJ.js
└── index.html
```

A special `.palantir/widgets.config.json` manifest file describes the widgets contained in the build which is typically produced automatically from the project code using [`@osdk/widget.vite-plugin` ↗](https://www.npmjs.com/package/@osdk/widget.vite-plugin) when starting from project templates.

The version of the widget set to publish is included in this manifest file. When using `@osdk/widget.vite-plugin`, a `foundry.config.json` file in the project describes how the version is calculated in the `widgetSet.autoVersion` field. This may be `package-json` which reads the `version` field from `package.json`, or `git-describe` which calculates the version based on a git repository's tags and commits.

## [](https://www.palantir.com/docs/foundry/custom-widgets/publish/#publish-with-a-manual-upload-of-a-zip-archive-file-in-the-user-interface)Publish with a manual upload of a .zip archive file in the user interface

On your local machine, follow the instructions for [building a project](https://www.palantir.com/docs/foundry/custom-widgets/publish/#build-a-project). Create a .zip archive file containing the production build of your widget set, ensuring that there are no additional folders (such as the output `dist/` or equivalent folder).

The following code snippet creates an `asset.zip` archive file in the project root with the production build in a `dist/` folder using a bash terminal. Any suitable zip tool can be used for your operating system.

bash

Copied!

```bash
1cd dist/
2zip -r ../asset.zip .
```

Use the **Upload release** option on the custom widgets page for a widget set. Drag and drop the .zip archive file into the dialog and then select **Upload**.

![Image 3: The dialog for manually uploading a .zip archive file in the user interface.](https://www.palantir.com/docs/resources/foundry/custom-widgets/manual-ui-upload.png)

## [](https://www.palantir.com/docs/foundry/custom-widgets/publish/#publish-with-a-cli-command-from-osdkcli)Publish with a CLI command from `@osdk/cli`

The NPM package [`@osdk/cli` ↗](https://www.npmjs.com/package/@osdk/cli) helps automate the .zip archive file creation and publish step with a single command and can be configured in an external CI/CD pipeline such as GitHub Actions or CircleCI.

To publish from a terminal on your local machine, follow the instructions for [building a project](https://www.palantir.com/docs/foundry/custom-widgets/publish/#build-a-project).

Run the following CLI command from your terminal:

bash

Copied!

```bash
1npx @osdk/cli@latest widgetset deploy
```

An example output for publishing a production build with the version 1.0.0 in the manifest will look like the following:

bash

Copied!

```bash
1ℹ Palantir OSDK CLI 0.26.3
2
3ℹ Found version from manifest: 1.0.0
4◐ Zipping widget set files
5◐ Publishing widget set files
6ℹ Zipped 1.04 MiB total over 11 files
7✔ Publish complete
```

To publish from an external CI/CD pipeline, follow the provider's documentation to set up the workflow steps to build the project and run the `@osdk/cli` deploy command.

## [](https://www.palantir.com/docs/foundry/custom-widgets/publish/#publish-with-foundry-cicd)Publish with Foundry CI/CD

For widget sets using Foundry Code Repositories, Foundry CI/CD is automatically set up to build and publish the widget set on tag builds.

To create a new tag, you can use the platform user interface, or use standard `git` commands such as the following example:

Bash

Copied!

```bash
1git tag <x.y.z>
2git push origin tag
```

View the status of the tag build through the **Tags** tab in VS Code Workspaces or Code Repositories.

![Image 4: The status of a tag build in the Tags tab.](https://www.palantir.com/docs/resources/foundry/custom-widgets/tag-build.png)

[← PREVIOUS Develop a widget set](https://www.palantir.com/docs/foundry/custom-widgets/development/)

[NEXT Use Ontology SDK (OSDK) in a widget set →](https://www.palantir.com/docs/foundry/custom-widgets/use-osdk/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

