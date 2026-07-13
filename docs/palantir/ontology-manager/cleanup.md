Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/ontology-manager/cleanup/

Published Time: Thu, 09 Jul 2026 17:47:57 GMT

# [](https://www.palantir.com/docs/foundry/ontology-manager/cleanup/#ontology-cleanup)Ontology cleanup

The Ontology cleanup tool is a safe way to delete object types, and provides a number of benefits, including:

*   An easier-to-navigate Ontology without excess object types
*   A more performant Ontology as searches and loads are run over fewer object types
*   An Ontology without the burden of excess storage costs

The tool aims to help Ontology editors determine the safety of deleting an object type and provides a deprecation option which informs object type users of its future removal.

## [](https://www.palantir.com/docs/foundry/ontology-manager/cleanup/#access-ontology-cleanup-tool)Access Ontology cleanup tool

The view can be accessed from the home page of the Ontology cleanup tool.

![Image 8: Access the tool from the home page](https://www.palantir.com/docs/resources/foundry/ontology-manager/cleanup-navigation-from-homepage.png)

When you opt to **Start cleanup**, the tool may take time to find cleanup candidates based on the size of your Ontology.

![Image 9: Start cleanup button](https://www.palantir.com/docs/resources/foundry/ontology-manager/cleanup-start-cleanup-button.png)

The resulting list of object types operates similarly to the other pages accessed from the home page that display lists. The list can be filtered to specific flags or an object type group that you are responsible for. You can also customize which columns are displayed in the table.

![Image 10: Cleanup filters](https://www.palantir.com/docs/resources/foundry/ontology-manager/cleanup-filters.png)

By default, the table is sorted by the highest priority among the flags that an object type triggers.

## [](https://www.palantir.com/docs/foundry/ontology-manager/cleanup/#cleaning-up-your-ontology)Cleaning up your Ontology

Here is an example where we have filtered down to the “Planning” workflow, a workflow that was being developed but never released.

![Image 11: Cleanup filter example](https://www.palantir.com/docs/resources/foundry/ontology-manager/cleanup-filter-example.png)

Select the three object types using the in-line checkboxes.

There are three options for managing these object types:

*   **Snooze:** Hide object types from your cleanup queue for a configurable amount of time. Snoozing is an action that will affect only the user that performs it.
*   **Deprecate:** Show object types as deprecated in every context that displays object type status. This option informs users to move to different object types or flag that the object type is still useful. You can set a deadline along with a deprecation so users know how long they have to refrain from using these object types.
*   **Delete:** Delete object types from the Ontology and remove associated data from object storage.

Once you act on an object type in your queue, it disappears from the queue. Use the table filters to view all the actions you have already selected.

Deprecation and deletion are staged the same way as normal Ontology modifications. In the example above, the “Work Item” object type has objects with user edits, so it can be deprecated, while the other two deleted. Selecting **Save** in the top right enables saving the changes directly to the Ontology or creating a proposal to request review from another user.

![Image 12: Cleanup staging example](https://www.palantir.com/docs/resources/foundry/ontology-manager/cleanup-staging-example.png)

## [](https://www.palantir.com/docs/foundry/ontology-manager/cleanup/#configure-ontology-cleanup)Configure Ontology cleanup

The cleanup page contains a subpage that allows you to customize the flags used and their respective priority.

![Image 13: Cleanup configuration navigation](https://www.palantir.com/docs/resources/foundry/ontology-manager/cleanup-configuration-navigation.png)

You can configure flag settings on this page, with a choice of using either the default set or custom flags.

![Image 14: Cleanup configuration view](https://www.palantir.com/docs/resources/foundry/ontology-manager/cleanup-configuration-view.png)

Like snoozing object types from the queue, this is an individual customization that does not affect other Ontology editors.

When you save changes and return to the main **Cleanup** tab, you will be prompted to recalculate the cleanup queue.

Note that if using a custom flag setup, new flags that get added in the future will not be automatically turned on if they are turned on when using the default set of flags.

## [](https://www.palantir.com/docs/foundry/ontology-manager/cleanup/#ontology-cleanup-flags)Ontology cleanup flags

The following list of flags is aimed at answering common issues, but is not exhaustive:

*   **Past deprecation date:** Object type currently has the `deprecated` status and the deprecation date field is in the past.
*   **Trashed datasource:** Any datasource (whether dataset, restricted view, or other) backing this object type has been trashed in Compass.
*   **Datasource not updated in [x] days:** Checks with Compass the time of the last modification to the backing datasource.
*   **Description missing:** The object type has a blank description. Does not check for descriptions on all properties of the object type.
*   **Display name regex matches string:** The default value of `\[test|deprecated\]` would match object types that have `[test]` or `[deprecated]` in their display names. For example, if a common pattern at your Organization is to mark object types in user acceptance testing with the prefix `UAT -` or `Testing -`, you would use the regex `UAT -|Testing -` to find all object types matching this pattern. Supports ECMA (JavaScript) regex syntax.
*   **Phonograph deindexed:** Flag only applied to object types in Object Storage V1. There is no equivalent check for Object Storage V2.

[← PREVIOUS Export, edit, and import an Ontology](https://www.palantir.com/docs/foundry/ontology-manager/export-import/)

[NEXT Vertex / Overview →](https://www.palantir.com/docs/foundry/vertex/overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

