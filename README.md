# App Volume — Marketing Site

Static bilingual website for **App Volume**（繁體中文品牌名：**應用音量**）, a per-app volume utility for iPhone and iPad.

- **App Store**: [apps.apple.com/app/id6773184998](https://apps.apple.com/app/id6773184998)
- **System requirement**: iOS / iPadOS 18.2 or later
- **Current availability**: live on the App Store; the current version is free and has no subscription

## Product scope represented on this site

- App volume rules grouped into **Modes / 情境模式**
- One Apple Shortcuts App Personal Automation for all selected apps
- Separate Bluetooth headphone volume using Connect and Disconnect helper automations; wired headphones are not supported
- Home Screen and Lock Screen widgets plus Control Center controls
- Global Rules, Discover, Mode sharing, and private iCloud backup / restore
- Firebase Analytics and Crashlytics with an in-app opt-out, anonymous Firebase Authentication, and voluntary in-app feedback

The site intentionally does not claim Focus or time-based triggers, HealthKit or hearing-health features, wired-headphone support, live cross-device iCloud sync, a paid Pro tier, or an automation-creation wizard.

## Tech stack

- Plain HTML + CSS + vanilla JavaScript; no build step or framework
- Traditional Chinese and English via `data-lang` attributes
- Google Fonts: Inter and Noto Sans TC
- Font Awesome 6 from cdnjs
- Static hosting compatible with GitHub Pages, Cloudflare Pages, Netlify, Vercel, or Firebase Hosting

## Local preview

No dependencies are required. Open `index.html` directly, or run a local static server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Structure

```text
.
├── index.html          # Product landing page
├── privacy.html        # App and website privacy policy
├── terms.html          # Terms of Use
├── support.html        # Setup help, FAQ, and contact
├── style.css           # Shared styling
├── js/
│   ├── i18n.js         # Language toggle; preference stored in localStorage
│   └── main.js         # Mobile menu, scroll reveal, and navigation behavior
└── assets/
    └── app-icon.png    # App icon
```

## Bilingual content pattern

```html
<h1 data-lang="zh">每個 App，都有它自己的音量。</h1>
<h1 data-lang="en" style="display:none;">Every app, its own volume.</h1>
```

Traditional Chinese is the default. The navigation toggle switches to English, and `js/i18n.js` stores the choice in the `pavp-lang` localStorage key for backward compatibility.

## Deployment

This repository is static. Serve the repository root as the site root; no build command is needed. Deployment, DNS, and production publishing are handled separately from content changes.

## License

Code: MIT. Brand, copy, and `assets/app-icon.png` © xup Studio and are not licensed for reuse.
