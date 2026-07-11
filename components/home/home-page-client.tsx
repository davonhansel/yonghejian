'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight, Users, ChartBar as BarChart, Code, PenTool } from 'lucide-react'
import ProjectCard from '@/components/projects/project-card'
import TestimonialSlider from '@/components/testimonial-slider'
import { projects, getLocalizedProject, testimonials, getLocalizedTestimonial } from '@/lib/data'
import ScrollButton from '@/components/scroll-button'
import { useTranslations, useLocale } from 'next-intl'
import { Link as I18nLink } from '@/i18n/navigation'

type Props = {
  content: Record<string, string>
}

export default function HomePageClient({ content }: Props) {
  const locale = useLocale()
  const t = useTranslations('HomePage')

  const localizedProjects = projects.slice(0, 3).map((project) => getLocalizedProject(project, locale as 'en' | 'zh'))
  const localizedTestimonials = testimonials.map((testimonial) => getLocalizedTestimonial(testimonial, locale as 'en' | 'zh'))

  return (
    <div className="flex flex-col w-full">
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/20 dark:from-background/95 dark:via-background/80 dark:to-background/95 z-10" />
          <Image
            src="https://img.xwyue.com/i/2026/07/10/6a509fe2c3423.webp?auto=compress&cs=tinysrgb&w=1600"
            alt="Industrial manufacturing background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1
              className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight break-words max-w-[90vw] md:max-w-3xl"
              dangerouslySetInnerHTML={{ __html: content.heroTitle ?? t('heroTitle') }}
            />
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
              {content.heroSubtitle ?? t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base min-w-[160px]" asChild>
                <I18nLink href="/projects">
                  {content.heroCta ?? t('heroCta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </I18nLink>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-white border border-blue-400 hover:bg-blue-50 min-w-[160px]" asChild>
                <I18nLink href="/contact">
                  {content.heroContact ?? t('heroContact')}
                </I18nLink>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <ScrollButton />
        </div>
      </section>

      <section id="services-section" className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="max-w-md mb-8 md:mb-0">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                {content.servicesTitle ?? t('servicesTitle')}
              </h2>
              <p className="text-muted-foreground whitespace-nowrap">
                {content.servicesSubtitle ?? t('servicesSubtitle')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PenTool className="h-10 w-10" />,
                title: content.service1Title ?? t('service1Title'),
                description: content.service1Desc ?? t('service1Desc'),
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: content.service2Title ?? t('service2Title'),
                description: content.service2Desc ?? t('service2Desc'),
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: content.service3Title ?? t('service3Title'),
                description: content.service3Desc ?? t('service3Desc'),
              },
              {
                icon: <BarChart className="h-10 w-10" />,
                title: content.service4Title ?? t('service4Title'),
                description: content.service4Desc ?? t('service4Desc'),
              },
            ].map((service, i) => (
              <div key={i} className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="max-w-md mb-8 md:mb-0">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                {content.projectsTitle ?? t('projectsTitle')}
              </h2>
              <p className="text-muted-foreground">
                {content.projectsSubtitle ?? t('projectsSubtitle')}
              </p>
            </div>
            <Button variant="outline" asChild>
              <I18nLink href="/projects">
                {content.projectsCta ?? t('projectsCta')}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </I18nLink>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
            {content.testimonialsTitle ?? t('testimonialsTitle')}
          </h2>

          <TestimonialSlider testimonials={localizedTestimonials} />
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
              {content.ctaTitle ?? t('ctaTitle')}
            </h2>
            <p className="text-primary-foreground/80 text-xl mb-8 max-w-xl mx-auto">
              {content.ctaText ?? t('ctaText')}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <I18nLink href="/contact">
                {content.ctaButton ?? t('ctaButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </I18nLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
