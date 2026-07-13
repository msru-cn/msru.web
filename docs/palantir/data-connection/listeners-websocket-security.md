Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/listeners-websocket-security/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/listeners-websocket-security/#websocket-listener-security)WebSocket listener security

WebSocket listeners differ from standard Foundry data ingestion, so ensure that you understand these security paradigms before enabling your connections.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-websocket-security/#request-authorization)Request authorization

Each WebSocket listener type has specific authentication requirements defined by the external system. Listeners implement the security protocols laid out by those external systems, which vary widely. Palantir makes no guarantees about the suitability or effectiveness of these external system protocols.

You are responsible for ensuring that you understand which guarantees each protocol does or does not provide for the incoming connections and data.

The specific protocols implemented for each listener can be found in the **Configure security** section of your listener's **Configure connection** page, as well as the external system's documentation.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-websocket-security/#exportable-marking-validation)Exportable marking validation

When WebSocket listeners process data, marking validation acts as a security control to prevent unauthorized data exfiltration. The system ensures that any data consumed by your output meets the listener's configured exportable marking requirements.

By default, only data without security markings can be read and incorporated into your compute module inputs. If your compute module needs to process data that carries security markings, you must explicitly configure which markings are permitted for export in the listener's settings. Only a user with the ability to declassify those markings can add them to the configuration.

![Image 2: Configure WebSocket markings in the listener settings.](https://www.palantir.com/docs/resources/foundry/data-connection/websocket-listener-configure-markings.png)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-websocket-security/#subdomains)Subdomains

WebSocket listeners can be mounted to dedicated subdomains, allowing for granular ingress control, comprehensive governance workflows, and isolation of less secure endpoints from the environment's primary enrollment domains. [Learn more about listener subdomains](https://www.palantir.com/docs/foundry/data-connection/listeners-subdomains/).

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-websocket-security/#endpoint-rotation)Endpoint rotation

If the listener's endpoint is compromised, you can rotate it to a new endpoint. [Learn more about endpoint rotation](https://www.palantir.com/docs/foundry/data-connection/listeners-subdomains/#endpoint-rotation).

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/data-connection/listeners-websocket/)

[NEXT Email listeners / Overview →](https://www.palantir.com/docs/foundry/data-connection/listeners-email/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

