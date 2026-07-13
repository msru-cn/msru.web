Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/app-building/operational-apps/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/app-building/operational-apps/#what-is-an-operational-application)What is an operational application?

At Palantir, we frequently refer to certain workflows and applications as being "operational." What does this mean?

An **operational application** is used to drive a specific decision-making process and allow users to capture their decisions via data writeback. While traditional dashboards and reports focus on delivering read-only insights to users, operational applications enable users to take action.

Generally, we've found that workflows that drive decision-making are much more likely to gain user adoption and affect organizational outcomes. The rest of this page describes how you can use Foundry's application building capabilities to create operational applications in practice.

## [](https://www.palantir.com/docs/foundry/app-building/operational-apps/#action-types)Action types

In the Foundry Ontology, [action types](https://www.palantir.com/docs/foundry/action-types/overview/) provide a centralized, governed way to define how users in the organization can write data back into the system. When configuring an action type, you can define the parameters a user will enter and flexibly [configure the form](https://www.palantir.com/docs/foundry/action-types/configure-sections/) that your users will see, with rich options for creating subsections, descriptions, and more.

Governance of who can perform which actions is controlled using [submission criteria](https://www.palantir.com/docs/foundry/action-types/submission-criteria/), which enable you to define rules of any level of complexity to ensure data is only written in accordance with your organization's constraints.

In addition to basic form entry workflows, action types support a range of advanced options:

*   [Uploading attachments](https://www.palantir.com/docs/foundry/action-types/upload-attachments/) allows your users to capture images, PDFs, or other files when submitting information.
*   [Side effects](https://www.palantir.com/docs/foundry/action-types/side-effects-overview/) allow your users to send notifications (including via email), or orchestrate sending data outside of Foundry to other systems using [Webhooks](https://www.palantir.com/docs/foundry/action-types/webhooks/).
*   [Function-backed Actions](https://www.palantir.com/docs/foundry/action-types/function-actions-overview/) let you define action types of arbitrary complexity using code to define how objects should change.
*   [Triggering schedule builds](https://www.palantir.com/docs/foundry/action-types/trigger-schedule-build/) allows your users to trigger data integration builds.

## [](https://www.palantir.com/docs/foundry/app-building/operational-apps/#using-action-types-in-applications)Using action types in applications

Once an action type has been defined in the Ontology, using it in Foundry's application building tools is seamless. [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/) and [Slate](https://www.palantir.com/docs/foundry/slate/overview/) both natively support embedding action forms directly into user-facing applications.

*   In Workshop, the [Button Group Widget](https://www.palantir.com/docs/foundry/workshop/widgets-button-group/) can be configured to let your users submit data back into the platform easily.
*   In Slate, the [Action Widget](https://www.palantir.com/docs/foundry/slate/widgets-platform/#action) surfaces an action form to your users. You can embed it within a [Dialog](https://www.palantir.com/docs/foundry/slate/widgets-container/#dialog-widget) to mimic the Workshop experience, or weave it into your application as you see fit.
*   If you are interested in developing custom applications entirely outside of Foundry's application building frameworks, you can search for and apply actions using Foundry's [REST APIs](https://www.palantir.com/docs/foundry/api/ontology-resources/actions/apply-action/).

## [](https://www.palantir.com/docs/foundry/app-building/operational-apps/#conclusion)Conclusion

Investments in data integration and management allow operators in your organization to make better decisions using data and capture those decisions into the system for further learning. You can create closed-loop workflows in just hours with Foundry's Ontology and application building capabilities.

Get started by [learning how to create an action type.](https://www.palantir.com/docs/foundry/action-types/getting-started/)

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/app-building/overview/)

[NEXT Connecting analytics to operations →](https://www.palantir.com/docs/foundry/app-building/analytics-operations/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

