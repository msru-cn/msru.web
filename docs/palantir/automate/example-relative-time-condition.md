Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/automate/example-relative-time-condition/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/automate/example-relative-time-condition/#example-auto-close-inactive-tickets-after-a-specified-time)Example: Auto-close inactive tickets after a specified time

In this example, we want to auto-close open support tickets for which there has been no update in the last 365 days. We will use the `Support Ticket` object type, which is a custom object type that we have created for this example.

## [](https://www.palantir.com/docs/foundry/automate/example-relative-time-condition/#condition)Condition

We start in the automation creation wizard by selecting the `Object added to set` condition. At first, we need to define the object set of old, unclosed issues. We begin by selecting the `Support Ticket` type. Next, we add two filters on the object set: a filter for ticket `status` is not closed, and one for `last update` having happened at least 365 days ago. Since we are using a relative time filter, the condition will be evaluated using scheduled monitoring. We keep the default of daily evaluation.

With this configuration, the automation will check daily whether there are new support tickets that have not updated in the last 365 days and have not been closed.

![Image 4: Auto-close support tickets - condition configuration](https://www.palantir.com/docs/resources/foundry/automate/example-relative-time-condition.png)

## [](https://www.palantir.com/docs/foundry/automate/example-relative-time-condition/#effect)Effect

To automatically close the `Support Tickets`, an Action effect must run on the objects that we have identified as inactive.

To accomplish this, we use the `Close Support Tickets` Action that has been pre-configured in the [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/).

For the `Support Tickets` parameter, use the `New Support Tickets added` condition effect input from our object set condition as shown below. In that way, the objects that triggered the automation will be passed to the `close-ticket` Action. For the execution mode, keep the default **Execute once for all Support Tickets added** so that the effects are executed only once, even when multiple `Support Ticket` objects trigger the condition simultaneously.

![Image 5: Auto-close support tickets - effect configuration](https://www.palantir.com/docs/resources/foundry/automate/example-relative-time-effect.png)

## [](https://www.palantir.com/docs/foundry/automate/example-relative-time-condition/#summary)Summary

To complete this process, provide a name for the automation, select a save location, adjust the expiration date to never expire, and save the automation.

![Image 6: Auto-close support tickets - overview](https://www.palantir.com/docs/resources/foundry/automate/example-relative-time-overview.png)

[← PREVIOUS Send a weekly report](https://www.palantir.com/docs/foundry/automate/example-weekly-report/)

[NEXT Notify contract owner when status changes →](https://www.palantir.com/docs/foundry/automate/example-dynamic-contract-owner/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

