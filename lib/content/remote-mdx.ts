import { compileMDX } from "@fumadocs/mdx-remote";
import { unstable_cache } from "next/cache";
import type { MDXProps } from "mdx/types";
import type { FC } from "react";

export interface RemoteRepoConfig {
  repo: string;
  branch: string;
}

export interface RemoteDoc {
  title: string;
  description?: string;
  Body: FC<MDXProps>;
  raw: string;
}

function repoConfig(): RemoteRepoConfig {
  return {
    repo: process.env.CONTENT_REPO ?? "supesthero-cmd/msru.platform",
    branch: process.env.CONTENT_BRANCH ?? "main",
  };
}

export function buildRawUrl(slug: string, cfg: RemoteRepoConfig): string {
  return `https://raw.githubusercontent.com/${cfg.repo}/${cfg.branch}/${slug}.mdx`;
}

export function cacheTagFor(slug: string): string {
  return `mdx:${slug}`;
}

async function rawFetcher(slug: string): Promise<string | null> {
  const url = buildRawUrl(slug, repoConfig());
  const token = process.env.CONTENT_GITHUB_TOKEN;
  const res = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
  if (!res.ok) return null;
  return res.text();
}

export async function fetchRemoteMdxRaw(slug: string): Promise<string | null> {
  const cached = unstable_cache(() => rawFetcher(slug), ["remote-mdx", slug], {
    tags: [cacheTagFor(slug)],
    revalidate: 3600,
  });
  return cached();
}

export async function compileRemoteMdx(slug: string): Promise<RemoteDoc | null> {
  const raw = await fetchRemoteMdxRaw(slug);
  if (raw == null) return null;
  const compiled = await compileMDX({ source: raw });
  const fm = compiled.frontmatter as { title?: string; description?: string };
  return {
    title: fm.title ?? slug,
    description: fm.description,
    Body: compiled.body,
    raw,
  };
}
