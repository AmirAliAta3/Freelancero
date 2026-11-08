<div align="center">

# 🟡 پروژه‌یار

### بازار تخصص و پروژه — با طعم Brutal Glass

**پلتفرمی برای اتصال مستقیم کارفرما به متخصص‌های واقعی. بدون واسطه، با پرداخت امن و تضمین کیفیت.**

<br>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-ZERO-ff3d2e?style=for-the-badge)]()

<br>

![Status](https://img.shields.io/badge/status-live-success?style=flat-square)
![Language](https://img.shields.io/badge/lang-فارسی-blue?style=flat-square)
![RTL](https://img.shields.io/badge/direction-RTL-yellow?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-black?style=flat-square)

</div>

---

## ✨ پروژه‌یار چیه؟

یه لندینگ‌پیج تک‌صفحه‌ای (SPA) با استایل خاص **Neo-Brutalism + Glassmorphism** که تجربه‌ی یه بازار پروژه‌ی واقعی رو شبیه‌سازی می‌کنه. همه‌چیز با **HTML، CSS و Vanilla JS** خالص ساخته شده — بدون فریم‌ورک، بدون کتابخانه، بدون `npm install`.

> 🎨 طراحی راست‌به‌چپ (RTL) با فونت **Vazirmatn**، رنگ‌های تند و شاد (زرد لیمویی، آبی الکتریک، قرمز آتشین)، و کلی انیمیشن و میکرواینتراکشن که سایت رو زنده نگه می‌داره.

---

## 🚀 دموی زنده

<div align="center">

🔗 **[[لینک GitHub Pages خودت رو اینجا بذار](https://your-username.github.io/projectyar/)]**

</div>

---

## 🧩 ویژگی‌های اصلی

### 🎯 تجربه‌ی کاربری

| ویژگی | توضیح |
|-------|-------|
| 🌗 **تم روشن/تاریک** | با ذخیره‌سازی در `localStorage`، انتخاب کاربر حفظ می‌شه |
| ⌨️ **Command Palette** | با `Ctrl + K` یا `/` باز می‌شه — جستجو و ناوبری سریع |
| 🖱️ **کرسر سفارشی** | یه دات + رینگ با `mix-blend-mode: difference` که روی عناصر تعاملی بزرگ می‌شه |
| 📊 **نوار پیشرفت اسکرول** | نشون‌دهنده‌ی موقعیت در صفحه |
| 🧭 **Dock ناوبری** | نوار شیشه‌ای پایین صفحه با افکت macOS-style و هایلایت خودکار بخش فعال |
| 📱 **کاملاً ریسپانسیو** | از موبایل تا مانیتور ۴K |

### 🎬 انیمیشن‌ها و افکت‌ها

- **Liquid Lens** — یه ذره‌بین شیشه‌ای که با `feTurbulence` + `feDisplacementMap` روی هیرو حرکت می‌کنه
- **Tilt 3D** — کارت‌ها با حرکت موس سه‌بعدی می‌چرخن
- **Reveal on Scroll** — عناصر با `IntersectionObserver` ظاهر می‌شن
- **Counter Animation** — آمارها با easing به عدد نهایی می‌رسن
- **Typing Code Effect** — کد توی کارت برنامه‌نویسی حرف‌به‌حرف تایپ می‌شه
- **Sticky Stack Cards** — چهار مرحله‌ی فرآیند روی هم انبار می‌شن
- **Aurora Blobs** — لکه‌های نوری رنگی که شناورن
- **Marquee** — نوار متحرک تخصص‌ها و نظرات
- **Confetti** — با کلیک روی CTA، کانفتی می‌پاشه 🎉

### 🛠️ ماژول‌های تعاملی

#### 🔍 یاب‌متخصص زنده (Live Matcher)
کارت هیرو که به‌صورت خودکار بین دسته‌بندی‌ها (طراحی، برنامه‌نویسی، محتوا، بازاریابی، داده) می‌چرخه و متخصص‌های نمونه رو با انیمیشن نمایش می‌ده.

#### 🧮 برآوردگر پروژه (Project Estimator)
ماشین‌حساب هوشمند با:
- انتخاب نوع پروژه (۵ دسته)
- اسلایدر بودجه (۱ تا ۶۰ میلیون)
- سوییچ «فوری»
- خروجی زنده: تعداد پیشنهاد، زمان تحویل، متخصص آنلاین

#### 👥 کارت‌های متخصص
سه پروفایل نمونه با گرادیان رنگی متفاوت، امتیاز، سابقه و دکمه‌ی استخدام.

#### ❓ آکاردئون FAQ
سوالات متداول با انیمیشن `grid-template-rows` (بدون `max-height` هک).

---

## 🏗️ ساختار پروژه

```
projectyar/
├── 📄 index.html    ← مارک‌آپ اصلی (سمنتیک + ARIA)
├── 🎨 style.css     ← تمام استایل‌ها (CSS Variables + Dark Mode)
├── ⚡ script.js     ← تمام منطق و تعامل‌ها (Vanilla JS)
└── 📖 README.md     ← همین فایل
```

> ⚠️ **هیچ وابستگی خارجی‌ای وجود نداره** جز فونت Vazirmatn از Google Fonts.

---

## 🎨 پالت رنگی

| رنگ | کد | کاربرد |
|-----|-----|---------|
| 🟡 زرد لیمویی | `#f0e83a` | پس‌زمینه‌ی اصلی |
| ⚫ مشکی | `#0a0a0a` | متن و بوردرها |
| 🔵 آبی الکتریک | `#2b4dff` | CTA و هایلایت |
| 🔴 قرمز آتشین | `#ff3d2e` | هشدار و اکشن |
| 🍦 کرم | `#fff8e7` | کارت‌های شیشه‌ای |

---

## ⚙️ نصب و اجرا

### روش ۱ — کلون مستقیم

```bash
git clone https://github.com/your-username/projectyar.git
cd projectyar
```

بعد فایل `index.html` رو توی مرورگر باز کن. **همین!** 🎉

### روش ۲ — با Live Server

```bash
# اگه VS Code داری:
# روی index.html راست کلیک کن → Open with Live Server

# یا با Python:
python -m http.server 8000
```

سپس برو به `http://localhost:8000`

### روش ۳ — GitHub Pages

1. برو به **Settings → Pages**
2. Branch رو روی `main` و پوشه رو روی `/ (root)` بذار
3. Save کن و لذت ببر 🚀

---

## 🧠 نکات فنی جالب

<details>
<summary><b>🔬 Liquid Lens چطور کار می‌کنه؟</b></summary>

یه فیلتر SVG با `feTurbulence` (نویز فرکتالی) و `feDisplacementMap` تعریف شده که به‌عنوان `backdrop-filter` روی یه `div` گرد اعمال می‌شه:

```html
<filter id="liquid">
  <feTurbulence type="fractalNoise" baseFrequency="0.011 0.016" numOctaves="2" />
  <feDisplacementMap in="SourceGraphic" scale="46" />
</filter>
```

```css
.lens {
  backdrop-filter: blur(2px) saturate(1.8) url(#liquid);
}
```

نتیجه: یه ذره‌بین شیشه‌ای که محتوای پشتش رو موج‌دار و شکسته نشون می‌ده. 🌊
</details>

<details>
<summary><b>🎯 Sticky Stack چطور پیاده شده؟</b></summary>

هر کارت `position: sticky` با `top` متفاوته:

```css
.sc:nth-child(n) {
  top: calc(96px + var(--i) * 26px);
}
```

و با اسکرول، کارت‌های بعدی روی قبلی می‌آن. یه `IntersectionObserver` هم با `rootMargin: '-45% 0px -50% 0px'` بخش فعال رو توی Dock هایلایت می‌کنه.
</details>

<details>
<summary><b>♿ دسترسی‌پذیری (a11y)</b></summary>

- همه‌ی دکمه‌های آیکونی `aria-label` دارن
- سوییچ فوری با `role="switch"` و `aria-checked` پیاده شده
- Command Palette با کیبورد کامل کار می‌کنه (↑↓ Enter Esc)
- `prefers-reduced-motion` کاملاً پشتیبانی می‌شه — همه‌ی انیمیشن‌ها خاموش می‌شن
- `::selection` و `:focus-visible` استایل‌دارن
</details>

<details>
<summary><b>🌙 تم تاریک چطور کار می‌کنه؟</b></summary>

همه‌ی رنگ‌ها به‌صورت CSS Variable تعریف شدن. کافیه `data-theme="dark"` روی `<html>` ست بشه:

```css
:root { --bg: #f0e83a; --ink: #0a0a0a; }
[data-theme="dark"] { --bg: #14141b; --ink: #f4efe0; }
```

و JS فقط این اتریبیوت رو toggle می‌کنه + `localStorage` رو آپدیت می‌کنه.
</details>

<details>
<summary><b>📉 Performance</b></summary>

- صفر dependency → صفر overhead
- `will-change` فقط روی عناصری که واقعاً حرکت می‌کنن
- `IntersectionObserver` به‌جای scroll listener برای reveal
- `requestAnimationFrame` برای همه‌ی انیمیشن‌های JS
- تصاویر SVG inline (بدون درخواست شبکه)
- فونت با `preconnect` از قبل لود می‌شه
</details>

---

## 📋 TODO / ایده‌های آینده

- [ ] 🔐 سیستم احراز هویت واقعی (OAuth)
- [ ] 💳 اتصال به درگاه پرداخت (زرین‌پال / آیدی‌پی)
- [ ] 💬 چت واقعی بین کارفرما و متخصص
- [ ] 📊 داشبورد مدیریت پروژه
- [ ] 🌍 چند زبانه (i18n)
- [ ] 🧪 تست‌های E2E با Playwright
- [ ] 📦 تبدیل به PWA (Offline-first)

---

## 🤝 مشارکت

هر PR خوش‌آمدِ! اگه ایده‌ای داری:

1. Fork کن 🍴
2. برنچ بساز (`git checkout -b feature/awesome-idea`)
3. Commit کن (`git commit -m 'feat: add awesome idea'`)
4. Push کن (`git push origin feature/awesome-idea`)
5. Pull Request بفرست 🚀

---

## 📜 مجوز

این پروژه تحت مجوز **MIT** منتشر شده — آزادانه استفاده کن، تغییر بده و به اشتراک بذار.

```
MIT License © 2025 پروژه‌یار
```

---

<div align="center">

### 💛 ساخته شده با عشق، بدون فریم‌ورک

**پروژه‌یار — تقدیم به رضوانی عزیز**

<br>

⭐ اگه از این پروژه خوشت اومد، یه ستاره بده! ⭐

<sub>Made with 💛 + ☕ + 🎨</sub>

</div>
