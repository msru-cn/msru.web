Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/checkpoints/overview/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/checkpoints/overview/#checkpoints)Checkpoints

Checkpoints is a [data governance](https://www.palantir.com/docs/foundry/security/data-protection-and-governance/) tool that supports purpose justification and auditability. Checkpoints allows you to interrupt potentially sensitive user interactions with prompts requesting justification for the activity. These justifications can then be reviewed in the platform to ensure adherence to data protection, governance, and compliance policies.

![Image 3: checkpoints-app](https://www.palantir.com/docs/resources/foundry/checkpoints/checkpoints-app.png)

The above screenshot uses notional data.

## [](https://www.palantir.com/docs/foundry/checkpoints/overview/#what-is-a-checkpoint)What is a checkpoint?

A **checkpoint** is a prompt that asks a user to provide a justification for an interaction in Foundry. The user’s justification is recorded and made available for later review to administrator users in the Checkpoints application. Users can also always review historical justifications for their own interactions in the Checkpoints application.

![Image 4: export-checkpoint](https://www.palantir.com/docs/resources/foundry/checkpoints/export-checkpoint.png)

The above screenshot uses notional data.

The prompt in each checkpoint and the type of justification required is set in a **checkpoint configuration**. Once submitted, each checkpoint produces a **checkpoint record** that contains the contextual data associated with an interaction governed by a checkpoint. This includes the timestamp of the interaction, the user who performed the interaction, the justification provided in the checkpoint, the checkpoint type, and any data (resources, objects, and Markings, for example) associated with the interaction.

## [](https://www.palantir.com/docs/foundry/checkpoints/overview/#key-features)Key features

*   **Customize prompts and justifications:** Data protection or compliance policies can vary widely based on organizational needs and use cases. Checkpoints allows for granular configurability to determine who gets shown a checkpoint, for what kinds of interactions, what language the checkpoint contains, and how the user should justify their interaction.
*   **Review justifications in real-time:** Data protection and compliance teams or administrators can review checkpoints in Foundry in real-time as users justify their interactions.
*   **Deep platform integration for key Foundry interactions:** Checkpoints is integrated into 60+ different interactions in Foundry, which allows for seamless requests for justification at a variety of points in user workflows. This happens both when the interactions are initiated synchronously by a user, or asynchronously via a request in [Approvals](https://www.palantir.com/docs/foundry/approvals/overview/). Checkpoints can be used to remind users of organizational policies, suggest more privacy-protective workflows, or better understand why users are making certain interactions for improved oversight.

## [](https://www.palantir.com/docs/foundry/checkpoints/overview/#access-the-checkpoints-application)Access the Checkpoints application

The Checkpoints application allows users to configure checkpoints and review checkpoint records. All users can use the Checkpoints application to review checkpoint records that they have submitted. The Checkpoints application can be accessed in the navigation panel in the **Data Governance** category.

Users can also configure checkpoints or review checkpoint records for entire [Organizations](https://www.palantir.com/docs/foundry/checkpoints/configure-checkpoints/#organization-scope) or [spaces](https://www.palantir.com/docs/foundry/checkpoints/configure-checkpoints/#space-scope).

[← PREVIOUS Approvals / Review a request](https://www.palantir.com/docs/foundry/approvals/review-a-request/)

[NEXT Core concepts →](https://www.palantir.com/docs/foundry/checkpoints/core-concepts/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

