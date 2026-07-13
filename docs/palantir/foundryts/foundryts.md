Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/foundryts/foundryts/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/foundryts/foundryts/#foundrytsfoundryts)foundryts.FoundryTS

## [](https://www.palantir.com/docs/foundry/foundryts/foundryts/#class-foundrytsfoundrytsargs-kwargs)_class_ foundryts.FoundryTS(*args, **kwargs)

The singleton that sends queries to the FoundryTS backend under the hood.

This singleton is automatically initialized using environment variables and the user is not required to initialize an instance for calling FoundryTS supported functions.

## [](https://www.palantir.com/docs/foundry/foundryts/foundryts/#examples)Examples

Copied!

```text
1>>> fts = FoundryTS()
```

#### [](https://www.palantir.com/docs/foundry/foundryts/foundryts/#property-search)_property_ search

Property for searching the Ontology with [`foundryts.search.Search`](https://www.palantir.com/docs/foundry/foundryts/search-search/).

We recommend using this property to perform search as it enforces safeguards for the searching in the Foundry ecosystem.

## [](https://www.palantir.com/docs/foundry/foundryts/foundryts/#examples-1)Examples

Copied!

```text
1>>> fts = FoundryTS()
2>>> objects = fts.search.series(metadata.property == 'value')
3NodeCollection(...)
```

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/foundryts/overview/)

[NEXT Interval →](https://www.palantir.com/docs/foundry/foundryts/interval/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

