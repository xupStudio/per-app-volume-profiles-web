// =========================================
// Bilingual toggle — zh-Hant (default) ⇄ en
// Persists choice in localStorage.
// HTML pattern: every translatable node has data-lang="zh" or data-lang="en".
// Default state: zh visible, en hidden via inline style="display:none;".
// =========================================

(function () {
    const STORAGE_KEY = 'pavp-lang';
    const SUPPORTED = ['zh', 'en'];

    function detectInitialLang() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && SUPPORTED.includes(stored)) return stored;

        const browser = (navigator.language || 'en').toLowerCase();
        if (browser.startsWith('zh')) return 'zh';
        return 'en';
    }

    function applyLang(lang) {
        const isZh = lang === 'zh';
        document.querySelectorAll('[data-lang]').forEach((el) => {
            const target = el.getAttribute('data-lang');
            if (target === lang) {
                el.style.removeProperty('display');
            } else if (SUPPORTED.includes(target)) {
                el.style.display = 'none';
            }
        });

        document.documentElement.setAttribute('lang', isZh ? 'zh-Hant' : 'en');
        const toggleText = document.querySelector('.lang-toggle-text');
        if (toggleText) toggleText.textContent = isZh ? 'EN' : '繁中';

        localStorage.setItem(STORAGE_KEY, lang);
    }

    function setupToggle() {
        const btn = document.getElementById('langToggle');
        if (!btn) return;
        btn.addEventListener('click', () => {
            const current = localStorage.getItem(STORAGE_KEY) || detectInitialLang();
            const next = current === 'zh' ? 'en' : 'zh';
            applyLang(next);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        applyLang(detectInitialLang());
        setupToggle();
    });
})();
