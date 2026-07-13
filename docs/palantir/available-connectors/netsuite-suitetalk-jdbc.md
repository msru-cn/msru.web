Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#oracle-netsuite-suitetalk)Oracle NetSuite SuiteTalk

Connect Foundry to Oracle NetSuite using the SuiteTalk framework and start syncing data from your NetSuite ERP to Foundry.

## [](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Exploration | 🟢 Generally available |
| Batch syncs | 🟢 Generally available |
| Incremental | 🟢 Generally available |

## [](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#setup)Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper right corner of the screen.
2.   Select **NetSuite SuiteTalk** from the available connector types.
3.   Follow the additional configuration prompts to continue the setup of your connector using the information in the sections below.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

### [](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#authentication)Authentication

The NetSuite SuiteTalk source uses [token-based authentication (TBA) ↗](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_4247329078.html#To-set-up-TBA-in-your-NetSuite-account%3A).

The token-based authentication feature must be enabled on your account. To enable TBA, see the [NetSuite documentation ↗](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/bridgehead_4253254429.html#procedure_4253064345).

#### [](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#configure-user-roles-and-permissions-in-netsuite)Configure user roles and permissions in NetSuite

Access control in NetSuite is configured via the assignment of roles to a user; each role is a collection of permissions that define what tasks the user can perform and what data they can access. We recommend the following configuration for the user that will connect to Foundry:

1.   Create a dedicated role with appropriate permissions.

    1.   From NetSuite’s tool bar, select **Setup**>**Users/Roles**>**Manage Roles**>**New** and provide an explicit name to the role. We recommend using `foundry-role`. 
        *   You can optionally tick the **Web Services only** configuration box.

    2.   Add system-wide permissions to the role by navigating to the bottom of the role page and selecting **Permissions**>**Setup**. The minimal required permissions you need to add are: 
        *   **Log In using access tokens**,
        *   **SOAP Web Services**,
        *   **Other Custom Fields**,
        *   **Custom Body Fields**,
        *   **Custom Item Fields**,
        *   Remember to **Save** the permissions.

    3.   Add table permissions to the role for tables you want to be able to query from Foundry by navigating to the bottom of the role page and selecting **Permissions**>**Lists**. Select the tables you want, select **Add** then **Save**.

2.   Assign the new role to a user.

    1.   From NetSuite’s tool bar, select **Setup**>**Users/Roles**>**Manage Users**. Select the user you want to use to connect to Foundry, and select **Edit**.
    2.   Navigate to the **Access** tab and make sure the **Give Access** checkbox is ticked.
    3.   In the **Roles** tab, select the newly created role (`foundry-role`) from the dropdown list, select **Add** and then **Save**.

To verify that you added the correct permissions, log in as the user you have assigned the new role to, and check that you can view all the data that you expect.

#### [](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#configure-integration-and-access-tokens-in-netsuite)Configure integration and access tokens in NetSuite

Integration records are used in NetSuite to manage connections to external systems. We recommend the following configuration to connect to Foundry:

1.   Create a new Integration record using TBA (see [more details ↗](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/bridgehead_4249032125.html#procedure_4253065190)). 
    1.   From NetSuite’s tool bar, select **Setup**>**Integration**>**Manage Integrations**>**New** and provide an explicit name to the integration. We recommend `foundry-integration`.
    2.   Make sure the **State** is **Enabled** and that only **Token-based Authentication** is ticked. All other boxes should be unticked.
    3.   After you **Save**, make a note of the **`CLIENT ID`** and **`CLIENT SECRET`**. You will need them to configure Foundry.

`CLIENT ID` and `CLIENT SECRET` will only be displayed the first time you save the integration record. To get new values, you must reset the `CLIENT ID` and `CLIENT SECRET`, which invalidates the previous values.

1.   Create and assign a TBA token. 
    1.   From NetSuite’s tool bar, select **Setup**>**User/Roles**>**Access Tokens**>**New**. 
        *   If you can't manage tokens for other users, navigate to the bottom-left **Settings** panel on NetSuite's homepage and select **Manage Access Tokens**.

    2.   Select the newly created **application** (`foundry-integration` in our example), the user to which you've assigned the newly created role (`foundry-role`), and the newly created role. 
        *   If you can't manage tokens for other users, your user will be selected by default. Make sure your user has the newly created role (`foundry-role`) assigned to it.

    3.   After you **Save**, make a note of the **`TOKEN ID`** and **`TOKEN SECRET`**. You will need them to configure Foundry.

`TOKEN ID` and `TOKEN SECRET` will only be displayed the first time you save the token. You will need to create a new token to get a new `TOKEN ID` and `TOKEN SECRET`.

[Learn more about token management in NetSuite. ↗](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4254975694.html)

### [](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#networking)Networking

The NetSuite SuiteTalk connector requires network access to the NetSuite instance to which you want to connect.

#### [](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#foundry-worker-connection)Foundry worker connection

If your connection runs on a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker), you will need to add the following [egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/) to the source:

*   `<ACCOUNT_ID>.suitetalk.api.netsuite.com` on port 443; you can find your account ID in the URL when connected to NetSuite.
*   `webservices.netsuite.com` on port 443.

If these egress policies do not exist, you can [request them](https://www.palantir.com/docs/foundry/data-connection/set-up-source/#configure-a-network-policy); otherwise you can [add them](https://www.palantir.com/docs/foundry/data-connection/set-up-source/#choose-your-network-policy-foundry-worker).

### [](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#connection-details)Connection details

| Option | Required? | Description |
| --- | --- | --- |
| `Account ID` | Yes | NetSuite Account ID, found as a prefix in your NetSuite's instance URL |
| `Client ID` | Yes | `CLIENT ID` copied when creating the [`foundry-integration`](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#configure-integration-and-access-tokens-in-netsuite) |
| `Client secret` | Yes | `CLIENT SECRET` copied when creating the [`foundry-integration`](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#configure-integration-and-access-tokens-in-netsuite) |
| `Access token` | Yes | `TOKEN ID` copied when creating the [TBA token](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#configure-integration-and-access-tokens-in-netsuite) |
| `Access token secret` | Yes | `TOKEN SECRET` copied when creating the [TBA token](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#configure-integration-and-access-tokens-in-netsuite) |

## [](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suitetalk-jdbc/#creating-a-sync)Creating a sync

The NetSuite SuiteTalk source can be [explored](https://www.palantir.com/docs/foundry/data-connection/source-exploration/) to discover tables and create new syncs. You can also [manually create new syncs](https://www.palantir.com/docs/foundry/data-connection/set-up-sync/) from the overview page of the source.

[← PREVIOUS NetSuite SuiteQL (JDBC)](https://www.palantir.com/docs/foundry/available-connectors/netsuite-suiteql-jdbc/)

[NEXT Oracle Sales →](https://www.palantir.com/docs/foundry/available-connectors/oracle-sales/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

