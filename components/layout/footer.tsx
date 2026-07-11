import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function Footer() {
  const t = useTranslations('Footer')
  const tNav = useTranslations('Nav')

  const navItems = [
    { name: tNav('home'), href: '/' },
    { name: tNav('projects'), href: '/projects' },
    { name: tNav('about'), href: '/about' },
    { name: tNav('contact'), href: '/contact' },
  ]

  const businessItems = [
    t('business1'),
    t('business2'),
    t('business3'),
    t('business4'),
    t('business5'),
  ]

  return (
    <footer className="bg-muted/30 py-16 mt-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold">{t('brand')}</h3>
            <p className="text-muted-foreground max-w-xs">
              {t('description')}
            </p>
            <div className="flex space-x-4 pt-2">
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">{t('navTitle')}</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">{t('businessTitle')}</h4>
            <ul className="space-y-3">
              {businessItems.map((item) => (
                <li key={item}>
                  <Link 
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">{t('contactTitle')}</h4>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>{t('address')}</p>
              <p>{t('established')}</p>
              <p className="pt-2">
                <a href="mailto:1****@qq.com" className="hover:text-foreground transition-colors">
                  1****@qq.com
                </a>
              </p>
              <p>
                <a href="tel:0769-83264959" className="hover:text-foreground transition-colors">
                  0769-83264959
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {t('copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('privacy')}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}