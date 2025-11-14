import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
})

export interface CheckoutSessionData {
  paymentMethod: 'stripe' | 'paypal'
  amount: number
  currency: string
}

export async function createStripeCheckoutSession(
  amount: number,
  currency: string = 'MYR'
) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: 'Interview Success Blueprint eBook',
            description: 'Complete guide to mastering job interviews in Malaysia',
            images: [],
          },
          unit_amount: amount * 100, // Convert to cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/cancel`,
    metadata: {
      product: 'interview-success-blueprint',
    },
  })

  return session
}

export async function createPayPalOrder(amount: number, currency: string = 'MYR') {
  // PayPal integration would go here
  // This is a placeholder - actual implementation requires PayPal SDK setup
  // For now, return a mock order ID
  return {
    orderId: 'mock-paypal-order-id',
    url: '/success',
  }
}

