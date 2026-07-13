Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/listeners-email-security/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/listeners-email-security/#email-listener-security)Email listener security

Email listeners apply multiple layers of security validation to incoming emails before processing them.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-email-security/#email-authentication)Email authentication

All incoming emails must pass the following AWS SES authentication checks before they are accepted.

| Check | Description |
| --- | --- |
| **SPF** (Sender policy framework) | Verifies that the sending server is authorized to send on behalf of the sender's domain. |
| **DKIM** (DomainKeys identified mail) | Verifies that the email has not been tampered with in transit using cryptographic signatures. |
| **DMARC** (Domain-based message authentication) | Verifies that the email aligns with the sender domain's published authentication policy. |
| **Spam detection** | Scans the email for known spam indicators. |
| **Virus scanning** | Scans email content and attachments for malware. |

If any of these checks fail, the email is rejected and is not forwarded for processing.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-email-security/#sender-allowlist)Sender allowlist

Each email listener must be configured with a sender allowlist that controls which senders can deliver email to the listener. You can restrict access to the following:

*   **Specific email addresses:** Only emails from the listed addresses are accepted.
*   **Entire domains:** All emails from a given domain are accepted.

Security

By default, email listeners do not accept email from any sender. You must explicitly configure which senders are permitted before the listener will process any incoming email.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-email-security/#attachment-restrictions)Attachment restrictions

To prevent the delivery of potentially malicious content, email listeners block certain MIME types by default. Blocked types include executable and script formats, such as:

*   Application executables (for example, `.exe`, `.msi`)
*   Shell scripts (for example, `.sh`, `.bat`)
*   JavaScript files

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-email-security/#size-limits)Size limits

Individual email messages, including all attachments, are limited to 40 MB. Emails exceeding this limit are rejected.

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/data-connection/listeners-email/)

[NEXT External connections from code / External transforms →](https://www.palantir.com/docs/foundry/data-connection/external-transforms/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

