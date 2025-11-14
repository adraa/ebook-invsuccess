# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file in the root directory with:
   ```
   STRIPE_SECRET_KEY=sk_test_your_key_here
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Payment Setup

### Stripe
1. Sign up at [stripe.com](https://stripe.com)
2. Get your test API keys from the dashboard
3. Add `STRIPE_SECRET_KEY` to `.env.local`
4. For production, use live keys

### PayPal
1. Create a PayPal Business account
2. Get your client ID and secret
3. Update `lib/payments.ts` with PayPal SDK integration
4. Add PayPal credentials to `.env.local`

## Customization

- **Colors**: Edit `tailwind.config.js`
- **Content**: Update component files in `components/`
- **Styling**: Modify `app/globals.css`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The app is ready to deploy to:
- Vercel (recommended for Next.js)
- Netlify
- Any platform supporting Next.js

