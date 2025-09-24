import 'server-only'
import type { Locale } from '@/i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ja: () => import('@/dictionaries/ja.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
