import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yonghejian.example.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/projects', '/about', '/contact']
  const locales = routing.locales
  const now = new Date()

  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: now,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/projects' ? 0.8 : 0.6,
      })
    }
  }

  return entries
}
