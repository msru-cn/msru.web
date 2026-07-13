Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/org-assignment/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#organization-assignment)Organization assignment

Users are assigned their primary Organization upon login. A user's primary Organization is determined in the Organization assignment section of the identity provider integration used to log in. If you have configured provider groups in the identity provider integration, these groups will be marked with one or more Organizations based on that section as well.

## [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#default-organization-or-advanced-rules)Default Organization or advanced rules

In most cases, all users logging in via a given identity provider integration should be assigned to a single Organization. This is achieved by selecting the **Default Organization** option. Provider groups, if configured, will also be marked with the same Organization as users.

Advanced rule creation can be used for more complex situations. It allows you to define a series of rules to assign the right Organization with an optional fallback. You can manage the rules for users and for provider groups separately.

![Image 6: Advanced rules selected](https://www.palantir.com/docs/resources/foundry/authentication/advanced-rules-selected.png)

Open the advanced rules editor by clicking **Manage** for either user or group rules.

### [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#define-organization-assignment-rules)Define Organization assignment rules

On the provider management page, expand the **Organization assignment** section. This allows you to determine which Organizations your users will be a member of when they log in.

For a simple SAML 2.0 integration, choose **Default Organization** and select your Organization in the dropdown, then save.

![Image 7: Org assignment](https://www.palantir.com/docs/resources/foundry/authentication/authentication-org-assignment.png)

### [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#user-rules)User rules

Organization assignment rules for users are configured by writing conditions that match a user’s attributes, internal groups, or provider groups. We strongly recommend using user attributes and/or provider group conditions rather than internal group conditions.

![Image 8: Advanced user rules editor](https://www.palantir.com/docs/resources/foundry/authentication/advanced-user-rules.png)

Before saving, you can validate these rules against an existing user. The test panel shows which rule the user matches and the organization to which they would be assigned. Note that only users who have logged in with this provider can be used for testing.

![Image 9: Test user rules](https://www.palantir.com/docs/resources/foundry/authentication/organization-assignment-testing.png)

### [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#group-rules)Group rules

Organization assignment rules for groups are configured by writing conditions that match on a group’s name. The group can be assigned to one or more organizations.

As the matching criteria uses regex, ensure special characters are escaped in the condition.

![Image 10: Advanced group rules editor](https://www.palantir.com/docs/resources/foundry/authentication/advanced-group-rules.png)

## [](https://www.palantir.com/docs/foundry/authentication/org-assignment/#no-organization)No organization

If a user is assigned `No organization` (either via the default Organization functionality or by applying advanced rules), then they will be blocked from logging in.

If a provider group is assigned `No organization` (either via the **Default organization** or **Advanced rule creation** options), then the group will be assigned to the organization of the most recent member to log in.

Multipass group AUM rules

Certain historical identity provider integrations may be using a legacy implementation called Multipass Group AUM rules for assigning users & provider groups to organizations. If organization assignment is not configured in Control Panel, then these rules continue to apply. However, **Multipass Group AUM rules will be ignored if organization assignment is configured in Control Panel**. Contact your Palantir representative if you are unsure whether this applies to your configuration.

To complete setup, [enable and test your identity provider integration](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/).

[← PREVIOUS Intake forms](https://www.palantir.com/docs/foundry/authentication/intake-forms/)

[NEXT Group assignment →](https://www.palantir.com/docs/foundry/authentication/group-assignment/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

