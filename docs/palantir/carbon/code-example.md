Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/carbon/code-example/

Markdown Content:
## YAML configuration example

Carbon workspaces can be edited directly in YAML as well as with the graphical user interface. This page contains the YAML code for an example Carbon workspace. Details about this configuration can be found in the [YAML configuration reference](https://www.palantir.com/docs/foundry/carbon/code-reference/).

![Image 1: Example Carbon workspace](https://www.palantir.com/docs/resources/foundry/carbon/carbon-workspace.png)

Copied!

```
1displayMetadata:
2  title: Claim Portal
3  description: Claim Department App
4discoverableModules:
5  - ri.workshop.main.module.25b772f5-a095-48c6-a889-a960eeb93ce1
6  - ri.workshop.main.module.6e10d8bb-90a4-47d2-86e3-3f10bfca0a1e
7configuration:
8  moduleShortcuts:
9    primary:
10      - title: Explore data
11        description: ''
12        icon:
13          type: blueprintIcon
14          blueprintIcon:
15            iconName: search
16            color:
17              type: custom
18              custom: '#2965CC'
19        moduleRid: ri.carbon..core-module.search
20        parameterValues: {}
21      - title: Alert Triaging
22        description: Inbox for quantity alerts with all the data needed to make a decision
23        icon:
24          type: blueprintIcon
25          blueprintIcon:
26            iconName: inbox
27            color:
28              type: custom
29              custom: '#FFC940'
30        moduleRid: ri.workshop.main.module.a1838b32-448d-43f6-beff-3c9e40a34929
31        parameterValues:
32          autoRefreshOnDataChanges:
33            type: string
34            string:
35              string: 'true'
36      - title: Alert Investigator
37        description: Shows all alerts connected to an order
38        icon:
39          type: blueprintIcon
40          blueprintIcon:
41            iconName: badge
42            color:
43              type: custom
44              custom: '#B6D94C'
45        moduleRid: ri.workshop.main.module.25b772f5-a095-48c6-a889-a960eeb93ce1
46        parameterValues:
47          variable.priority:
48            type: string
49            string:
50              string: P2
51          autoRefreshOnDataChanges:
52            type: string
53            string:
54              string: 'true'
55      - title: Order View
56        description: null
57        icon:
58          type: blueprintIcon
59          blueprintIcon:
60            iconName: layers
61            color:
62              type: custom
63              custom: '#FF66A1'
64        moduleRid: ri.workshop.main.module.6e10d8bb-90a4-47d2-86e3-3f10bfca0a1e
65        parameterValues: {}
66    secondary:
67      - title: All Orders
68        description: ''
69        icon:
70          type: blueprintIcon
71          blueprintIcon:
72            iconName: clipboard
73            color:
74              type: custom
75              custom: '#202b33'
76        moduleRid: ri.carbon..core-module.exploration
77        parameterValues:
78          objectSetRid:
79            type: string
80            string:
81              string: >-
82                ri.object-set.main.versioned-object-set.d1e3f2e1-849e-4aaa-ae01-5c63e8771be7
83  homePage:
84    logo:
85      source:
86        type: compassResource
87        compassResource:
88          resourceRid: ri.blobster.main.image.77b48452-73e0-431a-909e-efa286a2d5e2
89      maxWidth: 400
90      maxHeight: 80
91    welcomeText: null
92    shouldHideSearchBar: false
93    defaultObjectTypesFilter:
94      specific:
95        selectedObjectTypes:
96          - ri.ontology.main.object-type.af927662-698b-42ab-8e91-5d67304b0e8f
97      type: specific
98    columns:
99      - sections:
100          - title: null
101            description: null
102            displayAs: CARD
103            contents:
104              type: custom
105              custom:
106                items:
107                  - type: module
108                    module:
109                      displayMetadata:
110                        thumbnail:
111                          source:
112                            type: compassResource
113                            compassResource:
114                              resourceRid: >-
115                                ri.blobster.main.image.b551eeb1-ad11-4f19-b166-241a6463f096
116                      moduleRid: >-
117                        ri.workshop.main.module.a1838b32-448d-43f6-beff-3c9e40a34929
118                      parameterValues: {}
119                  - type: module
120                    module:
121                      displayMetadata:
122                        thumbnail:
123                          source:
124                            type: compassResource
125                            compassResource:
126                              resourceRid: >-
127                                ri.blobster.main.image.545f9fb8-14dc-4b3b-a823-e57492e502d5
128                      moduleRid: >-
129                        ri.workshop.main.module.25b772f5-a095-48c6-a889-a960eeb93ce1
130                      parameterValues: {}
131          - contents:
132              custom:
133                items: []
134              type: custom
135      - sections:
136          - title: null
137            description: null
138            displayAs: CARD
139            contents:
140              type: custom
141              custom:
142                items:
143                  - type: module
144                    module:
145                      displayMetadata:
146                        title: Order View
147                        description: '360 order view '
148                        icon:
149                          type: blueprintIcon
150                          blueprintIcon:
151                            iconName: layers
152                            color:
153                              type: custom
154                              custom: '#FF66A1'
155                        thumbnail:
156                          source:
157                            type: compassResource
158                            compassResource:
159                              resourceRid: >-
160                                ri.blobster.main.image.46edffad-903f-4434-84f0-f0892d861ae4
161                          position: TOP
162                      moduleRid: >-
163                        ri.workshop.main.module.6e10d8bb-90a4-47d2-86e3-3f10bfca0a1e
164                      parameterValues: {}
165      - sections:
166          - title: null
167            description: null
168            displayAs: null
169            contents:
170              type: custom
171              custom:
172                items:
173                  - type: module
174                    module:
175                      displayMetadata:
176                        title: Explore all data
177                        description: Search objects and links
178                        icon:
179                          type: blueprintIcon
180                          blueprintIcon:
181                            iconName: search
182                            color:
183                              type: custom
184                              custom: '#2965CC'
185                        thumbnail: null
186                      moduleRid: ri.carbon..core-module.search
187                      parameterValues: {}
188                  - type: module
189                    module:
190                      displayMetadata:
191                        title: Dispatch Alert
192                        description: ''
193                        icon:
194                          type: blueprintIcon
195                          blueprintIcon:
196                            iconName: warning-sign
197                            color:
198                              type: custom
199                              custom: '#ff7373'
200                        thumbnail: null
201                      moduleRid: ri.carbon..core-module.exploration
202                      parameterValues:
203                        objectSetRid:
204                          type: string
205                          string:
206                            string: >-
207                              ri.object-set.main.object-set.3f583a3e-5847-447e-8184-a56fef9a1ccc
208                  - type: objectType
209                    objectType:
210                      objectTypeRid: >-
211                        ri.ontology.main.object-type.14014a36-91d6-45b7-a288-bda5f2881568
212                  - type: objectType
213                    objectType:
214                      objectTypeRid: >-
215                        ri.ontology.main.object-type.fec52161-983f-40cc-8233-f73112c3850c
216                  - type: objectType
217                    objectType:
218                      objectTypeRid: >-
219                        ri.ontology.main.object-type.e5a5adea-cfa4-4a80-808b-3dbbe7e0bc4b
220          - title: Top Accounts
221            description: null
222            displayAs: null
223            contents:
224              type: objects
225              objects:
226                objects:
227                  - objectRid: >-
228                      ri.phonograph2-objects.main.object.fea24c1e-582d-40ab-85a4-423a523cfb7f
229                  - objectRid: >-
230                      ri.phonograph2-objects.main.object.9c145afd-baa3-4734-a76d-f5f15f77899d
```
