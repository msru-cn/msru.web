Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/dynamic-scheduling/scheduling-inline-metrics/

Markdown Content:
## Inline metrics

Inline metrics provide application builders with a streamlined way to display key data directly in a chart.

*   Header metrics are aligned with the timeline (x-axis) of the widget, offering high-level aggregations for the entire schedule.
*   Row metrics are aligned with each row, providing insights into the scheduling and assignment of individual resource objects.

![Image 1: Scheduling Gantt chart configured with header and row metrics.](https://www.palantir.com/docs/resources/foundry/dynamic-scheduling/inline-metrics-example.png?width=800)

The code examples on this page are available in both [TypeScript v1](https://www.palantir.com/docs/foundry/functions/typescript-v1-getting-started/) and [TypeScript v2](https://www.palantir.com/docs/foundry/functions/typescript-v2-getting-started/) functions. Select the tab that matches your function version. TypeScript v1 defines each function as a method, annotated with the `@Function()` decorator from `@foundry/functions-api`, on an exported class, and queries the Ontology through `Objects.search()`. TypeScript v2 defines functions with `export default`, imports types from `@osdk/functions`, and queries the Ontology through an [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/typescript-osdk/) client or an `ObjectSet` passed as a parameter. For a full comparison, review the [TypeScript v1 versus TypeScript v2 comparison](https://www.palantir.com/docs/foundry/functions/language-feature-support/#typescript-v1-vs-typescript-v2).

## Functions signature

Inline metrics require functions that return a list of a [custom type](https://www.palantir.com/docs/foundry/functions/types-reference/) that matches the following shape:

Copied!

```
1interface InlineMetricsBucket {
2    range: IRange<Timestamp>;
3    value: Double
4}
```

Copied!

```
1import { Double, Range, TimestampISOString } from "@osdk/functions";
2
3interface InlineMetricsBucket {
4    range: Range<TimestampISOString>;
5    value: Double;
6}
```

Inline metrics can support alternative return types as well.

Copied!

```
1// NOTE: The name of the interface is not important - only the names of the keys
2interface InlineMetricsBucketInteger {
3    range: IRange<Timestamp>;
4    value: Integer
5}
6
7interface InlineMetricsBucketString {
8    range: IRange<LocalDate>;
9    value: string
10}
```

Copied!

```
1import { DateISOString, Integer, Range, TimestampISOString } from "@osdk/functions";
2
3// NOTE: The name of the interface is not important - only the names of the keys
4interface InlineMetricsBucketInteger {
5    range: Range<TimestampISOString>;
6    value: Integer;
7}
8
9interface InlineMetricsBucketString {
10    range: Range<DateISOString>;
11    value: string;
12}
```

The `range` key can support range types over `Timestamp`, `LocalDate`, or `Integer` (with numerical values representing epoch milliseconds). TypeScript v1 uses the `IRange` type from `@foundry/functions-api`, while TypeScript v2 uses the equivalent `Range` type from `@osdk/functions` with the corresponding `TimestampISOString`, `DateISOString`, or `Integer` inner types.

The `value` key can support `string`, `Integer`, or `Double` values.

## Sample header metric function

Copied!

```
1import { Double, Function, IRange, Timestamp } from "@foundry/functions-api";
2import { Objects } from "@foundry/ontology-api";
3
4interface InlineMetricBucketV1Double {
5    range: IRange<Timestamp>;
6    value: Double;
7}
8
9export class MyFunctions {
10    // Counts the number of tasks within the given range bucketed by a step in days
11    @Function()
12    public getInlineMetricsV1WithObjectCounts(startTime: Timestamp, endTime: Timestamp, step: Double): Array<InlineMetricBucketV1Double> {
13        const tasks = Objects.search().schedulingMaintenanceTask().filter(x =>
14            x.startTime.range().gte(startTime).lte(endTime)
15        ).all();
16        const buckets: InlineMetricBucketV1Double[] = [];
17
18        let current = startTime;
19        let count = 0
20        while (current < endTime) {
21            const currentEnd: Timestamp = current.plusDays(step);
22            const tasksInRange = tasks.filter(x => x.startTime! >= current && x.startTime! <= currentEnd);
23            buckets.push({
24                range: {
25                    min: current,
26                    max: currentEnd
27                },
28                value: tasksInRange.length
29            })
30            current = currentEnd;
31            count++;
32        }
33        return buckets
34    }
35}
```

Copied!

```
1import { Client } from "@osdk/client";
2import { Double, Range, TimestampISOString } from "@osdk/functions";
3import { SchedulingMaintenanceTask } from "@ontology/sdk";
4
5interface InlineMetricBucketDouble {
6    range: Range<TimestampISOString>;
7    value: Double;
8}
9
10// Counts the number of tasks within the given range bucketed by a step in days
11export default async function getInlineMetricsWithObjectCounts(
12    client: Client,
13    startTime: TimestampISOString,
14    endTime: TimestampISOString,
15    step: Double
16): Promise<Array<InlineMetricBucketDouble>> {
17    const tasks = await Array.fromAsync(
18        client(SchedulingMaintenanceTask)
19            .where({ startTime: { $gte: startTime, $lte: endTime } })
20            .asyncIter()
21    );
22    const buckets: InlineMetricBucketDouble[] = [];
23
24    let current = new Date(startTime);
25    const end = new Date(endTime);
26    while (current < end) {
27        const currentEnd = new Date(current);
28        currentEnd.setUTCDate(currentEnd.getUTCDate() + step);
29        const tasksInRange = tasks.filter(t =>
30            t.startTime != null &&
31            new Date(t.startTime) >= current &&
32            new Date(t.startTime) <= currentEnd
33        );
34        buckets.push({
35            range: {
36                min: current.toISOString(),
37                max: currentEnd.toISOString(),
38            },
39            value: tasksInRange.length,
40        });
41        current = currentEnd;
42    }
43    return buckets;
44}
```

Since header metrics are displayed as a header alongside the x-axis, these functions are not necessarily tied to any specific objects as inputs.

## Sample row metric function

Copied!

```
1import { Double, Function, IRange, Timestamp } from "@foundry/functions-api";
2import { ObjectSet, SchedulingTechnician_1 } from "@foundry/ontology-api";
3
4interface InlineMetricBucketV1String {
5    range: IRange<Timestamp>;
6    value: string;
7}
8
9export class MyFunctions {
10    // Returns the name of the row alongside the number bucket to which it belongs
11    @Function()
12    public getInlineMetricsV1StringWithObject(techs: ObjectSet<SchedulingTechnician_1>, startTime: Timestamp, endTime: Timestamp, step: Double): Array<InlineMetricBucketV1String> {
13        const techName = techs.all()[0].fullName;
14        const buckets: Array<InlineMetricBucketV1String> = [];
15
16        let current = startTime;
17        let count = 0;
18        while (current < endTime) {
19            const currentEnd: Timestamp = current.plusDays(step);
20            buckets.push({
21                range: {
22                    min: current,
23                    max: currentEnd
24                },
25                value: `${techName}-${count}`,
26            })
27            current = currentEnd;
28            count++;
29        }
30        return buckets
31    }
32}
```

Copied!

```
1import { ObjectSet } from "@osdk/client";
2import { Double, Range, TimestampISOString } from "@osdk/functions";
3import { SchedulingTechnician } from "@ontology/sdk";
4
5interface InlineMetricBucketString {
6    range: Range<TimestampISOString>;
7    value: string;
8}
9
10// Returns the name of the row alongside the number bucket to which it belongs
11export default async function getInlineMetricsStringWithObject(
12    techs: ObjectSet<SchedulingTechnician>,
13    startTime: TimestampISOString,
14    endTime: TimestampISOString,
15    step: Double
16): Promise<Array<InlineMetricBucketString>> {
17    const firstPage = await techs.fetchPage({ $pageSize: 1 });
18    const techName = firstPage.data[0].fullName;
19    const buckets: Array<InlineMetricBucketString> = [];
20
21    let current = new Date(startTime);
22    const end = new Date(endTime);
23    let count = 0;
24    while (current < end) {
25        const currentEnd = new Date(current);
26        currentEnd.setUTCDate(currentEnd.getUTCDate() + step);
27        buckets.push({
28            range: {
29                min: current.toISOString(),
30                max: currentEnd.toISOString(),
31            },
32            value: `${techName}-${count}`,
33        });
34        current = currentEnd;
35        count++;
36    }
37    return buckets;
38}
```

Row metrics accept the corresponding row object as runtime input. When specifying your function in the configuration, you can specify the object parameter as runtime input and the widget will automatically pass the corresponding row through to the function for you.

![Image 2: Runtime input for metric configuration.](https://www.palantir.com/docs/resources/foundry/dynamic-scheduling/inline-metrics-runtime-input.png?width=300)

## Widget configuration

The Scheduling Gantt Chart widget config has a **Metrics** section which includes options for header-level and row-level metrics.

![Image 3: Metrics section in the Scheduling Gantt Chart config panel.](https://www.palantir.com/docs/resources/foundry/dynamic-scheduling/inline-metrics-config-section.png?width=300)

Within the metric configuration setup, you can provide a display title, select an icon, and/or set up conditional coloring.

![Image 4: Individual metric configuration screen.](https://www.palantir.com/docs/resources/foundry/dynamic-scheduling/inline-metrics-config.png?width=300)
