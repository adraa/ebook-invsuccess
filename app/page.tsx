import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <Features />
      <Pricing />
      <Footer />
    </main>
  )
}

