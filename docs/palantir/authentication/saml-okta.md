Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/authentication/saml-okta/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/authentication/saml-okta/#configure-saml-20-integration-for-okta)Configure SAML 2.0 integration for Okta

This section contains Okta-specific steps for configuring the SAML 2.0 integration as part of the broader [end-to-end authentication via SAML 2.0 tutorial](https://www.palantir.com/docs/foundry/authentication/saml-getting-started/).

If you received a Foundry setup link to configure your initial SAML integration, skip to the next step. Otherwise, you can add a new SAML provider by going to the **Authentication** tab in Control Panel and selecting **Manage** in the **SAML** section.

![Image 5: SAML](https://www.palantir.com/docs/resources/foundry/authentication/authentication-saml-okta.png)

In Okta, create a SAML app integration by following [these instructions ↗](https://help.okta.com/en/prod/Content/Topics/Apps/Apps_App_Integration_Wizard_SAML.htm).

## [](https://www.palantir.com/docs/foundry/authentication/saml-okta/#saml-integration-metadata)SAML integration metadata

Copy the following from the Foundry Control Panel (as shown on the left) to use in the **Edit SAML Integration** page for Okta (as shown on the right):

| Foundry | Okta |
| --- | --- |
| Assertion consumer service (ACS) URL | Single sign on URL |
| Entity ID | Audience URI (SP Entity ID) |

![Image 6: SAML integration metadata](https://www.palantir.com/docs/resources/foundry/authentication/authentication-okta-saml-integration-metadata.png)

## [](https://www.palantir.com/docs/foundry/authentication/saml-okta/#attribute-mapping)Attribute mapping

Okta does not define standard SAML attributes that can be used without further configuration beyond `NameID`. Attributes need to be defined in Okta first before they can be mapped in Foundry.

In Okta, declare the following attribute statements:

| Name | Name format | Value |
| --- | --- | --- |
| firstName | Basic | user.firstName |
| lastName | Basic | user.lastName |
| email | Basic | user.email |

You can define the following mappings for user attributes in **Attribute mapping**. If using a Foundry setup link, Okta attribute mappings will be pre-filled.

*   **ID:**`NameID`
*   **Username:**`NameID` (alternatively, `email`)
*   **Email:**`email`
*   **First name:**`firstName`
*   **Last name:**`lastName`

You can also define attribute mappings to mirror your existing Okta groups in Foundry. Define one or more group attribute statements in Okta and map them in **Group attribute mapping**.

![Image 7: Attribute mapping](https://www.palantir.com/docs/resources/foundry/authentication/authentication-okta-attribute-mapping.png)

## [](https://www.palantir.com/docs/foundry/authentication/saml-okta/#identity-provider-metadata)Identity provider metadata

In Okta, finish the creation of the SAML app integration then navigate to the **Sign on** tab to retrieve your identity provider’s metadata in an XML file under **Identity provider metadata**. Upload this to Foundry in the **Identity provider metadata** section.

![Image 8: Identity provider metadata](https://www.palantir.com/docs/resources/foundry/authentication/authentication-okta-idp-metadata.png)

## [](https://www.palantir.com/docs/foundry/authentication/saml-okta/#finish-and-save)Finish and save

In Foundry, add email domains associated with this SAML 2.0 integration under **Email domains**.

Finish by saving your SAML 2.0 integration and [move on to multi-factor authentication](https://www.palantir.com/docs/foundry/authentication/multi-factor-auth/).

[← PREVIOUS Entra ID (Azure AD)](https://www.palantir.com/docs/foundry/authentication/saml-azure-ad/)

[NEXT Other identity providers →](https://www.palantir.com/docs/foundry/authentication/saml-other-idp/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

