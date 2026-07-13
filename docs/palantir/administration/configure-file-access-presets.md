Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/#configure-file-access-presets)Configure file access presets

To configure file access presets, your enrollment must use both Foundry and Gotham. Contact Palantir Support with questions about enabling file access preset configuration if its extension is not available in Control Panel.

You can use the **Access presets & settings** extension to configure file access presets for your [Organization](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/#organizations) in [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/), granting users quick access to commonly used security settings when they create a file. Consisting of a title and optional description, file access presets can apply both [mandatory markings](https://www.palantir.com/docs/foundry/security/markings/) and [Classification-based Access Controls (CBAC)](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/) markings.

CBAC markings are not enabled by default on Foundry. Review the [existing documentation](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/) to learn more about the availability and use of CBAC markings.

![Image 6: The access preset extension in Control Panel is displayed.](https://www.palantir.com/docs/resources/foundry/administration/access_presets_extension.png)

To configure file access presets in the **Access presets & settings** extension, you must be able to execute the **Manage Auth Chooser Enterprise Presets** workflow as part of either the `Data governance officer` or `Organization administrator` role in Control Panel's **Organization permissions** extension. If you do not have access to a role with that workflow, then you will need to ask your Organization administrator to grant you access.

![Image 7: The Organization permissions extension in Control Panel displays members who can manage auth chooser enterprise presets to configure file access presets.](https://www.palantir.com/docs/resources/foundry/administration/access_presets_permissions.png)

## [](https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/#create-a-file-access-preset)Create a file access preset

To create a file access preset, select **New preset** to launch the **New access preset** popup window. Provide the preset with a **Name** and optionally enter a **Description** before you add the **Markings** the preset applies. Ensure you check **File preset** under **Can be used as** before selecting **Create access preset**.

![Image 8: The New access preset popup window is displayed.](https://www.palantir.com/docs/resources/foundry/administration/access_presets_creation.png)

If your environment uses CBAC, then the **New access preset** popup window will also enable you to add CBAC markings to your file access preset.

### [](https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/#set-a-default-preset-selection-ordering)Set a default preset selection ordering

Select **File preset settings** to configure the default selected preset ordering for users. The first preset that is visible to a user will be selected for them by default, but they can change the preset. Presets not visible to users due to a lack of relevant Marking permissions will be ignored in the ordering.

![Image 9: The Default selected file access preset popup window is displayed.](https://www.palantir.com/docs/resources/foundry/administration/access_presets_default_selection_order.png)

## [](https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/#file-access-preset-visibility)File access preset visibility

All users in your Organization can view the file access preset if they have the "Apply marking" permission on _all_ the Markings configured as part of the preset.

Guest members of your organization will not be able to view or apply presets configured for your organization. They will see presets configured for their primary organization.

## [](https://www.palantir.com/docs/foundry/administration/configure-file-access-presets/#apply-a-file-access-preset)Apply a file access preset

After you configure and save a file access preset, users in your Organization will be able to select the preset when setting the security of certain files created in Gotham.

![Image 10: A user applies a file access preset when creating a Gaia map in Gotham.](https://www.palantir.com/docs/resources/foundry/administration/access_presets_apply.png)

[← PREVIOUS Configure scoped sessions](https://www.palantir.com/docs/foundry/administration/configure-scoped-sessions/)

[NEXT Configure Workshop →](https://www.palantir.com/docs/foundry/administration/configure-workshop/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

