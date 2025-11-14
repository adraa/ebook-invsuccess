import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-neo-bg">
      <div className="max-w-2xl w-full">
        <div className="card-neo-lg p-8 sm:p-12 bg-white text-center">
          <div className="text-6xl sm:text-8xl mb-6">✅</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-4 sm:mb-6">
            PAYMENT SUCCESSFUL!
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-800 mb-8 sm:mb-12">
            Thank you for your purchase. Your eBook access will be sent to your email shortly.
          </p>
          <Link
            href="/"
            className="btn-neo bg-neo-green text-black font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 uppercase tracking-wider inline-block hover:bg-neo-green/90 active:scale-95 transition-transform"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}

