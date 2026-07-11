import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'MetadataProjects' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        en: '/en/projects',
        zh: '/zh/projects',
        'x-default': '/en/projects',
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

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
