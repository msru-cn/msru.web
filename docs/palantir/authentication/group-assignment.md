Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/group-assignment/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#group-assignment)Group assignment

As part of setting up an authentication provider, administrators can define rule based groups. Membership to a rule based group is automatically assigned based on rules evaluated at login. These rules can be configured for each authentication provider. To set up rule based groups, navigate to **Control Panel > Authentication > Authentication provider > Manage group assignment** to use the group assignment editor.

![Image 6: The group assignment option in the assignment rules menu.](https://www.palantir.com/docs/resources/foundry/authentication/group-triaging.png)

## [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#defining-rule-based-groups)Defining rule based groups

### [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#rules)Rules

Group assignment rules contain one or more `AND` conditions that are evaluated against user attributes or provider groups. For each rule, users who match all conditions will be assigned membership to the specified rule based group. Administrators can specify `OR` conditions by defining separate assignment rules applied to the same group.

Conditions use regular expression (regex) patterns for matching. Three matching options are provided:

*   Includes pattern matching: The pattern matches at least one of a user's provider groups or one value in a user's array-type attribute.
*   Does not include pattern matching: The pattern does not match any of a user’s provider groups or does not match any of the values in a user’s array-type attribute.
*   Is equal to pattern matching: The pattern matches a user's string type attribute.

![Image 7: A sample rule definition using pattern matching.](https://www.palantir.com/docs/resources/foundry/authentication/rule-based-groups-rules.png)

### [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#groups)Groups

Foundry uses three types of [user groups](https://www.palantir.com/docs/foundry/platform-security-management/manage-groups/) across the platform:

1.   Rule based groups: Used for administrator defined rules applied during login.
2.   [Internal groups](https://www.palantir.com/docs/foundry/platform-security-management/manage-groups/#group-internal-realms): Manually assigned in Foundry, and can contain users and other external, rule based, or internal groups.
3.   [External groups](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/#provider-groups): Also called provider groups, these groups are defined externally, typically by an identity provider. These groups are ingested at user login.

Of these three group types, only rule based group membership can be defined in Foundry using the automated rules discussed here.

![Image 8: A list of groups and their types.](https://www.palantir.com/docs/resources/foundry/authentication/group-types.png)

Rule based groups help guarantee legibility and consistency in group membership, so we recommend rule based groups over internal groups where possible. Internal groups make sense in cases of temporary access, provisional cohort creation, or specific onboarding or revocation requirements that cannot be met by an external identity provider. Because access in these cases requires a human-in-the-loop, the attribute and group conditions used by rule based groups will likely be insufficient to determine access.

![Image 9: A sample group and its group assignment rules.](https://www.palantir.com/docs/resources/foundry/authentication/managing-rbgs.png)

## [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#validation-and-testing)Validation and testing

*   Navigate to **Control Panel > Authentication > Authentication provider > Manage group assignment > Test rules** to validate rules against an existing user. This will show which rule(s) the user matches and the group(s) they will be assigned to at their next login. Note that only users who have already logged in with this provider can be simulated in the **Test rules** panel.
*   Rules are applied when a user logs in, regardless of whether they are an existing or new user. Rules _do not run retroactively_ upon saving.
*   Regular expression correctness is a common point of failure when defining rule based groups. Non-matching patterns have a tendency to fail quietly while causing unanticipated user assignment.

![Image 10: The Test rules interface when validating rules against an existing user](https://www.palantir.com/docs/resources/foundry/authentication/rule-based-group-testing.png)

## [](https://www.palantir.com/docs/foundry/authentication/group-assignment/#migrating-to-rule-based-groups-from-group-aum)Migrating to rule based groups from group AUM

Some Foundry authentication setups use a legacy tool for automated user assignment called group asynchronous user manager (AUM). Group AUM does not have a user interface, it is configured by Palantir representatives at the direction of customer administrators.

Rule based groups cannot be used for customer enrollments that have group AUM enabled. In the future, group AUM rules will be automatically migrated to rule based group rules.

[← PREVIOUS Organization assignment](https://www.palantir.com/docs/foundry/authentication/org-assignment/)

[NEXT Enable and test identity provider integration →](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

