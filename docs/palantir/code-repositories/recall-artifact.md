Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-repositories/recall-artifact/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

# [](https://www.palantir.com/docs/foundry/code-repositories/recall-artifact/#recall-an-artifact)Recall an Artifact

It is possible to recall Conda Artifacts to stop downstream consumers from compiling code with the recalled version. We recommend having patch versions available for recalled Artifacts before starting the recall process.

Follow these steps to recall an Artifact:

1.   [Search](https://www.palantir.com/docs/foundry/code-repositories/artifact-repositories-nav/) for the Conda Artifact in your Artifact Repository and select it to view the Version History section in the summary page.

2.   Select the version to recall and then choose **Recall**. 

![Image 5: Select version and click Recall](https://www.palantir.com/docs/resources/foundry/code-repositories/ar-recall-select.png)

3.   A **Recall artifacts** pop-up will appear. Enter the reason for recalling the Artifact in the field. 

![Image 6: Enter recall reason](https://www.palantir.com/docs/resources/foundry/code-repositories/ar-recall-reason.png?width=300)

4.   View the Version History again to see that the Artifact is now marked as `Recalled`. 

![Image 7: Version marked as recalled.](https://www.palantir.com/docs/resources/foundry/code-repositories/ar-recall-overview.png)

## [](https://www.palantir.com/docs/foundry/code-repositories/recall-artifact/#unrecall)Unrecall

You can unrecall an Artifact.

To unrecall an Artifact, select the version of a recalled Artifact and click **Unrecall**.

![Image 8: Unrecall](https://www.palantir.com/docs/resources/foundry/code-repositories/ar-unrecall.png)

## [](https://www.palantir.com/docs/foundry/code-repositories/recall-artifact/#delete)Delete

Conda Artifacts can be recalled, but it is not possible to delete any Artifacts in an Artifact repository. If you explicitly need to delete an Artifact, you must [delete the Artifact repository](https://www.palantir.com/docs/foundry/code-repositories/delete-artifact-repository/).

[← PREVIOUS Publish an Artifact](https://www.palantir.com/docs/foundry/code-repositories/publish-artifact/)

[NEXT Manage permissions →](https://www.palantir.com/docs/foundry/code-repositories/manage-permissions/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

