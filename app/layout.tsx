import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'Haruka – Portfolio',
    template: '%s | Haruka – Portfolio',
  },
  description: 'Design × Research × Code',
  metadataBase: new URL('https://haruka08030.github.io'),
  openGraph: {
    title: 'Haruka – Portfolio',
    description: 'Design × Research × Code',
    type: 'website',
    url: 'https://haruka08030.github.io',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'Haruka – Portfolio',
      },
    ],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">
        <header className="border-b border-border/80 bg-[var(--bg)]/60 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/60 sticky top-0 z-50">
          <div className="container flex h-14 items-center justify-between">
            <a href="#" className="font-serif text-xl tracking-tight">Haruka</a>
            <nav className="flex items-center gap-6 text-sm text-muted">
              <a href="#projects" className="hover:text-fg transition-colors">Projects</a>
              <a href="#contact" className="hover:text-fg transition-colors">Contact</a>
              <a href="https://github.com/haruka08030" target="_blank" rel="noreferrer" className="hover:text-fg transition-colors">GitHub</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-border mt-24">
          <div className="container py-10 text-sm text-muted">© {new Date().getFullYear()} Haruka Sugiyama</div>
        </footer>
      </body>
    </html>
  )
}

