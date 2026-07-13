Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-docs/add-callouts/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-docs/add-callouts/#callouts-in-custom-documentation)Callouts in custom documentation

The in-platform custom docs allow the use of HTML to create callouts. There are four available callouts that display information in gray, green, yellow, or red, respectively. Note that Markdown formatting is not available between the `<div>` and `</div>` in the callout; for example, to bold text within a callout you should use the HTML syntax `<strong>This is bold text.</strong>` rather than the Markdown syntax `**This is bold text.**`

![Image 6: Screenshot of available callouts.](https://www.palantir.com/docs/resources/foundry/custom-docs/callouts.png)

## [](https://www.palantir.com/docs/foundry/custom-docs/add-callouts/#gray-note-callout)Gray note callout

This is the default callout style.

```
<div class="pt-callout">
    <h5 class="pt-callout-title">Note</h5>
    Insert text here and it will be a gray note callout.
</div>
```

![Image 7: Screenshot of gray note callout.](https://www.palantir.com/docs/resources/foundry/custom-docs/note-callout.png)

## [](https://www.palantir.com/docs/foundry/custom-docs/add-callouts/#green-success-callout)Green success callout

This callout is used to give tips, recommendations, and other positive information to the reader.

```
<div class="pt-callout pt-intent-success">
    <h5 class="pt-callout-title">Success</h5>
    Insert text here and it will be a green success callout.
</div>
```

![Image 8: Screenshot of green success callout.](https://www.palantir.com/docs/resources/foundry/custom-docs/success-callout.png)

## [](https://www.palantir.com/docs/foundry/custom-docs/add-callouts/#yellow-warning-callout)Yellow warning callout

This callout is used to draw the reader's attention to important information that could impact a workflow.

```
<div class="pt-callout pt-intent-warning">
    <h5 class="pt-callout-title">Warning</h5>
    Insert text here and it will be a yellow warning callout.
</div>
```

![Image 9: Screenshot of yellow warning callout.](https://www.palantir.com/docs/resources/foundry/custom-docs/warning-callout.png)

## [](https://www.palantir.com/docs/foundry/custom-docs/add-callouts/#red-danger-callout)Red danger callout

This callout is used to indicate an irreversible action or a breaking behavior (such as an action that could lead to data loss or workflow failure).

```
<div class="pt-callout pt-intent-danger">
    <h5 class="pt-callout-title">Danger</h5>
    Insert text here and it will be a red danger callout.
</div>
```

![Image 10: Screenshot of red danger callout.](https://www.palantir.com/docs/resources/foundry/custom-docs/danger-callout.png)

[← PREVIOUS Add images or media to custom docs](https://www.palantir.com/docs/foundry/custom-docs/add-images/)

[NEXT Publish custom docs →](https://www.palantir.com/docs/foundry/custom-docs/publish-custom-docs/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

