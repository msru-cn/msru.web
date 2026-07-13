Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-repositories/spark-profiles/

Published Time: Thu, 09 Jul 2026 17:47:53 GMT

# [](https://www.palantir.com/docs/foundry/code-repositories/spark-profiles/#spark-profiles)Spark profiles

Repository settings are used to specify [Spark profiles](https://www.palantir.com/docs/foundry/optimizing-pipelines/spark-concepts/#tuning-spark-profiles) for use in the repository. After configuring the Spark profile in repository settings, you can [use the profile in code](https://www.palantir.com/docs/foundry/optimizing-pipelines/apply-spark-profiles/).

Before a given profile can be applied, it must be imported into the project. There are two types of profiles:

*   _Unrestricted Profiles_: Profiles that can be imported to a repository by all users.
*   _Restricted Profiles_: Profiles that can only be imported by administrators.

Spark profiles that are already available for use in a repository are found in the **Spark** section under the **Settings** tab in **Enabled profiles**.

### [](https://www.palantir.com/docs/foundry/code-repositories/spark-profiles/#importing-spark-profiles)Importing Spark Profiles

In order to use a Spark profile in a transforms job, the profile must first be imported into the Project containing the job, or else Checks will fail when attempting to publish transforms.

Spark profiles may be browsed and imported to a Project using the Spark configuration tab in the Code Repositories editor.

To import a profile to a project, go to the **Settings** tab and select **Spark**. Click on **Add profiles** to find the desired profile in the dropdown. Hover over the profile that you need:

*   If the profile is unrestricted, you can click on **Import** to import the profile to the Project.
*   If the profile is restricted, you may see a lock next to it.

By default, any [Resource Management](https://www.palantir.com/docs/foundry/resource-management/overview/) Administrator has the necessary permissions to import restricted Spark profiles. Additionally, there may be a user group named `spark-profile-admins` which also has the necessary permissions. Regular users must ask an administrator to import a profile to their project before they can use it.

![Image 2: spark-profiles-settings](https://www.palantir.com/docs/resources/foundry/code-repositories/spark-profiles-settings-3.gif)

### [](https://www.palantir.com/docs/foundry/code-repositories/spark-profiles/#spark-profiles-enabled)Spark Profiles enabled

All profiles already enabled in a Project are discoverable in the **References** panel of the Summary sidebar in the project. When imported to a repository, profiles are automatically added as references for the entire Project and made available as “enabled profiles” for all repos in the Project.

[← PREVIOUS Repository upgrades](https://www.palantir.com/docs/foundry/code-repositories/repository-upgrades/)

[NEXT Artifact settings →](https://www.palantir.com/docs/foundry/code-repositories/artifact-settings/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

