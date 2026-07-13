Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-rstudio-license/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-rstudio-license/#configure-rstudio-license)Configure RStudio® license

Code Workspaces uses RStudio® Workbench, which requires a corresponding operational license. To enable RStudio® Workbench, Organization administrators should first reach out to Posit™ to either obtain a Posit™ Workbench license for Foundry or to confirm that an existing license is sufficient. The license must then be added to Foundry so that the application can be whitelisted.

If you renewed or upgraded an existing RStudio® license, ensure uninterrupted access to your existing workspaces by updating the corresponding license in Foundry instead of creating a new one. The last validated license remains in effect until your update has been validated by Posit™.

## [](https://www.palantir.com/docs/foundry/administration/configure-rstudio-license/#add-rstudio-license)Add RStudio® license

To add an RStudio® license to Foundry, follow the instructions below:

1.   Navigate to the **License management** section in Control Panel.

![Image 5: License management section](https://www.palantir.com/docs/resources/foundry/administration/license-mgt-1.png)

1.   Provide information about the license (license key, number of named users, expiry date).

![Image 6: License information](https://www.palantir.com/docs/resources/foundry/administration/license-mgt-2.png)

1.   Follow the prompt to contact both Posit™ and Palantir to have the license whitelisted.

![Image 7: Contact for whitelisting license](https://www.palantir.com/docs/resources/foundry/administration/license-mgt-3.png)

1.   Once Posit™ confirms the specified license information is accurate and operational, Palantir will whitelist the license and enable RStudio® Code Workspaces in Foundry.

Foundry does not validate the license information but requires confirmation from Posit™ that it can be used. Foundry manages the license internally; if all the license seats have been used, the next new user will not be allowed to launch RStudio® in Foundry.

Access to a given license can be restricted to a subset of user groups from **License management**.

![Image 8: License approval pop-up displaying "currently pending approval from RStudio®" message](https://www.palantir.com/docs/resources/foundry/administration/license-mgt-group.png)

* * *

RStudio® and Shiny® are trademarks of Posit™.

All third-party trademarks (including logos and icons) referenced remain the property of their respective owners. No affiliation or endorsement is implied.

[← PREVIOUS Configure workspaces](https://www.palantir.com/docs/foundry/administration/configure-workspaces/)

[NEXT Configure remote Marketplace stores →](https://www.palantir.com/docs/foundry/administration/configure-remote-marketplace-stores/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

