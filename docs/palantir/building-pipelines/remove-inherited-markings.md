Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/building-pipelines/remove-inherited-markings/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

Markdown Content:
## Remove inherited Markings and Organizations

[Markings](https://www.palantir.com/docs/foundry/security/markings/) and [Organizations](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/#organizations) restrict access to resources based on a user's eligibility.

When restricted content is removed or obfuscated while deriving a dependent resource, users may wish to remove the Marking and/or Organization on that derived resource. This process of removing inherited Markings and Organizations can be done by using the [`stop_propagating`](https://www.palantir.com/docs/foundry/api-reference/transforms-python-library/api-input/#transforms.api.Input) and `stop_requiring` input transform properties.

*   [`stop_propagating`](https://www.palantir.com/docs/foundry/api-reference/transforms-python-library/api-input/#transforms.api.Input) is used to remove inherited [Markings](https://www.palantir.com/docs/foundry/platform-security-management/manage-markings/#remove-an-inherited-marking) (for example, PII).
*   `stop_requiring` is used to remove inherited [Organizations](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/#organizations) (e.g.Palantir).

## Terminology

*   [Organizations](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/#organizations) are an access requirement applied to Projects that guarantees strict silos between groups of users and resources. In order to meet access requirements, users must be a member or guest member of at least one Organization applied to a Project.
*   [Markings](https://www.palantir.com/docs/foundry/security/markings/) are an access requirement applied to resources that restricts access in an all-or-nothing fashion. In order to meet access requirements, a user must be a member of **all** Markings applied on the resource.
*   [Roles](https://www.palantir.com/docs/foundry/security/projects-and-roles/#roles) are a collection of permissions that define the specific workflows a user can perform on a given resource (e.g.Viewer, Editor, etc.).

## Important to know

*   The `stop propagating` and `stop requiring` key phrases only apply to Organizations and Markings and **NOT** Roles.
*   The repository needs to have at least one protected branch (for example,**main**). This branch must also [enforce at least one required approver](https://www.palantir.com/docs/foundry/code-repositories/branch-settings/#require-code-reviews).
*   You can only remove Organizations and Markings on protected branches. Mentioning an un-protected branch (e.g. `on_branches=[..., "not-protected-branch"]`) will cause the build to fail.
*   Removal of organizations and Markings is supported in Python, Java, and SQL.
*   Special user permissions are necessary to approve the removal of inherited Organizations and Markings. A user will need `Remove marking` permissions to remove Markings and `Expand access` permissions to remove Organizations.

## Basic workflow

The gray dataset boxes in Project C below highlight the fact that Project References must be added for all the inputs in the destination Project.

![Image 1: basic_workflow](https://www.palantir.com/docs/resources/foundry/building-pipelines/basic_workflow.png)

### Steps

1.   Create a new branch off of a protected branch (for example, _main_).

2.   Add one or both of the `stop_propagating` and `stop_requiring` properties to the input transform. For example:

![Image 2: basic_example_code](https://www.palantir.com/docs/resources/foundry/building-pipelines/basic_example_code.png)

1.   Create a pull request to merge this code into a protected branch.

2.   A user with either `Remove marking` permissions for Markings or `Expand access` for Organizations can approve or reject the proposed changes. If multiple reviewers are added, rejection by any reviewer will result in rejection of the entire pull request.

3.   If approved, the code editor merges the PR and builds the output dataset. After the output dataset is built, it will no longer have the propagated Markings and/or Organizations.

Internally, Organizations are represented as a slightly different kind of Marking, hence the transforms keyword following `stop_requiring` is called `OrgMarkings`.

## Input transform property

To remove inherited Markings (e.g. PII), use the `stop_propagating` keyphrase.

To remove inherited Organizations (e.g. Palantir), use the `stop_requiring` keyphrase.

Each of these keyphrases must be specified on **every** input that requires removal of Markings or Organizations. For every removal, you must also specify the protected branches to which the removal should apply. Marking IDs, Organization IDs, and branches should always be specified as quoted strings.

You need to provide at least one upstream Organization, since users only need to satisfy at least one Organization. Approvals will be required for each listed Organization. The [detailed workflow](https://www.palantir.com/docs/foundry/building-pipelines/remove-inherited-markings/#detailed-workflow) below provides an example illustrating this point.

### Python

In Python, Marking removal is specified in the input constructor.

Copied!

```
1@transform(
2  input_1=Input("<input_id>",
3      stop_propagating=Markings([markingId1, ...], [branch1, ...]),
4      stop_requiring=OrgMarkings([orgMarking1, ...], [branch2, ...])),
5  output=Output("<output_id>")
6  )
```

The `Markings` class takes a list of Marking IDs and a list of protected branches on which to apply the marking removal. Marking IDs can be found in the `Markings` list on the `Settings` page.

![Image 3: marking_id](https://www.palantir.com/docs/resources/foundry/building-pipelines/marking_id.png)

The `OrgMarking` class takes a list of Organization IDs and a list of protected branches on which to apply the Marking removal. Organization IDs can be found in the `Organizations` list on the `Settings` page.

![Image 4: org_id](https://www.palantir.com/docs/resources/foundry/building-pipelines/org_id.png)

### Java

#### Java automatic registration

In Java, Marking removal is specified via annotations on the inputs for automatically registered transforms.

Syntax:

Copied!

```
1@Compute
2public void myComputation(
3  @StopPropagating(markings = {markingId1, ...}, onBranches = {branch1, ...})
4  @StopRequiring(orgMarkings = {orgId1, ...}, onBranches = {branch2, ...})
5  @Input("<input_id>")
6  FoundryInput input,
7  @Output("<output_id>")
8  FoundryOutput output)
```

The `@StopPropagating` and `@StopRequiring` annotations take a set of Marking IDs and a set of protected branches on which to apply the Marking removal. When only one Marking or branch is specified you do not need to wrap it in `{}` (e.g. `@StopPropagating(markings = marking1, onBranches = "my-branch")`).

#### Java manual registration

For manually registered Java transforms, we use the following syntax to specify unmarkings during registration in the `MyPipelineDefiner.java` file.

Copied!

```
1  @Override
2    public void define(Pipeline pipeline) {
3        HighLevelTransform highLevelManualTransform = HighLevelTransform.builder()
4                .computeFunctionInstance(new HighLevelManualFunction())
5                .putParameterToInputAlias("myInput", "/path/to/input/dataset")
6                .returnedAlias("/path/to/output/dataset")
7                        .desiredUnmarkings(Set.of(
8                                    Unmarking.builder()
9                                        .branch("branch1")
10                                        .input(alias("/input1"))
11                                        .output(alias("/output"))
12                                        .markingId(MarkingId.valueOf("markingId"))
13                                        .build(),
14                                    Unmarking.builder()
15                                        .branch("branch1")
16                                        .input(alias("/input1"))
17                                        .output(alias("/output"))
18                                        .markingId(MarkingId.valueOf("orgId1"))
19                                        .build()
20                                    ))
21                .build();
22        pipeline.register(highLevelManualTransform);
23    }
```

### SQL

In SQL, Marking removal is specified by using SparkSQL hint statements:

Copied!

```
1CREATE TABLE <output_id> AS
2  SELECT /*+ foundry_stop_propagating(markingId1, ...) foundry_stop_requiring(orgMarkingId1, ...) foundry_on_branches(branch1, ...) */ *
3  FROM <input_id>
```

Marking and Organization removal in SQL can be added to any `SELECT` statement. For example:

Copied!

```
1CREATE TABLE <output_id> AS SELECT * FROM <input_1_id>
2  CROSS JOIN (SELECT /*+ foundry_stop_propagating(markingId1) foundry_on_branches("my-branch") */ * FROM <input_2_id>)
```

## Removal permissions

To be able to view code and approve pull requests in general, the approver must pass any Organizations and Markings on the Project and the repository itself, as well as having a [Role](https://www.palantir.com/docs/foundry/security/projects-and-roles/#roles) that includes the basic Stemma `View Repository` workflow (by default, included in the Viewer role). Users must also have permissions on each Organization and Marking to set approval modes or approve pull requests removing those Organizations and Markings. Users do not necessarily need to be members of the Organization or Marking.

For a Marking approval, the user approving needs to have the `Remove marking` role on the Marking.

![Image 5: remove_role](https://www.palantir.com/docs/resources/foundry/building-pipelines/remove_role.png)

For an Organization approval, the user approving needs to have the `Expand access` role on the Marking.

![Image 6: expand_access](https://www.palantir.com/docs/resources/foundry/building-pipelines/expand_access.png)

## Approval modes

For each repository and each Organization and Marking, a data governance user can define which mode should be used to trigger a new approval:

*   **Require re-approval:** This is the default mode for every Organization and Marking. The repo will always require security approvals for any pull request made to a branch where this Organization and Marking has been removed. This mode guards against changes to the logic, thereby ensuring that Organizations and Markings are safely removed.
*   **Don’t require re-approval:** When this Organization and/or Marking is removed on a transform for the first time for a given input, approval is required. Subsequent changes to the logic will not be blocked on security approvals.

### Example 1

![Image 7: example_1](https://www.palantir.com/docs/resources/foundry/building-pipelines/example_1.png)

![Image 8: example_1_code](https://www.palantir.com/docs/resources/foundry/building-pipelines/example_1_code.png)

_Above is a transform in a repository with one Marking `PHI` that requires re-approval._

Given the above setup, the following will happen:

*   When the user creates their first PR to stop propagating the PHI Marking, they will be required to get approval from a user with the `Remove` role on the PHI Marking.
*   If the user later modifies the transform above in their next PR, they will again be asked to get approval.
*   If the user modifies anything in the repository – in this file or any other file – they will again be asked to get approval for PHI Marking.

### Example 2

![Image 9: example_2](https://www.palantir.com/docs/resources/foundry/building-pipelines/example_2.png)

![Image 10: example_2_code](https://www.palantir.com/docs/resources/foundry/building-pipelines/example_2_code.png)

_Above is a transform in a repository with one organization, `PALANTIR`, that does **NOT** require re-approval._

Given the above setup, the following will happen:

*   When the user creates their first pull request to stop requiring the `PALANTIR` Organization, they will be required to get approval from someone with the `Expand access` role on the `PALANTIR` Organization.
*   If the user later modifies the transform above in their next pull request, they will **NOT** be asked to get approval.
*   If the user subsequently modifies anything in this repository, they will **NOT** be asked to get approval.

### Example 3

![Image 11: example_3](https://www.palantir.com/docs/resources/foundry/building-pipelines/example_3.png)

![Image 12: example_3_part1_code](https://www.palantir.com/docs/resources/foundry/building-pipelines/example_3_part1_code.png)

_Transform 1: Above is a transform with one Marking, `PII`, and one Organization, `PALANTIR`. The `PII` Marking requires re-approval and the `PALANTIR` Organization does not require re-approval._

![Image 13: example_3_part2_code](https://www.palantir.com/docs/resources/foundry/building-pipelines/example_3_part2_code.png)

_Transform 2: Above is a transform with one Marking, `USA`, that does **NOT** require re-approval._

Given the above setup, here's what will happen:

*   When the user creates their first pull request in Transform 1, they will be required to get approval from a user with `Remove marking` role on the `PII` Marking **AND** a user with `Expand access` role on the `PALANTIR` Organization.
*   If the user later modifies Transform 1 in their next pull request, they will be asked to get approval from **ONLY** a user with `Remove marking` role. on the `PII` Marking.
*   When the user creates their first pull request for Transform 2, they will be required to get approval from a user with `Remove marking` role on the `USA` Marking **AND** a user with `Remove marking` role on the `PII` Marking.
*   If the user later modifies Transform 2 in their next pull request, they will be asked to get approval from **ONLY** a user with `Remove marking` role on the `PII` Marking.
*   If the user subsequently modifies anything in this repository, they will be asked to get approval from **ONLY** a user with `Remove marking` role on the `PII` Marking.

## Detailed workflow

In this example scenario, a code editor wants to use two datasets from a sensitive upstream project, remove certain information, and allow a wider audience to access the resulting dataset. The two datasets, which have two Markings each, have been added as references in the downstream Project. The code editor wants three of the four Markings to stop propagating, such that they do not appear on the output dataset. In addition, the upstream Project is restricted to users from OrgA or OrgB, and the intent is to distribute the downstream data to users from OrgC.

![Image 14: before_unmarking](https://www.palantir.com/docs/resources/foundry/building-pipelines/before_unmarking.png)

_Before: The **output** dataset on the code editors branch has inherited all four Markings and is still restricted to users from OrgA or OrgB._

![Image 15: after_unmarking](https://www.palantir.com/docs/resources/foundry/building-pipelines/after_unmarking.png)

_After: The **output** dataset, once merged into a protected branch (for example, **main**), now has only one inherited Marking and does not require users to be members of `OrgA` or `OrgB`._

### Steps

1.   The code editor writes a new transform on the `feature/clean-data` branch of the repository of the downstream Project.

![Image 16: detailed_workflow](https://www.palantir.com/docs/resources/foundry/building-pipelines/detailed_workflow.png)

1.   Since all the marking changes are being requested for the `master` branch, no approvals are needed to work on `feature/clean-data`. In other words, when the output dataset is built on the `feature/clean-data` branch, all the upstream Markings will still be inherited.

2.   The code editor creates a pull request to the main branch and requests approvals from the data governance users, who manage data restricted by the `lemon`, `apple`, and `cherry` Markings. The code editor also requests an approval from an `Expand access` Organization administrator from OrgA, who can approve when OrgA data needs to be shared with other Organizations.

Expanding access by removing an inherited Organization has the effect of removing all inherited Organizations, but approval is only required from users with the appropriate permissions on the Organizations listed in the transform. If you want to require approval from all of the Organizations, then you need to list all of the IDs in the `stop_requiring` component. In this example, OrgA is primarily responsible for the data in the upstream Project, so the editor chose OrgA for the cross-Organization approval process. As such, the editor only needs approval from an OrgA admin to remove inherited Organizations. Depending on which Organization approvals the editor wants to request, the editor can choose to `stop_requiring` either: (1) OrgA (with approval by an OrgA admin), (2) OrgB (with approval by an OrgB admin), or (3) both OrgA and OrgB (with approval from admins from both Organizations).

The end result is that the output dataset will not inherit any Organizations from the inputs and will only respect the Organizations from the Project in which it is located.

1.   The data governance users and Organization administrators receive Foundry notifications that their approval has been requested.

2.   Assuming the PR is approved, the code editor merges it and builds the output dataset as shown in the _After_ image above.

3.   The following week, another code editor makes a change to a different code file and opens a PR to merge to `master`.

If all the Markings do not require re-approval, the PR can be approved without going through a security review. If any of the Markings do require approval, this new PR will require a security review by the data governance or organization administrator who manages that Marking.
