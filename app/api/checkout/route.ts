import { NextRequest, NextResponse } from 'next/server'
import { createStripeCheckoutSession, createPayPalOrder } from '@/lib/payments'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { paymentMethod, amount, currency } = body

    if (!paymentMethod || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (paymentMethod === 'stripe') {
      const session = await createStripeCheckoutSession(amount, currency)
      return NextResponse.json({ url: session.url, sessionId: session.id })
    } else if (paymentMethod === 'paypal') {
      const order = await createPayPalOrder(amount, currency)
      return NextResponse.json({ orderId: order.orderId, url: order.url })
    } else {
      return NextResponse.json(
        { error: 'Invalid payment method' },
        { status: 400 }
      )
    }
  } catch (error: any) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

