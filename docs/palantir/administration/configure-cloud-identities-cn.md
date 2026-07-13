Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/administration/configure-cloud-identities/

Markdown Content:
## 配置 cloud identities

Cloud identities 允许你在不使用静态凭证的情况下对云提供商资源进行身份验证。

Control Panel 中的 **Cloud identities** 页面仅在以下条件满足时显示：

*   你的 Foundry enrollment 托管在 AWS 上。
*   你的 Foundry enrollment 运行在 Rubix（Palantir 基于 Kubernetes 的基础设施）上。

Cloud identity 认证允许 Foundry 访问你的云提供商中的资源，包括 Amazon AWS、Microsoft Azure 或 Google Cloud Platform。Cloud identities 在 Control Panel 的 [enrollment](https://www.palantir.com/docs/foundry/administration/enrollments-and-organizations/) 级别配置和管理，在 [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) 中设置单个源连接时应导入使用。

Foundry 生成的 cloud identity 必须被授予访问目标云平台资源的权限。在可用的情况下，建议使用 cloud identity 而非基于静态凭证的认证。

## AWS 的 Cloud identity

对于 AWS 资源的访问，cloud identity 代表在你的 Foundry enrollment 所在的 AWS 账户中生成的 AWS Identity and Access Management (IAM) 角色。

截至 2024 年 4 月，每个 enrollment 在 Control Panel 中最多可创建 15 个 cloud identities。如果需要额外的 cloud identities，请提交支持工单讨论可用选项。

![Image 1: Cloud Identity 概览](https://www.palantir.com/docs/resources/foundry/administration/cloud-identity-overview.png)

### 为 enrollment 启用 AWS cloud identity

要为你的 enrollment 生成 cloud identity，在 Control Panel 侧边栏中导航到 **Enrollment Settings > Cloud Identities**。访问此页面需要 `Manage cloud identity configuration` workflow，该 workflow 授予 `Enrollment administrator` 和 `Information security officer` 角色。

![Image 2: 启用 AWS Cloud Identity](https://www.palantir.com/docs/resources/foundry/administration/enable-multiple-aws-cloud-identities.png)

选择 **Create Identity** 以生成 cloud identity 及关联的 IAM 角色。角色的 [Amazon Resource Number (ARN) ↗](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns) 将会显示。

创建后，cloud identity 无法删除，名称也无法编辑。使用多个 cloud identities 的用户应仔细考虑是否确实需要创建新的 cloud identity。

要启用 cloud identity 的 IAM 角色进行认证和访问资源，你必须在自己的 AWS 账户中创建一个单独的 IAM 角色，并创建两个策略。

**Policy 1：** 你必须创建一个信任策略，允许 cloud identity 的 IAM 角色假设你在 AWS 账户中创建的 IAM 角色。

示例信任策略，附加到你的 AWS 账户中的 IAM 角色上，用于生成的 cloud identity 角色 ARN：

```
{
   "Statement":
   [
      {
         "Action": "sts:AssumeRole",
         "Effect": "Allow",
         "Principal": {
            "AWS": "$GENERATED_CLOUD_IDENTITY_ARN",
         },
      }
   ],
   "Version": "2012-10-17"
}
```

将 `$GENERATED_CLOUD_IDENTITY_ARN` 替换为完整的 ARN 字符串。你可以通过选择 **Copy to clipboard** 从 Control Panel 复制 ARN 字符串。

![Image 3: 复制 ARN 到剪贴板](https://www.palantir.com/docs/resources/foundry/administration/copy-cloud-identity-arn.png)

**Policy 2：** 你必须创建一个权限策略，附加到你在 AWS 账户中创建的 IAM 角色上，允许该角色在资源上执行所需任务。

以下是一个 S3 权限策略示例。你需要将 `$BUCKET` 替换为目标源 S3 bucket 的名称。

```
{
   "Statement":
   [
      {
         "Action":
         [
            "s3:GetObject",
            "s3:ListBucket",
            "s3:DeleteObject",
            "s3:PutObject"
         ],
         "Effect": "Allow",
         "Resource":
         [
            "arn:aws:s3:::$BUCKET",
            "arn:aws:s3:::$BUCKET/*"
         ]
      }
   ],
   "Version": "2012-10-17"
}
```

在 [AWS 文档 ↗](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#:~:text=To%20delegate%20permission,assume%20the%20role.) 中了解有关这些策略的更多信息。

确保必要的 Foundry Rubix IP 已被添加到你的 AWS 网络 allowlist 中。此外，验证相关的 egress 策略已添加到你的 Foundry enrollment，以允许 Foundry 和 AWS 账户之间的直接连接。你可以在 Control Panel 的 **Network Egress** 选项下找到 enrollment 的 Foundry Rubix IP，并[设置必要的 egress 策略](https://www.palantir.com/docs/foundry/administration/configure-egress/)。

如果你的 S3 bucket 与 Foundry 实例位于同一区域，你需要使用单独的流程来允许到这些 bucket 的 egress；来自 Foundry Rubix 的网络流量将改为通过用于连接 S3 的 Amazon VPCE。VPCE 标识符可以在 Control Panel 的 Network Egress 部分的 S3 bucket policies 标签页中访问。根据 S3 源的配置方式，VPCE 标识符也可以通过 Data Connection 应用暴露。

![Image 4: 一个字符串值展示给用户，以便从 Foundry 复制粘贴到其 AWS 账户](https://www.palantir.com/docs/resources/foundry/administration/vpc-address.png)

### 在配置 S3 源时使用 cloud identity

启用后，**Cloud identity** 凭证选项将在 Data Connection 的 **Connection details** 页面中可用于你的 S3 源。

![Image 5: 使用 Cloud Identity 的 S3 Source](https://www.palantir.com/docs/resources/foundry/administration/s3-source-with-cloud-identity.png)

使用 cloud identity 认证时，角色 ARN 将显示在凭证部分。选择 **Cloud identity** 选项后，将预选一个默认 cloud identity。如果你的 enrollment 上存在多个 cloud identities，下拉菜单将允许你从列表中选择一个。选择 cloud identity 后，你还需要配置以下内容：

1.   在目标 Amazon AWS 账户中配置 Identity and Access Management (IAM) 角色。
2.   授予 IAM 角色访问你希望连接的 S3 bucket 的权限。通常可以通过 [bucket policy ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html) 来实现。
3.   在 S3 源配置详情中，在 [Security Token Service (STS) role ↗](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) 配置下添加 IAM 角色。Foundry 中的 cloud identity IAM 角色将在访问 S3 时尝试[假设 AWS 账户 IAM 角色 ↗](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html)。
4.   [配置相应的信任策略 ↗](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage.html) 以允许 cloud identity IAM 角色假设目标 AWS 账户 IAM 角色。
