Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-repositories/readme/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-repositories/readme/#documentation)Documentation

You can provide users with documentation on projects in Code Repositories by adding a README file. README files in Code Repositories support Markdown for flexible, easy-to-use formatting and styling.

Edit or add a README.md file to your repository to get started. This page contains information on additional features that can be used to customize a README file.

If a README file is insufficient for your documentation needs, you can create [custom documentation](https://www.palantir.com/docs/foundry/custom-docs/overview/) using Code Repositories that can be published as in-platform documentation.

## [](https://www.palantir.com/docs/foundry/code-repositories/readme/#features)Features

Code Repositories provides a number of formatting options for READMEs.

### [](https://www.palantir.com/docs/foundry/code-repositories/readme/#inline-image-previews)Inline image previews

You can display an image from your repository inline with the text of a Markdown file by using the following syntax:

`![File Name](/transforms-python/path/to/my/file.jpeg)`

In order to upload images to a code repository, you will need to [clone your repository locally](https://www.palantir.com/docs/foundry/transforms-python/local-development/), add the image files to the local repository, and then push the changes to the server.

### [](https://www.palantir.com/docs/foundry/code-repositories/readme/#mentioning-foundry-users)Mentioning Foundry users

To mention a Foundry user in your Markdown files, enter their username with the `@` symbol as a prefix. This will create a reference to the mentioned user and a direct link to their profile.

`@username`

### [](https://www.palantir.com/docs/foundry/code-repositories/readme/#referencing-foundry-resources)Referencing Foundry resources

You can reference any Foundry resource by pasting its Resource ID directly into the Markdown file for the README. Resources referenced like this will automatically be named and linked to the corresponding resource in platform.

`This repository will be deployed to ri.foundry.main.deployed-app.a00000aa-a000-000a-0000-000a0aa0a00a`

### [](https://www.palantir.com/docs/foundry/code-repositories/readme/#linking-to-files-in-the-repository)Linking to files in the repository

To create a link to a file within your repository, use the `repo://` protocol followed by the file path; for example, `repo://transforms-python/src/myproject/datasets/examples.py`. Files referenced like this will automatically open when clicked. This allows you to easily reference and navigate to other files within your repository.

### [](https://www.palantir.com/docs/foundry/code-repositories/readme/#syntax-highlighting)Syntax highlighting

README files support language syntax highlighting in code blocks in order to improve code legibility. To use syntax highlighting, specify the language after the opening code block delimiter as follows:

Copied!

```python
1def hello_world():
2    print("Hello, World!")
```

### [](https://www.palantir.com/docs/foundry/code-repositories/readme/#tables)Tables

You can also create tables using standard Markdown table syntax:

```
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
```

### [](https://www.palantir.com/docs/foundry/code-repositories/readme/#links)Links

URLs and email addresses in a README will be automatically converted into clickable links.

[← PREVIOUS Libraries](https://www.palantir.com/docs/foundry/code-repositories/libraries/)

[NEXT AIP features →](https://www.palantir.com/docs/foundry/code-repositories/aip-features/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

