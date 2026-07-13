Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/listeners-overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/listeners-overview/#listeners)Listeners

Listeners enable the Palantir platform to receive events from other systems that do not support OAuth 2.0 authentication directly or cannot provide a configurable payload compatible with standard Foundry API endpoints.

To accept inbound connections from these systems, data connection listeners provision a URL endpoint, implement the specific message signing or other verification schemes for specific external systems, and allow a simple and low-latency mechanism to receive data feeds into Foundry.

![Image 2: The event listeners homepage.](https://www.palantir.com/docs/resources/foundry/data-connection/event-listeners.png)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-overview/#types-of-listeners)Types of listeners

Foundry supports three types of listeners, each designed for different integration scenarios and processing approaches:

| Listener type | Status | Connection type | Output destination |
| --- | --- | --- | --- |
| HTTPS listeners | GA | Request-response | [Streams](https://www.palantir.com/docs/foundry/data-integration/streams/) |
| WebSocket listeners | Experimental | Persistent bidirectional | [Compute modules](https://www.palantir.com/docs/foundry/compute-modules/overview/) |
| Email listeners | Beta | Inbound email | [Media sets](https://www.palantir.com/docs/foundry/data-integration/media-sets/) |

### [](https://www.palantir.com/docs/foundry/data-connection/listeners-overview/#https-listeners)HTTPS listeners

HTTPS listeners receive webhook requests from external systems through HTTPS endpoints. Events are written to a [stream](https://www.palantir.com/docs/foundry/data-integration/streams/), enabling processing through [Automate](https://www.palantir.com/docs/foundry/automate/streaming/), [streaming pipelines](https://www.palantir.com/docs/foundry/building-pipelines/streaming-overview/), or batch processing using the stream's backing dataset.

[Learn more about HTTPS listeners.](https://www.palantir.com/docs/foundry/data-connection/listeners-https/)

### [](https://www.palantir.com/docs/foundry/data-connection/listeners-overview/#websocket-listeners-experimental)WebSocket listeners [Experimental]

Experimental

WebSocket listeners are an experimental capability that may not be available in your enrollment. To enable this capability, contact Palantir Support.

WebSocket listeners are primarily designed for real-time audio and telephony workflows, enabling bidirectional communication between Foundry and external services such as Twilio, Genesys, and Azure Communication Services. Inbound WebSocket connections are processed directly by a [compute module](https://www.palantir.com/docs/foundry/compute-modules/overview/) where you can host a custom WebSocket server.

[Learn more about WebSocket listeners.](https://www.palantir.com/docs/foundry/data-connection/listeners-websocket/)

### [](https://www.palantir.com/docs/foundry/data-connection/listeners-overview/#email-listeners)Email listeners

Beta

Email listeners are in the [beta](https://www.palantir.com/docs/foundry/platform-overview/development-life-cycle/) phase of development and may not be available on your enrollment. Functionality may change during active development. Contact Palantir Support to request access to email listeners.

Email listeners allow Foundry to receive inbound emails at dedicated email addresses for downstream processing. Each listener has a unique email address scoped to your enrollment, and applies sender allowlisting, email authentication, and attachment validation before forwarding content.

[Learn more about email listeners.](https://www.palantir.com/docs/foundry/data-connection/listeners-email/)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-overview/#when-to-use-listeners)When to use listeners

Listeners are one of many options to ingest data into the Palantir platform. Before setting up a listener, evaluate whether your use case meets the criteria below for inbound connections or for external systems that cannot be customized.

### [](https://www.palantir.com/docs/foundry/data-connection/listeners-overview/#for-inbound-connections)For inbound connections

Listeners can be used solely for inbound connections when an external system establishes the connection into Foundry. To make requests from Foundry to external systems, use [sources](https://www.palantir.com/docs/foundry/data-connection/set-up-source/). No-code capabilities are also available, such as [syncs](https://www.palantir.com/docs/foundry/data-connection/set-up-sync/) and [outbound webhooks](https://www.palantir.com/docs/foundry/data-connection/webhooks-overview/). Custom code-based data connections are also available with [external transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/), [functions](https://www.palantir.com/docs/foundry/functions/api-calls/), [compute modules](https://www.palantir.com/docs/foundry/compute-modules/sources/), and more.

### [](https://www.palantir.com/docs/foundry/data-connection/listeners-overview/#when-the-external-system-cannot-be-customized)When the external system cannot be customized

Listeners should only be used when the external system cannot be customized to connect to Foundry. For example, many webhook and WebSocket providers have bespoke payload shapes and cannot properly authenticate with Foundry, instead relying on other authentication and verification protocols.

For cases where you can customize the external system, such as when the system allows you to write custom integration code, use the [public API](https://www.palantir.com/docs/foundry/api/v2/general/overview/authentication/) instead. With the public API, you can push to streams, upload to datasets, or directly interact with your ontology.

* * *

_All product names, logos, and brands mentioned are trademarks of their respective owners. All company, product, and service names used in this document are for identification purposes only._

[← PREVIOUS Webhooks / Configuration reference](https://www.palantir.com/docs/foundry/data-connection/webhooks-reference/)

[NEXT Listener subdomains →](https://www.palantir.com/docs/foundry/data-connection/listeners-subdomains/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

