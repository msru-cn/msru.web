Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/contour/analysis-share-collaborate/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/contour/analysis-share-collaborate/#share-and-collaborate-on-an-analysis)Share and collaborate on an analysis

## [](https://www.palantir.com/docs/foundry/contour/analysis-share-collaborate/#sharing-a-contour-analysis)Sharing a Contour analysis

You can share a Contour analysis directly with other users. If you make changes to an analysis after sharing, the shared analysis will update automatically so that other users will always see the current version.

Sharing a resource with another user requires them having access to the Project you are working in and to the datasets you are working with. Click on the **Share** button to either send a sharing URL or add a user directly to the resource and notify them. It is also possible to collaborate on an analysis with another user. If you'd like another user to be able to edit your resource, select `Editor` when generating a sharing URL.

If the user receives a **Permission Denied** error, they will need to request access. Once that user's access to the Project has been approved, they will be able to see the analysis you shared with them over email.

![Image 4: share-an-analysis](https://www.palantir.com/docs/resources/foundry/contour/analysis-share.gif)

If you are joining additional datasets to enrich your Contour analysis, other users will need to have permissions on these joined datasets in order to view the full analysis.

* * *

## [](https://www.palantir.com/docs/foundry/contour/analysis-share-collaborate/#collaborate-on-a-contour-analysis)Collaborate on a Contour Analysis

When sharing a Contour analysis with another user, you can allow that user to be able to edit your resource by selecting **Editor** at the time of sharing. This will allow the user to make changes to your analysis, including (but not limited to):

*   Adding/Removing/Editing boards
*   Adding/Removing/Editing parameters
*   Deleting paths
*   Changing analysis settings

To prevent concurrent edits to the analysis, Contour uses a locking system that allows only one user in one browser window to use Editing mode on an analysis at a given time. If attempting to open an analysis in Editing mode while another user is already editing that analysis, the view mode selector will change appearance:

![Image 5: The view mode selector when the analysis is locked. The 'Editing mode' option is replaced
by an option that reads: 'Document is locked (Editing mode).'](https://www.palantir.com/docs/resources/foundry/contour/analysis-locking.png?width=300)

The popover will list the user that is currently editing the analysis. You will be unable to access Editing mode until that user finishes editing, either by switching to Viewing mode, or by closing the Contour analysis. Afterwards, you will be able to access editing mode; you will also see a notification at the top of the Contour analysis:

![Image 6: A toast notification. On the left, a blue unlocked icon is displayed. The text reads: 'This
document has been unlocked. Reload the analysis to begin editing.' On the right, there is
a button with blue text reading 'Reload Analysis.'](https://www.palantir.com/docs/resources/foundry/contour/analysis-unlocked.png?width=400)

After selecting **Reload Analysis**, Contour will reload your analysis (to load any changes that may have been made) and attempt to access editing mode again.

Additionally, if you are in editing mode and another user is waiting for the lock, you will be automatically switched to viewing mode after fifteen minutes of inactivity.

If you have an analysis open in multiple browser tabs, you will only be able to use Editing mode in one of those tabs. All other tabs that attempt to access Editing mode will be placed into "Document is locked" mode.

[← PREVIOUS Switch to aggregated data](https://www.palantir.com/docs/foundry/contour/analysis-switch-aggregated/)

[NEXT Share results →](https://www.palantir.com/docs/foundry/contour/analysis-share-results/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

