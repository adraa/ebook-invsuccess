'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing')
    pricingSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neo-bg via-white to-neo-yellow/20 px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      {/* Decorative geometric shapes */}
      <div className="absolute top-10 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-neo-blue border-neo shadow-neo rotate-12 opacity-80 z-0"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-neo-pink border-neo shadow-neo -rotate-12 opacity-80 z-0"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-neo-green border-neo shadow-neo rotate-45 opacity-70 z-0"></div>

      <div className={`relative z-10 max-w-7xl mx-auto w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Malaysian flag colors accent */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="w-12 h-8 sm:w-16 sm:h-10 bg-gradient-to-r from-malaysian-red via-malaysian-yellow to-malaysian-blue border-neo-sm shadow-neo-sm"></div>
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-gray-700">Made for Malaysians</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-tight">
              <span className="block text-neo-blue -rotate-1 transform inline-block">MASTER</span>
              <span className="block text-neo-pink rotate-1 transform inline-block ml-4 sm:ml-8">YOUR</span>
              <span className="block text-black transform inline-block -ml-2 sm:-ml-4">INTERVIEW</span>
              <span className="block text-neo-green rotate-1 transform inline-block ml-6 sm:ml-12">SUCCESS</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The <span className="text-neo-pink border-b-4 border-black">complete blueprint</span> to ace job interviews and land your dream role in Malaysia
            </p>

            <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
              Proven strategies for confidence, communication, and personal branding. Stand out from the competition and secure the offers you deserve.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
              <button
                onClick={scrollToPricing}
                className="btn-neo bg-neo-yellow text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 uppercase tracking-wider hover:bg-yellow-400 active:scale-95 transition-transform"
              >
                Get Your Copy Now
              </button>
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-neo bg-white text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 uppercase tracking-wider hover:bg-gray-100 active:scale-95 transition-transform"
              >
                Learn More
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="font-semibold">50+ Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="font-semibold">Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="font-semibold">Free Updates</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* eBook mockup card */}
              <div className="card-neo p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-neo-blue via-neo-pink to-neo-green">
                <div className="bg-white border-neo-sm p-6 sm:p-8 space-y-4">
                  <div className="w-full h-48 sm:h-64 bg-gradient-to-r from-neo-yellow to-neo-pink border-neo-sm"></div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-center">
                    INTERVIEW SUCCESS
                  </h3>
                  <h4 className="font-bold text-lg sm:text-xl text-center text-gray-700">
                    BLUEPRINT
                  </h4>
                  <div className="flex justify-center gap-2 pt-4">
                    <div className="w-3 h-3 bg-neo-blue border-2 border-black rounded-full"></div>
                    <div className="w-3 h-3 bg-neo-pink border-2 border-black rounded-full"></div>
                    <div className="w-3 h-3 bg-neo-green border-2 border-black rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-neo-yellow border-neo shadow-neo-lg p-3 sm:p-4 transform -rotate-12">
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-bold">SPECIAL</div>
                  <div className="text-lg sm:text-2xl font-black">RM79</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

