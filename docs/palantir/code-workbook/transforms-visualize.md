Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-workbook/transforms-visualize/

Markdown Content:
## Visualize data

In Code Workbook, you can use open-source visualization libraries to display visualizations of your data. These visualizations can then be shared with others, for instance in [Notepad documents](https://www.palantir.com/docs/foundry/notepad/widgets-code-workbook-chart/).

## Python Visualizations

In Python, Code Workbook supports visualizations using Matplotlib, Seaborn, and Plotly.

### Using Matplotlib and Seaborn

When using Matplotlib, a call to `matplotlib.pyplot.show()` causes the resulting plot image to be saved in the transform output and returned to the user interface, allowing the creation of customized plots. As with any visualization, you can download this image by right-clicking the transform in the graph and choosing **Download image**.

Here is an example of a transform that uses Matplotlib to render a visualization:

Copied!

```
1def viz_plot_univariate_distribution_using_histogram(input_dataset):
2    import matplotlib.mlab as mlab
3    import matplotlib.pyplot as plt
4
5    INPUT_DF = input_dataset
6    SELECTED_COLUMN = "column_to_plot" # Note this should be a numeric column
7    NUM_BINS = number_of_bins
8
9    # Histogram the selected column
10    bins, counts = INPUT_DF.select(SELECTED_COLUMN).rdd.flatMap(lambda x:x).histogram(NUM_BINS)
11
12    # Plot the histogram
13    fig, ax = plt.subplots()
14    ax.hist(bins[:-1], bins, weights=counts, density=True)
15
16    ax.set_xlabel(SELECTED_COLUMN)
17    ax.set_ylabel('Probability density')
18    ax.set_title(r'Histogram of ' + str(SELECTED_COLUMN))
19
20    # Tweak spacing to prevent clipping of ylabel
21    fig.tight_layout()
22    plt.show()
```

When using Seaborn, a data visualization library based on Matplotlib, you must call `matplotlib.pyplot.show()` to return the image to the frontend.

You can add Seaborn to your environment by [editing your profile](https://www.palantir.com/docs/foundry/administration/configure-code-workbook-profiles/#conda-environment) or by [customizing your workbook's environment](https://www.palantir.com/docs/foundry/code-workbook/environment-overview/#modify-a-profile).

Copied!

```
1def seaborn_example(pandas_df):
2    import seaborn as sns
3    import matplotlib.pyplot as plt
4
5    sns.set_theme()
6
7    # Create a visualization
8    sns.relplot(
9        data=pandas_df,
10        x="price", y="minimum_nights"
11    )
12
13    # This is necessary to capture the plot
14    plt.show()
```

Copied!

```
1def seaborn_violinplot(pandas_df):
2    import seaborn as sns
3    import matplotlib.pyplot as plt
4
5    sns.violinplot(x="col_A", y="col_B", data=pandas_df);
6    plt.show()
```

By default, the output of Matplotlib and Seaborn visualizations in Code Workbook will be in PNG format. To output Matplotlib and Seaborn visualizations in SVG format, use the following code before your plot:

`set_output_image_type('svg')`

Or, use a hint for better visibility:

Copied!

```
1@output_image_type('svg')
2def chart(input):
3    # create chart here
```

## Plotting with different languages and fonts using Matplotlib

To plot labels and text in languages using non-Roman characters (such as Japanese or Korean) or in non-default fonts using Matplotlib, you must specifically specify which font family you would like Matplotlib to use when rendering images. For more information, refer to the [list of available fonts installed by default](https://www.palantir.com/docs/foundry/code-workbook/available-fonts/).

Here is an example of how to specify fonts for Matplotlib:

```
def japanese_korean_matplotlib_example():
    import matplotlib.mlab as mlab
    import matplotlib.pyplot as plt
    from matplotlib import rcParams
    # Set font family to the Noto Sans CJK font pack
    rcParams['font.family'] = 'Noto Sans CJK JP'
    # create data
    x = [10,20,30,40,50]
    y = [30,30,30,30,30]

    # plot lines
    plt.plot(x, y, label = "ライン１")
    plt.plot(y, x, label = "선2")
    plt.xlabel("X-軸")
    plt.ylabel("Y-축")
    plt.legend()
    plt.title("日本語ラベル図の例 // 한글 라벨 도표의 예시")
    plt.show()
```

![Image 1: plot_with_korean_and_japanese_fonts](https://www.palantir.com/docs/resources/foundry/code-workbook/plot_with_korean_and_japanese_fonts.png)

Matplotlib 2.* Font Designation

For `Matplotlib 2.*`, `.ttc` font files are not detected by Matplotlib automatically. Either upgrade to `3.*` or directly add the font filepath to Matplotlib's font manager.

Copied!

```
1from matplotlib import rcParams
2import matplotlib.font_manager as fm
3fm.fontManager.ttflist += fm.createFontList(["/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"])
4rcParams['font.family'] = 'Noto Sans CJK JP'</pre>
```

### Using Plotly

Plotly is a visualization library that allows you to create interactive images. To use Plotly, first make sure it is included in your environment.

A call to `fig.show()` causes the resulting plot image to be saved as part of the transform output and returned to the user interface. Here is an example of a transform that uses Plotly to render a visualization, using Plotly Express. Plotly Express comes pre-loaded with the iris dataset.

Copied!

```
1def plotly_example():
2    import plotly.express as px
3    df = px.data.iris()
4    fig = px.scatter(df, x = "sepal_width", y = "sepal_length", color = "species")
5    fig.show()
```

After running the transform, the Plotly visualization will appear in the visualization tab. We recommend viewing the visualization in full screen mode. You are able to use functionality like zooming in and out, selection on the graph, and so on.

![Image 2: python plotly](https://www.palantir.com/docs/resources/foundry/code-workbook/transforms-visualize-py-plotly.png)

Here is a more complex example, which produces an animated visualization.

Copied!

```
1def plotly_example_2():
2    import plotly.graph_objects as go
3    fig = go.Figure(
4        data=[go.Scatter(x=[0, 1], y=[0, 1])],
5        layout=go.Layout(
6            xaxis=dict(range=[0, 5], autorange=False),
7            yaxis=dict(range=[0, 5], autorange=False),
8            title="Start Title",
9            updatemenus=[dict(
10                type="buttons",
11                buttons=[dict(label="Play",
12                          method="animate",
13                          args=[None])])]
14        ),
15        frames=[go.Frame(data=[go.Scatter(x=[1, 2], y=[1, 2])]),
16            go.Frame(data=[go.Scatter(x=[1, 4], y=[1, 4])]),
17            go.Frame(data=[go.Scatter(x=[3, 4], y=[3, 4])],
18                     layout=go.Layout(title_text="End Title"))]
19        )
20
21    fig.show()
```

## R Visualizations

In R, Code Workbook supports visualizations using ggplot2 and plotly.

![Image 3: r plotly](https://www.palantir.com/docs/resources/foundry/code-workbook/transforms-visualize-r-plotly.png)

### Using ggplot2

Copied!

```
1fare_distribution <- function(titanic_dataset) {
2    hist(titanic_dataset$Fare)
3    return(titanic_dataset)
4}
```

Copied!

```
1example_ggplot <- function() {
2    library(ggplot2)
3    theme_set(theme_bw())  # pre-set the bw theme
4    data("midwest", package = "ggplot2")
5
6    # Scatterplot
7    gg <- ggplot(midwest, aes(x=area, y=poptotal)) +
8        geom_point(aes(col=state, size=popdensity)) +
9        geom_smooth(method="loess", se=F) +
10        xlim(c(0, 0.1)) +
11        ylim(c(0, 500000)) +
12        labs(subtitle="Area Vs Population",
13            y="Population",
14            x="Area",
15            title="Scatterplot",
16            caption = "Source: midwest")
17
18    plot(gg)
19    return(NULL)
20}
```

By default, ggplot visualizations will be outputted as PNGs. To produce R ggplot visualizations in SVG format, add a hint using a comment:

Copied!

```
1fare_distribution <- function(titanic_dataset) {
2    # image: svg
3    hist(titanic_dataset$Fare)
4    return(titanic_dataset)
5}
```

To customize the PNG or SVG output, you can call the `png()` or `svg()` function using the built-in `graphicsFile` variable as filename.

Copied!

```
1unnamed_1 <- function() {
2    png(
3      filename=graphicsFile,
4      width=800,
5      height=400,
6      units="px",
7      pointsize=4,
8      bg="white",
9      res=300,
10      type="cairo")
11
12    plot(1:10, 1:10)
13}
```

Note that if you want to use a custom `svg()` function, you'll also need to provide a comment hint described above.

Copied!

```
1unnamed_1 <- function() {
2    # image: svg
3    svg(
4      filename=graphicsFile,
5      width=5,
6      height=9,
7      pointsize=4,
8      bg="white")
9
10    plot(1:10, 1:10)
11}
```

### Using Plotly

[Plotly ↗](https://plotly.com/r/) allows you to make interactive graphs. To use Plotly in R, add the `r-plotly` package to your environment. Plot graphs with `plot()` or `print()` to show them on the frontend. Here's a simple example:

Copied!

```
1plotly_example <- function() {
2    library(plotly)
3
4    scatter_plotly <- plot_ly (
5        x = rnorm(1000),
6        y = rnorm(1000),
7        mode = "markers",
8        type = "scatter"
9    )
10    plot(scatter_plotly)
11}
```

## Plotly limitations

The following notes apply to both Python and R.

*   In the console, Plotly visualizations will be converted to images and displayed as PNGs. They will not be interactive. To view an interactive visualization, write the code in a transform.
*   When creating Plotly visualizations, visualizations with more than 20,000 points are not recommended due to degraded browser performance. If creating a scatterplot with a large number of points, use `scattergl` for better performance.

## Matplotlib limitations

The following limitations on Matplotlib apply to Python.

*   [Matplotlib is not thread safe. ↗](https://matplotlib.org/stable/users/faq/howto_faq.html#work-with-threads)
    *   When running multiple nodes, Spark will run these computations in parallel. As a result, unintended behavior may be revealed in the form of Matplotlib Runtime Exceptions or visualizations created in incorrect nodes.

*   When using multiple Matplotlib visualizations in separate nodes within a single Code Workbook, you must lock each node. You can lock each node with the thread-safe decorator `@synchronous_node_execution`, as shown below.

Copied!

```
1import matplotlib.mlab as mlab
2import matplotlib.pyplot as plt
3from matplotlib import rcParams
4@synchronous_node_execution
5def thread_safe_node():
6    # Set font family to the Noto Sans CJK font pack
7    rcParams['font.family'] = 'Noto Sans CJK JP'
8    # create data
9    x = [10,20,30,40,50]
10    y = [30,30,30,30,30]
11
12    # plot lines
13    plt.plot(x, y, label = "ライン１")
14    plt.plot(y, x, label = "선2")
15    plt.xlabel("X-軸")
16    plt.ylabel("Y-축")
17    plt.legend()
18    plt.title("日本語ラベル図の例 // 한글 라벨 도표의 예시")
19    plt.show()
```
