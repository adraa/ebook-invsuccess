'use client'

import { useEffect, useState } from 'react'

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal' | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('pricing')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const features = [
    'Lifetime access & free updates',
    '50+ page step-by-step Interview Mastery system',
    'Full STAR method breakdown + real response samples',
    'Proven confidence-building exercises to calm nerves',
    'Strategic salary negotiation scripts (early to final stage)',
    'Body language & vocal control techniques backed by research',
    'Personal branding toolkit to stand out from other candidates',
    'Templates to handle tough interview formats (panel, virtual etc.)',
  ]

  const handleCheckout = async () => {
    if (!paymentMethod) {
      alert('Please select a payment method')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod,
          amount: 79,
          currency: 'MYR',
        }),
      })

      const data = await response.json()

      if (paymentMethod === 'stripe' && data.url) {
        window.location.href = data.url
      } else if (paymentMethod === 'paypal' && data.orderId) {
        // PayPal integration will be handled by PayPal SDK
        // This is a placeholder - actual implementation depends on PayPal setup
        window.location.href = data.url || '/success'
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neo-pink/10 via-white to-neo-green/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-neo-yellow/20 border-neo-lg transform rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-neo-blue/20 border-neo transform -rotate-12 hidden lg:block"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4 sm:mb-6">
              <span className="text-neo-yellow transform inline-block rotate-1">GET</span>{' '}
              <span className="text-black transform inline-block">YOUR</span>{' '}
              <span className="text-neo-pink transform inline-block -rotate-1">BLUEPRINT</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 max-w-3xl mx-auto">
              One-time investment for lifetime interview success
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-4xl mx-auto">
            <div className="card-neo-lg p-8 sm:p-12 bg-white">
              {/* Price Display */}
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-block transform -rotate-2 hover:rotate-0 transition-transform">
                  <div className="bg-neo-yellow border-neo-lg shadow-neo-lg p-6 sm:p-10">
                    <div className="text-sm sm:text-base font-bold uppercase tracking-wider mb-2">Special Price</div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-3xl sm:text-4xl font-black">RM</span>
                      <span className="text-6xl sm:text-7xl md:text-8xl font-display font-black">79</span>
                    </div>
                    <div className="text-sm sm:text-base font-semibold mt-2">One-time payment</div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-black text-center mb-6 sm:mb-8">
                  WHAT YOU GET:
                </h3>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-4 sm:p-5 border-neo-sm bg-gray-50 hover:bg-gray-100 transition-colors transform transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-neo-green border-2 border-black rounded-full flex items-center justify-center mt-1">
                      <span className="text-white font-black text-sm sm:text-base">✓</span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-gray-800 flex-1">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-black text-center mb-6 sm:mb-8">
                  CHOOSE PAYMENT METHOD:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <button
                    onClick={() => setPaymentMethod('stripe')}
                    className={`card-neo p-6 sm:p-8 text-center transition-all ${
                      paymentMethod === 'stripe'
                        ? 'bg-neo-blue text-white scale-105'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-4xl sm:text-5xl mb-3">💳</div>
                    <div className="font-black text-lg sm:text-xl mb-2">Credit/Debit Card</div>
                    <div className="text-sm sm:text-base font-semibold">Stripe Secure Payment</div>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('paypal')}
                    className={`card-neo p-6 sm:p-8 text-center transition-all ${
                      paymentMethod === 'paypal'
                        ? 'bg-neo-blue text-white scale-105'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-4xl sm:text-5xl mb-3">🅿️</div>
                    <div className="font-black text-lg sm:text-xl mb-2">PayPal</div>
                    <div className="text-sm sm:text-base font-semibold">Pay with PayPal Account</div>
                  </button>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  onClick={handleCheckout}
                  disabled={!paymentMethod || isLoading}
                  className={`btn-neo-lg bg-neo-green text-black font-black text-xl sm:text-2xl px-12 sm:px-20 py-5 sm:py-6 uppercase tracking-wider transition-all ${
                    !paymentMethod || isLoading
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-neo-green/90 active:scale-95'
                  }`}
                >
                  {isLoading ? 'Processing...' : 'Buy Now - RM79'}
                </button>
                <p className="text-sm sm:text-base font-semibold text-gray-600 mt-4 sm:mt-6">
                  🔒 Secure payment • Instant access • 30-day money-back guarantee
                </p>
              </div>

              {/* Trust badges */}
              <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔐</span>
                  <span className="font-bold">Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span className="font-bold">Instant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  <span className="font-bold">Lifetime Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💯</span>
                  <span className="font-bold">Money-Back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

