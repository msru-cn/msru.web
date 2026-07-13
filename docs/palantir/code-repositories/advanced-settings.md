Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-repositories/advanced-settings/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-repositories/advanced-settings/#advanced-repository-settings)Advanced repository settings

Most Code Repositories settings can be found in the [**Settings** tab](https://www.palantir.com/docs/foundry/code-repositories/admin-overview/). Some additional values are configured using the `repoSettings.json` file at the repository root. If the file does not exist, you can create a file named `repoSettings.json` at the repository root.

## [](https://www.palantir.com/docs/foundry/code-repositories/advanced-settings/#custom-tag-name-validation)Custom tag name validation

To enforce that all newly created tags in a repository follow a specific naming scheme in addition to the default constraints enforced by Code Repositories, you may configure a custom regular expression and an error message that is displayed to users if the regex is not satisfied. For example:

Copied!

```json
1"tagNameValidation": {
2    "regex": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(-rc\\d+)?$",
3    "errorMessage": "Tag name must have the format x.x.x or x.x.x-rcx"
4}
```

If you set a value for `tagNameValidation`, you must configure **both** a `regex` and an `errorMessage`.

## [](https://www.palantir.com/docs/foundry/code-repositories/advanced-settings/#pull-request-description-template)Pull request description template

To help maintain best practices when opening new pull requests, you can configure a description template that will be used to pre-populate the `Description` field when creating a pull request:

Copied!

```json
1"prDescriptionTemplate": "First line of the description template\nAnd another line with instructions"
```

## [](https://www.palantir.com/docs/foundry/code-repositories/advanced-settings/#output-dataset-path-for-new-transforms)Output dataset path for new transforms

By default, the templates for new transforms files use the file path as the initial output dataset path. For example, for a Python transform `/path/to/your/repository/transforms-python/src/myproject/datasets/name_of_file`. You can change this to a more convenient location, such as a specific folder in your project, by configuring an `outputPathPrefix`:

Copied!

```json
1"outputPathPrefix": "/My/Custom/Prefix"
```

With the above setting, the output dataset path will be set to `/My/Custom/Prefix/name_of_file` instead.

## [](https://www.palantir.com/docs/foundry/code-repositories/advanced-settings/#pull-request-validation-rules)Pull request validation rules

![Image 2: An example pull request validated against rules stored in repoSettings.json](https://www.palantir.com/docs/resources/foundry/code-repositories/pull-request-validation-example.png?width=500)
You can enforce rules for pull requests within a repository by adding `prValidation` entries to your `repoSettings.json` file. When a pull request is created, it will be validated against the `repoSettings.json` file on the base branch.

A pull request validation rule consists of a regular expression, a list of pull request fields to match the expression against, and an error message to render when a field does not comply with the rule.

## [](https://www.palantir.com/docs/foundry/code-repositories/advanced-settings/#example-reposettingsjson)Example: `repoSettings.json`

Copied!

```json
1{ 
2    "tagNameValidation": {
3        "regex": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(-rc\\d+)?$",
4        "errorMessage": "Tag name must have the format x.x.x or x.x.x-rcx"
5    },
6    "prDescriptionTemplate": "First line of the description template\nAnd another line with instructions",
7    "outputPathPrefix": "/My/Custom/Prefix",
8    "prValidation": [
9        {
10            "regex": "TEST-\\d{3}",
11            "fields": ["title", "branchName"],
12            "errorMessage": "This field must contain a valid TEST-XXX ticket, such as 'TEST-123'."
13        },
14        {
15            "regex": "This is the description",
16            "fields": ["description"],
17            "errorMessage": "Please enter 'This is the description' somewhere in the description."
18        }
19    ]
20}
```

[← PREVIOUS Ontology imports](https://www.palantir.com/docs/foundry/code-repositories/ontology-imports/)

[NEXT Compute Usage →](https://www.palantir.com/docs/foundry/code-repositories/compute-usage/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

