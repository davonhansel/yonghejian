import ContactClient from './ContactClient'
import getPageContent from '@/lib/content'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'MetadataContact' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: '/en/contact',
        zh: '/zh/contact',
        'x-default': '/en/contact',
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

export default async function Page({ params }: Props) {
  const { locale } = await params
  let page
  try {
    page = await getPageContent('contact', locale)
  } catch (e) {
    page = { frontmatter: {}, body: '' }
  }

  return <ContactClient content={page.frontmatter} />
}