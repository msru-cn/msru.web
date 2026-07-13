Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/contour/getting-started/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/contour/getting-started/#getting-started)Getting started

This tutorial walks through how you can use Contour to go from a spreadsheet of raw data to charts that reveal insights into the data.

## [](https://www.palantir.com/docs/foundry/contour/getting-started/#about-the-dataset)About the dataset

This tutorial uses data about neighborhoods in New York City from the [2010 U.S. Census ↗](https://data.cityofnewyork.us/). Follow along with this sample dataset: [`Download nyc_population_by_neighborhood dataset`](https://www.palantir.com/docs/resources/foundry/contour/getting-started-nyc_population_by_neighborhood.csv)

Each row in the dataset is a neighborhood in New York City, with information about its Borough, Population, NTA_Name (neighborhood name), and FIPS_County_Code (county code).

After downloading this dataset, drag and drop it into Foundry to create a dataset. Then, click **Analyze** to start a Contour analysis.

* * *

## [](https://www.palantir.com/docs/foundry/contour/getting-started/#building-a-chart)Building a chart

First, we will visualize the population in each borough of New York City. We can do this by adding a bar chart with X-axis Borough, and Y-axis the sum of Population.

![Image 11: chart-tutorial-pt-1](https://www.palantir.com/docs/resources/foundry/contour/getting-started-chart-tutorial-pt-1.png)

To sort the bars in descending order of population, scroll to **Options** and choose **Y axis descending** for Sort Order.

![Image 12: chart-tutorial-pt-2](https://www.palantir.com/docs/resources/foundry/contour/getting-started-chart-tutorial-pt-2.png)

* * *

## [](https://www.palantir.com/docs/foundry/contour/getting-started/#adding-an-overlay)Adding an overlay

In addition to information about total population of the borough, we'd like to overlay the average population in each neighborhood as a line. This will allow us to get a sense of population density in the boroughs.

Let's add an overlay by clicking **+ Add overlay** and selecting a line chart. We can plot this line chart on a new axis.

![Image 13: chart-tutorial-pt-3](https://www.palantir.com/docs/resources/foundry/contour/getting-started-chart-tutorial-pt-3.png)

Based on this chart we can see that although Manhattan has the third highest population out of the five boroughs, the mean population per neighborhood in Manhattan is about 55,000 people per neighborhood which is more than any other borough.

* * *

## [](https://www.palantir.com/docs/foundry/contour/getting-started/#formatting-the-chart)Formatting the chart

Now that we have created the chart, we can change the titles, colors, and number formatting.

Click on the **Format** tab. Let's change the left Y-axis title from **Sum of Population** to **Population**, and the right Y-axis title from **Mean of Population** to **Mean of Population per Neighborhood**. Then, toggle off the legend. In this section, you can also choose Number Format options and Scale options.

![Image 14: chart-tutorial-pt-4](https://www.palantir.com/docs/resources/foundry/contour/getting-started-chart-tutorial-pt-4.png)

Next, let's use the color picker to choose a different color for the overlay line. Click on the green square below the label **Overlay 1**, and expand the color picker section. In this popover, you can also choose to make the line dashed.

![Image 15: chart-tutorial-pt-5](https://www.palantir.com/docs/resources/foundry/contour/getting-started-chart-tutorial-pt-5.png)

Next, let's change the Display Units on the Y-axis. We'd like to view the population per Borough in millions. In the format tab under **Number Format Options**, change the **Display Unit** to Millions and specify 2 decimal places. After recomputing, note that the Y-axis title is now "Population (in millions)". This is only a formatting change: all underlying data remains the same.

![Image 16: chart-display-units](https://www.palantir.com/docs/resources/foundry/contour/getting-started-chart-display-units.png)

* * *

## [](https://www.palantir.com/docs/foundry/contour/getting-started/#segmenting-your-data)Segmenting your data

We want to investigate the specific neighborhoods that make up each borough's population. To view the population for each neighborhood and see how it contributes toward the sum for its borough, let's add the neighborhood as a segment in the **Main Chart** tab. Your chart will now look like this:

![Image 17: chart-tutorial-pt-6](https://www.palantir.com/docs/resources/foundry/contour/getting-started-chart-tutorial-pt-6.png)

Congratulations - you've successfully made a chart using Contour.

* * *

## [](https://www.palantir.com/docs/foundry/contour/getting-started/#other-tips-for-working-with-charts)Other tips for working with charts

### [](https://www.palantir.com/docs/foundry/contour/getting-started/#overlays)Overlays

Note that _only the main chart layer is part of the data path_. The other layers are solely for presentation purposes. In other words, making a selection or otherwise manipulating the data on an overlay layer will not affect the data downstream in your path.

### [](https://www.palantir.com/docs/foundry/contour/getting-started/#sorting-the-segments-in-your-series)Sorting the segments in your series

When you have segmented your series, you can reorder the segments in the series in the **Format** tab. Scroll down and click on the **Format Series** popover. You can choose to sort the segments in ascending or descending order, or a custom sort based on another column. Or, use the drag handles next to each segment name to manually reorder them.

In the below image, we are visualizing the average trip distance for taxi trips between the `start_borough` of a taxi trip, and the `end_borough`. In the example, we've sorted my segments (`end_borough`) by the average of trip distance so that the `end_borough` with the highest average trip distance appears to the left.

![Image 18: custom_series_sort](https://www.palantir.com/docs/resources/foundry/contour/getting-started-custom-series-sort.png)

### [](https://www.palantir.com/docs/foundry/contour/getting-started/#advanced-line-chart-series-sort)Advanced: Line chart series sort

You may want to control the order in which points in your line chart are plotted. For example, imagine we want to plot the temperature and wind speed at a location over time. Our data looks as below:

| day | temperature | wind_speed |
| --- | --- | --- |
| 1 | 50 | 0 |
| 2 | 36 | 10 |
| 3 | 70 | 25 |

Let's make a line chart with temperature on the X-axis and wind speed on the Y-axis.

![Image 19: line-chart-no-series-sort](https://www.palantir.com/docs/resources/foundry/contour/getting-started-line-chart-no-series-sort.png)

Above, the points are drawn from left to right. We want the points to be drawn in chronological order. To do that, add `day` in the **Series Sort Options**.

![Image 20: line-chart-with-series-sort](https://www.palantir.com/docs/resources/foundry/contour/getting-started-line-chart-with-series-sort.png)

The points in this chart are now drawn in order of day.

[← PREVIOUS Overview](https://www.palantir.com/docs/foundry/contour/overview/)

[NEXT Core concepts →](https://www.palantir.com/docs/foundry/contour/core-concepts/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

