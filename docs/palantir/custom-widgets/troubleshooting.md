Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-widgets/troubleshooting/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/custom-widgets/troubleshooting/#troubleshooting)Troubleshooting

This page contains tips for issues that you may encounter while using custom widgets.

## [](https://www.palantir.com/docs/foundry/custom-widgets/troubleshooting/#page-crashes)Page crashes

Custom widgets run inside an iframe and may crash if they consume too much memory or block the browser thread. When this occurs, the browser may become unresponsive or show a terminated state. Use the **Performance** tab in Chrome DevTools to record browser execution and look for performance anomalies.

Review the common anti-patterns described below to mitigate browser page crashing when working with custom widgets.

### [](https://www.palantir.com/docs/foundry/custom-widgets/troubleshooting/#avoid-infinite-loops-and-re-renders)Avoid infinite loops and re-renders

Infinite or effectively infinite loops and re-renders are a common class of bug that can cause page crashes.

In [React ↗](https://react.dev/), beware of loops that could cause infinite re-renders. Check for:

*   `useEffect` hooks that update a dependency of the same hook, causing them to run again.
*   `setTimeout`, `setInterval`, `requestAnimationFrame` loops that are never cleared.
*   Event handlers, such as `window.addEventListener`, that cause updates which trigger the same handler again.
*   Rendering code that performs expensive work for _every_ item on _every_ render.

Copied!

```typescript
1function InfiniteRender({ objects }: { objects: MyObject[] }) {
2    const [data, setData] = useState<MyObject[]>([]);
3
4    // BUG: updating data which is also a dependency
5    useEffect(() => {
6        setData([...objects]);
7    }, [objects, data]);
8
9    return <MyComponent />;
10}
```

Outside of React, avoid creating `while` loops that never exit:

Copied!

```typescript
1// BUG: infinite loop if condition is never met
2while (true) {
3    doSomething();
4    if (myCondition) {
5        break;
6    }
7}
```

Additionally, you should not create `while` loops that are effectively infinite due to an unknown and unexpectedly large number of iterations:

Copied!

```typescript
1const minValue = min(myValues);
2const maxValue = max(myValues);
3let currentValue = minValue;
4
5// BUG: effectively infinite loop if bounds of myValues are unknown and unexpectedly large
6while (currentValue <= maxValue) {
7    doSomething(currentValue);
8    currentValue += 1;
9}
```

### [](https://www.palantir.com/docs/foundry/custom-widgets/troubleshooting/#avoid-loading-all-data-into-the-browser)Avoid loading all data into the browser

When an ontology object type has a large number of objects, do not load all objects into the browser for client-side processing. This can exhaust browser resources and transfer large amounts of data over the network, which can be slow for widget users.

Copied!

```typescript
1let pageToken: string | undefined;
2const allObjects = [];
3
4do {
5    const page = await client(MyObject).fetchPage({
6        $pageSize: 1_000,
7        $pageToken: pageToken,
8    });
9
10    allObjects.push(...page.data);
11    pageToken = page.nextPageToken;
12} while (pageToken != null);
```

Instead:

*   Display a single page of data to the user and only load extra pages when needed.
*   Apply filtering and sorting in the query rather than in client-side processing.
*   Use aggregations when summary statistics, such as a total count, are required.
*   Request only the properties required with `$select` for object types with many properties.
*   Use [derived properties](https://www.palantir.com/docs/foundry/ontology/derived-properties/) through `.withProperties` for calculations depending on values of other properties or links on objects.

[← PREVIOUS Manage Node.js version in a Foundry code repository](https://www.palantir.com/docs/foundry/custom-widgets/manage-node-version-in-foundry-code-repository/)

[NEXT Pilot / Overview →](https://www.palantir.com/docs/foundry/pilot/overview/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

