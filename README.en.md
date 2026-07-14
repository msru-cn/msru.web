<p align="center">
  <strong>🌐 Language / 语言</strong><br>
  <a href="./README.md">简体中文</a> · <strong>English</strong> · <a href="./README.bo.md">བོད་ཡིག</a>
</p>

<p align="center">
  <h1 align="center">MSRU Web & Docs</h1>
  <p align="center">
    <strong>Enterprise Official Portal & Technical Documentation Center · AI-Native Powered</strong>
  </p>
  <p align="center">
    <strong>Open Source: MIT License (Free for commercial use, modification, and distribution)</strong>
  </p>
  <p align="center">
    <a href="#-quick-start">Quick Start</a> · <a href="#-project-structure">Project Structure</a> · <a href="#-components--configuration">Components & Configuration</a> · <a href="#-featured-core-logic">Featured Core Logic</a>
  </p>
</p>

---

![MSRU DT-Core Preview](./public/uploads/preview.png)

## Overview

MSRU Web & Docs is the official portal, industry solutions showcase center, and technical documentation station for the **MSRU Platform**. Built on a modern tech stack of **Next.js 16 (App Router) + React 19 + Fumadocs**, it integrates AI Copilot smart Q&A, real-time 3D rendering, and the declarative Liquid Glass marketing component system.

**Core Philosophy: Configuration is Page, Documentation is Code.**

### Tech Stack

| Layer | Technology |
|------|------|
| **Base Framework** | Next.js 16 (App Router) · React 19 · TypeScript 5.9 |
| **Doc Engine** | Fumadocs (MDX loader) · Markdown · Remark/Rehype |
| **Styling & Animation** | Tailwind CSS 4 · Framer Motion · Lucide Icons |
| **Data & Validation** | Zod (Schema validation) · Better-SQLite3 |
| **AI Q&A** | Vercel AI SDK · OpenAI Compatible API |
| **Code Quality** | Biome (Lint & Format) · Vitest (Testing) |

---

## 🏗 Project Structure

```
msru.web/
├── app/                           # Next.js App Router layer
│   ├── (home)/                    #   Official portal and product/solution subpages (:3007)
│   ├── docs/                      #   Fumadocs documentation portal router
│   └── api/                       #   AI search & OpenAI proxy interfaces
│
├── content/                       # Content assets source
│   ├── docs/                      #   Technical documentation Markdown (MDX)
│   └── marketing/                 #   Configurable marketing pages (JSON blocks)
│       └── pages/                 #     Including solutions, products, company, etc.
│
├── components/                    # Frontend UI components
│   ├── marketing/                 #   Liquid Glass block components (hero, bento, splitMedia, etc.)
│   ├── ui/                        #   Base UI button & form components
│   └── apple-footer.tsx           #   Apple-style immersive footer
│
├── lib/                           # Shared core logic libraries
│   ├── marketing/                 #   Marketing pages Zod validation schemas
│   ├── source.ts                  #   Fumadocs static datasource loader
│   └── layout.shared.tsx          #   Unified navbar & footer menu config
│
├── public/                        # Static asset files
│   └── uploads/                   #   HD background videos (mp4), SVG logos, and illustrations
│
├── biome.json                     # Biome linting/formatting rules
├── source.config.ts               # Fumadocs MDX compiler configuration
└── next.config.mjs                # Next.js configuration (with MDX compiler plugins)
```

---

## 📦 Components & Configuration

All product pages and industry solution showcases are built using the **Declarative Marketing Blocks (Liquid Glass System)**. You can generate premium-designed pages by editing JSON configuration files in `content/marketing/pages/` without writing any frontend code.

### Supported Marketing Components

| Component | Description | Key Attributes |
|------|------|------|
| `topHero` / `hero` | Immersive main page hero | Supports `bgVideo`, `bgImage`, top-left `badge`, and glass `ctas` |
| `statBand` | Industrial quantitative metrics band | Supports 3 to 6 metrics with unit, value, and label |
| `statement` | Core product statement and pain points | Supports large headline and body text |
| `bento` | 4-grid bento layout showcase | Supports `span: "wide"` grid mixing and custom icon settings |
| `splitMedia` | Split media & text description | Supports custom bullet points and redirection CTA links |
| `list` | Steps, cards, or timeline listings | Supports `variant: "timeline" / "cards" / "steps" / "rows"` |
| `faq` | Accordion FAQ dropdowns | Supports QA data array |
| `cta` | Global call to action | Directs users to schedule a demo or download whitepapers |

---

## 🌐 Featured Core Logic

### 1. SDUI Sandbox & Engine
The platform utilizes the `@msru/2ui-engine` dynamic UI engine and `apps/glass` experimental sandbox. The frontend layout and display are completely driven by backend JSON payloads, enabling high-frequency dynamic component rendering.

### 2. Strongly-Typed Docs & Zod Schema Validation
Integrating the Fumadocs MDX compiler and `lib/marketing/blocks-schema.ts`. All page JSON configurations undergo strict Zod schema validation during build time, intercepting missing attributes or invalid blocks to guarantee zero runtime crashes.

### 3. Tri-lingual Localization Framework
The marketing portal and documentation center natively support `Simplified Chinese`, `English`, and `བོད་ཡིག (Tibetan)`. Global translation and dynamic dictionary mapping are managed through the `@msru/i18n` package.

---

## 🚀 Quick Start

### Prerequisites

- Node.js ≥ 20
- pnpm ≥ 10

### Run Development Server

```bash
# 1. Clone the repository
git clone https://github.com/msru-cn/msru.web.git
cd msru.web

# 2. Install dependencies
pnpm install

# 3. Start development server (Port 3007)
pnpm dev
```

Open [http://localhost:3007](http://localhost:3007) in your browser.

### Useful Commands

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm lint             # Lint code quality (Biome)
pnpm format           # Format all code files (Biome)
pnpm check-types      # TS type safety check (including MDX route generation)
pnpm test             # Run unit tests (Vitest)
```

---

## 🔧 Code & Styling Guidelines

1. **Styling & Aesthetics**
   - Built on the progressive utility system of **Tailwind CSS 4**.
   - Adheres to the **Liquid Glass frosted glass aesthetic**, with native adaptive light/dark modes.
2. **Code Quality**
   - Code that violates Biome checking is strictly blocked. Always run `pnpm format` and `pnpm lint` before submitting.
   - Run `pnpm check-types` after modifying any JSON configuration to prevent breaking Zod schema constraints.

---

## 📄 License

MIT License (Free for commercial use, private deployment, custom development, modification, and distribution).
