Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-repositories/module-pinning/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#pin-spark-modules-in-platform)Pin Spark modules in-platform

Code Repositories allows you to pin a Spark module for a repository. This enforces the usage of a specific version of Spark. You can pin a Spark module for both new and existing builds.

We recommend that you always use the newest version of Spark for the most up-to-date performance and security features. Pinning a Spark module should be a temporary measure.

## [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#how-to-pin-a-spark-module)How to pin a Spark module

Navigate to the **Settings** tab in Code Repositories, then select **Runtime overrides**.

![Image 10: The Runtime overrides tab](https://www.palantir.com/docs/resources/foundry/code-repositories/Module_pinning_2.png)

### [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#create-a-pin)Create a pin

From the **Runtime overrides** tab, select **Set pin**.

![Image 11: Creating a pin on all branches](https://www.palantir.com/docs/resources/foundry/code-repositories/Module_pinning_3.png)

You can create pins on all branches or on specific branches. You can select a Spark module version (for each module type available in the given repository) you want to pin and also specify an expiration date. The expiration date cannot be more than 90 days beyond the current date. The pin expires at the end of the 90-day period or the expiration date you specify, whichever is earlier. After the expiration date, your builds may fail.

#### [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#create-a-pin-on-all-branches)Create a pin on all branches

First specify the Spark version you want to pin and the expiration date.

![Image 12: Selecting a version](https://www.palantir.com/docs/resources/foundry/code-repositories/Module_pinning_4.png)

Unstable and non-recommended versions have a warning sign prefixed as we do not recommend using them unless absolutely necessary.

When you are finished, select **Save** to set the pin.

#### [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#create-a-pin-on-specific-branches)Create a pin on specific branches

You can pin versions for each branch. You can also select versions for unspecified branches.

![Image 13: Selecting versions per branch](https://www.palantir.com/docs/resources/foundry/code-repositories/Module_pinning_6.png)

When you are finished, select **Save** to set the pin. In the below sample screenshot, we create a pin on all branches for version 1.916.0, which is set to expire on December 20, 2023 at 12:00 AM.

![Image 14: Pre-Save screen](https://www.palantir.com/docs/resources/foundry/code-repositories/Module_pinning_7.png)

After setting the pin, you can view a confirmation that the pin was created.

![Image 15: Confirmation](https://www.palantir.com/docs/resources/foundry/code-repositories/Module_pinning_8.png)

## [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#edit-existing-pins)Edit existing pins

Selecting **Edit** lets you modify a pin. You can change the branch, version, and expiration date using the same workflow for creating a pin. Selecting **Archive** will remove the pin and add the `Expired` label to the pins you previously set.

![Image 16: Archiving confirmation](https://www.palantir.com/docs/resources/foundry/code-repositories/Module_pinning_9.png)

You can select **Restore** to re-create the pins you archived.

![Image 17: Expired label](https://www.palantir.com/docs/resources/foundry/code-repositories/Module_pinning_10.png)

## [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#view-your-pin)View your pin

On the **Build Preview > view details** page, you can view the version you pinned for the repository.

![Image 18: Build preview view](https://www.palantir.com/docs/resources/foundry/code-repositories/Module_pinning_11.png)

## [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#use-pins-to-control-transforms-versions-in-code-repositories-ci)Use pins to control transforms versions in Code Repositories CI

When running continuous integration (CI) for a build in Code Repositories, a version of the [transforms library](https://www.palantir.com/docs/foundry/api-reference/transforms-python-library/api-overview/) is chosen based on the current version of the repository template. If a pin is applied, CI will instead use the pin's version of the library if it is higher than the minimum version declared by the template. Users can leverage pins for faster access to new versions of the API and new features for code assist and [local development](https://www.palantir.com/docs/foundry/transforms-python/local-development/).

## [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#faq)FAQ

### [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#1-why-does-the-pin-expire-in-90-days-why-can-i-not-use-it-for-longer-periods)1. Why does the pin expire in 90 days? Why can I not use it for longer periods?

We recommend that you always use the newest version of Spark. Not doing so means that you may be missing out on performance and security fixes and improvements which may have adverse impact on your builds.

That said, we understand that there may be specific use-cases that make pinning necessary and therefore offering this functionality with the caveat that it should be used on a temporary basis. Prior to the expiration date, we recommend that you make changes required on your end to be compatible with the newest version of Spark.

### [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#2-can-i-get-notifications-via-the-ui-when-my-pin-is-about-to-expire)2. Can I get notifications via the UI when my pin is about to expire?

This feature is in development.

### [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#3-can-i-pin-individual-builds-via-the-job-tracker-ui)3. Can I pin individual builds via the Job Tracker UI?

This feature is in development.

### [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#4-do-i-have-to-upgrade-or-make-changes-on-my-side-to-use-this-feature)4. Do I have to upgrade or make changes on my side to use this feature?

No upgrades or actions are needed from your side.

### [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#5-is-this-feature-available-for-new-builds-or-can-i-apply-it-to-existing-builds)5. Is this feature available for new builds, or can I apply it to existing builds?

You can use this feature for both new and existing builds.

### [](https://www.palantir.com/docs/foundry/code-repositories/module-pinning/#6-what-happens-if-my-job-is-already-pinned-in-cdconfig)6. What happens if my job is already pinned in cdconfig?

The in-platform pin will always take precedence.

[← PREVIOUS Unit tests](https://www.palantir.com/docs/foundry/code-repositories/unit-tests/)

[NEXT Libraries →](https://www.palantir.com/docs/foundry/code-repositories/libraries/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

