import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Success Blueprint - Master Job Interviews in Malaysia',
  description: 'Master job interviews with proven strategies for confidence, communication, and personal branding. Step-by-step guide designed for Malaysian job seekers to secure their dream offers.',
  keywords: 'interview success, job interview, Malaysia, career guide, interview tips, job hunting Malaysia',
  authors: [{ name: 'Interview Success Blueprint' }],
  openGraph: {
    title: 'Interview Success Blueprint - Master Job Interviews',
    description: 'Master job interviews with proven strategies designed for Malaysian job seekers.',
    type: 'website',
    locale: 'en_MY',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#00D9FF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

