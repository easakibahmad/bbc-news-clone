import Header from '@/components/Header'

import '../styles/globals.css'

export const metadata = {
  title: 'BBC News Clone',
  description: 'A BBC News website clone built with Next.js',
}

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body >
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}