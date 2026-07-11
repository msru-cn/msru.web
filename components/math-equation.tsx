import katex from "katex";

export function MathEquation({ formula, inline = false }: { formula: string; inline?: boolean }) {
  try {
    const html = katex.renderToString(formula, {
      displayMode: !inline,
      throwOnError: false,
    });

    return (
      <span
        // biome-ignore lint/security/noDangerouslySetInnerHtml: rendering KaTeX HTML
        dangerouslySetInnerHTML={{ __html: html }}
        className={!inline ? "flex w-full justify-center my-4 overflow-x-auto" : ""}
      />
    );
  } catch {
    return <span className="text-red-500">Error rendering formula</span>;
  }
}
