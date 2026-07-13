Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/forms/integrate/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/forms/integrate/#integrate-with-other-foundry-applications)Integrate with other Foundry applications

Foundry Forms is no longer the recommended approach for data entry or writeback workflows on Foundry. Instead, build user input workflows with the Foundry Ontology, representing the relevant data structures as object types and configuring the writeback interaction with Actions. Learn more in the [Forms overview](https://www.palantir.com/docs/foundry/forms/overview/) documentation.

Forms offers seamless integration with other Foundry applications. This page discusses how Foundry Forms can be used with [Fusion](https://www.palantir.com/docs/foundry/fusion/overview/), [Slate](https://www.palantir.com/docs/foundry/slate/overview/), and [Object Explorer](https://www.palantir.com/docs/foundry/object-explorer/overview/).

## [](https://www.palantir.com/docs/foundry/forms/integrate/#fusion)Fusion

If Fusion is chosen as the [response destination](https://www.palantir.com/docs/foundry/forms/create-a-form/#change-the-response-destination), Forms will immediately create the backing spreadsheet. Every time the form is saved, the newly required columns will be automatically added to the table region.

Users can also create a form from an existing table region in Fusion by selecting the **Insert** tab and choosing **Form**.

## [](https://www.palantir.com/docs/foundry/forms/integrate/#slate)Slate

Two Slate widgets can be used to embed a form in Slate:

*   Foundry Form
*   [iIframe](https://www.palantir.com/docs/foundry/slate/widgets-advanced/#iframe)

When using an iframe, the following URL parameters can be used to customize the display of the form:

*   `embedded=true`: Must be provided when iframing a form.
*   `noHeader=true`: Will remove the header from the form.
*   `progressOnly=true` : Will render only the progress bar as the header; ignored when `noHeader=true`.
*   `forceDarkMode=true`: Will render the form in dark mode.

Additionally, users can prefill values by using the [Code Editor](https://www.palantir.com/docs/foundry/forms/code-editor/) to add a `urlParam` to each field:

Copied!

```yaml
1fields:
2  - uri: display.Text
3    name: Text
4    type: Text
5    urlParam: text
6    options: {}
```

The URL will then show as: `workspace/fforms/f/new/<form-id>?embedded=true&progressOnly=true&text=prefilled`.

## [](https://www.palantir.com/docs/foundry/forms/integrate/#object-explorer)Object Explorer

Three [section widgets](https://www.palantir.com/docs/foundry/object-views/config-legacy-object-views/) can be used to embed a form in an object view:

*   [Edit object form](https://www.palantir.com/docs/foundry/forms/integrate/#edit-object-form)
*   [Create linked object form](https://www.palantir.com/docs/foundry/forms/integrate/#create-linked-object-form)
*   [iframe](https://www.palantir.com/docs/foundry/forms/integrate/#iframe)

In addition, Forms supports [bulk editing multiple objects](https://www.palantir.com/docs/foundry/forms/integrate/#bulk-edit-multiple-objects) through one object-backed form.

### [](https://www.palantir.com/docs/foundry/forms/integrate/#edit-object-form)Edit object form

To add the **Edit object form** section:

1.   [Create](https://www.palantir.com/docs/foundry/forms/create-a-form/#create-and-configure-a-new-form) a form linked with object type `X`.
2.   Navigate to the Object View for `X`, and select **Actions** followed by **Edit object view**.
3.   Add the **Edit object form** section.

The `Default Form ID` can be found in the Forms URL: `/workspace/fforms/v1/entry/<form-id>/new`.

In the `Prefilled Values` section:

*   The URI or URL parameter associated with a field can be found using the [Code Editor](https://www.palantir.com/docs/foundry/forms/code-editor/).
*   The values themselves can either be static (`2000-01-01`) or taken from a property of the current object (`{{start_date}}`, where `start_date` is a property ID for object type `X`).

The `Conditional Form` section can be used to render different forms based on the value of some property.

### [](https://www.palantir.com/docs/foundry/forms/integrate/#create-linked-object-form)Create linked object form

Adding and configuring this section is very similar to [editing an object form](https://www.palantir.com/docs/foundry/forms/integrate/#edit-object-form), with two notable differences:

1.   The section should be added to the Object View for `Y`, which is linked to `X`.
2.   The form can be prefilled based on the last linked object, and a sort property can be provided to customize the definition of "last".

### [](https://www.palantir.com/docs/foundry/forms/integrate/#iframe)iframe

This section can be added as described [above](https://www.palantir.com/docs/foundry/forms/integrate/#edit-object-form), and configured as described in [Slate](https://www.palantir.com/docs/foundry/forms/integrate/#slate).

### [](https://www.palantir.com/docs/foundry/forms/integrate/#bulk-edit-multiple-objects)Bulk edit multiple objects

By default, this feature is disabled on an object-backed form. Enable it by toggling **Allow this form to bulk edit (in Actions menu)** in the **Settings** tab in the Visual Editor to the right of the form.

When enabled, follow the steps below to bulk edit multiple objects:

1.   Navigate to Object Explorer and select the objects that you want to edit.
2.   Select the **Open in** button and choose **Edit [number-of-selected-objects] objects in [name-of-the-form]**.
3.   The form opens in a dialog and allows you to override properties on all selected objects.

![Image 2: Bulk edit objects in Object Explorer ](https://www.palantir.com/docs/resources/foundry/forms/bulk-edit.gif)

A form in bulk edit mode will override all properties in that form on all selected objects. We recommend only using required fields in such forms. Use the `required` validator to make sure values are filled before submission.

By default, it is possible to edit, at maximum, 200 objects through one form. Contact your Palantir representative if your use case requires a larger limit.

[← PREVIOUS Review and edit responses](https://www.palantir.com/docs/foundry/forms/review-edit-responses/)

[NEXT FAQs →](https://www.palantir.com/docs/foundry/forms/faqs/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

