import Link from "next/link";
import type { NavNode } from "@/lib/content/nav-model";

function NavList({ nodes, sourceId, depth }: { nodes: NavNode[]; sourceId: string; depth: number }) {
  return (
    <ul className={depth === 0 ? "space-y-1" : "ml-3 mt-1 space-y-1 border-l border-fd-border pl-3"}>
      {nodes.map((node) => (
        <li key={`${node.title}-${node.slug ?? "group"}`}>
          {node.slug ? (
            <Link
              href={`/k/${sourceId}/${node.slug}`}
              className="block rounded px-2 py-1 text-sm text-fd-muted-foreground hover:bg-fd-muted hover:text-fd-foreground"
            >
              {node.title}
            </Link>
          ) : (
            <span className="block px-2 py-1 text-xs font-semibold uppercase tracking-wide text-fd-foreground/70">
              {node.title}
            </span>
          )}
          {node.children && node.children.length > 0 && (
            <NavList nodes={node.children} sourceId={sourceId} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

export function AggregatedNavSidebar({ nodes, sourceId }: { nodes: NavNode[]; sourceId: string }) {
  return (
    <nav className="w-full shrink-0 overflow-y-auto md:w-72 md:border-r md:border-fd-border md:pr-4">
      <NavList nodes={nodes} sourceId={sourceId} depth={0} />
    </nav>
  );
}
