'use client'

import { useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ProjectCard from '@/components/projects/project-card'
import { projects, getLocalizedProject } from '@/lib/data'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'

type Props = {
  content: Record<string, string>
}

export default function ProjectsPageClient({ content }: Props) {
  const t = useTranslations('ProjectsPage')
  const locale = useLocale()

  const localizedProjects = useMemo(
    () => projects.map((project) => getLocalizedProject(project, locale as 'en' | 'zh')),
    [locale]
  )

  const allLabel = content.all ?? t('all')
  const categories = [allLabel, ...Array.from(new Set(localizedProjects.map((project) => project.category)))]
  const [activeCategory, setActiveCategory] = useState(allLabel)

  useEffect(() => {
    setActiveCategory(allLabel)
  }, [allLabel])

  const filteredProjects = activeCategory === allLabel
    ? localizedProjects
    : localizedProjects.filter((project) => project.category === activeCategory)

  return (
    <div className="pt-24">
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              {content.pageTitle ?? t('pageTitle')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {content.pageSubtitle ?? t('pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6">
                {content.featuredBadge ?? t('featuredBadge')}
              </Badge>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                {content.featuredTitle ?? t('featuredTitle')}
              </h2>
              <p className="text-muted-foreground mb-6">
                {content.featuredDesc ?? t('featuredDesc')}
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  content.featuredHighlight1 ?? t('featuredHighlight1'),
                  content.featuredHighlight2 ?? t('featuredHighlight2'),
                  content.featuredHighlight3 ?? t('featuredHighlight3'),
                ].map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/contact">
                  {content.featuredCta ?? t('featuredCta')}
                </Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Precision hardware mold customization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              {content.stepsTitle ?? t('stepsTitle')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {content.stepsSubtitle ?? t('stepsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: content.step1Title ?? t('step1Title'),
                description: content.step1Desc ?? t('step1Desc'),
              },
              {
                number: '02',
                title: content.step2Title ?? t('step2Title'),
                description: content.step2Desc ?? t('step2Desc'),
              },
              {
                number: '03',
                title: content.step3Title ?? t('step3Title'),
                description: content.step3Desc ?? t('step3Desc'),
              },
              {
                number: '04',
                title: content.step4Title ?? t('step4Title'),
                description: content.step4Desc ?? t('step4Desc'),
              },
            ].map((step, index) => (
              <div key={index} className="relative p-8 bg-card rounded-lg border border-border">
                <div className="text-5xl font-playfair font-bold text-muted/20 absolute top-4 right-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-6">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
              {content.ctaTitle ?? t('ctaTitle')}
            </h2>
            <p className="text-primary-foreground/80 text-xl mb-8">
              {content.ctaText ?? t('ctaText')}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                {content.ctaButton ?? t('ctaButton')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
