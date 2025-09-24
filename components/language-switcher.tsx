'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/i18n-config'

export default function LanguageSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex items-center gap-3">
      {i18n.locales.map((locale, index) => {
        return (
          <>
            <Link
              key={locale}
              href={redirectedPathName(locale)}
              className="text-sm font-medium uppercase hover:text-fg transition-colors"
            >
              {locale}
            </Link>
            {index < i18n.locales.length - 1 && <span className="text-sm text-muted">/</span>}
          </>
        )
      })}
    </div>
  )
}
