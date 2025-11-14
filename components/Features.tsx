'use client'

import { useEffect, useState } from 'react'

export default function Features() {
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

    const element = document.getElementById('features')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const whatsInside = [
    {
      title: 'Understanding Interview Psychology',
      description: 'Overcome anxiety and master the mental game',
      color: 'neo-blue',
      icon: '🧠',
    },
    {
      title: 'Crafting Strong Responses',
      description: 'Structured answers that impress hiring managers',
      color: 'neo-pink',
      icon: '💬',
    },
    {
      title: 'Building Personal Brand',
      description: 'Showcase your unique value effectively',
      color: 'neo-green',
      icon: '🎯',
    },
    {
      title: 'Body Language & Vocal Techniques',
      description: 'Confident presence backed by research',
      color: 'neo-yellow',
      icon: '🎭',
    },
    {
      title: 'Navigating Tough Situations',
      description: 'Handle panel interviews, virtual formats, and more',
      color: 'neo-blue',
      icon: '⚡',
    },
    {
      title: 'Salary Negotiations',
      description: 'Professional scripts from early to final stage',
      color: 'neo-pink',
      icon: '💼',
    },
  ]

  const whatReadersLearn = [
    {
      title: 'Strategic Interview Preparation',
      description: 'Prepare for any interview with a winning mindset',
      color: 'neo-green',
    },
    {
      title: 'Clear & Impactful Communication',
      description: 'Key techniques for answering questions with clarity',
      color: 'neo-yellow',
    },
    {
      title: 'Effective Storytelling',
      description: 'Showcase skills and experiences through compelling stories',
      color: 'neo-blue',
    },
    {
      title: 'Non-Verbal Mastery',
      description: 'Manage body language to boost confidence',
      color: 'neo-pink',
    },
    {
      title: 'Professional Negotiation',
      description: 'Negotiate salaries and benefits while maintaining professionalism',
      color: 'neo-green',
    },
    {
      title: 'Long-Term Success Framework',
      description: 'Build a system for continuous interview improvement',
      color: 'neo-yellow',
    },
  ]

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neo-bg via-white to-neo-blue/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-neo-pink/20 border-neo transform rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-neo-green/20 border-neo-lg transform -rotate-12 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* What's Inside Section */}
        <div className={`mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4 sm:mb-6">
              <span className="text-neo-pink transform inline-block rotate-1">WHAT'S</span>{' '}
              <span className="text-black transform inline-block">INSIDE</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 max-w-3xl mx-auto">
              Your complete toolkit for interview mastery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whatsInside.map((item, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`card-neo p-6 sm:p-8 h-full transition-all hover:scale-105 ${
                  item.color === 'neo-blue' ? 'bg-neo-blue/10 hover:bg-neo-blue/20' :
                  item.color === 'neo-pink' ? 'bg-neo-pink/10 hover:bg-neo-pink/20' :
                  item.color === 'neo-green' ? 'bg-neo-green/10 hover:bg-neo-green/20' :
                  'bg-neo-yellow/10 hover:bg-neo-yellow/20'
                }`}>
                  <div className="text-5xl sm:text-6xl mb-4 text-center">{item.icon}</div>
                  <h3 className={`text-xl sm:text-2xl font-black mb-3 text-center ${
                    item.color === 'neo-blue' ? 'text-neo-blue' :
                    item.color === 'neo-pink' ? 'text-neo-pink' :
                    item.color === 'neo-green' ? 'text-neo-green' :
                    'text-neo-yellow'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-gray-800 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Readers Will Learn Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4 sm:mb-6">
              <span className="text-neo-green transform inline-block -rotate-1">WHAT</span>{' '}
              <span className="text-black transform inline-block">YOU'LL</span>{' '}
              <span className="text-neo-blue transform inline-block rotate-1">LEARN</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 max-w-3xl mx-auto">
              Transform your interview skills with proven strategies
            </p>
          </div>

          {/* Asymmetric split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left column */}
            <div className="space-y-6 sm:space-y-8">
              {whatReadersLearn.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className={`card-neo p-6 sm:p-8 transition-all hover:scale-105 ${
                    item.color === 'neo-blue' ? 'bg-neo-blue/10 hover:bg-neo-blue/20' :
                    item.color === 'neo-pink' ? 'bg-neo-pink/10 hover:bg-neo-pink/20' :
                    item.color === 'neo-green' ? 'bg-neo-green/10 hover:bg-neo-green/20' :
                    'bg-neo-yellow/10 hover:bg-neo-yellow/20'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`text-3xl sm:text-4xl font-black flex-shrink-0 ${
                        item.color === 'neo-blue' ? 'text-neo-blue' :
                        item.color === 'neo-pink' ? 'text-neo-pink' :
                        item.color === 'neo-green' ? 'text-neo-green' :
                        'text-neo-yellow'
                      }`}>
                        {index + 1}.
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl sm:text-2xl font-black mb-2 ${
                          item.color === 'neo-blue' ? 'text-neo-blue' :
                          item.color === 'neo-pink' ? 'text-neo-pink' :
                          item.color === 'neo-green' ? 'text-neo-green' :
                          'text-neo-yellow'
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-base sm:text-lg font-semibold text-gray-800">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-6 sm:space-y-8 lg:mt-12">
              {whatReadersLearn.slice(3).map((item, index) => (
                <div
                  key={index + 3}
                  className={`transform transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${(index + 9) * 100}ms` }}
                >
                  <div className={`card-neo p-6 sm:p-8 bg-${item.color}/10 hover:bg-${item.color}/20 transition-all hover:scale-105`}>
                    <div className="flex items-start gap-4">
                      <div className={`text-3xl sm:text-4xl font-black text-${item.color} flex-shrink-0`}>
                        {index + 4}.
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl sm:text-2xl font-black mb-2 text-${item.color}`}>
                          {item.title}
                        </h3>
                        <p className="text-base sm:text-lg font-semibold text-gray-800">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className={`card-neo-lg p-8 sm:p-12 bg-gradient-to-r from-neo-yellow via-neo-pink to-neo-blue max-w-4xl mx-auto transform transition-all duration-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black mb-4 sm:mb-6 text-white">
                READY TO TRANSFORM YOUR INTERVIEW SUCCESS?
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 sm:mb-8">
                Join thousands of Malaysians who've mastered the art of job interviews
              </p>
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-neo-lg bg-white text-black font-black text-xl sm:text-2xl px-10 sm:px-16 py-5 sm:py-6 uppercase tracking-wider hover:bg-gray-100 active:scale-95 transition-transform"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

