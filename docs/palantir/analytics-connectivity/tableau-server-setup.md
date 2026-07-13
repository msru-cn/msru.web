Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/analytics-connectivity/tableau-server-setup/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/analytics-connectivity/tableau-server-setup/#tableau-server-setup)Tableau Server setup

Follow the below steps to set up Tableau Server for publishing. These steps must be performed by an administrator. The JDBC driver (`.jar`) and Tableau connector (`.taco`) files are the same as for Tableau Desktop.

## [](https://www.palantir.com/docs/foundry/analytics-connectivity/tableau-server-setup/#step-1-install-foundry-datasets-jdbc-driver)Step 1: Install Foundry Datasets JDBC Driver

Navigate to [Downloads: Foundry Datasets JDBC driver](https://www.palantir.com/docs/foundry/analytics-connectivity/downloads/#foundry-datasets-jdbc-driver) to download the `.jar` file. Place it in the directory where Tableau Server looks for drivers. If using Windows, the location is `C:\Program Files\Tableau\Drivers`.

## [](https://www.palantir.com/docs/foundry/analytics-connectivity/tableau-server-setup/#step-2-install-the-tableau-connector-file)Step 2: Install the Tableau Connector File

Navigate to [Downloads: Tableau Connector](https://www.palantir.com/docs/foundry/analytics-connectivity/downloads/#foundry-datasets-tableau-connector) to download the `.taco` file. Place the file in `[Your Tableau Server Install Directory]/data/tabsvc/vizqlserver/Connectors`. By default, on Windows this is `C:\ProgramData\Tableau\Tableau Server\data\tabsvc\vizqlserver\Connectors`.

Alternatively, you can create a new directory to store connectors, then configure Tableau Server to use that directory by running `tsm configuration set -k native_api.connect_plugins_path -v C:/tableau_connectors`. Then, place the `.taco` file there instead.

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/tableau-server-setup/#optional-step-3-setup-oauth-for-desktop-and-server)(Optional) Step 3: Setup OAuth for Desktop and Server

If you would like report creators to be able to authenticate via OAuth on Tableau Desktop and publish reports using OAuth, this must be configured. See [Tableau OAuth: Setup Guide](https://www.palantir.com/docs/foundry/analytics-connectivity/tableau-oauth-setup/) for more information.

### [](https://www.palantir.com/docs/foundry/analytics-connectivity/tableau-server-setup/#step-4-restart-tableau-server)Step 4: Restart Tableau Server

Every time the connector file is changed, you must restart Tableau Server.

[← PREVIOUS Getting started](https://www.palantir.com/docs/foundry/analytics-connectivity/tableau-getting-started/)

[NEXT OAuth setup →](https://www.palantir.com/docs/foundry/analytics-connectivity/tableau-oauth-setup/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

