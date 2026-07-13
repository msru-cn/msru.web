Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/custom-widgets/iframe-attributes/

Markdown Content:
## Enable additional iframe attributes

Certain browser permissions, such as camera and microphone access, always require application users to grant permission to Foundry through a browser prompt. Enabling the iframe attributes allows the application to request access, but the user must still grant permission explicitly. Refer to the [Permissions Policy documentation ↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Permissions_Policy#relationship_with_the_permissions_api) for more information.

The custom widgets runtime uses an [`<iframe>` ↗](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe) element with restrictive attributes that disallow certain browser features, such as popups and camera access, by default. However, widget developers can enable a subset of attribute values for a custom widget. The application builder must then manually grant permission to the requested attribute values for them to take effect. Often, the widget developer and application builder are the same person.

## Available iframe attributes

Widget developers can request enablement of the following iframe attributes:

[`allow` ↗](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#allow) attribute values:

*   `camera`
*   `microphone`
*   `autoplay`

[`sandbox` ↗](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#sandbox) attribute values:

*   `allow-downloads`
*   `allow-forms`
*   `allow-popups`

## Declare requested iframe attributes

Widget developers can declare requested iframe attributes in the `permissions` field of their custom widget configuration:

Copied!

```
1export default defineConfig({
2    id: "widgetId",
3    name: "A custom widget",
4    description: "A widget description",
5    type: "workshop",
6    parameters: {},
7    events: {},
8    permissions: ["camera", "allow-popups"],
9});
```

## Allow requested iframe attributes in a host application

Opting in to certain iframe attributes may require the application builder to acknowledge a [checkpoint](https://www.palantir.com/docs/foundry/checkpoints/overview/).

In Workshop, application builders can grant permission to requested iframe attributes when configuring a custom widget. The **Permissions** section, found after the **Parameters** and **Events** sections, displays these settings.

![Image 1: The Permissions section when configuring a custom widget in Workshop.](https://www.palantir.com/docs/resources/foundry/custom-widgets/workshop-iframe-attributes.png)

During development, the widget developer can temporarily permit the requested iframe attributes for testing; they can then use the [custom widgets playground](https://www.palantir.com/docs/foundry/custom-widgets/development/#custom-widgets-playground) environment or [VS Code workspace](https://www.palantir.com/docs/foundry/custom-widgets/development/#vs-code-workspaces-integration) without needing to explicitly grant permission.

## Examples

### Camera and microphone

The following example requires the `camera` and `microphone` iframe allow attribute values to be enabled.

The [`navigator.mediaDevices.getUserMedia` ↗](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) method may be used to prompt the user for permission to use a media input (the camera and microphone in this example) and returns a [`MediaStream` ↗](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) object if successful.

Copied!

```
1const mediaStream = await navigator.mediaDevices.getUserMedia({
2    video: true,
3    audio: true,
4});
```

Additionally, the [Permissions API ↗](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) may be used to query the current status of browser permissions. The returned values may be `"granted"`, `"prompt"` or `"denied"` based on the iframe attributes and user browser prompt status.

Copied!

```
1navigator.permissions.query({ name: "camera" });
2navigator.permissions.query({ name: "microphone" });
```

The widget developer should ensure that cases where attribute access is not available are gracefully handled.

### Autoplay

The following example requires the `autoplay` iframe allow attribute value to be enabled.

The [autoplay ↗](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay#the_autoplay_attribute) attribute may be used on an `<audio>` or `<video>` element to autoplay media.

Copied!

`1<video src={myVideoSrc} autoplay controls />`

### Downloads

The following examples require the `allow-downloads` iframe sandbox attribute value to be enabled.

#### Dynamically create a CSV (blob)

A [`Blob` ↗](https://developer.mozilla.org/en-US/docs/Web/API/Blob) can be constructed with the contents of a CSV and downloaded in the browser:

Copied!

```
1<button
2    onClick={() => {
3        const csv = "a,b,c\n1,2,3";
4        const blob = new Blob([csv], { type: "text/csv" });
5        const url = URL.createObjectURL(blob);
6        triggerDownload(url, "data.csv");
7        URL.revokeObjectURL(url);
8    }}
9>
10    Download CSV
11</button>
```

The `triggerDownload` helper function temporarily creates an `<a>` element to trigger the download:

Copied!

```
1function triggerDownload(url: string, filename: string) {
2    const a = document.createElement("a");
3    a.download = filename;
4    a.href = url;
5    document.body.appendChild(a);
6    a.click();
7    a.remove();
8}
```

#### Download static assets included in widget

Two methods are described below for downloading static assets included in a custom widget. Review the [Vite Static Asset Handling ↗](https://vite.dev/guide/assets) documentation for more information.

##### Direct href

In custom widget dev mode, the dev server provides assets from a different origin (for example, `localhost`) than the custom widget runtime. This behavior may cause the browser to open a new tab rather than trigger a download. However, when using the custom widget in production, the assets will correctly trigger a download.

When using the Vite method to [import a static asset as a URL ↗](https://vite.dev/guide/assets#importing-asset-as-url), the asset URL may be used directly in an `<a>` element `href` attribute together with the `download` attribute:

Copied!

```
1import imgUrl from "./img.png";
2
3<a href={imgUrl} download="img.png" target="_blank" rel="noreferrer">
4    Download
5</a>;
```

When using the [Vite public directory ↗](https://vite.dev/guide/assets#the-public-directory), the assets in the public directory should be referenced using the root absolute path; for example, `public/img.png` should be referenced as `/img.png` in code:

Copied!

```
1<a href="/img.png" download="img.png" target="_blank" rel="noreferrer">
2    Download
3</a>
```

##### Alternative fetch blob method

An alternative method uses `fetch`, possibly performs additional processing, then downloads as a [`Blob` ↗](https://developer.mozilla.org/en-US/docs/Web/API/Blob), similar to the method for [dynamically creating a CSV (blob)](https://www.palantir.com/docs/foundry/custom-widgets/iframe-attributes/#dynamically-create-a-csv-blob). An example of additional processing could be to replace values inside the fetched static asset with user provided input.

When using the Vite method to [import a static asset as a URL ↗](https://vite.dev/guide/assets#importing-asset-as-url) we recommend also enforcing [no inlining ↗](https://vite.dev/guide/assets#explicit-inline-handling) to avoid content security policy (CSP) issues with `data:` URIs:

Copied!

```
1import imgUrl from "./img.png?no-inline";
2
3<button
4    onClick={async () => {
5        const response = await fetch(imgUrl);
6        const blob = await response.blob();
7        // optional: perform additional processing
8        const objectUrl = window.URL.createObjectURL(blob);
9        triggerDownload(objectUrl, filename);
10        window.URL.revokeObjectURL(objectUrl);
11    }}
12>
13    Download
14</button>;
```

When using the [Vite public directory ↗](https://vite.dev/guide/assets#the-public-directory), the assets in the public directory should be referenced using the root absolute path; for example, `public/img.png` should be referenced as `/img.png` in code:

Copied!

```
1<button
2    onClick={async () => {
3        const response = await fetch("/img.png");
4        const blob = await response.blob();
5        // optional: perform additional processing
6        const objectUrl = window.URL.createObjectURL(blob);
7        triggerDownload(objectUrl, filename);
8        window.URL.revokeObjectURL(objectUrl);
9    }}
10>
11    Download
12</button>
```

The `triggerDownload` helper function temporarily creates an `<a>` element to trigger the download:

Copied!

```
1function triggerDownload(url: string, filename: string) {
2    const a = document.createElement("a");
3    a.download = filename;
4    a.href = url;
5    document.body.appendChild(a);
6    a.click();
7    a.remove();
8}
```

### Open links

When developing in Workshop, we recommend creating a [Workshop event](https://www.palantir.com/docs/foundry/custom-widgets/open-url-in-workshop/) to open links; this method avoids the need to request additional iframe attributes.

The following example requires the `allow-popups` iframe sandbox attribute value to be enabled:

An `<a>` element can be used with the `href` and related attributes to open a link in a new tab:

Copied!

```
1<a href="https://palantir.com/docs" target="_blank" rel="noreferrer">
2    Link
3</a>
```
