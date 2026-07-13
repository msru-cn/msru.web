Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/listeners-jira/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/listeners-jira/#set-up-a-jira-listener)Set up a Jira listener

This guide shows step-by-step how to configure a listener for Jira Cloud, to get a real-time feed of events from Jira to a Foundry streaming dataset.

[Learn more about Jira. ↗](https://developer.atlassian.com/cloud/jira/platform/)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-jira/#prerequisites)Prerequisites

Prior to configuration, ensure:

*   Your enrollment's ingress policy has been appropriately configured. [Learn how to Configure ingress.](https://www.palantir.com/docs/foundry/administration/configure-ingress/). Review [Jira documentation pertaining to IP addresses and domains ↗](https://support.atlassian.com/organization-administration/docs/ip-addresses-and-domains-for-atlassian-cloud-products/).

*   You must have your own instance of Jira with administrator access.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-jira/#instructions)Instructions

1.   Create a WebHook in Jira. This can be done in the Jira admin panel by navigating to `https://<your jira domain>/plugins/servlet/webhooks#`. [Visit public Jira documentation on webhooks ↗.](https://support.atlassian.com/jira-cloud-administration/docs/manage-webhooks/)

![Image 5: Blank state for Jira system webhooks.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-jira-cloud-1.png)

![Image 6: Screen after selecting "Create a WebHook" option.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-jira-cloud-2.png)

2.   Create a Jira listener in the Palantir platform. This will generate the listener URL that you need to copy and paste into the Jira `URL` field when creating a WebHook.

a. You should also generate a message signing secret in Jira, and copy to the message signing secret in the Foundry listener configuration. You can also set up without a signing secret. 

![Image 7: Palantir new listener configuration page.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-jira-cloud-3.png)

3.   Choose the set of Jira events that should be sent to your listener and then select **Create**. The screenshotted example shows subscription for the issue created, updated, and deleted events: 

![Image 8: Jira page showing new WebHook listener.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-jira-cloud-4.png)

4.   Save the listener configuration in Foundry to proceed. Administrator approval is now required from the Information Security Officer. Review the toggle description.

5.   Select **Start** in the listener test screen to start your listener. 

![Image 9: Activating your listener in the Palantir platform.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-jira-cloud-5.png)

6.   You will need to allow inbound traffic from the system that is pushing data to your Foundry enrollment. This can be done in Control Panel by an Information Security Officer for your Foundry enrollment. [Documentation on managing ingress in the Palantir platform.](https://www.palantir.com/docs/foundry/administration/configure-ingress/)

7.   Test the new configuration by making a change to trigger an event to your listener. You should see it appear in the incoming messages view in data connection, as well as in the underlying stream that the listener outputs to. 

![Image 10: Testing the listener within the Palantir platform with an event.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-jira-cloud-6.png)

You can now use this streaming data in Foundry pipelines, to put data into the ontology, or monitor using Automate to trigger effects in real time.

* * *

_All screenshots of Atlassian Jira® are provided for reference purposes only and are the property of Atlassian Corporation Plc._

[← PREVIOUS Set up a Google Pub/Sub listener](https://www.palantir.com/docs/foundry/data-connection/listeners-google-pub-sub/)

[NEXT Set up a Slack listener →](https://www.palantir.com/docs/foundry/data-connection/listeners-slack/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

