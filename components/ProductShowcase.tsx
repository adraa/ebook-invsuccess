'use client'

import { useEffect, useState } from 'react'

export default function ProductShowcase() {
  const [isVisible, setIsVisible] = useState(false)

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

    const element = document.getElementById('showcase')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const highlights = [
    {
      title: 'Step-by-Step System',
      description: 'Complete 50+ page guide',
      color: 'neo-blue',
      icon: '📚',
    },
    {
      title: 'STAR Method',
      description: 'Real response samples included',
      color: 'neo-pink',
      icon: '⭐',
    },
    {
      title: 'Confidence Building',
      description: 'Proven exercises to calm nerves',
      color: 'neo-green',
      icon: '💪',
    },
    {
      title: 'Salary Negotiation',
      description: 'Strategic scripts for all stages',
      color: 'neo-yellow',
      icon: '💰',
    },
  ]

  return (
    <section id="showcase" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neo-yellow/10 border-neo-lg transform rotate-45 translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-neo-pink/10 border-neo transform -rotate-12 -translate-x-24 translate-y-24"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4 sm:mb-6">
              <span className="text-neo-blue transform inline-block -rotate-1">YOUR</span>{' '}
              <span className="text-black transform inline-block">COMPLETE</span>{' '}
              <span className="text-neo-pink transform inline-block rotate-1">INTERVIEW</span>{' '}
              <span className="text-neo-green transform inline-block -rotate-1">SYSTEM</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 max-w-3xl mx-auto">
              Everything you need to transform from nervous candidate to confident professional
            </p>
          </div>

          {/* Main showcase grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Left: eBook Visual */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="card-neo-lg p-6 sm:p-8 bg-gradient-to-br from-neo-blue via-neo-pink to-neo-green">
                    <div className="bg-white border-neo-lg p-8 sm:p-12 space-y-6">
                      {/* eBook Cover Design */}
                      <div className="aspect-[3/4] bg-gradient-to-br from-neo-yellow via-neo-pink to-neo-blue border-neo shadow-neo relative overflow-hidden">
                        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                          <div className="text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-black rounded-full mb-4 flex items-center justify-center">
                              <span className="text-3xl sm:text-4xl">💼</span>
                            </div>
                            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white mb-2">
                              INTERVIEW
                            </h3>
                            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white">
                              SUCCESS
                            </h3>
                          </div>
                          <div className="text-center">
                            <p className="text-white font-bold text-sm sm:text-base">BLUEPRINT</p>
                            <p className="text-white/80 text-xs sm:text-sm mt-2">For Malaysians</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Book details */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-neo-sm p-3 bg-neo-yellow/20">
                          <span className="font-bold text-sm sm:text-base">Pages:</span>
                          <span className="font-black text-lg sm:text-xl">50+</span>
                        </div>
                        <div className="flex items-center justify-between border-neo-sm p-3 bg-neo-blue/20">
                          <span className="font-bold text-sm sm:text-base">Format:</span>
                          <span className="font-black text-lg sm:text-xl">PDF</span>
                        </div>
                        <div className="flex items-center justify-between border-neo-sm p-3 bg-neo-pink/20">
                          <span className="font-bold text-sm sm:text-base">Updates:</span>
                          <span className="font-black text-lg sm:text-xl">Lifetime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Feature Highlights */}
            <div className="space-y-6 sm:space-y-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                <div 
                  className={`card-neo p-6 sm:p-8 transition-colors ${
                    highlight.color === 'neo-blue' ? 'bg-neo-blue/10 hover:bg-neo-blue/20' :
                    highlight.color === 'neo-pink' ? 'bg-neo-pink/10 hover:bg-neo-pink/20' :
                    highlight.color === 'neo-green' ? 'bg-neo-green/10 hover:bg-neo-green/20' :
                    'bg-neo-yellow/10 hover:bg-neo-yellow/20'
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className={`text-4xl sm:text-5xl flex-shrink-0`}>
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl sm:text-2xl md:text-3xl font-black mb-2 sm:mb-3 ${
                        highlight.color === 'neo-blue' ? 'text-neo-blue' :
                        highlight.color === 'neo-pink' ? 'text-neo-pink' :
                        highlight.color === 'neo-green' ? 'text-neo-green' :
                        'text-neo-yellow'
                      }`}>
                        {highlight.title}
                      </h3>
                        <p className="text-base sm:text-lg font-semibold text-gray-800">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { text: 'Body Language Techniques', color: 'neo-blue' },
              { text: 'Personal Branding Toolkit', color: 'neo-pink' },
              { text: 'Tough Situation Templates', color: 'neo-green' },
              { text: 'Virtual Interview Guide', color: 'neo-yellow' },
            ].map((item, index) => (
              <div
                key={index}
                className={`card-neo-sm p-4 sm:p-6 text-center transform hover:scale-105 transition-transform ${
                  item.color === 'neo-blue' ? 'bg-neo-blue/10' :
                  item.color === 'neo-pink' ? 'bg-neo-pink/10' :
                  item.color === 'neo-green' ? 'bg-neo-green/10' :
                  'bg-neo-yellow/10'
                }`}
              >
                <p className="font-bold text-sm sm:text-base lg:text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

