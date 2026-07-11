export function getSection(path: string | undefined) {
  if (!path) return "msru";
  const [dir] = path.split("/", 1);
  if (!dir) return "msru";
  return (
    {
      cms: "cms",
      mes: "mes",
      wms: "wms",
      aps: "aps",
      qms: "qms",
      eam: "eam",
      iot: "iot",
      platform: "platform",
      docs: "docs",
      legal: "legal",
      framework: "framework",
    }[dir] ?? "msru"
  );
}
