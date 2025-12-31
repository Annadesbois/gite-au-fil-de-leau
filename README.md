# 🌿 Gîte Au fil de l’eau — Website

A multilingual, SEO-optimised website for the **Gîte Au fil de l’eau**, a countryside holiday rental in **Storckensohn (Hautes-Vosges d’Alsace, France)**.

Built with **Next.js (App Router)**, **React 19**, **TypeScript**, **TailwindCSS**, **Prisma**, **Zod**, and a custom **JSON-based i18n system**.  
Includes detailed pages for the gîte, rooms, wellness area, surroundings, a review system, and a contact form with email integration.

---

## ✨ Features

- 🏡 **Gîte & Rooms**
  - Individual room pages: Cerisier, Grange, Aurores, Jardin des Senteurs
  - Living room, kitchen, dining area, and wellness area
- 🌍 **Multilingual**
  - French (default), English, German
  - Custom JSON i18n (no external package)
- 🖼️ **Photos & Galleries**
  - Optimised with Next.js `<Image />`
  - Embla Carousel for slideshows
  - SEO-ready alt text system
- ⭐ **Review System**
  - Prisma + PostgreSQL
  - Review form validated with **Zod**
  - Server actions in `/[locale]/reviews/actions.ts`
- 📬 **Contact Form**
  - API route: `/app/api/contact/route.ts`
  - Zod validation
  - Email delivery via **Resend**
- 🧭 **Navigation**
  - Desktop and mobile menus (Radix UI)
  - Localised pages under `/[locale]`
- 🎨 **Design**
  - TailwindCSS
  - Custom fonts (Courgette, Playpen Sans)
  - Fabric texture backgrounds
  - Fully responsive
- 🔒 **Security-focused**
  - Minimal dependencies
  - Controlled Prisma client generation
  - Custom i18n instead of extra libraries

---

## 🛠️ Tech Stack

- **Next.js 14 / App Router**
- **React 19** + TypeScript
- **TailwindCSS**
- **Radix UI**
- **Prisma ORM**
- **PostgreSQL**
- **Embla Carousel**
- **Zod validation** (forms)
- **Resend** (emails)
- **Custom JSON i18n**

---

## 📁 Project Structure

```text
gite-au-fil-de-leau/
├── .vscode/
│   └── settings.json
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── page.tsx
│   │
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   │
│   ├── fonts/
│   │   ├── courgette.ts
│   │   └── playpen-sans.ts
│   │
│   ├── generated/
│   │   └── prisma/
│   │       ├── browser.ts
│   │       ├── client.ts
│   │       ├── commonInputTypes.ts
│   │       ├── enums.ts
│   │       ├── models.ts
│   │       │
│   │       ├── internal/
│   │       │   ├── class.ts
│   │       │   ├── prismaNamespace.ts
│   │       │   └── prismaNamespaceBrowser.ts
│   │       │
│   │       └── models/
│   │
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx
│       │
│       ├── around/
│       │   ├── page.tsx
│       │   ├── everything-else/page.tsx
│       │   ├── hiking/page.tsx
│       │   ├── lake-kruth-wildenstein/page.tsx
│       │   ├── oil-mill/page.tsx
│       │   ├── village/page.tsx
│       │   └── wesserling-park/page.tsx
│       │
│       ├── contact/page.tsx
│       │
│       ├── gite/
│       │   ├── page.tsx
│       │   ├── aurores-room/page.tsx
│       │   ├── cerisier-room/page.tsx
│       │   ├── grange-room/page.tsx
│       │   ├── jardin-des-senteurs-room/page.tsx
│       │   ├── living-room/page.tsx
│       │   ├── price/page.tsx
│       │   └── wellness/page.tsx
│       │
│       └── reviews/
│           ├── actions.ts
│           └── page.tsx
│
├── components/
│   ├── Button.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── ReviewForm.tsx
│   │
│   ├── carousel/
│   │   ├── CarouselArrows.tsx
│   │   └── PhotoCarousel.tsx
│   │
│   └── navbar/
│       ├── DesktopMenu.tsx
│       ├── LocaleSwitcher.tsx
│       ├── MobileMenu.tsx
│       └── Navbar.tsx
│
├── data/
│   ├── activities-photos.ts
│   ├── aurore-photos.ts
│   ├── cerisier-photos.ts
│   ├── grange-photos.ts
│   ├── hiking-photos.ts
│   ├── home-photos.ts
│   ├── lake-photos.ts
│   ├── living-room-photos.ts
│   ├── mill-photos.ts
│   ├── senteurs-photos.ts
│   ├── village-photos.ts
│   ├── wellness-photos.ts
│   └── wesserling-photos.ts
│
├── lib/
│   ├── i18n.config.ts
│   ├── i18n.ts
│   ├── metadata.ts
│   └── prisma.ts
│
├── messages/
│   ├── de.json
│   ├── en.json
│   └── fr.json
│
├── prisma/
│   ├── legacy-reviews.json
│   ├── schema.prisma
│   ├── seed.ts
│   │
│   └── migrations/
│       ├── migration_lock.toml
│       ├── 20251124190328_init/
│       │   └── migration.sql
│       └── 20251125193715_make_rating_optional/
│           └── migration.sql
│
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── vercel.svg
│   ├── window.svg
│   │
│   ├── flags/
│   │   ├── de.svg
│   │   ├── fr.svg
│   │   └── gb.svg
│   │
│   ├── fonts/
│   │   ├── Courgette/
│   │   └── PlaypenSans/
│   │
│   ├── logos/
│   │   ├── gite-de-france.png
│   │   └── label-tourisme-et-handicap.jpg
│   │
│   ├── photos-alentours/
│   │   ├── lac/
│   │   ├── le-reste/
│   │   ├── moulin/
│   │   ├── randonnees/
│   │   ├── vues-aeriennes/
│   │   └── wesserling/
│   │
│   ├── photos-gite/
│   │   ├── bien-etre/
│   │   ├── chambre-aurores/
│   │   ├── chambre-cerisier/
│   │   ├── chambre-grange/
│   │   ├── chambre-jardin-des-senteurs/
│   │   ├── exterieur/
│   │   ├── interieur/
│   │   └── sejour/
│   │
│   └── textures/
│       ├── fabric1.webp
│       └── fabric2.webp
│
└── types/
    ├── carousel.ts
    │
    └── i18n/
        ├── activities.ts
        ├── aurores.ts
        ├── cerisier.ts
        ├── contact.ts
        ├── contactForm.ts
        ├── else.ts
        ├── footer.ts
        ├── grange.ts
        ├── hiking.ts
        ├── home.ts
        ├── index.ts
        ├── lake.ts
        ├── living-room.ts
        ├── metadata.ts
        ├── mill.ts
        ├── navbar.ts
        ├── pageProp.ts
        ├── reviewForm.ts
        ├── reviews.ts
        ├── senteurs.ts
        ├── village.ts
        ├── wellness.ts
        └── wesserling.ts
```

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Set up environment variables

Create `.env`:

```env
DATABASE_URL=...
RESEND_API_KEY=...
NEXT_PUBLIC_SITE_URL=https://your-site.com
```

### Run Prisma

```bash
npx prisma generate
npx prisma migrate deploy
```

### Start development server

```bash
npm run dev
```

---

## 📦 Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

## 📌 Roadmap / TODO

### 🔤 Internationalisation
- [ ] Translate **all alt texts** into English & German  
- [ ] Translate **all public folder content** (filenames / labels where applicable)  
- [ ] Add missing translations in `messages/*.json`

### 🔐 Authentication & Admin
- [ ] Add authentication (custom or lightweight provider)
- [ ] Create admin dashboard for:
  - [ ] Approving reviews  
  - [ ] Rejecting / deleting spam  
- [ ] Protect admin routes with middleware

### 📬 Contact Form Improvements
- [ ] Configure **Resend domain authentication**
  - [ ] Add domain in Resend
  - [ ] Add DKIM/SPF/TXT DNS records
  - [ ] Verify domain
- [ ] Personalise `FROM:` email
- [ ] Improve error handling & logging

### 🧪 Testing
- [ ] Set up test environment (Vitest or Jest + Testing Library)
- [ ] Add unit tests for:
  - [ ] UI components (Button, Navbar, Carousel, Gallery)
  - [ ] Forms (ReviewForm, ContactForm)
  - [ ] Zod validation schemas
- [ ] Add tests for server logic:
  - [ ] `/[locale]/reviews/actions.ts`
  - [ ] `/api/contact`
  - [ ] Mock Prisma in tests
- [ ] Add basic integration tests for key pages (home, gîte, reviews, contact)
- [ ] (Optional) Add Playwright/Cypress for end-to-end tests
- [ ] (Optional) Add GitHub Actions CI to run tests on push
