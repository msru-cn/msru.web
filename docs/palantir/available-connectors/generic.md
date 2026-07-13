Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/generic/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/available-connectors/generic/#generic-connector)Generic connector

The generic connector can be used to represent connections to arbitrary external systems. As a connector, it does not directly support the standard set of [capabilities](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#capabilities) available in other connectors. However, when used exclusively as a [**Use in code**](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#use-in-code) connector, it can be used to create code-based alternatives to these standard capabilities, including batch syncs, file and table exports, streaming syncs, streaming exports, media syncs, webhooks, and more.

By configuring the generic connector with the appropriate worker, credentials, and export controls, developers can use it to write code that connects to arbitrary external systems. When the source owner configures the networking, worker, credentials, and export controls together, they can ensure that credentials are only used with the specified external system, and export markings are enforced across the different code environments where connections are established.

## [](https://www.palantir.com/docs/foundry/available-connectors/generic/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Use in code | 🟢 Generally available |

## [](https://www.palantir.com/docs/foundry/available-connectors/generic/#setup)Setup

The generic connector should be created from the **New connection** option in the side bar of code repository environments rather than through the Data Connection application. However, any configured generic connector will appear alongside other connectors in Data Connection.

Review [our external transforms tutorial](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#option-1-create-source-in-the-external-systems-sidebar) for more information on how to set up a generic connector directly from a code repository.

## [](https://www.palantir.com/docs/foundry/available-connectors/generic/#networking)Networking

Since the generic connector must be used in code, only [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) connections can be used, either with [direct connection egress policies](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-direct-connection-policies) for systems that can accept inbound traffic from Palantir, or with [agent proxy egress policies](https://www.palantir.com/docs/foundry/data-connection/architecture/#foundry-worker-with-agent-proxy-policy) for systems that are in a private network that cannot accept inbound traffic from Palantir.

## [](https://www.palantir.com/docs/foundry/available-connectors/generic/#configuration-options)Configuration options

Conceptually, you can think of a generic connector as a collection of **networking configurations**, **credentials**, and **exportable markings** that are intended to be used together.

*   **Networking configurations** specify what system should be reachable from code using this generic connector.
*   **Credentials** specify secret values that must be available to successfully connect.
*   **Exportable markings** specify which data is safe to leave the Palantir platform to the specified network destination.

To provide the above functionality, the following configuration options are available for the generic connector:

| Option | Required? | Description |
| --- | --- | --- |
| `Networking` | Yes | A set of [egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#network-egress-overview) dictating what destination addresses or IPs should be reachable. |
| `Credentials` | No | A set of key value pairs may be used to store credentials. Currently, only secret values may be stored. Unencrypted values are not supported. |
| `Exportable control markings` | No | If the generic connector will be used along with Foundry data inputs, the setting to allow exports must be enabled and the set of exportable markings must be specified. For more information on export controls for data connections, refer to [our documentation](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#use-foundry-inputs-in-external-transforms). |

## [](https://www.palantir.com/docs/foundry/available-connectors/generic/#using-a-generic-connector-in-code)Using a generic connector in code

This section provides additional information on how to use the generic connector from various code environments in Foundry.

| Code environment | Description |
| --- | --- |
| [Python external transforms](https://www.palantir.com/docs/foundry/available-connectors/generic/#python-external-transforms) | Use the generic connector to connect to external systems from [Python transforms](https://www.palantir.com/docs/foundry/transforms-python/overview/) repositories. |
| [Compute modules](https://www.palantir.com/docs/foundry/available-connectors/generic/#compute-modules) | Use the generic connector to connect from long-running compute modules. Useful for streaming sync and export workflows, as well as bespoke writeback workflows. |
| [TypeScript functions](https://www.palantir.com/docs/foundry/available-connectors/generic/#typescript-functions) | Generally available. |
| [Python functions](https://www.palantir.com/docs/foundry/available-connectors/generic/#python-functions) | Generally available. |

### [](https://www.palantir.com/docs/foundry/available-connectors/generic/#python-external-transforms)Python external transforms

A generic connector can be imported into a code repository. Using this generic connector, you can write code to reach out to external systems and access credentials on the source.

[Learn more about source-based external transforms.](https://www.palantir.com/docs/foundry/data-connection/external-transforms/)

### [](https://www.palantir.com/docs/foundry/available-connectors/generic/#compute-modules)Compute modules

A generic connector can be imported into a [compute module](https://www.palantir.com/docs/foundry/compute-modules/overview/). Using this generic connector, you can write compute modules that interact with external systems.

### [](https://www.palantir.com/docs/foundry/available-connectors/generic/#typescript-functions)TypeScript functions

A generic connector can be imported into a [TypeScript Functions code repository](https://www.palantir.com/docs/foundry/functions/getting-started/). Using this generic connector, you can make direct calls to external systems using `fetch`.

### [](https://www.palantir.com/docs/foundry/available-connectors/generic/#python-functions)Python functions

A generic connector can be imported into a [Python Functions code repository](https://www.palantir.com/docs/foundry/functions/python-getting-started/). Using this generic connector, you can make direct calls to external systems using Python's `requests` library.

## [](https://www.palantir.com/docs/foundry/available-connectors/generic/#conversion-of-generic-connectors)Conversion of generic connectors

Generic connectors can be converted to the [REST API source](https://www.palantir.com/docs/foundry/available-connectors/rest-apis/) if there is only a single egress policy attached to the source for a DNS address with port 443.

Performing this conversion would give developers access to a [built-in HTTP client](https://www.palantir.com/docs/foundry/data-connection/external-transforms/#use-the-built-in-http-client) for usage in code, allowing developers to immediately write code that interacts with the external system.

![Image 2: Callout prompting the conversion of a generic connector to the REST API source.](https://www.palantir.com/docs/resources/foundry/available-connectors/generic-connector-conversion-into-rest-api.png)

[← PREVIOUS FTP/FTPS](https://www.palantir.com/docs/foundry/available-connectors/ftps/)

[NEXT GitHub →](https://www.palantir.com/docs/foundry/available-connectors/github/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

