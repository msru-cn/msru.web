Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-repositories/configure-repositories-in-control-panel/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

# [](https://www.palantir.com/docs/foundry/code-repositories/configure-repositories-in-control-panel/#configure-code-repositories-settings-in-control-panel)Configure Code Repositories settings in Control Panel

You can configure many Organization-wide Code Repositories settings within [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/). To modify these settings, you will need the `User Experience Administrator`[role](https://www.palantir.com/docs/foundry/security/projects-and-roles/#roles).

![Image 2: The Code Repositories settings section in Control Panel.](https://www.palantir.com/docs/resources/foundry/code-repositories/control-panel-code-repositories.png)

## [](https://www.palantir.com/docs/foundry/code-repositories/configure-repositories-in-control-panel/#available-settings)Available settings

*   **Local development with the Palantir extension for Visual Studio Code:** When enabled, users from your organization will be able to clone code repositories and work on them locally using the [Palantir extension for VS Code](https://www.palantir.com/docs/foundry/palantir-extension-for-visual-studio-code/overview/). This setting is enabled by default.
*   **Local preview through the Palantir extension for Visual Studio Code:** When this setting is enabled, users from your organization can preview datasets locally. Local dataset preview involves downloading and temporarily storing parts of datasets to a user's machine. This setting is disabled by default. This setting is deprecated and is superseded by secure streaming preview via the Palantir extension for Visual Studio Code.
*   **Secure streaming preview via the Palantir extension for Visual Studio Code:** When this setting is enabled, users from your organization can preview datasets locally using the [secure streaming](https://www.palantir.com/docs/foundry/palantir-extension-for-visual-studio-code/security-considerations/#data-lifecycle-during-local-preview) preview implementation. Local dataset preview involves streaming parts of datasets to the system memory of a user's machine. This setting is enabled by default. This setting does not yet take effect and it will become effective after a platform intervention.
*   **Local development with the Palantir MCP Server:** Using Palantir MCP in your local IDE, such as Claude Code, GitHub Copilot, or Cursor, enables external AI systems to read data and metadata from Foundry and interact via AI-friendly API endpoints, using the permissions of the configured user token. Once data is accessed by an external system through Palantir MCP, the governance of its use shifts from Palantir to the external system. Data security will depend on your relationship with that external system. Using the Palantir MCP does not imply that a Palantir AI model will be used; the AI model provider is determined by the external system you connect to (for example, Microsoft for GitHub Copilot, Cursor for Cursor).

To preview locally, users must be allowed to do so through the above local preview settings and have `Download` operations on the previewed inputs. These are privileged operations that allow users to download entire datasets locally, and should be granted with caution. In cases where users cannot be granted this permission, the VS Code developer experience is still available through [Code Workspaces](https://www.palantir.com/docs/foundry/vs-code/overview/), which guarantees stricter data control. For more details, see the [security considerations](https://www.palantir.com/docs/foundry/palantir-extension-for-visual-studio-code/security-considerations/) for local preview.

You can learn more about local development, [previewing and debugging Python transforms](https://www.palantir.com/docs/foundry/transforms-common/local-preview/), and using the [Palantir extension](https://www.palantir.com/docs/foundry/palantir-extension-for-visual-studio-code/overview/) in our documentation.

[← PREVIOUS Navigation](https://www.palantir.com/docs/foundry/code-repositories/navigation/)

[NEXT FAQ →](https://www.palantir.com/docs/foundry/code-repositories/faq/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

