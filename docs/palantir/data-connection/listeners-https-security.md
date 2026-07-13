Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/listeners-https-security/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/listeners-https-security/#https-listener-security)HTTPS listener security

HTTPS listeners differ from standard Foundry data ingestion, so ensure that you understand these security paradigms before enabling your connections.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-https-security/#request-authorization)Request authorization

Request interfaces for HTTPS listeners are defined by external systems, so they do not conform to standard Foundry authentication or authorization mechanisms. Instead, listeners implement the security protocols laid out by those external systems, which vary widely.

Palantir makes no guarantees about the suitability or effectiveness of these external system protocols. You are responsible for ensuring that you understand which guarantees each protocol does or does not provide for the incoming requests and data.

The specific protocols implemented for each listener can be found in the **Configuration** step of the listener setup wizard, as well as the external system's documentation.

![Image 2: The Twilio security protocol.](https://www.palantir.com/docs/resources/foundry/data-connection/twilio-security-protocol.png)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-https-security/#redaction-and-data-security)Redaction and data security

A minimal set of redactions is sometimes performed on incoming data. It is important to note that these redaction mechanisms are best effort, and Palantir cannot guarantee that sensitive data, such as tokens, will be completely redacted from request bodies.

For HTTPS listeners it is essential to _secure both your listener and the output stream_. This includes restricting access to both by placing them in a restricted project, as well as applying [markings](https://www.palantir.com/docs/foundry/security/markings/) on the listener when necessary.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-https-security/#subdomains)Subdomains

HTTPS listeners can be mounted to dedicated subdomains, allowing for granular ingress control, comprehensive governance workflows, and isolation of less secure endpoints from the environment's primary enrollment domains. [Learn more about listener subdomains](https://www.palantir.com/docs/foundry/data-connection/listeners-subdomains/).

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-https-security/#endpoint-rotation)Endpoint rotation

If the listener's endpoint is compromised, it can be rotated to a new endpoint. [Learn more about endpoint rotation](https://www.palantir.com/docs/foundry/data-connection/listeners-subdomains/#endpoint-rotation).

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/data-connection/listeners-https/)

[NEXT Event processing →](https://www.palantir.com/docs/foundry/data-connection/listeners-event-processing/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

