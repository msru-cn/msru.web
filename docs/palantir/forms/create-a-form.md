Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/forms/create-a-form/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/forms/create-a-form/#create-a-form)Create a form

Foundry Forms is no longer the recommended approach for data entry or writeback workflows on Foundry. Instead, build user input workflows with the Foundry Ontology, representing the relevant data structures as object types and configuring the writeback interaction with Actions. Learn more in the [Forms overview](https://www.palantir.com/docs/foundry/forms/overview/) documentation.

To create a new form, first open the Forms application from the Foundry navigation sidebar. You will be prompted to create a new form or open an existing one. Alternatively, navigate to a Project in the filesystem view, then select **+ New > Form**.

![Image 8: Create new form from Project](https://www.palantir.com/docs/resources/foundry/forms/new-form-menu.png)

Once you create a new form, you will be prompted to choose a response destination:

*   Fusion spreadsheet
*   Ontology object type ([if permissioned](https://www.palantir.com/docs/foundry/forms/permissions/)

You may also create a form now and decide the response destination later.

While both destination options write to datasets, Fusion writes directly to the spreadsheet every time a change is made. Object storage in Foundry requires users to schedule a build of the writeback dataset configured in the Ontology. This decision can be [changed](https://www.palantir.com/docs/foundry/forms/create-a-form/#change-the-response-destination) later.

## [](https://www.palantir.com/docs/foundry/forms/create-a-form/#create-and-configure-a-new-form)Create and configure a new form

Complete the following steps to create a simple form:

1.   First, navigate to the form creation screen. 

![Image 9: Empty form creation screen](https://www.palantir.com/docs/resources/foundry/forms/empty-form-creation.png)

2.   Next, choose the response destination for your new form. 

![Image 10: New form response destination](https://www.palantir.com/docs/resources/foundry/forms/response-destination.png)

3.   Then, select **Add your first field**.

4.   Select the desired field type from the available list of options. 

![Image 11: Add new field to form](https://www.palantir.com/docs/resources/foundry/forms/add-new-field.png)

5.   Now, modify the field as needed using the Visual Editor sidebar to the right of the form.

6.   Then, select the **+** above or below an existing field to continue adding more fields.

7.   Finally, select the green **Save** button in the top right to save your form. 

![Image 12: Save form](https://www.palantir.com/docs/resources/foundry/forms/save-form-button.png)

### [](https://www.palantir.com/docs/foundry/forms/create-a-form/#change-the-response-destination)Change the response destination

To change the response destination of your form, follow these steps:

1.   From the **Response data** tab to the right of your screen, select **Change response destination**.

2.   Choose the new response destination for your form. 

![Image 13: Set new response destination](https://www.palantir.com/docs/resources/foundry/forms/change-response-destination.png)

3.   Map any added fields to properties available in the new destination. 

![Image 14: Map fields to location properties](https://www.palantir.com/docs/resources/foundry/forms/map-fields-to-properties.png)

4.   Select the green **Submit** button to save.

## [](https://www.palantir.com/docs/foundry/forms/create-a-form/#sheets-and-fields)Sheets and fields

Forms are comprised of [sheets](https://www.palantir.com/docs/foundry/forms/sheets/) and different types of fields:

*   [Simple fields](https://www.palantir.com/docs/foundry/forms/simple-fields/) ask for basic input from the respondent.
*   [Data-backed fields](https://www.palantir.com/docs/foundry/forms/data-backed-fields/) link a form to data that already exists in Foundry.
*   [Auto-populating fields](https://www.palantir.com/docs/foundry/forms/auto-populating-fields/) allow users to capture metadata about the form, such as who created it and when.
*   The [Attachments field](https://www.palantir.com/docs/foundry/forms/attachments-field/) is a special type of **simple field** that supplements responses with files.

### [](https://www.palantir.com/docs/foundry/forms/create-a-form/#modify-sheets-and-fields)Modify sheets and fields

To modify an item:

1.   Open the Visual Editor. This can be done by either: 
    *   Hovering over the item and selecting the gray settings wheel in the top right, or
    *   Double-clicking the item (for sheets, double-click the header).

2.   Explore and modify the available configuration options, which are grouped under the tabs: 
    *   Properties
    *   [Validators](https://www.palantir.com/docs/foundry/forms/validators/) (for fields only)
    *   [Transforms](https://www.palantir.com/docs/foundry/forms/transforms/)

3.   Select the green **Save** button at the bottom of the panel.

To unlock additional configuration options, use the [Code Editor](https://www.palantir.com/docs/foundry/forms/code-editor/).

### [](https://www.palantir.com/docs/foundry/forms/create-a-form/#reorder-sheets-and-fields)Reorder sheets and fields

To reorder an item:

1.   Hover over the item to be reordered.
2.   Select either of the arrows in the top left to shift the field up or down one position.

There is also a drag-and-drop handle to the left of the field.

### [](https://www.palantir.com/docs/foundry/forms/create-a-form/#remove-sheets-and-fields)Remove sheets and fields

To remove an item:

1.   Hover over the item to be deleted.
2.   Select the red **x** within a circle in the top right.
3.   Confirm the deletion by selecting the same icon once more.

A field can also be removed with the Visual Editor:

1.   Double-click the field to open the Visual Editor.
2.   From the **Properties** tab, select **Delete sheet/field** at the bottom of the panel.

Finally, an item can be drag-and-dropped to the **Drop here to delete** button at the bottom of the form.

[← PREVIOUS Core concepts / Permissions](https://www.palantir.com/docs/foundry/forms/permissions/)

[NEXT Sheets →](https://www.palantir.com/docs/foundry/forms/sheets/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

