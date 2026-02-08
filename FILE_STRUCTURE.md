# 📦 EXPERT VISIT CARD 2026 — Complete File List

## 🗂️ Project Structure

```
expert-visit-card/
│
├── 📄 index.html (25 KB)
│   ├── Meta tags (SEO, og:, viewport)
│   ├── Google Fonts link (Inter, Sora)
│   ├── Tailwind CSS script
│   ├── Custom styles link
│   ├── Sticky Telegram button
│   └── 9 Full Sections:
│       ├── Hero with animated blobs & parallax
│       ├── Value Proposition Cards (3x)
│       ├── Services Grid (6x)
│       ├── Portfolio Cases Slider
│       ├── Process Timeline (5 steps)
│       ├── Price Calculator (interactive)
│       ├── Testimonials Slider (3x)
│       ├── Call-to-Action Block
│       └── Contacts with Telegram integration
│
├── 📦 package.json
│   ├── Dependencies (5):
│   │   ├── gsap: ^3.12.2
│   │   ├── lenis: ^1.0.42
│   │   └── lucide: ^0.263.1
│   ├── DevDependencies (5):
│   │   ├── vite: ^5.0.8
│   │   ├── tailwindcss: ^3.3.6
│   │   ├── autoprefixer: ^10.4.16
│   │   ├── postcss: ^8.4.31
│   │   └── @tailwindcss/forms: ^0.5.6
│   └── Scripts:
│       ├── dev: vite
│       ├── build: vite build
│       └── preview: vite preview
│
├── ⚙️ vite.config.js
│   ├── Server config (port 5173, auto-open)
│   ├── Build optimization
│   └── Module chunk splitting
│
├── 🎨 tailwind.config.js
│   ├── Custom colors (dark, neon, accent)
│   ├── Font families (Inter, Sora)
│   ├── Font sizes (h1, h2, h3)
│   ├── Custom animations (float, pulse-glow, shimmer)
│   ├── Keyframes definitions
│   ├── Glass effect utilities
│   ├── Glow button utilities
│   └── Plugins (custom utilities)
│
├── 🎯 postcss.config.js
│   ├── Tailwind processing
│   └── Autoprefixer
│
├── 📄 .gitignore
│   ├── node_modules/
│   ├── dist/
│   ├── .env
│   └── OS files (.DS_Store, etc)
│
├── 📁 src/
│   │
│   ├── 📜 main.js (500+ lines)
│   │   ├── Lenis smooth scroll setup
│   │   ├── GSAP plugins registration
│   │   ├── 13 Animation Functions:
│   │   │   ├── initHeroAnimations()
│   │   │   │   ├── Fade-in элементов
│   │   │   │   ├── Floating blobs
│   │   │   │   ├── Parallax background
│   │   │   │   └── Stagger timing
│   │   │   │
│   │   │   ├── initScrollReveal()
│   │   │   │   └── Reveal on scroll для всех
│   │   │   │
│   │   │   ├── initValueCardsAnimation()
│   │   │   │   ├── Hover lift effect
│   │   │   │   ├── Glow shadow
│   │   │   │   └── Stagger reveal
│   │   │   │
│   │   │   ├── initServicesAnimation()
│   │   │   │   ├── Icon scale + rotation
│   │   │   │   ├── Card lift
│   │   │   │   └── Glow on hover
│   │   │   │
│   │   │   ├── animateCounter()
│   │   │   │   ├── Number animation
│   │   │   │   └── Price calculator
│   │   │   │
│   │   │   ├── initPortfolioSlider()
│   │   │   │   ├── Horizontal scroll
│   │   │   │   ├── Navigation buttons
│   │   │   │   └── Scale on hover
│   │   │   │
│   │   │   ├── initTimelineAnimation()
│   │   │   │   ├── Dot scale-in
│   │   │   │   ├── Content slide-in
│   │   │   │   └── Glow on hover
│   │   │   │
│   │   │   ├── initPriceCalculator()
│   │   │   │   ├── Slider listeners
│   │   │   │   ├── Real-time calculation
│   │   │   │   └── Animated display
│   │   │   │
│   │   │   ├── initTestimonialsSlider()
│   │   │   │   ├── Slider logic
│   │   │   │   └── Navigation
│   │   │   │
│   │   │   ├── initStickyButton()
│   │   │   │   ├── Scroll detection
│   │   │   │   ├── Show/hide animation
│   │   │   │   └── Hover effects
│   │   │   │
│   │   │   ├── initBackgroundAnimation()
│   │   │   │   └── Floating dots
│   │   │   │
│   │   │   ├── initIntersectionObserver()
│   │   │   │   └── Element reveal detection
│   │   │   │
│   │   │   └── initButtonAnimations()
│   │   │       ├── Ripple effect
│   │   │       └── Scale on hover
│   │   │
│   │   ├── initAllAnimations()
│   │   │   └── Main entry point
│   │   │
│   │   └── Event listeners
│   │       ├── Scroll (Lenis sync)
│   │       └── Resize (ScrollTrigger refresh)
│   │
│   └── 🎨 styles.css (450+ lines)
│       ├── @import statements
│       ├── Root CSS variables
│       ├── Base styles (*, html, body, h1-h4)
│       ├── Animations (@keyframes):
│       │   ├── float
│       │   ├── glow-pulse
│       │   ├── shimmer
│       │   └── text-reveal
│       ├── Glassmorphism classes
│       │   ├── .glass
│       │   ├── .glass-dark
│       │   └── .glass-hover
│       ├── Gradient buttons
│       │   ├── .btn-gradient
│       │   └── .btn-outline-gradient
│       ├── Gradient text
│       │   ├── .text-gradient
│       │   └── .text-gradient-cyan
│       ├── Utility classes
│       │   ├── .container-max
│       │   ├── .reveal
│       │   ├── .stagger-item
│       │   └── .parallax
│       ├── Hero section styles
│       │   ├── .hero-gradient
│       │   ├── .blob (animated blobs)
│       │   └── Background effects
│       ├── Grid layouts
│       │   ├── .grid-auto-fit
│       │   └── .grid-auto-fit-sm
│       ├── Performance optimizations
│       │   ├── Hardware acceleration
│       │   └── Reduce motion media query
│       └── Mobile responsive (@media)
│
├── 📚 README.md
│   ├── Features list
│   ├── Project structure
│   ├── Quick start (install, dev, build)
│   ├── Tech stack
│   ├── 9 Sections explanation
│   ├── Animations breakdown
│   ├── Glassmorphism guide
│   ├── Color palette
│   ├── Performance optimization tips
│   ├── Responsive design info
│   ├── Deploy options
│   └── License
│
├── 🎯 CUSTOMIZATION.md
│   ├── Content changes (text, colors, links)
│   ├── How to change services
│   ├── How to add images
│   ├── Typography customization
│   ├── Animation speed changes
│   ├── Smooth scroll speed
│   ├── Hover effects customization
│   ├── How to add images
│   ├── Font family changes
│   ├── SEO meta tags
│   ├── How to add new sections
│   ├── Color scheme examples
│   ├── Responsive breakpoints
│   └── Production checklist
│
├── ⚡ OPTIMIZATION.md
│   ├── Performance tips (10 techniques)
│   ├── Performance checking tools
│   ├── Core Web Vitals metrics
│   ├── Animation optimization
│   ├── Image optimization
│   ├── Bundle size analysis
│   ├── Mobile optimization
│   ├── Security considerations
│   ├── Production checklist
│   └── Caching strategies
│
├── 🏗️ CODE_ARCHITECTURE.md
│   ├── Project structure overview
│   ├── File explanations
│   ├── main.js function breakdown (13 functions)
│   ├── styles.css organization
│   ├── tailwind.config.js details
│   ├── How animations work
│   ├── Data flow diagram
│   ├── Key concepts explanation
│   ├── Performance tips
│   ├── Debugging guide
│   └── Learning checklist
│
└── 📋 DELIVERY.md
    ├── Project summary
    ├── Components breakdown
    ├── Design features
    ├── Animation list
    ├── Color palette
    ├── Performance optimizations
    ├── Responsive design
    ├── Quick start guide
    ├── Tech stack table
    ├── Customization examples
    ├── Deploy readiness
    ├── File size analysis
    ├── Highlights
    └── Next steps

```

---

## 📊 File Statistics

| Category | Count | Lines | Size |
|----------|-------|-------|------|
| **HTML** | 1 | 500+ | ~25 KB |
| **JavaScript** | 1 | 500+ | ~15 KB |
| **CSS** | 1 | 450+ | ~10 KB |
| **Config** | 4 | 200+ | ~5 KB |
| **Docs** | 5 | 1000+ | ~50 KB |
| **Total** | 12 | 2650+ | ~105 KB |

---

## 🎯 Key Files to Edit

### For Content Changes
- **index.html** — Все текст, ссылки, описания

### For Design Changes
- **tailwind.config.js** — Цвета, шрифты, animation
- **src/styles.css** — Градиенты, shadow, spacing

### For Animation Changes
- **src/main.js** — GSAP длительность, ease, effects

### For SEO
- **index.html** — Meta tags в `<head>`

---

## 🚀 Deploy Files

```
dist/
├── index.html (minified)
├── assets/
│   ├── main.js (minified + chunked)
│   └── styles.css (minified)
└── manifest.json (PWA ready)
```

**All ready to upload to:**
- Vercel
- Netlify
- GitHub Pages
- Traditional hosting

---

## 📝 Documentation Map

```
Beginner?          → Start with README.md
Want to customize? → Read CUSTOMIZATION.md
Need to optimize?  → Check OPTIMIZATION.md
Understand code?   → See CODE_ARCHITECTURE.md
Want full info?    → Read DELIVERY.md
```

---

## ✨ Total Features Count

- **9** Full sections
- **13** JavaScript functions
- **20+** GSAP animations
- **8** CSS animation keyframes
- **6** Custom Tailwind utilities
- **50+** Reusable CSS classes
- **100%** Responsive design
- **0** External libraries for core logic

---

**Everything you need to build a professional landing page in 2026!** 🚀
