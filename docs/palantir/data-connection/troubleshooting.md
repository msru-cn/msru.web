Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/troubleshooting/

Published Time: Thu, 09 Jul 2026 17:47:54 GMT

# [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#troubleshooting)Troubleshooting

When a source is not behaving as expected, use this page to diagnose and resolve the issue. It describes the troubleshooting tools available in Data Connection, where to look first when a connection is not working, and how to resolve common connectivity and certificate problems.

For problems specific to syncs or agents, see [Capability-specific issues](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#capability-specific-issues).

## [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#where-to-start)Where to start

Use this list as a first pass when a source or connection is not working.

1.   **Confirm the source is reachable.** On the source page, select **Preview** to confirm the connection is established. If it fails, open the [source terminal](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#source-terminal) and run `dig`, `curl`, and `openssl s_client` against your source's hostname and port.
2.   **Check egress configuration.** For [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) sources, confirm that the correct [egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/) are attached and that the addresses, ports, and protocols they allow match what the source connects to. Review the [network egress logs](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#network-egress-logs-and-metrics).
3.   **Check credentials.** Re-enter credentials if you suspect they are stale, especially after a migration.
4.   **Check certificates.**`PKIX` or `SSLHandshakeException` errors indicate that the correct certificates are not configured for the source. See [Certificates and TLS](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#certificates-and-tls).
5.   **Check OAuth authorization.** If your source uses an [outbound application](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/), `HTTP 401: Unauthorized` and similar errors usually indicate that the calling user has not completed the interactive authorization flow, that the outbound application is disabled, or that the configured scopes are insufficient. See [OAuth and outbound applications](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#oauth-and-outbound-applications).
6.   **Hand off to AI FDE.** For Foundry worker sources, use [Debug with AI FDE](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#debug-with-ai-fde) to have AI FDE walk through these checks and surface specific fixes.

If your source uses an [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker), also confirm the agent shows as **Online** in Data Connection and review the [agents troubleshooting reference](https://www.palantir.com/docs/foundry/data-connection/agents-troubleshooting/) for status-specific guidance.

## [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#troubleshooting-tools)Troubleshooting tools

Data Connection provides several built-in tools to help you investigate connectivity, authentication, and data movement issues without leaving the platform.

### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#debug-with-ai-fde)Debug with AI FDE

For [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) sources, you can hand off debugging to [AI FDE](https://www.palantir.com/docs/foundry/ai-fde/overview/), Palantir's AI-powered forward deployed engineer. AI FDE loads your source and its associated [egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/) into context and uses the same egress logs and source debug tools described on this page to investigate connectivity failures on your behalf.

To start an AI FDE debugging session from a source:

1.   Open the source you want to debug in the **Data Connection** application.
2.   In the **Connection details** panel, select the dropdown caret next to **Debug**, then select **Debug with AI FDE**.
3.   AI FDE opens in a new tab with the source and its egress policies preloaded as context, and proposes a debugging plan that includes inspecting the source configuration, reviewing each egress policy, retrieving network egress logs, and running live connectivity tests.

AI FDE will summarize what is working, what is failing, and suggest specific fixes (for example: missing egress policies, incorrect address or port, TLS configuration issues, or credential problems).

**Debug with AI FDE** is available only for sources that use a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) runtime. AI FDE requires [AIP to be enabled](https://www.palantir.com/docs/foundry/aip/enable-aip-features/) on your enrollment. To learn more about how AI FDE works, what it can do, and how it manages context and permissions, see the [AI FDE overview](https://www.palantir.com/docs/foundry/ai-fde/overview/).

### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#source-terminal)Source terminal

A terminal, using the same connectivity settings as your source, is available to help you test network connectivity with your external systems using commands such as `dig`, `curl`, `netcat`, and `openssl`.

To open the terminal, select **Debug** in the **Network connectivity** panel under **Connection details** on the source page.

![Image 2: The source terminal is accessible by selecting Debug in the Network connectivity panel under Connection details on the source page.](https://www.palantir.com/docs/resources/foundry/data-connection/source-terminal.png)

#### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#dig)`dig`

The `dig` command tests DNS resolution and can be used to check whether the hostname of your source resolves correctly. For example, to test whether DNS resolves `palantir.com`, run `dig palantir.com`. If you see an `ANSWER SECTION` in the response, DNS resolution succeeded.

The following is an example of a successful `dig` command:

```
appuser@localhost:/root$ dig palantir.com

; <<>> DiG 9.18.30-0ubuntu0.20.04.2-Ubuntu <<>> palantir.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 13561
;; flags: qr rd ra; QUERY: 1, ANSWER: 4, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;palantir.com.                  IN      A

;; ANSWER SECTION:
palantir.com.           300     IN      A       151.101.129.170
palantir.com.           300     IN      A       151.101.1.170
palantir.com.           300     IN      A       151.101.193.170
palantir.com.           300     IN      A       151.101.65.170

;; Query time: 99 msec
;; SERVER: 10.100.0.53#53(10.100.0.53) (UDP)
;; WHEN: Fri Oct 31 14:56:58 UTC 2025
;; MSG SIZE  rcvd: 142
```

#### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#curl)`curl`

The `curl` command tests HTTP connectivity to a specific host and port on the external system. If the port is not specified, it is inferred from the protocol (for example, 80 for HTTP or 443 for HTTPS). For example, to test whether connectivity can be established to `https://palantir.com`, run `curl https://palantir.com`.

The following is an example of a successful `curl` command:

```
appuser@localhost:/root$ curl https://palantir.com
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="https://www.palantir.com/">here</A>.
</BODY></HTML>
```

If the `curl` command is hanging, set a timeout (in seconds) using the `--connect-timeout` flag:

Copied!

```shell
1curl --connect-timeout 10 https://palantir.com
```

#### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#openssl)`openssl`

The `openssl` command tests SSL/TLS connectivity and verifies certificates for HTTPS connections. For example, to test whether an SSL/TLS connection can be established to `palantir.com` on port `443`, run `openssl s_client -connect palantir.com:443 -servername palantir.com`.

The following is an example of a successful `openssl` command:

```
appuser@localhost:/root$ openssl s_client -connect palantir.com:443 -servername palantir.com
CONNECTED(00000003)
depth=2 C = BE, O = GlobalSign nv-sa, OU = Root CA, CN = GlobalSign Root CA
verify return:1
depth=1 C = BE, O = GlobalSign nv-sa, CN = GlobalSign Atlas R3 DV TLS CA 2024 Q2
verify return:1
depth=0 CN = *.palantir.com
verify return:1
---
Certificate chain
 0 s:CN = *.palantir.com
   i:C = BE, O = GlobalSign nv-sa, CN = GlobalSign Atlas R3 DV TLS CA 2024 Q2
   a:PKEY: rsaEncryption, 2048 (bit); sigalg: RSA-SHA256
   v:NotBefore: Jun 17 16:50:15 2024 GMT; NotAfter: Jul 19 16:50:14 2025 GMT
---
SSL handshake has read 3654 bytes and written 442 bytes
---
```

If the connection is successful, you will see certificate details and a message indicating the SSL handshake completed. If the command hangs or shows certificate verification errors, there may be network or certificate configuration issues.

Certificates configured in the UI are not automatically included in the terminal environment. To use them in the terminal, add them manually, either inline or with `nano`/`vim`:

Copied!

```shell
1echo "-----BEGIN CERTIFICATE-----
2MIIGXjCCBUagAwIBAgIQASByQ6gv8Z6X7wEqsyBb1DANBgkqhkiG9w0BAQsFADBY
3...
49lc=
5-----END CERTIFICATE-----" > server-cert.pem
```

To test with custom certificates, such as self-signed certificates or mTLS, specify the certificate files:

Copied!

```shell
1openssl s_client -connect my-server.example.com:443 \
2  -servername my-server.example.com \
3  -CAfile server-cert.pem \
4  -cert client-cert.pem \
5  -key client-key.pem
```

If these commands succeed but your connection still does not work, some certificates or source credentials are likely configured incorrectly.

### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#network-egress-logs-and-metrics)Network egress logs and metrics

For [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) sources, network egress logs and metrics provide visibility into the actual network calls your source is making. These tools can help identify networking issues that may not be apparent from terminal-based debugging alone.

*   **Build logs:** From a build page, select **Logs** and apply the **Network egress logs** filter to see the network egress activity for that build.
*   **Control Panel:** Navigate to **Control Panel > Network egress**, select a policy, and open the **Observability** tab to view aggregated logs per source and usage metrics for the policy.

### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#source-preview-and-exploration)Source preview and exploration

Before debugging deeper, confirm whether the source is fundamentally reachable and configured correctly:

*   **Preview:** On the source page, select **Preview** in the right panel to confirm that the connection has been successfully established.
*   **Explore:** Use the [source exploration](https://www.palantir.com/docs/foundry/data-connection/source-exploration/) view to inspect tables, files, and previews from the source. If exploration succeeds but a specific sync fails, the issue is more likely with the sync configuration than with the source.

### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#job-tracker)Job tracker

To investigate the status of a running or recently completed sync, open the **Job tracker** application and select the sync. From there, you can inspect status, stages, and logs, including the `_data-ingestion.log` for JDBC syncs.

## [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#connectivity-and-egress)Connectivity and egress

For a connection to succeed, Foundry must be allowed to reach your external system over the network. [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) sources control this through [egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/), which allowlist the specific hosts, ports, and protocols a source is permitted to connect to. A connection that fails before authentication is usually an egress problem.

To debug a suspected egress issue:

1.   Confirm that the correct egress policies are attached to the source, and that the host, port, and protocol they allow match the system you are connecting to.
2.   Use the [source terminal](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#source-terminal) to test whether the host is reachable at all, using `dig`, `curl`, and `openssl s_client`.
3.   Review the [network egress logs](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#network-egress-logs-and-metrics) to see the actual outbound calls your source is making and identify which are being blocked.

To create or request an egress policy, see [Configure egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/).

## [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#certificates-and-tls)Certificates and TLS

This section assumes that Foundry acts as the client establishing a connection to an external system that acts as the server. For background on the underlying concepts, see [TLS ↗](https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/), [mTLS ↗](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/), and [SSL ↗](https://www.cloudflare.com/learning/ssl/what-is-ssl/).

### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#pkix-and-ssl-exceptions)PKIX and SSL exceptions

`PKIX` exceptions and other `SSLHandshakeException`s occur when Foundry does not have the certificates needed to authenticate with the source. Install the correct certificates:

*   **[Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) sources:** configure certificates in the source's settings. See [Add certificates](https://www.palantir.com/docs/foundry/data-connection/set-up-source/#optional-add-certificates).
*   **[Agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) sources:** see [Data Connection and certificates](https://www.palantir.com/docs/foundry/data-connection/agent-configuration-reference/#certificates).

For sources that only support the deprecated TLSv1.0 or TLSv1.1 protocols, see [Connect to data sources using the insecure TLSv1.0 and TLSv1.1 protocols](https://www.palantir.com/docs/foundry/data-connection/agents-troubleshooting/#connect-to-data-sources-using-the-insecure-tlsv10-and-tlsv11-protocols). Palantir discourages the use of deprecated TLS versions.

### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#server-and-client-certificates)Server and client certificates

It is important to understand the difference between a server certificate and a client certificate.

**Server certificates (TLS):** When the Foundry client establishes a TLS connection with the external system, the external system presents a certificate to prove its identity and to provide the public key needed to establish an encrypted connection. The Foundry client then verifies the external system's identity by validating the certificate chain up to a trusted root Certificate Authority (CA). Most systems trust a well-known list of public CAs by default. You only need to add a server certificate to your source configuration (Foundry's `truststore`) if the external system presents a certificate that is not signed by one of these public CAs, such as a self-signed certificate or one issued by a private or internal CA. Server certificates are provided as the certificate only, never the private key.

**Client certificates (mTLS):** A client certificate is used by the Foundry client to prove its own identity to the external system. With mTLS, the external system and Foundry each verify the other's identity. Client certificates are provided as a certificate and private key pair.

To configure certificates, see [Add certificates](https://www.palantir.com/docs/foundry/data-connection/set-up-source/#optional-add-certificates).

### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#common-certificate-errors)Common certificate errors

**`[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self signed certificate in certificate chain`**

This error indicates that server certificates are missing from the source configuration. In Python environments, the entire [certificate chain ↗](https://en.wikipedia.org/wiki/Chain_of_trust) is validated by the underlying OpenSSL library when establishing secure connections.

To retrieve the entire certificate chain for an external system, run the following command:

Copied!

```bash
1openssl s_client -connect <external_systems_hostname>:<desired_port> -showcerts < /dev/null
```

This command must be run from a host with network access to the external system. For [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker) sources, run it from the [source terminal](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#source-terminal). For [agent worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agent-worker) sources, run it from the agent host or another system with access to the agent's network.

## [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#oauth-and-outbound-applications)OAuth and outbound applications

When a source is configured with an [outbound application](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/), authentication is delegated to an external OAuth 2.0 provider on behalf of the calling user. The user must complete the [interactive authorization flow](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/#use-outbound-applications-in-data-connection) at least once before the source can be used from non-interactive contexts, such as scheduled functions or [an automation](https://www.palantir.com/docs/foundry/automate/overview/).

### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#common-oauth-errors)Common OAuth errors

#### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#http-401-unauthorized)`HTTP 401: Unauthorized`

If a function or workflow returns `HTTP 401: Unauthorized` despite the source being configured with an outbound application, verify that:

*   The user invoking the function has completed the [interactive authorization flow](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/#use-outbound-applications-in-data-connection) at least once.
*   The outbound application is **Enabled** in Control Panel.
*   The [scopes](https://www.palantir.com/docs/foundry/administration/configure-outbound-applications/#configuration-options) configured on the outbound application include the permissions required to access the requested API resource.

#### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#credentials-expired-and-no-refresh-handler-provided)`Credentials expired and no refresh handler provided`

This error is surfaced when calling a source from a Python or TypeScript function. The cached refresh token has expired or was revoked by the external OAuth 2.0 server. The user must invoke the function (or another workflow backed by the same outbound application) from an interactive interface to complete the authorization flow again.

#### [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#resolved-source-credentials-are-not-present-on-the-source)`Resolved source credentials are not present on the Source`

This error is surfaced when calling a source from a Python or TypeScript function. It indicates that the source does not have an outbound application configured, or that the calling identity could not be resolved to an authorized user. Confirm that the source's domain is configured with **OAuth 2.0** authentication and that the function is invoked on behalf of an authenticated end user rather than a service account.

## [](https://www.palantir.com/docs/foundry/data-connection/troubleshooting/#capability-specific-issues)Capability-specific issues

The guidance above applies to any source. For problems specific to a particular capability, see the dedicated references:

*   **Syncs:** Incremental JDBC behavior, intermittent failures and hangs, `REQUEST_ENTITY_TOO_LARGE`, `BadPaddingException`, and unexpected data types: see the [syncs troubleshooting reference](https://www.palantir.com/docs/foundry/data-connection/syncs-troubleshooting/).
*   **Agent workers:** Agent status, Agent Manager and Bootstrapper startup errors, out-of-memory conditions, download issues, and permissions: see the [agents troubleshooting reference](https://www.palantir.com/docs/foundry/data-connection/agents-troubleshooting/).
*   **Other common questions:** Scheduling, duplicate rows, schema mismatches, and JDBC data types: see the [Data Connection FAQ](https://www.palantir.com/docs/foundry/data-connection/faq/).

[← PREVIOUS Connection security](https://www.palantir.com/docs/foundry/data-connection/connection-security/)

[NEXT Foundry worker vs. agent worker →](https://www.palantir.com/docs/foundry/data-connection/foundry-worker-vs-agent-worker/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

