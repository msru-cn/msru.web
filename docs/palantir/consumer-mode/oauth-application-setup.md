Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/consumer-mode/oauth-application-setup/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/consumer-mode/oauth-application-setup/#foundry-hosted-oauth-applications)Foundry-hosted OAuth applications

OAuth applications are pro-code OSDK applications hosted within Foundry that support interactive user authentication using the authorization grant flow. These applications leverage Foundry security primitives for interactive custom applications.

Foundry-hosted OAuth applications are ideal for the following use cases:

*   **Interactive web applications** that require user authentication.
*   **Multi-user applications** where different users require different permissions.
*   **Pro-code custom applications** built with the OSDK and hosted on Foundry.

## [](https://www.palantir.com/docs/foundry/consumer-mode/oauth-application-setup/#architecture)Architecture

```
User → Foundry Subdomain → OAuth Flow → OSDK App → Foundry APIs
```

Foundry-hosted applications are deployed at dedicated subdomains (for example, `https://subdomain-for-app.your-foundry-domain.com/`) and follow the login flow with OAuth redirect where consent is configurable.

## [](https://www.palantir.com/docs/foundry/consumer-mode/oauth-application-setup/#prerequisites)Prerequisites

Before setting up a Foundry-hosted OAuth application, ensure the following:

*   The Foundry platform is configured to use [**consumer mode**](https://www.palantir.com/docs/foundry/consumer-mode/foundry-consumer-setup/).
*   You have the [**correct permissions**](https://www.palantir.com/docs/foundry/developer-console/permissions/) to create and host a Developer Console application.
*   You have or have access to **frontend development experience** to build applications.

## [](https://www.palantir.com/docs/foundry/consumer-mode/oauth-application-setup/#setup)Setup

### [](https://www.palantir.com/docs/foundry/consumer-mode/oauth-application-setup/#step-1-create-an-osdk-application)Step 1: Create an OSDK application

Follow [our documentation](https://www.palantir.com/docs/foundry/developer-console/create-application/) to create a new OSDK application.

1.   **Create the application:** Use Developer Console to create a new frontend application.
2.   **Configure OAuth settings:** Use the public client for user authentication.
3.   **Define application restrictions:** Configure the required restrictions for accessing Foundry resources.

### [](https://www.palantir.com/docs/foundry/consumer-mode/oauth-application-setup/#step-2-develop-your-osdk-application)Step 2: Develop your OSDK application

Build your frontend application using the OSDK framework. You can review a TypeScript example in our [OSDK documentation](https://www.palantir.com/docs/foundry/developer-console/how-to-bootstrapping-typescript/).

### [](https://www.palantir.com/docs/foundry/consumer-mode/oauth-application-setup/#step-3-deploy-the-application-to-foundry)Step 3: Deploy the application to Foundry

Deploy your OSDK application [to be hosted on Foundry](https://www.palantir.com/docs/foundry/developer-console/deploy-custom-application-on-foundry/#host-an-osdk-application-on-foundry), and remember your subdomain.

### [](https://www.palantir.com/docs/foundry/consumer-mode/oauth-application-setup/#step-4-verify-consumer-access)Step 4: Verify consumer access

1.   **Configure application permissions:** Grant your consumer rule-based group access to the deployed OSDK application.
2.   **Check consumer access in Developer Console:** If a user is missing any permissions, add them to the necessary projects within the consumer space to grant them access.
3.   **Test user flow:** Verify that consumer users can access the application with appropriate permissions.

## [](https://www.palantir.com/docs/foundry/consumer-mode/oauth-application-setup/#troubleshooting)Troubleshooting

*   **Permission issue:** Confirm in the **Check Access** panel that users can access all resources in the application.
*   **Scope errors:** Validate that the OAuth client has the correct scopes in Developer Console.

### [](https://www.palantir.com/docs/foundry/consumer-mode/oauth-application-setup/#user-experience-issues)User experience issues

*   **Multiple login prompts:** Review our [getting started documentation for consumer mode](https://www.palantir.com/docs/foundry/consumer-mode/foundry-consumer-setup/) to understand how to hide the login page with a default identify provider.

You now have a working Foundry-hosted application for secure external consumer use. Your OSDK application provides authenticated users with secure access to Foundry data and functionality while maintaining appropriate permission boundaries and user isolation.

[← PREVIOUS In-platform consumer applications](https://www.palantir.com/docs/foundry/consumer-mode/workspace-application-setup/)

[NEXT Client credentials applications →](https://www.palantir.com/docs/foundry/consumer-mode/client-credentials-setup/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

