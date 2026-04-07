# Carely – Holistic Senior Care Website

Built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## Fonts
- **Plus Jakarta Sans** – body & UI text
- **Lora** – all headings (with typewriter effect)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## Project Structure

```
carely/
├── app/
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── page.tsx          # Main page (composes all sections)
│   └── globals.css       # Tailwind base + custom animations
├── components/
│   ├── hooks.ts          # useTypewriter + useFadeUp hooks
│   ├── TypewriterHeading.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustStrip.tsx
│   ├── Quality.tsx
│   ├── PersonalizedCare.tsx
│   ├── Community.tsx
│   ├── TrustedPartner.tsx
│   ├── Stats.tsx
│   ├── Schedule.tsx
│   ├── Plans.tsx
│   ├── Comfort.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Sections
1. **Navbar** – sticky with scroll effect + mobile hamburger menu
2. **Hero** – multi-line typewriter heading, image collage, floating badges, stats
3. **Trust Strip** – 3 value props
4. **Quality** – image stack with rating badge, bullet points
5. **Personalized Care** – 6 service cards (featured middle card in olive)
6. **Community** – numbered list + image collage
7. **Trusted Partner** – dark olive section, 4 feature tiles
8. **Stats** – 4 animated stat cards
9. **Schedule** – booking form (name, phone, care type, date)
10. **Plans** – 3 pricing tiers (featured middle plan in olive)
11. **Comfort** – dark olive-mid section, spinning ornament
12. **Testimonials** – 3 review cards
13. **FAQ** – accordion + CTA box
14. **Footer** – 4-column grid + social links

## Customization
- **Colors**: Edit `tailwind.config.js` under `theme.extend.colors`
- **Images**: Replace emoji placeholders in each component with `<Image />` from `next/image`
- **Content**: All text is inline in each component file — easy to update
