Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/action-types/parameters-filter/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#filter-results-of-a-parameter-dropdown)Filter results of a parameter dropdown

Adding filters to non-object reference multiple choice or single object reference parameters will determine the allowed values that are selectable in the parameter's dropdown.

## [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#multiple-choice-parameter-dropdowns)Multiple choice parameter dropdowns

When configuring multiple choice parameter dropdown menus, action editors can reduce allowed values to just those that are properties of an object set. This can be leveraged to display or prefill values based on properties of a linked object. To accomplish this, ensure the parameter is set to display multiple choices, select **Get options from an object set**, configure the desired object set, and select the property that includes all allowed values for the parameter dropdown. If only one linked object is available in the resulting object set and the parameter is required, the parameter dropdown will automatically prefill with the corresponding property value. The resulting multiple choice options will be derived from the set of objects that the user has permission to view. In other words, when deriving multiple choice options from an object set, users will not see properties of objects to which they do not have access.

![Image 7: Property Dropdown Configuration](https://www.palantir.com/docs/resources/foundry/action-types/property_dropdown_configuration.png)

## [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#object-dropdowns)Object dropdowns

Within the parameter configuration view, action editors can specify filters and Search Arounds to limit the objects that show up in the dropdown across all action interfaces. After configuring the filters, the action form will render a dropdown with only objects that match the filter. The value selected is also validated before the action is executed.

For example, an object dropdown configured to only show **Stock Series** where the **Name** is equal to the value in the `Name` parameter.

![Image 8: Object Dropdown Starting Set](https://www.palantir.com/docs/resources/foundry/action-types/objectDropdownStartingSet.png)

The image below shows the possible values for the `Name` parameter:

![Image 9: Object Dropdown Resulting Form](https://www.palantir.com/docs/resources/foundry/action-types/objectDropdownResultingForm.png)

### [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#data-privacy-implications)Data privacy implications

When using the new validation on an object parameter, it's possible for data to be viewed by everyone who can view the action type. If there are sensitive static values in the parameter filters, users will be able to view those values even if they cannot view the underlying objects that are being filtered. [Learn more about the data privacy implications.](https://www.palantir.com/docs/foundry/action-types/dropdown-security/)

## [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#supported-operations)Supported operations

### [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#filtering-on-a-property)Filtering on a property

The object dropdown only shows objects where the specified property matches any of the provided values.

![Image 10: Object Dropdown Filtering on Property](https://www.palantir.com/docs/resources/foundry/action-types/object_dropdown_filtering_on_property.png)

The value can be statically defined by the user, inferred from another parameter, or a property of an `Object Reference` parameter. If more than one value is provided to compare against, the result will be an **OR** operation.

### [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#changing-the-starting-object-set)Changing the starting object set

The **starting set** for the query is set to all objects of the object type by default, but this can be changed to any other type. The starting set could also be set to an `ObjectReference` list parameter.

![Image 11: Object Dropdown Changing Starting Set](https://www.palantir.com/docs/resources/foundry/action-types/object_dropdown_changing_starting_set.png)

### [](https://www.palantir.com/docs/foundry/action-types/parameters-filter/#search-arounds)Search Arounds

A Search Around would create a new set by traversing a link on every object in the current set. For example, `Github Issue of Current Employee` would take the `Employees` in the current set and create a resulting set of `Github Issues` linked to those `Employees`.

![Image 12: Object Dropdown Search Around](https://www.palantir.com/docs/resources/foundry/action-types/object_dropdown_search_around.png)

[← PREVIOUS Set parameter default value](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/)

[NEXT Object dropdown security considerations →](https://www.palantir.com/docs/foundry/action-types/dropdown-security/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

