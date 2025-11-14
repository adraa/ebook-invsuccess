# Interview Success Blueprint - Neo-Brutalist Landing Page

A highly creative, mobile-first neo-brutalist ecommerce landing page for the Interview Success Blueprint eBook, designed specifically for Malaysian job seekers.

## Features

- 🎨 **Neo-Brutalist Design**: Bold borders, vibrant colors, asymmetric layouts
- 📱 **Mobile-First**: Optimized for mobile devices with touch-friendly interactions
- ⚡ **Smooth Animations**: Scroll-triggered animations and smooth scrolling
- 💳 **Payment Integration**: Stripe and PayPal checkout support
- 🇲🇾 **Malaysian-Focused**: Designed with Malaysian context and colors

## Tech Stack

- Next.js 14+ (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Stripe (Payment processing)
- PayPal (Payment processing)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── checkout/        # Payment API routes
│   ├── success/             # Success page
│   ├── cancel/              # Cancel page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── ProductShowcase.tsx  # Product showcase
│   ├── Features.tsx         # Features section
│   ├── Pricing.tsx          # Pricing section
│   └── Footer.tsx           # Footer component
├── lib/
│   └── payments.ts          # Payment utilities
└── public/                  # Static assets
```

## Design System

### Colors
- **Neo Blue**: #00D9FF
- **Neo Pink**: #FF006E
- **Neo Green**: #39FF14
- **Neo Yellow**: #FFD700
- **Background**: #FFF8E7
- **Black**: #000000

### Typography
- **Display Font**: Black Ops One (for headings)
- **Body Font**: Rubik (for body text)

### Neo-Brutalist Elements
- Thick black borders (4-8px)
- Hard drop shadows
- High contrast colors
- Asymmetric layouts
- Bold typography

## Payment Setup

### Stripe
1. Create a Stripe account
2. Get your API keys from the Stripe dashboard
3. Add `STRIPE_SECRET_KEY` to `.env.local`

### PayPal
1. Create a PayPal Business account
2. Set up PayPal SDK (implementation needed in `lib/payments.ts`)
3. Configure PayPal credentials

## Deployment

### Cloudflare Pages
1. Push your code to GitHub
2. In Cloudflare Pages dashboard, create a new project
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build:cf`
   - **Build output directory**: `.vercel/output/static`
5. Add environment variables in Cloudflare Pages dashboard
6. Deploy!

**Note**: The `build` script only runs `next build` to prevent recursive build errors when `@cloudflare/next-on-pages` runs `vercel build` internally. Use `build:cf` for Cloudflare Pages deployments.

### Vercel
1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy! (Uses `npm run build` which only runs `next build`)

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette.

### Content
Update component files in `components/` to modify content.

### Styling
Modify `app/globals.css` for global style changes.

## License

This project is private and proprietary.

## Support

For support, email support@interviewsuccess.com

