<p align="center">
  <strong>🌐 Language / སྐད་ཡིག</strong><br>
  <a href="./README.md">简体中文</a> · <a href="./README.en.md">English</a> · <strong>བོད་ཡིག</strong>
</p>

<p align="center">
  <h1 align="center">MSRU Web & Docs</h1>
  <p align="center">
    <strong>བཟོ་ལས་རིམ་པའི་གཞུང་ཕྱོགས་དྲ་ཚིགས་དང་འཕྲུལ་རིག་ཡིག་ཆའི་ལྟེ་གནས། · AI-Native སྒུལ་ཤུགས།</strong>
  </p>
  <p align="center">
    <strong>སྒོ་འབྱེད་གྲོས་མཐུན།: MIT License (རིན་མེད་ཚོང་སྤྱོད་དང་། བཟོ་བཅོས། འགྲེམས་སྤེལ་བཅས་ལ་ཆོག་མཆན་ཡོད།)</strong>
  </p>
  <p align="center">
    <a href="#-མགྱོགས་མྱུར་འགོ་འཛུགས">མགྱོགས་མྱུར་འགོ་འཛུགས།</a> · <a href="#-ལས་གཞིའི་སྒྲིག་གཞི">ལས་གཞིའི་སྒྲིག་གཞི།</a> · <a href="#-གྲུབ་ཆ་དང་བཀོད་སྒྲིག">གྲུབ་ཆ་དང་བཀོད་སྒྲིག</a> · <a href="#-ལས་གཞིའི་དམིགས་བསལ་བྱེད་ལས">ལས་གཞིའི་དམིགས་བསལ་བྱེད་ལས།</a>
  </p>
</p>

---

![MSRU DT-Core Preview](public/uploads/preview.png)

## སྤྱི་བཤད། (Overview)

MSRU Web & Docs ནི་ **MSRU Platform** གྱི་གཞུང་ཕྱོགས་རྒྱ་སྐྱེད་དྲ་ཚིགས་དང་། བཟོ་ལས་ཐག་གཅོད་འཆར་གཞི་མངོན་སྟོན་ལྟེ་གནས། འཕྲུལ་རིག་ཡིག་ཆའི་ཚོགས་པ་བཅས་ཡིན། **Next.js 16 (App Router) + React 19 + Fumadocs** བཅས་དེང་རབས་ཅན་གྱི་ལག་རྩལ་རྨང་གཞིའི་ཐོག་བསྐྲུན་པ་ཡིན་ལ། AI Copilot རིག་ནུས་དྲི་ལན་དང་། དུས་ཐོག་ 3D མངོན་རིས། འགན་ལེན་ལྡན་པའི་ Liquid Glass ཚོང་རྭའི་གྲུབ་ཆའི་མ་ལག་བཅས་འདུས་ཡོད།

**ལྟེ་བའི་ལྟ་བ།: བཀོད་སྒྲིག་ནི་ཤོག་ངོས་ཡིན། ཡིག་ཆ་ནི་ཨང་ཀི་ཡིན།**

### ལག་རྩལ་སྡེབ་སྒྲིག (Tech Stack)

| རིམ་པ། | ལག་རྩལ། |
|------|------|
| **གཞི་རྩའི་སྒྲིག་གཞི།** | Next.js 16 (App Router) · React 19 · TypeScript 5.9 |
| **ཡིག་ཆའི་བྱེད་ལས།** | Fumadocs (MDX loader) · Markdown · Remark/Rehype |
| **བཟོ་ལྟ་དང་འགུལ་རིས།** | Tailwind CSS 4 · Framer Motion · Lucide Icons |
| **གཞི་གྲངས་དང་ཞིབ་བཤེར།** | Zod (Schema validation) · Better-SQLite3 |
| **AI དྲི་ལན།** | Vercel AI SDK · OpenAI Compatible API |
| **ཚད་གཞི་ལེགས་བཅོས།** | Biome (Lint & Format) · Vitest (Testing) |

---

## 🏗 ལས་གཞིའི་སྒྲིག་གཞི། (Project Structure)

```
msru.web/
├── app/                           # Next.js App Router རིམ་པ།
│   ├── (home)/                    #   གཞུང་ཕྱོགས་དྲ་ཚིགས་དང་ཐག་གཅོད་ཤོག་ངོས། (:3007)
│   ├── docs/                      #   Fumadocs ཡིག་ཆའི་ལྟེ་གནས་ཀྱི་ལམ་ཕྱོགས།
│   └── api/                       #   AI འཚོལ་ཞིབ་དང་ OpenAI ཚབ་བྱེད་ཁ་པར།
│
├── content/                       # ནང་དོན་མ་རྩའི་འབྱུང་ཁུངས།
│   ├── docs/                      #   འཕྲུལ་རིག་ཡིག་ཆ་ Markdown (MDX)
│   └── marketing/                 #   བཀོད་སྒྲིག་ཚོང་རྭའི་ཤོག་ངོས། (JSON བཀག་བགོས།)
│       └── pages/                 #     solutions、products、company སོགས་འདུས།
│
├── components/                    # སྔོན་ཐོན་ UI གྲུབ་ཆའི་ཚོགས་པ།
│   ├── marketing/                 #   Liquid Glass ཚོང་རྭའི་གྲུབ་ཆ། (hero, bento, splitMedia)
│   ├── ui/                        #   རྨང་གཞིའི་ UI མཐེབ་གཞོང་དང་འབྲི་ཤོག
│   └── apple-footer.tsx           #   Apple བཟོ་ལྟའི་མཐིལ་ཞབས།
│
├── lib/                           # སྤྱི་སྤྱོད་ལྟེ་བའི་བརྡ་ཆད་མཛོད།
│   ├── marketing/                 #   ཚོང་རྭའི་ཤོག་ངོས་ Zod ཞིབ་བཤེར་སྒྲིག་གཞི།
│   ├── source.ts                  #   Fumadocs གཞི་གྲངས་འཇུག་ཆས།
│   └── layout.shared.tsx          #   དྲ་ཚིགས་མགོ་མཇུག་གི་གཅིག་གྱུར་དཀར་ཆག
│
├── public/                        # བཅོས་མིན་ཐོན་ཁུངས་ཡིག་ཆ།
│   └── uploads/                   #   གསལ་པོའི་རྒྱབ་ལྗོངས་བརྙན་རིས། (mp4) དང་ SVG མཚོན་རྟགས།
│
├── biome.json                     # Biome ཨང་ཀིའི་སྒྲིག་ལམ།
├── source.config.ts               # Fumadocs MDX འདུས་གྲུབ་བཀོད་སྒྲིག
└── next.config.mjs                # Next.js བཀོད་སྒྲིག་ཆས། (MDX འདུས་གྲུབ་འདུས།)
```

---

## 📦 གྲུབ་ཆ་དང་བཀོད་སྒྲིག (Components & Configuration)

དྲ་ཚིགས་འདིའི་ཐོན་རྫས་ངོ་སྤྲོད་དང་ཐག་གཅོད་འཆར་གཞིའི་ཤོག་ངོས་ཡོངས་རྫོགས་ **འགན་ལེན་ལྡན་པའི་ཚོང་རྭའི་གྲུབ་ཆའི་མ་ལག་ (Liquid Glass System)** ཐོག་བསྐྲུན་པ་ཡིན། སྔོན་ཐོན་ཨང་ཀི་འབྲི་མི་དགོས་པར་ `content/marketing/pages/` འོག་གི་ JSON ཡིག་ཆ་བཟོ་བཅོས་བྱས་ན་སྤུས་ལེགས་ཤོག་ངོས་བསྐྲུན་ཐུབ།

### རྒྱབ་སྐྱོར་བྱེད་པའི་ཚོང་རྭའི་གྲུབ་ཆ།

| གྲུབ་ཆའི་རིགས། | གསལ་བཤད། | ལྟེ་བའི་ཁྱད་ཆོས། |
|------|------|------|
| `topHero` / `hero` | བྱིང་བའི་མགོ་ཤོག་རྒྱབ་ལྗོངས། | `bgVideo` / `bgImage` / གཡོན་མགོའི་ `badge` / ཤེལ་སྒོའི་ `ctas` རྒྱབ་སྐྱོར་བྱེད། |
| `statBand` | བཟོ་ལས་གྲངས་ཀའི་མངོན་སྟོན་ཚོགས་པ། | ཚད་གཞི་དང་། རིན་ཐང་། མཚོན་རྟགས་ལྡན་པའི་སྡོམ་རྩིས་གྲངས་ཀ་ 3~6 རྒྱབ་སྐྱོར་བྱེད། |
| `statement` | ཐོན་རྫས་ལྟེ་བའི་བསྒྲགས་གཏམ་དང་གནད་དོན། | ཡིག་ཆེན་མགོ་བརྗོད་དང་ནང་དོན་正文རྒྱབ་སྐྱོར་བྱེད། |
| `bento` | བཀོད་སྒྲིག་བཞི་ལྡན་གྱི་ལག་རྩལ་མཐིལ་གཞི། | `span: "wide"` མཉམ་བསྲེས་བཀོད་སྒྲིག་དང་མཚོན་རྟགས་བཀོད་སྒྲིག་རྒྱབ་སྐྱོར་བྱེད། |
| `splitMedia` | རི་མོ་དང་ཡིག་གེའི་གཤིབ་བསྡུར་མངོན་སྟོན། | མི་སྒེར་གྱི་ཚོགས་པའི་ཐོ་ཡིག་དང་ CTA མཐུད་ལམ་རྒྱབ་སྐྱོར་བྱེད། |
| `list` | གོམ་རིམ་དང་། ཤོག་བྱང་། དུས་ཐོག་མངོན་སྟོན། | `variant: "timeline" / "cards" / "steps" / "rows"` རྒྱབ་སྐྱོར་བྱེད། |
| `faq` | རྒྱུན་མཐོང་དྲི་ལན་ལྡེབ་ཆགས། | QA གཞི་གྲངས་དྲི་ལན་ཚོགས་པ་རྒྱབ་སྐྱོར་བྱེད། |
| `cta` | སྤྱི་ཡོངས་ལག་ལེན་སྐུལ་སློང་ཁུལ། | སྤྱོད་ཐོགས་པར་ཚོད་ལྟའི་མངོན་སྟོན་དང་ཡིག་ཆ་ལེན་པར་མཛུབ་སྟོན་བྱེད། |

---

## 🌐 ལས་གཞིའི་དམིགས་བསལ་བྱེད་ལས། (Featured Core Logic)

### 1. SDUI བྱེ་མའི་གཞོང་པ་དང་འགུལ་རིམ་སྒུལ་བྱེད། (SDUI Sandbox & Engine)
* **简体中文**：基于 `@msru/2ui-engine` 动态 UI 引擎与 `apps/glass` 实验沙箱，前端界面结构与展示完全由后端 JSON 协议驱动，支持高频组件动态映射渲染。
* **English**: Powered by the `@msru/2ui-engine` dynamic UI engine and `apps/glass` experimental sandbox. The frontend layout and display are completely driven by backend JSON payloads, enabling high-frequency dynamic component rendering.
* **བོད་ཡིག**: `@msru/2ui-engine` སྒྲིག་གཞི་ལྡན་པའི་གདོང་པའི་བྱེད་ལས་དང་ `apps/glass` ཚོད་ལྟའི་བྱེ་མའི་གཞོང་པས་ཞབས་ཞུ་ཆས་དེད་པའི་གདོང་པ་ (SDUI) མངོན་འགྱུར་བྱེད། སྔོན་ཐོན་གདོང་པའི་སྒྲིག་གཞི་ཡོངས་སུ་རྒྱབ་སྐྱོར་བྱེད་པའི་ JSON གནས་སྡུད་ཀྱིས་དེད་པ་ཡིན།

### 2. ཤུགས་དྲག་རིགས་ཀྱི་ཡིག་ཆ་རྩོམ་སྒྲིག་དང་ Zod ཞིབ་བཤེར། (Strongly-Typed Docs & Zod Validation)
* **简体中文**：结合 Fumadocs MDX 编译器与 `lib/marketing/blocks-schema.ts`，所有页面配置 JSON 在编译期均接受 Zod 强类型约束校验，自动拦截属性缺失或不合规组件，保证生产环境零崩溃。
* **English**: Integrating the Fumadocs MDX compiler and `lib/marketing/blocks-schema.ts`. All page JSON configurations undergo strict Zod schema validation during build time, intercepting missing attributes or invalid blocks to guarantee zero runtime crashes.
* **བོད་ཡིག**: Fumadocs MDX འདུས་གྲུབ་དང་ `lib/marketing/blocks-schema.ts` ཟུང་འབྲེལ་བྱེད། ཚོང་རྭའི་ JSON ཤོག་ངོས་ཀྱི་བཀོད་སྒྲིག་ཡོངས་རྫོགས་ལས་གཞིའི་སྐབས་སུ་ Zod ཤུགས་དྲག་རིགས་ཀྱིས་ཞིབ་བཤེར་བྱེད་ཅིང་། འཁོར་སྐྱོད་སྐབས་སུ་སྐྱོན་མི་ཤོར་བར་འགན་ལེན་བྱེད།

### 3. སྐད་ཡིག་གསུམ་གྱི་ས་གནས་ཅན་གྱི་སྒྲིག་གཞི། (Tri-lingual Localization Framework)
* **简体中文**：门户及文档站原生内置 `简体中文`、`English` 与 `བོད་ཡིག (藏语)` 三语包，通过 `@msru/i18n` 实现统一 the 语料翻译、动态字典映射与全球化部署。
* **English**: The marketing portal and documentation center natively support `Simplified Chinese`, `English`, and `བོད་ཡིག (Tibetan)`. Global translation and dynamic dictionary mapping are managed through the `@msru/i18n` package.
* **བོད་ཡིག**: སྟེགས་བུ་འདིས་སྐད་ཡིག་གསུམ་ (`རྒྱ་ཡིག` · `དབྱིན་ཡིག` · `བོད་ཡིག`) རང་བཞིན་གྱིས་རྒྱབ་སྐྱོར་བྱེད། གཅིག་གྱུར་གྱི་སྐད་སྒྱུར་དང་གློག་རྡུལ་ཚིག་མཛོད་ནི་ `@msru/i18n` གྱིས་སྒྲུབ་པ་ཡིན།

---

## 🚀 མགྱོགས་མྱུར་འགོ་འཛུགས། (Quick Start)

### སྔོན་འགྲོའི་ཆ་རྐྱེན། (Prerequisites)

- Node.js ≥ 20
- pnpm ≥ 10

### གསར་སྤེལ་ཞབས་ཞུ་ཆས་སྒོ་འབྱེད།

```bash
# 1. ལས་གཞི་འདྲ་ཕབ་བྱེད་པ།
git clone https://github.com/msru-cn/msru.web.git
cd msru.web

# 2. རྟེན་ཕྲན་སྒྲིག་ཆས་འཇུག་པ།
pnpm install

# 3. གསར་སྤེལ་ཞབས་ཞུ་ཆས་སྒོ་འབྱེད་པ། (མཐུད་སྒོ 3007 ཡིན།)
pnpm dev
```

དྲ་བཤར་ཆས་ནས་ [http://localhost:3007](http://localhost:3007) བལྟས་ན་མངོན་ཐུབ།

### རྒྱུན་སྤྱོད་བཀའ་བརྡ། (Useful Commands)

```bash
pnpm dev              # གསར་སྤེལ་ཞབས་ཞུ་ཆས་སྒོ་འབྱེད་པ།
pnpm build            # ཐོན་སྐྱེད་ཁོར་ཡུག་བསྐྲུན་པ།
pnpm lint             # ཨང་ཀིའི་སྤུས་ཀ་ཞིབ་བཤེར། (Biome)
pnpm format           # ཨང་ཀི་ཚོགས་པ་བཟོ་བཅོས། (Biome)
pnpm check-types      # TS རིགས་ཀྱི་བདེ་འཇགས་ཞིབ་བཤེར།
pnpm test             # ཚན་པའི་ཚོད་ལྟ་འཁོར་སྐྱོད། (Vitest)
```

---

## 🔧 བཟོ་ལྟ་དང་རྩོམ་སྒྲིག་སྒྲིག་ལམ། (Aesthetics & Guidelines)

1. **བཟོ་ལྟ་དང་མཛེས་རིག**
   - **Tailwind CSS 4** བཟོ་ལྟའི་མ་ལག་བཀོལ་ཡོད།
   - **Liquid Glass ཤེལ་སྒོའི་མཛེས་རིག** འཚོལ་སྙེག་བྱེད་ཅིང་། ཉིན་མཚན་གྱི་རྒྱབ་ལྗོངས་རང་བཞིན་གྱིས་འཕྲོད་ཐུབ།
2. **ཨང་ཀིའི་སྒྲིག་ལམ།**
   - Biome ཞིབ་བཤེར་མ་བརྒྱུད་པའི་ཨང་ཀི་འབུལ་མི་ཆོག མ་སྤྲད་གོང་ལ་ `pnpm format` དང་ `pnpm lint` འཁོར་སྐྱོད་བྱེད་དགོས།
   - JSON བཀོད་སྒྲིག་བཟོ་བཅོས་བྱས་རྗེས། ངེས་པར་དུ་ `pnpm check-types` འཁོར་སྐྱོད་བྱས་ཏེ་ Zod སྒྲིག་ལམ་མ་གཏོར་བར་བྱེད་དགོས།

---

## 📄 ཆོག་མཆན་གྲོས་མཐུན། (License)

MIT License (རིན་མེད་ཚོང་སྤྱོད་དང་། སྒེར་གཉེར་བཀོལ་སྤྱོད། ཐེངས་གཉིས་པའི་གསར་སྤེལ། བཟོ་བཅོས། འགྲེམས་སྤེལ་བཅས་ལ་ཆོག་མཆན་ཡོད།)
