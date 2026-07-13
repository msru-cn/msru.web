Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/available-connectors/smb/

Markdown Content:

# [](https://www.palantir.com/docs/foundry/available-connectors/smb/#server-message-block-smb)Server Message Block (SMB)

Connect to Server Message Block (SMB) shares to sync data between folders and Foundry datasets. Common examples of SMB servers include Windows File Server and Samba File Server.

## [](https://www.palantir.com/docs/foundry/available-connectors/smb/#supported-capabilities)Supported capabilities

| Capability | Status |
| --- | --- |
| Exploration | 🟢 Generally available |
| Bulk import | 🟢 Generally available |
| Incremental | 🟢 Generally available |
| [File exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#file-exports) | 🟢 Generally available |

The SMB connector supports SMB protocol versions 2 and 3.

## [](https://www.palantir.com/docs/foundry/available-connectors/smb/#data-model)Data model

The connector can transfer files of any type into Foundry datasets. File formats are preserved, and no schemas are applied during or after the transfer. Apply any necessary schema to the output dataset, or [write a downstream transformation](https://www.palantir.com/docs/foundry/pipeline-builder/transforms-overview/) to access the data.

## [](https://www.palantir.com/docs/foundry/available-connectors/smb/#performance-and-limitations)Performance and limitations

There is no limit to the size of transferable files. However, network issues can result in failures of large-scale transfers. In particular, direct cloud syncs that take more than two days to run will be interrupted. To avoid network issues, we recommend using smaller file sizes and limiting the number of files that are ingested in every execution of the sync. Syncs can be [scheduled](https://www.palantir.com/docs/foundry/data-connection/set-up-sync/#build-or-schedule-your-batch-sync) to run frequently.

## [](https://www.palantir.com/docs/foundry/available-connectors/smb/#setup)Setup

1.   Open the [Data Connection](https://www.palantir.com/docs/foundry/data-connection/overview/) application and select **+ New Source** in the upper right corner of the screen.
2.   Select **SMB** from the **Protocol sources** section.
3.   Follow the additional configuration prompts to continue the setup of your connector using the information in the sections below.

Learn more about [setting up a connector](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) in Foundry.

### [](https://www.palantir.com/docs/foundry/available-connectors/smb/#configuration-options)Configuration options

The following configuration options are available for the SMB connector:

| Option | Required? | Description |
| --- | --- | --- |
| `Hostname` | Yes | The domain name pointing to the server or the IP address of the server. |
| `Port` | No | The port on which the SMB server is running. |
| `Share` | Yes | The name of the SMB share you are connecting to. |
| `Username` | Yes | The SMB login username. |
| `Password` | Yes | The SMB login password. |
| `Domain` | No | The Active Directory domain of the SMB login account. Leave blank if the login account is not an AD user. |

### [](https://www.palantir.com/docs/foundry/available-connectors/smb/#networking)Networking

The SMB connector must be able to reach `Hostname` on `Port` (445 by default). If you are using a direct connection egress policy, you must use TCP-level allowlisting.

## [](https://www.palantir.com/docs/foundry/available-connectors/smb/#sync-data-from-smb)Sync data from SMB

The SMB connector uses the [file-based sync interface](https://www.palantir.com/docs/foundry/data-connection/file-based-syncs/).

## [](https://www.palantir.com/docs/foundry/available-connectors/smb/#export-data-to-smb)Export data to SMB

To export to an SMB share, first [enable exports](https://www.palantir.com/docs/foundry/data-connection/export-overview/#enable-exports-for-source) for your SMB connector. Then, [create a new export](https://www.palantir.com/docs/foundry/data-connection/export-overview/#create-a-new-export).

### [](https://www.palantir.com/docs/foundry/available-connectors/smb/#export-configuration-options)Export configuration options

| Option | Required? | Default | Description |
| --- | --- | --- | --- |
| `Directory path` | Yes | / | The path to the folder in the SMB share where files should be exported. The full path for an exported file is calculated as `<Share>/<Directory Path>/<Exported File Path>` |

## [](https://www.palantir.com/docs/foundry/available-connectors/smb/#use-smb-sources-in-code)Use SMB sources in code

You can connect to SMB shares from a [Python transforms code repository](https://www.palantir.com/docs/foundry/transforms-python/getting-started/) using [external transforms](https://www.palantir.com/docs/foundry/data-connection/external-transforms/).

### [](https://www.palantir.com/docs/foundry/available-connectors/smb/#read-files-and-metadata-from-smb)Read files and metadata from SMB

The example below demonstrates the minimal code needed to connect to an SMB share and read files:

Copied!

```python
1import smbclient
2import pandas as pd
3from transforms.api import Output, transform
4from transforms.external.systems import external_systems, Source
5
6DOMAIN = "<smb_domain>"
7USERNAME = "<smb_username>"
8SMB_PATH = "<smb_path>"
9
10@external_systems(
11    smb_source=Source("ri.magritte..source.YOUR_SMB_SOURCE_RID")
12)
13@transform(
14    file_metadata=Output("ri.foundry.main.dataset.YOUR_METADATA_OUTPUT_RID"),
15    output_files_dataset=Output("ri.foundry.main.dataset.YOUR_FILES_OUTPUT_RID")
16
17)
18def read_smb_files(ctx, smb_source, file_metadata, output_files_dataset):
19    """
20    Read files from an SMB share and output files and metadata.
21    """
22    # Configure SMB client with credentials from source
23    username = f"{DOMAIN}\\{USERNAME}"
24    password = smb_source.get_secret("Password")
25    smbclient.ClientConfig(username=username, password=password)
26
27    # List files in a directory
28    files_info = []
29
30    for item in smbclient.scandir(SMB_PATH):
31        if not item.is_dir():
32            # Get file info
33            stat = item.stat()
34
35            file_path = f"{SMB_PATH}\\{item.name}"
36            files_info.append({
37                "filename": item.name,
38                "safe_filename": create_safe_filename(item.name),
39                "size_bytes": stat.st_size,
40                "path": file_path
41            })
42            with smbclient.open_file(file_path, mode="rb") as f:
43                content = f.read()
44                safe_foundry_file_name = create_safe_filename(item.name)
45                with output_files_dataset.filesystem().open(safe_foundry_file_name, 'w') as fileobj:
46                    fileobj.write(content)
47
48    # Write metadata to output
49    if files_info:
50        df = ctx.spark_session.createDataFrame(pd.DataFrame(files_info))
51        file_metadata.write_dataframe(df)
52
53
54def create_safe_filename(filepath: str) -> str:
55    """
56    Create a safe filename for storage by removing problematic characters.
57
58    Args:
59        filepath: Original file path
60
61    Returns:
62        Sanitized filename safe for storage
63    """
64    import os
65    filename = os.path.basename(filepath)
66    # Replace characters that might cause issues in storage
67    safe_chars = str.maketrans({"\\": "_", "/": "_", ":": "_", "?": "_", "*": "_", "<": "_", ">": "_", "|": "_"})
68    return filename.translate(safe_chars)
```

### [](https://www.palantir.com/docs/foundry/available-connectors/smb/#read-files-from-smb-and-upload-as-media-sets)Read files from SMB and upload as media sets

The comprehensive example below demonstrates how to connect to an SMB share from a Python transform code repository and create [media set](https://www.palantir.com/docs/foundry/media-sets-advanced-formats/media-overview/) outputs, including error handling, recursive directory scanning, and file categorization:

Copied!

```python
1"""
2SMB File Processing Transform Template
3
4This template demonstrates how to connect to an SMB share
5from a Foundry Python transform to process files and organize them by type.
6
7Key concepts covered:
8- External systems integration with SMB sources
9- Recursive directory traversal
10- File categorization by extension
11- MediaSet outputs for different file types
12- Structured metadata collection
13- Error handling and logging
14
15Prerequisites:
16- SMB source configured in Data Connection
17- Input dataset with directory paths
18- Output datasets/mediasets configured
19- smbclient library available in the repository
20"""
21
22import logging
23import os
24from datetime import datetime
25
26import pandas as pd
27import smbclient
28from transforms.api import Input, Output, transform
29from transforms.external.systems import ResolvedSource, Source, external_systems
30from transforms.mediasets import MediaSetOutput
31
32# Configure logging
33
34logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
35logger = logging.getLogger(__name__)
36
37
38@external_systems(
39    smb_source=Source("ri.magritte..source.YOUR_SMB_SOURCE_RID")  # Replace with your SMB source RID
40)
41@transform(
42    input_directories=Input("ri.foundry.main.dataset.YOUR_INPUT_DATASET_RID"),  # Dataset containing directory paths
43    documents_mediaset=MediaSetOutput("ri.mio.main.media-set.YOUR_DOCUMENTS_MEDIASET_RID"),  # For PDF, DOC, PPT files
44    images_mediaset=MediaSetOutput("ri.mio.main.media-set.YOUR_IMAGES_MEDIASET_RID"),  # For image files
45    spreadsheets_mediaset=MediaSetOutput("ri.mio.main.media-set.YOUR_SPREADSHEETS_MEDIASET_RID"),  # For Excel files
46    file_metadata=Output("ri.foundry.main.dataset.YOUR_METADATA_OUTPUT_RID"),  # Structured metadata output
47)
48def smb_file_processor(
49    ctx,
50    smb_source: ResolvedSource,
51    input_directories,
52    documents_mediaset,
53    images_mediaset,
54    spreadsheets_mediaset,
55    file_metadata,
56):
57    """
58    Process files from SMB directories and categorize them into different outputs.
59
60    This transform:
61    1. Reads directory paths from input dataset
62    2. Connects to SMB share using configured source
63    3. Recursively scans directories for files
64    4. Categorizes files by extension
65    5. Downloads and stores files in appropriate MediaSets
66    6. Creates structured metadata for all processed files
67
68    Args:
69        ctx: Transform context
70        smb_source: Configured SMB source from Data Connection
71        input_directories: Dataset with 'path' column containing directory paths to process
72        documents_mediaset: MediaSet for document files (PDF, DOC, PPT, TXT)
73        images_mediaset: MediaSet for image files (JPG, PNG, etc.)
74        spreadsheets_mediaset: MediaSet for spreadsheet files (XLSX)
75        file_metadata: Structured dataset for file metadata and processing results
76    """
77
78    # Define file categories by extension
79    DOCUMENT_EXTENSIONS = {".pdf", ".pptx", ".docx", ".txt", ".ppt", ".doc"}
80    IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".tiff", ".tif", ".webp", ".gif"}
81    SPREADSHEET_EXTENSIONS = {".xlsx", ".xls", ".csv"}
82
83    # SMB connection configuration
84    # These values should match your SMB source configuration in Data Connection
85    smb_config = {
86        "hostname": "your-smb-server.domain.com",  # Replace with your SMB server hostname
87        "share": "your-share-name",  # Replace with your SMB share name
88        "username": "your-service-account",  # Replace with your SMB username
89        "password": smb_source.get_secret("Password"),  # Password stored securely in source
90        "domain": "your.domain.com",  # Replace with your domain (optional)
91    }
92
93    logger.info("=" * 80)
94    logger.info("SMB FILE PROCESSOR - STARTING")
95    logger.info("=" * 80)
96    logger.info(f"Server: {smb_config['hostname']}")
97    logger.info(f"Share: {smb_config['share']}")
98    logger.info(f"Username: {smb_config['domain']}\\{smb_config['username']}")
99    logger.info("=" * 80)
100
101    def transform_directory_path(input_path: str) -> str:
102        """
103        Transform input directory path to SMB UNC format.
104
105        Modify this function based on your specific path transformation needs.
106        Example: Convert from local mount path to UNC path format.
107
108        Args:
109            input_path: Original directory path from input dataset
110
111        Returns:
112            SMB UNC path format (\\\\server\\share\\path)
113        """
114        # Example transformation - customize for your environment
115        # Remove local mount prefix and convert to UNC format
116        local_prefix = "/mnt/your-mount/path/"  # Replace with your local mount prefix
117
118        if input_path.startswith(local_prefix):
119            relative_path = input_path[len(local_prefix) :]
120        else:
121            # Handle alternative path formats
122            logger.warning(f"Unexpected path format: {input_path}")
123            relative_path = input_path
124
125        # Convert to UNC format
126        unc_path = f"\\\\{smb_config['hostname']}\\{smb_config['share']}\\{relative_path}"
127        return unc_path.replace("/", "\\")  # Ensure Windows path separators
128
129    def get_file_category(filename: str) -> str:
130        """
131        Determine file category based on file extension.
132
133        Args:
134            filename: Name of the file
135
136        Returns:
137            Category string: 'document', 'image', 'spreadsheet', or 'other'
138        """
139        ext = os.path.splitext(filename)[1].lower()
140
141        if ext in DOCUMENT_EXTENSIONS:
142            return "document"
143        elif ext in IMAGE_EXTENSIONS:
144            return "image"
145        elif ext in SPREADSHEET_EXTENSIONS:
146            return "spreadsheet"
147        else:
148            return "other"
149
150    def create_safe_filename(filepath: str) -> str:
151        """
152        Create a safe filename for storage by removing problematic characters.
153
154        Args:
155            filepath: Original file path
156
157        Returns:
158            Sanitized filename safe for storage
159        """
160        filename = os.path.basename(filepath)
161        # Replace characters that might cause issues in storage
162        safe_chars = str.maketrans({"\\": "_", "/": "_", ":": "_", "?": "_", "*": "_", "<": "_", ">": "_", "|": "_"})
163        return filename.translate(safe_chars)
164
165    def get_all_files_recursive(directory_path: str) -> list:
166        """
167        Recursively scan directory and return all files with their metadata.
168
169        Args:
170            directory_path: SMB directory path to scan
171
172        Returns:
173            List of dictionaries containing file information
174        """
175        all_files = []
176
177        try:
178            # Scan directory contents
179            items = list(smbclient.scandir(directory_path))
180
181            for item in items:
182                if item.is_dir():
183                    # Recursively process subdirectories
184                    subdirectory_path = f"{directory_path}\\{item.name}"
185                    logger.info(f"Scanning subdirectory: {subdirectory_path}")
186                    all_files.extend(get_all_files_recursive(subdirectory_path))
187                else:
188                    # Add file information
189                    file_info = {"item": item, "directory_path": directory_path}
190                    all_files.append(file_info)
191
192        except Exception as e:
193            logger.error(f"Error scanning directory {directory_path}: {str(e)}")
194
195        return all_files
196
197    # Initialize tracking variables
198    metadata_records = []
199    total_files_processed = 0
200    files_by_category = {"document": 0, "image": 0, "spreadsheet": 0, "other": 0}
201
202    try:
203        # Configure SMB client authentication
204        username = f"{smb_config['domain']}\\{smb_config['username']}"
205        smbclient.ClientConfig(username=username, password=smb_config["password"])
206
207        # Read input directories from dataset
208        input_df = input_directories.dataframe()
209        directory_rows = input_df.select("path").collect()
210        directory_paths = [row.path for row in directory_rows]
211
212        logger.info(f"Processing {len(directory_paths)} directories")
213
214        # Process each directory
215        for idx, directory_path in enumerate(directory_paths, 1):
216            logger.info(f"[{idx}/{len(directory_paths)}] Processing: {directory_path}")
217
218            try:
219                # Transform to SMB path format
220                smb_directory_path = transform_directory_path(directory_path)
221                logger.info(f"SMB path: {smb_directory_path}")
222
223                # Get all files recursively
224                all_files_info = get_all_files_recursive(smb_directory_path)
225                logger.info(f"Found {len(all_files_info)} files in directory tree")
226
227                # Process each file
228                for file_info in all_files_info:
229                    file_item = file_info["item"]
230                    file_directory_path = file_info["directory_path"]
231                    filename = file_item.name
232                    file_path = f"{file_directory_path}\\{filename}"
233
234                    try:
235                        # Get file statistics
236                        stat_info = file_item.stat()
237                        file_size = stat_info.st_size
238                        created_time = datetime.fromtimestamp(stat_info.st_ctime)
239                        modified_time = datetime.fromtimestamp(stat_info.st_mtime)
240
241                        # Categorize file
242                        category = get_file_category(filename)
243                        files_by_category[category] += 1
244                        total_files_processed += 1
245
246                        # Create metadata record
247                        metadata_record = {
248                            "filename": filename,
249                            "full_path": file_path,
250                            "directory_path": file_directory_path,
251                            "file_size_bytes": file_size,
252                            "created_date": created_time,
253                            "modified_date": modified_time,
254                            "file_extension": os.path.splitext(filename)[1].lower(),
255                            "category": category,
256                            "processed_timestamp": pd.Timestamp.now(),
257                        }
258
259                        # Download and store files based on category
260                        if category in ["document", "image", "spreadsheet"]:
261                            try:
262                                # Download file content
263                                with smbclient.open_file(file_path, mode="rb") as smb_file:
264                                    file_content = smb_file.read()
265
266                                # Create safe filename for storage
267                                safe_filename = create_safe_filename(file_path)
268
269                                # Store in appropriate MediaSet
270                                import io
271
272                                file_stream = io.BytesIO(file_content)
273
274                                if category == "document":
275                                    documents_mediaset.put_media_item(file_stream, safe_filename)
276                                elif category == "image":
277                                    images_mediaset.put_media_item(file_stream, safe_filename)
278                                elif category == "spreadsheet":
279                                    spreadsheets_mediaset.put_media_item(file_stream, safe_filename)
280
281                                logger.info(f"✓ Downloaded {category}: {filename} ({file_size:,} bytes)")
282
283                            except Exception as download_error:
284                                logger.error(f"✗ Failed to download {filename}: {str(download_error)}")
285                                metadata_record["download_error"] = str(download_error)
286                        else:
287                            logger.info(f"⚠ Skipped {filename} (category: {category})")
288
289                        metadata_records.append(metadata_record)
290
291                    except Exception as file_error:
292                        logger.error(f"✗ Error processing file {filename}: {str(file_error)}")
293                        # Add error record
294                        error_record = {
295                            "filename": filename,
296                            "full_path": file_path,
297                            "directory_path": file_directory_path,
298                            "file_size_bytes": 0,
299                            "created_date": None,
300                            "modified_date": None,
301                            "file_extension": os.path.splitext(filename)[1].lower(),
302                            "category": "error",
303                            "processed_timestamp": pd.Timestamp.now(),
304                            "processing_error": str(file_error),
305                        }
306                        metadata_records.append(error_record)
307
308            except Exception as dir_error:
309                logger.error(f"✗ Failed to process directory {directory_path}: {str(dir_error)}")
310                # Add directory error record
311                error_record = {
312                    "filename": None,
313                    "full_path": None,
314                    "directory_path": directory_path,
315                    "file_size_bytes": 0,
316                    "created_date": None,
317                    "modified_date": None,
318                    "file_extension": None,
319                    "category": "directory_error",
320                    "processed_timestamp": pd.Timestamp.now(),
321                    "processing_error": str(dir_error),
322                }
323                metadata_records.append(error_record)
324
325        # Write metadata to output dataset
326        if metadata_records:
327            metadata_df = ctx.spark_session.createDataFrame(pd.DataFrame(metadata_records))
328            file_metadata.write_dataframe(metadata_df)
329            logger.info(f"✓ Written {len(metadata_records)} metadata records")
330        else:
331            logger.warning("No metadata records to write")
332
333    except Exception as e:
334        logger.error(f"✗ CRITICAL FAILURE: {str(e)}")
335        raise
336
337    # Log final summary
338    logger.info("\n" + "=" * 80)
339    logger.info("PROCESSING SUMMARY")
340    logger.info("=" * 80)
341    logger.info(f"Total files processed: {total_files_processed:,}")
342    logger.info(f"Documents: {files_by_category['document']:,}")
343    logger.info(f"Images: {files_by_category['image']:,}")
344    logger.info(f"Spreadsheets: {files_by_category['spreadsheet']:,}")
345    logger.info(f"Other/Skipped: {files_by_category['other']:,}")
346    logger.info(f"Metadata records created: {len(metadata_records):,}")
347    logger.info("=" * 80)
```

[← PREVIOUS Smartsheet](https://www.palantir.com/docs/foundry/available-connectors/smartsheet/)

[NEXT Snapchat Ads →](https://www.palantir.com/docs/foundry/available-connectors/snapchat-ads/)

© 2026 Palantir Technologies Inc. All rights reserved.

[Cookies Statement ↗](https://www.palantir.com/cookie-statement/)[Privacy Statement ↗](https://www.palantir.com/privacy-and-security/)[Terms of Use ↗](https://www.palantir.com/terms-and-conditions/)

Cookie Settings

