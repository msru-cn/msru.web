Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/test-provider-integration/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/#enable-and-test-identity-provider-integration)Enable and test identity provider integration

## [](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/#enable-authentication)Enable authentication

You must enable your SAML or OIDC provider in order to test your integration. If using a Foundry setup link, skip to the next step. Otherwise, go to the **Provider Management** page and toggle on **Enable provider** for the desired provider. You can then log in to Foundry using your new integration.

![Image 6: Enable provider](https://www.palantir.com/docs/resources/foundry/authentication/authentication-enable-provider.png)

## [](https://www.palantir.com/docs/foundry/authentication/test-provider-integration/#test-integration)Test integration

To validate the configuration of your identity provider integration, you can create test logins. If using a Foundry setup link, click **Log in to Foundry** to automatically create a test login.

Alternatively, navigate to the **SAML** or **OIDC** page in-platform and select **Test SAML** and then **Create new test**. There are two options for testing:

*   Select **Log in to Foundry** to test the integration yourself.
*   Use the clipboard to copy the login URL and send it to another person. You’ll be able to see the result in the summary view after they attempt to log in.

![Image 7: Create test](https://www.palantir.com/docs/resources/foundry/authentication/authentication-create-test.png)![Image 8: Test log in](https://www.palantir.com/docs/resources/foundry/authentication/authentication-test-login-in.png)

Once you — or the person you sent the URL to — has logged in, you will be able to see the results of the test. These test results state whether the login was successful and capture a snapshot of the user's attributes received from your provider.

You can preview how these attributes will be mapped in Foundry by opening the test in the **Attribute Preview** tab. As you make changes to your attribute mapping configuration, the results will be reflected in the panel.

![Image 9: Login tests](https://www.palantir.com/docs/resources/foundry/authentication/authentication-login-tests.png)![Image 10: Attribute preview](https://www.palantir.com/docs/resources/foundry/authentication/authentication-attribute-preview.png)

Test results are automatically deleted after one month.

[← PREVIOUS Group assignment](https://www.palantir.com/docs/foundry/authentication/group-assignment/)

[NEXT Host settings →](https://www.palantir.com/docs/foundry/authentication/host-settings/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

