Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/email/email-content-redaction/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/email/email-content-redaction/#email-redaction)Email redaction

## [](https://www.palantir.com/docs/foundry/email/email-content-redaction/#what-is-email-redaction)What is email redaction?

The platform supports sending email notifications related to actions taken within the platform. By default, email notifications are automatically scrubbed of any sensitive customer information, instead, only containing a link to the related event within the platform. This email scrubbing is a security feature called **email content redaction** and has controllable properties.

Email redaction ensures that sensitive information does not leave the Foundry platform. However, after acknowledging the potential risk through an in-platform prompt, you have the following options:

*   Disable email redaction for notifications destined to a subset of users in your organization.
*   Disable email redaction for notifications destined to specific domains.
*   Disable email redaction entirely.

Below is an example of an unredacted email followed by an example of a redacted email:

![Image 4: Complete email](https://www.palantir.com/docs/resources/foundry/email/email-redaction-complete-email.png)

![Image 5: Redacted email](https://www.palantir.com/docs/resources/foundry/email/email-redaction-redacted-email.png)

## [](https://www.palantir.com/docs/foundry/email/email-content-redaction/#control-email-redaction)Control email redaction

By default, email redaction applies to all notifications destined to all users. Email redaction has two modes of operation: _Selected users only_, or _Everyone in this Organization_.

![Image 6: Modes](https://www.palantir.com/docs/resources/foundry/email/email-redaction-modes-screenshot.png)

### [](https://www.palantir.com/docs/foundry/email/email-content-redaction/#selected-users-only)Selected users only

With the **Selected users only** configuration, you must specify the destination domains or user groups that should receive complete, unredacted email notifications. This is the default mode when no users or domains are specified.

You may specify domains and subdomains that you wish to receive complete, unredacted email notifications. All domains and subdomains must be specified in the `@domain.com` format.

Alternatively, you may specify which user groups should receive complete, unredacted email notifications. This provides granular control over when and who should receive email from the Foundry platform containing complete, unredacted data. Any recipient in a specified group will receive complete, unredacted email notifications.

Domain/subdomain conditions and user group conditions are disjunctive within and across condition types. If both condition types are specified, a user that meets any of the domain/subdomain conditions _or_ any of the user group conditions will receive complete, unredacted email notifications.

Once your configuration has been made, select **Save Changes** and proceed through the risk acknowledgment prompt.

### [](https://www.palantir.com/docs/foundry/email/email-content-redaction/#everyone-in-this-organization)Everyone in this Organization

With the **Everyone in this Organization** configuration, email redaction is disabled for all recipients. All users on all domains will receive complete, unredacted email notifications.

Using this mode is strongly discouraged, as it greatly increases the risks of unintentional data spillage. Depending on an organization's policies and threat model, the risks may be deemed acceptable as a trade-off for user preferences. However, Palantir recommends that you do _not_ use this mode.

Once your configuration has been made, select **Save Changes** and proceed through the risk acknowledgment prompt.

## [](https://www.palantir.com/docs/foundry/email/email-content-redaction/#disable-email-redaction-in-action-types)Disable email redaction in action types

In certain circumstances, you might require only certain emails to be redacted. To this end, you are able to disable redaction for emails coming from specific action types during action type configuration in Ontology Manager.

This is a feature that you enable for the whole organization, and, once enabled, authorized users can configure which action types can disable redaction. Authorized users are users with the `ontology:override-notification-redaction` operation, which is granted by default to users with the `ontology:manage-ontology` operation.

To use this feature, you need to first enable **Allow override redaction at the action type level** setting in the **Content redaction** tab.

For detailed instructions on configuring specific action types after enabling this setting, visit [the notification settings in action type documentation page.](https://www.palantir.com/docs/foundry/action-types/notifications/#override-and-disable-email-content-redaction)

[← PREVIOUS Email allowlisting](https://www.palantir.com/docs/foundry/email/email-allowlisting/)

[NEXT Email suppression management →](https://www.palantir.com/docs/foundry/email/email-suppression-management/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

