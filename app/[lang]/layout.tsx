import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import { Github, Mail, Linkedin } from 'lucide-react'
import { i18n, type Locale } from '@/i18n-config'
import LanguageSwitcher from '@/components/language-switcher'
import { getDictionary } from '@/lib/get-dictionary'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang)
  const title = dictionary.page.hero.title
  const description = dictionary.page.hero.subtitle

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    metadataBase: new URL('https://haruka08030.github.io'),
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      url: `https://haruka08030.github.io/${params.lang}`,
      images: [
        {
          url: '/og.svg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    icons: {
      icon: '/favicon.svg',
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang} className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased flex flex-col">
        <header className="border-b border-border/80 bg-[var(--bg)]/60 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/60 sticky top-0 z-50">
          <div className="container flex h-14 items-center justify-between">
            <Link href={`/${params.lang}`} className="font-serif text-xl tracking-tight">
              Haruka
            </Link>
            <nav className="flex items-center gap-4 md:gap-6 text-sm text-muted">
              <Link href={`/${params.lang}#projects`} className="hover:text-fg transition-colors hidden md:block">
                {dictionary.page.projects.title}
              </Link>
              <Link href={`/${params.lang}#contact`} className="hover:text-fg transition-colors hidden md:block">
                {dictionary.page.hero.contact}
              </Link>
              <a
                href="https://github.com/haruka08030"
                target="_blank"
                rel="noreferrer"
                className="hover:text-fg transition-colors hidden md:block"
              >
                GitHub
              </a>
              <LanguageSwitcher />
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border mt-24">
          <div className="container py-10 flex items-center justify-between">
            <div className="text-sm text-muted">© {new Date().getFullYear()} Haruka Sugiyama</div>
            <div className="flex items-center gap-4 text-muted">
              <a
                href="https://www.linkedin.com/in/haruka-sugiyama-a78510305/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="hover:text-fg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:haruka08030@gmail.com" aria-label="Email" className="hover:text-fg transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/haruka08030"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="hover:text-fg transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
