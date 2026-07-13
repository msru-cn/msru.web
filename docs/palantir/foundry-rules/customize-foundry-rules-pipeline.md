Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/foundry-rules/customize-foundry-rules-pipeline/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/foundry-rules/customize-foundry-rules-pipeline/#customize-your-foundry-rules-pipeline)Customize your Foundry Rules pipeline

Customizing your Foundry Rules pipeline is an advanced feature intended for experienced Foundry pipeline authors. This customization can result in increased implementation and maintenance burden for workflow administrators.

Foundry Rules does not require users to write any pipeline logic out of the box. However, some use cases warrant customizing the Foundry Rules pipeline in order to achieve an outcome that is otherwise not possible.

## [](https://www.palantir.com/docs/foundry/foundry-rules/customize-foundry-rules-pipeline/#use-cases)Use cases

Customizing your Foundry Rules pipeline can provide a number of potential benefits, including:

*   Granular control over how and when different rule subsets are run.
*   The ability to pre-process Foundry Rules inputs before running the rule logic.
*   The ability to run Foundry Rules inside an [incremental transform](https://www.palantir.com/docs/foundry/transforms-python/incremental-overview/). This requires the rule logic to be compatible with incremental data.

Post-processing of Foundry Rules outputs (such as adding columns) can be achieved with a dedicated downstream transform. We do not recommend customizing the Foundry Rules pipeline solely for post-processing of Foundry Rules outputs.

## [](https://www.palantir.com/docs/foundry/foundry-rules/customize-foundry-rules-pipeline/#instructions)Instructions

Custom pipelines are currently not supported for streaming workflows.

You can deploy your own custom Foundry Rules pipeline by enabling self-managed transforms, choosing a custom transform repository, saving the Foundry Rules workflow, and then generating and saving the Foundry Rules pipeline code to the selected repository. To do so, follow the instructions below:

1.   Click on the gear icon to open the advanced settings menu.

![Image 5: Button in the Foundry Rules workflow configuration header to open advanced settings](https://www.palantir.com/docs/resources/foundry/foundry-rules/open_advanced_settings.png?width=800)
2.   Enable the **Enable self-managed transforms** option.

![Image 6: Button in the advanced settings to enable self-managed transforms](https://www.palantir.com/docs/resources/foundry/foundry-rules/enable_self_managed_transforms.png?width=500)
3.   Click on **Use a custom transform repository** in the **Transforms Configuration** section. You can either **Deploy a new repository** (recommended) or choose **Select existing repository** to find and select your chosen repository.

![Image 7: Button to use a custom transform repository](https://www.palantir.com/docs/resources/foundry/foundry-rules/use_custom_transform_repository.png?width=700)
4.   Save your Foundry Rules workflow.

5.   Generate and copy your Foundry Rules pipeline code by clicking **Generate**, and then clicking **copy**.

![Image 8: Buttons to generate and copy Foundry Rules transform code](https://www.palantir.com/docs/resources/foundry/foundry-rules/generate_and_copy_buttons.png?width=500)
6.   If you previously chose an existing repository, create a file named `FoundryRulesTransform` that lives inside the `rules.transforms` directory and paste the copied code in. If a newly deployed repository was chosen in step 3, find “FoundryRulesTransform” and paste in the code.

[← PREVIOUS Permitted and default output values](https://www.palantir.com/docs/foundry/foundry-rules/permitted-and-default-output-values/)

[NEXT Time series / Time series rules [Sunset] →](https://www.palantir.com/docs/foundry/foundry-rules/timeseries-concepts/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Do Not Sell or Share My Personal Information

