# Per-App Volume Profiles — Marketing Site

Static marketing website for **Per-App Volume Profiles** (Home Screen icon label: **AppVolume**) — per-app volume management for iPhone and iPad.

🌐 **Live**: [perappvolume.com](https://perappvolume.com) *(once DNS is wired up)*
📱 **App Store**: Coming soon

## Tech stack

- Plain HTML + CSS + Vanilla JS — no build step, no framework
- Bilingual: 🇹🇼 繁體中文 / 🇬🇧 English (toggle via `data-lang` attribute)
- Google Fonts: Inter + Noto Sans TC
- Font Awesome 6 (CDN)
- Static-friendly — deploy anywhere (GitHub Pages, Cloudflare Pages, Netlify, Vercel)

## Local preview

No dependencies. Just open `index.html` in a browser, or:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit <http://localhost:8000>.

## Structure

```
.
├── index.html          # Landing page
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Use
├── support.html        # Support & FAQ
├── style.css           # All styling
├── js/
│   ├── i18n.js         # Language toggle (zh ⇄ en), persists in localStorage
│   └── main.js         # Mobile menu, scroll reveal, nav highlight
└── assets/
    └── app-icon.png    # 1024×1024 app icon
```

## Bilingual content pattern

Every translatable node uses `data-lang="zh"` or `data-lang="en"`:

```html
<h1 data-lang="zh">每個 App，都有它自己的音量。</h1>
<h1 data-lang="en" style="display:none;">Every app, its own volume.</h1>
```

Defaults to Traditional Chinese; toggle button (top-right nav) swaps to English. Choice persists via `localStorage` key `pavp-lang`.

## Deploy

### GitHub Pages

```bash
# Push to main, enable Pages from the repo settings → Pages → Branch: main / root
```

### Cloudflare Pages

Connect this repo. Build command: *(none)*. Build output: `/`.

### Custom domain

Add a `CNAME` file with your domain (e.g. `perappvolume.com`) and configure DNS.

## License

Code: MIT. Brand, copy, and `app-icon.png` © xup Studio — not licensed for reuse.
