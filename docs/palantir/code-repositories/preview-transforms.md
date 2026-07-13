Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/code-repositories/preview-transforms/

Published Time: Thu, 09 Jul 2026 17:47:53 GMT

# [](https://www.palantir.com/docs/foundry/code-repositories/preview-transforms/#preview-transforms)Preview transforms

Use the Preview tool in Code Repositories to run your code on a limited sample of the input datasets to quickly preview the output. Preview produces a sample output without committing changes, running checks, or materializing any datasets in Foundry. Preview can accelerate the development cycle, removing the need to trigger a build to test code changes.

Tip

Preview works on all Foundry datasets, including datasets with [files](https://www.palantir.com/docs/foundry/building-pipelines/unstructured-overview/) and [models](https://www.palantir.com/docs/foundry/model-integration/overview/).

## [](https://www.palantir.com/docs/foundry/code-repositories/preview-transforms/#running-preview)Running Preview

Preview can be triggered from two places within Code Repositories.

(1) By selecting Preview in the code editor options panel:

![Image 8: Running preview from code editor options](https://www.palantir.com/docs/resources/foundry/code-repositories/preview-run-1.png)

(2) By selecting Preview in the helper panel:

![Image 9: Running preview from helper panel - step 1](https://www.palantir.com/docs/resources/foundry/code-repositories/preview-run-2-1.png)

![Image 10: Running preview from helper panel - step 2](https://www.palantir.com/docs/resources/foundry/code-repositories/preview-run-2-2.png)

Once the Preview has executed, the output is displayed:

![Image 11: Preview output](https://www.palantir.com/docs/resources/foundry/code-repositories/preview-run-3.png)

## [](https://www.palantir.com/docs/foundry/code-repositories/preview-transforms/#configuring-preview-with-files)Configuring Preview with files

Preview can be used on datasets that contain [unstructured files](https://www.palantir.com/docs/foundry/building-pipelines/unstructured-overview/). When running Preview for the first time on a dataset containing files, you must configure the files that will be used within the sample.

![Image 12: Configuring files](https://www.palantir.com/docs/resources/foundry/code-repositories/preview-config-files-1.png)

![Image 13: Selecting files](https://www.palantir.com/docs/resources/foundry/code-repositories/preview-config-files-2.png)

Once the sample files have been selected, they can be reconfigured by selecting the relevant input from the list of inputs. After saving the configuration, Preview will execute the code on the chosen sample of files. When running Preview again, there will be no need to reconfigure input files. Once Preview has executed, you can view the sample output as rows or files. If you have the required permissions, you can also choose to download the output files.

## [](https://www.palantir.com/docs/foundry/code-repositories/preview-transforms/#configuring-preview-with-models)Configuring Preview with models

### [](https://www.palantir.com/docs/foundry/code-repositories/preview-transforms/#model-assets)Model Assets

Preview, without the requirement of additional configuration, is supported for [model assets](https://www.palantir.com/docs/foundry/integrate-models/integrate-overview/) that are [trained in Foundry](https://www.palantir.com/docs/foundry/integrate-models/model-asset-code-repositories/) or [backed by pre-trained files](https://www.palantir.com/docs/foundry/integrate-models/model-asset-files/).

[Container backed models](https://www.palantir.com/docs/foundry/integrate-models/container-overview/) and [externally hosted models](https://www.palantir.com/docs/foundry/integrate-models/external-model-connection/) do not currently support preview.

![Image 14: Model preview for model inputs](https://www.palantir.com/docs/resources/foundry/code-repositories/model-asset-preview-model-input.png)

## [](https://www.palantir.com/docs/foundry/code-repositories/preview-transforms/#previewing-transforms-created-in-transforms-generator)Previewing transforms created in transforms generator

Transforms created in a [transforms generator](https://www.palantir.com/docs/foundry/transforms-python/pipelines/#transform-generation) share the function's name; to make it easier to select the intended transform for preview, change the `__name__` attribute of generated transforms to produce meaningful names. For example:

Copied!

```python
1from transforms.api import transform_df, Output
2
3
4def generate_transforms():
5    transforms = []
6    for output_dataset_name in ["One", "Two", "Three"]:
7        @transform_df(
8            Output(f"/output/path/{output_dataset_name}"))
9        def my_transform(ctx, output_dataset_name=output_dataset_name):
10            # by default, generated transforms would be named `my_transform (1)`, `my_transform (2)`...
11            cols = ['id', 'value']
12            vals = [
13                (0, f'{output_dataset_name}'),
14                (1, f'{output_dataset_name}'),
15                (2, f'{output_dataset_name}')
16            ]
17            df = ctx.spark_session.createDataFrame(vals, cols)
18            return df
19        transforms.append(my_transform)
20        transforms[-1].__name__ = f'{output_dataset_name}_{transforms[-1].__name__}' # override transform's name
21    return transforms
22
23
24TRANSFORMS = generate_transforms()
```

[← PREVIOUS Create transforms](https://www.palantir.com/docs/foundry/code-repositories/create-transforms/)

[NEXT Debug transforms →](https://www.palantir.com/docs/foundry/code-repositories/debug-transforms/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

