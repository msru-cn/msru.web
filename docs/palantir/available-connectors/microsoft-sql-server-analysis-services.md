Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server-analysis-services/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server-analysis-services/#microsoft-sql-server-analysis-services)Microsoft SQL Server Analysis Services

The Microsoft SQL Server Analysis Services connector is a [Palantir-provided driver](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/) for Microsoft SQL Server Analysis Services.

To create a new Microsoft SQL Server Analysis Services source, follow the [standard setup flow for Palantir-provided drivers](https://www.palantir.com/docs/foundry/data-integration/foundry-provided-drivers/#setup), then use the sections below for Microsoft SQL Server Analysis Services-specific configuration and networking. For the complete property reference, see the [official Microsoft SQL Server Analysis Services driver documentation ↗](https://cdn.cdata.com/help/FYK/jdbc/pg_connectionj.htm).

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server-analysis-services/#configuration)Configuration

The properties below are mandatory or recommended.

| Property | Required? | Description | Default |
| --- | --- | --- | --- |
| [`URL` ↗](https://cdn.cdata.com/help/FYK/jdbc/RSBAnalysisServices_p_URL.htm) | Mandatory | The URL used to connect to the Microsoft SQL Server Analysis Services. | `https://{serverAddress}/olap/msmdpump.dll` |
| [`AuthScheme` ↗](https://cdn.cdata.com/help/FYK/jdbc/RSBAnalysisServices_p_AuthScheme.htm) | Recommended | The scheme used for authentication. Accepted entries are NTLM, Basic, Digest, None, and Negotiate. | `Basic` |
| [`Password` ↗](https://cdn.cdata.com/help/FYK/jdbc/RSBAnalysisServices_p_Password.htm) | Recommended | Specifies the password of the authenticating user account. | — |
| [`User` ↗](https://cdn.cdata.com/help/FYK/jdbc/RSBAnalysisServices_p_User.htm) | Recommended | Specifies the user ID of the authenticating Microsoft SQL Server Analysis Services user account. | — |

## [](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server-analysis-services/#networking)Networking

The table below lists the domains that the source needs to be able to access in order to successfully run.

For each domain, add a corresponding [egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/). If the source is hosted on-premises and not directly reachable from Foundry, use an [agent proxy egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies) instead; the agent host itself must also be able to reach the listed domains. See [using an agent as a proxy](https://www.palantir.com/docs/foundry/data-connection/agent-proxy/) for details.

| Domain | Required |
| --- | --- |
| <URL> | Always. URL connection property |
| <KerberosKDC>:88 | If `AuthScheme=Negotiate` |
| <KerberosServiceKDC>:88 | If `AuthScheme=Negotiate` AND Kerberos topology uses multiple realms |

[← PREVIOUS Microsoft SQL Server](https://www.palantir.com/docs/foundry/available-connectors/microsoft-sql-server/)

[NEXT Microsoft Teams →](https://www.palantir.com/docs/foundry/available-connectors/microsoft-teams/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

