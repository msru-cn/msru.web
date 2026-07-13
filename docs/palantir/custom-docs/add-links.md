Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-docs/add-links/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-docs/add-links/#add-links-to-custom-documentation-pages)Add links to custom documentation pages

You can use standard Markdown syntax to add links to your custom docs. The standard Markdown syntax for adding a link is as follows:

```
[Display text for link](<link_url_or_reference>)
```

## [](https://www.palantir.com/docs/foundry/custom-docs/add-links/#linking-to-a-section-on-a-page)Linking to a section on a page

The custom documentation supports standard Markdown anchor links to link directly to a Markdown header on a page. For example:

```
## This is a Markdown header

This [link](#this-is-the-destination-header) goes to the header below.

### This is the destination header

This [link](#this-is-a-markdown-header) goes to the first header in this example.
```

## [](https://www.palantir.com/docs/foundry/custom-docs/add-links/#linking-within-the-custom-docs)Linking within the custom docs

You can also link to other custom documentation pages, even if they are in other custom documentation bundles, if you have the product ID for the destination. To do so, use `@product-id/page-name` in place of a URL in your Markdown link syntax.

For example, if you want to link to the overview of product `product-test`, you can use the following syntax:

```
This is a link to the [overview of the product](@product-test/overview).
```

You can use the same syntax for anchor links on a page as well:

```
This is a link to a section of the [overview of the product](@product-test/overview#section-header).
```

This syntax will automatically resolve to the correct link on the stack. If the link does not exist on your enrollment, the link will be replaced by plain text.

## [](https://www.palantir.com/docs/foundry/custom-docs/add-links/#linking-outside-of-the-custom-docs)Linking outside of the custom docs

You can create links to websites outside the Palantir platform with standard Markdown syntax. We recommend using the `↗` character to designate links external to the platform.

```
[Palantir website ↗](https://www.palantir.com)
```

[← PREVIOUS Add pages to custom docs](https://www.palantir.com/docs/foundry/custom-docs/add-new-pages/)

[NEXT Add images or media to custom docs →](https://www.palantir.com/docs/foundry/custom-docs/add-images/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

