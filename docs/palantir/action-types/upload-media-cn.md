Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/upload-media/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/upload-media/#upload-media)上传媒体

Actions 支持使用 action form 或 table 上传媒体文件。对于 Foundry 中的大多数用例，推荐上传到 media reference 属性。

Media reference 属性（由 [media sets](https://www.palantir.com/docs/foundry/data-integration/media-sets/) 支持）相比 attachment 属性有几个优势：

*   **可扩展性：** 支持数十亿文件，具有高效的存储和检索。
*   **内置转换：** 支持多种媒体转换和 LLM 功能，开箱即用。
*   **高级预览：** 为支持的格式提供内置渲染和丰富的预览功能。
*   **格式支持：** 支持标准格式和专用格式（如 NITF、GeoTIFF 和 DICOM）的定制工作流。

用户可以通过文件选择器界面上传媒体文件，文件在 action 成功提交后会持久化到 media set。

[格式转换](https://www.palantir.com/docs/foundry/media-sets-advanced-formats/media-overview/#additional-input-formats) 仅在 action 完成且媒体文件已上传到 media set 后进行。

## [](https://www.palantir.com/docs/foundry/action-types/upload-media/#configuration)配置

有关配置 media reference 属性和设置媒体上传 action 的详细说明，请参阅 [配置 media reference 属性](https://www.palantir.com/docs/foundry/object-link-types/base-types/#configure-media-reference-properties) 和 [上传媒体](https://www.palantir.com/docs/foundry/media-sets-advanced-formats/upload-media/)。

## [](https://www.palantir.com/docs/foundry/action-types/upload-media/#permissions)权限

通过 action 上传媒体的权限由 [action submission criteria](https://www.palantir.com/docs/foundry/action-types/submission-criteria/) 管理。如果用户满足 action submission criteria，他们不需要对底层 media set 拥有任何权限即可上传媒体。

当 media set 首次被添加到 object type 或被 action type 引用时，会检查对 media set 的编辑权限。将 media set 添加到你的 ontology 会将访问控制从 media set 委托给 ontology。这意味着任何可以管理 object type 上 actions 的人都可以控制谁能上传媒体到该 media set。

[← 上一页 Configure sections](https://www.palantir.com/docs/foundry/action-types/configure-sections/)

[下一页 Upload attachments →](https://www.palantir.com/docs/foundry/action-types/upload-attachments/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

