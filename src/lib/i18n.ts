import en from '../i18n/en.json';
import pt from '../i18n/pt.json';

export type Locale = 'en' | 'pt';
type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, pt };

export function useTranslations(locale: string | undefined) {
  const lang = (locale ?? 'en') as Locale;
  const dict = translations[lang] ?? translations.en;

  function t(key: string): string {
    const value = key.split('.').reduce((obj: any, k) => obj?.[k], dict);
    return typeof value === 'string' ? value : key;
  }

  function td<T = any>(key: string): T {
    return key.split('.').reduce((obj: any, k) => obj?.[k], dict) as T;
  }

  return { t, td, locale: lang };
}

export function localizeHref(href: string, locale: string | undefined): string {
  if (!locale || locale === 'en') return href;
  return `/${locale}${href}`;
}
