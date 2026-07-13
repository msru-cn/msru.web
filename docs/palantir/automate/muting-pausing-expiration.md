Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/automate/muting-pausing-expiration/

Published Time: Thu, 09 Jul 2026 17:47:51 GMT

# [](https://www.palantir.com/docs/foundry/automate/muting-pausing-expiration/#muting-pausing-and-expiration)Muting, pausing, and expiration

Automations can be [muted](https://www.palantir.com/docs/foundry/automate/muting-pausing-expiration/#muting-an-automation), [paused](https://www.palantir.com/docs/foundry/automate/muting-pausing-expiration/#pausing-an-automation), or [configured to expire](https://www.palantir.com/docs/foundry/automate/muting-pausing-expiration/#automation-expiration).

## [](https://www.palantir.com/docs/foundry/automate/muting-pausing-expiration/#muting-an-automation)Muting an automation

Automations can be muted by users or automatically by the system. When an automation is muted, the condition continues to be evaluated and [activity](https://www.palantir.com/docs/foundry/automate/history/) is still recorded. However, no effects will be triggered. The automation can be unmuted at any time by a user with an `Editor` role on the automation.

### [](https://www.palantir.com/docs/foundry/automate/muting-pausing-expiration/#auto-mute)Auto-mute

When the **Auto-mute this automation** setting is enabled, the automation will automatically mute when all effects fail for at least 80% of the past 30 events.

![Image 4: Auto-mute setting in the automation configuration.](https://www.palantir.com/docs/resources/foundry/automate/auto-mute.png)

## [](https://www.palantir.com/docs/foundry/automate/muting-pausing-expiration/#pausing-an-automation)Pausing an automation

Automations can be paused by users. While an automation is paused, the condition will not be evaluated and no further executions will be triggered. Additionally, Automate interrupts any currently active executions when an automation is paused by a user. The automation can be resumed at any time by a user with an `Editor` role on the automation.

![Image 5: Expiration date configuration](https://www.palantir.com/docs/resources/foundry/automate/muting-pausing-configuration.png)

## [](https://www.palantir.com/docs/foundry/automate/muting-pausing-expiration/#automation-expiration)Automation expiration

Automations can be configured to have an expiration date or to run indefinitely. The longest permitted expiration date is six months from the present time. The expiration date can be updated at any time by a user with an `Editor` role on the automation.

The expiration date can be viewed and modified in the **Summary** tab of the automation edit wizard. Click on an automation to view the automation overview panel and then select **Edit automation**. Then, open the **Summary** tab to access the expiration date configuration.

![Image 6: Expiration date configuration](https://www.palantir.com/docs/resources/foundry/automate/summary-expiration-date-config.png)

[← PREVIOUS Manual and automatic retries](https://www.palantir.com/docs/foundry/automate/retries/)

[NEXT Notification settings →](https://www.palantir.com/docs/foundry/automate/notification-settings/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

