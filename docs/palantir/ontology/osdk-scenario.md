Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/ontology/osdk-scenario/

Published Time: Thu, 09 Jul 2026 17:47:57 GMT

Markdown Content:
## Use scenarios with OSDK

Experimental

Scenario support in the [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) is experimental and may not be available on your enrollment; be aware that the API surface described on this page is under active development and subject to change.

The [Ontology SDK (OSDK)](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) allows you to create and interact with [Ontology scenarios](https://www.palantir.com/docs/foundry/ontology/overview-ontology-scenario/) directly from your application code. A scenario-scoped client behaves like a regular OSDK client: every object you read, every aggregation you compute, and every action you apply is automatically evaluated against the scenario's isolated sandbox rather than the main Ontology.

Scenario support is available in both the TypeScript and Python OSDK. The sections below describe how to perform the following operations in each language:

*   Create a new scenario or attach to an existing one.
*   Read and query objects in the context of a scenario.
*   Apply actions and edits within a scenario.
*   Merge a scenario into the main Ontology.
*   List the entities edited within a scenario (TypeScript OSDK only).

## TypeScript OSDK

Scenario support is available in `@osdk/client` version `2.27.0` and later; generate a matching version of your SDK in [Developer Console](https://www.palantir.com/docs/foundry/developer-console/create-application/).

### Create or attach to a scenario

Use `createScenario` to create a new scenario, or `withScenario` to attach to an existing scenario by its RID. Both functions return a scenario-scoped client.

Copied!

```
1import { createScenario, withScenario } from "@osdk/client/unstable-do-not-use";
2
3// Create a new scenario. This is asynchronous because it calls the platform.
4const scenario = await createScenario(client);
5
6// Or attach to an existing scenario by RID. This is synchronous and makes no network call.
7const existingScenario = withScenario(client, "ri.actions..scenario.0000-...");
8
9// Retrieve the scenario reference (RID) to persist or share.
10const scenarioRid: string = scenario.getScenarioReference();
```

If the base `client` is configured with a branch, the new scenario created by `createScenario` uses that branch as its base.

You can also attach to a scenario that is stored as a [persisted scenario object](https://www.palantir.com/docs/foundry/ontology/persisted-scenario/). The primary key of a persisted scenario object is its scenario reference, so pass the object's `$primaryKey` to `withScenario`.

Copied!

```
1// `scenarioObject` is a persisted scenario object you already have, for example from an object set query.
2// The scenario object's primary key is the scenario reference (RID).
3const scenario = withScenario(client, scenarioObject.$primaryKey);
```

### Query objects within a scenario

The scenario client is callable exactly like a regular OSDK client. All reads are automatically scoped to the scenario.

Copied!

```
1import { Restaurant } from "@my-app/sdk";
2
3// Load a page of objects as they appear within the scenario.
4const page = await scenario(Restaurant).fetchPage();
5
6// Filters and aggregations are also evaluated against the scenario.
7const filtered = await scenario(Restaurant)
8  .where({ numberOfReviews: { $gte: 100 } })
9  .fetchPage();
10
11const counts = await scenario(Restaurant).aggregate({
12  $select: { $count: "unordered" },
13});
```

### Apply actions within a scenario

Apply an action through the scenario client to stage edits inside the scenario's sandbox. These edits do not affect the main Ontology until the scenario is merged.

Copied!

```
1import { addReview } from "@my-app/sdk";
2
3const result = await scenario(addReview).applyAction({
4  restaurantId: "restaurantId",
5  reviewRating: 5,
6  reviewSummary: "It was great!",
7});
```

Batch actions are not supported when applying actions within a scenario. Scenarios also cannot be nested within another scenario or combined with a transaction.

### Merge a scenario

To merge a scenario, apply any action type configured with an **Apply Scenario** rule. Adding this rule to an action automatically exposes a scenario parameter of type `scenarioReference`. Pass the scenario client directly as the value of that parameter; the OSDK resolves it to the scenario reference automatically.

Copied!

```
1import { applyScenario } from "@my-app/sdk";
2
3// `applyScenario` is an action configured with an Apply Scenario rule, which
4// exposes a scenario parameter named `scenario`.
5await client(applyScenario).applyAction({ scenario });
```

The action and parameter names are specific to your Ontology. Review [Merge scenarios](https://www.palantir.com/docs/foundry/ontology/merge-scenario/) for guidance on configuring the **Apply Scenario** rule on an action type.

### List edited entities within a scenario

The scenario client exposes methods to discover which objects and links were edited within a scenario. These results return sparse identifiers: only the `$apiName` and `$primaryKey` fields are populated. To load full property values, pass the primary keys back through the scenario client.

#### Edited objects

Use `getEditedEntityTypes` to discover which object and link types changed, then `getEditedEntities` to page through the edited objects of a given type, or `editedEntitiesAsyncIter` to stream them.

Copied!

```
1import { Restaurant } from "@my-app/sdk";
2
3// Discover which object types and link types were edited in the scenario.
4const { objectTypes, linkTypes } = await scenario.getEditedEntityTypes();
5
6// Page through edited objects of a given object type.
7const editedPage = await scenario.getEditedEntities(Restaurant, { pageSize: 500 });
8for (const obj of editedPage.data) {
9  console.log(obj.$apiName, obj.$primaryKey);
10}
11
12// Or stream all edited objects of a given object type. The iterator auto-paginates and dedupes by primary key.
13for await (
14  const obj of scenario.editedEntitiesAsyncIter(Restaurant, { pageSize: 500 })
15) {
16  console.log(obj.$primaryKey);
17}
```

To load full property values for the edited objects, re-fetch them through the scenario client.

Copied!

```
1const keys = editedPage.data.map((obj) => obj.$primaryKey);
2const full = await scenario(Restaurant)
3  .where({ $primaryKey: { $in: keys } })
4  .fetchPage();
```

#### Edited links

Use `getEditedLinkTypes`, `getEditedLinks`, and `editedLinksAsyncIter` to inspect edited links. Each edited link is returned as a directed triple of `source`, `target`, and `linkType`. Only many-to-many links are returned; edited one-to-many links surface through `getEditedEntities` on the object type that owns the foreign key.

Copied!

```
1import { Restaurant } from "@my-app/sdk";
2
3// Discover which many-to-many link types for a given object type were edited.
4const editedLinkTypes = await scenario.getEditedLinkTypes(Restaurant);
5
6// Page through edited links for a given link type.
7const linksPage = await scenario.getEditedLinks(Restaurant, "sisterRestaurants", {
8  pageSize: 200,
9});
10for (const { source, target, linkType } of linksPage.data) {
11  console.log(source.$primaryKey, "->", target.$primaryKey, `(${linkType})`);
12}
13
14// Or stream all edited links of a given link type.
15for await (
16  const { source, target } of scenario.editedLinksAsyncIter(
17    Restaurant,
18    "sisterRestaurants",
19  )
20) {
21  console.log(source.$primaryKey, "->", target.$primaryKey);
22}
```

## Python OSDK

Scenario support is available in Python OSDK version `2.209.0` and later, and is a beta feature: you must run scenario code within an `AllowBetaFeatures` context.

### Create or attach to a scenario

Use `ScenarioClient.create` to mint a new scenario, or the `ScenarioClient` constructor to attach to an existing scenario by its RID. Both return a scenario-scoped client.

Copied!

```
1from foundry_sdk_runtime import AllowBetaFeatures
2from osdk import FoundryClient, ScenarioClient, UserTokenAuth
3
4with AllowBetaFeatures():
5    # Create a new scenario. This calls the platform to mint the scenario.
6    scenario_client = ScenarioClient.create(client)
7
8    # Or attach to an existing scenario by RID.
9    scenario_client = ScenarioClient(
10        client, scenario_rid="ri.actions..scenario.0000-..."
11    )
12
13    # Retrieve the scenario reference (RID) to persist or share.
14    scenario_rid = scenario_client.scenario_rid
```

The new scenario created by `ScenarioClient.create` inherits the ontology and branch of the base `client`. The base client passed to `ScenarioClient` must not itself be a scenario client.

You can also attach to a scenario that is stored as a [persisted scenario object](https://www.palantir.com/docs/foundry/ontology/persisted-scenario/). The primary key of a persisted scenario object is its scenario reference, so pass the object's primary key to the `ScenarioClient` constructor.

Copied!

```
1with AllowBetaFeatures():
2    # `scenario_object` is a persisted scenario object you already have, for example from a query.
3    # The scenario object's primary key is the scenario reference (RID).
4    scenario_client = ScenarioClient(
5        client, scenario_rid=scenario_object.get_primary_key()
6    )
```

### Query objects within a scenario

Read and query objects through `scenario_client.ontology.objects`. All reads are automatically scoped to the scenario.

Copied!

```
1with AllowBetaFeatures():
2    # Load a single object as it appears within the scenario.
3    restaurant = scenario_client.ontology.objects.ExampleRestaurant.get("primaryKey")
4
5    # Load a page of objects from within the scenario.
6    page = scenario_client.ontology.objects.ExampleRestaurant.page(page_size=30)
```

### Apply actions within a scenario

Apply an action through the scenario client to stage edits inside the scenario's sandbox. These edits do not affect the main Ontology until the scenario is merged.

Copied!

```
1from foundry_sdk_runtime.types import ActionConfig, ActionMode
2
3with AllowBetaFeatures():
4    scenario_client.ontology.actions.add_review(
5        action_config=ActionConfig(mode=ActionMode.VALIDATE_AND_EXECUTE),
6        restaurant_id="restaurantId",
7        review_rating=5,
8        review_summary="It was great!",
9    )
```

### Merge a scenario

To merge a scenario, apply any action type configured with an **Apply Scenario** rule. Adding this rule to an action automatically exposes a scenario parameter of type `scenarioReference`. Pass the scenario client (or its `scenario_rid` string) as the value of that parameter.

Copied!

```
1from foundry_sdk_runtime.types import ActionConfig, ActionMode
2
3with AllowBetaFeatures():
4    # `apply_scenario` is an action configured with an Apply Scenario rule, which
5    # exposes a scenario parameter named `scenario`. The action and parameter names
6    # are specific to your Ontology.
7    client.ontology.actions.apply_scenario(
8        action_config=ActionConfig(mode=ActionMode.VALIDATE_AND_EXECUTE),
9        scenario=scenario_client,  # or scenario=scenario_client.scenario_rid
10    )
```

Review [Merge scenarios](https://www.palantir.com/docs/foundry/ontology/merge-scenario/) for guidance on configuring the **Apply Scenario** rule on an action type.

### List edited entities within a scenario

Listing the entities edited within a scenario is not yet supported in the Python OSDK. This capability will be added in a future release. To inspect edited entities today, use the [TypeScript OSDK](https://www.palantir.com/docs/foundry/ontology/osdk-scenario/#list-edited-entities-within-a-scenario).
