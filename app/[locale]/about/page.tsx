import { getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import getPageContent from '@/lib/content'
import AboutPageClient from '@/components/about/about-page-client'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'MetadataAbout' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: '/en/about',
        zh: '/zh/about',
        'x-default': '/en/about',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  let page
  try {
    page = await getPageContent('about', locale)
  } catch {
    page = { frontmatter: {}, body: '' }
  }

  return <AboutPageClient content={page.frontmatter} />
}