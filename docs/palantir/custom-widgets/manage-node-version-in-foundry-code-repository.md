Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-widgets/manage-node-version-in-foundry-code-repository/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-widgets/manage-node-version-in-foundry-code-repository/#manage-nodejs-version-in-a-foundry-code-repository)Manage Node.js version in a Foundry code repository

Foundry code repositories support [Node Version Manager (nvm) ↗](https://github.com/nvm-sh/nvm) to manage the Node.js version used in your project and CI. By adding an `.nvmrc` file to the root of your repository, you can specify which Node.js version your project uses.

If you do not use nvm, the CI will use the Node.js version specified in `.jemma/settings.sh` and the Foundry development environment will use version `18.20.8`.

## [](https://www.palantir.com/docs/foundry/custom-widgets/manage-node-version-in-foundry-code-repository/#add-an-nvmrc-file)Add an `.nvmrc` file

To set a Node.js version for your repository, create a file named `.nvmrc` in the root of your project. This file should contain only the version number of Node.js you want to use, prefixed with `v`, for example:

```
v24.13.0
```

You can view available Node.js versions by running `nvm ls-remote` in a terminal within your code repository.

## [](https://www.palantir.com/docs/foundry/custom-widgets/manage-node-version-in-foundry-code-repository/#use-the-specified-version)Use the specified version

After adding the `.nvmrc` file, run the following command in the terminal to switch to the version defined in the file:

Copied!

```bash
1nvm install
```

## [](https://www.palantir.com/docs/foundry/custom-widgets/manage-node-version-in-foundry-code-repository/#configure-ci-to-use-the-nvmrc-version)Configure CI to use the `.nvmrc` version

To ensure your CI builds use the same Node.js version specified in your `.nvmrc` file, update the `.jemma/settings.sh` file in your repository.

Replace the existing `NODE_INSTALLATION_VERSION` export with the following line, which reads the version directly from your `.nvmrc` file:

Copied!

```bash
1export NODE_INSTALLATION_VERSION=$(sed 's/^v//' "$(dirname "${BASH_SOURCE[0]}")/../.nvmrc")
```

With this change, you only need to update the `.nvmrc` file to change the Node.js version for both your Foundry development and CI environments.

[← PREVIOUS Enable additional iframe attributes](https://www.palantir.com/docs/foundry/custom-widgets/iframe-attributes/)

[NEXT Troubleshooting →](https://www.palantir.com/docs/foundry/custom-widgets/troubleshooting/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

