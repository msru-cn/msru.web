Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-support-types/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/administration/configure-support-types/#configure-support-types)Configure support types

Use support types to tailor the [Issues application](https://www.palantir.com/docs/foundry/getting-help/issues/) to your workflows and operating model, making it easier for users to file tickets and reducing the risk of tickets going to the incorrect assignee.

To configure custom support types, open Control Panel and navigate to **Enrollment settings > Support > Support types** and select **Add**.

![Image 3: Support type creation form](https://www.palantir.com/docs/resources/foundry/administration/support-type-creation.png?width=600)
If you have not configured support types, users will be unable to file issues even if they have access to the Issues application.

![Image 4: Issue filing flow without support types.](https://www.palantir.com/docs/resources/foundry/administration/no-support-types.png?width=600)
## [](https://www.palantir.com/docs/foundry/administration/configure-support-types/#create-a-link-to-the-submit-issue-modal-with-the-support-type-pre-populated)Create a link to the Submit Issue modal with the support type pre-populated

You can create and share a link that opens the **Submit Issue** modal with a support type pre-populated. Append the `supportTypeRid` query parameter to the Issues application's `create` route:

`https://<FOUNDRY_URL>/workspace/issues-app/create?supportTypeRid=<supportTypeRid>`

As an example, you can embed a **Report an issue** button in a [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) application that passes the `create` route with the relevant `supportTypeRid` appended, enabling users to bypass manual support type selection when filing an issue. To find a support type's RID, navigate to **Enrollment settings > Support > Support types** in Control Panel.

[← PREVIOUS Configure documentation provider](https://www.palantir.com/docs/foundry/administration/configure-documentation-provider/)

[NEXT Configure support teams →](https://www.palantir.com/docs/foundry/administration/configure-support-teams/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

