Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#create-an-ai-powered-slack-bot-with-listeners)Create an AI-powered Slack bot with listeners

You can use event listeners in Foundry to create AI-powered bots that can interact with chat workspaces outside of Foundry. This guide provides an example using Slack, but you can use similar methods to connect with other platforms, such as Microsoft Teams (via the Microsoft Bot Framework).

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#overview)Overview

In this tutorial, you will build "Tennis Bot", an AI assistant that helps Slack users learn more about tennis.

This example Slack bot comprises the following components:

*   A [Slack listener](https://www.palantir.com/docs/foundry/data-connection/listeners-slack/) to receive chat events.
*   A [Slack source](https://www.palantir.com/docs/foundry/available-connectors/slack/) to write back responses to the Slack API.
*   An [AIP chatbot](https://www.palantir.com/docs/foundry/chatbot-studio/getting-started/) to act as the "brain" of the bot.
*   A [TypeScript function](https://www.palantir.com/docs/foundry/functions/getting-started/) to perform event processing.
*   An [automation](https://www.palantir.com/docs/foundry/automate/overview/) to execute new events.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#step-1-set-up-slack-listener)Step 1: Set up Slack listener

The first step is to create your Slack app, install it into your Slack workspace, and start ingesting chat events with a listener. Follow the [Slack listener setup guide](https://www.palantir.com/docs/foundry/data-connection/listeners-slack/) to create the Slack listener.

Since users will directly message the Tennis Bot with questions, you will need to add the relevant scopes, events, and configurations in the Slack app. For more information on configuring Slack apps, see the [official Slack documentation ↗](https://docs.slack.dev/quickstart).

Add the `im:history` and `chat:write` scopes for your app.

![Image 15: Slack app OAuth scopes configuration shown.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-slack-scopes.png)

Additionally, subscribe your app to the `message.im` event.

![Image 16: Slack Events API configuration show.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-events-configuration.png)

You will also need to allow users to directly message the bot. This setting can be found in your Slack app settings under **Features > App Home**.

![Image 17: Enable direct messages for the bot in Slack](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-dm-bot.png)

After you have configured the listener, you will be able to verify that the listener is correctly configured in the **Test** tab of the listener setup wizard.

![Image 18: Event shown in the test panel for the Slack listener in Data Connection.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-test-listener-page.png)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#step-2-set-up-slack-source)Step 2: Set up Slack source

Next, you will need to [create a new Slack source](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) with credentials to write back to your chat platform.

After installing your Slack app into your workspace, you can find the bearer token to configure your source within **Installed App Settings**.

![Image 19: Slack app bearer token for source authentication.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-slack-bearer.png)

You will need to enable exports and code repository imports for your source by navigating to **Connection settings**.

![Image 20: Enable exports for your source.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-source-exports.png)

![Image 21: Enable code repository imports for your source.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-code-import-configuration.png)

Additionally, you must configure an API name for your source so that the source can be referenced from code. The API name configuration can be found under **Connection Settings > Code import configuration**.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#step-3-set-up-aip-chatbot)Step 3: Set up AIP Chatbot

In this step, you will [create a new chatbot in AIP Chatbot Studio](https://www.palantir.com/docs/foundry/chatbot-studio/getting-started/) (formerly known as Agent Studio). You will need to configure [instructions](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#specify-chatbot-instructions) and [retrieval context](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#provide-retrieval-context) for the chatbot.

### [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#specify-chatbot-instructions)Specify chatbot instructions

To teach the chatbot how to respond as a tennis information bot, you can provide some task-specific [instructions](https://www.palantir.com/docs/foundry/chatbot-studio/core-concepts/#instructions-and-descriptions) for the chatbot. An example prompt is:

```
You are an assistant for answering questions about tennis.

If a query is not related to tennis, you should respond politely and explain that your purpose is only for answering questions about tennis, and suggestion some possible topics the user may like to ask about related to tennis.

Keep your responses concise and friendly.
```

### [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#provide-retrieval-context)Provide retrieval context

To give the chatbot a source of information about tennis, you can provide a PDF with the rules of tennis as [document context](https://www.palantir.com/docs/foundry/chatbot-studio/retrieval-context/#document-context) to the chatbot; the chatbot will then be able to use this context to answer user queries.

![Image 22: Provide the chatbot with a document containing the rules of tennis.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-agent-document-context.png)

Ensure that you disable citations to avoid the chatbot including [XML citations](https://www.palantir.com/docs/foundry/chatbot-studio/citations/#citation-formats) in its response; this will prevent the chatbot from including links back to the document in its Slack responses.

![Image 23: Disable citations for the chatbot.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-disable-citations-for-agent.png)

You can additionally test your chatbot to ensure it responds in an appropriate manner. Use Chatbot Studio for ad-hoc testing, or use [AIP Evals](https://www.palantir.com/docs/foundry/chatbot-studio/chatbots-as-functions/#evaluate-chatbots-with-aip-evals) to test against a full evaluation suite.

![Image 24: We ask a tennis-related question to the AIP chatbot to test our setup.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-agent-test.png)

When you are satisfied with the chatbot's performance, [publish the chatbot as a function](https://www.palantir.com/docs/foundry/chatbot-studio/chatbots-as-functions/) so that you can use the chatbot in your event processing workflow.

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#step-4-import-your-source-and-chatbot-function-into-a-code-repository)Step 4: Import your source and chatbot function into a code repository

Once you have set up the chatbot, you will need to enable the chatbot to interact with Slack. First, [create a new code repository for writing TypeScript functions](https://www.palantir.com/docs/foundry/functions/getting-started/). Once created, import both your created source and the published chatbot function into the repository.

![Image 25: The chatbot function and source are both imported into the code repository.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-function-imports.png)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#step-5-set-up-listener-event-payload-processing)Step 5: Set up listener event payload processing

To respond to messages, the bot will need to be able to process incoming listener event payloads. Create a TypeScript function to enable listener event payload processing.

Copied!

```typescript
1import { OntologyEditFunction } from "@foundry/functions-api";
2import { Queries } from "@foundry/ontology-api";
3import { ExternalSystems } from "@foundry/functions-api";
4import { TennisBotSlackSource } from "@foundry/external-systems/sources";
5
6export class MyFunctions {
7    @ExternalSystems({ sources: [TennisBotSlackSource] })
8    @OntologyEditFunction()
9    public async processTennisBotEvent(decodedEventPayload: string): Promise<void> {
10        const message = (JSON.parse(decodedEventPayload) as any).event;
11
12        // Only process non-bot messages (don't re-process messages that we send as the bot)
13        if (message == null || message.bot_id != null) {
14            return;
15        }
16
17        const messageText = message.text;
18        const channel = message.channel;
19        if (messageText == null || channel == null) {
20            return;
21        }
22
23        // Pass the message to our agent
24        const agentResponse = await Queries.tennisAgentDocumentContextExample({ userInput: messageText });
25
26        // Forward the agent's response back to Slack
27        const postMessageUrl = `${TennisBotSlackSource.getHttpsConnection().url}/api/chat.postMessage`;
28        const response = await TennisBotSlackSource.fetch(postMessageUrl, {
29            method: "POST",
30            headers: {
31                ["Authorization"]: `Bearer ${TennisBotSlackSource.getSecret("SLACK_BEARER_TOKEN_AUTH")}`,
32                ["Content-Type"]: "application/json"
33            },
34            body: JSON.stringify({
35                channel: channel,
36                text: agentResponse.markdownResponse,
37            })
38        })
39    }
40}
```

_For more information on using sources in TypeScript functions, see [the relevant documentation](https://www.palantir.com/docs/foundry/functions/api-calls/)._

Commit and tag a version to [publish this function](https://www.palantir.com/docs/foundry/functions/getting-started/#publish-your-functions).

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#step-6-set-up-function-backed-action)Step 6: Set up function-backed action

Navigate to [Ontology Manager](https://www.palantir.com/docs/foundry/ontology-manager/overview/) to create a [function-backed action](https://www.palantir.com/docs/foundry/action-types/function-actions-overview/) using your event processor function. This action will be triggered for each incoming Slack message event.

![Image 26: A walkthrough wizard for creating a function-backed action is shown.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-function-backed-action.png)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#step-7-set-up-automation-to-execute-function-backed-actions)Step 7: Set up automation to execute function-backed actions

Next, create a new automation to execute the function-backed action for each new listener event. The new automation should have a "Stream" condition (it will execute when new rows are added to the stream). The input to this automation should be the output stream from the created Slack listener.

![Image 27: A summary of the created automation is shown.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-create-tennis-bot-automation.png)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#step-8-test-the-bot)Step 8: Test the bot

At this point, the Tennis Bot is ready for testing. Send a Slack direct message to your bot and wait for its response. The bot should respond with information about tennis.

![Image 28: A conversation is shown between a user and the created Slack bot.](https://www.palantir.com/docs/resources/foundry/data-connection/listeners-chat-bots-slack-chat.png)

## [](https://www.palantir.com/docs/foundry/data-connection/listeners-slack-bot/#optional-extensions-and-improvements)Optional extensions and improvements

You have now created a basic AI-powered chatbot; from here, you can continue to add functionality to your bot. Example extensions and improvements include:

*   Send an initial confirmation message when the event is first received (such as "Working on it!"), and then update the content of that message to the LLM response when the response is available. This reduces the time taken for the user to receive the first response.
*   Maintain user conversation history in the chatbot conversation session; this enables conversations with past messages as context. You can use the [`sessionRid` parameter of the chatbot function](https://www.palantir.com/docs/foundry/chatbot-studio/chatbots-as-functions/#function-inputs) to enable conversational context. 
    *   For example, you can store the session RID from the [chatbot function output](https://www.palantir.com/docs/foundry/chatbot-studio/chatbots-as-functions/#function-outputs) (created on the first message in a thread) to an ontology object type, then look up the associated session RID for new messages on this object type to use in the [chatbot function input](https://www.palantir.com/docs/foundry/chatbot-studio/chatbots-as-functions/#function-inputs).

*   To reduce processing latency, you can move the event processing implementation from an automation that calls an action to a streaming pipeline that calls an [external UDF](https://www.palantir.com/docs/foundry/functions/python-functions-builder/#external-api-calls-in-pipeline-builder). For more information on using streaming pipelines to process events, see the documentation on [event processing options](https://www.palantir.com/docs/foundry/data-connection/listeners-event-processing/#streaming-pipelines).

* * *

_All screenshots of Slack® are provided for reference purposes only and are the property of Slack Technologies, LLC._

[← PREVIOUS Set up a Slack listener](https://www.palantir.com/docs/foundry/data-connection/listeners-slack/)

[NEXT WebSocket listeners / Overview →](https://www.palantir.com/docs/foundry/data-connection/listeners-websocket/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

