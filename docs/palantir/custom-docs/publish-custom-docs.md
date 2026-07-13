Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-docs/publish-custom-docs/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-docs/publish-custom-docs/#publish-in-platform-custom-documentation)Publish in-platform custom documentation

Each documentation repository is the "source of truth" for the custom docs published from it; each build publishes only the files that are currently in the documentation repository. Any previously-published content originating from the documentation repository will be removed from the in-platform custom documentation site.

**Example:** Assume you create and publish custom documentation about Product A. Later, you delete the files for Product A from the documentation repository and add new documentation for Product B and Product C. After the next merge and publish, the in-platform custom documentation will contain documentation for Product B and Product C, but will no longer contain documentation for product A.

## [](https://www.palantir.com/docs/foundry/custom-docs/publish-custom-docs/#custom-docs-publishing-workflow)Custom docs publishing workflow

Custom documentation is published when a build runs on the `master` branch. No other branches will publish in-platform custom documentation. You can see the status of the publishing process in the commit's checks.

An ideal workflow is to create a new branch, write or edit the desired docs content, then open a pull request (PR) on the `master` branch. Merging a custom docs PR into `master` triggers a build to publish the documentation.

Note that committing changes into the `master` branch, in and of itself, will not propagate those changes into the in-platform custom documentation; a build is required.

## [](https://www.palantir.com/docs/foundry/custom-docs/publish-custom-docs/#when-will-published-changes-be-visible-in-custom-docs)When will published changes be visible in custom docs?

Upon publishing, changes to files that were previously published will appear immediately. Changes that add new documentation pages, remove documentation pages, or modify the overall content structure will appear once the custom documentation service has recompiled its documentation state. By default, this occurs hourly, but the interval can be adjusted by an administrator.

## [](https://www.palantir.com/docs/foundry/custom-docs/publish-custom-docs/#remove-or-delete-custom-documentation)Remove or delete custom documentation

Simply deleting a documentation code repository will _not_ remove or unpublish docs from the in-platform custom documentation. To remove or unpublish custom documentation pages, you must delete the unwanted files from the documentation repository and then _re-publish_ the repository. This will unpublish the unwanted docs content.

Do not delete a published documentation code repository until _after_ you have removed all content from the `docs` folder _and_ re-published the repository.

### [](https://www.palantir.com/docs/foundry/custom-docs/publish-custom-docs/#when-will-deleted-pages-disappear-in-the-in-platform-custom-documentation)When will deleted pages disappear in the in-platform custom documentation?

Upon deletion, individual custom docs pages will disappear immediately. The home page entries and table of contents for deleted docs will disappear once the documentation service has recompiled its documentation state internally. By default, this is done every hour, although an administrator may adjust this interval for changes to appear quicker.

[← PREVIOUS Add callouts to custom docs](https://www.palantir.com/docs/foundry/custom-docs/add-callouts/)

[NEXT Permissions for custom docs →](https://www.palantir.com/docs/foundry/custom-docs/custom-docs-permissions/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

