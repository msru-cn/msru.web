Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-repositories/navigation/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#navigation)Navigation

There are five different tabs that you can select at the top of the Code Repositories interface:

1.   [Code tab](https://www.palantir.com/docs/foundry/code-repositories/navigation/#code-tab)
2.   [Branches tab](https://www.palantir.com/docs/foundry/code-repositories/navigation/#branches-tab)
3.   [Pull requests tab](https://www.palantir.com/docs/foundry/code-repositories/navigation/#pull-requests-tab)
4.   [Checks tab](https://www.palantir.com/docs/foundry/code-repositories/navigation/#checks-tab)
5.   [Settings tab](https://www.palantir.com/docs/foundry/code-repositories/navigation/#settings-tab)

## [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#code-tab)Code tab

![Image 19: code-view](https://www.palantir.com/docs/resources/foundry/code-repositories/code-view.png)

1.   [In-App Help](https://www.palantir.com/docs/foundry/code-repositories/navigation/#in-app-help)
2.   [Branch Options](https://www.palantir.com/docs/foundry/code-repositories/navigation/#branch-options)
3.   [Code Editor Options](https://www.palantir.com/docs/foundry/code-repositories/navigation/#code-editor-options)
4.   [File Editor](https://www.palantir.com/docs/foundry/code-repositories/navigation/#file-editor)
5.   [Helper Panels](https://www.palantir.com/docs/foundry/code-repositories/navigation/#helper-panels)
6.   [Status bar](https://www.palantir.com/docs/foundry/code-repositories/navigation/#status-bar)

### [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#in-app-help)In-App help

In the **Code** tab, you can click the ![Image 20: help](https://www.palantir.com/docs/resources/foundry/code-repositories/help.png?width=25) button to start a step-by-step walkthrough that guides you through the core functionalities available in your Code Repository. The in-app help is currently only available in the **Code** view.

To expose keyboard shortcuts via the command palette, use the F1 key in Windows or Fn+F1 on macOS:

![Image 21: command](https://www.palantir.com/docs/resources/foundry/code-repositories/command.png)
### [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#branch-options)Branch options

Use the dropdown branch menu to select one of your existing sandbox branches to work in. Alternatively, click the ![Image 22: new-branch](https://www.palantir.com/docs/resources/foundry/code-repositories/new-branch.png?width=35) icon to create a new sandbox branch which contains a copy of the code on an existing branch. To edit code in your repository, you must work in a sandbox branch — protected branches cannot be directly edited.

You can choose between a **Code Repositories branch** and, for supported repository types, a **Global branch**. Global branches are supported in **Python Transforms** and **TypeScript v1** repositories, and can contain changes across multiple Palantir applications. [Learn more about global branches](https://www.palantir.com/docs/foundry/global-branching/overview/).

Global branches must be based on the main branch of the repository, while Code Repositories branches can be based on any branch.

![Image 23: Branch creation dialog in Code Repositories showing a choice between Global and Code Repositories branches.](https://www.palantir.com/docs/resources/foundry/code-repositories/global-or-code-repo-branch-creation.png?width=500)
### [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#code-editor-options)Code editor options

As you write and edit code in your repository, you can do the following:

*   Click the ![Image 24: preview](https://www.palantir.com/docs/resources/foundry/code-repositories/preview.png?width=106) button to run the Transform on a sample of the input datasets. This is a quick way to preview your code changes on real data.
*   Click the ![Image 25: test](https://www.palantir.com/docs/resources/foundry/code-repositories/test.png?width=80) button to run all unit tests defined in the current file. See [Python Tests](https://www.palantir.com/docs/foundry/transforms-python/unit-tests/) or [Java Tests](https://www.palantir.com/docs/foundry/transforms-java/unit-tests/) for information about how to add unit tests to your repository.
*   Click the ![Image 26: commit](https://www.palantir.com/docs/resources/foundry/code-repositories/commit.png?width=103) button to commit any changes in your sandbox branch. Once you commit changes, automatic checks run on your code.
*   If you select a dataset source file (a file that defines a transformation, see e.g. [Python Transforms](https://www.palantir.com/docs/foundry/transforms-python/transforms/)), you can click the ![Image 27: build](https://www.palantir.com/docs/resources/foundry/code-repositories/build-button.png?width=86) button to build a new version of your output dataset after running automatic checks on your code. Clicking the button will trigger a build on _all output datasets of the current file_; if the current file does not generate any datasets, no build is triggered.
*   Click the ![Image 28: propose-changes](https://www.palantir.com/docs/resources/foundry/code-repositories/propose-changes.png?width=166) button to create a new _Pull request_ containing your changes. This allows others to review and comment on your code before merging it into the main code.
*   Click on the **...** button to access several additional actions: 
    *   **Merge:** Merge another branch into your current branch.
    *   **Reset:** Reset the contents of all files to match the latest commit on your remote branch. This will clear any changes that have not yet been committed on your branch.
    *   **Upgrade:** Upgrade your branch to the latest language versions.

### [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#file-editor)File editor

Click the ![Image 29: new-file-button](https://www.palantir.com/docs/resources/foundry/code-repositories/new-file-button.png?width=28) icon to create a new file, folder, or sub-project. Select the “New sub-project” option if you want to add another language-specific sub-project to your Code Repository.

### [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#helper-panels)Helper panels

**Foundry Explorer Helper**

The **Foundry Explorer** helper is a file navigation interface that lets you quickly browse all files and folders. Once you select a specific dataset, you can click “Open” to view the full dataset.

**Problems Helper**

The **Problems** helper tells you about any issues detected in your code. Click on a specific issue listed here to open up the problematic code.

**Debugger Helper**

The **Debugger** allows you to examine your transform behavior while it runs (see [Debug Transforms](https://www.palantir.com/docs/foundry/code-repositories/debug-transforms/)).

**Preview Helper**

The **Preview** helper lets you run your code on a limited sample of the input datasets to quickly preview the code without committing your changes (see [Preview Transforms](https://www.palantir.com/docs/foundry/code-repositories/preview-transforms/)).

**Tests Helper**

When your repository contains unit tests (see [Python Tests](https://www.palantir.com/docs/foundry/transforms-python/unit-tests/) and [Java Tests](https://www.palantir.com/docs/foundry/transforms-java/unit-tests/)), the **Tests Helper** lets you run those tests and displays their results.

**File Changes Helper**

The **File Changes** helper can be used to view any uncommitted changes to the current file, as well as compare previous versions of the file.

**Build Helper**

The **Build** helper lets you trigger dataset builds and view the progress for your builds. Once you select a dataset source file, you can click the build button to build a new version of your output dataset as well as run automatic checks on your code. You can then view the progress of the running tasks in the **Build** helper.

Clicking the **Build** button at the top right corner of the Code Repositories interface is equivalent to triggering a build from the **Build** helper.

**Docs Helper**

The **Docs** helper contains references for the available languages that you can write code in. For more detailed language-specific documentation that isn’t available in the in-product documentation, refer to the [supported languages](https://www.palantir.com/docs/foundry/building-pipelines/supported-languages/).

**SQL Scratchpad**

The **SQL** helper lets you quickly test out SQL queries. Write a SQL query and click ![Image 30: sql-run-file](https://www.palantir.com/docs/resources/foundry/code-repositories/sql-run-file.png?width=60) to preview the results of your query. You can also test out an existing query you’ve written in your repository by selecting the appropriate `.sql` file and clicking ![Image 31: sql-preview-file](https://www.palantir.com/docs/resources/foundry/code-repositories/sql-preview-file.png?width=110).

To view queries marked as favorites, go to the ![Image 32: sql-tab2](https://www.palantir.com/docs/resources/foundry/code-repositories/sql-tab2.png?width=25) tab. To view a history of queries ran in the **SQL** helper, go to the ![Image 33: sql-tab3](https://www.palantir.com/docs/resources/foundry/code-repositories/sql-tab3.png?width=25) tab.

To access a specific branch of an input dataset in SQL Scratchpad, you prepend the name of the branch to the query: e.g. `SELECT * FROM `branch_A`.`/path/to/dataset``. If no branch is specified it will default to `master`.

### [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#status-bar)Status bar

The status bar provides information on the state of the environment and checks results. Information you can find in the status bar includes:

*   **Code Assist state** - Code Assist is essential for detecting problems in your code and running previews. You can write code without Code Assist, but will need it to be up and running to complete your work. Hover over the Code Assist status you can get details on the initialization progress. If Code Assist fails to initialize, raise a support request.
*   **Problems** - When problems are detected in your code, an indication appears on the left side of the status bar. Click on the indication to open the Problems helper.
*   **Checks status** - The checks status is displayed on the right side of the status bar. More details of checks are in the [Checks tab](https://www.palantir.com/docs/foundry/code-repositories/navigation/#checks-tab).
*   **File saving** - After any change, the file saving status displays when the automatic save progress.

## [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#branches-tab)Branches tab

This section summarizes how to create new branches and create new Pull requests in the **Branches** tab. These functionalities are also available in the [Code tab](https://www.palantir.com/docs/foundry/code-repositories/navigation/#code-tab).

In the **Branches** tab, you can see a list of branches existing in your Code Repository — this includes your own branches as well as other users’ branches. Click the ![Image 34: new-branch2](https://www.palantir.com/docs/resources/foundry/code-repositories/new-branch2.png?width=100) button to create a new sandbox branch which contains a copy of the code on a specific branch.

![Image 35: branch-view](https://www.palantir.com/docs/resources/foundry/code-repositories/branch-view.png)

Each listed branch contains a summary with the following available functionalities:

*   The “Checks” column indicates whether or not the automatic code checks have passed for a branch.
*   The “Pull request” column tells you about any existing _Pull requests_ in a branch and lets you create new _Pull requests_. To create a new _Pull request_ that contains the changes on a branch, click the “Propose changes” button. This will create a new _Pull request_ for merging your changes into the _master_ branch by default. If you want to merge your changes into a branch other than _master_, select a different branch from the dropdown menu. If you don’t see the button to create a new _Pull request_, it means that a _Pull request_ already exists for a branch. Click on the “Open” / “Closed” / “Merged” button to open the full _Pull request_.
*   Click “View code” next to a branch name to view the code on that branch.
*   To delete a branch, click the ![Image 36: trash](https://www.palantir.com/docs/resources/foundry/code-repositories/trash.png?width=25) icon. **You should not delete any branches that you did not create. This can result in lost work for others.**

### [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#tags)Tags

The branches tab also lets you access a list of **tags**, which are like immutable branches. A tag can be used to mark a significant version of the code for future reference by giving it a version number or name. To create a new tag, navigate to the tags section of the branches tab and click the "New Tag" button. A tag can be created from the current version of a branch, or from any arbitrary commit.

![Image 37: create-tag-dialog](https://www.palantir.com/docs/resources/foundry/code-repositories/create-tag-dialog.png)

To enforce that all tag names follow a specific naming convention, you can add a `tagNameValidation` configuration block to a file called `repoSettings.json` at the root of the repository, e.g.: "tagNameValidation": { "regex": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(-rc\\d+)?$", "errorMessage": "Tag name must have the format x.x.x or x.x.x-rcx." }

For more information about the recommended git development workflow, refer to the [Developer Best Practices](https://www.palantir.com/docs/foundry/building-pipelines/development-best-practices/).

## [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#pull-requests-tab)Pull requests tab

This section summarizes how to create new Pull requests in the **Pull requests** tab. This functionality is also available in the [Code tab](https://www.palantir.com/docs/foundry/code-repositories/navigation/#code-tab).

In the **Pull requests** tab, you can find information about _Pull requests_ in your Code Repository. A _Pull request_ lets users view a history of the changes on your branch and review your code on a line-by-line basis before merging your changes. Any time you want to merge the changes on your branch into the main code, you should create a new _Pull request_.

Click the ![Image 38: new-pull-request](https://www.palantir.com/docs/resources/foundry/code-repositories/new-pull-request.png?width=100) button to create a new _Pull request_. By default, the new _Pull request_ created will merge your changes into the main branch of your repository (this is usually the _master_ branch). Select which branch you want to base your new _Pull request_ off of.

### [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#filtering-pull-requests)Filtering pull requests

You can switch between a list of open and closed _Pull requests_ by clicking the "Open" / "Closed" button at the top of the pull requests list, and use the search bar to further filter the list based on title or author.

![Image 39: pull-requests-list](https://www.palantir.com/docs/resources/foundry/code-repositories/pull-requests-list.png)

### [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#reviewing-pull-requests)Reviewing pull requests

Click on one of the _Pull requests_ to review the proposed code changes line-by-line and add comments. Depending on the repository settings, each _Pull request_ may require at least one approving review before they can be merged.

When reviewing changes to Transforms code, you can also check [how these changes affect your datasets](https://www.palantir.com/docs/foundry/code-repositories/analyze-impact/).

## [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#checks-tab)Checks tab

In the **Checks** tab, you can view a summary of running and completed checks on each branch. Use the dropdown branch menu to select a different branch. Click on a specific check to view more detailed information.

![Image 40: checks-view](https://www.palantir.com/docs/resources/foundry/code-repositories/checks-view.png)

The Checks tab will also include the output of any unit tests that have been defined for your repo. You can define unit tests for [Python](https://www.palantir.com/docs/foundry/transforms-python/unit-tests/) and [Java](https://www.palantir.com/docs/foundry/transforms-java/unit-tests/).

If AIP is enabled on your stack, the [error enhancer widget](https://www.palantir.com/docs/foundry/code-repositories/aip-features/#ai-error-enhancer) complements the detail view of a failed check to help you better understand and resolve issues that arise.

![Image 41: Animated screenshot showing error enhancer in action in Code Repositories](https://www.palantir.com/docs/resources/foundry/code-repositories/error-enhancer-in-authoring.gif)

## [](https://www.palantir.com/docs/foundry/code-repositories/navigation/#settings-tab)Settings tab

In the Settings tab, code authors can configure their personal editor preferences and repository administrators can control the repository's behavior and policies. To learn more about the Settings tab, see [Administering Code Repositories](https://www.palantir.com/docs/foundry/code-repositories/admin-overview/).

Most options in the **Settings** tab are aimed for administrators and will be available only to users with the appropriate permissions (by default, repository owners).

[← PREVIOUS Python transforms [Legacy]](https://www.palantir.com/docs/foundry/code-repositories/legacy-editing/)

[NEXT Configuration / Configure Code Repositories settings in Control Panel →](https://www.palantir.com/docs/foundry/code-repositories/configure-repositories-in-control-panel/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

