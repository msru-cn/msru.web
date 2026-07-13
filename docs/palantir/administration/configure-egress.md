Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-egress/

Markdown Content:
## Configure network egress

Network egress refers to any network traffic originating from within Foundry that attempts to connect to an external system. This page outlines how network egress is configured and managed in [Control Panel](https://www.palantir.com/docs/foundry/administration/control-panel/) and how those configurations are consumed by user workloads in Foundry.

## Network egress overview

Foundry provides strict network firewalls to protect customer data. Customer-managed network egress policies are used to apply network firewall rules to individual workloads using container networking technology ([Cilium ↗](https://cilium.io/), [eBPF ↗](https://ebpf.io/)). In addition to these customer-specific rules, Palantir's Information Security team maintains network firewall rules at the infrastructure proxy level to provide another layer of security. Together, these rules govern the network egress execution of user workloads in Foundry, including the following:

*   [Data connection sources](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) using a [Foundry worker](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#foundry-worker)
*   [External transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/)
*   [External functions](https://www.palantir.com/docs/foundry/data-connection/external-functions/)
*   External streaming user-defined functions (UDFs)
*   [External model adapters](https://www.palantir.com/docs/foundry/integrate-models/model-adapter-creation/) (for modeling live deployments)
*   [Code workbooks](https://www.palantir.com/docs/foundry/code-workbook/getting-started/)

Opening a network egress route is always a security risk. Information security officers for a Foundry enrollment should ensure that they only open network routes to trusted destinations, and limit access to those routes to a trusted group of developers. Even a trusted external system can be abused by malicious actors to bypass security controls. Information security officers should leverage Foundry change management tools to ensure changes to egress logic are reviewed by a trusted group, and establish audit processes to ensure egress logic remains secure.

Multiple egress policy types exist to represent different network paths from Foundry to external systems:

*   [Direct connection policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#direct-connection-egress-policies)
*   [Agent proxy policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#agent-proxy-egress-policies)
*   [Private link policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#private-link-egress-policies)
*   [Bucket endpoint policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#bucket-endpoint-egress-policies)

To create an egress policy, navigate to the **Network egress** page in Control Panel and select **Request network egress policy**.

## Direct connection egress policies

Direct connection policies enable connections where egress can be made directly from Foundry's network to the external destination. In the case of Foundry instances hosted in the cloud, this will mean connections made over the Internet, such as REST APIs or systems hosted in the cloud. In the case of on-premise Foundry instances however, this will mean connections to systems connected to the on-premise network itself.

The following list summarizes the options that may be used when configuring direct connection egress policies.

| Option | Description |
| --- | --- |
| Address | **Option 1: DNS** A domain name in the format `subdomain.domain.com`. Wildcard domains are also supported, allowing traffic to multiple subdomains under a given domain (for example, `*.domain.com`). See [Wildcard egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#wildcard-egress-policies) for more details. **Option 2: IP** A single IPv4 address in the format `x.x.x.x` **Option 3: CIDR** An IPv4 CIDR address block in the format `x.x.x.x/x` |
| Port(s) | The port or port range that should be allowed for the specified domain. Port values must be in the range of `1 - 65535` inclusive. **Option 1: Single port** When using a DNS address, you must specify a single port. **Option 2: Port range** When using this option, you must provide a starting and ending port, where the starting port is less than or equal to the ending port. |

### Server Name Indication (SNI) verification

Palantir's network infrastructure attempts to perform SNI verification by default for all network connections using port **443** (default HTTPS port). If the traffic over that port does not have SNI, which is the case for some protocols like FTP(S), SFTP, and most TCP-based database connections, you may encounter hanging connections and/or timeout errors.

If you expect non-HTTPS traffic on port 443 for a given policy, administrators have the ability to disable SNI verification on that policy.

### Wildcard egress policies

Wildcard addresses allow you to allowlist an entire subdomain level of a domain (for example, `*.domain.com`) rather than managing individual subdomains. This is useful when subdomains are dynamic or unknown ahead of time — for example, Azure SQL redirect mode, Kafka nodes, or MongoDB SRV connections.

Wildcards must appear as a single element at the leftmost label of the domain, and must not target a **public suffix** (for example, `*.com`, `*.co.uk`, `*.github.io`) — if they do, the policy will be unusable. A wildcard address matches exactly one subdomain level. For example, `*.domain.com` matches `bar.domain.com` but not `domain.com` or `bar.baz.domain.com`.

| Pattern | Supported |
| --- | --- |
| `*.domain.com` | ✅ |
| `*.com` | ❌ Public suffix |
| `*.s3.amazonaws.com` | ❌ Public suffix |
| `subdomain.*.com` | ❌ Intermediary wildcard |
| `*.*.domain.com` | ❌ Multiple wildcards |

## Agent proxy egress policies

Agent proxy egress policies enable connections to on-premise or privately hosted systems over a [Data Connection agent](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#agents). Agent proxy egress policies allow Foundry workflows to function _as if_ they were directly connecting to the external system directly, without requiring any additional configuration; all the traffic is transparently proxied via the agent.

Sources using agent egress policies are supported in the following workflows:

*   All first-class [data connection capabilities](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#capabilities)
    *   Unsupported workflows: 
        *   [Virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/)
        *   [OIDC authentication](https://www.palantir.com/docs/foundry/authentication/oidc-getting-started/)

*   [External transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/) (preview supported only for VS code)
*   External [deployed functions](https://www.palantir.com/docs/foundry/functions/functions-deployed/). Learn more about [external functions](https://www.palantir.com/docs/foundry/data-connection/external-functions/).
*   External streaming [user-defined functions (UDFs)](https://www.palantir.com/docs/foundry/transforms-java/user-defined-functions/)
*   [Code workspaces](https://www.palantir.com/docs/foundry/code-workspaces/overview/)
*   [Compute modules](https://www.palantir.com/docs/foundry/compute-modules/overview/)

The following list summarizes the options that may be used when configuring agent proxy egress policies.

| Option | Description |
| --- | --- |
| Address | **Option 1: DNS** The external system domain name in the format `subdomain.domain.com`. Wildcard domains are also supported, allowing traffic to any subdomain at one level (for example, `*.domain.com`). See [Wildcard egress policies](https://www.palantir.com/docs/foundry/administration/configure-egress/#wildcard-egress-policies) for more details. **Option 2: IP** The external system single IPv4 address in the format `x.x.x.x`. **Note:** Private IP address ranges, such as `10.x.x.x`, may conflict with Foundry's internal infrastructure and are not routable. For source systems accessible only using private IP addresses, use [host overrides](https://www.palantir.com/docs/foundry/data-connection/agent-configuration-reference/#when-to-use-host-overrides) to map a placeholder domain name to the private IP address within your network. **Option 3: CIDR** The external system IPv4 CIDR address block in the format `x.x.x.x/x` |
| Port(s) | The port or port range that should be allowed for the specified domain. Port values must be in the range of `1 - 65535` inclusive. **Option 1: Single port** When using a DNS address, you must specify a single port. **Option 2: Port range** When using this option, you must provide a starting and ending port, where the starting port is less than or equal to the ending port. |
| Agent(s) | The agent(s) to be used to connect to the external system. If more than one agent is specified, traffic will be assigned randomly to one of the agent in the list. |

## Private link egress policies

Private link egress policies enable connections over [private links](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/) by routing all traffic to an address to go over the private link.

The following list summarizes the options that may be used when configuring private link egress policies.

| Option | Description |
| --- | --- |
| Address | The external system domain name in the format `subdomain.domain.com`. Only the specific domain name will be allowed, and wildcards are not supported. For example, to allow traffic to both `foo.mycompany.com` and `bar.mycompany.com`, two separate domain name policies must be created. |
| Port(s) | The port or port range that should be allowed for the specified domain. Port values must be in the range of `1 - 65535` inclusive. **Option 1: Single port** When using a DNS address, you must specify a single port. **Option 2: Port range** When using this option, you must provide a starting and ending port, where the starting port is less than or equal to the ending port. |
| Private link | The [private link](https://www.palantir.com/docs/foundry/administration/configure-private-link-egress/) to be used to connect to the external system. |

Sources using private link egress policies are not supported in the following workflows:

*   [Virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/)
*   [Bring-your-own-bucket storage for Iceberg tables](https://www.palantir.com/docs/foundry/iceberg/iceberg-byob/)
*   [OIDC authentication](https://www.palantir.com/docs/foundry/authentication/oidc-getting-started/)

## Bucket endpoint egress policies

When the Palantir platform is hosted on the same cloud provider as the external system you must egress to (Amazon AWS, Azure or Google Cloud Platform), specific allowlisting may be required to let traffic flow within the cloud provider's specific endpoints. Allowlisting is controlled through **bucket endpoint** egress policies.

### AWS S3 bucket endpoint policies

For Palantir platform instances hosted in AWS, bucket endpoint policies are required when connecting to external S3 buckets hosted in the same [AWS region ↗](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html). This requirement is due to how AWS handles networking for requests to S3 from a VPC gateway endpoint in the same region (the Palantir platform in this case).

To establish a connection to AWS, follow the steps below:

1.   Create a network egress policy of type **Bucket endpoint** from Control Panel.

The table below summarizes configuration options for S3 bucket endpoint egress policies:

| Option | Description |
| --- | --- |
| Address | The external system domain name in the format `subdomain.domain.com`. Only the specific domain name will be allowed, and wildcards are not supported. For example, to allow traffic to both `foo.mycompany.com` and `bar.mycompany.com`, two separate domain name policies must be created. |
| Port(s) | Port 443 |
| S3 bucket name | The name of the S3 bucket to which this policy egresses. |

![Image 1: Dialog opened when creating and configuring a bucket endpoint policy](https://www.palantir.com/docs/resources/foundry/administration/network-egress-create-bucket-endpoint-policy.png)

1.   Ensure that the [bucket policy ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html) for your S3 bucket allows inbound traffic from the VPC endpoint of your Palantir platform instance.

Once the network policy is created, the VPC endpoint the connection comes from will be shown on the policy overview page.

![Image 2: Bucket endpoint policy showing VPC endpoint](https://www.palantir.com/docs/resources/foundry/administration/network-egress-policy-details-vpce.png)

The Amazon S3 documentation contains [an example ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html#example-bucket-policies-restrict-accesss-vpc-endpoint) of how a bucket policy may be used to restrict traffic to an S3 bucket to a specific VPC endpoint. To learn more about managing inbound traffic to S3 from VPC endpoints, review the official [AWS documentation ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html).

Sources using bucket endpoint egress policies are not supported in the following workflows:

*   [Virtual tables](https://www.palantir.com/docs/foundry/data-integration/virtual-tables/)

## Using a policy

This section summarizes the relevant [permissions](https://www.palantir.com/docs/foundry/administration/configure-egress/#permissions) for network egress policies, the potential [lifecycle states](https://www.palantir.com/docs/foundry/administration/configure-egress/#policy-states) that a network egress policy can be in, and describes how to [apply a network egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#apply-a-policy).

### Permissions

The below table shows a summary of the operations that are relevant for network egress policies and the default configuration of these permissions.

| Operation | Description |
| --- | --- |
| Propose | Any Foundry user may propose a network egress policy. Proposed policies only become active and usable once they are approved. Policies pending approval are visible in the Approvals inbox in Control Panel. |
| Approve/Create | Granted via the `Manage network egress configuration` workflow. By default, this workflow is then granted to both `Enrollment Administrator` and `Information Security Officer` roles. |
| Update metadata | Granted via the `Manage network egress configuration` workflow. By default, this workflow is then granted to both `Enrollment Administrator` and `Information Security Officer` roles. |
| Revoke | Granted via the `Manage network egress configuration` workflow. By default, this workflow is then granted to both `Enrollment Administrator` and `Information Security Officer` roles. |
| Pause | Palantir's Information Security team has the ability to block network egress that are deemed a security risk or threat. Any network egress policies blocked by this will appear as `Paused` in Control Panel. If you believe a legitimate network egress policy for your enrollment has been incorrectly paused, file a support ticket with the relevant details. |
| View | Allows assigned users and groups to see the existence of the policy, but does not allow them to import and use it in any workloads. In general, we recommend making anyone who might ever need to use the policy a viewer, even if they are not currently an importer. |
| Import | Allows assigned users and groups to see the existence of the policy and to import and use within workloads. |

The primary management interface for network egress lives at the enrollment level in Control Panel. Users with access to the `Manage network egress configuration` workflow, associated with the Enrollment administrator role, will be able to access the **Network Egress** page to perform any administrative actions on egress policies.

Enrollment Administrators and Information Security Officers are additionally always able to see which projects an egress policy has been imported into. This is possible regardless of the individual access of the administrative user's access to the project(s). This metadata is available to ensure that Information Security Officers have sufficient visibility into policy usage to take governance decisions on possibly revoking or otherwise restricting the ability for a policy to be used.

When approving a policy, the Information Security Officer must decide which users or groups should be granted the ability to either `View` or `Import` the network egress policy. This may also be managed later in Control Panel using the **Manage Sharing** button on the policy details page.

By default, policies are "opt-in" and must be attached to a workload in Foundry. For example, when creating a data connection source, policies for that source should be explicitly attached to the source by a user with `Importer` permission on the policy. This follows the [principle of least privilege ↗](https://csrc.nist.gov/glossary/term/least_privilege), ensuring that workloads are only granted egress rules that are strictly required for that workload to run successfully.

### Policy states

Throughout the lifecycle of a network egress policy, it may be in one of the various states described below:

| Policy state | Description |
| --- | --- |
| `Pending approval` | Pending approval is the default state for new network egress policies. Policies in this state can be attached to workloads, but workloads attempting to use a pending approval policy will fail to run. |
| `Active` | Once a policy is approved, it becomes active. Importers of an active policy are able to attach it to Foundry workloads to allow that workload to egress to the specified external address. |
| `Paused` | Palantir's Information Security team has blocked egress to the specified address. Workloads attempting to use a paused policy will fail to run. |
| `Revoked` | Information Security Officers for a Foundry enrollment may revoke a policy from Control Panel. Workloads attempting to use a revoked policy will fail to run. |

### Apply a policy

Follow the steps below to successfully apply a network policy:

1.   Create the policy in Control Panel. If your Foundry policies are managed by Palantir, provide the details of your egress policy to your Palantir representative. Doing so will allow Palantir to assess security risks before expanding network access. If your Foundry policy management is fully self-service, the policy will automatically be applied to the firewalls.

2.   Assign the policy to a user workload:

*   **Data Connection sources using a Foundry worker:** Specify the network policy when creating a [new source](https://www.palantir.com/docs/foundry/data-connection/set-up-source/#configure-a-network-policy).
*   **Code Workbook:** Granular network management is not yet available, and administrators must instead create a global policy. A global policy is applied indiscriminately to all workloads and should only be configured for highly trusted network routes.

To assign a policy to a user workload, the **Importer** permission is required for the specific egress policy. This permission is granted on a per-policy basis through the **Manage Sharing** setting on the respective egress policy.

![Image 3: Dialog for setting permissions on egress policy](https://www.palantir.com/docs/resources/foundry/administration/egress-policy-permissions-dialog.png)

## Limits

You can import a maximum of 10 sources into a code resource or a transform, with up to 50 egress policies that use [TCP-level allowlisting](https://www.palantir.com/docs/foundry/administration/configure-egress/#tcp-level-allowlisting) combined.

## Observability

To monitor and troubleshoot network egress policies using logs and metrics, review our [network egress observability](https://www.palantir.com/docs/foundry/administration/network-egress-observability/) documentation.

## Advanced settings

### TCP-level allowlisting

Egress controls can be enforced at either the HTTP or TCP level. TCP-level allowlisting is required for all egress policies except direct connection policies on port `80` and `443`, which are the standard port of HTTP and HTTPS traffic. The security of the connection does not change if TCP-level allowlisting is used or not.

If non-HTTP(S) traffic is transmitted over policies using port `80` or `443`, you must enable TCP-level allowlisting for egress to be successful.

## Common edge cases

### What happens when there are two identical policies, and one is paused/revoked while the other is active?

Any workloads using the active policy will run successfully, while workloads attempting to use the paused/revoked policy will fail to run.

### What happens if policies are overlapping, and one is paused/revoked and the other is active?

This may happen if a policy using a single IP address and a policy specifying a CIDR block of IP addresses overlap.

In this case, as with identical policies, any workloads using the active policy will run successfully, while workloads attempting to use the paused/revoked policy will fail to run.

### What happens if I propose a policy that already exists?

Duplicate policies are allowed, and the information security officer reviewing the proposal may choose to do one of the following:

1.   Deny the proposal entirely.
2.   Deny the proposal and grant the proposer "Importer access" to an existing identical or overlapping policy.
3.   Approve the proposal and allow duplicate or overlapping policies (not recommended).

## Which IPs do connections from Foundry come from?

When connections are initiated from Foundry to external destinations, they come from certain IP ranges. Sometimes those IPs need to be added to an allowlist before connections from Foundry will be accepted.

When Foundry is hosted in Palantir's cloud infrastructure, the egress IPs where Foundry traffic originates will be displayed on the network egress management page in Control Panel. You should copy the CIDR ranges displayed there when adding to an allowlist in the destination system.

## Cloud provider egress

### Amazon S3 bucket policies

For Foundry instances hosted in AWS, additional configuration is required when connecting to S3 buckets in the same region. This is due to how AWS handles networking for requests to S3 from a VPC gateway endpoint in the same region.

To check if your connection requires extra configuration, navigate to the **Network egress** page in Control Panel. If you find an additional tab called **S3 bucket policies**, then your instance is hosted in AWS and you must explicitly allow traffic from Palantir's VPC endpoint to any S3 buckets in the same region.

If present, the **S3 bucket policies** tab will also display the region where your instance is hosted, along with the Amazon Reference Number (ARN) of the VPC endpoint used to route traffic from Foundry to any same-region S3 buckets.

![Image 4: Control Panel configuration page for same region S3 bucket policies.](https://www.palantir.com/docs/resources/foundry/administration/network-egress-same-region-s3-bucket-policies-page.png)

To successfully connect to a bucket in the same region as Foundry, you must complete the following:

1.   Configure your bucket policy in the AWS console to allow traffic from the VPC endpoint for your Foundry instance. Learn more about [AWS bucket policies ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html).
2.   Ensure that your desired bucket is listed under **Network egress > S3 bucket policies > AWS S3 Bucket Policies** in Control Panel.
3.   Create an appropriate network egress policy as described [above](https://www.palantir.com/docs/foundry/administration/configure-egress/#network-egress-overview), and add it to the configuration details of the [Data Connection source](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) you are using to connect.

#### Allow traffic to S3 from the VPC endpoint for your Foundry instance

In the AWS console, you must ensure that the [bucket policy ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) for your S3 bucket allows inbound traffic from the VPC endpoint displayed in the **Network egress > S3 bucket policies** tab, as shown below:

![Image 5: A Control Panel page displaying the VPC endpoint for a Foundry instance.](https://www.palantir.com/docs/resources/foundry/administration/network-egress-same-region-s3-vpce.png)

The Amazon S3 documentation contains [an example ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html#example-bucket-policies-restrict-accesss-vpc-endpoint) of how a bucket policy may be used to restrict traffic to an S3 bucket to a specific VPC endpoint. To learn more about managing inbound traffic to S3 from VPC endpoints, review the official [AWS documentation ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html).

#### Add an S3 bucket policy

To add a same-region bucket, select **Add bucket policy** and follow the prompts to enter your desired bucket name, as shown below:

![Image 6: Dialog showing the inputs required to add a new same-region S3 bucket policy.](https://www.palantir.com/docs/resources/foundry/administration/network-egress-same-region-s3-bucket-policy-add.png)

The form will automatically check for a valid bucket name, as well as the region. If a valid bucket name matches the region where your Foundry instance is hosted, you will be able to save. In addition to the bucket name, you must provide a policy of `READ ONLY` or `READ WRITE`. This dictates what level of access you would like Palantir to request when establishing a connection to S3.

#### Use an S3 bucket policy

Once added, same-region bucket policies take effect immediately and apply to all workloads attempting to egress directly from Foundry to that bucket. **Unlike network egress policies, they do not need to be attached to specific sources or other workloads in Foundry.**

When creating an S3 source, the configuration interface automatically checks if the bucket is in the same region as Foundry and if the bucket has already been added in Control Panel. Users configuring the source will see either a green check indicating that the bucket is added correctly, or a red check indicating that action is required by an administrator with access to add an S3 bucket policy in Control Panel.

#### S3 bucket policy limits

You can add up to a maximum of 10 same-region buckets per enrollment. Contact Palantir Support If you require access to more than 10 same-region S3 buckets from your Foundry instance.

### Microsoft Azure Storage policies

For Foundry instances hosted in Azure, additional configuration is required when connecting to Azure Storage resources as traffic is routed over Azure service endpoints.

To check if your connection requires extra configuration, navigate to the **Network egress** page in Control Panel. If you find an additional selectable tab called **Azure Storage policies**, then your instance is hosted in Azure and you must explicitly allow traffic from Palantir's Azure subnets to any Azure Storage account with connected resources.

If present, the **Azure Storage policies** tab will display the subnet IDs that are used to route traffic from Foundry to any Azure Storage resource.

![Image 7: The Control Panel configuration page for Azure Storage policies.](https://www.palantir.com/docs/resources/foundry/administration/network-egress-azure-storage-policies-page.png)

To successfully connect to an Azure Storage resource, you must complete the following:

1.   Configure your Azure Storage account's virtual network rules in Azure to allow traffic from the subnets for your Foundry instance. Learn more about [managing Azure virtual network rules ↗](https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security?tabs=azure-portal#managing-virtual-network-rules).
2.   Ensure that your desired Azure Storage account is listed under **Network egress > Azure Storage policies** in Control Panel.
3.   Create an appropriate network egress policy as described [above](https://www.palantir.com/docs/foundry/administration/configure-egress/#network-egress-overview), and add it to the configuration details of the [Data Connection source](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) you are using to connect.

#### Allow traffic to Azure Storage account from the subnets of your Foundry instance

In your Azure account, you must ensure that the [virtual network rules ↗](https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security?tabs=azure-portal#managing-virtual-network-rules) for your Storage account allow inbound traffic from the subnet IDs displayed in the **Network egress > Azure Storage policies** tab, as shown below:

![Image 8: A Control Panel page displaying the subnets of a Foundry instance.](https://www.palantir.com/docs/resources/foundry/administration/network-egress-azure-storage-subnets.png)

#### Add an Azure Storage policy

To add a Azure Storage egress policy, select **Add Azure Storage policy**, and follow the prompts to enter your desired Storage account resource ID, as shown below:

![Image 9: Dialog showing the inputs required to add a new Azure Storage policy.](https://www.palantir.com/docs/resources/foundry/administration/network-egress-azure-storage-create.png)

The form will automatically check if the provided Azure Storage account resource ID is valid. You can find more information on how to find an Azure Storage account resource ID in the [Azure documentation ↗](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-get-info?tabs=portal#get-the-resource-id-for-a-storage-account).

#### Use an Azure Storage policy

Once added, Azure Storage policies take effect immediately and apply to all workloads attempting to egress directly from Foundry to that Storage account. Unlike network egress policies, they do not need to be attached to specific sources or other workloads in Foundry.

When creating an [ABFS source](https://www.palantir.com/docs/foundry/available-connectors/onelake-and-azure-blob-filesystem/), the configuration interface automatically checks if the Foundry is deployed on Azure and if there is a valid Storage account that has already been added in Control Panel. Users configuring the source will see a warning indicating that action is required by an administrator with access to add an Azure Storage policy in Control Panel, as shown below.

![Image 10: A warning indicating that this source requires an Azure Storage policy.](https://www.palantir.com/docs/resources/foundry/administration/network-egress-azure-storage-source-warning.png)

Following the creation of a [network egress policy](https://www.palantir.com/docs/foundry/administration/configure-egress/#network-egress-overview), if an Azure Storage policy is also required to egress, a warning is also displayed as shown below:

![Image 11: A warning indicating that this network policy requires an Azure Storage policy.](https://www.palantir.com/docs/resources/foundry/administration/network-egress-azure-policy-warning.png)

### Google Cloud Platform (GCP) egress

For Foundry instances hosted in GCP, additional configuration is required when connecting to resources also hosted on GCP projects, such as [BigQuery](https://www.palantir.com/docs/foundry/available-connectors/bigquery/), [Google Cloud Storage](https://www.palantir.com/docs/foundry/available-connectors/google-cloud-storage/), and [Google Pub/Sub](https://www.palantir.com/docs/foundry/available-connectors/pubsub/).

To set up the additional configuration needed for GCP projects, contact Palantir Support for assistance.
