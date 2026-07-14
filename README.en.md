<p align="center">
  <strong>🌐 Language / 语言 / སྐད་ཡིག</strong><br>
  <a href="./README.md">简体中文</a> · <strong>English</strong> · <a href="./README.bo.md">བོད་ཡིག</a>
</p>

<p align="center">
  <h1 align="center">MSRU Web & Docs</h1>
  <p align="center">
    <strong>Enterprise Official Portal · Documentation Center · Distributed Headless CMS Edge Node (AI-Native)</strong>
  </p>
  <p align="center">
    <strong>License: MIT License (Free for commercial use, private deployment, modification, and distribution)</strong>
  </p>
  <p align="center">
    <strong>👉 Live Demo [MSRU Official Site]: <a href="https://new.msru.cn/">https://new.msru.cn/</a></strong><br>
    <sub>💡 Note on IPv6 Access: Hosted on a pure IPv6 edge node. Please ensure IPv6 is enabled on your router or use a mobile hotspot.</sub>
  </p>
  <p align="center">
    <a href="#-overview">Overview</a> · <a href="#-quickstart--customization">Quickstart & Customization</a> · <a href="#-distributed-headless-cms--edge-sync-api">CMS & API Docs</a> · <a href="#-project-structure--components">Structure & Components</a>
  </p>
</p>

---

![MSRU DT-Core Preview](public/uploads/preview.png)

## 🌟 Overview

**MSRU Web & Docs** is an enterprise-grade, high-performance, dual-engine portal built with **Next.js 16 (App Router) + React 19 + Fumadocs**.

In addition to serving as a premium product portal and technical documentation platform, this project is designed as a **completely decoupled, distributed Headless CMS edge node**:
- **Marketing Page Engine (SDUI)**: Frontend rendering is strictly decoupled and driven by backend JSON schemas, featuring declarative Liquid Glass component blocks.
- **Documentation Engine (Fumadocs MDX)**: Natively integrated Markdown / MDX compiler supporting code highlighting, LaTeX formulas, Mermaid diagrams, and tri-lingual localization.
- **Edge Sync Engine (ISR Revalidation - Solution 2)**: Built-in SQLite local storage protected by a secure API (`/api/cms`). Central backend systems can push updates to edge instances worldwide with **zero client JS overhead and millisecond-level instant updates**.

---

## 🚀 Quickstart & Customization

### 1. Local Development

```bash
# 1. Clone repository
git clone https://github.com/msru-cn/msru.web.git
cd msru.web

# 2. Install dependencies (Requires Node.js >= 20.9.0, pnpm >= 10)
pnpm install

# 3. Start development server (Port 3007)
pnpm dev
```
Open [http://localhost:3007](http://localhost:3007) in your browser.

### 2. Client Customization Guide (Building Your Own Brand Portal)

If you wish to use this codebase to **build a custom official website or edge CMS node for your company or clients** (cleaning out default MSRU brand data), please follow our comprehensive customization guide:

👉 **[View the Customization & Information Cleanup Quickstart Guide (`docs/quickstart-customization.md`)](./docs/quickstart-customization.md)**

Quick summary:
1. Update global SEO and brand name: `lib/metadata.ts` and icons in `public/`.
2. Update navigation and footer links: `lib/content/nav-model.ts` and `components/apple-footer.tsx`.
3. Clean default marketing pages and docs: `content/marketing/pages/` and `content/docs/`.
4. Configure your API token: Set `CMS_API_KEY` in `.env` or Coolify dashboard.

### 3. Useful Commands

```bash
pnpm dev              # Start local development server (:3007)
pnpm build            # Build production bundle
pnpm lint             # Static code check via Biome
pnpm format           # Auto-format codebase via Biome
pnpm check-types      # TypeScript and Fumadocs MDX route validation
pnpm test             # Run unit tests (Vitest)
```

---

## 📡 Distributed Headless CMS & Edge Sync API (`/api/cms`)

The edge node features a built-in `/api/cms` endpoint that allows centralized management backends to push or delete content dynamically, triggering on-demand Incremental Static Regeneration (ISR `revalidatePath`).

### 🔗 Full API Reference
We have documented the exact authentication rules, `slug` path mapping, dynamic page creation mechanics, and comprehensive request/response payloads with `curl` examples:
- 👉 **[Local Quick Reference: `docs/headless-cms-api.md`](./docs/headless-cms-api.md)**
- 👉 **[Online FumaDocs Source: `content/docs/cms/integrations/edge-sync-api.mdx`](./content/docs/cms/integrations/edge-sync-api.mdx)**

### Supported Actions (`action`)
| Action | Target | Behavior | Parameters |
| :--- | :--- | :--- | :--- |
| **`upsert_marketing`** | Marketing Pages (`cms_marketing_pages`) | Upsert record (create route dynamically if new) + revalidate static cache | `slug`, `blocks`, `meta` |
| **`delete_marketing`** | Marketing Pages (`cms_marketing_pages`) | Delete record + revalidate cache (reverts to local file or 404) | `slug` |
| **`upsert_docs`** | Documentation (`cms_docs_pages`) | Upsert Markdown/MDX + dynamic RSC compilation + revalidate cache | `slug`, `title`, `content` |
| **`delete_docs`** | Documentation (`cms_docs_pages`) | Delete record + revalidate cache | `slug` |
| **`execute_sql`** | Edge SQLite Database | Safe parameterized SQL execution for central analytics or maintenance | `sql`, `params`, `type` |

### Quick API Example (curl)
```bash
# Push a custom marketing page to the edge instance (Instant update)
curl -X POST https://your-edge-domain.com/api/cms \
  -H "Authorization: Bearer your_secure_random_token_64_chars" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "upsert_marketing",
    "slug": "products/custom-robot",
    "blocks": [{ "type": "hero", "headline": "Smart Custom Platform" }],
    "meta": { "title": "Custom Product | Portal" }
  }'
```

---

## 📦 Project Structure & Components

```
msru.web/
├── app/                           # Next.js App Router (/ and /docs routes, /api/cms endpoint)
├── content/                       # Static default content (marketing JSON / docs MDX)
├── components/                    # Frontend UI and marketing block components
├── lib/                           # Core utilities and database service (db.ts, cms-service.ts)
└── docs/                          # Developer documentation and specs
```

### Declarative Liquid Glass Marketing Blocks

Simply configure JSON objects (`blocks` array) to render rich, frosted-glass UI sections:

| Block Type | Name | Key Supported Properties |
| :--- | :--- | :--- |
| **`hero` / `topHero`** | Immersive Hero | `bgVideo`, `badge`, glass `ctas` buttons |
| **`statBand`** | Metric Band | 3~6 highlighted statistics with units and labels |
| **`statement`** | Core Statement | Product manifesto and industry pain point highlight |
| **`bento`** | Bento Grid | 4-card matrix supporting `span: "wide"` layout |
| **`splitMedia`** | Split Feature | Side-by-side image/video + feature bullet points |
| **`list`** | Multi-style Lists | `variant: "timeline" / "cards" / "steps" / "rows"` |
| **`faq`** | Accordion FAQ | Collapsible QA question & answer items |
| **`cta`** | Global Bottom CTA | High-conversion call to action band |

---

## 🔧 Code Quality & Aesthetics

1. **Styling System**: **Tailwind CSS 4** with **Liquid Glass** frosted glass aesthetics and native dark/light mode adaptation.
2. **Quality Checks**:
   - Run `pnpm format && pnpm lint` before committing (enforced by Biome).
   - All JSON payloads are strictly checked against Zod schemas (`pnpm check-types`).

---

## 📄 License

**MIT License** (Free for commercial use, private deployment, modification, and distribution).
