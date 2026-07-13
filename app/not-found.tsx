'use client'

import { useEffect, useState } from 'react'
import { NextIntlClientProvider, useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import enMessages from '@/messages/en.json'
import zhMessages from '@/messages/zh.json'

type AppLocale = 'en' | 'zh'

const messagesMap: Record<AppLocale, typeof enMessages> = {
  en: enMessages,
  zh: zhMessages,
}

function NotFoundView() {
  const t = useTranslations('NotFound')
  const router = useRouter()

  const handleGoHome = () => {
    router.push('/')
  }

  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 text-primary"
            >
              <Compass className="h-12 w-12" />
            </motion.div>
            <motion.span
              className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              ?
            </motion.span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text font-playfair text-7xl font-bold tracking-tight text-transparent sm:text-8xl"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-2xl font-semibold sm:text-3xl"
        >
          {t('heading')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-4 max-w-md text-muted-foreground"
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={cn('mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row')}
        >
          <Button
            onClick={handleGoHome}
            className={cn('min-h-[44px] w-full sm:w-auto')}
          >
            <Home className="mr-2 h-4 w-4" />
            {t('home')}
          </Button>
          <Button
            variant="outline"
            onClick={handleGoBack}
            className={cn('min-h-[44px] w-full sm:w-auto')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back')}
          </Button>
        </motion.div>
      </div>
    </main>
  )
}

export default function NotFound() {
  const [locale, setLocale] = useState<AppLocale>('en')

  useEffect(() => {
    const nav = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : 'en'
    if (nav.startsWith('zh')) {
      setLocale('zh')
    }
  }, [])

  const messages = messagesMap[locale]

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <title>{messages.NotFound.metaTitle}</title>
        <meta name="description" content={messages.NotFound.metaDescription} />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={cn('font-sans bg-background text-foreground')}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <NotFoundView />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
