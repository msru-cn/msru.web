Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/carbon/code-reference/

Published Time: Thu, 09 Jul 2026 17:47:52 GMT

Markdown Content:
## YAML configuration reference

Carbon workspaces can be edited directly in YAML as well as with the graphical user interface. This page contains YAML examples of how to configure different parts of the Carbon workspace, using the Claims Portal as an example. The full YAML for the Claims Portal example can be found in the [YAML code example](https://www.palantir.com/docs/foundry/carbon/code-example/).

## Metadata & general configuration

### Name and description of workspace

Copied!

```
1displayMetadata:
2  title: Claim Portal
3  description: Everything related to claim management
```

### Setting custom icons

#### Blueprint icon

Copied!

```
1        icon: 
2          type: blueprintIcon
3          blueprintIcon: 
4            iconName: music
5            color: 
6              type: custom
7              custom: '#FF66A1'
```

#### Palantir application icon

Copied!

```
1        icon: 
2          type: applicationIcon
3          applicationIcon: 
4            iconName: contour-app
5            color: 
6              type: custom
7              custom: '#FF66A1'
```

### Setting discoverable modules

Copied!

```
1discoverableModules:
2  - ri.workshop.main.module.25b772f5-a095-48c6-a889-a960eeb93ce1
3  - ri.workshop.main.module.6e10d8bb-90a4-47d2-86e3-3f10bfca0a1e
```

* * *

## Carbon Menu Bar

### Anchor modules

#### Anchor modules: Workshop example

Copied!

```
1configuration:
2  moduleShortcuts:
3    primary:
4      - title: Alert Inbox
5        moduleRid: ri.workshop.main.module.a1838b32-448d-43f6-beff-3c9e40a34929
6        parameterValues: {}
```

#### Anchor modules: Object View example

Copied!

```
1configuration:
2  moduleShortcuts:
3    primary:
4      - title: Order BF645S
5        description: null
6        icon: 
7          type: blueprintIcon
8          blueprintIcon: 
9            iconName: eye-open
10            color: 
11              type: custom
12              custom: '#FFC940'
13        moduleRid: ri.carbon..core-module.object-view
14        parameterValues: 
15          objectRid:
16            type: object
17            object:
18              objectRid: ri.phonograph2-objects.main.object.ab863bd7-c82c-482f-9218-9ba1df79bd3c
```

#### Anchor modules: Object Explorer example

Copied!

```
1configuration:
2  moduleShortcuts:
3    primary:      
4      - title: Cancelled Orders
5        description: null
6        icon:
7          type: blueprintIcon
8          blueprintIcon:
9            iconName: clipboard
10            color:
11              type: custom
12              custom: '#2EE6D6'
13        moduleRid: ri.carbon..core-module.exploration
14        parameterValues:
15          objectSetRid:
16            type: string
17            string:
18              string: ri.object-set.main.versioned-object-set.36824ec3-3746-4d74-9e96-5094b8c8630e
```

#### Anchor modules: Search example

Copied!

```
1configuration:
2  moduleShortcuts:
3    primary:
4      - title: Search
5        moduleRid: ri.carbon..core-module.search
6        parameterValues: {}
```

### Multi-tab modules

#### Multi-tab modules: Workshop example

Copied!

```
1configuration:
2  moduleShortcuts:
3    secondary:
4      - title: Alert Inbox
5        moduleRid: ri.workshop.main.module.a1838b32-448d-43f6-beff-3c9e40a34929
6        parameterValues: {}
```

#### Multi-tab modules: Object View example

Copied!

```
1configuration:
2  moduleShortcuts:
3    secondary:
4      - title: Order BF645S
5        description: null
6        icon: 
7          type: blueprintIcon
8          blueprintIcon: 
9            iconName: eye-open
10            color: 
11              type: custom
12              custom: '#FFC940'
13        moduleRid: ri.carbon..core-module.object-view
14        parameterValues: 
15          objectRid:
16            type: object
17            object:
18              objectRid: ri.phonograph2-objects.main.object.ab863bd7-c82c-482f-9218-9ba1df79bd3c
```

#### Multi-tab modules: Object Explorer example

Copied!

```
1configuration:
2  moduleShortcuts:
3    secondary:      
4      - title: Cancelled Orders
5        description: null
6        icon:
7          type: blueprintIcon
8          blueprintIcon:
9            iconName: clipboard
10            color:
11              type: custom
12              custom: '#2EE6D6'
13        moduleRid: ri.carbon..core-module.exploration
14        parameterValues:
15          objectSetRid:
16            type: string
17            string:
18              string: ri.object-set.main.versioned-object-set.36824ec3-3746-4d74-9e96-5094b8c8630e
```

#### Multi-tab modules: Search example

Copied!

```
1configuration:
2  moduleShortcuts:
3    secondary:
4      - title: Search
5        moduleRid: ri.carbon..core-module.search
6        parameterValues: {}
```

* * *

## Homepage

### Custom logo - optional

Copied!

```
1configuration:
2  homePage:
3      logo:
4      source:
5        type: compassResource
6        compassResource:
7          resourceRid: ri.blobster.main.image.50505d65-4001-4f55-8fda-669f52347745
8      maxWidth: 60
9      maxHeight: 60
```

### Setting section title and description

#### Add title and description - optional

Copied!

```
1configuration:
2  homePage:    
3    columns:
4      - sections:
5          - title: Triaging apps
6            description: All the apps you need to triage claims
7            displayAs: null
8            contents:
```

### Change display type of section items

#### Display section items as list - optional

Note that list is the default option.

Copied!

```
1configuration:
2  homePage:    
3    columns:
4      - sections:
5          - displayAs: LIST
6            contents:
```

#### Display section items as cards - optional

Copied!

```
1configuration:
2  homePage:    
3    columns:
4      - sections:
5          - displayAs: CARD
6            contents:
```

### Default section showing all modules

Copied!

```
1configuration:
2  homePage:      
3    columns:
4      - sections:
5          - contents: 
6              type: modules
7              modules: {}
```

### Default section showing all saved explorations

Copied!

```
1configuration:
2  homePage:      
3    columns:
4      - sections:
5          - contents: 
6              type: savedExplorations
7              savedExplorations: {}
```

### Default section showing all Prominent object types

Copied!

```
1configuration:
2  homePage:      
3    columns:
4      - sections:
5          - contents: 
6              type: objectTypes
7              objectTypes: {}
```

### Default section showing specific object types

Copied!

```
1configuration:
2  homePage:      
3    columns:
4      - sections:
5          - contents: 
6              type: objectTypes
7              objectTypes:
8                objectTypes:
9                  - objectTypeRid: ri.ontology.main.object-type.14014a36-91d6-45b7-a288-bda5f2881568
10                  - objectTypeRid: ri.ontology.main.object-type.e5a5adea-cfa4-4a80-808b-3dbbe7e0bc4b
```

### Default section showing specific Objects

Copied!

```
1configuration:
2  homePage:      
3    columns:
4      - sections:
5          - contents: 
6              type: objects
7              objects:
8                objects:
9                  - objectRid: ri.phonograph2-objects.main.object.17474c05-bfa3-4477-adc8-9c98e65b0269
10                  - objectRid: ri.phonograph2-objects.main.object.048f39e4-10af-48be-9736-d24191242732
```

### Custom section with module item - Workshop module

Copied!

```
1configuration:
2  homePage:      
3    columns:      
4      - sections:
5          - title: null
6            description: null
7            contents:
8              type: custom
9              custom:
10                items:
11                  - type: module
12                    module:
13                      displayMetadata: {}
14                      moduleRid: ri.workshop.main.module.525ab70b-d24b-42f4-ad25-a407f0273b83
15                      parameterValues: {}
```

### Custom section with module item - Workshop module with module interface variables

Copied!

```
1configuration:
2  homePage:      
3    columns:      
4      - sections:
5          - title: null
6            description: null
7            contents:
8              type: custom
9              custom:
10                items:
11                  - type: module
12                    module:
13                      displayMetadata: {}
14                      moduleRid: ri.workshop.main.module.525ab70b-d24b-42f4-ad25-a407f0273b83
15                      parameterValues:
16                        variable.status:
17                            type: string
18                            string:
19                                string: Open
```

To pass in a module interface variable to a workshop module, add it to the `parameterValues` map with a `variable.` prefix. In the example above, a module interface string variable with external ID `status`, is passed to the workshop module with value `Open`.

### Custom section with module item - Object View module - Object View

Copied!

```
1configuration:
2  homePage:      
3    columns:      
4      - sections:
5          - title: null
6            description: null
7            contents:
8              type: custom
9              custom:
10                items:
11                  - type: module
12                    module:
13                      displayMetadata: {}        
14                      moduleRid: ri.carbon..core-module.object-view
15                      parameterValues:
16                        objectRid:
17                            type: object
18                            object:
19                                objectRid: ri.phonograph2-objects.main.object.ab863bd7-c82c-482f-9218-9ba1df79bd3c
```

### Custom section with module item - Object Explorer module - Object Set

Copied!

```
1configuration:
2  homePage:      
3    columns:      
4      - sections:
5          - title: null
6            description: null
7            contents:
8              type: custom
9              custom:
10                items:
11                  - type: module
12                    module:
13                      displayMetadata: {}        
14                      moduleRid: ri.carbon..core-module.exploration
15                      parameterValues:
16                        objectSetRid:
17                            type: string
18                            string:
19                                string: ri.object-set.main.versioned-object-set.36824ec3-3746-4d74-9e96-5094b8c8630e
```

### Custom section with object type item

Copied!

```
1configuration:
2  homePage:      
3    columns:      
4      - sections:
5          - title: null
6            description: null
7            contents:
8              type: custom
9              custom:
10                items:
11                  - type: objectType
12                    objectType:
13                      objectTypeRid: ri.ontology.main.object-type.14014a36-91d6-45b7-a288-bda5f2881568
```

### Custom section with Object item

Copied!

```
1configuration:
2  homePage:      
3    columns:      
4      - sections:
5          - title: null
6            description: null
7            contents:
8              type: custom
9              custom:
10                items:
11                  - type: object
12                    object:
13                      objectRid: ri.phonograph2-objects.main.object.17474c05-bfa3-4477-adc8-9c98e65b0269
```

### Custom section with resource item

Copied!

```
1configuration:
2  homePage:      
3    columns:      
4      - sections:
5          - title: null
6            description: null
7            contents:
8              type: custom
9              custom:
10                items:
11                  - type: compassResource
12                    compassResource:
13                      displayMetadata:
14                        title: Fusion Sheet
15                        description: For spreadsheet use cases
16                      targetResource:
17                        resourceRid: ri.fusion.main.document.01eaf763-c721-4557-b368-42be112e40a3
```

### Custom section with Palantir application item

Copied!

```
1configuration:
2  homePage:      
3    columns:      
4      - sections:
5          - title: null
6            description: null
7            contents:
8              type: custom
9              custom:
10                items:
11                  - type: foundryApplication
12                    foundryApplication:
13                      displayMetadata: {}
14                      workspaceApplicationName: contour-app
15                      relativeUrl: null
```
