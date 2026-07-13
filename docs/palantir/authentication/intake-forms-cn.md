Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/intake-forms/

Markdown Content:
## 信息采集表

平台访问通常通过 SAML 或 OpenID Connect (OIDC) 与相应的 IdP 集成来管理。用户和群组的信息和属性通过这些集成继承到平台中。如果现有的 IdP 无法提供有效管理平台访问所需的用户信息，管理员可以设置认证信息采集表来采集、审核和补充这些信息。

## 信息采集表管理

拥有管理身份认证提供商集成权限的用户（默认为 `Organization administrators`）可以在 [Control Panel](https://www.palantir.com/docs/foundry/authentication/overview/) 中创建、编辑和删除信息采集表。进入 **Enrollment settings** 下的 **Authentication** 标签页，选择要关联信息采集表的认证集成。

![Image 1: 在 Control Panel 的 Authentication 标签页中管理信息采集表。](https://www.palantir.com/docs/resources/foundry/authentication/intake-form-overview.png)

### 表单编辑器

信息采集表通过添加组件来采集必要的用户属性，并为审核人提供上下文。

以下组件在适当配置后可以作为用户属性被采集：

*   文本字段
*   下拉菜单
*   多选
*   日期

![Image 2: 信息采集表配置管理页面截图。](https://www.palantir.com/docs/resources/foundry/authentication/intake-form-editor.png)

`File upload` 和 `Acknowledgment` 组件不能作为用户属性被采集，但可以为审核人提供有用的上下文。例如，组织可以要求用户在请求某些属性时上传培训证书。

信息采集表的字段配置支持高级行为，比如定义条件字段。例如，下拉菜单的条件字段可以配置为仅根据用户之前的选择才显示。

配置完成后可以预览表单，验证用户的填写体验。

![Image 3: 已配置的信息采集表预览。](https://www.palantir.com/docs/resources/foundry/authentication/intake-form-preview.png)

### 补充表单

可以配置一个主表单，在用户首次登录时采集审核其平台访问资格所需的信息。

此外，如果需要采集更多用户信息并进行审核，可以配置补充表单。用户不需要在首次登录时填写已配置的补充表单，但可能需要定期或在一段时间不活跃后填写。例如，平台访问可能以提交年度培训证书为条件，而该证书是在填写主信息采集表时采集的。

### 设置

表单设置（如完成要求和审批管理）也可以配置。默认情况下，`Organization administrators` 可以审批所有已提交的表单条目；高级设置允许联合审批，定义除 `Organization administrators` 之外谁可以审批哪些属性。

如果从用户信息采集表收集的属性被[组织分配规则](https://www.palantir.com/docs/foundry/authentication/org-assignment/)使用，则用户被分配到的组织的管理员可以审批相关的信息采集表条目。

在下面的例子中，可以分别将"Sales"和"Customer Support"管理组设为不同属性的审核人。

![Image 4: Control Panel 中用户信息采集表的设置配置页面。](https://www.palantir.com/docs/resources/foundry/authentication/intake-form-settings.png)

### 发布

已配置的信息采集表可以预览以验证是否满足要求。配置完成后，`Organization administrator` 可以发布表单。

## 信息采集表填写

信息采集表首次发布后，所有通过该提供商认证的用户在首次登录时都需要填写表单。填写完成后，在有资格的用户审批其提交之前，用户无法访问平台。在等待审核期间，用户可以重新提交表单。

![Image 5: 提交后如何重新提交表单的示例。](https://www.palantir.com/docs/resources/foundry/authentication/intake-form-login.gif)

用户的信息采集表审批通过后，下次登录时无需再次填写。根据表单的周期[设置](https://www.palantir.com/docs/foundry/authentication/intake-forms/#settings)配置，用户可能最终需要再次填写。

如果信息采集表在发布后被修改，默认情况下只有新用户需要填写更新后的表单。已经完成旧版信息采集表并已获批的用户不会被撤销授权。如果信息采集表的变更足够重大、需要所有用户重新授权，可以在重新发布时覆盖默认行为，这会锁定所有现有用户，要求他们填写并获批更新后的信息采集表。

## 信息采集表审核

有资格的用户可以通过进入 [Control Panel 中的 **Approvals** 收件箱](https://www.palantir.com/docs/foundry/administration/control-panel-approvals/)并筛选 **User intake requests** 来审核已提交的信息采集表。

![Image 6: Control Panel 的 Approvals 收件箱中的信息采集表审核。](https://www.palantir.com/docs/resources/foundry/authentication/intake-form-review.png)

如果信息采集表条目会导致对某个[组织](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/)的平台访问权限，且由 `Organization administrators` 提交，则会自动获批。
