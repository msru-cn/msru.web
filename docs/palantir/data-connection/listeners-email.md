Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/listeners-email/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/listeners-email/#email-listeners)Email listeners

Beta

Email listeners are in the [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development and may not be available on your enrollment. Functionality may change during active development. Contact Palantir Support to request access to email listeners.

Email listeners receive inbound emails at dedicated, Foundry-managed email addresses. Incoming emails are validated, parsed, and forwarded to the platform for processing.

Unlike HTTPS and WebSocket listeners that receive connections from external systems over the network, email listeners receive standard email sent to a Foundry-managed address.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-email/#configure-a-listener)Configure a listener

Navigate to **Data Connection > Listeners** to set up an email listener.

For information on securely configuring email listeners and incoming messages, refer to the [email listener security](https://www.palantir.com/docs/foundry/data-connection/listeners-email-security/) documentation.

### [](https://www.palantir.com/docs/foundry/data-connection/listeners-email/#1-create-a-new-listener)1. Create a new listener

Select **Create new listener** and choose the email listener type.

![Image 7: The listener selection page showing the email listener option.](https://www.palantir.com/docs/resources/foundry/data-connection/email-listener-select.png)

### [](https://www.palantir.com/docs/foundry/data-connection/listeners-email/#2-configure-connection)2. Configure connection

Configure a unique email address for the listener.

![Image 8: The connection configuration page with the email address field.](https://www.palantir.com/docs/resources/foundry/data-connection/email-listener-create-new-email-address.png)

Then, configure the sender allowlist to control which senders can deliver email to the listener. You can allow specific email addresses or entire domains.

![Image 9: The connection configuration page showing the sender allowlist settings.](https://www.palantir.com/docs/resources/foundry/data-connection/email-listener-allow-senders.png)

Security

By default, email listeners do not accept email from any sender. You must explicitly configure which senders are permitted.

After creation, the listener enters a **Provisioning** state and requires approval before it can begin receiving emails.

![Image 10: The listener detail page showing the provisioning state.](https://www.palantir.com/docs/resources/foundry/data-connection/email-listener-provisioning-state.png)

### [](https://www.palantir.com/docs/foundry/data-connection/listeners-email/#3-activate-the-listener)3. Activate the listener

Once the email address is approved and configured, activate the listener to begin receiving emails. Activated listeners process incoming emails and forward their content to a media set.

![Image 11: The listener detail page showing the activate option.](https://www.palantir.com/docs/resources/foundry/data-connection/email-listener-activate-email.png)

### [](https://www.palantir.com/docs/foundry/data-connection/listeners-email/#4-test-the-listener)4. Test the listener

Send a test email to the listener address to verify that it is receiving and processing messages correctly.

![Image 12: An example of a test email sent to the listener.](https://www.palantir.com/docs/resources/foundry/data-connection/email-listener-email-test-example.png)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-email/#listener-states)Listener states

Email listeners follow a lifecycle with the following states.

| State | Description |
| --- | --- |
| **Provisioning** | The listener is being set up and is not yet processing emails. |
| **Active** | The listener is receiving and processing inbound emails. |
| **Inactive** | The listener is paused and can be reactivated. |
| **Rejected** | The approval request was denied. The listener can only be deleted. |

You can deactivate an active listener at any time to temporarily stop processing emails, and reactivate it when needed.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-email/#limitations)Limitations

*   Individual email messages are limited to 40 MB in size, including attachments.
*   Certain executable and script attachment types are blocked for security purposes (for example, `.exe`, `.bat`, and `.js` files).
*   Each enrollment is limited to a maximum of 10 email listeners. Contact Palantir Support if you require more.

[← PREVIOUS WebSocket listeners / Security](https://www.palantir.com/docs/foundry/data-connection/listeners-websocket-security/)

[NEXT Security →](https://www.palantir.com/docs/foundry/data-connection/listeners-email-security/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

