'use client'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-neo-blue/20 border-neo transform rotate-45 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-neo-pink/20 border-neo-lg transform -rotate-12 translate-x-20 translate-y-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-black mb-4 sm:mb-6 text-neo-yellow">
              INTERVIEW SUCCESS
            </h3>
            <p className="text-base sm:text-lg font-semibold text-gray-300 mb-4">
              Master job interviews with proven strategies designed for Malaysian job seekers.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-neo-blue border-2 border-white flex items-center justify-center text-2xl hover:bg-neo-blue/80 transition-colors"
                aria-label="Facebook"
              >
                <span>📘</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-neo-pink border-2 border-white flex items-center justify-center text-2xl hover:bg-neo-pink/80 transition-colors"
                aria-label="Instagram"
              >
                <span>📷</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-neo-green border-2 border-white flex items-center justify-center text-2xl hover:bg-neo-green/80 transition-colors"
                aria-label="LinkedIn"
              >
                <span>💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-neo-blue uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="#showcase"
                  className="text-base sm:text-lg font-bold text-gray-300 hover:text-neo-yellow transition-colors inline-block"
                >
                  → Product Details
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-base sm:text-lg font-bold text-gray-300 hover:text-neo-yellow transition-colors inline-block"
                >
                  → What's Inside
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-base sm:text-lg font-bold text-gray-300 hover:text-neo-yellow transition-colors inline-block"
                >
                  → Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base sm:text-lg font-bold text-gray-300 hover:text-neo-yellow transition-colors inline-block"
                >
                  → Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-neo-pink uppercase">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-base sm:text-lg font-bold text-gray-300">Email</p>
                  <a
                    href="mailto:support@interviewsuccess.com"
                    className="text-sm sm:text-base text-gray-400 hover:text-neo-yellow transition-colors"
                  >
                    support@interviewsuccess.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-base sm:text-lg font-bold text-gray-300">Location</p>
                  <p className="text-sm sm:text-base text-gray-400">Malaysia</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="text-base sm:text-lg font-bold text-gray-300">Support</p>
                  <p className="text-sm sm:text-base text-gray-400">24/7 Email Support</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-white pt-8 sm:pt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
            <p className="text-sm sm:text-base font-bold text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} Interview Success Blueprint. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
              <a
                href="#"
                className="font-bold text-gray-400 hover:text-neo-yellow transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-bold text-gray-400 hover:text-neo-yellow transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-bold text-gray-400 hover:text-neo-yellow transition-colors"
              >
                Refund Policy
              </a>
            </div>
          </div>

          {/* Malaysian flag accent */}
          <div className="mt-8 sm:mt-12 flex items-center justify-center gap-2">
            <div className="w-16 h-10 sm:w-20 sm:h-12 bg-gradient-to-r from-malaysian-red via-malaysian-yellow to-malaysian-blue border-2 border-white shadow-neo-sm"></div>
            <p className="text-sm sm:text-base font-bold text-gray-400 ml-2">
              Made with ❤️ for Malaysians
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

