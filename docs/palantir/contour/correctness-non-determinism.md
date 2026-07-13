Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/contour/correctness-non-determinism/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/contour/correctness-non-determinism/#non-determinism-in-contour)Non-determinism in Contour

### [](https://www.palantir.com/docs/foundry/contour/correctness-non-determinism/#non-deterministic-window-functions)Non-deterministic window functions

When using `ROW_NUMBER`, `FIRST`, `LAST`, `LEAD`, `LAG`, `NTILE`, `ARRAY_AGG`, or `ARRAY_AGG_DISTINCT` in a window function, be careful of nondeterminism. Imagine we are partitioning by column A and ordering by column B. If for the same value of column A, there are multiple rows with the same value of column B, the results of these window functions may be non-deterministic, meaning that they may produce different results given the same input data and logic.

When using these expressions in the expression board, you will be prompted with a warning to ensure that the `ORDER BY` clause in your window function is deterministic.

![Image 4: window-function-warning](https://www.palantir.com/docs/resources/foundry/contour/correctness-window-function-warning.png)

Let's walk through an example with data:

| name | class | grade |
| --- | --- | --- |
| Aaron | Math | 95 |
| Burt | Math | 95 |
| Chrissy | Math | 80 |
| Angelica | Science | 77 |
| Burt | Science | 81 |
| Charlie | Science | 66 |

We want to rank students in each class by grade, so we add a new column `rank` with expression `ROW_NUMBER() OVER (PARTITION BY "class" ORDER BY "grade" DESC)`.

We receive this result:

| name | class | grade | rank |
| --- | --- | --- | --- |
| Aaron | Math | 95 | 1 |
| Burt | Math | 95 | 2 |
| Chrissy | Math | 80 | 3 |
| Angelica | Science | 77 | 2 |
| Burt | Science | 81 | 1 |
| Charlie | Science | 66 | 3 |

But some of the time, we receive this result:

| name | class | grade | rank |
| --- | --- | --- | --- |
| Aaron | Math | 95 | 2 |
| Burt | Math | 95 | 1 |
| Chrissy | Math | 80 | 3 |
| Angelica | Science | 77 | 2 |
| Burt | Science | 81 | 1 |
| Charlie | Science | 66 | 3 |

Because Aaron and Burt have the same grade in Math, the `rank` column is nondeterministic. To make the column deterministic, we can add the "name" column to the order by clause in our expression: `ROW_NUMBER() OVER (PARTITION BY "class" ORDER BY "grade" DESC, "name" ASC)`. With this expression, we use the `name` column to tiebreak any rows that have the same grade, so we will always get the result below:

| name | class | grade | rank |
| --- | --- | --- | --- |
| Aaron | Math | 95 | 1 |
| Burt | Math | 95 | 2 |
| Chrissy | Math | 80 | 3 |
| Angelica | Science | 77 | 2 |
| Burt | Science | 81 | 1 |
| Charlie | Science | 66 | 3 |

### [](https://www.palantir.com/docs/foundry/contour/correctness-non-determinism/#other-non-deterministic-functions)Other non-deterministic functions

Other than the window functions outlined above, the functions `CURRENT_DATE`, `CURRENT_TIMESTAMP`, `CURRENT_UNIX_TIMESTAMP`, and `MONOTONICALLY_INCREASING_ID` are also non-deterministic.

For `CURRENT_DATE`, `CURRENT_TIMESTAMP`, and `CURRENT_UNIX_TIMESTAMP`, these values will be calculated only upon path update. For example, if you create a new column with `CURRENT_DATE` on day 1, and go back to the analysis on day 2, the new column will still reflect yesterday's date.

### [](https://www.palantir.com/docs/foundry/contour/correctness-non-determinism/#aggregation-over-double-columns)Aggregation over double columns

Due to the distributed nature of Spark computations, the ordering of operands in arithmetic operations are non-deterministic (that is, 1+2 vs. 2+1). This non-deterministic ordering can lead to aggregations that create non-deterministic outputs when used with input type `double`. This means that aggregations over doubles may differ from one computation to another despite having the same inputs; these differences are very small, e.g. 0.000001.

For example, taking the `mean` or `variance` of a double column will result in a non-deterministic column. The results of performing an action on a non-determistic column (e.g. filtering) will also be non-deterministic.

Taking the `mean`, `sum`, `stddev`, `variance`, `corr`, or `sum_distinct` of a double column in your analysis will create a non-deterministic column.

Let's walk through an example:

Imagine you have double column `pickup_latitude`. In a pivot table, we're taking the mean of the double column `pickup_latitude`. If you switch to pivoted data, we've now created a non-deterministic column.

![Image 5: pivot-table-nondeterminism](https://www.palantir.com/docs/resources/foundry/contour/correctness-pivot-table.png)

If you then filter on the newly created column, the result of this filter will be non-deterministic. For example, in the above screenshot, the mean `pickup_latitude` for Staten Island is 40.5830495. If we filter to that value, we see that one row remains.

However, if we recalculate this path, it is possible that the row will no longer appear after the filter, because the value of the mean has changed very slightly. **We recommend avoiding usage of exact filters on non-deterministic columns (e.g. filtering to mean = 40.5830495). We also recommend that you avoid using non-deterministic columns as join keys.**

![Image 6: non-determinism-warning](https://www.palantir.com/docs/resources/foundry/contour/correctness-nondeterminism-warning.png)

When performing an action on a non-deterministic column in Contour (for example, filtering on that column), a warning will appear on the board where the action is performed. The warning states which aggregation is the source of the non-deterministic column.

### [](https://www.palantir.com/docs/foundry/contour/correctness-non-determinism/#diagnosing-non-determinism)Diagnosing non-determinism

One sign that an analysis is non-deterministic is inconsistent row counts. For example, let's say you have an analysis in which you have inserted a Summary board, then performed a series of transformations that do not change the row count, and then added another Summary board. If the row counts of the two Summary boards do not match, you should investigate if there are non-deterministic operations in the path above. Look out for warning signs in the UI that warn when using a non-deterministic function, or using the aggregation of doubles.

[← PREVIOUS Optimizing your analysis](https://www.palantir.com/docs/foundry/contour/performance-optimize/)

[NEXT Timezones in Contour →](https://www.palantir.com/docs/foundry/contour/correctness-timezones/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored. Further information is available in our [Cookie Policy](https://www.palantir.com/cookie-statement/)

Accept Cookies Reject All

Do Not Sell or Share My Personal Information

![Image 7: Palantir Logo](https://cdn.cookielaw.org/logos/356f77a2-eb53-4146-ba66-df614f266841/018ec371-84cc-7226-bc6b-40b41ec0280c/1204dd5e-843b-4e03-8e5d-3eaeae33575c/Palantir_Logo_300dpi.png)

## Do Not Sell or Share My Personal Data

Opt-Out Request Honored

## Do Not Sell or Share My Personal Data

*   ### Your Privacy 
*   ### Strictly Necessary Cookies 
*   ### Targeting Cookies 

#### Your Privacy

When you visit our website, we store cookies on your browser to collect information. The information collected might relate to you, your preferences or your device, and is mostly used to make the site work as you expect it to and to provide a more personalized web experience. However, you can choose not to allow certain types of cookies, which may impact your experience of the site and the services we are able to offer. Click on the different category headings to find out more and change our default settings according to your preference. You cannot opt-out of our First Party Strictly Necessary Cookies as they are deployed in order to ensure the proper functioning of our website (such as prompting the cookie banner and remembering your settings, to log into your account, to redirect you when you log out, etc.). For more information about the First and Third Party Cookies used please follow this link. 

[More information](https://www.palantir.com/cookie-statement/)

#### Strictly Necessary Cookies

Always Active

These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.

Cookies Details

#### Targeting Cookies

- [x] Targeting Cookies 

Under US privacy laws, you have the right to opt-out of the sale or sharing of your personal information to third parties. These cookies collect information for analytics and to personalize your experience with targeted ads. You may exercise your right to opt out of the sale or sharing of personal information by using this toggle switch. If you opt out we will not be able to offer you personalized ads and will not hand over your personal information to any third parties. Additionally, you may contact our legal department for further clarification about your rights as a California consumer by using this Exercise My Rights link.If you have enabled privacy controls on your browser (such as a plugin), we have to take that as a valid request to opt-out. Therefore we would not be able to track your activity through the web. This may affect our ability to personalize ads according to your preferences.

*   ##### Performance Cookies

- [x] Switch Label label  
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.

*   ##### Targeting Cookies

- [x] Switch Label label  
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.

Cookies Details

### Cookie List

Consent Leg.Interest

- [x] checkbox label label

- [x] checkbox label label

- [x] checkbox label label

Clear
*   - [x] checkbox label label 

Apply Cancel

Confirm My Choices

Reject All Allow All

